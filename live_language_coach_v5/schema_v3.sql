-- LIVE LANGUAGE COACH - schema v3 (run AFTER schema.sql; safe to run more than once)
-- Adds: video lectures + watch tracking + 10-question quizzes, material delete, live class link.

-- ---------------------------------------------------------------- videos
create table if not exists public.videos(
  id uuid primary key default gen_random_uuid(),
  title text not null,
  youtube_id text not null check(youtube_id ~ '^[A-Za-z0-9_-]{11}$'),
  description text,
  skill text check(skill in ('Listening','Speaking','Reading','Writing','Grammar','Vocabulary')),
  questions jsonb not null default '[]'::jsonb,           -- [{q:"...", options:["A","B","C","D"]}]  (no answers here)
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz default now());
create table if not exists public.video_keys(
  video_id uuid primary key references public.videos(id) on delete cascade,
  answers int[] not null);                                 -- index of the correct option per question
create table if not exists public.video_progress(
  student_id uuid references auth.users(id) on delete cascade,
  video_id uuid references public.videos(id) on delete cascade,
  coverage varchar not null default '',                    -- one 0/1 per second of the video
  duration int not null default 0,
  completed_at timestamptz,
  updated_at timestamptz default now(),
  primary key(student_id,video_id));
create table if not exists public.video_quiz_attempts(
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  video_id uuid not null references public.videos(id) on delete cascade,
  answers int[] not null, score int not null, total int not null,
  created_at timestamptz default now());
alter table public.materials add column if not exists video_id uuid references public.videos(id) on delete cascade;

-- ---------------------------------------------------------------- live class link
create table if not exists public.live_class(
  id int primary key check(id=1),
  url text, title text, platform text,
  is_live boolean not null default false,
  updated_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz default now());
insert into public.live_class(id) values(1) on conflict(id) do nothing;

-- ---------------------------------------------------------------- row level security
alter table public.videos enable row level security;
alter table public.video_keys enable row level security;
alter table public.video_progress enable row level security;
alter table public.video_quiz_attempts enable row level security;
alter table public.live_class enable row level security;
do $$ declare r record; begin
  for r in select schemaname,tablename,policyname from pg_policies where schemaname='public' and tablename in ('videos','video_keys','video_progress','video_quiz_attempts','live_class') loop
    execute format('drop policy %I on %I.%I',r.policyname,r.schemaname,r.tablename);
  end loop; end $$;

create policy videos_select on public.videos for select to authenticated using(true);
create policy videos_write on public.videos for all to authenticated using(public.auth_role()='researcher') with check(public.auth_role()='researcher' and created_by=auth.uid());
create policy vkeys_select on public.video_keys for select to authenticated using(public.is_instructor());
create policy vkeys_write on public.video_keys for all to authenticated using(public.auth_role()='researcher') with check(public.auth_role()='researcher');
create policy vprog_select on public.video_progress for select to authenticated using(public.can_see_student(student_id));
create policy vquiz_select on public.video_quiz_attempts for select to authenticated using(public.can_see_student(student_id));
create policy live_select on public.live_class for select to authenticated using(is_live or public.is_instructor());
create policy live_update on public.live_class for update to authenticated using(public.is_instructor()) with check(public.is_instructor());
grant select,insert,update,delete on public.videos,public.video_keys to authenticated;
grant select on public.video_progress,public.video_quiz_attempts to authenticated;
grant select,update on public.live_class to authenticated;

-- materials: instructors may already change rows; allow removing the stored file too
drop policy if exists "llc materials delete" on storage.objects;
create policy "llc materials delete" on storage.objects for delete to authenticated using(bucket_id='materials' and public.is_instructor());

