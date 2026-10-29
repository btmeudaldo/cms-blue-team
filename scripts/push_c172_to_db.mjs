import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import {
  C172_LESSONS,
  C172_COURSE_ID,
} from "../src/features/learning/content/c172-course-data.ts";
import { C172_QUIZZES } from "../src/features/learning/content/c172-quizzes-data.ts";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function push() {
  console.log(`📤 Subiendo lecciones locales a Supabase (Curso ${C172_COURSE_ID})...`);

  for (const lesson of C172_LESSONS) {
    const pagebreakRegex = /(?:<!--\s*(?:pagebreak|slidebreak|page-break|slide-break)\s*-->)/gi;
    let contentToSave = lesson.content_html;

    try {
      const { data: remoteLesson } = await supabase
        .from("lessons")
        .select("content_html")
        .eq("id", lesson.id)
        .eq("course_id", C172_COURSE_ID)
        .maybeSingle();

      if (remoteLesson?.content_html) {
        const remoteSlides = remoteLesson.content_html.split(pagebreakRegex);
        const localSlides = contentToSave.split(pagebreakRegex);

        const extractSlideKey = (slideText, index) => {
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
            finalVis = remoteVis;
          } else {
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
      console.warn("No se pudo verificar visibilidad remota previa para C172:", e);
    }

    const wordCount = contentToSave
      .replace(/<[^>]*>/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;

    const { error } = await supabase
      .from("lessons")
      .update({
        title: lesson.title,
        slug: lesson.slug,
        content_html: contentToSave,
        word_count: wordCount,
        min_seconds: lesson.min_seconds,
        updated_at: new Date().toISOString(),
      })
      .eq("id", lesson.id)
      .eq("course_id", C172_COURSE_ID);

    if (error) {
      console.error(`❌ Error actualizando lección ${lesson.sequence_order} (${lesson.id}):`, error);
    } else {
      console.log(`✅ Lección #${lesson.sequence_order} ("${lesson.title}") actualizada en Supabase.`);
    }
  }

  console.log(`\n📝 Subiendo exámenes / cuestionarios a Supabase...`);
  for (const q of C172_QUIZZES) {
    const lesson = C172_LESSONS.find((l) => l.id === q.lesson_id);
    const { error: qError } = await supabase
      .from("quizzes")
      .upsert({
        id: q.id,
        course_id: q.course_id || C172_COURSE_ID,
        lesson_id: q.lesson_id,
        lesson_slug: lesson?.slug || "generalidades-especificaciones-c172",
        title: q.title,
        description: q.description,
        min_pass_score_percentage: q.minPassScorePercentage,
        passing_score: q.minPassScorePercentage,
        questions: q.questions,
        updated_at: new Date().toISOString(),
      }, { onConflict: "id" });

    if (qError) {
      console.error(`❌ Error sincronizando quiz ${q.id}:`, qError);
    } else {
      console.log(`✅ Quiz "${q.title}" (${q.questions.length} preguntas) sincronizado.`);
    }
  }

  console.log("\n🎉 Todas las lecciones y exámenes locales han sido subidos exitosamente a Supabase.");
}

push().catch(console.error);
