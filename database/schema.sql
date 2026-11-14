-- LIVE LANGUAGE COACH  |  schema v2  |  run once in Supabase > SQL Editor (safe to re-run)
-- Builds on the v1 live-session tables (profiles, sessions, responses) and adds the
-- research platform: students, cohort, skills, assessments, rubrics, questionnaire,
-- feedback, notifications, audit log, storage buckets and row level security.

create extension if not exists pgcrypto;

-- ------------------------------------------------------------------ profiles
create table if not exists public.profiles(
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text, role text not null default 'student', created_at timestamptz default now());
alter table public.profiles add column if not exists full_name text;
alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists mobile text;
alter table public.profiles drop constraint if exists profiles_role_check;
update public.profiles set role='student' where role not in ('student','teacher','researcher','guide');
alter table public.profiles add constraint profiles_role_check check(role in ('student','teacher','researcher','guide'));
alter table public.profiles alter column role set default 'student';

-- helper functions (security definer so policies can call them without recursion)
create or replace function public.auth_role() returns text language sql stable security definer set search_path=public as $$
  select role from public.profiles where id=auth.uid() $$;
create or replace function public.is_research() returns boolean language sql stable security definer set search_path=public as $$
  select coalesce(public.auth_role() in ('researcher','guide'),false) $$;
create or replace function public.is_instructor() returns boolean language sql stable security definer set search_path=public as $$
  select coalesce(public.auth_role() in ('teacher','researcher'),false) $$;

create table if not exists public.student_profiles(
  user_id uuid primary key references auth.users(id) on delete cascade,
  age int, place text, gender text, year int check(year between 1 and 3), college text, student_no text,
  research_id text unique, verified boolean not null default false,
  consent_email boolean not null default true, consent_whatsapp boolean not null default false,
  consent_research boolean not null default false, created_at timestamptz default now());

create table if not exists public.teacher_assignments(
  teacher_id uuid not null references auth.users(id) on delete cascade,
  student_id uuid not null references auth.users(id) on delete cascade,
  primary key(teacher_id,student_id));

create or replace function public.can_see_student(sid uuid) returns boolean language sql stable security definer set search_path=public as $$
  select sid=auth.uid() or public.is_research()
      or exists(select 1 from public.teacher_assignments t where t.teacher_id=auth.uid() and t.student_id=sid) $$;

-- ------------------------------------------------------------------ settings
create table if not exists public.app_settings(
  id int primary key default 1 check(id=1),
  phase text not null default 'pre' check(phase in ('pre','intervention','post')),
  week int not null default 1 check(week between 1 and 52),
  rubric jsonb not null default '{"Speaking":{"max":4,"dims":[["Fluency",1],["Pronunciation",1],["Accuracy",1],["Vocabulary",1],["Interaction",1]]},"Writing":{"max":4,"dims":[["Content",1],["Organisation",1],["Grammar",1],["Vocabulary",1],["Mechanics",1]]}}',
  updated_at timestamptz default now());
insert into public.app_settings(id) values(1) on conflict do nothing;

-- ------------------------------------------------------------------ learning content
create table if not exists public.materials(
  id uuid primary key default gen_random_uuid(),
  skill text not null check(skill in ('Listening','Speaking','Reading','Writing','Grammar','Vocabulary')),
  kind text not null check(kind in ('PDF','PPT','Audio','Video','Dialogue','Link')),
  title text not null, url text, storage_path text,
  uploaded_by uuid references auth.users(id) on delete set null, created_at timestamptz default now());

create table if not exists public.skill_unlocks(
  id uuid primary key default gen_random_uuid(),
  student_id uuid references auth.users(id) on delete cascade,   -- null = whole cohort
  skill text not null check(skill in ('Listening','Speaking','Reading','Writing','Grammar','Vocabulary')),
  unlocked boolean not null default true, set_by uuid references auth.users(id) on delete set null,
  created_at timestamptz default now());
create unique index if not exists skill_unlocks_cohort on public.skill_unlocks(skill) where student_id is null;
create unique index if not exists skill_unlocks_student on public.skill_unlocks(student_id,skill) where student_id is not null;

-- ------------------------------------------------------------------ assessment
create table if not exists public.attempts(
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  skill text not null check(skill in ('Listening','Speaking','Reading','Writing','Grammar','Vocabulary')),
  kind text not null check(kind in ('pre','weekly','post')),
  week int not null default 0,
  score numeric, max_score numeric, pct numeric check(pct is null or (pct>=0 and pct<=100)),
  answers jsonb not null default '{}',                       -- original response; never edited
  status text not null default 'scored' check(status in ('scored','pending')),
  created_at timestamptz default now(),
  unique(student_id,skill,kind,week));
