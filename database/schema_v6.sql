-- LIVE LANGUAGE COACH - schema v6 (run AFTER schema.sql and schema_v3.sql; safe to run more than once)
-- Adds: research journey (process, consent, questionnaires, pre-test, interventions, post-test), activity builder,
-- confidence meter, attendance, discussion forum, live quiz games, Google Sheet export.

-- ================================================================ activities
create table if not exists public.activities(
  id uuid primary key default gen_random_uuid(),
  kind text not null check(kind in ('quiz','reading','flashcards','questionnaire')),
  purpose text not null check(purpose in ('anxiety','pre_questionnaire','pretest','intervention','posttest','post_questionnaire','practice')),
  title text not null,
  skill text check(skill in ('Listening','Speaking','Reading','Writing','Grammar','Vocabulary')),
  segment text check(segment in ('Podcast','Video','Graphic novel','Multimodal')),
  media_url text, intro text, passage text,
  cards jsonb not null default '[]'::jsonb,
  questions jsonb not null default '[]'::jsonb,       -- what students see (no answers)
  status text not null default 'draft' check(status in ('draft','published')),
  sort int not null default 0,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz default now(), updated_at timestamptz default now());
create table if not exists public.activity_keys(
  activity_id uuid primary key references public.activities(id) on delete cascade,
  keys jsonb not null default '[]'::jsonb);            -- [{answer:..., explanation:"..."}] hidden from students
create table if not exists public.activity_attempts(
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  activity_id uuid not null references public.activities(id) on delete cascade,
  context text not null default '',                    -- anxiety time point: 'pre', 'post', 'int:<intervention id>'
  attempt_no int not null default 1,
  status text not null default 'open' check(status in ('open','done')),
  answers jsonb not null default '{}'::jsonb,
  score int, total int, pct numeric, detail jsonb,
  conf_before int check(conf_before between 1 and 10),
  conf_after int check(conf_after between 1 and 10),
  started_at timestamptz default now(), finished_at timestamptz,
  unique(student_id,activity_id,context,attempt_no));
create index if not exists activity_attempts_act on public.activity_attempts(activity_id);

create table if not exists public.research_stages(
  stage text primary key check(stage in ('pre_questionnaire','pretest','intervention','posttest','post_questionnaire')),
  is_open boolean not null default false,
  updated_by uuid references auth.users(id) on delete set null, updated_at timestamptz default now());
insert into public.research_stages(stage,is_open) values('pre_questionnaire',true),('pretest',true),('intervention',false),('posttest',false),('post_questionnaire',false) on conflict(stage) do nothing;
create table if not exists public.research_progress(
  student_id uuid primary key references auth.users(id) on delete cascade,
  process_read_at timestamptz, consent_at timestamptz);

-- ================================================================ attendance
create table if not exists public.class_sessions(
  id uuid primary key default gen_random_uuid(),
  title text not null default 'Class', mode text not null default 'live' check(mode in ('live','manual')),
  started_at timestamptz not null default now(), ended_at timestamptz,
  created_by uuid references auth.users(id) on delete set null);
create table if not exists public.attendance(
  session_id uuid not null references public.class_sessions(id) on delete cascade,
  student_id uuid not null references auth.users(id) on delete cascade,
  status text not null default 'present' check(status in ('present','late','absent')),
  joined_at timestamptz default now(),
  marked_by uuid references auth.users(id) on delete set null,
  primary key(session_id,student_id));
alter table public.live_class add column if not exists session_id uuid references public.class_sessions(id) on delete set null;

-- ================================================================ forum
create table if not exists public.forum_threads(
  id uuid primary key default gen_random_uuid(),
  kind text not null check(kind in ('public','staff','dm')),   -- public: everyone; staff: one student + staff; dm: two students (+ staff for safety)
  title text not null check(length(title) between 1 and 200),
  created_by uuid not null references auth.users(id) on delete cascade, creator_name text,
  peer_id uuid references auth.users(id) on delete cascade, peer_name text,
  created_at timestamptz default now(), last_at timestamptz default now());
create table if not exists public.forum_messages(
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.forum_threads(id) on delete cascade,
  author_id uuid references auth.users(id) on delete set null, author_name text, author_role text,
  body text not null check(length(body)<=4000),
  removed boolean not null default false,
  created_at timestamptz default now());
create index if not exists forum_messages_thread on public.forum_messages(thread_id,created_at);

-- ================================================================ live quiz games
create table if not exists public.live_games(
  id uuid primary key default gen_random_uuid(),
  code text not null unique, activity_id uuid not null references public.activities(id) on delete cascade,
  host_id uuid not null references auth.users(id) on delete cascade, title text,
  q_index int not null default -1, n int not null default 0, seconds int not null default 20,
  phase text not null default 'lobby' check(phase in ('lobby','question','reveal','ended')),
  q_started_at timestamptz, current jsonb, reveal jsonb, created_at timestamptz default now());
