create policy "users can read their own profile"
on public.profiles for select
to authenticated
using ((select auth.uid()) = id);

create policy "users can read their own enrollments"
on public.course_enrollments for select
to authenticated
using ((select auth.uid()) = user_id);

create policy "students and owners can read courses"
on public.courses for select
to authenticated
using (
  created_by = (select auth.uid())
  or exists (
    select 1
    from public.course_enrollments enrollment
    where enrollment.course_id = id
      and enrollment.user_id = (select auth.uid())
  )
);

create policy "students and owners can read lessons"
on public.lessons for select
to authenticated
using (
  exists (
    select 1
    from public.courses course
    where course.id = course_id
      and course.created_by = (select auth.uid())
  )
  or exists (
    select 1
    from public.course_enrollments enrollment
    where enrollment.course_id = course_id
      and enrollment.user_id = (select auth.uid())
  )
);

create policy "users can read their own progress"
on public.user_lesson_progress for select
to authenticated
using ((select auth.uid()) = user_id);
