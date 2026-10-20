export type CourseDocumentationItem = {
  category: string;
  registration?: string;
  title: string;
  url: string;
  badge?: string;
};

export const C172_COURSE_ID = "17200000-0000-0000-0000-000000000172";
export const C172_COURSE_SLUG = "cessna-172-continental-diesel";
export const C172_COURSE_TITLE = "Curso de Familiarización y Diferencias Cessna 172 (Continental CD-135 / CD-155)";
export const C172_COURSE_DESCRIPTION = "Curso oficial de familiarización de tipo, diferencias técnicas y procedimientos para la flota Cessna 172 con motores Continental CD-135 y CD-155 Turbo Diésel (EC-NNA, EC-OXV, EC-NNX, EC-OXT) de Blue Team Flight School, conforme a EASA Part-FCL.710. Duración oficial reglamentaria: 4 horas lectivas.";
export const C172_COURSE_IMAGE_URL = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80";
export const C172_COURSE_REQUIRES_EXAM = false;

export const C172_DOCUMENTATION: CourseDocumentationItem[] = [
  // Manuales Completos Oficiales
  {
    category: "Manuales Completos POH",
    registration: "EC-NNA",
    title: "POH Oficial Completo Cessna 172N (EC-NNA)",
    url: "/manuals/cessna/poh-ec-nna.pdf",
    badge: "POH Completo",
  },
  {
    category: "Manuales Completos POH",
    registration: "EC-OXV",
    title: "POH Oficial Completo Reims F172K (EC-OXV)",
    url: "/manuals/cessna/poh-ec-oxv.pdf",
    badge: "POH Completo",
  },
  {
    category: "Manuales Completos POH",
    registration: "EC-NNX",
    title: "POH Oficial Completo Reims F172 (EC-NNX)",
    url: "/manuals/cessna/poh-ec-nnx.pdf",
    badge: "POH Completo",
  },
  {
    category: "Manuales Completos POH",
    registration: "EC-OXT",
    title: "Suplementos Oficiales Reims F172M (EC-OXT)",
    url: "/manuals/cessna/poh-ec-oxt.pdf",
    badge: "Suplemento",
  },

  // Hojas Oficiales de Carga y Centrado (F.OPS.04)
  {
    category: "Hojas de Carga F.OPS.04",
    registration: "EC-NNA",
    title: "Hoja de Masa y Centrado F.OPS.04.NNA (BEW: 755.44 kg / Arm: 1.042 m)",
    url: "/manuals/cessna/loadsheet-ec-nna.pdf",
    badge: "F.OPS.04",
  },
  {
    category: "Hojas de Carga F.OPS.04",
    registration: "EC-NNX",
    title: "Hoja de Masa y Centrado F.OPS.04.NNX (BEW: 795.83 kg / Arm: 1.026 m)",
    url: "/manuals/cessna/loadsheet-ec-nnx.pdf",
    badge: "F.OPS.04",
  },
];

