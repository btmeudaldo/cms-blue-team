import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import {
  C172_LESSONS,
  C172_COURSE_IMAGE_URL,
} from "../src/features/learning/content/c172-course-data.ts";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const COVER_IMAGE =
  "https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/0cff202a-c552-4c1f-ae31-a2bc1635cac1/51d4e623-a1ca-4766-a765-e14b3a9a19af.jpeg";

const COURSES = [
  {
    id: "17200000-0000-0000-0000-000000000172",
    title: "Curso de Familiarización y Diferencias Cessna 172 (Continental CD-135 / CD-155)",
    slug: "cessna-172-continental-diesel",
    description:
      "Curso oficial de familiarización de tipo, diferencias técnicas y procedimientos para la flota Cessna 172 con motores Continental CD-135 y CD-155 Turbo Diésel (EC-NNA, EC-OXV, EC-NNX, EC-OXT) de Blue Team Flight School, conforme a EASA Part-FCL.710. Duración oficial reglamentaria: 4 horas lectivas.",
    image_url: COVER_IMAGE,
  },
  {
    id: "17200000-0000-0000-0000-000000000272",
    title: "Cessna 172: Manual POH Oficial & Explicaciones Operacionales",
    slug: "c172-manual-poh",
    description:
      "Manual POH oficial y procedimientos operacionales para la flota Cessna 172 con datos literales extraídos directamente del POH oficial y suplementos Continental CD-135 / CD-155 (columna izquierda) junto con notas didácticas y fundamentos operativos (columna derecha).",
    image_url: COVER_IMAGE,
  },
  {
    id: "85579dd2-2450-48d4-a1f9-bb9da7257a76",
    title: "Cessna 172: Suplemento Continental CD-135 / CD-155 (POH Oficial)",
    slug: "c172-suplemento-tae125-ec-nna",
    description:
      "Curso oficial con las 4 lecciones completas del suplemento POH: Limitaciones, Sistemas, Procedimientos Normales y Procedimientos de Emergencia para motores Continental CD-135 / CD-155.",
    image_url: COVER_IMAGE,
  },
];

async function sync() {
  console.log("Synchronizing courses and lessons across all C172 modules...");

  // 1. Update Course details
  for (const c of COURSES) {
    const { error } = await supabase.from("courses").upsert(
      {
        id: c.id,
        title: c.title,
        slug: c.slug,
        description: c.description,
        image_url: c.image_url,
      },
      { onConflict: "id" }
    );
    if (error) {
      console.error(`Error updating course ${c.id}:`, error);
    } else {
      console.log(`✅ Course ${c.id} updated: "${c.title}"`);
    }
  }

  // 2. Fetch all existing lessons in Supabase for each course
  for (const c of COURSES) {
    console.log(`\nSyncing lessons for course ${c.slug}...`);
    const { data: existingLessons } = await supabase
      .from("lessons")
      .select("id, sequence_order, slug, title")
      .eq("course_id", c.id)
      .order("sequence_order");

    for (const sourceLesson of C172_LESSONS) {
      // Find matching lesson by sequence_order or slug
      const target = (existingLessons || []).find(
        (l) =>
          l.sequence_order === sourceLesson.sequence_order ||
          l.slug === sourceLesson.slug
      );

      const lessonId = target ? target.id : sourceLesson.id;
      const wordCount = sourceLesson.content_html
        .replace(/<[^>]*>/g, " ")
        .split(/\s+/)
        .filter(Boolean).length;

      const { error: upsertErr } = await supabase.from("lessons").upsert(
        {
          id: lessonId,
          course_id: c.id,
          title: sourceLesson.title,
          slug: target?.slug || sourceLesson.slug,
          content_html: sourceLesson.content_html,
          sequence_order: sourceLesson.sequence_order,
          lesson_order: sourceLesson.lesson_order,
          word_count: wordCount,
          min_seconds: sourceLesson.min_seconds,
        },
        { onConflict: "id" }
      );

      if (upsertErr) {
        console.error(`Error upserting lesson ${lessonId}:`, upsertErr);
      } else {
        const slides = sourceLesson.content_html.split("<!-- pagebreak -->").length;
        console.log(
          `  ✅ Lesson #${sourceLesson.sequence_order} synced in ${c.slug} (${lessonId}): ${slides} slides, ${wordCount} words`
        );
      }
    }
  }

  // 3. Ensure all profiles are enrolled in all 3 courses
  const { data: profiles } = await supabase.from("profiles").select("id");
  const enrollmentsToUpsert = [];
  for (const c of COURSES) {
    for (const p of profiles || []) {
      enrollmentsToUpsert.push({
        user_id: p.id,
        course_id: c.id,
      });
    }
  }

  const { error: enrollErr } = await supabase
    .from("course_enrollments")
    .upsert(enrollmentsToUpsert, {
      onConflict: "user_id,course_id",
      ignoreDuplicates: true,
    });

  if (enrollErr) {
    console.error("Error ensuring enrollments:", enrollErr);
  } else {
    console.log(
      `\n✅ All ${profiles?.length} profiles enrolled across all 3 C172 courses.`
    );
  }

  console.log("\n🎉 Full synchronization completed successfully!");
}

sync();