create table if not exists public.live_players(
  game_id uuid not null references public.live_games(id) on delete cascade,
  student_id uuid not null references auth.users(id) on delete cascade,
  name text, score int not null default 0, primary key(game_id,student_id));
create table if not exists public.live_answers(
  game_id uuid not null references public.live_games(id) on delete cascade,
  student_id uuid not null references auth.users(id) on delete cascade,
  q_index int not null, answer jsonb, correct boolean, points int not null default 0, created_at timestamptz default now(),
  primary key(game_id,student_id,q_index));

create table if not exists public.app_secrets(key text primary key, value text not null);
insert into public.app_secrets(key,value) values('sheet',replace(gen_random_uuid()::text||gen_random_uuid()::text,'-','')) on conflict(key) do nothing;

-- ================================================================ row level security
do $$ declare t text; r record; begin
  foreach t in array array['activities','activity_keys','activity_attempts','research_stages','research_progress','class_sessions','attendance','forum_threads','forum_messages','live_games','live_players','live_answers','app_secrets'] loop
    execute format('alter table public.%I enable row level security',t);
    execute format('revoke all on public.%I from anon,authenticated',t);
    for r in select policyname from pg_policies where schemaname='public' and tablename=t loop execute format('drop policy %I on public.%I',r.policyname,t); end loop;
  end loop; end $$;

create or replace function public.thread_visible(p_thread uuid) returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.forum_threads t where t.id=p_thread and (t.kind='public' or t.created_by=auth.uid() or t.peer_id=auth.uid() or public.is_instructor())) $$;

create policy act_staff on public.activities for select to authenticated using(public.is_instructor());
create policy act_practice on public.activities for select to authenticated using(status='published' and purpose='practice');
create policy act_delete on public.activities for delete to authenticated using(public.is_instructor());
create policy keys_staff on public.activity_keys for select to authenticated using(public.is_instructor());
create policy att_select on public.activity_attempts for select to authenticated using(public.can_see_student(student_id) or public.is_instructor());
create policy stages_select on public.research_stages for select to authenticated using(true);
create policy stages_update on public.research_stages for update to authenticated using(public.is_instructor()) with check(public.is_instructor());
create policy rp_select on public.research_progress for select to authenticated using(student_id=auth.uid() or public.is_instructor());
create policy cs_select on public.class_sessions for select to authenticated using(true);
create policy cs_write on public.class_sessions for all to authenticated using(public.is_instructor()) with check(public.is_instructor());
create policy at_select on public.attendance for select to authenticated using(student_id=auth.uid() or public.is_instructor());
create policy at_write on public.attendance for all to authenticated using(public.is_instructor()) with check(public.is_instructor());
create policy ft_select on public.forum_threads for select to authenticated using(kind='public' or created_by=auth.uid() or peer_id=auth.uid() or public.is_instructor());
create policy ft_delete on public.forum_threads for delete to authenticated using(public.is_instructor());
create policy fm_select on public.forum_messages for select to authenticated using(public.thread_visible(thread_id));
create policy lg_select on public.live_games for select to authenticated using(true);
create policy lg_delete on public.live_games for delete to authenticated using(host_id=auth.uid() or public.is_research());
create policy lp_select on public.live_players for select to authenticated using(true);
create policy la_select on public.live_answers for select to authenticated using(student_id=auth.uid() or public.is_instructor());

grant select,delete on public.activities,public.forum_threads,public.live_games to authenticated;
grant select on public.activity_keys,public.activity_attempts,public.research_progress,public.forum_messages,public.live_players,public.live_answers to authenticated;
grant select,update on public.research_stages to authenticated;
grant select,insert,update,delete on public.class_sessions,public.attendance to authenticated;

-- professors may also remove video lectures
drop policy if exists videos_delete_instr on public.videos;
create policy videos_delete_instr on public.videos for delete to authenticated using(public.is_instructor());

-- ================================================================ helpers
create or replace function public.q_correct(k jsonb,a jsonb) returns boolean language sql immutable as $$
  select case when a is null or k is null or k->'answer' is null then false else a=k->'answer' end $$;

create or replace function public.stage_open(p text) returns boolean language sql stable security definer set search_path=public as $$
  select coalesce((select is_open from public.research_stages where stage=p),false) $$;

create or replace function public.has_done(p_student uuid,p_activity uuid,p_context text) returns boolean language sql stable security definer set search_path=public as $$
  select exists(select 1 from public.activity_attempts where student_id=p_student and activity_id=p_activity and context=p_context and status='done') $$;

