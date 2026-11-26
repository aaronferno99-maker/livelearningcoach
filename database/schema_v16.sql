-- LIVE LANGUAGE COACH - schema v16 (run AFTER schema_v15.sql; safe to run more than once)
-- Fixes from the first classroom test (26 Nov 2026):
--   1. One name = one player. A guest who presses Join again (slow network, a refresh,
--      another browser) goes back into the same seat instead of being added again.
--      Names are matched without caring about capitals or spaces,
--      so 25uta104, 25UTA104 and 25UTA 104 are the same player.
--   2. The researcher can remove a registered student who is not part of the study
--      (the account and everything it saved are deleted).
--   3. Results of every live run of a quiz, for the Results button in My library.
--   4. The host or the researcher can remove selected players from a live quiz,
--      during the quiz or after the data is collected.
--   5. The guest data report also returns each player's id, so rows can be selected.

-- ================================================================ helper: how names are compared
create or replace function public.name_key(n text) returns text language sql immutable as $$
  select upper(regexp_replace(coalesce(n,''),'\s+','','g')) $$;

-- ================================================================ 1. guests: same name goes back to the same player
create or replace function public.live_join_guest(p_code text,p_name text,p_subject text default null,p_study_level text default null,p_year int default null,p_locality text default null,p_gender text default null,p_native text default null,p_consent boolean default null) returns json language plpgsql security definer set search_path=public as $$
declare g public.live_games; pid uuid; old_tok text; nm text:=left(regexp_replace(trim(coalesce(p_name,'')),'\s+',' ','g'),40);
  tok text:=replace(gen_random_uuid()::text,'-','')||replace(gen_random_uuid()::text,'-','');
begin
  select * into g from public.live_games where code=trim(p_code) and phase<>'ended'; if not found then raise exception 'No live quiz with that code'; end if;
  if length(nm)<2 then raise exception 'Type your name to join'; end if;
  -- one lock per quiz while joining, so two quick presses cannot both add a new player
  perform pg_advisory_xact_lock(hashtext('live_join:'||g.id::text));
  select player_id,guest_token into pid,old_tok from public.live_players
    where game_id=g.id and is_guest and public.name_key(name)=public.name_key(nm) order by player_id limit 1;
  if pid is not null then
    -- already joined with this name: fill in any details that were missing, then go back to the same seat
    update public.live_players set
      g_subject=coalesce(g_subject,nullif(trim(p_subject),'')),g_study_level=coalesce(g_study_level,p_study_level),g_year=coalesce(g_year,p_year),
      g_locality=coalesce(g_locality,p_locality),g_gender=coalesce(g_gender,nullif(trim(p_gender),'')),g_native=coalesce(g_native,nullif(trim(p_native),'')),
      g_consent=coalesce(g_consent,p_consent)
    where game_id=g.id and player_id=pid;
    return json_build_object('game',g.id,'player',pid,'token',old_tok,'rejoined',true);
  end if;
  if (select count(*) from public.live_players where game_id=g.id)>=600 then raise exception 'This quiz is full'; end if;
  if g.collect_profile and not(coalesce(trim(p_subject),'')<>'' and p_study_level in ('UG','PG') and p_year between 1 and 3 and p_locality in ('Rural','Urban') and coalesce(trim(p_gender),'')<>'' and coalesce(trim(p_native),'')<>'' and p_consent is true) then
    raise exception 'Please fill in every field and give your consent to join';
  end if;
  insert into public.live_players(game_id,student_id,name,is_guest,guest_token,g_subject,g_study_level,g_year,g_locality,g_gender,g_native,g_consent)
    values(g.id,null,nm,true,tok,nullif(trim(p_subject),''),p_study_level,p_year,p_locality,nullif(trim(p_gender),''),nullif(trim(p_native),''),p_consent)
    returning player_id into pid;
  return json_build_object('game',g.id,'player',pid,'token',tok,'rejoined',false);
end $$;
revoke all on function public.live_join_guest(text,text,text,text,int,text,text,text,boolean) from public;
grant execute on function public.live_join_guest(text,text,text,text,int,text,text,text,boolean) to anon,authenticated;

-- ================================================================ 2. researcher removes a registered student
create or replace function public.remove_student(p_user uuid) returns void language plpgsql security definer set search_path=public,auth as $$
declare p public.profiles;
begin
  if public.auth_role()<>'researcher' then raise exception 'Only the researcher can remove a student'; end if;
  if p_user=auth.uid() then raise exception 'You cannot remove your own account'; end if;
  select * into p from public.profiles where id=p_user; if not found then raise exception 'Student not found'; end if;
  if p.role<>'student' then raise exception 'Only student accounts can be removed here. Change the role first.'; end if;
  insert into public.audit_logs(actor,action,detail) values(auth.uid(),'remove_student',jsonb_build_object('user',p_user,'name',p.full_name,'email',p.email));
  delete from public.live_answers where player_id in (select player_id from public.live_players where student_id=p_user);
  delete from public.live_players where student_id=p_user;
  -- the account itself; every table that belongs to the student is removed with it (on delete cascade)
  delete from auth.users where id=p_user;
