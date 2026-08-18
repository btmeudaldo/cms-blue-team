begin;

select plan(3);

select is(
  (select public from storage.buckets where id = 'course-covers'),
  true,
  'course cover bucket is public so enrolled students can view course covers'
);

select is(
  (select file_size_limit from storage.buckets where id = 'course-covers'),
  5242880,
  'course cover bucket limits files to 5 MB'
);

select ok(
  exists (
    select 1
    from pg_policies
    where schemaname = 'storage'
      and tablename = 'objects'
      and policyname = 'staff can upload course covers'
  ),
  'staff can upload course covers through Storage'
);

select * from finish();

rollback;