-- has the student finished every published activity of this stage?
create or replace function public.stage_done(p_student uuid,p_stage text) returns boolean language plpgsql stable security definer set search_path=public as $$
declare missing int; anx uuid; n int;
begin
  select count(*),count(*) filter(where not public.has_done(p_student,a.id,'')) into n,missing
    from public.activities a where a.status='published' and a.purpose=p_stage;
  if missing>0 then return false; end if;
  if p_stage='pre_questionnaire' then
    select id into anx from public.activities where purpose='anxiety' and status='published' order by created_at limit 1;
    if anx is not null and not public.has_done(p_student,anx,'pre') then return false; end if;
  end if;
  if p_stage='posttest' and n=0 then return false; end if;
  return true;
end $$;

-- ================================================================ authoring
create or replace function public.save_activity(p_id uuid,p_data jsonb,p_keys jsonb) returns uuid language plpgsql security definer set search_path=public as $$
declare a public.activities; oldk jsonb; qs jsonb:=coalesce(p_data->'questions','[]'::jsonb); ks jsonb:=coalesce(p_keys,'[]'::jsonb);
begin
  if not public.is_instructor() then raise exception 'Only the researcher or a professor can edit activities'; end if;
  if jsonb_typeof(qs)<>'array' or jsonb_typeof(ks)<>'array' or jsonb_array_length(qs)<>jsonb_array_length(ks) then raise exception 'Questions and answers do not match'; end if;
  if coalesce(trim(p_data->>'title'),'')='' then raise exception 'Give the activity a title'; end if;
  if p_id is null then
    insert into public.activities(kind,purpose,title,skill,segment,media_url,intro,passage,cards,questions,status,sort,created_by)
    values(p_data->>'kind',p_data->>'purpose',trim(p_data->>'title'),nullif(p_data->>'skill',''),nullif(p_data->>'segment',''),nullif(p_data->>'media_url',''),
      nullif(p_data->>'intro',''),nullif(p_data->>'passage',''),coalesce(p_data->'cards','[]'::jsonb),qs,coalesce(p_data->>'status','draft'),coalesce((p_data->>'sort')::int,0),auth.uid())
    returning * into a;
    insert into public.activity_keys(activity_id,keys) values(a.id,ks);
  else
    select * into a from public.activities where id=p_id; if not found then raise exception 'Activity not found'; end if;
    select keys into oldk from public.activity_keys where activity_id=p_id;
    if (a.questions<>qs or coalesce(oldk,'[]'::jsonb)<>ks) and exists(select 1 from public.activity_attempts where activity_id=p_id) then
      raise exception 'Students have already taken this activity, so its questions are locked. Duplicate it to make a changed version.';
    end if;
    update public.activities set title=trim(p_data->>'title'),skill=nullif(p_data->>'skill',''),segment=nullif(p_data->>'segment',''),media_url=nullif(p_data->>'media_url',''),
      intro=nullif(p_data->>'intro',''),passage=nullif(p_data->>'passage',''),cards=coalesce(p_data->'cards','[]'::jsonb),questions=qs,
      purpose=p_data->>'purpose',status=coalesce(p_data->>'status',status),sort=coalesce((p_data->>'sort')::int,sort),updated_at=now() where id=p_id;
    insert into public.activity_keys(activity_id,keys) values(p_id,ks) on conflict(activity_id) do update set keys=excluded.keys;
  end if;
  return a.id;
end $$;

create or replace function public.set_activity_status(p_id uuid,p_status text) returns void language plpgsql security definer set search_path=public as $$
begin
  if not public.is_instructor() then raise exception 'Not allowed'; end if;
  update public.activities set status=p_status,updated_at=now() where id=p_id;
end $$;

-- ================================================================ student journey
create or replace function public.research_ack(p_step text) returns void language plpgsql security definer set search_path=public as $$
begin
  if public.auth_role()<>'student' then raise exception 'Students only'; end if;
  insert into public.research_progress(student_id) values(auth.uid()) on conflict do nothing;
  if p_step='process' then update public.research_progress set process_read_at=coalesce(process_read_at,now()) where student_id=auth.uid();
  elsif p_step='consent' then
    if (select process_read_at from public.research_progress where student_id=auth.uid()) is null then raise exception 'Read how the research works first'; end if;
    update public.research_progress set consent_at=coalesce(consent_at,now()) where student_id=auth.uid();
    update public.student_profiles set consent_research=true where user_id=auth.uid();
  else raise exception 'Unknown step'; end if;
end $$;

