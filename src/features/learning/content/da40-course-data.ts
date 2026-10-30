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
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.1 II. Walk-Around Check · Item 1. Left Main Landing Gear</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.1 II. 1. LEFT MAIN LANDING GEAR</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-5</span>
          </div>

          <!-- LISTA VERBATIM AFM (8 ÍTEMS a - h) -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">1. Left main landing gear:</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Landing gear strut or fairing &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Wheel fairing &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Tire inflation pressure (2.5 bar / 36 psi) &mdash; <span class="italic font-medium">check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Wear, tread depth of tire &mdash; <span class="italic font-medium">check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Tire, wheel, brake &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
              <span class="text-slate-800 dark:text-slate-200">Brake line connection &mdash; <span class="italic font-medium">check for leaks</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
              <span class="text-slate-800 dark:text-slate-200">Slip marks &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
              <span class="text-slate-800 dark:text-slate-200">Chocks &mdash; <span class="italic font-medium">remove</span></span>
            </div>
          </div>

          <!-- NOTA TÉCNICA BLUE TEAM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>VERIFICACIÓN OPERATIVA EN TIERRA:</span>
            </strong>
            <div>Compruebe la marca roja de alineación neumático-llanta (slip marks). Una marca desalineada indica frenada brusca con deslizamiento relativo en llanta que puede cizallar la válvula. Inspeccione la pinza de freno y latiguillos por posibles fugas hidráulicas de líquido rojo MIL-PRF-5606.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Inspección de Tren Principal</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Conjunto de tren principal izquierdo del DA40: ballesta de fibra de vidrio/carbono, carenado aerodinámico, pinza de freno de disco, latiguillo y presión nominal de 2.5 bar (36 psi).
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
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.1 II. Walk-Around Check · Item 2. Left Wing (20 ítems)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.1 II. 2. LEFT WING</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-5/6 (a-t)</span>
          </div>

          <!-- LISTA VERBATIM AFM (20 ÍTEMS a - t) -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">2. Left wing:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Entire wing surface &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Step &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Air intake on lower surface &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Openings on lower surface &mdash; <span class="italic font-medium">check for foreign objects and for traces of fuel (if tank is full, fuel may spill over through the tank vent)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Tank drain &mdash; <span class="italic font-medium">drain off to check for water and sediment (drain until no water comes out)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">f)</span>
              <span class="text-slate-800 dark:text-slate-200">Stall warning &mdash; <span class="italic font-medium">check (suck on opening)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">g)</span>
              <span class="text-slate-800 dark:text-slate-200">Tank filler &mdash; <span class="italic font-medium">visual inspection, use alternate mean for fuel qty. check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">h)</span>
              <span class="text-slate-800 dark:text-slate-200">Tank air outlet in lower surface &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">i)</span>
              <span class="text-slate-800 dark:text-slate-200">2 stall strips on wing &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">j)</span>
              <span class="text-slate-800 dark:text-slate-200">Pitot probe &mdash; <span class="italic font-medium">clean, orifices clear</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">k)</span>
              <span class="text-slate-800 dark:text-slate-200">Landing/taxi light &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">l)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing tip &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">m)</span>
              <span class="text-slate-800 dark:text-slate-200">Position light, strobe light (ACL) &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">n)</span>
              <span class="text-slate-800 dark:text-slate-200">Tie-down &mdash; <span class="italic font-medium">check, clear</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">o)</span>
              <span class="text-slate-800 dark:text-slate-200">Aileron and linkage &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">p)</span>
              <span class="text-slate-800 dark:text-slate-200">Aileron hinges and safety pin &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">q)</span>
              <span class="text-slate-800 dark:text-slate-200">Foreign objects in aileron paddle &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">r)</span>
              <span class="text-slate-800 dark:text-slate-200">Flap and linkage &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">s)</span>
              <span class="text-slate-800 dark:text-slate-200">Flap hinges and safety pin &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">t)</span>
              <span class="text-slate-800 dark:text-slate-200">Static dischargers &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
          </div>

          <!-- CAUTIONS Y NOTAS AFM -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-snug shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>AFM CAUTION:</span>
            </strong>
            <div>If water or sediment is found in the fuel, drain off further samples until the fuel is clear. If fuel contamination persists, flight is prohibited. Do not blow into the Pitot probe or static ports, as this may damage the instruments.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Semiala Izquierda y Mandos</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Sonda Pitot-estática calefactada, toma de pérdida (aspirar para verificar sonido), bandas de pérdida (stall strips), varillas con laca de seguridad en alerón y flap, y descargadores estáticos en punta alar.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.4: 4.4 Inspección Exterior III: Fuselaje Izquierdo y Empenaje en T -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS NORMALES</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.4 Inspección Exterior III: Fuselaje Izquierdo y Empenaje en T</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.1 II. Walk-Around Check · Items 3 & 4 (Fuselaje y Empenaje)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.1 II. 3. FUSELAGE LEFT & 4. EMPENNAGE</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-6</span>
          </div>

          <!-- SECCIÓN 3: FUSELAGE, LEFT SIDE -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">3. Fuselage, left side:</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Canopy, left side &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Rear cabin door &amp; window &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuselage skin &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Antennas &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Autopilot static source (if installed) &mdash; <span class="italic font-medium">check for blockage</span></span>
            </div>
          </div>

          <!-- SECCIÓN 4: EMPENNAGE -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4. Empennage:</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Stabilizers and control surfaces &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Hinges &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Elevator trim tab &mdash; <span class="italic font-medium">visual inspection, check safetying</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Rudder trim tab &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Tie-down &mdash; <span class="italic font-medium">check, clear</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
              <span class="text-slate-800 dark:text-slate-200">Tail skid and lower fin &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
              <span class="text-slate-800 dark:text-slate-200">Static dischargers &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Empenaje en T y Patín</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Cola en T del DA40: estabilizador horizontal fuera de la estela de la hélice, bisagras del timón de profundidad con pasadores de aleta, varilla compensadora frenada, patín inferior de cola (tail skid) y descargadores estáticos.
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
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.1 II. Walk-Around Check · Items 5 & 6 (Fuselaje Derecho y Semiala)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.1 II. 5. FUSELAGE RIGHT & 6. RIGHT WING</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-7/8</span>
          </div>

          <!-- SECCIÓN 5: FUSELAGE, RIGHT SIDE -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">5. Fuselage, right side:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuselage skin &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Rear window &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Canopy, right side &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Autopilot static source (if installed) &mdash; <span class="italic font-medium">check for blockage</span></span>
            </div>
          </div>

          <!-- SECCIÓN 6: RIGHT WING -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">6. Right wing:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Flap and linkage &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Flap hinges and safety pin &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Aileron and linkage &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Aileron hinges and safety pin &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Foreign objects in aileron paddle &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">f)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing tip &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">g)</span>
              <span class="text-slate-800 dark:text-slate-200">Position light, strobe light (ACL) &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">h)</span>
              <span class="text-slate-800 dark:text-slate-200">Tie-down &mdash; <span class="italic font-medium">check, clear</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">i)</span>
              <span class="text-slate-800 dark:text-slate-200">Entire wing surface &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">j)</span>
              <span class="text-slate-800 dark:text-slate-200">2 stall strips on wing &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">k)</span>
              <span class="text-slate-800 dark:text-slate-200">Tank air outlet in lower surface &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">l)</span>
              <span class="text-slate-800 dark:text-slate-200">Tank filler &mdash; <span class="italic font-medium">visual check, use alternate mean for fuel qty. check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">m)</span>
              <span class="text-slate-800 dark:text-slate-200">Openings on lower surface &mdash; <span class="italic font-medium">check for foreign objects and for traces of fuel</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">n)</span>
              <span class="text-slate-800 dark:text-slate-200">Tank drain &mdash; <span class="italic font-medium">drain off to check for water and sediment (drain until no water comes out)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">o)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel cooler baffle on stub wing &mdash; <span class="italic font-medium">check (removed if OAT > 20 °C / 68 °F; installed if OAT < 20 °C / 68 °F)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">p)</span>
              <span class="text-slate-800 dark:text-slate-200">Step &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">q)</span>
              <span class="text-slate-800 dark:text-slate-200">Static dischargers &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DEFLECTOR REFRIGERADOR COMBUSTIBLE</span>
        </div>

        <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700/60 text-xs text-amber-950 dark:text-amber-200 mb-2 leading-relaxed">
          <strong class="text-amber-700 dark:text-amber-400 block mb-1 uppercase font-bold text-xs">Regla Operativa Baffle (Ítem 6.o):</strong>
          El combustible diésel retornado del common rail se enfría mediante el radiador en la raíz alar derecha. A temperaturas cálidas (OAT en tierra &gt; 20 °C) el deflector <strong>debe retirarse</strong> para evitar sobrecalentamiento de combustible. Con OAT &lt; 20 °C debe instalarse para evitar sobreenfriamiento del depósito auxiliar.
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Semiala Derecha y Stub Wing</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Toma de aire del refrigerador de combustible en la raíz alar derecha con su deflector estacional (baffle), tapón del depósito y varilla graduada de comprobación visual.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.6 Inspección Exterior V: Tren Principal Derecho</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.1 II. Walk-Around Check · Item 7. Right Main Landing Gear</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.1 II. 7. RIGHT MAIN LANDING GEAR</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-8</span>
          </div>

          <!-- LISTA VERBATIM AFM (8 ÍTEMS a - h) -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">7. Right main landing gear:</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Landing gear strut or fairing &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Wheel fairing &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Tire inflation pressure (2.5 bar / 36 psi) &mdash; <span class="italic font-medium">check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">Wear, tread depth of tires &mdash; <span class="italic font-medium">check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Tire, wheel, brake &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">f)</span>
              <span class="text-slate-800 dark:text-slate-200">Brake line connection &mdash; <span class="italic font-medium">check for leaks</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">g)</span>
              <span class="text-slate-800 dark:text-slate-200">Slip marks &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">h)</span>
              <span class="text-slate-800 dark:text-slate-200">Chocks &mdash; <span class="italic font-medium">remove</span></span>
            </div>
          </div>

          <!-- NOTA TÉCNICA BLUE TEAM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>VERIFICACIÓN DE NEUMÁTICOS Y FRENOS:</span>
            </strong>
            <div>Verifique que la presión se mantenga en 2.5 bar (36 psi). Examine visualmente el desgaste simétrico de la banda de rodadura y la ausencia de cortes o lonas al descubierto. Asegúrese de que no existen restos de líquido hidráulico en la llanta interior.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Tren Principal Derecho</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Pata de amortiguación de fibra, disco de freno, latiguillo hidráulico flexible, marca de resbalamiento en neumático (2.5 bar / 36 psi) y retirada de calzos antes del remolque.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.7 Inspección Exterior VI: Morro, Aceites, Hélice y Tren de Morro</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.1 II. Walk-Around Check · Item 8. Front Fuselage (Ítems a - q)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.1 II. 8. FRONT FUSELAGE (a - q)</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-8/9</span>
          </div>

          <!-- LISTA VERBATIM AFM (17 ÍTEMS a - q) -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">8. Front fuselage:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine oil level &mdash; <span class="italic font-medium">check dipstick (inspection hole in the upper cowling)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">Gearbox oil level &mdash; <span class="italic font-medium">check visually (inspection hole in the lower cowling)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Cowling &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">5 air intakes &mdash; <span class="italic font-medium">clear</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">Propeller &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">f)</span>
              <span class="text-slate-800 dark:text-slate-200">Spinner including attachment screws &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">g)</span>
              <span class="text-slate-800 dark:text-slate-200">Nose landing gear strut &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">h)</span>
              <span class="text-slate-800 dark:text-slate-200">Gear strut fairing (if installed) &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">i)</span>
              <span class="text-slate-800 dark:text-slate-200">Winter Baffle (if installed) &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">j)</span>
              <span class="text-slate-800 dark:text-slate-200">Tie-down (if installed) &mdash; <span class="italic font-medium">check, clear</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">k)</span>
              <span class="text-slate-800 dark:text-slate-200">Tire and wheel &mdash; <span class="italic font-medium">visual inspection, check slip marks</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">l)</span>
              <span class="text-slate-800 dark:text-slate-200">Wear, tread depth of tire &mdash; <span class="italic font-medium">check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">m)</span>
              <span class="text-slate-800 dark:text-slate-200">Wheel fairing &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">n)</span>
              <span class="text-slate-800 dark:text-slate-200">Tow bar &mdash; <span class="italic font-medium">removed</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">o)</span>
              <span class="text-slate-800 dark:text-slate-200">Tire inflation pressure (2.0 bar / 29 psi) &mdash; <span class="italic font-medium">check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">p)</span>
              <span class="text-slate-800 dark:text-slate-200">Chocks &mdash; <span class="italic font-medium">remove</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">q)</span>
              <span class="text-slate-800 dark:text-slate-200">Exhaust &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
          </div>

          <!-- AVISOS AFM VERBATIM -->
          <div class="space-y-1 shrink-0">
            <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs">
              <strong class="text-amber-700 dark:text-amber-400 uppercase tracking-wide text-xs">AFM CAUTION (Engine Oil):</strong>
              Do not check the engine oil level within 5 minutes after engine shut down (after 5 min 80 %, after 15 min 90 %, after 30 min 100 % has returned). Do not overfill!
            </div>
            <div class="p-2 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[11px] leading-tight shadow-2xs">
              <strong class="text-rose-700 dark:text-rose-400 uppercase tracking-wide text-xs">AFM WARNING (Propeller):</strong>
              Never move the propeller by hand while ENGINE MASTER switch is ON, nor immediately after operation while OFF (remaining pressure in the rail). Serious injury may result!
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">MIRILLAS DE ACEITE Y MORRO</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">1. Aceite de Motor (Varilla):</strong>
            Comprobar nivel por la compuerta superior del capó. Rango min: 4.5 l, max: 6.0 l. Esperar mínimo 5-15 min tras parada para lectura real.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">2. Mirilla Reductora (Gearbox):</strong>
            Inspeccionar nivel visualmente por la mirilla circular en el capó inferior. El aceite debe cubrir entre la mitad y tres cuartos de la mirilla.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">3. Presión Rueda de Morro:</strong>
            Presión nominal de 2.0 bar (29 psi) (frente a 2.5 bar / 36 psi en las principales). Retirar barra de remolque (tow bar) obligatoriamente.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">5 Tomas de Aire Libres</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Compruebe libres de insectos u hojas: tomas de radiador de agua, intercooler, radiador de aceite, admisión de motor y calefacción de cabina.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.8 Inspección Exterior VII: Gascolator y Bajos del Fuselaje</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.1 II. Walk-Around Check · Item 8. Underside (Ítems r - u)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.1 II. 8. UNDERSIDE (r - u)</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-10</span>
          </div>

          <!-- LISTA VERBATIM AFM (4 ÍTEMS r - u) -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">Underside:</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">r)</span>
              <span class="text-slate-800 dark:text-slate-200">Antennas (if fitted) &mdash; <span class="italic font-medium">visual inspection</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">s)</span>
              <span class="text-slate-800 dark:text-slate-200">Gascolator &mdash; <span class="italic font-medium">drain off to check for water and sediment (drain until no water comes out)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">t)</span>
              <span class="text-slate-800 dark:text-slate-200">Venting pipes &mdash; <span class="italic font-medium">check for blockage</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">u)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuselage underside &mdash; <span class="italic font-medium">check for excessive contamination particularly by oil, fuel, and other fluids</span></span>
            </div>
          </div>

          <!-- END OF CHECKLIST BADGE -->
          <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-700/60 text-emerald-900 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2">
            <span>✅</span>
            <span>END OF CHECKLIST · PRE-FLIGHT INSPECTION COMPLETE</span>
          </div>

          <!-- CAUTION OPERATIVA BLUE TEAM -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>PURGA DEL FILTRO PRINCIPAL (GASCOLATOR):</span>
            </strong>
            <div>El gascolator está ubicado en la parte inferior del motor, siendo el punto de decantación más bajo de todo el circuito antes de las bombas de inyección. Purgue siempre con un vaso transparente hasta verificar ausencia total de burbujas de agua y partículas de óxido o suciedad.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Bajos del Fuselaje y Drenaje</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Válvula de drenaje del gascolator en la panza del avión, tubos de venteo de vapores de combustible y batería, antenas de VHF/transponder inferiores y comprobación de ausencia de residuos de aceite.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.9 Antes del Arranque del Motor (Before Starting Engine)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.2 Before Starting Engine · Ítems 1 al 19 Oficiales</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.2 BEFORE STARTING ENGINE</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-11/12</span>
          </div>

          <!-- LISTA VERBATIM AFM (19 ÍTEMS 1 - 19) -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.2 Checklist:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Pre-flight inspection &mdash; <span class="italic font-medium">complete</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Rudder pedals &mdash; <span class="italic font-medium">adjusted and locked</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Passengers &mdash; <span class="italic font-medium">instructed</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">Safety harnesses &mdash; <span class="italic font-medium">all on and fastened</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">5.</span>
              <span class="text-slate-800 dark:text-slate-200">Rear door &mdash; <span class="italic font-medium">closed and locked</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">6.</span>
              <span class="text-slate-800 dark:text-slate-200">Front canopy &mdash; <span class="italic font-medium">Position 1 or 2 ("cooling gap")</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">7.</span>
              <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">set</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">8.</span>
              <span class="text-slate-800 dark:text-slate-200">Flight controls &mdash; <span class="italic font-medium">free movement</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">9.</span>
              <span class="text-slate-800 dark:text-slate-200">Trim wheel &mdash; <span class="italic font-medium">T/O</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">10.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">check IDLE</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">11.</span>
              <span class="text-slate-800 dark:text-slate-200">Friction device on power lever &mdash; <span class="italic font-medium">adjusted</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">12.</span>
              <span class="text-slate-800 dark:text-slate-200">Alternate air &mdash; <span class="italic font-medium">check CLOSED</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">13.</span>
              <span class="text-slate-800 dark:text-slate-200">Alternate static valve &mdash; <span class="italic font-medium">check CLOSED</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">14.</span>
              <span class="text-slate-800 dark:text-slate-200">AVIONIC MASTER &mdash; <span class="italic font-medium">check OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">15.</span>
              <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">16.</span>
              <span class="text-slate-800 dark:text-slate-200">Annunciator panel / engine instruments &mdash; <span class="italic font-medium">check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">17.</span>
              <span class="text-slate-800 dark:text-slate-200">Acknowledge button &mdash; <span class="italic font-medium">press</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">18.</span>
              <span class="text-slate-800 dark:text-slate-200">WATER LEVEL caution light &mdash; <span class="italic font-medium">check OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">19.</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel temperature &mdash; <span class="italic font-medium">check</span></span>
            </div>
          </div>

          <!-- WARNING COMBUSTIBLE DIÉSEL AFM -->
          <div class="p-2 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-rose-700 dark:text-rose-400 uppercase tracking-wide text-xs">AFM WARNING (Diesel Fuel Temperature):</strong>
            If Diesel Fuel or blend is used, the engine must NOT be started if fuel temperature is flashing (&lt; -5 °C / +23 °F) or below -5 °C on G1000. Safe engine operation cannot be ensured and the engine can stop!
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CABINA Y SISTEMAS ELÉCTRICOS</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Canopy Cooling Gap:</strong>
            La cúpula dispone de dos posiciones de ventilación para rodaje en tierra con calor. Verifique que no queden cinturones o prendas atrapadas en el marco antes de fijar la palanca.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Protección de Aviónica:</strong>
            Mantener el AVIONIC MASTER en OFF durante el arranque protege las pantallas G1000 y radios contra picos transitorios de tensión generados por el motor de arranque.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Aviso WATER LEVEL:</strong>
            La luz de aviso ámbar WATER LEVEL apagada garantiza nivel suficiente de refrigerante líquido en el vaso de expansión del motor Thielert 1.7 / 2.0.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Verificación de Parámetros Pre-Start</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Batería principal &gt; 12 V, comprobación de luces de aviso del annunciator panel y pulsación del botón ACK (Acknowledge) para silenciar el test acústico.
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
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.3 Starting Engine · Pasos Oficiales y Ciclo de Arrancador</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.3 STARTING ENGINE</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-13/14</span>
          </div>

          <!-- LISTA VERBATIM AFM (ÍTEMS 1 - 9) -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Checklist:</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Strobe light (ACL) &mdash; <span class="italic font-medium">ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">check IDLE</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">ON, wait until GLOW indication extinguishes</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">START</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
              <span class="text-slate-800 dark:text-slate-200">Oil pressure &mdash; <span class="italic font-medium">check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">6.</span>
              <span class="text-slate-800 dark:text-slate-200">Warm up &mdash; <span class="italic font-medium">IDLE for 2 minutes</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">7.</span>
              <span class="text-slate-800 dark:text-slate-200">Warm up &mdash; <span class="italic font-medium">1400 RPM until oil temperature and coolant temperature are in the green range</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">8.</span>
              <span class="text-slate-800 dark:text-slate-200">Annunciator panel / engine instruments &mdash; <span class="italic font-medium">check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">9.</span>
              <span class="text-slate-800 dark:text-slate-200">Acknowledge button &mdash; <span class="italic font-medium">press</span></span>
            </div>
          </div>

          <!-- AVISOS AFM VERBATIM (STARTER DUTY CYCLE Y OIL PRESSURE) -->
          <div class="space-y-1 shrink-0">
            <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs">
              <strong class="text-amber-700 dark:text-amber-400 uppercase tracking-wide text-xs">AFM CAUTION (Starter Motor Duty Cycle):</strong>
              Do not operate the starter motor for more than 10 seconds. After operating the starter motor, let it cool off for 20 seconds. After 6 attempts to start the engine, let the starter cool off for half an hour.
            </div>
            <div class="p-2 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[11px] leading-tight shadow-2xs">
              <strong class="text-rose-700 dark:text-rose-400 uppercase tracking-wide text-xs">AFM WARNING (Oil Pressure Limit 3s):</strong>
              If the oil pressure has not moved from the red range within 3 seconds after starting, set ENGINE MASTER switch to OFF immediately and investigate problem. (Cold engine oil pressure may reach 6.5 bar for max 20 seconds).
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">OPERACIÓN DIÉSEL FADEC</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Indicación GLOW (Bujías):</strong>
            Al conectar el ENGINE MASTER, el FADEC activa el calentamiento de las bujías de incandescencia. Espere a que la luz GLOW se apague por completo en el panel antes de accionar la llave START.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Cronograma de Calentamiento:</strong>
            1. Mantener ralentí (IDLE, aprox. 890 RPM) durante 2 minutos completos para estabilizar la lubricación.<br/>
            2. Ajustar 1400 RPM hasta que temperatura de aceite (&gt; 50 °C) y refrigerante (&gt; 60 °C) alcancen el arco verde.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Protección del Arrancador</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            10 s arranque máximo &rarr; 20 s enfriamiento. Tras 6 ciclos, descanso obligatorio de 30 minutos para evitar quemar el devanado eléctrico.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.11 Antes del Rodaje y Rodaje (Before Taxiing & Taxiing)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.4 Before Taxiing & 4A.3.5 Taxiing · Procedimientos Oficiales</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.4 BEFORE TAXIING & 4A.3.5 TAXIING</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-15/16</span>
          </div>

          <!-- SECCIÓN 4A.3.4 BEFORE TAXIING (10 ÍTEMS) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.4 Before Taxiing:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">AVIONIC MASTER &mdash; <span class="italic font-medium">ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Electrical equipment &mdash; <span class="italic font-medium">ON as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">UP - T/O - LDG - T/O (indicator and visual check)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">Flight instruments and avionics &mdash; <span class="italic font-medium">set, test function, as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">5.</span>
              <span class="text-slate-800 dark:text-slate-200">Flood light &mdash; <span class="italic font-medium">ON, test function, as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">6.</span>
              <span class="text-slate-800 dark:text-slate-200">Pitot heating &mdash; <span class="italic font-medium">ON, test function</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">7.</span>
              <span class="text-slate-800 dark:text-slate-200">Pitot heating &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">8.</span>
              <span class="text-slate-800 dark:text-slate-200">Strobe lights (ACLs) &mdash; <span class="italic font-medium">check ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">9.</span>
              <span class="text-slate-800 dark:text-slate-200">Position lights, landing and taxi lights &mdash; <span class="italic font-medium">ON, test function, as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">10.</span>
              <span class="text-slate-800 dark:text-slate-200">Idle RPM &mdash; <span class="italic font-medium">check, 890 &plusmn; 20 RPM</span></span>
            </div>
          </div>

          <!-- SECCIÓN 4A.3.5 TAXIING (3 ÍTEMS) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.5 Taxiing:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">release</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Brakes &mdash; <span class="italic font-medium">test on moving off</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Flight instrumentation and avionics (particularly directional gyro and turn and bank indicator) &mdash; <span class="italic font-medium">check for correct indications</span></span>
            </div>
          </div>

          <!-- CAUTIONS AFM VERBATIM -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 uppercase tracking-wide text-xs">AFM CAUTION (Taxiing & Brakes):</strong>
            Avoid prolonged permanent braking while taxiing (overheats brakes and may cause loss of brake capacity). When taxiing on a poor surface select the lowest possible RPM to avoid propeller damage.
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">COMPROBACIONES EN RODAJE</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Prueba de Frenos Inicial:</strong>
            Nada más iniciar el movimiento, desembrague el freno de estacionamiento y aplique ambos frenos de pie suavemente. Compruebe presión firme y detención uniforme sin deriva lateral.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Instrumentos en Viraje:</strong>
            Durante los giros de rodaje verifique: horizonte artificial estable, indicador de viraje (turn coordinator) señalando el sentido correcto y bola opuesta al giro, y rumbo del giróscopo/HSI aumentando o disminuyendo coherentemente.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Verificación de Ralentí FADEC</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Con la palanca de potencia en IDLE, compruebe que el motor estabiliza en 890 &plusmn; 20 RPM antes de iniciar las pruebas de motor en punto de espera.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.12 Antes del Despegue I: Cabina y Prueba a Plena Potencia</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.6 Before Take-Off · Ítems 1 al 16 (Configuración y Run-Up MAX 10s)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.6 BEFORE TAKE-OFF (Ítems 1 al 16)</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-17/18</span>
          </div>

          <!-- LISTA VERBATIM AFM (ÍTEMS 1 - 16) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.6 Checklist (Part 1):</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Position airplane into wind if possible</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">set</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Safety harnesses &mdash; <span class="italic font-medium">on and fastened</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">Rear door &mdash; <span class="italic font-medium">check closed and locked</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">5.</span>
              <span class="text-slate-800 dark:text-slate-200">Front canopy &mdash; <span class="italic font-medium">closed and locked</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">6.</span>
              <span class="text-slate-800 dark:text-slate-200">Door warning light (DOOR) &mdash; <span class="italic font-medium">check no indication</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">7.</span>
              <span class="text-slate-800 dark:text-slate-200">Engine instruments &mdash; <span class="italic font-medium">check in green range (except oil pressure may be in yellow range with warm engine at IDLE, and fuel temp in low yellow with JET Fuel)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">8.</span>
              <span class="text-slate-800 dark:text-slate-200">Circuit breakers &mdash; <span class="italic font-medium">check pressed in</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">9.</span>
              <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">check T/O</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">10.</span>
              <span class="text-slate-800 dark:text-slate-200">Trim &mdash; <span class="italic font-medium">check T/O</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">11.</span>
              <span class="text-slate-800 dark:text-slate-200">Flight controls &mdash; <span class="italic font-medium">free movement, correct sense</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">12.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">MAX for 10 seconds</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">13.</span>
              <span class="text-slate-800 dark:text-slate-200">Oil pressure &mdash; <span class="italic font-medium">check green range</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">14.</span>
              <span class="text-slate-800 dark:text-slate-200">RPM &mdash; <span class="italic font-medium">stabilizes at 2240 to 2300 RPM</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">15.</span>
              <span class="text-slate-800 dark:text-slate-200">LOAD indication &mdash; <span class="italic font-medium">stabilizes at 90 to 100 %</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">16.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
            </div>
          </div>

          <!-- WARNING COMBUSTIBLE DIÉSEL AFM -->
          <div class="p-2 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-rose-700 dark:text-rose-400 uppercase tracking-wide text-xs">AFM WARNING (Diesel Take-Off Fuel Temp):</strong>
            If operated with Diesel Fuel, fuel temperature on the left side must be in the green range (minimum +5 °C / +41 °F) before take-off!
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PARÁMETROS A PLENA POTENCIA (MAX 10s)</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">1. RPM Estabilizadas:</strong>
            El tacómetro debe estabilizar entre <strong>2240 y 2300 RPM</strong> gobernado por el FADEC.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">2. Carga del Motor (% LOAD):</strong>
            Debe indicar entre <strong>90 % y 100 %</strong>. En aeródromos con alta elevación o temperatura elevada (high density altitude), cargas inferiores al 90 % son normales según AFM.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">3. Presión de Aceite:</strong>
            Debe mantenerse firmemente dentro del arco verde durante toda la aceleración de 10 segundos.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Verificación de Cúpula y Puerta</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Luz DOOR apagada en anunciador: cerrojo de puerta trasera y palanca frontal aseguradas antes de iniciar la prueba automática de ECU.
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
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.6 Before Take-Off · Ítems 17 al 26 (Secuencia Automática ECU TEST)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.6 ECU TEST (Ítems 17 al 26)</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-19/20</span>
          </div>

          <!-- LISTA VERBATIM AFM (ÍTEMS 17 - 26) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">Secuencia ECU TEST:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">17.</span>
              <span class="text-slate-800 dark:text-slate-200">ECU TEST &mdash; <span class="italic font-medium">press and hold</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">18.</span>
              <span class="text-slate-800 dark:text-slate-200">Caution lights (ECU A, ECU B, CAUTION) &mdash; <span class="italic font-medium">blinking</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">19.</span>
              <span class="text-slate-800 dark:text-slate-200">'ECU BACKUP UNSAFE'-light &mdash; <span class="italic font-medium">blinking, if installed</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">20.</span>
              <span class="text-slate-800 dark:text-slate-200">Caution lights (ECU B, CAUTION) &mdash; <span class="italic font-medium">blinking</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">21.</span>
              <span class="text-slate-800 dark:text-slate-200">Propeller RPM &mdash; <span class="italic font-medium">cycling</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">22.</span>
              <span class="text-slate-800 dark:text-slate-200">Caution lights (ECU A, CAUTION) &mdash; <span class="italic font-medium">blinking</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">23.</span>
              <span class="text-slate-800 dark:text-slate-200">Propeller RPM &mdash; <span class="italic font-medium">cycling</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">24.</span>
              <span class="text-slate-800 dark:text-slate-200">Caution lights &mdash; <span class="italic font-medium">extinguished</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">25.</span>
              <span class="text-slate-800 dark:text-slate-200">'ECU BACKUP UNSAFE'-light &mdash; <span class="italic font-medium">extinguished</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">26.</span>
              <span class="text-slate-800 dark:text-slate-200">ECU TEST &mdash; <span class="italic font-medium">release</span></span>
            </div>
          </div>

          <!-- AVISOS AFM VERBATIM (IFR PROHIBITED Y CRITERIOS) -->
          <div class="space-y-1 shrink-0">
            <div class="p-2 rounded-xl border-l-4 border-rose-500 bg-rose-50/90 dark:bg-rose-950/30 text-rose-950 dark:text-rose-200 text-[11px] leading-tight shadow-2xs">
              <strong class="text-rose-700 dark:text-rose-400 uppercase tracking-wide text-xs">AFM WARNING (ECU Backup Unsafe):</strong>
              If caution lights or 'ECU BACKUP UNSAFE' do not illuminate, error in test. If 'ECU BACKUP UNSAFE' does not extinguish after test, backup battery lacks sufficient power. <strong>IFR-flights are prohibited!</strong>
            </div>
            <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs">
              <strong class="text-amber-700 dark:text-amber-400 uppercase tracking-wide text-xs">AFM CAUTION (Abort Flight on Error):</strong>
              The whole test procedure must be passed without any error. In case of an error terminate flight preparation even when the engine seems to run smoothly after the test procedure.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CRONOGRAMA DE AUTOPRUEBA FADEC</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5 uppercase text-xs">Fase 1 · Pulsar y Mantener:</strong>
            Al pulsar el botón ECU TEST (con palanca en IDLE), parpadean ECU A, ECU B, CAUTION y la luz ECU BACKUP UNSAFE.
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5 uppercase text-xs">Fase 2 · Canal B y Ciclo de Hélice:</strong>
            El FADEC conmuta al Canal B (parpadean ECU B y CAUTION). Las RPM de hélice ciclan automáticamente comprobando el gobernador.
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5 uppercase text-xs">Fase 3 · Canal A y Segundo Ciclo:</strong>
            El FADEC conmuta al Canal A (parpadean ECU A y CAUTION). Las RPM ciclan por segunda vez.
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5 uppercase text-xs">Fase 4 · Extinción y Liberación:</strong>
            Todas las luces se apagan y las RPM vuelven a ralentí (~890 RPM). En ese momento se libera el pulsador.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Regla Estricta Go/No-Go</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Si se suelta el botón antes de la extinción o el motor se cala durante el ciclo, aborte el vuelo inmediatamente.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.14 Antes del Despegue III: Conmutación Manual ECU Swap</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.6 Before Take-Off · Ítems 27 al 29 (Conmutación Manual ECU B)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.6 ECU SWAP (Ítems 27 al 29)</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-20</span>
          </div>

          <!-- LISTA VERBATIM AFM (ÍTEMS 27 - 29) -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">4A.3.6 ECU SWAP Checklist:</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">27.</span>
              <span class="text-slate-800 dark:text-slate-200">ECU SWAP &mdash; <span class="italic font-medium">ECU B</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">28.</span>
              <span class="text-slate-800 dark:text-slate-200">Engine &mdash; <span class="italic font-medium">check running without a change</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">29.</span>
              <span class="text-slate-800 dark:text-slate-200">ECU SWAP &mdash; <span class="italic font-medium">AUTOMATIC</span></span>
            </div>
          </div>

          <!-- NOTE AFM VERBATIM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>AFM NOTE (Engine Shake):</span>
            </strong>
            <div>When switching from one ECU to the other a slight shake of the engine may occur. In case of longer dropouts of the engine, or if the engine stops during the test, terminate flight preparation.</div>
          </div>

          <!-- CAUTION OPERATIVA -->
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>GUARDA DE SEGURIDAD DEL INTERRUPTOR:</span>
            </strong>
            <div>El conmutador ECU SWAP dispone de una tapa de protección roja con resorte. Al volver a AUTOMATIC, asegúrese de que la guarda queda completamente cerrada para impedir un accionamiento involuntario en vuelo.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ARQUITECTURA DE DOBLE CANAL FADEC</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Propósito de la Prueba ECU SWAP:</strong>
            Mientras que el botón ECU TEST realiza una autoprueba automática de sensores y solenoides, el interruptor manual ECU SWAP fuerza físicamente al motor a operar bajo el control exclusivo del Canal B.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Criterio de Aceptación:</strong>
            El motor debe continuar funcionando suavemente sin pérdida apreciable de potencia ni oscilación sostenida de RPM. Solo se tolera una leve vibración transitoria (slight shake) en el instante del cambio de relé.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Posición de Vuelo: AUTOMATIC</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Nunca despegue con el conmutador en ECU B. En caso de avería, el FADEC solo puede alternar automáticamente entre canales si el interruptor está en AUTOMATIC.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.15 Antes del Despegue IV: Calefacción Pitot, Luces y Pista</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.6 Before Take-Off · Ítems 30 al 32 (Preparación Final y Alineación)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.6 BEFORE TAKE-OFF (Ítems 30 al 32)</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-20</span>
          </div>

          <!-- LISTA VERBATIM AFM (ÍTEMS 30 - 32) -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">4A.3.6 Final Checklist:</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">30.</span>
              <span class="text-slate-800 dark:text-slate-200">Pitot heating &mdash; <span class="italic font-medium">ON, if required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">31.</span>
              <span class="text-slate-800 dark:text-slate-200">Landing light &mdash; <span class="italic font-medium">ON, if required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">32.</span>
              <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">release</span></span>
            </div>
          </div>

          <!-- BADGE DE CIERRE CHECKLIST -->
          <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-700/60 text-emerald-900 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2">
            <span>✅</span>
            <span>END OF CHECKLIST · BEFORE TAKE-OFF COMPLETE</span>
          </div>

          <!-- NOTA OPERATIVA BLUE TEAM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>LINE-UP CHECK Y ALINEACIÓN DE PISTA:</span>
            </strong>
            <div>Tras recibir autorización de entrada a pista: verifique aproximación final libre, compruebe que el rumbo de pista coincide con la brújula y el giróscopo/HSI, active transponder en ALT y revise que los flaps permanezcan en T/O y el compensador en posición T/O.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BRIEFING DE DESPEGUE (DEPARTURE BRIEFING)</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">1. Anormalidad en Carrera de Despegue:</strong>
            Potencia IDLE inmediatamente, frenada máxima en pista disponible, mantener eje y desalojar notificando a torre.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">2. Fallo de Motor Tras Despegue (&lt; 800 ft AGL):</strong>
            Actitud de morro abajo, velocidad de planeo 73 KIAS (flaps T/O) o 71 KIAS, aterrizar en el campo disponible frente a nosotros en un arco no superior a 30° a cada lado. <strong>¡Nunca intentar virar de vuelta a pista!</strong>
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">3. Fallo Por Encima de Altitud de Seguridad (&gt; 800 ft AGL):</strong>
            Adoptar 73 KIAS, evaluar campo idóneo o tráfico en circuito para aterrizaje forzoso según viento.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Listos para el Despegue</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Comprobaciones 1 a 32 completadas estrictamente bajo procedimiento oficial AFM.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.16 Velocidades Operativas de Vuelo (Airspeeds for Normal Operations)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.2 Airspeeds for Normal Operating Procedures · Matriz Oficial por Pesos</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Tabla Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.2 AIRSPEEDS FOR NORMAL OPERATING PROCEDURES</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-2</span>
          </div>

          <!-- TABLA OFICIAL VERBATIM AFM -->
          <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
            <table class="w-full text-xs text-left border-collapse">
              <thead>
                <tr class="bg-slate-100 dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300 font-bold border-b border-slate-200 dark:border-slate-700">
                  <th class="py-2 px-2.5">Operating Airspeed</th>
                  <th class="py-2 px-2 text-center">850 kg<br/><span class="text-[10px] font-normal text-slate-500 dark:text-slate-400">(1874 lb)</span></th>
                  <th class="py-2 px-2 text-center">1000 kg<br/><span class="text-[10px] font-normal text-slate-500 dark:text-slate-400">(2205 lb)</span></th>
                  <th class="py-2 px-2 text-center bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300">1150 kg<br/><span class="text-[10px] font-normal text-sky-600 dark:text-sky-400">(2535 lb MTOW)</span></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700 font-mono text-[11px] sm:text-xs">
                <tr>
                  <td class="py-2 px-2.5 font-sans font-medium text-slate-800 dark:text-slate-200">Airspeed for rotation (Take-off run, v<sub>R</sub>) (Flaps T/O)</td>
                  <td class="py-2 px-2 text-center text-slate-700 dark:text-slate-300 font-bold">49 KIAS</td>
                  <td class="py-2 px-2 text-center text-slate-700 dark:text-slate-300 font-bold">55 KIAS</td>
                  <td class="py-2 px-2 text-center bg-sky-50/60 dark:bg-sky-950/20 text-[#0B2E59] dark:text-sky-200 font-extrabold text-[13px]">59 KIAS</td>
                </tr>
                <tr>
                  <td class="py-2 px-2.5 font-sans font-medium text-slate-800 dark:text-slate-200">Airspeed for take-off climb (best rate-of-climb v<sub>Y</sub>) (Flaps T/O)</td>
                  <td class="py-2 px-2 text-center text-slate-700 dark:text-slate-300 font-bold">54 KIAS</td>
                  <td class="py-2 px-2 text-center text-slate-700 dark:text-slate-300 font-bold">60 KIAS</td>
                  <td class="py-2 px-2 text-center bg-sky-50/60 dark:bg-sky-950/20 text-[#0B2E59] dark:text-sky-200 font-extrabold text-[13px]">66 KIAS</td>
                </tr>
                <tr>
                  <td class="py-2 px-2.5 font-sans font-medium text-slate-800 dark:text-slate-200">Airspeed for cruise climb (Flaps UP)</td>
                  <td class="py-2 px-2 text-center text-slate-700 dark:text-slate-300 font-bold">60 KIAS</td>
                  <td class="py-2 px-2 text-center text-slate-700 dark:text-slate-300 font-bold">68 KIAS</td>
                  <td class="py-2 px-2 text-center bg-sky-50/60 dark:bg-sky-950/20 text-[#0B2E59] dark:text-sky-200 font-extrabold text-[13px]">73 KIAS</td>
                </tr>
                <tr>
                  <td class="py-2 px-2.5 font-sans font-medium text-slate-800 dark:text-slate-200">Approach speed for normal landing (Flaps LDG)</td>
                  <td class="py-2 px-2 text-center text-slate-700 dark:text-slate-300 font-bold">58 KIAS</td>
                  <td class="py-2 px-2 text-center text-slate-700 dark:text-slate-300 font-bold">63 KIAS</td>
                  <td class="py-2 px-2 text-center bg-sky-50/60 dark:bg-sky-950/20 text-[#0B2E59] dark:text-sky-200 font-extrabold text-[13px]">71 KIAS</td>
                </tr>
                <tr>
                  <td class="py-2 px-2.5 font-sans font-medium text-slate-800 dark:text-slate-200">Minimum speed during go-around (Flaps T/O)</td>
                  <td class="py-2 px-2 text-center text-slate-700 dark:text-slate-300 font-bold">54 KIAS</td>
                  <td class="py-2 px-2 text-center text-slate-700 dark:text-slate-300 font-bold">60 KIAS</td>
                  <td class="py-2 px-2 text-center bg-sky-50/60 dark:bg-sky-950/20 text-[#0B2E59] dark:text-sky-200 font-extrabold text-[13px]">66 KIAS</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- NOTA VIENTO CRUZADO DEMOSTRADO AFM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>VIENTO CRUZADO MÁXIMO DEMOSTRADO:</span>
            </strong>
            <div>La componente máxima de viento cruzado demostrada para despegue y aterrizaje según el AFM Sección 4A.2 es de <strong>20 nudos (10.3 m/s)</strong>. No constituye una limitación estructural absoluta pero sí el límite ensayado en certificación.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ANÁLISIS OPERATIVO DE VELOCIDADES</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Efecto del Peso en las Velocidades:</strong>
            A masa reducida (850 kg para vuelo solo), la velocidad de rotación disminuye 10 nudos (de 59 a 49 KIAS) y la de aproximación de 71 a 58 KIAS, reduciendo sustancialmente las distancias de pista requeridas.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Aproximación a MTOW (71 KIAS):</strong>
            En DA40 TDI a peso máximo (1150 kg), volar la aproximación con Flaps LDG a 71 KIAS garantiza el margen de seguridad reglamentario de 1.3 v<sub>SO</sub>. Excesos de velocidad alargan enormemente la recogida (flare).
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Resumen Mnemotécnico @ 1150 kg</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 font-mono">
            Rotación: <strong>59 KIAS</strong> &middot; Ascenso Inicial: <strong>66 KIAS</strong> &middot; Ascenso Crucero: <strong>73 KIAS</strong> &middot; Final LDG: <strong>71 KIAS</strong>
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.17 Despegue y Ascenso (Take-Off & Climb)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.7 Take-Off & 4A.3.8 Climb · Procedimientos Oficiales del AFM</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.7 TAKE-OFF & 4A.3.8 CLIMB</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-21/23</span>
          </div>

          <!-- SECCIÓN 4A.3.7 TAKE-OFF (7 ÍTEMS) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.7 Normal Take-Off Procedure:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Transponder &mdash; <span class="italic font-medium">ON / ALT</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">MAX</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Elevator &mdash; <span class="italic font-medium">neutral</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">Rudder &mdash; <span class="italic font-medium">maintain direction</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">5.</span>
              <span class="text-slate-800 dark:text-slate-200">Nose wheel lift-off &mdash; <span class="italic font-medium">at v<sub>R</sub> = 59 KIAS (1150 kg) / 55 KIAS (1000 kg) / 49 KIAS (850 kg)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">6.</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed for initial climb &mdash; <span class="italic font-medium">66 KIAS (Flaps T/O)</span></span>
            </div>
            <div lang="en" class="text-[11px] text-slate-500 dark:text-slate-400 pl-4 font-semibold">Above a safe height:</div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">7.</span>
              <span class="text-slate-800 dark:text-slate-200">Landing light &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
          </div>

          <!-- SECCIÓN 4A.3.8 CLIMB -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.8 Climb Procedures:</strong>
            <div class="text-[11px] font-bold text-sky-700 dark:text-sky-300">Procedure for Best Rate of Climb:</div>
            <div lang="en" class="text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 pl-2">
              1. Flaps T/O &middot; 2. Airspeed 66 KIAS (1150 kg) / 60 KIAS (1000 kg) / 54 KIAS (850 kg) &middot; 3. Power lever MAX &middot; 4. Engine instruments in green range &middot; 5. Trim as required
            </div>
            <div class="text-[11px] font-bold text-sky-700 dark:text-sky-300 pt-1">Cruise Climb:</div>
            <div lang="en" class="text-[11px] sm:text-xs text-slate-800 dark:text-slate-200 pl-2">
              1. Flaps UP &middot; 2. Airspeed 73 KIAS (1150 kg) / 68 KIAS (1000 kg) / 60 KIAS (850 kg) &middot; 3. Power lever MAX &middot; 4. Engine instruments in green range &middot; 5. Trim as required
            </div>
          </div>

          <!-- CAUTION REFRIGERACIÓN EN ASCENSO AFM -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 uppercase tracking-wide text-xs">AFM CAUTION (Engine Cooling in Climb):</strong>
            If oil temperature and/or coolant temperature reaches the yellow range during climb, continue flight with airspeed increased by 5 kts and power reduced by 10 % for better cooling.
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PERFIL DE DESPEGUE Y TRANSICIÓN</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Rotación y Despegue:</strong>
            Aplicar palanca de gases a MAX suavemente en 2-3 s. Mantener eje de pista con timón de dirección. A 59 KIAS tirar suavemente para levantar la rueda de morro y adoptar actitud de ascenso para 66 KIAS con Flaps T/O.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Transición a Ascenso de Crucero:</strong>
            Al superar la altitud de seguridad (mínimo 300-500 ft AGL): acelerar a 73 KIAS, subir flaps a UP, apagar landing light y ajustar compensador para aliviar esfuerzos de palanca.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Verificación Temprana de Motor</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            AFM Warning: compruebe parámetros de motor al inicio de la carrera para abortar a tiempo si RPM &lt; 2240 o LOAD &lt; 90 %.
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
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.9 Cruise & 4A.3.10 Fuel Transfer · Bomba de Trasvase (60 US gal/h)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.9 CRUISE & 4A.3.10 FUEL TRANSFER</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-24/25</span>
          </div>

          <!-- SECCIÓN 4A.3.9 CRUISE (4 ÍTEMS) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.9 Cruise Checklist:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">UP</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">performance as required (70 % recommended)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Trim &mdash; <span class="italic font-medium">as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel transfer &mdash; <span class="italic font-medium">repeat as required (in accordance with 4A.3.10)</span></span>
            </div>
          </div>

          <!-- SECCIÓN 4A.3.10 FUEL TRANSFER (2 ÍTEMS) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.10 Fuel Transfer Procedure:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel transfer switch &mdash; <span class="italic font-medium">ON</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel transfer switch &mdash; <span class="italic font-medium">OFF, if required</span></span>
            </div>
          </div>

          <!-- CAUTIONS Y NOTAS AFM VERBATIM -->
          <div class="space-y-1 shrink-0">
            <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs">
              <strong class="text-amber-700 dark:text-amber-400 uppercase tracking-wide text-xs">AFM CAUTION (Main Tank Feed):</strong>
              During normal operation fuel is taken from the main tank only. Therefore fuel must be transferred from auxiliary tank to main tank. The transfer rate is approx. 60 US gal/h (227 liters/h).
            </div>
            <div class="p-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight shadow-2xs">
              <strong class="text-sky-700 dark:text-sky-400 uppercase tracking-wide text-xs">AFM NOTE (Automatic Turn-Off & Blinking):</strong>
              The transfer pump turns off automatically to avoid overfilling main tank. Status light is illuminated only while running. <strong>If status light blinks, pump must be switched OFF!</strong>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SISTEMA DE COMBUSTIBLE DIÉSEL</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Alimentación Unidireccional:</strong>
            El motor DA40 TDI solo consume del depósito principal izquierdo (MAIN). El depósito derecho (AUX) almacena reserva y no alimenta directamente las bombas de inyección.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Estrategia de Trasvase:</strong>
            Cuando el depósito MAIN baje de 10-12 US galones, conecte el interruptor FUEL TRANSFER. Con una tasa de 60 US gal/h, el trasvase completo toma unos pocos minutos. Verifique que sube la cantidad en MAIN y baja en AUX.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Ajuste de Crucero Recomendado</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Ajuste el mando de potencia a <strong>70 % LOAD</strong> para un crucero económico óptimo con un consumo de ~18-20 l/h (4.8 - 5.3 US gal/h).
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.19 Descenso y Aproximación Final para el Aterrizaje</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.11 Descent & 4A.3.12 Landing Approach · Velocidad Final Oficial 71 KIAS</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.11 DESCENT & 4A.3.12 LANDING APPROACH</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-26/27</span>
          </div>

          <!-- SECCIÓN 4A.3.11 DESCENT (2 ÍTEMS) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.11 Descent Checklist:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">as required (below 5000 ft); above 5000 ft not less than 30 %</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">clear engine occasionally</span></span>
            </div>
          </div>

          <!-- SECCIÓN 4A.3.12 LANDING APPROACH (9 ÍTEMS) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.12 Landing Approach Checklist:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Safety harnesses &mdash; <span class="italic font-medium">check fastened &amp; tightened</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">reduce to operate flaps (108 KIAS)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">T/O</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">Trim &mdash; <span class="italic font-medium">as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">5.</span>
              <span class="text-slate-800 dark:text-slate-200">Landing light &mdash; <span class="italic font-medium">as required</span></span>
            </div>
            <div lang="en" class="text-[11px] text-slate-500 dark:text-slate-400 pl-4 font-semibold">Before landing:</div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">6.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">7.</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">reduce to operate flaps (91 KIAS)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">8.</span>
              <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">LDG</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">9.</span>
              <span class="text-slate-800 dark:text-slate-200">Approach speed &mdash; <span class="italic font-medium font-bold text-[#0B2E59] dark:text-sky-300">71 KIAS (1150 kg) / 67 KIAS (1092 kg) / 63 KIAS (1000 kg) / 58 KIAS (850 kg)</span></span>
            </div>
          </div>

          <!-- CAUTIONS AFM VERBATIM -->
          <div class="space-y-1 shrink-0">
            <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs">
              <strong class="text-amber-700 dark:text-amber-400 uppercase tracking-wide text-xs">AFM CAUTION (Engine Combustion in Descent):</strong>
              Engine combustion may stop unrecognized during descents with idle power at altitudes above 5000 ft with OAT below -10 °C. Maintain not less than 30 % power!
            </div>
            <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs">
              <strong class="text-amber-700 dark:text-amber-400 uppercase tracking-wide text-xs">AFM CAUTION (Turbulence & Flare):</strong>
              In conditions of strong wind, wind shear or turbulence, a higher approach speed should be selected. Note that higher speeds significantly prolong landing distance!
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CIRCUITO DE TRÁFICO Y VELOCIDADES</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Tramo Viento en Cola:</strong>
            Velocidad reducida por debajo de <strong>108 KIAS</strong> (arco blanco extendido). Extender Flaps a <strong>T/O</strong>. Comprobar arneses de seguridad y encender luz de aterrizaje.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Tramo Base y Final:</strong>
            Reducir por debajo de <strong>91 KIAS</strong> (límite de Flaps LDG). Extender Flaps a <strong>LDG</strong>. Estabilizar senda y velocidad en <strong>71 KIAS</strong> a masa máxima de 1150 kg (63 KIAS a 1000 kg).
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Toma de Contacto</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Gases a IDLE sobre el umbral, recoger suavemente posando las ruedas principales primero y manteniendo el morro elevado para frenado aerodinámico.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.20 Maniobra de Escape: Motor y al Aire (Go-Around)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.13 Go-Around · Procedimiento Oficial del AFM</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2.5 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.13 GO-AROUND</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-28</span>
          </div>

          <!-- LISTA VERBATIM AFM (5 ÍTEMS) -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">4A.3.13 Go-Around Checklist:</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">MAX</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium font-bold text-[#0B2E59] dark:text-sky-300">66 KIAS (1150 kg) / 60 KIAS (1000 kg) / 54 KIAS (850 kg)</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">T/O</span></span>
            </div>
            <div lang="en" class="text-[11px] text-slate-500 dark:text-slate-400 pl-6 font-semibold">Above a safe height:</div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium font-bold text-[#0B2E59] dark:text-sky-300">73 KIAS</span></span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">5.</span>
              <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">UP</span></span>
            </div>
          </div>

          <!-- END OF CHECKLIST BADGE -->
          <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-700/60 text-emerald-900 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2">
            <span>✅</span>
            <span>END OF CHECKLIST · GO-AROUND COMPLETE</span>
          </div>

          <!-- NOTA OPERATIVA BLUE TEAM -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>REGLA MNEMOTÉCNICA: POTENCIA, ACTITUD, FLAPS:</span>
            </strong>
            <div>1. <strong>Potencia:</strong> Palanca a MAX sin vacilar.<br/>
            2. <strong>Actitud:</strong> Levantar el morro para frenar el descenso y adoptar velocidad de mejor régimen (66 KIAS a 1150 kg).<br/>
            3. <strong>Flaps:</strong> Retraer de LDG a T/O inmediatamente. No subirlos a UP hasta tener tasa positiva y superar altitud de seguridad (mínimo 300 ft AGL) a 73 KIAS.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CRITERIOS DE APROXIMACIÓN FRUSTRADA</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Criterios Mandatarios de Go-Around:</strong>
            - Aproximación no estabilizada a 500 ft AGL en VMC (velocidad &plusmn;5 kt, senda no alineada).<br/>
            - Pista ocupada por otra aeronave, vehículo o fauna.<br/>
            - Ráfagas severas o cizalladura súbita en corta final.<br/>
            - Instrucción expresa de torre ("Motor y al aire").
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Retracción Progresiva de Flaps:</strong>
            Nunca retraiga los flaps directamente de LDG a UP. Con el motor a pleno empuje, pasar inmediatamente a Flaps UP causaría una pérdida brusca de sustentación y hundimiento contra el suelo.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Franqueamiento de Obstáculos</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Mantenga 66 KIAS hasta franquear cualquier obstáculo de salida antes de acelerar a 73 KIAS para ascenso en ruta.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.21 Tras el Aterrizaje, Parada de Motor y Post-Vuelo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.14 After Landing, 4A.3.15 Engine Shut-Down & 4A.3.16 Post-Flight</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.14, 4A.3.15 & 4A.3.16 FINAL CHECKLISTS</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-28/29</span>
          </div>

          <!-- SECCIÓN 4A.3.14 AFTER LANDING (7 ÍTEMS) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.14 After Landing:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Brakes &mdash; <span class="italic font-medium">as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Transponder &mdash; <span class="italic font-medium">OFF / STBY</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">Pitot heating &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">5.</span>
              <span class="text-slate-800 dark:text-slate-200">Avionics &mdash; <span class="italic font-medium">as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">6.</span>
              <span class="text-slate-800 dark:text-slate-200">Lights &mdash; <span class="italic font-medium">as required</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">7.</span>
              <span class="text-slate-800 dark:text-slate-200">Flaps &mdash; <span class="italic font-medium">UP</span></span>
            </div>
          </div>

          <!-- SECCIÓN 4A.3.15 ENGINE SHUT-DOWN (7 ÍTEMS) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.15 Engine Shut-Down:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">set</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE for 2 minutes</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Engine instruments &mdash; <span class="italic font-medium">check</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">AVIONIC MASTER &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">5.</span>
              <span class="text-slate-800 dark:text-slate-200">Electrical consumers &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">6.</span>
              <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">7.</span>
              <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">OFF</span></span>
            </div>
          </div>

          <!-- SECCIÓN 4A.3.16 POST-FLIGHT INSPECTION (8 ÍTEMS) -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.16 Post-Flight Inspection:</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">1-3.</span>
              <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER OFF &middot; ELECTRIC MASTER ON &middot; AVIONIC MASTER ON</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">ELT &mdash; <span class="italic font-medium">check activated: listen on 121.5 MHz</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">5-6.</span>
              <span class="text-slate-800 dark:text-slate-200">AVIONIC MASTER OFF &middot; ELECTRIC MASTER OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">7.</span>
              <span class="text-slate-800 dark:text-slate-200">Parking brake &mdash; <span class="italic font-medium">release, use chocks</span></span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.2 text-[11px] sm:text-xs leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">8.</span>
              <span class="text-slate-800 dark:text-slate-200">Airplane &mdash; <span class="italic font-medium">moor, if unsupervised for extended period</span></span>
            </div>
          </div>

          <!-- CAUTION TURBOCOMPRESOR AFM -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 uppercase tracking-wide text-xs">AFM CAUTION (2 Min Turbo Cooling):</strong>
            Before shut-down the engine must run for at least 2 minutes with power lever at IDLE to avoid heat damage of the turbo charger!
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">REFRIGERACIÓN Y COMPROBACIÓN ELT</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Regla Mandataria de 2 Minutos IDLE:</strong>
            El turbocompresor gira a más de 100.000 RPM a elevadísima temperatura. Apagar el motor bruscamente detiene el flujo de aceite de lubricación, provocando la coquización del aceite en los cojinetes del eje y la destrucción prematura del turbo.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Escucha del ELT en 121.5 MHz:</strong>
            Tras la parada del motor, active brevemente la radio VHF en 121.5 MHz para cerciorarse de que una toma dura o maniobra no haya disparado inadvertidamente la baliza de emergencia (Emergency Locator Transmitter).
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Liberación de Frenos en Rampa</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Calce las ruedas principales y libere el freno de estacionamiento para evitar que los discos calientes sufran deformación térmica o las pastillas se queden adheridas.
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.22 Procedimientos Especiales del AFM (Special Procedures)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">4A.3.17 Flight in Rain, 4A.3.18 Refueling & 4A.3.19 High Altitude</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Checklist Oficial Verbatim AFM -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">4A.3.17, 4A.3.18 & 4A.3.19 SPECIAL PROCEDURES</span>
            <span class="text-[10px] bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300 px-2 py-0.5 rounded font-mono font-bold">AFM 4A-30</span>
          </div>

          <!-- SECCIÓN 4A.3.17 FLIGHT IN RAIN -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.17 Flight in Rain:</strong>
            <div lang="en" class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-snug">
              Performance deteriorates in rain; this applies particularly to the take-off distance and to the maximum horizontal speed. The effect on the flight characteristics is minimal. Flight through very heavy rain should be avoided because of the associated visibility problems.
            </div>
          </div>

          <!-- SECCIÓN 4A.3.18 REFUELING -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.18 Refueling:</strong>
            <div lang="en" class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-snug">
              <strong class="text-amber-700 dark:text-amber-400">CAUTION:</strong> Before refueling, the airplane must be connected to electrical ground. <strong>Grounding points:</strong> unpainted areas on steps, left and right.
            </div>
            <div lang="en" class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 pt-0.5">
              <strong>NOTE:</strong> If operated with Diesel Fuel, additional temperature limitations must be observed. If JET Fuel is used, make sure that no Diesel Fuel is remaining in either tank. Otherwise, Diesel Fuel limitations must be observed.
            </div>
          </div>

          <!-- SECCIÓN 4A.3.19 FLIGHT AT HIGH ALTITUDE -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">4A.3.19 Flight at High Altitude:</strong>
            <div lang="en" class="text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 leading-snug">
              At high altitudes the provision of oxygen for the occupants is necessary. Legal requirements for the provision of oxygen should be adhered to. Also see Section 2.11 - OPERATING ALTITUDE.
            </div>
          </div>

          <!-- END OF CHECKLIST BADGE -->
          <div class="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-700/60 text-emerald-900 dark:text-emerald-200 text-xs font-semibold flex items-center gap-2">
            <span>✅</span>
            <span>AFM CHAPTER 4A NORMAL OPERATING PROCEDURES COMPLETE</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama y Sistemas -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">NOTAS OPERATIVAS Y SEGURIDAD</span>
        </div>

        <div class="space-y-2 text-xs text-slate-700 dark:text-slate-200">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Puntos de Toma de Tierra (Grounding):</strong>
            Conecte siempre la pinza de descarga electrostática del camión de combustible en las zonas metálicas sin pintar del escalón alar (izquierdo o derecho) antes de retirar el tapón de llenado.
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1 uppercase text-xs">Operación Diésel vs JET A-1:</strong>
            El combustible JET A-1 tolera temperaturas de hasta -30 °C. Si se utiliza diésel de automoción (EN 590), no se puede arrancar si la temperatura es inferior a -5 °C ni despegar si el depósito izquierdo está a menos de +5 °C por riesgo de congelación de parafinas.
          </div>
        </div>

        <div class="w-full rounded-xl border border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 p-2.5 text-center mt-auto">
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400">Oxígeno y Techo Operativo</span>
          <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5">
            Techo operativo máximo certificado: 16.400 ft (FL164). Requisitos de oxígeno suplementario obligatorios por encima de 10.000 ft según normativa SERA.
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
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
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

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-1 my-auto">
          <img
            src="/images/da40/da40-gliding-emergency.jpg"
            alt="Velocidades de emergencia y planeo DA40 TDI"
            class="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.2: 5.2 Fallo de Motor en Tierra y Aborto de Despegue -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
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

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-1 my-auto">
          <img
            src="/images/da40/da40-engine-ground-abort.jpg"
            alt="Fallo de motor en tierra y aborto de despegue DA40 TDI"
            class="w-full h-full object-contain rounded-lg"
          />
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

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-1 my-auto">
          <img
            src="/images/da40/da40-abort-takeoff.jpg"
            alt="Fallo de motor tras el despegue (EFATO) DA40 TDI"
            class="w-full h-full object-contain rounded-lg"
          />
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

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-1 my-auto">
          <img
            src="/images/da40/da40-engine-failure-flight.jpg"
            alt="Fallo de motor en vuelo DA40 TDI"
            class="w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.5: 5.5 Reencendido de Motor en Vuelo (Molinete y Arrancador) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.5 Reencendido de Motor en Vuelo (Molinete y Arrancador)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Engine Restart in Flight · Windmilling & Stationary Propeller</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Altura Fija 590px sin scroll -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col justify-start">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PROCEDIMIENTOS DE REENCENDIDO AFM</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <!-- CASO A: HÉLICE EN MOLINETE -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">A. HÉLICE EN MOLINETE</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">73 to 110 KIAS</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel valve &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel transfer pump &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">Emergency windows &mdash; <span class="italic font-medium">CLOSE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div class="text-[10px] text-slate-500 dark:text-slate-400 italic pt-0.5">Si no reenciende: ECU SWAP to ECU B</div>
            </div>

            <!-- CASO B: HÉLICE PARADA (STARTER) -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">B. HÉLICE PARADA (STARTER)</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">1.</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed &mdash; <span class="italic font-medium">73 KIAS (GLIDE)</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">2.</span>
                <span class="text-slate-800 dark:text-slate-200">Electrical consumers &mdash; <span class="italic font-medium">OFF</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">3.</span>
                <span class="text-slate-800 dark:text-slate-200">Power lever &mdash; <span class="italic font-medium">IDLE</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">4.</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel valve & pump &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">5.</span>
                <span class="text-slate-800 dark:text-slate-200">ELECTRIC MASTER &mdash; <span class="italic font-medium">check ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">6.</span>
                <span class="text-slate-800 dark:text-slate-200">ENGINE MASTER &mdash; <span class="italic font-medium">ON</span></span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[16px]">7.</span>
                <span class="text-slate-800 dark:text-slate-200">Ignition key &mdash; <span class="italic font-medium">START (máx. 10 s)</span></span>
              </div>
              <div class="text-[10px] text-slate-500 dark:text-slate-400 italic pt-0.5">Soltar llave en cuanto arranque</div>
            </div>
          </div>

          <!-- COMPARATIVA Y PRECAUCIÓN AFM -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] sm:text-xs leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>DIFERENCIA OPERATIVA CLAVE:</span>
            </strong>
            <div><strong>Molinete:</strong> Si la hélice gira por el viento relativo (73-110 KIAS), el motor reenciende solo con <span class="font-semibold text-emerald-700 dark:text-emerald-400">ENGINE MASTER ON</span>. <strong>Parada:</strong> La hélice pasa a bandera mecánica; se debe accionar el arrancador (<span class="font-semibold">START</span>) con consumidores apagados (máx. 10 segundos).</div>
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
            Curva envolvente de reencendido en molinete (73-110 KIAS / techo 6.000 ft) y posición de hélice en bandera.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.6: 5.6 Malfunción del Regulador de RPM y Sobrevelocidad -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.6 Malfunción del Regulador de RPM y Sobrevelocidad</h1>
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

<!-- DIAPOSITIVA 5.7: 5.7 Humo y Fuego en Tierra y Durante el Despegue -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.7 Humo y Fuego en Tierra y Durante el Despegue</h1>
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

<!-- DIAPOSITIVA 5.8: 5.8 Incendio de Motor en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.8 Incendio de Motor en Vuelo</h1>
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

<!-- DIAPOSITIVA 5.9: 5.9 Humo e Incendio Eléctrico en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.9 Humo e Incendio Eléctrico en Vuelo</h1>
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

<!-- DIAPOSITIVA 5.10: 5.10 Aterrizaje de Emergencia con Motor Parado -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.10 Aterrizaje de Emergencia con Motor Parado</h1>
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

<!-- DIAPOSITIVA 5.11: 5.11 Aterrizaje con Neumático Desinflado o Frenos Fallidos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.11 Aterrizaje con Neumático Desinflado o Frenos Fallidos</h1>
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

<!-- DIAPOSITIVA 5.12: 5.12 Recuperación de Barrena Inadvertida (Unintentional Spin) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.12 Recuperación de Barrena Inadvertida (Unintentional Spin)</h1>
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

<!-- DIAPOSITIVA 5.13: 5.13 Vuelo Inadvertido en Condiciones de Engelamiento -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.13 Vuelo Inadvertido en Condiciones de Engelamiento</h1>
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

<!-- DIAPOSITIVA 5.14: 5.14 Fallo Eléctrico Total y Switch EMERGENCY -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.14 Fallo Eléctrico Total y Switch EMERGENCY</h1>
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

<!-- DIAPOSITIVA 5.15: 5.15 Monóxido de Carbono (CO) y Aviso DOOR en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS DE EMERGENCIA</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.15 Monóxido de Carbono (CO) y Aviso DOOR en Vuelo</h1>
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

<!-- DIAPOSITIVA 5.16: 5.16 Aterrizaje de Precaución con Motor Operativo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.16 Aterrizaje de Precaución con Motor Operativo</h1>
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

<!-- DIAPOSITIVA 5.17: 5.17 Luces de Aviso FADEC: ECU A y ECU B en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.17 Luces de Aviso FADEC: ECU A y ECU B en Vuelo</h1>
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

<!-- DIAPOSITIVA 5.18: 5.18 Conmutación Manual de ECU (ECU SWAP en Vuelo) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.18 Conmutación Manual de ECU (ECU SWAP en Vuelo)</h1>
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

<!-- DIAPOSITIVA 5.19: 5.19 Fallo de Alternador y Aviso LOW VOLTS -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.19 Fallo de Alternador y Aviso LOW VOLTS</h1>
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

<!-- DIAPOSITIVA 5.20: 5.20 Anomalías de Temperatura: Refrigerante y Aceite -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.20 Anomalías de Temperatura: Refrigerante y Aceite</h1>
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

<!-- DIAPOSITIVA 5.21: 5.21 Anomalías de Presión de Aceite y Reductora -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.21 Anomalías de Presión de Aceite y Reductora</h1>
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

<!-- DIAPOSITIVA 5.22: 5.22 Combustible y Malfunción del Sistema de Flaps -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PROCEDIMIENTOS ANÓMALOS</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.22 Combustible y Malfunción del Sistema de Flaps</h1>
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
  title: "6. Documentación Prevuelo, Masa y Centrado, Combustible y Performance",
  slug: "despacho-operativo-da40-prevuelo",
  description: "Dominio integral del despacho operacional en la aeronave Diamond DA40 TDI. Incluye cumplimentación paso a paso de la documentación oficial F.OPS.02, cálculo de Masa y Centrado con hoja de carga según AFM Capítulo 6 (BEW 735 kg, brazos 2,30 m / 3,25 m / 2,63 m / 3,65 m) y envolvente de CG (MTOM y MLM 1150 kg), régimen de crucero y consumo horario al 60% (15,1 L/h) y 70% (18,5 L/h), política de combustible EASA Part-NCO.OP.125 y Manual OM Blue Team (1h 30m de reserva obligatoria), y cálculo de performance de despegue y aterrizaje según AFM Capítulo 5 con factores de corrección de viento, pendiente y superficie de hierba.",
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
            En el DA40 TDI, el <strong>DATUM</strong> se localiza en un plano vertical situado a <strong>2,194 metros (86,38 in)</strong> por delante del punto más adelantado de la costilla de raíz del ala corta (<em>stub wing root rib</em>). Todos los brazos de palanca se miden longitudinalmente hacia la cola del avión en metros positivos. La aeronave se nivela mediante una cuña 600:31 colocada en la parte superior del fuselaje trasero.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px]">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Cálculo del Momento:</strong>
            <div class="font-mono font-bold text-sky-600 dark:text-sky-400">Momento = Masa × Brazo</div>
            <p class="text-[11px] text-slate-500 mt-1">Multiplicación de la masa de cada elemento por su distancia al Datum en metros (kg·m).</p>
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Centro de Gravedad (CG):</strong>
            <div class="font-mono font-bold text-emerald-600 dark:text-emerald-400">CG = Momento Total / Masa Total</div>
            <p class="text-[11px] text-slate-500 mt-1">Posición longitudinal del equilibrio de masa respecto al Datum, expresada en metros.</p>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed">
          <strong>DENSIDAD DEL COMBUSTIBLE JET-A1:</strong> La masa de combustible no equivale directamente a los litros cargados. Se utiliza la densidad certificada de <strong>0,84 kg/L (7,01 lb/US gal)</strong>: <span class="font-mono font-bold">Masa [kg] = Litros × 0,84</span> (equivalente a <strong>1 US gal = 3,785 L = 3,18 kg</strong>).
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
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DATOS TÉCNICOS Y PESOS (REFERENCIA DA40 TDI)</span>
        </div>

        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
            <span class="text-[10px] text-blue-700 dark:text-sky-400 font-bold block uppercase">BEW (EMPTY WEIGHT)*</span>
            <span class="font-mono font-bold text-sm text-[#0B2E59] dark:text-white">735.00 kg</span>
          </div>
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
            <span class="text-[10px] text-blue-700 dark:text-sky-400 font-bold block uppercase">BRAZO BEW*</span>
            <span class="font-mono font-bold text-sm text-[#0B2E59] dark:text-white">2.476 m</span>
          </div>
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
            <span class="text-[10px] text-blue-700 dark:text-sky-400 font-bold block uppercase">MOMENTO BÁSICO*</span>
            <span class="font-mono font-bold text-sm text-[#0B2E59] dark:text-white">1820.00 kg·m</span>
          </div>
        </div>

        <div class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-amber-900 dark:text-amber-200 text-xs leading-relaxed flex items-start gap-2">
          <span class="font-bold shrink-0">⚠️ NOTA BEW:</span>
          <span>El <strong>BEW (Empty Weight)</strong> indicado aquí se incluye como <strong>referencia</strong> (ejemplo AFM Sección 6.3). El BEW es distinto para cada aeronave; para el cálculo operacional se debe utilizar obligatoriamente el BEW que figura en el <strong>informe de masa y centrado de cada avión</strong>.</span>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span>Pilotos (Asientos 1 y 2 Delanteros):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">Brazo: 2.300 m (90.6 in)</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span>Pasajeros (Asientos 3 y 4 Traseros):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">Brazo: 3.250 m (128.0 in)</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span>Equipaje (Baggage Compartment):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">Brazo: 3.650 m (143.7 in) (Máx. 30 kg)</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span>Combustible Usable (Wing Tanks):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">Brazo: 2.630 m (103.5 in) (Máx. 106 L / 28.0 US Gal)</span>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 text-xs sm:text-[13px]">
          <strong>MTOM / MLM (PESO MÁXIMO):</strong> Tanto en despegue como en aterrizaje, la masa total máxima admisible es de <strong>1.150,00 kg (2.535 lb)</strong> (igual para todas las Diamond DA40 TDI de la flota).
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TABLA OFICIAL DE CARGA AFM</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 flex items-center justify-center p-1 my-auto shadow-xs">
          <img
            src="/images/da40/da40-loadsheet-table.png"
            alt="Hoja oficial de cálculo de carga del Diamond DA40 TDI"
            class="w-full h-full object-contain rounded-lg"
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
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI (TAE 125-01) · TALLER INTERACTIVO 1A</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.5 Ejercicio Práctico 1A: Masa y Centrado al Despegue (TOM & CG)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Hoja AFM Cap. 6 · Parte 1</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="loadsheet_takeoff" data-aircraft="da40"></div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.6: 6.6 Ejercicio Práctico 1B: Consumo de Ruta y Aterrizaje (LM & Envolvente) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI (TAE 125-01) · TALLER INTERACTIVO 1B</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.6 Ejercicio Práctico 1B: Consumo de Ruta y Aterrizaje (LM & Envolvente)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Hoja AFM Cap. 6 · Parte 2</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="loadsheet_landing" data-aircraft="da40"></div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.7: 6.7 Régimen de Crucero: Rendimiento y Consumo de Combustible -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · RENDIMIENTO DE CRUCERO</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.7 Régimen de Crucero: Rendimiento y Consumo de Combustible</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tablas y Gráficas de Rendimiento AFM</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">REGÍMENES DE CRUCERO Y CONSUMO (AFM SECCIÓN 5)</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">GESTIÓN MONO-PALANCA Y EFICIENCIA DE CRUCERO</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            En el Diamond DA40 TDI, la palanca monomando comanda directamente el porcentaje de potencia deseado (<em>% LOAD</em>). La ECU gestiona automáticamente la dosificación óptima de combustible y el paso variable de la hélice para cada régimen de vuelo.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
          <!-- 60% CRUCERO ECONÓMICO -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <span class="font-bold text-sky-600 dark:text-sky-400 block uppercase text-[11px]">60% LOAD (ECONÓMICO)</span>
            <div class="text-[11px] text-slate-700 dark:text-slate-300">
              Crucero económico AFM:<br>
              <strong>4,0 US gal/h (15,1 L/h)</strong><br>
              TAS: ~118 a 120 kts a FL60<br>
              <span class="text-slate-500 dark:text-slate-400 text-[10px]">Máximo alcance y autonomía</span>
            </div>
          </div>

          <!-- 70% CRUCERO NORMAL -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 block uppercase text-[11px]">70% LOAD (NORMAL)</span>
            <div class="text-[11px] text-slate-700 dark:text-slate-300">
              Crucero normal AFM:<br>
              <strong>4,9 US gal/h (18,5 L/h)</strong><br>
              TAS: ~124 a 126 kts a FL60<br>
              <span class="text-slate-500 dark:text-slate-400 text-[10px]">Equilibrio estándar de crucero</span>
            </div>
          </div>

          <!-- 80% CRUCERO RÁPIDO -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <span class="font-bold text-amber-600 dark:text-amber-400 block uppercase text-[11px]">80% LOAD (RÁPIDO)</span>
            <div class="text-[11px] text-slate-700 dark:text-slate-300">
              Crucero rápido AFM:<br>
              <strong>5,8 US gal/h (22,0 L/h)</strong><br>
              TAS: ~130 a 132 kts a FL60<br>
              <span class="text-slate-500 dark:text-slate-400 text-[10px]">Máximo crucero continuo</span>
            </div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
          <strong class="text-sky-800 dark:text-sky-300 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>ℹ️</span> LECTURA DIRECTA DEL ÁBACO AFM (FUEL FLOW)
          </strong>
          <span>Conforme al ábaco oficial de consumo horario del AFM (figura derecha), a un <strong>60% LOAD</strong> el consumo resultante es exactamente de <strong>4,0 US gal/h (15,1 L/h)</strong>. A <strong>70% LOAD</strong> es de <strong>4,9 US gal/h (18,5 L/h)</strong> y a <strong>80% LOAD</strong> asciende a <strong>5,8 US gal/h (22,0 L/h)</strong>.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ÁBACO INTERACTIVO AFM: FUEL FLOW</span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 dark:bg-sky-950/80 dark:text-sky-300 border border-sky-300">INTERACTIVO</span>
        </div>

        <div
          data-interactive-exercise="fuel_chart"
          data-aircraft="da40"
          class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 shadow-xs flex flex-col"
        ></div>
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

