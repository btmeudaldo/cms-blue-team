import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";
import {
  MCC_COURSE_ID,
  MCC_COURSE_SLUG,
  MCC_COURSE_TITLE,
  MCC_COURSE_DESCRIPTION,
  MCC_COURSE_IMAGE_URL,
  MCC_LESSONS,
} from "../src/features/learning/content/mcc-course-data.ts";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

/*
 * Opciones:
 *   --only=slug1,slug2  Sube solo esas lecciones (contenido completo). Al resto de lecciones del
 *                       curso que ya existan en Supabase solo se les actualiza el orden
 *                       (sequence_order / lesson_order), nunca el contenido. No toca la fila del curso.
 *   --private           Las lecciones que aún no existen en Supabase se crean con todas sus
 *                       diapositivas privadas (solo las ve el superadmin), y en las que ya existen
 *                       las diapositivas nuevas (sin equivalente remoto) también se crean privadas.
 *   --dry-run           Muestra lo que haría sin escribir nada.
 */
const args = process.argv.slice(2);
const onlyArg = args.find((a) => a.startsWith("--only="));
const ONLY_SLUGS = onlyArg ? onlyArg.slice("--only=".length).split(",").map((s) => s.trim()).filter(Boolean) : null;
const FORCE_PRIVATE_NEW = args.includes("--private");
const DRY_RUN = args.includes("--dry-run");

if (ONLY_SLUGS) {
  const unknown = ONLY_SLUGS.filter((s) => !MCC_LESSONS.some((l) => l.slug === s));
  if (unknown.length) {
    console.error(`❌ Slugs desconocidos en --only: ${unknown.join(", ")}`);
    process.exit(1);
  }
}

/** Reordena (solo orden) las lecciones existentes que no se van a subir, para liberar sus posiciones. */
async function reorderExistingLessons(selectedIds) {
  const others = MCC_LESSONS.filter((l) => !selectedIds.has(l.id));
  const { data: remote, error } = await supabase
    .from("lessons")
    .select("id, slug, sequence_order, lesson_order")
    .eq("course_id", MCC_COURSE_ID);
  if (error) throw error;
  const remoteById = new Map((remote ?? []).map((r) => [r.id, r]));

  // Primero las que suben de posición (de mayor a menor) para no chocar con el índice único.
  const moves = others
    .filter((l) => remoteById.has(l.id))
    .filter((l) => {
      const r = remoteById.get(l.id);
      return r.sequence_order !== l.sequence_order || r.lesson_order !== (l.lesson_order ?? l.sequence_order);
    })
    .sort((a, b) => b.sequence_order - a.sequence_order);

  for (const l of moves) {
    const r = remoteById.get(l.id);
    const target = { sequence_order: l.sequence_order, lesson_order: l.lesson_order ?? l.sequence_order };
    console.log(`↕️  Orden ${l.slug}: ${r.sequence_order}/${r.lesson_order} → ${target.sequence_order}/${target.lesson_order}`);
    if (DRY_RUN) continue;
    const { error: upErr } = await supabase.from("lessons").update(target).eq("id", l.id);
    if (upErr) throw upErr;
  }
  if (!moves.length) console.log("↕️  No hay lecciones que reordenar.");
}

async function seedMCC() {
  console.log(
    `🚀 Sincronizando curso APS MCC en Supabase...${DRY_RUN ? " (DRY RUN: no se escribe nada)" : ""}`,
  );

  const lessonsToUpload = ONLY_SLUGS ? MCC_LESSONS.filter((l) => ONLY_SLUGS.includes(l.slug)) : MCC_LESSONS;

  if (ONLY_SLUGS) {
    console.log(`📌 Solo se suben: ${ONLY_SLUGS.join(", ")} (la fila del curso no se toca).`);
    await reorderExistingLessons(new Set(lessonsToUpload.map((l) => l.id)));
  } else {
    await upsertCourse();
  }

  await upsertLessons(lessonsToUpload);

  console.log(
    `\n🎉 Curso APS MCC sincronizado (sin matriculación automática masiva: matricular alumnos desde Admin/Instructor).`,
  );
}

async function upsertCourse() {
  if (DRY_RUN) {
    console.log(`📝 Se actualizaría la fila del curso ${MCC_COURSE_SLUG}.`);
    return;
  }
  const { error: courseError } = await supabase.from("courses").upsert(
    {
      id: MCC_COURSE_ID,
      title: MCC_COURSE_TITLE,
      slug: MCC_COURSE_SLUG,
      description: MCC_COURSE_DESCRIPTION,
      image_url: MCC_COURSE_IMAGE_URL,
    },
    { onConflict: "id" }
  );

  if (courseError) {
    console.error("❌ Error upserting course:", courseError);
    process.exit(1);
  }
  console.log(`✅ Curso APS MCC registrado: ${MCC_COURSE_TITLE}`);
}

