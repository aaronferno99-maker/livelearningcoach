-- LIVE LANGUAGE COACH - schema v7 (run AFTER schema_v6.sql; safe to run more than once)
-- Adds: year of birth on registration, staff password reset, in-site notifications (bell icon).

-- ================================================================ year of birth
alter table public.student_profiles add column if not exists birth_year int check(birth_year between 1950 and 2015);

create or replace function public.handle_new_user() returns trigger language plpgsql security definer set search_path=public as $$
declare m jsonb:=coalesce(new.raw_user_meta_data,'{}'::jsonb); r text; b_year int;
begin
  select role into r from public.role_invites where lower(email)=lower(new.email);
  b_year:=case when (m->>'birth_year') ~ '^(19[5-9][0-9]|20(0[0-9]|1[0-5]))$' then (m->>'birth_year')::int end;
  insert into public.profiles(id,display_name,full_name,email,mobile,role)
    values(new.id,coalesce(m->>'full_name',''),m->>'full_name',new.email,m->>'mobile',coalesce(r,'student')) on conflict(id) do nothing;
  insert into public.student_profiles(user_id,age,birth_year,place,gender,year,college,student_no,consent_email,consent_whatsapp,consent_research)
    values(new.id,
      coalesce(case when (m->>'age') ~ '^\d{1,2}$' then (m->>'age')::int end, case when b_year is not null then extract(year from now())::int-b_year end),
      b_year, m->>'place', m->>'gender',
      case when (m->>'year') ~ '^[123]$' then (m->>'year')::int end, m->>'college', m->>'student_no',
      coalesce((m->>'consent_email')='true',true), coalesce((m->>'consent_whatsapp')='true',false), coalesce((m->>'consent_research')='true',false))
    on conflict(user_id) do nothing;
  if r is not null then delete from public.role_invites where lower(email)=lower(new.email); end if;
  return new;
end $$;

-- ================================================================ staff password reset (no email needed)
create or replace function public.staff_reset_password(p_student uuid,p_password text) returns void
language plpgsql security definer set search_path=public,extensions as $$
begin
  if not public.is_instructor() then raise exception 'Only the researcher or a professor can reset passwords'; end if;
  if not exists(select 1 from public.profiles where id=p_student and role='student') then raise exception 'You can reset passwords for students only'; end if;
  if p_password is null or length(p_password)<6 then raise exception 'The new password must have at least 6 characters'; end if;
  update auth.users set encrypted_password=extensions.crypt(p_password,extensions.gen_salt('bf')),updated_at=now() where id=p_student;
  insert into public.audit_logs(actor,action,detail) values(auth.uid(),'reset_password',jsonb_build_object('student',p_student));
end $$;

-- ================================================================ in-site notifications
create table if not exists public.inbox(
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  kind text not null,
  title text not null, body text,
  link jsonb,                                   -- {tab:"forum", r:{thread:"..."}}
  read_at timestamptz, created_at timestamptz default now());
create index if not exists inbox_user on public.inbox(user_id,created_at desc);
alter table public.inbox enable row level security;
revoke all on public.inbox from anon,authenticated;
drop policy if exists inbox_select on public.inbox;
create policy inbox_select on public.inbox for select to authenticated using(user_id=auth.uid());
grant select on public.inbox to authenticated;

create or replace function public.notify(p_users uuid[],p_kind text,p_title text,p_body text,p_link jsonb) returns void
language sql security definer set search_path=public as $$
  insert into public.inbox(user_id,kind,title,body,link)
  select distinct u,p_kind,left(p_title,200),left(p_body,300),p_link from unnest(p_users) u where u is not null;
$$;
revoke all on function public.notify(uuid[],text,text,text,jsonb) from public,anon,authenticated;
create or replace function public.ids_of(p_roles text[]) returns uuid[] language sql stable security definer set search_path=public as $$
  select coalesce(array_agg(id),'{}') from public.profiles where role=any(p_roles) $$;
revoke all on function public.ids_of(text[]) from public,anon,authenticated;

create or replace function public.inbox_summary() returns json language sql stable security definer set search_path=public as $$
  select json_build_object(
    'unread',(select count(*) from public.inbox where user_id=auth.uid() and read_at is null),
    'items',coalesce((select json_agg(x order by x.created_at desc) from (select id,kind,title,body,link,read_at,created_at from public.inbox where user_id=auth.uid() order by created_at desc limit 40) x),'[]'::json)) $$;
create or replace function public.inbox_read(p_id uuid) returns void language sql security definer set search_path=public as $$
  update public.inbox set read_at=now() where user_id=auth.uid() and read_at is null and (p_id is null or id=p_id) $$;
create or replace function public.inbox_clear() returns void language sql security definer set search_path=public as $$
  delete from public.inbox where user_id=auth.uid() and read_at is not null $$;
revoke all on function public.inbox_summary() from public,anon; grant execute on function public.inbox_summary() to authenticated;
revoke all on function public.inbox_read(uuid) from public,anon; grant execute on function public.inbox_read(uuid) to authenticated;
revoke all on function public.inbox_clear() from public,anon; grant execute on function public.inbox_clear() to authenticated;

