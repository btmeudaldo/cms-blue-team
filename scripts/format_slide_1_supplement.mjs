import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("Missing Supabase credentials");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function main() {
  const { data: lesson, error: fetchErr } = await supabase
    .from("lessons")
    .select("id, content_html")
    .eq("id", "17200000-0000-0000-0000-000000000101")
    .single();

  if (fetchErr || !lesson) {
    console.error("Error fetching lesson:", fetchErr);
    process.exit(1);
  }

  const parts = lesson.content_html.split("<!-- pagebreak -->");
  let slide1 = parts[0];

  // Columna Izquierda profesional, legible, estructurada, sin dibujos de IA y 100% fiel a cada letra del usuario
  const newLeftCol = `    <!-- Columna Izquierda (5 cols / 42%): Especificaciones Técnicas del Suplemento -->
    <div class="lg:col-span-5 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-2 border-b border-slate-200 dark:border-slate-800 mb-3">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            ESPECIFICACIONES DEL SUPLEMENTO
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Cessna 172 · Continental Diésel
          </span>
        </div>

        <div class="flex-1 overflow-y-auto space-y-3 pr-1 text-xs leading-relaxed">
          <!-- Bloque Motor -->
          <div class="rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3 shadow-2xs space-y-2.5">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs sm:text-[13px] uppercase tracking-wide">
                Motor:
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                Suplemento Oficial
              </span>
            </div>

            <div class="space-y-1.5 font-sans">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-slate-100 dark:border-slate-700/40">
                <span class="font-semibold text-slate-600 dark:text-slate-400">Fabricante del motor:</span>
                <span class="font-bold text-slate-900 dark:text-slate-100 sm:text-right">Technify Motors GmbH</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-slate-100 dark:border-slate-700/40">
                <span class="font-semibold text-slate-600 dark:text-slate-400">Modelo del motor:</span>
                <span class="font-mono font-bold text-slate-900 dark:text-slate-100 sm:text-right">TAE 125-02-114 / TAE 125-02-99</span>
              </div>
            </div>

            <div class="rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 p-2.5 text-[11.5px] sm:text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              Es un motor cuatro tiempos, con cuatro cilindros en línea, refrigerado por líquido y turboalimentado, con DOHC (doble árbol de levas en cabeza), inyección directa de combustible y tecnología common rail. Tiene una cilindrada de 1991 ccm o 1689ccm. El motor está controlado por un sistema FADEC. La hélice es accionada por una caja de cambios integrada (i = 1,69) con amortiguación mecánica de vibraciones y liberación en caso de sobrecarga. El motor cuenta con un arranque eléctrico automático y un alternador.
            </div>
          </div>

          <!-- Bloque Propeller -->
          <div class="rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-3 shadow-2xs space-y-2">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs sm:text-[13px] uppercase tracking-wide">
                PROPELLER
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                Paso Variable
              </span>
            </div>

            <div class="space-y-1.5 font-sans">
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-slate-100 dark:border-slate-700/40">
                <span class="font-semibold text-slate-600 dark:text-slate-400">Fabricante:</span>
                <span class="font-bold text-slate-900 dark:text-slate-100 sm:text-right">MT Propeller Entwicklung GmbH</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-slate-100 dark:border-slate-700/40">
                <span class="font-semibold text-slate-600 dark:text-slate-400">Modelo:</span>
                <span class="font-mono font-bold text-slate-900 dark:text-slate-100 sm:text-right">MTV-6-A/187-129 MTV-6-A/190-69 (solo TAE 125-02-99)</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-slate-100 dark:border-slate-700/40">
                <span class="font-semibold text-slate-600 dark:text-slate-400">Numero de palas:</span>
                <span class="font-mono font-bold text-slate-900 dark:text-slate-100 sm:text-right">3</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1 border-b border-slate-100 dark:border-slate-700/40">
                <span class="font-semibold text-slate-600 dark:text-slate-400">Diametro:</span>
                <span class="font-mono font-bold text-slate-900 dark:text-slate-100 sm:text-right">1.87 m (MTV-6-A/187-129), 1.90 m (MTV-6-A/190-69)</span>
              </div>
              <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 py-1">
                <span class="font-semibold text-slate-600 dark:text-slate-400">Tipo:</span>
                <span class="font-bold text-slate-900 dark:text-slate-100 sm:text-right">Velocidad constante.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

  slide1 = slide1.replace(
    /<!-- Columna Izquierda[\s\S]*?<!-- Columna Derecha/,
    newLeftCol + "\n\n    <!-- Columna Derecha"
  );

  parts[0] = slide1;
  const updatedHtml = parts.join("<!-- pagebreak -->");

  const { error: updateErr } = await supabase
    .from("lessons")
    .update({ content_html: updatedHtml })
    .eq("id", "17200000-0000-0000-0000-000000000101");

  if (updateErr) {
    console.error("Error updating lesson:", updateErr);
    process.exit(1);
  }
  console.log("✅ Lección 1 maquetada profesionalmente con el texto literal exacto del usuario.");
}

main().catch(console.error);
