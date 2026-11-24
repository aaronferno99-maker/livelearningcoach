alter table public.live_games add column if not exists paused_at timestamptz;
create or replace function public.live_pause(p_game uuid,p_pause boolean) returns void language plpgsql security definer set search_path=public as $$
declare g public.live_games; d interval;
begin
  select * into g from public.live_games where id=p_game and host_id=auth.uid() for update; if not found then raise exception 'Game not found'; end if;
  if g.phase in ('lobby','ended') then raise exception 'The quiz is not running'; end if;
  if coalesce(p_pause,false) then
    if g.paused_at is null then update public.live_games set paused_at=now() where id=g.id; end if;
    return;
  end if;
  if g.paused_at is null then return; end if;
  d:=now()-g.paused_at;
  update public.live_games set paused_at=null,q_started_at=case when q_started_at is null then null else q_started_at+d end where id=g.id;
  update public.live_players set q_started_at=q_started_at+d where game_id=g.id and q_started_at is not null;
end $$;
revoke all on function public.live_pause(uuid,boolean) from public,anon; grant execute on function public.live_pause(uuid,boolean) to authenticated;
create or replace function public.live_step(p_game uuid,p_action text) returns void language plpgsql security definer set search_path=public as $$
declare g public.live_games; a public.activities; k jsonb; i int; q jsonb;
begin
  select * into g from public.live_games where id=p_game and host_id=auth.uid(); if not found then raise exception 'Game not found'; end if;
  select * into a from public.activities where id=g.activity_id;
  if p_action='end' then update public.live_games set phase='ended',paused_at=null where id=g.id; return; end if;
  if g.self_paced then
    if p_action='next' and g.phase='lobby' then
      update public.live_games set q_index=0,phase='question',q_started_at=now(),current=null,reveal=null,paused_at=null where id=g.id; return;
    end if;
    raise exception 'In own-pace mode each student moves through the questions alone. Use Pause or End quiz.';
  end if;
  if p_action='reveal' and g.phase='question' then
    select keys->g.q_index into k from public.activity_keys where activity_id=a.id;
    update public.live_games set phase='reveal',paused_at=null,reveal=jsonb_build_object('answer',k->'answer','explanation',k->>'explanation',
      'counts',coalesce((select jsonb_object_agg(x.ans,x.c) from (select answer::text ans,count(*) c from public.live_answers where game_id=g.id and q_index=g.q_index group by 1) x),'{}'::jsonb)) where id=g.id;
    return;
  end if;
  if p_action='next' and g.phase in ('lobby','question','reveal') then
    i:=g.q_index+1;
    if i>=g.n then update public.live_games set phase='ended',paused_at=null where id=g.id; return; end if;
    q:=a.questions->i;
    update public.live_games set q_index=i,phase='question',q_started_at=now(),current=q,reveal=null,paused_at=null where id=g.id;
    return;
  end if;
  raise exception 'That step is not possible now';
end $$;
create or replace function public.live_record(p_game uuid,p_player uuid,p_student uuid,p_answer jsonb,p_confidence int default null) returns json language plpgsql security definer set search_path=public as $$
declare g public.live_games; p public.live_players; k jsonb; c boolean; pts int:=0; left_ numeric; qi int; qs timestamptz; old_pts int;
begin
  select * into g from public.live_games where id=p_game and phase='question'; if not found then raise exception 'Time is up for this question'; end if;
  if g.paused_at is not null then raise exception 'The quiz is paused. Wait for your professor.'; end if;
  select * into p from public.live_players where game_id=g.id and player_id=p_player for update;
  if not found then raise exception 'Join the quiz first'; end if;
  if g.self_paced then qi:=p.q_index; qs:=p.q_started_at; else qi:=g.q_index; qs:=g.q_started_at; end if;
  if qs is null or qi<0 or qi>=g.n then raise exception 'Time is up for this question'; end if;
  left_:=g.seconds-extract(epoch from now()-qs);
  if left_<-1 then raise exception 'Time is up for this question'; end if;
  select keys->qi into k from public.activity_keys where activity_id=g.activity_id;
  c:=public.q_correct(k,p_answer);
  if c then pts:=500+round(500*greatest(0,least(1,left_/g.seconds)))::int; end if;
  select points into old_pts from public.live_answers where game_id=g.id and player_id=p_player and q_index=qi;
  insert into public.live_answers(game_id,player_id,student_id,q_index,answer,correct,points,confidence)
    values(g.id,p_player,p_student,qi,p_answer,c,pts,case when g.ask_confidence then p_confidence else null end)
    on conflict(game_id,player_id,q_index) do update
      set answer=excluded.answer,correct=excluded.correct,points=excluded.points,
          confidence=coalesce(excluded.confidence,public.live_answers.confidence),created_at=now();
  update public.live_players set score=score+pts-coalesce(old_pts,0) where game_id=g.id and player_id=p_player;
  return json_build_object('received',true,'q_index',qi);
end $$;
revoke all on function public.live_record(uuid,uuid,uuid,jsonb,int) from public,anon,authenticated;
create or replace function public.live_self_step(p_game uuid,p_action text,p_from int default null,p_player uuid default null,p_token text default null) returns void language plpgsql security definer set search_path=public as $$
declare g public.live_games; me uuid;
begin
  select * into g from public.live_games where id=p_game; if not found then raise exception 'Game not found'; end if;
  if not g.self_paced or g.phase<>'question' then return; end if;
  if p_player is not null then select player_id into me from public.live_players where game_id=g.id and player_id=p_player and guest_token=p_token;
  elsif auth.uid() is not null then select player_id into me from public.live_players where game_id=g.id and student_id=auth.uid(); end if;
  if me is null then raise exception 'Join the quiz first'; end if;
  if p_action='start' then
    update public.live_players set q_started_at=coalesce(g.paused_at,now()) where game_id=g.id and player_id=me and q_started_at is null;
  elsif p_action='next' and g.paused_at is null then
    update public.live_players set q_index=q_index+1,q_started_at=now()
      where game_id=g.id and player_id=me and q_started_at is not null and q_index<g.n and (p_from is null or q_index=p_from);
  end if;
