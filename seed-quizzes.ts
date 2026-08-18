import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { join } from "path";
import * as dotenv from "dotenv";
import { mockStore } from "./src/shared/lib/mock-store";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedQuizzes() {
  console.log("Seeding quizzes to Supabase...");
  const quizzes = mockStore.getQuizzes();
  
  let successCount = 0;
  let errorCount = 0;

  for (const q of quizzes) {
    const { error } = await supabase.from("quizzes").upsert(
      {
        id: q.id,
        course_id: q.course_id,
        lesson_id: q.lesson_id,
        lesson_slug: (q as any).lesson_slug,
        title: q.title,
        description: q.description || null,
        min_pass_score_percentage: q.minPassScorePercentage || 70,
        questions: q.questions,
      },
      { onConflict: "id" }
    );

    if (error) {
      console.error(`Error inserting quiz ${q.id}:`, error.message);
      errorCount++;
    } else {
      console.log(`Successfully seeded quiz ${q.id}`);
      successCount++;
    }
  }

  console.log(`Seeding complete. ${successCount} successful, ${errorCount} failed.`);
}

seedQuizzes().catch(console.error);
