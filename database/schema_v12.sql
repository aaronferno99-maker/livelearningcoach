-- LIVE LANGUAGE COACH - schema v12 (run AFTER schema_v11.sql; safe to run more than once)
-- Adds: an in-website "Guest Live Quiz data" report (not just CSV) showing exact marks
-- (correct/total) instead of game score, plus an overall report bucketing confidence
-- ratings into Low / Neutral / High and giving the overall average confidence and marks.

-- ================================================================ list every live quiz / session this teacher has collected guest data for
create or replace function public.my_guest_quizzes() returns table(
  id uuid, kind text, title text, code text, created_at timestamptz, is_open boolean, n_participants int
) language sql stable security definer set search_path=public as $$
  select g.id,'live_quiz',coalesce(act.title,'Live quiz'),g.code,g.created_at,g.phase<>'ended',
    (select count(*) from public.live_players p where p.game_id=g.id)::int
  from public.live_games g left join public.activities act on act.id=g.activity_id
  where g.host_id=auth.uid() and g.collect_profile
  union all
  select s.id,'session',s.title,s.code,s.created_at,s.is_open,
    (select count(*) from public.responses r where r.session_id=s.id)::int
  from public.sessions s
  where s.owner_id=auth.uid() and s.collect_profile
  order by created_at desc
$$;
revoke all on function public.my_guest_quizzes() from public,anon;
grant execute on function public.my_guest_quizzes() to authenticated;

-- ================================================================ host-only export of guest/participant detail for one live quiz,
-- now reporting the exact marks (correct answers out of total questions) rather
-- than the gamified score, which includes a speed bonus
drop function if exists public.live_guest_csv(uuid);
create or replace function public.live_guest_csv(p_game uuid) returns table(
  name text,is_guest boolean,marks int,total int,
  g_subject text,g_study_level text,g_year int,g_locality text,g_gender text,g_native text,g_consent boolean,
  avg_confidence numeric
) language sql stable security definer set search_path=public as $$
  select p.name,p.is_guest,
    (select count(*) from public.live_answers a where a.game_id=p.game_id and a.player_id=p.player_id and a.correct)::int,
    (select jsonb_array_length(act.questions) from public.live_games g join public.activities act on act.id=g.activity_id where g.id=p.game_id),
    p.g_subject,p.g_study_level,p.g_year,p.g_locality,p.g_gender,p.g_native,p.g_consent,
    (select round(avg(a.confidence),1) from public.live_answers a where a.game_id=p.game_id and a.player_id=p.player_id and a.confidence is not null)
  from public.live_players p
  where p.game_id=p_game and exists(select 1 from public.live_games g where g.id=p_game and g.host_id=auth.uid())
  order by 3 desc nulls last,p.name
$$;
revoke all on function public.live_guest_csv(uuid) from public,anon;
grant execute on function public.live_guest_csv(uuid) to authenticated;
