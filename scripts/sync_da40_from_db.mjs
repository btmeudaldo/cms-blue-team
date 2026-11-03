import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Faltan credenciales de Supabase en .env.local");
  process.exit(1);
}

const DA40_COURSE_ID = "da400000-0000-0000-0000-000000000040";
const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log(`📥 Descargando lecciones actualizadas desde Supabase para DA40 (${DA40_COURSE_ID})...`);

  const { data: dbLessons, error } = await supabase
    .from("lessons")
    .select("id, sequence_order, title, slug, content_html, updated_at")
    .eq("course_id", DA40_COURSE_ID)
    .order("sequence_order", { ascending: true });

  if (error || !dbLessons) {
    console.error("❌ Error al consultar Supabase:", error);
    process.exit(1);
  }

  console.log(`✅ Obtenidas ${dbLessons.length} lecciones de Supabase.`);

  const localFile = path.resolve(process.cwd(), "src/features/learning/content/da40-course-data.ts");
  let fileContent = fs.readFileSync(localFile, "utf8");

  for (const dbLesson of dbLessons) {
    const seq = dbLesson.sequence_order;
    const lessonMarker = `export const DA40_LESSON_${seq} = {`;
    const nextLessonMarker = seq < 6 ? `export const DA40_LESSON_${seq + 1} = {` : `export const DA40_LESSONS = [`;

    const startIdx = fileContent.indexOf(lessonMarker);
    const endIdx = fileContent.indexOf(nextLessonMarker);

    if (startIdx === -1 || endIdx === -1) {
      console.warn(`⚠️ No se pudo localizar el bloque DA40_LESSON_${seq} en el archivo local.`);
      continue;
    }

    const lessonChunk = fileContent.slice(startIdx, endIdx);
    
    // Find content_html start backtick and end backtick
    const htmlKey = "content_html: `";
    const keyIdx = lessonChunk.indexOf(htmlKey);
    if (keyIdx === -1) {
      console.warn(`⚠️ No se pudo encontrar content_html en DA40_LESSON_${seq}.`);
      continue;
    }

    const htmlStart = keyIdx + htmlKey.length;
    // The closing backtick is before the closing curly brace or visibility_settings
    const afterHtmlStart = lessonChunk.slice(htmlStart);
    const closingBacktickRel = afterHtmlStart.lastIndexOf("`");
    if (closingBacktickRel === -1) {
      console.warn(`⚠️ No se pudo encontrar backtick de cierre en DA40_LESSON_${seq}.`);
      continue;
    }

    let remoteHtml = dbLesson.content_html || "";

    // Clean up any editor artifact like `dark:text-slate-100 data-slide-visibility="private"">`
    remoteHtml = remoteHtml.replace(/dark:text-slate-100\s+data-slide-visibility=["']([^"']+)["']["']>/g, 'dark:text-slate-100" data-slide-visibility="$1">');

    // Escape any raw backticks or string interpolation inside HTML if not already escaped
    // Note: in template strings, `${...}` must be `\${...}` and unescaped ` must be \`
    let escapedHtml = remoteHtml.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
    // But wait: if remoteHtml already had clean text without backticks, let's make sure backslashes are not doubled
    // Actually, HTML in lessons only contains standard HTML tags.
    // Let's do:
    escapedHtml = remoteHtml.replace(/`/g, "\\`").replace(/\${/g, "\\${");

    // Convert line endings to CRLF to preserve Windows format
    escapedHtml = escapedHtml.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n");

    const beforeChunk = lessonChunk.slice(0, htmlStart);
    const afterChunk = lessonChunk.slice(htmlStart + closingBacktickRel);

    const updatedChunk = beforeChunk + escapedHtml + afterChunk;

    fileContent = fileContent.slice(0, startIdx) + updatedChunk + fileContent.slice(endIdx);
    console.log(`  🔄 Lección #${seq} ("${dbLesson.title}"): sincronizada.`);
  }

  fs.writeFileSync(localFile, fileContent, "utf8");
  console.log("\n🎉 Sincronización completada con éxito. Archivo local da40-course-data.ts actualizado.");
}

main().catch(console.error);
