begin;

select plan(3);

insert into auth.users (id, instance_id, aud, role, email, encrypted_password, email_confirmed_at, raw_app_meta_data, raw_user_meta_data, created_at, updated_at)
values
  ('00000000-0000-0000-0000-000000000401', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'instructor@example.test', '', now(), '{}', '{}', now(), now()),
  ('00000000-0000-0000-0000-000000000402', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'student-rbac@example.test', '', now(), '{}', '{}', now(), now());

update public.profiles set role = 'instructor' where id = '00000000-0000-0000-0000-000000000401';

select set_config('request.jwt.claim.sub', '00000000-0000-0000-0000-000000000401', true);
set local role authenticated;

select lives_ok(
  $$insert into public.courses (id, title, slug, created_by) values ('00000000-0000-0000-0000-000000000501', 'Instructor course', 'instructor-course', '00000000-0000-0000-0000-000000000401')$$,
  'an instructor can create an owned course'
);

select lives_ok(
  $$insert into public.lessons (course_id, title, content_html, lesson_order, sequence_order, min_seconds) values ('00000000-0000-0000-0000-000000000501', 'Instructor lesson', '<p>Content</p>', 1, 1, 30)$$,
  'an instructor can create a lesson in an owned course'
);

select lives_ok(
  $$insert into public.course_enrollments (course_id, user_id) values ('00000000-0000-0000-0000-000000000501', '00000000-0000-0000-0000-000000000402')$$,
  'an instructor can enroll a student in an owned course'
);

select * from finish();
rollback;
