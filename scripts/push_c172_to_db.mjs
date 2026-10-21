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
    const wordCount = lesson.content_html
      .replace(/<[^>]*>/g, " ")
      .split(/\s+/)
      .filter(Boolean).length;

    const { error } = await supabase
      .from("lessons")
      .update({
        title: lesson.title,
        slug: lesson.slug,
        content_html: lesson.content_html,
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
        course_id: q.course_id,
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
