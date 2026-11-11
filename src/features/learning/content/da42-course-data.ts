import type { CourseDocumentationItem } from "@/features/learning/content/c172-course-data";

export const DA42_COURSE_ID = "da420000-0000-0000-0000-000000000042";
export const DA42_COURSE_SLUG = "diamond-da42-twin-star";
export const DA42_COURSE_TITLE = "Curso Diamond DA42 Twin Star (Continental CD-135 / CD-155)";
export const DA42_COURSE_DESCRIPTION = "Curso oficial de tipo, especificaciones técnicas, limitaciones y procedimientos operacionales para el avión bimotor Diamond DA42 Twin Star equipado con motores Continental CD-135 / CD-155 Turbo Diésel.";
export const DA42_COURSE_IMAGE_URL = "/images/DA42/exterior/Gemini_Generated_Image_4l5w9r4l5w9r4l5w.png";
export const DA42_COURSE_REQUIRES_EXAM = false;

export const DA42_DOCUMENTATION: CourseDocumentationItem[] = [
  {
    category: "Manuales Oficiales AFM",
    title: "DA 42 Airplane Flight Manual (AFM) Oficial (Doc. # 7.01.05-E)",
    url: "/images/DA42/Manuales/POH_DA42.pdf",
    badge: "AFM Completo",
  },
  {
    category: "Aviónica Garmin",
    title: "Garmin G1000 Cockpit Reference Guide (DA42)",
    url: "/images/DA42/Manuales/G1000 Diamond_CockpitReferenceGuide_DA42version0370.17orlater_ (1).pdf",
    badge: "G1000 CRG",
  },
];

