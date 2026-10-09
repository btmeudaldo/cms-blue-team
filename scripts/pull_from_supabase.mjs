import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import fs from "fs";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Course to pull from as master reference
const MASTER_COURSE_ID = "17200000-0000-0000-0000-000000000172";

async function pull() {
  console.log(`📥 Descargando lecciones actualizadas desde Supabase (Curso ${MASTER_COURSE_ID})...`);

  const { data: dbLessons, error } = await supabase
    .from("lessons")
    .select("sequence_order, title, content_html, updated_at")
    .eq("course_id", MASTER_COURSE_ID)
    .order("sequence_order");

  if (error || !dbLessons) {
    console.error("Error al obtener lecciones de Supabase:", error);
    process.exit(1);
  }

  console.log(`✅ Obtenidas ${dbLessons.length} lecciones de Supabase.`);

  const filePath = "src/features/learning/content/c172-course-data.ts";
  let content = fs.readFileSync(filePath, "utf8");

  for (const dbLesson of dbLessons) {
    const seq = dbLesson.sequence_order;
    const lessonMarker = `export const C172_LESSON_${seq} = {`;
    const nextLessonMarker = seq < 5 ? `export const C172_LESSON_${seq + 1} = {` : `export const C172_LESSONS = [`;

    const startIdx = content.indexOf(lessonMarker);
    const endIdx = content.indexOf(nextLessonMarker);

    if (startIdx === -1 || endIdx === -1) {
      console.warn(`No se pudo localizar el bloque C172_LESSON_${seq} en el archivo local.`);
      continue;
    }

    const lessonChunk = content.slice(startIdx, endIdx);
    const htmlRegex = /content_html:\s*`[\s\S]*?`,\s*\n\s*(?:visibility_settings|})/;

    const match = lessonChunk.match(htmlRegex);
    if (!match) {
      console.warn(`No se pudo encontrar content_html en C172_LESSON_${seq}.`);
      continue;
    }

    // Replace content_html with DB version (escaping backticks if any inside html)
    const escapedHtml = dbLesson.content_html.replace(/`/g, "\\`").replace(/\${/g, "\\${");
    const replacement = `content_html: \`${escapedHtml}\`,\n};`;

    // Only update if changed
    const currentHtmlMatch = lessonChunk.match(/content_html:\s*`([\s\S]*?)`,\s*\n\s*(?:visibility_settings|})/);
    const currentHtml = currentHtmlMatch ? currentHtmlMatch[1] : "";

    if (currentHtml === dbLesson.content_html) {
      console.log(`  Lección #${seq} ("${dbLesson.title}"): ya está sincronizada con Supabase.`);
    } else {
      console.log(`  🔄 Lección #${seq} ("${dbLesson.title}"): actualizando archivo local con cambios de Supabase.`);
      // Surgical replace in lessonChunk
      const updatedChunk = lessonChunk.replace(htmlRegex, replacement);
      content = content.slice(0, startIdx) + updatedChunk + content.slice(endIdx);
    }
  }

  fs.writeFileSync(filePath, content, "utf8");
  console.log("🎉 Descarga de Supabase completada con éxito. Archivo local actualizado.");
}

pull().catch(console.error);
