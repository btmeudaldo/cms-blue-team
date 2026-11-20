CREATE OR REPLACE FUNCTION quiz_private.can_edit_course(target_course_id uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO ''
AS $function$
  select auth.uid() is not null and exists (
    select 1 from public.profiles p where p.id = auth.uid() and (
      p.role in ('superadmin', 'admin') or (p.role = 'instructor' and (
        exists (select 1 from public.courses c where c.id = target_course_id and c.created_by = p.id)
        or exists (select 1 from public.course_editors e where e.course_id = target_course_id and e.user_id = p.id)
      ))
    )
  );
$function$;
