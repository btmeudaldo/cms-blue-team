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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch pt-1" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
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

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
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
            <span><strong>WARNING (AFM):</strong> Ambos motores requieren energía eléctrica continua para operar. Si fallan alternador y batería principal de una barquilla, el motor opera con su batería de reserva FADEC (ECU Backup Battery, mín. 30 minutos). Prestar máxima atención a los avisos L/R ALTN FAIL y LOW VOLTS.</span>
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

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
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
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Gobernador Hidráulico, FADEC y Sistema de Embanderado</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
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

          <!-- Principio de Funcionamiento y Embanderado -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FUNCIONAMIENTO CONSTANT SPEED Y EMBANDERADO (FEATHERING)</strong>
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
              • <strong>Start Locks:</strong> Por debajo de ~1300 RPM en tierra, pestillos centrífugos bloquean las palas en 15° (Start Lock), impidiendo el embanderado en plataforma para facilitar el arranque posterior.
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

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
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

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex flex-col justify-center items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative;">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Mandos y Displays FADEC (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
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

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-900/60 flex flex-col justify-center items-center p-1.5 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img
              src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-g1000-cockpit-1-6.jpg"
              alt="Garmin G1000 EIS (Engine, System, Fuel Display) y Sistema de Alertas CAS Diamond DA42 Twin Star"
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

export const DA42_LESSONS = [DA42_LESSON_1];
