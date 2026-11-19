CREATE OR REPLACE FUNCTION learning_private.can_read_lessons(target_course_id uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
  select auth.uid() is not null and exists (
    select 1 from public.profiles p where p.id = (select auth.uid()) and (
      p.role in ('superadmin', 'admin', 'instructor') or (p.role = 'student' and exists (
        select 1 from public.course_enrollments e
        where e.course_id = target_course_id and e.user_id = p.id
      ))
    )
  );
$function$;

CREATE OR REPLACE FUNCTION learning_private.can_manage_course(target_course_id uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
  select auth.uid() is not null and exists (
    select 1 from public.profiles p where p.id = (select auth.uid()) and (
      p.role in ('superadmin', 'admin') or (p.role = 'instructor' and (
        exists (select 1 from public.courses c
          where c.id = target_course_id and c.created_by = p.id)
        or exists (select 1 from public.course_editors e
          where e.course_id = target_course_id and e.user_id = p.id)
      ))
    )
  );
$function$;
