create or replace function public.is_staff()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles profile
    where profile.id = auth.uid()
      and profile.role in ('admin', 'instructor')
  );
$$;

create policy "staff can read profiles"
on public.profiles for select
to authenticated
using (public.is_staff());

create policy "admins can update profiles"
on public.profiles for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "staff can create owned courses"
on public.courses for insert
to authenticated
with check (public.is_staff() and created_by = auth.uid());

create policy "staff can update owned courses"
on public.courses for update
to authenticated
using (public.is_admin() or created_by = auth.uid())
with check (public.is_admin() or created_by = auth.uid());

create policy "staff can delete owned courses"
on public.courses for delete
to authenticated
using (public.is_admin() or created_by = auth.uid());

create policy "staff can manage lessons in owned courses"
on public.lessons for all
to authenticated
using (
  public.is_admin()
  or exists (
    select 1 from public.courses course
    where course.id = course_id and course.created_by = auth.uid()
  )
)
with check (
  public.is_admin()
  or exists (
    select 1 from public.courses course
    where course.id = course_id and course.created_by = auth.uid()
  )
);

create policy "staff can manage enrollments in owned courses"
on public.course_enrollments for all
to authenticated
using (
  public.is_admin()
  or exists (
    select 1 from public.courses course
    where course.id = course_id and course.created_by = auth.uid()
  )
)
with check (
  public.is_admin()
  or exists (
    select 1 from public.courses course
    where course.id = course_id and course.created_by = auth.uid()
  )
);

create policy "staff can read progress for owned courses"
on public.user_lesson_progress for select
to authenticated
using (
  public.is_admin()
  or exists (
    select 1
    from public.lessons lesson
    join public.courses course on course.id = lesson.course_id
    where lesson.id = lesson_id and course.created_by = auth.uid()
  )
);