async function upsertLessons(lessons) {
  for (const lesson of lessons) {
    let contentToSave = lesson.content_html;
    let existsRemotely = false;

    // Preservar visibilidad configurada desde la interfaz si ya existe en Supabase
    try {
      const { data: dbLesson } = await supabase
        .from("lessons")
        .select("content_html")
        .eq("id", lesson.id)
        .maybeSingle();

      existsRemotely = Boolean(dbLesson);
      if (dbLesson && dbLesson.content_html) {
        const pagebreakRegex = /(?:<!--\s*(?:pagebreak|slidebreak|page-break|slide-break)\s*-->)/gi;
        const remoteSlides = dbLesson.content_html.split(pagebreakRegex);
        const localSlides = contentToSave.split(pagebreakRegex);

        const extractSlideKey = (slideText, index) => {
          const commentMatch = slideText.match(/<!--\s*SLIDE\s+([0-9.]+)/i);
          if (commentMatch) return commentMatch[1].trim();
          const headingMatch = slideText.match(/<h[1-4][^>]*>\s*([0-9.]+)/i);
          if (headingMatch) return headingMatch[1].trim();
          return `index_${index}`;
        };

        const isSlidePrivate = (slideText) => {
          return (
            /data-slide-visibility=["'](?:private|only-me)["']/i.test(slideText) ||
            /class=["'][^"']*\bslide-private\b[^"']*["']/i.test(slideText)
          );
        };

        const setSlidePrivateAttr = (slideText) => {
          if (isSlidePrivate(slideText)) return slideText;
          if (/<div[^>]*class=["'][^"']*lesson-slide-container/i.test(slideText)) {
            return slideText.replace(
              /(<div[^>]*class=["'][^"']*lesson-slide-container[^"']*)/i,
              '$1 data-slide-visibility="private"'
            );
          }
          return slideText.replace(/^(\s*<[a-zA-Z0-9\-]+)/i, '$1 data-slide-visibility="private"');
        };

        const setSlidePublicAttr = (slideText) => {
          return slideText
            .replace(/\s*data-slide-visibility=["'][^"']*["']/gi, "")
            .replace(/\b(?:slide-private)\b/gi, "");
        };

        const remoteVisibilityMap = new Map();
        remoteSlides.forEach((rSlide, rIdx) => {
          const key = extractSlideKey(rSlide, rIdx);
          const vis = isSlidePrivate(rSlide) ? "private" : "public";
          remoteVisibilityMap.set(key, vis);
          remoteVisibilityMap.set(`index_${rIdx}`, vis);
        });

        const mergedSlides = localSlides.map((lSlide, lIdx) => {
          const key = extractSlideKey(lSlide, lIdx);
          const remoteVis = remoteVisibilityMap.get(key) ?? remoteVisibilityMap.get(`index_${lIdx}`);
          // Con --private, una diapositiva sin equivalente remoto (nueva) se crea privada.
          const finalVis =
            remoteVis !== undefined
              ? remoteVis
              : FORCE_PRIVATE_NEW || isSlidePrivate(lSlide)
                ? "private"
                : "public";
          return finalVis === "private" ? setSlidePrivateAttr(lSlide) : setSlidePublicAttr(lSlide);
        });

        contentToSave = mergedSlides.join("\n\n<!-- pagebreak -->\n\n");
      }
    } catch (e) {
      console.warn("No se pudo verificar visibilidad previa en Supabase:", e);
    }

    if (FORCE_PRIVATE_NEW && !existsRemotely) {
      const pagebreakRegex = /(?:<!--\s*(?:pagebreak|slidebreak|page-break|slide-break)\s*-->)/gi;
      contentToSave = contentToSave
        .split(pagebreakRegex)
        .map((slide) =>
          /data-slide-visibility=/i.test(slide)
            ? slide
            : slide.replace(
                /(<div[^>]*class=["'][^"']*lesson-slide-container[^"']*["'])/i,
                '$1 data-slide-visibility="private"',
              ),
        )
        .join("\n\n<!-- pagebreak -->\n\n");
    }

    const slides = contentToSave.split(/<!--\s*pagebreak\s*-->/gi);
    const privateCount = slides.filter((s) => /data-slide-visibility=["']private["']/i.test(s)).length;
    console.log(
      `${DRY_RUN ? "📝 Se guardaría" : "💾 Guardando"}: ${lesson.slug} (orden ${lesson.sequence_order}, ${slides.length} diapositivas, ${privateCount} privadas, ${existsRemotely ? "actualización" : "nueva"}, min_seconds ${lesson.min_seconds})`,
    );
    if (DRY_RUN) continue;

    const wordCount = contentToSave
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
        content_html: contentToSave,
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
}

seedMCC().catch((err) => {
  console.error(err);
  process.exit(1);
});