create or replace function public.research_state() returns json language plpgsql stable security definer set search_path=public as $$
declare me uuid:=auth.uid();
begin
  if me is null then raise exception 'Sign in first'; end if;
  return json_build_object(
    'progress',(select row_to_json(p) from public.research_progress p where p.student_id=me),
    'stages',(select json_object_agg(stage,is_open) from public.research_stages),
    'done',json_build_object('pre_questionnaire',public.stage_done(me,'pre_questionnaire'),'pretest',public.stage_done(me,'pretest'),'posttest',public.stage_done(me,'posttest'),'post_questionnaire',public.stage_done(me,'post_questionnaire')),
    'activities',coalesce((select json_agg(json_build_object('id',a.id,'kind',a.kind,'purpose',a.purpose,'title',a.title,'skill',a.skill,'segment',a.segment,'intro',a.intro,
        'n',case when a.kind='flashcards' then jsonb_array_length(a.cards) else jsonb_array_length(a.questions) end,
        'attempts',coalesce((select json_agg(json_build_object('id',t.id,'context',t.context,'status',t.status,'attempt_no',t.attempt_no,'score',t.score,'total',t.total,'pct',t.pct,
            'conf_before',t.conf_before,'conf_after',t.conf_after,'finished_at',t.finished_at) order by t.started_at) from public.activity_attempts t where t.activity_id=a.id and t.student_id=me),'[]'::json))
        order by a.sort,a.created_at) from public.activities a where a.status='published'),'[]'::json));
end $$;

create or replace function public.start_activity(p_activity uuid,p_context text,p_conf int) returns json language plpgsql security definer set search_path=public as $$
declare a public.activities; t public.activity_attempts; me uuid:=auth.uid(); ctx text:=coalesce(p_context,''); anx uuid; single boolean; n int;
begin
  if public.auth_role()<>'student' then raise exception 'Students only'; end if;
  select * into a from public.activities where id=p_activity and status='published'; if not found then raise exception 'This activity is not available'; end if;
  if a.kind='flashcards' then raise exception 'Flashcards have no test'; end if;
  if a.purpose<>'practice' and (select consent_at from public.research_progress where student_id=me) is null then raise exception 'Please read the research process and give your consent first'; end if;
  select id into anx from public.activities where purpose='anxiety' and status='published' order by created_at limit 1;
  if a.purpose='anxiety' then
    if ctx='pre' then if not public.stage_open('pre_questionnaire') then raise exception 'The questionnaire is not open yet'; end if;
    elsif ctx='post' then if not public.stage_open('posttest') or not public.stage_done(me,'pretest') then raise exception 'This questionnaire opens with the post-test'; end if;
    elsif ctx like 'int:%' then
      if not public.stage_open('intervention') or not public.stage_done(me,'pretest') then raise exception 'Interventions are not open yet'; end if;
      if not exists(select 1 from public.activities where id::text=substr(ctx,5) and purpose='intervention' and status='published') then raise exception 'Unknown intervention'; end if;
    else raise exception 'Unknown questionnaire time point'; end if;
  else
    ctx:='';
    if a.purpose='pre_questionnaire' and not public.stage_open('pre_questionnaire') then raise exception 'The questionnaire is not open yet'; end if;
    if a.purpose='pretest' then
      if not public.stage_open('pretest') then raise exception 'The pre-test is not open yet'; end if;
      if not public.stage_done(me,'pre_questionnaire') then raise exception 'Complete the questionnaire before the pre-test'; end if;
    end if;
    if a.purpose='intervention' then
      if not public.stage_open('intervention') then raise exception 'Interventions are not open yet'; end if;
      if not public.stage_done(me,'pretest') then raise exception 'Complete every pre-test first'; end if;
      if anx is not null and not public.has_done(me,anx,'int:'||a.id::text) then raise exception 'Answer the short anxiety questionnaire before this session'; end if;
    end if;
    if a.purpose='posttest' then
      if not public.stage_open('posttest') then raise exception 'The post-test is not open yet'; end if;
      if not public.stage_done(me,'pretest') then raise exception 'Complete every pre-test first'; end if;
      if anx is not null and not public.has_done(me,anx,'post') then raise exception 'Answer the anxiety questionnaire before the post-test'; end if;
    end if;
    if a.purpose='post_questionnaire' then
      if not public.stage_open('post_questionnaire') then raise exception 'This questionnaire is not open yet'; end if;
      if not public.stage_done(me,'posttest') then raise exception 'This questionnaire opens after the post-test'; end if;
    end if;
  end if;
  single:=a.purpose not in ('intervention','practice');
  select * into t from public.activity_attempts where student_id=me and activity_id=a.id and context=ctx and status='open' order by attempt_no desc limit 1;
  if not found then
    select count(*) into n from public.activity_attempts where student_id=me and activity_id=a.id and context=ctx;
    if single and n>0 then raise exception 'You have already completed this'; end if;
    if a.kind in ('quiz','reading') and (p_conf is null or p_conf not between 1 and 10) then raise exception 'Set the confidence meter first'; end if;
    insert into public.activity_attempts(student_id,activity_id,context,attempt_no,conf_before)
      values(me,a.id,ctx,n+1,case when a.kind in ('quiz','reading') then p_conf end) returning * into t;
  end if;
  return json_build_object('attempt',t.id,'answers',t.answers,'learn',not single,
    'activity',json_build_object('id',a.id,'kind',a.kind,'purpose',a.purpose,'title',a.title,'skill',a.skill,'segment',a.segment,'media_url',a.media_url,'intro',a.intro,'passage',a.passage,'questions',a.questions));
