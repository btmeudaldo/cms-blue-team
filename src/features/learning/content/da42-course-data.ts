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
    url: "/manuals/da42/DA42-AFM.pdf",
    badge: "AFM Completo",
  },
  {
    category: "Aviónica Garmin",
    title: "Garmin G1000 Cockpit Reference Guide (DA42)",
    url: "/manuals/da42/Garmin-G1000-DA42-Cockpit-Reference-Guide.pdf",
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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
ay               </div>
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
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

    <div class="lg:col-span-6 flex flex-col">
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
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.15: 4.15 Antes del Arranque de Motores -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.15 Antes del Arranque de Motores (Before Starting Engine)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Cabina Pre-Start: Pasajeros, Mandos y Encendido Eléctrico (AFM 4A.6.2)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.2 BEFORE STARTING ENGINE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Pre-Start (1 - 8)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Pre-flight inspection &mdash; <span class="italic font-medium">complete</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Passengers &mdash; <span class="italic font-medium">instructed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Rear door &mdash; <span class="italic font-medium">closed and locked</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Front canopy &mdash; <span class="italic font-medium">Position 1 or 2 (&ldquo;cooling gap&rdquo;)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder pedals &mdash; <span class="italic font-medium">adjusted and locked</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Safety harnesses &mdash; <span class="italic font-medium">all on and fastened</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">check IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">set</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Electric &amp; Avionics (9 - 15)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">9.</span>
                <span class="text-slate-800 dark:text-slate-200">AVIONIC MASTER &mdash; <span class="italic font-medium">check OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">10.</span>
                <span class="text-slate-800 dark:text-slate-200">GEAR selector &mdash; <span class="italic font-medium">check DOWN</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">11.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP &mdash; <span class="italic font-medium">check AUTOMATIC</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">12.</span>
                <span class="text-slate-800 dark:text-slate-200">ALTERNATORS &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">13.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">14.</span>
                <span class="text-slate-800 dark:text-slate-200">G1000 &mdash; <span class="italic font-medium">wait power-up completed. Press ENT on MFD</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">15.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel temperature &mdash; <span class="italic font-medium">check</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>WARNING:</span>
            </strong>
            <div>If Diesel fuel or blend with Jet A-1 is used (approved only if M&Auml;M 42-037 is carried out), or if fuel grade is unknown, engine must not be started if fuel temperature indication prior to operation is below -5 &deg;C (+23 &deg;F). Operation below -5 &deg;C is not permitted as safe engine operation cannot be ensured and engine can stop.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start shrink-0">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>When operating canopy, ensure no obstructions between canopy and mating frame (seat belts, clothing). Do NOT apply undue force to locking handle. Slight downward pressure may ease handle operation.</li>
              <li>When switching ELECT. MASTER ON, hydraulic gear pump may activate for 5&ndash;20 s. If pump operates continuously or periodically, terminate flight preparation (landing gear malfunction).</li>
            </ul>
          </div>

          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Ensure all passengers have been fully briefed on seat belts, doors and emergency exits and ban on smoking.</li>
              <li>Engine instruments are only available on MFD after G1000 power-up completed and ENT pressed.</li>
              <li>Make sure which fuel grade is used. If not possible to determine, Diesel fuel temperature limitations must be observed.</li>
            </ul>
          </div>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-2 text-center mt-1">
          <div class="w-9 h-9 rounded-xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-lg shadow-xs mb-0.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-0.5">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Cabina de la DA42 en configuración Before Starting Engine: ELECT. MASTER ON, palancas en IDLE y pantallas G1000.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.16: 4.16 Puesta en Marcha: Procedimiento de Arranque Diésel -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.16 Puesta en Marcha: Procedimiento de Arranque Diésel</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Secuencia de Encendido, Calentadores Glow y Parámetros (AFM 4A.6.3)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full min-h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.3 STARTING ENGINE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Ignition Sequence (1 - 5)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Strobe lights (ACL) &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">ON (L / R)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Annunciations &mdash; <span class="italic font-medium">check &ldquo;L/R ENGINE GLOW&rdquo; ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Annunciations / Engine / System Page &mdash; <span class="italic font-medium">check OK / normal range</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">START KEY &mdash; <span class="italic font-medium">START L/R as req. / release when started</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Post-Start &amp; Warm-up (6 - 11)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Annunciations / Engine / System Page &mdash; <span class="italic font-medium">check OK / normal</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Annunciations / Starter &mdash; <span class="italic font-medium">check OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">Annunciations / Oil pressure &mdash; <span class="italic font-medium">check OK</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">9.</span>
                <span class="text-slate-800 dark:text-slate-200">Circuit breakers &mdash; <span class="italic font-medium">check all in / as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">10.</span>
                <span class="text-slate-800 dark:text-slate-200">Idle RPM &mdash; <span class="italic font-medium">check, 900 &plusmn;20 RPM</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">11.</span>
                <span class="text-slate-800 dark:text-slate-200">Warm up &mdash; <span class="italic font-medium">IDLE 2 min / thereafter 1400 RPM</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>WARNING:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Before starting engine pilot must ensure propeller area is free, and no persons can be endangered.</li>
              <li>If oil pressure has not moved from red range within 3 seconds after starting, set ENGINE MASTER switch to OFF and investigate. When starting cold engine, oil pressure can reach 6.5 bar for max 20 seconds.</li>
            </ul>
          </div>

          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Do not overheat starter motor. Do not operate starter for more than 10 seconds. Let it cool off 20 seconds. After 6 attempts, let starter cool for half an hour.</li>
              <li>If &ldquo;L/R STARTER&rdquo; annunciation does not extinguish after engine started and START KEY released, set ENGINE MASTER to OFF and investigate.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full min-h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div class="space-y-1 flex flex-col justify-start shrink-0">
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>It is recommended to start the LH engine (pilot side) first. If required by operational reasons, the RH engine can also be started first. Repeat starting procedure with opposite engine.</div>
          </div>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-3 text-center mt-1">
          <div class="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs mb-1">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-0.5">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Panel de encendido de motores: llaves START KEY, interruptores ENGINE MASTER y aviso L/R ENGINE GLOW en PFD.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.17: 4.17 Antes del Rodaje y Rodaje -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.17 Antes del Rodaje y Rodaje (Before Taxiing &amp; Taxiing)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aviónica, Calefacción Pitot, Luces, Frenos y Crossfeed (AFM 4A.6.4 &amp; 4A.6.5)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full min-h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.4 BEFORE TAXIING &amp; 4A.6.5 TAXIING</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.6.4 Before Taxiing (1 - 8)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">AVIONIC MASTER &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Electrical equipment &mdash; <span class="italic font-medium">ON as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Flight instruments and avionics &mdash; <span class="italic font-medium">set as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Flood light &mdash; <span class="italic font-medium">ON, test function, as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Pitot and stall warn heating &mdash; <span class="italic font-medium">ON, check annunc.</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Pitot and stall warn heating &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Strobe lights (ACL's) &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">Position lights, landing and taxi lights &mdash; <span class="italic font-medium">as req.</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.6.5 Taxiing (1 - 6)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">release</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Brakes &mdash; <span class="italic font-medium">test on moving off</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Nose wheel steering &mdash; <span class="italic font-medium">check for proper function</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Flight instrumentation / avionics &mdash; <span class="italic font-medium">check indications</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR &mdash; <span class="italic font-medium">CROSSFEED (LH/RH)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR &mdash; <span class="italic font-medium">ON (LH/RH)</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>When taxiing at close range to other aircraft, or night flight in clouds, fog or haze, strobes should be OFF. Position lights must always be ON at night.</li>
              <li>Fuel crossfeed can be tested running engines ~30 s in crossfeed. Operation of both engines in crossfeed, other than for this test, is prohibited.</li>
              <li>When taxiing on poor surface select lowest possible RPM to avoid damage to propeller from stones or similar items.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full min-h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">RODAJE Y MANDOS DE VUELO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Vista de rodaje en pista de rodadura: verificación de frenos diferenciales y rueda de morro orientable, interruptores de luces exteriores en el panel y selectores de combustible en la consola central.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.18: 4.18 Antes del Despegue I: Cabina y Mandos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.18 Antes del Despegue I: Cabina y Mandos (Before Take-Off)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Puertas, Cúpula, Avisadores, Compensadores y Mandos Libres (AFM 4A.6.6)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.6 BEFORE TAKE-OFF &mdash; CABIN &amp; CONTROLS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Cabin &amp; Doors (1 - 7)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Position airplane into wind if possible</span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">set</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Safety harnesses &mdash; <span class="italic font-medium">on and fastened</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Rear door &mdash; <span class="italic font-medium">check closed and locked</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Front canopy &mdash; <span class="italic font-medium">closed and locked</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Front baggage doors &mdash; <span class="italic font-medium">closed (visual check)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Door warning (DOOR) &mdash; <span class="italic font-medium">check no indication</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Trims &amp; Controls (8 - 14)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">Annunciations / Engine / System &mdash; <span class="italic font-medium">check OK / normal</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">9.</span>
                <span class="text-slate-800 dark:text-slate-200">Circuit breakers &mdash; <span class="italic font-medium">check pressed in</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">10.</span>
                <span class="text-slate-800 dark:text-slate-200">Longitudinal Trim &mdash; <span class="italic font-medium">set T/O</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">11.</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR &mdash; <span class="italic font-medium">check ON (LH/RH)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">12.</span>
                <span class="text-slate-800 dark:text-slate-200">Directional Trim &mdash; <span class="italic font-medium">neutral</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">13.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">check function &amp; indicator / set UP</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">14.</span>
                <span class="text-slate-800 dark:text-slate-200">Flight controls &mdash; <span class="italic font-medium">unrestricted free mov., correct</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>When operating canopy, pilots/operators must ensure that there are no obstructions between canopy and mating frame (seat belts, clothing, etc.). When operating locking handle do NOT apply undue force. Slight downward pressure may ease handle operation.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">CONFIGURACIÓN DE CABINA Y MANDOS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Consola central con compensadores de profundidad (T/O) y dirección (Neutral), palanca de flaps en posición UP y palancas de mando verificando recorrido libre y correcto sentido de deflexión.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.19: 4.19 Antes del Despegue II: Autoprueba FADEC -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.19 Antes del Despegue II: Autoprueba FADEC (ECU Test)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Secuencia Completa FADEC Test y ECU Swap (AFM 4A.6.6)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full min-h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.6 FADEC TEST SEQUENCE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Test Phase 1 (1 - 8)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU TEST BUTTON &mdash; <span class="italic font-medium">press and hold</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU A/B FAIL LIGHTS &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Propeller RPM &mdash; <span class="italic font-medium">increase</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU A/B FAIL LIGHTS &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU B FAIL LIGHT &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Propeller RPM &mdash; <span class="italic font-medium">decrease / increase</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU B FAIL LIGHT &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Test Phase 2 (9 - 16)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">9.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU A FAIL LIGHT &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">10.</span>
                <span class="text-slate-800 dark:text-slate-200">Propeller RPM &mdash; <span class="italic font-medium">decrease / increase</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">11.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU A FAIL LIGHT &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">12.</span>
                <span class="text-slate-800 dark:text-slate-200">Propeller RPM &mdash; <span class="italic font-medium">decrease to idle</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">13.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU TEST BUTTON &mdash; <span class="italic font-medium">release</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">14.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP &mdash; <span class="italic font-medium">ECU B</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">15.</span>
                <span class="text-slate-800 dark:text-slate-200">Engine &mdash; <span class="italic font-medium">check running without change</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">16.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP &mdash; <span class="italic font-medium">AUTOMATIC</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>If &ldquo;L/R ECU A/B FAIL&rdquo; do not illuminate and extinguish during test sequence, there is a malfunction in engine control system. Terminate flight preparation. Procedure must be completed without error.</li>
              <li>When switching ECUs slight shake may occur. In case of longer dropouts or if engine stops, terminate flight preparation. Running with ECU SWAP on ECU B prohibited except test/emergency.</li>
            </ul>
          </div>

          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>The test sequence can be executed for both engines simultaneously, or in sequence. When switching from one ECU to the other a slight shake of the engine may occur. System redundancy is only given with ECU SWAP on AUTO.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full min-h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-3 text-center">
          <div class="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs mb-1">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-0.5">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Pulsador ECU TEST en consola izquierda inferior y luces anunciadoras ECU A / ECU B FAIL durante los ciclos automáticos de autoprueba FADEC.
          </p>
        </div>
      </div>
    </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-3 text-center mt-1">
          <div class="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs mb-1">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-0.5">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Pulsador ECU TEST en consola izquierda inferior y luces anunciadoras ECU A / ECU B FAIL durante los ciclos automáticos de autoprueba FADEC.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.20: 4.20 Antes del Despegue III: Prueba de Potencia Disponible -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.20 Antes del Despegue III: Potencia Disponible (Run-Up)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Chequeo a Plena Potencia, Carga LOAD y Rango de RPM (AFM 4A.6.6)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.6 AVAILABLE POWER CHECK</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Full Power Check (1 - 5)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Pitot heating &mdash; <span class="italic font-medium">ON, if required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing light &mdash; <span class="italic font-medium">ON, if required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">MAX for 10 seconds</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Annunciations &mdash; <span class="italic font-medium">check OK / normal range</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Instruments &mdash; <span class="italic font-medium">check within normal range</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Target Limits (6 - 9)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">RPM &mdash; <span class="italic font-medium">stabilizes at 2240 to 2300 RPM</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">LOAD indication &mdash; <span class="italic font-medium">stabilizes at 90 to 100 %</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">9.</span>
                <span class="text-slate-800 dark:text-slate-200">Engine instruments &mdash; <span class="italic font-medium">check in green range</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Under high temperature and high altitude conditions, load indications below 90 % are possible. If the engine does not stabilize at the target RPM of 2240 to 2300 RPM terminate flight preparation.</div>
          </div>

          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>WARNING:</span>
            </strong>
            <div>If the airplane is operated with Diesel fuel or a blend of Diesel fuel with JET A-1 (only approved if M&Auml;M 42-037 is carried out), or if the fuel grade is unknown, the fuel temperature must be in the green range before take-off.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">POTENCIA Y PARÁMETROS DE MOTOR</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Pantalla EIS del G1000 durante la prueba a plena potencia MAX: indicadores de RPM estabilizadas en 2240-2300 RPM y carga de motor LOAD entre 90% y 100% con todos los parámetros en arco verde.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.21: 4.21 Velocidades Operativas de Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.21 Velocidades Operativas de Vuelo (Airspeeds)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Velocidades Normales de Operaci&oacute;n por Masa de Vuelo (AFM 4A.2)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.2 AIRSPEEDS FOR NORMAL OPERATING PROCEDURES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Take-Off &amp; Climb (Flaps UP)</strong>
              <div lang="en" class="flex items-start justify-between gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">Rotation (vR):</span>
                <span class="text-slate-800 dark:text-slate-200 font-medium">70 / 72 KIAS</span>
              </div>
              <div lang="en" class="flex items-start justify-between gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">Take-off climb (vY):</span>
                <span class="text-slate-800 dark:text-slate-200 font-medium">77 / 79 KIAS</span>
              </div>
              <div lang="en" class="flex items-start justify-between gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">Best angle (vX):</span>
                <span class="text-slate-800 dark:text-slate-200 font-medium">77 / 79 KIAS</span>
              </div>
              <div lang="en" class="flex items-start justify-between gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">Cruise climb:</span>
                <span class="text-slate-800 dark:text-slate-200 font-medium">85 / 86 KIAS</span>
              </div>
              <div lang="en" class="flex items-start justify-between gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">Max structural (vNO):</span>
                <span class="text-slate-800 dark:text-slate-200 font-medium">155 KIAS</span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Approach &amp; Landing</strong>
              <div lang="en" class="flex items-start justify-between gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">Ref. Approach (UP):</span>
                <span class="text-slate-800 dark:text-slate-200 font-medium">85 / 86 KIAS</span>
              </div>
              <div lang="en" class="flex items-start justify-between gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">Ref. Approach (APP):</span>
                <span class="text-slate-800 dark:text-slate-200 font-medium">82 / 82 KIAS</span>
              </div>
              <div lang="en" class="flex items-start justify-between gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">Final Approach (LDG):</span>
                <span class="text-slate-800 dark:text-slate-200 font-medium">76 / 78 KIAS</span>
              </div>
              <div lang="en" class="flex items-start justify-between gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">Go-Around min. (UP):</span>
                <span class="text-slate-800 dark:text-slate-200 font-medium">82 / 82 KIAS</span>
              </div>
              <div class="text-[18px] text-[#6A7686] dark:text-slate-400 italic pt-0.5">
                (Format: up to 1700 kg / above 1700 kg)
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0">
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM NOTES:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>vx is always less than vy. For the DA 42 however, the actual value of vx would be below the minimum safe speed. The minimum airspeed for best angle of climb was therefore raised to the value of vy (77 / 79 KIAS).</li>
              <li>If M&Auml;M 42-088 is carried out, a landing with a mass between 1700 kg (3748 lb) and 1785 kg (3935 lb) is admissible. It constitutes an abnormal operating procedure. A &ldquo;Hard Landing Check&rdquo; is only required after a hard landing, regardless of actual landing mass.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">ANEMÓMETRO Y VELOCIDADES</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Cinta de velocidades del PFD (anemómetro digital) mostrando marcadores de referencia (vR 70/72, vY 77/79, vX 77/79, vAPP 82, vREF 76/78 y vNO 155 KIAS) con los arcos blanco, verde y amarillo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.22: 4.22 Despegue y Ascenso -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.22 Despegue y Ascenso (Take-Off &amp; Climb)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Carrera de Despegue, Retracción de Tren y Régimen de Ascenso (AFM 4A.6.7 &amp; 4A.6.8)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full min-h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.7 TAKE-OFF &amp; 4A.6.8 CLIMB</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.6.7 Take-Off (1 - 7)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Transponder &mdash; <span class="italic font-medium">as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">MAX</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Elevator &mdash; <span class="italic font-medium">neutral</span> / Rudder &mdash; <span class="italic font-medium">maintain dir.</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Lift-off: <span class="italic font-medium">vR min. 70 / 72 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Initial climb: <span class="italic font-medium">min. 77 / 79 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Clear obstacles: <span class="italic font-medium">rec. 82 KIAS (vySE)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">LANDING GEAR &mdash; <span class="italic font-medium">apply brakes; UP</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.6.8 Climb (1 - 7)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing light &mdash; <span class="italic font-medium">OFF / as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing Gear &mdash; <span class="italic font-medium">check UP</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">check UP</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed: <span class="italic font-medium">77/79 KIAS (vY) or 85/86 (cruise)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">MAX</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Trim &mdash; <span class="italic font-medium">as required (ball centered)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Annunciations / Engine Page &mdash; <span class="italic font-medium">monitor</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>If oil temperature and/or coolant temperature reaches yellow range during climb, flight should be continued with airspeed increased by 10 kts and power reduced by 10 % (reduced climb rate) for better engine cooling.</div>
          </div>

          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Check proper and symmetric performance of engines at MAX early during take-off run; abort if necessary.</li>
              <li>In strong crosswinds steering can be augmented with toe brakes (increases take-off roll, not generally used).</li>
              <li>To avoid damage and wear of main landing gear wheels, firmly apply brakes before selecting gear UP.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full min-h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-3 text-center">
          <div class="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs mb-1">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-0.5">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Despegue de la DA42 en rotaci&oacute;n y ascenso inicial: tren de aterrizaje retrayéndose, velocidad vySE (82 KIAS) y palancas de potencia al 100%.
          </p>
        </div>
      </div>
    </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-3 text-center mt-1">
          <div class="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs mb-1">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-0.5">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Despegue de la DA42 en rotaci&oacute;n y ascenso inicial: tren de aterrizaje retrayéndose, velocidad vySE (82 KIAS) y palancas de potencia al 100%.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.23: 4.23 Vuelo de Crucero y Gestión de Combustible -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.23 Vuelo de Crucero y Gestión de Combustible</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Ajuste de Potencia (70%), Compensaci&oacute;n y Dep&oacute;sitos Auxiliares (AFM 4A.6.9)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.9 CRUISE &amp; AUXILIARY FUEL TRANSFER</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.6.9 Cruise Checklist</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">performance as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Trim &mdash; <span class="italic font-medium">as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Annunciations / Engine / System Page &mdash; <span class="italic font-medium">monitor</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Aux Fuel Tanks (O&Auml;M 42-056)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">When main fuel &le;17 US gal &mdash; <span class="italic font-medium">both TRANSFER ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Transfer rate &mdash; <span class="italic font-medium">~1 US gal/min until full</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Repeat for second half &mdash; <span class="italic font-medium">as required</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>When operating FUEL TRANSFER LH/RH switch, make sure not to exceed fuel imbalance limitations (Section 2.14). To avoid additional imbalance in auxiliary tanks both switches must be operated simultaneously.</div>
          </div>

          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>The engine manufacturer recommends a cruise power setting of 70 %.</li>
              <li>Transfer fuel from auxiliary tanks to main tanks as soon as possible. Fuel in auxiliary tanks must be transferred to main tanks to become available for current flight mission.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">CRUCERO Y SISTEMA DE COMBUSTIBLE</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Diagrama esquemático del sistema de combustible de la DA42 en crucero: dep&oacute;sitos principales (26 US gal c/u) y auxiliares (13 US gal c/u), interruptores FUEL TRANSFER y bomba de trasvase.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.24: 4.24 Descenso, Aproximación y Aterrizaje -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.24 Descenso y Aproximación (Descent &amp; Landing)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Descenso, 3 Verdes del Tren, Flaps y Aproximación Final (AFM 4A.6.10 &amp; 4A.6.11)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.10 DESCENT &amp; 4A.6.11 APPROACH &amp; LANDING</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Descent &amp; Approach (1 - 6)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER / Airspeed / Trim &mdash; <span class="italic font-medium">as req.</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Annunciations / Engine Page &mdash; <span class="italic font-medium">monitor</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Safety harnesses &mdash; <span class="italic font-medium">fastened &amp; tightened</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Controls &mdash; <span class="italic font-medium">no foreign object interference</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing light &mdash; <span class="italic font-medium">as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Gear warning horn &mdash; <span class="italic font-medium">check function</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Gear &amp; Landing (7 - 13)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Selector &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">LANDING GEAR &mdash; <span class="italic font-medium">DOWN, check 3 green</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">9.</span>
                <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">check released</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">10.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">min. 82 (APP) / 85 (UP)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">11.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">as req.</span> / Trim &mdash; <span class="italic font-medium">dir. neutral</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">12.</span>
                <span class="text-slate-800 dark:text-slate-200">Final Approach &mdash; <span class="italic font-medium">min. 76 KIAS (LDG)</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>In conditions such as strong wind, danger of wind shear or turbulence a higher approach speed should be selected.</div>
          </div>

          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>If landing mass exceeds 1700 kg (3748 lb), landing constitutes abnormal operating procedure (Section 4B.8).</li>
              <li>Higher approach speeds result in significantly longer landing distance during flare.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">APROXIMACIÓN Y ATERRIZAJE</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Panel de instrumentos en aproximaci&oacute;n final: selector de tren DOWN con tres luces verdes iluminadas, flaps en posición LDG y veloc&iacute;metro indicando 76 KIAS estabilizado.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.25: 4.25 Maniobra de Escape: Motor y al Aire -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.25 Maniobra de Escape: Motor y al Aire (Go-Around)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Potencia MAX, Velocidad Mínima 82 KIAS, Flaps APP y Tren UP (AFM 4A.6.12)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.12 GO-AROUND CHECKLIST</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Initial Action (1 - 3)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium font-bold text-[#0B2E59] dark:text-sky-300">MAX</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium font-bold text-[#0B2E59] dark:text-sky-300">min. 82 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">position APP</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Positive Rate (4 - 5)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing Gear &mdash; <span class="italic font-medium">UP, check unsafe light off</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">retract, position UP</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM NOTE &mdash; PROCEDIMIENTO SEGURO:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Potencia MAX simultánea en ambas palancas sin vacilación.</li>
              <li>Adoptar actitud de ascenso asegurando como mínimo 82 KIAS (vySE).</li>
              <li>Retraer flaps inmediatamente a APP para reducir resistencia de perfil manteniéndose sustentación.</li>
              <li>Con régimen de ascenso positivo confirmado: tren arriba (UP) y posteriormente flaps a posición UP.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">MANIOBRA DE MOTOR Y AL AIRE</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            DA42 ejecutando frustrada (Go-Around): actitud positiva de morro, palancas de potencia al 100%, tren retrayéndose y flaps en posición APP a velocidad de seguridad.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.26: 4.26 Tras el Aterrizaje, Parada de Motores y Post-Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.26 Tras el Aterrizaje y Parada (Shut-Down &amp; Post-Flight)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Desalojo, Refrigeración Turbo (2 min IDLE), Corte Eléctrico y Parking (AFM 4A.6.13-17)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.13 AFTER LANDING &amp; 4A.6.14 SHUT-DOWN</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.6.13 After Landing (1 - 7)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Brakes &mdash; <span class="italic font-medium">as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Transponder &mdash; <span class="italic font-medium">OFF / STBY</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Pitot heating &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Avionics &amp; Lights &mdash; <span class="italic font-medium">as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">UP</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Exit area &mdash; <span class="italic font-medium">inner wing designated areas</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.6.14 Shut-Down (1 - 9)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">set</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium font-bold text-[#0B2E59] dark:text-sky-300">IDLE for 2 minutes</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ELT &mdash; <span class="italic font-medium">check not transmitting (121.5)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">AVIONIC MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Electrical consumers &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">OFF (L &amp; R)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Before shut-down the engine must run for at least 2 minutes with power lever at IDLE to avoid heat damage of the turbo charger.</li>
              <li>Do not shut down an engine with the fuel selector valve. The high pressure fuel pump can otherwise be damaged.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">PARADA Y POST-VUELO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Avión estacionado tras parada: calzos colocados, fundas de tubo Pitot instaladas, palancas de mando bloqueadas y libro de vuelo completado en la inspección post-vuelo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.27: 4.27 Procedimientos Especiales del AFM -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.27 Procedimientos Especiales del AFM (Special Procedures)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Vuelo con Lluvia, Repostaje (Toma de Tierra) y Gran Altitud (AFM 4A.6.18-20)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4A.6.18 TO 4A.6.20 SPECIAL PROCEDURES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Rain &amp; High Altitude</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>Flight in Rain:</strong> Performance deteriorates (take-off distance &amp; max speed)</span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Very heavy rain: <span class="italic font-medium">avoid due to visibility</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200"><strong>High Altitude:</strong> Oxygen provision mandatory as per regulations</span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Operating ceiling: <span class="italic font-medium">18,000 ft (FL180)</span></span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Refueling &amp; Aux Tanks</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Ground connection: <span class="italic font-medium">unpainted step areas L/R</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Aux tanks filling: <span class="italic font-medium">both to MAX level or empty</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Diesel with Aux tanks: <span class="italic font-medium">NOT permitted</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Approved fuels: <span class="italic font-medium">JET A-1 / JET-A / Diesel</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Before refueling, airplane must be connected to electrical ground at unpainted areas on steps, LH and RH.</li>
              <li>If auxiliary tanks are used, both must be refueled to max level. If not in use, ensure empty.</li>
              <li>If airplane is operated with Diesel fuel or blend, use of auxiliary tanks is not permitted.</li>
            </ul>
          </div>

          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Performance deteriorates in rain (particularly take-off distance and maximum horizontal speed). Effect on flight characteristics is minimal.</li>
              <li>If operated with Diesel fuel, temperature limitations apply. When switching to JET A-1 ensure no Diesel remains in either tank.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">REPOSTAJE Y PROCEDIMIENTOS ESPECIALES</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Punto de toma de tierra sin pintura en los estribos del fuselaje, bocas de llenado de combustible principal y auxiliar en plano superior y sistema de oxígeno para vuelo a alta cota.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
};

export const DA42_LESSON_5 = {
  id: "da420000-0000-0000-0000-000000000050",
  course_id: DA42_COURSE_ID,
  title: "5. Procedimientos de Emergencia y Casos Anómalos",
  slug: "procedimientos-emergencia-da42",
  sequence_order: 5,
  lesson_order: 5,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 5.1: 5.1 Generalidades y Velocidades de Emergencia -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.1 Generalidades y Velocidades de Emergencia (General & Airspeeds in Emergencies)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Regla de Oro, Velocidades Críticas y Frecuencia 121.5 (AFM 3.1)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.1.2 & 3.2.1 AIRSPEEDS & WARNING DEFINITIONS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.1.2 Critical Airspeeds</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">vMCA (One engine inop. min. control speed) &mdash; <span class="italic font-medium">68 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">vYSE (One engine inop. best rate of climb) &mdash; <span class="italic font-medium">82 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency frequency (COM transfer &gt; 2 s) &mdash; <span class="italic font-medium">121.500 MHz</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.2.1 G1000 Warnings / General</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Warning definition &mdash; <span class="italic font-medium">leads to immediate/important degradation in safety</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Visual annunciation &mdash; <span class="italic font-medium">displayed in RED color on G1000 PFD</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Aural warning chime &mdash; <span class="italic font-medium">1.5 s repeating tone until acknowledged</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.1.1 PRIORITY IN EMERGENCIES:</span>
            </strong>
            <div>In each emergency, control over the flight attitude and the preparation of a possible emergency landing have priority over attempts to solve the current problem (&ldquo;first fly the aircraft&rdquo;). Prior to the flight the pilot must consider the suitability of the terrain for an emergency landing for each phase of the flight. For a safe flight the pilot must constantly keep a safe minimum flight altitude. Solutions for various adverse scenarios should be thought over in advance. This should prevent a situation where the pilot is faced with an emergency he cannot handle calmly and with determination.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">VELOCIDADES CRÍTICAS</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Panel de instrumentos G1000 mostrando velocímetro con marca radial azul vYSE (82 KIAS), línea roja vMCA (68 KIAS) y botón COM transfer para sintonía rápida de frecuencia de socorro 121.500 MHz.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.2: 5.2 Avisos Rojos G1000: Temperatura de Motor y Aceite -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.2 Avisos Rojos G1000: Temperatura de Motor y Aceite (Engine & Oil Temperature Warnings)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Sobretemperatura de Refrigerante y Aceite Motor (AFM 3.2.2, 3.2.3 & 4B.3)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4B.3.2 & 4B.3.3 HIGH ENGINE TEMPERATURES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4B.3.2 High Coolant Temp (> 105 &deg;C)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">G1000 L/R COOL LVL caution &mdash; <span class="italic font-medium">check display</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Power affected engine (climb) &mdash; <span class="italic font-medium">reduce by 10 % or more</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed (climb) &mdash; <span class="italic font-medium">increase 10 KIAS or more</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Coolant temp in 60 s &mdash; <span class="italic font-medium">check green range</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Power affected engine (cruise) &mdash; <span class="italic font-medium">reduce</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed (cruise) &mdash; <span class="italic font-medium">increase</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4B.3.3 High Oil Temp (> 140 &deg;C)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">G1000 L/R OIL PRES warning &mdash; <span class="italic font-medium">check display</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Power affected engine &mdash; <span class="italic font-medium">reduce</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">increase</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Oil temp &mdash; <span class="italic font-medium">check returns to green</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Oil pressure &mdash; <span class="italic font-medium">monitor continuously</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Precautionary landing &mdash; <span class="italic font-medium">if temp stays in red</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.2.2 & 3.2.3 LIMIT VALUES:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Coolant temperatures above the limit value of 105 &deg;C can lead to a total loss of power due to engine failure.</li>
              <li>Oil temperatures above the limit value of 140 &deg;C can lead to a total loss of power due to engine failure.</li>
              <li>If temperature does not return to green range, perform a precautionary landing on the nearest suitable airfield. Prepare for engine failure in accordance with 3.5.6.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">GESTIÓN TÉRMICA MOTOR</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Pantalla MFD del G1000 mostrando franjas de aviso rojo para temperatura de refrigerante (>105 °C) y aceite (>140 °C), con indicación de reducción de potencia para refrigeración en vuelo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.3: 5.3 Avisos Rojos G1000: Presión de Aceite y Reductora -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.3 Avisos Rojos G1000: Presión de Aceite y Reductora (Oil Pressure & Gearbox Temperature)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Baja Presión de Aceite y Sobretemperatura en Transmisión (AFM 3.2.4, 3.2.5 & 4B.3)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4B.3.4 & 4B.3.5 OIL PRESSURE & GEARBOX</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4B.3.4 Low Oil Pres (< 1 bar)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Power affected engine &mdash; <span class="italic font-medium">reduce</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Loss of oil &mdash; <span class="italic font-medium">expect</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Precautionary landing &mdash; <span class="italic font-medium">nearest suitable airfield</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Engine failure &mdash; <span class="italic font-medium">prepare (AFM 3.5.6)</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4B.3.4 High Oil / 4B.3.5 Gearbox</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Oil & coolant temp &mdash; <span class="italic font-medium">check green range</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">If outside green &mdash; <span class="italic font-medium">reduce power affected engine</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Gearbox temp (> 120 &deg;C) &mdash; <span class="italic font-medium">reduce power, increase airspeed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Gearbox in 60 s &mdash; <span class="italic font-medium">check green; if red, land nearest</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.2.4 & 3.2.5 EMERGENCY WARNINGS:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Oil pressures below the limit value of 1 bar can lead to a total loss of power due to engine failure. Land at nearest suitable airfield. Prepare for engine failure in accordance with 3.5.6.</li>
              <li>Gearbox temperatures above the limit value of 120 &deg;C can lead to total loss of power due to engine failure. Reduce power and increase airspeed immediately.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 4B.3.4 & 4B.3.5 COLD START & CONDITIONS:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>When starting a cold engine, the oil pressure can be as high as 6.5 bar for a maximum of 20 seconds.</li>
              <li>At high ambient temperature conditions and / or at low airspeeds with high power settings, monitor gearbox temperature closely.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">LUBRICACIÓN Y CAJA REDUCTORA</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Avisador L OIL PRES y L GBOX TEMP iluminados en rojo en el PFD del G1000, indicando pérdida inminente de lubricación o sobrecalentamiento crítico de la reductora de la hélice.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.4: 5.4 Avisos Rojos G1000: Combustible, Alternador y Arranque -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.4 Avisos Rojos G1000: Combustible, Alternador y Arranque (Fuel Temp, Alternator & Starter Warnings)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Temperatura Combustible, Amperaje y Relé de Arranque Pegado (AFM 3.2.6, 3.2.7 & 3.7.2)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.2.6, 3.7.2 & 3.7.3 ELECTRICAL & FUEL PROCEDURES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.2.6 Fuel Temp & 3.7.2 High Current</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel auxiliary pump &mdash; <span class="italic font-medium">check OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Opposite tank &mdash; <span class="italic font-medium">select via crossfeed if required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">increase for cooling</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Circuit breakers &mdash; <span class="italic font-medium">check all in</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Electric load &mdash; <span class="italic font-medium">reduce to minimum required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Airfield &mdash; <span class="italic font-medium">land on nearest suitable</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.7.3 Starter Malfunction</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Starter engaged warning &mdash; <span class="italic font-medium">check illuminated</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever affected engine &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER affected engine &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Flight preparation &mdash; <span class="italic font-medium">terminate immediately!</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.2.6 FUEL TEMPERATURE LIMITATION:</span>
            </strong>
            <div>Fuel temperatures above the limit value of 75 &deg;C (or 60 &deg;C depending on fuel grade) can lead to vapor locks and engine stop.</div>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.7.2 & 3.7.3 HAZARDS:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>L/R ALTN AMPS indicates alternator load above 60 A (70 A). Reduce electrical consumers to prevent battery drain and alternator overload.</li>
              <li>If STARTER warning remains on after engine start, starter motor is permanently engaged and will overheat rapidly. Set ENGINE MASTER to OFF immediately.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">AVISADORES ROJOS G1000</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Indicador G1000 mostrando alertas de advertencia rojas en el CAS: L FUEL TEMP, R ALTN AMPS y L STARTER, con esquema de flujo de combustible cruzado y desconexión eléctrica.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.5: 5.5 Fallos de Pantallas G1000 y Sensores (Red X) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.5 Fallos de Pantallas G1000 y Sensores (Red X) (G1000 Screen & Sensor Failures)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Modo Reversión, Pérdida de AHRS y Fallo de Air Data Computer (AFM 3.3 & 3.4)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.3 & 3.4 G1000 SYSTEM WARNINGS & REVERSION</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.4.2 Display Failure & 3.3.2 POSN</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">DISPLAY BACKUP button (audio panel) &mdash; <span class="italic font-medium">push to force reversionary mode</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">POSN ERROR &mdash; <span class="italic font-medium">revert to VOR / ILS receivers</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Engine & flight instruments &mdash; <span class="italic font-medium">verify on remaining display</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">COM & NAV frequencies &mdash; <span class="italic font-medium">crosscheck</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.3.3 - 3.3.6 Sensor Failures (Red X)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">ATTITUDE FAIL (Red X) &mdash; <span class="italic font-medium">fly by Standby Attitude Indicator</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">AIRSPEED FAIL (Red X) &mdash; <span class="italic font-medium">fly by Standby Airspeed Indicator</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ALTITUDE FAIL (Red X) &mdash; <span class="italic font-medium">use Standby Altimeter</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">VERT SPEED FAIL (Red X) &mdash; <span class="italic font-medium">monitor altimeter rate of change</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM 3.4 REVERSIONARY CAPABILITY:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>In the event of a display failure, the system automatically attempts to switch to Reversionary Mode. If this does not occur automatically, the pilot must press the red DISPLAY BACKUP button on the GMA 1347 audio panel.</li>
              <li>During AHRS failure, GPS course may provide track information on the HSI, but attitude must be flown exclusively using the standby horizon.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM 3.3.1 RED X ANNUNCIATION:</span>
            </strong>
            <div>A red X through any display field, such as COM/NAV frequencies or engine data, indicates that the display field is not receiving valid data from the corresponding sensor or LRU.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">INSTRUMENTOS DE RESERVA</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Instrumentos analógicos de reserva (Standby Horizon, ASI y Altimeter) en la parte superior del panel de la DA42, activos tras la aparición de Red X en el PFD del G1000.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.6: 5.6 Identificación y Diagnóstico del Motor Fallido -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.6 Identificación y Diagnóstico del Motor Fallido (Detecting & Engine Troubleshooting)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Regla del Pie Muerto y Resolución de Fallo en Vuelo (AFM 3.5.1 & 3.5.2)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.5.1 & 3.5.2 ONE ENGINE INOPERATIVE IDENTIFICATION</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.5.1 Detecting Inoperative Engine</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder pedal force &mdash; <span class="italic font-medium">identify idle foot (&ldquo;dead foot, dead engine&rdquo;)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Control column &mdash; <span class="italic font-medium">hold wings level, ball 1/2 out</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Engine parameters &mdash; <span class="italic font-medium">check RPM, load, fuel flow on MFD</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">maintain min. 82 KIAS (vYSE)</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.5.2 Engine Troubleshooting</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever affected engine &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Alternate air (if in icing) &mdash; <span class="italic font-medium">OPEN / ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel quantity &amp; Selector &mdash; <span class="italic font-medium">check ON / CROSSFEED if required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP &mdash; <span class="italic font-medium">ECU B (land nearest if restored)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Circuit breakers &mdash; <span class="italic font-medium">check / reset if necessary</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">If power not restored &mdash; <span class="italic font-medium">switch back to AUTO, prepare 3.5.6 &amp; 3.5.3</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.5.1 & 3.5.2 RULES:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Never rush into shutting down an engine without positive identification. Dead foot = dead engine (the leg that does not need to push rudder corresponds to the failed engine).</li>
              <li>If engine troubleshooting does not restore power within a few seconds, or if heavy vibration occurs, proceed immediately with the Engine Securing Procedure.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">DIAGNÓSTICO MONOMOTOR</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Piloto aplicando timón para contrarrestar la guiñada asimétrica tras fallo de motor, manteniendo 82 KIAS con la bola desplazada media anchura hacia el motor operativo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.7: 5.7 Embanderado de Motor de Emergencia -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.7 Embanderado de Motor de Emergencia (Engine Securing (Feathering) Procedure)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Secuencia Rápida de Corte y Puesta en Bandera de Hélice (AFM 3.5.3)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.5.3 ENGINE SECURING (FEATHERING) PROCEDURE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Shut Down & Feathering (1 - 2)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Inoperative engine &mdash; <span class="italic font-medium">identify &amp; verify</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER inop engine &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Propeller condition &mdash; <span class="italic font-medium">check propeller feathered!</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">If prop does not feather &mdash; <span class="italic font-medium">continue according to 3.5.6</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Securing Feathered Engine (3 - 4)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Alternator inoperative engine &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel selector inoperative engine &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Operative fuel selector &mdash; <span class="italic font-medium">CROSSFEED to use failed engine fuel</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Gear warning horn &mdash; <span class="italic font-medium">set power lever forward as required to mute</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.5.3 FUEL SELECTOR SHUTDOWN HAZARD:</span>
            </strong>
            <div>Do not shut down an engine with the fuel selector valve. The high pressure fuel pump can otherwise be damaged.</div>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.5.3 CRITICAL RPM FOR FEATHERING:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>If ENGINE MASTER is switched OFF at a propeller RPM below 950 RPM, the centrifugal start lock pins can prevent the propeller from feathering. This results in heavy residual propeller drag.</li>
              <li>Do not feather an engine during takeoff or climb unless safe altitude and airspeed above 82 KIAS are established.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM 3.5.3 CROSSFEED & GEAR HORN:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>The remaining fuel in the tank of the failed engine can be used for the remaining engine, to extend range and maintain lateral balance, by setting its fuel selector in the CROSSFEED position.</li>
              <li>If one of the power levers is set to low settings the landing gear warning horn is activated. Set the power lever of the secured engine forward as required to mute the warning horn.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">HÉLICE EN BANDERA</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Hélice del motor izquierdo de la DA42 perfectamente embanderada a 90° respecto al flujo de aire, eliminando la resistencia aerodinámica de molinete tras corte con ENGINE MASTER OFF.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.8: 5.8 Desembanderado y Reencendido de Motor en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.8 Desembanderado y Reencendido de Motor en Vuelo (Unfeathering & Restarting in Flight)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Reencendido por Molinete y con Arrancador Eléctrico (AFM 3.5.4)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.5.4 UNFEATHERING & RESTARTING THE ENGINE IN FLIGHT</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(a) Windmilling Restart</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Max. restart altitude &mdash; <span class="italic font-medium">10,000 ft (diesel / Jet A-1)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">125 KIAS to 140 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">ON (propeller unfeathers & windmills)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Warm-up &mdash; <span class="italic font-medium">IDLE 2 min, then advance</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(b) Starter-Assisted Restart</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">82 KIAS to 120 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">START KEY &mdash; <span class="italic font-medium">engage until engine fires (max 10 s)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Propeller RPM &mdash; <span class="italic font-medium">check unfeathered and running</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.5.4 LIMITATIONS:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Maximum restart altitude is 10,000 ft pressure altitude. Above this altitude, engine restart cannot be guaranteed.</li>
              <li>Do not operate starter motor for more than 10 seconds. Allow 20 seconds cooling time between attempts.</li>
              <li>After successful restart, keep power at IDLE for at least 2 minutes to allow turbocharger and oil pressure stabilization before advancing power lever.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">REENCENDIDO EN VUELO</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Palanca de potencia en IDLE y conmutador ENGINE MASTER activado para desembanderar la hélice de la DA42 en descenso a 130 KIAS para arranque automático por molinete.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.9: 5.9 Fallo de Motor en Carrera de Despegue -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.9 Fallo de Motor en Carrera de Despegue (Engine Failure During Take-Off Roll)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aborto Inmediato de Despegue en Pista (AFM 3.5.5 a)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.5.5 (a) ENGINE FAILURE DURING TAKEOFF ROLL</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Abort Takeoff (1 - 3)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">IDLE / BOTH</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder &mdash; <span class="italic font-medium">maintain directional control</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Brakes &mdash; <span class="italic font-medium">as required</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Fire Risk Reduction (4 - 6)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">both OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR &mdash; <span class="italic font-medium">both OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.5.5 (a) TAKEOFF ABORT RULE:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>If an engine failure or severe malfunction occurs before lift-off (vR: 70 KIAS / 72 KIAS), the takeoff MUST be aborted immediately. Never attempt to fly with one engine inoperative from ground roll.</li>
              <li>Smoothly retard both power levers to IDLE and apply maximum braking. Asymmetrical thrust on the runway can cause rapid loss of directional control if power is not cut immediately.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.5.5 (a) COLLISION RISK:</span>
            </strong>
            <div>If sufficient time is remaining, the risk of fire in the event of a collision with obstacles can be reduced by switching both ENGINE MASTERS OFF, both FUEL SELECTORS OFF and ELECT. MASTER OFF.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">ABORTO DE DESPEGUE</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            DA42 desacelerando en pista tras fallo de motor antes de vR: palancas de potencia en IDLE, frenada simétrica máxima y mantenimiento de eje de pista con timón de dirección.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.10: 5.10 Fallo de Motor Tras el Despegue (EFATO) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.10 Fallo de Motor Tras el Despegue (EFATO) (Engine Failure After Take-Off)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Decisión Crítica: Aterrizaje Inmediato vs Continuación de Ascenso (AFM 3.5.5)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.5.5 (b) & (c) EFATO DECISION TREE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(b) Gear DOWN or No Climb</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">maintain safe glide speed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Direction &mdash; <span class="italic font-medium">land straight ahead</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER levers &mdash; <span class="italic font-medium">both IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTERS &mdash; <span class="italic font-medium">both OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">OFF before touch</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(c) Gear UP & Positive Climb</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">maintain min. 82 KIAS (vYSE)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder & Bank &mdash; <span class="italic font-medium">compensate (5&deg; into live engine)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER operative engine &mdash; <span class="italic font-medium">MAX (100 %)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Inoperative engine &mdash; <span class="italic font-medium">secure (AFM 3.5.3)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Obstacles &mdash; <span class="italic font-medium">clear straight ahead</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Circuit &mdash; <span class="italic font-medium">plan safe return</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.5.5 CRITICAL SPEED vMCA:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>If landing gear is extended or positive climb cannot be achieved, land straight ahead avoiding major obstacles. Turning back to the runway with gear down and one engine failed will result in fatal stall/spin.</li>
              <li>Never allow airspeed to drop below vMCA (68 KIAS). If speed falls toward 68 KIAS and directional control cannot be maintained, reduce power on the operative engine immediately to prevent uncontrollable roll.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">ASCENSO TRAS DESPEGUE</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Perfil de vuelo EFATO: DA42 con tren arriba manteniendo 82 KIAS (vYSE), 5° de alabeo hacia el motor vivo y hélice del motor inoperativo embanderada para librar obstáculos.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.11: 5.11 Vuelo de Crucero Monomotor y Techo de Servicio -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.11 Vuelo de Crucero Monomotor y Techo de Servicio (Flight with One Engine Inoperative)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Compensación Aerodinámica, Deriva y Gestión de Combustible (AFM 3.5.9)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.5.9 FLIGHT WITH ONE ENGINE INOPERATIVE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Cruise & Trim (1 - 4)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">min. 82 KIAS (vYSE) or cruise</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder trim &mdash; <span class="italic font-medium">trim ball 1/2 out to live engine</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Bank angle &mdash; <span class="italic font-medium">5&deg; bank into operative engine</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Operative engine instruments &mdash; <span class="italic font-medium">monitor continuously</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Navigation & Fuel (5 - 8)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Service ceiling OEI &mdash; <span class="italic font-medium">check AFM Section 5</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Drift-down &mdash; <span class="italic font-medium">establish 82 KIAS if above ceiling</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel crossfeed &mdash; <span class="italic font-medium">as required to prevent imbalance</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">Transponder &mdash; <span class="italic font-medium">squawk 7700 / advise ATC</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM 3.5.9 ZERO SIDESLIP CONFIGURATION:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>To achieve minimum drag and maximum single-engine climb/cruise performance, the aircraft must be flown with zero sideslip: bank approximately 5&deg; toward the operative engine and center the rudder trim with the inclinometer ball displaced half-width toward the operative engine.</li>
              <li>Fuel balance: crossfeed may be selected on the operative engine to utilize fuel from the inactive engine's tank.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">CRUCERO MONOMOTOR</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Representación esquemática del vuelo sin resbalamiento (Zero Sideslip) en bimotor: alabeo de 5° hacia el motor operativo y bola medio inclinada para mínima resistencia aerodinámica.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.12: 5.12 Aproximación y Aterrizaje Monomotor -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.12 Aproximación y Aterrizaje Monomotor (Landing with One Engine Inoperative)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Configuración Gradual, Velocidad de Seguridad y Toma Garantizada (AFM 3.5.7)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.5.7 LANDING WITH ONE ENGINE INOPERATIVE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Preparation (1 - 5)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Safety harnesses &mdash; <span class="italic font-medium">check fastened &amp; tightened</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Gear warning horn &mdash; <span class="italic font-medium">check function</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Selector (operative engine) &mdash; <span class="italic font-medium">check ON / CROSSFEED as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Inoperative engine &mdash; <span class="italic font-medium">check secured (feathered) acc. to 3.5.3</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Approach & Speeds (6 - 11)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing Gear (when field assured) &mdash; <span class="italic font-medium">DOWN, check 3 green</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">as required (APP / LDG only when assured)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">vREF at 1700 kg (3748 lb) &mdash; <span class="italic font-medium">85 KIAS (UP) / 82 KIAS (APP) / 76 KIAS (LDG)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">9.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever & Trim &mdash; <span class="italic font-medium">as required / directional trim to neutral</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.5.7 ONE ENGINE INOPERATIVE APPROACHES:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>One-engine inoperative approaches for landing with flap settings of more than flaps UP are not recommended unless a safe landing is assured (&ldquo;Making the field&rdquo;). Higher flap settings increase the loss of altitude during the transition to a one engine inoperative go-around / balked landing.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.5.7 WEATHER & APPROACH SPEEDS:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>In conditions such as (e.g.) strong wind, danger of wind shear or turbulence a higher approach speed should be selected. Higher approach speeds result in a significantly longer landing distance during flare.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">APROXIMACIÓN MONOMOTOR</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            DA42 en senda de planeo final con motor derecho embanderado, flaps en APP y tren de aterrizaje extendido únicamente al asegurar la pista de aterrizaje.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.13: 5.13 Motor y al Aire Monomotor -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.13 Motor y al Aire Monomotor (Go-Around with One Engine Inoperative)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Maniobra Frustrada Crítica con Motor Inoperativo (AFM 3.5.8)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.5.8 GO-AROUND / BALKED LANDING WITH ONE ENGINE INOPERATIVE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Go-Around Actions (14 - 18)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">14.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">MAX / as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">15.</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder &mdash; <span class="italic font-medium">maintain directional control</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">16.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">vYSE = 82 KIAS / as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">17.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing Gear &mdash; <span class="italic font-medium">UP / retract</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">18.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">UP</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">If No Climb Established (19 - 21)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Positive climb fails &mdash; <span class="italic font-medium">land clear of obstacles with gear DOWN</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">19.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">both OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">20.</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR &mdash; <span class="italic font-medium">both OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">21.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.5.8 800 FT MINIMUM ALTITUDE:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>The go-around / balked landing is not recommended to be initiated below a minimum of 800 ft above ground. For performance data with one engine inoperative and flaps and gear UP refer to 5.3.9 ONE ENGINE INOPERATIVE CLIMB PERFORMANCE.</li>
              <li>Under certain combinations of ambient conditions, such as turbulence, cross wind and windshear, as well as pilot skill, the resulting climb performance may nevertheless be insufficient for a successful go-around / balked landing.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.5.8 WEIGHING THE RISK:</span>
            </strong>
            <div>The risk of a go-around must be carefully weighed against the danger of a landing on the remaining runway or overrunning the runway.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">MOTOR Y AL AIRE MONOMOTOR</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            DA42 frustrando aproximación monomotor: potencia MAX en motor vivo, actitud de cabeceo para 82 KIAS, tren retrayéndose y flaps en UP para maximizar el régimen ascensional.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.14: 5.14 Fuego de Motor en Tierra y Durante el Despegue -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.14 Fuego de Motor en Tierra y Durante el Despegue (Engine Fire on Ground & Take-Off)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aislamiento de Combustible, Corte Eléctrico y Evacuación Rápida (AFM 3.8.1 & 3.8.2)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.8.1 & 3.8.2 ENGINE FIRE GROUND & TAKEOFF</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.8.1 Fire on Ground</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">both OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR &mdash; <span class="italic font-medium">both OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Canopy (after standstill) &mdash; <span class="italic font-medium">open</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Airplane &mdash; <span class="italic font-medium">evacuate immediately</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.8.2 Fire During Takeoff</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Cabin heat & Defrost &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Takeoff abort / climb &mdash; <span class="italic font-medium">proceed according to 3.5.5</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER affected &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR affected &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">OFF before collision</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.8.1 IMMEDIATE EVACUATION:</span>
            </strong>
            <div>Do not attempt to investigate the fire inside the cockpit. Cut fuel and electrical supplies without hesitation and evacuate all occupants immediately via the canopy and rear door.</div>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.8.2 SMOKE DEVELOPMENT IN FLIGHT:</span>
            </strong>
            <div>In case of extreme smoke development, the front canopy may be unlatched during flight. This allows it to partially open in order to improve ventilation. The canopy will remain open in this position. Flight characteristics will not be affected significantly.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">INCENDIO EN TIERRA</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Procedimiento de corte de emergencia en tierra: conmutadores ENGINE MASTER abajo (OFF), selectores de combustible cortados (OFF) y corte general con ELECT. MASTER OFF.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.15: 5.15 Fuego de Motor en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.15 Fuego de Motor en Vuelo (Engine Fire in Flight)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Extinción por Aislamiento y Descenso de Emergencia (AFM 3.8.3)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.8.3 ENGINE FIRE IN FLIGHT</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Initial Isolation (1 - 4)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Cabin heat &amp; Defrost &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder &mdash; <span class="italic font-medium">apply for directional control</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Power levers &mdash; <span class="italic font-medium">retard as required to maintain control</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">vYSE 82 KIAS / above vmCA 68 KIAS</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Engine Securing & Land (5 - 8)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Operative engine &mdash; <span class="italic font-medium">power as required once control regained</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Sideslip condition &mdash; <span class="italic font-medium">zero sideslip (half ball, 3&deg; to 5&deg; bank)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Affected engine &mdash; <span class="italic font-medium">shut down &amp; secure (AFM 3.5.3 feathering)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">land as soon as possible (AFM 3.5.7)</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.8.3 SMOKE DEVELOPMENT IN FLIGHT:</span>
            </strong>
            <div>In case of extreme smoke development, the front canopy may be unlatched during flight. This allows it to partially open, in order to improve ventilation. The canopy will remain open in this position. Flight characteristics will not be affected significantly.</div>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.8.3 IMMEDIATE DESCENT & FORCED LANDING:</span>
            </strong>
            <div>If the fire does not extinguish after shutting down the engine and isolating the fuel, perform an immediate emergency descent according to 3.9.7 and prepare for a forced landing on the nearest terrain.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">FUEGO DE MOTOR EN VUELO</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Góndola motor con indicador ENGINE FIRE activo en G1000, palanca de combustible cortada y picado de emergencia para apagar las llamas por flujo de alta velocidad.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.16: 5.16 Humo, Incendio Eléctrico y Monóxido de Carbono -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.16 Humo, Incendio Eléctrico y Monóxido de Carbono (Electrical Fire & Carbon Monoxide in Cabin)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aislamiento Eléctrico, Batería de Emergencia y Ventilación (AFM 3.8.4, 3.8.5 & 3.9.1)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.8.4, 3.8.5 & 3.9.1 SMOKE, FIRE & CARBON MONOXIDE</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.8.4 Ground & 3.9.1 Carbon Monoxide</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER (fire on ground) &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Engines &amp; Fuel (ground) &mdash; <span class="italic font-medium">both OFF, canopy open, evacuate</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">3.9.1 CO suspected in cabin &mdash; <span class="italic font-medium">cabin heat &amp; defrost OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Ventilation &amp; Windows &mdash; <span class="italic font-medium">open / unlatch canopy (max. 120 KIAS)</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.8.5 Electrical Fire in Flight</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">EMERGENCY switch &mdash; <span class="italic font-medium">ON (standby gyro &amp; flood light 1.5 h)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">AVIONIC MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Cabin heat &amp; Defrost &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency windows &mdash; <span class="italic font-medium">open if required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Precautionary landing &mdash; <span class="italic font-medium">land on next suitable airfield</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.8.5 ELECTRICAL LOSS & BATTERY LIFE:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Switching OFF the ELECT. MASTER will lead to total failure of all electronic and electric equipment. The attitude gyro and directional gyro will also be affected.</li>
              <li>However, by switching EMERGENCY switch ON, the emergency battery supplies power to the stand-by attitude gyro and flood light for at least 1.5 hours.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.9.1 CARBON MONOXIDE DANGER:</span>
            </strong>
            <div>Carbon monoxide (CO) is poisonous and without smell. If exhaust smell is noticed in cabin, shut cabin heat OFF, open ventilation and emergency windows, and unlatch canopy below 120 KIAS.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">HUMO EN CABINA</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Interruptor EMERGENCY en posición ON bajo guarda roja, con pantallas G1000 apagadas e instrumentos de emergencia iluminados por la luz de inundación flood light.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.17: 5.17 Fallo Total del Sistema Eléctrico -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.17 Fallo Total del Sistema Eléctrico (Complete Electrical System Failure)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Operación con Batería de Emergencia e Instrumentos Standby (AFM 3.7.1)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.7.1 COMPLETE FAILURE OF THE ELECTRICAL SYSTEM</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Emergency Actions (1 - 4)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Circuit breakers &mdash; <span class="italic font-medium">check if all OK (pressed in)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">EMERGENCY switch &mdash; <span class="italic font-medium">ON (supplies standby horizon &amp; flood light)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Flood light &mdash; <span class="italic font-medium">ON if necessary</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER &mdash; <span class="italic font-medium">set based on lever positions and engine noise</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Landing Preparation (5 - 6)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps in current position &mdash; <span class="italic font-medium">prepare landing according to 4B.5</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Airfield &mdash; <span class="italic font-medium">land on the nearest suitable airfield</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Stand-by instruments &mdash; <span class="italic font-medium">make use of standby ASI and altimeter</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Engine power control &mdash; <span class="italic font-medium">set via visual lever position and noise</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.7.1 ENGINE STOPPAGE HAZARD:</span>
            </strong>
            <div>Engine stoppage may occur, depending on the failure mode.</div>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM 3.7.1 GEAR UPLOCK & BATTERY DURATION:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>The landing gear uplock is no longer ensured. The landing gear may slowly extend. The landing gear can be extended manually according to 3.6.2 MANUAL EXTENSION OF THE LANDING GEAR.</li>
              <li>The backup artificial horizon and the flood light will have electrical power for at least 1.5 hours.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">FALLO ELÉCTRICO TOTAL</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Cabina de la DA42 en fallo eléctrico total: pantallas G1000 apagadas, interruptor EMERGENCY ON y vuelo mantenido con horizonte artificial de reserva iluminado.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.18: 5.18 Extensión Manual de Emergencia del Tren de Aterrizaje -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.18 Extensión Manual de Emergencia del Tren de Aterrizaje (Manual Extension of the Landing Gear)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Liberación Hidráulica y Bloqueo por Gravedad (AFM 3.6.1 & 3.6.2)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.6.1 & 3.6.2 LANDING GEAR SYSTEM FAILURES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.6.1 Landing Gear Unsafe Warning</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Light on &gt; 20 seconds &mdash; <span class="italic font-medium">warning of unsafe gear condition</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">check below vLOR 156 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Gear selector &mdash; <span class="italic font-medium">re-cycle if continued illumination occurs</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">If red light persists &mdash; <span class="italic font-medium">continue with 3.6.2 Manual Extension</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.6.2 Manual Extension Procedure</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">max. 152 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">GEAR selector &mdash; <span class="italic font-medium">DOWN</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Manual gear extension handle &mdash; <span class="italic font-medium">pull red handle fully</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Position indicator lights &mdash; <span class="italic font-medium">check 3 green illuminated</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM 3.6.1 FLIGHT WITH GEAR EXTENDED:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>If the landing gear cannot be retracted to the final up position you may continue the flight with the landing gear extended in the down &amp; locked position. Consider for higher aerodynamic drag, resulting in degraded flight performance, increased fuel consumption and decreased range.</li>
              <li>In cold ambient temperatures it may help to reduce the airspeed below 110 KIAS for landing gear operation.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.6.2 MANUAL EXTENSION SPEED & YAW:</span>
            </strong>
            <div>Maximum airspeed for manual landing gear extension is 152 KIAS. If the three green lights do not illuminate, gentle yawing maneuvers with rudder can assist downlocks into mechanical position.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">EXTENSIÓN DE TREN MANUAL</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Tirador rojo de extensión de emergencia del tren en consola central de la DA42, con espejo convexo de verificación visual del tren delantero en la barquilla izquierda.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.19: 5.19 Aterrizaje con Tren Arriba -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.19 Aterrizaje con Tren Arriba (Landing with Gear UP)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Toma de Emergencia sobre Panzada en Pista o Campo (AFM 3.6.3)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.6.3 LANDING WITH GEAR UP</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Approach Profile (1 - 4)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Approach &mdash; <span class="italic font-medium">power at normal approach airspeeds and flap settings</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">IDLE / just before touchdown</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Touchdown &mdash; <span class="italic font-medium">contact surface with minimum airspeed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">On ground &mdash; <span class="italic font-medium">maintain directional control with rudder</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Fire Risk Reduction (3 - 5)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">If time / situation allows &mdash; <span class="italic font-medium">reduce risk of fire:</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">both OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">FUEL SELECTOR &mdash; <span class="italic font-medium">both OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM 3.6.3 GEAR RETRACTED CONDITION:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>This procedure applies if the landing gear is completely retracted. If no level landing area is available, a landing on an upward slope should be sought.</li>
              <li>On ground: maintain directional control with rudder as long as possible so as to avoid collision with obstacles.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.6.3 FIRE HAZARD MINIMIZATION:</span>
            </strong>
            <div>Shutting down both engines and turning off the electrical master switch just before touchdown significantly reduces the risk of post-impact fire. Hold the aircraft in a slight nose-up attitude until stopped.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">ATERRIZAJE CON TREN ARRIBA</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            DA42 en toma suave de panzada (Gear-Up Landing): alas niveladas, motores apagados inmediatamente antes de tocar y detención por fricción del fuselaje de fibra de carbono.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.20: 5.20 Aterrizaje con Neumático Desinflado o Frenos Fallidos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.20 Aterrizaje con Neumático Desinflado o Frenos Fallidos (Defective Tire or Defective Brakes Landing)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Control Direccional en Pista con Timón y Motores (AFM 3.6.4 & 3.6.5)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.6.4 & 3.6.5 DEFECTIVE TIRE / BRAKES LANDING</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.6.4 Defective Tire Checklist</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Advise ATC &mdash; <span class="italic font-medium">declare situation / assistance</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Touchdown position &mdash; <span class="italic font-medium">land at edge of runway on side of intact tire</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Wing attitude &mdash; <span class="italic font-medium">land with one wing low (intact tire side held low)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Directional control &mdash; <span class="italic font-medium">maintain with rudder, supported by strong brake</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.6.5 Defective Brakes Checklist</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Rolling distance &mdash; <span class="italic font-medium">consider significantly greater rollout</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Safety harness &mdash; <span class="italic font-medium">check fastened and tightened</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Touchdown speed &mdash; <span class="italic font-medium">cross threshold at minimum safe airspeed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Post-touchdown fire cut &mdash; <span class="italic font-medium">engines OFF, fuel OFF, elect OFF before collision</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.6.4 SENSITIVITY & WIDE TRACK:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>A defective (e.g. burst) tire is not usually easy to detect. Tendency to swerve occurs during rollout; rapid and determined action is required.</li>
              <li>The wide track of the landing gear will prevent the airplane from tipping over a wide speed range. There is no pronounced tendency to tip even when skidding.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.6.5 FIRE RISK REDUCTION:</span>
            </strong>
            <div>If sufficient time is remaining, reduce fire risk after safe touchdown: ENGINE MASTER both OFF, FUEL SELECTOR both OFF, ELECT. MASTER OFF.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">ATERRIZAJE CON AVERÍA DE FRENOS</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            DA42 manteniendo la carrera tras la toma en pista con frenado aerodinámico (palanca atrás) y uso cuidadoso del timón direccional para evitar salidas de pista.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.21: 5.21 Descenso de Emergencia, Puertas y Salida -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.21 Descenso de Emergencia, Puertas y Salida (Emergency Descent, Doors & Emergency Exit)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Pérdida Rápida de Altitud, Puertas Desbloqueadas y Evacuación (AFM 3.9.7, 3.9.2 & 3.9.8)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.9.7, 3.9.2 & 3.9.8 AIRFRAME EMERGENCIES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.9.7 Descent & 3.9.8 Exit</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">position UP</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing Gear &mdash; <span class="italic font-medium">DOWN (acts as aerodynamic brake)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER levers &mdash; <span class="italic font-medium">both IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">as required (up to vNO 155 / vNE 194 KIAS)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">3.9.8 Emergency Exit &mdash; <span class="italic font-medium">unlock front hinge of rear door in roll-over</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.9.2 Unlocked Doors in Flight</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">reduce immediately</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Canopy &mdash; <span class="italic font-medium">check visually if closed &amp; locked</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Rear passenger door &mdash; <span class="italic font-medium">check visually if closed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Front baggage doors &mdash; <span class="italic font-medium">check visually if closed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">If unable to lock &mdash; <span class="italic font-medium">land on nearest suitable airfield</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.9.2 NEVER UNLOCK REAR DOOR:</span>
            </strong>
            <div>Never unlock the rear passenger door during flight. It may break away. If the canopy or rear door cannot be locked, or baggage doors are open, land on nearest suitable airfield.</div>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.9.7 EMERGENCY DESCENT LIMITS:</span>
            </strong>
            <div>Max. structural cruising speed vNO = 155 KIAS. Never exceed speed in smooth air vNE = 194 KIAS. Maintain wings level and monitor terrain clearance.</div>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM 3.9.8 EMERGENCY EXIT PLACARD:</span>
            </strong>
            <div>In case of a roll over of the airplane on ground, the rear side door can be used as exit. For this purpose unlock the front hinge of the rear side door. The function is displayed on a placard beside the hinge.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">DESCENSO DE EMERGENCIA</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            DA42 en descenso de emergencia: tren de aterrizaje abajo actuando como aerofreno principal, palancas de potencia en IDLE y variómetro en tasa máxima de caída.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.22: 5.22 Engelamiento, Alimentación y Barrena Inadvertida -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.22 Engelamiento, Alimentación y Barrena Inadvertida (Icing, Fuel Supply Failure & Spin Recovery)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Salida de Icing, Fallo de Alimentación y Salida de Barrena (AFM 3.9.4, 3.9.5 & 3.9.6)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.9.4, 3.9.5 & 3.9.6 AIRFRAME & ENGINE EMERGENCIES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.9.6 Spin Recovery & 3.9.5 Fuel</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">IDLE immediately</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder &mdash; <span class="italic font-medium">full deflection against direction of spin</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Elevator (stick) &mdash; <span class="italic font-medium">fully forward / ailerons neutral</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">FLAPS &mdash; <span class="italic font-medium">check UP / pull carefully when rotation stops</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">3.9.5 Fuel Supply &mdash; <span class="italic font-medium">FUEL SELECTOR CROSSFEED, monitor quantity</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.9.4 Unintentional Flight into Icing</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Icing area &mdash; <span class="italic font-medium">leave conditions immediately (turn / descend)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">PITOT HEAT &amp; Cabin Heat &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">POWER lever &mdash; <span class="italic font-medium">increase power / apply changes periodically</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">ALTERNATE AIR &mdash; <span class="italic font-medium">OPEN</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency windows &mdash; <span class="italic font-medium">open if required / advise ATC</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.9.6 IMMEDIATE SIMULTANEOUS ACTIONS:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Spin recovery has NOT been shown during certification as it is NOT required for this airplane category. The given recovery method is based on general experience! Intentional spins are prohibited in this airplane.</li>
              <li>Steps 1 to 4 must be carried out immediately and simultaneously.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.9.4 ICE ACCUMULATION & PITOT FAILURE:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>Ice build-up increases the stalling speed.</li>
              <li>If the Pitot heating fails: Alternate static valve OPEN, Emergency windows close.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.9.5 HIGH PRESSURE PUMP DAMAGE:</span>
            </strong>
            <div>When the high pressure fuel pump of the engine takes in air an inspection of the pump is necessary prior to next flight.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">RECUPERACIÓN DE BARRENA</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Diagrama de recuperación de barrena: timón contrario a la rotación, palancas de potencia en IDLE y palanca hacia adelante para romper la pérdida aerodinámica.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.23: 5.23 Regulación de Hélice, Fallos de ECU y de Flaps -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.23 Regulación de Hélice, Fallos de ECU y de Flaps (Defective Propeller RPM, ECU & Flap Failures)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">RPM Oscilantes, Sobrevelocidad, Fallo de ECU y Sin Flaps (AFM 3.9.3, 4B.4.2 & 4B.5)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">3.9.3, 4B.4.2 & 4B.5 ENGINE & AIRFRAME SYSTEMS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3.9.3 Defective Propeller RPM Regulating</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Oscillating RPM &mdash; <span class="italic font-medium">change POWER setting</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">If persists &mdash; <span class="italic font-medium">ECU SWAP to ECU B (switch AUTO if unhelpful)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Propeller overspeed &mdash; <span class="italic font-medium">POWER setting reduce as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">If overspeed persists &mdash; <span class="italic font-medium">ECU SWAP to ECU B (prepare for 3.5.6)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">&bull;</span>
                <span class="text-slate-800 dark:text-slate-200">Precautionary landing &mdash; <span class="italic font-medium">land on nearest suitable airfield</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4B.4.2 ECU Fail & 4B.5 Flaps Failure</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU test button &mdash; <span class="italic font-medium">check not pressed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU A / B failure &mdash; <span class="italic font-medium">check automatic switchover to healthy ECU</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP switch &mdash; <span class="italic font-medium">select ECU B manually if required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Flap system failure &mdash; <span class="italic font-medium">maintain below 137 KIAS, check breaker</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps UP approach &mdash; <span class="italic font-medium">min. 86 KIAS, expect 40 % longer roll</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 3.9.3 RAPID RPM CHANGES & WOODEN BLADES:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>The power lever should be moved slowly, in order to avoid over-speeding and excessively rapid RPM changes. The light wooden propeller blades produce more rapid RPM changes than metal blades.</li>
              <li>If propeller problem does not clear, switch back to AUTO and land on the nearest suitable airfield. Prepare for engine malfunction according to 3.5.6.</li>
            </ul>
          </div>
          <div class="p-1.5 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-rose-700 dark:text-rose-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>🛑</span>
              <span>AFM 3.9.3 HIGHEST PITCH IN ECU MALFUNCTION:</span>
            </strong>
            <div>In case of a malfunction of the engine control unit it is possible that the propeller blades will remain in the position of highest pitch. In this case the reduced engine performance should be taken into consideration.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">CASOS ANÓMALOS DE SISTEMAS</span>
        </div>

        <div class="space-y-1 flex flex-col justify-start shrink-0 mb-1">
          <div class="p-1.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-blue-700 dark:text-blue-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>ℹ️</span>
              <span>AFM 4B.5 FLAPLESS LANDING PERFORMANCE:</span>
            </strong>
            <div>Flapless landings require higher approach speed (86 KIAS) and flatter descent attitude. Ensure runway length is sufficient for the 40 % increase in landing roll.</div>
          </div>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Panel de interruptores ECU SWAP bajo guarda en consola de la DA42, con avisador ámbar ECU FAIL activo y palanca selectora de flaps en verificación de circuito.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.24: 5.24 Procedimientos Anómalos: Arranque EPU y Masa Elevada -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.24 Procedimientos Anómalos: Arranque EPU y Masa Elevada (Abnormal Procedures: EPU Start & High Landing Mass)</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Toma de Corriente Externa y Aterrizaje con Peso > 1700 kg (AFM 4B.7 & 4B.8)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="space-y-1 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">4B.7 & 4B.8 EXTERNAL POWER & HIGH MASS LANDING</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4B.7 External Power (EPU) Start</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">check OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">EPU plug &mdash; <span class="italic font-medium">connect to nose socket</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECT. MASTER &mdash; <span class="italic font-medium">ON, verify voltage > 24 V</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Engines &mdash; <span class="italic font-medium">start normally (AFM 4A.6.3)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">EPU plug &mdash; <span class="italic font-medium">disconnect before taxi</span></span>
              </div>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 flex flex-col justify-start text-[18px]">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4B.8 Landing with High Mass (> 1700 kg)</strong>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Max. landing mass exceeded &mdash; <span class="italic font-medium">up to MTOW 1785 kg (3935 lb)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Approach speed &mdash; <span class="italic font-medium">min. 84 KIAS (FLAPS APP) / 86 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Descent rate &mdash; <span class="italic font-medium">limit vertical speed, smooth flare</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Brakes &mdash; <span class="italic font-medium">avoid harsh braking to prevent brake overheating</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1 py-0 text-[18px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Post-landing &mdash; <span class="italic font-medium">inspect landing gear and log book entry</span></span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-1 shrink-0 space-y-1">
          <div class="p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
              <span>⚠️</span>
              <span>AFM 4B.7 & 4B.8 STRUCTURAL INTEGRITY:</span>
            </strong>
            <ul class="list-disc pl-6 space-y-0.5 text-[18px] leading-tight" style="padding-left: 1.5rem;">
              <li>When starting with external power, ensure ground personnel are clear of propellers before activating starter.</li>
              <li>Landings between 1700 kg and 1785 kg (or without M&Auml;M 42-088) constitute abnormal operation. A soft touch-down with minimum sink rate is mandatory to prevent structural damage to landing gear attachments.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:col-span-6 flex flex-col">
      <div class="h-full flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="min-height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">ARRANQUE EPU Y MASA MÁXIMA</span>
        </div>

        

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[18px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-200 max-w-sm leading-snug">
            Conector de toma de tierra EPU bajo el morro de la DA42 y tren principal reforzado soportando la masa máxima de despegue (1785 kg) en toma de aterrizaje suave.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
}; export const DA42_LESSON_6 = {
  id: "da420000-0000-0000-0000-000000000060",
  course_id: DA42_COURSE_ID,
  title: "6. Documentación Prevuelo, Masa y Centrado, Combustible y Performance",
  slug: "performance-masa-centrado-da42",
  sequence_order: 6,
  lesson_order: 6,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 6.1: 6.1 Despacho Operativo y Documentación Prevuelo F.OPS.02 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · DESPACHO OPERATIVO</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.1 Despacho Operativo y Documentación Prevuelo F.OPS.02</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimiento Operacional Oficial</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">MARCO NORMATIVO EASA PART-NCO & BLUE TEAM</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">OBLIGACIONES DEL PILOTO AL MANDO (PIC)</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            Antes de cada vuelo en la escuela, el piloto al mando tiene la obligación técnica y legal de cumplimentar el formulario <strong>F.OPS.02 (Documentación Prevuelo)</strong>, verificando que la aeronave opere con total seguridad dentro de los límites certificados de masa, centrado, combustible y distancias de pista.
          </p>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Part-NCO.GEN.105 (Masa y Centrado):</strong>
            <div>Garantizar que la carga esté distribuida de modo que el centro de gravedad (CG) permanezca dentro de la envolvente certificada tanto al despegue (TOM) como al aterrizaje (LM).</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Part-NCO.OP.125 & Manual OM Blue Team (Combustible):</strong>
            <div>Embarcar combustible para ruta más reserva. Por Manual de Operaciones de Blue Team debemos disponer de <strong>al menos 1h 30min de reserva final</strong> (<strong>16,5 US gal / 62,5 L</strong> al 60% de potencia con 2 motores Continental CD-135/CD-155), más alternativo y contingencia.</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Part-NCO.POL.105 (Performance de Pista):</strong>
            <div>Verificar que las distancias calculadas con correcciones de viento, temperatura y superficie no superen la TORA y LDA disponibles.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DOCUMENTACIÓN F.OPS.02</span>
          <a href="/images/c172/f-ops-02-documentacion-prevuelo.pdf" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
            <span>Abrir PDF</span>
            <span>↗</span>
          </a>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-y-auto border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-inner p-1">
          <img
            src="/images/c172/f-ops-02-documentacion-prevuelo.png"
            alt="Formulario oficial F.OPS.02 Documentación Prevuelo"
            class="w-full h-auto block rounded-lg shadow-xs"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.2: 6.2 Teoría de Carga y Centrado: Datum, Brazos y Momentos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · CARGA Y CENTRADO</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.2 Teoría de Carga y Centrado: Datum, Brazos y Momentos</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Física del Vuelo y Estabilidad</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PRINCIPIOS FÍSICOS DE EQUILIBRIO</span>
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PLANO DE REFERENCIA (DATUM)</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            En la DA42, el <strong>DATUM</strong> se localiza en un plano vertical situado a <strong>2,196 metros (86,46 in)</strong> por delante del punto más adelantado de la costilla de raíz del ala corta (<em>stub wing root rib</em>). Brazos longitudinales hacia la cola en metros positivos. Nivelación horizontal en suelo del compartimento de morro.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs sm:text-[13px]">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Cálculo del Momento:</strong>
            <div class="font-mono font-bold text-sky-600 dark:text-sky-400">Momento = Masa × Brazo</div>
            <p class="text-[11px] text-slate-500 mt-0.5">Distancia al Datum en metros (kg·m).</p>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Centro de Gravedad (CG):</strong>
            <div class="font-mono font-bold text-emerald-600 dark:text-emerald-400">CG = ΣMomento / ΣMasa</div>
            <p class="text-[11px] text-slate-500 mt-0.5">Equilibrio respecto al Datum en metros.</p>
          </div>
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Brazos Oficiales AFM Sección 6.4.1</strong>
          <div class="grid grid-cols-2 gap-x-2 gap-y-0.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
            <div>• Morro (Equipaje): <strong class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">0,60 m</strong></div>
            <div>• Fluido TKS: <strong class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">1,00 m</strong></div>
            <div>• Asientos Delanteros: <strong class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">2,30 m</strong></div>
            <div>• Tanques Principales: <strong class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">2,63 m</strong></div>
            <div>• Tanques Auxiliares: <strong class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">3,20 m</strong></div>
            <div>• Asientos Traseros: <strong class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">3,25 m</strong></div>
            <div>• Equipaje Cabina: <strong class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">3,89 m</strong></div>
            <div>• Extensión Equipaje: <strong class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">4,54 m</strong></div>
          </div>
        </div>

        <div class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-snug">
          <strong>DENSIDAD CERTIFICADA:</strong> Jet A-1 = <strong>0,84 kg/L (7,01 lb/US gal)</strong>: <span class="font-mono font-bold">Masa = Litros × 0,84</span> (1 gal = 3,18 kg). Fluido TKS = <strong>1,10 kg/L (9,20 lb/US gal)</strong>.
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESTACIONES Y BRAZOS DE PALANCA</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex flex-col justify-center items-center p-2 shadow-xs mt-1">
          <img
            src="/images/DA42/limits/da42-cg-datum-screenshot.png"
            alt="Brazos de palanca oficiales del Diamond DA42"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.3: 6.3 Estructura del Loadsheet Oficial DA42 (F.OPS.04) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · LOAD SHEET F.OPS.04</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.3 Estructura del Loadsheet Oficial DA42 (F.OPS.04)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Registro de Carga y Hoja Oficial</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DATOS TÉCNICOS Y PESOS (REFERENCIA DA42)</span>
        </div>

        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
            <span class="text-[10px] text-blue-700 dark:text-sky-400 font-bold block uppercase">BEW (EMPTY WEIGHT)*</span>
            <span class="font-mono font-bold text-sm text-[#0B2E59] dark:text-white">1.250,00 kg</span>
          </div>
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
            <span class="text-[10px] text-blue-700 dark:text-sky-400 font-bold block uppercase">BRAZO BEW*</span>
            <span class="font-mono font-bold text-sm text-[#0B2E59] dark:text-white">2,420 m</span>
          </div>
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
            <span class="text-[10px] text-blue-700 dark:text-sky-400 font-bold block uppercase">MOMENTO BÁSICO*</span>
            <span class="font-mono font-bold text-sm text-[#0B2E59] dark:text-white">3.025,00 kg·m</span>
          </div>
        </div>

        <div class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs leading-relaxed flex items-start gap-2">
          <span class="font-bold shrink-0">⚠️ NOTA BEW:</span>
          <span>El <strong>BEW (Empty Weight)</strong> se incluye como <strong>referencia orientativa</strong>. El BEW varía en cada aeronave según su equipamiento; para el cálculo de masa y centrado se debe utilizar obligatoriamente el BEW que figura en el <strong>informe de pesaje oficial de cada avión</strong>.</span>
        </div>

        <div class="grid grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300">
          <div class="p-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <span>Pilotos (Delanteros):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">2,300 m</span>
          </div>
          <div class="p-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <span>Pasajeros (Traseros):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">3,250 m</span>
          </div>
          <div class="p-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <span>Tanques Princ. (189 L):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">2,630 m</span>
          </div>
          <div class="p-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <span>Tanques Aux. (52 L):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">3,200 m</span>
          </div>
          <div class="p-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <span>Equipaje Morro (30 kg):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">0,600 m</span>
          </div>
          <div class="p-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <span>Fluido TKS (33 kg):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">1,000 m</span>
          </div>
          <div class="p-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <span>Equipaje Cabina (45 kg):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">3,890 m</span>
          </div>
          <div class="p-1.5 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
            <span>Extensión Equipaje (20 kg):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">4,540 m</span>
          </div>
        </div>

        <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 text-xs sm:text-[13px] leading-snug">
          <strong>LÍMITES MÁXIMOS:</strong> <strong>MTOM:</strong> 1.700 kg (1.785 kg con MÄM 42-088) · <strong>MLM:</strong> 1.700 kg · <strong>MZFW:</strong> 1.650 kg. Equipaje cabina máx. 45 kg (morro máx. 30 kg, total avión 75 kg).
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TABLA OFICIAL DE CARGA DA42</span>
          <a
            href="/images/DA42/limits/da42-loadsheet-table.png"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-0.5 shrink-0"
            title="Abrir imagen en nueva pestaña"
          >
            <span>Ver completa</span>
            <span>↗</span>
          </a>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 flex items-center justify-center p-1 shadow-xs">
          <img
            src="data:image/png;base64,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"
            alt="Hoja oficial de cálculo de carga de la Diamond DA42"
            class="max-h-full max-w-full w-auto h-full object-contain rounded-lg"
            style="height: 100%; max-height: 100%; width: auto; max-width: 100%; object-fit: contain;"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.4: 6.4 La Envolvente de Centro de Gravedad (CG Envelope) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 · ENVOLVENTE DE CENTRADO</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.4 La Envolvente de Centro de Gravedad (CG Envelope)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Límites Certificados de Estabilidad</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">LÍMITES ADMISIBLES DE CG</span>
        </div>

        <div class="space-y-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">LÍMITE ADELANTADO (FORWARD CG LIMIT)</strong>
            <p class="leading-snug">
              &bull; <strong>Hasta 1.468 kg (3.236 lb):</strong> <strong>2,35 m (92,5 in)</strong> constante.<br>
              &bull; <strong>De 1.468 kg a 1.700 kg (3.748 lb):</strong> variación lineal hasta <strong>2,40 m (94,5 in)</strong>.<br>
              &bull; <strong>Con MÄM 42-088 (hasta 1.785 kg / 3.935 lb):</strong> variación lineal hasta <strong>2,418 m (95,2 in)</strong>.
            </p>
          </div>

          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">LÍMITE TRASERO (AFT CG LIMIT)</strong>
            <p class="leading-snug">
              &bull; <strong>Rango completo de masas:</strong> <strong>2,48 m (97,6 in)</strong> constante desde la masa mínima en vuelo hasta la MTOM máxima certificada (1.700 kg o 1.785 kg con MÄM 42-088).
            </p>
          </div>

          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">EFECTO DEL CONSUMO DE COMBUSTIBLE EN EL CG</strong>
            <p class="leading-snug">
              Los depósitos alares principales (brazo <strong>2,63 m</strong>) y auxiliares (<strong>3,20 m</strong>) se ubican por detrás de la envolvente admisible de CG (2,35 a 2,48 m). El consumo de combustible en crucero genera un <strong>desplazamiento continuo del CG hacia adelante</strong>.
            </p>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-amber-800 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>⚠️</span> REGLA DE ORO DE DESPACHO
          </strong>
          <span>Deben verificarse obligatoriamente <strong>ambos puntos</strong> en la envolvente: el punto al despegue (TOM &amp; CG) y el punto previsto al aterrizaje (LM &amp; CG). Ambos deben situarse holgadamente dentro de los márgenes certificados.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TABLA DE LÍMITES DE MASA DA42</span>
          <a
            href="/images/DA42/limits/da42-mass-limits-table.png"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-0.5 shrink-0"
            title="Abrir imagen en nueva pestaña"
          >
            <span>Ver completa</span>
            <span>↗</span>
          </a>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 flex items-center justify-center p-1 shadow-xs">
          <img
            src="/images/DA42/limits/da42-mass-limits-table.png"
            alt="Tabla de límites de masa de la Diamond DA42"
            class="max-h-full max-w-full w-auto h-full object-contain rounded-lg"
            style="height: 100%; max-height: 100%; width: auto; max-width: 100%; object-fit: contain;"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.5: 6.5 Ejercicio Práctico 1A: Masa y Centrado al Despegue (TOM & CG) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 Twin Star (Continental CD-135 / CD-155) · TALLER INTERACTIVO 1A</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.5 Ejercicio Práctico 1A: Masa y Centrado al Despegue (TOM &amp; CG)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Masa y Centrado · Parte 1</span>
  </div>

  <div data-interactive-exercise="loadsheet_takeoff" data-aircraft="da42">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
      <!-- Columna Izquierda (lg:col-span-6) -->
      <div class="lg:col-span-6 flex flex-col">
        <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
          <!-- Header -->
          <div class="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px]">
                📋 PARTE 1: DESPEGUE (TOM &amp; CG)
              </span>
              <div class="text-xs text-slate-500 font-medium">
                Cálculo de Masa de Despegue (TOM) y Brazo de Palanca DA42
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-sky-100 text-[#0B2E59] border border-sky-300">
              SIMULADOR
            </span>
          </div>

          <!-- Tabla de Datos -->
          <div class="space-y-1.5 my-auto">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase border-b border-slate-100 dark:border-slate-700 pb-0.5 mb-1">
                Tabla de Carga y Momentos DA42
              </strong>
              <table class="w-full text-[11px] font-mono leading-none table-fixed">
                <colgroup>
                  <col style="width: 38%;" />
                  <col style="width: 20%;" />
                  <col style="width: 20%;" />
                  <col style="width: 22%;" />
                </colgroup>
                <thead>
                  <tr class="text-slate-500 dark:text-slate-400 border-b border-slate-100 dark:border-slate-700">
                    <th class="text-left font-bold pb-0.5 whitespace-nowrap">Elemento</th>
                    <th class="text-center font-bold pb-0.5 whitespace-nowrap">Masa (kg)</th>
                    <th class="text-center font-bold pb-0.5 whitespace-nowrap">Brazo (m)</th>
                    <th class="text-right font-bold pb-0.5 whitespace-nowrap">Momento (kg·m)</th>
                  </tr>
                </thead>
                <tbody class="text-slate-700 dark:text-slate-200 divide-y divide-slate-50 dark:divide-slate-800">
                  <tr><td class="py-0.5 whitespace-nowrap">Masa Vacía Básica (BEW)</td><td class="text-center py-0.5 whitespace-nowrap">1.250,0</td><td class="text-center py-0.5 whitespace-nowrap">2,420</td><td class="text-right py-0.5 whitespace-nowrap">3.025,00</td></tr>
                  <tr><td class="py-0.5 whitespace-nowrap">Pilotos Delanteros</td><td class="text-center py-0.5 whitespace-nowrap">160,0</td><td class="text-center py-0.5 whitespace-nowrap">2,300</td><td class="text-right py-0.5 whitespace-nowrap">368,00</td></tr>
                  <tr><td class="py-0.5 whitespace-nowrap">Pasajeros Traseros</td><td class="text-center py-0.5 whitespace-nowrap">0,0</td><td class="text-center py-0.5 whitespace-nowrap">3,250</td><td class="text-right py-0.5 whitespace-nowrap">0,00</td></tr>
                  <tr><td class="py-0.5 whitespace-nowrap">Equipaje Morro</td><td class="text-center py-0.5 whitespace-nowrap">10,0</td><td class="text-center py-0.5 whitespace-nowrap">0,600</td><td class="text-right py-0.5 whitespace-nowrap">6,00</td></tr>
                  <tr><td class="py-0.5 whitespace-nowrap">Equipaje Cabina</td><td class="text-center py-0.5 whitespace-nowrap">15,0</td><td class="text-center py-0.5 whitespace-nowrap">3,890</td><td class="text-right py-0.5 whitespace-nowrap">58,35</td></tr>
                  <tr class="font-bold text-[#0B2E59] dark:text-sky-300 bg-slate-50/80 dark:bg-slate-700/50"><td class="py-0.5 whitespace-nowrap">Zero Fuel Mass (ZFM)</td><td class="text-center py-0.5 whitespace-nowrap">1.435,0</td><td class="text-center py-0.5 whitespace-nowrap">2,409</td><td class="text-right py-0.5 whitespace-nowrap">3.457,35</td></tr>
                  <tr><td class="py-0.5 whitespace-nowrap">Fuel Despegue (Main)</td><td class="text-center py-0.5 whitespace-nowrap">140,0</td><td class="text-center py-0.5 whitespace-nowrap">2,630</td><td class="text-right py-0.5 whitespace-nowrap">368,20</td></tr>
                  <tr class="font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30"><td class="py-0.5 whitespace-nowrap">Takeoff Mass (TOM)</td><td class="text-center py-0.5 whitespace-nowrap">1.575,0</td><td class="text-center py-0.5 whitespace-nowrap">2,429</td><td class="text-right py-0.5 whitespace-nowrap">3.825,55</td></tr>
                </tbody>
              </table>
            </div>

            <div class="p-2 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 space-y-0.5">
              <strong>Taller Interactivo DA42 para el Alumno:</strong>
              <div>Los campos se completan y verifican paso a paso en el simulador dinámico DA42 con tolerancia técnica estricta. El simulador activa la comprobación de la envolvente oficial de centrado automáticamente al completar la tabla.</div>
            </div>
          </div>

          <!-- Footer -->
          <div class="pt-1.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 shrink-0">
            <span>MTOM Máxima: <strong>1.700 kg</strong> (1.785 kg MÄM)</span>
            <span>Límites CG: <strong>2,35 m - 2,48 m</strong></span>
          </div>
        </div>
      </div>

      <!-- Columna Derecha (lg:col-span-6) -->
      <div class="lg:col-span-6 flex flex-col">
        <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
          <!-- Header -->
          <div class="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px]">
              📈 ENVOLVENTE OFICIAL DE CG (DA42 AFM 6.4.4)
            </span>
            <a
              href="/images/DA42/limits/da42-mass-limits-table.png"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-0.5 shrink-0"
              title="Abrir envolvente oficial en nueva pestaña"
            >
              <span>Ver completa</span>
              <span>↗</span>
            </a>
          </div>

          <!-- Centro Visual Gráfica Oficial DA42 -->
          <div class="flex-1 min-h-0 w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-1 shadow-xs my-1">
            <img
              src="/images/DA42/limits/da42-mass-limits-table.png"
              alt="Envolvente oficial de masa y centrado Diamond DA42"
              class="max-h-full max-w-full w-auto h-full object-contain rounded-lg"
              style="height: 100%; max-height: 100%; width: auto; max-width: 100%; object-fit: contain;"
            />
          </div>

          <!-- Footer -->
          <div class="pt-1.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 shrink-0">
            <span>Límite Delantero: <strong>2,35 m</strong> (hasta 1.468 kg) → <strong>2,40 m</strong> (1.700 kg)</span>
            <span>Límite Trasero: <strong>2,48 m</strong></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->



<!-- DIAPOSITIVA 6.6: 6.6 Ejercicio Práctico 1B: Consumo de Ruta y Aterrizaje (LM & Envolvente) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 Twin Star (Continental CD-135 / CD-155) · TALLER INTERACTIVO 1B</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.6 Ejercicio Práctico 1B: Consumo de Ruta y Aterrizaje (LM &amp; Envolvente)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Masa y Centrado · Parte 2</span>
  </div>

  <div data-interactive-exercise="loadsheet_landing" data-aircraft="da42">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
      <!-- Columna Izquierda (lg:col-span-6) -->
      <div class="lg:col-span-6 flex flex-col">
        <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
          <!-- Header -->
          <div class="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px]">
                🛬 PARTE 2: ATERRIZAJE (LM &amp; CG)
              </span>
              <div class="text-xs sm:text-[13px] text-slate-500 font-medium mt-0.5">
                Consumo de Ruta (Trip Fuel) y Masa al Aterrizaje (LM) DA42
              </div>
            </div>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300">
              SIMULADOR
            </span>
          </div>

          <!-- Tabla de Datos -->
          <div class="space-y-1.5 my-auto">
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase border-b border-slate-100 dark:border-slate-700 pb-0.5">
                Balance de Consumo en Ruta y Aterrizaje DA42
              </strong>
              <div class="grid grid-cols-4 gap-1 text-[11px] font-mono text-slate-700 dark:text-slate-200 pt-0.5">
                <span class="font-bold">Parámetro</span>
                <span class="text-center font-bold">Masa (kg)</span>
                <span class="text-center font-bold">Brazo (m)</span>
                <span class="text-right font-bold">Momento (kg·m)</span>
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">Takeoff Mass (TOM)</span><span class="text-center font-bold text-[#0B2E59] dark:text-sky-300">1.575,0</span><span class="text-center font-bold text-[#0B2E59] dark:text-sky-300">2,429</span><span class="text-right font-bold text-[#0B2E59] dark:text-sky-300">3.825,55</span>
                <span class="text-rose-600 dark:text-rose-400">(-) Trip Fuel (Ruta)</span><span class="text-center text-rose-600 dark:text-rose-400">-21,0</span><span class="text-center text-rose-600 dark:text-rose-400">2,630</span><span class="text-right text-rose-600 dark:text-rose-400">-55,23</span>
                <span class="font-bold text-emerald-700 dark:text-emerald-400">Landing Mass (LM)</span><span class="text-center font-bold text-emerald-700 dark:text-emerald-400">1.554,0</span><span class="text-center font-bold text-emerald-700 dark:text-emerald-400">2,426</span><span class="text-right font-bold text-emerald-700 dark:text-emerald-400">3.770,32</span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/60 text-xs text-sky-900 dark:text-sky-200 space-y-0.5">
              <strong>Desplazamiento del Centro de Gravedad:</strong>
              <div>Al consumir combustible bimotor del depósito alar principal (brazo 2,63 m, situado por detrás del CG inicial), el CG se desplaza ligeramente hacia delante (<strong>ΔX = -0,003 m</strong>), manteniendo total estabilidad longitudinal en aproximación y aterrizaje.</div>
            </div>
          </div>

          <!-- Footer -->
          <div class="pt-1.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 shrink-0">
            <span>MLM Máxima: <strong>1.700 kg</strong></span>
            <span>Variación CG: <strong>2,429 m → 2,426 m</strong></span>
          </div>
        </div>
      </div>

      <!-- Columna Derecha (lg:col-span-6) -->
      <div class="lg:col-span-6 flex flex-col">
        <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
          <!-- Header -->
          <div class="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-[14px]">
              📉 COMPROBACIÓN DE ENVOLVENTE FINAL
            </span>
            <span class="text-xs text-slate-500 font-semibold">Desplazamiento en Vuelo DA42</span>
          </div>

          <!-- Centro Visual Gráfica -->
          <div class="flex-1 flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs my-2 text-center">
            <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-300 mb-2">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <strong class="text-sm text-[#0B2E59] dark:text-sky-300">Verificación Bipolar de Envolvente DA42</strong>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-sm">
              En el simulador interactivo se representa el vector que une el punto de despegue con el punto de aterrizaje, confirmando que la aeronave permanece 100% dentro de límites certificados durante todo el vuelo.
            </p>
          </div>

          <!-- Footer -->
          <div class="pt-1.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 shrink-0">
            <span>Punto Despegue: <strong>DENTRO</strong></span>
            <span>Punto Aterrizaje: <strong>DENTRO</strong></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.7: 6.7 Régimen de Crucero: Rendimiento y Consumo de Combustible -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 TWIN STAR · RENDIMIENTO DE CRUCERO</div>
      <h1 class="text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.7 Régimen de Crucero: Rendimiento y Consumo de Combustible</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tablas y Gráficas de Rendimiento</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between pb-0.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">REGÍMENES DE CRUCERO Y CONSUMO</span>
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 shrink-0">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">GESTIÓN MONO-PALANCA Y EFICIENCIA BIMOTOR</strong>
          <p class="text-[18px] text-slate-700 dark:text-slate-300 leading-snug">
            En la DA42, cada motor cuenta con palanca monomando (% LOAD). La FADEC/ECU gestiona automáticamente el combustible (Common Rail) y las hélices.
          </p>
        </div>

        <div class="grid grid-cols-3 gap-1.5 shrink-0">
          <!-- 60% CRUCERO ECONÓMICO -->
          <div class="p-1.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span class="font-bold text-sky-600 dark:text-sky-400 block uppercase text-[18px]">60% ECO</span>
            <div class="text-[18px] text-slate-700 dark:text-slate-300 leading-tight">
              1 mot: <strong>4,4 USG/h</strong><br>
              Tot: <strong>8,8 USG/h</strong><br>
              TAS: ~138 kts
            </div>
          </div>

          <!-- 70% CRUCERO NORMAL -->
          <div class="p-1.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 block uppercase text-[18px]">70% NORM</span>
            <div class="text-[18px] text-slate-700 dark:text-slate-300 leading-tight">
              1 mot: <strong>5,3 USG/h</strong><br>
              Tot: <strong>10,6 USG/h</strong><br>
              TAS: ~148 kts
            </div>
          </div>

          <!-- 80% CRUCERO RÁPIDO -->
          <div class="p-1.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span class="font-bold text-amber-600 dark:text-amber-400 block uppercase text-[18px]">80% FAST</span>
            <div class="text-[18px] text-slate-700 dark:text-slate-300 leading-tight">
              1 mot: <strong>6,2 USG/h</strong><br>
              Tot: <strong>12,4 USG/h</strong><br>
              TAS: ~158 kts
            </div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 shadow-2xs shrink-0 space-y-1">
          <strong class="text-sky-800 dark:text-sky-300 flex items-center gap-1.5 uppercase tracking-wide font-black text-[18px] leading-tight">
            <span>ℹ️</span> LECTURA DIRECTA DEL ÁBACO (FUEL FLOW POR MOTOR)
          </strong>
          <p class="font-medium text-[18px] leading-snug">
            Conforme al ábaco oficial del AFM de la DA42 (figura derecha), la curva representa el consumo <strong>por motor</strong>. En el ejemplo oficial a <strong>60% LOAD</strong> el consumo por motor es exactamente de <strong>4,4 US gal/h (16,5 L/h)</strong>, resultando en <strong>8,8 US gal/h (33,0 L/h)</strong> total bimotor. A <strong>70% LOAD</strong> es de <strong>5,3 US gal/h (10,6 total)</strong> y a <strong>80% LOAD</strong> es de <strong>6,2 US gal/h (12,4 total)</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">ÁBACO INTERACTIVO: FUEL FLOW</span>
          <span class="text-[18px] font-bold px-3 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border border-sky-300">INTERACTIVO</span>
        </div>

        <div
          data-interactive-exercise="fuel_chart"
          data-aircraft="da42"
          class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 shadow-xs flex flex-col"
        ></div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.8: 6.8 Ground Speed, Viento y Cálculo de Combustible Horario -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 TWIN STAR · NAVEGACIÓN Y VIENTO</div>
      <h1 class="text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.8 Ground Speed, Viento y Cálculo de Combustible Horario</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Cinemática de Vuelo</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between pb-0.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">EFECTO DEL VIENTO EN RUTA</span>
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 shrink-0">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">EL TRIÁNGULO DE VELOCIDADES</strong>
          <p class="text-[18px] text-slate-700 dark:text-slate-300 leading-snug">
            La velocidad verdadera (TAS) proporciona la velocidad respecto al aire. El viento en altura modifica la trayectoria, resultando en la deriva y la velocidad respecto al suelo (Ground Speed / GS).
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 shrink-0">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 block uppercase text-[18px]">Tiempo en Ruta (ETE):</span>
            <div class="font-mono text-sky-600 dark:text-sky-400 font-bold text-[18px]">ETE = (Dist / GS) × 60</div>
            <div class="text-slate-600 dark:text-slate-400 text-[18px] leading-tight">Cálculo de cada tramo en minutos.</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 block uppercase text-[18px]">Trip Fuel Bimotor:</span>
            <div class="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-[18px]">Trip [L] = ETE [h] × 33 L/h</div>
            <div class="text-slate-600 dark:text-slate-400 text-[18px] leading-tight">Consumo total al 60% (8,8 USG/h).</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 shadow-2xs shrink-0 space-y-1">
          <strong class="text-sky-800 dark:text-sky-300 flex items-center gap-1.5 uppercase tracking-wide font-black text-[18px] leading-tight">
            <span>ℹ️</span> EJEMPLO PRÁCTICO DA42 (100 NM)
          </strong>
          <p class="font-medium text-[18px] leading-snug">
            Para un tramo de <strong>100 NM</strong> a FL80 a 60% LOAD (TAS = 140 kt) y viento en cara de 15 kt (GS = 125 kt):<br>
            &bull; <strong>ETE</strong> = (100 / 125) &times; 60 = <strong>48,0 min</strong> (0,80 h).<br>
            &bull; <strong>Trip Fuel</strong> = 0,80 h &times; 33,0 L/h = <strong>26,4 Litros</strong> (7,04 USG).<br>
            &bull; <strong>Masa JET A-1</strong> = 26,4 L &times; 0,84 kg/L = <strong>22,18 kg</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">TRIÁNGULO DE VELOCIDADES</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/DA42/triangulo-velocidades.png"
            alt="Triángulo de velocidades y cinemática del viento en navegación"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.9: 6.9 Ejercicio Práctico: Tablas de Crucero y Autonomía -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 TWIN STAR · TALLER INTERACTIVO 2</div>
      <h1 class="text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.9 Ejercicio Práctico: Tablas de Crucero y Autonomía</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tabla a 60% de Potencia Bimotor</span>
  </div>

  <div data-interactive-exercise="cruise" data-aircraft="da42">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
      <!-- Columna Izquierda (lg:col-span-6) -->
      <div class="lg:col-span-6 flex flex-col">
        <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
          <!-- Header -->
          <div class="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">
                📊 CRUCERO AL 60% LOAD
              </span>
              <div class="text-[18px] text-slate-500 font-medium mt-0.5">
                Régimen Estándar de Escuela DA42 Twin Star
              </div>
            </div>
            <span class="px-2.5 py-0.5 rounded text-[18px] font-bold uppercase tracking-wider bg-sky-100 text-[#0B2E59] border border-sky-300">
              SIMULADOR
            </span>
          </div>

          <!-- Tabla de Datos -->
          <div class="space-y-1.5 my-auto">
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] uppercase border-b border-slate-100 dark:border-slate-700 pb-0.5">
                Datos AFM Sección 5.3.11 (60% Carga Bimotor)
              </strong>
              <div class="grid gap-1 text-[18px] font-mono text-slate-700 dark:text-slate-200 pt-0.5" style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr));">
                <span class="font-bold">Altitud</span>
                <span class="text-center font-bold">KTAS</span>
                <span class="text-center font-bold">Consumo</span>
                <span class="text-center font-bold">Alcance</span>
                <span class="text-right font-bold">Autonomía</span>
                <span>2000 ft</span><span class="text-center">128</span><span class="text-center">33,0 L/h</span><span class="text-center">733 NM</span><span class="text-right">5,7 h</span>
                <span>4000 ft</span><span class="text-center">132</span><span class="text-center">33,0 L/h</span><span class="text-center">755 NM</span><span class="text-right">5,7 h</span>
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">6000 ft</span><span class="text-center font-bold text-[#0B2E59] dark:text-sky-300">136</span><span class="text-center font-bold text-[#0B2E59] dark:text-sky-300">33,0 L/h</span><span class="text-center font-bold text-[#0B2E59] dark:text-sky-300">778 NM</span><span class="text-right font-bold text-[#0B2E59] dark:text-sky-300">5,7 h</span>
                <span>8000 ft</span><span class="text-center">139</span><span class="text-center">33,0 L/h</span><span class="text-center">795 NM</span><span class="text-right">5,7 h</span>
              </div>
            </div>

            <div class="p-2 rounded-xl bg-sky-50/70 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/60 text-[18px] text-sky-900 dark:text-sky-200 space-y-0.5">
              <strong>Simulador Interactivo para el Alumno:</strong>
              <div>Permite seleccionar el régimen de potencia (50% a 100%) y altitud de vuelo para calcular automáticamente la velocidad verdadera (KTAS), gasto horario bimotor y tiempo de vuelo.</div>
            </div>
          </div>

          <!-- Footer -->
          <div class="pt-1.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[18px] text-slate-500 shrink-0">
            <span>Régimen Estándar: <strong>60% Load</strong></span>
            <span>Consumo Fijo: <strong>33,0 L/h (8,8 US gal/h)</strong></span>
          </div>
        </div>
      </div>

      <!-- Columna Derecha (lg:col-span-6) -->
      <div class="lg:col-span-6 flex flex-col">
        <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
          <!-- Header -->
          <div class="flex items-center justify-between pb-1.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">
              🎯 RESOLUCIÓN OPERATIVA DE RUTA
            </span>
            <span class="text-[18px] text-slate-500 font-semibold">Régimen Oficial DA42</span>
          </div>

          <!-- Centro Visual Gráfica -->
          <div class="flex-1 flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs my-2 text-center">
            <div class="w-16 h-16 rounded-full bg-sky-100 dark:bg-sky-950/60 flex items-center justify-center text-[#2361A8] dark:text-sky-300 mb-2">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <strong class="text-[18px] text-[#0B2E59] dark:text-sky-300">Módulo de Planificación de Crucero DA42</strong>
            <p class="text-[18px] text-slate-600 dark:text-slate-400 mt-1 max-w-sm">
              En el reproductor interactivo este panel compara el consumo bimotor a diferentes regímenes, verificando autonomía y reservas antes del vuelo.
            </p>
          </div>

          <!-- Footer -->
          <div class="pt-1.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[18px] text-slate-500 shrink-0">
            <span>Tanques Principales: <strong>189 L utilizables</strong></span>
            <span>Autonomía Máxima: <strong>5,7 horas</strong></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- pagebreak -->



<!-- DIAPOSITIVA 6.10: 6.10 Política de Combustible: Part-NCO.OP.125 & Manual OM Blue Team -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 TWIN STAR · POLÍTICA DE COMBUSTIBLE</div>
      <h1 class="text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.10 Política de Combustible: Part-NCO.OP.125 & Manual OM Blue Team</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Seguridad Operacional y Reservas Bimotor</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">POLÍTICA DE COMBUSTIBLE OFICIAL DA42</span>
        </div>

        <div class="space-y-1.5 text-[18px] text-slate-700 dark:text-slate-300 flex flex-col justify-start">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div class="flex justify-between items-center mb-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300">1. Taxi Fuel (Rodaje y Run-up FADEC):</strong>
              <span class="font-mono font-bold text-sky-600 dark:text-sky-400">6,0 L (1,58 USG)</span>
            </div>
            <div class="leading-snug">Puesta en marcha bimotor, rodaje al punto de espera y comprobación automática de ECU/FADEC de ambos motores.</div>
          </div>

          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div class="flex justify-between items-center mb-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300">2. Trip Fuel (Combustible de Ruta):</strong>
              <span class="font-mono font-bold text-sky-600 dark:text-sky-400">Según ETE (33,0 L/h)</span>
            </div>
            <div class="leading-snug">Calculado con el ETE de cada tramo y el consumo horario bimotor de 33,0 L/h (8,8 USG/h / 16,5 L/h por motor al 60% Load).</div>
          </div>

          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div class="flex justify-between items-center mb-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300">3. Alternativo (Desvío):</strong>
              <span class="font-mono font-bold text-sky-600 dark:text-sky-400">11,0 L (2,91 USG)</span>
            </div>
            <div class="leading-snug">Combustible para maniobra de aproximación frustrada en destino y vuelo al aeródromo alternativo asignado (~20 min).</div>
          </div>

          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div class="flex justify-between items-center mb-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300">4. Reserva Final Obligatoria OM:</strong>
              <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">49,5 L (13,1 USG)</span>
            </div>
            <div class="leading-snug">EASA Part-NCO exige 45 min (24,8 L). <strong>Blue Team exige por OM 1 hora 30 minutos obligatoria</strong> (49,5 L) para máxima seguridad bimotor.</div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs shrink-0">
          <strong class="text-amber-800 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide">
            <span>⚠️</span> RAMP FUEL MÍNIMO
          </strong>
          <span><strong>Ramp Fuel = Taxi (6,0 L) + Trip + Alternativo (11,0 L) + Reserva OM 1:30 (49,5 L)</strong>. Nunca se despegará si la cantidad a bordo es inferior a este total.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">POLÍTICA DE COMBUSTIBLE EASA & OM</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex flex-col justify-center items-center p-1.5 shadow-xs">
          <img
            src="/images/DA42/fuel-planning-blocks.jpg"
            alt="Esquema reglamentario de política de combustible EASA Part-NCO y OM Blue Team DA42"
            class="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>



<!-- pagebreak -->



<!-- DIAPOSITIVA 6.11: 6.11 Ejercicio Práctico: Planificación de Combustible F.OPS.02 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 TWIN STAR · TALLER INTERACTIVO 3</div>
      <h1 class="text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.11 Ejercicio Práctico: Planificación de Combustible F.OPS.02</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Part-NCO.OP.125 & Manual OM</span>
  </div>

  <div data-interactive-exercise="fuel" data-aircraft="da42">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
      <!-- Columna Izquierda (lg:col-span-6) -->
      <div class="lg:col-span-6 flex flex-col">
        <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
          <!-- Header -->
          <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">
                ⛽ F.OPS.02 · HOJA DE CARGA DE COMBUSTIBLE
              </span>
              <div class="text-[18px] text-slate-500 font-medium">
                Cálculo de Despacho Operativo DA42 Twin Star
              </div>
            </div>
            <span class="px-2.5 py-0.5 rounded text-[18px] font-bold uppercase tracking-wider bg-sky-100 text-[#0B2E59] border border-sky-300">
              SIMULADOR
            </span>
          </div>

          <!-- Tabla de Datos -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 shrink-0">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] uppercase border-b border-slate-100 dark:border-slate-700 pb-0.5">
              Desglose F.OPS.02 de Combustible Mínimo Bimotor
            </strong>
            <div class="grid gap-1 text-[18px] font-mono text-slate-700 dark:text-slate-200 pt-0.5" style="display: grid; grid-template-columns: 2fr 1fr 1fr;">
              <span class="font-bold">Concepto</span>
              <span class="text-center font-bold">Tiempo</span>
              <span class="text-right font-bold">Litros (60%)</span>
              <span>Combustible de Ruta (Trip)</span><span class="text-center">1h 00min</span><span class="text-right">33,0 L</span>
              <span class="font-bold text-amber-700 dark:text-amber-400">Reserva Final Blue Team</span><span class="text-center font-bold text-amber-700 dark:text-amber-400">1h 30min</span><span class="text-right font-bold text-amber-700 dark:text-amber-400">49,5 L</span>
              <span>Proceder a Alternativo</span><span class="text-center">20min</span><span class="text-right">11,0 L</span>
              <span>Rodaje y Calentamiento (Taxi)</span><span class="text-center">-</span><span class="text-right">6,0 L</span>
              <span class="font-bold text-emerald-700 dark:text-emerald-400">Combustible Mínimo Rampa</span><span class="text-center font-bold text-emerald-700 dark:text-emerald-400">2h 50min</span><span class="text-right font-bold text-emerald-700 dark:text-emerald-400">99,5 L</span>
            </div>
          </div>

          <div class="p-2 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 text-[18px] text-amber-900 dark:text-amber-200 space-y-0.5 shrink-0">
            <strong class="text-[18px] block">Regla OM Blue Team:</strong>
            <p class="text-[18px] leading-snug">
              La escuela exige un mínimo de <strong>1h 30min de reserva final</strong> (49,5 L bimotor), superando el mínimo legal de 45 minutos de EASA Part-NCO para garantizar la máxima seguridad en instrucción.
            </p>
          </div>

          <!-- Footer -->
          <div class="pt-1 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[18px] text-slate-500 shrink-0">
            <span>Reserva Final OM: <strong>49,5 L (13,1 US gal)</strong></span>
            <span>Densidad Jet A-1: <strong>0,84 kg/L</strong></span>
          </div>
        </div>
      </div>

      <!-- Columna Derecha (lg:col-span-6) -->
      <div class="lg:col-span-6 flex flex-col">
        <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
          <!-- Header -->
          <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">
              📋 VERIFICACIÓN REGISTRAL F.OPS.02
            </span>
            <span class="text-[18px] text-slate-500 font-semibold">Validación Automática</span>
          </div>

          <!-- Centro Visual Gráfica -->
          <div class="flex-1 flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs text-center space-y-2">
            <div class="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <strong class="text-[18px] text-[#0B2E59] dark:text-sky-300 block">Simulador de Planificación F.OPS.02 · DA42</strong>
            <p class="text-[18px] text-slate-600 dark:text-slate-400 leading-snug max-w-sm">
              En el reproductor interactivo este panel comprueba que el combustible embarcado sea suficiente para la ruta bimotor, la reserva final Blue Team (1h 30min) y la aproximación al alternativo.
            </p>
          </div>

          <!-- Footer -->
          <div class="pt-1 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[18px] text-slate-500 shrink-0">
            <span>Part-NCO.OP.125: <strong>CUMPLIDO</strong></span>
            <span>Manual OM Blue Team: <strong>CONFORME</strong></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<!-- pagebreak -->



<!-- DIAPOSITIVA 6.12: 6.12 Performance de Despegue: Parámetros y Factores de Corrección -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 TWIN STAR · PERFORMANCE DE DESPEGUE</div>
      <h1 class="text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.12 Performance de Despegue: Parámetros y Factores de Corrección</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimientos de Certificación AFM</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1" style="height: 590px;">
        <div class="flex items-center justify-between pb-0.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">CONDICIONES DE DESPEGUE</span>
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 text-[18px]">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONDICIONES DE REFERENCIA (AFM SECCIÓN 5)</strong>
          <p class="text-[18px] text-slate-700 dark:text-slate-300 leading-snug m-0">
            Potencia: <strong>MAX (100% Load bimotor)</strong> &bull; Flaps: <strong>UP</strong> (o T/O) &bull; Asfalto seco.<br>
            &bull; Rotación v<sub>r</sub>: <strong>70 KIAS</strong> (UP) / 67 (T/O) &bull; 50 ft: <strong>77 KIAS</strong>.<br>
            &bull; Ascenso bimotor v<sub>y</sub>: <strong>79 KIAS</strong> &bull; Monomotor v<sub>ySE</sub>: <strong>82 KIAS</strong>.
          </p>
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 text-[18px]">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FACTORES OFICIALES DE CORRECCIÓN DE PISTA</strong>
          <div class="space-y-0.5 text-slate-700 dark:text-slate-300 text-[18px] leading-snug">
            <div>&bull; <strong>Viento cara / cola:</strong> Corrección gráfica directa en ábaco.</div>
            <div>&bull; <strong>Hierba seca corta (&le; 5 cm):</strong> <strong>+10%</strong> en carrera de despegue.</div>
            <div>&bull; <strong>Hierba media (5-10 cm) / alta (&gt; 10 cm):</strong> <strong>+15%</strong> / <strong>+25%</strong>.</div>
            <div>&bull; <strong>Pista húmeda o blanda:</strong> hasta <strong>+20% / +25%</strong> adicional.</div>
            <div>&bull; <strong>Pendiente ascendente (+2%):</strong> <strong>+10%</strong> en distancia total 50 ft.</div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs shrink-0">
          <strong class="text-amber-800 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>⚠️</span> CRITERIO LEGAL Y SEGURIDAD BIMOTOR
          </strong>
          <span>TORA / TODA debe ser <strong>&ge; distancia total sobre obstáculo 50 ft</strong> con factores. En bimotor, evaluar aceleración-parada y ascenso monomotor tras v<sub>ySE</sub>.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6 con Selector Interactivo de Ábacos) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="w-full h-full flex-1 min-h-0 flex flex-col justify-center items-center overflow-hidden" data-interactive-exercise="takeoff_charts" data-aircraft="da42">
          <img
            src="/images/DA42/da42-takeoff-ground-roll.png"
            alt="Ábaco Take-Off Ground Roll DA42"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>



<!-- pagebreak -->



<!-- DIAPOSITIVA 6.13: 6.13 Performance de Aterrizaje: Parámetros y Factores de Corrección -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA42 TWIN STAR · PERFORMANCE DE ATERRIZAJE</div>
      <h1 class="text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.13 Performance de Aterrizaje: Parámetros y Factores de Corrección</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimientos de Certificación AFM</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr;">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1" style="height: 590px;">
        <div class="flex items-center justify-between pb-0.5 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">CONDICIONES DE ATERRIZAJE</span>
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 text-[18px]">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONDICIONES DE REFERENCIA (FLAPS LDG)</strong>
          <p class="text-[18px] text-slate-700 dark:text-slate-300 leading-snug m-0">
            Palancas: <strong>Ambas IDLE</strong> &bull; Flaps: <strong>LDG</strong> &bull; Pista asfaltada seca y nivelada.<br>
            &bull; Velocidad aproximación (v<sub>REF</sub>): <strong>76 KIAS</strong> (1700 kg) / 78 KIAS (1785 kg).<br>
            &bull; Valores ISA nivel mar (1700 kg): Distancia 50 ft = <strong>572 m</strong> &bull; Carrera = <strong>323 m</strong>.
          </p>
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 text-[18px]">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-[18px] border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FACTORES OFICIALES DE CORRECCIÓN DE PISTA</strong>
          <div class="space-y-0.5 text-slate-700 dark:text-slate-300 text-[18px] leading-snug">
            <div>&bull; <strong>Viento cara / cola:</strong> Corrección gráfica directa en ábaco.</div>
            <div>&bull; <strong>Hierba seca corta (&le; 5 cm):</strong> <strong>+5%</strong> en carrera de aterrizaje.</div>
            <div>&bull; <strong>Hierba media (5-10 cm) / alta (&gt; 10 cm):</strong> <strong>+15%</strong> / <strong>+25%</strong>.</div>
            <div>&bull; <strong>Hierba mojada o blanda:</strong> <strong>+10% adicional</strong> sobre hierba.</div>
            <div>&bull; <strong>Pendiente descendente (-2% downhill):</strong> <strong>+10%</strong> en distancia 50 ft.</div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-snug shadow-2xs shrink-0">
          <strong class="text-amber-800 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-[18px]">
            <span>⚠️</span> COMPARACIÓN CON LDA Y FACTOR 1,43
          </strong>
          <span>La distancia sobre 50 ft debe ser inferior a la LDA disponible aplicando el margen reglamentario escolar <strong>1,43</strong>. Comprobar además gradiente de frustrada (5,25%).</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-[18px]">ÁBACO DE DISTANCIA DE ATERRIZAJE (AFM 5.3.11)</span>
        </div>
        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex flex-col justify-center items-center p-1.5 shadow-xs">
          <img
            src="/images/DA42/da42-landing-distance.png"
            alt="Ábaco oficial de distancia de aterrizaje DA42 Twin Star"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>`,
};

export const DA42_LESSONS = [DA42_LESSON_1, DA42_LESSON_2, DA42_LESSON_3, DA42_LESSON_4, DA42_LESSON_5, DA42_LESSON_6];



