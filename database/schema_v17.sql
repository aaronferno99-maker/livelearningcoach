-- LIVE LANGUAGE COACH - schema v17 (run AFTER schema_v16.sql; safe to run more than once)
-- The researcher sees every live quiz in "Guest Live Quiz data", not only the ones hosted
-- from their own account (a quiz hosted from the supervisor's or a professor's login now shows too).
create or replace function public.my_guest_quizzes() returns table(
  id uuid, kind text, title text, code text, created_at timestamptz, is_open boolean, n_participants int, activity_id uuid
) language sql stable security definer set search_path=public as $$
  select g.id,'live_quiz',coalesce(act.title,'Live quiz'),g.code,g.created_at,g.phase<>'ended',
    (select count(*) from public.live_players p where p.game_id=g.id)::int, g.activity_id
  from public.live_games g left join public.activities act on act.id=g.activity_id
  where (g.host_id=auth.uid() or public.auth_role()='researcher') and g.collect_profile
  union all
  select s.id,'session',s.title,s.code,s.created_at,s.is_open,
    (select count(*) from public.responses r where r.session_id=s.id)::int, null::uuid
  from public.sessions s
  where (s.owner_id=auth.uid() or public.auth_role()='researcher') and s.collect_profile
  order by created_at desc
$$;
revoke all on function public.my_guest_quizzes() from public,anon;
grant execute on function public.my_guest_quizzes() to authenticated;
