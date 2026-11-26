-- Agrupación visual opcional de lecciones por módulo dentro de un curso.
-- NULL en cursos cortos (C172, DA40, DA42) para mantener lista plana sin cambios.
ALTER TABLE public.lessons
  ADD COLUMN IF NOT EXISTS module_title text;