-- ---------------------------------------------------------------- what creates a notification
-- discussion: replies and new conversations
create or replace function public.trg_inbox_forum() returns trigger language plpgsql security definer set search_path=public as $$
declare t public.forum_threads; staff uuid[]:=public.ids_of(array['teacher','researcher']); arole text:=new.author_role; who uuid[]; first boolean; ttl text; lnk jsonb;
begin
  select * into t from public.forum_threads where id=new.thread_id;
  first:=not exists(select 1 from public.forum_messages where thread_id=t.id and id<>new.id);
  lnk:=jsonb_build_object('tab','forum','r',jsonb_build_object('thread',t.id,'k',t.kind));
  if t.kind='dm' then who:=array[t.created_by,t.peer_id]; ttl:=coalesce(new.author_name,'A classmate')||' sent you a message';
  elsif t.kind='staff' then
    if arole='student' then who:=staff; ttl:='Private question from '||coalesce(new.author_name,'a student');
    else who:=array[case when t.peer_id is not null then t.peer_id else t.created_by end]; ttl:=coalesce(new.author_name,'Your teacher')||' replied to you'; end if;
  else
    if first then who:=case when arole='student' then staff else public.ids_of(array['student']) end; ttl:='New topic: '||t.title;
    else who:=array(select distinct author_id from public.forum_messages where thread_id=t.id and author_id is not null)||t.created_by||case when arole='student' then staff else '{}'::uuid[] end;
      ttl:=coalesce(new.author_name,'Someone')||' replied in "'||t.title||'"'; end if;
  end if;
  perform public.notify(array(select u from unnest(who) u where u<>new.author_id),'message',ttl,left(new.body,140),lnk);
  return new;
end $$;
drop trigger if exists inbox_forum on public.forum_messages;
create trigger inbox_forum after insert on public.forum_messages for each row execute procedure public.trg_inbox_forum();

-- feedback from a teacher
create or replace function public.trg_inbox_feedback() returns trigger language plpgsql security definer set search_path=public as $$
begin perform public.notify(array[new.student_id],'feedback','New feedback on '||new.skill,left(new.body,140),jsonb_build_object('tab','feedback')); return new; end $$;
drop trigger if exists inbox_feedback on public.feedback;
create trigger inbox_feedback after insert on public.feedback for each row execute procedure public.trg_inbox_feedback();

-- a research stage is opened
create or replace function public.trg_inbox_stage() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if new.is_open and not old.is_open then
    perform public.notify(public.ids_of(array['student']),'stage',
      case new.stage when 'pre_questionnaire' then 'The questionnaire is now open' when 'pretest' then 'The pre-test is now open' when 'intervention' then 'The intervention sessions are now open' when 'posttest' then 'The post-test is now open' else 'The final questionnaire is now open' end,
      'Open the Research tab to continue.',jsonb_build_object('tab','dash'));
  end if; return new;
end $$;
drop trigger if exists inbox_stage on public.research_stages;
create trigger inbox_stage after update on public.research_stages for each row execute procedure public.trg_inbox_stage();

-- new activity published
create or replace function public.trg_inbox_activity() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if new.status='published' and (tg_op='INSERT' or old.status<>'published') and new.purpose<>'anxiety' then
    perform public.notify(public.ids_of(array['student']),'activity','New: '||new.title,
      case when new.purpose='practice' then 'Find it under Practice.' else 'Find it in the Research tab.' end,
      jsonb_build_object('tab',case when new.purpose='practice' then 'practice' else 'dash' end));
  end if; return new;
end $$;
drop trigger if exists inbox_activity on public.activities;
create trigger inbox_activity after insert or update of status on public.activities for each row execute procedure public.trg_inbox_activity();

-- live class started
create or replace function public.trg_inbox_live() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if new.is_live and not coalesce(old.is_live,false) then
    perform public.notify(public.ids_of(array['student']),'live','Your class is live'||coalesce(': '||new.title,''),'Open Live class and press Join class.',jsonb_build_object('tab','live'));
  end if; return new;
end $$;
drop trigger if exists inbox_live on public.live_class;
create trigger inbox_live after update on public.live_class for each row execute procedure public.trg_inbox_live();

-- new video lecture / new material
create or replace function public.trg_inbox_content() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if tg_table_name='videos' then perform public.notify(public.ids_of(array['student']),'video','New video lecture: '||new.title,'Watch it, then take the quiz.',jsonb_build_object('tab','videos'));
  else perform public.notify(public.ids_of(array['student']),'material','New material: '||new.title,coalesce(new.skill,''),jsonb_build_object('tab','materials')); end if;
  return new;
end $$;
drop trigger if exists inbox_video on public.videos;
create trigger inbox_video after insert on public.videos for each row execute procedure public.trg_inbox_content();
drop trigger if exists inbox_material on public.materials;
create trigger inbox_material after insert on public.materials for each row execute procedure public.trg_inbox_content();

-- a new student registers (tells the researcher and professors)
create or replace function public.trg_inbox_newstudent() returns trigger language plpgsql security definer set search_path=public as $$
begin
  if new.role='student' then perform public.notify(public.ids_of(array['teacher','researcher']),'student','New student registered: '||coalesce(new.full_name,new.email),'See them under Students.',jsonb_build_object('tab','overview')); end if;
  return new;
end $$;
drop trigger if exists inbox_newstudent on public.profiles;
create trigger inbox_newstudent after insert on public.profiles for each row execute procedure public.trg_inbox_newstudent();

do $$ begin alter publication supabase_realtime add table public.inbox; exception when duplicate_object then null; when undefined_object then null; end $$;
