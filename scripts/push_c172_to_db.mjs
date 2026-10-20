import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import {
  C172_LESSONS,
  C172_COURSE_ID,
} from "../src/features/learning/content/c172-course-data.ts";

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

  console.log("\n🎉 Todas las lecciones locales han sido subidas exitosamente a Supabase.");
}

push().catch(console.error);
