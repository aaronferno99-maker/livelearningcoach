-- LIVE LANGUAGE COACH - schema v9 (run AFTER schema_v8.sql; safe to run more than once)
-- Live activities: guests join with code + name (no login), optional timer, live quizzes saved as "live" activities.

-- polls / word clouds / open responses
alter table public.sessions add column if not exists ends_at timestamptz;
alter table public.sessions add column if not exists timer_seconds int;
alter table public.sessions alter column anonymous_allowed set default true;
update public.sessions set anonymous_allowed=true where anonymous_allowed is distinct from true;

drop function if exists public.get_public_session(text);
create function public.get_public_session(join_code text)
returns table(session_id uuid,session_title text,session_prompt text,activity_type text,activity_options jsonb,session_open boolean,anonymous_allowed boolean,ends_at timestamptz,server_now timestamptz)
language sql stable security definer set search_path=public as $$
  select id,title,prompt,activity_type,options,is_open,true,ends_at,now() from public.sessions where code=trim(join_code) limit 1 $$;
revoke all on function public.get_public_session(text) from public;
grant execute on function public.get_public_session(text) to anon,authenticated;

create or replace function public.submit_session_response(join_code text,answer_text text,display_name text default null)
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
 insert into public.responses(session_id,participant_id,participant_name,answer,is_anonymous)
 values(s.id,auth.uid(),left(nullif(trim(display_name),''),40),trim(answer_text),auth.uid() is null) returning id into rid;
 return jsonb_build_object('accepted',true,'response_id',rid);
end $$;
revoke all on function public.submit_session_response(text,text,text) from public;
grant execute on function public.submit_session_response(text,text,text) to anon,authenticated;

-- live quizzes made from pasted text / uploaded files are kept as "live" activities (never shown in students' steps)
do $$ declare c text; begin
  for c in select conname from pg_constraint where conrelid='public.activities'::regclass and contype='c' and pg_get_constraintdef(oid) like '%purpose%' loop
    execute format('alter table public.activities drop constraint %I',c);
  end loop;
end $$;
alter table public.activities add constraint activities_purpose_check check(purpose in ('anxiety','pre_questionnaire','pretest','intervention','posttest','post_questionnaire','practice','live'));

create or replace function public.trg_inbox_activity() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if new.status='published' and (tg_op='INSERT' or old.status<>'published') and new.purpose not in ('anxiety','live') then
    perform public.notify(public.ids_of(array['student']),'activity','New: '||new.title,
      case when new.purpose='practice' then 'Find it under Practice.' else 'Find it in the Research tab.' end,
      jsonb_build_object('tab',case when new.purpose='practice' then 'practice' else 'dash' end));
  end if; return new;
end $$;

-- time per question: 5 seconds to 5 minutes
create or replace function public.live_host(p_activity uuid,p_seconds int) returns json language plpgsql security definer set search_path=public as $$
declare a public.activities; g public.live_games; c text;
begin
  if not public.is_instructor() then raise exception 'Not allowed'; end if;
  select * into a from public.activities where id=p_activity and kind in ('quiz','reading'); if not found then raise exception 'Choose a quiz'; end if;
  if jsonb_array_length(a.questions)=0 then raise exception 'This quiz has no questions'; end if;
  loop c:=lpad((floor(random()*1000000))::int::text,6,'0'); exit when not exists(select 1 from public.live_games where code=c) and not exists(select 1 from public.sessions where code=c); end loop;
  insert into public.live_games(code,activity_id,host_id,title,n,seconds) values(c,a.id,auth.uid(),a.title,jsonb_array_length(a.questions),greatest(5,least(coalesce(p_seconds,20),300))) returning * into g;
  return row_to_json(g);
end $$;

-- the host can change the time per question during a game
create or replace function public.live_set_timer(p_game uuid,p_seconds int) returns void language plpgsql security definer set search_path=public as $$
begin
  update public.live_games set seconds=greatest(5,least(coalesce(p_seconds,20),300)) where id=p_game and host_id=auth.uid();
  if not found then raise exception 'Game not found'; end if;
end $$;
revoke all on function public.live_set_timer(uuid,int) from public,anon; grant execute on function public.live_set_timer(uuid,int) to authenticated;

do $$ begin alter publication supabase_realtime add table public.responses; exception when duplicate_object then null; when undefined_object then null; end $$;
