begin;

select plan(5);

insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
values ('00000000-0000-0000-0000-000000000101', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'student@example.test', '', now(), '{}', '{}', now(), now());

update public.profiles set role = 'student' where id = '00000000-0000-0000-0000-000000000101';
insert into public.courses (id, title, slug, created_by) values ('00000000-0000-0000-0000-000000000201', 'Test course', 'test-course', '00000000-0000-0000-0000-000000000101');
insert into public.course_enrollments (user_id, course_id) values ('00000000-0000-0000-0000-000000000101', '00000000-0000-0000-0000-000000000201');
insert into public.lessons (id, course_id, title, content_html, lesson_order, min_seconds) values ('00000000-0000-0000-0000-000000000301', '00000000-0000-0000-0000-000000000201', 'Test lesson', '<p>Test</p>', 1, 1);

select set_config('request.jwt.claim.sub', '00000000-0000-0000-0000-000000000101', true);
set local role authenticated;

select lives_ok('select public.start_lesson(''00000000-0000-0000-0000-000000000301''::uuid)', 'a matriculated student can start a lesson');
select lives_ok('select public.heartbeat_lesson(''00000000-0000-0000-0000-000000000301''::uuid)', 'an active lesson can record a heartbeat');
reset role;
select is((select count(*) from public.user_lesson_progress), 1::bigint, 'start creates one progress row');
set local role authenticated;
select throws_ok('select public.complete_lesson(''00000000-0000-0000-0000-000000000301''::uuid)', 'Minimum active reading time has not elapsed', 'completion before the minimum is rejected');

reset role;
update public.user_lesson_progress set active_seconds = 2, is_active = false;
set local role authenticated;
select lives_ok('select public.complete_lesson(''00000000-0000-0000-0000-000000000301''::uuid)', 'completion succeeds after the minimum');

select * from finish();
rollback;