<!-- DIAPOSITIVA 6.9: 6.9 Ejercicio Práctico: Tablas de Crucero y Autonomía -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · TALLER INTERACTIVO 2</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.9 Ejercicio Práctico: Tablas de Crucero y Autonomía</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tabla a 60% de Potencia</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="cruise" data-aircraft="da40"></div>
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

<!-- DIAPOSITIVA 6.11: 6.11 Ejercicio Práctico: Planificación de Combustible F.OPS.02 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · TALLER INTERACTIVO 3</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.11 Ejercicio Práctico: Planificación de Combustible F.OPS.02</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Part-NCO.OP.125 & Manual OM</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="fuel" data-aircraft="da40"></div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.12: 6.12 Performance de Despegue: Parámetros y Factores de Corrección -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · PERFORMANCE DE DESPEGUE</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.12 Performance de Despegue: Parámetros y Factores de Corrección</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimientos de Certificación</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CONDICIONES DE DESPEGUE</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONDICIONES DE REFERENCIA DE CERTIFICACIÓN</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            Palanca: <strong>MAX (100% Load)</strong> &bull; Flaps: <strong>T/O</strong> &bull; Pista asfaltada seca y nivelada.<br>
            &bull; Rotación: <strong>59 KIAS</strong> (1150 kg) / 55 KIAS (1000 kg) / 49 KIAS (850 kg).<br>
            &bull; Ascenso inicial: <strong>66 KIAS</strong> (1150 kg) / 60 KIAS (1000 kg) / 54 KIAS (850 kg).
          </p>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs sm:text-[13px]">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FACTORES OFICIALES DE CORRECCIÓN DE PISTA</strong>
          <div class="space-y-1 text-slate-700 dark:text-slate-300">
            <div>&bull; <strong>Viento en cara / cola:</strong> Corrección gráfica directa mediante las curvas del ábaco.</div>
            <div>&bull; <strong>Hierba seca corta (&le; 5 cm / 2 in):</strong> <strong>+10%</strong> en la carrera de despegue (Ground Roll).</div>
            <div>&bull; <strong>Hierba media (5 a 10 cm / 2 a 4 in):</strong> <strong>+15%</strong> en la carrera de despegue (Ground Roll).</div>
            <div>&bull; <strong>Hierba alta (> 10 cm / 4 in):</strong> al menos <strong>+25%</strong> en la carrera de despegue (Ground Roll).</div>
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

    <!-- Columna Derecha (lg:col-span-6 con Selector Interactivo de Ábacos) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="w-full h-full flex-1 min-h-0" data-interactive-exercise="takeoff_charts" data-aircraft="da40"></div>
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
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimientos de Certificación</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CONDICIONES DE ATERRIZAJE</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONDICIONES DE REFERENCIA (FLAPS LDG)</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            Palanca: <strong>IDLE</strong> &bull; Flaps: <strong>LDG</strong> &bull; Pista asfaltada seca y nivelada.<br>
            &bull; Velocidad de aproximación: <strong>71 KIAS</strong> (1150 kg) / 63 KIAS (1000 kg) / 58 KIAS (850 kg).<br>
            &bull; Valores ISA a nivel del mar (1150 kg): Distancia total a 15 m = <strong>744 m</strong> · Carrera = <strong>287 m</strong>.
          </p>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs sm:text-[13px]">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FACTORES OFICIALES DE CORRECCIÓN DE PISTA</strong>
          <div class="space-y-1 text-slate-700 dark:text-slate-300">
            <div>&bull; <strong>Viento en cara / cola:</strong> Corrección gráfica en el ábaco.</div>
            <div>&bull; <strong>Hierba seca corta (&le; 5 cm):</strong> <strong>+5%</strong> en la carrera de aterrizaje (Ground Roll).</div>
            <div>&bull; <strong>Hierba media (5 a 10 cm):</strong> <strong>+15%</strong> en la carrera de aterrizaje (Ground Roll).</div>
            <div>&bull; <strong>Hierba alta (> 10 cm):</strong> al menos <strong>+25%</strong> en la carrera de parada.</div>
            <div>&bull; <strong>Pendiente descendente (-2% downhill):</strong> <strong>+10%</strong> en la distancia total.</div>
            <div>&bull; <strong>Exceso de velocidad:</strong> Una velocidad de aproximación excesiva alarga drásticamente la distancia de flotación (flare).</div>
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

    <!-- Columna Derecha (lg:col-span-6) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex items-center justify-center p-2 shadow-xs">
          <img
            src="/images/da40/da40-landing-distance.png?v=2"
            alt="Ábaco oficial de distancia de aterrizaje DA40 TDI"
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
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · TALLER INTERACTIVO 4A</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.14 Ejercicio Práctico 4A: Distancias de Despegue (TORA & TODA)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">F.OPS.02 Distancias Prevuelo · Parte 1</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="performance_takeoff" data-aircraft="da40"></div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.15: 6.15 Ejercicio Práctico 4B: Distancia de Aterrizaje y Margen (LDA) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100" data-slide-visibility="private">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">DA40 TDI · TALLER INTERACTIVO 4B</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.15 Ejercicio Práctico 4B: Distancia de Aterrizaje y Margen (LDA)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">F.OPS.02 Distancias Prevuelo · Parte 2</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="performance_landing" data-aircraft="da40"></div>
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




