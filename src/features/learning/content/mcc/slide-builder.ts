/**
 * Builder de diapositivas del curso APS MCC (A320).
 *
 * Genera el mismo `content_html` de 2 columnas que esperan LessonPlayer y Supabase
 * (`lesson-slide-container`, tarjetas de 590 px, `<!-- pagebreak -->`).
 *
 * Los imports relativos llevan extensión `.ts` para que los scripts de siembra
 * (`node scripts/seed_mcc_course.mjs`) puedan cargar estos módulos sin compilar.
 */

export interface MccCard {
  heading: string;
  bullets?: string[];
  paragraph?: string;
}

export interface MccTable {
  headers: string[];
  rows: string[][];
}

export interface MccAlert {
  level: "WARNING" | "CAUTION" | "NOTE";
  text: string;
}

export interface MccSlideSpec {
  comment: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  leftTitle: string;
  rightTitle: string;
  /** Imagen de la columna derecha. Sin imagen, la columna derecha muestra `rightCards` / `rightTable` / `rightAlert`. */
  image?: string;
  imageAlt?: string;
  /** Fuente de la diapositiva. No se muestra: se guarda en el comentario HTML de la diapositiva. */
  sourceRef: string;
  cards: MccCard[];
  table?: MccTable;
  alert?: MccAlert;
  rightCards?: MccCard[];
  rightTable?: MccTable;
  rightAlert?: MccAlert;
  /** Ancho inicial (%) de la columna izquierda; el editor de lecciones puede ajustarlo después. Por defecto 50. */
  leftPct?: number;
}

/** Mismo límite que el ajuste de columnas del editor (lesson-editor-toolbar.tsx). */
export function clampLeftPct(leftPct = 50): number {
  return Math.max(15, Math.min(85, Math.round(leftPct)));
}

export function renderAlert(alert?: MccAlert): string {
  if (!alert) return "";
  const styles = {
    WARNING:
      "bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-900/60 text-red-900 dark:text-red-200",
    CAUTION:
      "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/60 text-amber-900 dark:text-amber-200",
    NOTE: "bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-900/60 text-sky-900 dark:text-sky-200",
  }[alert.level];
  const icon = alert.level === "NOTE" ? "ℹ️" : "⚠️";
  return `
          <div class="p-2 rounded-xl border flex items-start gap-2 text-xs sm:text-[13px] leading-snug ${styles}">
            <span class="text-sm shrink-0">${icon}</span>
            <span><strong>${alert.level}:</strong> ${alert.text}</span>
          </div>`;
}

export function renderTable(table?: MccTable): string {
  if (!table) return "";
  const ths = table.headers
    .map(
      (h) =>
        `<th class="px-2 py-1 text-left font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">${h}</th>`,
    )
    .join("");
  const trs = table.rows
    .map(
      (r) =>
        `<tr class="border-b border-slate-100 dark:border-slate-800 last:border-b-0">${r
          .map((c) => `<td class="px-2 py-1 text-slate-700 dark:text-slate-200">${c}</td>`)
          .join("")}</tr>`,
    )
    .join("");
  return `
          <div class="rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-2xs">
            <table class="w-full text-xs sm:text-[13px] leading-snug border-collapse">
              <thead class="bg-slate-50 dark:bg-slate-900/60"><tr>${ths}</tr></thead>
              <tbody>${trs}</tbody>
            </table>
          </div>`;
}

export function renderCards(cards: MccCard[] = []): string {
  return cards
    .map((card) => {
      const pHtml = card.paragraph
        ? `<p class="text-slate-700 dark:text-slate-200 text-[13px] sm:text-sm leading-snug">${card.paragraph}</p>`
        : "";
      const bHtml = card.bullets?.length
        ? `<ul class="list-disc pl-4 space-y-0.5 text-slate-700 dark:text-slate-200 text-[13px] sm:text-sm leading-snug">${card.bullets
            .map((b) => `<li>${b}</li>`)
            .join("")}</ul>`
        : "";
      return `
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-[13px] sm:text-sm border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">${card.heading}</strong>${pHtml}${bHtml}
          </div>`;
    })
    .join("");
}

function renderRightBody(spec: MccSlideSpec): string {
  if (spec.image) {
    return `
          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden bg-transparent border-0 shadow-none flex items-center justify-center p-1 lesson-img-wrapper" draggable="false" style="position: relative; width: 100%; float: none; clear: both;">
            <img src="${spec.image}" alt="${spec.imageAlt ?? ""}" class="w-full h-full object-contain rounded-lg" style="object-fit: contain; width: 100%; height: 100%; max-width: 100%; max-height: 100%; aspect-ratio: auto;">
          </div>`;
  }
  return `
          <div class="flex-1 min-h-0 overflow-y-auto space-y-1.5 py-0.5 text-[13px] sm:text-sm">${renderCards(spec.rightCards)}${renderTable(spec.rightTable)}${renderAlert(spec.rightAlert)}
          </div>`;
}

export function buildMccSlide(spec: MccSlideSpec): string {
  const leftPct = clampLeftPct(spec.leftPct);
  const rightPct = 100 - leftPct;

  // La fuente no se muestra al alumno: queda como comentario HTML para trazabilidad y revisión.
  return `<!-- ${spec.comment} | ${spec.sourceRef} -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">${spec.eyebrow}</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">${spec.title}</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">${spec.subtitle}</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="${leftPct}" style="--col-left: ${leftPct}fr; --col-right: ${rightPct}fr; grid-template-columns: minmax(0px, ${leftPct}fr) minmax(0px, ${rightPct}fr) !important;">
    <div class="flex flex-col lg:col-span-6" style="grid-column: auto !important;">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">${spec.leftTitle}</span>
        </div>
        <div class="space-y-1.5 py-0.5 text-[13px] sm:text-sm">${renderCards(spec.cards)}${renderTable(spec.table)}${renderAlert(spec.alert)}
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:col-span-6" style="grid-column: auto !important;">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">${spec.rightTitle}</span>
          </div>${renderRightBody(spec)}
        </div>
      </div>
    </div>
  </div>
</div>`;
}

export function joinSlides(slides: MccSlideSpec[]): string {
  return slides.map(buildMccSlide).join("\n\n<!-- pagebreak -->\n\n");
}

/** Lección del curso MCC tal como la consumen mock-store y el script de siembra. */
export interface MccLesson {
  id: string;
  course_id: string;
  title: string;
  slug: string;
  sequence_order: number;
  lesson_order: number;
  min_seconds: number;
  content_html: string;
}
