-- LIVE LANGUAGE COACH - schema v13 (run AFTER schema_v12.sql; safe to run more than once)
-- Adds the underlying activity_id to my_guest_quizzes() so the "Guest Live Quiz data" tab
-- can show the same Edit / Preview / Publish / Host live / Results / Duplicate / Delete
-- controls as the rest of My library, not just a bare "View report" link.

drop function if exists public.my_guest_quizzes();
create or replace function public.my_guest_quizzes() returns table(
  id uuid, kind text, title text, code text, created_at timestamptz, is_open boolean, n_participants int, activity_id uuid
) language sql stable security definer set search_path=public as $$
  select g.id,'live_quiz',coalesce(act.title,'Live quiz'),g.code,g.created_at,g.phase<>'ended',
    (select count(*) from public.live_players p where p.game_id=g.id)::int, g.activity_id
  from public.live_games g left join public.activities act on act.id=g.activity_id
  where g.host_id=auth.uid() and g.collect_profile
  union all
  select s.id,'session',s.title,s.code,s.created_at,s.is_open,
    (select count(*) from public.responses r where r.session_id=s.id)::int, null::uuid
  from public.sessions s
  where s.owner_id=auth.uid() and s.collect_profile
  order by created_at desc
$$;
revoke all on function public.my_guest_quizzes() from public,anon;
grant execute on function public.my_guest_quizzes() to authenticated;
