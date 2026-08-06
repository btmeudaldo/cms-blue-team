alter table public.courses
  add column if not exists image_url text;

alter table public.lessons
  add column if not exists slug text,
  add column if not exists sequence_order integer;

update public.lessons
set slug = coalesce(nullif(slug, ''), lower(regexp_replace(title, '[^a-zA-Z0-9]+', '-', 'g')) || '-' || left(id::text, 8)),
    sequence_order = coalesce(sequence_order, lesson_order)
where slug is null or slug = '' or sequence_order is null;

create unique index if not exists lessons_course_id_slug_key on public.lessons (course_id, slug);
create unique index if not exists lessons_course_id_sequence_order_key on public.lessons (course_id, sequence_order);
