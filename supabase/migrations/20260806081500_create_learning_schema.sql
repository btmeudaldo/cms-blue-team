create type public.user_role as enum ('student', 'instructor', 'admin');

create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role public.user_role not null default 'student',
  created_at timestamptz not null default now()
);

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null default '',
  created_by uuid not null references public.profiles (id),
  created_at timestamptz not null default now()
);

create table public.course_enrollments (
  user_id uuid not null references public.profiles (id) on delete cascade,
  course_id uuid not null references public.courses (id) on delete cascade,
  enrolled_at timestamptz not null default now(),
  primary key (user_id, course_id)
);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses (id) on delete cascade,
  title text not null,
  content_html text not null,
  lesson_order integer not null check (lesson_order > 0),
  word_count integer not null default 0 check (word_count >= 0),
  min_seconds integer not null check (min_seconds >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (course_id, lesson_order)
);

create table public.user_lesson_progress (
  user_id uuid not null references public.profiles (id) on delete cascade,
  lesson_id uuid not null references public.lessons (id) on delete cascade,
  started_at timestamptz not null,
  completed_at timestamptz,
  elapsed_seconds integer,
  is_completed boolean not null default false,
  primary key (user_id, lesson_id),
  check (
    (is_completed = false and completed_at is null)
    or (is_completed = true and completed_at is not null)
  )
);

create index course_enrollments_course_id_idx on public.course_enrollments (course_id);
create index lessons_course_id_lesson_order_idx on public.lessons (course_id, lesson_order);
create index user_lesson_progress_lesson_id_idx on public.user_lesson_progress (lesson_id);
