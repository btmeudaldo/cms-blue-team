import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import {
  C172_COURSE_ID,
  C172_COURSE_SLUG,
  C172_COURSE_TITLE,
  C172_COURSE_DESCRIPTION,
  C172_LESSON_1,
} from "../src/features/learning/content/c172-course-data.ts";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log("Upserting C172 Course and official single lesson with paginated slides...");

  // 1. Ensure Course Exists
  const { error: courseError } = await supabase.from("courses").upsert(
    {
      id: C172_COURSE_ID,
      title: C172_COURSE_TITLE,
      slug: C172_COURSE_SLUG,
      description: C172_COURSE_DESCRIPTION,
      created_by: "0cff202a-c552-4c1f-ae31-a2bc1635cac1",
    },
    { onConflict: "id" }
  );

  if (courseError) {
    console.error("Error upserting course:", courseError);
    process.exit(1);
  }
  console.log("Course successfully upserted:", C172_COURSE_ID);

  // 2. Remove extra lessons from earlier split to restore 1-lesson architecture
  await supabase
    .from("lessons")
    .delete()
    .eq("course_id", C172_COURSE_ID)
    .neq("id", C172_LESSON_1.id);

  // 3. Upsert official single lesson with 45 min and 5 slides
  const wordCount = C172_LESSON_1.content_html.split(/\s+/).filter(Boolean).length;
  const { error: lessonError } = await supabase.from("lessons").upsert(
    {
      id: C172_LESSON_1.id,
      course_id: C172_COURSE_ID,
      title: C172_LESSON_1.title,
      slug: C172_LESSON_1.slug,
      lesson_order: C172_LESSON_1.lesson_order,
      sequence_order: C172_LESSON_1.sequence_order,
      min_seconds: C172_LESSON_1.min_seconds,
      word_count: wordCount,
      content_html: C172_LESSON_1.content_html,
    },
    { onConflict: "id" }
  );

  if (lessonError) {
    console.error("Error upserting lesson 1:", lessonError);
    process.exit(1);
  }
  console.log("Lesson 1 successfully upserted:", C172_LESSON_1.title);

  // 4. Ensure admin and test student enrollments
  const profiles = [
    "0cff202a-c552-4c1f-ae31-a2bc1635cac1",
    "b6448edc-99de-4c67-bd9b-3f137f95def2",
    "64b65071-b214-4132-8cbd-00cba2f05621",
  ];
  for (const uid of profiles) {
    const { error: enrollErr } = await supabase.from("course_enrollments").upsert(
      {
        course_id: C172_COURSE_ID,
        user_id: uid,
      },
      { onConflict: "user_id,course_id" }
    );
    if (enrollErr) console.warn("Enrollment note:", uid, enrollErr.message);
  }
  console.log("Course and Lesson 1 verified in Supabase.");
}

main().catch(console.error);
