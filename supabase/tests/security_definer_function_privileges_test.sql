begin;

select plan(3);

select ok(
  not exists (
    select 1
    from unnest(
      array[
        'public.can_manage_course(uuid)',
        'public.handle_new_user_profile()',
        'public.is_admin()',
        'public.is_staff()',
        'public.rls_auto_enable()'
      ]
    ) as function_name
    where has_function_privilege('anon', function_name, 'EXECUTE')
  ),
  'anon cannot execute internal SECURITY DEFINER functions'
);

select ok(
  not exists (
    select 1
    from unnest(
      array[
        'public.can_manage_course(uuid)',
        'public.handle_new_user_profile()',
        'public.is_admin()',
        'public.is_staff()',
        'public.rls_auto_enable()'
      ]
    ) as function_name
    where has_function_privilege('authenticated', function_name, 'EXECUTE')
  ),
  'authenticated users cannot call internal SECURITY DEFINER functions'
);

select ok(
  not exists (
    select 1
    from unnest(
      array[
        'public.start_lesson(uuid)',
        'public.complete_lesson(uuid)',
        'public.pause_lesson(uuid)',
        'public.resume_lesson(uuid)',
        'public.heartbeat_lesson(uuid)'
      ]
    ) as function_name
    where not has_function_privilege('authenticated', function_name, 'EXECUTE')
  ),
  'authenticated users retain access to progress RPCs'
);

select * from finish();

rollback;
