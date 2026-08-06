create or replace function public.can_manage_course(target_course_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.is_admin()
    or exists (
      select 1
      from public.courses course
      where course.id = target_course_id and course.created_by = auth.uid()
    );
$$;

drop policy "staff can manage lessons in owned courses" on public.lessons;
drop policy "staff can manage enrollments in owned courses" on public.course_enrollments;
drop policy "staff can read progress for owned courses" on public.user_lesson_progress;

create policy "staff can manage lessons in owned courses"
on public.lessons for all
to authenticated
using (public.can_manage_course(course_id))
with check (public.can_manage_course(course_id));

create policy "staff can manage enrollments in owned courses"
on public.course_enrollments for all
to authenticated
using (public.can_manage_course(course_id))
with check (public.can_manage_course(course_id));

create policy "staff can read progress for owned courses"
on public.user_lesson_progress for select
to authenticated
using (
  public.is_admin()
  or exists (
    select 1
    from public.lessons lesson
    where lesson.id = lesson_id
      and public.can_manage_course(lesson.course_id)
  )
);