end $$;

-- interventions and practice: each answer is checked at once and the explanation is returned
create or replace function public.answer_question(p_attempt uuid,p_idx int,p_answer jsonb) returns json language plpgsql security definer set search_path=public as $$
declare t public.activity_attempts; a public.activities; k jsonb; ans jsonb;
begin
  select * into t from public.activity_attempts where id=p_attempt and student_id=auth.uid() and status='open'; if not found then raise exception 'Attempt not found'; end if;
  select * into a from public.activities where id=t.activity_id;
  if a.purpose not in ('intervention','practice') or a.kind not in ('quiz','reading') then raise exception 'Answers are checked at the end of this test'; end if;
  if p_idx<0 or p_idx>=jsonb_array_length(a.questions) then raise exception 'Bad question number'; end if;
  select keys->p_idx into k from public.activity_keys where activity_id=a.id;
  if t.answers ? p_idx::text then ans:=t.answers->p_idx::text;
  else ans:=p_answer; update public.activity_attempts set answers=answers||jsonb_build_object(p_idx::text,p_answer) where id=t.id; end if;
  return json_build_object('correct',public.q_correct(k,ans),'answer',k->'answer','explanation',k->>'explanation','given',ans);
end $$;

create or replace function public.finish_activity(p_attempt uuid,p_answers jsonb) returns json language plpgsql security definer set search_path=public as $$
declare t public.activity_attempts; a public.activities; ks jsonb; n int; i int; s int:=0; ok_ jsonb:='[]'::jsonb; ans jsonb; given jsonb:='[]'::jsonb; c boolean;
  by_skill jsonb:='{}'::jsonb; sk text; v int; learn boolean; q jsonb;
begin
  select * into t from public.activity_attempts where id=p_attempt and student_id=auth.uid() and status='open'; if not found then raise exception 'Attempt not found or already submitted'; end if;
  select * into a from public.activities where id=t.activity_id;
  n:=jsonb_array_length(a.questions); learn:=a.purpose in ('intervention','practice');
  if a.kind='questionnaire' then
    if jsonb_typeof(p_answers)<>'array' or jsonb_array_length(p_answers)<>n then raise exception 'Answer every statement'; end if;
    for i in 0..n-1 loop
      if jsonb_typeof(p_answers->i)<>'number' or (p_answers->>i)::int not between 1 and 5 then raise exception 'Answer every statement'; end if;
      v:=(p_answers->>i)::int; if coalesce((a.questions->i->>'reverse')::boolean,false) then v:=6-v; end if; s:=s+v;
    end loop;
    update public.activity_attempts set status='done',answers=p_answers,score=s,total=5*n,pct=round(100.0*(s-n)/nullif(4*n,0),2),
      detail=jsonb_build_object('mean',round(s::numeric/nullif(n,0),3)),finished_at=now() where id=t.id;
    return json_build_object('done',true);
  end if;
  select keys into ks from public.activity_keys where activity_id=a.id;
  if not learn and (jsonb_typeof(p_answers)<>'array' or jsonb_array_length(p_answers)<>n) then raise exception 'Answer every question'; end if;
  for i in 0..n-1 loop
    if learn then ans:=t.answers->i::text; else ans:=p_answers->i; end if;
    if ans is null or ans='null'::jsonb then
      if not learn then raise exception 'Answer every question'; end if;
      ans:='null'::jsonb;
    end if;
    c:=public.q_correct(ks->i,nullif(ans,'null'::jsonb)); if c then s:=s+1; end if;
    ok_:=ok_||to_jsonb(c); given:=given||jsonb_build_array(ans);
    q:=a.questions->i; sk:=coalesce(q->>'skill',a.skill);
    if sk is not null then
      by_skill:=jsonb_set(by_skill,array[sk],jsonb_build_object('c',coalesce((by_skill->sk->>'c')::int,0)+case when c then 1 else 0 end,'n',coalesce((by_skill->sk->>'n')::int,0)+1));
    end if;
  end loop;
  update public.activity_attempts set status='done',answers=given,score=s,total=n,pct=round(100.0*s/nullif(n,0),2),
    detail=jsonb_build_object('correct',ok_,'by_skill',by_skill),finished_at=now() where id=t.id;
  if learn then return json_build_object('score',s,'total',n,'correct',ok_,'keys',ks,'given',given);
  else return json_build_object('score',s,'total',n); end if;