end $$;
revoke all on function public.live_self_step(uuid,text,int,uuid,text) from public;
grant execute on function public.live_self_step(uuid,text,int,uuid,text) to anon,authenticated;
create or replace function public.live_state(p_game uuid,p_player uuid default null,p_token text default null) returns json language plpgsql stable security definer set search_path=public as $$
declare g public.live_games; me uuid; mp public.live_players; qs jsonb;
begin
  select * into g from public.live_games where id=p_game; if not found then return null; end if;
  if p_player is not null then select player_id into me from public.live_players where game_id=g.id and player_id=p_player and guest_token=p_token;
  elsif auth.uid() is not null then select player_id into me from public.live_players where game_id=g.id and student_id=auth.uid(); end if;
  select * into mp from public.live_players where game_id=g.id and player_id=me;
  if g.self_paced then select questions into qs from public.activities where id=g.activity_id; end if;
  return (with sc as (
      select p.player_id,p.name,p.is_guest,
        p.score-coalesce((select a.points from public.live_answers a where a.game_id=g.id and a.player_id=p.player_id and g.phase='question'
          and a.q_index=case when g.self_paced then p.q_index else g.q_index end),0) as score
      from public.live_players p where p.game_id=g.id)
    select json_build_object(
    'game',json_build_object('id',g.id,'code',g.code,'title',g.title,'q_index',g.q_index,'n',g.n,'seconds',g.seconds,'phase',g.phase,'q_started_at',g.q_started_at,
      'current',case when g.self_paced then null else g.current end,'reveal',g.reveal,'ask_confidence',g.ask_confidence,'collect_profile',g.collect_profile,'self_paced',g.self_paced,
      'paused_at',g.paused_at),
    'server_now',now(),
    'count',(select count(*) from sc),
    'players',coalesce((select json_agg(x) from (select player_id,public.short_name(name) as name,score,is_guest,player_id=me as me from sc order by score desc,name limit 10) x),'[]'::json),
    'me',(select json_build_object('player_id',s.player_id,'name',public.short_name(s.name),'score',s.score,'rank',(select count(*)+1 from sc q where q.score>s.score)) from sc s where s.player_id=me),
    'mine',coalesce((select json_agg(json_build_object('q_index',a.q_index,'answer',a.answer,'has_conf',a.confidence is not null,
        'correct',case when open_ then null else a.correct end,'points',case when open_ then null else a.points end))
      from (select a.*,(g.phase='question' and a.q_index=case when g.self_paced then mp.q_index else g.q_index end) as open_ from public.live_answers a where a.game_id=g.id and a.player_id=me) a),'[]'::json),
    'my_q',case when g.self_paced and me is not null then json_build_object('q_index',mp.q_index,'started_at',mp.q_started_at,
      'current',case when mp.q_index<g.n then qs->mp.q_index else null end) else null end));
end $$;
revoke all on function public.live_state(uuid,uuid,text) from public;
grant execute on function public.live_state(uuid,uuid,text) to anon,authenticated;
create or replace function public.live_host_players(p_game uuid) returns json language plpgsql stable security definer set search_path=public as $$
declare g public.live_games;
begin
  select * into g from public.live_games where id=p_game and host_id=auth.uid(); if not found then raise exception 'Game not found'; end if;
  return coalesce((select json_agg(x order by x.score desc,x.name) from (
    select p.game_id,p.student_id,p.player_id,p.name,p.is_guest,p.q_index,p.q_started_at,
      p.score-coalesce((select a.points from public.live_answers a where a.game_id=g.id and a.player_id=p.player_id and g.phase='question'
        and a.q_index=case when g.self_paced then p.q_index else g.q_index end),0) as score,
      (select count(*) from public.live_answers a where a.game_id=g.id and a.player_id=p.player_id)::int as answered,
      (select string_agg(case
          when a.q_index is not null and g.phase='question' and i=case when g.self_paced then p.q_index else g.q_index end then 'o'
          when a.q_index is not null then case when a.correct then 'c' else 'x' end
          when (g.self_paced and i<p.q_index) or (not g.self_paced and (i<g.q_index or (i=g.q_index and g.phase in ('reveal','ended')))) then '-'
          else '_' end,'' order by i)
        from generate_series(0,g.n-1) i
        left join public.live_answers a on a.game_id=g.id and a.player_id=p.player_id and a.q_index=i) as marks
    from public.live_players p where p.game_id=g.id) x),'[]'::json);
end $$;
revoke all on function public.live_host_players(uuid) from public,anon; grant execute on function public.live_host_players(uuid) to authenticated;
create or replace function public.live_host_questions(p_game uuid) returns json language plpgsql stable security definer set search_path=public as $$
declare g public.live_games;
begin
  select * into g from public.live_games where id=p_game and host_id=auth.uid(); if not found then raise exception 'Game not found'; end if;
  return json_build_object('questions',(select questions from public.activities where id=g.activity_id),
                           'keys',(select keys from public.activity_keys where activity_id=g.activity_id));
end $$;
revoke all on function public.live_host_questions(uuid) from public,anon; grant execute on function public.live_host_questions(uuid) to authenticated;
