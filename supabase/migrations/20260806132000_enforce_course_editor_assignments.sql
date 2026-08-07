drop policy if exists "staff can manage all lessons" on public.lessons;
drop policy if exists "staff can manage all courses" on public.courses;
drop policy if exists "authenticated can read lessons" on public.lessons;

create table if not exists public.course_editors (
  course_id uuid not null references public.courses (id) on delete cascade,
  user_id uuid not null references public.profiles (id) on delete cascade,
  assigned_by uuid not null references public.profiles (id),
  assigned_at timestamptz not null default now(),
  primary key (course_id, user_id)
);

alter table public.course_editors enable row level security;

grant select, insert, delete on public.course_editors to authenticated;
grant select, insert, update, delete on public.course_enrollments to authenticated;

create policy "staff can read all courses"
on public.courses for select to authenticated using (public.is_staff());

create policy "staff can manage enrollments"
on public.course_enrollments for all to authenticated
using (public.is_staff()) with check (public.is_staff());

create policy "staff can read all lessons"
on public.lessons for select to authenticated using (public.is_staff());

create policy "admins manage course editor assignments"
on public.course_editors for all to authenticated
using (public.is_admin()) with check (public.is_admin());

create policy "staff can read course editor assignments"
on public.course_editors for select to authenticated using (public.is_staff());

create policy "assigned instructors can update courses"
on public.courses for update to authenticated
using (exists (select 1 from public.course_editors editor where editor.course_id = id and editor.user_id = auth.uid()))
with check (exists (select 1 from public.course_editors editor where editor.course_id = id and editor.user_id = auth.uid()));

create policy "assigned instructors can manage lessons"
on public.lessons for all to authenticated
using (exists (select 1 from public.course_editors editor where editor.course_id = course_id and editor.user_id = auth.uid()))
with check (exists (select 1 from public.course_editors editor where editor.course_id = course_id and editor.user_id = auth.uid()));