end $$;

create or replace function public.set_conf_after(p_attempt uuid,p_value int) returns void language plpgsql security definer set search_path=public as $$
begin
  update public.activity_attempts set conf_after=p_value where id=p_attempt and student_id=auth.uid() and status='done' and conf_after is null;
  if not found then raise exception 'Could not save the check-in'; end if;
end $$;

-- ================================================================ attendance / live class
create or replace function public.set_live(p_on boolean) returns void language plpgsql security definer set search_path=public as $$
declare l public.live_class; sid uuid;
begin
  if not public.is_instructor() then raise exception 'Not allowed'; end if;
  select * into l from public.live_class where id=1;
  if p_on then
    if l.url is null then raise exception 'Save a meeting link first'; end if;
    if l.is_live then return; end if;
    insert into public.class_sessions(title,mode,created_by) values(coalesce(l.title,'Live class'),'live',auth.uid()) returning id into sid;
    update public.live_class set is_live=true,session_id=sid,updated_by=auth.uid(),updated_at=now() where id=1;
  else
    update public.class_sessions set ended_at=now() where id=l.session_id and ended_at is null;
    update public.live_class set is_live=false,updated_by=auth.uid(),updated_at=now() where id=1;
  end if;
end $$;

create or replace function public.join_live() returns text language plpgsql security definer set search_path=public as $$
declare l public.live_class; st timestamptz;
begin
  select * into l from public.live_class where id=1;
  if not l.is_live or l.url is null then raise exception 'No class is live right now'; end if;
  if public.auth_role()='student' and l.session_id is not null then
    select started_at into st from public.class_sessions where id=l.session_id;
    insert into public.attendance(session_id,student_id,status) values(l.session_id,auth.uid(),case when now()-st>interval '10 minutes' then 'late' else 'present' end) on conflict do nothing;
  end if;
  return l.url;
end $$;

-- ================================================================ forum
create or replace function public.classmates() returns table(id uuid,full_name text) language sql stable security definer set search_path=public as $$
  select p.id,p.full_name from public.profiles p where p.role='student' and p.id<>auth.uid() and auth.uid() is not null order by p.full_name $$;

create or replace function public.forum_post(p_thread uuid,p_body text) returns uuid language plpgsql security definer set search_path=public as $$
declare p public.profiles; mid uuid;
begin
  select * into p from public.profiles where id=auth.uid(); if not found then raise exception 'Sign in first'; end if;
  if not public.thread_visible(p_thread) then raise exception 'Conversation not found'; end if;
  if coalesce(trim(p_body),'')='' then raise exception 'Write a message first'; end if;
  insert into public.forum_messages(thread_id,author_id,author_name,author_role,body) values(p_thread,p.id,p.full_name,p.role,left(trim(p_body),4000)) returning id into mid;
  update public.forum_threads set last_at=now() where id=p_thread;
  return mid;
end $$;

create or replace function public.forum_new(p_kind text,p_title text,p_peer uuid,p_body text) returns uuid language plpgsql security definer set search_path=public as $$
declare p public.profiles; peer public.profiles; tid uuid; staff boolean:=public.is_instructor();
begin
  select * into p from public.profiles where id=auth.uid(); if not found then raise exception 'Sign in first'; end if;
  if p_kind not in ('public','staff','dm') then raise exception 'Unknown conversation type'; end if;
  if coalesce(trim(p_title),'')='' then raise exception 'Add a title'; end if;
  if p_kind='dm' then
    if staff then raise exception 'Use a private message to the student instead'; end if;
    select * into peer from public.profiles where id=p_peer and role='student' and id<>p.id; if not found then raise exception 'Choose a classmate'; end if;
    select id into tid from public.forum_threads where kind='dm' and ((created_by=p.id and peer_id=peer.id) or (created_by=peer.id and peer_id=p.id)) limit 1;
  elsif p_kind='staff' then
    if staff then select * into peer from public.profiles where id=p_peer and role='student'; if not found then raise exception 'Choose a student'; end if; end if;
  end if;
  if tid is null then
    insert into public.forum_threads(kind,title,created_by,creator_name,peer_id,peer_name) values(p_kind,left(trim(p_title),200),p.id,p.full_name,peer.id,peer.full_name) returning id into tid;
  end if;
  perform public.forum_post(tid,p_body);
  return tid;
