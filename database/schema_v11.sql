-- LIVE LANGUAGE COACH - schema v11 (run AFTER schema_v10.sql; safe to run more than once)
-- Adds: richer demographics at registration and at live-session guest join (optional, per session),
-- a confidence meter (1-10) for live activities, and a separate "Normal quizzes" category in the library.

-- ================================================================ registration: subject, study level, locality
alter table public.student_profiles add column if not exists subject text;
alter table public.student_profiles add column if not exists study_level text not null default 'UG' check(study_level in ('UG','PG'));
alter table public.student_profiles add column if not exists locality text check(locality in ('Rural','Urban'));

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$
declare m jsonb:=coalesce(new.raw_user_meta_data,'{}'::jsonb); r text; b_year int;
begin
  select role into r from public.role_invites where lower(email)=lower(new.email);
  b_year:=case when (m->>'birth_year') ~ '^(19[5-9][0-9]|20(0[0-9]|1[0-5]))$' then (m->>'birth_year')::int end;
  insert into public.profiles(id,display_name,full_name,email,mobile,role)
    values(new.id,coalesce(m->>'full_name',''),m->>'full_name',new.email,m->>'mobile',coalesce(r,'student')) on conflict(id) do nothing;
  insert into public.student_profiles(user_id,age,birth_year,place,gender,year,college,student_no,subject,study_level,locality,consent_email,consent_whatsapp,consent_research)
    values(new.id,
      coalesce(case when (m->>'age') ~ '^\d{1,2}$' then (m->>'age')::int end, case when b_year is not null then extract(year from now())::int-b_year end),
      b_year, m->>'place', m->>'gender',
      case when (m->>'year') ~ '^[123]$' then (m->>'year')::int end, m->>'college', m->>'student_no',
      nullif(trim(m->>'subject'),''), coalesce(nullif(m->>'study_level',''),'UG'), nullif(m->>'locality',''),
      coalesce((m->>'consent_email')='true',true), coalesce((m->>'consent_whatsapp')='true',false), coalesce((m->>'consent_research')='true',false))
    on conflict(user_id) do nothing;
  if r is not null then delete from public.role_invites where lower(email)=lower(new.email); end if;
  return new;
end $$;

-- ================================================================ "Normal quizzes": a category outside the research sequence
do $$ declare c text; begin
  for c in select conname from pg_constraint where conrelid='public.activities'::regclass and contype='c' and pg_get_constraintdef(oid) like '%purpose%' loop
    execute format('alter table public.activities drop constraint %I',c);
  end loop;
end $$;
alter table public.activities add constraint activities_purpose_check check(purpose in ('anxiety','pre_questionnaire','pretest','intervention','posttest','post_questionnaire','practice','live','general'));

create or replace function public.trg_inbox_activity() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if new.status='published' and (tg_op='INSERT' or old.status<>'published') and new.purpose not in ('anxiety','live') then
    perform public.notify(public.ids_of(array['student']),'activity','New: '||new.title,
      case when new.purpose='practice' then 'Find it under Practice.' when new.purpose='general' then 'Find it under Normal quizzes.' else 'Find it in the Research tab.' end,
      jsonb_build_object('tab',case when new.purpose='practice' then 'practice' when new.purpose='general' then 'general' else 'dash' end));
  end if; return new;
end $$;

-- ================================================================ per-session toggles: collect guest details, ask for confidence
alter table public.sessions add column if not exists collect_profile boolean not null default false;
alter table public.sessions add column if not exists ask_confidence boolean not null default false;
alter table public.live_games add column if not exists collect_profile boolean not null default false;
alter table public.live_games add column if not exists ask_confidence boolean not null default false;

-- guest/participant demographic answers, only filled in when the session asked for them
alter table public.responses add column if not exists g_subject text;
alter table public.responses add column if not exists g_study_level text;
alter table public.responses add column if not exists g_year int;
alter table public.responses add column if not exists g_locality text;
alter table public.responses add column if not exists g_gender text;
alter table public.responses add column if not exists g_native text;
alter table public.responses add column if not exists g_consent boolean;
alter table public.responses add column if not exists confidence int check(confidence is null or confidence between 1 and 10);