create index if not exists attempts_student_idx on public.attempts(student_id,created_at);

create table if not exists public.rubric_scores(
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid not null references public.attempts(id) on delete cascade,
  rater_id uuid references auth.users(id) on delete set null,
  scores jsonb not null, pct numeric not null, remarks text, created_at timestamptz default now());

create table if not exists public.questionnaire_responses(
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  phase text not null check(phase in ('pre','post')),
  instrument text not null default 'PLACEHOLDER - replace with validated instrument',
  items jsonb not null, total int not null, created_at timestamptz default now(),
  unique(student_id,phase));

create table if not exists public.feedback(
  id uuid primary key default gen_random_uuid(),
  attempt_id uuid references public.attempts(id) on delete cascade,
  student_id uuid not null references auth.users(id) on delete cascade,
  skill text not null, band text, body text not null, recommendation text, teacher_remark text,
  source text not null default 'auto' check(source in ('auto','teacher')), created_at timestamptz default now());

create table if not exists public.notifications(
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  channel text not null check(channel in ('email','whatsapp')),
  subject text, body text, status text not null default 'queued', created_at timestamptz default now(), sent_at timestamptz);

create table if not exists public.audit_logs(
  id bigint generated always as identity primary key,
  actor uuid references auth.users(id) on delete set null, action text not null, detail jsonb default '{}', created_at timestamptz default now());

create sequence if not exists public.research_seq start 1;

-- ------------------------------------------------------------------ v1 live tables (kept)
create table if not exists public.sessions(id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade, code text not null unique, title text not null, prompt text not null, activity_type text not null check(activity_type in ('poll','word','quiz','open')), options jsonb not null default '[]', correct_answer text, audience text default 'Students', anonymous_allowed boolean default false, is_open boolean default true, created_at timestamptz default now());
create table if not exists public.responses(id uuid primary key default gen_random_uuid(), session_id uuid not null references public.sessions(id) on delete cascade, participant_id uuid references auth.users(id) on delete set null, participant_name text, answer text not null, is_anonymous boolean default false, created_at timestamptz default now());
create index if not exists sessions_owner_idx on public.sessions(owner_id,created_at desc);
create index if not exists responses_session_idx on public.responses(session_id,created_at);

-- ------------------------------------------------------------------ row level security
do $$ declare t text; begin
  foreach t in array array['profiles','student_profiles','teacher_assignments','app_settings','materials','skill_unlocks','attempts','rubric_scores','questionnaire_responses','feedback','notifications','audit_logs','sessions','responses']
  loop execute format('alter table public.%I enable row level security',t); end loop; end $$;

-- drop v1 policies and any earlier copies of these
do $$ declare r record; begin
  for r in select schemaname,tablename,policyname from pg_policies where schemaname='public' and tablename in ('profiles','student_profiles','teacher_assignments','app_settings','materials','skill_unlocks','attempts','rubric_scores','questionnaire_responses','feedback','notifications','audit_logs','sessions','responses') loop
    execute format('drop policy if exists %I on %I.%I',r.policyname,r.schemaname,r.tablename); end loop; end $$;

-- profiles: nobody can change their own role
create policy profiles_select on public.profiles for select to authenticated using(id=auth.uid() or public.can_see_student(id) or public.is_instructor());
revoke insert,update,delete on public.profiles from anon,authenticated;
grant select on public.profiles to authenticated;
grant update(full_name,mobile) on public.profiles to authenticated;
create policy profiles_update_self on public.profiles for update to authenticated using(id=auth.uid()) with check(id=auth.uid());

create policy sp_select on public.student_profiles for select to authenticated using(public.can_see_student(user_id));
create policy sp_update_self on public.student_profiles for update to authenticated using(user_id=auth.uid()) with check(user_id=auth.uid());
revoke insert,update,delete on public.student_profiles from anon,authenticated;
grant select on public.student_profiles to authenticated;
grant update(age,place,gender,college,consent_email,consent_whatsapp,consent_research) on public.student_profiles to authenticated;

create policy ta_select on public.teacher_assignments for select to authenticated using(teacher_id=auth.uid() or public.is_research());
revoke insert,update,delete on public.teacher_assignments from anon,authenticated;
grant select on public.teacher_assignments to authenticated;

