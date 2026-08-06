begin;

select plan(22);

select has_table('public', 'profiles', 'profiles stores each authenticated user role');
select has_table('public', 'courses', 'courses stores course metadata');
select has_table('public', 'course_enrollments', 'course enrollments grant student access');
select has_table('public', 'lessons', 'lessons stores ordered course content');
select has_table('public', 'user_lesson_progress', 'progress stores server-verified lesson timing');

select has_column('public', 'profiles', 'role', 'profiles exposes a role');
select has_column('public', 'courses', 'created_by', 'courses retain their instructor');
select has_column('public', 'lessons', 'min_seconds', 'lessons define the server-enforced minimum');
select has_column('public', 'user_lesson_progress', 'started_at', 'progress records a server start timestamp');
select has_column('public', 'user_lesson_progress', 'completed_at', 'progress records a completion timestamp');

select is((select relrowsecurity from pg_class where oid = 'public.profiles'::regclass), true, 'profiles is protected by RLS');
select is((select relrowsecurity from pg_class where oid = 'public.courses'::regclass), true, 'courses is protected by RLS');
select is((select relrowsecurity from pg_class where oid = 'public.course_enrollments'::regclass), true, 'enrollments are protected by RLS');
select is((select relrowsecurity from pg_class where oid = 'public.lessons'::regclass), true, 'lessons is protected by RLS');
select is((select relrowsecurity from pg_class where oid = 'public.user_lesson_progress'::regclass), true, 'progress is protected by RLS');

select ok((select count(*) > 0 from pg_policy where polrelid = 'public.profiles'::regclass), 'profiles has access policies');
select ok((select count(*) > 0 from pg_policy where polrelid = 'public.courses'::regclass), 'courses has access policies');
select ok((select count(*) > 0 from pg_policy where polrelid = 'public.course_enrollments'::regclass), 'enrollments has access policies');
select ok((select count(*) > 0 from pg_policy where polrelid = 'public.lessons'::regclass), 'lessons has access policies');
select ok((select count(*) > 0 from pg_policy where polrelid = 'public.user_lesson_progress'::regclass), 'progress has access policies');

select has_function('public', 'start_lesson', array['uuid'], 'start_lesson RPC exists');
select has_function('public', 'complete_lesson', array['uuid'], 'complete_lesson RPC exists');

select * from finish();

rollback;
