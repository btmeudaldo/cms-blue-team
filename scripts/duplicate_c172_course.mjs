import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const SOURCE_COURSE_ID = "17200000-0000-0000-0000-000000000172";
const NEW_COURSE_ID = "17200000-0000-0000-0000-000000000272";
const NEW_COURSE_SLUG = "c172-manual-poh";
const NEW_COURSE_TITLE = "Cessna 172: Manual POH Oficial & Explicaciones Operacionales";
const NEW_COURSE_DESCRIPTION = "Versión en desarrollo con datos literales extraídos directamente del POH oficial y suplementos Continental CD-135 / CD-155 (columna izquierda) junto con notas didácticas y fundamentos operativos (columna derecha).";

async function main() {
  console.log("🚀 Duplicando curso de Cessna 172 para el nuevo enfoque POH...");

  // 1. Obtener curso origen
  const { data: sourceCourse, error: courseFetchErr } = await supabase
    .from("courses")
    .select("*")
    .eq("id", SOURCE_COURSE_ID)
    .single();

  if (courseFetchErr || !sourceCourse) {
    console.error("Error al obtener curso origen:", courseFetchErr);
    process.exit(1);
  }

  // 2. Crear curso duplicado
  const { error: newCourseErr } = await supabase.from("courses").upsert(
    {
      id: NEW_COURSE_ID,
      title: NEW_COURSE_TITLE,
      slug: NEW_COURSE_SLUG,
      description: NEW_COURSE_DESCRIPTION,
      image_url: sourceCourse.image_url,
      created_by: sourceCourse.created_by,
    },
    { onConflict: "id" }
  );

  if (newCourseErr) {
    console.error("Error al crear curso duplicado:", newCourseErr);
    process.exit(1);
  }
  console.log(`✅ Nuevo curso creado: ${NEW_COURSE_TITLE} (ID: ${NEW_COURSE_ID})`);

  // 3. Obtener lecciones origen
  const { data: sourceLessons, error: lessonsFetchErr } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", SOURCE_COURSE_ID)
    .order("lesson_order", { ascending: true });

  if (lessonsFetchErr) {
    console.error("Error al obtener lecciones origen:", lessonsFetchErr);
    process.exit(1);
  }

  // 4. Duplicar lecciones
  for (const lesson of sourceLessons) {
    const newLessonId = `17200000-0000-0000-0000-00000000010${lesson.lesson_order}`;
    const newLessonSlug = `${lesson.slug}-poh`;

    const { error: lessonErr } = await supabase.from("lessons").upsert(
      {
        id: newLessonId,
        course_id: NEW_COURSE_ID,
        title: lesson.title,
        slug: newLessonSlug,
        lesson_order: lesson.lesson_order,
        sequence_order: lesson.sequence_order,
        min_seconds: lesson.min_seconds,
        word_count: lesson.word_count,
        content_html: lesson.content_html,
      },
      { onConflict: "id" }
    );

    if (lessonErr) {
      console.error(`Error al duplicar lección ${lesson.lesson_order}:`, lessonErr);
    } else {
      console.log(`✅ Lección duplicada: ${lesson.title} (ID: ${newLessonId})`);
    }
  }

  // 5. Inscribir a todos los perfiles de staff para que puedan acceder y comparar ambos cursos
  const { data: profiles } = await supabase
    .from("profiles")
    .select("id, email, full_name");

  if (profiles) {
    for (const p of profiles) {
      const { error: enrollErr } = await supabase
        .from("course_enrollments")
        .upsert(
          { course_id: NEW_COURSE_ID, user_id: p.id },
          { onConflict: "user_id,course_id" }
        );
      if (!enrollErr) {
        console.log(`👤 Inscrito en nuevo curso: ${p.email} (${p.full_name || "Sin nombre"})`);
      }
    }
  }

  console.log("\n🎉 Curso duplicado y listo para desarrollo independiente.");
}

main().catch(console.error);
