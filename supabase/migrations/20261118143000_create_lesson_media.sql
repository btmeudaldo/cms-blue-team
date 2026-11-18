-- Tabla de biblioteca de medios para organizar imágenes alojadas en Hostalia o Supabase
CREATE TABLE IF NOT EXISTS public.lesson_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  filename text NOT NULL,
  course_tag text NOT NULL DEFAULT 'general'
    CHECK (course_tag IN ('C172', 'DA40', 'DA42', 'general')),
  width integer,
  height integer,
  size_bytes integer,
  sha256_hash text,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS lesson_media_course_created_idx
  ON public.lesson_media (course_tag, created_at DESC);

ALTER TABLE public.lesson_media ENABLE ROW LEVEL SECURITY;

-- Lectura para cualquier usuario autenticado
CREATE POLICY "lesson_media_select_authenticated"
  ON public.lesson_media
  FOR SELECT
  TO authenticated
  USING (true);

-- Inserción y borrado solo para personal docente / administración
CREATE POLICY "lesson_media_insert_staff"
  ON public.lesson_media
  FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND p.role IN ('superadmin', 'admin', 'instructor')
    )
  );

CREATE POLICY "lesson_media_delete_staff"
  ON public.lesson_media
  FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND p.role IN ('superadmin', 'admin', 'instructor')
    )
  );
