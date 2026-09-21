-- Reduced, synthetic reproduction of the relevant remote schema inspected 2026-09-21.
-- Run ONLY in the disposable quiz_security_test database via the guarded runner.
create schema auth;
create function auth.uid() returns uuid language sql stable as $$
 select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid
$$;
create type public.user_role as enum ('student', 'instructor', 'admin');
create table auth.users (id uuid primary key);
create table public.profiles (id uuid primary key references auth.users, role public.user_role not null default 'student');
create table public.courses (id uuid primary key, created_by uuid references auth.users);
create table public.lessons (id uuid primary key, course_id uuid not null references public.courses on delete cascade, slug text);
create table public.course_enrollments (user_id uuid references auth.users, course_id uuid references public.courses, enrolled_at timestamptz not null default now(), primary key(user_id,course_id));
create table public.course_editors (course_id uuid references public.courses, user_id uuid references auth.users, assigned_by uuid not null references auth.users, assigned_at timestamptz not null default now(), primary key(course_id,user_id));
create table public.quizzes (
 id text primary key, course_id uuid not null references public.courses on delete cascade,
 lesson_id uuid not null references public.lessons on delete cascade, lesson_slug text not null,
 title text not null, description text, min_pass_score_percentage integer not null default 70,
 questions jsonb not null default '[]', created_at timestamptz not null default now(),
 passing_score integer not null default 80, updated_at timestamptz not null default now()
);
create table public.quiz_attempts (
 id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users on delete cascade,
 quiz_id text not null references public.quizzes on delete cascade,
 score_percentage integer not null, correct_count integer not null, total_questions integer not null,
 passed boolean not null default false, elapsed_seconds integer not null,
 completed_at timestamptz not null default now(), score integer, answers jsonb not null default '{}'
);
grant usage on schema public, auth to anon, authenticated;
grant all on all tables in schema public to anon, authenticated;
alter table public.quizzes enable row level security;
alter table public.quiz_attempts enable row level security;
create policy "Quizzes are viewable by everyone" on public.quizzes for select using (true);
create policy "Instructors and Admins can insert quizzes" on public.quizzes for insert with check (exists(select 1 from public.profiles where id=auth.uid() and role in ('instructor','admin')));
create policy "Instructors and Admins can update quizzes" on public.quizzes for update using (exists(select 1 from public.profiles where id=auth.uid() and role in ('instructor','admin')));
create policy "Instructors and Admins can delete quizzes" on public.quizzes for delete using (exists(select 1 from public.profiles where id=auth.uid() and role in ('instructor','admin')));
create policy "Users can view their own quiz attempts" on public.quiz_attempts for select using (auth.uid()=user_id);
create policy "Users can insert their own quiz attempts" on public.quiz_attempts for insert with check (auth.uid()=user_id);
create policy "Users can update their own quiz attempts" on public.quiz_attempts for update using (auth.uid()=user_id);
create policy "Instructors and admins can view all quiz attempts" on public.quiz_attempts for select using (exists(select 1 from public.profiles where id=auth.uid() and role in ('instructor','admin')));
