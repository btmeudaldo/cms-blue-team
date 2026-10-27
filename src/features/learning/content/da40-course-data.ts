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
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AVISO NEUMÁTICO DE PÉRDIDA Y PITOT-ESTÁTICA</span>
        </div>

        <!-- Aviso de Pérdida y Pitot-Estática -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-[11px] leading-tight text-slate-800 dark:text-slate-200">
          <div><strong>Aviso Neumático de Pérdida (<span class="italic">Stall Warning System</span>):</strong> Toma ranurada en el borde de ataque del ala izquierda marcada con un <strong>anillo rojo</strong>. La depresión por succión activa la bocina en el panel entre <strong>10 y mín. 5 nudos</strong> por encima de la velocidad de pérdida (V<sub>S</sub> + 10 a 5 kt), intensificándose al decrecer la velocidad.</div>
          <div><strong>Comprobación Prevuelo Oficial:</strong> Colocar un paño limpio sobre la abertura del borde de ataque y aspirar suavemente con la boca: el sonido audible en cabina verifica el estado de la bocina y sus conductos.</div>
          <div><strong>Sonda Pitot-Estática y Válvula Alternativa:</strong> Sonda única calefactada bajo el ala izquierda con orificios de presión estática integrados y filtros en la raíz alar. La válvula de estática alternativa (<span class="italic">Alternate Static Valve</span>) en cabina permite tomar presión interior si la exterior se bloquea.</div>
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
            <div>• <strong>Umbral de Pérdida:</strong> Bocina acústica activa por succión neumática a <strong class="text-amber-700 dark:text-amber-400">V<sub>S</sub> + 5 a 10 kt</strong>.</div>
            <div>• <strong>Estática Alternativa:</strong> Válvula reconfigurable en cabina ante hielo o bloqueo de la sonda exterior.</div>
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

export const DA40_LESSONS = [DA40_LESSON_1, DA40_LESSON_2, DA40_LESSON_3];