// ============================================================================
// LECCIÓN 1: LIMITACIONES OPERACIONALES Y FLOTA POH (8 DIAPOSITIVAS)
// ============================================================================
// ============================================================================
// LECCIÓN 1: GENERALIDADES Y ESPECIFICACIONES (6 DIAPOSITIVAS)
// ============================================================================
export const C172_LESSON_1 = {
  id: "17200000-0000-0000-0000-000000000010",
  course_id: C172_COURSE_ID,
  title: "1. Generalidades y Especificaciones del Avión",
  slug: "generalidades-especificaciones-c172",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 1.1: 1.1 Objeto del Suplemento POH y Simbología de Seguridad -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <!-- Header de Diapositiva -->
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[18px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-135 / CD-155</div>
      <h1 class="text-[25px] font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.1 Objeto del Suplemento POH y Simbología de Seguridad</h1>
    </div>
    <span class="text-[18px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Especificaciones Generales de la Aeronave</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch pt-1" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">OBJETO Y SIMBOLOGÍA DE SEGURIDAD</span>
          </div>

          <!-- Objeto del Suplemento -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-sm sm:text-base border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">OBJETO DEL SUPLEMENTO</strong>
            <p class="text-slate-700 dark:text-slate-200 text-sm sm:text-[15px] leading-relaxed">
              Este curso esta basado en el manual oficial de Cessna 172 y el suplemento de Continental CD135 y CD155, contiene la información técnica, limitaciones y procedimientos necesarios para la operación segura de los aviones Cessna 172 equipados con motores Continental CD-135 y CD-155.&nbsp;<span style="letter-spacing: -0.18px; font-size: 1.125rem;">Este curso no sustituye al POH básico de Cessna y el suplemento de Continental.</span></p>
          </div>

          <!-- Simbología de Seguridad POH -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-sm sm:text-base border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">SIMBOLOGÍA OFICIAL DE SEGURIDAD POH</strong>
            
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

          <!-- Advertencia POH Actualización reubicada en la columna izquierda -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-xs sm:text-sm leading-tight text-amber-900 dark:text-amber-200">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>WARNING (POH):</strong> La operación segura solo está asegurada con un suplemento POH actualizado (Service Bulletin TM TAE 000-0004).</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Flota C172 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-base sm:text-lg">FLOTA C172</span></div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-950 flex items-center justify-center p-2 lesson-img-wrapper mx-auto img-align-center" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/C172-tarjeta.jpg" alt="Cessna 172 Continental Diésel" class="w-full h-full max-h-[440px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.2: 1.2 Especificaciones del Motor Continental CD-135 / CD-155 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-135 / CD-155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.2 Especificaciones del Motor Continental CD-135 / CD-155</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Arquitectura de Motor Diésel Turboalimentado</span>
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
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MOTOR CONTINENTAL CD-135 Y CD-155</strong>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              Motor de 4 cilindros en línea, cuatro tiempos, refrigeración líquida, doble árbol de levas en cabeza (DOHC), inyección directa Common-Rail y turboalimentado con intercooler. Cilindrada total: 1.991 cm³ (121.5 in³).
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              Controlado íntegramente por sistema electrónico FADEC. La hélice es accionada mediante caja reductora integrada (relación i = 1.69) con amortiguador mecánico de vibraciones y embrague de sobrecarga. Cuenta con motor de arranque y alternador integrados.
            </p>
          </div>

          <!-- Sistemas convencionales que no aplican -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">SISTEMAS CONVENCIONALES ELIMINADOS</strong>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
              Debido a las características específicas de esta planta motriz, toda la información del POH original queda sin efecto en lo relativo a:
            </p>
            <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-0.5 pt-0.5">
              <li class="flex items-start gap-1.5">• <span>Carburador y sistema de calefacción de carburador.</span></li>
              <li class="flex items-start gap-1.5">• <span>Magnetos de encendido y bujías convencionales.</span></li>
              <li class="flex items-start gap-1.5">• <span>Mando de mezcla y sistema de cebado (primer).</span></li>
            </ul>
          </div>

          <!-- Warning eléctrico POH -->
          <div class="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (POH):</strong> El motor requiere energía eléctrica continua para operar. Si fallan batería y alternador, el motor solo operará durante un máximo de 30 minutos con la batería de reserva FADEC. Prestar máxima atención a las indicaciones de fallo del alternador.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Planta Motriz Continental CD-155 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PLANTA DE POTENCIA CONTINENTAL CD-155</span>
          </div>

          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Nuestras aeronaves C172 no tienen magnetos, palanca de mezcla roja, palanca de paso azul o calefacción de carburador; el motor se gestiona por FADEC, pero depende críticamente de la energía eléctrica.
            </p>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-2 lesson-img-wrapper mx-auto img-align-center" draggable="false" style="position: relative; width: auto; max-width: 100%; float: none; clear: both;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/Continental-Engine-Jet-A-CD-155-View-latest.png" alt="Motor Continental CD-155 Jet-A" class="w-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto; width: 100%;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.3: 1.3 Hélice MT-Propeller Tripala de Paso Constante -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-135 / CD-155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.3 Hélice MT-Propeller Tripala de Paso Constante</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Gobernador Hidráulico y Velocidad Constante</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESPECIFICACIONES DE HÉLICE (PROPELLER)</span>
        </div>
        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Datos MT-Propeller -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CARACTERÍSTICAS DE LA HÉLICE</strong>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-0.5">
              <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Fabricante</span>
                <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">MT-Propeller Entwicklung GmbH</p>
              </div>
              <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Modelos Aprobados</span>
                <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">MTV-6-A/187-129 / MTV-6-A/190-69</p>
              </div>
              <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Número de Palas</span>
                <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">3 palas (material compuesto)</p>
              </div>
              <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-0.5">
                <span class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase">Diámetro</span>
                <p class="font-bold text-[#0B2E59] dark:text-sky-200 text-xs">1.87 m (MTV-6-A/187) o 1.90 m (MTV-6-A/190)</p>
              </div>
            </div>
          </div>

          <!-- Principio de Funcionamiento -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FUNCIONAMIENTO CONSTANT SPEED</strong>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              La hélice es de velocidad constante (constant speed). El paso de las palas se ajusta hidráulicamente mediante presión de aceite suministrada por el motor y gestionada directamente por el sistema FADEC.
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              El piloto no dispone de palanca mecánica de paso de hélice en cabina: al mover la palanca monomando de empuje (Thrust Lever), la ECU del FADEC determina y comanda el paso óptimo para mantener 2.300 RPM en despegue y crucero continuo.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Hélice MT-Propeller (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">HÉLICE MT-PROPELLER TRIPALA</span>
          </div>

          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs shrink-0">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              En nuestras aeronaves C172 no existe palanca azul de paso de hélice en cabina; el FADEC regula automáticamente el gobernador hidráulico a 2.300 RPM según la posición de la palanca monomando.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/1.3-propeller.jpg?v=1" alt="Hélice MT-Propeller Tripala MTV-6" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.4: 1.4 Combustibles Autorizados y Diferencias de Densidad -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-135 / CD-155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.4 Combustibles Autorizados y Diferencias de Densidad</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">JET A-1, Diésel EN 590 y Prohibición de AVGAS</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">COMBUSTIBLES Y FLUIDOS (FUELS AND LIQUIDS)</span>
        </div>
        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Tipos de combustible aprobados -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">COMBUSTIBLES AUTORIZADOS</strong>
            <div class="space-y-1 text-[11px] text-slate-700 dark:text-slate-200">
              <p>• <strong>Queroseno de aviación:</strong> JET A-1 (ASTM 1655), JET A (ASTM 1655), Jet Fuel No.3 (GB 6537-2006), JP-8 (MIL-DTL-83133E), TS-1 (GOST 10227-86).</p>
              <p>• <strong>Alternativo de automoción:</strong> Diésel (DIN EN 590), SASOL GTL Diesel.</p>
            </div>
          </div>

          <!-- Densidad y carga alar -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DIFERENCIA DE DENSIDAD CON AVGAS</strong>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              Dado que la densidad del combustible diésel y queroseno JET A-1 (<strong>0.84 kg/l</strong>) es sensiblemente mayor que la de la gasolina de aviación AVGAS (<strong>0.715 kg/l</strong>), la capacidad utilizable se redujo mediante los cuellos de llenado para garantizar que la aeronave no exceda la carga alar autorizada.
            </p>
          </div>

          <!-- Caution POH Combustibles No Autorizados -->
          <div class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>CAUTION (POH):</strong> El uso de combustibles no aprobados puede provocar daños en el motor y en los componentes del sistema de combustible, pudiendo provocar una parada de motor en vuelo. AVGAS 100LL está terminantemente prohibido.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Combustibles y Fluidos Autorizados (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">COMBUSTIBLES Y FLUIDOS AUTORIZADOS</span>
          </div>

          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Verifica siempre el combustible en el repostaje: repostar AVGAS 100LL puede destruir el sistema de inyección de alta presión. Además, ten en cuenta en el mass and balance que el JETA1 es más pesado que la gasolina.
            </p>
          </div>

          <div class="w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/jet-fuel-only.jpg" alt="Rótulo JET FUEL ONLY C172" class="w-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.5: 1.5 Fluidos de Servicio: Aceite, Reductora y Refrigerante -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-135 / CD-155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.5 Fluidos de Servicio: Aceite, Reductora y Refrigerante</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Fluidos de Motor, Caja Reductora y Sistema de Refrigeración</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">LUBRICACIÓN Y REFRIGERACIÓN (LIQUIDS SPECIFICATION)</span>
        </div>
        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Fluidos específicos -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-1.5 pt-0.5">
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[10px] uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">Aceite de Motor</strong>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• AeroShell Oil Diesel Ultra</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• AeroShell Oil Diesel 10W-40</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell Helix Ultra 5W-30 / 5W-40</p>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[10px] uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">Aceite Reductora</strong>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Centurion Gearbox Oil N1</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell Spirax S6 ATF ZM</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Shell Spirax S4 G 75W-90</p>
            </div>
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-[10px] uppercase tracking-wide border-b border-slate-100 dark:border-slate-700 pb-0.5">Refrigerante (Coolant)</strong>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">Proporción 50:50 Agua / Anticongelante</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• BASF Glysantin Protect Plus / G48</p>
              <p class="text-[10px] text-slate-700 dark:text-slate-300 leading-tight">• Mobil Antifreeze Extra (G48)</p>
            </div>
          </div>

          <!-- Datos técnicos complementarios -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">NOTAS Y ADITIVOS OFICIALES</strong>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              • <strong>Punto de congelación del refrigerante:</strong> -36 °C (-33 °F).
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              • <strong>Aditivo fungicida:</strong> El aditivo líquido Biobor JF puede emplearse en sistemas de combustible jet y diésel para eliminar la formación de hongos y bacterias.
            </p>
          </div>

          <!-- Warning POH Niveles de Fluido -->
          <div class="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (POH):</strong> El motor no debe arrancarse bajo ninguna circunstancia si el nivel de cualquiera de los fluidos es inferior al mínimo admisible.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Fluidos de Servicio (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FLUIDOS DE SERVICIO Y SUPERVISIÓN</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              En la inspección prevuelo supervisamos fluidos independientes: nivel de aceite motor en la varilla, y nivel en la mirilla de la reductora.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/1.5-fluidos.jpg?v=1" alt="Fluidos de Servicio C172" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.6: 1.6 Mandos e Instrumentación de Motor en Cabina -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-135 / CD-155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">1.6 Mandos e Instrumentación de Motor en Cabina</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Disposición de Instrumentos y Panel Anunciador</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Información Técnica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">INSTRUMENTACIÓN Y MANDOS EN CABINA (INSTRUMENT PANEL)</span>
          </div>
          <div class="space-y-1.5 py-0.5 text-xs">
            <!-- Mandos e interruptores -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MANDOS E INTERRUPTORES ESPECÍFICOS</strong>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-700 dark:text-slate-300">
                <p>• <strong>Alt. Air Door:</strong> Mando de aire alternativo de motor.</p>
                <p>• <strong>Starter:</strong> Pulsador de arranque eléctrico.</p>
                <p>• <strong>BAT / MAIN / ALT:</strong> Interruptores de batería, bus y alternador.</p>
                <p>• <strong>Engine Master:</strong> Interruptor que alimenta eléctricamente la ECU FADEC.</p>
                <p>• <strong>Fuel Pump:</strong> Interruptor de la bomba eléctrica auxiliar.</p>
                <p>• <strong>Force B:</strong> Conmutador para forzar manualmente el canal B.</p>
              </div>
            </div>

            <!-- Instrumentos y avisadores -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DISPLAYS E INDICADORES CED 125 / AED 125</strong>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>CED 125:</strong> Display compacto de motor con RPM de hélice, presión de aceite, temperatura de aceite, temperatura de refrigerante, temperatura de reductora y carga (%).
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>AED 125:</strong> Voltímetro, amperímetro, temperatura de depósitos y luz Water Level.
              </p>
              <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-tight">
                • <strong>Lightpanel (Avisadores):</strong> Pulsador FADEC Test, luces rojas FADEC A y B, luz Alt, y luces ámbar AED/CED Caution y Glow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Nota del Instructor y Gráfico (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">NOTA DEL INSTRUCTOR Y GRÁFICO REQUERIDO</span>
          </div>
          <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-3">
            <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-3">
              <div class="flex items-center justify-between w-full">
                <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                  ORIENTACIÓN DOCENTE
                </span>
                <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                  Pendiente de captura
                </span>
              </div>

              <div class="space-y-1">
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Explicación del Instructor:</span>
                <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  "Familiarízate con la disposición de mandos: el interruptor Engine Master es el control vital del FADEC, y el pulsador FADEC Test se utiliza para la prueba automática de canales en tierra."
                </p>
              </div>

              <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
                <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Gráfico / Captura a incorporar:</span>
                <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fotografía del panel de instrumentos del Cessna 172 señalando la hilera de interruptores, el display CED 125 y el panel anunciador.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Mensaje inferior solicitado: Tomar imagen real del panel e identificar instrumentos -->
        <div class="space-y-1.5 shrink-0 pt-2">
          <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border-2 border-dashed border-amber-400 dark:border-amber-600 flex items-center gap-3 text-amber-950 dark:text-amber-100 shadow-2xs">
            <span class="text-2xl shrink-0">📸</span>
            <div class="space-y-0.5">
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 block">Acción Requerida · Material Gráfico:</span>
              <p class="text-xs font-bold leading-snug text-amber-950 dark:text-amber-100">
                Tomar imagen real del panel e identificar instrumentos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
};

// ============================================================================
// LECCIÓN 2: LIMITACIONES OPERACIONALES POH (13 DIAPOSITIVAS)
// ============================================================================
export const C172_LESSON_2 = {
  id: "17200000-0000-0000-0000-000000000001",
  course_id: C172_COURSE_ID,
  title: "2. Limitaciones Operacionales POH",
  slug: "limitaciones-operacionales-poh",
  sequence_order: 2,
  lesson_order: 2,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 2.1: 2.1 Limitaciones de Velocidad de la Célula (Airspeed Limitations) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · LIMITACIONES POH (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.1 Limitaciones de Velocidad de la Célula (Airspeed Limitations)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Velocidades Estructurales y de Maniobra Calibradas</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Tablas Oficiales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-3">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AIRSPEED LIMITATIONS (VELOCIDADES LÍMITE)</span>
          </div>

          <!-- Tabla de Limitaciones de Velocidad -->
          <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
            <table class="w-full text-left text-[11px] leading-tight">
              <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="p-2.5 px-3 w-[38%]">VELOCIDAD</th>
                  <th class="p-2.5 px-2 text-center w-[13%]">KCAS</th>
                  <th class="p-2.5 px-2 text-center w-[13%] font-extrabold text-[#1a80ff] dark:text-sky-400">KIAS</th>
                  <th class="p-2.5 px-3 w-[36%]">SIGNIFICADO OPERACIONAL</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                <tr>
                  <td class="p-2.5 px-3 font-bold font-mono">V<sub>NE</sub> (Never Exceed)</td>
                  <td class="p-2.5 px-2 text-center font-mono">158</td>
                  <td class="p-2.5 px-2 text-center font-mono font-extrabold text-red-600 dark:text-red-400">160</td>
                  <td class="p-2.5 px-3">No exceder esta velocidad en ninguna operación.</td>
                </tr>
                <tr>
                  <td class="p-2.5 px-3 font-bold font-mono">V<sub>NO</sub> (Max. Structural)</td>
                  <td class="p-2.5 px-2 text-center font-mono">126</td>
                  <td class="p-2.5 px-2 text-center font-mono font-extrabold text-amber-600 dark:text-amber-400">128</td>
                  <td class="p-2.5 px-3">No exceder esta velocidad salvo en aire calmo, y solo con precaución.</td>
                </tr>
                <!-- V_A (Maneuvering Speed) · Formato POH Oficial -->
                <tr class="bg-sky-50/70 dark:bg-sky-950/40">
                  <td class="pt-2 pb-1 px-3 font-bold font-mono text-[#0B2E59] dark:text-sky-300" colspan="3">
                    V<sub>A</sub> (Maneuvering Speed):
                  </td>
                  <td class="p-2.5 px-3 align-middle text-slate-700 dark:text-slate-300 border-l border-slate-200 dark:border-slate-700/60" rowspan="4">
                    No aplicar deflexiones de mandos bruscas ni totales por encima de esta velocidad. La velocidad de maniobra disminuye al reducir el peso de la aeronave.
                  </td>
                </tr>
                <tr class="bg-sky-50/30 dark:bg-sky-950/20">
                  <td class="py-1 px-3 pl-6 whitespace-nowrap">
                    <span class="font-medium text-slate-800 dark:text-slate-200">2.300 lbs</span>
                    <span class="text-[10px] text-slate-400 dark:text-slate-400 font-normal ml-1">(1.043 kg)</span>
                  </td>
                  <td class="py-1 px-2 text-center font-mono text-slate-700 dark:text-slate-300">96</td>
                  <td class="py-1 px-2 text-center font-mono font-extrabold text-blue-600 dark:text-sky-400">97</td>
                </tr>
                <tr class="bg-sky-50/30 dark:bg-sky-950/20">
                  <td class="py-1 px-3 pl-6 whitespace-nowrap">
                    <span class="font-medium text-slate-800 dark:text-slate-200">1.950 lbs</span>
                    <span class="text-[10px] text-slate-400 dark:text-slate-400 font-normal ml-1">(885 kg)</span>
                  </td>
                  <td class="py-1 px-2 text-center font-mono text-slate-700 dark:text-slate-300">88</td>
                  <td class="py-1 px-2 text-center font-mono font-extrabold text-blue-600 dark:text-sky-400">89</td>
                </tr>
                <tr class="bg-sky-50/30 dark:bg-sky-950/20">
                  <td class="pb-2 pt-1 px-3 pl-6 whitespace-nowrap">
                    <span class="font-medium text-slate-800 dark:text-slate-200">1.600 lbs</span>
                    <span class="text-[10px] text-slate-400 dark:text-slate-400 font-normal ml-1">(726 kg)</span>
                  </td>
                  <td class="pb-2 pt-1 px-2 text-center font-mono text-slate-700 dark:text-slate-300">80</td>
                  <td class="pb-2 pt-1 px-2 text-center font-mono font-extrabold text-blue-600 dark:text-sky-400">80</td>
                </tr>
                <tr>
                  <td class="p-2.5 px-3 font-bold font-mono">V<sub>FE</sub> (Max. Flaps Down)</td>
                  <td class="p-2.5 px-2 text-center font-mono">86</td>
                  <td class="p-2.5 px-2 text-center font-mono font-extrabold text-emerald-600 dark:text-emerald-400">85</td>
                  <td class="p-2.5 px-3">No exceder esta velocidad con flaps extendidos.</td>
                </tr>
                <tr>
                  <td class="p-2.5 px-3 font-bold font-mono">Ventanilla Abierta</td>
                  <td class="p-2.5 px-2 text-center font-mono">158</td>
                  <td class="p-2.5 px-2 text-center font-mono font-extrabold">160</td>
                  <td class="p-2.5 px-3">No exceder esta velocidad con las ventanillas abiertas.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Anemómetro Oficial C172 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">VELOCIDADES INDICADAS Y CALIBRADAS</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              El anemómetro presenta lecturas en <strong>KIAS</strong> (Knots Indicated Airspeed). Las velocidades en <strong>KCAS</strong> corrigen los errores de el instrumento, instalación y posición del tubo Pitot.</p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="/images/c172/anemometro-final.jpg" alt="Anemómetro oficial Cessna 172 calibrado en nudos" class="w-full h-full max-h-[290px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>

          <!-- Nota POH sobre V_A trasladada a la derecha -->
          <div class="w-full shrink-0 p-2 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-[11px] leading-relaxed text-slate-700 dark:text-slate-300 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300">Nota POH:</strong> La velocidad de maniobra (V<sub>A</sub>) es la velocidad máxima a la cual la deflexión aerodinámica total de los mandos no excederá los límites estructurales de diseño de la aeronave.
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · LIMITACIONES POH (SECCIÓN 2)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.2 Marcas del Indicador de Velocidad (Airspeed Indicator Markings)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Arcos de Colores y Rangos Operacionales Reglamentarios</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Tablas Oficiales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-3">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AIRSPEED INDICATOR MARKINGS (ARCOS DEL ANEMÓMETRO)</span>
          </div>

          <!-- Tabla de Arcos del Anemómetro (Formato POH Oficial Tabla 2-2) -->
          <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
            <table class="w-full text-left text-[11px] leading-snug">
              <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th class="py-2.5 px-3 w-[19%]">MARCA</th>
                  <th class="py-2.5 px-2 text-center w-[15%] font-mono">RANGO KIAS</th>
                  <th class="py-2.5 px-3 w-[66%]">SIGNIFICADO OFICIAL POH</th>
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
                    41 – 85
                  </td>
                  <td class="py-2.5 px-3 align-top">
                    <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Full Flap Operating Range:</strong>
                    <div class="text-[11px] text-slate-600 dark:text-slate-300 space-y-0.5">
                      <div>• <strong>Límite inferior (41 KIAS):</strong> V<sub>SO</sub> a peso máximo en aterrizaje.</div>
                      <div>• <strong>Límite superior (85 KIAS):</strong> V<sub>FE</sub> máxima con flaps extendidos.</div>
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
                    47 – 128
                  </td>
                  <td class="py-2.5 px-3 align-top">
                    <strong class="text-emerald-800 dark:text-emerald-300 block mb-0.5">Normal Operating Range:</strong>
                    <div class="text-[11px] text-slate-600 dark:text-slate-300 space-y-0.5">
                      <div>• <strong>Límite inferior (47 KIAS):</strong> V<sub>S</sub> con flaps retraídos a peso máximo.</div>
                      <div>• <strong>Límite superior (128 KIAS):</strong> V<sub>NO</sub> crucero estructural máximo.</div>
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
                    128 – 160
                  </td>
                  <td class="py-2.5 px-3 align-top">
                    <strong class="text-amber-800 dark:text-amber-300 block mb-0.5">Caution Range:</strong>
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
                    160
                  </td>
                  <td class="py-2.5 px-3 align-top">
                    <strong class="text-red-700 dark:text-red-400 block mb-0.5">Maximum Speed (V<sub>NE</sub>):</strong>
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

    <!-- Columna Derecha (lg:col-span-5): Anemómetro Oficial C172 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ANEMÓMETRO C172 (CALIBRADO EN KNOTS)</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Indicador de velocidad anemométrica de la célula Cessna 172 con anillo móvil exterior de True Airspeed (TAS) y franjas de limitación reglamentaria de colores.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="/images/c172/anemometro-final.jpg" alt="Anemómetro oficial Cessna 172 con arcos de colores" class="w-full h-full max-h-[250px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>

          <!-- Criterio Operacional del POH trasladado a la derecha -->
          <div class="w-full shrink-0 p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-2xs space-y-1 text-xs">
            <div class="font-bold text-[#0B2E59] dark:text-sky-300 flex items-center gap-1.5 text-xs">
              <span>Criterio Operacional del POH:</span>
            </div>
            <div class="text-[11px] text-slate-700 dark:text-slate-300 leading-snug space-y-1">
              <div>
                <strong class="text-slate-900 dark:text-white">• Régimen con Flaps (&lt; 85 KIAS):</strong>
                Mantener la velocidad estrictamente dentro del Arco Blanco al operar la palanca de flaps para evitar sobrecargas mecánicas.
              </div>
              <div>
                <strong class="text-slate-900 dark:text-white">• Vuelo en Turbulencia (&lt; 128 KIAS):</strong>
                Al encontrar aire turbulento, reducir inmediatamente por debajo del Arco Amarillo (dentro del rango de crucero estructural seguro).
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.3 Límites de Peso y Centro de Gravedad (Weight & CG Limits)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Pesos Máximos y Envolvente de Centrado POH Sec. 2</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Pesos y Límites CG (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">WEIGHT & CG LIMITS (SECTION 2)</span>
        </div>

        <!-- Breve descripción oficial -->
        <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
          <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
            Diagrama oficial de carga y centrado, vinculando los pesos estructurales con los límites de brazo del centro de gravedad.
          </p>
        </div>

        <!-- Tabla de Pesos Estructurales -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 w-full shrink-0">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">LÍMITES DE PESO ESTRUCTURAL (CESSNA 172)</strong>
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
                  <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-medium">1044 kg (2302 lbs)</td>
                  <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-medium">1043 kg (2300 lbs)</td>
                  <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-medium">1043 kg (2300 lbs)</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-amber-600 dark:text-amber-400 whitespace-nowrap">Utility Category</td>
                  <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-medium">908 kg (2002 lbs)</td>
                  <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-medium">907 kg (2000 lbs)</td>
                  <td class="py-1.5 px-1.5 text-slate-800 dark:text-slate-200 font-medium">907 kg (2000 lbs)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Center of Gravity Limits (POH Section 2) -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 w-full shrink-0">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">CENTER OF GRAVITY LIMITS</strong>
            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium hidden sm:inline">Datum: Lower portion of front face of firewall</span>
          </div>

          <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium sm:hidden pb-1 border-b border-slate-100 dark:border-slate-700">
            Datum: Lower portion of front face of firewall
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] leading-snug">
            <!-- Normal Category -->
            <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="font-bold text-[#2361A8] dark:text-sky-400 block uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-700/60 pb-0.5">NORMAL CATEGORY</span>
              <div class="pt-0.5">
                <span class="font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase">Forward:</span>
                <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                  35.0 in. aft of datum at 1950 lbs. or less, with straight line variation to 38.5 in. aft of datum at 2300 lbs.
                </p>
              </div>
              <div>
                <span class="font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase">Aft:</span>
                <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                  47.3 in. aft of datum at all weights.
                </p>
              </div>
            </div>

            <!-- Utility Category -->
            <div class="p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="font-bold text-amber-600 dark:text-amber-400 block uppercase text-[10px] tracking-wider border-b border-slate-200 dark:border-slate-700/60 pb-0.5">UTILITY CATEGORY</span>
              <div class="pt-0.5">
                <span class="font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase">Forward:</span>
                <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                  35.0 in. aft of datum at 1950 lbs. or less, with straight line variation to 35.5 in. aft of datum at 2000 lbs.
                </p>
              </div>
              <div>
                <span class="font-bold text-slate-700 dark:text-slate-300 text-[10px] uppercase">Aft:</span>
                <p class="text-slate-600 dark:text-slate-300 mt-0.5">
                  40.5 in. aft of datum at all weights.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Envolvente de Masa y Centrado (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENVOLVENTE DE MASA Y CENTRADO</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-1.5 lesson-img-wrapper mx-auto img-align-center" draggable="false" style="position: relative; width: 100%; max-width: 100%; height: 100%; float: none; clear: both; opacity: 1;">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/2.1-cg-limits.png?v=2" alt="Envolvente de Masa y Centrado C172 (Figure 6-8)" class="w-full h-full object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; max-height: 100%; width: 100%; height: 100%; background-color: transparent; object-position: center;">
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.4: 2.4 Compartimentos de Equipaje y Categorías de Vuelo (Normal vs Utilidad) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · LIMITACIONES POH (SECCIÓN 2 & 6)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.4 Compartimentos de Equipaje y Categorías de Vuelo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Baggage Compartment Limits & Flight Load Factors</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Sección 2 & 6 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BAGGAGE COMPARTMENT LIMITS (SECCIÓN 2 & 6)</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
          <!-- BAGGAGE AREA 1 -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ÁREA DE EQUIPAJE 1 (STATIONS 82 - 108)</strong>
            <div class="text-[11px] leading-tight space-y-1 text-slate-800 dark:text-slate-200">
              <div class="flex justify-between">
                <span>Capacidad máxima:</span>
                <span class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">120 lbs (54.4 kg)</span>
              </div>
              <div class="flex justify-between">
                <span>Brazo de palanca (C.G. Arm):</span>
                <span class="font-mono font-bold">95 in (2.41 m)</span>
              </div>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 pt-0.5">Ubicado inmediatamente tras los respaldos de asientos traseros hasta la cuaderna de la estación 108.</p>
            </div>
          </div>

          <!-- BAGGAGE AREA 2 -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ÁREA DE EQUIPAJE 2 (STATIONS 108 - 142)</strong>
            <div class="text-[11px] leading-tight space-y-1 text-slate-800 dark:text-slate-200">
              <div class="flex justify-between">
                <span>Capacidad máxima:</span>
                <span class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">50 lbs (22.7 kg)</span>
              </div>
              <div class="flex justify-between">
                <span>Brazo de palanca (C.G. Arm):</span>
                <span class="font-mono font-bold">123 in (3.12 m)</span>
              </div>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 pt-0.5">Espacio posterior bajo la repisa entre las cuadernas de fuselaje de estación 108 y 142.</p>
            </div>
          </div>
        </div>

        <!-- WARNING COMBINED WEIGHT -->
        <div class="p-2 px-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
            <span>⚠️</span>
            <span>LIMITACIÓN COMBINADA ESTRICTA (POH NOTE):</span>
          </strong>
          <div>"The maximum combined weight capacity for both Baggage Area 1 and Baggage Area 2 is 120 pounds (54.4 kg)." No se puede cargar 120 lbs en el Área 1 y 50 lbs en el Área 2 simultáneamente; el peso sumado de ambos compartimentos no puede superar jamás los 120 lbs (54.4 kg).</div>
        </div>

        <div class="flex items-center justify-between shrink-0 pt-1 pb-0.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FACTORES DE CARGA (FLIGHT LOAD FACTOR LIMITS)</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch text-[11px]">
          <!-- CATEGORÍA NORMAL -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase">CATEGORÍA NORMAL (MTOW 2300 lbs)</strong>
            <div class="flex justify-between py-0.5">
              <span>Flaps UP (Recogidos):</span>
              <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+3.8 G / -1.52 G</span>
            </div>
            <div class="flex justify-between py-0.5">
              <span>Flaps DOWN (Extendidos):</span>
              <span class="font-mono font-bold text-blue-600 dark:text-sky-400">+3.0 G</span>
            </div>
            <p class="text-[10px] text-slate-500 dark:text-slate-400">Operaciones no acrobáticas estándar de crucero, navegación e instrucción básica.</p>
          </div>

          <!-- CATEGORÍA UTILIDAD -->
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase">CATEGORÍA UTILIDAD (MTOW 2000 lbs)</strong>
            <div class="flex justify-between py-0.5">
              <span>Flaps UP (Recogidos):</span>
              <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+4.4 G / -1.76 G</span>
            </div>
            <div class="flex justify-between py-0.5">
              <span>Flaps DOWN (Extendidos):</span>
              <span class="font-mono font-bold text-blue-600 dark:text-sky-400">+3.0 G</span>
            </div>
            <p class="text-[10px] text-slate-500 dark:text-slate-400"><strong>Condición reglamentaria POH:</strong> Prohibido equipaje en Área 1 y 2, y prohibidos pasajeros en plazas traseras.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama Oficial POH Fig 6-3 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESTACIONES DE FUSELAJE C172 (FIG. 6-3)</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Diagrama oficial de disposición de carga (*Loading Arrangements*) de la Cessna 172 con las estaciones de gravedad en pulgadas desde el Datum (pared cortafuegos).
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-white flex items-center justify-center p-2">
            <img src="/images/c172/figure_6_3_loading_arrangements.jpg?v=2" alt="Figura 6-3 Disposición de Carga y Compartimentos de Equipaje Cessna 172" class="w-full h-full max-h-[380px] object-contain rounded-lg" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.5 Límites de Maniobra y Factores de Carga</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Límites Estructurales POH EC-NNA Sec. 2 & Prohibición de Barrenas</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">MANEUVER & FLIGHT LOAD LIMITS (POH EC-NNA SEC. 2)</span>
        </div>
        <div class="space-y-1.5 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <!-- LÍMITES DE MANIOBRA -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">LÍMITES DE MANIOBRA (POH & SUPLEMENTO)</strong>
              <div class="space-y-1 pt-0.5">
                <div class="flex items-start gap-1.5 text-[11px] leading-snug">
                  <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                  <span><strong class="text-slate-900 dark:text-slate-100">Categoría Normal (MTOW 1043 kg / 2300 lbs):</strong> Maniobras normales de vuelo, virajes con banqueo &le; 60°, pérdidas suaves, ochos perezosos y chandelles. Prohibidas acrobacias.</span>
                </div>
                <div class="flex items-start gap-1.5 text-[11px] leading-snug">
                  <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                  <span><strong class="text-slate-900 dark:text-slate-100">Categoría Utilidad (MTOW 907 kg / 2000 lbs):</strong> Prohibido equipaje en áreas 1 y 2, y prohibidos pasajeros en plazas traseras.</span>
                </div>
                <div class="flex items-start gap-1.5 text-[11px] leading-snug">
                  <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                  <span>Prohibido iniciar barrenas intencionadamente (*Intentionally initiating spins is prohibited*).</span>
                </div>
                <div class="flex items-start gap-1.5 text-[11px] leading-snug">
                  <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                  <span class="text-slate-700 dark:text-slate-300">Vuelo en turbulencia: Obligatorio selector en posición BOTH.</span>
                </div>
              </div>
            </div>

            <!-- FACTORES DE CARGA -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FACTORES DE CARGA (POH C172N SEC. 2)</strong>
              <div class="space-y-1 pt-0.5">
                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80">
                  <div class="font-bold text-[#2361A8] dark:text-sky-400 text-[10px] uppercase">Categoría Normal (hasta 2300 lbs):</div>
                  <div class="flex justify-between text-[11px] font-medium pt-0.5">
                    <span class="text-slate-700 dark:text-slate-300">Flaps UP: <strong class="text-emerald-600 dark:text-emerald-400 font-mono">+3.8 G / -1.52 G</strong></span>
                    <span class="text-slate-700 dark:text-slate-300">Flaps DOWN (10°-40°): <strong class="text-blue-600 dark:text-sky-400 font-mono">+3.0 G</strong></span>
                  </div>
                </div>

                <div class="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80">
                  <div class="font-bold text-amber-600 dark:text-amber-400 text-[10px] uppercase">Categoría Utilidad (hasta 2000 lbs):</div>
                  <div class="flex justify-between text-[11px] font-medium pt-0.5">
                    <span class="text-slate-700 dark:text-slate-300">Flaps UP: <strong class="text-emerald-600 dark:text-emerald-400 font-mono">+4.4 G / -1.76 G</strong></span>
                    <span class="text-slate-700 dark:text-slate-300">Flaps DOWN (10°-40°): <strong class="text-blue-600 dark:text-sky-400 font-mono">+3.0 G</strong></span>
                  </div>
                </div>

                <div class="flex items-start gap-1.5 text-[11px] leading-snug pt-0.5">
                  <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
                  <span class="text-slate-700 dark:text-slate-300">Aceleración negativa con flaps: El diseño aerodinámico restringe el límite a 0.0 G en configuración de flaps extendidos.</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs shrink-0">
              <span>⚡</span>
              <span>CAUTION (LIMITACIÓN CRÍTICA MOTOR CONTINENTAL):</span>
            </strong>
            <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight">
              <li class="pl-0.5">Está prohibido iniciar intencionadamente maniobras con G negativa (Intentionally initiating negative G maneuvers is prohibited).</li>
              <li class="pl-0.5">Evite la duración prolongada de cargas G negativas: pueden provocar fallos en el control de paso de la hélice e interrupción de la alimentación de combustible al motor.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama de Maniobra V-n (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-2 flex-1 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA DE MANIOBRA V-n</span>
          </div>

          <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-2">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/vn.jpg" alt="Diagrama de Maniobra V-n C172" class="w-full h-full max-h-[500px] object-contain rounded-lg" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.6 Límites de Motor: Potencia, RPM y Techo Operativo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Technify Motors TAE 125 (CD-135 vs CD-155), RPM y Techo Certificado</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE OPERATING LIMITS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- CD-135 (TAE 125-01 / 02-99) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONTINENTAL CD-135 (TAE 125-01 / 02-99)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Fabricante del motor: Technify Motors GmbH</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Potencia máx. despegue y continua: 99 kW (135 HP / 133 BHP)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Régimen máx. despegue y continuo: 2.300 RPM de hélice (min⁻¹)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Techo máximo certificado: 17.500 ft de altitud de presión</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Cilindrada: 1.689 cm³ (TAE 125-01) o 1.991 cm³ (TAE 125-02-99)</span>
            </div>
            </div>

            <!-- CD-155 (TAE 125-02-114) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONTINENTAL CD-155 (TAE 125-02-114)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Fabricante del motor: Technify Motors GmbH</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Potencia máx. despegue y continua: 114 kW (155 HP / 153 BHP)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Régimen máx. despegue y continuo: 2.300 RPM de hélice (min⁻¹)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Techo máximo certificado: 18.000 ft de altitud de presión</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Cilindrada: 1.991 cm³</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>En ausencia de otra declaración explícita, toda la información sobre RPM en este suplemento del POH corresponde a RPM de la hélice (propeller RPM). La relación de reducción de la caja reductora es i = 1.69.</div>
        </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight my-1 shadow-2xs shrink-0">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING (LIMITACIÓN DE ARRANQUE POH SEC. 2):</span>
          </strong>
          <div>No está permitido arrancar el motor utilizando energía externa (external power). Si el arranque no es posible empleando la batería de a bordo, debe verificarse obligatoriamente el estado de la batería antes del vuelo.</div>
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

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/potencia-altitud-fadec.jpg" alt="Régimen de Potencia vs Altitud y Monomando FADEC C172" class="w-full h-full max-h-[480px] object-contain rounded-lg" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.7 Límites Operacionales de Temperatura</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Límites de Aceite de Motor, Líquido Refrigerante y Caja Reductora</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TEMPERATURE OPERATING LIMITS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- ACEITE MOTOR Y REFRIGERANTE -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ACEITE MOTOR Y LÍQUIDO REFRIGERANTE</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aceite - Temperatura mínima de arranque: -32 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aceite - Límite mínimo de operación: 50 °C (mínimo para Take-off RPM)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aceite - Límite máximo de operación: 140 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Refrigerante - Temperatura mínima de arranque: -32 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Refrigerante - Límite mínimo de operación: 60 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Refrigerante - Límite máximo de operación: 105 °C</span>
            </div>
            </div>

            <!-- CAJA REDUCTORA (GEARBOX) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CAJA REDUCTORA Y CALENTAMIENTO</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Reductora - Límite mínimo de operación: -30 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Reductora - Límite máximo de operación: 120 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Régimen de calentamiento: Ajustar régimen warm-up (Sección 4) hasta alcanzar los límites mínimos de operación</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Calefacción de cabina: Circuito abierto permanente; mantener mando en OPEN en operación normal</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight text-[11px] leading-tight">
            <li class="pl-0.5">No está permitido arrancar el motor fuera de estos límites de temperatura (It is not allowed to start the engine outside of these temperature limits).</li>
            <li class="pl-0.5">El límite mínimo de operación es una temperatura por debajo de la cual el motor puede arrancarse pero NO operarse a RPM de despegue (Take-off RPM).</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Límites Operacionales de Temperatura (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA SINÓPTICO DE TEMPERATURAS</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/limites-temperatura.jpg" alt="Límites Operacionales de Temperatura C172" class="w-full h-full max-h-[480px] object-contain rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.8: 2.8 Límites de Presión y Consumo de Aceite -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.8 Límites de Presión y Consumo de Aceite</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Presión Mínima (1.2 / 2.3 bar), Máxima (6.0 bar) y Consumo Máximo (0.1 l/h)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">OIL PRESSURE & CONSUMPTION</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- LÍMITES DE PRESIÓN -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">LÍMITES DE PRESIÓN DE ACEITE</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Presión mínima de aceite: 1.2 bar (17.4 psi) en ralentí</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Presión mínima a potencia de despegue (Take-off power): 2.3 bar (33.4 psi)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Presión mínima en vuelo (in flight): 2.3 bar (33.4 psi)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Presión máxima de aceite: 6.0 bar (87.0 psi)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Pico transitorio en arranque en frío (< 20 segundos): 6.5 bar (94.3 psi)</span>
            </div>
            </div>

            <!-- CONSUMO Y NIVELES -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONSUMO Y CAPACIDAD DE CÁRTER</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Consumo máximo de aceite admisible: 0.1 l/h (0.1 quart/h)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Capacidad total de aceite en cárter: Entre 4.5 l (mínimo) y 6.0 l (máximo)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Comprobación de nivel: Varilla accesible por la compuerta de inspección</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Prohibición de vuelo: No iniciar el vuelo si el nivel está por debajo de MIN</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <div>El motor no debe arrancarse bajo ninguna circunstancia si algún nivel de fluido es demasiado bajo. Compruebe la varilla de aceite y los niveles antes de cada vuelo.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Circuito de Lubricación y Manómetro (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CIRCUITO DE LUBRICACIÓN Y MANÓMETRO</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/presion-aceite-lubricacion.jpg" alt="Circuito de Lubricación y Manómetro de Presión de Aceite C172" class="w-full h-full max-h-[480px] object-contain rounded-lg" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.9 Límites Térmicos de Combustible en Depósito</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tabla 2-3a POH: Temperaturas Mínimas para JET A-1 (-30°C / -35°C) y Diésel (>0°C / -5°C)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUEL TEMPERATURE LIMITS IN TANK</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- JET FUELS (TABLA 2-3a) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">QUEROSENOS JET A-1, JET A, JP-8, TS-1</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Combustibles incluidos: JET A-1, JET A, Jet Fuel No. 3, JP-8, JP-8+100, TS-1</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Mínima en depósito antes del despegue (before Take-off): -30 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Mínima en depósito durante el vuelo (during the flight): -35 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Vigilancia en vuelo: Monitorizar temperatura en display auxiliar AED 125</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Depósito no utilizado: Debe monitorizarse si se prevé su uso posterior</span>
            </div>
            </div>

            <!-- DIÉSEL Y MEZCLAS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DIÉSEL (DIN EN 590) Y SASOL GTL</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Combustibles incluidos: Diésel automoción (DIN EN 590) y Sasol GTL</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Mínima en depósito antes del despegue (before Take-off): Superior a 0 °C (> 0 °C)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Mínima en depósito durante el vuelo (during the flight): -5 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Regla de mezclas (> 10% Diésel): Rigen los límites estrictos de Diésel</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Criterio de seguridad: Ante incertidumbre del combustible en depósito, asumir Diésel</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight text-[11px] leading-tight">
            <li class="pl-0.5">Debe monitorizarse la temperatura del combustible del depósito que no esté en uso si se tiene previsto utilizarlo más adelante en el vuelo.</li>
            <li class="pl-0.5">Para mezclas de Diésel y combustible JET en el depósito: tan pronto como la proporción de Diésel en el depósito sea superior al 10%, deben respetarse los límites de temperatura para operación con Diésel (> 0 °C antes del despegue / -5 °C en vuelo). Si existe incertidumbre sobre qué combustible hay en el depósito, debe asumirse que es Diésel.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Temperatura de Combustible y Retorno (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SONDAS TÉRMICAS Y RETORNO DE COMBUSTIBLE</span>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/temperatura-combustible-retorno.jpg" alt="Sondas Térmicas en Depósitos y Circuito de Retorno C172" class="w-full h-full max-h-[480px] object-contain rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.10: 2.10 Marcas de Instrumentos CED 125 (Motor y Reductora) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.10 Marcas de Instrumentos CED 125 (Motor y Reductora)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tabla 2-2 / 2-3b POH: Rangos Verde, Ámbar y Rojo en el Display Compacto</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Tablas con espacio equilibrado, sin scroll) -->
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
              <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">POH Tabla 2-2</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-[11px] leading-tight">
                <thead>
                  <tr class="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider">
                    <th class="py-1.5 px-2 font-bold text-[#0B2E59] dark:text-sky-300 w-[22%] whitespace-nowrap">Parámetro</th>
                    <th class="py-1.5 px-2 font-bold text-emerald-700 dark:text-emerald-400 w-[18%] whitespace-nowrap">Verde</th>
                    <th class="py-1.5 px-2 font-bold text-amber-700 dark:text-amber-400 w-[35%] whitespace-nowrap">Ámbar</th>
                    <th class="py-1.5 px-2 font-bold text-red-700 dark:text-red-400 w-[25%] whitespace-nowrap">Roja</th>
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
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">2.3 - 5.1 bar</td>
                    <td class="py-1.5 px-2 text-amber-700 dark:text-amber-400 font-medium font-mono">1.2 - 2.2 | 5.2 - 6.5</td>
                    <td class="py-1.5 px-2 text-red-700 dark:text-red-400 font-medium font-mono">0 - 1.1 | &gt; 6.5 bar</td>
                  </tr>
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Oil Pressure [psi]</td>
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">33.4 - 74 psi</td>
                    <td class="py-1.5 px-2 text-amber-700 dark:text-amber-400 font-medium font-mono">17.4 - 32 | 75.4 - 87.0</td>
                    <td class="py-1.5 px-2 text-red-700 dark:text-red-400 font-medium font-mono">0 - 16 | &gt; 87.0 psi</td>
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
              <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">POH Tabla 2-2</span>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full text-left text-[11px] leading-tight">
                <thead>
                  <tr class="border-b border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 uppercase text-[10px] tracking-wider">
                    <th class="py-1.5 px-2 font-bold text-[#0B2E59] dark:text-sky-300 w-[22%] whitespace-nowrap">Parámetro</th>
                    <th class="py-1.5 px-2 font-bold text-emerald-700 dark:text-emerald-400 w-[18%] whitespace-nowrap">Verde</th>
                    <th class="py-1.5 px-2 font-bold text-amber-700 dark:text-amber-400 w-[35%] whitespace-nowrap">Ámbar</th>
                    <th class="py-1.5 px-2 font-bold text-red-700 dark:text-red-400 w-[25%] whitespace-nowrap">Roja</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Coolant Temp [°C]</td>
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">60 - 100 °C</td>
                    <td class="py-1.5 px-2 text-amber-700 dark:text-amber-400 font-medium font-mono">-32...+59 | 101 - 105</td>
                    <td class="py-1.5 px-2 text-red-700 dark:text-red-400 font-medium font-mono">&lt; -32 | &gt; 105 °C</td>
                  </tr>
                  <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                    <td class="py-1.5 px-2 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Oil Temp [°C]</td>
                    <td class="py-1.5 px-2 text-emerald-700 dark:text-emerald-400 font-medium font-mono">50 - 129 °C</td>
                    <td class="py-1.5 px-2 text-amber-700 dark:text-amber-400 font-medium font-mono">-32...+49 | 130 - 140</td>
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
        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-between p-2">
          <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/2.7-v2.jpg?v=2" alt="Compact Engine Display CED 125" class="w-full h-full max-h-[385px] object-contain rounded-lg" />
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

<!-- DIAPOSITIVA 2.11: 2.11 Marcas de Instrumentos AED 125 y Botón Confirm/Test -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.11 Marcas de Instrumentos AED 125 y Botón Confirm/Test</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Parámetros Eléctricos, Temperatura de Combustible y Lógica de Rearme de Alarmas</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): POH Suplemento Sección 2 (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AED 125 & CONFIRM/TEST LOGIC</span>
        </div>

        <!-- TABLA DE MARCAS DE INSTRUMENTOS AED 125 -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 w-full shrink-0">
          <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase tracking-wide">MARCAS DE INSTRUMENTOS AUXILIARES (AED 125)</strong>
            <span class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">POH Tabla 2-3</span>
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
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Fuel Temp (L y R) [°C]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">0 - 69 °C</td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">-30...-1 | 70 - 75 °C</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&lt; -30 | &gt; 75 °C</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Voltage (14V) [V]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">12.6 - 14.0 V</td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">11 - 12.5 | 15.0 V</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">0 - 10 | &gt; 15.0 V</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Voltage (28V) [V]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">25 - 29.4 V</td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">22 - 24 | 29.5 - 30 V</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">0 - 21 | &gt; 30 V</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Alternator Current (14V) [A]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">0 - 84 A</td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">85 - 90 A</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&gt; 90 A</td>
                </tr>
                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                  <td class="py-1.5 px-1.5 font-bold text-slate-800 dark:text-slate-200 whitespace-nowrap">Alternator Current (28V) [A]</td>
                  <td class="py-1.5 px-1.5 text-emerald-700 dark:text-emerald-400 font-medium font-mono">0 - 52.4 A</td>
                  <td class="py-1.5 px-1.5 text-amber-700 dark:text-amber-400 font-medium font-mono">52.5 - 60 A</td>
                  <td class="py-1.5 px-1.5 text-red-700 dark:text-red-400 font-medium font-mono">&gt; 60 A</td>
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
              <span class="text-slate-800 dark:text-slate-200"><strong>Activación de aviso:</strong> La luz AED/CED Caution se enciende al entrar en rango ámbar o rojo.</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Memorización:</strong> Permanece encendida aunque el parámetro retorne a la zona verde.</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Confirmación:</strong> El piloto debe presionar el botón Confirm/Test para apagar la lámpara.</span>
            </div>
            <div class="flex items-start gap-1.5">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Rearme automático:</strong> Tras ser confirmada, volverá a iluminarse si otro parámetro se desvía.</span>
            </div>
            <div class="flex items-start gap-1.5 sm:col-span-2">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200"><strong>Prueba de encendido:</strong> Presionar el botón más de 1 segundo inicia la secuencia de autotest.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): 50% AED 125 + NOTA / 50% Panel Anunciador (Altura Fija 590px sin scroll) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AED 125 & PANEL ANUNCIADOR</span>
        </div>

        <div class="flex flex-col gap-2 flex-1 min-h-0">
          <!-- 1. PARTE SUPERIOR: AED 125 (Izquierda, ampliado) + NOTA (Derecha) -->
          <div class="flex-[1.18] min-h-0 flex flex-col rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white p-2.5 shadow-2xs">
            <div class="flex items-center justify-between shrink-0 pb-0.5 mb-1 border-b border-slate-100 dark:border-slate-200/20">
              <span class="text-[11px] font-bold text-[#0B2E59] dark:text-[#0B2E59] uppercase tracking-wide flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-sky-600"></span>
                AED 125 · Auxiliary Engine Display
              </span>
              <span class="text-[9px] font-bold text-sky-800 bg-sky-100 px-1.5 py-0.5 rounded">Fuel Temp / V / A</span>
            </div>

            <div class="flex-1 min-h-0 grid grid-cols-12 gap-3 items-center">
              <!-- AED 125 a la izquierda (col-span-6, tamaño optimizado) -->
              <div class="col-span-6 h-full flex items-center justify-center overflow-hidden py-0.5">
                <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/2.8-aed.jpg?v=1" alt="Auxiliary Engine Display AED 125" class="w-full h-full max-h-[205px] object-contain rounded-md" />
              </div>

              <!-- NOTA en cuadro a la derecha (col-span-6) -->
              <div class="col-span-6 p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-relaxed shadow-2xs">
                <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs">
                  <span>ℹ️</span>
                  <span>NOTE:</span>
                </strong>
                <div>La lámpara de aviso AED/CED permanece encendida incluso cuando la indicación del motor regresa al rango verde/normal de operación y debe ser confirmada presionando el pulsador Confirm/Test.</div>
              </div>
            </div>
          </div>

          <!-- 2. PARTE INFERIOR: Panel Anunciador de Alarmas (Ajustado armónicamente sin perder nitidez) -->
          <div class="flex-1 min-h-0 flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white p-2 shadow-2xs">
            <div class="flex items-center justify-between shrink-0 pb-0.5 mb-1 border-b border-slate-100 dark:border-slate-200/20">
              <span class="text-[11px] font-bold text-[#0B2E59] dark:text-[#0B2E59] uppercase tracking-wide flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-amber-500"></span>
                Panel Anunciador · Luces de Aviso y Alarma
              </span>
              <span class="text-[9px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded">CED/AED Caution</span>
            </div>

            <div class="w-full flex-1 min-h-0 bg-white flex items-center justify-center overflow-hidden py-0.5">
              <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/2.8-annunciator.jpg?v=1" alt="Panel Anunciador de Cabina C172" class="w-full h-full max-h-[165px] object-contain rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.12: 2.12 Combustibles Autorizados y Capacidades de Depósitos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.12 Combustibles Autorizados y Capacidades de Depósitos</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Grados JET/Diésel, Densidad (0.84 kg/l), Capacidades y Aviso Low Level (<10 l)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUEL GRADES & CAPACITIES</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- GRADOS PERMITIDOS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">COMBUSTIBLES Y DENSIDAD (0.84 KG/L)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Combustibles autorizados: JET A-1, JET A (ASTM 1655), Jet Fuel No.3, JP-8, JP-8+100, TS-1</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Alternativos autorizados: Diésel automoción (DIN EN 590) y Sasol GTL</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Densidad superior: Jet A-1 / Diésel (0.84 kg/l) frente a AVGAS (0.715 kg/l)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Reducción de capacidad: Cuello de llenado recortado para respetar la carga alar máxima</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aditivo antifúngico: Permitido aditivo Biobor JF según especificaciones</span>
            </div>
            </div>

            <!-- CAPACIDADES DE DEPÓSITOS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CAPACIDADES MÁXIMAS DE DEPÓSITOS</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">2 Standard Tanks: Total 138.8 l (36.6 gal) | No utilizable 11.4 l (3.0 gal) | Utilizable 127.4 l (33.6 gal)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">2 Long-Range Tanks: Total 173.6 l (45.9 gal) | No utilizable 15.1 l (4.0 gal) | Utilizable 158.6 l (41.9 gal)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">2 Integral Tanks (Normal): Total 219.6 l (58.0 gal) | No utilizable 22.8 l | Utilizable 196.8 l (52.0 gal)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aviso Low Level: Se ilumina Fuel L o Fuel R cuando el nivel es inferior a 10 l (2.6 gal) por depósito</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight text-[11px] leading-tight">
            <li class="pl-0.5">Para evitar la entrada de aire en el sistema de combustible, evite agotar los depósitos. En cuanto se ilumine el aviso 'Low Level', conmute al depósito con combustible suficiente o aterrice.</li>
            <li class="pl-0.5">Con ¼ de depósito o menos, está prohibido el vuelo descoordinado prolongado en cualquiera de los depósitos.</li>
            <li class="pl-0.5">En aire turbulento se recomienda encarecidamente utilizar la posición BOTH.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema de Depósitos Alares y Selector (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-center items-center p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="w-full h-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-between p-2">
          <div class="w-full flex-1 min-h-0 flex items-center justify-center overflow-hidden">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/2.9-fuel.jpg?v=1" alt="Diagrama del sistema de combustible (Left, Right, Both)" class="w-full h-full max-h-[530px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1.5 text-center text-xs text-slate-600 dark:text-slate-300 font-medium shrink-0">
            <strong class="font-bold text-[#0B2E59] dark:text-sky-300">Diagrama del sistema de combustible</strong> (Left, Right, Both)
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.13: 2.13 Fluidos Autorizados y Placards Obligatorios -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">2.13 Fluidos Autorizados y Placards Obligatorios</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aceites Aprobados, Refrigerante G48 y Letreros Mandatorios de Célula y Cabina</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PERMISSIBLE FLUIDS & PLACARDS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- FLUIDOS APROBADOS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FLUIDOS Y LUBRICANTES AUTORIZADOS</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aceite motor: AeroShell Oil Diesel Ultra, AeroShell Oil Diesel 10W-40, Shell Helix Ultra 5W-30 / 5W-40</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aceite reductora: Centurion Gearbox Oil N1, Shell Spirax S6 ATF ZM, Shell Spirax S6 GXME 75W-80 API GL-4</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Refrigerante: Agua y anticongelante al 50:50 (BASF Glysantin Protect Plus / G48). Punto congelación: -36 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Prohibición: Prohibido mezclar tipos o marcas no declaradas expresamente</span>
            </div>
            </div>

            <!-- PLACARDS OBLIGATORIOS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PLACARDS OBLIGATORIOS (LETREROS)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Bocas de combustible: 'JET FUEL ONLY - JET A-1 / DIESEL - CAP. [X] USABLE TO BOTTOM OF FILLER TAB'</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Selector de combustible: Indicación de capacidades por posición (LEFT, RIGHT y BOTH)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Compuerta de aceite: 'Oil, see POH supplement'</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Toma externa GPU (si instalada): 'ATTENTION 12 V DC / 24 V DC OBSERVE CORRECT POLARITY'</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <div>¡Utilice únicamente aceite aprobado con la designación exacta! Todos los demás letreros (placards) y limitaciones contenidos en el POH aprobado por EASA de la aeronave original permanecen plenamente vigentes.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Placards y Accesos de Servicio (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-center items-center p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="w-full h-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/2.10-v2.jpg?v=2" alt="Placards Obligatorios de Cabina y Accesos de Servicio C172" class="w-full h-full max-h-[570px] object-contain rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</div>`,
};

// ============================================================================
// LECCIÓN 2: INGENIERÍA Y SISTEMAS CONTINENTAL DIESEL (8 DIAPOSITIVAS)
// ============================================================================
export const C172_LESSON_3 = {
  id: "17200000-0000-0000-0000-000000000002",
  course_id: C172_COURSE_ID,
  title: "3. Ingeniería del Avión y Sistemas Continental CD-135 / CD-155",
  slug: "sistemas-continental-diesel",
  sequence_order: 3,
  lesson_order: 3,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 3.1: 3.1 Motor Continental TAE 125: Arquitectura y Especificaciones -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.1 Motor Continental TAE 125: Arquitectura y Especificaciones</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Modelos CD-135 (TAE 125-02-99) y CD-155 (TAE 125-02-114)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE SPECIFICATIONS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- CD-135 (TAE 125-02-99) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONTINENTAL CD-135 (TAE 125-02-99)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Potencia máxima: 99 kW (135 HP / 133 BHP) a 2.300 RPM de hélice (Take-off y Max. Continuous)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Cilindrada: 1.991 cm³ (121.5 in³) [variante TAE 125-01: 1.689 cm³]</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Arquitectura: 4 cilindros en línea, 4 tiempos, refrigeración líquida, DOHC (doble árbol de levas en culata)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Inyección: Directa Diésel con tecnología Common Rail y turbocompresor con intercooler</span>
            </div>
            </div>

            <!-- CD-155 (TAE 125-02-114) -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONTINENTAL CD-155 (TAE 125-02-114)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Potencia máxima: 114 kW (155 HP / 153 BHP) a 2.300 RPM de hélice (Take-off y Max. Continuous)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Cilindrada: 1.991 cm³ (121.5 in³)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Arquitectura: 4 cilindros en línea, 4 tiempos, refrigeración líquida, DOHC (doble árbol de levas en culata)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Inyección: Directa Diésel con tecnología Common Rail y turbocompresor con intercooler</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>Debido a la tecnología Common Rail con FADEC, quedan suprimidos en ambas motorizaciones: carburador y calefacción de carburador, magnetos de encendido y bujías, palanca de mezcla (mixture) y sistema de cebador manual (primer).</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Planta Motriz Continental CD-155 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PLANTA MOTRIZ CONTINENTAL CD-155 / CD-135</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Arquitectura general del motor Continental CD-155 (TAE 125-02-114): 4 cilindros en línea, refrigeración líquida, inyección directa Common Rail y turbocompresión.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.1-cd155-engine.png?v=1" alt="Motor Continental Jet-A CD-155" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.2 Reductora Integrada y Hélice MT-Propeller</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Relación de Reducción i=1.69 y Paso Variable Constant Speed</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="50">
    <!-- Columna Izquierda (lg:col-span-6): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
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
              <span class="text-slate-800 dark:text-slate-200">Relación de reducción: i = 1.69 (las RPM del cigüeñal se reducen a RPM de hélice)</span>
            </div>
            <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200">Amortiguación: Amortiguador mecánico de torsión y vibraciones integrado</span>
            </div>
            <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200">Embrague de sobrecarga (overload release): Desacopla ante picos de par anómalos o impacto de hélice</span>
            </div>
            <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200">Lubricación independiente: Circuito de aceite propio con intercambiador agua/aceite</span>
            </div>
            </div>

            <!-- HÉLICE MT-PROPELLER -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">HÉLICE TRIPALA CONSTANT SPEED</strong>
            <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200">Fabricante: MT-Propeller Entwicklung GmbH</span>
            </div>
            <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200">Modelos: MTV-6-A/187-129 (Ø 1.87 m) o MTV-6-A/190-69 (Ø 1.90 m)</span>
            </div>
            <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200">Construcción: 3 palas de material compuesto (madera laminada recubierta de fibra y borde de acero)</span>
            </div>
            <div class="flex items-start gap-1.5 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0">•</span>
              <span class="text-slate-800 dark:text-slate-200">Gobierno de paso: Regulador electro-hidráulico gobernado por el FADEC mediante presión de aceite</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>Ante una pérdida de presión de aceite en el regulador de la hélice, los contrapesos y resortes llevan las palas automáticamente a paso fino (low pitch). Para evitar el sobregiro de hélice en caso de fallo, mantenga velocidades inferiores a 100 KIAS.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-6): Reductora Integrada y Hélice MT-Propeller (Altura Fija 590px - Imagen Máxima) -->
    <div class="lg:col-span-6 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CAJA REDUCTORA Y HÉLICE MT-PROPELLER</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 px-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-[11px] text-slate-700 dark:text-slate-200 leading-snug font-medium">
              Arquitectura de la caja reductora con relación i=1.69, amortiguador torsional, embrague de sobrecarga y sistema de gobierno electro-hidráulico de la hélice MTV-6.
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.3 Sistema FADEC: Control Digital y Redundancia Dual</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Doble ECU (Canal A y B), Sensores Duplicados y Mando Único</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
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
              <span class="text-slate-800 dark:text-slate-200">Doble ECU independiente: FADEC A (activo en operación normal) y FADEC B (canal de respaldo permanente)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Sensores duplicados: Captadores dobles de RPM cigüeñal/árbol, presión de raíl, presión de admisión (MAP) y temperaturas</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Conmutación automática: Si la ECU activa detecta un fallo interno o de sensores, conmuta instantáneamente al otro canal</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Mando único (Thrust Lever): Los potenciómetros de cabina traducen la demanda del piloto en presión de sobrealimentación e inyección</span>
            </div>
            </div>

            <!-- ALIMENTACIÓN ELÉCTRICA FADEC -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ALIMENTACIÓN Y RESPALDO ELÉCTRICO</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Dependencia eléctrica total: El motor diésel no posee magnetos; los inyectores y la ECU requieren corriente continua</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Fuentes primarias: Alternador de 14V / 28V y Batería Principal a través del conmutador Main Bus</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Batería FADEC Backup: Conectada exclusivamente al FADEC A, tiene un máximo de 30 minutos de operación de motor sin alternador ni batería principal</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Master: Interruptor de doble contacto que activa simultáneamente ambas ECUs del FADEC</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight text-[11px] leading-tight">
            <li class="pl-0.5">El FADEC consta de dos componentes totalmente independientes entre sí: FADEC A y FADEC B. En caso de avería en el FADEC activo, conmuta automáticamente al otro.</li>
            <li class="pl-0.5">Si el conmutador Engine Master se coloca en OFF, se corta la alimentación eléctrica del FADEC y el motor se apaga de inmediato.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Arquitectura del Sistema FADEC (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ARQUITECTURA DEL SISTEMA FADEC</span>
        </div>
        <div class="w-full flex-1 min-h-0 flex flex-col justify-start space-y-1.5 overflow-hidden">
          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Esquema funcional de redundancia dual: doble unidad de control electrónico (ECU A y B), sensorica duplicada, fuentes de alimentación y gobierno integral monomando.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.3-fadec.jpg?v=1" alt="Arquitectura del Sistema FADEC Continental CD-135 / CD-155" class="w-full h-full max-h-[380px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.4: 3.4 Gestión FADEC: Autoprueba, Categorías de Fallo y FORCE B -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.4 Gestión FADEC: Autoprueba, Categorías de Fallo y FORCE B</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Lógica del Pulsador de Test (2s), Categorías Low/High y Mando FORCE B</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FADEC TEST &amp; FORCE B</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- TEST Y CATEGORÍAS DE FALLO -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PULSADOR DE PRUEBA Y CATEGORÍAS</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Pulsador FADEC Test: Debe presionarse durante al menos 2 segundos continuos</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Categoría LOW (Baja gravedad): Las luces FADEC activas se apagan tras pulsar 2 segundos; continúe el vuelo y notifique a mantenimiento</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Categoría HIGH (Alta gravedad): Las luces FADEC activas quedan iluminadas fijas tras pulsar 2 segundos; fallo grave diagnosticado</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Acción ante categoría HIGH: Aterrice lo antes posible (land as soon as possible) y evite el sobrerrégimen de hélice</span>
            </div>
            </div>

            <!-- CONMUTADOR FORCE B -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONMUTADOR MANUAL FORCE B</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Función: Permite forzar manualmente la conmutación a B-FADEC si el motor presenta anomalías y el sistema no conmutó</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Solo unidireccional: Solo es posible conmutar de posición automática a Canal B</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Protección: Conmutador bajo guarda protectora para evitar accionamientos involuntarios</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Uso operativo: Únicamente si el sistema no conmutó de forma automática ante funcionamiento anómalo</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight text-[11px] leading-tight">
            <li class="pl-0.5">Al operar únicamente con la batería FADEC Backup, el conmutador FORCE B NO DEBE ser activado bajo ningún concepto. Esto apagará el motor de inmediato.</li>
            <li class="pl-0.5">La indicación de carga del CED debe considerarse no fiable con ambas luces FADEC encendidas. Evalúe el motor mediante los demás parámetros.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Acción Requerida / Video Prueba FADEC (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
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
              Hacer video prueba FADEC
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Grabar video demostrativo del procedimiento real de prueba FADEC en cabina: accionamiento del pulsador durante 2 segundos, ciclo de test y comprobación de avisadores.
            </p>
          </div>

          <div class="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-left w-full max-w-sm space-y-1.5 shadow-2xs">
            <span class="text-[10px] font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wide flex items-center gap-1.5">
              Puntos clave para el video:
            </span>
            <ul class="text-[11px] text-amber-950 dark:text-amber-200/90 space-y-1 list-disc pl-4">
              <li>Palanca monomando de potencia en posición ralentí (IDLE)</li>
              <li>Pulsación continua del botón FADEC TEST durante 2 segundos</li>
              <li>Secuencia de encendido y alternancia de luces FADEC A y B</li>
              <li>Comprobación de respuesta y retorno a canal automático</li>
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.5 Sistema Eléctrico I: Fuentes de Potencia y Alternador</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Generación 14V/28V, Batería Principal y Batería de Excitación</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ELECTRICAL POWER SOURCES</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- ALTERNADOR Y BATERÍA PRINCIPAL -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">GENERACIÓN Y BATERÍA PRINCIPAL</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Tensión del sistema: Instalaciones disponibles en versiones de 14 Vcc o 28 Vcc</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Alternador (ALT): Fuente eléctrica primaria en vuelo; debe permanecer en ON durante toda la operación normal</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Batería Principal (BAT): Acumulador químico principal para arranque y soporte de red</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Amperímetro (Ammeter): Indica la corriente de carga del alternador; si no genera corriente, se ilumina la luz roja Alternator</span>
            </div>
            </div>

            <!-- BATERÍA DE EXCITACIÓN -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">BATERÍA DE EXCITACIÓN DEL ALTERNADOR</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Propósito exclusivo: Asegura que el alternador mantenga excitación de campo aunque la batería principal falle por completo</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Activación automática: Conectada al circuito al girar la llave Engine Master (segundo contacto independiente)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Independencia: Garantiza que un fallo catastrófico de la batería principal no deje al alternador sin corriente de excitación</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Luz roja Alternator: Se enciende siempre con Engine Master ON a motor parado y debe apagarse inmediatamente tras el arranque</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <div>El motor requiere energía eléctrica continua para su funcionamiento. Si el alternador falla, el motor continúa funcionando aproximadamente 120 minutos con la batería principal y FADEC Backup aplicando deslastre estricto de cargas (Tabla 3-1a).</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema de Fuentes de Potencia y Alternador (Altura Fija 590px - Imagen Máxima) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUENTES DE POTENCIA Y DISTRIBUCIÓN</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-1">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.4-fadec-test.jpg?v=1" alt="Esquema Eléctrico General: Alternador, Batería y Distribución" class="w-full h-full max-h-[515px] object-contain rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.6: 3.6 Sistema Eléctrico II: FADEC Backup Battery y Main Bus -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.6 Sistema Eléctrico II: FADEC Backup Battery y Main Bus</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Batería de Respaldo FADEC (30 Min) y Barra Eléctrica Principal</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BACKUP BATTERY & MAIN BUS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- FADEC BACKUP BATTERY -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">BATERÍA FADEC BACKUP (30 MINUTOS)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Autonomía demostrada: Asegura un máximo de 30 minutos de funcionamiento continuo del motor sin alternador ni batería</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Conexión exclusiva: Está conectada únicamente a la ECU FADEC A</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aislamiento: Se desacopla automáticamente del resto de la red del avión para alimentar solo los sistemas vitales del motor</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Inoperatividad de aviónica: Al operar con la batería de respaldo, todos los demás equipos eléctricos del avión quedan inoperativos</span>
            </div>
            </div>

            <!-- CONMUTADOR MAIN BUS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONMUTADOR MAIN BUS</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Control de barra: Controla la barra eléctrica principal (Main Bus)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Vínculo FADEC: Es necesario para que el FADEC y el motor funcionen con Batería/Alternador ante ciertas averías eléctricas</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Posición normal: Alternator, Main Bus y Battery deben estar en ON en vuelo normal</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Deslastre en emergencia: Permite aislar consumidores ante fuego eléctrico en vuelo (ver Sección 3)</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight text-[11px] leading-tight">
            <li class="pl-0.5">Si el suministro del alternador y la batería principal se interrumpe simultáneamente, el motor funciona únicamente con la batería FADEC Backup (máximo 30 minutos demostrados). En este caso, todos los demás equipos eléctricos estarán inoperativos.</li>
            <li class="pl-0.5">Al operar únicamente con la batería FADEC Backup, el conmutador FORCE B NO DEBE ser activado. Esto apagará el motor de inmediato al no tener alimentación el Canal B.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema FADEC Backup Battery y Main Bus (Altura Fija 590px - Imagen Máxima) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BATERÍA FADEC BACKUP Y MAIN BUS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-1">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.5-electrical.jpg?v=1" alt="Esquema Eléctrico: Batería FADEC Backup (Alimentación Exclusiva a ECU A) y Main Bus" class="w-full h-full max-h-[515px] object-contain rounded-lg" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.7 Sistema de Combustible I: Depósitos y Alimentación</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Capacidades de Depósitos, Densidad (0.84 kg/l), Válvulas y Reservoir Tank</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUEL TANKS & FEED CIRCUIT</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- CAPACIDADES Y DENSIDAD -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DEPÓSITOS Y DENSIDAD DE COMBUSTIBLE</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Densidad superior: Jet A-1 y Diésel (0.84 kg/l) son más densos que AVGAS (0.715 kg/l)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Cuello de llenado: Reduce la capacidad utilizable para mantener la carga alar dentro de los límites aprobados</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">2 Standard Tanks: Total 138.8 l (36.6 US gal), no utilizable 11.4 l (3.0 US gal), utilizable 127.4 l (33.6 US gal)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">2 Long-Range Tanks: Total 173.6 l (45.9 US gal), no utilizable 15.1 l (4.0 US gal), utilizable 158.6 l (41.9 US gal)</span>
            </div>
            </div>

            <!-- CIRCUITO PRIMARIO DE ALIMENTACIÓN -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">VÁLVULAS Y DEPÓSITO COLECTOR</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Válvula selectora: Posiciones LEFT, RIGHT y BOTH (se recomienda BOTH en aire turbulento)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Reservoir Tank: Depósito colector nodriza que garantiza alimentación continua sin burbujas de aire</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Shut-off Valve: Válvula de corte de emergencia independiente antes de la bomba eléctrica</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Sensores: Incluye sensores adicionales de temperatura de combustible y avisos de nivel bajo (Low Level)</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight text-[11px] leading-tight">
            <li class="pl-0.5">En condiciones de vuelo con semiala hacia abajo prolongada, coloque el selector en el depósito superior o en BOTH.</li>
            <li class="pl-0.5">En aire turbulento se recomienda encarecidamente utilizar la posición BOTH para asegurar una alimentación simétrica.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema del Sistema de Combustible (Altura Fija 590px - Imagen Máxima) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESQUEMA DE COMBUSTIBLE · DEPÓSITOS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-1">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.7-fuel-tanks.jpg?v=1" alt="Esquema de Combustible: Depósitos, Selector y Depósito Nodriza" class="w-full h-full max-h-[515px] object-contain rounded-lg" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.8 Sistema de Combustible II: Bombas, Retorno y Enfriador</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Bomba Eléctrica, Bomba de Alta Presión, Retorno y Deflector Térmico (>20°C)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">COMMON RAIL & RETURN CIRCUIT</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- BOMBAS Y RAÍL COMÚN -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">BOMBAS ELÉCTRICA Y MECÁNICA</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Bomba eléctrica (Fuel Pump): Apoya el flujo hacia el filtro en despegue, aterrizaje y emergencias</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Bomba mecánica y alta presión: Accionadas por el motor, generan la alta presión del Common Rail</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Inyección Common Rail: Inyectores controlados electrónicamente por el FADEC según demanda del Thrust Lever</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Filtro de combustible: Módulo de filtro con sensor térmico de control de intercambio de calor</span>
            </div>
            </div>

            <!-- CIRCUITO DE RETORNO Y ENFRIADOR -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">RETORNO Y ENFRIADOR (FUEL COOLER)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Combustible sobrante: El exceso de combustible del raíl retorna a los depósitos alares a través del selector</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Retorno simétrico: En posición BOTH, el combustible caliente retorna simultáneamente a ambos depósitos</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Cooler: Radiador que reduce la temperatura del combustible de retorno antes de llegar a los depósitos</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Deflector (Baffle): Chapa de entrada que debe retirarse con temperaturas exteriores (OAT) superiores a 20°C (68°F)</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <div>El uso de combustibles no aprobados puede causar daños severos en los componentes del motor y del sistema de combustible, pudiendo provocar un fallo de motor.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema de Inyección, Retorno y Enfriador (Altura Fija 590px - Imagen Máxima) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RETORNO Y ENFRIADOR (FUEL COOLER)</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-1">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.8-fuel-return.jpg?v=2" alt="Esquema de Retorno de Combustible, Fuel Cooler y Deflector Térmico" class="w-full h-full max-h-[515px] object-contain rounded-lg" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.9 Sistema de Refrigeración Líquida (Cooling System)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Termostato de 3 Vías (<84°C, 84-94°C, >94°C), Radiador y Aviso Water Level</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">LIQUID COOLING SYSTEM</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- TERMOSTATO DE 3 VÍAS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">TERMOSTATO Y CIRCUITOS DE FLUJO</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Circuito corto (< 84°C / 183°F): El refrigerante circula exclusivamente por el bloque para un calentamiento rápido</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Circuito mixto (84°C - 94°C / 183°F - 201°F): Fluye simultáneamente por el circuito corto y el radiador</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Circuito grande (> 94°C / 201°F): Todo el volumen circula a través del radiador principal (máx. 105°C / 221°F)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Mezcla de refrigerante: 50% agua y 50% anticongelante (Glysantin Protect Plus / G48). Punto de congelación: -36°C</span>
            </div>
            </div>

            <!-- DEPÓSITO Y CALEFACCIÓN DE CABINA -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">DEPÓSITO DE EXPANSIÓN Y CALEFACCIÓN</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Sensor Water Level: Boya en el depósito de compensación que activa la luz ámbar de aviso en el AED 125</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Sensor en culata: Mide la temperatura de refrigerante junto al termostato y la transmite al FADEC y CED 125</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Intercambiador de reductora: El circuito refrigera el aceite de la reductora mediante intercambiador agua/aceite</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Calefacción de cabina: Conexión abierta permanente; la admisión de aire caliente a cabina la regula el piloto</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <div>En caso de sobretemperatura de refrigerante en vuelo, coloque la calefacción de cabina en COLD y aumente la velocidad para maximizar el flujo de aire a través del radiador.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema del Sistema de Refrigeración (Altura Fija 590px - Imagen Máxima) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESQUEMA DE REFRIGERACIÓN (TAE 125)</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-1">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.9-cooling-system.jpg?v=1" alt="Esquema de Refrigeración Líquida TAE 125" class="w-full h-full max-h-[515px] object-contain rounded-lg" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.10 Sistemas de Lubricación: Motor y Caja Reductora</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Circuitos Independientes de Aceite de Motor y Aceite de Caja Reductora</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
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
              <span class="text-slate-800 dark:text-slate-200">Aceites aprobados: AeroShell Oil Diesel Ultra, AeroShell Oil Diesel 10W-40, Shell Helix Ultra 5W-30 / 5W-40</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Capacidad: Entre 4.5 l (mínimo) y 6.0 l (máximo). Consumo máx. admisible: 0.1 l/h</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Comprobación: Varilla de nivel accesible a través de la compuerta de inspección en el capó motor</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Vigilancia en CED 125: Presión normal entre 2.3 y 6.0 bar en crucero (mín. 1.2 bar en ralentí); máx. temp. 140°C</span>
            </div>
            </div>

            <!-- ACEITE DE REDUCTORA -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ACEITE DE REDUCTORA (GEARBOX OIL)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aceites aprobados: Centurion Gearbox Oil N1, Shell Spirax S6 ATF ZM, Shell Spirax S6 GXME 75W-80 API GL-4</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Capacidad: 1.0 litro</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Comprobación visual: Mirilla de nivel en el frontal de la reductora visible a través del capó</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Vigilancia en CED 125: Temperatura máxima de caja reductora 120°C</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <div>Utilice únicamente aceite aprobado con la designación exacta. Normalmente no es necesario rellenar refrigerante ni aceite de reductora entre intervalos de mantenimiento; si el nivel es bajo, avise al centro de servicio inmediatamente.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema de Lubricación Motor y Reductora (Altura Fija 590px - Imagen Máxima) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CIRCUITOS DE LUBRICACIÓN (TAE 125)</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-1">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.10-lubrication.jpg?v=1" alt="Esquema de Circuitos de Aceite de Motor y Caja Reductora" class="w-full h-full max-h-[515px] object-contain rounded-lg" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.11 Instrumentación de Motor: CED 125 y AED 125</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Indicación Digital Compacta de Parámetros de Motor y Datos Auxiliares</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
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
              <span class="text-slate-800 dark:text-slate-200">Propeller Rotary Speed: RPM de la hélice en formato digital</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Oil Pressure: Presión de aceite de motor (bar)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Oil Temperature: Temperatura de aceite de motor (°C)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Coolant Temperature (CT): Temperatura de refrigerante de motor (°C)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Gearbox Temperature (GT): Temperatura de la caja reductora (°C)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Load Display: Porcentaje de carga del motor (0% a 100%)</span>
            </div>
            </div>

            <!-- AED 125 -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">AED 125 (AUXILIARY ENGINE DISPLAY)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Temperature: Temperatura de combustible (°C) en los depósitos</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Voltmeter: Tensión de la barra eléctrica (V)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aviso Water Level: Indicador ámbar de nivel bajo de líquido refrigerante</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Amperímetro analógico: Instrumento independiente que monitoriza la corriente del alternador</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>Si el conmutador Engine Master está en posición OFF, la indicación de carga (Load Display) no muestra ningún valor aunque la hélice esté girando.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Displays Digitales CED 125 y AED 125 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">INSTRUMENTACIÓN DIGITAL CED &amp; AED</span>
          
        </div>

        <div class="flex flex-col gap-2 flex-1 min-h-0">
          <!-- 1. CED 125 Display Compacto de Motor -->
          <div class="flex-1 min-h-0 flex flex-col rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white p-2 shadow-2xs">
            <div class="flex items-center justify-between shrink-0 pb-0.5 mb-1 border-b border-slate-100 dark:border-slate-200/20">
              <span class="text-[11px] font-bold text-[#0B2E59] dark:text-[#0B2E59] uppercase tracking-wide flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                CED 125 · Compact Engine Display
              </span>
              <span class="text-[9px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">Tach / Press / Temp / Load</span>
            </div>
            <div class="w-full flex-1 min-h-0 bg-white flex items-center justify-center overflow-hidden">
              <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.11-ced2.jpg?v=1" alt="Compact Engine Display CED 125" class="w-full h-full max-h-[195px] object-contain rounded-md" />
            </div>
          </div>

          <!-- 2. AED 125 Display Auxiliar -->
          <div class="flex-1 min-h-0 flex flex-col rounded-xl border border-slate-200 dark:border-slate-700/80 bg-white p-2 shadow-2xs">
            <div class="flex items-center justify-between shrink-0 pb-0.5 mb-1 border-b border-slate-100 dark:border-slate-200/20">
              <span class="text-[11px] font-bold text-[#0B2E59] dark:text-[#0B2E59] uppercase tracking-wide flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-sky-600"></span>
                AED 125 · Auxiliary Engine Display
              </span>
              <span class="text-[9px] font-bold text-sky-800 bg-sky-100 px-1.5 py-0.5 rounded">Fuel Temp / Voltmeter / Water Level</span>
            </div>
            <div class="w-full flex-1 min-h-0 bg-white flex items-center justify-center overflow-hidden">
              <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.11-aed2.jpg?v=1" alt="Auxiliary Engine Display AED 125" class="w-full h-full max-h-[195px] object-contain rounded-md" />
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.12 Panel de Alarmas (Lightpanel) y Mandos de Cabina</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Luces Avisadoras de FADEC, Alternador, Nivel Bajo y Mandos de Motor</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ANNUNCIATOR LIGHTPANEL</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- LIGHTPANEL AVISADORES -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PANEL DE LUCES AVISADORAS (LIGHTPANEL)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">A FADEC B (Rojas): Luces de alarma independiente para Canal FADEC A y Canal B</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Alt (Roja): Luz de fallo de alternador o tensión insuficiente</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">CED / AED Caution (Ámbar): Alarma de parámetro fuera de rango en los displays</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel L / Fuel R (Ámbar): Aviso de nivel bajo de combustible en cada semiala</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Glow (Ámbar): Luz de control de bujías de precalentamiento para arranque diésel</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">CED/AED Confirm: Pulsador para confirmar/silenciar avisos en los instrumentos</span>
            </div>
            </div>

            <!-- MANDOS DE CABINA -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MANDOS ESPECÍFICOS DEL MOTOR</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Thrust Lever: Mando único de empuje (ajusta simultáneamente potencia y paso de hélice)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Alt. Air Door: Tirador de aire alternativo de admisión ante obstrucción o engelamiento del filtro</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Master: Interruptor principal de alimentación de FADEC y excitación de alternador</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Force B: Conmutador manual bajo guarda para selección forzada de Canal B</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>Si se produce un fallo señalado por las luces de aviso FADEC, contacte con su centro de servicio autorizado antes del siguiente vuelo.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Panel Anunciador de Alarmas (Altura Fija 590px - Imagen Máxima) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PANEL ANUNCIADOR DE ALARMAS</span>
          <span class="text-[9px] font-bold text-amber-800 bg-amber-100 dark:bg-amber-950/70 dark:text-amber-300 px-1.5 py-0.5 rounded">Lightpanel</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-2">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/3.12-annunciator.jpg?v=1" alt="Panel Anunciador de Cabina C172: Avisadores FADEC A/B, Alternador, CED/AED Caution, Low Fuel y Glow" class="w-full h-full max-h-[480px] object-contain rounded-lg" />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.13: 3.13 Sistemas de Célula I: Mandos de Vuelo, Compensación y Flaps Fowler Eléctricos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.13 Sistemas de Célula I: Mandos de Vuelo, Compensación y Flaps Fowler</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Flight Controls, Elevator Trim &amp; Wing Flap System</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Sección 7 Mandos y Flaps (Altura Fija 590px, Sin Scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FLIGHT CONTROLS &amp; TRIM SYSTEM</span>
        </div>

        <!-- Mandos Primarios y Compensador -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Mandos de Vuelo Convencionales:</strong> El sistema de mandos de vuelo consiste en alerones, timón de profundidad y timón de dirección convencionales operados manualmente a través de varillaje mecánico y cables de control desde los cuernos de mando y pedales.</div>
          </div>
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Alerones Diferenciales:</strong> Diseñados para reducir la guiñada adversa; el alerón que sube tiene mayor deflexión hacia arriba que la deflexión hacia abajo del alerón opuesto.</div>
          </div>
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Sistema de Compensación de Profundidad (Elevator Trim Tab):</strong> Accionado manualmente mediante la rueda de trim vertical montada en el pedestal de cabina. La rotación hacia adelante compensa morro abajo (nose-down); hacia atrás compensa morro arriba (nose-up).</div>
          </div>
        </div>

        <div class="flex items-center justify-between shrink-0 pt-1 pb-0.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">WING FLAP SYSTEM</span>
        </div>

        <!-- Flaps Fowler Eléctricos -->
        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Flaps Fowler de Ranura Simple (Single-Slot Type):</strong> Al extenderse se desplazan primero hacia atrás sobre sus guías antes de deflectarse hacia abajo, aumentando tanto la superficie alar efectiva como la curvatura del perfil y reenergizando la capa límite mediante la ranura de flujo.</div>
          </div>
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Accionamiento Eléctrico:</strong> Operados por un motor eléctrico de corriente continua instalado en la semiala derecha, acoplado mediante varillas mecánicas y cables sincronizadores a ambas superficies.</div>
          </div>
          <div class="flex items-start gap-2 text-[11px] leading-tight">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
            <div><strong>Palanca Selectora e Indicador:</strong> La palanca en el panel de instrumentos dispone de indicador de&nbsp;<strong>10°,</strong>&nbsp;<strong>20°, 30</strong><span style="font-weight: 700; letter-spacing: -0.18px; font-size: 1.125rem;">°</span><strong style="font-size: 1.125rem; letter-spacing: -0.01em;">&nbsp;y 40</strong><span style="font-weight: 700; letter-spacing: -0.18px; font-size: 1.125rem;">°</span><span style="font-size: 1.125rem; letter-spacing: -0.01em;">.&nbsp;</span><span style="font-size: 1.125rem; letter-spacing: -0.01em;">Un indicador mecánico seguidor muestra el ángulo exacto de deflexión.</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema POH Fig 7-3 (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SISTEMA DE FLAPS FOWLER (C172)</span>
          </div>

          <div class="w-full shrink-0 flex items-start gap-2 rounded-xl bg-white dark:bg-slate-800/80 p-2.5 border border-slate-200 dark:border-slate-700/80 shadow-2xs text-[11px] leading-tight text-slate-800 dark:text-slate-200">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[14px]">•</span>
            <div><strong>Protección Eléctrica:</strong> Circuito protegido por un disyuntor automático (<em>circuit breaker</em>) de <strong>15 Amperios</strong> identificado como <code class="font-mono font-bold text-[#1a80ff] dark:text-sky-400">FLAP</code>.</div>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-800/80 flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="/images/c172/3.13-flaps-fowler.jpg" alt="Sistema de Flaps Fowler Cessna 172" class="w-full h-full max-h-[460px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.14: 3.14 Sistemas de Célula II: Tren de Aterrizaje, Frenos, Dirección en Tierra y Aviso Neumático de Pérdida -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">3.14 Sistemas de Célula II: Tren, Frenos, Dirección en Tierra y Aviso de Pérdida</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Landing Gear, Ground Steering &amp; Stall Warning</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Sección 7 (Altura Fija 590px, Sin Scroll) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TREN, FRENOS Y DIRECCIÓN</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-[11px] leading-tight text-slate-800 dark:text-slate-200">
          <div><strong>Tren de Aterrizaje Triciclo Fijo:</strong> La amortiguación del tren principal se logra mediante ballestas de acero tubular de resorte de una sola pieza. La pata de morro cuenta con un amortiguador oleoneumático (air/oil shock strut).</div>
          <div><strong>Frenos de Disco Hidráulicos:</strong> Frenos de disco sencillos en la parte interior de cada rueda principal, accionados hidráulicamente de forma independiente mediante los cilindros maestros en las punteras de los pedales.</div>
          <div><strong>Dirección en Tierra (Ground Control):</strong> Rueda de morro orientable acoplada a los pedales de dirección mediante un varillaje con resorte elástico (spring-loaded steering bungee):
            <div class="grid grid-cols-2 gap-1.5 pt-1 font-mono">
              <span class="p-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-[#1a80ff] dark:text-sky-400 font-bold">Solo pedales: ±10°</span>
              <span class="p-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 font-bold">Con freno dif.: ±30°</span>
            </div>
          </div>
          <div><strong>Radio Mínimo de Giro:</strong> Con pedales y frenado diferencial, el radio mínimo de giro es de <strong>27 ft 5.5 in (8.37 m)</strong>.</div>
        </div>

        <div class="flex items-center justify-between shrink-0 pt-1 pb-0.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AVISO NEUMÁTICO DE PÉRDIDA Y PITOT-ESTÁTICA</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-[11px] leading-tight text-slate-800 dark:text-slate-200">
          <div><strong>Aviso Neumático de Pérdida (Stall Warning System):</strong> Consta de una toma ranurada en el borde de ataque del ala izquierda conectada a una bocina acústica en la esquina superior izquierda del marco del parabrisas.</div>
          <div><strong>Comprobación Prevuelo Oficial:</strong> Colocar un paño limpio sobre la abertura del borde de ataque y aspirar suavemente con la boca: el sonido audible en cabina confirma el estado operativo de la bocina y sus conductos.</div>
          <div><strong>Toma Estática Alternativa (Alternate Static Source):</strong> Válvula ubicada en el pedestal inferior para suministrar presión estática desde el interior de cabina si la toma estática exterior se bloquea por hielo o agua.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema Aeromecánico (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESQUEMA DE TREN, DIRECCIÓN Y PÉRDIDA</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Representación técnica de los arcos de giro de rueda de morro (bungee), amortiguación oleoneumática y principio de succión del avisador de pérdida neumático de la C172.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white dark:bg-slate-800/80 flex items-center justify-center p-2 lesson-img-wrapper" draggable="false" style="position: relative;">
            <img src="/images/c172/3.14-tren-frenos-direccion.jpg" alt="Esquema de Tren de Aterrizaje, Dirección en Tierra y Aviso de Pérdida Cessna 172" class="w-full h-full max-h-[420px] object-contain rounded-lg" style="aspect-ratio: auto; object-fit: contain; max-width: 100%; height: auto;">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
};

// ============================================================================
// LECCIÓN 3: PROCEDIMIENTOS NORMALES Y CHECKLISTS (9 DIAPOSITIVAS)
// ============================================================================
export const C172_LESSON_4 = {
  id: "17200000-0000-0000-0000-000000000003",
  course_id: C172_COURSE_ID,
  title: "4. Procedimientos Normales y Operación Continental Diésel",
  slug: "procedimientos-normales-c172",
  sequence_order: 4,
  lesson_order: 4,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 4.1: 4.1 Inspección Prevuelo I: Cabina Inicial -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.1 Inspección Prevuelo I: Cabina Inicial</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Comprobación General y Cabina</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(1) CABIN</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed my-1 shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Durante la inspección exterior, compruebe visualmente el estado general del avión. Con tiempo frío, retire incluso pequeñas acumulaciones de escarcha, hielo o nieve de las alas, la cola y las superficies de mando. Asegúrese también de que las superficies de mando no contengan acumulaciones internas de hielo ni residuos. Antes del vuelo, compruebe que el calentador del pitot (si está instalado) esté caliente al tacto en un plazo de 30 segundos con los interruptores de batería y calefacción del pitot conectados. Si se prevé un vuelo nocturno, compruebe el funcionamiento de todas las luces y asegúrese de disponer de una linterna.</div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(1) CABIN</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Pilot's Operating Handbook - AVAILABLE IN THE AIRPLANE</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Airplane Weight and Balance - CHECKED</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
                <span class="text-slate-800 dark:text-slate-200">Parking Brake - SET</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
                <span class="text-slate-800 dark:text-slate-200">Control Wheel Lock - REMOVE</span>
              </div>
            </div>
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(1) CABIN (Cont.)</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
                <span class="text-slate-800 dark:text-slate-200">"Engine Master" - OFF</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
                <span class="text-slate-800 dark:text-slate-200">Avionics Power Switch - OFF</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(7)</span>
                <span class="text-slate-800 dark:text-slate-200">"Shut-off Cabin Heat" - OFF (Push Full Forward)</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(8)</span>
                <span class="text-slate-800 dark:text-slate-200">Battery and Main Bus switches - ON</span>
              </div>
            </div>
          </div>
          <div class="p-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed my-1 shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Al conectar el interruptor de batería, utilizar una fuente de alimentación externa o girar la hélice a mano, trate la hélice como si el interruptor Engine Master estuviera conectado.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Diagrama de Inspección Exterior Walkaround (Altura Fija 590px - Imagen Máxima) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">RUTA DE INSPECCIÓN PREVUELO (WALKAROUND)</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex flex-col items-center justify-center p-1">
          <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/4.1-preflight-walkaround.jpg" alt="Ruta de Inspección Exterior Prevuelo (Walkaround C172)" class="w-full h-full max-h-[515px] object-contain rounded-lg" onerror="if(this.src!=='/images/c172/4.1-preflight-walkaround.jpg')this.src='/images/c172/4.1-preflight-walkaround.jpg'" />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.2: 4.2 Inspección de Cabina II: Combustible y Cierre -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.2 Inspección de Cabina II: Combustible y Cierre</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Instrumentos de Combustible, Válvulas y Seguridad</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(1) CABIN (Cont.)</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(1) CABIN</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(9)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Quantity Indicators and Fuel Temperature - CHECK</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(10)</span>
              <span class="text-slate-800 dark:text-slate-200">Light "Water Level" - CHECK OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(11)</span>
              <span class="text-slate-800 dark:text-slate-200">Battery and Main Bus switches - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(12)</span>
              <span class="text-slate-800 dark:text-slate-200">Entry in log-book concerning type of fuel filled - CHECK</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(13)</span>
              <span class="text-slate-800 dark:text-slate-200">Static Pressure Alternate Source Valve - CHECK</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(14)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Selector Valve - BOTH</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(15)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Shut-off Valve - ON (Push Full In)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(16)</span>
              <span class="text-slate-800 dark:text-slate-200">Baggage Door - CHECK, lock with key if the child's seat is supposed to be occupied</span>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-xs sm:text-[13px] text-sky-900 dark:text-sky-200 space-y-1">
            <strong class="text-sky-800 dark:text-sky-300 block uppercase tracking-wide">Verificaciones Clave:</strong>
            <p>Comprobar la indicación de cantidad y temperatura del combustible en ambos depósitos. La luz anunciadora <em>Water Level</em> debe permanecer apagada. Asegurar la válvula de corte de combustible completamente introducida (ON).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Panel de combustible en cabina: selector de depósitos (BOTH/L/R), válvula Shut-off y luz Water Level
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.3: 4.3 Inspección Exterior I: Empenaje y Ala Derecha -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.3 Inspección Exterior I: Empenaje y Ala Derecha</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Superficies de Mando y Borde de Salida</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(2) EMPENNAGE & (3) RIGHT WING Trailing Edge</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- (2) Empenaje: 1, 2, 3 -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(2) EMPENNAGE</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Rudder Gust Lock (if attached) - REMOVE</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Tail Tie-Down - DISCONNECT</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Control Surfaces - CHECK freedom of movement and security</span>
            </div>
            </div>

            <!-- (3) Borde de Salida Ala Derecha: 1, 2 -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(3) RIGHT WING Trailing Edge</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Aileron - CHECK freedom of movement and security</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Flap - CHECK for security and condition</span>
            </div>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-xs sm:text-[13px] text-sky-900 dark:text-sky-200 space-y-1">
            <strong class="text-sky-800 dark:text-sky-300 block uppercase tracking-wide">Inspección de Superficies Aerodinámicas:</strong>
            <p>Comprobar la libertad y suavidad de movimiento del timón de dirección, timón de profundidad, compensador y alerón derecho, verificando la ausencia de holguras excesivas y la seguridad de bisagras y varillajes.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Inspección de empenaje (timón de dirección y profundidad) y borde de salida del ala derecha (alerón y flap)
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.4: 4.4 Inspección Exterior II: Combustible Ala Derecha -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.4 Inspección Exterior II: Combustible Ala Derecha</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación (4) RIGHT WING en Secuencia Completa</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="64">
    <!-- Columna Izquierda (lg:col-span-8): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-8 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(4) RIGHT WING</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Columna Izquierda: Dos cuadros (Amarre y Tren arriba + Advertencia abajo) -->
            <div class="flex flex-col gap-2.5 h-full">
              <!-- Cuadro 1: (4) RIGHT WING -->
              <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
                <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(4) RIGHT WING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing Tie-Down - DISCONNECT</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Main Wheel Tire - CHECK for proper inflation and general condition (weather checks, tread depth and wear, etc.).</span>
            </div>
              </div>

              <!-- Cuadro 2: Advertencia de Combustible (ocupa el espacio restante) -->
              <div lang="es" class="flex-1 p-3 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs flex flex-col justify-start">
                <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
                  <span>⚠️</span>
                  <span>WARNING:</span>
                </strong>
                <p>Si, después de tomar muestras repetidamente, sigue habiendo indicios de contaminación, no debe volarse el avión. El personal de mantenimiento cualificado debe vaciar los depósitos y purgar el sistema. Debe eliminarse todo indicio de contaminación antes de volver a volar.</p>
              </div>
            </div>

            <!-- Columna Derecha: Cuadro 3 (Combustible y Tapón 3-5), iguala la altura total de los dos de la izquierda -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(4) RIGHT WING (Cont.)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Tank Sump Quick Drain Valves - DRAIN at least a cupful of fuel (using sampler cup) from each sump location to check for water, sediment and the right type of fuel (Diesel or JET-A1) before each flight and after each refueling. If water is observed, take further samples until clear and then gently rock wings and lower tail to the ground to move any additional contaminants to the sampling points. Take repeated samples from all fuel drain points until all contamination has been removed. If contaminants are still present, refer to above WARNING and do not fly airplane.</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Quantity - CHECK VISUALLY for desired level not above marking in fuel filler</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Filler Cap - SECURE</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-4): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-4 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Semiala derecha: puntos de purga de combustible alar con vaso muestreador, tapón de llenado y tren principal
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.5: 4.5 Inspección Exterior III: Drenajes de Reserva y Filtro -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.5 Inspección Exterior III: Drenajes de Reserva y Filtro</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación NOSE: Depósito de Reserva y Filtro</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(5) NOSE</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(5) NOSE</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Reservoir Tank Quick Drain Valve - DRAIN at least a cupful of fuel (using sampler cup) from valve to check for water, sediment and proper fuel grade (Diesel or JET-A1) before each flight and after each refueling. If water is observed, take further samples until clear and then gently rock wings and lower tail to the ground to move any additional contaminants to the sampling point. Take repeated samples until all contamination has been removed.</span>
            </div>
        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>El drenaje del depósito de reserva se encuentra en el fuselaje, en el lado del copiloto del avión.</div>
        </div>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(5) NOSE (Cont.)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Before first flight of the day and after each refueling - DRAIN the Fuel Strainer Quick Drain Valve with the sampler cup to remove water and sediment from the screen. Ensure that the screen drain is properly closed again. If water is discovered, there might be even more water in the fuel system. Therefore, take further samples from fuel strainer and the tank sumps.</span>
            </div>
        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>El drenaje del filtro de combustible se encuentra en el lado izquierdo del cortafuegos (en el sentido de vuelo).</div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Drenaje del depósito de reserva en fuselaje (lado derecho) y válvula de purga del filtro en cortafuegos
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.6: 4.6 Inspección Exterior IV: Motor y Hélice -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.6 Inspección Exterior IV: Motor y Hélice</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación NOSE: Aceites, Reductora, Hélice y Tren</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(5) NOSE (Cont.)</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Primera columna: Pasos 3, 4, 5, 6 -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(5) NOSE</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Oil Dipstick/Filler Cap: a) Oil level - CHECK b) Dipstick/filler cap - SECURE Do not operate below the minimum dipstick indication.</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Air and Cooling Inlets - CLEAR of obstructions</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Landing Light - CHECK for condition and cleanliness</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
              <span class="text-slate-800 dark:text-slate-200">Propeller and Spinner - CHECK for nicks and security</span>
            </div>
            </div>

            <!-- Segunda columna: Pasos 7, 8, 9, 10 -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(5) NOSE (Cont.)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(7)</span>
              <span class="text-slate-800 dark:text-slate-200">Gearbox Oil Level - CHECK the oil has to cover at least half of the inspection glass</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(8)</span>
              <span class="text-slate-800 dark:text-slate-200">Nose Wheel Strut and Tire- CHECK for proper inflation of strut and general condition (weather checks, tread depth and wear, etc.) of tire</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(9)</span>
              <span class="text-slate-800 dark:text-slate-200">Left Static Source Opening - CHECK for blockage</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(10)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel cooler baffle - CHECK • REMOVE, if OAT on ground is higher than 20°C (68°F) • INSTALL, if OAT on ground is lower than 20°C (68°F)</span>
            </div>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-xs sm:text-[13px] text-sky-900 dark:text-sky-200 space-y-1">
            <strong class="text-sky-800 dark:text-sky-300 block uppercase tracking-wide">Inspección Visual Crítica:</strong>
            <p>El nivel de aceite de la reductora (Gearbox) debe cubrir <strong>al menos la mitad de la mirilla de inspección</strong>. Comprobar que no existan muescas en los bordes de ataque de las palas de la hélice y que las tomas de aire estén libres de obstrucciones.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Morro y motor: varilla de aceite motor, mirilla de reductora (Gearbox), hélice tripala, tomas de aire y tren de morro
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.7: 4.7 Inspección Exterior V: Semiala Izquierda (Combustible y Tren) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.7 Inspección Exterior V: Semiala Izquierda (Combustible y Tren)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Drenaje de Combustible, Tapón y Tren Principal</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Inspección (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(6) LEFT WING</span>
        </div>
        <div class="space-y-2 py-1 flex-1 flex flex-col justify-between">
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(6) LEFT WING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Quantity - CHECK VISUALLY for desired level not above marking in fuel filler</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Filler Cap - SECURE</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Tank Sump Quick Drain Valves - DRAIN at least a cupful of fuel (using sampler cup) from each sump location to check for water, sediment and the right type of fuel (Diesel or JET-A1) before each flight and after each refueling. If water is observed, take further samples until clear and then gently rock wings and lower tail to the ground to move any additional contaminants to the sampling points. Take repeated samples from all fuel drain points until all contamination has been removed. If contaminants are still present, refer to previous WARNING (see right wing) and do not fly airplane.</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Main Wheel Tire - CHECK for proper inflation and general condition (weather checks, tread depth and wear, etc.)</span>
            </div>
          </div>

          <!-- WARNING en la izquierda con tipografía estándar -->
          <div class="p-3 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Si, después de tomar muestras repetidamente, sigue habiendo indicios de contaminación, no debe volarse el avión. El personal de mantenimiento cualificado debe vaciar los depósitos y purgar el sistema. Debe eliminarse todo indicio de contaminación antes de volver a volar.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema POH -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Semiala izquierda: tapón de llenado de combustible, válvulas de drenaje alares con vaso muestreador y tren principal
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.8: 4.8 Inspección Exterior VI: Semiala Izquierda (Bordes de Ataque y Salida) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.8 Inspección Exterior VI: Semiala Izquierda (Bordes de Ataque y Salida)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Pitot, Bocina de Pérdida, Alerón y Flaps</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Leading Edge y Trailing Edge a 2 columnas -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">(7) LEADING EDGE & (8) TRAILING EDGE</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- (7) LEFT WING Leading Edge -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(7) LEFT WING Leading Edge</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Pitot Tube Cover (if mounted) - REMOVE and CHECK for pitot blockage</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Tank Vent Opening - CHECK for blockage</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
                <span class="text-slate-800 dark:text-slate-200">Stall Warning Opening - CHECK for blockage To check the system, place a clean handkerchief over the vent opening and apply suction; a sound from the warning horn will confirm system operation.</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
                <span class="text-slate-800 dark:text-slate-200">Wing Tie-Down - DISCONNECT</span>
              </div>
            </div>

            <!-- (8) LEFT WING Trailing Edge -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(8) LEFT WING Trailing Edge</strong>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Aileron - CHECK freedom of movement and security</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Flap - Check for security and conditions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquema POH -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Semiala izquierda: tubo pitot, toma de ventilación, bocina de aviso de pérdida en borde de ataque, alerón y flap
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
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.9 Antes del Arranque del Motor</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Preparación Previa al Arranque</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BEFORE STARTING ENGINE</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BEFORE STARTING ENGINE</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Preflight Inspection - COMPLETE</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Seats and Seat Belts - ADJUST and LOCK</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Brakes - TEST and SET</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Avionics Power Switch, Autopilot (if installed) and Electrical Equipment - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Circuit Breakers - CHECK IN</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
              <span class="text-slate-800 dark:text-slate-200">Alternator Switch - CHECK ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(7)</span>
              <span class="text-slate-800 dark:text-slate-200">Battery and Main Bus Switches - ON</span>
            </div>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BEFORE STARTING ENGINE (Cont.)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(8)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Quantity and Temperature - CHECK</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(9)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Selector Valve - SET to BOTH position.The fuel temperature limitations must be observed.</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(10)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Shut-off Valve - OPEN (Push Full In)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(11)</span>
              <span class="text-slate-800 dark:text-slate-200">Alternate Air Door - CLOSED</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(12)</span>
              <span class="text-slate-800 dark:text-slate-200">Thrust Lever - CHECK for freedom of movement</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(13)</span>
              <span class="text-slate-800 dark:text-slate-200">Load Display - CHECK 0% at Propeller RPM 0</span>
            </div>
            </div>
          </div>

          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs shrink-0 mt-2">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚡</span>
              <span>CAUTION:</span>
            </strong>
            <div>El control electrónico del motor necesita una fuente de alimentación eléctrica para funcionar. Para el funcionamiento normal, Battery, Alternator y Main Bus deben estar conectados. Su conmutación por separado solo está permitida para las pruebas y en caso de emergencia.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-5 text-center my-1.5">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Disposición de cabina antes del arranque: interruptores Battery/Main Bus, disyuntores, mandos de empuje y display CED 125 en 0%
          </p>
        </div>

        <div class="space-y-1.5 shrink-0">
          <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px]">
              <span>⚡</span>
              <span>CAUTION:</span>
            </strong>
            <div>El interruptor Avionics Power debe estar desconectado durante el arranque del motor para evitar posibles daños en la aviónica.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.10: 4.10 Puesta en Marcha: Procedimiento de Arranque -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.10 Puesta en Marcha: Procedimiento de Arranque</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Arranque del Motor Continental Diésel</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">STARTING ENGINE</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">STARTING ENGINE</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric Fuel Pump - ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Navigation Lights and Flashing Beacon - ON (as required).</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Thrust Lever - IDLE</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Area Aircraft / Propeller - CLEAR</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">"Engine Master" - ON , wait until the Glow Control light extinguishes</span>
            </div>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">STARTING ENGINE (Cont.)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
              <span class="text-slate-800 dark:text-slate-200">Starter - ON, keep starter engaged until min. 500rpm Release when engine starts, leave Thrust Lever in idle</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(7)</span>
              <span class="text-slate-800 dark:text-slate-200">Oil Pressure - CHECK</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(8)</span>
              <span class="text-slate-800 dark:text-slate-200">CED 125 Test Knob - PRESS (to delete Caution light)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(9)</span>
              <span class="text-slate-800 dark:text-slate-200">Ammeter - CHECK for positive charging current</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(10)</span>
              <span class="text-slate-800 dark:text-slate-200">Voltmeter - CHECK for green range</span>
            </div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
        <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 h-full flex flex-col justify-start my-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <div>No sobrecaliente el motor de arranque. No lo accione durante más de 10 segundos. Después de accionarlo, deje que se enfríe durante 20 segundos. Después de 6 intentos de arranque, deje enfriar el motor de arranque durante media hora.</div>
        </div>
        <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 h-full flex flex-col justify-start my-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <div>Si después de 3 segundos no se indica la presión mínima de aceite de 1 bar: ¡pare el motor inmediatamente!</div>
        </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-5 text-center my-1.5">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Panel de arranque: llave de encendido, interruptor Engine Master, luz Glow de precalentamiento y botón de test en CED 125
          </p>
        </div>

        <div class="space-y-1.5 shrink-0">
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px]">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>No utilice una unidad de alimentación en tierra para arrancar el motor. No está permitido arrancarlo con alimentación externa. Si no es posible arrancar con batería, debe verificarse su estado antes del vuelo.</div>
          </div>
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
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.11 Calentamiento del Motor y Rodaje</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Comprobaciones Eléctricas, FADEC Backup y Calentamiento</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">WARM UP</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(11) FADEC Backup Battery Test</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(11)</span>
              <span class="text-slate-800 dark:text-slate-200">FADEC Backup Battery test a) Alternator - OFF, engine must operate normally b) Battery - OFF, for min. 10 seconds; engine must operate normally, the red FADEC lamps must not be illuminated c) Battery - ON d) Alternator - ON</span>
            </div>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">STARTING ENGINE</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(12)</span>
              <span class="text-slate-800 dark:text-slate-200">Avionic-Power Switch - ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(13)</span>
              <span class="text-slate-800 dark:text-slate-200">Radios - ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(14)</span>
              <span class="text-slate-800 dark:text-slate-200">Ammeter - Check positive charge, alternator warning light must be OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(15)</span>
              <span class="text-slate-800 dark:text-slate-200">Voltmeter - Check in green range</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(16)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric Fuel Pump - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(17)</span>
              <span class="text-slate-800 dark:text-slate-200">Flaps - RETRACT</span>
            </div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 pt-1.5 uppercase tracking-wide">WARM UP</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Let the engine warm up about 2 minutes at 890 RPM.</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Increase RPM to 1400 until oil temperature 50°C (122°F), coolant temperature 60°C (140°F).</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-5 text-center my-1.5">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Comprobación de calentamiento: parámetros CED 125 (aceite 50°C, refrigerante 60°C) e interruptores de Batería y Alternador
          </p>
        </div>

        <div class="space-y-1.5 shrink-0">
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px]">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Debe asegurarse de que tanto Battery como Alternator estén conectados. Si está instalado el interruptor de alternador con guarda, la guarda del interruptor debe estar cerrada.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.12: 4.12 Antes del Despegue I: Cabina y Mandos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.12 Antes del Despegue I: Cabina y Mandos</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Chequeo de Cabina, Mandos y Ajustes Previos</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BEFORE TAKE-OFF</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BEFORE TAKE-OFF</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Parking Brake - SET</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Cabin Doors and Windows - CLOSED and LOCKED</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Flight Controls - FREE and CORRECT</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Flight Instruments - CHECK and SET</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel quantity - CHECK</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Selector Valve - SET to BOTH</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(7)</span>
              <span class="text-slate-800 dark:text-slate-200">Elevator Trim and Rudder Trim (if installed) - SET for take-off</span>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-xs sm:text-[13px] text-sky-900 dark:text-sky-200 space-y-1">
            <strong class="text-sky-800 dark:text-sky-300 block uppercase tracking-wide">BEFORE TAKE-OFF:</strong>
            <p>Verificar el libre y correcto movimiento de todas las superficies de mando. Comprobar que el selector de combustible se encuentre rigurosamente en <strong>BOTH</strong> y el compensador ajustado en el rango de despegue (Take-off).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Cabina previa al despegue: comprobación de mandos libres, ajuste de compensador (Trim) y selector de combustible en BOTH
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.13: 4.13 Antes del Despegue II: Autoprueba FADEC -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.13 Antes del Despegue II: Autoprueba FADEC</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Protocolo Secuencial de Autoprueba FADEC y Hélice</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BEFORE TAKE-OFF</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">(8) FADEC and propeller adjustment function check:</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">a)</span>
              <span class="text-slate-800 dark:text-slate-200">Thrust Lever - IDLE (both FADEC lights should be OFF)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">b)</span>
              <span class="text-slate-800 dark:text-slate-200">FADEC Test Button - PRESS and HOLD button for entire test</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">c)</span>
              <span class="text-slate-800 dark:text-slate-200">Both FADEC lights - ON, RPM increases.</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">d)</span>
              <span class="text-slate-800 dark:text-slate-200">The FADEC automatically switches to B-component (only FADEC B light is ON)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">e)</span>
              <span class="text-slate-800 dark:text-slate-200">The propeller control is excited, RPM decreases</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">f)</span>
              <span class="text-slate-800 dark:text-slate-200">The FADEC automatically switches to channel A (only FADEC A light is ON), RPM increases</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">g)</span>
              <span class="text-slate-800 dark:text-slate-200">The propeller control is excited, RPM decreases</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">h)</span>
              <span class="text-slate-800 dark:text-slate-200">FADEC A light goes OFF, idle RPM is reached, the test is completed.</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">i)</span>
              <span class="text-slate-800 dark:text-slate-200">FADEC Test Button - RELEASE</span>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
        <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 h-full flex flex-col justify-start">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>Si las luces FADEC no se encienden en este punto, significa que el procedimiento de prueba ha fallado y no debe intentarse el despegue.</div>
        </div>
        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 h-full flex flex-col justify-start">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>Si se suelta el botón de prueba antes de que termine la autoprueba, el FADEC pasa inmediatamente al funcionamiento normal.</div>
        </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Panel anunciador y botón FADEC Test: secuencia de luces FADEC A y B y comprobación automática de paso de hélice
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.14: 4.14 Antes del Despegue III: Force B y Criterios Críticos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.14 Antes del Despegue III: Force B y Criterios Críticos</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Conmutador Force B y Limitaciones de Seguridad</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BEFORE TAKE-OFF</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BEFORE TAKE-OFF</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(9)</span>
              <span class="text-slate-800 dark:text-slate-200">Force B Switch - switch to FADEC B</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(10)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine - check running without a change</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(11)</span>
              <span class="text-slate-800 dark:text-slate-200">Force B Switch - switch back to Automatic</span>
            </div>
        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>Al cambiar de un FADEC al otro, es normal oír y sentir una variación momentánea del motor.</div>
        </div>
          </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
        <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 h-full flex flex-col justify-start my-0">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>Si se producen fallos de encendido prolongados del motor o el motor se para durante la prueba, no debe intentarse el despegue.</div>
        </div>
        <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 h-full flex flex-col justify-start my-0">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>Todo el procedimiento de prueba debe realizarse sin ningún fallo. Si el motor se para o las luces FADEC parpadean, el despegue está prohibido. Esto se aplica incluso si el motor parece funcionar sin fallos después de la prueba.</div>
        </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Interruptor de conmutación manual Force B (Automático / FADEC B) y luces de alarma en el panel anunciador
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.15: 4.15 Antes del Despegue IV: Potencia y Configuración Final -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.15 Antes del Despegue IV: Potencia y Configuración Final</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Comprobación de Empuje 94% y Salida a Pista</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BEFORE TAKE-OFF</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BEFORE TAKE-OFF</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(12)</span>
              <span class="text-slate-800 dark:text-slate-200">Thrust Lever - FULL FORWARD, load display min. 94%, RPM 2240 - 2300</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(13)</span>
              <span class="text-slate-800 dark:text-slate-200">Thrust Lever - IDLE</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(14)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Instruments and Ammeter - CHECK</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(15)</span>
              <span class="text-slate-800 dark:text-slate-200">Suction gage - CHECK</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(16)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing Flaps - SET for Take-off (0° or 10°).</span>
            </div>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BEFORE TAKE-OFF (Cont.)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(17)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric Fuel Pump - ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(18)</span>
              <span class="text-slate-800 dark:text-slate-200">Strobe Lights - AS DESIRED</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(19)</span>
              <span class="text-slate-800 dark:text-slate-200">Radios and Avionics - ON and SET</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(20)</span>
              <span class="text-slate-800 dark:text-slate-200">Autopilot (if installed) - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(21)</span>
              <span class="text-slate-800 dark:text-slate-200">Air Conditioning (if installed) - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(22)</span>
              <span class="text-slate-800 dark:text-slate-200">Thrust Lever Friction Control - ADJUST</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(23)</span>
              <span class="text-slate-800 dark:text-slate-200">Brakes - RELEASE</span>
            </div>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-xs sm:text-[13px] text-sky-900 dark:text-sky-200 space-y-1">
            <strong class="text-sky-800 dark:text-sky-300 block uppercase tracking-wide">Chequeo de Carga de Motor:</strong>
            <p>Al aplicar <strong>FULL FORWARD</strong> en tierra, verificar que la indicación de carga (Load display) alcance al menos el <strong>94%</strong> y las RPM se sitúen entre <strong>2240 y 2300 RPM</strong> antes de retrasar a ralentí (IDLE).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Instrumentos en prueba de máxima potencia: Load display al 94-100%, 2240-2300 RPM y bomba eléctrica ON
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
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · PROCEDIMIENTOS NORMALES (SECCIÓN 4)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.16 Velocidades Operativas de Vuelo y Viento Cruzado Demostrado</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Speeds for Normal Operation & Crosswind Component</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Tabla Oficial Sección 4 POH (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SPEEDS FOR NORMAL OPERATION (POH PÁG. 4-3)</span>
          <span class="text-[10px] font-semibold text-slate-500 dark:text-slate-400">Peso máx. 2300 lbs</span>
        </div>

        <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
          <table class="w-full text-left text-[11px] leading-tight">
            <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th class="p-1.5 px-2">FASE DE OPERACIÓN</th>
                <th class="p-1.5 px-2 text-center">CONFIGURACIÓN</th>
                <th class="p-1.5 px-2 text-center font-extrabold text-[#1a80ff] dark:text-sky-400">KIAS (POH)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
              <tr>
                <td class="p-1 px-2 font-bold">Despegue y Ascenso Inicial Normal</td>
                <td class="p-1 px-2 text-center">Flaps UP (0°)</td>
                <td class="p-1 px-2 text-center font-mono font-bold">70 – 80 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Despegue Campo Corto (Sobre 50 ft)</td>
                <td class="p-1 px-2 text-center">Flaps UP (0°)</td>
                <td class="p-1 px-2 text-center font-mono font-bold text-amber-600 dark:text-amber-400">59 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Mejor Régimen de Ascenso (V<sub>Y</sub>)</td>
                <td class="p-1 px-2 text-center">Nivel del Mar / 10.000 ft</td>
                <td class="p-1 px-2 text-center font-mono font-bold text-blue-600 dark:text-sky-400">73 / 68 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Mejor Ángulo de Ascenso (V<sub>X</sub>)</td>
                <td class="p-1 px-2 text-center">Nivel del Mar / 10.000 ft</td>
                <td class="p-1 px-2 text-center font-mono font-bold text-indigo-600 dark:text-indigo-400">59 / 61 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Ascenso Normal en Ruta (Enroute Climb)</td>
                <td class="p-1 px-2 text-center">Flaps UP (0°)</td>
                <td class="p-1 px-2 text-center font-mono font-bold">75 – 85 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Aproximación Normal sin Flaps</td>
                <td class="p-1 px-2 text-center">Flaps UP (0°)</td>
                <td class="p-1 px-2 text-center font-mono font-bold">60 – 70 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Aproximación Normal con Flaps</td>
                <td class="p-1 px-2 text-center">Flaps 40° (Full)</td>
                <td class="p-1 px-2 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">55 – 65 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Aproximación Campo Corto</td>
                <td class="p-1 px-2 text-center">Flaps 40°</td>
                <td class="p-1 px-2 text-center font-mono font-bold">60 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Aproximación Frustrada (Balked Landing)</td>
                <td class="p-1 px-2 text-center">Flaps 20° (Máx. Potencia)</td>
                <td class="p-1 px-2 text-center font-mono font-bold text-purple-600 dark:text-purple-400">55 KIAS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-center justify-between shrink-0 pt-1 pb-0.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">VIENTO CRUZADO MÁXIMO DEMOSTRADO</span>
          <span class="text-[10px] font-semibold text-slate-500 dark:text-slate-400">POH pág. 4-3</span>
        </div>

        <div class="p-2.5 rounded-xl border-l-4 border-blue-500 bg-blue-50/90 dark:bg-blue-950/30 text-blue-950 dark:text-blue-200 text-[11px] leading-tight shadow-2xs">
          <div class="flex items-center justify-between font-bold mb-1">
            <span>MAXIMUM DEMONSTRATED CROSSWIND VELOCITY:</span>
            <span class="font-mono text-sm font-extrabold text-[#1a80ff] dark:text-sky-400">15 KNOTS</span>
          </div>
          <p class="text-[10.5px] leading-relaxed">
            Valor ensayado satisfactoriamente por el fabricante en despegue y aterrizaje sin que la aeronave presente dificultades de control. <em>Nota técnica reglamentaria:</em> No constituye una limitación estructural restrictiva para la aeronave, sino una velocidad de control demostrada durante la certificación.
          </p>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Figura 5-3 Stall Speeds (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">VELOCIDADES DE PÉRDIDA SEGÚN ALABEO (FIG. 5-3)</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Tabla oficial del POH con el incremento de la velocidad de pérdida (KIAS/KCAS) a peso máximo (2300 lbs) según el ángulo de alabeo (0°, 30°, 45° y 60°) y posición de flaps.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/4.16.jpg" alt="Figura 5-3 Stall Speeds Cessna 172 POH" class="w-full h-full max-h-[460px] object-contain rounded-lg" onerror="if(this.src!=='/images/c172/4.16.jpg')this.src='/images/c172/4.16.jpg'" />
          </div>
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
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.17 Despegue y Ascenso</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Configuración de Despegue, Velocidades y Ascenso</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TAKE-OFF & CLIMB</span>
        </div>
        <div class="space-y-1.5 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <!-- NORMAL TAKE-OFF -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">NORMAL TAKE-OFF</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Wing Flaps - 0° or 10°</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Thrust Lever - FULL FORWARD</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(3)</span>
                <span class="text-slate-800 dark:text-slate-200">Elevator Control - LIFT NOSE WHEEL at 55 KIAS/63 mph.</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(4)</span>
                <span class="text-slate-800 dark:text-slate-200">Climb Speed - 65 to 80 KIAS/75 to 92 mph</span>
              </div>
            </div>

            <!-- AFTER TAKE-OFF & CLIMB -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">AFTER TAKE-OFF</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Altitude about 300 ft, Airspeed more than 65 KIAS/75 mph - Wing Flaps - RETRACT</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Electric Fuel Pump - OFF</span>
              </div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 pt-1 uppercase tracking-wide">CLIMB</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Airspeed - 70 to 85 KIAS/80 to 98 mph.</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Thrust Lever - FULL FORWARD</span>
              </div>
            </div>
          </div>

          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[12.5px] leading-relaxed my-1 shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Si es necesario un ascenso de máximo rendimiento, utilice las velocidades indicadas en la tabla «Maximum Rate Of Climb» de la sección 5. Si la temperatura del aceite y/o del refrigerante se aproximan al límite superior, continúe con un ángulo de ascenso menor para mejorar la refrigeración, si es posible.</div>
          </div>

          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[12.5px] leading-relaxed my-1 shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Deben vigilarse las temperaturas del combustible.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Indicación de cabina en despegue y ascenso: anemómetro (55 KIAS rotación / 70-85 KIAS ascenso) y parámetros CED 125 a 100%
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
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.18 Vuelo de Crucero y Gestión de Combustible</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Potencia, Compensación y Gestión de Combustible</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CRUISE</span>
        </div>
        <div class="space-y-1.5 py-1">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CRUISE</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Power - maximum load 100% (maximum continuous power), 75% or less is recommended. For economic cruise set load 70% or less.</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Elevator trim and Rudder trim (if installed) - ADJUST</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Compliance with Limits for oil pressure, oil temperature, coolant temperature and gearbox temperature (CED 125 and Caution light) - MONITOR constantly</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Quantity and Temperature (Display and LOW LEVEL caution lights) - MONITOR. Whenever possible, the airplane should be flown with the fuel selector in the BOTH position to empty and heat both fuel tanks evenly. However, operation in the LEFT or RIGHT position may be desirable to correct a fuel quantity imbalance or during periods of intentional uncoordinated flight maneuvers. During prolonged operation with the fuel selector in either the LEFT or RIGHT position the fuel balance and temperatures should be closely monitored.</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">FADEC and Alternator Warning lights - MONITOR</span>
            </div>
          </div>

          <!-- CAUTION con los primeros 2 puntos en la izquierda -->
          <div lang="es" class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[12.5px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
              <span>⚡</span>
              <span>CAUTION:</span>
            </strong>
            <ul class="space-y-1 pl-1">
              <li class="flex items-start gap-1.5">
                <span class="text-amber-600 dark:text-amber-400 font-bold shrink-0">•</span>
                <span>¡No utilice ningún depósito de combustible por debajo de la temperatura mínima admisible del combustible!</span>
              </li>
              <li class="flex items-start gap-1.5">
                <span class="text-amber-600 dark:text-amber-400 font-bold shrink-0">•</span>
                <span>En aire turbulento se recomienda encarecidamente utilizar la posición BOTH.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y PRECAUCIONES</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center my-1.5">
          <div class="w-10 h-10 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-[13px] font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Display CED 125 en crucero (ajuste de potencia 70-75%) y control de equilibrio de combustible entre depósitos alares
          </p>
        </div>

        <div class="space-y-1.5 shrink-0">
          <div lang="es" class="w-full p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[12.5px] leading-relaxed shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs">
              <span>⚡</span>
              <span>CAUTION:</span>
            </strong>
            <div class="flex items-start gap-1.5 pl-1">
              <span class="text-amber-600 dark:text-amber-400 font-bold shrink-0">•</span>
              <span>Con ¼ de depósito o menos, está prohibido el vuelo prolongado o no coordinado cuando se opera con el depósito izquierdo o derecho.</span>
            </div>
          </div>
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
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.19 Descenso y Aterrizaje Normal</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimientos de Descenso, Aproximación y Toma</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DESCENT & LANDING</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- Descenso y Antes de Toma -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">DESCENT</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Selector Valve - SELECT BOTH position</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Power - AS DESIRED</span>
            </div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 pt-1.5 uppercase tracking-wide">BEFORE LANDING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Pilot and Passenger Seat Backs - MOST UPRIGHT POSITION</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Seats and Seat Belts - SECURED and LOCKED</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Selector Valve - SELECT BOTH position</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric Fuel Pump - ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Landing / Taxi Lights - ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
              <span class="text-slate-800 dark:text-slate-200">Autopilot (if installed) - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(7)</span>
              <span class="text-slate-800 dark:text-slate-200">Air Conditioning (if installed) - OFF</span>
            </div>
            </div>

            <!-- Toma Normal -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">NORMAL LANDING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed - 69 to 80 KIAS/80 to 92 mph (wing flaps UP)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing Flaps - AS DESIRED (0°-10° below 110 KIAS/126 mph; 10°-below 85 KIAS/98 mph)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed in Final Approach: - wing flaps 20°: 63 KIAS/72 mph - wing flaps 30°: 60 KIAS/69 mph</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Touchdown - MAIN WHEELS FIRST</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Landing Roll - LOWER NOSE WHEEL GENTLY</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
              <span class="text-slate-800 dark:text-slate-200">Brakes - MINIMUM REQUIRED</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Velocidades de aproximación final y toma (60-63 KIAS) con flaps 20°-30° y técnica de contacto en pista
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.20: 4.20 Maniobra de Escape: Aproximación Frustrada -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.20 Maniobra de Escape: Aproximación Frustrada</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Maniobra de Motor y al Aire (Go-Around)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">BALKED LANDING</span>
        </div>
        <div class="space-y-2.5 py-1">
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BALKED LANDING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Thrust Lever - FULL FORWARD</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing Flaps - RETRACT TO 20° (immediately after Thrust Lever FULL FORWARD)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Climb Speed - 58 KIAS/67 mph</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing Flaps - 10° (until all obstacles are cleared)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing Flaps - RETRACT after reaching a safe altitude and 65 KIAS/75 mph</span>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-amber-50/90 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700/60 text-xs sm:text-[13px] text-amber-950 dark:text-amber-200 space-y-1.5 shadow-2xs">
            <strong class="text-amber-800 dark:text-amber-400 flex items-center gap-1.5 uppercase tracking-wide">
              <span>⚡</span>
              <span>Puntos Clave del Suplemento Continental:</span>
            </strong>
            <p>• La palanca de potencia debe adelantarse al <strong>100% (FULL FORWARD)</strong> de manera inmediata.</p>
            <p>• La retracción inmediata de los flaps de 30°/40° a <strong>20°</strong> reduce drásticamente la resistencia aerodinámica sin comprometer la sustentación.</p>
            <p>• Mantener rigurosamente <strong>58 KIAS</strong> hasta librar todos los obstáculos antes de acelerar a 65 KIAS y retirar los flaps por completo.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Perfil de maniobra de aproximación frustrada (Go-Around): empuje al 100%, retracción inmediata de flaps a 20° y velocidad 58 KIAS
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
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.21 Tras el Aterrizaje y Parada de Motor</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Configuración de Pista y Parada</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AFTER LANDING & SECURING AIRPLANE</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">AFTER LANDING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing Flaps - RETRACT</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric Fuel Pump - OFF</span>
            </div>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">SECURING AIRPLANE</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Parking Brake - SET</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Thrust Lever - IDLE</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Avionics Power Switch, Electrical Equipment, Autopilot (if installed) - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Main Bus switch - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">"Engine Master" - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
              <span class="text-slate-800 dark:text-slate-200">Switch Battery - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(7)</span>
              <span class="text-slate-800 dark:text-slate-200">Control Lock - INSTALL</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(8)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Selector Valve - LEFT or RIGHT (to prevent crossfeeding between tanks)</span>
            </div>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block uppercase tracking-wide text-xs">TURBOCHARGER COOL-DOWN:</strong>
            <p>Mantener el motor al menos <strong>2 minutos al ralentí</strong> antes de apagar el <em>Engine Master</em> para permitir la disipación térmica y estabilización del turbocompresor.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Procedimiento de parada de motor: 2 min de enfriamiento de turbo en ralentí, Engine Master OFF y selector de combustible en LEFT/RIGHT
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.22: 4.22 Procedimientos Especiales -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">4.22 Procedimientos Especiales</h1>
    </div>
    
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">SPECIAL PROCEDURES</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">PROCEDURES OVER 5500ft AIRFIELD ELEVATION
              </strong>
              <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                A altitudes superiores a 5,500 ft: acelerar con Thrust Lever FULL FORWARD con frenos aplicados hasta alcanzar el 100% de carga antes de soltar frenos.
              </p>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">SHORT FIELD TAKE-OFF
              </strong>
              <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                Flaps 10°, frenos aplicados hasta máxima potencia. Alzar rueda de morro a 55 KIAS y mantener velocidad de ascenso sobre obstáculos de 57 KIAS.
              </p>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">COLD WEATHER OPERATION
              </strong>
              <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                Precalentamiento de motor por debajo de -10°C. Comprobar instalación de deflector (baffle) de refrigerador de combustible si OAT < 20°C.
              </p>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">HOT WEATHER OPERATION
              </strong>
              <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                Operación con tiempo cálido: página 4-24. Retirar deflector de refrigerador de combustible si OAT en tierra > 20°C.
              </p>
            </div>
          </div>

          <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-xs sm:text-[13px]">
            <strong>DOCUMENTACIÓN OFICIAL:</strong> Para la ejecución detallada de despegue y toma en pista corta o condiciones meteorológicas extremas, consúltense las páginas indicadas de la Sección 4 del Suplemento POH Continental TAE 125-02-114.
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Página de procedimientos especiales del POH: tablas de despegue en campo corto, aeródromos a gran elevación y deflector de frío/calor
          </p>
        </div>
      </div>
    </div>
  </div>
</div>`,
};;

// ============================================================================
// LECCIÓN 4: PROCEDIMIENTOS DE EMERGENCIA (9 DIAPOSITIVAS)
// ============================================================================
export const C172_LESSON_5 = {
  id: "17200000-0000-0000-0000-000000000004",
  course_id: C172_COURSE_ID,
  title: "5. Procedimientos de Emergencia y Casos Anómalos",
  slug: "procedimientos-emergencia-c172",
  sequence_order: 5,
  lesson_order: 5,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 5.1: 5.1 Velocidades de Emergencia de la Célula y Perfil de Mejor Planeo (Maximum Glide) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · PROCEDIMIENTOS DE EMERGENCIA (SECCIÓN 3)</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.1 Velocidades de Emergencia de la Célula y Perfil de Mejor Planeo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Airspeeds for Emergency Operation & Maximum Glide</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Sección 3 Velocidades de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2 overflow-y-auto" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">AIRSPEEDS FOR EMERGENCY OPERATION (POH PÁG. 3-3)</span>
          <span class="text-[10px] font-semibold text-slate-500 dark:text-slate-400">POH Sección 3</span>
        </div>

        <!-- Tabla de Velocidades de Emergencia -->
        <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/90 shadow-2xs">
          <table class="w-full text-left text-[11px] leading-tight">
            <thead class="bg-slate-100 dark:bg-slate-700/80 font-bold text-[#0B2E59] dark:text-sky-300 border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th class="p-1.5 px-2">CONDICIÓN DE EMERGENCIA</th>
                <th class="p-1.5 px-2 text-center">CONFIGURACIÓN</th>
                <th class="p-1.5 px-2 text-center font-extrabold text-red-600 dark:text-red-400">KIAS (POH)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
              <tr>
                <td class="p-1 px-2 font-bold">Fallo de Motor tras el Despegue</td>
                <td class="p-1 px-2 text-center">Flaps UP (0°)</td>
                <td class="p-1 px-2 text-center font-mono font-bold text-red-600 dark:text-red-400">65 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Fallo de Motor tras el Despegue</td>
                <td class="p-1 px-2 text-center">Flaps DOWN (Extendidos)</td>
                <td class="p-1 px-2 text-center font-mono font-bold text-red-600 dark:text-red-400">60 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Velocidad de Mejor Planeo (Maximum Glide)</td>
                <td class="p-1 px-2 text-center">Peso 2300 lbs / Flaps UP</td>
                <td class="p-1 px-2 text-center font-mono font-extrabold text-[#1a80ff] dark:text-sky-400">65 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Aterrizaje de Precaución con Motor</td>
                <td class="p-1 px-2 text-center">Flaps 40°</td>
                <td class="p-1 px-2 text-center font-mono font-bold text-emerald-600 dark:text-emerald-400">60 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Toma Forzosa sin Motor (Forced Landing)</td>
                <td class="p-1 px-2 text-center">Flaps UP (0°)</td>
                <td class="p-1 px-2 text-center font-mono font-bold">65 KIAS</td>
              </tr>
              <tr>
                <td class="p-1 px-2 font-bold">Toma Forzosa sin Motor (Forced Landing)</td>
                <td class="p-1 px-2 text-center">Flaps DOWN (Extendidos)</td>
                <td class="p-1 px-2 text-center font-mono font-bold text-blue-600 dark:text-sky-400">60 KIAS</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-center justify-between shrink-0 pt-1 pb-0.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PROCEDIMIENTO AMPLIFICADO DE PLANEO (POH PÁG. 3-11)</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-[11px] leading-tight text-slate-800 dark:text-slate-200">
          <div>
            <strong>Establecimiento Inmediato de Velocidad:</strong> Tras un fallo de motor en vuelo, debe adoptarse de inmediato la actitud de mejor planeo para mantener <strong>65 KIAS</strong> con flaps recogidos. Mientras se planea hacia la zona de aterrizaje seleccionada, se intentará identificar la causa del fallo o preparar la toma forzosa.
          </div>
          <div class="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-200 font-semibold">
            Alcance Oficial de Planeo: Aproximadamente <strong>1.5 millas náuticas por cada 1.000 ft</strong> de altura sobre el terreno (con flaps arriba, hélice en molinete y viento en calma).
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Figura 3-1 Maximum Glide (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="space-y-1.5 flex-1 min-h-0 flex flex-col">
          <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">GRÁFICA DE MEJOR PLANEO (FIGURA 3-1 POH)</span>
          </div>

          <div class="w-full shrink-0 flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-2 border border-slate-200 dark:border-slate-700/80 shadow-2xs">
            <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
              Curva oficial de distancia alcanzable en planeo (NM) según la altitud sobre el terreno (ft AGL) a velocidad de 65 KIAS con flaps recogidos y viento cero.
            </p>
          </div>

          <div class="w-full flex-1 min-h-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-2">
            <img src="https://wkxylgsauhruoopclfwm.supabase.co/storage/v1/object/public/course-covers/fleet/c172/5.1.jpg" alt="Figura 3-1 Maximum Glide Cessna 172 POH" class="w-full h-full max-h-[460px] object-contain rounded-lg" onerror="if(this.src!=='/images/c172/5.1.jpg')this.src='/images/c172/5.1.jpg'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.2: 5.2 Fallo de Motor en Despegue: En Pista y Tras el Despegue -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.2 Fallo de Motor en Despegue: En Pista y Tras el Despegue</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Fallo en Carrera en Pista y Fallo Inmediato tras el Despegue</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE MALFUNCTION</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- DURING TAKE-OFF -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">DURING TAKE-OFF (WITH SUFFICIENT RUNWAY AHEAD)</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Thrust Lever - IDLE</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Brakes - APPLY</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing flaps (if extended) - RETRACT to increase the braking effect on the runway</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Master - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Alternator, Main Bus and Battery switch - OFF</span>
            </div>
            </div>

            <!-- IMMEDIATELY AFTER TAKE-OFF -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">IMMEDIATELY AFTER TAKE-OFF</strong>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 italic leading-snug">Lower nose to keep airspeed and attain gliding attitude. Landing straight ahead with small corrections:</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed - 65 KIAS (flaps retracted) / 60 KIAS (flaps extended)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Shut-off Valve - CLOSED</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Master - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing flaps - as required (recommended)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Alternator, Main Bus and Battery switch - OFF</span>
            </div>
            </div>
          </div>
        <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>La altitud y la velocidad rara vez son suficientes para regresar al aeródromo con un viraje de 180° en planeo.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Perfil de fallo de motor en despegue: aterrizaje en pista o frente a la aeronave manteniendo 60-65 KIAS y corte total
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.3: 5.3 Fallo de Motor en Vuelo y Reencendido -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.3 Fallo de Motor en Vuelo y Reencendido</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Gestión de Alimentación de Combustible y Protocolo de Reencendido</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE MALFUNCTION IN FLIGHT</span>
        </div>
        <div class="space-y-1.5 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- DURING FLIGHT -->
            <div class="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">DURING FLIGHT</strong>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 italic leading-snug">In case one fuel tank was flown empty, at first signs of insufficient fuel feed:</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Shut-off Valve - OPEN (push full in)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Immediately switch the Fuel Selector to BOTH position</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric Fuel Pump - ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Check the engine (parameters, airspeed/altitude, Thrust Lever)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">If engine acts normally, continue flight and land as soon as possible.</span>
            </div>
            </div>

            <!-- RESTART AFTER ENGINE FAILURE -->
            <div class="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">RESTART AFTER ENGINE FAILURE</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed between 65 and 85 KIAS | (2) Glide below 13,000 ft</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Shut-off Valve - OPEN (push full in)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Selector switch to BOTH position</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric Fuel Pump - ON | (6) Thrust Lever - IDLE</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(7)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Master OFF and then ON (if propeller stopped, Starter ON)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(8)</span>
              <span class="text-slate-800 dark:text-slate-200">Check engine power: Thrust lever 100%, check parameters.</span>
            </div>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch mt-1">
        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 h-full flex flex-col justify-start my-0">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>Quedarse sin combustible en un depósito activa el parpadeo de ambas luces de aviso FADEC.</div>
        </div>
        <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 h-full flex flex-col justify-start my-0">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>La bomba de alta presión debe ser revisada por un centro de servicio autorizado antes del siguiente vuelo.</div>
        </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Procedimiento de reencendido en vuelo: envolvente de planeo (65-85 KIAS &lt;13.000 ft), selector en BOTH y ciclo de Engine Master
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.4: 5.4 Avisos Luminosos FADEC en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.4 Avisos Luminosos FADEC en Vuelo</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Luces FADEC Parpadeantes o Fijas: Categorías Low y High</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FADEC WARNING</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- ONE FADEC LIGHT FLASHING -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ONE FADEC LIGHT IS FLASHING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Press FADEC test knob at least 2 seconds</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">FADEC light extinguished (LOW category warning): a) Continue flight normally, b) Inform service center after landing</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">FADEC light illuminated steady (HIGH category warning): a) Observe other FADEC light, b) Land as soon as possible, c) Select airspeed to avoid overspeed, d) Inform service center</span>
            </div>
            </div>

            <!-- BOTH FADEC LIGHTS FLASHING -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">BOTH FADEC LIGHTS ARE FLASHING</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">1.</span>
              <span class="text-slate-800 dark:text-slate-200">Press FADEC test knob at least 2 seconds</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">2.</span>
              <span class="text-slate-800 dark:text-slate-200">FADEC Lights extinguished (LOW category): Continue flight normally</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">3.</span>
              <span class="text-slate-800 dark:text-slate-200">Steady FADEC Lights (HIGH category warning): a) Check available power, b) Expect engine failure, c) Avoid overspeed, land as soon as possible, prepare for emergency landing</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">4.</span>
              <span class="text-slate-800 dark:text-slate-200">If fuel tank empty: Selector BOTH, Fuel Pump ON, avoid overspeed, check engine</span>
            </div>
            </div>
          </div>
        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <ul class="list-disc pl-4 space-y-1 mt-0.5 text-xs sm:text-[13px] leading-snug">
            <li class="pl-0.5">El FADEC consta de dos componentes que son independientes entre sí: FADEC A y FADEC B. En caso de avería en el FADEC activo, conmuta automáticamente al otro.</li>
            <li class="pl-0.5">La indicación de carga del CED debe considerarse no fiable con ambas luces FADEC iluminadas. Utilice otras indicaciones para evaluar la condición del motor.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Panel anunciador con avisos FADEC A y B (parpadeo o fija) y pulsador de prueba/rearme FADEC Test
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.5: 5.5 Comportamiento Anómalo del Motor y Force B -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.5 Comportamiento Anómalo del Motor y Force B</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Conmutación Manual a Canal B y Prevención de Sobrerégimen de Hélice</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ABNORMAL ENGINE BEHAVIOR</span>
        </div>
        <div class="space-y-1.5 py-1">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ABNORMAL ENGINE BEHAVIOR</strong>
            <p class="text-[11px] text-slate-600 dark:text-slate-400 italic leading-snug">If the engine acts abnormal during flight and system does not automatically switch to B-FADEC, switch to B-FADEC manually:</p>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Select an appropriate airspeed to avoid engine overspeed.</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">"FORCE-B" switch to B-FADEC</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Flight may be continued, but pilot should: i) Select airspeed to avoid overspeed, ii) Land as soon as possible, iii) Be prepared for emergency landing</span>
            </div>
          </div>

          <!-- WARNING con los primeros 2 puntos en la izquierda -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed my-1 shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <ul class="list-disc pl-4 space-y-1 mt-0.5 text-xs sm:text-[13px] leading-snug">
              <li class="pl-0.5">Solo es posible conmutar desde la posición automática a B-FADEC (A-FADEC está activo en operación normal, B-FADEC está activo en caso de fallo). Esto solo se hace necesario cuando no se produce la conmutación automática en caso de comportamiento anómalo del motor.</li>
              <li class="pl-0.5">Al operar únicamente con la batería FADEC Backup, el interruptor "Force B" NO debe ser activado. Esto apagará el motor.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y AVISOS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center my-1.5">
          <div class="w-10 h-10 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-[13px] font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Interruptor de seguridad FORCE B (Automático / FADEC B) y control de paso fino/sobrerrégimen de hélice (&lt;100 KIAS)
          </p>
        </div>

        <div class="space-y-1.5 shrink-0">
          <!-- WARNING con el 3er punto transferido a la derecha -->
          <div class="w-full p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div class="text-xs sm:text-[13px] leading-snug">Debido a fallos indicados por las luces de aviso FADEC, puede perderse la corriente de la válvula de la hélice, lo que conduce a un ajuste de paso fino. Esto puede provocar un sobrerrégimen. Velocidades por debajo de 100 KIAS son adecuadas para evitar el sobregiro en caso de fallo. Si el control de revoluciones de la hélice falla, los ascensos se pueden realizar a 65 KIAS y 100% de potencia.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.6: 5.6 Incendios: Motor en Tierra, en Vuelo y Eléctrico -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.6 Incendios: Motor en Tierra, en Vuelo y Eléctrico</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Protocolo de Corte de Fuego, Extinción y Aislamiento Eléctrico</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FIRES</span>
        </div>
        <div class="space-y-1.5 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- ENGINE FIRE -->
            <div class="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ENGINE FIRE ON GROUND / IN FLIGHT</strong>
              <p class="text-[11px] font-bold text-rose-600 dark:text-rose-400">ENGINE FIRE STARTING / TAKE-OFF:</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Master - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Shut-off Valve - CLOSED</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric Fuel Pump - OFF | (4) Battery Switch - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Extinguish flames with fire extinguisher, blankets or sand</span>
            </div>
              <p class="text-[11px] font-bold text-rose-600 dark:text-rose-400 pt-1">ENGINE FIRE IN FLIGHT:</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Master - OFF | (2) Fuel Shut-off - CLOSED</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed - avoid overspeed | (4) Fuel Pump - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Cabin heat and ventilation - OFF / CLOSE (except ceiling air)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
              <span class="text-slate-800 dark:text-slate-200">Perform emergency landing with engine out</span>
            </div>
            </div>

            <!-- ELECTRICAL FIRE -->
            <div class="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ELECTRICAL FIRE IN FLIGHT</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Main Bus - OFF | (2) Avionics Master - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Fresh air nozzles, Cabin Heat and Ventilation - OFF (closed)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Fire Extinguisher - Activate (if available)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">All electrical consumers - Switch OFF, leave Alternator, Battery and Engine Master ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
              <span class="text-slate-800 dark:text-slate-200">If evidence of continued fire, consider turning off Battery and Alternator</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(7)</span>
              <span class="text-slate-800 dark:text-slate-200">Fresh Air Nozzles, Cabin Heat & Vent - ON (open once extinguished)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(8)</span>
              <span class="text-slate-800 dark:text-slate-200">Check Circuit Breakers, do not reset if open</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(9)</span>
              <span class="text-slate-800 dark:text-slate-200">If extinguished: Main Bus ON, Avionics Master ON</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center my-1.5">
          <div class="w-10 h-10 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-[13px] font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Controles de corte de emergencia: válvula Shut-off, aislamiento de calefacción de cabina y deslastre eléctrico
          </p>
        </div>

        <div class="space-y-1.5 shrink-0">
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <ul class="list-disc pl-4 space-y-1 mt-0.5 text-xs sm:text-[13px] leading-snug">
              <li class="pl-0.5">Tras haber usado el extintor de incendios, asegúrese de que el fuego esté extinguido antes de utilizar aire exterior para eliminar el humo de la cabina.</li>
              <li class="pl-0.5">Si tanto el alternador como la batería principal se colocan en OFF, la operación continua del motor depende de la capacidad restante de la batería FADEC Backup. Se ha demostrado que el motor continúa funcionando un máximo de 30 minutos cuando se alimenta únicamente de la batería FADEC Backup.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.7: 5.7 Parada de Motor en Vuelo y Aterrizaje Forzoso -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.7 Parada de Motor en Vuelo y Aterrizaje Forzoso</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimiento de Corte Voluntario y Aterrizaje sin Motor (Engine Out)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">EMERGENCY LANDING</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- ENGINE SHUT DOWN -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">ENGINE SHUT DOWN IN FLIGHT</strong>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 italic leading-snug">If necessary to shut down engine in flight (abnormal behavior, fuel leak, etc.):</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Select airspeed to avoid overspeed (best glide recommended)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Master - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Shut-off Valve - CLOSED</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Electric Fuel Pump - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">If propeller must be stopped (excessive vibrations): i) Reduce airspeed below 55 KIAS, ii) When stopped, continue glide at 65 KIAS</span>
            </div>
            </div>

            <!-- EMERGENCY LANDING WITH ENGINE OUT -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">EMERGENCY LANDING WITH ENGINE OUT</strong>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Airspeed - 65 KIAS (flaps retracted) / 60 KIAS (flaps extended)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Shut-off Valve - CLOSED</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Engine Master - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Wing Flaps - as required (recommended)</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
              <span class="text-slate-800 dark:text-slate-200">Alternator, Main Bus and Battery switch - OFF</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(6)</span>
              <span class="text-slate-800 dark:text-slate-200">Cabin Doors - unlock before touch-down</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(7)</span>
              <span class="text-slate-800 dark:text-slate-200">Touch-down - slightly nose up attitude</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(8)</span>
              <span class="text-slate-800 dark:text-slate-200">Brake firmly</span>
            </div>
            </div>
          </div>
        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>Distancia de planeo: consulte "Maximum Glide" en el Pilot's Operating Handbook (POH) aprobado.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Configuración de planeo forzoso (60-65 KIAS), detención de hélice por vibraciones y desbloqueo de puertas para toma
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.8: 5.8 Engelamiento Inadvertido y Recuperación de Barrena -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.8 Engelamiento Inadvertido y Recuperación de Barrena</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Condiciones Meteorológicas Adversas y Salida de Espiral</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ICING & SPIRAL DIVE</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <!-- FLIGHT IN ICING CONDITIONS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FLIGHT IN ICING CONDITIONS</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Pitot Heat switch - ON (if installed)</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Turn back or change altitude to obtain OAT less conducive</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(3)</span>
                <span class="text-slate-800 dark:text-slate-200">Pull cabin heat full out and open defroster outlets</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(4)</span>
                <span class="text-slate-800 dark:text-slate-200">Advance Thrust Lever to increase RPM and shed ice</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(5)</span>
                <span class="text-slate-800 dark:text-slate-200">Watch for air filter icing, pull "Alternate Air Door"</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(6)</span>
                <span class="text-slate-800 dark:text-slate-200">Plan landing at nearest airfield</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(7)</span>
                <span class="text-slate-800 dark:text-slate-200">With 0.5 cm ice on wing leading edges, expect stall speed increase</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(8)</span>
                <span class="text-slate-800 dark:text-slate-200">Leave flaps retracted (avoids loss of elevator effectiveness)</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(9)</span>
                <span class="text-slate-800 dark:text-slate-200">Approach at 65 to 75 KIAS; landing in level attitude</span>
              </div>
            </div>

            <!-- RECOVERY FROM SPIRAL DIVE -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">RECOVERY FROM SPIRAL DIVE</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Retard Thrust Lever to idle position</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Stop turn using coordinated aileron & rudder</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(3)</span>
                <span class="text-slate-800 dark:text-slate-200">Cautiously apply elevator back pressure to 80 KIAS</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(4)</span>
                <span class="text-slate-800 dark:text-slate-200">Adjust elevator trim to maintain an 80 KIAS glide</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(5)</span>
                <span class="text-slate-800 dark:text-slate-200">Keep hands off control wheel, use rudder for heading</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(6)</span>
                <span class="text-slate-800 dark:text-slate-200">Readjust rudder trim to relieve asymmetric forces</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(7)</span>
                <span class="text-slate-800 dark:text-slate-200">Clear engine occasionally without disturbing glide</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(8)</span>
                <span class="text-slate-800 dark:text-slate-200">Upon breaking out of clouds, resume normal flight</span>
              </div>
            </div>
          </div>
          <!-- WARNING -->
          <div class="p-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs leading-snug my-0.5 shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div>Está prohibido volar en condiciones de engelamiento conocidas.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Mandos de cabina ante engelamiento: calefacción de pitot, tirador Alternate Air Door y salida de espiral en picado a 80 KIAS
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.9: 5.9 Fallo del Alternador y Descarga de Batería -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.9 Fallo del Alternador y Descarga de Batería</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Avisos Luminosos, Batería Principal y Protocolo de Deslastre Eléctrico</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Emergencia Eléctrica (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ELECTRICAL MALFUNCTIONS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch">
            <!-- ALTERNATOR WARNING -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ALTERNATOR WARNING</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Ammeter - CHECK</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Alternator switch CHECK - ON | (3) Battery Switch CHECK - ON</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(4)</span>
                <span class="text-slate-800 dark:text-slate-200">Electrical load - REDUCE IMMEDIATELY: Fuel Pump OFF, Landing/Taxi Light OFF, Strobes/Nav OFF, Interior Lights OFF, Intercom OFF, Pitot Heat OFF, Autopilot OFF</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(5)</span>
                <span class="text-slate-800 dark:text-slate-200">Pilot should: i) Land as soon as possible, ii) Be prepared for emergency landing, iii) Expect engine failure</span>
              </div>
            </div>

            <!-- BATTERY DISCHARGE > 5 MIN -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">BATTERY DISCHARGE (> 5 MIN)</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Ammeter - CHECK</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Alternator switch CHECK - ON | (3) Battery Switch CHECK - ON</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(4)</span>
                <span class="text-slate-800 dark:text-slate-200">Electrical load - REDUCE IMMEDIATELY: NAV/COM 2 OFF, Fuel Pump OFF, Landing/Taxi Lights OFF, Strobes/Nav OFF, Interior Lights OFF, Intercom OFF, Pitot Heat OFF, Autopilot OFF</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(5)</span>
                <span class="text-slate-800 dark:text-slate-200">Pilot should: i) Land as soon as possible, ii) Be prepared for emergency landing, iii) Expect engine failure</span>
              </div>
            </div>
          </div>

          <!-- CAUTION con el Punto 1 en la izquierda -->
          <div class="p-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[12.5px] leading-relaxed my-0.5 shadow-2xs shrink-0">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚡</span>
              <span>CAUTION:</span>
            </strong>
            <div>El TAE 125-02-114 requiere una fuente de energía eléctrica para su funcionamiento. Si el alternador falla, el tiempo de funcionamiento continuo del motor depende de la capacidad restante de la batería principal, de la batería FADEC Backup y de los equipos alimentados. Se ha demostrado que el motor continúa funcionando durante aproximadamente 120 minutos en base a los supuestos de la Tabla 3-1a.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y PRECAUCIONES</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center my-1.5">
          <div class="w-10 h-10 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs mb-2">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-[13px] font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Instrumentos eléctricos: amperímetro en descarga, luz de aviso Alternator y lista de deslastre de consumidores
          </p>
        </div>

        <div class="space-y-1.5 shrink-0">
          <!-- CAUTION con el Punto 2 en la derecha -->
          <div class="w-full p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[12.5px] leading-relaxed shadow-2xs">
            <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚡</span>
              <span>CAUTION:</span>
            </strong>
            <div>Si el FADEC estuvo alimentado solo por batería hasta este punto, las RPM pueden caer momentáneamente cuando se conecta el alternador. En cualquier caso: ¡deje el alternador conectado en ON!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.10: 5.10 Fallo Eléctrico Total y Batería FADEC Backup -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.10 Fallo Eléctrico Total y Batería FADEC Backup</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aislamiento de Equipos y Funcionamiento Autónomo del Motor (30 Minutos)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TOTAL ELECTRICAL FAILURE</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">TOTAL ELECTRICAL FAILURE (EXCEPT ENGINE)</strong>
            <p class="text-[11px] text-slate-600 dark:text-slate-400 italic leading-snug">All equipment inoperative, except engine:</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Alternator switch CHECK - ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Battery Switch CHECK - ON</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Land as soon as possible: i) Be prepared for an emergency landing, ii) Expect an engine failure</span>
            </div>
          </div>
        <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <ul class="list-disc pl-4 space-y-1 mt-0.5 text-xs sm:text-[13px] leading-snug">
            <li class="pl-0.5">Si el suministro eléctrico tanto del alternador como de la batería principal se interrumpe simultáneamente, el funcionamiento continuo del motor depende de la capacidad restante de la batería FADEC Backup. Se ha demostrado que el motor continúa funcionando durante un máximo de 30 minutos cuando se alimenta únicamente de la batería FADEC Backup. En este caso, todos los demás equipos eléctricos no funcionarán.</li>
            <li class="pl-0.5">Si la aeronave operó únicamente con energía de batería hasta este punto (luz de aviso del alternador encendida), el tiempo restante de funcionamiento del motor puede ser menor a 30 minutos.</li>
            <li class="pl-0.5">No active el interruptor FORCE-B, esto apagará el motor.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Esquema de alimentación de emergencia: funcionamiento autónomo de FADEC Backup (30 min) y cabina a oscuras
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.11: 5.11 Anomalías de Aceite: Presión y Temperatura -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.11 Anomalías de Aceite: Presión y Temperatura</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Presión de Aceite Baja (&lt; 2.3 bar / &lt; 1.2 bar) y Sobretemperatura de Aceite</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENGINE OIL MALFUNCTIONS</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- OIL PRESSURE TOO LOW -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">OIL PRESSURE TOO LOW</strong>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 font-semibold">&lt; 2.3 bar in cruise (amber) or &lt; 1.2 bar at idle (red):</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Reduce power as quickly as possible</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Check oil temp: If near limits, land ASAP, expect engine failure</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Increase climbing airspeed, reduce angle of climb</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">Reduce power if engine temperatures approach red range</span>
            </div>
            </div>

            <!-- OIL TEMPERATURE TOO HIGH -->
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">OIL TEMPERATURE TOO HIGH</strong>
              <p class="text-[11px] text-rose-600 dark:text-rose-400 font-semibold">Red Range (&gt; 140°C):</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Increase airspeed and reduce power as quickly as possible</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Check oil pressure: if lower than normal (&lt; 2.3 / &lt; 1.2 bar): Land ASAP, expect engine failure</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">If oil pressure is in normal range: Land as soon as possible</span>
            </div>
            </div>
          </div>
        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>Durante la operación con tiempo caluroso o ascensos prolongados a baja velocidad, las temperaturas del motor pueden subir a la franja ámbar y activar la luz "Caution". Esta indicación permite al piloto evitar el sobrecalentamiento del motor aumentando la velocidad y reduciendo el ángulo de ascenso.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Indicador CED 125 con parámetros de presión y temperatura de aceite en franja ámbar/roja y luz de aviso Caution
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.12: 5.12 Anomalías Térmicas: Refrigerante, Water Level y Reductora -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.12 Anomalías Térmicas: Refrigerante, Water Level y Reductora</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Sobretemperatura de Refrigerante, Aviso Water Level y Temperatura de Reductora</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">COOLANT & GEARBOX MALFUNCTIONS</span>
        </div>
        <div class="space-y-1.5 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <!-- COOLANT TEMPERATURE TOO HIGH -->
            <div class="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">COOLANT TEMPERATURE TOO HIGH</strong>
              <p class="text-[11px] text-rose-600 dark:text-rose-400 font-semibold">Red Range (&gt; 105°C):</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Increase airspeed and reduce power as quickly as possible</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Cabin Heat - COLD</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">If coolant temp reduces rapidly to normal range, continue flight normally and monitor CT, Cabin Heat</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">If coolant temp does not decrease: i) Land as soon as possible, ii) Be prepared for emergency landing, iii) Expect engine failure</span>
            </div>
            </div>

            <!-- WATER LEVEL & GEARBOX -->
            <div class="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">"WATER LEVEL" LIGHT & GEARBOX TEMP</strong>
              <p class="text-[11px] font-bold text-amber-600 dark:text-amber-400">"WATER LEVEL" LIGHT ILLUMINATES:</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Increase airspeed, reduce power as quickly as possible</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Coolant temp CT check and observe | (3) Oil temp OT observe</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
              <span class="text-slate-800 dark:text-slate-200">If CT or OT rise to amber/red: Land ASAP, prepare emergency landing, expect engine failure</span>
            </div>
              <p class="text-[11px] font-bold text-rose-600 dark:text-rose-400 pt-1">GEARBOX TEMP TOO HIGH (&gt; 120°C):</p>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Reduce power to 55% - 75% as quickly as possible</span>
            </div>
            <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Land as soon as possible</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center my-auto">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Display CED 125 con temperaturas de refrigerante y reductora (&gt; 120°C) y luz anunciadora WATER LEVEL
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5.13: 5.13 Pérdida de Potencia, Combustible y Malfunciones de Hélice -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">5.13 Pérdida de Potencia, Combustible y Malfunciones de Hélice</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Disminución de Potencia, Temperaturas Límite de Combustible y RPM de Hélice</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 600px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[600px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FUEL & PROPELLER ABNORMALITIES</span>
        </div>
        <div class="space-y-1.5 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
              <!-- DECREASE IN POWER & FUEL TEMP -->
              <div class="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
                <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">DECREASE IN POWER & FUEL TEMP</strong>
                <p class="text-[10px] sm:text-[11px] font-bold text-[#0B2E59] dark:text-sky-300">DECREASE IN POWER:</p>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Push Thrust Lever full forward (take-off position)</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Selector BOTH | (3) Fuel Pump ON</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(4)</span>
                <span class="text-slate-800 dark:text-slate-200">Reduce airspeed to 65-85 KIAS (max 100 KIAS)</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(5)</span>
                <span class="text-slate-800 dark:text-slate-200">Check parameters; if normal power not achieved, land ASAP</span>
              </div>
                <p class="text-[10px] sm:text-[11px] font-bold text-amber-600 dark:text-amber-400 pt-0.5">FUEL TEMPERATURE ANOMALIES:</p>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">High:</span>
                <span class="text-slate-800 dark:text-slate-200">Switch to tank with lower temp, reduce power, land ASAP</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">Low:</span>
                <span class="text-slate-800 dark:text-slate-200">Switch to tank with higher temp, change altitude, BOTH</span>
              </div>
              </div>

              <!-- PROPELLER RPM MALFUNCTIONS -->
              <div class="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
                <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">PROPELLER RPM MALFUNCTIONS</strong>
                <p class="text-[10px] sm:text-[11px] font-bold text-rose-600 dark:text-rose-400">RPM TOO HIGH (&gt; 2500 RPM):</p>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Reduce power</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Reduce airspeed below 100 KIAS to prevent overspeed</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
                <span class="text-slate-800 dark:text-slate-200">Set power to maintain altitude and land as soon as possible</span>
              </div>
                <p class="text-[10px] sm:text-[11px] font-bold text-amber-600 dark:text-amber-400 pt-0.5">FLUCTUATIONS IN RPM (&gt; +/- 100 RPM):</p>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Change power setting to find position where RPM stabilizes</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">If not resolved, set maximum power at airspeed &lt; 100 KIAS</span>
              </div>
              <div lang="en" class="flex items-start gap-2 py-0.5 text-xs sm:text-[13px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[24px]">(3)</span>
                <span class="text-slate-800 dark:text-slate-200">Fly below 100 KIAS and land as soon as possible</span>
              </div>
              </div>
            </div>
          </div>

        <div class="p-2 sm:p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[12.5px] leading-snug shadow-2xs shrink-0 flex flex-col justify-start mt-1.5">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>La bomba de alta presión debe ser revisada por un centro de servicio autorizado antes del siguiente vuelo.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 600px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[600px] flex flex-col justify-between p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 600px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DIAGRAMA Y SISTEMAS</span>
        </div>

        <div class="w-full flex-1 min-h-0 rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-4 text-center my-1.5">
          <div class="w-10 h-10 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-xl shadow-xs mb-1.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-0.5">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Indicaciones de cabina ante fallo de hélice: limitación de velocidad &lt; 100 KIAS, tacómetro RPM y display CED 125
          </p>
        </div>

        <div class="space-y-1.5 shrink-0">
          <div class="w-full p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed shadow-2xs">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <ul class="list-disc pl-4 space-y-1 mt-0.5 text-xs sm:text-[13px] leading-snug">
              <li class="pl-0.5">Si el control de revoluciones de la hélice falla, los ascensos se pueden realizar a 65 KIAS y 100% de potencia. En caso de sobrerrégimen, el FADEC reducirá la potencia a velocidades más altas para evitar superar 2.500 RPM.</li>
              <li class="pl-0.5">Una baja temperatura de combustible puede producirse al volar en clima frío con el enfriador de combustible en funcionamiento (deflector desmontado).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
};

// ============================================================================
// LECCIÓN 6: DESPACHO OPERATIVO: DOCUMENTACIÓN PREVUELO, M&B, COMBUSTIBLE Y PERFORMANCE (14 DIAPOSITIVAS)
// ============================================================================
// ============================================================================
// LECCIÓN 6: DESPACHO OPERATIVO: DOCUMENTACIÓN PREVUELO, M&B, COMBUSTIBLE Y PERFORMANCE (16 DIAPOSITIVAS)
// ============================================================================
export const C172_LESSON_6 = {
  id: "17200000-0000-0000-0000-000000000005",
  course_id: C172_COURSE_ID,
  title: "6. Despacho Operativo: Documentación Prevuelo, Masa y Centrado, Combustible y Performance",
  slug: "despacho-operativo-c172-prevuelo",
  description: "Dominio integral del despacho operacional en la aeronave de referencia EC-NNA. Incluye cumplimentación paso a paso de la documentación F.OPS.02, cálculo de Masa y Centrado con hoja F.OPS.04.NNA y envolvente en vivo (TOW y LW), tablas de crucero al 50% de potencia (15.3 L/h), política de combustible EASA Part-NCO.OP.125 y Manual OM Blue Team (1:30 de reserva + alternativo), y cálculo de performance de despegue y aterrizaje.",
  sequence_order: 6,
  lesson_order: 6,
  min_seconds: 1,
  content_html: `<!-- DIAPOSITIVA 6.1: 6.1 Despacho Operativo y Documentación Prevuelo F.OPS.02 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA)</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.1 Despacho Operativo y Documentación Prevuelo F.OPS.02</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimiento Operacional Oficial</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">MARCO NORMATIVO EASA PART-NCO & BLUE TEAM</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">OBLIGACIONES DEL PILOTO AL MANDO (PIC)</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            Antes de cada vuelo en la escuela, el piloto al mando tiene la obligación técnica y reglamentaria de cumplimentar el formulario <strong>F.OPS.02 (Documentación Prevuelo)</strong>, verificando que la aeronave opere con total seguridad dentro de los límites de peso, centrado, combustible y distancias de pista.
          </p>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Part-NCO.GEN.105 (Masa y Centrado):</strong>
            <div>Garantizar que la carga esté distribuida de modo que el centro de gravedad (CG) permanezca dentro de la envolvente certificada en despegue y aterrizaje.</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Part-NCO.OP.125 & Manual OM Blue Team (Combustible Reglamentario):</strong>
            <div>Embarcar combustible para la ruta más la reserva. Por Manual de Operaciones de Blue Team debemos disponer de <strong>al menos 1h 30min de reserva final</strong> (<strong>23.0 L / 6.08 US Gal</strong>, que ya incluyen los <strong>45 minutos</strong> reglamentarios / 11.5 L), más el combustible necesario para proceder al aeródromo alternativo (<strong>5.1 L / 1.35 US Gal</strong>) en caso de haber aterrizado en destino.</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Part-NCO.POL.105 (Performance de Pista):</strong>
            <div>Verificar que las distancias calculadas con correcciones de viento y superficie no superen la TORA y LDA disponibles.</div>
          </div>
        </div>

      </div>
    </div>

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
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA)</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.2 Teoría de Carga y Centrado: Datum, Brazos y Momentos</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Física del Vuelo y Estabilidad</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PRINCIPIOS FÍSICOS DE EQUILIBRIO</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PLANO DE REFERENCIA (DATUM)</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            En el C172, el <strong>DATUM</strong> se localiza en la <strong>cara delantera del mamparo parallamas (firewall)</strong>. Todos los brazos de palanca se miden longitudinalmente hacia la cola del avión en metros positivos.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px]">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Cálculo del Momento:</strong>
            <div class="font-mono font-bold text-blue-600 dark:text-sky-400">Momento = Masa × Brazo</div>
            <p class="text-[11px] text-slate-500 mt-1">Multiplicación de la masa de cada estación por su distancia al Datum en metros.</p>
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Centro de Gravedad (CG):</strong>
            <div class="font-mono font-bold text-emerald-600 dark:text-emerald-400">CG = Momento Total / Masa Total</div>
            <p class="text-[11px] text-slate-500 mt-1">Expresado en metros (o milímetros multiplicando por 1.000).</p>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px]">
          <strong>DENSIDAD DEL COMBUSTIBLE JET-A1:</strong> La masa de combustible no equivale directamente a los litros cargados. Se utiliza la densidad certificada de <strong>0.84 kg/L (7.01 lbs/US Gal)</strong>: <span class="font-mono font-bold">Masa (kg) = Litros × 0.84</span> (equivalente a <strong>1 US Gal = 3.785 L · 3.18 kg</strong>).
        </div>


      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ESTACIONES DE CARGA (EC-NNA)</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-1 my-1">
          <img
            src="/images/c172/6.2.jpg"
            alt="Estaciones de carga y brazos Cessna 172"
            class="w-full h-full object-contain rounded-lg"
            onerror="if(this.src!=='/images/c172/estaciones-carga-c172.jpg')this.src='/images/c172/estaciones-carga-c172.jpg'"
          />
        </div>


      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.3: 6.3 Estructura del Loadsheet Oficial F.OPS.04.NNA -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA)</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.3 Estructura del Loadsheet Oficial F.OPS.04.NNA</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Hoja Oficial de Carga y Centrado</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DATOS TÉCNICOS ESPECÍFICOS DE EC-NNA</span>
        </div>

        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
            <span class="text-[10px] text-blue-700 dark:text-sky-400 font-bold block">BEW (EMPTY WEIGHT)</span>
            <span class="font-mono font-bold text-sm text-[#0B2E59] dark:text-white">755.44 kg</span>
          </div>
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
            <span class="text-[10px] text-blue-700 dark:text-sky-400 font-bold block">BRAZO BEW</span>
            <span class="font-mono font-bold text-sm text-[#0B2E59] dark:text-white">1.042 m</span>
          </div>
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
            <span class="text-[10px] text-blue-700 dark:text-sky-400 font-bold block">MOMENTO BÁSICO</span>
            <span class="font-mono font-bold text-sm text-[#0B2E59] dark:text-white">787.23 kg·m</span>
          </div>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span>Pilotos (Asientos 1 y 2 Delanteros):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">Brazo: 0.940 m</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span>Pasajeros (Asientos 3 y 4 Traseros):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">Brazo: 1.854 m</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span>Equipaje 1 (Baggage Area 1):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">Brazo: 2.413 m (Máx. 54 kg)</span>
          </div>
          <div class="flex items-center justify-between p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span>Combustible Usable (Fuel Tanks):</span>
            <span class="font-mono font-bold text-blue-600 dark:text-sky-400">Brazo: 1.168 m (Máx. 127.4 L / 33.65 US Gal)</span>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 text-xs sm:text-[13px]">
          <strong>MTOM / MLM (PESO MÁXIMO):</strong> Tanto en despegue como en aterrizaje, la masa total máxima admisible de EC-NNA es de <strong>1.043,00 kg (2.300 lbs)</strong>.
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">HOJA F.OPS.04.NNA</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-slate-100 dark:bg-slate-950 flex items-center justify-center p-1 my-1">
          <img
            src="/images/c172/6.3.jpg"
            alt="Hoja oficial de masa y centrado F.OPS.04.NNA"
            class="w-full h-full object-contain rounded-lg"
            onerror="if(this.src!=='/images/c172/f-ops-04-loadsheet.jpg')this.src='/images/c172/f-ops-04-loadsheet.jpg'"
          />
        </div>


      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.4: 6.4 La Envolvente de Centro de Gravedad (Fig. 6-8) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA)</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.4 La Envolvente de Centro de Gravedad (Fig. 6-8)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Límites Certificados de Estabilidad</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">INTERPRETACIÓN DE LA FIGURA 6-8</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">LÍMITES ADMISIBLES DE CG</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            El centro de gravedad debe permanecer dentro de los límites en todo momento del vuelo. Un CG adelantado reduce la efectividad del timón de profundidad en la recogida, mientras que un CG trasero compromete la estabilidad longitudinal y la recuperación de pérdida.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px]">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-blue-600 dark:text-sky-400 block mb-0.5">Categoría Normal:</strong>
            <div>Hasta MTOM 1.043 kg. Límite trasero a <strong>1.201 mm</strong> (47.3 in). Límite delantero inclinado de 889 mm a 978 mm.</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-0.5">Categoría Utilidad:</strong>
            <div>Peso máximo reducido a <strong>907 kg (2.000 lbs)</strong>. Límite trasero restrictivo a <strong>1.029 mm</strong> (40.5 in). Permite maniobras de instrucción avanzadas.</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-xs sm:text-[13px]">
          <strong>REGLA DE ORO DE DESPACHO:</strong> Se deben graficar DOS puntos: el punto de despegue (TOW) y el punto de aterrizaje (LW), unidos por la línea de consumo de combustible. Ambos deben estar dentro de la envolvente.
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">ENVOLVENTE OFICIAL FIG. 6-8</span>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-1.5 my-1">
          <img
            src="/images/c172/figure_6_8_center_of_gravity_limits_modificado.svg"
            alt="Límites de Centro de Gravedad C172 Fig. 6-8"
            class="w-full h-full object-contain rounded-lg"
            onerror="if(this.src!=='/images/c172/figure_6_8_center_of_gravity_limits%20modificado.svg')this.src='/images/c172/figure_6_8_center_of_gravity_limits%20modificado.svg'"
          />
        </div>


      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.5: 6.5 Taller Práctico: Cumplimentación de Hoja de Carga F.OPS.04.NNA -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA) · TALLER INTERACTIVO 1A</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.5 Ejercicio Práctico 1A: Masa y Centrado al Despegue (TOM & CG)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Hoja F.OPS.04.NNA · Parte 1</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="loadsheet_takeoff"></div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.6: 6.6 Taller Práctico 1B: Masa y Centrado F.OPS.04 (Consumo y Aterrizaje - LM & Envolvente) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA) · TALLER INTERACTIVO 1B</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.6 Ejercicio Práctico 1B: Consumo de Ruta y Aterrizaje (LM & Envolvente)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Hoja F.OPS.04.NNA · Parte 2</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="loadsheet_landing"></div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.7: 6.7 Régimen de Crucero: Rendimiento y Consumo al 50% de Potencia -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA)</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.7 Régimen de Crucero de Escuela: Consumo y Rendimiento al 50%</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Operación Estándar Blue Team</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PERFIL OPERATIVO DE CRUCERO</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">RÉGIMEN ESTÁNDAR DE ESCUELA: 50% LOAD</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            En la escuela de vuelo Blue Team, el régimen operativo habitual utilizado para instrucción y travesía es <strong>50% de Load</strong>. Proporciona una excelente combinación de velocidad, vida útil del motor turbodiésel y un consumo contenido de <strong>15.3 L/h (4.0 US Gal/h)</strong>.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs sm:text-[13px]">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-blue-600 dark:text-sky-400 block mb-0.5">50% Potencia (Estándar Escuela):</strong>
            <div>Consumo: <strong>15.3 L/h (4.0 US Gal/h)</strong> (12.85 kg/h). KTAS: 99 a 103 kt. Autonomía superior a 8 horas con tanques utilizables (127.4 L / 33.65 US Gal).</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-slate-600 dark:text-slate-400 block mb-0.5">55% Potencia (Crucero Rápido):</strong>
            <div>Consumo: <strong>17.0 L/h (4.5 US Gal/h)</strong> (14.28 kg/h). KTAS: 103 a 108 kt. Mayor velocidad con 1.7 L/h (0.45 US Gal/h) de consumo adicional.</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 text-xs sm:text-[13px]">
          <strong>DATO CLAVE PARA EL F.OPS.02:</strong> Para cualquier cálculo de combustible de ruta (Trip Fuel) y reserva en la escuela, se multiplicará el tiempo estimado de vuelo por el régimen de 50%: <span class="font-mono font-bold">15.3 L/h (4.0 US Gal/h)</span> [12.85 kg/h].
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TABLAS CRUCERO & ALCANCE</span>
          <a href="/images/c172/cruise-performance-range.pdf" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
            <span>Abrir PDF</span>
            <span>↗</span>
          </a>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-y-auto border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-inner p-1">
          <img
            src="/images/c172/cruise-performance-range.png"
            alt="Tablas oficiales de rendimiento de crucero y alcance"
            class="w-full h-auto block rounded-lg shadow-xs"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.8: 6.8 Ground Speed, Viento y Cálculo de Combustible Horario -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA)</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.8 Ground Speed, Viento y Cálculo de Combustible Horario</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Cinemática de Navegación</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CONVERSIÓN DE TAS A GROUND SPEED (GS)</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">EFECTO DEL VIENTO EN RUTA</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            La tabla de crucero proporciona la <strong>True Airspeed (TAS)</strong>. La velocidad con respecto al suelo (Ground Speed) depende de la componente de viento en cara (resta) o en cola (suma): <span class="font-mono font-bold text-blue-600 dark:text-sky-400">GS = TAS &plusmn; Viento</span>.
          </p>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Tiempo en Ruta (ETE):</strong>
            <div class="font-mono font-bold text-emerald-600 dark:text-emerald-400">Tiempo (horas) = Distancia (NM) / Ground Speed (kt)</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Combustible de Trayecto (Trip Fuel):</strong>
            <div class="font-mono font-bold text-blue-600 dark:text-sky-400">Trip Fuel = Tiempo (h) × 15.3 L/h (4.0 US Gal/h) [12.85 kg/h]</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-xs sm:text-[13px]">
          <strong>EJEMPLO:</strong> Para 105 NM a 6.000 ft (TAS 102 kt) con 5 kt en cara &rarr; GS = 97 kt &rarr; Tiempo = 1.08 h &rarr; Trip Fuel = 1.08 × 15.3 = <strong>16.5 L (4.36 US Gal)</strong> [13.9 kg].
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TRIÁNGULO DE VELOCIDADES</span>
          <a href="/images/c172/triangulo-velocidades.png" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
            <span>Ver Ampliado</span>
            <span>↗</span>
          </a>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-xs bg-white flex items-center justify-center p-1.5 my-1">
          <img
            src="/images/c172/triangulo-velocidades.png"
            alt="Triángulo de Velocidades: TAS, Viento, Deriva (WCA) y Ground Speed (GS)"
            class="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 text-xs shrink-0">
          <div class="grid grid-cols-2 gap-1.5 text-[11px] sm:text-xs">
            <div>
              <span class="font-bold text-red-600 dark:text-red-400">A &rarr; B (TAS):</span>
              <span class="text-slate-600 dark:text-slate-300"> Rumbo Verdadero (TH)</span>
            </div>
            <div>
              <span class="font-bold text-blue-600 dark:text-sky-400">B &rarr; C (Viento):</span>
              <span class="text-slate-600 dark:text-slate-300"> Vector Viento</span>
            </div>
            <div>
              <span class="font-bold text-emerald-600 dark:text-emerald-400">A &rarr; C (GS):</span>
              <span class="text-slate-600 dark:text-slate-300"> Trayectoria (TR)</span>
            </div>
            <div>
              <span class="font-bold text-indigo-600 dark:text-indigo-400">WCA:</span>
              <span class="text-slate-600 dark:text-slate-300"> Corrección de Deriva</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.9: 6.9 Taller Interactivo 2: Crucero y Autonomía -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA) · TALLER INTERACTIVO 2</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.9 Ejercicio Práctico: Tablas de Crucero y Autonomía</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tabla Fig. 5-4a a 50% de Potencia</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="cruise"></div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.10: 6.10 Política de Combustible: Part-NCO.OP.125 y Manual OM Blue Team -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA)</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.10 Política de Combustible: Part-NCO.OP.125 & Manual OM Blue Team</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Normativa Legal y Criterio de Escuela</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">DESGLOSE DE COMBUSTIBLE REGLAMENTARIO</span>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-blue-600 dark:text-sky-400 block mb-0.5">Taxi Fuel (Rodaje y Pruebas FADEC):</strong>
            <div>Estándar fijo en escuela: <strong>3.0 Litros (0.79 US Gal)</strong> [2.52 kg] para puesta en marcha, rodaje y prueba automática FADEC.</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-emerald-600 dark:text-emerald-400 block mb-0.5">Trip Fuel (Combustible de Ruta):</strong>
            <div>Tiempo estimado de vuelo (ETE) × <strong>15.3 L/h (4.0 US Gal/h)</strong> [12.85 kg/h] a régimen de crucero al 50%.</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-amber-600 dark:text-amber-400 block mb-0.5">Reserva Final Legal EASA Part-NCO.OP.125:</strong>
            <div>Mínimo reglamentario VFR de <strong>45 minutos</strong> de crucero a 50%: <strong>11.5 Litros (3.04 US Gal)</strong> [9.64 kg].</div>
          </div>
          <div class="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 shadow-2xs">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">Reserva Exigida por Manual OM Blue Team:</strong>
            <div>Por política interna de seguridad de la escuela, se debe disponer de al menos <strong>1 hora y 30 minutos (1h 30min) de reserva final</strong>: <strong>23.0 Litros (6.08 US Gal)</strong> [19.28 kg] (que ya incluye los 45 min reglamentarios), más el combustible necesario para proceder al aeródromo alternativo (20 min = <strong>5.1 Litros / 1.35 US Gal</strong> [4.28 kg]) en caso de haber aterrizado en destino.</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-xs sm:text-[13px]">
          <strong>RAMP FUEL MÍNIMO:</strong> Ramp Fuel = Taxi (<strong>3.0 L / 0.79 Gal</strong>) + Trip Fuel + Reserva OM 1h 30min (<strong>23.0 L / 6.08 Gal</strong>) + Alternativo (<strong>5.1 L / 1.35 Gal</strong>).
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">POLÍTICA OM BLUE TEAM</span>
        </div>

        <div class="w-full rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Diagrama esquemático de bloques de combustible: Taxi (3.0 L / 0.79 US Gal), Trip Fuel de ruta, Reserva de Escuela Blue Team OM 1h 30min (23.0 L / 6.08 US Gal, que incluye los 45 min legales) y Alternativo (5.1 L / 1.35 US Gal)
          </p>
        </div>


      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.11: 6.11 Taller Interactivo 3: Planificación de Combustible F.OPS.02 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA) · TALLER INTERACTIVO 3</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.11 Ejercicio Práctico: Planificación de Combustible F.OPS.02</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Part-NCO.OP.125 & Manual OM</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="fuel"></div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.12: 6.12 Performance de Despegue: Tabla 5-1a y Factores de Corrección -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA)</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.12 Performance de Despegue: Tabla 5-1a y Factores de Corrección</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Cálculo de Distancia de Carrera y Obstáculo</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">PARÁMETROS DE LA TABLA FIG. 5-1a</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CONDICIONES ESTÁNDAR DE CERTIFICACIÓN</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            La tabla de despegue oficial asume <strong>MTOM de 1.043 kg</strong>, pista de asfalto nivelada y seca, acelerador a fondo antes de soltar frenos y velocidad de rotación <strong>VR = 54 KIAS</strong> (58 KIAS a 50 ft). Proporciona la distancia en metros directamente.
          </p>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-blue-600 dark:text-sky-400 block mb-0.5">Factor Viento (Headwind / Tailwind):</strong>
            <div>Restar 10% por cada 9 kt de viento en cara. Sumar 10% por cada 2 kt de viento en cola (hasta 10 kt máx).</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-amber-600 dark:text-amber-400 block mb-0.5">Factor Pista de Hierba Seca (+15%):</strong>
            <div>Aumentar la carrera en tierra (Ground Roll) en un <strong>15%</strong> respecto a la cifra en asfalto seco.</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-xs sm:text-[13px]">
          <strong>COMPARACIÓN CON TORA:</strong> La distancia total requerida para superar el obstáculo de 50 ft debe ser inferior a la TORA (Take-Off Run Available) y TODA de la pista en servicio.
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TABLAS OFICIALES DE DESPEGUE</span>
          <a href="/images/c172/takeoff-performance-tables.pdf" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
            <span>Abrir PDF</span>
            <span>↗</span>
          </a>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-y-auto border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-inner p-1">
          <img
            src="/images/c172/takeoff-performance-tables.png"
            alt="Tablas oficiales de rendimiento de despegue"
            class="w-full h-auto block rounded-lg shadow-xs"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.13: 6.13 Performance de Aterrizaje: Tabla Short Field 5-10 y Conversión ft -> m -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA)</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.13 Performance de Aterrizaje: Tabla Short Field 5-10 y Conversión ft &rarr; m</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Conversión de Unidades y Factores</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CONVERSIÓN Y CORRECCIÓN DE TOMA</span>
        </div>

        <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
          <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">TABLA SHORT FIELD LANDING (FIG. 5-10)</strong>
          <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 leading-snug">
            En las tablas originales de Cessna, las distancias vienen en <strong>pies (ft)</strong> y deben convertirse a <strong>metros</strong> para anotarlas en el F.OPS.02: <span class="font-mono font-bold text-blue-600 dark:text-sky-400">Metros = Pies / 3.28084</span>.
          </p>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-blue-600 dark:text-sky-400 block mb-0.5">Factor Viento:</strong>
            <div>Restar 10% por cada 9 kt de cara. Sumar 10% por cada 2 kt de cola.</div>
          </div>
          <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <strong class="text-rose-600 dark:text-rose-400 block mb-0.5">Factor Pista de Hierba Seca (+45%):</strong>
            <div>Aumentar la carrera en tierra en un <strong>45%</strong> por menor fricción de frenado.</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 text-xs sm:text-[13px]">
          <strong>COMPARACIÓN CON LDA:</strong> La distancia total requerida de aterrizaje a 50 ft debe ser inferior a la LDA (Landing Distance Available) de la pista de destino.
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">TABLAS OFICIALES DE ATERRIZAJE</span>
          <a href="/images/c172/landing_distance_table.pdf" target="_blank" rel="noopener noreferrer" class="text-[11px] font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1">
            <span>Abrir PDF</span>
            <span>↗</span>
          </a>
        </div>

        <div class="w-full flex-1 rounded-xl overflow-y-auto border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-inner p-1">
          <img
            src="/images/c172/landing_distance_table.png"
            alt="Tabla oficial de rendimiento de aterrizaje Short Field Fig. 5-10"
            class="w-full h-auto block rounded-lg shadow-xs"
          />
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.14: 6.14 Taller Interactivo 4A: Performance de Despegue (TORA & TODA) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA) · TALLER INTERACTIVO 4A</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.14 Ejercicio Práctico 4A: Distancias de Despegue (TORA & TODA)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">F.OPS.02 Distancias Prevuelo · Parte 1</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="performance_takeoff"></div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.15: 6.15 Taller Interactivo 4B: Distancia de Aterrizaje (LDA) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA) · TALLER INTERACTIVO 4B</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.15 Ejercicio Práctico 4B: Distancia de Aterrizaje y Margen (LDA)</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">F.OPS.02 Distancias Prevuelo · Parte 2</span>
  </div>

  <div class="py-0.5" data-interactive-exercise="performance_landing"></div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 6.16: 6.16 Validación Final del Despacho y Firma Operativa -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-155 (EC-NNA)</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight my-0">6.16 Validación Final del Despacho y Firma Operativa</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Cierre Documental F.OPS.02</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">CHECKLIST FINAL DE DESPACHO</span>
        </div>

        <div class="space-y-1.5 text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
          <div class="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span class="text-emerald-500 font-bold text-base"></span>
            <div><strong>Masa Máxima:</strong> TOW y LW &le; 1043.00 kg (2.300 lbs).</div>
          </div>
          <div class="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span class="text-emerald-500 font-bold text-base"></span>
            <div><strong>Centro de Gravedad:</strong> Puntos de despegue y aterrizaje dentro de la envolvente Fig. 6-8.</div>
          </div>
          <div class="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span class="text-emerald-500 font-bold text-base"></span>
            <div><strong>Combustible Escuela Blue Team:</strong> Ramp Fuel cubre Taxi (<strong>3.0 L / 0.79 Gal</strong>) + Trip + Reserva OM 1h 30min (<strong>23.0 L / 6.08 Gal</strong> al 50%, que ya incluye los 45 min legales) + Alternativo (<strong>5.1 L / 1.35 Gal</strong>). Mínimo legal EASA: 45 min (<strong>11.5 L / 3.04 Gal</strong>).</div>
          </div>
          <div class="flex items-center gap-2 p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
            <span class="text-emerald-500 font-bold text-base"></span>
            <div><strong>Performance de Pista:</strong> Distancias calculadas a 50 ft son inferiores a TORA y LDA disponibles.</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-xs sm:text-[13px]">
          <strong>FIRMAS OPERATIVAS:</strong> El F.OPS.02 debe ser firmado por el alumno y el instructor antes de retirar las llaves de la aeronave EC-NNA.
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs space-y-2" style="height: 590px;">
        <div class="flex items-center justify-between pb-1 border-b border-slate-200 dark:border-slate-800 shrink-0">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">FIRMA Y DESPACHO COMPLETADO</span>
        </div>

        <div class="w-full rounded-xl border-2 border-dashed border-sky-300 dark:border-sky-700/60 bg-sky-50/50 dark:bg-sky-950/20 flex flex-col items-center justify-center p-6 text-center">
          <div class="w-12 h-12 rounded-2xl bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shadow-xs mb-2.5">
            📷
          </div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-400 mb-1">Imagen Recomendada</span>
          <p class="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 max-w-xs leading-snug">
            Copia física del F.OPS.02 validada con las firmas del alumno y del instructor de vuelo (FI) en operaciones antes de la inspección prevuelo
          </p>
        </div>


      </div>
    </div>
  </div>
</div>`,
};

export const C172_LESSONS = [
  C172_LESSON_1,
  C172_LESSON_2,
  C172_LESSON_3,
  C172_LESSON_4,
  C172_LESSON_5,
  C172_LESSON_6,
];
