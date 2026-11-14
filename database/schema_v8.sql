-- LIVE LANGUAGE COACH - schema v8 (run AFTER schema_v7.sql; safe to run more than once)
-- Roles: only Researcher, Professor (stored as 'teacher') and Student can be granted.
-- Live quiz: anyone can join with the code and a name, without logging in.

-- ================================================================ roles
create or replace function public.set_role(p_user uuid,p_role text) returns void language plpgsql security definer set search_path=public as $$
begin
  if public.auth_role()<>'researcher' then raise exception 'Only the researcher can change roles'; end if;
  if p_role not in ('student','teacher','researcher') then raise exception 'Choose Researcher, Professor or Student'; end if;
  if p_user=auth.uid() then raise exception 'You cannot change your own role'; end if;
  if (select role from public.profiles where id=p_user)='researcher' then raise exception 'This account is already a researcher. A researcher''s role can only be changed in Supabase.'; end if;
  update public.profiles set role=p_role where id=p_user;
  insert into public.audit_logs(actor,action,detail) values(auth.uid(),'set_role',jsonb_build_object('user',p_user,'role',p_role));
end $$;
-- research-guide accounts are left unchanged (they cannot log in); the researcher can give them a new role in Cohort.
delete from public.role_invites where role='guide';

-- ================================================================ live quiz players can be guests
alter table public.live_players add column if not exists player_id uuid not null default gen_random_uuid();
alter table public.live_players add column if not exists guest_token text;
alter table public.live_players add column if not exists is_guest boolean not null default false;
alter table public.live_answers add column if not exists player_id uuid;
update public.live_answers a set player_id=p.player_id from public.live_players p where a.player_id is null and p.game_id=a.game_id and p.student_id=a.student_id;
do $$ begin
  if exists(select 1 from pg_constraint where conname='live_players_pkey' and pg_get_constraintdef(oid) like '%student_id%') then
    alter table public.live_players drop constraint live_players_pkey;
    alter table public.live_players add primary key(game_id,player_id);
  end if;
  if exists(select 1 from pg_constraint where conname='live_answers_pkey' and pg_get_constraintdef(oid) like '%student_id%') then
    alter table public.live_answers drop constraint live_answers_pkey;
    alter table public.live_answers alter column player_id set not null;
    alter table public.live_answers add primary key(game_id,player_id,q_index);
  end if;
end $$;
alter table public.live_players alter column student_id drop not null;
alter table public.live_answers alter column student_id drop not null;
create unique index if not exists live_players_student on public.live_players(game_id,student_id) where student_id is not null;

create or replace function public.short_name(n text) returns text language sql immutable as $$
  select case when n is null or trim(n)='' then 'Player'
    else split_part(trim(n),' ',1)||case when array_length(regexp_split_to_array(trim(n),'\s+'),1)>1 then ' '||left((regexp_split_to_array(trim(n),'\s+'))[array_length(regexp_split_to_array(trim(n),'\s+'),1)],1)||'.' else '' end end $$;

create or replace function public.live_join(p_code text) returns uuid language plpgsql security definer set search_path=public as $$
declare g public.live_games; p public.profiles;
begin
  select * into p from public.profiles where id=auth.uid(); if not found or p.role<>'student' then raise exception 'Students only'; end if;
  select * into g from public.live_games where code=trim(p_code) and phase<>'ended'; if not found then raise exception 'No live quiz with that code'; end if;
  insert into public.live_players(game_id,student_id,name) values(g.id,p.id,p.full_name) on conflict(game_id,student_id) where student_id is not null do nothing;
  return g.id;
end $$;

create or replace function public.live_join_guest(p_code text,p_name text) returns json language plpgsql security definer set search_path=public as $$
declare g public.live_games; pid uuid; tok text:=replace(gen_random_uuid()::text,'-','')||replace(gen_random_uuid()::text,'-','');
begin
  select * into g from public.live_games where code=trim(p_code) and phase<>'ended'; if not found then raise exception 'No live quiz with that code'; end if;
  if coalesce(length(trim(p_name)),0)<2 then raise exception 'Type your name to join'; end if;
  if (select count(*) from public.live_players where game_id=g.id)>=600 then raise exception 'This quiz is full'; end if;
  insert into public.live_players(game_id,student_id,name,is_guest,guest_token) values(g.id,null,left(trim(p_name),40),true,tok) returning player_id into pid;
  return json_build_object('game',g.id,'player',pid,'token',tok);
end $$;

create or replace function public.live_lookup(p_code text) returns json language sql stable security definer set search_path=public as $$
  select json_build_object('title',title) from public.live_games where code=trim(p_code) and phase<>'ended' limit 1 $$;
