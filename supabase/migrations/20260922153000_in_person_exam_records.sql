begin;
set local lock_timeout = '5s';

-- 1. Create table public.in_person_exam_records
create table if not exists public.in_person_exam_records (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  exam_date date not null default current_date,
  classroom text not null default 'Aula Teórica Principal',
  score_percentage integer not null check (score_percentage >= 0 and score_percentage <= 100),
  passed boolean not null default false,
  examiner_name text not null,
  examiner_id uuid references public.profiles(id) on delete set null,
  notes text,
  document_url text,
  created_at timestamptz not null default now(),
  created_by uuid references public.profiles(id) on delete set null
);

-- Trigger to calculate passed based on the 75% AESA threshold
create or replace function public.calculate_in_person_exam_passed()
returns trigger language plpgsql as $$
begin
  new.passed := (new.score_percentage >= 75);
  return new;
end;
$$;

drop trigger if exists set_in_person_exam_passed on public.in_person_exam_records;
create trigger set_in_person_exam_passed
before insert or update on public.in_person_exam_records
for each row execute function public.calculate_in_person_exam_passed();

-- 2. Indexes for fast queries
create index if not exists in_person_exams_user_id_idx on public.in_person_exam_records (user_id);
create index if not exists in_person_exams_course_id_idx on public.in_person_exam_records (course_id);

-- 3. Row Level Security
alter table public.in_person_exam_records enable row level security;

-- Students can read their own in-person exams
drop policy if exists "Students can read own in-person exams" on public.in_person_exam_records;
create policy "Students can read own in-person exams"
on public.in_person_exam_records for select
to authenticated
using (auth.uid() = user_id);

-- Staff can manage in-person exams
drop policy if exists "Staff can manage in-person exams" on public.in_person_exam_records;
create policy "Staff can manage in-person exams"
on public.in_person_exam_records for all
to authenticated
using (public.is_staff())
with check (public.is_staff());

grant select on public.in_person_exam_records to authenticated;
grant insert, update, delete on public.in_person_exam_records to authenticated;

commit;
