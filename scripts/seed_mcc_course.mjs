import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import {
  MCC_COURSE_ID,
  MCC_COURSE_SLUG,
  MCC_COURSE_TITLE,
  MCC_COURSE_DESCRIPTION,
  MCC_COURSE_IMAGE_URL,
  MCC_LESSONS,
} from "../src/features/learning/content/mcc-course-data.ts";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedMCC() {
  console.log(`🚀 Sincronizando curso APS MCC en Supabase...`);

  // 1. Upsert course
  const { error: courseError } = await supabase.from("courses").upsert(
    {
      id: MCC_COURSE_ID,
      title: MCC_COURSE_TITLE,
      slug: MCC_COURSE_SLUG,
      description: MCC_COURSE_DESCRIPTION,
      image_url: MCC_COURSE_IMAGE_URL,
    },
    { onConflict: "id" }
  );

  if (courseError) {
    console.error("❌ Error upserting course:", courseError);
    process.exit(1);
  }
  console.log(`✅ Curso APS MCC registrado: ${MCC_COURSE_TITLE}`);

  // 2. Upsert lessons
  for (const lesson of MCC_LESSONS) {
    let contentToSave = lesson.content_html;

    // Preservar visibilidad configurada desde la interfaz si ya existe en Supabase
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
          const commentMatch = slideText.match(/<!--\s*SLIDE\s+([0-9.]+)/i);
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
          const finalVis =
            remoteVis !== undefined
              ? remoteVis
              : isSlidePrivate(lSlide)
                ? "private"
                : "public";
          return finalVis === "private" ? setSlidePrivateAttr(lSlide) : setSlidePublicAttr(lSlide);
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

  console.log(
    `\n🎉 Curso APS MCC listo en Supabase (sin matriculación automática masiva: matricular alumnos desde Admin/Instructor).`,
  );
}

seedMCC().catch((err) => {
  console.error(err);
  process.exit(1);
});
