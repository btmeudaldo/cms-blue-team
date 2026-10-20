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

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log("🔍 Consultando cursos C172 en Supabase...");

  // Buscar cursos relacionados con C172
  const { data: courses, error: coursesErr } = await supabase
    .from("courses")
    .select("id, title, slug")
    .or("slug.ilike.%172%,title.ilike.%172%,id.eq.17200000-0000-0000-0000-000000000172");

  if (coursesErr) {
    console.error("Error al buscar cursos:", coursesErr);
    process.exit(1);
  }

  console.log(`📋 Cursos encontrados (${courses?.length || 0}):`);
  for (const c of courses || []) {
    console.log(`  - [${c.id}] ${c.title} (${c.slug}) | updated_at: ${c.updated_at}`);
  }

  // Obtenemos las lecciones para todos los cursos encontrados o para el master C172
  const targetCourseId = "17200000-0000-0000-0000-000000000172";
  const { data: dbLessons, error: lessonsErr } = await supabase
    .from("lessons")
    .select("id, course_id, sequence_order, lesson_order, title, slug, content_html, updated_at, min_seconds, word_count")
    .eq("course_id", targetCourseId)
    .order("sequence_order", { ascending: true });

  if (lessonsErr) {
    console.error("Error al obtener lecciones:", lessonsErr);
    process.exit(1);
  }

  console.log(`\n📚 Lecciones encontradas en Supabase para el curso ${targetCourseId}: ${dbLessons?.length || 0}`);
  
  if (!dbLessons || dbLessons.length === 0) {
    // Si no están con ese course_id, listar todas las lecciones existentes en la tabla
    const { data: allLessons } = await supabase
      .from("lessons")
      .select("id, course_id, title, slug, sequence_order, updated_at")
      .limit(20);
    console.log("Muestra de lecciones en la BD:", allLessons);
    return;
  }

  const localFile = path.resolve(process.cwd(), "src/features/learning/content/c172-course-data.ts");
  let localContent = fs.readFileSync(localFile, "utf8");

  // Crear backup preventivo antes de tocar nada
  const backupDir = path.resolve(process.cwd(), "backups/c172-sync");
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const backupPath = path.join(backupDir, `c172-course-data-pre-sync-${timestamp}.ts`);
  fs.writeFileSync(backupPath, localContent, "utf8");
  console.log(`🛡️  Backup local preventivo guardado en: ${backupPath}`);

  let updatedCount = 0;

  for (const dbLesson of dbLessons) {
    const seq = dbLesson.sequence_order ?? dbLesson.lesson_order;
    const lessonMarker = `export const C172_LESSON_${seq} = {`;
    
    const startIdx = localContent.indexOf(lessonMarker);
    if (startIdx === -1) {
      console.warn(`⚠️ No se encontró marcador "${lessonMarker}" en el archivo local.`);
      continue;
    }

    // El siguiente marcador es la siguiente lección o C172_LESSONS
    let endIdx = -1;
    // Buscar la siguiente lección existente
    for (let nextSeq = seq + 1; nextSeq <= 15; nextSeq++) {
      const nextMarker = `export const C172_LESSON_${nextSeq} = {`;
      const foundIdx = localContent.indexOf(nextMarker, startIdx);
      if (foundIdx !== -1) {
        endIdx = foundIdx;
        break;
      }
    }
    if (endIdx === -1) {
      const arrayMarker = `export const C172_LESSONS = [`;
      endIdx = localContent.indexOf(arrayMarker, startIdx);
    }

    if (endIdx === -1) {
      console.warn(`⚠️ No se encontró final del bloque para Lección ${seq}.`);
      continue;
    }

    const chunk = localContent.slice(startIdx, endIdx);
    const contentHtmlRegex = /content_html:\s*`([\s\S]*?)`,\s*\n\s*(?:visibility_settings|};)/;
    const match = chunk.match(contentHtmlRegex);

    if (!match) {
      console.warn(`⚠️ No se pudo extraer content_html regex en lección ${seq}.`);
      continue;
    }

    const currentLocalHtml = match[1];
    const incomingDbHtml = dbLesson.content_html || "";

    if (currentLocalHtml === incomingDbHtml) {
      console.log(`✅ Lección #${seq} ("${dbLesson.title}"): sin cambios (ya sincronizada, updated_at: ${dbLesson.updated_at})`);
    } else {
      console.log(`🔄 Lección #${seq} ("${dbLesson.title}"): ¡DETECTADOS CAMBIOS EN PLATAFORMA!`);
      console.log(`   Longitud local: ${currentLocalHtml.length} chars -> Plataforma: ${incomingDbHtml.length} chars (updated_at: ${dbLesson.updated_at})`);

      // Escapar backticks y ${} dentro de strings template
      const escapedIncomingHtml = incomingDbHtml.replace(/`/g, "\\`").replace(/\${/g, "\\${");
      
      // Reemplazar de forma quirúrgica en el chunk
      const fullMatch = match[0];
      const endingSuffix = fullMatch.endsWith("};") ? "};" : "visibility_settings";
      const newContentHtmlBlock = `content_html: \`${escapedIncomingHtml}\`,\n${endingSuffix}`;
      
      const updatedChunk = chunk.replace(fullMatch, newContentHtmlBlock);
      localContent = localContent.slice(0, startIdx) + updatedChunk + localContent.slice(endIdx);
      updatedCount++;
    }
  }

  if (updatedCount > 0) {
    fs.writeFileSync(localFile, localContent, "utf8");
    console.log(`\n🎉 Sincronización finalizada: Se actualizaron ${updatedCount} lección(es) en src/features/learning/content/c172-course-data.ts`);
  } else {
    console.log(`\n✨ Todo el contenido local ya estaba idéntico a lo que hay en la base de datos de la plataforma.`);
  }
}

main().catch((err) => {
  console.error("Error inesperado:", err);
  process.exit(1);
});