create policy settings_select on public.app_settings for select to authenticated using(true);
create policy settings_update on public.app_settings for update to authenticated using(public.auth_role()='researcher') with check(public.auth_role()='researcher');
revoke insert,delete on public.app_settings from anon,authenticated;
grant select,update on public.app_settings to authenticated;

create policy materials_select on public.materials for select to authenticated using(true);
create policy materials_write on public.materials for all to authenticated using(public.is_instructor()) with check(public.is_instructor() and uploaded_by=auth.uid());
grant select,insert,update,delete on public.materials to authenticated;

create policy unlocks_select on public.skill_unlocks for select to authenticated using(student_id is null or public.can_see_student(student_id));
revoke insert,update,delete on public.skill_unlocks from anon,authenticated;
grant select on public.skill_unlocks to authenticated;

create policy attempts_select on public.attempts for select to authenticated using(public.can_see_student(student_id));
create policy attempts_insert on public.attempts for insert to authenticated with check(student_id=auth.uid() and public.auth_role()='student'
  and ((status='scored' and skill in ('Listening','Reading','Grammar','Vocabulary') and pct is not null) or (status='pending' and skill in ('Speaking','Writing') and pct is null)));
revoke update,delete on public.attempts from anon,authenticated;
grant select,insert on public.attempts to authenticated;

create policy rubric_select on public.rubric_scores for select to authenticated using(exists(select 1 from public.attempts a where a.id=attempt_id and public.can_see_student(a.student_id)));
revoke insert,update,delete on public.rubric_scores from anon,authenticated;
grant select on public.rubric_scores to authenticated;

-- questionnaire = restricted research data: owner and researcher/guide only
create policy qr_select on public.questionnaire_responses for select to authenticated using(student_id=auth.uid() or public.is_research());
create policy qr_insert on public.questionnaire_responses for insert to authenticated with check(student_id=auth.uid() and public.auth_role()='student');
revoke update,delete on public.questionnaire_responses from anon,authenticated;
grant select,insert on public.questionnaire_responses to authenticated;

create policy fb_select on public.feedback for select to authenticated using(public.can_see_student(student_id));
create policy fb_insert_self on public.feedback for insert to authenticated with check(student_id=auth.uid() and source='auto'
  and (attempt_id is null or exists(select 1 from public.attempts a where a.id=attempt_id and a.student_id=auth.uid() and a.status='scored')));
create policy fb_update_staff on public.feedback for update to authenticated using(public.is_instructor() and public.can_see_student(student_id)) with check(public.is_instructor() and public.can_see_student(student_id));
revoke delete on public.feedback from anon,authenticated;
grant select,insert on public.feedback to authenticated;
grant update(teacher_remark) on public.feedback to authenticated;

create policy notif_select on public.notifications for select to authenticated using(student_id=auth.uid() or public.is_research());
revoke insert,update,delete on public.notifications from anon,authenticated;
grant select on public.notifications to authenticated;

create policy audit_select on public.audit_logs for select to authenticated using(public.is_research());
create policy audit_insert on public.audit_logs for insert to authenticated with check(actor=auth.uid() and public.auth_role() in ('researcher','guide','teacher'));
revoke update,delete on public.audit_logs from anon,authenticated;
grant select,insert on public.audit_logs to authenticated;

create policy sessions_owner on public.sessions for all to authenticated using(owner_id=auth.uid()) with check(owner_id=auth.uid() and public.is_instructor());
create policy responses_owner_read on public.responses for select to authenticated using(exists(select 1 from public.sessions s where s.id=session_id and s.owner_id=auth.uid()));
revoke insert,update,delete on public.responses from anon,authenticated;
grant select on public.responses to authenticated;
grant select,insert,update,delete on public.sessions to authenticated;

-- ------------------------------------------------------------------ RPCs (the only write paths for sensitive data)
create or replace function public.verify_student(p_user uuid) returns text language plpgsql security definer set search_path=public as $$
declare rid text;
begin
  if public.auth_role()<>'researcher' then raise exception 'Only the researcher can verify students'; end if;
  update public.student_profiles set verified=true,
    research_id=coalesce(research_id,'R'||lpad(nextval('public.research_seq')::text,3,'0'))
    where user_id=p_user returning research_id into rid;
  if rid is null then raise exception 'Student not found'; end if;
  insert into public.audit_logs(actor,action,detail) values(auth.uid(),'verify_student',jsonb_build_object('student',p_user,'research_id',rid));
  return rid;
end $$;