end $$;
revoke all on function public.remove_student(uuid) from public,anon; grant execute on function public.remove_student(uuid) to authenticated;

-- ================================================================ 3. results of every live run of one quiz
-- marks: one letter per question  c = right · x = wrong · - = no answer
create or replace function public.live_results(p_activity uuid) returns json language plpgsql stable security definer set search_path=public as $$
begin
  if not (public.is_instructor() or public.is_research()) then raise exception 'Not allowed'; end if;
  return coalesce((select json_agg(x order by x.created_at desc) from (
    select g.id,g.code,g.title,g.created_at,g.phase,g.n,g.self_paced,g.collect_profile,g.ask_confidence,g.host_id,
      (select coalesce(pr.full_name,pr.email) from public.profiles pr where pr.id=g.host_id) as host_name,
      coalesce((select json_agg(y order by public.name_key(y.name)) from (
        select p.player_id,p.student_id,p.name,p.is_guest,p.score,
          sp.student_no,sp.research_id,
          (select count(*) from public.live_answers a where a.game_id=g.id and a.player_id=p.player_id)::int as answered,
          (select count(*) from public.live_answers a where a.game_id=g.id and a.player_id=p.player_id and a.correct)::int as marks,
          (select round(avg(a.confidence),1) from public.live_answers a where a.game_id=g.id and a.player_id=p.player_id and a.confidence is not null) as avg_confidence,
          (select string_agg(case when a.q_index is null then '-' when a.correct then 'c' else 'x' end,'' order by i)
             from generate_series(0,g.n-1) i left join public.live_answers a on a.game_id=g.id and a.player_id=p.player_id and a.q_index=i) as marks_str,
          p.g_subject,p.g_study_level,p.g_year,p.g_locality,p.g_gender,p.g_native,p.g_consent
        from public.live_players p left join public.student_profiles sp on sp.user_id=p.student_id
        where p.game_id=g.id) y),'[]'::json) as players
    from public.live_games g
    where g.activity_id=p_activity and (g.host_id=auth.uid() or public.is_research())
  ) x),'[]'::json);
end $$;
revoke all on function public.live_results(uuid) from public,anon; grant execute on function public.live_results(uuid) to authenticated;

-- ================================================================ 4. remove selected players from a live quiz
create or replace function public.live_remove_players(p_game uuid,p_players uuid[]) returns int language plpgsql security definer set search_path=public as $$
declare n int;
begin
  if not exists(select 1 from public.live_games where id=p_game and (host_id=auth.uid() or public.auth_role()='researcher')) then
    raise exception 'Only the person who hosted this quiz or the researcher can remove players';
  end if;
  if p_players is null or cardinality(p_players)=0 then return 0; end if;
  delete from public.live_answers where game_id=p_game and player_id=any(p_players);
  delete from public.live_players where game_id=p_game and player_id=any(p_players);
  get diagnostics n=row_count;
  insert into public.audit_logs(actor,action,detail) values(auth.uid(),'live_remove_players',jsonb_build_object('game',p_game,'players',to_jsonb(p_players),'removed',n));
  return n;
end $$;
revoke all on function public.live_remove_players(uuid,uuid[]) from public,anon; grant execute on function public.live_remove_players(uuid,uuid[]) to authenticated;

-- ================================================================ 5. guest data report: player id for selecting rows
drop function if exists public.live_guest_csv(uuid);
create or replace function public.live_guest_csv(p_game uuid) returns table(
  name text,is_guest boolean,marks int,total int,
  g_subject text,g_study_level text,g_year int,g_locality text,g_gender text,g_native text,g_consent boolean,
  avg_confidence numeric,player_id uuid,answered int
) language sql stable security definer set search_path=public as $$
  select p.name,p.is_guest,
    (select count(*) from public.live_answers a where a.game_id=p.game_id and a.player_id=p.player_id and a.correct)::int,
    (select jsonb_array_length(act.questions) from public.live_games g join public.activities act on act.id=g.activity_id where g.id=p.game_id),
    p.g_subject,p.g_study_level,p.g_year,p.g_locality,p.g_gender,p.g_native,p.g_consent,
    (select round(avg(a.confidence),1) from public.live_answers a where a.game_id=p.game_id and a.player_id=p.player_id and a.confidence is not null),
    p.player_id,
    (select count(*) from public.live_answers a where a.game_id=p.game_id and a.player_id=p.player_id)::int
  from public.live_players p
  where p.game_id=p_game and exists(select 1 from public.live_games g where g.id=p_game and (g.host_id=auth.uid() or public.auth_role()='researcher'))
  order by public.name_key(p.name)
$$;
revoke all on function public.live_guest_csv(uuid) from public,anon;
grant execute on function public.live_guest_csv(uuid) to authenticated;