alter table public.live_players add column if not exists g_subject text;
alter table public.live_players add column if not exists g_study_level text;
alter table public.live_players add column if not exists g_year int;
alter table public.live_players add column if not exists g_locality text;
alter table public.live_players add column if not exists g_gender text;
alter table public.live_players add column if not exists g_native text;
alter table public.live_players add column if not exists g_consent boolean;

alter table public.live_answers add column if not exists confidence int check(confidence is null or confidence between 1 and 10);

-- host-only export of the optional guest demographic details for one live quiz
create or replace function public.live_guest_csv(p_game uuid) returns table(name text,is_guest boolean,score int,g_subject text,g_study_level text,g_year int,g_locality text,g_gender text,g_native text,g_consent boolean,avg_confidence numeric)
language sql stable security definer set search_path=public as $$
  select p.name,p.is_guest,p.score,p.g_subject,p.g_study_level,p.g_year,p.g_locality,p.g_gender,p.g_native,p.g_consent,
    (select round(avg(a.confidence),1) from public.live_answers a where a.game_id=p.game_id and a.player_id=p.player_id and a.confidence is not null)
  from public.live_players p
  where p.game_id=p_game and exists(select 1 from public.live_games g where g.id=p_game and g.host_id=auth.uid())
  order by p.score desc,p.name
$$;
revoke all on function public.live_guest_csv(uuid) from public,anon; grant execute on function public.live_guest_csv(uuid) to authenticated;

-- ---------------------------------------------------------------- live_host: create with the two toggles
drop function if exists public.live_host(uuid,int);
create or replace function public.live_host(p_activity uuid,p_seconds int,p_collect_profile boolean default false,p_ask_confidence boolean default false) returns json language plpgsql security definer set search_path=public as $$
declare a public.activities; g public.live_games; c text;
begin
  if not public.is_instructor() then raise exception 'Not allowed'; end if;
  select * into a from public.activities where id=p_activity and kind in ('quiz','reading'); if not found then raise exception 'Choose a quiz'; end if;
  if jsonb_array_length(a.questions)=0 then raise exception 'This quiz has no questions'; end if;
  loop c:=lpad((floor(random()*1000000))::int::text,6,'0'); exit when not exists(select 1 from public.live_games where code=c) and not exists(select 1 from public.sessions where code=c); end loop;
  insert into public.live_games(code,activity_id,host_id,title,n,seconds,collect_profile,ask_confidence) values(c,a.id,auth.uid(),a.title,jsonb_array_length(a.questions),greatest(5,least(coalesce(p_seconds,20),300)),coalesce(p_collect_profile,false),coalesce(p_ask_confidence,false)) returning * into g;
  return row_to_json(g);
end $$;

-- ---------------------------------------------------------------- live_lookup: tell the guest whether a details form is needed before joining
create or replace function public.live_lookup(p_code text) returns json language sql stable security definer set search_path=public as $$
  select json_build_object('title',title,'collect_profile',collect_profile) from public.live_games where code=trim(p_code) and phase<>'ended' limit 1 $$;
revoke all on function public.live_lookup(text) from public; grant execute on function public.live_lookup(text) to anon,authenticated;

-- ---------------------------------------------------------------- live_join_guest: optional demographic details
drop function if exists public.live_join_guest(text,text);
create or replace function public.live_join_guest(p_code text,p_name text,p_subject text default null,p_study_level text default null,p_year int default null,p_locality text default null,p_gender text default null,p_native text default null,p_consent boolean default null) returns json language plpgsql security definer set search_path=public as $$
declare g public.live_games; pid uuid; tok text:=replace(gen_random_uuid()::text,'-','')||replace(gen_random_uuid()::text,'-','');
begin
  select * into g from public.live_games where code=trim(p_code) and phase<>'ended'; if not found then raise exception 'No live quiz with that code'; end if;
  if coalesce(length(trim(p_name)),0)<2 then raise exception 'Type your name to join'; end if;
  if (select count(*) from public.live_players where game_id=g.id)>=600 then raise exception 'This quiz is full'; end if;
  if g.collect_profile and not(coalesce(trim(p_subject),'')<>'' and p_study_level in ('UG','PG') and p_year between 1 and 3 and p_locality in ('Rural','Urban') and coalesce(trim(p_gender),'')<>'' and coalesce(trim(p_native),'')<>'' and p_consent is true) then
    raise exception 'Please fill in every field and give your consent to join';
  end if;
  insert into public.live_players(game_id,student_id,name,is_guest,guest_token,g_subject,g_study_level,g_year,g_locality,g_gender,g_native,g_consent)
    values(g.id,null,left(trim(p_name),40),true,tok,nullif(trim(p_subject),''),p_study_level,p_year,p_locality,nullif(trim(p_gender),''),nullif(trim(p_native),''),p_consent)
    returning player_id into pid;
  return json_build_object('game',g.id,'player',pid,'token',tok);