create or replace function public.set_role(p_user uuid,p_role text) returns void language plpgsql security definer set search_path=public as $$
begin
  if public.auth_role()<>'researcher' then raise exception 'Only the researcher can change roles'; end if;
  if p_role not in ('student','teacher','guide') then raise exception 'Invalid role'; end if;
  if p_user=auth.uid() then raise exception 'You cannot change your own role'; end if;
  update public.profiles set role=p_role where id=p_user;
  insert into public.audit_logs(actor,action,detail) values(auth.uid(),'set_role',jsonb_build_object('user',p_user,'role',p_role));
end $$;

create or replace function public.assign_teacher(p_student uuid,p_teacher uuid) returns void language plpgsql security definer set search_path=public as $$
begin
  if public.auth_role()<>'researcher' then raise exception 'Only the researcher can assign teachers'; end if;
  delete from public.teacher_assignments where student_id=p_student;
  if p_teacher is not null then insert into public.teacher_assignments(teacher_id,student_id) values(p_teacher,p_student); end if;
  insert into public.audit_logs(actor,action,detail) values(auth.uid(),'assign_teacher',jsonb_build_object('student',p_student,'teacher',p_teacher));
end $$;

create or replace function public.set_unlock(p_student uuid,p_skill text,p_on boolean) returns void language plpgsql security definer set search_path=public as $$
begin
  if not public.is_instructor() then raise exception 'Not allowed'; end if;
  if p_student is not null and not public.can_see_student(p_student) then raise exception 'Student not assigned to you'; end if;
  delete from public.skill_unlocks where skill=p_skill and student_id is not distinct from p_student;
  insert into public.skill_unlocks(student_id,skill,unlocked,set_by) values(p_student,p_skill,p_on,auth.uid());
  insert into public.audit_logs(actor,action,detail) values(auth.uid(),'set_unlock',jsonb_build_object('student',p_student,'skill',p_skill,'on',p_on));
end $$;

create or replace function public.score_attempt(p_attempt uuid,p_scores jsonb,p_pct numeric,p_remarks text,p_rec text) returns void language plpgsql security definer set search_path=public as $$
declare a public.attempts%rowtype; b text;
begin
  if not public.is_instructor() then raise exception 'Not allowed'; end if;
  select * into a from public.attempts where id=p_attempt;
  if not found then raise exception 'Attempt not found'; end if;
  if not public.can_see_student(a.student_id) then raise exception 'Student not assigned to you'; end if;
  if a.skill not in ('Speaking','Writing') then raise exception 'Only Speaking and Writing use rubric scoring'; end if;
  if p_pct is null or p_pct<0 or p_pct>100 then raise exception 'Invalid score'; end if;
  insert into public.rubric_scores(attempt_id,rater_id,scores,pct,remarks) values(p_attempt,auth.uid(),p_scores,p_pct,p_remarks);
  update public.attempts set pct=p_pct,score=round(p_pct),max_score=100,status='scored' where id=p_attempt;
  b:=case when p_pct>=80 then 'Excellent' when p_pct>=60 then 'Good' when p_pct>=40 then 'Developing' else 'Needs support' end;
  insert into public.feedback(attempt_id,student_id,skill,band,body,recommendation,teacher_remark,source)
    values(p_attempt,a.student_id,a.skill,b,'Teacher rubric evaluation: '||round(p_pct)||'% ('||b||').',p_rec,p_remarks,'teacher');
end $$;

grant execute on function public.verify_student(uuid), public.set_role(uuid,text), public.assign_teacher(uuid,uuid),
  public.set_unlock(uuid,text,boolean), public.score_attempt(uuid,jsonb,numeric,text,text) to authenticated;

-- v1 public live-session functions (kept; student role required unless conference mode)
create or replace function public.get_public_session(join_code text)
returns table(session_id uuid,session_title text,session_prompt text,activity_type text,activity_options jsonb,session_open boolean,anonymous_allowed boolean)
language sql security definer set search_path=public as $$
 select id,title,prompt,activity_type,options,is_open,anonymous_allowed from public.sessions where code=join_code limit 1; $$;
grant execute on function public.get_public_session(text) to anon,authenticated;

create or replace function public.submit_session_response(join_code text,answer_text text,display_name text default null)
returns jsonb language plpgsql security definer set search_path=public as $$
declare s public.sessions%rowtype; rid uuid;
begin
 select * into s from public.sessions where code=join_code for share;
 if not found then raise exception 'Session code not found'; end if;
 if not s.is_open then raise exception 'This session is paused'; end if;
 if auth.uid() is null and not s.anonymous_allowed then raise exception 'Sign in is required for this session'; end if;
 if length(trim(coalesce(answer_text,'')))=0 or length(answer_text)>3000 then raise exception 'Response is empty or too long'; end if;
 if s.activity_type in ('poll','quiz') and not(s.options ? answer_text) then raise exception 'Invalid answer option'; end if;
 insert into public.responses(session_id,participant_id,participant_name,answer,is_anonymous)
 values(s.id,auth.uid(),nullif(trim(display_name),''),trim(answer_text),auth.uid() is null) returning id into rid;
 return jsonb_build_object('accepted',true,'response_id',rid);
