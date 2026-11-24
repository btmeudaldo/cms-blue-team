-- Permitir la etiqueta de curso 'MCC' en lesson_media para los recursos visuales del curso APS MCC (PDP Jan 2024)
ALTER TABLE public.lesson_media
  DROP CONSTRAINT IF EXISTS lesson_media_course_tag_check;

ALTER TABLE public.lesson_media
  ADD CONSTRAINT lesson_media_course_tag_check
  CHECK (course_tag IN ('C172', 'DA40', 'DA42', 'MCC', 'general'));