// ============================================================================
// 1. GENERALIDADES Y ESPECIFICACIONES TÉCNICAS
// ============================================================================
export const DA42_LESSON_1 = {
  id: "da420000-0000-0000-0000-000000000010",
  course_id: DA42_COURSE_ID,
  title: "1. Generalidades y Especificaciones Técnicas",
  slug: "generalidades-especificaciones-da42",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 1.1: 1.1 Objeto del Curso y Simbología de Seguridad -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <!-- Header de Diapositiva -->
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · CONTINENTAL CD-135 / CD-155</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.1 Objeto del Curso y Simbología de Seguridad</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Especificaciones Generales de la Aeronave</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch pt-1" data-left-pct="54" style="--col-left: 54fr; --col-right: 46fr; grid-template-columns: minmax(0px, 54fr) minmax(0px, 46fr) !important;">
    <!-- Columna Izquierda (lg:col-span-6): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">OBJETO Y SIMBOLOGÍA DE SEGURIDAD</span>
          </div>

          <!-- Objeto del Curso -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">OBJETO DEL CURSO</strong>
            <p class="text-slate-700 dark:text-slate-200 text-xs sm:text-[13px] leading-relaxed">
              Basado en el Manual de Vuelo oficial (AFM Doc. # 7.01.05-E) de la Diamond DA42 y suplementos aprobados. Contiene las especificaciones, limitaciones y procedimientos operacionales para el avión bimotor equipado con motores Continental CD-135 / CD-155 Turbo Diésel operando con JET-A1. Este curso no sustituye al AFM oficial.
            </p>
          </div>

          <!-- Simbología de Seguridad AFM -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">SIMBOLOGÍA OFICIAL DE SEGURIDAD AFM</strong>

            <div class="flex items-start gap-2 text-xs leading-tight">
              <span class="font-bold text-red-600 dark:text-red-400 shrink-0 uppercase tracking-wide min-w-[75px]">WARNING:</span>
              <span class="text-slate-800 dark:text-slate-200">El incumplimiento del procedimiento provoca riesgo inmediato o grave de degradación en la seguridad de vuelo, lesiones severas o la muerte.</span>
            </div>

            <div class="flex items-start gap-2 text-xs leading-tight">
              <span class="font-bold text-amber-600 dark:text-amber-400 shrink-0 uppercase tracking-wide min-w-[75px]">CAUTION:</span>
              <span class="text-slate-800 dark:text-slate-200">El incumplimiento del procedimiento conduce a daños en el motor, sistemas de la aeronave o degradación a largo plazo.</span>
            </div>

            <div class="flex items-start gap-2 text-xs leading-tight">
              <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0 uppercase tracking-wide min-w-[75px]">NOTE:</span>
              <span class="text-slate-800 dark:text-slate-200">Llama la atención sobre detalles técnicos y operativos relevantes no vinculados a una advertencia de riesgo inmediato.</span>
            </div>
          </div>

          <!-- Dimensiones Principales de la Aeronave -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 mb-1.5 uppercase tracking-wide">DIMENSIONES PRINCIPALES DE LA AERONAVE (AFM 1.4)</strong>
            <div class="grid grid-cols-3 gap-x-4 text-xs text-slate-700 dark:text-slate-200">
              <!-- Columna 1 (Izquierda) -->
              <div class="flex flex-col gap-y-1">
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Envergadura:</span> <strong class="text-[#0B2E59] dark:text-sky-300">13,42 m</strong></div>
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Longitud:</span> <strong class="text-[#0B2E59] dark:text-sky-300">8,56 m</strong></div>
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Altura total:</span> <strong class="text-[#0B2E59] dark:text-sky-300">2,49 m</strong></div>
              </div>

              <!-- Columna 2 (Centro) -->
              <div class="flex flex-col gap-y-1">
                <div class="flex items-center"><span class="w-[135px] shrink-0">• Ancho de vía:</span> <strong class="text-[#0B2E59] dark:text-sky-300">2,95 m</strong></div>
                <div class="flex items-center"><span class="w-[135px] shrink-0">• Superficie alar:</span> <strong class="text-[#0B2E59] dark:text-sky-300">16,29 m²</strong></div>
                <div class="flex items-center"><span class="w-[135px] shrink-0">• Aspect ratio:</span> <strong class="text-[#0B2E59] dark:text-sky-300">11,06</strong></div>
              </div>

              <!-- Columna 3 (Derecha) -->
              <div class="flex flex-col gap-y-1">
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Wheelbase:</span> <strong class="text-[#0B2E59] dark:text-sky-300">1,735 m</strong></div>
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Cuerda MAC:</span> <strong class="text-[#0B2E59] dark:text-sky-300">1,271 m</strong></div>
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Diedro alar:</span> <strong class="text-[#0B2E59] dark:text-sky-300">5°</strong></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Aeronave DA42 Twin Star (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start items-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 w-full">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">DIAMOND DA42 TWIN STAR</span>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="/images/DA42/exterior/Gemini_Generated_Image_4l5w9r4l5w9r4l5w.png" alt="Diamond DA42 Twin Star" class="w-full h-full max-h-[360px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>

          <!-- Caution AFM Documentación -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200 shrink-0">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (AFM 1.2):</strong> La DA42 es un bimotor ligero con alta fiabilidad certificada. No obstante, un fallo de motor no es imposible. El cumplimiento de las limitaciones operacionales y el transporte del AFM oficial (bolsa lateral delantera izquierda) y de la G1000 CRG (bolsa trasera delantera izquierda) son obligatorios.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- pagebreak -->



<!-- DIAPOSITIVA 1.2: 1.2 Especificaciones de los Motores Continental CD-135 / CD-155 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · CONTINENTAL CD-135 / CD-155</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.2 Especificaciones de los Motores Continental CD-135 / CD-155</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Planta Motriz Bimotor Turbo Diésel en Góndolas Alares</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESPECIFICACIONES DE PLANTA DE POTENCIA (ENGINE)</span>
        </div>
        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Datos técnicos del motor -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MOTORES CONTINENTAL CD-135 Y CD-155</strong>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              Dos (2) motores instalados en góndolas alares independientes. 4 cilindros en línea, cuatro tiempos, refrigeración líquida con cárter húmedo, doble árbol de levas en cabeza (DOHC), inyección directa Common-Rail y turbocompresor con intercooler.
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              <strong>Potencia máxima continua:</strong> <strong>99 kW (135 CV DIN / 133 BHP)</strong> en CD-135 | <strong>114 kW (155 CV DIN / 152 BHP)</strong> en CD-155 a <strong>2300 RPM</strong> (100% Load al nivel del mar).
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              Controlados íntegramente por sistema electrónico digital FADEC independiente (ECU A y B). Hélice accionada por caja reductora integrada (Gearbox, relación i = 1.69) con amortiguador mecánico de vibraciones y embrague de sobrecarga.
            </p>
          </div>

          <!-- Sistemas convencionales eliminados -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">SISTEMAS CONVENCIONALES ELIMINADOS</strong>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
              La cabina bimotor de la DA42 prescinde de los mandos analógicos de la aviación convencional:
            </p>
            <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-0.5 pt-0.5">
              <li class="flex items-start gap-1.5">• <span><strong>Sin mandos de mezcla:</strong> Regulación estequiométrica automática electrónica por FADEC.</span></li>
              <li class="flex items-start gap-1.5">• <span><strong>Sin mandos de paso de hélice:</strong> Gobernador accionado por FADEC según demanda de Load (%) de las Power Levers.</span></li>
              <li class="flex items-start gap-1.5">• <span><strong>Sin magnetos ni bujías de chispa:</strong> Ciclo diésel por compresión con bujías de precalentamiento (Glow Plugs).</span></li>
              <li class="flex items-start gap-1.5">• <span><strong>Sin calefacción de carburador:</strong> Dispone de mandos independientes de aire alternativo (Alternate Air).</span></li>
            </ul>
          </div>

          <!-- Warning eléctrico AFM -->
          <div class="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (AFM):</strong> Ambos motores requieren energía eléctrica continua para los inyectores Common Rail y la ECU (FADEC). Si fallan el alternador de un motor y la alimentación de la batería principal del avión, el motor continúa operando con su batería de reserva FADEC (ECU Backup Battery, mín. 30 minutos). Prestar máxima atención inmediata a las alertas L/R ALTN FAIL y LOW VOLTS.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Planta Motriz Continental CD-135 / CD-155 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">PLANTA DE POTENCIA CONTINENTAL CD-135 / CD-155</span>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/Continental-Engine-Jet-A-CD-155-View-latest.png" alt="Motor Continental Turbo Diésel" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>

          <!-- Caution AFM Manejo de Potencia -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200 shrink-0">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (AFM 2.4):</strong> Las Power Levers dobles deben accionarse de forma suave y progresiva para evitar sobrevelocidades transitorias de hélice (overspeeding) y desequilibrios de empuje asimétrico, no superando bajo ningún concepto las 2500 RPM (máx. 20 segundos).</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- pagebreak -->



<!-- DIAPOSITIVA 1.3: 1.3 Hélice MT-Propeller Tripala de Paso Constante y Feathering -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <!-- Header de Diapositiva -->
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · CONTINENTAL CD-135 / CD-155</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.3 Hélices MT-Propeller Tripala de Paso Constante</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Gobernador Hidráulico, FADEC y Sistema de Abanderado</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="56" style="--col-left: 56fr; --col-right: 44fr; grid-template-columns: minmax(0px, 56fr) minmax(0px, 44fr) !important;">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESPECIFICACIONES DE HÉLICES (PROPELLERS)</span>
        </div>
        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Datos MT-Propeller -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CARACTERÍSTICAS DE LA HÉLICE (MT-PROPELLER)</strong>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-0.5">
              <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Fabricante</span>
                <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">mt-Propeller Entwicklung GmbH</p>
              </div>
              <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Modelo Homologado</span>
                <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">MTV-6-A-C-F/CF 187-129</p>
              </div>
              <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Número de Palas</span>
                <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">3 palas (madera-composite)</p>
              </div>
              <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Diámetro Oficial</span>
                <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">1,87 m (187 cm / 6 ft 2 in)</p>
              </div>
            </div>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed pt-1">
              Palas de madera laminada recubiertas de composite con perfil de acero inoxidable en el borde de ataque y lámina de poliuretano en el buje.
            </p>
          </div>

          <!-- Principio de Funcionamiento y Abanderado -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FUNCIONAMIENTO CONSTANT SPEED Y ABANDERADO (FEATHERING)</strong>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              La hélice es de velocidad constante gobernada por la ECU con presión de aceite. No existe palanca de paso en cabina: la ECU mantiene el régimen óptimo (2.300 RPM en despegue y crucero continuo).
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              • <strong>Ángulos de paso (@ 0.75 R):</strong> Low pitch: <strong>12° ± 0.2°</strong> &nbsp;|&nbsp; Start lock: <strong>15° ± 1°</strong> &nbsp;|&nbsp; Feathered: <strong>81° ± 1°</strong>.
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              • <strong>Feathering:</strong> Al apagar el motor en vuelo, la pérdida de presión de aceite permite que contrapesos centrífugos y muelles lleven las palas a bandera (81°), eliminando la resistencia de molinete.
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              • <strong>Start Locks:</strong> Por debajo de ~1300 RPM en tierra, pestillos centrífugos bloquean las palas en 15° (Start Lock), impidiendo el abanderado en plataforma para facilitar el arranque posterior.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Hélice MT-Propeller Tripala (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 w-full flex flex-col justify-start items-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">HÉLICE MT-PROPELLER TRIPALA BANDERABLE</span>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/1.3-propeller.jpg?v=1" alt="Hélice MT-Propeller Tripala MTV-6" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>

          <!-- Caution AFM Manejo de Potencia y Sobrevelocidad -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200 shrink-0">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (AFM 3.9.3):</strong> Las Power Levers deben accionarse de forma suave y lenta para evitar overspeeding y variaciones bruscas de RPM. Las palas de madera ligera producen cambios de RPM más rápidos que las palas metálicas. Límite transitorio máximo: 2500 RPM (máx. 20 seg, AFM 2.4).</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- pagebreak -->



<!-- DIAPOSITIVA 1.4: 1.4 Combustibles Autorizados y Sistema de Depósitos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <!-- Header de Diapositiva -->
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · CONTINENTAL CD-135 / CD-155</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.4 Combustible JET-A1 y Sistema de Depósitos</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">JET A-1 Exclusivo, Main Tanks, Aux Tanks y Operación Crossfeed</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">COMBUSTIBLES Y DEPÓSITOS (FUELS AND TANKS)</span>
        </div>

        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Combustibles autorizados y densidad -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">COMBUSTIBLE HOMOLOGADO Y EXCLUSIVO</strong>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 mt-1">
              • <strong>Queroseno de aviación:</strong> <strong>JET A-1 (ASTM D 1655)</strong>. Densidad estándar: <strong>0,84 kg/L</strong>.
            </p>
            <p class="text-[11px] text-slate-700 dark:text-slate-200">
              • <strong>Operación exclusiva de flota:</strong> Toda la operación se realiza únicamente con JET A-1 certificado. Prohibido AVGAS 100LL.
            </p>
          </div>

          <!-- Capacidad de depósitos -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CAPACIDADES OFICIALES AFM (MAIN Y AUXILIARY TANKS)</strong>
            <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 pt-0.5">
              <p>• <strong>Main Tanks (depósitos principales alares LH y RH):</strong> 2 x 26,0 US gal (52,0 gal / 196,8 L) | <strong>2 x 25,0 US gal (50,0 gal / 189,2 L) utilizables</strong>.</p>
              <p>• <strong>Auxiliary Tanks (depósitos auxiliares en góndolas, OÄM 42-056):</strong> 2 x 13,7 US gal (27,4 gal / 104,0 L) | <strong>2 x 13,2 US gal (26,4 gal / 100,0 L) utilizables</strong>.</p>
              <p>• <strong>Capacidad Total de la Flota:</strong> <strong>79,4 US gal (300,8 L) totales</strong> &nbsp;|&nbsp; <strong>76,4 US gal (289,2 L) utilizables</strong>.</p>
              <p>• <strong>Desbalance máximo admisible entre LH y RH Main Tank:</strong> <strong>5,0 US gal (aprox. 19 L)</strong>.</p>
            </div>
          </div>

          <!-- Lógica de alimentación y Crossfeed -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">LÓGICA DE ALIMENTACIÓN Y CROSSFEED</strong>
            <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 pt-0.5">
              <p>• <strong>Alimentación normal:</strong> Cada motor toma JET-A1 de su depósito principal (Fuel Selector en posición <code>ON</code>).</p>
              <p>• <strong>Operación CROSSFEED:</strong> Al seleccionar <code>CROSSFEED</code>, el motor correspondiente se alimenta del Main Tank opuesto para corregir desbalances laterales y ampliar la autonomía con motor inoperativo (OEI).</p>
              <p>• <strong>Retorno térmico:</strong> El sobrante caliente de la Common Rail regresa a los Main Tanks, precalentando el combustible y previniendo la congelación en altitud.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Boca de Llenado y Rótulo Oficial (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 w-full flex flex-col justify-start items-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">BOCA DE LLENADO Y RÓTULO OFICIAL</span>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/jet-fuel-only.jpg" alt="Rótulo JET FUEL ONLY" class="w-full h-full max-h-[350px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>

          <!-- Caution AFM Crossfeed y Combustibles -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200 shrink-0">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (AFM 2.14):</strong> Prohibido el despegue con cualquier selector de combustible en posición CROSSFEED o durante el trasvase de tanques auxiliares. No situar nunca ambos selectores de combustible en CROSSFEED simultáneamente. AVGAS 100LL está terminantemente prohibido.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- pagebreak -->



<!-- DIAPOSITIVA 1.5: 1.5 Fluidos de Servicio: Aceite, Reductora y Refrigerante -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <!-- Header de Diapositiva -->
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · CONTINENTAL CD-135 / CD-155</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.5 Fluidos de Servicio: Aceite, Reductora y Refrigerante</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Fluidos de Motor, Caja Reductora y Sistema de Refrigeración</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="56" style="--col-left: 56fr; --col-right: 44fr; grid-template-columns: minmax(0px, 56fr) minmax(0px, 44fr) !important;">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">LUBRICACIÓN Y REFRIGERACIÓN (LIQUIDS SPECIFICATION)</span>
        </div>

        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Fluidos específicos (3 columnas) -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-0.5">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[10px] uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">Aceite de Motor</strong>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• AeroShell Oil Diesel Ultra</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• AeroShell Oil Diesel 10W-40</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell Helix Ultra 5W-30 / 5W-40</p>
              <p class="text-[9px] text-slate-500 pt-0.5 font-medium">Cárter: Mín. 4,5 L / Máx. 6,0 L</p>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[10px] uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">Aceite Reductora</strong>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell EP 75W90 API GL-4</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell Spirax S4 G 75W-90</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Centurion Gearbox Oil N1</p>
              <p class="text-[9px] text-slate-500 pt-0.5 font-medium">Mirilla visual en góndola</p>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[10px] uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">Refrigerante (Coolant)</strong>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">50:50 Agua / Anticongelante</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• BASF Glysantin Protect Plus (G48)</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• BASF Glysantin Alu Protect (G30)</p>
              <p class="text-[9px] text-slate-500 pt-0.5 font-medium">Congelación: -36 °C (-32.8 °F)</p>
            </div>
          </div>

          <!-- Pautas de inspección y servicio del AFM -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PAUTAS DE INSPECCIÓN PREVUELO Y SERVICIO</strong>
            <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 pt-0.5">
              <p>• <strong>Inspección de niveles:</strong> Nivel de aceite motor comprobado con su varilla (esperar entre 5 y 15 min tras parada para retorno al cárter). Nivel de reductora visible sobre la mitad de la mirilla. Refrigerante supervisado en cabina mediante alerta <code>WATER LEVEL</code> en el Garmin G1000.</p>
              <p>• <strong>Líquido de frenos:</strong> Fluido hidráulico mineral <code>AeroShell Fluid 41</code> (MIL-PRF-5606).</p>
              <p>• <strong>Sistema De-Ice TKS:</strong> Fluido <code>AL-5 (DTD 406B)</code>. En nuestra flota se encuentra <strong>inoperativo / sin carga de fluido</strong>; no estamos despachados para vuelo en condiciones de engelamiento conocido (Known Icing).</p>
            </div>
          </div>

          <!-- Warning Niveles de Fluido AFM 2.4 -->
          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200 shrink-0">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (AFM 2.4):</strong> Los motores no deben arrancarse bajo ninguna circunstancia si el nivel de aceite motor o de reductora es inferior al mínimo admisible, o si la alerta WATER LEVEL permanece activa en el G1000. Notificar a mantenimiento para corregir la causa de la fuga antes de cualquier vuelo.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Supervisión en Prevuelo (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 w-full flex-1 flex flex-col justify-start items-start min-h-0">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 w-full">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">SUPERVISIÓN DE FLUIDOS EN PREVUELO</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-center items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/1.5-fluidos.jpg?v=1" alt="Supervisión de Fluidos de Servicio" class="w-full h-full max-h-[460px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- pagebreak -->



<!-- DIAPOSITIVA 1.6: 1.6 Mandos e Instrumentación de Motor en Cabina -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <!-- Header de Diapositiva -->
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · CONTINENTAL CD-135 / CD-155</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.6 Mandos e Instrumentación de Motor en Cabina</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Pedestal Bimotor y Sistema de Instrumentación Integrada Garmin G1000 (EIS)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr; grid-template-columns: minmax(0px, 50fr) minmax(0px, 50fr) !important;">
    <!-- Columna Izquierda (lg:col-span-6): Mandos y Displays FADEC (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">INSTRUMENTACIÓN Y MANDOS EN CABINA (INSTRUMENT PANEL)</span>
          </div>

          <div class="space-y-1.5 py-0.5 text-xs">
            <!-- Mandos e interruptores específicos -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MANDOS BIMOTOR E INTERRUPTORES ESPECÍFICOS</strong>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-700 dark:text-slate-300">
                <p>• <strong>Power Levers (LH & RH):</strong> Monomandos duales en % LOAD (0 a 100%).</p>
                <p>• <strong>Engine Master (LH & RH):</strong> Alimentación ECU y solenoides de corte.</p>
                <p>• <strong>Electric Master:</strong> Llave rotativa de 3 posiciones: OFF, ON y START.</p>
                <p>• <strong>ECU Test Buttons (LH & RH):</strong> Pulsadores de autotest prevuelo en ralentí.</p>
                <p>• <strong>ECU Swap Switches (LH & RH):</strong> Conmutadores de emergencia (AUTOMATIC / ECU B).</p>
                <p>• <strong>Fuel Selectors (LH & RH):</strong> Mandos mecánicos (ON, CROSSFEED, OFF).</p>
                <p>• <strong>Auxiliary Fuel Pumps:</strong> Interruptores de bombas auxiliares de combustible.</p>
                <p>• <strong>Alternate Air (LH & RH):</strong> Mandos manuales de aire alternativo.</p>
              </div>
            </div>

            <!-- Instrumentación y avisadores G1000 -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">GARMIN G1000 EIS Y SISTEMA DE ALERTAS (CAS)</strong>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>Barra EIS en MFD (o PFD):</strong> Monitorización dual LH y RH de % LOAD, tacómetro (RPM de hélices), presión y temp. de aceite, refrigerante, reductora, temp. de combustible y flujo instantáneo (FF).
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>Páginas SYSTEM y FUEL:</strong> SYSTEM añade voltios y amperios duales LH/RH; FUEL incorpora totalizador con Galones Consumidos, Remanentes, Autonomía y Alcance en Millas Náuticas (NM).
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>Sistema de Alertas CAS:</strong> Mensajes clasificados en Warnings (rojo), Cautions (ámbar: L/R ALTN FAIL, LOW VOLTS, ECU A/B FAIL, LOW FUEL, WATER LEVEL) y avisos de estado. Confirmables con la softkey <code>ALERTS</code>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Instrumentación de Motor G1000 EIS (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 w-full flex-1 flex flex-col justify-start items-start min-h-0">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 w-full">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">GARMIN G1000 · PFD, MFD Y BARRA EIS BIMOTOR</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-center items-center p-1.5 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img
              src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/Gemini_Generated_Image_qdo2epqdo2epqdo2.jpg"
              alt="Cabina, Pedestal Central Bimotor y Sistema Garmin G1000 Diamond DA42 Twin Star"
              class="w-full h-full max-h-[380px] object-contain rounded-lg"
              style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;"
            />
          </div>

          <!-- Note Garmin CRG Totalizer -->
          <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-start gap-2 text-[11px] leading-tight text-[#0B2E59] dark:text-sky-200 shrink-0">
            <span class="text-base shrink-0">ℹ️</span>
            <span><strong>NOTE (GARMIN CRG):</strong> El totalizador de la página FUEL integra el flujo de los caudalímetros desde el último reset manual; no lee directamente las boyas físicas de los depósitos. La comprobación física de combustible previa al vuelo es obligatoria.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
};



// ============================================================================
// 2. LIMITACIONES OPERACIONALES AFM
// ============================================================================
export const DA42_LESSON_2 = {
  id: "da420000-0000-0000-0000-000000000020",
  course_id: DA42_COURSE_ID,
  title: "2. Limitaciones Operacionales AFM",
  slug: "limitaciones-operacionales-afm-da42",
  sequence_order: 2,
  lesson_order: 2,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 2.1: 2.1 Limitaciones de Velocidad de la Célula (Airspeed Limitations) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.1 Limitaciones de Velocidad de la Célula (Airspeed Limitations)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Velocidades Estructurales, de Maniobra y Operacionales</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Tablas Oficiales (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AIRSPEED LIMITATIONS (VELOCIDADES LÍMITE)</span>
          </div>

          <!-- Tabla de Limitaciones de Velocidad -->
          <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
            <table class="w-full text-left text-[11px] leading-tight">
              <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="p-2 px-2.5 w-[32%]">VELOCIDAD</th>
                  <th class="p-2 px-2 text-center w-[18%] font-extrabold text-[#1a80ff] dark:text-sky-400">KIAS</th>
                  <th class="p-2 px-2.5 w-[50%]">SIGNIFICADO OPERACIONAL</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                <tr>
                  <td class="p-1.5 px-2.5 font-bold font-mono">v<sub>NE</sub> (Never Exceed)</td>
                  <td class="p-1.5 px-2 text-center font-mono font-extrabold text-red-600 dark:text-red-400">194</td>
                  <td class="p-1.5 px-2.5">No exceder esta velocidad en ninguna operación.</td>
                </tr>
                <tr>
                  <td class="p-1.5 px-2.5 font-bold font-mono">v<sub>NO</sub> (Max. Structural)</td>
                  <td class="p-1.5 px-2 text-center font-mono font-extrabold text-amber-600 dark:text-amber-400">155</td>
                  <td class="p-1.5 px-2.5">No exceder salvo en aire en calma, y con precaución.</td>
                </tr>
                <tr>
                  <td class="p-1.5 px-2.5 font-bold font-mono">v<sub>A</sub> (&gt; 1542 kg)</td>
                  <td class="p-1.5 px-2 text-center font-mono font-bold text-[#0B2E59] dark:text-sky-300">126</td>
                  <td class="p-1.5 px-2.5">Velocidad de maniobra por encima de 1542 kg (3400 lb).</td>
                </tr>
                <tr>
                  <td class="p-1.5 px-2.5 font-bold font-mono">v<sub>A</sub> (≤ 1542 kg)</td>
                  <td class="p-1.5 px-2 text-center font-mono font-bold text-[#0B2E59] dark:text-sky-300">120</td>
                  <td class="p-1.5 px-2.5">Velocidad de maniobra hasta 1542 kg (3400 lb).</td>
                </tr>
                <tr>
                  <td class="p-1.5 px-2.5 font-bold font-mono">v<sub>FE</sub> (Flaps APP)</td>
                  <td class="p-1.5 px-2 text-center font-mono font-bold text-sky-600 dark:text-sky-400">137</td>
                  <td class="p-1.5 px-2.5">Velocidad máxima con flaps en posición Approach.</td>
                </tr>
                <tr>
                  <td class="p-1.5 px-2.5 font-bold font-mono">v<sub>FE</sub> (Flaps LDG)</td>
                  <td class="p-1.5 px-2 text-center font-mono font-bold text-sky-600 dark:text-sky-400">111</td>
                  <td class="p-1.5 px-2.5">Velocidad máxima con flaps totalmente extendidos.</td>
                </tr>
                <tr>
                  <td class="p-1.5 px-2.5 font-bold font-mono">v<sub>LOE</sub> / v<sub>LE</sub></td>
                  <td class="p-1.5 px-2 text-center font-mono font-bold text-slate-700 dark:text-slate-300">194</td>
                  <td class="p-1.5 px-2.5">Máxima extensión y vuelo con tren extendido.</td>
                </tr>
                <tr>
                  <td class="p-1.5 px-2.5 font-bold font-mono">v<sub>LOR</sub> (Retracción tren)</td>
                  <td class="p-1.5 px-2 text-center font-mono font-bold text-slate-700 dark:text-slate-300">156</td>
                  <td class="p-1.5 px-2.5">Velocidad máxima para replegar el tren de aterrizaje.</td>
                </tr>
                <tr class="bg-red-50/50 dark:bg-red-950/20">
                  <td class="p-1.5 px-2.5 font-bold font-mono text-red-700 dark:text-red-300">v<sub>MCA</sub> (Airborne OEI)</td>
                  <td class="p-1.5 px-2 text-center font-mono font-extrabold text-red-600 dark:text-red-400">68</td>
                  <td class="p-1.5 px-2.5">Mínima de control en vuelo con un motor inoperativo.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Warning vMCA -->
          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200 shrink-0">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (AFM):</strong> Volar por debajo de v<sub>MCA</sub> (68 KIAS) con un motor inoperativo y potencia asimétrica provoca pérdida inmediata de control direccional (Roll/Yaw invertido). Si la velocidad cae hacia 68 KIAS, reducir potencia del motor operativo y bajar el morro de inmediato.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Explicación Operativa (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start items-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 w-full">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ASPECTOS CRÍTICOS DE VELOCIDAD BIMOTOR</span>
          </div>

          <!-- Tarjetas explicativas de vMCA y Tren -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full text-xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">OPERACIÓN CON UN MOTOR INOPERATIVO (OEI)</strong>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-relaxed">
              • <strong>v<sub>MCA</sub> = 68 KIAS:</strong> Es la velocidad mínima a la que el avión es gobernable direccionalmente con el motor crítico inoperativo (hélice abanderada), el motor operativo a máxima potencia de despegue (100% Load), flaps en posición UP, tren arriba y un banqueo de hasta 5° hacia el motor vivo.
            </p>
          </div>

          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full text-xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">TREN DE ATERRIZAJE Y EXTENSIÓN DE EMERGENCIA</strong>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-relaxed">
              • <strong>Retracción v<sub>LOR</sub> (156 KIAS):</strong> La resistencia aerodinámica sobre las puertas mecánicas del tren impone no iniciar la retracción por encima de 156 KIAS.
            </p>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-relaxed">
              • <strong>Extensión de emergencia:</strong> La palanca roja <code>EMERGENCY GEAR EXTENSION</code> debe accionarse a una velocidad no superior a <strong>156 KIAS</strong> para garantizar la apertura por gravedad y bloqueo seguro.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.2: 2.2 Marcas del Indicador de Velocidad (Airspeed Indicator Markings) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.2 Marcas del Indicador de Velocidad (Airspeed Indicator Markings)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Arcos y Líneas Radiales en la Cinta Anemométrica G1000 PFD</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Tablas de Marcas Oficiales (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">MARCAS DEL ANEMÓMETRO Y SIGNIFICADO OPERACIONAL</span>
          </div>

          <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
            <table class="w-full text-left text-[11px] leading-tight">
              <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="p-2 px-2.5 w-[30%]">MARCA / COLOR</th>
                  <th class="p-2 px-2 text-center w-[20%] font-extrabold text-[#1a80ff] dark:text-sky-400">KIAS</th>
                  <th class="p-2 px-2.5 w-[50%]">SIGNIFICADO OPERACIONAL</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                <tr>
                  <td class="p-2 px-2.5 font-bold"><span class="inline-block w-2.5 h-2.5 rounded-full bg-slate-300 border border-slate-500 mr-1"></span>Arco Blanco</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">56 - 111</td>
                  <td class="p-2 px-2.5">Rango de operación con flaps totalmente extendidos (Flaps LDG). Límite inferior v<sub>SO</sub> (56), superior v<sub>FE</sub> (111).</td>
                </tr>
                <tr>
                  <td class="p-2 px-2.5 font-bold"><span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 mr-1"></span>Arco Verde</td>
                  <td class="p-2 px-2 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">62 - 155</td>
                  <td class="p-2 px-2.5">Rango normal de operación. Límite inferior v<sub>S</sub> en limpio a MTOM (62), superior v<sub>NO</sub> (155).</td>
                </tr>
                <tr>
                  <td class="p-2 px-2.5 font-bold"><span class="inline-block w-2.5 h-2.5 rounded-full bg-amber-500 mr-1"></span>Arco Amarillo</td>
                  <td class="p-2 px-2 text-center font-mono font-bold text-amber-600 dark:text-amber-400">155 - 194</td>
                  <td class="p-2 px-2.5">Rango de precaución ("Caution Range"). Operar en esta franja solo en aire en calma y sin turbulencia.</td>
                </tr>
                <tr class="bg-blue-50/50 dark:bg-blue-950/20">
                  <td class="p-2 px-2.5 font-bold text-blue-700 dark:text-sky-300"><span class="inline-block w-2.5 h-2.5 rounded-full bg-blue-600 mr-1"></span>Línea Radial Azul</td>
                  <td class="p-2 px-2 text-center font-mono font-extrabold text-blue-600 dark:text-sky-400">82</td>
                  <td class="p-2 px-2.5"><strong>v<sub>YSE</sub>:</strong> Mejor régimen de ascenso con un motor inoperativo (Best rate of climb speed, single engine).</td>
                </tr>
                <tr class="bg-red-50/50 dark:bg-red-950/20">
                  <td class="p-2 px-2.5 font-bold text-red-700 dark:text-red-300"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-600 mr-1"></span>Línea Radial Roja Inf.</td>
                  <td class="p-2 px-2 text-center font-mono font-extrabold text-red-600 dark:text-red-400">68</td>
                  <td class="p-2 px-2.5"><strong>v<sub>MCA</sub>:</strong> Velocidad mínima de control direccional en el aire monomotor.</td>
                </tr>
                <tr>
                  <td class="p-2 px-2.5 font-bold text-red-700 dark:text-red-300"><span class="inline-block w-2.5 h-2.5 rounded-full bg-red-600 mr-1"></span>Línea Radial Roja Sup.</td>
                  <td class="p-2 px-2 text-center font-mono font-extrabold text-red-600 dark:text-red-400">194</td>
                  <td class="p-2 px-2.5"><strong>v<sub>NE</sub>:</strong> Velocidad de nunca exceder en ninguna condición de vuelo.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-start gap-2 text-[11px] leading-tight text-[#0B2E59] dark:text-sky-200 shrink-0">
            <span class="text-base shrink-0">ℹ️</span>
            <span><strong>NOTA:</strong> La línea radial azul (82 KIAS) marca v<sub>YSE</sub>. Con un motor inoperativo, mantener 82 KIAS proporciona el mejor régimen de ascenso (o menor régimen de descenso) del avión.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Gráfico Cinta G1000 PFD (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 w-full flex-1 flex flex-col justify-start items-start min-h-0">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 w-full">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CINTA DE VELOCIDAD PFD (GARMIN G1000)</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-center items-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img
              src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/Gemini_Generated_Image_o30fd0o30fd0o30f.jpg"
              alt="Marcas del Anemómetro Garmin G1000 Diamond DA42"
              class="w-full h-full max-h-[500px] object-contain rounded-lg"
              style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.3: 2.3 Límites de Masa y Peso Estructural (Weight Limits) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.3 Límites de Masa y Peso Estructural (Weight Limits)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Masas Máximas de Certificación y Capacidad de Equipaje</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Masas Máximas Certificadas (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">MASAS MÁXIMAS ESTRUCTURALES CERTIFICADAS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <!-- MTOM -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">MTOM (Take-Off)</strong>
              <p class="text-[14px] font-mono font-extrabold text-[#1a80ff] dark:text-sky-400">1.700 kg / 1.785 kg</p>
              <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">1700 kg estándar (3748 lb) o 1785 kg (3935 lb) si incorpora modificación MÄM 42-088.</p>
            </div>

            <!-- MLM -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">MLM (Landing)</strong>
              <p class="text-[14px] font-mono font-extrabold text-emerald-600 dark:text-emerald-400">1.700 kg (3.748 lb)</p>
              <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Masa máxima de aterrizaje en operación normal para todas las versiones.</p>
            </div>

            <!-- MZFM -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">MZFM (Zero Fuel)</strong>
              <p class="text-[14px] font-mono font-extrabold text-slate-800 dark:text-slate-200">1.650 kg (3.638 lb)</p>
              <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Peso máximo antes de cargar combustible utilizable en los depósitos.</p>
            </div>

            <!-- Masa Mínima -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">Masa Mínima Vuelo</strong>
              <p class="text-[14px] font-mono font-extrabold text-slate-800 dark:text-slate-200">1.250 kg (2.756 lb)</p>
              <p class="text-[10px] text-slate-600 dark:text-slate-400 leading-tight">Masa operativa mínima autorizada para vuelo en crucero y maniobra.</p>
            </div>
          </div>

          <!-- Pautas de Embarque y Sujeción -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 w-full text-xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PAUTAS DE EMBARQUE Y SUJECIÓN</strong>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">
              • <strong>Límite por asiento:</strong> Máximo 110 kg (242 lb) por plaza en asientos delanteros y traseros.
            </p>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">
              • <strong>Redes de retención (Baggage Nets):</strong> Es obligatorio colocar y tensar las redes de equipaje tanto en el morro como detrás de los asientos traseros antes del rodaje.
            </p>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">
              • <strong>Aterrizaje con sobrepeso (MTOM 1785 kg):</strong> Si se despega a masas entre 1700 kg y 1785 kg, la planificación de combustible debe asegurar llegar al aeródromo de destino por debajo de 1700 kg MLM.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Normas Operativas de Peso (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start items-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 w-full">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DISTRIBUCIÓN Y SEGURIDAD DE CARGA</span>
          </div>

          <!-- Desglose de Compartimentos de Carga -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full text-xs shrink-0">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">COMPARTIMENTOS DE EQUIPAJE AUTORIZADOS</strong>
            <div class="space-y-1.5 text-[11px] text-slate-700 dark:text-slate-200">
              <p>• <strong>Morro del avión (Nose Baggage):</strong> Máximo <strong>30 kg (66 lb)</strong> (dividido en compartimentos izquierdo y derecho).</p>
              <p>• <strong>Cabina posterior y extensión:</strong> Máximo total combinado de <strong>45 kg (100 lb)</strong> con red de retención instalada (con un submáximo de <strong>18 kg / 40 lb</strong> en la extensión trasera).</p>
            </div>
          </div>

          <!-- Imagen de Límites de Masa AFM -->
          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-center items-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img
              src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/da42-mass-limits-table.png"
              alt="Tabla de Masas Máximas y Compartimentos de Equipaje Diamond DA42"
              class="w-full h-full max-h-[380px] object-contain rounded-lg"
              style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.4: 2.4 Centro de Gravedad y Envolvente de Carga (Center of Gravity) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.4 Centro de Gravedad y Envolvente de Carga (Center of Gravity)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Plano de Referencia (Datum Plane) y Envolvente Operacional</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Especificaciones del CG (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PLANO DE REFERENCIA Y LÍMITES DE CG</span>
          </div>

          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PLANO DE REFERENCIA (DATUM PLANE)</strong>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-relaxed">
              El Plano de Referencia (DP) es un plano vertical imaginario normal al eje longitudinal de la aeronave, ubicado exactamente a <strong>2,196 m (86,46 in)</strong> por delante del punto más adelantado del encastre alar (Root Rib on Stub Wing). El eje longitudinal se define paralelo al suelo del maletero del morro.
            </p>
          </div>

          <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
            <table class="w-full text-left text-[11px] leading-tight">
              <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="p-2 px-2.5">CONDICIÓN DE MASA</th>
                  <th class="p-2 px-2 text-center">LÍMITE ANTERIOR</th>
                  <th class="p-2 px-2 text-center">LÍMITE POSTERIOR</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                <tr>
                  <td class="p-2 px-2.5">Hasta 1.250 kg</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">2,350 m (92,52 in)</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">2,450 m (96,46 in)</td>
                </tr>
                <tr>
                  <td class="p-2 px-2.5">A 1.468 kg</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">2,350 m (92,52 in)</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">2,480 m (97,64 in)</td>
                </tr>
                <tr>
                  <td class="p-2 px-2.5">A 1.700 kg (MTOM estándar)</td>
                  <td class="p-2 px-2 text-center font-mono font-bold text-amber-600 dark:text-amber-400">2,400 m (94,49 in)</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">2,480 m (97,64 in)</td>
                </tr>
                <tr>
                  <td class="p-2 px-2.5">A 1.785 kg (con MÄM 42-088)</td>
                  <td class="p-2 px-2 text-center font-mono font-bold text-amber-600 dark:text-amber-400">2,400 m (94,49 in)</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">2,480 m (97,64 in)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200 shrink-0">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (AFM):</strong> Operar fuera de los límites de CG anterior o posterior degrada críticamente la estabilidad longitudinal y la autoridad del timón de profundidad para la recuperación de pérdidas y flare en el aterrizaje.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Gráfico Envolvente CG (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 w-full flex-1 flex flex-col justify-start items-start min-h-0">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 w-full">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENVOLVENTE DE CENTRO DE GRAVEDAD</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-center items-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img
              src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/da42-cg-datum-screenshot.png"
              alt="Plano de Referencia y Envolvente de Centro de Gravedad Diamond DA42"
              class="w-full h-full max-h-[500px] object-contain rounded-lg"
              style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.5: 2.5 Maniobras Aprobadas y Factores de Carga (Load Factors) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.5 Maniobras Aprobadas y Factores de Carga (Load Factors)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Límites Estructurales en Categoría Normal (JAR-23) y Gs de Planta Motriz</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Maniobras y Factores de Carga (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">MANIOBRAS APROBADAS Y FACTORES DE CARGA</span>
          </div>

          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CATEGORÍA NORMAL (JAR-23)</strong>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">• <strong>Maniobras aprobadas:</strong> Maniobras normales de vuelo, pérdidas simétricas convencionales, virajes escarpados, Chandelles y Lazy Eights con banqueo no superior a 60°.</p>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">• <strong>Prohibiciones estrictas:</strong> Maniobras acrobáticas, barrenas (spins) intencionadas, banqueos superiores a 60° y pérdidas con potencia asimétrica o monomotor.</p>
          </div>

          <!-- Tabla de Factores de Carga Estructural -->
          <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
            <table class="w-full text-left text-[11px] leading-tight">
              <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="p-2 px-2.5">CONFIGURACIÓN</th>
                  <th class="p-2 px-2 text-center font-bold text-emerald-600 dark:text-emerald-400">POSITIVO</th>
                  <th class="p-2 px-2 text-center font-bold text-amber-600 dark:text-amber-400">NEGATIVO</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                <tr>
                  <td class="p-2 px-2.5">A velocidad de maniobra (v<sub>A</sub>) · Flaps UP</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">+3.8 g</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">-1.52 g</td>
                </tr>
                <tr>
                  <td class="p-2 px-2.5">A velocidad de nunca exceder (v<sub>NE</sub>) · Flaps UP</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">+3.8 g</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">0 g</td>
                </tr>
                <tr>
                  <td class="p-2 px-2.5">Con flaps extendidos (Flaps APP o LDG)</td>
                  <td class="p-2 px-2 text-center font-mono font-bold text-[#1a80ff] dark:text-sky-400">+2.0 g</td>
                  <td class="p-2 px-2 text-center font-mono font-bold">0 g</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200 shrink-0">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (AFM):</strong> Exceder los factores de carga estructurales conduce a deformaciones permanentes de la célula de composite o fallo catastrófico en vuelo.</span>
          </div>

          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200 shrink-0">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (AFM):</strong> El sistema de lubricación por cárter húmedo de los motores Continental CD-135 / CD-155 no dispone de bomba invertida. Maniobras con Gs negativas prolongadas cortan el suministro de aceite a los cojinetes y al gobernador de hélice.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Gráfico de Factores de Carga (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start items-start w-full">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 w-full">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA DE FACTORES DE CARGA EN VUELO</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-center items-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img
              src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/da42-flight-load-factors-screenshot.png"
              alt="Diagrama de Factores de Carga en Vuelo Diamond DA42"
              class="w-full h-full max-h-[500px] object-contain rounded-lg"
              style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.6: 2.6 Limitaciones de Planta de Potencia (Power-Plant Limitations) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.6 Limitaciones de Planta de Potencia (Power-Plant Limitations)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Continental CD-135 / CD-155, Gobernador y Hélices MT-Propeller</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Potencia, Hélices y Arranque (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RÉGIMEN Y POTENCIA MÁXIMA DE LOS MOTORES</span>
          </div>

          <!-- Continental CD-135 / CD-155 -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full text-xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">Continental CD-135 / CD-155</strong>
            <p class="text-[13px] font-mono font-bold text-[#1a80ff] dark:text-sky-400">99 / 114 kW <span class="text-xs font-normal text-slate-600 dark:text-slate-300">(135 / 155 CV DIN)</span></p>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">Máx. potencia al <strong>100% Load a 2300 RPM</strong> (límite continuo y despegue máx. 5 min).</p>
          </div>

          <!-- Hélices y Regulación de Paso -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full text-xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">HÉLICES Y REGULACIÓN DE PASO</strong>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">• <strong>RPM continuas máximas:</strong> <strong>2300 RPM</strong> de hélice (mostradas en el tacómetro del G1000).</p>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">• <strong>Sobrerrégimen máximo (Overspeed):</strong> <strong>2500 RPM</strong> durante un máximo de <strong>20 segundos</strong>.</p>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">• <strong>Hélices MT-Propeller:</strong> Modelo MTV-6-A-C-F/CF 187-129 tripala constante con paso variable y abanderamiento.</p>
          </div>

          <!-- Ciclo Operativo del Motor de Arranque -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full text-xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CICLO OPERATIVO DEL MOTOR DE ARRANQUE</strong>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">• <strong>Tiempo máx. de accionamiento:</strong> 10 segundos continuos con la llave en <code>START</code>.</p>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">• <strong>Enfriamiento entre intentos:</strong> Mínimo 20 segundos de reposo tras cada intento de arranque.</p>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">• <strong>Límite de intentos:</strong> Tras 6 intentos consecutivos, dejar enfriar el arrancador al menos 30 minutos.</p>
          </div>

          <!-- Warning FADEC / ECU TEST -->
          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200 shrink-0 w-full">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (AFM):</strong> No iniciar el vuelo si el autotest en ralentí (pulsador <code>ECU TEST</code>) no se completa de forma satisfactoria o si permanece activa cualquier alerta <code>L/R ECU A FAIL</code> o <code>L/R ECU B FAIL</code>. El despegue con anomalías en FADEC está estrictamente prohibido.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Régimen de Potencia y Monomando FADEC (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start items-start w-full">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 w-full">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RÉGIMEN DE POTENCIA Y MONOMANDO FADEC</span>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-center items-center p-2 lesson-img-wrapper mt-1 flex-1 min-h-0" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/potencia-altitud-fadec.jpg" alt="Régimen de Potencia vs Altitud y Monomando FADEC" class="w-full h-full max-h-[500px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.7: 2.7 Límites Operacionales de Temperatura -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.7 Límites Operacionales de Temperatura</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aceite Motor, Líquido Refrigerante, Reductora y Combustible</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Tabla de Temperaturas y Alertas (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RANGOS Y LÍMITES TÉRMICOS DE FLUIDOS</span>
          </div>

          <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
            <table class="w-full text-left text-[11px] leading-tight">
              <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="p-1.5 px-2 w-[30%]">FLUIDO</th>
                  <th class="p-1.5 px-2 text-center w-[20%]">MÍN. ARRANQUE</th>
                  <th class="p-1.5 px-2 text-center w-[25%] font-extrabold text-emerald-600 dark:text-emerald-400">NORMAL</th>
                  <th class="p-1.5 px-2 text-center w-[25%] font-extrabold text-red-600 dark:text-red-400">MÁXIMO</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                <tr>
                  <td class="p-1.5 px-2 font-bold">Aceite Motor (Oil Temp)</td>
                  <td class="p-1.5 px-2 text-center font-mono">-32 °C</td>
                  <td class="p-1.5 px-2 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">50 a 125 °C</td>
                  <td class="p-1.5 px-2 text-center font-mono font-extrabold text-red-600 dark:text-red-400">140 °C</td>
                </tr>
                <tr>
                  <td class="p-1.5 px-2 font-bold">Refrigerante (Coolant Temp)</td>
                  <td class="p-1.5 px-2 text-center font-mono">-32 °C</td>
                  <td class="p-1.5 px-2 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">60 a 101 °C</td>
                  <td class="p-1.5 px-2 text-center font-mono font-extrabold text-red-600 dark:text-red-400">105 °C</td>
                </tr>
                <tr>
                  <td class="p-1.5 px-2 font-bold">Reductora (Gearbox Temp)</td>
                  <td class="p-1.5 px-2 text-center font-mono">--</td>
                  <td class="p-1.5 px-2 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">Hasta 115 °C</td>
                  <td class="p-1.5 px-2 text-center font-mono font-extrabold text-red-600 dark:text-red-400">120 °C</td>
                </tr>
                <tr>
                  <td class="p-1.5 px-2 font-bold">Combustible en Depósito</td>
                  <td class="p-1.5 px-2 text-center font-mono text-blue-600 dark:text-sky-400">-30 °C</td>
                  <td class="p-1.5 px-2 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">10 a 65 °C</td>
                  <td class="p-1.5 px-2 text-center font-mono font-extrabold text-red-600 dark:text-red-400">+75 °C</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200 shrink-0">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (AFM):</strong> No aplicar potencia de despegue (100% Load) hasta que la temperatura de aceite alcance al menos <strong>50 °C</strong> y el refrigerante alcance <strong>60 °C</strong> (ambos en arco verde). El motor tolera hasta 130 °C en crucero continuo normal.</span>
          </div>

          <!-- Alerta Cool LVL (movida a la izquierda) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 w-full text-xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ALERTA COOL LVL (WATER LEVEL)</strong>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">
              Indica bajo nivel en el depósito de compensación del sistema de refrigeración de motor. Si la alerta permanece activa en tierra, no se permite el despegue. En vuelo, vigilar la subida de temperatura de refrigerante y aceite.
            </p>
          </div>

          <!-- Temperatura de Caja Reductora (movida a la izquierda) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 w-full text-xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">TEMPERATURA DE CAJA REDUCTORA (L/R GBOX TEMP)</strong>
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight">
              Aviso en ámbar si la temperatura supera 115 °C y rojo a 120 °C. La reductora cuenta con intercambiador de calor independiente. Una temperatura elevada exige reducir la potencia del motor afectado de inmediato.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Tabla Oficial AFM 2.4 (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start items-start w-full">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 w-full">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">LÍMITES OPERACIONALES DE MOTOR Y FLUIDOS (AFM 2.4)</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-center items-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img
              src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/da42-engine-operating-limits-table.png"
              alt="Límites Operacionales de Motor y Fluidos AFM Diamond DA42"
              class="w-full h-full max-h-[500px] object-contain rounded-lg"
              style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.8: 2.8 Límites de Presión y Niveles de Aceite -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.8 Límites de Presión y Niveles de Aceite</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Presión de Lubricación, Consumo Máximo y Verificación de Cárter</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Presiones de Aceite (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">OIL PRESSURE & CONSUMPTION LIMITS (AFM 2.4)</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <!-- RANGOS DE PRESIÓN -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">RANGOS DE PRESIÓN</strong>
              <div class="space-y-1 pt-0.5 text-[11px] leading-tight">
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Mínimo absoluto:</span>
                  <span class="font-mono font-bold text-red-600 dark:text-red-400">&lt; 1.0 bar</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Margen bajo (amarillo):</span>
                  <span class="font-mono font-bold text-amber-600 dark:text-amber-400">1.0 a 2.3 bar</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Régimen normal (verde):</span>
                  <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">2.3 a 5.2 bar</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Margen alto (amarillo):</span>
                  <span class="font-mono font-bold text-amber-600 dark:text-amber-400">5.2 a 6.5 bar</span>
                </div>
                <div class="flex justify-between py-0.5">
                  <span class="text-slate-700 dark:text-slate-300">Máximo absoluto:</span>
                  <span class="font-mono font-bold text-red-600 dark:text-red-400">&gt; 6.5 bar</span>
                </div>
              </div>
            </div>

            <!-- CAPACIDAD Y CONSUMO -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CAPACIDAD Y CONSUMO DE ACEITE</strong>
              <div class="space-y-1 pt-0.5 text-[11px] leading-tight">
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Cantidad mínima en cárter:</span>
                  <span class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">4,5 L (4.8 US qts)</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Cantidad máxima en cárter:</span>
                  <span class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">6,0 L (6.3 US qts)</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Consumo máximo admisible:</span>
                  <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">0,1 L/h (0.1 US qt/h)</span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                  Sistema de lubricación por cárter húmedo accionado por bomba mecánica en cada motor CD-135 / CD-155.
                </p>
              </div>
            </div>
          </div>

          <!-- Caution Presión y Altitud (AFM) -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200 shrink-0 w-full">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (AFM):</strong> Los valores indicados de presión de aceite se corrigen por altitud de presión. Presiones inferiores a 2.3 bar en vuelo de crucero requieren comprobación inmediata de la temperatura de aceite y reducción de potencia.</span>
          </div>

          <!-- Warning AFM Presión de Aceite (debajo del Caution) -->
          <div class="p-2.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200 shrink-0 w-full">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (AFM):</strong> Si la presión de aceite desciende por debajo de 1.0 bar en vuelo (alerta roja <code>L/R OIL PRES</code>), reducir potencia de inmediato en el motor afectado y vigilar la temperatura de aceite. Si la temperatura aumenta o la presión no recupera, proceder a parada y abanderamiento según la lista de emergencia monomotor.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Circuito de Lubricación y Manómetro (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CIRCUITO DE LUBRICACIÓN Y CONTROL</span>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/presion-aceite-lubricacion.jpg" alt="Circuito de Lubricación y Manómetro" class="w-full h-full max-h-[480px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.9: 2.9 Límites Térmicos de Combustible en Depósito -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.9 Límites Térmicos de Combustible en Depósito</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Temperaturas Mínimas y Máximas para JET A-1 y Diésel EN 590</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): AFM Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUEL TEMPERATURE LIMITS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <!-- JET FUEL -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">QUEROSENO JET A-1 / JET A / JP-8</strong>
              <div class="space-y-1 pt-0.5 text-[11px] leading-tight text-slate-800 dark:text-slate-200">
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Temp. mínima operativa:</span>
                  <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">-30 °C (-22 °F)</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Mín. despegue (CD-135):</span>
                  <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">-22 °C (-8 °F)</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Mín. despegue (CD-155):</span>
                  <span class="font-mono font-bold text-amber-600 dark:text-amber-400">+5 °C (+41 °F)</span>
                </div>
                <div class="flex justify-between py-0.5">
                  <span class="text-slate-700 dark:text-slate-300">Temp. máxima de combustible:</span>
                  <span class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">+75 °C (+167 °F)</span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                  Excelente fluidez en frío. No requiere aditivos anticongelantes bajo condiciones operativas estándar.
                </p>
              </div>
            </div>

            <!-- AUTOMOCIÓN DIÉSEL -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">AUTOMOCIÓN DIÉSEL (EN 590)</strong>
              <div class="space-y-1 pt-0.5 text-[11px] leading-tight text-slate-800 dark:text-slate-200">
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Mínima para arranque:</span>
                  <span class="font-mono font-bold text-amber-600 dark:text-amber-400">-5 °C (+23 °F)</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Mínima para despegue (Main):</span>
                  <span class="font-mono font-bold text-amber-600 dark:text-amber-400">+5 °C (+41 °F)</span>
                </div>
                <div class="flex justify-between py-0.5">
                  <span class="text-slate-700 dark:text-slate-300">Temperatura máxima:</span>
                  <span class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">+65 °C / +75 °C</span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                  Riesgo de precipitación de parafinas sólidas con combustible frío que colmatarían el filtro de combustible.
                </p>
              </div>
            </div>
          </div>

          <!-- NOTA FUEL COOLER -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>ℹ️</span>
              <span>INTERCAMBIADORES TÉRMICOS DE COMBUSTIBLE (FUEL COOLERS):</span>
            </strong>
            <p>El combustible sobrante de alta presión de las bombas Common-Rail regresa a los tanques principales a través de los Fuel Coolers situados en las góndolas. Este circuito continuo templa el combustible en los depósitos alares durante el vuelo para mantenerlo por encima del punto de parafina.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Temperatura de Combustible y Retorno (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TEMPERATURA DE COMBUSTIBLE Y RETORNO</span>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/temperatura-combustible-retorno.jpg" alt="Temperatura de Combustible y Circuito de Retorno DA42 Twin Star" class="w-full h-full max-h-[480px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.10: 2.10 Marcas de Instrumentación de Motor G1000 EIS -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.10 Marcas de Instrumentación de Motor G1000 EIS</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tabla Oficial AFM: Rangos Verde, Ámbar y Rojo en la Barra de Instrumentos del Motor</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): AFM Sección 2 (Tablas estructuradas, Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800 mb-2">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">GARMIN G1000 EIS INSTRUMENT MARKINGS</span>
        </div>
        <div class="space-y-3 py-1">
          <!-- TABLA 1: TACÓMETRO, PRESIÓN Y CARGA (GARMIN G1000 EIS) -->
          <div class="p-2.5 px-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full shrink-0">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">TACÓMETRO, PRESIÓN Y CARGA (GARMIN G1000 EIS)</strong>
              <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">AFM Tabla 2.5</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-[11px] leading-tight">
                <thead>
                  <tr class="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider">
                    <th class="py-1.5 px-2 font-bold text-[#0B2E59] dark:text-sky-300 w-[24%] whitespace-nowrap">Parámetro</th>
                    <th class="py-1.5 px-2 font-bold text-emerald-700 dark:text-emerald-400 w-[22%] whitespace-nowrap">Verde</th>
                    <th class="py-1.5 px-2 font-bold text-amber-700 dark:text-amber-400 w-[30%] whitespace-nowrap">Ámbar</th>
                    <th class="py-1.5 px-2 font-bold text-red-700 dark:text-red-400 w-[24%] whitespace-nowrap">Roja</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Tachometer [RPM]</td>
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">0 - 2.300 RPM</td>
                    <td class="py-1.5 px-2 text-slate-400 dark:text-slate-500 font-mono">—</td>
                    <td class="py-1.5 px-2 text-red-700 dark:text-red-400 font-medium font-mono whitespace-nowrap">&gt; 2.300 RPM</td>
                  </tr>
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Oil Pressure [bar]</td>
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">2.3 - 5.2 bar</td>
                    <td class="py-1.5 px-2 text-amber-700 dark:text-amber-400 font-medium font-mono">1.0 - 2.3 | 5.2 - 6.5</td>
                    <td class="py-1.5 px-2 text-red-700 dark:text-red-400 font-medium font-mono">&lt; 1.0 | &gt; 6.5 bar</td>
                  </tr>
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Load [%]</td>
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">0% - 100%</td>
                    <td class="py-1.5 px-2 text-slate-400 dark:text-slate-500 font-mono">—</td>
                    <td class="py-1.5 px-2 text-slate-400 dark:text-slate-500 font-mono">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- TABLA 2: TEMPERATURAS: REFRIGERANTE, ACEITE Y REDUCTORA -->
          <div class="p-2.5 px-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full shrink-0">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">TEMPERATURAS: REFRIGERANTE, ACEITE Y REDUCTORA</strong>
              <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">AFM Tabla 2.5</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-[11px] leading-tight">
                <thead>
                  <tr class="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider">
                    <th class="py-1.5 px-2 font-bold text-[#0B2E59] dark:text-sky-300 w-[24%] whitespace-nowrap">Parámetro</th>
                    <th class="py-1.5 px-2 font-bold text-emerald-700 dark:text-emerald-400 w-[22%] whitespace-nowrap">Verde</th>
                    <th class="py-1.5 px-2 font-bold text-amber-700 dark:text-amber-400 w-[30%] whitespace-nowrap">Ámbar</th>
                    <th class="py-1.5 px-2 font-bold text-red-700 dark:text-red-400 w-[24%] whitespace-nowrap">Roja</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Coolant Temp [°C]</td>
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">60 - 96 °C <span class="text-[10px] text-slate-500">(101° CD-155)</span></td>
                    <td class="py-1.5 px-2 text-amber-700 dark:text-amber-400 font-medium font-mono">-32...+60 | 96 - 105 °C</td>
                    <td class="py-1.5 px-2 text-red-700 dark:text-red-400 font-medium font-mono">&lt; -32 | &gt; 105 °C</td>
                  </tr>
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Oil Temp [°C]</td>
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">50 - 125 °C <span class="text-[10px] text-slate-500">(130° CD-155)</span></td>
                    <td class="py-1.5 px-2 text-amber-700 dark:text-amber-400 font-medium font-mono">-32...+50 | 125 - 140 °C</td>
                    <td class="py-1.5 px-2 text-red-700 dark:text-red-400 font-medium font-mono">&lt; -32 | &gt; 140 °C</td>
                  </tr>
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Gearbox Temp [°C]</td>
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">&lt; 115 °C</td>
                    <td class="py-1.5 px-2 text-amber-700 dark:text-amber-400 font-medium font-mono">115 - 120 °C</td>
                    <td class="py-1.5 px-2 text-red-700 dark:text-red-400 font-medium font-mono">&gt; 120 °C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Instrumentación Garmin G1000 EIS y NOTA (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col items-center justify-between p-2 lesson-img-wrapper">
          <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/Gemini_Generated_Image_qdo2epqdo2epqdo2.jpg" alt="Garmin G1000 EIS y Sistema de Alertas CAS Diamond DA42 Twin Star" class="w-full h-full max-h-[385px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-700 dark:text-slate-300 font-medium shrink-0">
            <strong class="text-[#0B2E59] dark:text-sky-300">Garmin G1000 EIS</strong> · Sistema de Alertas CAS, Fuel, System y Engine Display
          </figcaption>
        </div>

        <!-- NOTA: Indicación de % LOAD y Engine Master AFM 2.5 -->
        <div class="w-full p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight shadow-2xs shrink-0 mt-2">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
            <span>ℹ️</span>
            <span>NOTE (AFM 2.5):</span>
          </strong>
          <div>'Load' es el porcentaje de potencia máxima disponible en las condiciones ambientales actuales. Si el interruptor <code>ENGINE MASTER</code> se sitúa en <code>OFF</code>, la indicación de carga mostrará 0% (o «<code>---</code>») con independencia de la rotación de la hélice.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.11: 2.11 Parámetros Eléctricos, Combustible y Sistema de Alertas CAS (G1000) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.11 Parámetros Eléctricos, Combustible y Sistema de Alertas CAS (G1000)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Límites de Sistema Eléctrico 28V, Combustible y Gestión de Avisos en Garmin G1000</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): G1000 EIS Auxiliar y Lógica CAS (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">G1000 EIS AUXILIAR & LÓGICA DE ALERTAS CAS</span>
        </div>

        <!-- TABLA DE PARÁMETROS ELÉCTRICOS Y COMBUSTIBLE (G1000 EIS) -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 w-full shrink-0">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">PARÁMETROS ELÉCTRICOS Y COMBUSTIBLE (G1000 EIS)</strong>
            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">AFM Tabla 2.5</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-[11px] leading-tight">
              <thead>
                <tr class="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider">
                  <th class="py-1 px-1.5 font-bold text-[#0B2E59] dark:text-sky-300">Parámetro</th>
                  <th class="py-1 px-1.5 font-bold text-emerald-700 dark:text-emerald-400">Verde</th>
                  <th class="py-1 px-1.5 font-bold text-amber-700 dark:text-amber-400">Ámbar</th>
                  <th class="py-1 px-1.5 font-bold text-red-700 dark:text-red-400">Roja</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Voltímetro (28V) [V]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">24.1 - 32.0 V</td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">20.0 - 24.1 V</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&lt; 20.0 | &gt; 32.0 V</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Amperímetros L / R [A]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">hasta 60 A <span class="text-[10px] text-slate-500">(70A)</span></td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">60 - 70 A</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&gt; 70 A</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Fuel Temp L y R [°C]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">+5 a 69 °C <span class="text-[10px] text-slate-500">(Jet A-1)</span></td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">-30...+4 | 70 - 75 °C</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&lt; -30 | &gt; 75 °C</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Fuel Qty (L y R) [USG]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">1.0 a 25.0 USG</td>
                  <td class="py-1.5 px-1.5 text-slate-400 dark:text-slate-500 font-mono">—</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&lt; 1.0 USG</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- LÓGICA DE GESTIÓN DE ALERTAS CAS EN GARMIN G1000 -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full shrink-0">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">GESTIÓN Y LÓGICA DE ALERTAS EN GARMIN G1000 (CAS)</strong>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 pt-0.5 text-[11px] leading-tight">
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Alertas Integradas CAS:</strong> Sustituyen al panel anunciador físico; se notifican en la ventana de anuncios del PFD y en la barra EIS.</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Niveles de Prioridad:</strong> <code>WARNING</code> en rojo con aviso acústico continuo, <code>CAUTION</code> en ámbar con tono breve y Advisories en blanco/azul.</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Acuse con Softkey ALERTS:</strong> El piloto presiona la tecla <code>ALERTS</code> en el marco inferior del PFD para consultar la causa exacta y silenciar el tono.</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Autodescarte:</strong> Si el parámetro monitorizado retorna a su rango normal verde, el mensaje se retira automáticamente.</span>
            </div>
            <div class="flex items-start gap-1.5 sm:col-span-2">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Revisión de Historial:</strong> La ventana de alertas guarda los avisos activos ordenados por criticidad para su monitorización continua.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): G1000 EIS (3 Páginas) y Alertas CAS (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <!-- Dos cuadros verticales lado a lado (2 columnas) -->
        <div class="grid grid-cols-2 gap-2 flex-1 min-h-0">
          
          <!-- Cuadro 1: Las 3 Páginas del G1000 EIS -->
          <div class="h-full flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/60 p-2 shadow-2xs overflow-hidden">
            <div class="flex items-center justify-between shrink-0 pb-1 mb-1 border-b border-slate-100 dark:border-slate-800">
              <span class="text-xs font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide">
                G1000 EIS · 3 PÁGINAS
              </span>
            </div>

            <!-- Las 3 tiras verticales del EIS: Engine, System y Fuel -->
            <div class="flex-1 min-h-0 grid grid-cols-3 gap-1 items-center justify-center overflow-hidden py-1">
              <!-- 1. Engine Display -->
              <div class="h-full flex flex-col items-center justify-between min-h-0">
                <div class="w-full flex-1 flex items-center justify-center min-h-0 overflow-hidden bg-white dark:bg-white rounded p-0.5 lesson-img-wrapper">
                  <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/g1000-eis-engine.png" alt="Garmin G1000 EIS Engine Display DA42" class="w-full h-full object-contain rounded" style="max-height: 460px;" />
                </div>
                <span class="text-[11px] font-bold text-slate-700 dark:text-slate-300 mt-1 shrink-0">ENGINE</span>
              </div>

              <!-- 2. System Display -->
              <div class="h-full flex flex-col items-center justify-between min-h-0">
                <div class="w-full flex-1 flex items-center justify-center min-h-0 overflow-hidden bg-white dark:bg-white rounded p-0.5 lesson-img-wrapper">
                  <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/g1000-eis-system.png" alt="Garmin G1000 EIS System Display DA42" class="w-full h-full object-contain rounded" style="max-height: 460px;" />
                </div>
                <span class="text-[11px] font-bold text-slate-700 dark:text-slate-300 mt-1 shrink-0">SYSTEM</span>
              </div>

              <!-- 3. Fuel Display -->
              <div class="h-full flex flex-col items-center justify-between min-h-0">
                <div class="w-full flex-1 flex items-center justify-center min-h-0 overflow-hidden bg-white dark:bg-white rounded p-0.5 lesson-img-wrapper">
                  <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/g1000-eis-fuel.png" alt="Garmin G1000 EIS Fuel Display DA42" class="w-full h-full object-contain rounded" style="max-height: 460px;" />
                </div>
                <span class="text-[11px] font-bold text-slate-700 dark:text-slate-300 mt-1 shrink-0">FUEL</span>
              </div>
            </div>
          </div>

          <!-- Cuadro 2: Ventana de Alertas CAS y Criterio de Consulta -->
          <div class="h-full flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900/60 p-2 shadow-2xs overflow-hidden">
            <div class="flex items-center justify-between shrink-0 pb-1 mb-1 border-b border-slate-100 dark:border-slate-800">
              <span class="text-xs font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide">
                ALERTAS CAS (G1000)
              </span>
            </div>

            <!-- Imagen de la ventana de Alertas CAS -->
            <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden p-1 bg-white dark:bg-white rounded-lg lesson-img-wrapper">
              <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/g1000-cas-alerts.png" alt="Sistema de Alertas CAS Garmin G1000 DA42" class="w-full h-full max-h-[360px] object-contain rounded-lg" />
            </div>

            <!-- NOTA -->
            <div class="w-full p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-snug shadow-2xs shrink-0 mt-1">
              <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
                <span>ℹ️</span>
                <span>NOTE:</span>
              </strong>
              <div>Los parámetros eléctricos individuales (Voltios y Amperios de cada alternador L/R) y la gestión de depósitos auxiliares se consultan en el MFD mediante las teclas de función rápida <strong>ENGINE &gt; SYSTEM</strong> o <strong>FUEL</strong>.</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.12: 2.12 Limitaciones de Combustible y Desbalance Máximo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.12 Limitaciones de Combustible y Desbalance Máximo</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Capacidades de Depósitos, Combustibles Autorizados y Límite de 5.0 US gal</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): AFM Sección 2 (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-0.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUEL LIMITATIONS & TANK CAPACITIES</span>
        </div>

        <div class="space-y-1.5 py-0.5">
          <!-- TARJETA 1: COMBUSTIBLES AUTORIZADOS Y TEMPERATURAS -->
          <div class="p-1.5 px-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">COMBUSTIBLES AUTORIZADOS, TEMPERATURA Y DENSIDAD</strong>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 text-[11px] leading-tight text-slate-800 dark:text-slate-200 pt-0.5">
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Queroseno JET:</strong> JET A-1 (ASTM D 1655), JET A, JP-8 (densidad 0,84 kg/L).</span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Diésel de automoción:</strong> EN 590 (número de cetano mín. 49) y mezclas.</span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-emerald-700 dark:text-emerald-400 shrink-0">•</span>
                <span><strong>Mín. despegue JET:</strong> <strong>-30 °C</strong> (máx. admisible en depósito: <strong>+75 °C</strong>).</span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-amber-700 dark:text-amber-400 shrink-0">•</span>
                <span><strong>Mín. despegue Diésel:</strong> <strong>-5 °C</strong> (riesgo de congelación de parafinas).</span>
              </div>
              <div class="flex items-start gap-1.5 sm:col-span-2 text-red-600 dark:text-red-400 font-semibold pt-0.5">
                <span class="shrink-0">•</span>
                <span><strong>AVGAS 100LL / MOGAS:</strong> Terminantemente prohibidos bajo cualquier circunstancia.</span>
              </div>
            </div>
          </div>

          <!-- TARJETA 2: CAPACIDADES POR DEPÓSITO -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch text-[11px] leading-tight">
            <!-- MAIN TANKS -->
            <div class="p-1.5 px-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase">DEPÓSITOS PRINCIPALES (MAIN)</strong>
              <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                <span>Capacidad total:</span>
                <span class="font-mono font-bold">2 x 26.0 USG (196.8 L)</span>
              </div>
              <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                <span>Combustible no utilizable:</span>
                <span class="font-mono text-slate-500">2 x 1.0 USG (7.6 L)</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span>Combustible utilizable:</span>
                <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">2 x 25.0 USG (189.2 L)</span>
              </div>
            </div>

            <!-- AUXILIARY TANKS -->
            <div class="p-1.5 px-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase">DEPÓSITOS AUXILIARES (AUX)</strong>
              <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                <span>Capacidad total:</span>
                <span class="font-mono font-bold">2 x 13.7 USG (103.8 L)</span>
              </div>
              <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                <span>Aux utilizable total:</span>
                <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">2 x 13.2 USG (100.0 L)</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span>Total combinado utilizable:</span>
                <span class="font-mono font-bold text-sky-700 dark:text-sky-300">76.4 USG (~289.2 L)</span>
              </div>
            </div>
          </div>

          <!-- TARJETA 3: LIMITACIONES OPERACIONALES, DESBALANCE Y CROSSFEED AFM 2.6 / 2.14 -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs shrink-0">
              <span>⚡</span>
              <span>LIMITACIONES OPERATIVAS, DESBALANCE Y CROSSFEED (AFM 2.6 / 2.14):</span>
            </strong>
            <ul class="list-disc pl-3 space-y-0.5 text-[11px] leading-tight">
              <li><strong>Desbalance máximo admisible:</strong> Diferencia máxima de <strong>5.0 US gal (~19 litros)</strong> entre depósitos principales para preservar la autoridad de alerones y estabilidad.</li>
              <li><strong>Válvulas selectoras (Fuel Valves):</strong> Cada motor dispone de válvula independiente con posiciones <code>ON</code>, <code>CROSSFEED</code> y <code>OFF</code>.</li>
              <li><strong>Alimentación cruzada (CROSSFEED):</strong> Autorizada solo en vuelo monomotor (OEI) para alimentar el motor operativo desde el ala opuesta o para corregir desbalances.</li>
              <li><strong>Warning de despegue y aterrizaje:</strong> Obligatorio verificar ambas válvulas en posición <code>ON</code>. Prohibido despegar o aterrizar en <code>CROSSFEED</code>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema Oficial de Combustible DA42 (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SISTEMA DE COMBUSTIBLE DA42 TWIN STAR</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col items-center justify-between p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/da42-fuel-schematic.png" alt="Esquema Oficial del Sistema de Combustible Diamond DA42 Twin Star" class="w-full h-full max-h-[460px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-600 dark:text-slate-300 font-medium shrink-0">
            <strong class="text-[#0B2E59] dark:text-sky-300">Esquema del Sistema de Combustible DA42</strong> · Main Tanks (2x25 USG), Aux Tanks (2x13.2 USG), Válvulas Selectoras y Retorno con Enfriadores
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.13: 2.13 Tipos de Operación Autorizada y Techo de Servicio -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.13 Tipos de Operación Autorizada y Techo de Servicio</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Reglas de Vuelo VFR/IFR, Tripulación Mínima, Techo de 18.000 ft y Engelamiento</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Tipos de Vuelo, Techo y Engelamiento (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-0.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">OPERACIONES APROBADAS & LIMITACIONES CLIMÁTICAS</span>
        </div>

        <div class="space-y-1.5 py-0.5">
          <!-- TARJETA 1: OPERACIONES Y TRIPULACIÓN -->
          <div class="p-1.5 px-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">OPERACIONES APROBADAS Y TRIPULACIÓN (AFM 2.13)</strong>
            <div class="space-y-1 text-[11px] leading-tight text-slate-800 dark:text-slate-200 pt-0.5">
              <p>• <strong>Reglas de vuelo:</strong> <strong>VFR Diurno, VFR Nocturno, IFR Diurno e IFR Nocturno</strong> con instrumentación Garmin G1000 PFD/MFD operativa.</p>
              <p>• <strong>Tripulación mínima:</strong> 1 piloto situado en el asiento delantero izquierdo.</p>
              <p>• <strong>Capacidad de cabina:</strong> Máximo 4 personas a bordo.</p>
              <p>• <strong>Categoría Normal:</strong> Vuelo acrobático y barrenas intencionadas estrictamente prohibidos.</p>
            </div>
          </div>

          <!-- TARJETA 2: TECHO OPERATIVO Y OXÍGENO -->
          <div class="p-1.5 px-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ALTITUD Y REQUERIMIENTO DE OXÍGENO (AFM 2.11)</strong>
            <div class="space-y-1 text-[11px] leading-tight text-slate-800 dark:text-slate-200 pt-0.5">
              <p>• <strong>Techo operativo máximo:</strong> <strong>18.000 ft (5.486 m)</strong> de altitud de presión.</p>
              <p>• <strong>Oxígeno suplementario:</strong> A grandes altitudes es mandatorio el uso de equipos de oxígeno para los ocupantes conforme a la reglamentación operativa vigente.</p>
            </div>
          </div>

          <!-- TARJETA 3: ENGELAMIENTO Y SISTEMA TKS -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>LIMITACIONES DE ENGELAMIENTO Y SISTEMA TKS (AFM 2.14):</span>
            </strong>
            <div class="space-y-1 text-[11px] leading-tight pt-0.5">
              <p>• <strong>Estado en nuestra flota:</strong> Aunque la aeronave dispone de paneles porosos TKS en los bordes de ataque, el sistema está <strong>inoperativo / sin fluido</strong>.</p>
              <p>• <strong>Limitación oficial:</strong> La aeronave <strong>NO está autorizada para vuelo en condiciones de engelamiento conocido (Known Icing)</strong>.</p>
              <p>• <strong>Caution operativo:</strong> Ante cualquier encuentro fortuito con engelamiento en vuelo, conectar de inmediato la calefacción de pitot (<code>PITOT HEAT</code>) y abandonar la zona mediante desvío de rumbo o cambio de altitud.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Gráfico Oficial de Placards y Limitaciones (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PLACARDS OFICIALES Y LIMITACIONES OPERACIONALES</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col items-center justify-between p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da42/da42-afm-placards-overview.png" alt="Placards y Carteles Mandatorios Oficiales Diamond DA42 Twin Star" class="w-full h-full max-h-[460px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-600 dark:text-slate-300 font-medium shrink-0">
            <strong class="text-[#0B2E59] dark:text-sky-300">Diamond DA42 Twin Star</strong> · Placards y Carteles Mandatorios de Cabina (AFM Sección 2.15)
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</div>`,
};

export const DA42_LESSON_3 = {
  id: "da420000-0000-0000-0000-000000000030",
  course_id: DA42_COURSE_ID,
  title: "3. Descripción del Avión y sus Sistemas (AFM Sección 7)",
  slug: "descripcion-avion-sistemas-da42",
  sequence_order: 3,
  lesson_order: 3,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 3.1: 3.1 Motores Continental CD-135 / CD-155: Arquitectura Bimotor y Especificaciones -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · INGENIERÍA Y SISTEMAS (AFM SECCIÓN 7)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.1 Motores Continental CD-135 / CD-155: Arquitectura Bimotor y Especificaciones</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Modelos CD-135 (TAE 125-01 / -02-99) y CD-155 (TAE 125-02-114)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-0.5 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE SPECIFICATIONS</span>
        </div>

        <div class="space-y-1.5 py-0">
          <!-- CUADRO COMPARATIVO LADO A LADO CD-135 y CD-155 (ESTILO C172) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- CONTINENTAL CD-135 (TAE 125-02-99) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONTINENTAL CD-135 (TAE 125-02-99)</strong>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Potencia máx:</strong> 99 kW (135 HP / 133 BHP) a 2.300 RPM hélice (Take-off / Cont.).</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Cilindrada:</strong> 1.991 cm³ (121.5 in³) [TAE 125-01: 1.689 cm³].</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Arquitectura:</strong> 4 cilindros en línea, 4T, refrig. líquida, DOHC.</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Inyección:</strong> Directa Common Rail y turbo con intercooler.</span>
              </div>
            </div>

            <!-- CONTINENTAL CD-155 (TAE 125-02-114) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONTINENTAL CD-155 (TAE 125-02-114)</strong>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Potencia máx:</strong> 114 kW (155 HP / 153 BHP) a 2.300 RPM hélice (Take-off / Cont.).</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Cilindrada:</strong> 1.991 cm³ (121.5 in³).</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Arquitectura:</strong> 4 cilindros en línea, 4T, refrig. líquida, DOHC.</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Inyección:</strong> Directa Common Rail y turbo con intercooler.</span>
              </div>
            </div>
          </div>

          <!-- ARQUITECTURA COMÚN Y DISTRIBUCIÓN EN CÉLULA -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ARQUITECTURA COMÚN Y DISTRIBUCIÓN EN CÉLULA</strong>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-0.5 text-[11px] leading-tight text-slate-800 dark:text-slate-200">
              <div class="flex items-start gap-1">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Disposición bimotor:</strong> 2 plantas gemelas independientes montadas en góndolas alares mediante bancadas de acero y fibra.</span>
              </div>
              <div class="flex items-start gap-1">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Ciclo térmico:</strong> Diésel 4 tiempos, 4 cilindros en línea, refrigeración líquida y cárter húmedo (wet sump).</span>
              </div>
              <div class="flex items-start gap-1">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Sobrealimentación:</strong> Turbocompresor accionado por gases de escape con intercooler de refrigeración de aire de admisión.</span>
              </div>
              <div class="flex items-start gap-1">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Control FADEC:</strong> 2 canales digitales redundantes independientes por cada motor (ECU A y ECU B).</span>
              </div>
            </div>
          </div>

          <!-- NOTA FADEC Y COMPONENTES SUPRIMIDOS -->
          <div class="p-1.5 px-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Debido a la tecnología Common Rail con FADEC y combustión diésel, quedan suprimidos en ambas motorizaciones: carburador y calefacción de carburador, magnetos de encendido y bujías, palanca manual de mezcla (<code>Mixture</code>), palanca de paso de hélice (<code>Propeller</code>) y cebador manual (<code>Primer</code>). Cada motor se controla exclusivamente mediante su correspondiente palanca monomando (<code>Power Lever</code>).</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Planta Motriz Continental CD-135 / CD-155 (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PLANTA MOTRIZ CONTINENTAL CD-135 / CD-155</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-tight font-medium">
              Arquitectura general de la planta motriz Continental instalada en las góndolas alares del DA42: 4 cilindros en línea, refrigeración líquida, inyección directa Common Rail, turbocompresor con intercooler y caja reductora integrada gobernada electrónicamente.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col items-center justify-between p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
              <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.1-cd155-engine.png?v=1" alt="Motor Continental CD-135 / CD-155 Turbo Diésel" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;" />
            </div>
            <figcaption class="mt-1 text-center text-xs text-slate-600 dark:text-slate-300 font-medium shrink-0">
              <strong class="text-[#0B2E59] dark:text-sky-300">Continental CD-135 / CD-155</strong> · Arquitectura de la Planta Motriz en Góndola Alar (AFM Sección 7.9)
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- pagebreak -->



<!-- DIAPOSITIVA 3.2: 3.2 Reductora Integrada y Hélice MT-Propeller -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · CD-135 / CD-155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.2 Reductora Integrada y Hélice MT-Propeller</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Reducción (CD-135 i=1.69 / CD-155 i=1.66) y Hélices Abanderables Constant Speed</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Manual POH Suplemento Continental (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-0.5 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">GEARBOX & PROPELLER (AFM SECCIÓN 7.9.2)</span>
        </div>

        <div class="space-y-1.5 py-0">
          <!-- CUADRO LADO A LADO: REDUCTORA Y HÉLICE (ESTILO C172) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- CAJA REDUCTORA INTEGRADA -->
            <div class="p-1.5 px-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CAJA REDUCTORA INTEGRADA (GEARBOX)</strong>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Relación de reducción:</strong> <span class="font-mono">i = 1:1,69</span> (CD-135) | <span class="font-mono">i = 1:1,66</span> (CD-155), reduciendo a 2.300 RPM hélice.</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Amortiguador torsional:</strong> Absorbe las pulsaciones cíclicas del par motor diésel.</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Embrague de sobrecarga:</strong> Desacopla la hélice ante impactos bruscos o sobrepar.</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Lubricación independiente:</strong> Circuito de aceite propio con bomba e intercambiador agua/aceite.</span>
              </div>
            </div>

            <!-- HÉLICE MT-PROPELLER ABANDERABLE -->
            <div class="p-1.5 px-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">HÉLICE TRIPALA CONSTANT SPEED</strong>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Modelo:</strong> 2 hélices MT-Propeller MTV-6-A-C-F / CF 187-129 (Ø 1,87 m, una por motor).</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Construcción:</strong> 3 palas de compuesto (madera laminada, fibra y protección inox).</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Gobierno FADEC:</strong> Regulación electrohidráulica mediante aceite de reductora.</span>
              </div>
              <div class="flex items-start gap-1 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Acumulador de presión:</strong> Reserva de nitrógeno/aceite a 20 bar para desabanderar en vuelo.</span>
              </div>
            </div>
          </div>

          <!-- MECANISMO DE ABANDERAMIENTO Y SEGUROS CENTRÍFUGOS -->
          <div class="p-1.5 px-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ABANDERAMIENTO Y SEGUROS CENTRÍFUGOS (AFM 7.9.2)</strong>
            <div class="space-y-0.5 text-[11px] leading-tight text-slate-800 dark:text-slate-200 pt-0.5">
              <div class="flex items-start gap-1">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Abanderamiento (Feathering):</strong> Con <code>ENGINE MASTER</code> en OFF, la válvula drena aceite y los contrapesos con gas nitrógeno abanderan las palas a <strong>81° ± 1°</strong> (mínima resistencia OEI).</span>
              </div>
              <div class="flex items-start gap-1">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Seguros centrífugos (Start Locks):</strong> A menos de 950 - 1.300 RPM en tierra, fiadores mecánicos <strong>impiden el abanderamiento</strong> para dejar la hélice en paso fino para el próximo arranque.</span>
              </div>
              <div class="flex items-start gap-1">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Desabanderamiento (Unfeathering):</strong> Al poner <code>ENGINE MASTER</code> en ON en vuelo, los 20 bar del acumulador inyectan aceite sacando las palas de bandera para el rearranque.</span>
              </div>
            </div>
          </div>

          <!-- WARNING DIFERENCIA VITAL RESPECTO A MONOMOTOR -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>En el DA42 bimotor, la falta de aceite o cortar <code>ENGINE MASTER</code> lleva automáticamente las palas a <strong>bandera</strong>. Para abanderar en vuelo, cortar con RPM &gt;950 - 1.300. ¡Prohibido girar la hélice con la mano!</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Reductora Integrada y Hélice MT-Propeller (Altura Fija 590px - Imagen Máxima) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CAJA REDUCTORA Y HÉLICE MT-PROPELLER</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 px-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-snug font-medium">
              Arquitectura de la caja reductora integrada (i=1.69 / 1.66), amortiguador torsional, embrague de sobrecarga y sistema electrohidráulico de hélice MTV-6 abanderable con acumulador de nitrógeno.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col items-center justify-between p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
              <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.2-gearbox-propeller.jpg?v=1" alt="Reductora Integrada y Hélice MT-Propeller" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;" />
            </div>
            <figcaption class="mt-1 text-center text-xs text-slate-600 dark:text-slate-300 font-medium shrink-0">
              <strong class="text-[#0B2E59] dark:text-sky-300">Diamond DA42 Twin Star</strong> · Caja Reductora Integrada y Hélice MT-Propeller MTV-6 Abanderable (AFM 7.9.2)
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
};

export const DA42_LESSON_4 = {
  id: "da420000-0000-0000-0000-000000000040",
  course_id: DA42_COURSE_ID,
  title: "4. Procedimientos Normales y Operación Diésel",
  slug: "procedimientos-normales-da42",
  sequence_order: 4,
  lesson_order: 4,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 4.1: 4.1 Inspección Prevuelo I: Cabina Inicial (Preparation & Console) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.1 Inspección Prevuelo I: Cabina Inicial (Preparation &amp; Console)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Preparación, Consola Central y Mandos Inferiores</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.1 PRE-FLIGHT INSPECTION &mdash; I. CABIN CHECK</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Preparation (a - f)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">set ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">MET, NAV, Mass &amp; Balance &mdash; <span class="italic font-medium">flight planning completed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Airplane documents &mdash; <span class="italic font-medium">complete and up-to-date</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Front canopy &amp; rear door &mdash; <span class="italic font-medium">clean, undamaged, check locking mechanism function</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Baggage &mdash; <span class="italic font-medium">stowed and secured</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Foreign objects &mdash; <span class="italic font-medium">check</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Center console &amp; below panel</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">POWER Lever &mdash; <span class="italic font-medium">check condition, freedom of movement and full travel / adjust friction, set IDLE</span></span>
              </div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 pt-1 uppercase tracking-wide">Below instrument panel</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">ALTERNATE STATIC SOURCE &mdash; <span class="italic font-medium">check CLOSED</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">MANUAL GEAR EXTENSION HANDLE &mdash; <span class="italic font-medium">check pushed in</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">ALTERNATE AIR &mdash; <span class="italic font-medium">check CLOSED</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>Readability of the G1000 PFD and MFD displays may be degraded when wearing polarized sunglasses.</div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">PREPARACIÓN Y CONSOLA CENTRAL</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Consola central de la DA42 mostrando las palancas de potencia en IDLE, selectores de combustible en ON y mando de extensión manual del tren empujado hacia dentro.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.2: 4.2 Inspección Prevuelo II: Disposición de Mandos e Interruptores (Instrument Panel) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.2 Inspección Prevuelo II: Mandos e Interruptores (Panel)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Panel de Instrumentos, Disyuntores e Interruptores Eléctricos</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">I. CABIN CHECK &mdash; ON THE INSTRUMENT PANEL</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Switches (a - g)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">ALTERNATOR &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP &mdash; <span class="italic font-medium">check AUTOMATIC</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">PITOT HEAT &mdash; <span class="italic font-medium">check OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">check both OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">START KEY &mdash; <span class="italic font-medium">check key is pulled out</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">check OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">AVIONIC MASTER &mdash; <span class="italic font-medium">check OFF</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Selectors &amp; Breakers (h - m)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
                <span class="text-slate-800 dark:text-slate-200">GEAR SELECTOR &mdash; <span class="italic font-medium">check DOWN</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">i)</span>
                <span class="text-slate-800 dark:text-slate-200">FLAP SELECTOR &mdash; <span class="italic font-medium">check UP</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">j)</span>
                <span class="text-slate-800 dark:text-slate-200">Circuit breakers &mdash; <span class="italic font-medium">set in (if one has been pulled, check reason)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">k)</span>
                <span class="text-slate-800 dark:text-slate-200">All electrical equipment &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">l)</span>
                <span class="text-slate-800 dark:text-slate-200">EMERGENCY SWITCH &mdash; <span class="italic font-medium">check OFF &amp; guarded</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">m)</span>
                <span class="text-slate-800 dark:text-slate-200">ELT &mdash; <span class="italic font-medium">armed</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>⚠️</span>
            <span>CAUTION:</span>
          </strong>
          <div>Verify that all circuit breakers are pushed in. If a circuit breaker has been pulled or tripped, determine the cause prior to flight.</div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">PANEL DE INSTRUMENTOS DA42</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Panel frontal de la DA42 con alternadores en ON, ECU Swap en AUTOMATIC, interruptores de motor y llave extraída, e interruptor de emergencia protegido.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.3: 4.3 Inspección Prevuelo III: Comprobación Eléctrica & Avisadores (Check Procedure Part 1) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.3 Inspección Prevuelo III: Eléctrica y Avisadores (Check 1)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Alimentación Eléctrica, Combustible, Luces y Test de Fuego</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">I. CABIN CHECK &mdash; CHECK PROCEDURE (AFM 4A.6.1)</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Power &amp; Fuel (a - b)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel quantity &mdash; <span class="italic font-medium">check indication, verify using alternate means (see Section 7.9.5)</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Lights &amp; Alerts (c - f)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Position lights, strobe lights (ACL) &mdash; <span class="italic font-medium">check for correct function</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Landing / Taxi light &mdash; <span class="italic font-medium">check for correct function</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Stall warning / stall heat / Pitot heat &mdash; <span class="italic font-medium">check</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Gear warning / Fire detector TEST BUTTON &mdash; <span class="italic font-medium">PUSH, check aural alert / fire detection warning and aural alert</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-[18px] shrink-0">
            <span>⚠️</span>
            <span>CAUTION:</span>
          </strong>
          <ul class="list-disc pl-6 space-y-1 text-[18px] leading-snug" style="padding-left: 1.5rem;">
            <li>When switching ELECT. MASTER ON, the hydraulic gear pump may run for 5 to 20 s. Should it operate continuously, terminate flight.</li>
            <li>Do not look directly into the anti collision lights.</li>
            <li>If the aural alert or the fire warning on the PFD does not appear during test, terminate flight. Unscheduled maintenance is necessary.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">ENCENDIDO ELÉCTRICO Y TEST DE FUEGO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Pantalla PFD del Garmin G1000 mostrando el aviso rojo de alarma de fuego al pulsar el botón de prueba TEST en el panel de anunciadores superior.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.4: 4.4 Inspección Prevuelo IV: Mandos y Limitador de Profundidad (Check Procedure Part 2) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.4 Inspección Prevuelo IV: Mandos y Backstop (Check 2)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Prueba Funcional del Variable Elevator Backstop y Flaps</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">I. CABIN CHECK &mdash; BACKSTOP &amp; CONTROLS (AFM 4A.6.1)</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Backstop Test (g - l)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">Control stick &mdash; <span class="italic font-medium">pull fully aft / hold at backstop</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">set LDG position</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">i)</span>
                <span class="text-slate-800 dark:text-slate-200">POWER Lever &mdash; <span class="italic font-medium">set MAX</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">j)</span>
                <span class="text-slate-800 dark:text-slate-200">Variable elevator backstop &mdash; <span class="italic font-medium">check function / control stick must move slightly forward during power lever forward movement</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">k)</span>
                <span class="text-slate-800 dark:text-slate-200">POWER Lever &mdash; <span class="italic font-medium">set IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">l)</span>
                <span class="text-slate-800 dark:text-slate-200">Variable elevator backstop &mdash; <span class="italic font-medium">check function / control stick must regain full movement during power lever retraction</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Flaps &amp; Controls (m - p)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">m)</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">set UP position</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">n)</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">o)</span>
                <span class="text-slate-800 dark:text-slate-200">Flight controls &mdash; <span class="italic font-medium">check free &amp; correct movement up to full deflection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">p)</span>
                <span class="text-slate-800 dark:text-slate-200">Trims &mdash; <span class="italic font-medium">check free &amp; correct movement up to full deflection</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>⚠️</span>
            <span>CAUTION:</span>
          </strong>
          <div>The proper function of the variable elevator backstop is indispensable for the safety of flight, as the handling qualities during power-on stalls are degraded significantly. If the variable elevator backstop does not function properly, terminate flight.</div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">LIMITADOR DE PROFUNDIDAD Y MANDOS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Diagrama del mecanismo electromecánico del variable elevator backstop en la bancada del timón de profundidad y comprobación de deflexión libre en alerones y timones.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.5: 4.5 Inspección Exterior I: Tren Principal Izquierdo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.5 Inspección Exterior I: Tren Principal Izquierdo</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">II. Walk-Around &mdash; 1. Left Main Landing Gear (AFM 4A.6.1)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">1. LEFT MAIN LANDING GEAR</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Strut, Switches &amp; Tire (a - d)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Landing gear strut &amp; lock &mdash; <span class="italic font-medium">visual inspection, sufficient height (typical visible length of bare piston: at least 4 cm/1.6&quot;)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Down &amp; Uplock switches (3x) &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Wear, tread depth of tire &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Tire, wheel, brake &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Brakes &amp; Door (e - h)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Brake line connection &mdash; <span class="italic font-medium">check for leaks</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Slip marks &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">Chocks &mdash; <span class="italic font-medium">remove</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
                <span class="text-slate-800 dark:text-slate-200">Landing gear door &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-[18px] shrink-0">
            <span>⚠️</span>
            <span>CAUTION:</span>
          </strong>
          <ul class="list-disc pl-6 space-y-1 text-[18px] leading-snug" style="padding-left: 1.5rem;">
            <li>Visual inspection means examination for damage, cracks, delamination, excessive play, load transmission, correct attachment and general condition.</li>
            <li>Prior to flight, remove such items as control surfaces gust lock, Pitot cover, tow bar, etc.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">TREN DE ATERRIZAJE PRINCIPAL IZQUIERDO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Pata telescópica del tren principal izquierdo verificando que el vástago cromado visible tenga al menos 4 cm (1.6 in), microinterruptores down/uplock, disco de freno y marca de resbale del neumático.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.6: 4.6 Inspección Exterior II: Góndola Motor Izquierdo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.6 Inspección Exterior II: Góndola Motor Izquierdo</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">II. Walk-Around &mdash; 2. Left Engine Nacelle (AFM 4A.6.1)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">2. LEFT ENGINE NACELLE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Engine &amp; Cowling (a - f)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">3 air inlets / 2 air outlets &mdash; <span class="italic font-medium">clear</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Engine oil level &mdash; <span class="italic font-medium">check dipstick (inspection hole in the upper cowling)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Gearbox oil level &mdash; <span class="italic font-medium">check visually (inspection hole in the lower cowling)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Cowling &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Gascolator / air inlet &mdash; <span class="italic font-medium">drain off to check for water and sediment (drain until no water comes out) / clear</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Venting pipe &mdash; <span class="italic font-medium">check for blockage</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Exhaust, Prop &amp; Aux Tank (g - l)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">Exhaust &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
                <span class="text-slate-800 dark:text-slate-200">Propeller &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">i)</span>
                <span class="text-slate-800 dark:text-slate-200">Nacelle underside &mdash; <span class="italic font-medium">check for excessive contamination particularly by oil, fuel, and other fluids</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">j)</span>
                <span class="text-slate-800 dark:text-slate-200">Auxiliary tank vent outlet on lower surface &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">k)</span>
                <span class="text-slate-800 dark:text-slate-200">Auxiliary tank drain &mdash; <span class="italic font-medium">drain off to check for water and sediment (drain until no water comes out) / visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">l)</span>
                <span class="text-slate-800 dark:text-slate-200">Auxiliary tank filler &mdash; <span class="italic font-medium">visual inspection, tank filler closed</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-[18px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <ul class="list-disc pl-6 space-y-1 text-[18px] leading-snug" style="padding-left: 1.5rem;">
            <li>The exhaust can cause burns when hot.</li>
            <li>Never move the propeller by hand while ENGINE MASTER is ON! Also do not move the propeller by hand while ENGINE MASTER is OFF immediately after operation (remaining pressure in rail). Serious injury may result.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">GÓNDOLA MOTOR IZQUIERDO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Ventanillas de inspección de nivel de aceite motor y reductora en la cubierta del motor izquierdo, purga de gascolator inferior, tubo de escape y depósito de combustible auxiliar.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.7: 4.7 Inspección Exterior III: Ala Izquierda - Superficie y Pitot -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.7 Inspección Exterior III: Ala Izquierda (Superficie y Sensores)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">II. Walk-Around &mdash; 3. Left Wing (Part 1: a - i)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3. LEFT WING &mdash; SURFACE &amp; EQUIPMENT</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Surface &amp; Fuel Tank (a - e)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Entire wing surface &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Tank air outlet on lower surface &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Tank drain / tank air inlet &mdash; <span class="italic font-medium">drain off to check for water and sediment (drain until no water comes out) / visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Openings on lower surface &mdash; <span class="italic font-medium">check for foreign objects and for traces of fuel (if tank is full, fuel may spill over through the tank vent)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Stall warn device &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Filler, Pitot &amp; Tip (f - i)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Tank filler &mdash; <span class="italic font-medium">visual inspection, check closed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">Pitot probe &mdash; <span class="italic font-medium">clean, orifices clear, cover removed, no deformation</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
                <span class="text-slate-800 dark:text-slate-200">Wing tip &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">i)</span>
                <span class="text-slate-800 dark:text-slate-200">Static dischargers &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-[18px] shrink-0">
            <span>⚠️</span>
            <span>CAUTION:</span>
          </strong>
          <ul class="list-disc pl-6 space-y-1 text-[18px] leading-snug" style="padding-left: 1.5rem;">
            <li>If water or sediment is found in fuel, drain off further samples until clear. If fuel contamination persists, flight is prohibited.</li>
            <li>Do not blow into Pitot probe or static ports, as this may damage instruments.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">SUPERFICIE ALAR Y SONDA PITOT</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Sonda Pitot-estática limpia y sin funda, aleta avisadora de pérdida, tapón del depósito de combustible cerrado y descargadores estáticos en la punta alar izquierda.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.8: 4.8 Inspección Exterior IV: Ala Izquierda - Mandos y Flap -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.8 Inspección Exterior IV: Ala Izquierda (Mandos y Flap)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">II. Walk-Around &mdash; 3. Left Wing (Part 2: j - r)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3. LEFT WING &mdash; CONTROLS &amp; FLAP</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Lights, Tie-Down &amp; Aileron (j - n)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">j)</span>
                <span class="text-slate-800 dark:text-slate-200">Position light, strobe light (ACL) &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">k)</span>
                <span class="text-slate-800 dark:text-slate-200">Tie-down &mdash; <span class="italic font-medium">check, clear</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">l)</span>
                <span class="text-slate-800 dark:text-slate-200">Aileron and linkage &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">m)</span>
                <span class="text-slate-800 dark:text-slate-200">Aileron hinges and safety pin &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">n)</span>
                <span class="text-slate-800 dark:text-slate-200">Foreign objects in aileron paddle &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Flap, Cooler &amp; Step (o - r)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">o)</span>
                <span class="text-slate-800 dark:text-slate-200">Flap and linkage &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">p)</span>
                <span class="text-slate-800 dark:text-slate-200">Flap hinges and safety pin &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">q)</span>
                <span class="text-slate-800 dark:text-slate-200">Nacelle underside fuel cooler air in- &amp; outlet &mdash; <span class="italic font-medium">check clear</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">r)</span>
                <span class="text-slate-800 dark:text-slate-200">Step &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>⚠️</span>
            <span>CAUTION:</span>
          </strong>
          <div>Verify safety pins on all aileron and flap hinges, ensure no foreign objects are lodged in the aileron paddle mechanism, and check fuel cooler duct clear.</div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">MANDOS DE VUELO Y ENFRIADOR</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Borde de fuga del ala izquierda mostrando las bisagras del flap y alerón con sus pasadores de seguridad, orificios del enfriador de combustible y peldaño de cabina.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.9: 4.9 Inspección Exterior V: Fuselaje Izquierdo y Empenaje en T -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.9 Inspección Exterior V: Fuselaje Izquierdo y Empenaje</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">II. Walk-Around &mdash; 4. Fuselage Left &amp; 5. Empennage (AFM 4A.6.1)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4. FUSELAGE LEFT &amp; 5. EMPENNAGE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4. Fuselage Left &amp; Underside</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Canopy, left side &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Rear cabin door &amp; window &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuselage skin &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Antennas &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuselage &mdash; <span class="italic font-medium">check for contamination (hydraulic fluid)</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">5. Empennage (T-Tail)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Stabilizers and control surfaces, elevator tips &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Hinges &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Elevator trim tab &mdash; <span class="italic font-medium">visual inspection, check safetying</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder trim tab &mdash; <span class="italic font-medium">visual inspection, check safetying</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Tie-down &mdash; <span class="italic font-medium">check, clear</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Tail skid and lower fin &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">Static dischargers &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>Verify proper safetying on elevator and rudder trim tab linkages and check control surfaces for freedom of movement without friction.</div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">FUSELAJE Y COLA EN T</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Empenaje en T mostrando las bisagras y alambres de frenado de los compensadores de profundidad y dirección, descargadores de estática y patín de cola inferior (tail skid).
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.10: 4.10 Inspección Exterior VI: Fuselaje Derecho y Tren Principal Derecho -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.10 Inspección Exterior VI: Fuselaje Derecho y Tren Derecho</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">II. Walk-Around &mdash; 6. Fuselage Right &amp; 7. Right Main Gear</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">6. FUSELAGE RIGHT &amp; 7. RIGHT MAIN GEAR</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">6. Fuselage, Right Side</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuselage skin &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Rear window &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Canopy, right side &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">7. Right Main Landing Gear</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Landing gear strut &amp; lock &mdash; <span class="italic font-medium">visual inspection, sufficient height (bare piston: min 4 cm/1.6&quot;)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Down &amp; Uplock switches (3x) &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Wear, tread depth of tire &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Tire, wheel, brake &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Brake line connection &mdash; <span class="italic font-medium">check for leaks</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Slip marks &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">Chocks &mdash; <span class="italic font-medium">remove</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
                <span class="text-slate-800 dark:text-slate-200">Landing gear door &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>⚠️</span>
            <span>CAUTION:</span>
          </strong>
          <div>Check brake hydraulic lines for any signs of leaks and verify that the red slip mark between tire and wheel rim is aligned.</div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">FUSELAJE DERECHO Y TREN PRINCIPAL</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Costado derecho del fuselaje, ventanilla trasera y pata del tren principal derecho comprobando los tres microinterruptores y la línea de líquido de frenos.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.11: 4.11 Inspección Exterior VII: Ala Derecha - Superficie y Tomas -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.11 Inspección Exterior VII: Ala Derecha (Superficie y Tomas)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">II. Walk-Around &mdash; 8. Right Wing (Part 1: a - i)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">8. RIGHT WING &mdash; SURFACE &amp; EQUIPMENT</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Surface &amp; Fuel Tank (a - e)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Entire wing surface &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Tank air outlet on lower surface &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Tank drain / tank air inlet &mdash; <span class="italic font-medium">drain off to check for water and sediment (drain until no water comes out) / visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Openings on lower surface &mdash; <span class="italic font-medium">check for foreign objects and traces of fuel</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Tank filler &mdash; <span class="italic font-medium">visual inspection, check closed</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Pitot, Tip &amp; Lights (f - i)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Pitot probe &mdash; <span class="italic font-medium">clean, orifices clear, cover removed, no deformation</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">Wing tip &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
                <span class="text-slate-800 dark:text-slate-200">Static dischargers &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">i)</span>
                <span class="text-slate-800 dark:text-slate-200">Position light, strobe light (ACL) &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>⚠️</span>
            <span>CAUTION:</span>
          </strong>
          <div>If water or sediment is found in fuel, drain off further samples until clear. If fuel contamination persists, flight is prohibited.</div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">ALA DERECHA Y DEPOSITOS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Superficie del plano derecho mostrando el tapón del depósito, salida y purga de combustible inferior, luces de posición y descargadores estáticos en la punta alar.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.12: 4.12 Inspección Exterior VIII: Ala Derecha - Mandos y Ventilación -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.12 Inspección Exterior VIII: Ala Derecha (Mandos y Ventilación)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">II. Walk-Around &mdash; 8. Right Wing (Part 2: j - r)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">8. RIGHT WING &mdash; CONTROLS &amp; INLETS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Tie-Down &amp; Aileron (j - m)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">j)</span>
                <span class="text-slate-800 dark:text-slate-200">Tie-down &mdash; <span class="italic font-medium">check, clear</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">k)</span>
                <span class="text-slate-800 dark:text-slate-200">Aileron and linkage &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">l)</span>
                <span class="text-slate-800 dark:text-slate-200">Aileron hinges and safety pin &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">m)</span>
                <span class="text-slate-800 dark:text-slate-200">Foreign objects in aileron paddle &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Flap, Cooler &amp; Inlets (n - r)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">n)</span>
                <span class="text-slate-800 dark:text-slate-200">Flap and linkage &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">o)</span>
                <span class="text-slate-800 dark:text-slate-200">Flap hinges and safety pin &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">p)</span>
                <span class="text-slate-800 dark:text-slate-200">Nacelle underside fuel cooler air in- &amp; outlet &mdash; <span class="italic font-medium">check clear</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">q)</span>
                <span class="text-slate-800 dark:text-slate-200">Step &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">r)</span>
                <span class="text-slate-800 dark:text-slate-200">Cabin vent air inlet &mdash; <span class="italic font-medium">check clear</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>⚠️</span>
            <span>CAUTION:</span>
          </strong>
          <div>Verify safety pins on all aileron and flap hinges, check aileron paddle clear of foreign matter, and verify cabin vent and fuel cooler air ducts clear.</div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">MANDOS DE VUELO Y VENTILACIÓN DERECHA</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Plano derecho mostrando la toma de aire de ventilación de cabina en el encastre alar, articulaciones con pasadores en alerón y flap, y peldaño de cabina.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.13: 4.13 Inspección Exterior IX: Góndola Motor Derecho -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.13 Inspección Exterior IX: Góndola Motor Derecho</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">II. Walk-Around &mdash; 9. Right Engine Nacelle (AFM 4A.6.1)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">9. RIGHT ENGINE NACELLE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Engine &amp; Cowling (a - f)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">3 air inlets / 2 air outlets &mdash; <span class="italic font-medium">clear</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Engine oil level &mdash; <span class="italic font-medium">check dipstick (inspection hole in the upper cowling)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Gearbox oil level &mdash; <span class="italic font-medium">check visually (inspection hole in the lower cowling)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Cowling &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Gascolator / air inlet &mdash; <span class="italic font-medium">drain off to check for water and sediment (drain until no water comes out) / clear</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Venting pipe &mdash; <span class="italic font-medium">check for blockage</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Exhaust, Prop &amp; Aux Tank (g - l)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">Exhaust &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
                <span class="text-slate-800 dark:text-slate-200">Propeller &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">i)</span>
                <span class="text-slate-800 dark:text-slate-200">Nacelle underside &mdash; <span class="italic font-medium">check for excessive contamination particularly by oil, fuel, and other fluids</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">j)</span>
                <span class="text-slate-800 dark:text-slate-200">Auxiliary tank vent outlet on lower surface &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">k)</span>
                <span class="text-slate-800 dark:text-slate-200">Auxiliary tank drain &mdash; <span class="italic font-medium">drain off to check for water and sediment (drain until no water comes out) / visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">l)</span>
                <span class="text-slate-800 dark:text-slate-200">Auxiliary tank filler &mdash; <span class="italic font-medium">visual inspection, tank filler closed</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-[18px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <ul class="list-disc pl-6 space-y-1 text-[18px] leading-snug" style="padding-left: 1.5rem;">
            <li>The exhaust can cause burns when hot.</li>
            <li>Never move the propeller by hand while ENGINE MASTER is ON! Also do not move the propeller by hand while ENGINE MASTER is OFF immediately after operation (remaining pressure in rail). Serious injury may result.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">GÓNDOLA MOTOR DERECHO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Góndola del motor derecho, hélice MT-Propeller de 3 palas, orificios de entrada y salida de aire, tubo de escape y comprobación visual de aceite y reductora.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.14: 4.14 Inspección Exterior X: Morro y Tren Delantero -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.14 Inspección Exterior X: Morro y Tren Delantero</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">II. Walk-Around &mdash; 10. Front Fuselage &amp; Nose Gear (AFM 4A.6.1)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">10. FRONT FUSELAGE &amp; NOSE GEAR</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Baggage &amp; Nose Strut (a - e)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Left and right front baggage door &mdash; <span class="italic font-medium">visual inspection, closed &amp; locked</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Nose landing gear strut &mdash; <span class="italic font-medium">visual inspection, sufficient height (bare piston: min 15 cm/5.9&quot;)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Down &amp; Uplock switches &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Wear, tread depth of tire &mdash; <span class="italic font-medium">check</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Slip marks &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Door, Probes &amp; Chocks (f - j)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Gear door and linkage &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">Chocks &mdash; <span class="italic font-medium">remove</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
                <span class="text-slate-800 dark:text-slate-200">OAT sensor &mdash; <span class="italic font-medium">check</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">i)</span>
                <span class="text-slate-800 dark:text-slate-200">EPU connector &mdash; <span class="italic font-medium">check</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">j)</span>
                <span class="text-slate-800 dark:text-slate-200">Tow bar &mdash; <span class="italic font-medium">remove</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs mt-1 shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>⚠️</span>
            <span>CAUTION:</span>
          </strong>
          <div>Ensure both nose baggage doors are locked and keys removed. Visible length of bare piston on nose gear must be at least 15 cm (5.9 in).</div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">MORRO Y TREN DELANTERO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Morro del avión con compuertas de equipaje cerradas con llave, sensor OAT exterior, conector de toma externa EPU y pata del tren delantero verificando vástago mín. 15 cm y barra de remolque retirada.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
};

export const DA42_LESSONS = [DA42_LESSON_1, DA42_LESSON_2, DA42_LESSON_3, DA42_LESSON_4];

