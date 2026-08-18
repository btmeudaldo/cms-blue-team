insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'course-covers',
  'course-covers',
  true,
  5242880,
  array['image/gif', 'image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

create policy "staff can upload course covers"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'course-covers'
  and (select public.is_staff())
  and (storage.foldername(name))[1] = (select auth.uid()::text)
);
