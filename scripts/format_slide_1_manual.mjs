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

  const newLeftCol = `    <!-- Columna Izquierda (5 cols / 42%): Especificaciones POH Oficial -->
    <div class="lg:col-span-5 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col p-3 sm:p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800 mb-2">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            📋 ESPECIFICACIONES (POH)
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Cessna 172
          </span>
        </div>

        <!-- Cuadro unificado para especificaciones que ocupa todo el alto sin los dos cuadros inferiores -->
        <div class="flex-1 overflow-y-auto p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs leading-normal">
          <div class="font-bold text-[#0B2E59] dark:text-sky-300 pt-0.5">SPEED:</div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Maximum at Sea Level . . . . . . . . . . . . . . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">125 KNOTS</span>
          </div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Cruise, 75% Power at 8000 Ft . . . . . . . . . . . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">122 KNOTS</span>
          </div>

          <div class="font-bold text-[#0B2E59] dark:text-sky-300 pt-1.5">CRUISE: Recommended lean mixture with fuel allowance for engine start, taxi , takeoff, climb and 45 minutes reserve at 45% power.</div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>75% Power at 8000 Ft . . 40 Gallons Usable Fuel</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">Range 485NM · Time 4.1 HRS</span>
          </div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>75% Power at 8000 Ft . . . 50 Gallons Usable Fuel</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">Range 630NM · Time 5.3 HRS</span>
          </div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Maximum Range at 10,000 Ft 40 Gallons Usable Fuel</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">Range 575NM · Time 5.7 HRS</span>
          </div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Maximum Range at 10,000 Ft 50 Gallons Usable Fuel</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">Range 750NM · Time 7.4 HRS</span>
          </div>

          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5 pt-1.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300">RA TE OF CLIMB AT SEA LEVEL</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">770 FPM</span>
          </div>
          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300">SERVICE CEILING . . . . . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">14,200 FT</span>
          </div>

          <div class="font-bold text-[#0B2E59] dark:text-sky-300 pt-1.5">TAKEOFF PERFORMANCE:</div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Ground Roll . . . . . . . . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">805 FT</span>
          </div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Total Distance Over 50-Ft Obstacle</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">1440 FT</span>
          </div>

          <div class="font-bold text-[#0B2E59] dark:text-sky-300 pt-1.5">LANDING PERFORMANCE:</div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Ground Roll . . . . . . . . . . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">520 FT</span>
          </div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Total Distance Over 50-Ft Obstacle</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">1250 FT</span>
          </div>

          <div class="font-bold text-[#0B2E59] dark:text-sky-300 pt-1.5">ST ALL SPEED (CAS):</div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Flaps Up, Power Off</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">50 KNOTS</span>
          </div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Flaps Down , Power Off . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">44 KNOTS</span>
          </div>

          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5 pt-1.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300">MAXIMUM WEIGHT . . ...</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">2300 LBS</span>
          </div>

          <div class="font-bold text-[#0B2E59] dark:text-sky-300 pt-1.5">STANDARD EMPTY WEIGHT:</div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Skyhawk . . . . . . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">1393 LBS</span>
          </div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Skyhawk II . . ... .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">1419 LBS</span>
          </div>

          <div class="font-bold text-[#0B2E59] dark:text-sky-300 pt-1.5">MAXIMUM USEFUL LOAD:</div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Skyhawk .... . . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">907 LBS</span>
          </div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Skyhawk II . . . . . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">881 LBS</span>
          </div>

          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5 pt-1.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300">BAGGAGE ALLOWANCE . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">120 LBS</span>
          </div>

          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>WING LOADING: Pounds/Sq Ft</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">13.2</span>
          </div>
          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>POWER LOADING: Pounds/HP</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">14.4</span>
          </div>

          <div class="font-bold text-[#0B2E59] dark:text-sky-300 pt-1.5">FUEL CAPACITY: Total</div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Standard Tanks</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">43 GAL.</span>
          </div>
          <div class="pl-2 flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5">
            <span>Long Range Tanks . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">54 GAL.</span>
          </div>

          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5 pt-1.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300">OIL CAPACITY . . . . .</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">6QTS</span>
          </div>

          <div class="flex justify-between border-b border-slate-100 dark:border-slate-800/60 py-0.5 pt-1.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300">ENGINE: Avco Lycoming 160 BHP at 2700 RPM</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">O-320-H 2AD</span>
          </div>

          <div class="flex justify-between py-0.5 pt-1.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300">PROPELLER: Fixed Pitch, Diameter</span>
            <span class="font-mono font-semibold text-slate-900 dark:text-slate-100">75 IN.</span>
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
  } else {
    console.log("✅ Lección 1 del nuevo curso (c172-manual-poh) actualizada exitosamente!");
  }
}

main().catch(console.error);
