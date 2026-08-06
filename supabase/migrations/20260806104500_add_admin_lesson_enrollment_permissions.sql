grant select, insert, update, delete on public.lessons to authenticated;
grant select, insert, delete on public.course_enrollments to authenticated;

create policy "admins can manage lessons" on public.lessons for all to authenticated using (public.is_admin()) with check (public.is_admin());
create policy "admins can manage enrollments" on public.course_enrollments for all to authenticated using (public.is_admin()) with check (public.is_admin());
