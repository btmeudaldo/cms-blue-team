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
    const wordCount = lesson.content_html
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
        content_html: lesson.content_html,
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
