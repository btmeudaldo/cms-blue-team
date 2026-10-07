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

  // DIAPOSITIVA 1.1: MOTOR CONTINENTAL CD-155 (TAE 125-02-114) - POH EC-NNA
  // Diseñada sin scroll vertical: alturas y tipografías compactas y legibles
  const slide1_1 = `<!-- DIAPOSITIVA 1.1: Flota C172 Blue Team: Motor Continental CD-155 (TAE 125-02-114) -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.1 Flota Cessna 172: Motor Continental CD-155 (TAE 125-02-114)
    </h1>
    <span class="text-[11px] sm:text-xs text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Supplement POH Reims/Cessna (F) 172 N&amp;P · Page 1-2 · EC-NNA
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch flex-1 min-h-0 py-1.5" data-left-pct="46" style="--col-left: 46fr; --col-right: 54fr; grid-template-columns: minmax(0, 46fr) minmax(0, 54fr);">
    <!-- Columna Izquierda (46%): Especificaciones Literales POH NNA -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs">
            ESPECIFICACIONES DEL MOTOR
          </span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold font-mono">
            POH Pág. 1-2
          </span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs leading-snug">
          <div><span class="font-semibold text-slate-700 dark:text-slate-300">Fabricante del motor:</span> Technify Motors GmbH</div>
          <div><span class="font-semibold text-slate-700 dark:text-slate-300">Modelo del motor:</span> TAE 125-02-114</div>
          <div><span class="font-semibold text-slate-700 dark:text-slate-300">Cilindrada:</span> 1991 ccm (121.5 in³)</div>
          
          <p class="pt-1 text-slate-600 dark:text-slate-300 leading-snug text-[11px] sm:text-[11.5px] border-t border-slate-100 dark:border-slate-700/60">
            Es un motor cuatro tiempos, con cuatro cilindros en línea, refrigerado por líquido y turboalimentado, con DOHC (doble árbol de levas en cabeza), inyección directa de combustible y tecnología common rail. El motor está controlado por un sistema FADEC. La hélice es accionada por una caja de cambios integrada (i = 1,69) con amortiguación mecánica de vibraciones y liberación en caso de sobrecarga. El motor cuenta con un arranque eléctrico automático y un alternador.
          </p>

          <div class="pt-1 border-t border-slate-100 dark:border-slate-700/60 text-[10.5px] text-amber-800 dark:text-amber-300/90 bg-amber-50/60 dark:bg-amber-950/30 p-1.5 rounded-lg border border-amber-200/60 dark:border-amber-900/40">
            <strong>POH Warning:</strong> Sin magnetos ni cebador manual (primer). Requiere energía eléctrica continua: ante fallo total de alternador y batería principal, la batería de respaldo FADEC suministra un máximo de 30 minutos de operación.
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (54%): Fundamentos Operativos (FADEC y Common Rail) -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs">
            TECNOLOGÍAS DEL SISTEMA
          </span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold font-mono">
            Conceptos Clave
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between gap-2">
          <!-- FADEC -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
            <div class="flex items-center justify-between">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs">FADEC (Full Authority Digital Engine Control)</span>
              <span class="px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">Doble Canal (A / B)</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-[11px] leading-snug">
              Cerebro informático del motor. Monitoriza presiones, temperaturas, RPM y palanca de gases, gestionando automáticamente la dosificación de combustible, presión del turbo y paso de la hélice sin riesgo de sobrerrégimen ni ajuste manual de mezcla a cualquier altitud.
            </p>
          </div>

          <!-- Common Rail -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
            <div class="flex items-center justify-between">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs">Common Rail e Inyección Directa</span>
              <span class="px-1.5 py-0.5 rounded text-[9.5px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600">&gt;1350 bar</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-[11px] leading-snug">
              Una bomba mecánica presuriza el combustible JET A-1 a muy alta presión en un rail común y los inyectores lo pulverizan directamente en los cilindros. Las bujías de precalentamiento (Glow Plugs) acondicionan el motor antes del arranque eliminando el riesgo de ahogo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  // DIAPOSITIVA 1.2: HÉLICE MT-PROPELLER Y SISTEMAS DE PROPULSIÓN (POH EC-NNA)
  const slide1_2 = `<!-- DIAPOSITIVA 1.2: Hélice MT-Propeller, Turbo e Intercooler -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.2 Hélice MT-Propeller, Reductora (Gearbox) y Turboalimentador
    </h1>
    <span class="text-[11px] sm:text-xs text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Supplement POH Reims/Cessna (F) 172 N&amp;P · Pages 1-3 &amp; 1-4 · EC-NNA
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch flex-1 min-h-0 py-1.5" data-left-pct="46" style="--col-left: 46fr; --col-right: 54fr; grid-template-columns: minmax(0, 46fr) minmax(0, 54fr);">
    <!-- Columna Izquierda (46%): Especificaciones Hélice POH NNA -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs">
            ESPECIFICACIONES DE LA HÉLICE
          </span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold font-mono">
            POH Pág. 1-3
          </span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs leading-snug">
          <div><span class="font-semibold text-slate-700 dark:text-slate-300">Fabricante:</span> MT Propeller Entwicklung GmbH</div>
          <div><span class="font-semibold text-slate-700 dark:text-slate-300">Modelo:</span> MTV-6-A/187-129 · MTV-6-A/190-69</div>
          <div><span class="font-semibold text-slate-700 dark:text-slate-300">Número de palas:</span> 3 palas de material compuesto</div>
          <div><span class="font-semibold text-slate-700 dark:text-slate-300">Diámetro:</span> 1.87 m (MTV-6-A/187-129) / 1.90 m (MTV-6-A/190-69)</div>
          <div><span class="font-semibold text-slate-700 dark:text-slate-300">Tipo:</span> Velocidad constante (Paso variable gobernado por FADEC)</div>

          <div class="pt-1.5 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-600 dark:text-slate-300 space-y-0.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs">Líquidos Oficiales Aprobados (POH Pág. 1-4):</span>
            <div>• <strong>Aceite de motor:</strong> AeroShell Oil Diesel Ultra / Shell Helix Ultra</div>
            <div>• <strong>Aceite reductora:</strong> Centurion Gearbox Oil N1 / Shell Spirax</div>
            <div>• <strong>Refrigerante:</strong> Agua / Glysantin G48 proporción 50:50 (Congelación: -36°C)</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (54%): Turbo, Intercooler y Gearbox -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs">
            SISTEMAS DE PROPULSIÓN
          </span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold font-mono">
            Fundamentos Operativos
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between gap-2">
          <!-- Turbo e Intercooler -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs block">Turboalimentador e Intercooler</span>
            <p class="text-slate-600 dark:text-slate-300 text-[11px] leading-snug">
              El turbo aprovecha la energía térmica y cinética de los gases de escape para sobrealimentar los cilindros, manteniendo la presión de admisión en altitud sin sufrir la degradación de potencia típica de los motores atmosféricos. El intercooler enfría el aire comprimido para maximizar la densidad de oxígeno.
            </p>
          </div>

          <!-- Gearbox -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs block">Gearbox (Caja Reductora Integrada)</span>
            <p class="text-slate-600 dark:text-slate-300 text-[11px] leading-snug">
              El motor gira a un régimen máximo continuo de ~3900 RPM, desmultiplicándose a un régimen máximo de hélice de 2300 RPM (relación de reducción i = 1,69). Entre el cigüeñal y la caja reductora se incorpora un embrague de fricción amortiguador para mitigar las vibraciones mecánicas y proteger el conjunto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  // DIAPOSITIVA 1.3: INSTRUMENT PANEL - INSTRUMENTOS PRINCIPALES Y MANDOS (Figure 1-1 y Pág. 1-5)
  const slide1_3 = `<!-- DIAPOSITIVA 1.3: INSTRUMENT PANEL - Instrumentos Principales (POH EC-NNA Page 1-5) -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.3 INSTRUMENT PANEL: Instrumentos y Mandos Principales
    </h1>
    <span class="text-[11px] sm:text-xs text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Supplement POH Reims/Cessna (F) 172 N&amp;P · Page 1-5 · EC-NNA
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch flex-1 min-h-0 py-1.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr; grid-template-columns: minmax(0, 50fr) minmax(0, 50fr);">
    <!-- Columna Izquierda (50%): Figura 1-1 en Alta Resolución -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs">
            FIGURE 1-1 EXAMPLE OF INSTRUMENT PANEL
          </span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold font-mono">
            POH Pág. 1-5
          </span>
        </div>

        <div class="flex-1 flex items-center justify-center p-2 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xs overflow-hidden min-h-0">
          <img src="/images/c172/figure-1-1-instrument-panel.png" alt="Figure 1-1 Example of Instrument panel" class="max-w-full max-h-full object-contain rounded" />
        </div>
      </div>
    </div>

    <!-- Columna Derecha (50%): Lista Literal Oficial de Componentes del Panel (Pág. 1-5) -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs">
            COMPONENTS LIST (POH Section 1)
          </span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold font-mono">
            Pages 1-5
          </span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs leading-snug">
          <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">13.</span> "Alt. Air Door" Alternate Air Door <span class="text-slate-500 dark:text-slate-400 text-[10.5px]">(Carburetor Heat Button N/A)</span>
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
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">28.</span> <strong>CED 125</strong> (Tachometer N/A)<br/>
            <span class="text-slate-600 dark:text-slate-400 pl-3 block text-[10.5px] leading-tight">
              Compact Engine Display: Propeller Rotary Speed, Oil Pressure, Oil Temperature, Coolant Temperature, Gearbox Temperature and Load.
            </span>
          </div>
          <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">51.</span> <strong>AED 125 SR</strong> (Voltmeter, Ammeter) with Fuel-Temperature, Voltage and caution light "Water Level" (amber).
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
          <div class="py-0.5">
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">62.</span> Fuse Electric Fuel Pump
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  // DIAPOSITIVA 1.4: INSTRUMENT PANEL - LIGHTPANEL Y GESTIÓN ELÉCTRICA (Figure 1-2 y Pág. 1-6)
  const slide1_4 = `<!-- DIAPOSITIVA 1.4: INSTRUMENT PANEL - Lightpanel y Avisos (POH EC-NNA Page 1-6) -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.4 INSTRUMENT PANEL: Lightpanel y Gestión Eléctrica
    </h1>
    <span class="text-[11px] sm:text-xs text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Supplement POH Reims/Cessna (F) 172 N&amp;P · Page 1-6 · EC-NNA
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch flex-1 min-h-0 py-1.5" data-left-pct="45" style="--col-left: 45fr; --col-right: 55fr; grid-template-columns: minmax(0, 45fr) minmax(0, 55fr);">
    <!-- Columna Izquierda (45%): Figura 1-2 Lightpanel Nítida -->
    <div class="lg:col-span-5 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs">
            FIGURE 1-2 LIGHTPANEL
          </span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold font-mono">
            POH Pág. 1-6
          </span>
        </div>

        <div class="flex-1 flex items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xs overflow-hidden min-h-0">
          <img src="/images/c172/figure-1-2-lightpanel.png" alt="Figure 1-2 Lightpanel" class="max-w-full max-h-full object-contain rounded" />
        </div>
      </div>
    </div>

    <!-- Columna Derecha (55%): Lista Literal de Indicadores y Luces (Pág. 1-6) -->
    <div class="lg:col-span-7 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs min-h-0">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs">
            LIGHTPANEL INDICATORS &amp; SWITCHES
          </span>
          <span class="text-[10px] text-slate-500 dark:text-slate-400 font-semibold font-mono">
            POH Page 1-6
          </span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs leading-snug">
          <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">72.</span> "Engine Master"-Switch electrical supply FADEC
          </div>

          <div class="py-0.5 border-b border-slate-100 dark:border-slate-700/40">
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">73.</span> <strong>Lightpanel with:</strong>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 pl-3 pt-1 text-[10.5px] text-slate-700 dark:text-slate-300">
              <div>• "FADEC" Test Knob</div>
              <div>• "A FADEC B" Warning Lights (red)</div>
              <div>• "Alt" Alternator Warning Light (red)</div>
              <div>• "AED" Caution Light (amber)</div>
              <div>• "CED" Caution Light (amber)</div>
              <div>• "CED/AED" Test/Confirm Knob</div>
              <div>• "Fuel L";"Fuel R" Caution (amber)</div>
              <div>• "Glow" Control Light (amber)</div>
            </div>
          </div>

          <div class="py-0.5">
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">63.</span> Fuses, among other for Alternator Warning light, Starter, FADEC and Main Bus
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

  // Obtenemos las diapositivas originales a partir de la antigua 1.2 (Velocidades)
  // En lesson.content_html original, la diapositiva 0 era la 1.1, la 1 era la 1.2 (Velocidades), etc.
  const rawSlides = lesson.content_html.split("<!-- pagebreak -->");
  const remainingOriginalSlides = rawSlides.slice(1);

  // Renumerar las diapositivas restantes correlativamente a partir de 1.5
  // Original 1.2 -> 1.5, Original 1.3 -> 1.6, etc.
  const renumberedRemaining = remainingOriginalSlides.map((slide, idx) => {
    const oldNum = `1.${idx + 2}`;
    const newNum = `1.${idx + 5}`;
    return slide.replaceAll(oldNum, newNum);
  });

  const fullContentHtml = [slide1_1, slide1_2, slide1_3, slide1_4, ...renumberedRemaining].join("\n\n<!-- pagebreak -->\n\n");

  const { error: updateErr } = await supabase
    .from("lessons")
    .update({ content_html: fullContentHtml })
    .eq("id", "17200000-0000-0000-0000-000000000101");

  if (updateErr) {
    console.error("Error updating lesson in Supabase:", updateErr);
    process.exit(1);
  }

  console.log("✅ Diapositivas sin scroll aplicadas con éxito en Supabase!");
  console.log(`Total diapositivas resultantes: ${4 + renumberedRemaining.length}`);
}

main().catch(console.error);
