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

  // DIAPOSITIVA 1.1 FORMATEADA (sin cambiar textos, ni estructura ni explicaciones, solo tipografía y jerarquía visual limpia)
  const slide1 = `<!-- DIAPOSITIVA 1.1: Flota C172 Blue Team: Especificaciones Generales y Fundamentos Tecnológicos -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.1 Flota Cessna 172: Especificaciones Generales y Fundamentos Tecnológicos
    </h1>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      EASA Part-FCL.710 · Blue Team Flight School
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1 min-h-0 py-2" data-left-pct="42" style="--col-left: 42fr; --col-right: 58fr; grid-template-columns: minmax(0, 42fr) minmax(0, 58fr);">
    <!-- Columna Izquierda (5 cols / 42%): Especificaciones POH NNA -->
    <div class="lg:col-span-5 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800 mb-2.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            ESPECIFICACIONES
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Cessna 172
          </span>
        </div>

        <div class="flex-1 overflow-y-auto p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-3.5 text-xs leading-normal">
          <!-- Sección Motor -->
          <div class="space-y-1.5">
            <h3 class="font-bold text-sm text-[#0B2E59] dark:text-sky-300 border-b border-slate-100 dark:border-slate-700/60 pb-1">
              Motor:
            </h3>
            <div class="pt-0.5"><span class="font-semibold text-slate-700 dark:text-slate-300">Fabricante del motor:</span> Technify Motors GmbH</div>
            <div><span class="font-semibold text-slate-700 dark:text-slate-300">Modelo del motor:</span> TAE 125-02-114 / TAE 125-02-99</div>
            <p class="pt-1.5 text-slate-700 dark:text-slate-300 leading-relaxed text-[11.5px] sm:text-xs">
              Es un motor cuatro tiempos, con cuatro cilindros en línea, refrigerado por líquido y turboalimentado, con DOHC (doble árbol de levas en cabeza), inyección directa de combustible y tecnología common rail. Tiene una cilindrada de 1991 ccm o 1689ccm. El motor está controlado por un sistema FADEC. La hélice es accionada por una caja de cambios integrada (i = 1,69) con amortiguación mecánica de vibraciones y liberación en caso de sobrecarga. El motor cuenta con un arranque eléctrico automático y un alternador.
            </p>
          </div>

          <!-- Sección Propeller -->
          <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2.5 space-y-1.5">
            <h3 class="font-bold text-sm text-[#0B2E59] dark:text-sky-300 border-b border-slate-100 dark:border-slate-700/60 pb-1">
              PROPELLER
            </h3>
            <div class="pt-0.5"><span class="font-semibold text-slate-700 dark:text-slate-300">Fabricante:</span> MT Propeller Entwicklung GmbH</div>
            <div><span class="font-semibold text-slate-700 dark:text-slate-300">Modelo:</span> MTV-6-A/187-129 MTV-6-A/190-69 (solo TAE 125-02-99)</div>
            <div><span class="font-semibold text-slate-700 dark:text-slate-300">Numero de palas:</span> 3</div>
            <div><span class="font-semibold text-slate-700 dark:text-slate-300">Diametro:</span> 1.87 m (MTV-6-A/187-129), 1.90 m (MTV-6-A/190-69)</div>
            <div><span class="font-semibold text-slate-700 dark:text-slate-300">Tipo:</span> Velocidad constante.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (7 cols / 58%): Conceptos Clave y Tecnologías del Sistema -->
    <div class="lg:col-span-7 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            TECNOLOGÍAS DEL SISTEMA
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Conceptos Clave
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-1.5 gap-2">
          <!-- Un solo cuadro unificado para FADEC y Common Rail -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 text-xs sm:text-[13px] leading-snug">
            <!-- FADEC -->
            <div>
              <div class="flex items-center justify-between">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">🧠 FADEC (Full Authority Digital Engine Control)</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600">Doble Canal (A / B)</span>
              </div>
              <p class="text-slate-600 dark:text-slate-300 mt-1 leading-snug text-xs sm:text-[12px]">
                Es el cerebro informático del motor. Monitoriza continuamente parámetros presiones, temperaturas, RPM y posición de palanca de gases, gestiona de forma automática y optimiza la dosificación de combustible, la presión del turbo y el paso de la hélice. Elimina el riesgo de sobrerrégimen y la necesidad de ajustar la mezcla manualmente a distintas altitudes o fases de vuelo. Al no usar magnetos convencionales, una <strong>Batería de Respaldo FADEC</strong> garantiza el suministro eléctrico para que el motor siga funcionando ante fallo eléctrico del avión durante un máximo de 30 minutos a través del canal A (no forzar canal B).
              </p>
            </div>

            <!-- Common Rail -->
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2">
              <div class="flex items-center justify-between">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">💉 Common Rail e Inyección Directa</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600">&gt;1350 bar</span>
              </div>
              <p class="text-slate-600 dark:text-slate-300 mt-1 leading-snug text-xs sm:text-[12px]">
                Una bomba mecánica presuriza el combustible JET A-1 a alta presión en un conducto común (rail) y los inyectores lo pulverizan directamente en la cámara de combustión. Las bujías de precalentamiento Glow Plugs preparan el motor para el arranque elevando la temperatura, sin necesidad de cebador manual (primer) ni riesgo de ahogo.
              </p>
            </div>
          </div>

          <!-- Cuadros inferiores Turbo y Gearbox -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 block mb-0.5">🌪️ Turbo e Intercooler</span>
              <p class="text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs">
                El turbo aprovecha los gases de escape para mantener la presión de admisión en altitud evitando la pérdida de potencia de motores atmosféricos. El intercooler enfría el aire comprimido para aumentar su densidad de oxígeno.
              </p>
            </div>

            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 block mb-0.5">⚙️ Gearbox</span>
              <p class="text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs">
                El motor gira a un régimen máximo continuo de ~3900 RPM, y mediante una relación de reducción, las revoluciones se desmultiplican a un régimen máximo de hélice de 2300 RPM. Entre el cigüeñal y la caja reductora se incorpora un embrague de fricción amortiguador para mitigar las vibraciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  // NUEVA DIAPOSITIVA 1.2: INSTRUMENT PANEL (del Suplemento EC-NNA Pages 1-5 & 1-6)
  const slide2 = `<!-- DIAPOSITIVA 1.2: INSTRUMENT PANEL (Suplemento Oficial POH NNA) -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.2 INSTRUMENT PANEL
    </h1>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Supplement POH Reims/Cessna (F) 172 N&amp;P with TAE 125-02-114 · Pages 1-5 &amp; 1-6
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1 min-h-0 py-2" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr; grid-template-columns: minmax(0, 50fr) minmax(0, 50fr);">
    <!-- Columna Izquierda (6 cols / 50%): Figuras Oficiales del Manual POH NNA -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800 mb-2">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            FIGURES &amp; DIAGRAMS
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            EC-NNA Supplement
          </span>
        </div>

        <div class="flex-1 overflow-y-auto space-y-3 pr-1">
          <!-- Figura 1-1 Panel -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <div class="font-bold text-xs text-[#0B2E59] dark:text-sky-300">
              Figure 1-1 Example of Instrument panel
            </div>
            <div class="w-full rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-1">
              <img src="/images/c172/figure-1-1-instrument-panel.png" alt="Figure 1-1 Example of Instrument panel" class="w-full h-auto max-h-[220px] object-contain rounded" />
            </div>
          </div>

          <!-- Figura 1-2 Lightpanel y espacio diagrama CED 125 -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <div class="font-bold text-xs text-[#0B2E59] dark:text-sky-300">
              Figure 1-2 Lightpanel
            </div>
            <div class="w-full rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-1">
              <img src="/images/c172/figure-1-2-lightpanel.png" alt="Figure 1-2 Lightpanel" class="w-full h-auto max-h-[140px] object-contain rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (6 cols / 50%): Texto Literal Oficial POH Suplemento -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800 mb-2">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            COMPONENTS LIST
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Pages 1-5 &amp; 1-6
          </span>
        </div>

        <div class="flex-1 overflow-y-auto p-3.5 sm:p-4 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 text-xs leading-relaxed font-sans">
          <div class="text-slate-600 dark:text-slate-400 italic text-[11px] pb-1 border-b border-slate-100 dark:border-slate-700/60">
            Components of the new installation can be seen as example in the following Figure
          </div>

          <div class="space-y-1.5">
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">13.</span> "Alt. Air Door" Alternate Air Door<br/>
              <span class="text-slate-500 dark:text-slate-400 pl-4">(Carburetor Heat Button N/A)</span>
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">19.</span> "Starter"-Push Button for Starter
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">21.</span> "BAT"-Switch for Battery
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">22.</span> "MAIN"-Switch for Main Bus
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">28.</span> CED 125 (Tachometer N/A)<br/>
              <span class="text-slate-600 dark:text-slate-400 pl-4 block text-[11px] leading-tight">
                The Compact Engine Display contains indication of Propeller Rotary Speed, Oil Pressure, Oil Temperature, Coolant Temperature, Gearbox Temperature and Load.
              </span>
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">51.</span> AED 125 SR (Voltmeter, Ammeter) with indication of FuelTemperature, Voltage and a caution light "Water Level" (amber) for low coolant level
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">54.</span> "Force B"-Switch for manually switching the FADEC
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">59.</span> "Fuel Pump"-Switch for the Electric Fuel Pump
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">60.</span> "ALT"-Switch for Alternator
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">62.</span> Fuse Electric Fuel Pump
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">63.</span> Fuses, among other for Alternator Warning light, Starter, FADEC and Main Bus
            </div>
            <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">72.</span> "Engine Master"-Switch electrical supply FADEC
            </div>
            <div class="py-0.5 pt-1">
              <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">73.</span> <strong>Lightpanel with:</strong>
              <div class="pl-4 pt-1 space-y-0.5 text-[11px] text-slate-700 dark:text-slate-300">
                <div>• "FADEC" Test Knob</div>
                <div>• "A FADEC B" Warning Lights for FADEC A and B (red)</div>
                <div>• "Alt" Alternator Warning Light (red)</div>
                <div>• "AED" Caution Light (amber) for AED 125</div>
                <div>• "CED" Caution Light (amber) for CED 125</div>
                <div>• "CED/AED" - Test/Confirm Knob for CED 125, AED 125 and Caution Lights (amber)</div>
                <div>• "Fuel L";"Fuel R" Caution Lights for low fuel level (amber)</div>
                <div>• "Glow" Glow Control Light (amber)</div>
              </div>
            </div>
          </div>

          <div class="mt-2 pt-2 border-t border-slate-100 dark:border-slate-700/60 font-mono text-[10px] text-slate-500 dark:text-slate-400">
            Supplement POH Reims/Cessna (F) 172 N&amp;P with TAE 125-02-114 · Page 1-6 · Issue 2 · Revision 8, Jan. 2018
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  // Obtener el resto de diapositivas a partir de la antigua diapositiva 2
  const remainingSlides = lesson.content_html.split("<!-- pagebreak -->").slice(1);

  // Renumerar los encabezados de las diapositivas restantes (1.2 -> 1.3, 1.3 -> 1.4, etc.)
  const renumberedRemaining = remainingSlides.map((slide, idx) => {
    const oldNum = `1.${idx + 2}`;
    const newNum = `1.${idx + 3}`;
    return slide.replaceAll(oldNum, newNum);
  });

  const fullContentHtml = [slide1, slide2, ...renumberedRemaining].join("\n\n<!-- pagebreak -->\n\n");

  const { error: updateErr } = await supabase
    .from("lessons")
    .update({ content_html: fullContentHtml })
    .eq("id", "17200000-0000-0000-0000-000000000101");

  if (updateErr) {
    console.error("Error updating lesson in Supabase:", updateErr);
    process.exit(1);
  }

  console.log("✅ Diapositiva 1.1 formateada y nueva Diapositiva 1.2 (INSTRUMENT PANEL) añadida exitosamente!");
}

main().catch(console.error);
