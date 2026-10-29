import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import {
  DA40_COURSE_ID,
  DA40_COURSE_SLUG,
  DA40_COURSE_TITLE,
  DA40_COURSE_DESCRIPTION,
  DA40_COURSE_IMAGE_URL,
  DA40_LESSONS,
} from "../src/features/learning/content/da40-course-data.ts";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedDA40() {
  console.log(`🚀 Sincronizando curso DA40 en Supabase...`);

  // 1. Upsert course
  const { error: courseError } = await supabase.from("courses").upsert(
    {
      id: DA40_COURSE_ID,
      title: DA40_COURSE_TITLE,
      slug: DA40_COURSE_SLUG,
      description: DA40_COURSE_DESCRIPTION,
      image_url: DA40_COURSE_IMAGE_URL,
    },
    { onConflict: "id" }
  );

  if (courseError) {
    console.error("❌ Error upserting course:", courseError);
    return;
  }
  console.log(`✅ Curso DA40 registrado: ${DA40_COURSE_TITLE}`);

  // 2. Upsert lessons
  for (const lesson of DA40_LESSONS) {
    let contentToSave = lesson.content_html;

    // Preservar visibilidad configurada en producción desde la interfaz
    try {
      const { data: dbLesson } = await supabase
        .from("lessons")
        .select("content_html")
        .eq("id", lesson.id)
        .maybeSingle();

      if (dbLesson && dbLesson.content_html) {
        const pagebreakRegex = /(?:<!--\s*(?:pagebreak|slidebreak|page-break|slide-break)\s*-->)/gi;
        const remoteSlides = dbLesson.content_html.split(pagebreakRegex);
        const localSlides = contentToSave.split(pagebreakRegex);

        const extractSlideKey = (slideText, index) => {
          // Intentar obtener número de diapositiva (ej: "4.1", "4.2", etc.)
          const commentMatch = slideText.match(/<!--\s*DIAPOSITIVA\s+([0-9.]+)/i);
          if (commentMatch) return commentMatch[1].trim();
          const headingMatch = slideText.match(/<h[1-4][^>]*>\s*([0-9.]+)/i);
          if (headingMatch) return headingMatch[1].trim();
          return `index_${index}`;
        };

        const isSlidePrivate = (slideText) => {
          return (
            /data-slide-visibility=["'](?:private|only-me)["']/i.test(slideText) ||
            /class=["'][^"']*\bslide-private\b[^"']*["']/i.test(slideText)
          );
        };

        const setSlidePrivateAttr = (slideText) => {
          if (isSlidePrivate(slideText)) return slideText;
          if (/<div[^>]*class=["'][^"']*lesson-slide-container/i.test(slideText)) {
            return slideText.replace(
              /(<div[^>]*class=["'][^"']*lesson-slide-container[^"']*)/i,
              '$1 data-slide-visibility="private"'
            );
          }
          return slideText.replace(/^(\s*<[a-zA-Z0-9\-]+)/i, '$1 data-slide-visibility="private"');
        };

        const setSlidePublicAttr = (slideText) => {
          return slideText
            .replace(/\s*data-slide-visibility=["'][^"']*["']/gi, "")
            .replace(/\b(?:slide-private)\b/gi, "");
        };

        // Registrar visibilidad remota de CADA diapositiva en Supabase.
        // Supabase es la fuente de la verdad absoluta para diapositivas existentes.
        const remoteVisibilityMap = new Map();
        remoteSlides.forEach((rSlide, rIdx) => {
          const key = extractSlideKey(rSlide, rIdx);
          const vis = isSlidePrivate(rSlide) ? "private" : "public";
          remoteVisibilityMap.set(key, vis);
          remoteVisibilityMap.set(`index_${rIdx}`, vis);
        });

        const mergedSlides = localSlides.map((lSlide, lIdx) => {
          const key = extractSlideKey(lSlide, lIdx);
          const remoteVis = remoteVisibilityMap.get(key) ?? remoteVisibilityMap.get(`index_${lIdx}`);

          let finalVis = "public";
          if (remoteVis !== undefined) {
            // El estado remoto en Supabase PREVALECE sobre el archivo local
            finalVis = remoteVis;
          } else {
            // Diapositiva nueva que no existía antes en Supabase
            finalVis = isSlidePrivate(lSlide) ? "private" : "public";
          }

          if (finalVis === "private") {
            return setSlidePrivateAttr(lSlide);
          } else {
            return setSlidePublicAttr(lSlide);
          }
        });

        contentToSave = mergedSlides.join("\n\n<!-- pagebreak -->\n\n");
      }
    } catch (e) {
      console.warn("No se pudo verificar visibilidad previa en Supabase:", e);
    }

    const wordCount = contentToSave
      .replace(/<[^>]*>/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;

    const { error: lessonError } = await supabase.from("lessons").upsert(
      {
        id: lesson.id,
        course_id: lesson.course_id,
        title: lesson.title,
        slug: lesson.slug,
        sequence_order: lesson.sequence_order,
        lesson_order: lesson.lesson_order ?? lesson.sequence_order,
        content_html: contentToSave,
        word_count: wordCount,
        min_seconds: lesson.min_seconds,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    );

    if (lessonError) {
      console.error(`❌ Error en lección ${lesson.slug}:`, lessonError);
    } else {
      console.log(`✅ Lección guardada: ${lesson.title}`);
    }
  }

  // 3. Auto enroll all existing users so it appears in everyone's dashboard
  const { data: users } = await supabase.from("profiles").select("id, email");
  if (users && users.length > 0) {
    const enrollments = users.map((u) => ({
      user_id: u.id,
      course_id: DA40_COURSE_ID,
    }));
    const { error: enrollError } = await supabase
      .from("course_enrollments")
      .upsert(enrollments, { onConflict: "user_id,course_id", ignoreDuplicates: true });
    if (!enrollError) {
      console.log(`✅ Matriculados ${users.length} usuarios automáticamente en el curso DA40.`);
    }
  }

  console.log(`\n🎉 Curso DA40 listo y disponible en la plataforma!`);
}

seedDA40().catch(console.error);