end $$;

create or replace function public.forum_remove(p_message uuid) returns void language plpgsql security definer set search_path=public as $$
begin
  update public.forum_messages set removed=true,body='' where id=p_message and (author_id=auth.uid() or public.is_instructor());
  if not found then raise exception 'Not allowed'; end if;
end $$;

-- ================================================================ live quiz games
create or replace function public.live_host(p_activity uuid,p_seconds int) returns json language plpgsql security definer set search_path=public as $$
declare a public.activities; g public.live_games; c text;
begin
  if not public.is_instructor() then raise exception 'Not allowed'; end if;
  select * into a from public.activities where id=p_activity and kind in ('quiz','reading'); if not found then raise exception 'Choose a quiz'; end if;
  if jsonb_array_length(a.questions)=0 then raise exception 'This quiz has no questions'; end if;
  loop c:=lpad((floor(random()*1000000))::int::text,6,'0'); exit when not exists(select 1 from public.live_games where code=c); end loop;
  insert into public.live_games(code,activity_id,host_id,title,n,seconds) values(c,a.id,auth.uid(),a.title,jsonb_array_length(a.questions),greatest(5,least(coalesce(p_seconds,20),120))) returning * into g;
  return row_to_json(g);
end $$;

create or replace function public.live_step(p_game uuid,p_action text) returns void language plpgsql security definer set search_path=public as $$
declare g public.live_games; a public.activities; k jsonb; i int; q jsonb;
begin
  select * into g from public.live_games where id=p_game and host_id=auth.uid(); if not found then raise exception 'Game not found'; end if;
  select * into a from public.activities where id=g.activity_id;
  if p_action='end' then update public.live_games set phase='ended' where id=g.id; return; end if;
  if p_action='reveal' and g.phase='question' then
    select keys->g.q_index into k from public.activity_keys where activity_id=a.id;
    update public.live_games set phase='reveal',reveal=jsonb_build_object('answer',k->'answer','explanation',k->>'explanation',
      'counts',coalesce((select jsonb_object_agg(x.ans,x.c) from (select answer::text ans,count(*) c from public.live_answers where game_id=g.id and q_index=g.q_index group by 1) x),'{}'::jsonb)) where id=g.id;
    return;
  end if;
  if p_action='next' and g.phase in ('lobby','reveal') then
    i:=g.q_index+1;
    if i>=g.n then update public.live_games set phase='ended' where id=g.id; return; end if;
    q:=a.questions->i;
    update public.live_games set q_index=i,phase='question',q_started_at=now(),current=q,reveal=null where id=g.id;
    return;
  end if;
  raise exception 'That step is not possible now';
end $$;

create or replace function public.live_join(p_code text) returns uuid language plpgsql security definer set search_path=public as $$
declare g public.live_games; p public.profiles;
begin
  select * into p from public.profiles where id=auth.uid(); if not found or p.role<>'student' then raise exception 'Students only'; end if;
  select * into g from public.live_games where code=trim(p_code) and phase<>'ended'; if not found then raise exception 'No live quiz with that code'; end if;
  insert into public.live_players(game_id,student_id,name) values(g.id,p.id,p.full_name) on conflict do nothing;
  return g.id;
end $$;

create or replace function public.live_answer(p_game uuid,p_answer jsonb) returns json language plpgsql security definer set search_path=public as $$
declare g public.live_games; k jsonb; c boolean; pts int:=0; left_ numeric;
begin
  select * into g from public.live_games where id=p_game and phase='question'; if not found then raise exception 'Time is up for this question'; end if;
  if not exists(select 1 from public.live_players where game_id=g.id and student_id=auth.uid()) then raise exception 'Join the quiz first'; end if;
  left_:=g.seconds-extract(epoch from now()-g.q_started_at);
  if left_<-1 then raise exception 'Time is up for this question'; end if;
  select keys->g.q_index into k from public.activity_keys where activity_id=g.activity_id;
  c:=public.q_correct(k,p_answer);
  if c then pts:=500+round(500*greatest(0,least(1,left_/g.seconds)))::int; end if;
  insert into public.live_answers(game_id,student_id,q_index,answer,correct,points) values(g.id,auth.uid(),g.q_index,p_answer,c,pts);
  update public.live_players set score=score+pts where game_id=g.id and student_id=auth.uid();
  return json_build_object('received',true);
exception when unique_violation then raise exception 'You have already answered';
end $$;

-- ================================================================ Google Sheet export (called by the Apps Script with the secret)
create or replace function public.get_sheet_secret() returns text language plpgsql security definer set search_path=public as $$
begin
  if public.auth_role()<>'researcher' then raise exception 'Researcher only'; end if;
  return (select value from public.app_secrets where key='sheet');