end $$;
revoke all on function public.live_join_guest(text,text,text,text,int,text,text,text,boolean) from public;
grant execute on function public.live_join_guest(text,text,text,text,int,text,text,text,boolean) to anon,authenticated;

-- ---------------------------------------------------------------- confidence on each live-quiz answer
drop function if exists public.live_record(uuid,uuid,uuid,jsonb);
create or replace function public.live_record(p_game uuid,p_player uuid,p_student uuid,p_answer jsonb,p_confidence int default null) returns json language plpgsql security definer set search_path=public as $$
declare g public.live_games; k jsonb; c boolean; pts int:=0; left_ numeric;
begin
  select * into g from public.live_games where id=p_game and phase='question'; if not found then raise exception 'Time is up for this question'; end if;
  left_:=g.seconds-extract(epoch from now()-g.q_started_at);
  if left_<-1 then raise exception 'Time is up for this question'; end if;
  select keys->g.q_index into k from public.activity_keys where activity_id=g.activity_id;
  c:=public.q_correct(k,p_answer);
  if c then pts:=500+round(500*greatest(0,least(1,left_/g.seconds)))::int; end if;
  insert into public.live_answers(game_id,player_id,student_id,q_index,answer,correct,points,confidence) values(g.id,p_player,p_student,g.q_index,p_answer,c,pts,case when g.ask_confidence then p_confidence else null end);
  update public.live_players set score=score+pts where game_id=g.id and player_id=p_player;
  return json_build_object('received',true);
exception when unique_violation then raise exception 'You have already answered';
end $$;
revoke all on function public.live_record(uuid,uuid,uuid,jsonb,int) from public,anon,authenticated;

drop function if exists public.live_answer(uuid,jsonb);
create or replace function public.live_answer(p_game uuid,p_answer jsonb,p_confidence int default null) returns json language plpgsql security definer set search_path=public as $$
declare pid uuid;
begin
  select player_id into pid from public.live_players where game_id=p_game and student_id=auth.uid(); if pid is null then raise exception 'Join the quiz first'; end if;
  return public.live_record(p_game,pid,auth.uid(),p_answer,p_confidence);
end $$;

drop function if exists public.live_answer_guest(uuid,uuid,text,jsonb);
create or replace function public.live_answer_guest(p_game uuid,p_player uuid,p_token text,p_answer jsonb,p_confidence int default null) returns json language plpgsql security definer set search_path=public as $$
begin
  if not exists(select 1 from public.live_players where game_id=p_game and player_id=p_player and is_guest and guest_token=p_token) then raise exception 'Join the quiz first'; end if;
  return public.live_record(p_game,p_player,null,p_answer,p_confidence);
end $$;
revoke all on function public.live_answer(uuid,jsonb,int) from public,anon; grant execute on function public.live_answer(uuid,jsonb,int) to authenticated;
revoke all on function public.live_answer_guest(uuid,uuid,text,jsonb,int) from public; grant execute on function public.live_answer_guest(uuid,uuid,text,jsonb,int) to anon,authenticated;

