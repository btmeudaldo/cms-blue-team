import type { CourseDocumentationItem } from "@/features/learning/content/c172-course-data";

export const DA40_COURSE_ID = "da400000-0000-0000-0000-000000000040";
export const DA40_COURSE_SLUG = "diamond-da40-tdi";
export const DA40_COURSE_TITLE = "Curso Diamond DA40 TDI (Thielert TAE 125)";
export const DA40_COURSE_DESCRIPTION = "Curso oficial de tipo, especificaciones técnicas, limitaciones y procedimientos operacionales para el avión Diamond DA40 TDI equipado con motor Thielert TAE 125 Turbo Diésel (Centurion 1.7 / 2.0).";
export const DA40_COURSE_IMAGE_URL = "https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-cover.jpg";
export const DA40_COURSE_REQUIRES_EXAM = false;

export const DA40_DOCUMENTATION: CourseDocumentationItem[] = [
  {
    category: "Manuales Oficiales AFM",
    title: "DA 40 D Airplane Flight Manual (AFM) Oficial",
    url: "/manuals/da40/DA40-TDI-AFM.pdf",
    badge: "AFM Completo",
  },
];

// ============================================================================
// LECCIÓN 1: GENERALIDADES Y ESPECIFICACIONES TÉCNICAS
// ============================================================================
export const DA40_LESSON_1 = {
  id: "da400000-0000-0000-0000-000000000010",
  course_id: DA40_COURSE_ID,
  title: "1. Generalidades y Especificaciones Técnicas",
  slug: "generalidades-especificaciones-da40",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 1.1: 1.1 Objeto del Curso y Simbología de Seguridad -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <!-- Header de Diapositiva -->
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · CENTURION</div>
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
              Este curso está basado en el Manual de Vuelo oficial (AFM) de la Diamond DA40 TDI y contiene la información técnica, limitaciones y procedimientos necesarios para la operación segura de la aeronave equipada con motor Thielert TAE 125 Turbo Diésel.&nbsp;<span style="letter-spacing: -0.18px; font-size: 1.125rem;">Este curso no sustituye al AFM oficial de Diamond Aircraft.</span>
            </p>
          </div>

          <!-- Simbología de Seguridad AFM -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-sm sm:text-base border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">SIMBOLOGÍA OFICIAL DE SEGURIDAD AFM</strong>
            
            <div class="flex items-start gap-2 text-xs sm:text-sm leading-tight">
              <span class="font-bold text-red-600 dark:text-red-400 shrink-0 uppercase tracking-wide min-w-[85px]">WARNING:</span>
              <span class="text-slate-800 dark:text-slate-200">El incumplimiento de estas normas de seguridad puede provocar lesiones graves o incluso la muerte.</span>
            </div>

            <div class="flex items-start gap-2 text-xs sm:text-sm leading-tight">
              <span class="font-bold text-amber-600 dark:text-amber-400 shrink-0 uppercase tracking-wide min-w-[85px]">CAUTION:</span>
              <span class="text-slate-800 dark:text-slate-200">El incumplimiento de estas notas especiales puede causar daños al motor o a otros componentes.</span>
            </div>

            <div class="flex items-start gap-2 text-xs sm:text-sm leading-tight">
              <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0 uppercase tracking-wide min-w-[85px]">NOTE:</span>
              <span class="text-slate-800 dark:text-slate-200">Información técnica añadida para una mejor comprensión y ejecución de una instrucción.</span>
            </div>
          </div>

          <!-- Dimensiones Principales de la Aeronave -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 mb-1.5 uppercase tracking-wide">DIMENSIONES PRINCIPALES DE LA AERONAVE</strong>
            <div class="grid grid-cols-3 gap-x-4 text-xs text-slate-700 dark:text-slate-200">
              <!-- Columna 1 (Izquierda) -->
              <div class="flex flex-col gap-y-1">
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Envergadura:</span> <strong class="text-[#0B2E59] dark:text-sky-300">11,94 m</strong></div>
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Longitud:</span> <strong class="text-[#0B2E59] dark:text-sky-300">8,06 m</strong></div>
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Altura total:</span> <strong class="text-[#0B2E59] dark:text-sky-300">1,97 m</strong></div>
              </div>

              <!-- Columna 2 (Centro) -->
              <div class="flex flex-col gap-y-1">
                <div class="flex items-center"><span class="w-[135px] shrink-0">• Ancho de vía:</span> <strong class="text-[#0B2E59] dark:text-sky-300">2,97 m</strong></div>
                <div class="flex items-center"><span class="w-[135px] shrink-0">• Superficie alar:</span> <strong class="text-[#0B2E59] dark:text-sky-300">13,54 m²</strong></div>
                <div class="flex items-center"><span class="w-[135px] shrink-0">• Aspect ratio:</span> <strong class="text-[#0B2E59] dark:text-sky-300">10,53</strong></div>
              </div>

              <!-- Columna 3 (Derecha) -->
              <div class="flex flex-col gap-y-1">
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Wheelbase:</span> <strong class="text-[#0B2E59] dark:text-sky-300">1,68 m</strong></div>
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Cuerda MAC:</span> <strong class="text-[#0B2E59] dark:text-sky-300">1,121 m</strong></div>
                <div class="flex items-center"><span class="w-[125px] shrink-0">• Diedro alar:</span> <strong class="text-[#0B2E59] dark:text-sky-300">5°</strong></div>
              </div>
            </div>
          </div>

          <!-- Advertencia AFM Documentación -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-xs sm:text-sm leading-tight text-amber-900 dark:text-amber-200">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>WARNING (AFM):</strong> La operación segura de la aeronave solo está asegurada mediante el estricto cumplimiento del Manual de Vuelo (AFM) actualizado y aprobado.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Aeronave DA40 TDI (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">DIAMOND DA40 TDI</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex items-center justify-center p-2 lesson-img-wrapper mx-auto img-align-center" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-cover.jpg" alt="Diamond DA40 TDI" class="w-full h-full max-h-[440px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.2: 1.2 Especificaciones del Motor Thielert TAE 125 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · CENTURION</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.2 Especificaciones del Motor Thielert TAE 125</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Arquitectura de Motor Diésel Turboalimentado</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESPECIFICACIONES DE PLANTA DE POTENCIA (ENGINE)</span>
        </div>
        <div class="space-y-2 py-0.5 text-xs">
          <!-- Caja única unificada de datos del motor y mandos -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MOTOR THIELERT TAE 125</strong>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed mt-1">
                Motor de 4 cilindros en línea, cuatro tiempos, refrigeración líquida con cárter húmedo, doble árbol de levas en cabeza (DOHC), inyección directa Common-Rail y turbocompresor con intercooler. Cilindrada: 1.689 cm³ (TAE 125-01) / 1.991 cm³ (TAE 125-02-99).
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed mt-1">
                Potencia máxima de 99 kW (135 CV DIN) a 2300 RPM al nivel del mar (ISA). Controlado íntegramente por sistema digital FADEC (ECU). La hélice es accionada mediante caja reductora integrada (relación i = 1.69) con amortiguador mecánico de vibraciones y embrague de sobrecarga.
              </p>
            </div>

            <div class="border-t border-slate-100 dark:border-slate-700 pt-1.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs pb-0.5 uppercase tracking-wide">MANDOS Y SISTEMAS CONVENCIONALES ELIMINADOS</strong>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                La cabina de la DA40 TDI prescinde de los mandos analógicos habituales en aviación convencional:
              </p>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-0.5 pt-1">
                <li class="flex items-start gap-1.5">• <span><strong>Sin mando de mezcla:</strong> Regulación estequiométrica automática controlada por la ECU.</span></li>
                <li class="flex items-start gap-1.5">• <span><strong>Sin mando de paso de hélice:</strong> Gobernador hidráulico accionado por FADEC según demanda de LOAD (%).</span></li>
                <li class="flex items-start gap-1.5">• <span><strong>Sin magnetos ni bujías:</strong> Ciclo diésel por compresión con bujías de precalentamiento (Glow Plugs).</span></li>
                <li class="flex items-start gap-1.5">• <span><strong>Sin calefacción de carburador:</strong> Dispone en su lugar de mando de aire alternativo (ALTERNATE AIR).</span></li>
              </ul>
            </div>
          </div>

          <!-- Warning eléctrico AFM -->
          <div class="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (AFM):</strong> El motor requiere energía eléctrica continua para operar (bomba de alta presión e inyección Common Rail). Si fallan la batería principal y el alternador, el motor dependerá exclusivamente de la batería de reserva FADEC (ECU Backup Battery). Prestar máxima atención a las indicaciones de fallo del alternador en el Annunciator Panel.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Planta Motriz Thielert TAE 125 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">PLANTA DE POTENCIA THIELERT TAE 125</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex items-center justify-center p-2 lesson-img-wrapper mx-auto img-align-center" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/Continental-Engine-Jet-A-CD-155-View-latest.png" alt="Motor Thielert TAE 125 Turbo Diésel" class="w-full h-full max-h-[440px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.3: 1.3 Hélice MT-Propeller Tripala de Paso Constante -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <!-- Header de Diapositiva -->
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · CENTURION</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.3 Hélice MT-Propeller Tripala de Paso Constante</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Gobernador Hidráulico y Control FADEC</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESPECIFICACIONES DE HÉLICE (PROPELLER)</span>
        </div>
        <div class="space-y-2 py-0.5 text-xs">
          <!-- Caja única unificada de datos técnicos y principio operativo -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CARACTERÍSTICAS DEL CONJUNTO</strong>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Fabricante</span>
                  <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">MT-Propeller Entwicklung GmbH</p>
                </div>
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Modelo Homologado</span>
                  <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">MTV-6-A/187-129</p>
                </div>
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Número de Palas</span>
                  <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">3 palas (madera-composite)</p>
                </div>
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Diámetro Oficial</span>
                  <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">1.87 m (73.6 in)</p>
                </div>
              </div>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed mt-1.5">
                Palas de madera laminada recubiertas de composite con perfil de acero inoxidable en el borde de ataque y lámina protectora de poliuretano en la zona del buje (spinner), combinando ligereza y absorción de vibraciones.
              </p>
            </div>

            <div class="border-t border-slate-100 dark:border-slate-700 pt-1.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs pb-0.5 uppercase tracking-wide">FUNCIONAMIENTO CONSTANT SPEED Y CONTROL FADEC</strong>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
                La hélice es de velocidad constante (Constant Speed). El ángulo de paso se regula hidráulicamente con aceite del motor mediante una electroválvula gestionada directamente por la ECU. No existe mando de hélice en cabina: la ECU ajusta las palas automáticamente para mantener el régimen óptimo (2.300 RPM en despegue y crucero).
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed mt-1">
                <strong>Seguridad intrínseca:</strong> En reposo o ante una pérdida de presión de aceite en el gobernador, las palas adoptan automáticamente la posición de paso más fino (finest pitch / máximas RPM) para permitir el arranque y mantener el empuje disponible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Hélice MT-Propeller Tripala (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-between">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">HÉLICE MT-PROPELLER TRIPALA</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/1.3-propeller.jpg?v=1" alt="Hélice MT-Propeller Tripala MTV-6" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>

          <!-- Caution AFM Manejo de Potencia (Reubicado en Columna Derecha) -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200 shrink-0">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (AFM):</strong> La monopalanca de potencia (Power Lever) debe accionarse de forma suave y progresiva para evitar sobrevelocidades de hélice (overspeeding) y variaciones bruscas de RPM, no superando bajo ningún concepto las 2500 RPM.</span>
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
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · CENTURION</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.4 Combustibles Autorizados y Sistema de Depósitos</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">JET A-1, Diésel EN 590 y Especificaciones de Depósitos</span>
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
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">COMBUSTIBLES AUTORIZADOS Y DENSIDAD</strong>
              <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 mt-1">
                <p>• <strong>Queroseno de aviación:</strong> JET A-1, JET A, JP-8 (densidad estándar: <strong>0,84 kg/L</strong>).</p>
                <p>• <strong>Automoción alternativo:</strong> Diésel (EN 590) y mezclas con queroseno JET.</p>
                <p class="text-[10px] text-slate-500 dark:text-slate-400">Nota térmica: Arranque no permitido con Diésel a temperatura de combustible inferior a -5 °C (riesgo de parafinas sólidas en el gascolator).</p>
              </div>
            </div>

            <!-- Capacidad de depósitos -->
            <div class="border-t border-slate-100 dark:border-slate-700 pt-1.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs pb-0.5 uppercase tracking-wide">CAPACIDAD DE LOS DEPÓSITOS (STANDARD TANK)</strong>
              <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 pt-0.5">
                <p>• <strong>Main Tank (depósito principal, ala izquierda):</strong> 14,0 US gal utilizables (53,0 L) / 15,0 gal totales.</p>
                <p>• <strong>Aux Tank (depósito auxiliar, ala derecha):</strong> 14,0 US gal utilizables (53,0 L) / 15,0 gal totales.</p>
                <p>• <strong>Capacidad total utilizable:</strong> <strong>28,0 US gal</strong> (106,0 L) &nbsp;|&nbsp; Inutilizable: 2,0 US gal (7,6 L).</p>
              </div>
            </div>

            <!-- Arquitectura de alimentación y trasvase -->
            <div class="border-t border-slate-100 dark:border-slate-700 pt-1.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs pb-0.5 uppercase tracking-wide">LÓGICA DE ALIMENTACIÓN Y TRASVASE</strong>
              <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 pt-0.5">
                <p>• <strong>Alimentación del motor:</strong> En condiciones normales el motor toma combustible exclusivamente del <strong>Main Tank</strong> (ala izquierda).</p>
                <p>• <strong>Bomba de trasvase:</strong> El combustible del Aux Tank se transfiere al principal mediante una bomba eléctrica (interruptor <code>FUEL TRANSFER</code>, ~60 US gal/h). Se desconecta automáticamente si el auxiliar se vacía o el principal se llena.</p>
                <p>• <strong>Retorno de combustible:</strong> El sobrante caliente de la Common Rail regresa al Main Tank previo paso por el enfriador (Fuel Cooler), manteniendo el combustible atemperado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Boca de Llenado y Rótulo Oficial (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-between">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">BOCA DE LLENADO Y RÓTULO OFICIAL</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex items-center justify-center p-2 lesson-img-wrapper mx-auto img-align-center" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/jet-fuel-only.jpg" alt="Rótulo JET FUEL ONLY" class="w-full h-full max-h-[350px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>

          <!-- Caution Combustibles No Autorizados (Reubicado en Columna Derecha) -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200 shrink-0">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION:</strong> El uso de combustibles no aprobados puede provocar daños en el motor y en los componentes del sistema de combustible, pudiendo provocar una parada de motor en vuelo. AVGAS 100LL está terminantemente prohibido.</span>
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
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · CENTURION</div>
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
          <!-- Caja única unificada de fluidos -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <!-- Fluidos específicos (3 columnas) -->
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ESPECIFICACIONES OFICIALES DE FLUIDOS</strong>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-1 text-[11px]">
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Aceite de Motor</span>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• AeroShell Oil Diesel Ultra</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• AeroShell Oil Diesel 10W-40</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell Helix Ultra 5W-30 / 5W-40</p>
                  <p class="text-[9px] text-slate-500 pt-0.5 font-medium">Cárter: Mín. 4,5 L / Máx. 6,0 L</p>
                </div>
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Aceite Reductora</span>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell Spirax S4 G 75W-90</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell Spirax S6 GXME 75W-80</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Centurion Gearbox Oil N1</p>
                  <p class="text-[9px] text-slate-500 pt-0.5 font-medium">Mirilla visual en capó inferior</p>
                </div>
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 space-y-0.5">
                  <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Refrigerante (Coolant)</span>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">Proporción 50:50 Agua / Anticongelante</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• BASF Glysantin Protect Plus (G48)</p>
                  <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• BASF Glysantin Alu Protect (G30)</p>
                  <p class="text-[9px] text-slate-500 pt-0.5 font-medium">Congelación: -36 °C (-33 °F)</p>
                </div>
              </div>
            </div>

            <!-- Pautas de inspección y servicio del AFM -->
            <div class="border-t border-slate-100 dark:border-slate-700 pt-1.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs pb-0.5 uppercase tracking-wide">PAUTAS DE INSPECCIÓN PREVUELO Y SERVICIO</strong>
              <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200 pt-0.5">
                <p>• <strong>Inspección exterior y cabina:</strong> En la inspección prevuelo exterior se verifican dos fluidos de forma manual en el morro: el nivel de aceite motor con la varilla (portezuela superior) y el nivel de reductora en la mirilla (portezuela inferior). El refrigerante se supervisa en cabina mediante la indicación <code>WATER LEVEL</code> (debe estar apagada).</p>
                <p>• <strong>Curva de retorno de aceite al cárter:</strong> Esperar entre 5 y 15 minutos tras la parada de motor para medir el nivel con la varilla (a los 5 min retorna el 80%, a los 15 min el 90% y a los 30 min el 100%). No sobrellenar el cárter.</p>
                <p>• <strong>Líquido de frenos:</strong> Emplear exclusivamente fluido hidráulico mineral <code>AeroShell Fluid 41</code> (MIL-PRF-5606).</p>
                <p>• <strong>Supervisión de niveles:</strong> Si el nivel de reductora es bajo o se enciende el aviso <code>WATER LEVEL</code>, el vuelo no está permitido y debe intervenir personal de mantenimiento autorizado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Supervisión en Prevuelo (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-between">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">SUPERVISIÓN DE FLUIDOS EN PREVUELO</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex items-center justify-center p-2 lesson-img-wrapper mx-auto img-align-center" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/1.5-fluidos.jpg?v=1" alt="Supervisión de Fluidos de Servicio" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>

          <!-- Warning Niveles de Fluido -->
          <div class="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200 shrink-0">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING:</strong> El motor no debe arrancarse bajo ninguna circunstancia si el nivel de cualquiera de los fluidos es inferior al mínimo admisible o si la indicación WATER LEVEL permanece encendida en cabina.</span>
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
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · CENTURION</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.6 Mandos e Instrumentación de Motor en Cabina</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Disposición de Instrumentos y Panel Anunciador</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Mandos y Displays FADEC (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">INSTRUMENTACIÓN Y MANDOS EN CABINA (INSTRUMENT PANEL)</span>
          </div>

          <div class="space-y-1.5 py-0.5 text-xs">
            <!-- Mandos e interruptores específicos -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MANDOS E INTERRUPTORES ESPECÍFICOS</strong>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-700 dark:text-slate-300">
                <p>• <strong>Power Lever:</strong> Monomando que gradúa la potencia en % LOAD (0 a 100%).</p>
                <p>• <strong>Engine Master:</strong> Interruptor que alimenta la ECU para arranque y parada.</p>
                <p>• <strong>Electric Master:</strong> Llave rotativa de 3 posiciones: OFF, ON y START.</p>
                <p>• <strong>ECU Test:</strong> Pulsador de autotest a ralentí y reseteo de avisos en vuelo.</p>
                <p>• <strong>ECU Swap:</strong> Conmutador de emergencia (AUTOMATIC / ECU B manual).</p>
                <p>• <strong>Alternate Air:</strong> Mando de aire alternativo situado bajo el panel.</p>
                <p>• <strong>Fuel Transfer:</strong> Interruptor de bomba para trasvase de Auxiliar a Principal.</p>
                <p>• <strong>Flap Selector:</strong> Mando selector de posiciones de flaps: UP, T/O, LDG.</p>
              </div>
            </div>

            <!-- Instrumentos y avisadores -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DISPLAYS CED 125, AED 125 Y PANEL ANUNCIADOR</strong>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>CED 125:</strong> RPM de hélice, presión de aceite (OP), temperatura de aceite (OT), refrigerante (CT), reductora (GT) y carga (LOAD, %).
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>AED 125:</strong> Combustible Main y Aux (gal), aviso Water Level, temperaturas de depósitos (°C), generador (A), voltios (V) y consumo horario (Fuel Flow, US gal/h).
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>Annunciator Panel:</strong> Warnings en rojo con alarma sonora continua (DOORS, START, TRIM FAIL), Cautions en ámbar con pitido (ALTERNATOR, LOW VOLTS, ECU A/B, LOW FUEL, PITOT, ENGINE) y Status (FUEL TRANS, GLOW).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Instrumentación de Motor CED/AED (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-between">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DISPLAYS CED 125, AED 125 Y LIGHTPANEL</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-black flex items-center justify-center p-2 lesson-img-wrapper mx-auto img-align-center" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/cockpit-instruments.jpg" alt="Displays CED 125, AED 125 y Lightpanel FADEC" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>

          <!-- Nota Técnica de Instrumentación -->
          <div class="w-full shrink-0 p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300">Instrumentación Digital:</strong> El indicador <strong>CED 125</strong> centraliza los parámetros vitales del motor en barras analógicas y display numérico, el <strong>AED 125</strong> supervisa depósitos, sistema eléctrico y Water Level, y el <strong>Lightpanel</strong> alberga los avisadores de estado y prueba de FADEC.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
};

// ============================================================================
// LECCIÓN 2: LIMITACIONES OPERACIONALES AFM
// ============================================================================
export const DA40_LESSON_2 = {
  id: "da400000-0000-0000-0000-000000000020",
  course_id: DA40_COURSE_ID,
  title: "2. Limitaciones Operacionales AFM",
  slug: "limitaciones-operacionales-afm-da40",
  sequence_order: 2,
  lesson_order: 2,
  min_seconds: 1,
  content_html: `
<!-- DIAPOSITIVA 2.1: 2.1 Limitaciones de Velocidad de la Célula (Airspeed Limitations) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.1 Limitaciones de Velocidad de la Célula (Airspeed Limitations)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Velocidades Estructurales, de Maniobra y Arcos del Anemómetro</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Tablas Oficiales AFM 2.2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-3">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AIRSPEED LIMITATIONS (VELOCIDADES LÍMITE)</span>
          </div>

          <!-- Tabla de Limitaciones de Velocidad (Formato estándar oficial AFM 2.2) -->
          <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
            <table class="w-full text-left text-[11px] leading-tight">
              <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="p-2.5 px-3 w-[34%]">VELOCIDAD</th>
                  <th class="p-2.5 px-2 text-center w-[16%] font-extrabold text-[#1a80ff] dark:text-sky-400">KIAS</th>
                  <th class="p-2.5 px-3 w-[50%]">SIGNIFICADO OPERACIONAL</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                <tr>
                  <td class="p-2.5 px-3 font-bold font-mono">v<sub>NE</sub> (Never Exceed)</td>
                  <td class="p-2.5 px-2 text-center font-mono font-extrabold text-red-600 dark:text-red-400">178</td>
                  <td class="p-2.5 px-3">No exceder esta velocidad en ninguna operación.</td>
                </tr>
                <tr>
                  <td class="p-2.5 px-3 font-bold font-mono">v<sub>NO</sub> = v<sub>C</sub> (Max. Structural)</td>
                  <td class="p-2.5 px-2 text-center font-mono font-extrabold text-amber-600 dark:text-amber-400">129</td>
                  <td class="p-2.5 px-3">No exceder esta velocidad salvo en aire calmo, y solo con precaución.</td>
                </tr>
                <!-- v_A (Maneuvering Speed) · Formato AFM Oficial -->
                <tr class="bg-sky-50/70 dark:bg-sky-950/40">
                  <td class="pt-2 pb-1 px-3 font-bold font-mono text-[#0B2E59] dark:text-sky-300" colspan="2">
                    v<sub>A</sub> (Maneuvering Speed):
                  </td>
                  <td class="p-2.5 px-3 align-middle text-slate-700 dark:text-slate-300 border-l border-slate-200 dark:border-slate-700/60" rowspan="3">
                    No aplicar deflexiones bruscas ni totales de mandos por encima de esta velocidad. La velocidad de maniobra disminuye al reducir la masa del avión.
                  </td>
                </tr>
                <tr class="bg-sky-50/30 dark:bg-sky-950/20">
                  <td class="py-1 px-3 pl-6 whitespace-nowrap">
                    <span class="font-medium text-slate-800 dark:text-slate-200">&gt; 980 kg hasta 1.150 kg</span>
                    <span class="text-[10px] text-slate-400 dark:text-slate-400 font-normal ml-1">(2.161 - 2.535 lb)</span>
                  </td>
                  <td class="py-1 px-2 text-center font-mono font-extrabold text-blue-600 dark:text-sky-400">108</td>
                </tr>
                <tr class="bg-sky-50/30 dark:bg-sky-950/20">
                  <td class="pb-2 pt-1 px-3 pl-6 whitespace-nowrap">
                    <span class="font-medium text-slate-800 dark:text-slate-200">&gt; 780 kg hasta 980 kg</span>
                    <span class="text-[10px] text-slate-400 dark:text-slate-400 font-normal ml-1">(1.720 - 2.161 lb)</span>
                  </td>
                  <td class="pb-2 pt-1 px-2 text-center font-mono font-extrabold text-blue-600 dark:text-sky-400">94</td>
                </tr>
                <!-- v_FE (Max. Flaps Extended Speed) -->
                <tr>
                  <td class="p-2.5 px-3 font-bold font-mono">v<sub>FE</sub> Flaps T/O (Take-off)</td>
                  <td class="p-2.5 px-2 text-center font-mono font-extrabold text-emerald-600 dark:text-emerald-400">108</td>
                  <td class="p-2.5 px-3">No exceder esta velocidad con flaps en posición T/O.</td>
                </tr>
                <tr>
                  <td class="p-2.5 px-3 font-bold font-mono">v<sub>FE</sub> Flaps LDG (Landing)</td>
                  <td class="p-2.5 px-2 text-center font-mono font-extrabold text-emerald-600 dark:text-emerald-400">91</td>
                  <td class="p-2.5 px-3">No exceder esta velocidad con flaps en posición LDG.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- NOTA OFICIAL FORMATO C172 (border-l-4) -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-[#2361A8] dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>La velocidad de maniobra (v<sub>A</sub>) es la velocidad máxima a la cual la deflexión aerodinámica total o brusca de los mandos no excederá los límites estructurales de diseño. Recuerda que v<sub>A</sub> disminuye al reducir la masa del avión (108 KIAS hasta 1.150 kg; 94 KIAS hasta 980 kg).</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Indicador de Velocidad y Lecturas en Cabina (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">INDICADOR DE VELOCIDAD Y LÍMITES</span>
          </div>

          <!-- Introducción KIAS -->
          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              El anemómetro presenta lecturas en <strong>KIAS</strong> (Knots Indicated Airspeed). En vuelo, todas las limitaciones estructurales y de operación se comprueban directamente sobre el indicador analógico en cabina.
            </p>
          </div>

          <!-- Imagen del Anemómetro (idéntica a 2.2) -->
          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-anemometro.jpg" alt="Anemómetro oficial Diamond DA40 TDI con arcos de colores" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.2 Marcas del Indicador de Velocidad (Airspeed Indicator Markings)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Arcos de Colores y Rangos Operacionales Reglamentarios</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Tablas Oficiales AFM 2.3 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-3">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AIRSPEED INDICATOR MARKINGS (ARCOS DEL ANEMÓMETRO)</span>
          </div>

          <!-- Tabla de Arcos del Anemómetro (Formato AFM Oficial 2.3) -->
          <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
            <table class="w-full text-left text-[11px] leading-snug">
              <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="py-2.5 px-3 w-[19%]">MARCA</th>
                  <th class="py-2.5 px-2 text-center w-[15%] font-mono">RANGO KIAS</th>
                  <th class="py-2.5 px-3 w-[66%]">SIGNIFICADO OFICIAL AFM</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                <!-- Arco Blanco -->
                <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td class="py-2.5 px-3 align-top font-bold whitespace-nowrap">
                    <div class="flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-400 shrink-0 shadow-xs"></span>
                      <span class="text-xs text-slate-900 dark:text-white">Arco Blanco</span>
                    </div>
                    <span class="text-[10px] text-slate-500 dark:text-slate-400 font-normal block pl-4 mt-0.5">White Arc</span>
                  </td>
                  <td class="py-2.5 px-2 text-center align-middle font-mono font-bold text-sm text-slate-800 dark:text-slate-100 whitespace-nowrap">
                    49 – 91
                  </td>
                  <td class="py-2.5 px-3 align-top">
                    <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Operating range with flaps fully extended:</strong>
                    <div class="text-[11px] text-slate-600 dark:text-slate-300 space-y-0.5">
                      <div>• <strong>Límite inferior (49 KIAS):</strong> v<sub>SO</sub> a masa máxima (1.150 kg) en configuración LDG.</div>
                      <div>• <strong>Límite superior (91 KIAS):</strong> v<sub>FE</sub> máxima con flaps en posición LDG. (Flaps T/O hasta 108 KIAS).</div>
                    </div>
                  </td>
                </tr>

                <!-- Arco Verde -->
                <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td class="py-2.5 px-3 align-top font-bold whitespace-nowrap">
                    <div class="flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-emerald-600 shrink-0 shadow-xs"></span>
                      <span class="text-xs text-emerald-700 dark:text-emerald-400">Arco Verde</span>
                    </div>
                    <span class="text-[10px] text-slate-500 dark:text-slate-400 font-normal block pl-4 mt-0.5">Green Arc</span>
                  </td>
                  <td class="py-2.5 px-2 text-center align-middle font-mono font-bold text-sm text-emerald-600 dark:text-emerald-400 whitespace-nowrap">
                    52 – 129
                  </td>
                  <td class="py-2.5 px-3 align-top">
                    <strong class="text-emerald-800 dark:text-emerald-300 block mb-0.5">Normal operating range:</strong>
                    <div class="text-[11px] text-slate-600 dark:text-slate-300 space-y-0.5">
                      <div>• <strong>Límite inferior (52 KIAS):</strong> v<sub>S</sub> con flaps retraídos (UP) a masa máxima.</div>
                      <div>• <strong>Límite superior (129 KIAS):</strong> v<sub>NO</sub> = v<sub>C</sub> crucero estructural máximo.</div>
                    </div>
                  </td>
                </tr>

                <!-- Arco Amarillo -->
                <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td class="py-2.5 px-3 align-top font-bold whitespace-nowrap">
                    <div class="flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-500 shrink-0 shadow-xs"></span>
                      <span class="text-xs text-amber-700 dark:text-amber-400">Arco Amarillo</span>
                    </div>
                    <span class="text-[10px] text-slate-500 dark:text-slate-400 font-normal block pl-4 mt-0.5">Yellow Arc</span>
                  </td>
                  <td class="py-2.5 px-2 text-center align-middle font-mono font-bold text-sm text-amber-600 dark:text-amber-400 whitespace-nowrap">
                    129 – 178
                  </td>
                  <td class="py-2.5 px-3 align-top">
                    <strong class="text-amber-800 dark:text-amber-300 block mb-0.5">Caution range ("Only in smooth air"):</strong>
                    <div class="text-[11px] text-slate-600 dark:text-slate-300">
                      Operaciones exclusivamente con precaución y en aire en calma.
                    </div>
                  </td>
                </tr>

                <!-- Línea Roja -->
                <tr class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40">
                  <td class="py-2.5 px-3 align-top font-bold whitespace-nowrap">
                    <div class="flex items-center gap-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-red-600 border border-red-700 shrink-0 shadow-xs"></span>
                      <span class="text-xs text-red-600 dark:text-red-400">Línea Roja</span>
                    </div>
                    <span class="text-[10px] text-slate-500 dark:text-slate-400 font-normal block pl-4 mt-0.5">Red Line</span>
                  </td>
                  <td class="py-2.5 px-2 text-center align-middle font-mono font-extrabold text-sm text-red-600 dark:text-red-400 whitespace-nowrap">
                    178
                  </td>
                  <td class="py-2.5 px-3 align-top">
                    <strong class="text-red-700 dark:text-red-400 block mb-0.5">Maximum speed for all operations (v<sub>NE</sub>):</strong>
                    <div class="text-[11px] text-slate-600 dark:text-slate-300">
                      Velocidad máxima admisible en todas las operaciones. Prohibido superarla.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Anemómetro Oficial DA40 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ANEMÓMETRO DA40 TDI (CALIBRADO EN KNOTS)</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-anemometro.jpg" alt="Anemómetro oficial Diamond DA40 TDI con arcos de colores" class="w-full h-full max-h-[250px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>

          <!-- Criterio Operacional del AFM -->
          <div class="w-full shrink-0 p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-2xs space-y-1 text-xs">
            <div class="font-bold text-[#0B2E59] dark:text-sky-300 flex items-center gap-1.5 text-xs">
              <span>Criterio Operacional del AFM:</span>
            </div>
            <div class="text-[11px] text-slate-700 dark:text-slate-300 leading-snug space-y-1">
              <div>
                <strong class="text-slate-900 dark:text-white">• Régimen con Flaps (&lt; 91 KIAS):</strong>
                Mantener la velocidad estrictamente dentro del Arco Blanco al operar en configuración LDG (flaps de aterrizaje) para evitar sobrecargas aerodinámicas.
              </div>
              <div>
                <strong class="text-slate-900 dark:text-white">• Vuelo en Turbulencia (&lt; 129 KIAS):</strong>
                Al encontrar aire turbulento, reducir inmediatamente por debajo del Arco Amarillo (dentro del régimen normal de operación, Arco Verde).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.3: 2.3 Límites de Peso Estructural (Weight Limits) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.3 Límites de Peso y Centro de Gravedad (Weight & CG Limits)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Pesos Máximos Estructurales y Envolvente de Centrado</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Pesos y Límites CG (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">WEIGHT & CG LIMITS (SECTION 2)</span>
          </div>

          <!-- Tabla de Pesos Estructurales AFM 2.7 -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full shrink-0">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">LÍMITES DE PESO ESTRUCTURAL (DIAMOND DA40 TDI)</strong>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-[11px] leading-tight">
                <thead>
                  <tr class="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider">
                    <th class="py-1 px-1.5 font-bold text-[#0B2E59] dark:text-sky-300">Categoría</th>
                    <th class="py-1 px-1.5 font-bold">Max. Ramp</th>
                    <th class="py-1 px-1.5 font-bold">Max. Takeoff (MTOW)</th>
                    <th class="py-1 px-1.5 font-bold">Max. Landing (MLW)</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-1.5 font-bold text-[#2361A8] dark:text-sky-400 whitespace-nowrap">Normal Category</td>
                    <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-medium">1.150 kg (2.535 lb)</td>
                    <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-bold text-sky-700 dark:text-sky-300">1.150 kg (2.535 lb)</td>
                    <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-medium">
                      1.150 kg <span class="text-[10px] text-slate-500">(1.092 kg estándar)</span>
                    </td>
                  </tr>
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-1.5 font-bold text-amber-600 dark:text-amber-400 whitespace-nowrap">Utility Category</td>
                    <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-medium">980 kg (2.161 lb)</td>
                    <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-bold text-amber-700 dark:text-amber-300">980 kg (2.161 lb)</td>
                    <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-medium">980 kg (2.161 lb)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 pt-0.5">
              * MLW de 1.150 kg requiere amortiguadores de pata de tren de 18 mm (MÄM 40-123 instalada). Equipaje máximo: 30 kg (66 lb).
            </p>
          </div>

          <!-- Center of Gravity Limits -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 w-full shrink-0">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">CENTER OF GRAVITY LIMITS</strong>
              <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">Datum: 2,194 m fwd of stub wing root rib</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] leading-snug">
              <!-- Normal Category -->
              <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
                <span class="font-bold text-[#2361A8] dark:text-sky-400 block uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-700/60 pb-0.5">NORMAL CATEGORY (≤ 1.150 kg)</span>
                <div>
                  <span class="font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase">Forward:</span>
                  <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                    2,40 m (94,5 in) aft of DP (780–980 kg); variación lineal hasta 2,46 m (96,9 in) a 1.150 kg.
                  </p>
                </div>
                <div>
                  <span class="font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase">Aft:</span>
                  <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                    2,59 m (102,0 in) Standard Tank / 2,55 m (100,4 in) Long Range.
                  </p>
                </div>
              </div>

              <!-- Utility Category -->
              <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
                <span class="font-bold text-amber-600 dark:text-amber-400 block uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-700/60 pb-0.5">UTILITY CATEGORY (≤ 980 kg)</span>
                <div>
                  <span class="font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase">Forward:</span>
                  <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                    2,40 m (94,5 in) aft of DP constante entre 780 kg y 980 kg.
                  </p>
                </div>
                <div>
                  <span class="font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase">Aft:</span>
                  <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                    2,59 m (102,0 in) aft of DP con Standard Tank.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Envolvente de Masa y Centrado (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENVOLVENTE DE MASA Y CENTRADO (CG ENVELOPE)</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-1.5 lesson-img-wrapper mx-auto img-align-center" draggable="false" style="position: relative; width: 100%; max-width: 100%; height: 100%; float: none; clear: both; opacity: 1;">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-cg-limits.png?v=2" alt="Envolvente de Masa y Centrado Diamond DA40 TDI" class="w-full h-full object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 100%; width: 100%; height: 100%; background-color: transparent; object-position: center;">
        </div>

        <!-- Warning AFM Oficial -->
        <div class="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200 shrink-0">
          <span class="text-base shrink-0">🚨</span>
          <span><strong>WARNING (AFM):</strong> Exceder los límites de masa conduce a una sobrecarga estructural y degradación del rendimiento de vuelo. Exceder los límites de centrado reduce drásticamente la controlabilidad y estabilidad del avión.</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.4: 2.4 Compartimento de Equipaje y Categorías de Vuelo (Normal vs Utilidad) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES OPERACIONALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.4 Compartimento de Equipaje y Categorías de Vuelo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Baggage Compartment Limits & Flight Load Factors</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Límites de Equipaje y Factores de Carga (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BAGGAGE COMPARTMENT LIMITS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <!-- COMPARTIMENTO PRINCIPAL TRASERO -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">COMPARTIMENTO TRASERO PRINCIPAL</strong>
              <div class="text-[11px] leading-tight space-y-1 text-slate-800 dark:text-slate-200">
                <div class="flex justify-between">
                  <span>Capacidad máxima:</span>
                  <span class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">30 kg (66 lb)</span>
                </div>
                <div class="flex justify-between">
                  <span>Brazo de palanca (C.G. Arm):</span>
                  <span class="font-mono font-bold">3,65 m (143,7 in)</span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 pt-0.5">Ubicado tras los respaldos de los asientos traseros con red de retención reglamentaria (Baggage Net).</p>
              </div>
            </div>

            <!-- RED DE RETENCIÓN Y ESTIBA -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">RED DE RETENCIÓN Y ESTIBA</strong>
              <div class="text-[11px] leading-tight space-y-1 text-slate-800 dark:text-slate-200">
                <div class="flex justify-between">
                  <span>Anclajes reglamentarios:</span>
                  <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">4 puntos</span>
                </div>
                <div class="flex justify-between">
                  <span>Desplazamiento de carga:</span>
                  <span class="font-mono font-bold text-red-600 dark:text-red-400">Prohibido</span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 pt-0.5">Toda carga debe amarrarse firmemente para evitar descebado del centro de gravedad hacia atrás en despegue o ascenso.</p>
              </div>
            </div>
          </div>

          <!-- WARNING BAGGAGE LIMITATION -->
          <div class="p-2 px-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
              <span>⚠️</span>
              <span>LIMITACIÓN ESTRICTA DE EQUIPAJE:</span>
            </strong>
            <div>La masa máxima admisible en el compartimento de equipaje es de <strong>30 kg (66 lb)</strong>. Todo el bulto debe asegurarse con la red de equipaje homologada. Sobrepasar esta masa o dejar carga suelta provoca desplazamientos críticos del CG.</div>
          </div>

          <div class="flex items-center justify-between shrink-0 pt-1 pb-0.5 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FACTORES DE CARGA Y CONDICIONES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch text-[11px]">
            <!-- CATEGORÍA NORMAL -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase">CATEGORÍA NORMAL (MTOW 1.150 kg)</strong>
              <div class="flex justify-between py-0.5">
                <span>Flaps UP (Recogidos):</span>
                <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+3.8 G / -1.52 G</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span>Flaps T/O o LDG (Extendidos):</span>
                <span class="font-mono font-bold text-blue-600 dark:text-sky-400">+2.0 G / 0 G</span>
              </div>
              <p class="text-[10px] text-slate-500 dark:text-slate-400">Hasta <strong>4 ocupantes</strong> y equipaje autorizado (máx 30 kg). Prohibida acrobacia y barrenas.</p>
            </div>

            <!-- CATEGORÍA UTILIDAD -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase">CATEGORÍA UTILIDAD (MTOW 980 kg)</strong>
              <div class="flex justify-between py-0.5">
                <span>Flaps UP (Recogidos):</span>
                <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+4.4 G / -1.76 G</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span>Flaps T/O o LDG (Extendidos):</span>
                <span class="font-mono font-bold text-blue-600 dark:text-sky-400">+2.0 G / -1.0 G</span>
              </div>
              <p class="text-[10px] text-slate-500 dark:text-slate-400"><strong>Condición:</strong> Máximo <strong>2 ocupantes</strong> (ambos delante). Asientos traseros vacíos y sin equipaje.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama de Brazos de Palanca (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BRAZOS DE PALANCA DA40 TDI</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-moment-arms.png?v=2" alt="Brazos de Palanca y Compartimentos de Carga Diamond DA40 TDI" class="w-full h-full max-h-[500px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: 100%;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- pagebreak -->

<!-- DIAPOSITIVA 2.5: 2.5 Límites de Maniobra y Factores de Carga -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.5 Límites de Maniobra y Factores de Carga</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Factores de Carga Estructurales & Prohibición de Barrenas</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): AFM Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">MANEUVER & FLIGHT LOAD LIMITS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <!-- LÍMITES DE MANIOBRA -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MANIOBRAS APROBADAS</strong>
              <div class="space-y-1 pt-0.5 text-[11px] leading-snug text-slate-800 dark:text-slate-200">
                <div class="flex items-start gap-1.5">
                  <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                  <span><strong class="text-slate-900 dark:text-slate-100">Categoría Normal (MTOW 1.150 kg):</strong> Maniobras normales, pérdidas suaves (sin pérdida dinámica), virajes con banqueo &le; 60°, ochos perezosos y chandelles.</span>
                </div>
                <div class="flex items-start gap-1.5">
                  <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                  <span><strong class="text-slate-900 dark:text-slate-100">Categoría Utilidad (MTOW 980 kg):</strong> Maniobras normales y de entrenamiento con banqueo hasta 90°. Asientos traseros vacíos.</span>
                </div>
                <div class="flex items-start gap-1.5 text-red-600 dark:text-red-400 font-medium">
                  <span class="shrink-0">•</span>
                  <span><strong>Barrenas prohibidas:</strong> Prohibido iniciar barrenas intencionadamente (*Spinning is prohibited*).</span>
                </div>
                <div class="flex items-start gap-1.5 text-slate-600 dark:text-slate-300">
                  <span class="shrink-0">•</span>
                  <span>Banqueo &gt; 60°: Afecta a la precisión de los giróscopos de actitud y direccional.</span>
                </div>
              </div>
            </div>

            <!-- FACTORES DE CARGA -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FACTORES DE CARGA</strong>
              <div class="space-y-1 pt-0.5">
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80">
                  <div class="font-bold text-[#2361A8] dark:text-sky-400 text-[10px] uppercase">Categoría Normal (hasta 1.150 kg):</div>
                  <div class="flex justify-between text-[11px] font-medium pt-0.5">
                    <span class="text-slate-700 dark:text-slate-300">Flaps UP: <strong class="text-emerald-600 dark:text-emerald-400 font-mono">+3.8 G / -1.52 G</strong></span>
                    <span class="text-slate-700 dark:text-slate-300">Flaps T/O o LDG: <strong class="text-blue-600 dark:text-sky-400 font-mono">+2.0 G / 0 G</strong></span>
                  </div>
                </div>

                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80">
                  <div class="font-bold text-amber-600 dark:text-amber-400 text-[10px] uppercase">Categoría Utilidad (hasta 980 kg):</div>
                  <div class="flex justify-between text-[11px] font-medium pt-0.5">
                    <span class="text-slate-700 dark:text-slate-300">Flaps UP: <strong class="text-emerald-600 dark:text-emerald-400 font-mono">+4.4 G / -1.76 G</strong></span>
                    <span class="text-slate-700 dark:text-slate-300">Flaps T/O o LDG: <strong class="text-blue-600 dark:text-sky-400 font-mono">+2.0 G / -1.0 G</strong></span>
                  </div>
                </div>

                <div class="flex items-start gap-1.5 text-[10px] text-slate-500 dark:text-slate-400 pt-0.5 leading-snug">
                  <span>•</span>
                  <span>Estructura certificada según estándar JAR-23. Exceder estos límites provocará sobrecargas estructurales.</span>
                </div>
              </div>
            </div>
          </div>

          <!-- CAUTION AFM NEGATIVE G -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚡</span>
              <span>CAUTION (LIMITACIÓN G NEGATIVA):</span>
            </strong>
            <p>Evitar la duración prolongada de cargas G negativas (*Avoid extended negative g-loads duration*): pueden causar fallos en el control hidráulico del paso de la hélice y descebado transitorio del motor con oscilaciones de potencia (*engine surging*).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Factores de Carga Estructurales (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FACTORES DE CARGA ESTRUCTURALES</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-load-factors.png?v=1" alt="Tabla Oficial de Factores de Carga Estructurales Diamond DA40 TDI" class="w-full h-full max-h-[480px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.6: 2.6 Límites de Motor: Potencia, RPM y Techo Operativo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.6 Límites de Motor: Potencia, RPM y Techo Operativo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Thielert TAE 125-01 / TAE 125-02-99, RPM y Techo Certificado</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): AFM Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
        <div class="space-y-1 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE OPERATING LIMITS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- TAE 125-01 / TAE 125-02-99 -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MOTOR THIELERT TAE 125</strong>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Fabricante: Thielert Aircraft Engines GmbH</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Potencia máx. despegue: 99 kW (135 CV DIN) a 2300 RPM</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Potencia máx. continua: 99 kW (135 CV DIN / 100% LOAD)</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Régimen continuo: 2.300 RPM de hélice</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Overspeed transitorio máx: 2.500 RPM (máx 20 s en 02-99)</span>
              </div>
            </div>

            <!-- CILINDRADA Y TECHO CERTIFICADO -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ESPECIFICACIONES Y TECHO</strong>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Techo operativo certificado: <strong>16.400 ft (5.000 m)</strong></span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Cilindrada: 1.689 cm³ (01) / 1.991 cm³ (02-99)</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Hélice: mt-Propeller MTV-6-A/187-129 tripala</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Ángulo de pala (0.75 R): 12° a 28°</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Relación de reductora: <strong>i = 1.69</strong></span>
              </div>
            </div>
          </div>

          <!-- NOTA OFICIAL FORMATO C172 -->
          <div class="p-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Toda la información sobre RPM en el AFM corresponde a RPM de la hélice (propeller RPM). Con la reductora integrada (i = 1.69), 2.300 RPM de hélice equivalen a 3.887 RPM del cigüeñal del motor diésel.</div>
          </div>

          <!-- WARNING ARRANQUE -->
          <div class="p-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>No está permitido arrancar el motor si la tensión de la batería principal es insuficiente para activar el sistema FADEC. Las unidades ECU y los inyectores Common-Rail dependen de suministro eléctrico continuo e ininterrumpido.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Régimen de Potencia y Monomando FADEC (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RÉGIMEN DE POTENCIA Y MONOMANDO FADEC</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/potencia-altitud-fadec.jpg" alt="Régimen de Potencia vs Altitud y Monomando FADEC DA40 TDI" class="w-full h-full max-h-[480px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.7 Límites Operacionales de Temperatura</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Límites de Aceite de Motor, Líquido Refrigerante y Caja Reductora</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): AFM Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
        <div class="space-y-1 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TEMPERATURE OPERATING LIMITS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- ACEITE MOTOR Y REFRIGERANTE -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ACEITE MOTOR Y LÍQUIDO REFRIGERANTE</strong>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Aceite - Temp. mínima de arranque: <strong>-32 °C</strong></span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Aceite - Rango normal (verde): <strong>50 °C a 125 °C</strong></span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Aceite - Máximo absoluto (rojo): <strong>140 °C</strong></span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Refrigerante - Temp. mínima de arranque: <strong>-32 °C</strong></span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Refrigerante - Rango normal (verde): <strong>60 °C a 96 °C</strong></span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Refrigerante - Máximo absoluto (rojo): <strong>105 °C</strong></span>
              </div>
            </div>

            <!-- CAJA REDUCTORA Y TEMPERATURA EXTERIOR -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CAJA REDUCTORA Y ENTORNO</strong>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Reductora - Rango normal (verde): hasta <strong>115 °C</strong></span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Reductora - Precaución (amarillo): <strong>115 °C a 120 °C</strong></span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Reductora - Máximo absoluto (rojo): <strong>120 °C</strong></span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Temp. exterior admisible: <strong>-20 °C a +54 °C</strong></span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Precalentamiento: Mandatorio bajo <strong>-20 °C</strong></span>
              </div>
            </div>
          </div>

          <!-- WARNING TEMPERATURA -->
          <div class="p-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <p>No aplicar potencia de despegue (Take-off power) hasta que la temperatura del refrigerante alcance un mínimo de <strong>60 °C</strong> y la del aceite <strong>50 °C</strong>. No arrancar el motor con temperaturas de célula inferiores a -20 °C sin precalentamiento externo.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Marcas de Instrumentos y Límites Térmicos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">MARCAS DE INSTRUMENTOS DE MOTOR (TAE 125-02)</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-temp-limits.png?v=1" alt="Tabla Oficial de Marcas de Instrumentos y Límites de Temperatura TAE 125-02 Diamond DA40 TDI" class="w-full h-full max-h-[480px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.8: 2.8 Límites de Presión y Consumo de Aceite -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.8 Límites de Presión y Consumo de Aceite</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Presión Mínima (1.2 bar), Normal (2.3–5.2 bar), Máxima (6.5 bar) y Consumo</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): AFM Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">OIL PRESSURE & CONSUMPTION LIMITS</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <!-- RANGOS DE PRESIÓN -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">RANGOS DE PRESIÓN</strong>
              <div class="space-y-1 pt-0.5 text-[11px] leading-tight">
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Mínimo absoluto:</span>
                  <span class="font-mono font-bold text-red-600 dark:text-red-400">1.2 bar</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span class="text-slate-700 dark:text-slate-300">Margen bajo (amarillo):</span>
                  <span class="font-mono font-bold text-amber-600 dark:text-amber-400">1.2 a 2.3 bar</span>
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
                  <span class="font-mono font-bold text-red-600 dark:text-red-400">6.5 bar</span>
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
                  <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">0,1 L/h (0.1 qts/h)</span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                  Sistema de lubricación por cárter húmedo accionado por bomba mecánica acoplada al cigüeñal.
                </p>
              </div>
            </div>
          </div>

          <!-- CAUTION ACEITE -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <p>Los valores indicados de presión de aceite se corrigen por altitud de presión. Presiones inferiores a 2.3 bar en vuelo de crucero requieren comprobación inmediata de temperatura de aceite y descenso de potencia.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Circuito de Lubricación y Manómetro (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CIRCUITO DE LUBRICACIÓN Y CONTROL</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/presion-aceite-lubricacion.jpg" alt="Circuito de Lubricación y Manómetro DA40 TDI" class="w-full h-full max-h-[480px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.9: 2.9 Límites Térmicos de Combustible en Depósito -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.9 Límites Térmicos de Combustible en Depósito</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Temperaturas Mínimas y Máximas para JET A-1 y Diésel EN 590</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): AFM Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-1.5" style="height: 590px;">
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
                  <span>Temp. mínima operativa:</span>
                  <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">-30 °C (-22 °F)</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span>Temp. máxima (TAE 125-01):</span>
                  <span class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">+65 °C (+149 °F)</span>
                </div>
                <div class="flex justify-between py-0.5">
                  <span>Temp. máxima (02-99):</span>
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
                  <span>Mínima para arranque:</span>
                  <span class="font-mono font-bold text-amber-600 dark:text-amber-400">-5 °C (+23 °F)</span>
                </div>
                <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                  <span>Mínima para despegue (Main):</span>
                  <span class="font-mono font-bold text-amber-600 dark:text-amber-400">+5 °C (+41 °F)</span>
                </div>
                <div class="flex justify-between py-0.5">
                  <span>Temperatura máxima:</span>
                  <span class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">+65 °C / +75 °C</span>
                </div>
                <p class="text-[10px] text-slate-500 dark:text-slate-400 pt-1 leading-relaxed">
                  Riesgo de precipitación de parafinas sólidas con combustible frío que colmatarían el filtro de combustible.
                </p>
              </div>
            </div>
          </div>

          <!-- NOTA FUEL COOLER -->
          <div class="p-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>ℹ️</span>
              <span>INTERCAMBIADOR TÉRMICO DE COMBUSTIBLE (FUEL COOLER):</span>
            </strong>
            <p>El combustible sobrante de alta presión de la Common-Rail regresa al Main Tank a través del Fuel Cooler. Este flujo continuo calienta el combustible en el depósito izquierdo durante el vuelo, asegurando que se mantenga fluido y por encima del punto de congelación.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Temperatura de Combustible y Retorno (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TEMPERATURA DE COMBUSTIBLE Y RETORNO</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/temperatura-combustible-retorno.jpg" alt="Temperatura de Combustible y Circuito de Retorno DA40 TDI" class="w-full h-full max-h-[480px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.10: 2.10 Marcas de Instrumentos CED 125 (Motor y Reductora) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.10 Marcas de Instrumentos CED 125 (Motor y Reductora)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tabla Oficial AFM: Rangos Verde, Amarillo y Rojo en el Display Compacto</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): AFM Sección 2 (Tablas estructuradas, Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800 mb-2">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CED 125 INSTRUMENT MARKINGS</span>
        </div>
        <div class="space-y-3 py-1">
          <!-- TABLA 1: TACÓMETRO, PRESIÓN Y CARGA (CED 125) -->
          <div class="p-2.5 px-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full shrink-0">
            <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">TACÓMETRO, PRESIÓN Y CARGA (CED 125)</strong>
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
                    <td class="py-1.5 px-2 text-amber-700 dark:text-amber-400 font-medium font-mono">1.2 - 2.3 | 5.2 - 6.5</td>
                    <td class="py-1.5 px-2 text-red-700 dark:text-red-400 font-medium font-mono">&lt; 1.2 | &gt; 6.5 bar</td>
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
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">60 - 96 °C</td>
                    <td class="py-1.5 px-2 text-amber-700 dark:text-amber-400 font-medium font-mono">-32...+60 | 96 - 105 °C</td>
                    <td class="py-1.5 px-2 text-red-700 dark:text-red-400 font-medium font-mono">&lt; -32 | &gt; 105 °C</td>
                  </tr>
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Oil Temp [°C]</td>
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">50 - 125 °C</td>
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

    <!-- Columna Derecha (lg:col-span-5): Instrumento Digital CED 125 y NOTA (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col items-center justify-between p-2">
          <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/2.7-v2.jpg?v=2" alt="Display Digital CED 125 DA40 TDI" class="w-full h-full max-h-[385px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-600 dark:text-slate-300 font-medium shrink-0">
            <strong class="text-[#0B2E59] dark:text-sky-300">CED 125</strong> · Compact Engine Display (Motor y Reductora)
          </figcaption>
        </div>

        <!-- NOTA: Lectura de Load y Engine Master -->
        <div class="w-full p-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight shadow-2xs shrink-0 mt-2">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>'Load' describe el porcentaje disponible de la potencia máxima del motor. Si el interruptor Engine Master está desconectado (OFF), la indicación de carga no muestra ningún valor aunque la hélice esté girando.</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.11: 2.11 Marcas de Instrumentos AED 125 y Panel Anunciador -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.11 Marcas de Instrumentos AED 125 y Panel Anunciador</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Parámetros Eléctricos, Combustible y Lógica de Rearme de Alarmas</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): AED 125 y Lógica Confirm/Test (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AED 125 & CONFIRM/TEST LOGIC</span>
        </div>

        <!-- TABLA DE MARCAS DE INSTRUMENTOS AED 125 -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 w-full shrink-0">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">MARCAS DE INSTRUMENTOS AUXILIARES (AED 125)</strong>
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
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Voltímetro (14V) [V]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">12.6 - 15.0 V</td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">11.0 - 12.6 | 15.0 - 15.5 V</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&lt; 11.0 | &gt; 15.5 V</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Amperímetro [A]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">hasta 85 A</td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">85 - 90 A</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&gt; 90 A</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Fuel Temp (L y R) [°C]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">+5 a 69 °C</td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">-30...+4 | 70 - 75 °C</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&lt; -30 | &gt; 75 °C</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Fuel Qty [USG]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">0.45 a 14.0 USG</td>
                  <td class="py-1.5 px-1.5 text-slate-400 dark:text-slate-500 font-mono">—</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&lt; 0.45 USG</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- LÓGICA CONFIRM / TEST -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 w-full shrink-0">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">LÓGICA OPERATIVA DEL BOTÓN CONFIRM / TEST</strong>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 pt-0.5 text-[11px] leading-tight">
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Activación de aviso:</strong> La luz <strong>ENGINE</strong> se enciende si cualquier indicación entra en ámbar o rojo.</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Memorización:</strong> Permanece encendida aunque el parámetro retorne a la zona verde de operación.</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Confirmación:</strong> El piloto debe presionar el pulsador Confirm / Test para apagar y acusar la alarma.</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Rearme automático:</strong> Tras confirmarse, volverá a iluminarse si otro parámetro se desvía de los límites.</span>
            </div>
            <div class="flex items-start gap-1.5 sm:col-span-2">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Prueba de encendido:</strong> Mantener presionado el botón más de 1 segundo inicia el barrido de autotest en todos los displays.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): AED 125 + NOTA / Panel Anunciador (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AED 125 & PANEL ANUNCIADOR</span>
        </div>

        <div class="flex flex-col gap-2 flex-1 min-h-0">
          <!-- 1. PARTE SUPERIOR: AED 125 + NOTA -->
          <div class="flex-[1.18] min-h-0 flex flex-col rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-white p-2.5 shadow-2xs">
            <div class="flex items-center justify-between shrink-0 pb-0.5 mb-1 border-b border-slate-100 dark:border-slate-200/20">
              <span class="text-[11px] font-bold text-[#0B2E59] uppercase tracking-wide flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-sky-600"></span>
                AED 125 · Auxiliary Engine Display
              </span>
              <span class="text-[9px] font-bold text-sky-800 bg-sky-100 px-1.5 py-0.5 rounded">Fuel Temp / V / A / Qty</span>
            </div>

            <div class="flex-1 min-h-0 grid grid-cols-12 gap-3 items-center">
              <!-- AED 125 a la izquierda -->
              <div class="col-span-6 h-full flex items-center justify-center overflow-hidden py-0.5">
                <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/2.8-aed.jpg?v=1" alt="Auxiliary Engine Display AED 125 DA40 TDI" class="w-full h-full max-h-[205px] object-contain rounded-md" />
              </div>

              <!-- NOTA en cuadro a la derecha -->
              <div class="col-span-6 p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-relaxed shadow-2xs">
                <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs">
                  <span>ℹ️</span>
                  <span>NOTE:</span>
                </strong>
                <div>Si una indicación sale del rango verde, se ilumina la luz ámbar <strong>ENGINE</strong> en el panel anunciador. Permanece encendida incluso cuando la indicación regresa a verde y debe ser confirmada mediante el pulsador Confirm/Test.</div>
              </div>
            </div>
          </div>

          <!-- 2. PARTE INFERIOR: Panel Anunciador de Alarmas -->
          <div class="flex-1 min-h-0 flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-white p-2 shadow-2xs">
            <div class="flex items-center justify-between shrink-0 pb-0.5 mb-1 border-b border-slate-100 dark:border-slate-200/20">
              <span class="text-[11px] font-bold text-[#0B2E59] uppercase tracking-wide flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                Panel Anunciador · Luces de Motor y Sistemas
              </span>
              <span class="text-[9px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">ENGINE Caution</span>
            </div>

            <div class="w-full flex-1 min-h-0 bg-white dark:bg-white flex items-center justify-center overflow-hidden py-0.5">
              <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/2.8-annunciator.jpg?v=1" alt="Panel Anunciador de Cabina DA40 TDI" class="w-full h-full max-h-[165px] object-contain rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.12: 2.12 Combustibles Autorizados y Capacidades de Depósitos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.12 Combustibles Autorizados y Capacidades de Depósitos</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Grados JET/Diésel, Temp. Mínima de Despegue, Capacidades y Trasvase</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): AFM Sección 2 (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-0.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUEL LIMITATIONS & TANK CAPACITIES</span>
        </div>

        <div class="space-y-1.5 py-0.5">
          <!-- TARJETA 1: COMBUSTIBLES AUTORIZADOS Y TEMPERATURAS -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">COMBUSTIBLES AUTORIZADOS, TEMPERATURA Y DENSIDAD</strong>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1 text-[11px] leading-tight text-slate-800 dark:text-slate-200 pt-0.5">
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Queroseno JET:</strong> JET A-1, JET A, JP-8, TS-1 (densidad 0,84 kg/L).</span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span><strong>Diésel alternativo:</strong> Automoción EN 590 y mezclas con JET.</span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-emerald-700 dark:text-emerald-400 shrink-0">•</span>
                <span><strong>Mín. despegue JET:</strong> <strong>-30 °C</strong> (máx. admisible: <strong>+75 °C</strong>).</span>
              </div>
              <div class="flex items-start gap-1.5">
                <span class="font-bold text-amber-700 dark:text-amber-400 shrink-0">•</span>
                <span><strong>Mín. despegue Diésel:</strong> <strong>-5 °C</strong> (congelación de parafinas).</span>
              </div>
              <div class="flex items-start gap-1.5 sm:col-span-2 text-red-600 dark:text-red-400 font-semibold pt-0.5">
                <span class="shrink-0">•</span>
                <span><strong>AVGAS 100LL:</strong> Terminantemente prohibido bajo cualquier circunstancia.</span>
              </div>
            </div>
          </div>

          <!-- TARJETA 2: CAPACIDADES Y AVISO LOW FUEL -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch text-[11px] leading-tight">
            <!-- STANDARD TANKS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase">DEPÓSITOS ESTÁNDAR (STANDARD)</strong>
              <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                <span>Capacidad total:</span>
                <span class="font-mono font-bold">2 x 15.0 USG (113.6 L)</span>
              </div>
              <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                <span>Combustible no utilizable:</span>
                <span class="font-mono text-slate-500">2 x 1.0 USG (7.6 L)</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span>Combustible utilizable:</span>
                <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">2 x 14.0 USG (106.0 L)</span>
              </div>
            </div>

            <!-- AUXILIARY / LONG RANGE -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase">AUXILIAR / BOMBA DE TRASVASE</strong>
              <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                <span>Depósito Auxiliar utilizable:</span>
                <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">1 x 13.7 USG (52.0 L)</span>
              </div>
              <div class="flex justify-between py-0.5 border-b border-slate-100 dark:border-slate-800">
                <span>Tasa de trasvase eléctrico:</span>
                <span class="font-mono">~60 US gal/h (1 gal/min)</span>
              </div>
              <div class="flex justify-between py-0.5">
                <span>Aviso <strong>LOW FUEL</strong>:</span>
                <span class="font-mono font-bold text-amber-600">&lt; 3 a 4 USG (11-15 L)</span>
              </div>
            </div>
          </div>

          <!-- TARJETA 3: CAUTION OPERACIONAL AFM 2.14 -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs shrink-0">
              <span>⚡</span>
              <span>LIMITACIONES OPERATIVAS DEL SISTEMA DE COMBUSTIBLE (AFM 2.14):</span>
            </strong>
            <ul class="list-disc pl-3 space-y-0.5 text-[11px] leading-tight">
              <li><strong>Válvula selectora (Emergency Fuel Valve):</strong> Cuenta con posiciones <code>NORMAL</code>, <code>EMERGENCY TRANSFER</code> y <code>OFF</code>.</li>
              <li><strong>Despegue y aterrizaje:</strong> Deben realizarse en el depósito principal (Main Tank) con la válvula en posición <code>NORMAL</code>.</li>
              <li><strong>Desbalance máximo:</strong> La diferencia máxima permisible entre el depósito derecho e izquierdo es de <strong>9 US gal (34 L)</strong>.</li>
              <li><strong>Vuelo descoordinado:</strong> Con menos de 3 US gal en el depósito seleccionado, está prohibido el vuelo descoordinado prolongado (resbale/derrape) para evitar descebado del motor.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema Oficial de Combustible DA40 TDI (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SISTEMA DE COMBUSTIBLE DA40 TDI</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col items-center justify-between p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-fuel-system.png" alt="Esquema Oficial del Sistema de Combustible Diamond DA40 TDI" class="w-full h-full max-h-[460px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-600 dark:text-slate-300 font-medium shrink-0">
            <strong class="text-[#0B2E59] dark:text-sky-300">Esquema del Sistema de Combustible DA40 TDI</strong> · Válvula selectora (Normal, Emergency, Off), Main Tank, Aux Tank y Bomba de Trasvase
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.13: 2.13 Fluidos de Servicio, Placards y Limitaciones Operacionales -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LIMITACIONES AFM (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.13 Fluidos de Servicio, Placards y Limitaciones Operacionales</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aceites Aprobados, Refrigerante, Capacidades y Letreros Mandatorios</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): AFM Sección 2 (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-0.5">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">APPROVED FLUIDS & MANDATORY PLACARDS</span>
        </div>

        <div class="space-y-1.5 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch text-[11px] leading-tight">
            <!-- FLUIDOS DE SERVICIO HOMOLOGADOS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FLUIDOS Y LUBRICANTES AUTORIZADOS</strong>
              <div class="space-y-1 pt-0.5 leading-tight text-slate-800 dark:text-slate-200">
                <p>• <strong>Aceite de Motor:</strong> Shell Helix Ultra 5W-30 / 5W-40, AeroShell Oil Diesel 10W-40 o Ultra 5W-30.</p>
                <p>• <strong>Capacidad de Aceite:</strong> Mínimo <strong>4,5 L</strong> | Máximo <strong>6,0 L</strong> (consumo máx. admisible: 0,1 L/h).</p>
                <p>• <strong>Aceite de Reductora:</strong> Shell EP 75W-90, Shell Spirax GSX 75W-80 GL-4 o Centurion N1 (~1,0 L).</p>
                <p>• <strong>Refrigerante:</strong> 50% agua desionizada y 50% BASF Glysantin (G48) con punto de congelación a -36 °C.</p>
                <p>• <strong>Prohibición:</strong> Prohibido mezclar tipos o marcas no autorizadas expresamente en el AFM.</p>
              </div>
            </div>

            <!-- PLACARDS MANDATORIOS DE CABINA -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">LETREROS MANDATORIOS (AFM 2.16)</strong>
              <div class="space-y-1 pt-0.5 leading-tight text-slate-800 dark:text-slate-200">
                <p>• <strong>Panel de Instrumentos:</strong> Rótulo de categorías Normal y Utility (VFR D/N, IFR; acrobacias y barrenas prohibidas).</p>
                <p>• <strong>Velocidades $v_A$:</strong> 108 KIAS (>980 a 1150 kg) / 94 KIAS (780 a 980 kg).</p>
                <p>• <strong>Válvula de Emergencia:</strong> <code>NORMAL - EMERGENCY TRANSFER - OFF</code>.</p>
                <p>• <strong>Equipaje:</strong> Máximo 30 kg (66 lb) fijado obligatoriamente con red.</p>
                <p>• <strong>Bocas alares:</strong> <code>JET FUEL ONLY</code> (14 US gal utilizables).</p>
                <p>• <strong>Cabina:</strong> Rótulo obligatorio <code>No smoking</code>.</p>
              </div>
            </div>
          </div>

          <!-- NOTA ECU BACKUP BATTERY Y ADVERTENCIAS -->
          <div class="p-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>🚨</span>
              <span>BATERÍA DE RESERVA ECU & VIGENCIA DE LETREROS:</span>
            </strong>
            <p>La luz roja <code>ECU BACKUP UNSAFE</code> en el Annunciator Panel indica carga insuficiente en la batería de reserva FADEC. En esta condición, los vuelos en reglas IFR quedan terminantemente prohibidos. Todos los letreros y placards contenidos en el AFM deben permanecer perfectamente legibles e instalados.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Placards Oficiales de Cabina DA40 TDI (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PLACARD MANDATORIO DE CABINA DA40 TDI</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col items-center justify-between p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-placards.png" alt="Placard Mandatorio de Cabina Diamond DA40 TDI" class="w-full h-full max-h-[460px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-600 dark:text-slate-300 font-medium shrink-0">
            <strong class="text-[#0B2E59] dark:text-sky-300">Placard Mandatorio de Cabina DA40 TDI</strong> · Velocidades $v_A$ según masa, categorías Normal/Utility, operaciones VFR/IFR y prohibición de acrobacias
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</div>
`,
};

export const DA40_LESSON_3 = {
  id: "da400000-0000-0000-0000-000000000030",
  course_id: DA40_COURSE_ID,
  title: "3. Ingeniería del Avión y Sistemas Continental CD-135 / CD-155",
  slug: "sistemas-continental-diesel-da40",
  sequence_order: 3,
  lesson_order: 3,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 3.1: 3.1 Motor Thielert / Continental TAE 125: Arquitectura y Especificaciones -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.1 Motor Thielert / Continental TAE 125: Arquitectura y Especificaciones</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Modelo TAE 125-02-99/114 (CD-135 / CD-155)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Especificaciones del Motor AFM 7.9.1 (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE SPECIFICATIONS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- TAE 125-02 ESPECIFICACIONES -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">THIELERT TAE 125-02 (CD-135/CD-155)</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Potencia máxima: 99 kW (135/155 DIN-HP) a 2.300 RPM de hélice (Take-off y Max. Continuous)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Cilindrada: 1.991 cm³ (121.5 in³), ciclo Diésel de 4 tiempos</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Arquitectura: 4 cilindros en línea, refrigeración líquida y cárter húmedo (wet sump)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Alimentación: Inyección directa Common Rail y turbocompresor con intercooler</span>
              </div>
            </div>

            <!-- CAJA REDUCTORA Y CONTROL FADEC -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">REDUCTORA Y GESTIÓN FADEC</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Reductora de velocidad de hélice: Relación de engranajes i = 1:1.69</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Gobernador de hélice: Integrado en el motor con circuito de lubricación propio independiente</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Control FADEC: Regulación electrónica digital de inyección, presión de admisión y paso de hélice</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Instrumentación de motor: Monitorización integrada mediante los displays CED 125 y AED 125</span>
              </div>
            </div>
          </div>

          <!-- NOTA FADEC Y COMPONENTES SUPRIMIDOS -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Debido a la tecnología Common Rail con control electrónico FADEC y combustión por ciclo Diésel, en este motor quedan suprimidos: carburador y calefacción de carburador, magnetos de encendido y bujías, palanca manual de mezcla (mixture) y sistema de cebador (primer). La operación de empuje se efectúa exclusivamente mediante la palanca monomando (Power Lever).</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Planta Motriz Continental / Thielert (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PLANTA MOTRIZ TAE 125-02-99/114</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Arquitectura general del motor Thielert / Continental TAE 125-02-99/114: 4 cilindros en línea, refrigeración líquida, inyección directa Common Rail y turbocompresión con intercooler.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.1-cd155-engine.png?v=1" alt="Motor Thielert / Continental TAE 125 Turbo Diésel" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.2 Reductora Integrada y Hélice MT-Propeller</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Relación i=1:1.69 y Paso Variable Constant Speed</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Especificaciones Reductora y Hélice AFM (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">GEARBOX & PROPELLER</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- CAJA REDUCTORA -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CAJA REDUCTORA INTEGRADA (GEARBOX)</strong>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Relación de desmultiplicación: i = 1:1.69 (las RPM del cigüeñal se reducen a RPM de hélice)</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Amortiguador de torsión: Amortiguador mecánico de vibraciones torsionales incorporado</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Embrague de sobrecarga (overload release): Desacopla ante picos de par anómalos o impacto de hélice</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Lubricación independiente: Circuito de aceite propio con intercambiador de calor agua/aceite</span>
              </div>
            </div>

            <!-- HÉLICE MT-PROPELLER -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">HÉLICE TRIPALA CONSTANT SPEED</strong>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Fabricante y modelo: mt-Propeller MTV-6-A/187-129 (diámetro 187 cm / 1,87 m)</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Construcción: Madera laminada reforzada con fibra, borde de acero inoxidable y lámina PU en raíz</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Rango de paso: Ángulo de 12° a 28° (a 0,75 R) gobernado automáticamente por la ECU</span>
              </div>
              <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                <span class="text-slate-800 dark:text-slate-200">Regulador electro-hidráulico: Brida al frente del motor con circuito de aceite propio</span>
              </div>
            </div>
          </div>

          <!-- ADVERTENCIAS AFM: SEGURIDAD Y FALLO DE GOBERNADOR -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Ante una pérdida de presión de aceite en el gobernador, las palas van automáticamente a paso fino (low pitch / altas RPM) funcionando como una hélice de paso fijo. El régimen se controla directamente con la palanca de empuje (Power Lever) sin superar 2.300 RPM (máx. 2.500 RPM transitorio). Las palas ligeras de madera cambian de RPM más rápido que las metálicas: mover siempre la palanca con suavidad. Jamás mover la hélice con la mano.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Reductora Integrada y Hélice MT-Propeller (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CAJA REDUCTORA Y HÉLICE MT-PROPELLER</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 px-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-snug font-medium">
              Arquitectura de la caja reductora con relación i=1:1.69, amortiguador torsional, embrague de sobrecarga y sistema de gobierno electro-hidráulico de la hélice MTV-6-A/187-129.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-800/90 flex flex-col items-center justify-center p-0.5">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.2-gearbox-propeller.jpg?v=1" alt="Reductora Integrada y Hélice MT-Propeller" class="w-full h-full object-contain rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.3: 3.3 Sistema FADEC: Control Digital y Redundancia Dual -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.3 Sistema FADEC: Control Digital y Redundancia Dual</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Doble ECU (Canal A y B), Sensores Duplicados y Mando Único</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Arquitectura FADEC AFM 7.9.2 y 7.10 (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FADEC ARCHITECTURE</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- CANAL A Y CANAL B -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CANALES FADEC A Y B REDUNDANTES</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Doble ECU independiente: ECU A (canal activo en operación normal) y ECU B (canal de respaldo permanente)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Sensores duplicados: Doble captador de RPM, presión de raíl, sobrealimentación (MAP) y temperaturas</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Conmutación automática (ECU SWAP): Si la ECU activa detecta un fallo interno, transfiere el control a la otra</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Mando único (Power Lever): Potenciómetros de cabina traducen la consigna de potencia (% LOAD) a la ECU activa</span>
              </div>
            </div>

            <!-- ALIMENTACIÓN Y BATERÍA DE RESPALDO -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ALIMENTACIÓN Y RESPALDO ELÉCTRICO</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Dependencia eléctrica total: Motor diésel sin magnetos; inyectores y ECUs requieren alimentación continua</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Fuentes primarias: Alternador de 14 V con regulación PWM y Batería Principal de plomo-ácido de 12 V / 23 Ah</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">ECU Backup Battery: Batería de 12 V / 12 Ah bajo asiento trasero; alimenta automáticamente a la ECU B</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Interruptor Engine Master: Conecta ambas ECUs al ECU Bus; al colocarlo en OFF el motor se apaga de inmediato</span>
              </div>
            </div>
          </div>

          <!-- NOTA INFORMATIVA AFM -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight">
              <li class="pl-0.5">El sistema FADEC consta de dos canales independientes (ECU A y ECU B). En caso de avería en el canal activo, el sistema conmuta automáticamente al otro. La posición manual ECU B del conmutador solo debe emplearse en emergencias.</li>
              <li class="pl-0.5">Si el conmutador ENGINE MASTER se coloca en OFF, se corta la alimentación eléctrica del FADEC y los inyectores, provocando la parada inmediata del motor.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Arquitectura del Sistema FADEC (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ARQUITECTURA DEL SISTEMA FADEC</span>
        </div>
        <div class="w-full flex-1 min-h-0 flex flex-col justify-start space-y-1.5 overflow-hidden">
          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Esquema funcional de redundancia dual: doble unidad de control electrónico (ECU A y B), sensórica duplicada, fuentes de alimentación y gobierno integral monomando.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-800/90 flex flex-col items-center justify-center p-0.5 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/3.3-fadec.jpg?v=1" alt="Arquitectura del Sistema FADEC Diamond DA40 TDI" class="w-full h-full object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.4: 3.4 Gestión FADEC: Autoprueba, Categorías de Fallo y Conmutador ECU SWAP -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.4 Gestión FADEC: Autoprueba, Categorías de Fallo y Conmutador ECU SWAP</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Lógica del Pulsador ECU TEST, Posiciones AUTOMATIC / ECU B y Reseteo de Avisadores</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ECU TEST &amp; ECU SWAP</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- PULSADOR ECU TEST -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PULSADOR ECU TEST (DOBLE FUNCIÓN)</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">En IDLE y RPM &lt; 900: Pulsar y mantener inicia el self-test (posible en tierra y vuelo solo en IDLE; en caso contrario no inicia)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Ciclo de prueba: Conmuta ECU A a B, cicla hélice (RPM monitoreadas), ligera sacudida (shake) y vuelve a ECU A apagando avisadores</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Sobre IDLE o RPM &gt; 900: Presionar &gt;2 segundos resetea avisos ECU A o B una sola vez y solo ante fallos de menor gravedad</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Batería de respaldo (IFR): Comprueba su carga antes de cada vuelo; si es &lt;70%, la luz roja ECU BACKUP UNSAFE queda fija</span>
              </div>
            </div>

            <!-- CONMUTADOR ECU SWAP -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONMUTADOR ECU SWAP (AUTOMATIC / ECU B)</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Posición AUTOMATIC: Operación normal gobernada por ECU A con conmutación automática a ECU B ante fallo o pérdida de sensor</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Conmutación manual (solo emergencia): Si la conmutación automática falla, puede realizarse manualmente seleccionando la posición ECU B</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Criterio de reversión: Si seleccionando la posición ECU B no se resuelve el problema del motor, volver a colocar en AUTOMATIC</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Avisador no reseteable en vuelo: Si el aviso ECU A o B no se apaga tras el reset o reaparece, aterrice en el aeródromo adecuado más cercano</span>
              </div>
            </div>
          </div>

          <!-- NOTA / WARNING AFM -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING / CAUTION:</span>
            </strong>
            <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight">
              <li class="pl-0.5"><strong>WARNING:</strong> Si los avisadores no se encienden en el test o si 'ECU BACKUP UNSAFE' no se apaga, la batería de respaldo no tiene energía suficiente para alimentar el motor en fallo eléctrico severo (vuelos IFR prohibidos).</li>
              <li class="pl-0.5"><strong>CAUTION:</strong> Al conmutar entre ECUs es normal una ligera sacudida. En caso de caídas prolongadas de potencia o si el motor se detiene durante la prueba, termine la preparación del vuelo.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Acción Requerida / Video Prueba FADEC (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CONTENIDO AUDIOVISUAL</span>
          <span class="text-[9px] font-bold text-amber-800 bg-amber-100 dark:bg-amber-950/70 dark:text-amber-300 px-1.5 py-0.5 rounded">Pendiente Grabación</span>
        </div>

        <div class="w-full flex-1 min-h-0 flex flex-col items-center justify-center p-4 text-center space-y-3">
          <div class="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/60 border-2 border-amber-300 dark:border-amber-700 flex items-center justify-center text-3xl shadow-sm text-amber-600 dark:text-amber-400 shrink-0">
            🎥
          </div>
          <div class="space-y-1.5 max-w-sm">
            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">Acción Requerida · Material Audiovisual:</span>
            <h3 class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-sky-200 leading-tight">
              Hacer video prueba ECU TEST DA40 TDI
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Grabar video demostrativo del procedimiento real de prueba ECU en cabina: posicionamiento en IDLE, accionamiento del pulsador ECU TEST, ciclado de hélice y verificación de avisadores.
            </p>
          </div>

          <div class="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-left w-full max-w-sm space-y-1.5 shadow-2xs">
            <span class="text-[10px] font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
              Puntos clave para el video:
            </span>
            <ul class="text-[11px] text-amber-950 dark:text-amber-200/90 space-y-1 list-disc pl-4">
              <li>Palanca monomando de potencia en ralentí (IDLE) y RPM &lt; 900</li>
              <li>Pulsación continua del botón ECU TEST hasta la finalización del ciclo</li>
              <li>Secuencia de avisadores: parpadeo de ECU A, ECU B, CAUTION y ECU BACKUP UNSAFE</li>
              <li>Ciclado automático de RPM de hélice y retorno suave a ECU A con extinción de luces</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.5: 3.5 Sistema Eléctrico I: Fuentes de Potencia y Alternador -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.5 Sistema Eléctrico I: Fuentes de Potencia y Alternador</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Red de 12 Vcc, Alternador de 90 A, Batería Principal y Batería de Excitación</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ELECTRICAL POWER SOURCES</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- GENERACIÓN Y BATERÍA PRINCIPAL -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">GENERACIÓN Y BATERÍA PRINCIPAL</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Red de 12 Vcc: Sistema de corriente continua (generación, almacenamiento, distribución y consumidores) bajo llave Electric Master</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Alternador de 90 A: Movido por correa plana; regula tensión entre 12 y 14 V por modulación PWM según régimen y carga</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Protección y control: Salida a Battery Bus por fusible de 100 A y sensor de corriente (Ammeter); luz de aviso ALTERNATOR</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Batería Principal (12 V / 23 Ah): En cortafuegos derecho; alimenta Hot Battery Bus (fusible 50 A) y Battery Bus vía relé</span>
              </div>
            </div>

            <!-- BATERÍAS DE EXCITACIÓN Y RESPALDO -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">BATERÍAS DE EXCITACIÓN Y RESPALDO</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Batería de Excitación (12 V / 1.3 Ah): Energiza el campo del alternador si la batería principal falla para seguir generando</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Activación por Engine Master: Se conecta automáticamente al campo por contacto secundario protegido con fusible de 5 A</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Batería de Respaldo FADEC (12 V / 12 Ah): Bajo asiento trasero; alimenta a ECU B vía fusible de 30 A si fallan alternador y batería</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Batería de Emergencia IFR (1 h): Pila seca para horizonte artificial y luz flood al accionar el interruptor EMERGENCY</span>
              </div>
            </div>
          </div>

          <!-- NOTA / WARNING AFM -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div class="text-[11px] leading-tight">
              La ECU, indispensable para el funcionamiento del motor diésel, requiere energía eléctrica continua. En caso de avería del alternador (luz ALTERNATOR), las baterías garantizan un suministro mínimo de <strong>30 minutos</strong>: active inmediatamente el interruptor <strong>ESSENTIAL BUS</strong> para desconectar cargas superfluas y aterrice en el aeródromo adecuado más cercano.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema de Fuentes de Potencia y Alternador (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUENTES DE POTENCIA Y DISTRIBUCIÓN</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-electrical-sources.png?v=3" alt="Esquema Eléctrico Oficial de Fuentes y Distribución Diamond DA40 TDI" class="w-full h-full object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 100%; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.6: 3.6 Sistema Eléctrico II: Batería de Respaldo ECU y Red de Barras -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.6 Sistema Eléctrico II: Batería de Respaldo ECU y Red de Barras</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Arquitectura de Barras (Hot, Battery, ECU, Main, Essential) y Respaldo ECU B</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DISTRIBUCIÓN Y RESPALDO ELÉCTRICO</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- BATERÍA DE RESPALDO ECU (ECU B ONLY) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">BATERÍA DE RESPALDO ECU (12 V / 12 Ah)</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Alimentación exclusiva a ECU B: Bajo el asiento trasero derecho; se conecta únicamente a ECU B vía relé <em>ECU alternate power</em> y fusible de 30 A</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Conmutación automática: Si fallan el alternador y la batería principal, entra en servicio automáticamente para evitar la parada del motor</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Autonomía con Essential Bus ON: Las baterías garantizan un suministro eléctrico mínimo de 30 minutos para alcanzar un aterrizaje seguro</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Aislamiento total: Solo alimenta la ECU B; el resto de sistemas y aviónica del avión quedan desenergizados</span>
              </div>
            </div>

            <!-- ARQUITECTURA DE BARRAS Y ESSENTIAL BUS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">BARRAS Y CONMUTADOR ESSENTIAL BUS</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Hot Battery y Battery Bus: Hot Battery Bus (fusible 50 A) siempre activa; Battery Bus bajo llave Electric Master alimenta arranque y ECU Bus</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">ECU Bus dedicada: Comandada por el interruptor Engine Master; alimenta simultáneamente ECU A y ECU B y carga la batería de respaldo</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Main Bus y Avionic Bus: Main Bus alimenta cargas secundarias y a la Avionic Bus a través del relé gobernado por el interruptor Avionic Master</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Conmutador ESSENTIAL BUS: En fallo de alternador, poner en ON desconecta la Main Bus y conecta Essential Bus a batería (suministro mínimo 30 min)</span>
              </div>
            </div>
          </div>

          <!-- NOTA / WARNING AFM - PARTE 1 -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING: SUMINISTRO EXCLUSIVO A ECU B</span>
            </strong>
            <div class="text-[11px] leading-tight">
              Si se interrumpe simultáneamente el alternador y la batería principal, el motor funciona únicamente con la batería de respaldo alimentando a la <strong>ECU B</strong>. En este estado, todos los demás equipos eléctricos y aviónica del avión estarán inoperativos.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema y Warning Parte 2 (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUENTES DE POTENCIA Y DISTRIBUCIÓN</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-electrical-sources.png?v=3" alt="Esquema Eléctrico Oficial de Fuentes y Distribución Diamond DA40 TDI" class="w-full h-full object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 100%; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
        </div>

        <!-- NOTA / WARNING AFM - PARTE 2 -->
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight mt-1 shadow-2xs shrink-0">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING: CONMUTADOR ECU SWAP</span>
          </strong>
          <div class="text-[11px] leading-tight">
            Al operar con la batería de respaldo FADEC, <strong>el conmutador ECU SWAP debe permanecer en AUTO o ECU B</strong>. No intente seleccionar la ECU A bajo ningún concepto: carece de energía y provocará la <strong>parada inmediata del motor</strong> en vuelo.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.7: 3.7 Sistema de Combustible I: Depósitos y Alimentación -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.7 Sistema de Combustible I: Depósitos y Alimentación</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Capacidades de Depósitos, Densidad (0.84 kg/l), Válvulas y Trasvase</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH AFM DA40 TDI (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUEL TANKS & FEED CIRCUIT</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- DEPÓSITOS Y DENSIDAD -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DEPÓSITOS Y DENSIDAD DE COMBUSTIBLE</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Densidad superior: Jet A-1 y Diésel (0.84 kg/l) son más densos que AVGAS (0.715 kg/l)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Alimentación asimétrica: En vuelo normal el motor toma combustible únicamente del depósito MAIN (plano izquierdo)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Standard Tank: Total 113.6 l (30.0 US gal), no utilizable 7.6 l (2.0 US gal), utilizable 106.0 l (28.0 US gal)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Long Range Tank: Total 155.2 l (41.0 US gal), no utilizable 7.6 l (2.0 US gal), utilizable 147.6 l (39.0 US gal)</span>
              </div>
            </div>

            <!-- VÁLVULAS Y TRASVASE -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">VÁLVULAS, TRASVASE Y DESBALANCE</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency Fuel Valve: Posiciones NORMAL (MAIN), EMERG. TRANSFER (AUX a MAIN) y OFF, bajo fiador de seguridad</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Bomba eléctrica de trasvase: Transfiere de AUX a MAIN; desconexión automática al vaciarse AUX o llenarse MAIN</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Trasvase mecánico (EMERG. TRANSFER): Si falla la bomba eléctrica, alimenta desde AUX y retorna a MAIN a 70-80 l/h</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Desbalance máximo: Límite de 9 US gal (aprox. 34 l)</span>
              </div>
            </div>
          </div>

          <!-- NOTA / CAUTION AFM -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚡</span>
              <span>CAUTION:</span>
            </strong>
            <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight">
              <li class="pl-0.5">En depósitos Long Range, si el instrumento indica 15 US gal, debe asumirse <strong>19.5 US gal</strong> para el cálculo del desbalance máximo admisible entre depósitos (máximo 9 US gal).</li>
              <li class="pl-0.5">Si se opera con combustible Diésel (EN590) o mezclas desconocidas, no se permite el arranque si el aviso parpadea en amarillo, ni el despegue si permanece fijo en amarillo (temperatura de combustible inferior al límite en el plano izquierdo).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema del Sistema de Combustible (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESQUEMA DE COMBUSTIBLE · DEPÓSITOS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-fuel-schematic.png" alt="Esquema Oficial del Sistema de Combustible Diamond DA40 TDI" class="w-full h-full object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 100%; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.8: 3.8 Sistema de Combustible II: Bombas, Retorno y Enfriador -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.8 Sistema de Combustible II: Bombas, Retorno y Enfriador</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Bombas de Baja y Alta Presión, Inyección Common Rail, Retorno y Deflector (>20°C)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">COMMON RAIL & RETURN CIRCUIT</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- BOMBAS Y COMMON RAIL -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">BOMBAS MECÁNICAS Y TRASVASE ELÉCTRICO</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Bomba mecánica de baja presión: Accionada por el motor; succiona combustible desde el depósito MAIN a través del gascolator</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Bomba mecánica de alta presión: Eleva la presión y alimenta el conducto común (Common Rail) de inyección directa</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Inyección Common Rail: Inyectores controlados electrónicamente por la ECU según la demanda de potencia de la palanca</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Bomba eléctrica de trasvase: Trasvasa de AUX a MAIN; se apaga sola si el auxiliar se vacía o el principal se llena (luz FUEL TRANS)</span>
              </div>
            </div>

            <!-- RETORNO Y ENFRIADOR -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">RETORNO Y ENFRIADOR (FUEL COOLER)</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Retorno térmico cruzado: El exceso caliente del rail pasa por el depósito AUX (derecho) y vuelve al MAIN (izquierdo), precalentando las alas</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Válvula reguladora: Válvula eléctrica que ajusta la presión del Common Rail usando el caudal de retorno como parámetro</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Radiador Fuel Cooler: En el encastre alar derecho; reduce la temperatura del combustible de retorno antes de llegar a los depósitos</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Deflector (Baffle): Chapa de entrada que DEBE RETIRARSE con temperaturas exteriores (OAT) superiores a 20°C (68°F)</span>
              </div>
            </div>
          </div>

          <!-- NOTA / CAUTION AFM - PARTE 1 -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚡</span>
              <span>CAUTION: BOMBA DE TRASVASE Y DESCEBADO</span>
            </strong>
            <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight">
              <li class="pl-0.5">Si la luz de aviso FUEL TRANS parpadea, apague inmediatamente la bomba eléctrica de trasvase (posible descebado o anomalía en el flujo).</li>
              <li class="pl-0.5">Si la bomba mecánica aspira aire (p. ej. al agotarse el depósito en EMERG. TRANSFER), es preceptiva una inspección técnica antes del siguiente vuelo.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema de Inyección, Retorno y Enfriador (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RETORNO Y ENFRIADOR (FUEL COOLER)</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-fuel-cooler.png" alt="Esquema del Enfriador de Combustible y Deflector (Fuel Cooler Baffle) Diamond DA40 TDI" class="w-full h-full object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 100%; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
        </div>

        <!-- NOTA / CAUTION AFM - PARTE 2 -->
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight mt-1 shadow-2xs shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION: DEFLECTOR Y TEMPERATURA</span>
          </strong>
          <div class="text-[11px] leading-tight">
            El uso de combustibles no aprobados o volar con el deflector puesto a OAT &gt; 20°C puede causar sobretemperatura y daños severos en el sistema.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.9: 3.9 Sistema de Refrigeración Líquida (Cooling System) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.9 Sistema de Refrigeración Líquida (Cooling System)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Termostato (~80°C, 80-94°C, >94°C), Radiador, Calefacción y Aviso Water Level</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">LIQUID COOLING SYSTEM</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- TERMOSTATO Y CIRCUITOS DE FLUJO -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">TERMOSTATO Y CIRCUITOS DE FLUJO</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Circuito de Bypass (&lt; 80 °C): El refrigerante recircula exclusivamente por el bloque para un calentamiento rápido</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Circuito Mixto (80 °C - 94 °C): La válvula termostática abre progresivamente, dividiendo el caudal entre bypass y radiador</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Circuito Principal (&gt; 94 °C): El termostato deriva todo el caudal al radiador frontal (límite máximo operativo: 105 °C / 221 °F)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Líquido refrigerante: Mezcla 50% agua destilada y 50% anticongelante (Glysantin Protect Plus / G48) hasta -36 °C</span>
              </div>
            </div>

            <!-- DEPÓSITO DE EXPANSIÓN, CALEFACCIÓN Y CONTROL -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DEPÓSITO DE EXPANSIÓN Y CALEFACCIÓN</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Depósito y aviso WATER LEVEL: Botella de expansión con válvula de sobrepresión y sensor de nivel que enciende WATER LEVEL</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Sensor en culata (CT): Mide la temperatura de refrigerante junto al termostato y la transmite a la ECU y al CED 125</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Intercambiador de reductora: Refrigera el aceite de la caja reductora mediante intercambiador integrado agua/aceite</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Calefacción de cabina: Intercambiador líquido-aire de flujo continuo; el piloto regula el caudal mediante CABIN HEAT</span>
              </div>
            </div>
          </div>

          <!-- NOTA / CAUTION AFM -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚡</span>
              <span>CAUTION:</span>
            </strong>
            <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight">
              <li class="pl-0.5">Si se ilumina el aviso WATER LEVEL (pérdida de refrigerante): reduzca potencia de inmediato y prepárese para un aterrizaje de emergencia con motor parado (AFM 3.5.1).</li>
              <li class="pl-0.5">Ante alta temperatura de refrigerante con WATER LEVEL apagado: reduzca potencia un 10 % y aumente la velocidad en 10 KIAS; si no entra en arco verde en 60 s, aterrice en el aeródromo adecuado más cercano.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema del Sistema de Refrigeración (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESQUEMA DE REFRIGERACIÓN (TAE 125)</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-cooling-system.png" alt="Esquema del Sistema de Refrigeración Líquida Thielert TAE 125 Diamond DA40 TDI" class="w-full h-full object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 100%; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.10: 3.10 Sistemas de Lubricación: Motor y Caja Reductora -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.10 Sistemas de Lubricación: Motor y Caja Reductora</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Circuitos Independientes de Aceite de Motor y Aceite de Caja Reductora / Gobernador</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">LUBRICATION SYSTEMS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- ACEITE DE MOTOR -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ACEITE DE MOTOR (ENGINE OIL)</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Aceites aprobados: Shell Helix Ultra 5W-30 / 5W-40, AeroShell Oil Diesel 10W-40 y AeroShell Diesel Ultra</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Capacidad: Entre 4.5 l (mínimo) y 6.0 l (máximo). Consumo máximo admisible: 0.1 l/h</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Comprobación prevuelo: Varilla en capó superior; esperar al menos 5 min tras parar motor (80% a 5 min, 100% a 30 min)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Vigilancia en CED 125: Presión normal entre 2.3 y 5.2 bar (mín. 1.2 bar en ralentí); máx. temp. 140°C</span>
              </div>
            </div>

            <!-- ACEITE DE REDUCTORA Y GOBERNADOR -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ACEITE DE REDUCTORA Y GOBERNADOR</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Circuito independiente dual: Lubrica los engranajes de la reductora y alimenta el gobernador hidráulico de hélice</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Aceites aprobados: Shell EP 75W-90 API GL-4, Shell Spirax S4 G 75W-90, Spirax GSX y S6 GXME 75W-80</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Capacidad y mirilla: Capacidad aproximada de 1.0 litro; inspección visual por mirilla de cristal en el capó inferior</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Vigilancia en CED 125: Temperatura normal hasta 115°C (precaución 115-120°C; límite máximo 120°C)</span>
              </div>
            </div>
          </div>

          <!-- NOTA / CAUTION AFM -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚡</span>
              <span>CAUTION:</span>
            </strong>
            <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight">
              <li class="pl-0.5">Utilice exclusivamente los tipos de aceite aprobados con su designación exacta. Jamás mezcle aceite de motor con aceite de reductora ni tipos incompatibles.</li>
              <li class="pl-0.5">En condiciones normales el nivel de aceite de la caja reductora no debe disminuir entre revisiones periódicas; si el nivel en la mirilla es bajo o no es visible, se prohíbe el vuelo y se requiere mantenimiento no programado antes de volar.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema de Lubricación Motor y Reductora (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CIRCUITOS DE LUBRICACIÓN (TAE 125)</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-lubrication-system.jpg" alt="Esquema de Circuitos de Aceite de Motor y Caja Reductora Thielert TAE 125 Diamond DA40 TDI" class="w-full h-full object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 100%; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.11: 3.11 Instrumentación de Motor: CED 125 y AED 125 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.11 Instrumentación de Motor: CED 125 y AED 125</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Indicación Digital Compacta de Parámetros de Motor y Datos Auxiliares</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIGITAL ENGINE INSTRUMENTS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- CED 125 -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CED 125 (COMPACT ENGINE DISPLAY)</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Propeller Rotary Speed: RPM de la hélice en indicación digital numérica y de barra</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Engine Oil Pressure (OP): Presión de aceite (bar, normal 2.3 - 5.2 bar, mín. 1.2 bar)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Engine Oil Temp (OT): Temperatura de aceite de motor (°C, normal 50 - 125 °C, máx. 140 °C)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Coolant Temp (CT): Temperatura de refrigerante de motor (°C, normal 60 - 96 °C, máx. 105 °C)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Gearbox Temp (GT): Temperatura de aceite de reductora (°C, normal hasta 115 °C, máx. 120 °C)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Load Display: Porcentaje de potencia de motor desarrollada (0% a 100%)</span>
              </div>
            </div>

            <!-- AED 125 -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">AED 125 (AUXILIARY ENGINE DISPLAY)</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Quantity (MAIN &amp; AUX): Cantidad de combustible en galones US para ambos depósitos</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Temperature: Temperatura de combustible (°C) en depósito principal y auxiliar</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Bus Voltage &amp; Amps: Tensión de barra eléctrica (V) e intensidad del generador (A)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Aviso Water Level: Indicador ámbar de precaución que alerta de nivel bajo de refrigerante</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Flow: Caudal horario de consumo de combustible (US gal/h)</span>
              </div>
            </div>
          </div>

          <!-- NOTA AFM -->
          <div class="p-1.5 px-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Si el conmutador ENGINE MASTER está en posición OFF, la indicación de carga (LOAD) no muestra ningún valor numérico aunque la hélice esté girando.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Displays Digitales CED 125 y AED 125 (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">INSTRUMENTACIÓN DIGITAL CED &amp; AED</span>
        </div>

        <div class="flex flex-col gap-2 flex-1 min-h-0">
          <!-- 1. CED 125 Display Compacto de Motor -->
          <div class="flex-1 min-h-0 flex flex-col rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/90 p-2 shadow-2xs">
            <div class="flex items-center justify-between shrink-0 pb-0.5 mb-1 border-b border-slate-100 dark:border-slate-700">
              <span class="text-[11px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                CED 125 · Compact Engine Display
              </span>
              <span class="text-[9px] font-bold text-emerald-800 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300 px-1.5 py-0.5 rounded">Tach / Press / Temp / Load</span>
            </div>
            <div class="w-full flex-1 min-h-0 bg-white dark:bg-slate-900/50 rounded-lg flex items-center justify-center overflow-hidden p-1 lesson-img-wrapper" draggable="false" style="position: relative;">
              <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-ced125.jpg" alt="Compact Engine Display CED 125 Thielert TAE 125 Diamond DA40 TDI" class="w-full h-full max-h-[195px] object-contain rounded-md" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 195px; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
            </div>
          </div>

          <!-- 2. AED 125 Display Auxiliar -->
          <div class="flex-1 min-h-0 flex flex-col rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800/90 p-2 shadow-2xs">
            <div class="flex items-center justify-between shrink-0 pb-0.5 mb-1 border-b border-slate-100 dark:border-slate-700">
              <span class="text-[11px] font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wide flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-sky-600"></span>
                AED 125 · Auxiliary Engine Display
              </span>
              <span class="text-[9px] font-bold text-sky-800 bg-sky-100 dark:bg-sky-950 dark:text-sky-300 px-1.5 py-0.5 rounded">Fuel / Volt / Amps / Flow / Level</span>
            </div>
            <div class="w-full flex-1 min-h-0 bg-white dark:bg-slate-900/50 rounded-lg flex items-center justify-center overflow-hidden p-1 lesson-img-wrapper" draggable="false" style="position: relative;">
              <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-aed125.jpg" alt="Auxiliary Engine Display AED 125 Thielert TAE 125 Diamond DA40 TDI" class="w-full h-full max-h-[195px] object-contain rounded-md" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 195px; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.12: 3.12 Panel de Alarmas (Lightpanel) y Mandos de Cabina -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.12 Panel de Alarmas (Lightpanel) y Mandos de Cabina</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Luces Avisadoras de FADEC, Alternador, Nivel Bajo y Mandos de Motor</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ANNUNCIATOR LIGHTPANEL &amp; ENGINE CONTROLS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- PANEL DE LUCES AVISADORAS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PANEL DE LUCES AVISADORAS (LIGHTPANEL)</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">DOORS (Roja): Capota delantera o puerta trasera no bloqueada o mal cerrada</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">START (Roja/Ámbar): Piñón de arranque engranado o relé energizado indebidamente</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">ALTERNATOR &amp; LOW VOLTS (Ámbar): Fallo del alternador o tensión &lt; 12.6 V</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">ECU A / ECU B (Ámbar): Mal funcionamiento en el canal ECU activo</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE (Ámbar): Parámetro en instrumentos digitales CED/AED fuera de arco verde</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">LOW FUEL (Ámbar): Combustible utilizable en depósito MAIN inferior a 3 US gal</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">PITOT, FUEL TRANS &amp; GLOW: Calefacción pitot (ámbar), trasvase activo y bujías diésel</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">ACKNOWLEDGE (Verde): Pulsador para silenciar alarma y fijar luces intermitentes</span>
              </div>
            </div>

            <!-- MANDOS ESPECÍFICOS DEL MOTOR -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MANDOS ESPECÍFICOS DEL MOTOR</strong>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Power Lever: Mando único de empuje en consola central con ajuste de fricción</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Alternate Air: Tirador a la izquierda de consola; aporta aire no filtrado ante bloqueo</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Engine Master: Interruptor con guarda que activa las dos ECU y permite el arranque</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">Electric Master: Llave con 3 posiciones (OFF, ON, START) para batería y arrancador</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">ECU Swap: Conmutador bajo guarda con modos AUTOMATIC (normal) y ECU B (forzado)</span>
              </div>
              <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
                <span class="text-slate-800 dark:text-slate-200">ECU Test: Pulsador de autochequeo en IDLE (&lt; 900 RPM) y test de batería de respaldo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Panel Anunciador de Alarmas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PANEL ANUNCIADOR DE ALARMAS</span>
          <span class="text-[9px] font-bold text-amber-800 bg-amber-100 dark:bg-amber-950/70 dark:text-amber-300 px-1.5 py-0.5 rounded">Annunciator Panel</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-annunciator-panel-realistic.jpg" alt="Panel Anunciador de Cabina Diamond DA40 TDI Thielert TAE 125" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 380px; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
        </div>

        <!-- NOTA / WARNING AFM EN COLUMNA DERECHA -->
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight mt-1 shadow-2xs shrink-0">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <ul class="list-disc pl-3 space-y-0.5 text-[11px] leading-tight">
            <li class="pl-0.5">Si se enciende la luz ECU A o ECU B, o tras registrarse un fallo de ECU (incluso si se ha podido resetear con el botón ECU TEST), se prohíbe el vuelo y se requiere mantenimiento técnico antes del siguiente vuelo.</li>
            <li class="pl-0.5">Ante un fallo de la ECU o del gobernador, las palas de la hélice pueden quedar bloqueadas en el paso más alto (máximo paso), reduciendo significativamente las prestaciones y el régimen de ascenso del avión.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.13: 3.13 Sistemas de Célula I: Mandos de Vuelo, Compensación y Flaps Eléctricos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.13 Sistemas de Célula I: Mandos de Vuelo, Compensación y Flaps Eléctricos</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Flight Controls, Elevator Trim &amp; Wing Flap System</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Mandos y Flaps (Altura Fija 590px, Sin Scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FLIGHT CONTROLS &amp; TRIM SYSTEM</span>
        </div>

        <!-- Mandos Primarios y Compensador -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Palancas de Mando y Varillas Rígidas:</strong> Mandos dobles mediante palancas (<span class="italic">control sticks</span>). Los alerones y el timón de profundidad se operan mediante varillas rígidas de empuje de acero (<span class="italic">steel push-rods</span>) con terminales de rótula sellados con barniz de seguridad (<span class="italic">locking varnish</span>).</div>
          </div>
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Timón de Dirección y Regulación de Pedales:</strong> El timón de dirección se acciona mediante cables de acero guiados por poleas. Los pedales incorporan un tirador de desbloqueo detrás de su soporte para ajuste longitudinal exclusivo en tierra (prohibido regular en vuelo).</div>
          </div>
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Sistema de Compensación de Profundidad (<span class="italic">Elevator Trim</span>):</strong> Accionado manualmente por la rueda negra de trim en la consola central tras la palanca de gases. Dispone de mecanismo de fricción y marca blanca para despegue (T/O). Conectado mediante cable Bowden al tab del timón de profundidad.</div>
          </div>
        </div>

        <div class="flex items-center justify-between shrink-0 pt-1 pb-0.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">WING FLAP SYSTEM</span>
        </div>

        <!-- Flaps Eléctricos -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Flaps de Curvatura en Composite (<span class="italic">Plain Flaps</span>):</strong> Construcción sándwich GFRP/CFRP con 6 bisagras fijadas mediante pasadores elásticos (<span class="italic">roll pins</span>). Un tubo de torsión transversal a través del fuselaje interconecta mecánicamente ambos planos para impedir deflexiones asimétricas.</div>
          </div>
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Accionamiento Eléctrico y Protección:</strong> Operados por un motor eléctrico comandado por selector de 3 posiciones en el panel de instrumentos; incluye interruptores de final de carrera en UP y LDG, y disyuntor automático <code class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">FLAP</code>.</div>
          </div>
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Protección y Velocidades Máximas:</strong> Disyuntor automático <code class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">FLAP</code>. Límites de velocidad de operación: <strong class="text-emerald-700 dark:text-emerald-400">V<sub>FE</sub> T/O = 108 KIAS</strong> y <strong class="text-amber-700 dark:text-amber-400">V<sub>FE</sub> LDG = 91 KIAS</strong>.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema y Datos Técnicos (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SISTEMA DE FLAPS (DA40 TDI)</span>
          </div>

          <div class="w-full shrink-0 flex items-start gap-2 rounded-xl bg-white dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-slate-700/80 shadow-2xs text-[11px] leading-tight text-slate-800 dark:text-slate-200">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[14px]">•</span>
            <div><strong>Posiciones e Indicador Lumínico:</strong> Tres posiciones: Cruise UP (0°, luz verde), Take-off T/O (20°, luz blanca, V<sub>FE</sub> = 108 KIAS) y Landing LDG (42°, luz blanca, V<sub>FE</sub> = 91 KIAS). El encendido de dos luces simultáneas indica flaps en movimiento de tránsito.</div>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-flaps-system.jpg" alt="Sistema de Flaps y Mandos de Vuelo Diamond DA40 TDI" class="w-full h-full max-h-[460px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 460px; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.14: 3.14 Sistemas de Célula II: Tren, Frenos, Dirección en Tierra y Aviso de Pérdida -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · INGENIERÍA Y SISTEMAS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.14 Sistemas de Célula II: Tren, Frenos, Dirección en Tierra y Aviso de Pérdida</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Landing Gear, Ground Steering &amp; Stall Warning</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Tren, Frenos, Aviso de Pérdida (Altura Fija 590px, Sin Scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TREN, FRENOS Y DIRECCIÓN</span>
        </div>

        <!-- Tren, Frenos y Dirección -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-[11px] leading-tight text-slate-800 dark:text-slate-200">
          <div><strong>Tren de Aterrizaje Triciclo Fijo:</strong> Tren principal sustentado por ballestas de acero templado (<span class="italic">sprung steel struts</span>) con carenados de rueda desmontables (su retirada reduce prestaciones). La pata de morro dispone de rueda orientable loca (<span class="italic">free-castering</span>) amortiguada por un paquete de elastómeros (<span class="italic">elastomer package</span>).</div>
          <div><strong>Dirección en Tierra (<span class="italic">Ground Steering</span>):</strong> La rueda de morro no tiene conexión mecánica directa a los pedales; el guiado en rodaje se realiza exclusivamente mediante <strong>frenado diferencial</strong> en las punteras de los pedales en combinación con el timón, permitiendo giros muy cerrados pivotando sobre una rueda principal.</div>
          <div><strong>Frenos Hidráulicos y de Estacionamiento:</strong> Frenos de disco individuales accionados hidráulicamente mediante cilindros maestros en las punteras de los pedales (<span class="italic">toe pedals</span>). La palanca de estacionamiento bajo el panel central se tira hacia abajo y se bombean los pedales para atrapar presión; para liberar se empuja hacia arriba.</div>
        </div>

        <div class="flex items-center justify-between shrink-0 pt-1 pb-0.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AVISO NEUMÁTICO DE PÉRDIDA</span>
        </div>

        <!-- Aviso de Pérdida -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-[11px] leading-tight text-slate-800 dark:text-slate-200">
          <div><strong>Aviso Neumático de Pérdida (<span class="italic">Stall Warning System</span>):</strong> Toma ranurada en el borde de ataque del ala izquierda marcada con un <strong>anillo rojo</strong>. La depresión por succión activa la bocina en el panel intensificándose al decrecer la velocidad.</div>
          <div><strong>Umbral de Pérdida:</strong> Bocina acústica activa por succión neumática entre <strong>10 y mín. 5 nudos</strong> por encima de la velocidad de pérdida (<strong class="text-amber-700 dark:text-amber-400">V<sub>S</sub> + 5 a 10 kt</strong>).</div>
          <div><strong>Comprobación Prevuelo Oficial:</strong> Colocar un paño limpio sobre la abertura del borde de ataque y aspirar suavemente con la boca: el sonido audible en cabina verifica el estado de la bocina y sus conductos.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema Hidráulico y Parámetros (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESQUEMA DE FRENOS Y TREN (DA40)</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-slate-700/80 shadow-2xs text-[11px] leading-tight text-slate-800 dark:text-slate-200 space-y-1">
            <div>• <strong>Rueda de Morro:</strong> Rueda loca (<span class="italic">free-castering</span>) con elastómeros; maniobra en tierra mediante frenado diferencial.</div>
            <div>• <strong>Sonda Pitot-Estática y Válvula Alternativa:</strong> Sonda única calefactada bajo el ala izquierda con orificios de presión estática integrados y filtros en la raíz alar. La válvula de estática alternativa (<span class="italic">Alternate Static Valve</span>) en cabina permite tomar presión interior si la exterior se bloquea.</div>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-landing-gear-brakes.png?v=2" alt="Esquema del Sistema de Tren de Aterrizaje y Frenos Diamond DA40 TDI" class="w-full h-full max-h-[440px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 440px; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

`,
};

export const DA40_LESSON_4 = {
  id: "da400000-0000-0000-0000-000000000040",
  course_id: DA40_COURSE_ID,
  title: "4. Procedimientos Normales y Operación Diésel",
  slug: "procedimientos-normales-da40",
  sequence_order: 4,
  lesson_order: 4,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 4.1: 4.1 Inspección Prevuelo I: Cabina Inicial -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.1 Inspección Prevuelo I: Cabina Inicial</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Comprobación General, Cabina e Interruptores Eléctricos</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(1) CABIN CHECK</span>
          </div>

          <!-- NOTA PREVUELO AFM -->
          <div class="p-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Durante la inspección visual exterior compruebe el estado general del avión y la estructura de composite (grietas, delamination, holguras y fijación correcta). Con tiempo frío, retire cualquier resto de escarcha, nieve o hielo de alas, empenaje y superficies de mando. Antes del vuelo, retire el gust lock de mandos, la funda de Pitot, el tow bar y los chocks.</div>
          </div>

          <!-- LISTA EN 2 COLUMNAS (VERBATIM AFM) -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch flex-1">
            <!-- (1) CABIN CHECK (Parte 1: a hasta i) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(1) CABIN CHECK</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">MET, NAV, Mass &amp; CG &mdash; <span class="italic font-medium">flight planning completed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Airplane documents &mdash; <span class="italic font-medium">complete and up-to-date</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">OFF, pull out key</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">check OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP &mdash; <span class="italic font-medium">check AUTOMATIC</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">f)</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency fuel valve &mdash; <span class="italic font-medium">locked, in NORMAL position</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">g)</span>
                <span class="text-slate-800 dark:text-slate-200">Front canopy &amp; rear door &mdash; <span class="italic font-medium">clean, undamaged, check locking mechanism function</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">h)</span>
                <span class="text-slate-800 dark:text-slate-200">All electrical equipment &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">i)</span>
                <span class="text-slate-800 dark:text-slate-200">Circuit breakers &mdash; <span class="italic font-medium">set in (if one has been pulled, check reason)</span></span>
              </div>
            </div>

            <!-- (1) CABIN CHECK (Parte 2: j hasta s) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(1) CABIN CHECK (Cont.)</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">j)</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">check condition, freedom of movement &amp; full travel</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">k)</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">l)</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">m)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel quantity &mdash; <span class="italic font-medium">check, use alternate mean</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">n)</span>
                <span class="text-slate-800 dark:text-slate-200">Position lights, strobe lights (ACL) &mdash; <span class="italic font-medium">check</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">o)</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">p)</span>
                <span class="text-slate-800 dark:text-slate-200">Foreign objects &mdash; <span class="italic font-medium">check</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">q)</span>
                <span class="text-slate-800 dark:text-slate-200">Controls and trim &mdash; <span class="italic font-medium">free and correct</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">r)</span>
                <span class="text-slate-800 dark:text-slate-200">Baggage &mdash; <span class="italic font-medium">stowed and secured</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">s)</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency axe (if OÄM 40-326) &mdash; <span class="italic font-medium">stowed &amp; secured</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama de Inspección Exterior Walkaround + WARNING (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RUTA DE INSPECCIÓN PREVUELO (WALKAROUND DA40)</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex flex-col items-center justify-center p-1 lesson-img-wrapper" draggable="false" style="position: relative;">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/da40/da40-walkaround.jpg" alt="Ruta de Inspección Prevuelo Walkaround Diamond DA40 TDI" class="w-full h-full max-h-[460px] object-contain rounded-lg" onerror="if(this.src!=='/images/da40/da40-walkaround.jpg')this.src='/images/da40/da40-walkaround.jpg'" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 460px; width: 100%; height: 100%; background-color: transparent; object-position: center;" />
        </div>

        <!-- WARNING AFM (Ubicado en columna derecha) -->
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight mt-1.5 shadow-2xs shrink-0">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>Al conectar el interruptor ELECTRIC MASTER, utilizar una toma externa (GPU) o manipular la hélice, trate siempre la hélice como si el ENGINE MASTER estuviera en ON. ¡Jamás mueva la hélice a mano con el ENGINE MASTER en ON ni inmediatamente tras la parada del motor debido a la presión residual acumulada en el common rail!</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.2: 4.2 Inspección Exterior I: Raíz Alar y Tren Principal Izquierdo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.2 Inspección Exterior I: Raíz Alar y Tren Principal Izquierdo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación 1: Tren Principal, Carenados y Drenaje Alar</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(1) LEFT MAIN LANDING GEAR</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(1) LEFT MAIN LANDING GEAR</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Landing gear strut &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Wheel fairing &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Tire, wheel, brake &mdash; <span class="italic font-medium">visual inspection, check tire pressure (2.5 bar / 36 psi), check brake condition &amp; fluid leaks</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Chocks &mdash; <span class="italic font-medium">remove</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel tank drain &mdash; <span class="italic font-medium">drain fuel and check for contamination (water &amp; sediment)</span></span>
            </div>
          </div>

          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Drene una muestra de combustible en un vaso transparente antes del primer vuelo del día y tras repostar para comprobar la ausencia de agua y partículas. Si detecta agua, continúe drenando hasta obtener combustible completamente limpio; si la presencia de contaminación persiste, el vuelo queda prohibido.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Conjunto de tren principal izquierdo del DA40: pata de fibra de vidrio, carenado aerodinámico de rueda, pinza de freno de disco y válvula de purga de combustible en la raíz alar.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.3: 4.3 Inspección Exterior II: Semiala Izquierda, Pitot y Mandos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.3 Inspección Exterior II: Semiala Izquierda, Pitot y Mandos</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación 2: Borde de Ataque, Sonda Pitot, Alerón y Flap</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(2) LEFT WING</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(2) LEFT WING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Entire wing surface &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Stall warning hole &mdash; <span class="italic font-medium">check unobstructed</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Pitot-static probe &mdash; <span class="italic font-medium">remove cover, check unobstructed and undamaged</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing tip, position light, strobe light (ACL) &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Aileron and hinges &mdash; <span class="italic font-medium">visual inspection, check freedom of movement and play</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
              <span class="text-slate-800 dark:text-slate-200">Aileron control rod &mdash; <span class="italic font-medium">visual inspection, check locking varnish</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
              <span class="text-slate-800 dark:text-slate-200">Flap and hinges &mdash; <span class="italic font-medium">visual inspection, check play</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
              <span class="text-slate-800 dark:text-slate-200">Flap control rod and drive &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
          </div>

          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Para comprobar el funcionamiento del avisador acústico de pérdida, coloque un paño limpio sobre la abertura del borde de ataque y aspire suavemente con la boca: el sonido audible en cabina verifica el transductor y los conductos. Retire la funda de la sonda Pitot y guárdela a bordo antes del vuelo.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Primer plano del borde de ataque de la semiala izquierda del DA40 mostrando la sonda Pitot-estática calefactada, la ranura del aviso de pérdida con anillo rojo y el alerón con su varilla de mando.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.4: 4.4 Inspección Exterior III: Fuselaje y Empenaje en T -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.4 Inspección Exterior III: Fuselaje y Empenaje en T</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estaciones 3, 4 y 5: Fuselaje, Cola en T y Mandos</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(3, 4, 5) FUSELAGE &amp; EMPENNAGE</span>
          </div>

          <!-- LISTA VERBATIM AFM EN 2 TARJETAS -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(3 &amp; 5) FUSELAGE</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Skin (left side) &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Antennas &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Canopy jettison lever &mdash; <span class="italic font-medium">check safety pin installed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Skin (right side) &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Rear passenger door &mdash; <span class="italic font-medium">visual inspection, check locking mechanism</span></span>
              </div>
            </div>

            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(4) EMPENNAGE</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">a)</span>
                <span class="text-slate-800 dark:text-slate-200">Entire empennage surface &mdash; <span class="italic font-medium">visual inspection</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">b)</span>
                <span class="text-slate-800 dark:text-slate-200">Horizontal stabilizer &amp; elevator &mdash; <span class="italic font-medium">check freedom of movement and play</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">c)</span>
                <span class="text-slate-800 dark:text-slate-200">Elevator trim tab &mdash; <span class="italic font-medium">visual inspection, check safety wiring</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">d)</span>
                <span class="text-slate-800 dark:text-slate-200">Vertical stabilizer &amp; rudder &mdash; <span class="italic font-medium">check freedom of movement &amp; cables secure</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">e)</span>
                <span class="text-slate-800 dark:text-slate-200">Tail skid &amp; tie-down &mdash; <span class="italic font-medium">check condition, tie-down removed</span></span>
              </div>
            </div>
          </div>

          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Durante la inspección visual, examine el estado de las superficies de composite descartando grietas, delamination, holguras o defectos de fijación. Compruebe que la varilla y el alambre de seguridad del tab de trim de profundidad permanezcan intactos.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Empenaje en T del DA40 mostrando el timón de profundidad, el tab de trim con varilla y alambre de seguridad, el timón de dirección y el patín de cola inferior.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.5: 4.5 Inspección Exterior IV: Semiala Derecha y Combustible -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.5 Inspección Exterior IV: Semiala Derecha y Combustible</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación 6: Flap, Alerón, Luces y Depósito de Combustible</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(6) RIGHT WING</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(6) RIGHT WING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Flap and hinges &mdash; <span class="italic font-medium">visual inspection, check play</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Flap control rod and drive &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Aileron and hinges &mdash; <span class="italic font-medium">visual inspection, check freedom of movement and play</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Aileron control rod &mdash; <span class="italic font-medium">visual inspection, check locking varnish</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing tip, position light, strobe light (ACL) &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
              <span class="text-slate-800 dark:text-slate-200">Entire wing surface &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel tank cap &amp; vent &mdash; <span class="italic font-medium">check closed and secure, vent unobstructed</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel tank drain &mdash; <span class="italic font-medium">drain fuel and check for contamination (water &amp; sediment)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">i)</span>
              <span class="text-slate-800 dark:text-slate-200">Auxiliary fuel tank (if installed) &mdash; <span class="italic font-medium">check drain, cap &amp; vent</span></span>
            </div>
          </div>

          <!-- WARNING AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Asegúrese de que el tapón del depósito de combustible quede completamente enrasado y bloqueado a ras de superficie. Si no queda herméticamente cerrado, la depresión aerodinámica sobre el ala succionará el combustible en vuelo.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Extradós de la semiala derecha del DA40 mostrando el tapón de llenado de combustible principal enrasado, el tubo de venteo y la superficie alar.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.6: 4.6 Inspección Exterior V: Tren Principal Derecho y Drenajes -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.6 Inspección Exterior V: Tren Principal Derecho y Drenajes</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación 7: Pata de Tren, Carenado, Freno y Cierre de Purga</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(7) RIGHT MAIN LANDING GEAR</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(7) RIGHT MAIN LANDING GEAR</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Landing gear strut &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Wheel fairing &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Tire, wheel, brake &mdash; <span class="italic font-medium">visual inspection, check tire pressure (2.5 bar / 36 psi), check brake condition &amp; fluid leaks</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Chocks &mdash; <span class="italic font-medium">remove</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel tank drain (right wing) &mdash; <span class="italic font-medium">check drain closed, no leaks</span></span>
            </div>
          </div>

          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Compruebe que las válvulas de purga de combustible queden totalmente cerradas y selladas tras la toma de muestras, sin ningún goteo residual. Verifique que no existan fugas de líquido hidráulico en el disco o latiguillos de freno.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Tren de aterrizaje principal derecho del DA40: pata de suspensión elástica, conjunto de freno de disco hidráulico y carenado de rueda.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.7: 4.7 Inspección Exterior VI: Morro, Aceites (Motor y Caja), Hélice y Tren -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.7 Inspección Exterior VI: Morro, Aceites (Motor y Caja), Hélice y Tren</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación 8: Capó Motor, Niveles de Aceite, Hélice MTV y Pata de Morro</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(8) FRONT FUSELAGE, ENGINE &amp; PROPELLER</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(8) FRONT FUSELAGE &amp; ENGINE (PART 1)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Right engine cowl &mdash; <span class="italic font-medium">check fasteners secure</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Oil inspection door &mdash; <span class="italic font-medium">open, check engine oil level (min 4.5 l, max 6.0 l)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Gearbox oil level &mdash; <span class="italic font-medium">check sight glass (oil must be visible)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Oil filler caps &mdash; <span class="italic font-medium">check secure, oil door close and latch</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Propeller and spinner &mdash; <span class="italic font-medium">visual inspection, check for nicks, cracks &amp; oil leaks</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
              <span class="text-slate-800 dark:text-slate-200">Air inlets &mdash; <span class="italic font-medium">cooling air, intercooler, oil cooler inlets clean &amp; unobstructed</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
              <span class="text-slate-800 dark:text-slate-200">Nose landing gear &mdash; <span class="italic font-medium">strut, elastomer pack, wheel fairing, tire pressure (2.0 bar / 29 psi)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
              <span class="text-slate-800 dark:text-slate-200">Tow bar &amp; chocks &mdash; <span class="italic font-medium">remove</span></span>
            </div>
          </div>

          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Para una medición exacta del aceite de motor, espere al menos 5 minutos tras parar el motor. El aceite de la caja reductora debe ser visible en la mirilla de cristal; si no es visible o está bajo, el vuelo está prohibido y se requiere mantenimiento técnico antes de volar.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Puerta de inspección de aceite del capó motor abierta mostrando la varilla de aceite de motor graduada, la mirilla de la caja reductora y la hélice MTV tripala.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.8: 4.8 Inspección Exterior VII: Filtro Principal (Gascolator) y Cierre -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.8 Inspección Exterior VII: Filtro Principal (Gascolator) y Cierre</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación 8 (Cont.): Escape, Purga del Gascolator y Cierre</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(8) NOSE SECTION (Cont.) &amp; GASCOLATOR</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(8) NOSE SECTION (Cont.) &amp; FINAL WALK-AROUND</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Left engine cowl &mdash; <span class="italic font-medium">check fasteners secure</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Exhaust pipe &mdash; <span class="italic font-medium">check condition, clearance and security</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Gascolator / main fuel filter &mdash; <span class="italic font-medium">drain fuel, check for water and sediment</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Cowling air outlet &mdash; <span class="italic font-medium">unobstructed</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Overall airplane condition &mdash; <span class="italic font-medium">final check around aircraft</span></span>
            </div>
          </div>

          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>La purga del gascolator es la comprobación más baja del circuito de combustible. Si se detecta agua o sedimentos, purgue repetidamente hasta obtener combustible completamente limpio. Si la contaminación persiste, no intente arrancar el motor y avise a mantenimiento.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Válvula de drenaje del gascolator en la parte inferior del capó del DA40 con el vaso de muestreo de combustible diésel/Jet-A1.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.9: 4.9 Antes del Arranque del Motor -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.9 Antes del Arranque del Motor</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Preparación de Cabina, Pasajeros, Cierres y Válvulas</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BEFORE STARTING ENGINE</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BEFORE STARTING ENGINE</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Pre-flight inspection &mdash; <span class="italic font-medium">completed</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Rudder pedals &mdash; <span class="italic font-medium">adjusted and locked</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">Passengers &mdash; <span class="italic font-medium">briefed</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Safety harnesses &mdash; <span class="italic font-medium">fastened and adjusted</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Canopy &amp; rear door &mdash; <span class="italic font-medium">closed and locked, check DOORS light OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">6)</span>
              <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">set</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">7)</span>
              <span class="text-slate-800 dark:text-slate-200">Flight controls &mdash; <span class="italic font-medium">free and correct</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">8)</span>
              <span class="text-slate-800 dark:text-slate-200">Trimming wheel &mdash; <span class="italic font-medium">set T/O</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">9)</span>
              <span class="text-slate-800 dark:text-slate-200">Emergency fuel valve &mdash; <span class="italic font-medium">check NORMAL</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">10)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel transfer pump &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
          </div>

          <!-- WARNING AFM -->
          <div class="p-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Regule y bloquee los pedales exclusivamente en tierra antes de arrancar. Jamás intente desbloquear o regular los pedales durante el rodaje o el vuelo; tirar del pomo de desbloqueo desengancha el mecanismo de retención y puede causar la pérdida total de control de timón y frenos.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CABINA Y MANDOS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Vista general de la cabina del DA40 desde el asiento de piloto mostrando la palanca de mandos, los pedales ajustables, la rueda de trim y la válvula de combustible en NORMAL.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.10: 4.10 Puesta en Marcha: Procedimiento de Arranque Diésel -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.10 Puesta en Marcha: Procedimiento de Arranque Diésel</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">FADEC, Precalentamiento GLOW, Arranque y Presión de Aceite</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE STARTING</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ENGINE STARTING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Strobe lights (ACL) &mdash; <span class="italic font-medium">ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Annunciator lightpanel &mdash; <span class="italic font-medium">test (press TEST, check all lights illuminate)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Propeller area &mdash; <span class="italic font-medium">CLEAR</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">6)</span>
              <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">ON, wait for GLOW light to extinguish</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">7)</span>
              <span class="text-slate-800 dark:text-slate-200">START key &mdash; <span class="italic font-medium">turn to START, release immediately when engine fires</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">8)</span>
              <span class="text-slate-800 dark:text-slate-200">Oil pressure &mdash; <span class="italic font-medium">check, green within 3 seconds (min 1.2 bar)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">9)</span>
              <span class="text-slate-800 dark:text-slate-200">CED 125 &amp; AED 125 &mdash; <span class="italic font-medium">monitor engine parameters</span></span>
            </div>
          </div>

          <!-- CAUTION AFM -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Si la presión de aceite no entra en arco verde en un plazo de 3 segundos tras el arranque, corte inmediatamente ENGINE MASTER en OFF. No mantenga la llave en START más de 10 segundos continuados; deje enfriar el motor de arranque 2 minutos antes de un nuevo intento.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PANEL DE ARRANQUE Y CONTROL</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Panel de conmutadores de arranque del DA40: interruptor de llave con START, interruptor basculante ENGINE MASTER, aviso GLOW y display digital CED 125 con presión de aceite.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.11: 4.11 Calentamiento del Motor y Rodaje -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.11 Calentamiento del Motor y Rodaje</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aviónica, Comprobación de Flaps y Guiado Diferencial en Tierra</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BEFORE TAXIING &amp; TAXIING</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BEFORE TAXIING &amp; TAXIING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Avionics Master &mdash; <span class="italic font-medium">ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Electrical equipment &mdash; <span class="italic font-medium">ON as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing flaps &mdash; <span class="italic font-medium">cycle T/O, LDG, back to UP (check indicator lights)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Annunciator lightpanel &mdash; <span class="italic font-medium">check extinguished (DOORS, START, ECU A/B, LOW VOLTS, ALTERNATOR)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">release</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">6)</span>
              <span class="text-slate-800 dark:text-slate-200">Brakes &mdash; <span class="italic font-medium">test immediately after starting taxi</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">7)</span>
              <span class="text-slate-800 dark:text-slate-200">Flight instruments &mdash; <span class="italic font-medium">check gyro, turn coordinator &amp; compass in turns</span></span>
            </div>
          </div>

          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>La rueda de morro es libre (free-castering) y no tiene conexión mecánica directa con los pedales; el control direccional durante el rodaje se realiza mediante toques suaves y cortos en los frenos diferenciales de las punteras en combinación con el timón de dirección.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TÉCNICA DE RODAJE Y FRENADO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Diagrama esquemático de maniobra de rodaje y giro cerrado del DA40 mostrando la rueda de morro libre (free-castering) y el frenado diferencial con pedales.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.12: 4.12 Antes del Despegue I: Cabina, Mandos y Parámetros -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.12 Antes del Despegue I: Cabina, Mandos y Parámetros</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Freno de Parking, Puertas, Compensador y Arcos Verdes</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BEFORE TAKE-OFF (PART 1)</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BEFORE TAKE-OFF (CABIN &amp; PARAMETERS)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">set</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Canopy &amp; rear door &mdash; <span class="italic font-medium">closed and locked, DOORS light OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">Flight controls &mdash; <span class="italic font-medium">free and correct</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Trimming wheel &mdash; <span class="italic font-medium">set T/O</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel quantity &mdash; <span class="italic font-medium">check sufficient for flight</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">6)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel temperature &mdash; <span class="italic font-medium">check in green range (min 20°C Jet-A1 / 0°C diésel)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">7)</span>
              <span class="text-slate-800 dark:text-slate-200">Emergency fuel valve &mdash; <span class="italic font-medium">NORMAL</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">8)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric fuel pump &mdash; <span class="italic font-medium">ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">9)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine temperatures &mdash; <span class="italic font-medium">check green (oil min 50°C, coolant min 60°C, gearbox min 40°C)</span></span>
            </div>
          </div>

          <!-- CAUTION AFM -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>No inicie la prueba de motor ni el despegue si las temperaturas de aceite, refrigerante o caja reductora no han alcanzado el arco verde en los instrumentos digitales CED/AED 125.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CONSOLA CENTRAL Y COMPENSADOR</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Consola central del DA40 mostrando la rueda negra de compensador de profundidad alineada con la marca blanca T/O, la palanca de gases y la válvula de combustible en NORMAL.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.13: 4.13 Antes del Despegue II: Autoprueba FADEC / Prueba de ECU -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.13 Antes del Despegue II: Autoprueba FADEC / Prueba de ECU</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Secuencia Automática de Prueba FADEC a 1900 RPM y Ciclado de Hélice</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ECU TEST (RUN-UP)</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ECU TEST / ENGINE RUN-UP</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Propeller area &mdash; <span class="italic font-medium">CLEAR</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <div class="text-slate-800 dark:text-slate-200">
                <span>ECU TEST button &mdash; <span class="italic font-medium">PRESS and HOLD throughout full sequence:</span></span>
                <div class="pl-4 pt-1 space-y-1">
                  <div>a) RPM increases automatically to 1900–2000 RPM</div>
                  <div>b) Propeller cycles, ECU B light illuminates (switching to ECU B)</div>
                  <div>c) Propeller cycles, ECU A light illuminates (switching to ECU A)</div>
                  <div>d) Annunciator lights extinguish, RPM drops back to idle</div>
                </div>
              </div>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">ECU TEST button &mdash; <span class="italic font-medium">RELEASE</span></span>
            </div>
          </div>

          <!-- WARNING AFM -->
          <div class="p-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Mantenga pulsado el botón ECU TEST de forma continua hasta que finalice todo el ciclo automático y las RPM vuelvan al ralentí. Si durante la secuencia el motor vibra severamente, caen las RPM de forma anormal o alguna luz de ECU permanece encendida o parpadea, el despegue queda terminantemente prohibido.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SECUENCIA DE AUTOPRUEBA FADEC</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Gráfica cronológica de la autoprueba de ECU mostrando el aumento de RPM a 1900, conmutación automática de canales A y B, ciclado de hélice y respuesta de luces avisadoras.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.14: 4.14 Antes del Despegue III: Conmutación Manual ECU Swap y Criterios Go/No-Go -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.14 Antes del Despegue III: Conmutación Manual ECU Swap y Criterios Go/No-Go</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Comprobación del Canal B, Posición AUTOMATIC y Disyuntores</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ECU SWAP &amp; SYSTEMS CHECK</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ECU SWAP &amp; CIRCUIT BREAKERS</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">ECU SWAP switch &mdash; <span class="italic font-medium">switch to ECU B (check engine continues running smoothly)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">ECU SWAP switch &mdash; <span class="italic font-medium">return to AUTOMATIC (safety guard wire closed)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">Pitot heat &mdash; <span class="italic font-medium">ON (check ammeter rise on AED 125 and PITOT light)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Pitot heat &mdash; <span class="italic font-medium">OFF (or leave ON if icing conditions/IFR)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Circuit breakers &mdash; <span class="italic font-medium">check all set in</span></span>
            </div>
          </div>

          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>El interruptor ECU SWAP permite forzar el canal secundario B en caso de fallo; durante el vuelo debe permanecer siempre bajo su guarda de seguridad roja en posición AUTOMATIC para que la FADEC autogestione las conmutaciones por software.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">INTERRUPTOR ECU SWAP Y CONSUMO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Interruptor basculante ECU SWAP protegido por guarda de seguridad roja precintada en AUTOMATIC junto a la fila de disyuntores de cabina.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.15: 4.15 Antes del Despegue IV: Calefacción Pitot, Flaps y Briefing -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.15 Antes del Despegue IV: Calefacción Pitot, Flaps y Briefing</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Configuración de Flaps T/O, Bomba Eléctrica, Transponder y Briefing</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BEFORE TAKE-OFF (FINAL)</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BEFORE TAKE-OFF (FINAL CONFIGURATION)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing flaps &mdash; <span class="italic font-medium">set T/O (white T/O light illuminated)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric fuel pump &mdash; <span class="italic font-medium">check ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">Avionics &amp; transponder &mdash; <span class="italic font-medium">set ALT, squawk code verified</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Altimeters &mdash; <span class="italic font-medium">set QNH (cross-check within limits)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Directional gyro &mdash; <span class="italic font-medium">aligned with magnetic compass</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">6)</span>
              <span class="text-slate-800 dark:text-slate-200">Take-off &amp; departure briefing &mdash; <span class="italic font-medium">completed</span></span>
            </div>
          </div>

          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>La posición reglamentaria de flaps para todo despegue en el DA40 TDI (tanto normal como en campo corto) es T/O (20°). Verifique que la luz indicadora blanca T/O esté fija antes de entrar a pista.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESQUEMA DE BRIEFING DE DESPEGUE</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Diagrama didáctico de briefing de despegue: pista en uso, velocidades de rotación (59 kt), ascenso y acciones de emergencia ante fallo de motor antes o después de la rotación.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.16: 4.16 Velocidades Operativas de Vuelo y Viento Cruzado Demostrado -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.16 Velocidades Operativas de Vuelo y Viento Cruzado Demostrado</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Velocidades Normales de Operación (1150 kg) y Límite de Viento Cruzado</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AIRSPEEDS FOR NORMAL OPERATION</span>
          </div>

          <!-- TABLA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">OPERATING AIRSPEEDS (1150 kg / 2535 lbs)</strong>
            <div lang="en" class="flex items-start justify-between py-0.5 text-xs sm:text-[13px] border-b border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-800 dark:text-slate-200">Airspeed for rotation (<span class="italic font-medium">VR</span>)</span>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300">59 KIAS</span>
            </div>
            <div lang="en" class="flex items-start justify-between py-0.5 text-xs sm:text-[13px] border-b border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-800 dark:text-slate-200">Airspeed for best angle of climb (<span class="italic font-medium">VX</span>, flaps T/O)</span>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300">66 KIAS</span>
            </div>
            <div lang="en" class="flex items-start justify-between py-0.5 text-xs sm:text-[13px] border-b border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-800 dark:text-slate-200">Airspeed for best rate of climb (<span class="italic font-medium">VY</span>, flaps UP)</span>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300">73 KIAS</span>
            </div>
            <div lang="en" class="flex items-start justify-between py-0.5 text-xs sm:text-[13px] border-b border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-800 dark:text-slate-200">Cruising climb</span>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300">73 &ndash; 80 KIAS</span>
            </div>
            <div lang="en" class="flex items-start justify-between py-0.5 text-xs sm:text-[13px] border-b border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-800 dark:text-slate-200">Maximum flap operating speed (<span class="italic font-medium">VFE T/O</span>)</span>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300">108 KIAS</span>
            </div>
            <div lang="en" class="flex items-start justify-between py-0.5 text-xs sm:text-[13px] border-b border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-800 dark:text-slate-200">Maximum flap operating speed (<span class="italic font-medium">VFE LDG</span>)</span>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300">91 KIAS</span>
            </div>
            <div lang="en" class="flex items-start justify-between py-0.5 text-xs sm:text-[13px] border-b border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-800 dark:text-slate-200">Maneuvering speed (<span class="italic font-medium">VA</span>)</span>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300">108 KIAS</span>
            </div>
            <div lang="en" class="flex items-start justify-between py-0.5 text-xs sm:text-[13px] border-b border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-800 dark:text-slate-200">Approach speed (flaps T/O)</span>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300">73 KIAS</span>
            </div>
            <div lang="en" class="flex items-start justify-between py-0.5 text-xs sm:text-[13px] border-b border-slate-100 dark:border-slate-700/50">
              <span class="text-slate-800 dark:text-slate-200">Approach speed (<span class="italic font-medium">VREF</span> flaps LDG)</span>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300">65 KIAS <span class="text-[11px] font-normal text-slate-500">(Short field: 58 KIAS)</span></span>
            </div>
            <div lang="en" class="flex items-start justify-between py-0.5 text-xs sm:text-[13px]">
              <span class="text-slate-800 dark:text-slate-200">Go-around speed (flaps T/O)</span>
              <span class="font-bold text-[#0B2E59] dark:text-sky-300">66 KIAS</span>
            </div>
          </div>

          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>La componente de viento cruzado máxima demostrada para el despegue y el aterrizaje es de 20 nudos (37 km/h). Para operaciones con viento racheado o cruzado fuerte, mantenga la configuración de flaps en T/O y sume la mitad de la racha a la velocidad de aproximación.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">COMPONENTES DE VIENTO CRUZADO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Gráfica de componentes de viento relativo y límite de viento cruzado demostrado de 20 nudos con el anemómetro del Diamond DA40 TDI.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.17: 4.17 Despegue y Ascenso -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.17 Despegue y Ascenso</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Alineación, Carrera de Despegue, Rotación y Ascenso Inicial</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TAKE-OFF &amp; CLIMB</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">TAKE-OFF &amp; CLIMB</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Runway lineup &mdash; <span class="italic font-medium">centered, nose wheel straight</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">smooth FULL FORWARD</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine parameters &mdash; <span class="italic font-medium">check CED 125 (Load &gt; 95%, 2300 RPM, temps &amp; press in green)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Elevator control &mdash; <span class="italic font-medium">neutral during ground roll</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Rotate &mdash; <span class="italic font-medium">59 KIAS, pitch for climb</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">6)</span>
              <span class="text-slate-800 dark:text-slate-200">Climb speed &mdash; <span class="italic font-medium">accelerate to 66 KIAS (VX) or 73 KIAS (VY)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">7)</span>
              <div class="text-slate-800 dark:text-slate-200">
                <span>At safe altitude (min 600 ft AGL):</span>
                <div class="pl-4 pt-0.5 space-y-0.5">
                  <div>a) Wing flaps &mdash; <span class="italic font-medium">UP (white T/O light off, green UP light on)</span></div>
                  <div>b) Electric fuel pump &mdash; <span class="italic font-medium">OFF</span></div>
                  <div>c) Climb power &mdash; <span class="italic font-medium">maintain as required</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- CAUTION AFM -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Al aplicar potencia máxima, compruebe de inmediato que la carga del motor en el CED 125 alcance al menos el 95% y las RPM se sitúen en 2300. Si la potencia es insuficiente o se enciende alguna luz de motor, corte potencia y aborte el despegue de inmediato.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PERFIL DE DESPEGUE Y ASCENSO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Perfil de despegue y ascenso del DA40 indicando rotación a 59 kt, velocidad Vy de 73 kt, aceleración y retracción de flaps por encima de 600 ft AGL.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.18: 4.18 Vuelo de Crucero y Gestión de Combustible -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.18 Vuelo de Crucero y Gestión de Combustible</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Ajustes de Potencia (60-80%), Bomba de Trasvase y Desbalance Máximo</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CRUISE &amp; FUEL MANAGEMENT</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">CRUISE &amp; FUEL MANAGEMENT</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">set 60% to 80% load</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Elevator trim &mdash; <span class="italic font-medium">adjust for level flight</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine parameters &mdash; <span class="italic font-medium">monitor CED 125 &amp; AED 125</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <div class="text-slate-800 dark:text-slate-200">
                <span>Fuel management (if auxiliary tank installed):</span>
                <div class="pl-4 pt-0.5 space-y-0.5">
                  <div>a) Main tank level &mdash; <span class="italic font-medium">monitor consumption</span></div>
                  <div>b) Fuel transfer switch &mdash; <span class="italic font-medium">ON when main tank drops below 14 US gal</span></div>
                  <div>c) Fuel transfer switch &mdash; <span class="italic font-medium">OFF when main tank replenished or auxiliary tank empty</span></div>
                  <div>d) Maximum allowable fuel unbalance &mdash; <span class="italic font-medium">10 US gal</span></div>
                </div>
              </div>
            </div>
          </div>

          <!-- CAUTION AFM -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>No mantenga la bomba de trasvase encendida continuamente. Apague el interruptor de trasvase cuando el depósito principal esté lleno o el auxiliar vacío para evitar sobrepresiones y escape de combustible por el respiradero.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">GESTIÓN DE TRASVASE DE COMBUSTIBLE</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Diagrama esquemático de transferencia de combustible en crucero: bombeo eléctrico desde el depósito auxiliar (derecho) al depósito principal (izquierdo).
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.19: 4.19 Descenso y Aterrizaje Normal -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.19 Descenso y Aterrizaje Normal</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aproximación, Configuración de Flaps (T/O y LDG), Recogida y Frenado</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DESCENT &amp; LANDING</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">DESCENT &amp; APPROACH / LANDING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Descent power &mdash; <span class="italic font-medium">reduce smoothly (avoid rapid chilling)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Safety harnesses &mdash; <span class="italic font-medium">secured</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">Emergency fuel valve &mdash; <span class="italic font-medium">NORMAL</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric fuel pump &mdash; <span class="italic font-medium">ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing flaps &mdash; <span class="italic font-medium">set T/O below 108 KIAS (approach speed 73 KIAS)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">6)</span>
              <span class="text-slate-800 dark:text-slate-200">Final approach &mdash; <span class="italic font-medium">wing flaps set LDG below 91 KIAS, maintain 65 KIAS</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">7)</span>
              <span class="text-slate-800 dark:text-slate-200">Touchdown &mdash; <span class="italic font-medium">flare smoothly, land on main wheels first, gently lower nose wheel</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">8)</span>
              <span class="text-slate-800 dark:text-slate-200">Braking &mdash; <span class="italic font-medium">aerodynamic first, apply toe brakes smoothly as required</span></span>
            </div>
          </div>

          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>En condiciones de turbulencia o viento cruzado fuerte (hasta 20 kt), mantenga flaps en T/O y aproxime a 73 KIAS sumando la mitad de la racha a la velocidad de referencia.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PERFIL DE APROXIMACIÓN Y TOMA</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Perfil de aproximación y toma del DA40: configuración de flaps T/O en base (73 kt), flaps LDG en final (65 kt), recogida (flare) y toma principal.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.20: 4.20 Maniobra de Escape: Motor y al Aire -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.20 Maniobra de Escape: Motor y al Aire</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aproximación Frustrada (Balked Landing / Go-Around)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BALKED LANDING / GO-AROUND</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BALKED LANDING (GO-AROUND)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">smooth FULL FORWARD</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing flaps &mdash; <span class="italic font-medium">set T/O immediately (retract from LDG 42° to T/O 20°)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">Pitch attitude &mdash; <span class="italic font-medium">establish climb attitude</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Climb speed &mdash; <span class="italic font-medium">66 KIAS</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Positive rate of climb &mdash; <span class="italic font-medium">confirm on VSI and altimeter</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">6)</span>
              <span class="text-slate-800 dark:text-slate-200">At safe altitude (min 600 ft AGL) &mdash; <span class="italic font-medium">wing flaps UP, electric fuel pump OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">7)</span>
              <span class="text-slate-800 dark:text-slate-200">ATC &mdash; <span class="italic font-medium">notify go-around</span></span>
            </div>
          </div>

          <!-- WARNING AFM -->
          <div class="p-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>En motor y al aire, retraiga inmediatamente los flaps de LDG (42°) a T/O (20°); jamás los retraiga directamente a UP para evitar un hundimiento brusco por pérdida repentina de sustentación cerca del suelo.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TRAYECTORIA DE APROXIMACIÓN FRUSTRADA</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Diagrama de escape y motor y al aire (Go-Around): aplicación suave de máxima potencia, flaps a posición intermedia T/O y ascenso con 66 kt.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.21: 4.21 Tras el Aterrizaje y Parada de Motor -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.21 Tras el Aterrizaje y Parada de Motor</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Desalojo de Pista, Enfriamiento de Turbo (1-2 min) y Corte</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AFTER LANDING &amp; ENGINE SHUT-DOWN</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">AFTER LANDING &amp; SHUT-DOWN</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing flaps &mdash; <span class="italic font-medium">UP</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Pitot heat &amp; landing light &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric fuel pump &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">set in parking area</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE (wait 1 to 2 minutes for turbocharger cooldown)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">6)</span>
              <span class="text-slate-800 dark:text-slate-200">ELT &mdash; <span class="italic font-medium">check 121.5 MHz (no transmission)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">7)</span>
              <span class="text-slate-800 dark:text-slate-200">Avionics Master &amp; electrical consumers &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">8)</span>
              <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">9)</span>
              <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">OFF (pull out key)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">10)</span>
              <span class="text-slate-800 dark:text-slate-200">Control lock, pitot cover &amp; chocks &mdash; <span class="italic font-medium">install</span></span>
            </div>
          </div>

          <!-- CAUTION AFM -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Es imperativo dejar el motor en ralentí entre 1 y 2 minutos antes de cortar el ENGINE MASTER para que el flujo de aceite estabilice y enfríe los cojinetes del turbocompresor. Cortar el motor caliente de golpe provoca la carbonización instantánea del aceite y la avería del turbo.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENFRIAMIENTO DE TURBOCOMPRESOR</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Esquema del turbocompresor mostrando el flujo continuo de aceite lubricante en ralentí (1 a 2 min) para evitar la coquización térmica del eje antes del corte de motor.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.22: 4.22 Procedimientos Especiales y Operación en Tiempo Frío -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.22 Procedimientos Especiales y Operación en Tiempo Frío</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Precalentamiento Diésel, Arranque con GPU y Pistas Blandas</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SPECIAL PROCEDURES &amp; COLD WEATHER</span>
          </div>

          <!-- LISTA VERBATIM AFM -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">SPECIAL &amp; COLD WEATHER OPERATIONS</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1)</span>
              <span class="text-slate-800 dark:text-slate-200">Pre-heating engine &mdash; <span class="italic font-medium">mandatory if engine oil/coolant temperature is below -5°C</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel additive / Anti-icing &mdash; <span class="italic font-medium">verify approved anti-icing additive for Jet-A1 in cold temps</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3)</span>
              <span class="text-slate-800 dark:text-slate-200">External power starting (GPU) &mdash; <span class="italic font-medium">use if battery voltage is below 11.5 V</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4)</span>
              <span class="text-slate-800 dark:text-slate-200">Wet grass / soft field take-off &mdash; <span class="italic font-medium">flaps T/O, rolling start, hold nose wheel off gently</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">5)</span>
              <span class="text-slate-800 dark:text-slate-200">Water contamination check &mdash; <span class="italic font-medium">drain all fuel sumps after refueling and before flight</span></span>
            </div>
          </div>

          <!-- WARNING AFM -->
          <div class="p-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>En temperaturas bajo cero, cualquier resto de agua en el combustible forma cristales de hielo que colmatan los microfiltros de la inyección diésel common rail, provocando la parada total del motor en vuelo. En invierno, use aditivos antihielo aprobados o asegure que el combustible esté completamente libre de agua.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">OPERACIÓN EN TIEMPO FRÍO Y GPU</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Gráfica de rangos de temperatura para combustible Jet-A1 / Diésel y conexión de fuente externa (GPU) para arranque en clima frío.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>





`,
};

export const DA40_LESSON_5 = {
  id: "da400000-0000-0000-0000-000000000050",
  course_id: DA40_COURSE_ID,
  title: "5. Procedimientos de Emergencia y Casos Anómalos",
  slug: "procedimientos-emergencia-da40",
  sequence_order: 5,
  lesson_order: 5,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 5.1: 5.1 Velocidades de Emergencia de la Célula y Mejor Planeo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.1 Velocidades de Emergencia de la Célula y Mejor Planeo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Certain Airspeeds in Emergencies & Gliding</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AIRSPEEDS IN EMERGENCIES & GLIDING</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">AIRSPEEDS IN EMERGENCIES & GLIDING</strong>
            <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs mb-1">
              <table class="w-full text-left text-xs sm:text-[13px] leading-tight">
                <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th class="p-1.5 px-2">EVENT / CONDITION</th>
                    <th class="p-1.5 px-2 text-center">850 kg</th>
                    <th class="p-1.5 px-2 text-center">1000 kg</th>
                    <th class="p-1.5 px-2 text-center font-extrabold text-[#1a80ff] dark:text-sky-400">1150 kg</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                  <tr>
                    <td class="p-1 px-2 font-medium">Engine failure after take-off (Flaps T/O)</td>
                    <td class="p-1 px-2 text-center font-mono">59 KIAS</td>
                    <td class="p-1 px-2 text-center font-mono">66 KIAS</td>
                    <td class="p-1 px-2 text-center font-mono font-bold text-red-600 dark:text-red-400">72 KIAS</td>
                  </tr>
                  <tr>
                    <td class="p-1 px-2 font-medium">Airspeed for best glide angle (Flaps UP)</td>
                    <td class="p-1 px-2 text-center font-mono">60 KIAS</td>
                    <td class="p-1 px-2 text-center font-mono">68 KIAS</td>
                    <td class="p-1 px-2 text-center font-mono font-bold text-[#1a80ff] dark:text-sky-400">73 KIAS</td>
                  </tr>
                  <tr>
                    <td class="p-1 px-2 font-medium">Emergency landing with engine off (Flaps T/O)</td>
                    <td class="p-1 px-2 text-center font-mono">59 KIAS</td>
                    <td class="p-1 px-2 text-center font-mono">66 KIAS</td>
                    <td class="p-1 px-2 text-center font-mono">72 KIAS</td>
                  </tr>
                  <tr>
                    <td class="p-1 px-2 font-medium">Emergency landing with engine off (Flaps LDG)</td>
                    <td class="p-1 px-2 text-center font-mono">58 KIAS</td>
                    <td class="p-1 px-2 text-center font-mono">63 KIAS</td>
                    <td class="p-1 px-2 text-center font-mono">71 KIAS</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pt-1 text-xs sm:text-[13px] space-y-1">
              <div class="font-bold text-[#0B2E59] dark:text-sky-300">GLIDING (MAXIMUM GLIDE RATIO):</div>
              <div lang="en" class="flex items-start gap-2 py-0.5"><span class="font-bold text-[#0B2E59] dark:text-sky-300 min-w-[20px]">1.</span><span>Flaps &mdash; <span class="italic font-medium">UP</span></span></div>
              <div lang="en" class="flex items-start gap-2 py-0.5"><span class="font-bold text-[#0B2E59] dark:text-sky-300 min-w-[20px]">2.</span><span>Airspeed &mdash; <span class="italic font-medium font-bold text-[#1a80ff] dark:text-sky-400">73 KIAS (1150 kg) / 68 KIAS (1000 kg) / 60 KIAS (850 kg)</span></span></div>
            </div>
          </div>
          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Con la hélice parada y en bandera, la razón máxima de planeo es de 1 : 8.8 (aproximadamente 1.45 NM recorridas por cada 1000 ft de altitud perdida). Con hélice en molinete (windmilling), la resistencia aumenta drásticamente y el alcance se reduce sustancialmente.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Gráfico de polar de planeo del DA40 TDI comparando alcance con hélice en bandera (1:8.8) frente a hélice en molinete.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.2: 5.2 Fallo de Motor en Tierra y Aborto de Despegue -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.2 Fallo de Motor en Tierra y Aborto de Despegue</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Engine Problems on Ground & Aborted Take-Off</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE PROBLEMS ON GROUND & ABORTED TAKE-OFF</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: ENGINE PROBLEMS ON GROUND -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ENGINE PROBLEMS ON GROUND</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Brakes &mdash; <span class="italic font-medium">apply as required</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
            </div>

            <!-- Columna 2: TAKE-OFF CAN STILL BE ABORTED -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ABORTED TAKE-OFF RUN</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Brakes &mdash; <span class="italic font-medium">apply as required</span></span>
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-0.5">If runway insufficient:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel valve &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
            </div>
          </div>
          <!-- WARNING AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Si la longitud remanente de pista es insuficiente para detener el avión de forma segura, corte inmediatamente ENGINE MASTER, Fuel valve y ELECTRIC MASTER antes de cualquier excursión de pista para minimizar el riesgo de ignición por combustible diésel a presión.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Esquema de decisión de aborto de despegue con distancias de aceleración-parada y puntos de corte de motor y combustible.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.3: 5.3 Fallo de Motor Tras el Despegue (EFATO) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.3 Fallo de Motor Tras el Despegue (EFATO)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Take-Off Can No Longer Be Aborted</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE FAILURE AFTER TAKE-OFF</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">TAKE-OFF CAN NO LONGER BE ABORTED</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">72 KIAS (1150 kg, 2535 lb) / 66 KIAS (1000 kg, 2205 lb)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Direction &mdash; <span class="italic font-medium">straight ahead, avoid sharp turns</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">as required</span></span>
              </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1">Before landing:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel valve &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
          </div>
          <!-- WARNING AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Mantenga el control de la senda de planeo en línea recta frente al avión. NO intente regresar a la pista con un viraje cerrado de 180° a baja cota; el aumento del factor de carga y la velocidad de pérdida con motor inoperativo provocan la pérdida de control catastrófica.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Cono de aterrizaje de emergencia recto (+/- 30°) frente a la pista con selección de flaps y puntos de corte.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.4: 5.4 Fallo de Motor en Vuelo (Engine Failure in Flight) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.4 Fallo de Motor en Vuelo (Engine Failure in Flight)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Engine Problems in Flight - Rough Running & Power Loss</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE PROBLEMS IN FLIGHT</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ENGINE PROBLEMS IN FLIGHT</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">73 KIAS (1150 kg, 2535 lb) / 68 KIAS (1000 kg, 2205 lb)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">UP</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel valve &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel transfer pump &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing area &mdash; <span class="italic font-medium">select emergency landing field</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP switch &mdash; <span class="italic font-medium">ECU B (switch back to AUTO if no improvement)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU reset (if problem persists) &mdash; <span class="italic font-medium">ENGINE MASTER: OFF - ON</span></span>
              </div>
          </div>
          <!-- WARNING AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Si el problema no se resuelve de inmediato y el motor no genera potencia suficiente para mantener vuelo nivelado, ejecute de inmediato la preparación de aterrizaje de emergencia. El ciclo de reset (ENGINE MASTER OFF-ON) solo debe intentarse con altitud segura remanente.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Diagrama de cabina mostrando selector de combustible, bomba de trasvase y conmutador ECU SWAP con palanca de potencia.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.5: 5.5 Reencendido de Motor con Hélice en Molinete -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.5 Reencendido de Motor con Hélice en Molinete</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Restarting the Engine with Windmilling Propeller</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RESTARTING WITH WINDMILLING PROPELLER</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">RESTARTING WITH WINDMILLING PROPELLER</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">73 to 110 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel valve &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel transfer pump &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency windows &mdash; <span class="italic font-medium">CLOSE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">ON</span></span>
              </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-0.5">If the engine does not restart:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP switch &mdash; <span class="italic font-medium">ECU B</span></span>
              </div>
          </div>
          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Mientras se mantenga una velocidad aérea de al menos 60 KIAS y la hélice esté girando en molinete, el motor arrancará automáticamente al colocar ENGINE MASTER en posición ON sin necesidad de accionar la llave de arranque (starter).</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Curva envolvente de reencendido en molinete (velocidad 73-110 KIAS y techo hasta 6000 ft).
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.6: 5.6 Reencendido de Motor con Hélice Parada (Starter) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.6 Reencendido de Motor con Hélice Parada (Starter)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Restarting the Engine with Stationary Propeller</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RESTARTING WITH STATIONARY PROPELLER</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">RESTARTING WITH STATIONARY PROPELLER</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">73 KIAS (1150 kg) / 68 KIAS (1000 kg)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Electrical consumers &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel valve &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel transfer pump &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER (Key) &mdash; <span class="italic font-medium">START (release when engine is running)</span></span>
              </div>
          </div>
          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>La hélice de un motor TAE 125 parado se sitúa en bandera por acción de los muelles mecánicos y contrapesos. Al accionar el starter para reencendido, no mantenga la llave en START más de 10 segundos continuados para preservar la carga de la batería y evitar sobrecalentamiento.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Diagrama de hélice en bandera y accionamiento de llave de contacto en START con desconexión previa de consumidores.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.7: 5.7 Malfunción del Regulador de RPM y Sobrevelocidad -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.7 Malfunción del Regulador de RPM y Sobrevelocidad</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Defective RPM Regulating System & Propeller Overspeed</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DEFECTIVE RPM REGULATING SYSTEM</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: OSCILLATING RPM -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">OSCILLATING RPM</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">change position slightly</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP switch &mdash; <span class="italic font-medium">ECU B (check RPM stability)</span></span>
              </div>
            </div>

            <!-- Columna 2: PROPELLER OVERSPEED -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">PROPELLER OVERSPEED (> 2500 RPM)</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">reduce as necessary</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">reduce to keep RPM <= 2500</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP switch &mdash; <span class="italic font-medium">ECU B</span></span>
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-0.5">If RPM persists > 2500:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">reduce below 2400 RPM</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">land on next suitable airfield</span></span>
              </div>
            </div>
          </div>
          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Tras una avería del regulador de paso o gobernador, las RPM deben mantenerse en todo momento dentro del rango admisible (máximo 2500 RPM) ajustando la palanca de potencia y reduciendo la velocidad aerodinámica. El rendimiento en ascenso puede verse seriamente degradado.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Indicador CED 125 con tacómetro destacando la línea roja de 2500 RPM y conmutador ECU SWAP.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.8: 5.8 Humo y Fuego en Tierra y Durante el Despegue -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.8 Humo y Fuego en Tierra y Durante el Despegue</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Smoke and Fire on Ground & During Take-Off</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SMOKE AND FIRE ON GROUND / TAKE-OFF</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: ON GROUND -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">FIRE ON GROUND</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Cabin heat &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel valve &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Canopy / Doors &mdash; <span class="italic font-medium">unlatch and evacuate</span></span>
              </div>
            </div>

            <!-- Columna 2: DURING TAKE-OFF -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">FIRE DURING TAKE-OFF (ABORTED)</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Brakes &mdash; <span class="italic font-medium">apply strongly</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER / Fuel valve &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
            </div>
          </div>
          <!-- WARNING AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>En caso de fuego en tierra o al abortar despegue, detenga el avión por completo, cierre la calefacción para evitar la entrada de gases tóxicos a cabina, desconecte toda la alimentación eléctrica y de combustible, y evacúe inmediatamente a todos los ocupantes.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Esquema de palancas de corte de combustible, llave eléctrica y apertura de cerrojos de cabina para evacuación.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.9: 5.9 Incendio de Motor en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.9 Incendio de Motor en Vuelo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Engine Fire in Flight</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE FIRE IN FLIGHT</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ENGINE FIRE IN FLIGHT</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Cabin heat &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency windows &mdash; <span class="italic font-medium">OPEN</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">MAX</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">73 KIAS (1150 kg) / 68 KIAS (1000 kg)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel valve &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">prepare for emergency landing</span></span>
              </div>
          </div>
          <!-- WARNING AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>En caso de humo o fuego en vuelo, prepárese para aterrizar el avión inmediatamente en un aeródromo o terreno apto. Cierre la calefacción de cabina sin demora para evitar intoxicación por humos y abra las ventanillas de emergencia para ventilación.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Vista del mamparo cortafuegos, tirador Cabin Heat OFF y válvula de corte Fuel Valve OFF.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.10: 5.10 Humo e Incendio Eléctrico en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.10 Humo e Incendio Eléctrico en Vuelo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Electrical Fire with Smoke in Flight</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ELECTRICAL FIRE IN FLIGHT</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ELECTRICAL FIRE IN FLIGHT</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">EMERGENCY switch &mdash; <span class="italic font-medium">ON (if installed)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">AVIONIC MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Cabin heat &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency windows &mdash; <span class="italic font-medium">OPEN</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">land on next suitable airfield</span></span>
              </div>
          </div>
          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>El interruptor EMERGENCY switch alimenta de forma independiente el horizonte artificial de actitud (attitude gyro) y la luz de inundación durante 1 hora y 30 minutos a través de su propia batería seca, permitiendo cortar por completo el ELECTRIC MASTER.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Panel de instrumentos con switch EMERGENCY en ON bajo guarda roja e interruptor ELECTRIC MASTER en OFF.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.11: 5.11 Aterrizaje de Emergencia con Motor Parado -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.11 Aterrizaje de Emergencia con Motor Parado</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Emergency Landing with Engine Off</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">EMERGENCY LANDING WITH ENGINE OFF</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: GLIDE & PREPARATION -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">GLIDE & PREPARATION</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing area &mdash; <span class="italic font-medium">select field (upward slope if available)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Safety harnesses &mdash; <span class="italic font-medium">tighten</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">73 KIAS (Flaps UP)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Radio / Transponder &mdash; <span class="italic font-medium">MAYDAY call / 7700</span></span>
              </div>
            </div>

            <!-- Columna 2: FINAL & TOUCHDOWN -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">FINAL & TOUCHDOWN</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">T/O or LDG</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Approach speed &mdash; <span class="italic font-medium">72 KIAS (T/O) / 71 KIAS (LDG)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE / Fuel / Elec &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">Canopy & Doors &mdash; <span class="italic font-medium">unlatch prior to touchdown</span></span>
              </div>
            </div>
          </div>
          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Si no se dispone de una superficie plana, debe elegirse una pendiente ascendente. Desbloquear los seguros de la cúpula y de la puerta trasera antes de la toma de contacto evita que queden encajadas por deformación estructural del fuselaje en el impacto.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Circuito de aproximación forzosa con puntos clave (high key, low key) y configuración de cabina.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.12: 5.12 Aterrizaje con Neumático Desinflado o Frenos Fallidos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.12 Aterrizaje con Neumático Desinflado o Frenos Fallidos</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Defective Tire on MLG & Defective Brakes</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DEFECTIVE TIRE / BRAKES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: DEFECTIVE TIRE -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">DEFECTIVE TIRE ON MLG</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">LDG</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Touchdown &mdash; <span class="italic font-medium">on runway side opposite defective tire</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Touchdown technique &mdash; <span class="italic font-medium">land on non-defective wheel first</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Directional control &mdash; <span class="italic font-medium">maintain with rudder and ailerons</span></span>
              </div>
            </div>

            <!-- Columna 2: DEFECTIVE BRAKES -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">DEFECTIVE BRAKES</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Runway choice &mdash; <span class="italic font-medium">grass recommended for resistance</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">LDG</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Touchdown &mdash; <span class="italic font-medium">land as short as possible</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Aerodynamic braking &mdash; <span class="italic font-medium">hold stick fully back</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">OFF before rollout ends</span></span>
              </div>
            </div>
          </div>
          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Un neumático desinflado produce una fuerte guiñada al posarse sobre el terreno. Mantenga el plano del ala levantado mediante alerones el mayor tiempo posible y use control direccional de pedal vigoroso antes de que caiga la rueda afectada.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Diagrama de técnica de toma sobre una rueda con alerón al viento y frenado aerodinámico con palanca atrás.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.13: 5.13 Recuperación de Barrena Inadvertida (Unintentional Spin) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.13 Recuperación de Barrena Inadvertida (Unintentional Spin)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Recovery from an Unintentional Spin</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RECOVERY FROM AN UNINTENTIONAL SPIN</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">RECOVERY FROM AN UNINTENTIONAL SPIN</strong>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pb-0.5">Carry out immediately and simultaneously:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder &mdash; <span class="italic font-medium">fully opposite to direction of spin</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Control stick &mdash; <span class="italic font-medium">move forward promptly (full forward if needed)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">UP</span></span>
              </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1">When rotation stops:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Rudder &mdash; <span class="italic font-medium">NEUTRAL</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Control stick &mdash; <span class="italic font-medium">pull back carefully, recover smoothly</span></span>
              </div>
          </div>
          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Los pasos 1 a 4 deben realizarse de forma inmediata y coordinada. La pérdida de altitud durante la barrena y recuperación oscila entre 400 y 500 ft (120 a 150 m). Las barrenas intencionadas están estrictamente prohibidas en el DA40 TDI.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Diagrama secuencial de mandos para recuperación de barrena (Potencia IDLE, Pedal contrario, Palanca picar).
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.14: 5.14 Vuelo Inadvertido en Condiciones de Engelamiento -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.14 Vuelo Inadvertido en Condiciones de Engelamiento</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Icing - Unintentional Flight into Icing Conditions</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ICING PROCEDURES</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ICING PROCEDURES</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">PITOT HEAT &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Cabin heat / Defroster &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Icing zone &mdash; <span class="italic font-medium">leave immediately (change altitude / 180° turn)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">increase power to avoid airspeed loss</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">RPM &mdash; <span class="italic font-medium">check for ice accumulation on propeller</span></span>
              </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-1">Approach and landing:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Approach speed &mdash; <span class="italic font-medium">increase by 2 to 5 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">T/O or UP (avoid LDG if heavily iced)</span></span>
              </div>
          </div>
          <!-- WARNING AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>La acumulación de hielo en el borde de ataque alar y empenaje en T eleva drásticamente la velocidad de pérdida. Incremente la velocidad de aproximación y evite virajes con alta inclinación alar.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Esquema de calefacción pitot-estática, defroster de parabrisas y zonas críticas de formación de hielo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.15: 5.15 Fallo Eléctrico Total y Switch EMERGENCY -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.15 Fallo Eléctrico Total y Switch EMERGENCY</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Complete Failure of the Electrical System</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">COMPLETE ELECTRICAL FAILURE</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">COMPLETE ELECTRICAL FAILURE</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Circuit breakers &mdash; <span class="italic font-medium">check if all OK (pressed in)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">EMERGENCY switch &mdash; <span class="italic font-medium">ON (if installed)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Flight instruments &mdash; <span class="italic font-medium">attitude gyro & flood light operational</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Engine instruments &mdash; <span class="italic font-medium">CED 125 & AED 125 inoperative</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps & Pitot heat &mdash; <span class="italic font-medium">inoperative (flaps remain in current position)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">land on next suitable airfield</span></span>
              </div>
          </div>
          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Incluso en un fallo eléctrico total del avión, el motor diésel continúa funcionando alimentado por su alternador y la batería de respaldo de la ECU. Planifique el aterrizaje inmediato guiándose por los instrumentos analógicos de reserva.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Arquitectura eléctrica en emergencia: switch EMERGENCY activado alimentando horizonte de actitud y luz.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.16: 5.16 Monóxido de Carbono (CO) y Aviso DOOR en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.16 Monóxido de Carbono (CO) y Aviso DOOR en Vuelo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Carbon Monoxide Contamination & 'DOOR' Warning Light On</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CO CONTAMINATION & DOOR WARNING</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: CO CONTAMINATION -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">CARBON MONOXIDE (CO)</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Cabin heat &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency windows &mdash; <span class="italic font-medium">OPEN</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Air vents &mdash; <span class="italic font-medium">OPEN</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">land on next suitable airfield</span></span>
              </div>
            </div>

            <!-- Columna 2: DOOR WARNING -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">'DOOR'-WARNING LIGHT ON</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">reduce immediately (<= 140 KIAS)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Canopy / Doors &mdash; <span class="italic font-medium">check visually if closed</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Action &mdash; <span class="italic font-medium">DO NOT attempt to lock in flight</span></span>
              </div>
            </div>
          </div>
          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Si la luz de aviso DOOR se enciende en vuelo, reduzca la velocidad inmediatamente. No intente bloquear o asegurar la puerta trasera de pasajeros en vuelo; mantenga control del avión y aterrice en el aeródromo más próximo.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Detector de CO en panel de instrumentos y microinterruptores de aviso 'DOOR' en el marco de cabina.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.17: 5.17 Aterrizaje de Precaución con Motor Operativo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.17 Aterrizaje de Precaución con Motor Operativo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Precautionary Landing with Engine Power Available</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PRECAUTIONARY LANDING</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: INSPECTION & APPROACH -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">INSPECTION & APPROACH</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing area &mdash; <span class="italic font-medium">select appropriate area</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Wind &mdash; <span class="italic font-medium">consider wind speed and direction</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Approach / Low pass &mdash; <span class="italic font-medium">overfly to recognize obstacles</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">73 KIAS (1150 kg) / 68 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">ATC &mdash; <span class="italic font-medium">advise position and intentions</span></span>
              </div>
            </div>

            <!-- Columna 2: FINAL & TOUCHDOWN -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">FINAL & TOUCHDOWN</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">LDG</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Approach speed &mdash; <span class="italic font-medium">67 KIAS (1092 kg) / 71 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
                <span class="text-slate-800 dark:text-slate-200">Touchdown &mdash; <span class="italic font-medium">softest possible on main gear</span></span>
              </div>
            </div>
          </div>
          <!-- NOTE AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Un aterrizaje de precaución se realiza cuando existe sospecha fundada de escasez de combustible, empeoramiento meteorológico o caída de la noche. El piloto debe decidir si un aterrizaje controlado en campo entraña menor riesgo que intentar alcanzar el aeródromo de destino a toda costa.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Circuito de reconocimiento a baja cota para inspección de obstáculos y viraje final con Flaps LDG.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.18: 5.18 Luces de Aviso FADEC: ECU A y ECU B en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.18 Luces de Aviso FADEC: ECU A y ECU B en Vuelo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">ECU A & ECU B Failure (Annunciator Panel)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ECU FAILURES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: GROUND -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">CAUTION ON GROUND</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Flight preparation &mdash; <span class="italic font-medium">TERMINATE</span></span>
              </div>
            </div>

            <!-- Columna 2: IN FLIGHT -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">CAUTION IN FLIGHT</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU TEST button &mdash; <span class="italic font-medium">press and hold > 2 seconds</span></span>
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-0.5">If caution clears:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Status &mdash; <span class="italic font-medium">fault reset, continue flight</span></span>
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-0.5">If caution persists:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Engine parameters &mdash; <span class="italic font-medium">monitor closely</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">land on next suitable airfield</span></span>
              </div>
            </div>
          </div>
          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Si una luz de ECU A o ECU B permanece encendida de forma continua en vuelo pero el motor funciona normalmente, significa que un canal ha detectado un fallo en algún sensor o circuito pero el sistema sigue controlando el motor. Aterrice en el aeródromo más próximo.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Panel anunciador con avisos ECU A / ECU B iluminados y pulsador ECU TEST resaltado.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.19: 5.19 Conmutación Manual de ECU (ECU SWAP en Vuelo) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.19 Conmutación Manual de ECU (ECU SWAP en Vuelo)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Manual ECU Selection in Flight</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">MANUAL ECU SELECTION</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">MANUAL ECU SELECTION</strong>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pb-0.5">Only if engine malfunction / power loss on active ECU:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Guard on ECU SWAP switch &mdash; <span class="italic font-medium">open guard</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP switch &mdash; <span class="italic font-medium">select ECU B</span></span>
              </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-0.5">If engine power improves / stabilizes:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP switch &mdash; <span class="italic font-medium">remain in ECU B position</span></span>
              </div>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-0.5">If engine power does NOT improve:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">ECU SWAP switch &mdash; <span class="italic font-medium">switch back to AUTOMATIC</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">land on next suitable airfield</span></span>
              </div>
          </div>
          <!-- WARNING AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>En funcionamiento normal, el conmutador ECU SWAP debe permanecer en AUTOMATIC bajo su guarda roja. Solo debe conmutarse manualmente a ECU B si se experimenta pérdida manifiesta de potencia o vibraciones severas en el canal activo.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Detalle del conmutador ECU SWAP con guarda de seguridad roja en posiciones AUTOMATIC y ECU B.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.20: 5.20 Fallo de Alternador y Aviso LOW VOLTS -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.20 Fallo de Alternador y Aviso LOW VOLTS</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Alternator Failure & Low Voltage Caution</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ELECTRICAL SYSTEM ANOMALIES</span>
          </div>

          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ELECTRICAL SYSTEM ANOMALIES</strong>
            <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pb-0.5">ALTERNATOR or LOW VOLTS caution illuminated:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Alternator circuit breaker &mdash; <span class="italic font-medium">check / reset once if tripped</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Electrical load &mdash; <span class="italic font-medium">reduce unnecessary consumers</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Pitot heat &mdash; <span class="italic font-medium">OFF (unless required in IMC/icing)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Avionics / Lighting &mdash; <span class="italic font-medium">turn off non-essential systems</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Battery endurance &mdash; <span class="italic font-medium">approx 30 minutes remaining</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">land on next suitable airfield</span></span>
              </div>
          </div>
          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Al fallar el alternador, la batería principal es la última fuente de energía remanente para los sistemas del avión y la ECU. La autonomía eléctrica se estima en aproximadamente 30 minutos antes de que actúe la batería de respaldo de la ECU B.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Voltímetro en AED 125, aviso ALTERNATOR en anunciador y diagrama de desconexión de cargas.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.21: 5.21 Anomalías de Temperatura: Refrigerante y Aceite -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.21 Anomalías de Temperatura: Refrigerante y Aceite</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Coolant Temperature (CT) & Oil Temperature (OT)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">THERMAL ANOMALIES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: COOLANT TEMPERATURE HIGH -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">COOLANT TEMP HIGH (> 105°C)</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">WATER LEVEL light &mdash; <span class="italic font-medium">check annunciator</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">reduce to minimum necessary</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">increase to improve airflow</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Cabin heat &mdash; <span class="italic font-medium">ON (helps dissipate heat)</span></span>
              </div>
            </div>

            <!-- Columna 2: OIL TEMPERATURE HIGH -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">OIL TEMP HIGH (> 140°C)</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Oil pressure (OP) &mdash; <span class="italic font-medium">check if normal</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">reduce power</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">increase airspeed</span></span>
              </div>
            </div>
          </div>
          <!-- WARNING AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Si la luz de aviso WATER LEVEL está encendida o la temperatura del refrigerante continúa en ascenso por encima de 105°C, es inminente la pérdida total de refrigeración y la parada de motor. Prepárese para un aterrizaje de emergencia inmediato.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Indicadores de temperatura CT y OT en panel de instrumentos y aviso WATER LEVEL iluminado.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.22: 5.22 Anomalías de Presión de Aceite y Reductora -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.22 Anomalías de Presión de Aceite y Reductora</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Oil Pressure (OP) & Gearbox Temperature (GT)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">OIL PRESSURE & GEARBOX ANOMALIES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: LOW OIL PRESSURE -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">LOW OIL PRESSURE (< 1.0 bar)</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Oil temperature (OT) &mdash; <span class="italic font-medium">check</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">reduce to minimum</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">land immediately (failure imminent)</span></span>
              </div>
            </div>

            <!-- Columna 2: HIGH GEARBOX TEMPERATURE -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">HIGH GEARBOX TEMP (> 120°C)</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">reduce power</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing &mdash; <span class="italic font-medium">land on next suitable airfield</span></span>
              </div>
            </div>
          </div>
          <!-- WARNING AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Una presión de aceite por debajo de 1.0 bar compromete el engrase del motor y el sistema hidráulico de paso de la hélice, lo que conduce al abanderamiento involuntario y parada de motor. Aterrice de inmediato.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Manómetro de presión de aceite OP en CED 125 e indicador de temperatura de reductora GT.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.23: 5.23 Combustible y Malfunción del Sistema de Flaps -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.23 Combustible y Malfunción del Sistema de Flaps</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Low Fuel & Flap Operating System Failure</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUEL & FLAP SYSTEM ANOMALIES</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna 1: LOW FUEL & TRANSFER -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">LOW FUEL & TRANSFER PUMP</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel transfer pump &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel quantity &mdash; <span class="italic font-medium">check main & aux</span></span>
              </div>
              <div class="text-[11px] text-slate-500 dark:text-slate-400 italic pt-0.5">If pump fails to transfer:</div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency valve &mdash; <span class="italic font-medium">EMERG. TRANSFER</span></span>
              </div>
            </div>

            <!-- Columna 2: FLAP SYSTEM FAILURE -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">FLAP FAILURE (FLAPS UP)</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Approach speed &mdash; <span class="italic font-medium">73 KIAS (1150 kg) / 68 KIAS (1000 kg)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Landing run &mdash; <span class="italic font-medium">increased by approx. 35%</span></span>
              </div>
            </div>
          </div>
          <!-- CAUTION AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>CAUTION:</span>
            </strong>
            <div>Un aterrizaje con flaps inoperativos en posición UP requiere una aproximación a 73 KIAS y aumenta la distancia de rodaje en tierra aproximadamente un 35%. Asegúrese de que la longitud de pista disponible sea suficiente.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Selector de combustible en posición EMERG. TRANSFER y posiciones mecánicas de flaps en el ala.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
};


// ============================================================================
// LECCIÓN 6: DESPACHO OPERATIVO: DOCUMENTACIÓN PREVUELO, M&B, COMBUSTIBLE Y PERFORMANCE (16 DIAPOSITIVAS)
// ============================================================================
export const DA40_LESSON_6 = {
  id: "da400000-0000-0000-0000-000000000060",
  course_id: DA40_COURSE_ID,
  title: "6. Despacho Operativo: Documentación Prevuelo, Masa y Centrado, Combustible y Performance",
  slug: "despacho-operativo-da40-prevuelo",
  description: "Dominio integral del despacho operacional en la aeronave Diamond DA40 TDI (Thielert TAE 125-01 / CD-135). Incluye cumplimentación paso a paso de la documentación oficial F.OPS.02, cálculo de Masa y Centrado con hoja de carga según AFM Capítulo 6 (BEW 735 kg, brazos 2,30 m / 3,25 m / 2,63 m / 3,65 m) y envolvente de CG (MTOM y MLM 1150 kg), régimen de crucero y consumo horario al 60% (15,1 L/h) y 70% (18,5 L/h), política de combustible EASA Part-NCO.OP.125 y Manual OM Blue Team (1h 30m de reserva obligatoria), y cálculo de performance de despegue y aterrizaje según AFM Capítulo 5 con factores de corrección de viento, pendiente y superficie de hierba.",
  sequence_order: 6,
  lesson_order: 6,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 6.1: 6.1 Despacho Operativo y Documentación Prevuelo F.OPS.02 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · DESPACHO OPERATIVO</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.1 Despacho Operativo y Documentación Prevuelo F.OPS.02</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimiento Operacional Oficial</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
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
            <div>Garantizar que la carga esté distribuida de modo que el centro de gravedad (CG) permanezca dentro de la envolvente certificada tanto al despegue (TOW) como al aterrizaje (LW).</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Part-NCO.OP.125 & Manual OM Blue Team (Combustible):</strong>
            <div>Embarcar combustible para la ruta más la reserva. Por Manual de Operaciones de Blue Team debemos disponer de <strong>al menos 1h 30min de reserva final</strong> (<strong>22,7 L / 6,0 US gal</strong> al 60% de potencia), más el combustible necesario para proceder al aeródromo alternativo (<strong>5,1 L / 1,35 US gal</strong>).</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Part-NCO.POL.105 (Performance de Pista):</strong>
            <div>Verificar que las distancias calculadas con correcciones de viento, temperatura y superficie no superen la TORA y LDA disponibles.</div>
          </div>
        </div>

        <div class="p-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-sky-800 dark:text-sky-300 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>ℹ️</span> NOTA OPERACIONAL
          </strong>
          <span>El F.OPS.02 debe ser firmado por el alumno y el instructor antes de retirar las llaves de la aeronave de operaciones.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
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
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · CARGA Y CENTRADO</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.2 Teoría de Carga y Centrado: Datum, Brazos y Momentos</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Física del Vuelo y Estabilidad</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PRINCIPIOS FÍSICOS DE EQUILIBRIO</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PLANO DE REFERENCIA (DATUM)</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            En el DA40 TDI, el <strong>Datum Plane (DP)</strong> es un plano vertical imaginario situado a <strong>2,194 metros (86,38 in)</strong> por delante del punto más adelantado de la costilla de raíz del ala corta (<em>stub wing root rib</em>). La aeronave se nivela longitudinalmente mediante una cuña de relación 600:31 colocada sobre la parte superior del fuselaje trasero.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px]">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Asientos Delanteros:</strong>
            <div class="text-slate-700 dark:text-slate-300">Piloto y copiloto / instructor.</div>
            <div class="font-mono font-bold text-sky-600 dark:text-sky-400">Brazo: 2,30 m (90,6 in)</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Asientos Traseros:</strong>
            <div class="text-slate-700 dark:text-slate-300">Pasajeros traseros.</div>
            <div class="font-mono font-bold text-sky-600 dark:text-sky-400">Brazo: 3,25 m (128,0 in)</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Depósitos Alares:</strong>
            <div class="text-slate-700 dark:text-slate-300">Combustible utilizable en alas.</div>
            <div class="font-mono font-bold text-sky-600 dark:text-sky-400">Brazo: 2,63 m (103,5 in)</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Compartimento Equipaje:</strong>
            <div class="text-slate-700 dark:text-slate-300">Bandeja estándar (máx. 30 kg).</div>
            <div class="font-mono font-bold text-sky-600 dark:text-sky-400">Brazo: 3,65 m (143,7 in)</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <div class="flex items-center justify-between text-xs">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase">Cálculo del Momento:</span>
            <code class="text-sky-600 dark:text-sky-400 font-mono font-bold">Momento [kg·m] = Masa [kg] × Brazo [m]</code>
          </div>
          <div class="flex items-center justify-between text-xs border-t border-slate-100 dark:border-slate-700 pt-1">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase">Centro de Gravedad (CG):</span>
            <code class="text-sky-600 dark:text-sky-400 font-mono font-bold">CG [m] = Σ Momentos / Σ Masas</code>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-amber-800 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>⚠️</span> DENSIDAD DEL COMBUSTIBLE JET A-1 / DIÉSEL
          </strong>
          <span>El JET A-1 y el diésel automoción tienen una densidad oficial de <strong>0,84 kg/L (7,01 lb/US gal)</strong>. Para el cálculo de masa, cada 100 litros de combustible equivalen a <strong>84,0 kg</strong> de peso (frente a 71,5 kg del AVGAS 100LL).</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESTACIONES Y BRAZOS DE PALANCA</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-moment-arms.png"
            alt="Brazos de palanca oficiales del Diamond DA40 TDI"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.3: 6.3 Estructura del Loadsheet Oficial DA40 (F.OPS.04) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · LOAD SHEET F.OPS.04</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.3 Estructura del Loadsheet Oficial DA40 (F.OPS.04)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Registro de Carga y Hoja Oficial</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESTRUCTURA DEL LOADSHEET OFICIAL AFM</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs sm:text-[13px]">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">TABLA DE CÁLCULO DE MASA Y CENTRADO</strong>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="border-b border-slate-200 dark:border-slate-700 text-[#0B2E59] dark:text-sky-300">
                  <th class="py-1 pr-2 font-bold">Elemento de Carga</th>
                  <th class="py-1 px-2 font-bold text-center">Brazo</th>
                  <th class="py-1 px-2 font-bold text-right">Masa [kg]</th>
                  <th class="py-1 pl-2 font-bold text-right">Momento [kg·m]</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                <tr><td class="py-1 pr-2 font-semibold">1. Masa en Vacío (BEW)</td><td class="py-1 px-2 text-center font-mono">Según informe</td><td class="py-1 px-2 text-right">735,0</td><td class="py-1 pl-2 text-right">1820,00</td></tr>
                <tr><td class="py-1 pr-2">2. Asientos Delanteros</td><td class="py-1 px-2 text-center font-mono">2,30 m</td><td class="py-1 px-2 text-right">Piloto + Cop</td><td class="py-1 pl-2 text-right">Masa × 2,30</td></tr>
                <tr><td class="py-1 pr-2">3. Asientos Traseros</td><td class="py-1 px-2 text-center font-mono">3,25 m</td><td class="py-1 px-2 text-right">Pasajeros</td><td class="py-1 pl-2 text-right">Masa × 3,25</td></tr>
                <tr><td class="py-1 pr-2">4. Equipaje (máx. 30 kg)</td><td class="py-1 px-2 text-center font-mono">3,65 m</td><td class="py-1 px-2 text-right">Carga maletero</td><td class="py-1 pl-2 text-right">Masa × 3,65</td></tr>
                <tr class="bg-slate-50 dark:bg-slate-800 font-semibold"><td class="py-1 pr-2 text-[#0B2E59] dark:text-sky-300">5. Zero Fuel Mass (ZFM)</td><td class="py-1 px-2 text-center">&mdash;</td><td class="py-1 px-2 text-right text-sky-600 dark:text-sky-400">Σ 1..4</td><td class="py-1 pl-2 text-right text-sky-600 dark:text-sky-400">Σ 1..4</td></tr>
                <tr><td class="py-1 pr-2">6. Combustible Despegue</td><td class="py-1 px-2 text-center font-mono">2,63 m</td><td class="py-1 px-2 text-right">Litros × 0,84</td><td class="py-1 pl-2 text-right">Masa × 2,63</td></tr>
                <tr class="bg-sky-50/70 dark:bg-sky-950/40 font-bold"><td class="py-1 pr-2 text-[#0B2E59] dark:text-sky-300">7. Take-Off Mass (TOM)</td><td class="py-1 px-2 text-center">&mdash;</td><td class="py-1 px-2 text-right text-emerald-600 dark:text-emerald-400">ZFM + Comb</td><td class="py-1 pl-2 text-right text-emerald-600 dark:text-emerald-400">ZFM + Comb</td></tr>
                <tr><td class="py-1 pr-2 text-rose-600 dark:text-rose-400">8. Consumo de Ruta (Trip)</td><td class="py-1 px-2 text-center font-mono">2,63 m</td><td class="py-1 px-2 text-right text-rose-600 dark:text-rose-400">&minus; Trip Fuel</td><td class="py-1 pl-2 text-right text-rose-600 dark:text-rose-400">&minus; (Masa × 2,63)</td></tr>
                <tr class="bg-slate-100 dark:bg-slate-800 font-bold"><td class="py-1 pr-2 text-[#0B2E59] dark:text-sky-300">9. Landing Mass (LM)</td><td class="py-1 px-2 text-center">&mdash;</td><td class="py-1 px-2 text-right text-sky-600 dark:text-sky-400">TOM &minus; Trip</td><td class="py-1 pl-2 text-right text-sky-600 dark:text-sky-400">TOM &minus; Trip</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase">MTOM (Masa Máx. Despegue):</span>
            <div class="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-sm">1150 kg (2535 lb)</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase">MLM (Masa Máx. Aterrizaje):</span>
            <div class="font-mono text-emerald-600 dark:text-emerald-400 font-bold text-sm">1150 kg (2535 lb)</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-red-800 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>🚨</span> WARNING (AFM)
          </strong>
          <span>Exceder los límites de masa certificada conduce a sobrecarga estructural y grave pérdida de rendimiento. Exceder los límites de centrado reduce severamente la autoridad de mandos y la estabilidad.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TABLA OFICIAL DE CARGA AFM</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-y-auto border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-loadsheet-table.png"
            alt="Hoja oficial de cálculo de carga del Diamond DA40 TDI"
            class="max-w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.4: 6.4 La Envolvente de Centro de Gravedad (CG Envelope) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · ENVOLVENTE DE CENTRADO</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.4 La Envolvente de Centro de Gravedad (CG Envelope)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Límites Certificados de Estabilidad</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">LÍMITES ADMISIBLES DE CG</span>
        </div>

        <div class="space-y-2 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">CATEGORÍA NORMAL (HASTA 1150 KG)</strong>
            <p class="leading-snug">
              &bull; <strong>Límite Delantero:</strong> 2,40 m (94,5 in) constante desde 780 kg hasta 980 kg; variación lineal hasta <strong>2,46 m (96,9 in)</strong> a 1150 kg.<br>
              &bull; <strong>Límite Trasero:</strong> <strong>2,59 m (102,0 in)</strong> con tanque estándar (2,55 m con tanque Long Range).
            </p>
          </div>

          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">CATEGORÍA UTILIDAD (HASTA 980 KG)</strong>
            <p class="leading-snug">
              Para vuelo en Categoría de Utilidad (maniobras autorizadas como pérdidas y virajes escarpados): la masa total no debe exceder <strong>980 kg (2161 lb)</strong>, no se permiten ocupantes en asientos traseros ni equipaje en el maletero. El límite delantero permanece constante en 2,40 m y el trasero en 2,59 m.
            </p>
          </div>

          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">EFECTO DEL CONSUMO DE COMBUSTIBLE EN EL CG</strong>
            <p class="leading-snug">
              Los depósitos alares del DA40 se sitúan a un brazo de <strong>2,63 m</strong>. Al estar situados ligeramente por detrás del CG habitual (~2,52 a 2,54 m), el consumo de combustible en crucero produce un <strong>leve avance hacia adelante</strong> del CG a lo largo del vuelo.
            </p>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-amber-800 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>⚠️</span> REGLA DE ORO DE DESPACHO
          </strong>
          <span>Deben graficarse obligatoriamente <strong>ambos puntos</strong> en la envolvente: el punto de despegue (TOM & CG) y el punto previsto al aterrizaje (LM & CG). Ambos deben situarse holgadamente dentro de los márgenes certificados.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENVOLVENTE DE CG (AFM)</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-cg-limits.png"
            alt="Envolvente de masa y centrado oficial Diamond DA40 TDI"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.5: 6.5 Ejercicio Práctico 1A: Masa y Centrado al Despegue (TOM & CG) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · TALLER PRÁCTICO 1A</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.5 Ejercicio Práctico 1A: Masa y Centrado al Despegue (TOM & CG)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Cálculo de TOM y Centrado Pre-Takeoff</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESCENARIO PRÁCTICO 1A: CÁLCULO DE DESPEGUE</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DATOS DE LA MISIÓN DE ENTRENAMIENTO</strong>
          <div class="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
            <div>&bull; Avión: <strong>DA40 TDI</strong></div>
            <div>&bull; BEW: <strong>735,0 kg</strong> / Arm: <strong>2,476 m</strong></div>
            <div>&bull; Asientos Delanteros: <strong>155 kg</strong> (75 kg Alumno + 80 kg Instructor)</div>
            <div>&bull; Asiento Trasero: <strong>70 kg</strong> (Pasajero observador)</div>
            <div>&bull; Maletero: <strong>15 kg</strong> (Maletines de vuelo)</div>
            <div>&bull; Combustible: <strong>80 L</strong> JET A-1 (67,2 kg a 0,84 kg/L)</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">RESOLUCIÓN DE HOJA DE CARGA</strong>
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-700 font-bold text-[#0B2E59] dark:text-sky-300">
                <th class="py-0.5">Estación</th>
                <th class="py-0.5 text-center">Brazo [m]</th>
                <th class="py-0.5 text-right">Masa [kg]</th>
                <th class="py-0.5 text-right">Momento [kg·m]</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
              <tr><td>Masa en Vacío (BEW)</td><td class="text-center">2,476</td><td class="text-right">735,00</td><td class="text-right">1820,00</td></tr>
              <tr><td>Asientos Delanteros</td><td class="text-center">2,300</td><td class="text-right">155,00</td><td class="text-right">356,50</td></tr>
              <tr><td>Asiento Trasero</td><td class="text-center">3,250</td><td class="text-right">70,00</td><td class="text-right">227,50</td></tr>
              <tr><td>Equipaje</td><td class="text-center">3,650</td><td class="text-right">15,00</td><td class="text-right">54,75</td></tr>
              <tr class="bg-slate-50 dark:bg-slate-800 font-bold text-slate-900 dark:text-slate-100"><td>ZFM (Zero Fuel Mass)</td><td class="text-center">2,522</td><td class="text-right">975,00</td><td class="text-right">2458,75</td></tr>
              <tr><td>Combustible Despegue (80 L)</td><td class="text-center">2,630</td><td class="text-right">67,20</td><td class="text-right">176,74</td></tr>
              <tr class="bg-emerald-50 dark:bg-emerald-950/40 font-bold text-emerald-900 dark:text-emerald-300"><td>TOM (Take-Off Mass)</td><td class="text-center">2,529</td><td class="text-right">1042,20</td><td class="text-right">2635,49</td></tr>
            </tbody>
          </table>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
            <span class="font-bold text-emerald-800 dark:text-emerald-300 block uppercase">Masa Despegue:</span>
            <div class="font-mono text-base font-bold text-emerald-700 dark:text-emerald-300">1042,2 kg</div>
            <div class="text-[11px] text-emerald-600 dark:text-emerald-400">&le; MTOM 1150 kg (Margen: 107,8 kg)</div>
          </div>
          <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
            <span class="font-bold text-emerald-800 dark:text-emerald-300 block uppercase">Centro de Gravedad:</span>
            <div class="font-mono text-base font-bold text-emerald-700 dark:text-emerald-300">2,529 m</div>
            <div class="text-[11px] text-emerald-600 dark:text-emerald-400">Dentro límites [2,423 - 2,590 m]</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">VERIFICACIÓN EN ENVOLVENTE</span>
          <span class="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold text-[11px]">✓ DESPACHO VÁLIDO</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-cg-limits.png"
            alt="Punto de despegue TOM en la envolvente del Diamond DA40 TDI"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs space-y-0.5 shrink-0">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-[11px] uppercase">COBERTURA DE LÍMITES AL DESPEGUE:</strong>
          <div class="text-slate-600 dark:text-slate-400 text-[11px]">
            A 1042,2 kg, el límite delantero calculado es 2,423 m y el trasero 2,590 m. El valor obtenido de <strong>2,529 m</strong> se encuentra en la zona central de óptima estabilidad.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.6: 6.6 Ejercicio Práctico 1B: Consumo de Ruta y Aterrizaje (LM & Envolvente) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · TALLER PRÁCTICO 1B</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.6 Ejercicio Práctico 1B: Consumo de Ruta y Aterrizaje (LM & Envolvente)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Cálculo de LM y Verificación Post-Flight</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESCENARIO PRÁCTICO 1B: CÁLCULO DE ATERRIZAJE</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONSUMO DE COMBUSTIBLE EN RUTA (TRIP FUEL)</strong>
          <p class="text-slate-700 dark:text-slate-300 leading-snug">
            Durante la navegación entre aeródromos se consumen <strong>35,0 litros</strong> de JET A-1.<br>
            &bull; Masa de combustible consumido: <strong>35,0 L &times; 0,84 kg/L = 29,40 kg</strong>.<br>
            &bull; Brazo de palanca de los depósitos alares: <strong>2,630 m</strong>.<br>
            &bull; Momento sustraído: <strong>29,40 kg &times; 2,630 m = 77,32 kg&middot;m</strong>.
          </p>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">BALANCE FINAL AL ATERRIZAJE</strong>
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-700 font-bold text-[#0B2E59] dark:text-sky-300">
                <th class="py-0.5">Concepto</th>
                <th class="py-0.5 text-center">Brazo [m]</th>
                <th class="py-0.5 text-right">Masa [kg]</th>
                <th class="py-0.5 text-right">Momento [kg·m]</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
              <tr><td>Masa al Despegue (TOM)</td><td class="text-center">2,529</td><td class="text-right">1042,20</td><td class="text-right">2635,49</td></tr>
              <tr class="text-rose-600 dark:text-rose-400"><td>Trip Fuel (Consumo de Ruta)</td><td class="text-center">2,630</td><td class="text-right">&minus; 29,40</td><td class="text-right">&minus; 77,32</td></tr>
              <tr class="bg-sky-50 dark:bg-sky-950/40 font-bold text-sky-900 dark:text-sky-200"><td>Masa al Aterrizaje (LM)</td><td class="text-center">2,526</td><td class="text-right">1012,80</td><td class="text-right">2558,17</td></tr>
            </tbody>
          </table>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
            <span class="font-bold text-sky-800 dark:text-sky-300 block uppercase">Masa Aterrizaje:</span>
            <div class="font-mono text-base font-bold text-sky-700 dark:text-sky-300">1012,8 kg</div>
            <div class="text-[11px] text-sky-600 dark:text-sky-400">&le; MLM 1150 kg (Margen: 137,2 kg)</div>
          </div>
          <div class="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
            <span class="font-bold text-sky-800 dark:text-sky-300 block uppercase">CG al Aterrizaje:</span>
            <div class="font-mono text-base font-bold text-sky-700 dark:text-sky-300">2,526 m</div>
            <div class="text-[11px] text-sky-600 dark:text-sky-400">Desplazamiento: &minus;3 mm hacia adelante</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-sky-800 dark:text-sky-300 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>ℹ️</span> CONCLUSIÓN CINEMÁTICA
          </strong>
          <span>Como el brazo del combustible (2,63 m) se encuentra muy cerca del centro de gravedad, el consumo de combustible apenas modifica el trimado del DA40, garantizando un comportamiento en mandos constante durante todo el vuelo.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TRAYECTORIA DE CG EN VUELO</span>
          <span class="px-2 py-0.5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-700 dark:text-sky-300 font-bold text-[11px]">TOW &rarr; LW CONFORME</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-cg-limits.png"
            alt="Puntos TOM y LM en la envolvente del Diamond DA40 TDI"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-xs space-y-0.5 shrink-0">
          <div class="flex justify-between items-center text-[11px]">
            <span>Punto 1 (Despegue): <strong>1042,2 kg @ 2,529 m</strong></span>
            <span class="text-emerald-600 dark:text-emerald-400 font-bold">✓ VÁLIDO</span>
          </div>
          <div class="flex justify-between items-center text-[11px] border-t border-slate-100 dark:border-slate-700 pt-0.5">
            <span>Punto 2 (Aterrizaje): <strong>1012,8 kg @ 2,526 m</strong></span>
            <span class="text-emerald-600 dark:text-emerald-400 font-bold">✓ VÁLIDO</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.7: 6.7 Régimen de Crucero: Rendimiento y Consumo al 60% de Potencia -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · RENDIMIENTO DE CRUCERO</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.7 Régimen de Crucero: Rendimiento y Consumo al 60% de Potencia</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Operación Estándar de Escuela</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RÉGIMEN ESTÁNDAR DE ESCUELA: 60% LOAD</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">GESTIÓN MONO-PALANCA Y EFICIENCIA DIÉSEL</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            En el DA40 TDI con motor Thielert TAE 125-01 / Continental CD-135, el piloto selecciona directamente el porcentaje de potencia (*% LOAD*) en la palanca única. La ECU regula automáticamente la inyección y el paso de hélice.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <span class="font-bold text-sky-600 dark:text-sky-400 block uppercase text-[11px]">60% POTENCIA (ESCUELA)</span>
            <div class="text-[11px] text-slate-700 dark:text-slate-300">
              Crucero económico oficial Blue Team:<br>
              <strong>4,0 US gal/h (15,1 L/h)</strong><br>
              TAS: ~118 a 120 kts a FL60
            </div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 block uppercase text-[11px]">70% POTENCIA (NORMAL)</span>
            <div class="text-[11px] text-slate-700 dark:text-slate-300">
              Crucero de velocidad estándar:<br>
              <strong>4,9 US gal/h (18,5 L/h)</strong><br>
              TAS: ~124 a 126 kts a FL60
            </div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <span class="font-bold text-amber-600 dark:text-amber-400 block uppercase text-[11px]">80% POTENCIA (RÁPIDO)</span>
            <div class="text-[11px] text-slate-700 dark:text-slate-300">
              Máximo crucero continuo:<br>
              <strong>5,8 US gal/h (22,0 L/h)</strong><br>
              TAS: ~130 a 132 kts a FL60
            </div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-sky-800 dark:text-sky-300 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>ℹ️</span> DATO CLAVE PARA EL F.OPS.02
          </strong>
          <span>Para cualquier cálculo de combustible de ruta (Trip Fuel) y reservas en la flota DA40 TDI de Blue Team, se toma como referencia reglamentaria de consumo económico de crucero: <strong>15,1 L/h (4,0 US gal/h)</strong>.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ÁBACO AFM: FUEL FLOW VS LOAD</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-fuel-flow-load.png"
            alt="Ábaco oficial AFM de consumo horario Fuel Flow vs % Load"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.8: 6.8 Ground Speed, Viento y Cálculo de Combustible Horario -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · NAVEGACIÓN Y VIENTO</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.8 Ground Speed, Viento y Cálculo de Combustible Horario</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Cinemática de Vuelo</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">EFECTO DEL VIENTO EN RUTA</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">EL TRIÁNGULO DE VELOCIDADES</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            La velocidad verdadera (TAS) proporciona la velocidad respecto al aire. El viento en altura vectorialmente modifica la trayectoria, resultando en el rumbo corregido por deriva y la velocidad respecto al suelo (Ground Speed / GS).
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 block uppercase">Tiempo en Ruta (ETE):</span>
            <div class="font-mono text-sky-600 dark:text-sky-400 font-bold">ETE [min] = (Distancia / GS) × 60</div>
            <div class="text-slate-600 dark:text-slate-400 text-[11px]">Calculado para cada tramo de la navegación.</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 block uppercase">Combustible de Trayecto:</span>
            <div class="font-mono text-emerald-600 dark:text-emerald-400 font-bold">Trip [L] = ETE [h] × 15,1 L/h</div>
            <div class="text-slate-600 dark:text-slate-400 text-[11px]">Consumo horario a potencia de crucero 60%.</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">EJEMPLO PRÁCTICO DE NAVEGACIÓN (75 NM)</strong>
          <p class="text-slate-700 dark:text-slate-300 leading-snug">
            Para un vuelo de <strong>75 NM</strong> a 6.000 ft con TAS de 120 kt y viento de proa de 15 kt ($	ext{GS} = 105	ext{ kt}$):<br>
            &bull; <strong>ETE = (75 / 105) &times; 60 = 42,9 min = 0,715 h</strong>.<br>
            &bull; <strong>Trip Fuel = 0,715 h &times; 15,1 L/h = 10,80 Litros</strong> (9,07 kg de JET A-1).
          </p>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TRIÁNGULO DE VELOCIDADES</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/c172/triangulo-velocidades.png"
            alt="Triángulo de velocidades y cinemática del viento en navegación"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.9: 6.9 Ejercicio Práctico 2: Crucero y Autonomía -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · TALLER PRÁCTICO 2</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.9 Ejercicio Práctico 2: Crucero y Autonomía</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Planificación de Ruta y Alcance</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TALLER PRÁCTICO 2: PLANIFICACIÓN DE CRUCERO</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONDICIONES DE VUELO EN RUTA</strong>
          <div class="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
            <div>&bull; Altitud de Presión: <strong>6.750 ft</strong></div>
            <div>&bull; Temperatura exterior: <strong>ISA + 10°C</strong></div>
            <div>&bull; Ajuste de potencia: <strong>60% Load</strong></div>
            <div>&bull; Consumo: <strong>15,1 L/h (4,0 US gal/h)</strong></div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">EXTRACCIÓN EN ÁBACO DE CRUCERO (AFM)</strong>
          <p class="text-slate-700 dark:text-slate-300 leading-snug">
            Localizando 6.750 ft en el eje vertical y trasladando horizontalmente hasta la curva discontinua de <strong>60% LOAD (ISA + 10°C)</strong>, se desciende verticalmente hacia el eje inferior:<br>
            &bull; <strong>True Airspeed (TAS) obtenida:</strong> <span class="font-mono font-bold text-sky-600 dark:text-sky-400">120 kts</span>.
          </p>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CÁLCULO DE AUTONOMÍA TOTAL (TANQUES ESTÁNDAR)</strong>
          <p class="text-slate-700 dark:text-slate-300 leading-snug">
            Con los tanques estándar del DA40 TDI cargados a plena capacidad utilizable (<strong>106 litros / 28,0 US gal</strong>):<br>
            &bull; <strong>Autonomía Bruta = 106 L / 15,1 L/h = 7,02 horas = 7 h 01 min</strong>.<br>
            &bull; Alcance sin viento: <strong>7,0 h &times; 120 kt &approx; 840 NM</strong>.
          </p>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>✓</span> EFICIENCIA CERTIFICADA
          </strong>
          <span>El consumo de sólo 15,1 L/h permite volar más de 5 horas de navegación con más de 2 horas completas de reserva final reglamentaria remanente a bordo.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ÁBACO AFM: CRUISING TAS</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-cruise-tas.png"
            alt="Ábaco oficial AFM de crucero y velocidad verdadera TAS"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.10: 6.10 Política de Combustible: Part-NCO.OP.125 & Manual OM Blue Team -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · POLÍTICA DE COMBUSTIBLE</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.10 Política de Combustible: Part-NCO.OP.125 & Manual OM Blue Team</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Seguridad Operacional y Reservas</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">POLÍTICA DE COMBUSTIBLE OFICIAL</span>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div class="flex justify-between items-center mb-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300">1. Taxi Fuel (Rodaje y Pruebas FADEC):</strong>
              <span class="font-mono font-bold text-sky-600 dark:text-sky-400">3,0 L (0,79 US gal)</span>
            </div>
            <div>Combustible asignado para puesta en marcha, rodaje al punto de espera y test automático de ECU/FADEC.</div>
          </div>

          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div class="flex justify-between items-center mb-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300">2. Trip Fuel (Combustible de Ruta):</strong>
              <span class="font-mono font-bold text-sky-600 dark:text-sky-400">Según ETE</span>
            </div>
            <div>Calculado con el ETE de cada tramo y el consumo horario de 15,1 L/h (4,0 US gal/h).</div>
          </div>

          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div class="flex justify-between items-center mb-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300">3. Alternativo (Desvío):</strong>
              <span class="font-mono font-bold text-sky-600 dark:text-sky-400">5,1 L (1,35 US gal)</span>
            </div>
            <div>Combustible para frustrada y vuelo al aeródromo alternativo asignado.</div>
          </div>

          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <div class="flex justify-between items-center mb-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300">4. Reserva Final Obligatoria OM Blue Team:</strong>
              <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">22,7 L (6,0 US gal)</span>
            </div>
            <div>El reglamento EASA Part-NCO exige 45 minutos (11,3 L). <strong>Blue Team exige por Manual de Operaciones 1 hora 30 minutos obligatoria</strong> (22,65 L) para máxima seguridad de instrucción.</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-amber-800 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>⚠️</span> RAMP FUEL MÍNIMO
          </strong>
          <span><strong>Ramp Fuel Mínimo = Taxi (3,0 L) + Trip + Alternativo (5,1 L) + Reserva OM 1:30 (22,7 L)</strong>. Nunca se despegará si la cantidad a bordo es inferior a este total.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">POLÍTICA DE COMBUSTIBLE EASA & OM</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/c172/6.10.jpg"
            alt="Esquema reglamentario de política de combustible EASA Part-NCO"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.11: 6.11 Ejercicio Práctico 3: Planificación de Combustible F.OPS.02 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · TALLER PRÁCTICO 3</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.11 Ejercicio Práctico 3: Planificación de Combustible F.OPS.02</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Hoja de Carga F.OPS.02</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CUMPLIMENTACIÓN DEL PLAN DE COMBUSTIBLE</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DESGLOSE DEL F.OPS.02 PARA DA40 TDI</strong>
          <table class="w-full text-left text-xs">
            <thead>
              <tr class="border-b border-slate-200 dark:border-slate-700 font-bold text-[#0B2E59] dark:text-sky-300">
                <th class="py-0.5">Componente</th>
                <th class="py-0.5 text-center">Tiempo</th>
                <th class="py-0.5 text-right">Litros</th>
                <th class="py-0.5 text-right">US Gal</th>
                <th class="py-0.5 text-right">Masa (0,84)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
              <tr><td>Taxi Fuel (Rodaje)</td><td class="text-center">&mdash;</td><td class="text-right">3,0 L</td><td class="text-right">0,79</td><td class="text-right">2,52 kg</td></tr>
              <tr><td>Trip Fuel (Navegación 75 NM)</td><td class="text-center">43 min</td><td class="text-right">10,8 L</td><td class="text-right">2,85</td><td class="text-right">9,07 kg</td></tr>
              <tr><td>Alternativo (Desvío)</td><td class="text-center">20 min</td><td class="text-right">5,1 L</td><td class="text-right">1,35</td><td class="text-right">4,28 kg</td></tr>
              <tr><td>Reserva OM Blue Team (1:30)</td><td class="text-center">90 min</td><td class="text-right">22,7 L</td><td class="text-right">6,00</td><td class="text-right">19,07 kg</td></tr>
              <tr class="bg-amber-50 dark:bg-amber-950/40 font-bold text-amber-900 dark:text-amber-200"><td>Mínimo Requerido (Ramp)</td><td class="text-center">2h 33m</td><td class="text-right">41,6 L</td><td class="text-right">11,00</td><td class="text-right">34,94 kg</td></tr>
              <tr class="bg-emerald-50 dark:bg-emerald-950/40 font-bold text-emerald-900 dark:text-emerald-200"><td>Combustible a Bordo Real</td><td class="text-center">3h 58m</td><td class="text-right">60,0 L</td><td class="text-right">15,85</td><td class="text-right">50,40 kg</td></tr>
            </tbody>
          </table>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
            <span class="font-bold text-emerald-800 dark:text-emerald-300 block uppercase">Margen Adicional:</span>
            <div class="font-mono text-base font-bold text-emerald-700 dark:text-emerald-300">+ 18,4 L (+1h 13m)</div>
            <div class="text-[11px] text-emerald-600 dark:text-emerald-400">Combustible extra para contingencias</div>
          </div>
          <div class="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/50">
            <span class="font-bold text-sky-800 dark:text-sky-300 block uppercase">Combustible para TOM:</span>
            <div class="font-mono text-base font-bold text-sky-700 dark:text-sky-300">57,0 L (47,88 kg)</div>
            <div class="text-[11px] text-sky-600 dark:text-sky-400">Ramp Fuel menos 3 L de Taxi</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-sky-800 dark:text-sky-300 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>ℹ️</span> VERIFICACIÓN DE CAPACIDAD
          </strong>
          <span>Los 60,0 litros planificados caben perfectamente dentro de los 106 L utilizables de los depósitos estándar alares (14 galones utilizables por cada ala = 53 L por semiala).</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CAPACIDADES DE COMBUSTIBLE DA40</span>
        </div>

        <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block uppercase border-b border-slate-100 dark:border-slate-700 pb-1">DEPÓSITOS ESTÁNDAR (AFM CAPÍTULO 7)</strong>
          <div class="space-y-1 text-slate-700 dark:text-slate-300">
            <div>&bull; Depósito Principal (Izquierdo): <strong>14,0 US gal (53 L)</strong> utilizables.</div>
            <div>&bull; Depósito Auxiliar (Derecho): <strong>14,0 US gal (53 L)</strong> utilizables.</div>
            <div>&bull; Total Utilizable Estándar: <strong>28,0 US gal (106 L)</strong> = 89,04 kg.</div>
            <div>&bull; No utilizable: 2,0 US gal (~7,6 L) incluidos en BEW.</div>
          </div>
        </div>

        <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block uppercase border-b border-slate-100 dark:border-slate-700 pb-1">DEPÓSITOS LONG RANGE (OPCIONAL)</strong>
          <div class="space-y-1 text-slate-700 dark:text-slate-300">
            <div>&bull; Total Utilizable Long Range: <strong>40,0 US gal (151,4 L)</strong> = 127,18 kg.</div>
            <div>&bull; Brazo de palanca: 2,63 m (idéntico al estándar).</div>
            <div>&bull; Límite trasero de CG con Long Range: <strong>2,55 m</strong> (frente a 2,59 m).</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.12: 6.12 Performance de Despegue: Parámetros y Factores de Corrección -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PERFORMANCE DE DESPEGUE</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.12 Performance de Despegue: Parámetros y Factores de Corrección</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimientos de Certificación AFM</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CONDICIONES DE DESPEGUE (AFM)</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONDICIONES DE REFERENCIA DE CERTIFICACIÓN</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            Palanca: <strong>MAX (100% Load)</strong> &bull; Flaps: <strong>T/O</strong> &bull; Pista asfaltada seca y nivelada.<br>
            &bull; Rotación ($v_R$): <strong>59 KIAS</strong> (1150 kg) / 55 KIAS (1000 kg) / 49 KIAS (850 kg).<br>
            &bull; Ascenso inicial: <strong>66 KIAS</strong> (1150 kg) / 60 KIAS (1000 kg) / 54 KIAS (850 kg).
          </p>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs sm:text-[13px]">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FACTORES OFICIALES DE CORRECCIÓN DE PISTA (AFM)</strong>
          <div class="space-y-1 text-slate-700 dark:text-slate-300">
            <div>&bull; <strong>Viento en cara / cola:</strong> Corrección gráfica directa mediante las curvas del ábaco.</div>
            <div>&bull; <strong>Hierba seca corta (&le; 5 cm / 2 in):</strong> <strong>+10%</strong> en la carrera de despegue.</div>
            <div>&bull; <strong>Hierba media (5 a 10 cm / 2 a 4 in):</strong> <strong>+15%</strong> en la carrera de despegue.</div>
            <div>&bull; <strong>Hierba alta (> 10 cm / 4 in):</strong> al menos <strong>+25%</strong> en la carrera de despegue.</div>
            <div>&bull; <strong>Pendiente ascendente (+2% uphill):</strong> <strong>+10%</strong> en la distancia total de despegue (el efecto sobre la carrera en tierra puede ser mayor).</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-amber-800 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>⚠️</span> CRITERIO LEGAL DE PISTA
          </strong>
          <span>Para un despegue seguro y reglamentario, la longitud de pista disponible (TORA / TODA) debe ser <strong>al menos igual a la distancia total de despegue sobre el obstáculo de 15 m (50 ft)</strong> calculada con todos los factores correctores.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ÁBACO AFM: TAKE-OFF OVER 50 FT</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-takeoff-distance.png"
            alt="Ábaco oficial AFM de distancia total de despegue sobre 50 ft"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.13: 6.13 Performance de Aterrizaje: Parámetros y Factores de Corrección -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PERFORMANCE DE ATERRIZAJE</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.13 Performance de Aterrizaje: Parámetros y Factores de Corrección</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimientos de Certificación AFM</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CONDICIONES DE ATERRIZAJE (AFM)</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONDICIONES DE REFERENCIA (FLAPS LDG)</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            Palanca: <strong>IDLE</strong> &bull; Flaps: <strong>LDG</strong> &bull; Pista asfaltada seca y nivelada.<br>
            &bull; Velocidad aproximación ($v_{REF}$): <strong>71 KIAS</strong> (1150 kg) / 63 KIAS (1000 kg) / 58 KIAS (850 kg).<br>
            &bull; Valores ISA a nivel del mar (1150 kg): Distancia total a 15 m = <strong>744 m</strong> · Carrera = <strong>287 m</strong>.
          </p>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs sm:text-[13px]">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FACTORES OFICIALES DE CORRECCIÓN (AFM)</strong>
          <div class="space-y-1 text-slate-700 dark:text-slate-300">
            <div>&bull; <strong>Viento en cara / cola:</strong> Corrección gráfica en el ábaco.</div>
            <div>&bull; <strong>Hierba seca corta (&le; 5 cm):</strong> <strong>+5%</strong> en la carrera de aterrizaje.</div>
            <div>&bull; <strong>Hierba media (5 a 10 cm):</strong> <strong>+15%</strong> en la carrera de aterrizaje.</div>
            <div>&bull; <strong>Hierba alta (> 10 cm):</strong> al menos <strong>+25%</strong> en la carrera de parada.</div>
            <div>&bull; <strong>Pendiente descendente (-2% downhill):</strong> <strong>+10%</strong> en la distancia total.</div>
            <div>&bull; <strong>Exceso de velocidad:</strong> Una velocidad de aproximación superior a $v_{REF}$ alarga drásticamente la distancia de flotación (flare).</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-amber-800 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>⚠️</span> COMPARACIÓN CON LDA
          </strong>
          <span>La distancia de aterrizaje sobre 15 m (50 ft) calculada debe ser inferior a la distancia de aterrizaje disponible (LDA), aplicando el factor de margen reglamentario escolar (1,43).</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ÁBACO AFM: LANDING OVER 50 FT</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-landing-distance.png"
            alt="Ábaco oficial AFM de distancia total de aterrizaje con Flaps LDG"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.14: 6.14 Ejercicio Práctico 4A: Distancias de Despegue (TORA & TODA) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · TALLER PRÁCTICO 4A</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.14 Ejercicio Práctico 4A: Distancias de Despegue (TORA & TODA)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Verificación de Pista Disponible</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TALLER PRÁCTICO 4A: PERFORMANCE DE DESPEGUE</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DATOS METEOROLÓGICOS Y AEROPORTUARIOS</strong>
          <div class="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
            <div>&bull; Altitud de Presión: <strong>4.000 ft</strong></div>
            <div>&bull; Temperatura exterior (OAT): <strong>22°C (72°F)</strong></div>
            <div>&bull; Masa al Despegue: <strong>1070 kg (2359 lb)</strong></div>
            <div>&bull; Viento en cara: <strong>10 kts</strong> (Headwind)</div>
            <div>&bull; Pista: <strong>Asfalto seco y nivelado</strong></div>
            <div>&bull; Longitud disponible: <strong>TORA = 850 m / TODA = 900 m</strong></div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">EXTRACCIÓN Y RESOLUCIÓN EN ÁBACO AFM</strong>
          <p class="text-slate-700 dark:text-slate-300 leading-snug">
            Siguiendo las líneas de referencia del ábaco oficial de despegue sobre 50 ft (AFM 5.3.7):<br>
            1. Desde 22°C subir hasta la línea de 4.000 ft.<br>
            2. Trasladar horizontalmente hacia la derecha hasta la línea de referencia de masa.<br>
            3. Seguir la curva proporcional a 1070 kg.<br>
            4. Trasladar hasta la referencia de viento y corregir para 10 kt de cara.<br>
            &bull; <strong>Distancia total requerida a 50 ft:</strong> <span class="font-mono font-bold text-sky-600 dark:text-sky-400">600 m (1969 ft)</span>.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
            <span class="font-bold text-emerald-800 dark:text-emerald-300 block uppercase">Distancia Requerida:</span>
            <div class="font-mono text-base font-bold text-emerald-700 dark:text-emerald-300">600 metros</div>
            <div class="text-[11px] text-emerald-600 dark:text-emerald-400">Sobre obstáculo de 15 m (50 ft)</div>
          </div>
          <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50">
            <span class="font-bold text-emerald-800 dark:text-emerald-300 block uppercase">Margen en TORA (850 m):</span>
            <div class="font-mono text-base font-bold text-emerald-700 dark:text-emerald-300">+ 250 metros</div>
            <div class="text-[11px] text-emerald-600 dark:text-emerald-400">141% de margen de seguridad</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RESOLUCIÓN GRÁFICA EN ÁBACO</span>
          <span class="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold text-[11px]">✓ DESPEGO AUTORIZADO</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-takeoff-distance.png"
            alt="Resolución gráfica oficial de distancia de despegue en el DA40 TDI"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.15: 6.15 Ejercicio Práctico 4B: Distancia de Aterrizaje y Margen (LDA) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · TALLER PRÁCTICO 4B</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.15 Ejercicio Práctico 4B: Distancia de Aterrizaje y Margen (LDA)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Verificación de Pista de Destino</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TALLER PRÁCTICO 4B: DISTANCIA DE ATERRIZAJE</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONDICIONES EN AERÓDROMO DE DESTINO</strong>
          <div class="grid grid-cols-2 gap-2 text-slate-700 dark:text-slate-300">
            <div>&bull; Altitud de Presión: <strong>2.000 ft</strong></div>
            <div>&bull; Temperatura exterior: <strong>15°C (59°F)</strong></div>
            <div>&bull; Masa al Aterrizaje: <strong>1000 kg (2205 lb)</strong></div>
            <div>&bull; Viento en cara: <strong>10 kts</strong> (Headwind)</div>
            <div>&bull; Configuración: <strong>Flaps LDG</strong> ($v_{REF} = 63	ext{ KIAS}$)</div>
            <div>&bull; Pista disponible: <strong>LDA = 900 metros</strong> (Asfalto seco)</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">EXTRACCIÓN EN ÁBACOS AFM</strong>
          <p class="text-slate-700 dark:text-slate-300 leading-snug">
            Siguiendo el ejemplo oficial del manual de vuelo (AFM 5.3.11):<br>
            &bull; <strong>Distancia total sobre 50 ft:</strong> <span class="font-mono font-bold text-sky-600 dark:text-sky-400">500 m (1640 ft)</span>.<br>
            &bull; <strong>Carrera en tierra (Ground Roll):</strong> <span class="font-mono font-bold text-slate-700 dark:text-slate-300">195 m (640 ft)</span>.
          </p>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">APLICACIÓN DE MARGEN REGLAMENTARIO (FACTOR 1,43)</strong>
          <p class="text-slate-700 dark:text-slate-300 leading-snug">
            &bull; Distancia con factor escolar: <strong>500 m &times; 1,43 = 715 metros</strong>.<br>
            &bull; Comparativa: <strong>715 m &le; 900 m (LDA)</strong>. Margen libre remanente de <strong>185 metros</strong>.
          </p>
        </div>

        <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-between text-xs">
          <span class="font-bold text-emerald-800 dark:text-emerald-300 uppercase">Estado Operacional:</span>
          <span class="font-bold text-emerald-700 dark:text-emerald-300">✓ ATERRIZAJE TOTALMENTE FACTIBLE</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RESOLUCIÓN GRÁFICA EN ÁBACO</span>
          <span class="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold text-[11px]">✓ ATERRIZAJE AUTORIZADO</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-landing-distance.png"
            alt="Resolución gráfica oficial de distancia de aterrizaje en el DA40 TDI"
            class="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.16: 6.16 Validación Final del Despacho y Firma Operativa -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · DESPACHO OPERATIVO</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.16 Validación Final del Despacho y Firma Operativa</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aprobación Go / No-Go y Doble Firma</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CHECKLIST DE VALIDACIÓN F.OPS.02</span>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center justify-between">
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block">1. Pilar Masa y Centrado:</strong>
              <span class="text-slate-600 dark:text-slate-400">TOM (1042,2 kg) &le; 1150 kg &bull; CG (2,529 m) en envolvente.</span>
            </div>
            <span class="text-emerald-600 dark:text-emerald-400 font-bold font-mono">CONFORME ✓</span>
          </div>

          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center justify-between">
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block">2. Pilar Plan de Combustible:</strong>
              <span class="text-slate-600 dark:text-slate-400">Ramp Fuel (60,0 L) &ge; Mínimo 41,6 L (con 1:30 OM Blue Team).</span>
            </div>
            <span class="text-emerald-600 dark:text-emerald-400 font-bold font-mono">CONFORME ✓</span>
          </div>

          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center justify-between">
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block">3. Pilar Performance de Despegue:</strong>
              <span class="text-slate-600 dark:text-slate-400">Distancia sobre 50 ft (600 m) &le; TORA disponible (850 m).</span>
            </div>
            <span class="text-emerald-600 dark:text-emerald-400 font-bold font-mono">CONFORME ✓</span>
          </div>

          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center justify-between">
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block">4. Pilar Performance de Aterrizaje:</strong>
              <span class="text-slate-600 dark:text-slate-400">Distancia factorizada (715 m) &le; LDA disponible (900 m).</span>
            </div>
            <span class="text-emerald-600 dark:text-emerald-400 font-bold font-mono">CONFORME ✓</span>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>✍️</span> DOBLE FIRMA OPERATIVA OBLIGATORIA
          </strong>
          <span>El formulario F.OPS.02 debe ser firmado por el alumno en calidad de Piloto al Mando (PIC) y por el Instructor de Vuelo habilitado antes de poner en marcha los motores.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">EJEMPLO DE F.OPS.02 COMPLETADO</span>
          <span class="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold text-[11px]">GO / AUTORIZADO</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-y-auto border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-inner p-1">
          <img
            src="/images/c172/f-ops-02-ejemplo-rellenado-btm26c.png"
            alt="Ejemplo de despacho completado y firmado F.OPS.02"
            class="w-full h-auto block rounded-lg shadow-xs"
          />
        </div>
      </div>
    </div>
  </div>
</div>`
};

export const DA40_LESSONS = [DA40_LESSON_1, DA40_LESSON_2, DA40_LESSON_3, DA40_LESSON_4, DA40_LESSON_5, DA40_LESSON_6];