-- ---------------------------------------------------------------- RPCs
-- save_video_progress: client sends the seconds it has actually watched (a 0/1 string). The server merges it,
-- limits how fast watching can grow (no skipping), and marks the video complete only when the player reached
-- the end AND at least 90% of the seconds were really watched.
create or replace function public.save_video_progress(p_video uuid,p_duration int,p_cov text,p_ended boolean)
returns json language plpgsql security definer set search_path=public as $$
declare r public.video_progress; n int; oldc varbit; newc varbit; merged varbit; ones_old int; ones_new int; elapsed numeric; done boolean;
begin
  if public.auth_role()<>'student' then raise exception 'Only students record progress'; end if;
  if not exists(select 1 from public.videos where id=p_video) then raise exception 'Video not found'; end if;
  select * into r from public.video_progress where student_id=auth.uid() and video_id=p_video;
  if not found then
    n:=greatest(1,least(coalesce(p_duration,0),14400));
    insert into public.video_progress(student_id,video_id,coverage,duration,updated_at) values(auth.uid(),p_video,repeat('0',n),n,now()-interval '30 seconds') returning * into r;
  end if;
  n:=r.duration;
  if p_cov is null or p_cov !~ '^[01]+$' then p_cov:=repeat('0',n); end if;
  p_cov:=rpad(left(p_cov,n),n,'0');
  oldc:=r.coverage::varbit; newc:=p_cov::varbit; merged:=oldc|newc;
  ones_old:=length(replace(oldc::text,'0',''));
  ones_new:=length(replace(merged::text,'0',''));
  elapsed:=greatest(0,extract(epoch from now()-r.updated_at));
  if ones_new-ones_old>elapsed*2+8 then   -- more seconds than real time could have produced (allows 2x speed)
    return json_build_object('watched',ones_old,'duration',n,'completed',r.completed_at is not null,'rejected',true);
  end if;
  done:=r.completed_at is not null or (coalesce(p_ended,false) and ones_new>=0.9*n);
  update public.video_progress set coverage=merged::text,updated_at=now(),
    completed_at=case when r.completed_at is not null then r.completed_at when done then now() else null end
    where student_id=auth.uid() and video_id=p_video returning * into r;
  return json_build_object('watched',ones_new,'duration',n,'completed',r.completed_at is not null,'completed_at',r.completed_at);
end $$;

-- submit_video_quiz: only after the video is completed; scores against the hidden key; any number of attempts.
create or replace function public.submit_video_quiz(p_video uuid,p_answers int[])
returns json language plpgsql security definer set search_path=public as $$
declare k int[]; s int:=0; i int; ok_ boolean[]:=array[]::boolean[];
begin
  if public.auth_role()<>'student' then raise exception 'Only students take the quiz'; end if;
  if not exists(select 1 from public.video_progress where student_id=auth.uid() and video_id=p_video and completed_at is not null) then
    raise exception 'Watch the whole video first';
  end if;
  select answers into k from public.video_keys where video_id=p_video;
  if k is null then raise exception 'No quiz for this video'; end if;
  if coalesce(array_length(p_answers,1),0)<>array_length(k,1) then raise exception 'Answer every question'; end if;
  for i in 1..array_length(k,1) loop
    ok_:=ok_||(p_answers[i]=k[i]);
    if p_answers[i]=k[i] then s:=s+1; end if;
  end loop;
  insert into public.video_quiz_attempts(student_id,video_id,answers,score,total) values(auth.uid(),p_video,p_answers,s,array_length(k,1));
  return json_build_object('score',s,'total',array_length(k,1),'correct',ok_);
end $$;
revoke all on function public.save_video_progress(uuid,int,text,boolean) from public,anon;
revoke all on function public.submit_video_quiz(uuid,int[]) from public,anon;
grant execute on function public.save_video_progress(uuid,int,text,boolean) to authenticated;
grant execute on function public.submit_video_quiz(uuid,int[]) to authenticated;

-- live class link: the page updates for students as soon as the class is switched on
do $$ begin alter publication supabase_realtime add table public.live_class; exception when duplicate_object then null; when undefined_object then null; end $$;
