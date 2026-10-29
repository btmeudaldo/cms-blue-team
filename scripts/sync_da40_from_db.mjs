import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import { DA40_COURSE_ID } from "../src/features/learning/content/da40-course-data.ts";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Faltan credenciales de Supabase en .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  console.log(`🔍 Consultando estado de lecciones y visibilidad en Supabase para DA40 (${DA40_COURSE_ID})...`);

  const { data: dbLessons, error } = await supabase
    .from("lessons")
    .select("id, sequence_order, title, slug, content_html, updated_at")
    .eq("course_id", DA40_COURSE_ID)
    .order("sequence_order", { ascending: true });

  if (error || !dbLessons) {
    console.error("❌ Error al consultar Supabase:", error);
    process.exit(1);
  }

  const localFile = path.resolve(process.cwd(), "src/features/learning/content/da40-course-data.ts");
  let fileContent = fs.readFileSync(localFile, "utf8");

  const pagebreakRegex = /(?:<!--\s*(?:pagebreak|slidebreak|page-break|slide-break)\s*-->)/gi;

  let totalUpdated = 0;

  for (const dbLesson of dbLessons) {
    if (!dbLesson.content_html) continue;

    const remoteSlides = dbLesson.content_html.split(pagebreakRegex);
    const privateRemoteSlides = [];

    remoteSlides.forEach((slide, idx) => {
      const isPrivate =
        /data-slide-visibility=["'](?:private|only-me)["']/i.test(slide) ||
        /class=["'][^"']*\bslide-private\b[^"']*["']/i.test(slide);

      if (isPrivate) {
        // Extraer número o título
        const numMatch = slide.match(/<!--\s*DIAPOSITIVA\s+([0-9.]+)/i) || slide.match(/<h[1-4][^>]*>\s*([0-9.]+)/i);
        const slideId = numMatch ? numMatch[1] : `índice ${idx + 1}`;
        privateRemoteSlides.push({ idx, slideId, raw: slide });
      }
    });

    if (privateRemoteSlides.length > 0) {
      console.log(`🔒 Lección "${dbLesson.title}" tiene ${privateRemoteSlides.length} diapositiva(s) privadas en Supabase:`);
      privateRemoteSlides.forEach((p) => {
        console.log(`   - Diapositiva ${p.slideId}`);
      });
    }
  }

  console.log("\n✅ Verificación completada.");
}

main().catch(console.error);

