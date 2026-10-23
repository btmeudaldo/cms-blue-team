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
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-3 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">INDICADOR DE VELOCIDAD Y LÍMITES</span>
          </div>

          <!-- Introducción KIAS -->
          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              El anemómetro presenta lecturas en <strong>KIAS</strong> (Knots Indicated Airspeed). En vuelo, todas las limitaciones estructurales y de operación se comprueban directamente sobre el indicador analógico en cabina.
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

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Indicador de velocidad anemométrica de la célula Diamond DA40 TDI con escala en KIAS y franjas de limitación reglamentaria de colores según AFM 2.3.
            </p>
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
`,
};

export const DA40_LESSONS = [DA40_LESSON_1, DA40_LESSON_2];