end $$;
grant execute on function public.submit_session_response(text,text,text) to anon,authenticated;

-- ------------------------------------------------------------------ triggers
-- every sign-up becomes a STUDENT. Teacher / guide roles are granted by the researcher (set_role).
create table if not exists public.role_invites(email text primary key, role text not null check(role in ('teacher','researcher','guide')), created_at timestamptz default now());
alter table public.role_invites enable row level security;
revoke all on public.role_invites from anon,authenticated;
create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$
declare m jsonb:=coalesce(new.raw_user_meta_data,'{}'::jsonb); r text;
begin
  select role into r from public.role_invites where lower(email)=lower(new.email);
  insert into public.profiles(id,display_name,full_name,email,mobile,role)
    values(new.id,coalesce(m->>'full_name',''),m->>'full_name',new.email,m->>'mobile',coalesce(r,'student')) on conflict(id) do nothing;
  insert into public.student_profiles(user_id,age,place,gender,year,college,student_no,consent_email,consent_whatsapp,consent_research)
    values(new.id,
      case when (m->>'age') ~ '^\d{1,2}$' then (m->>'age')::int end, m->>'place', m->>'gender',
      case when (m->>'year') ~ '^[123]$' then (m->>'year')::int end, m->>'college', m->>'student_no',
      coalesce((m->>'consent_email')='true',true), coalesce((m->>'consent_whatsapp')='true',false), coalesce((m->>'consent_research')='true',false))
    on conflict(user_id) do nothing;
  if r is not null then delete from public.role_invites where lower(email)=lower(new.email); end if;
  return new;
end $$;
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users for each row execute procedure public.handle_new_user();

-- feedback -> queued notifications, only for channels the student consented to
create or replace function public.queue_notifications() returns trigger language plpgsql security definer set search_path=public as $$
declare c public.student_profiles%rowtype;
begin
  select * into c from public.student_profiles where user_id=new.student_id;
  if c.consent_email then insert into public.notifications(student_id,channel,subject,body) values(new.student_id,'email','Feedback: '||new.skill,new.body); end if;
  if c.consent_whatsapp then insert into public.notifications(student_id,channel,subject,body) values(new.student_id,'whatsapp','Feedback: '||new.skill,left(new.body,300)); end if;
  return new;
end $$;
drop trigger if exists feedback_notify on public.feedback;
create trigger feedback_notify after insert on public.feedback for each row execute procedure public.queue_notifications();

-- ------------------------------------------------------------------ realtime + storage
do $$ begin alter publication supabase_realtime add table public.responses; exception when duplicate_object then null; when undefined_object then null; end $$;

insert into storage.buckets(id,name,public) values('materials','materials',false),('recordings','recordings',false) on conflict(id) do nothing;
drop policy if exists "llc materials read" on storage.objects;
drop policy if exists "llc materials write" on storage.objects;
drop policy if exists "llc recordings insert" on storage.objects;
drop policy if exists "llc recordings read" on storage.objects;
create policy "llc materials read" on storage.objects for select to authenticated using(bucket_id='materials');
create policy "llc materials write" on storage.objects for insert to authenticated with check(bucket_id='materials' and public.is_instructor());
create policy "llc recordings insert" on storage.objects for insert to authenticated with check(bucket_id='recordings' and (storage.foldername(name))[1]=auth.uid()::text);
create policy "llc recordings read" on storage.objects for select to authenticated using(bucket_id='recordings' and (
  (storage.foldername(name))[1]=auth.uid()::text or public.is_research()
  or exists(select 1 from public.teacher_assignments t where t.teacher_id=auth.uid() and t.student_id::text=(storage.foldername(name))[1])));

-- ------------------------------------------------------------------ FIRST-TIME SETUP (run separately, after you register)
-- insert into public.role_invites(email,role) values('YOUR-EMAIL@example.com','researcher');  -- applied automatically when that email registers
-- update public.profiles set role='guide'      where email='GUIDE-EMAIL@example.com';
-- After that, the researcher can promote teachers from the Cohort tab.