revoke all on function public.live_lookup(text) from public; grant execute on function public.live_lookup(text) to anon,authenticated;

-- record one answer (shared by students and guests)
create or replace function public.live_record(p_game uuid,p_player uuid,p_student uuid,p_answer jsonb) returns json language plpgsql security definer set search_path=public as $$
declare g public.live_games; k jsonb; c boolean; pts int:=0; left_ numeric;
begin
  select * into g from public.live_games where id=p_game and phase='question'; if not found then raise exception 'Time is up for this question'; end if;
  left_:=g.seconds-extract(epoch from now()-g.q_started_at);
  if left_<-1 then raise exception 'Time is up for this question'; end if;
  select keys->g.q_index into k from public.activity_keys where activity_id=g.activity_id;
  c:=public.q_correct(k,p_answer);
  if c then pts:=500+round(500*greatest(0,least(1,left_/g.seconds)))::int; end if;
  insert into public.live_answers(game_id,player_id,student_id,q_index,answer,correct,points) values(g.id,p_player,p_student,g.q_index,p_answer,c,pts);
  update public.live_players set score=score+pts where game_id=g.id and player_id=p_player;
  return json_build_object('received',true);
exception when unique_violation then raise exception 'You have already answered';
end $$;
revoke all on function public.live_record(uuid,uuid,uuid,jsonb) from public,anon,authenticated;

create or replace function public.live_answer(p_game uuid,p_answer jsonb) returns json language plpgsql security definer set search_path=public as $$
declare pid uuid;
begin
  select player_id into pid from public.live_players where game_id=p_game and student_id=auth.uid(); if pid is null then raise exception 'Join the quiz first'; end if;
  return public.live_record(p_game,pid,auth.uid(),p_answer);
end $$;

create or replace function public.live_answer_guest(p_game uuid,p_player uuid,p_token text,p_answer jsonb) returns json language plpgsql security definer set search_path=public as $$
begin
  if not exists(select 1 from public.live_players where game_id=p_game and player_id=p_player and is_guest and guest_token=p_token) then raise exception 'Join the quiz first'; end if;
  return public.live_record(p_game,p_player,null,p_answer);
end $$;

-- everything a player's screen needs, for students and guests (first names only)
create or replace function public.live_state(p_game uuid,p_player uuid default null,p_token text default null) returns json language plpgsql stable security definer set search_path=public as $$
declare g public.live_games; me uuid;
begin
  select * into g from public.live_games where id=p_game; if not found then return null; end if;
  if p_player is not null then select player_id into me from public.live_players where game_id=g.id and player_id=p_player and guest_token=p_token;
  elsif auth.uid() is not null then select player_id into me from public.live_players where game_id=g.id and student_id=auth.uid(); end if;
  return json_build_object(
    'game',json_build_object('id',g.id,'code',g.code,'title',g.title,'q_index',g.q_index,'n',g.n,'seconds',g.seconds,'phase',g.phase,'q_started_at',g.q_started_at,'current',g.current,'reveal',g.reveal),
    'server_now',now(),
    'count',(select count(*) from public.live_players where game_id=g.id),
    'players',coalesce((select json_agg(x) from (select player_id,public.short_name(name) as name,score,is_guest,player_id=me as me from public.live_players where game_id=g.id order by score desc,name limit 10) x),'[]'::json),
    'me',(select json_build_object('player_id',player_id,'name',public.short_name(name),'score',score,'rank',(select count(*)+1 from public.live_players q where q.game_id=g.id and q.score>p.score)) from public.live_players p where p.game_id=g.id and p.player_id=me),
    'mine',coalesce((select json_agg(json_build_object('q_index',q_index,'correct',correct,'points',points)) from public.live_answers where game_id=g.id and player_id=me),'[]'::json));
end $$;

revoke all on function public.live_join_guest(text,text) from public;
revoke all on function public.live_answer_guest(uuid,uuid,text,jsonb) from public;
revoke all on function public.live_state(uuid,uuid,text) from public;
grant execute on function public.live_join_guest(text,text),public.live_answer_guest(uuid,uuid,text,jsonb),public.live_state(uuid,uuid,text) to anon,authenticated;
revoke all on function public.live_join(text) from public,anon; grant execute on function public.live_join(text) to authenticated;
revoke all on function public.live_answer(uuid,jsonb) from public,anon; grant execute on function public.live_answer(uuid,jsonb) to authenticated;
-- the guest token must never be readable from the table
revoke select on public.live_players from authenticated;
grant select(game_id,student_id,name,score,player_id,is_guest) on public.live_players to authenticated;
