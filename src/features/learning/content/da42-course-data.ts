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
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-sm sm:text-base border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">OBJETO DEL CURSO</strong>
            <p class="text-slate-700 dark:text-slate-200 text-sm sm:text-[15px] leading-relaxed">
              Este curso está basado en el Manual de Vuelo oficial (AFM Doc. # 7.01.05-E) de la Diamond DA42 y suplementos aprobados. Contiene la información técnica, limitaciones y procedimientos necesarios para la operación segura de la aeronave bimotor equipada con motores Continental CD-135 / CD-155 Turbo Diésel operando con JET-A1. Este curso no sustituye al AFM oficial de Diamond Aircraft.
            </p>
          </div>

          <!-- Simbología de Seguridad AFM -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-sm sm:text-base border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">SIMBOLOGÍA OFICIAL DE SEGURIDAD AFM</strong>

            <div class="flex items-start gap-2 text-xs sm:text-sm leading-tight">
              <span class="font-bold text-red-600 dark:text-red-400 shrink-0 uppercase tracking-wide min-w-[85px]">WARNING:</span>
              <span class="text-slate-800 dark:text-slate-200">El incumplimiento del procedimiento correspondiente causa una degradación inmediata o grave de la seguridad de vuelo, lesiones severas o la muerte.</span>
            </div>

            <div class="flex items-start gap-2 text-xs sm:text-sm leading-tight">
              <span class="font-bold text-amber-600 dark:text-amber-400 shrink-0 uppercase tracking-wide min-w-[85px]">CAUTION:</span>
              <span class="text-slate-800 dark:text-slate-200">El incumplimiento del procedimiento correspondiente conduce a daños en el motor, sistemas de la aeronave o a una degradación menor/a largo plazo de la seguridad.</span>
            </div>

            <div class="flex items-start gap-2 text-xs sm:text-sm leading-tight">
              <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0 uppercase tracking-wide min-w-[85px]">NOTE:</span>
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

          <!-- Advertencia AFM Documentación -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-xs sm:text-sm leading-tight text-amber-900 dark:text-amber-200">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (AFM 1.2):</strong> La DA42 es un bimotor ligero con alta fiabilidad certificada. No obstante, un fallo de motor no es imposible. El cumplimiento de las limitaciones operacionales y el transporte del AFM oficial (bolsa lateral delantera izquierda) y de la G1000 CRG (bolsa trasera delantera izquierda) son obligatorios.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Aeronave DA42 Twin Star (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">DIAMOND DA42 TWIN STAR</span>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="/images/DA42/exterior/Gemini_Generated_Image_4l5w9r4l5w9r4l5w.png" alt="Diamond DA42 Twin Star" class="w-full h-full max-h-[440px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
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
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESPECIFICACIONES DE PLANTA DE POTENCIA (ENGINES)</span>
        </div>
        <div class="space-y-2 py-0.5 text-xs">
          <!-- Caja única unificada de datos del motor y mandos -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MOTORES CONTINENTAL CD-135 / CD-155</strong>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed mt-1">
                La planta motriz consta de dos (2) motores instalados en góndolas alares independientes. Motores de 4 cilindros en línea, cuatro tiempos, refrigeración líquida con cárter húmedo, doble árbol de levas en cabeza (DOHC), 4 válvulas por cilindro, inyección directa Common-Rail a alta presión y turbocompresor con intercooler.
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Continental CD-135</span>
                  <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">99 kW (135 CV DIN / 133 BHP)</p>
                  <p class="text-[10px] text-slate-500">Cilindrada: 1.689 cm³ · 2300 RPM</p>
                </div>
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Continental CD-155</span>
                  <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">114 kW (155 CV DIN / 152 BHP)</p>
                  <p class="text-[10px] text-slate-500">Cilindrada: 1.991 cm³ · 2300 RPM</p>
                </div>
              </div>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed mt-1">
                Ambos motores están controlados íntegramente por sistema digital FADEC independiente con doble canal redundante (ECU A y ECU B). La hélice es accionada mediante caja reductora integrada (Gearbox, relación i = 1,69) con amortiguador mecánico de vibraciones y embrague de sobrecarga.
              </p>
            </div>

            <div class="border-t border-slate-100 dark:border-slate-700 pt-1.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs pb-0.5 uppercase tracking-wide">MANDOS Y SISTEMAS CONVENCIONALES ELIMINADOS</strong>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                La cabina bimotor de la DA42 prescinde de los mandos analógicos de la aviación convencional:
              </p>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-0.5 pt-1">
                <li class="flex items-start gap-1.5">• <span><strong>Sin mandos de mezcla:</strong> Regulación estequiométrica automática electrónica gestionada por la ECU.</span></li>
                <li class="flex items-start gap-1.5">• <span><strong>Sin mandos de paso de hélice:</strong> Gobernador hidráulico accionado por FADEC según demanda de LOAD (%) en las Power Levers.</span></li>
                <li class="flex items-start gap-1.5">• <span><strong>Sin magnetos ni bujías de chispa:</strong> Ciclo diésel por compresión con bujías de precalentamiento (Glow Plugs).</span></li>
                <li class="flex items-start gap-1.5">• <span><strong>Sin calefacción de carburador:</strong> Dispone en su lugar de mandos independientes de aire alternativo (Alternate Air).</span></li>
              </ul>
            </div>
          </div>

          <!-- Warning eléctrico AFM -->
          <div class="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (AFM):</strong> Ambos motores requieren energía eléctrica continua para operar (inyectores y Common Rail). Si fallan la batería principal y el alternador de una góndola, el motor depende de su propia batería de reserva FADEC (ECU Backup Battery, mín. 30 minutos). Prestar máxima atención a los mensajes de fallo de alternador (L/R ALTN FAIL) y voltaje (LOW VOLTS) en el Garmin G1000.</span>
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
            <span><strong>CAUTION (AFM):</strong> Las Power Levers dobles deben accionarse de forma suave y progresiva para evitar sobrevelocidades transitorias de hélice (overspeeding) y desequilibrios de empuje asimétrico, no superando bajo ningún concepto las 2500 RPM (máx. 20 segundos).</span>
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
        <div class="space-y-2 py-0.5 text-xs">
          <!-- Caja única unificada de datos técnicos y principio operativo -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CARACTERÍSTICAS DEL CONJUNTO DE HÉLICES</strong>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
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
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed mt-1.5">
                Palas de madera laminada recubiertas de composite con perfil de acero inoxidable en el borde de ataque y lámina protectora de poliuretano en la zona del buje (spinner), combinando ligereza y absorción de vibraciones.
              </p>
            </div>

            <div class="border-t border-slate-100 dark:border-slate-700 pt-1.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs pb-0.5 uppercase tracking-wide">FUNCIONAMIENTO CONSTANT SPEED, FEATHERING Y START LOCKS</strong>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
                La hélice es de velocidad constante (Constant Speed). El ángulo de paso se regula electrohidráulicamente con aceite del motor mediante una electroválvula gestionada directamente por la ECU. No existe mando de hélice en cabina: la ECU ajusta las palas automáticamente para mantener el régimen óptimo (2.300 RPM en despegue y crucero).
              </p>
              <div class="grid grid-cols-3 gap-1 pt-1 text-[10px]">
                <div class="p-1 rounded bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-[#0B2E59] dark:text-sky-300 block">Low Pitch</span>
                  <strong>12° ± 0.2°</strong>
                </div>
                <div class="p-1 rounded bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-[#0B2E59] dark:text-sky-300 block">Start Lock</span>
                  <strong>15° ± 1°</strong>
                </div>
                <div class="p-1 rounded bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700">
                  <span class="font-bold text-[#0B2E59] dark:text-sky-300 block">Feathered</span>
                  <strong>81° ± 1°</strong>
                </div>
              </div>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed mt-1">
                <strong>Feathering (Embanderado):</strong> La presión de aceite lleva las palas a paso fino. Ante una parada de motor o situar el Engine Master en OFF en vuelo, la pérdida de presión permite que los contrapesos centrífugos y el muelle lleven la hélice a posición de bandera (81°), eliminando la resistencia de molinete (windmilling).
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed mt-1">
                <strong>Start Locks:</strong> Por debajo de ~1300 RPM en tierra, pestillos centrífugos bloquean mecánicamente las palas en 15° (Start Lock). Evitan que la hélice se embandere al apagar en el suelo, permitiendo el posterior arranque sin sobrecargar el motor de arranque ni la reductora.
              </p>
            </div>
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

          <!-- Caution AFM Desembanderado en Vuelo -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200 shrink-0">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (AFM 2.4):</strong> Si un motor se apaga en vuelo, embandera automáticamente. Para reencendido en vuelo (Unfeathering) se requiere accionar el arrancador dentro de la envolvente oficial AFM de reencendido: velocidad indicada entre 80 y 120 KIAS y altitud máxima de 6000 ft.</span>
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
          <!-- Caja única unificada de combustibles y depósitos -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <!-- Combustibles autorizados y densidad -->
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">COMBUSTIBLE AUTORIZADO Y EXCLUSIVO</strong>
              <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 mt-1">
                <p>• <strong>Queroseno de aviación:</strong> <strong>JET A-1 (ASTM D 1655)</strong>. Densidad de cálculo estándar: <strong>0,84 kg/L</strong>.</p>
                <p>• <strong>Operación exclusiva de flota:</strong> Toda la operación se realiza únicamente con JET A-1 certificado. Prohibido el repostaje de gasolinas aeronáuticas (AVGAS 100LL).</p>
              </div>
            </div>

            <!-- Capacidad de depósitos -->
            <div class="border-t border-slate-100 dark:border-slate-700 pt-1.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs pb-0.5 uppercase tracking-wide">CAPACIDADES OFICIALES AFM (MAIN Y AUXILIARY TANKS)</strong>
              <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 pt-0.5">
                <p>• <strong>Main Tanks (depósitos principales alares LH y RH):</strong> 2 x 26,0 US gal (52,0 US gal / 196,8 L) totales | <strong>2 x 25,0 US gal (50,0 US gal / 189,2 L) utilizables</strong>. Inutilizable: 2 x 1,0 US gal (7,6 L).</p>
                <p>• <strong>Auxiliary Tanks (depósitos auxiliares en góndolas alares, OÄM 42-056):</strong> 2 x 13,7 US gal (27,4 US gal / 104,0 L) totales | <strong>2 x 13,2 US gal (26,4 US gal / 100,0 L) utilizables</strong>. Inutilizable: 2 x 0,5 US gal.</p>
                <p>• <strong>Capacidad Total Flota (con Aux Tanks):</strong> <strong>79,4 US gal (300,8 L) totales</strong> &nbsp;|&nbsp; <strong>76,4 US gal (289,2 L) utilizables</strong> &nbsp;|&nbsp; Inutilizable total: 3,0 US gal (11,4 L).</p>
                <p>• <strong>Desbalance máximo permisible entre LH y RH Main Tank:</strong> <strong>5,0 US gal (aprox. 19 L)</strong>.</p>
              </div>
            </div>

            <!-- Arquitectura de alimentación y Crossfeed -->
            <div class="border-t border-slate-100 dark:border-slate-700 pt-1.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs pb-0.5 uppercase tracking-wide">LÓGICA DE ALIMENTACIÓN, RETORNO TÉRMICO Y CROSSFEED</strong>
              <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 pt-0.5">
                <p>• <strong>Alimentación normal:</strong> Cada motor toma combustible de su depósito principal correspondiente (LH desde Main Tank izquierdo, RH desde Main Tank derecho) a través de su selector de combustible (Fuel Selector en posición <code>ON</code>).</p>
                <p>• <strong>Operación CROSSFEED:</strong> Al seleccionar <code>CROSSFEED</code>, el motor correspondiente se alimenta directamente del depósito principal opuesto. Permite corregir desbalances laterales de masa alar y ampliar la autonomía del motor operativo con motor inoperativo (OEI).</p>
                <p>• <strong>Trasvase desde Aux Tanks:</strong> Bombas eléctricas dedicadas trasvasan el combustible de los tanques auxiliares a los principales respectivos mediante los interruptores de control.</p>
                <p>• <strong>Retorno térmico:</strong> El exceso de combustible a alta presión de la Common Rail regresa a los Main Tanks a alta temperatura, calefactando el depósito y previniendo la congelación en altitud.</p>
              </div>
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
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.5 Fluidos de Servicio y Mantenimiento</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Fluidos de Motor, Caja Reductora, Sistema de Refrigeración y De-ice</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">LUBRICACIÓN Y REFRIGERACIÓN (LIQUIDS SPECIFICATION)</span>
        </div>

        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Caja única unificada de fluidos -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <!-- Fluidos específicos (3 columnas) -->
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ESPECIFICACIONES OFICIALES DE FLUIDOS AFM</strong>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-1 text-[11px]">
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Aceite de Motor</span>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell Helix Ultra 5W30 / 5W40</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• AeroShell Oil Diesel 10W-40</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Sintético API SL/CF</p>
                  <p class="text-[9px] text-slate-500 pt-0.5 font-medium">Cárter: Mín. 4,5 L / Máx. 6,0 L</p>
                </div>
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Aceite Reductora</span>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell EP 75W90 API GL-4</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell Spirax S4 G 75W-90</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Centurion Gearbox Oil N1</p>
                  <p class="text-[9px] text-slate-500 pt-0.5 font-medium">Mirilla visual en góndola</p>
                </div>
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Refrigerante (Coolant)</span>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">50:50 Agua / Anticongelante</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• BASF Glysantin Protect Plus (G48)</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• BASF Glysantin Alu Protect (G30)</p>
                  <p class="text-[9px] text-slate-500 pt-0.5 font-medium">Congelación: -36 °C (-32.8 °F)</p>
                </div>
              </div>
            </div>

            <!-- Pautas de inspección y servicio del AFM -->
            <div class="border-t border-slate-100 dark:border-slate-700 pt-1.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs pb-0.5 uppercase tracking-wide">PAUTAS DE INSPECCIÓN PREVUELO Y SERVICIO</strong>
              <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 pt-0.5">
                <p>• <strong>Inspección de niveles:</strong> Nivel de aceite de cada motor comprobado con su varilla (esperar entre 5 y 15 min tras parada para retorno de aceite al cárter). Nivel de aceite de caja reductora comprobado en la mirilla de la góndola (debe superar la mitad de la mirilla). Refrigerante supervisado en cabina mediante indicación continua y alerta <code>WATER LEVEL</code> en el Garmin G1000.</p>
                <p>• <strong>Líquido de frenos:</strong> Fluido hidráulico mineral <code>AeroShell Fluid 41</code> (MIL-PRF-5606).</p>
                <p>• <strong>Sistema de Protección contra Hielo (Informativo AFM):</strong> La DA42 contempla en AFM el sistema opcional TKS de protección contra hielo con fluido <code>AL-5 (DTD 406B)</code> en paneles porosos de borde de ataque y anillos de hélice. <strong>En la operación habitual de nuestra flota este sistema se encuentra fuera de servicio / inoperativo y sin carga de fluido</strong>, por lo que la aeronave <strong>no está despachada para volar en condiciones de engelamiento conocido (Known Icing)</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Supervisión en Prevuelo (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 w-full flex flex-col justify-start items-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">SUPERVISIÓN DE FLUIDOS EN PREVUELO</span>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex flex-col justify-start items-center p-2 lesson-img-wrapper mt-1" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/1.5-fluidos.jpg?v=1" alt="Supervisión de Fluidos de Servicio" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>

          <!-- Warning Niveles de Fluido -->
          <div class="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200 shrink-0">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (AFM 2.4):</strong> Los motores no deben arrancarse bajo ninguna circunstancia si el nivel de aceite motor o de reductora es inferior al mínimo admisible, o si la alerta WATER LEVEL permanece activa en el G1000. Notificar a mantenimiento para corregir la causa de la fuga antes de cualquier vuelo.</span>
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
                <p>• <strong>Power Levers (LH & RH):</strong> Monopalancas duales independientes en % LOAD (0 a 100%).</p>
                <p>• <strong>Engine Master (LH & RH):</strong> Interruptores de alimentación ECU, solenoides y embanderado.</p>
                <p>• <strong>Electric Master:</strong> Llave rotativa de 3 posiciones: OFF, ON y START.</p>
                <p>• <strong>ECU Test Buttons (LH & RH):</strong> Pulsadores de autotest prevuelo en ralentí y reset de avisos.</p>
                <p>• <strong>ECU Swap Switches (LH & RH):</strong> Conmutadores de emergencia (AUTOMATIC / ECU B manual).</p>
                <p>• <strong>Fuel Selectors (LH & RH):</strong> Mandos mecánicos inferiores de 3 posiciones: ON, CROSSFEED, OFF.</p>
                <p>• <strong>Auxiliary Fuel Pumps:</strong> Interruptores de bombas auxiliares y trasvase a principales.</p>
                <p>• <strong>Alternate Air (LH & RH):</strong> Mandos manuales de aire alternativo bajo el panel frontal.</p>
              </div>
            </div>

            <!-- Instrumentación y avisadores G1000 -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">GARMIN G1000 EIS Y SISTEMA DE ALERTAS (CAS)</strong>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>G1000 EIS (Engine Indication System):</strong> Barra vertical dual en el MFD (o PFD en reversión) con % LOAD (LH/RH), tacómetro (RPM de hélices), presión y temperatura de aceite (OP/OT), temperatura de refrigerante (CT), reductora (GT), temperatura de combustible y flujo instantáneo (FF, US gal/h).
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>Páginas dedicadas SYSTEM y FUEL:</strong> La página SYSTEM añade parámetros de voltaje general, amperímetro dual de alternadores LH/RH y temperatura de gearbox. La página FUEL incorpora totalizador con Galones Consumidos, Remanentes, Autonomía y Alcance en Millas Náuticas (NM).
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>Sistema de Alertas CAS:</strong> Mensajes de advertencia en rojo (Warnings con alarma sonora continua), precaución en ámbar (Cautions con tono acústico: L/R ALTN FAIL, LOW VOLTS, ECU A/B FAIL, LOW FUEL, WATER LEVEL) y avisos de estado. Confirmables mediante la tecla programable <code>ALERTS</code>.
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
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">GARMIN G1000 · PFD, MFD Y BARRA EIS</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-900/60 flex flex-col justify-center items-center p-1.5 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img
              src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-g1000-cockpit-1-6.jpg"
              alt="Garmin G1000 EIS (Engine, System, Fuel Display) y Sistema de Alertas CAS Diamond DA42 Twin Star"
              class="w-full h-full max-h-[410px] object-contain rounded-lg"
              style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;"
            />
          </div>

          <!-- Note Garmin CRG Totalizer -->
          <div class="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-start gap-2 text-[11px] leading-tight text-[#0B2E59] dark:text-sky-200 shrink-0">
            <span class="text-base shrink-0">ℹ️</span>
            <span><strong>NOTE (GARMIN CRG):</strong> El totalizador de la página FUEL calcula el remanente integrando el flujo de los caudalímetros desde el último reseteo manual; no toma lectura directa de las boyas aforadoras físicas de los depósitos. La comprobación visual y medición física con varilla previa al vuelo es preceptiva y obligatoria.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
};

export const DA42_LESSONS = [DA42_LESSON_1];

