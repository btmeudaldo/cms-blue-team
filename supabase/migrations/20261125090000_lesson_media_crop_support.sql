-- Soporte de recorte interactivo en biblioteca de medios:
-- 1) Preservar original_url para poder restaurar la lámina completa en cualquier momento.
-- 2) Permitir UPDATE en public.lesson_media a personal docente / administración vía RLS.

ALTER TABLE public.lesson_media
  ADD COLUMN IF NOT EXISTS original_url text;

UPDATE public.lesson_media
SET original_url = url
WHERE original_url IS NULL;

GRANT UPDATE ON TABLE public.lesson_media TO authenticated;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'lesson_media'
      AND policyname = 'lesson_media_update_staff'
  ) THEN
    CREATE POLICY "lesson_media_update_staff"
      ON public.lesson_media
      FOR UPDATE
      TO authenticated
      USING (
        EXISTS (
          SELECT 1 FROM public.profiles p
          WHERE p.id = (SELECT auth.uid())
            AND p.role IN ('superadmin', 'admin', 'instructor')
        )
      )
      WITH CHECK (
        EXISTS (
          SELECT 1 FROM public.profiles p
          WHERE p.id = (SELECT auth.uid())
            AND p.role IN ('superadmin', 'admin', 'instructor')
        )
      );
  END IF;
END $$;
