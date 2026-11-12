import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import {
  DA42_COURSE_ID,
  DA42_COURSE_SLUG,
  DA42_COURSE_TITLE,
  DA42_COURSE_DESCRIPTION,
  DA42_COURSE_IMAGE_URL,
  DA42_LESSONS,
} from "../src/features/learning/content/da42-course-data.ts";
import { DA42_QUIZZES } from "../src/features/learning/content/da42-quizzes-data.ts";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedDA42() {
  console.log(`🚀 Sincronizando curso DA42 en Supabase...`);

  // 1. Upsert course
  const { error: courseError } = await supabase.from("courses").upsert(
    {
      id: DA42_COURSE_ID,
      title: DA42_COURSE_TITLE,
      slug: DA42_COURSE_SLUG,
      description: DA42_COURSE_DESCRIPTION,
      image_url: DA42_COURSE_IMAGE_URL,
    },
    { onConflict: "id" }
  );

  if (courseError) {
    console.error("❌ Error upserting course:", courseError);
    return;
  }
  console.log(`✅ Curso DA42 registrado: ${DA42_COURSE_TITLE}`);

  // 2. Upsert lessons
  for (const lesson of DA42_LESSONS) {
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
          // Intentar obtener número de diapositiva (ej: "6.1", "6.2", etc.)
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
            // Diapositiva nueva que no existía antes en Supabase (como la 6.6)
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

  // 2.5 Upsert quizzes
  for (const q of DA42_QUIZZES) {
    const { error: quizError } = await supabase.from("quizzes").upsert(
      {
        id: q.id,
        course_id: q.course_id,
        lesson_id: q.lesson_id,
        lesson_slug: q.id.replace("quiz-", ""),
        title: q.title,
        description: q.description || null,
        min_pass_score_percentage: q.minPassScorePercentage || 75,
        questions: q.questions,
      },
      { onConflict: "id" }
    );
    if (quizError) {
      console.error(`❌ Error en quiz ${q.id}:`, quizError);
    } else {
      console.log(`✅ Examen guardado: ${q.title} (${q.questions.length} preguntas)`);
    }
  }

  // 3. Auto enroll all existing users so it appears in everyone's dashboard
  const { data: users } = await supabase.from("profiles").select("id, email");
  if (users && users.length > 0) {
    const enrollments = users.map((u) => ({
      user_id: u.id,
      course_id: DA42_COURSE_ID,
    }));
    const { error: enrollError } = await supabase
      .from("course_enrollments")
      .upsert(enrollments, { onConflict: "user_id,course_id", ignoreDuplicates: true });
    if (!enrollError) {
      console.log(`✅ Matriculados ${users.length} usuarios automáticamente en el curso DA42.`);
    }
  }

  console.log(`\n🎉 Curso DA42 listo y disponible en la plataforma!`);
}

seedDA42().catch(console.error);

