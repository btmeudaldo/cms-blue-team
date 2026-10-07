import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import {
  C172_COURSE_ID,
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
  console.log("📥 Consultando lecciones actuales de C172 en Supabase...");

  const { data: lessons, error } = await supabase
    .from("lessons")
    .select("id, title, slug, lesson_order, content_html, updated_at")
    .eq("course_id", C172_COURSE_ID)
    .order("lesson_order", { ascending: true });

  if (error) {
    console.error("Error al obtener lecciones:", error);
    process.exit(1);
  }

  if (!lessons || lessons.length === 0) {
    console.log("No se encontraron lecciones en la base de datos.");
    return;
  }

  // Guardar un snapshot de seguridad en disco
  const backupDir = path.resolve(process.cwd(), "backups/db-lessons");
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  for (const lesson of lessons) {
    const backupFile = path.join(
      backupDir,
      `lesson-${lesson.lesson_order}-${lesson.slug}-${timestamp}.html`
    );
    fs.writeFileSync(backupFile, lesson.content_html, "utf8");
    console.log(`💾 Respaldo guardado: ${backupFile} (${lesson.content_html.length} bytes, updated_at: ${lesson.updated_at})`);
  }

  console.log("\n✅ Todas las lecciones de la base de datos han sido respaldadas en local.");
}

main().catch(console.error);