end $$;

create or replace function public.sheet_export(p_secret text) returns json language plpgsql security definer set search_path=public as $$
begin
  if p_secret is null or p_secret<>(select value from public.app_secrets where key='sheet') then raise exception 'Not allowed'; end if;
  return json_build_object(
   'Students',(select coalesce(json_agg(json_build_object('Research ID',s.research_id,'Name',p.full_name,'Student no',s.student_no,'Email',p.email,'Mobile',p.mobile,'Year',s.year,'College',s.college,
       'Gender',s.gender,'Age',s.age,'Place',s.place,'Verified',s.verified,'Consent given',r.consent_at) order by p.full_name),'[]'::json)
     from public.profiles p join public.student_profiles s on s.user_id=p.id left join public.research_progress r on r.student_id=p.id where p.role='student'),
   'Attendance',(select coalesce(json_agg(json_build_object('Class',c.title,'Class date',c.started_at,'Mode',c.mode,'Name',p.full_name,'Student no',s.student_no,'Research ID',s.research_id,
       'Status',coalesce(t.status,'absent'),'Joined at',t.joined_at) order by c.started_at,p.full_name),'[]'::json)
     from public.class_sessions c cross join public.profiles p join public.student_profiles s on s.user_id=p.id
     left join public.attendance t on t.session_id=c.id and t.student_id=p.id where p.role='student'),
   'Test scores',(select coalesce(json_agg(json_build_object('Name',p.full_name,'Student no',s.student_no,'Research ID',s.research_id,'Stage',a.purpose,'Activity',a.title,'Skill',a.skill,'Segment',a.segment,
       'Attempt',t.attempt_no,'Score',t.score,'Out of',t.total,'Percent',t.pct,'Confidence before',t.conf_before,'Confidence after',t.conf_after,'By skill',t.detail->'by_skill',
       'Started',t.started_at,'Finished',t.finished_at) order by t.finished_at),'[]'::json)
     from public.activity_attempts t join public.activities a on a.id=t.activity_id join public.profiles p on p.id=t.student_id join public.student_profiles s on s.user_id=p.id
     where t.status='done' and a.kind in ('quiz','reading')),
   'Questionnaires',(select coalesce(json_agg(json_build_object('Name',p.full_name,'Student no',s.student_no,'Research ID',s.research_id,'Questionnaire',a.title,'Type',a.purpose,'Time point',t.context,
       'Total',t.score,'Maximum',t.total,'Mean (1-5)',t.detail->'mean','Answers',t.answers,'Finished',t.finished_at) order by t.finished_at),'[]'::json)
     from public.activity_attempts t join public.activities a on a.id=t.activity_id join public.profiles p on p.id=t.student_id join public.student_profiles s on s.user_id=p.id
     where t.status='done' and a.kind='questionnaire'),
   'Video quizzes',(select coalesce(json_agg(json_build_object('Name',p.full_name,'Student no',s.student_no,'Research ID',s.research_id,'Video',v.title,'Score',q.score,'Out of',q.total,'Attempted at',q.created_at,
       'Video completed at',g.completed_at) order by q.created_at),'[]'::json)
     from public.video_quiz_attempts q join public.videos v on v.id=q.video_id join public.profiles p on p.id=q.student_id join public.student_profiles s on s.user_id=p.id
     left join public.video_progress g on g.video_id=q.video_id and g.student_id=q.student_id));
end $$;

-- ================================================================ function permissions
do $$ declare f text; begin
  foreach f in array array['save_activity(uuid,jsonb,jsonb)','set_activity_status(uuid,text)','research_ack(text)','research_state()','start_activity(uuid,text,int)','answer_question(uuid,int,jsonb)',
    'finish_activity(uuid,jsonb)','set_conf_after(uuid,int)','set_live(boolean)','join_live()','classmates()','forum_post(uuid,text)','forum_new(text,text,uuid,text)','forum_remove(uuid)',
    'live_host(uuid,int)','live_step(uuid,text)','live_join(text)','live_answer(uuid,jsonb)','get_sheet_secret()'] loop
    execute format('revoke all on function public.%s from public,anon',f);
    execute format('grant execute on function public.%s to authenticated',f);
  end loop; end $$;
revoke all on function public.sheet_export(text) from public;
grant execute on function public.sheet_export(text) to anon,authenticated;

do $$ declare t text; begin
  foreach t in array array['live_games','live_players','forum_messages','research_stages'] loop
    begin execute format('alter publication supabase_realtime add table public.%I',t); exception when duplicate_object then null; when undefined_object then null; end;
  end loop; end $$;
