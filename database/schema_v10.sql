-- LIVE LANGUAGE COACH - schema v10 (run AFTER schema_v9.sql; safe to run more than once)
-- Live polls: participants can watch the live percentages after they vote (the presenter can switch this off).

alter table public.sessions add column if not exists show_results boolean not null default true;

-- totals only (no names), and only for polls whose presenter allows it
create or replace function public.get_poll_results(join_code text)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare s public.sessions%rowtype; c jsonb; t int;
begin
  select * into s from public.sessions where code=trim(join_code);
  if not found or s.activity_type<>'poll' or not s.show_results then return null; end if;
  select coalesce(jsonb_object_agg(answer,n),'{}'::jsonb), coalesce(sum(n),0)::int into c,t
    from (select answer,count(*) n from public.responses where session_id=s.id group by answer) x;
  return jsonb_build_object('options',s.options,'counts',c,'total',t,'open',s.is_open);
end $$;
revoke all on function public.get_poll_results(text) from public;
grant execute on function public.get_poll_results(text) to anon,authenticated;