-- live_state: also tell the player's own screen whether a confidence prompt is expected
create or replace function public.live_state(p_game uuid,p_player uuid default null,p_token text default null) returns json language plpgsql stable security definer set search_path=public as $$
declare g public.live_games; me uuid;
begin
  select * into g from public.live_games where id=p_game; if not found then return null; end if;
  if p_player is not null then select player_id into me from public.live_players where game_id=g.id and player_id=p_player and guest_token=p_token;
  elsif auth.uid() is not null then select player_id into me from public.live_players where game_id=g.id and student_id=auth.uid(); end if;
  return json_build_object(
    'game',json_build_object('id',g.id,'code',g.code,'title',g.title,'q_index',g.q_index,'n',g.n,'seconds',g.seconds,'phase',g.phase,'q_started_at',g.q_started_at,'current',g.current,'reveal',g.reveal,'ask_confidence',g.ask_confidence,'collect_profile',g.collect_profile),
    'server_now',now(),
    'count',(select count(*) from public.live_players where game_id=g.id),
    'players',coalesce((select json_agg(x) from (select player_id,public.short_name(name) as name,score,is_guest,player_id=me as me from public.live_players where game_id=g.id order by score desc,name limit 10) x),'[]'::json),
    'me',(select json_build_object('player_id',player_id,'name',public.short_name(name),'score',score,'rank',(select count(*)+1 from public.live_players q where q.game_id=g.id and q.score>p.score)) from public.live_players p where p.game_id=g.id and p.player_id=me),
    'mine',coalesce((select json_agg(json_build_object('q_index',q_index,'correct',correct,'points',points)) from public.live_answers where game_id=g.id and player_id=me),'[]'::json));
end $$;

-- ---------------------------------------------------------------- poll/word/open: optional details + confidence
drop function if exists public.get_public_session(text);
create or replace function public.get_public_session(join_code text)
returns table(session_id uuid,session_title text,session_prompt text,activity_type text,activity_options jsonb,session_open boolean,anonymous_allowed boolean,ends_at timestamptz,server_now timestamptz,collect_profile boolean,ask_confidence boolean)
language sql stable security definer set search_path=public as $$
  select id,title,prompt,activity_type,options,is_open,true,ends_at,now(),collect_profile,ask_confidence from public.sessions where code=trim(join_code) limit 1 $$;
revoke all on function public.get_public_session(text) from public;
grant execute on function public.get_public_session(text) to anon,authenticated;

drop function if exists public.submit_session_response(text,text,text);
create or replace function public.submit_session_response(join_code text,answer_text text,display_name text default null,p_subject text default null,p_study_level text default null,p_year int default null,p_locality text default null,p_gender text default null,p_native text default null,p_consent boolean default null,p_confidence int default null)
returns jsonb language plpgsql security definer set search_path=public as $$
declare s public.sessions%rowtype; rid uuid;
begin
 select * into s from public.sessions where code=trim(join_code) for share;
 if not found then raise exception 'Session code not found'; end if;
 if not s.is_open then raise exception 'This activity is closed'; end if;
 if s.ends_at is not null and now()>s.ends_at+interval '2 seconds' then raise exception 'Time is up for this activity'; end if;
 if auth.uid() is null and coalesce(length(trim(display_name)),0)<2 then raise exception 'Type your name first'; end if;
 if length(trim(coalesce(answer_text,'')))=0 or length(answer_text)>3000 then raise exception 'Response is empty or too long'; end if;
 if s.activity_type in ('poll','quiz') and not(s.options ? answer_text) then raise exception 'Invalid answer option'; end if;
 if s.collect_profile and not(coalesce(trim(p_subject),'')<>'' and p_study_level in ('UG','PG') and p_year between 1 and 3 and p_locality in ('Rural','Urban') and coalesce(trim(p_gender),'')<>'' and coalesce(trim(p_native),'')<>'' and p_consent is true) then
   raise exception 'Please fill in every field and give your consent to join';
 end if;
 insert into public.responses(session_id,participant_id,participant_name,answer,is_anonymous,g_subject,g_study_level,g_year,g_locality,g_gender,g_native,g_consent,confidence)
 values(s.id,auth.uid(),left(nullif(trim(display_name),''),40),trim(answer_text),auth.uid() is null,
   nullif(trim(p_subject),''),p_study_level,p_year,p_locality,nullif(trim(p_gender),''),nullif(trim(p_native),''),p_consent,case when s.ask_confidence then p_confidence else null end)
 returning id into rid;
 return jsonb_build_object('accepted',true,'response_id',rid);
end $$;
revoke all on function public.submit_session_response(text,text,text,text,text,int,text,text,text,boolean,int) from public;
grant execute on function public.submit_session_response(text,text,text,text,text,int,text,text,text,boolean,int) to anon,authenticated;
