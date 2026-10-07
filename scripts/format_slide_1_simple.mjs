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

  const newLeftCol = `    <!-- Columna Izquierda (5 cols / 42%): Especificaciones -->
    <div class="lg:col-span-5 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col p-3 sm:p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800 mb-2">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            ESPECIFICACIONES
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Cessna 172
          </span>
        </div>

        <!-- Un solo cuadro limpio, con el texto exactamente como fue escrito -->
        <div class="flex-1 overflow-y-auto p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3 text-xs leading-normal">
          <div class="space-y-1.5">
            <div class="font-bold text-sm text-[#0B2E59] dark:text-sky-300">Motor:</div>
            <div>Fabricante del motor: Technify Motors GmbH</div>
            <div>Modelo del motor: TAE 125-02-114 / TAE 125-02-99</div>
            <p class="pt-1 leading-relaxed text-slate-700 dark:text-slate-300">
              Es un motor cuatro tiempos, con cuatro cilindros en línea, refrigerado por líquido y turboalimentado, con DOHC (doble árbol de levas en cabeza), inyección directa de combustible y tecnología common rail. Tiene una cilindrada de 1991 ccm o 1689ccm. El motor está controlado por un sistema FADEC. La hélice es accionada por una caja de cambios integrada (i = 1,69) con amortiguación mecánica de vibraciones y liberación en caso de sobrecarga. El motor cuenta con un arranque eléctrico automático y un alternador.
            </p>
          </div>

          <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2 space-y-1.5">
            <div class="font-bold text-sm text-[#0B2E59] dark:text-sky-300">PROPELLER</div>
            <div>Fabricante: MT Propeller Entwicklung GmbH</div>
            <div>Modelo: MTV-6-A/187-129 MTV-6-A/190-69 (solo TAE 125-02-99)</div>
            <div>Numero de palas: 3</div>
            <div>Diametro: 1.87 m (MTV-6-A/187-129), 1.90 m (MTV-6-A/190-69)</div>
            <div>Tipo: Velocidad constante.</div>
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
  console.log("✅ Cuadro izquierdo restaurado a la estructura simple y limpia con tus textos exactos.");
}

main().catch(console.error);
