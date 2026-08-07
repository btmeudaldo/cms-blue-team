drop policy if exists "staff can create owned courses" on public.courses;
drop policy if exists "staff can update owned courses" on public.courses;
drop policy if exists "staff can delete owned courses" on public.courses;
drop policy if exists "staff can manage lessons in owned courses" on public.lessons;

create policy "staff can create owned courses"
on public.courses for insert to authenticated
with check (public.is_staff() and created_by = auth.uid());

create policy "staff can update owned courses"
on public.courses for update to authenticated
using (public.is_admin() or created_by = auth.uid())
with check (public.is_admin() or created_by = auth.uid());

create policy "staff can delete owned courses"
on public.courses for delete to authenticated
using (public.is_admin() or created_by = auth.uid());

create policy "staff can manage lessons in owned courses"
on public.lessons for all to authenticated
using (public.can_manage_course(course_id))
with check (public.can_manage_course(course_id));
