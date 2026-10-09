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
    url: "/manuals/cessna/OM+EC-NNA+++suplemento+motor.pdf",
    badge: "POH Completo",
  },
  {
    category: "Manuales Completos POH",
    registration: "EC-OXV",
    title: "POH Oficial Completo Reims F172K (EC-OXV)",
    url: "/manuals/cessna/POH+++SUPLEMENTOS+F172K+EC-OXV OCR.pdf",
    badge: "POH Completo",
  },
  {
    category: "Manuales Completos POH",
    registration: "EC-NNX",
    title: "POH Oficial Completo Reims F172 (EC-NNX)",
    url: "/manuals/cessna/OM+EC-NNX+++suplemento+motor.pdf",
    badge: "POH Completo",
  },
  {
    category: "Manuales Completos POH",
    registration: "EC-OXT",
    title: "Suplementos Oficiales Reims F172M (EC-OXT)",
    url: "/manuals/cessna/SUPLEMENTOS+F172M+EC-OXT OCR.pdf",
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
  {
    category: "Hojas de Carga F.OPS.04",
    registration: "EC-OXT",
    title: "Hoja de Masa y Centrado F.OPS.04.OXT (BEW: 785.00 kg / Arm: 1.035 m)",
    url: "/manuals/cessna/loadsheet-ec-oxt.pdf",
    badge: "F.OPS.04",
  },
  {
    category: "Hojas de Carga F.OPS.04",
    registration: "EC-OXV",
    title: "Hoja de Masa y Centrado F.OPS.04.OXV (BEW: 778.20 kg / Arm: 1.038 m)",
    url: "/manuals/cessna/loadsheet-ec-oxv.pdf",
    badge: "F.OPS.04",
  },

  // Suplementos Específicos Continental CD-135 / CD-155
  {
    category: "Suplementos Motor Continental",
    title: "AFM Supplement Continental TAE 125-01 / CD-135 (Instalación C172)",
    url: "/manuals/cessna/OM+EC-NNA+++suplemento+motor.pdf",
    badge: "CD-135 AFM",
  },
  {
    category: "Suplementos Motor Continental",
    title: "AFM Supplement Continental TAE 125-02-114 / CD-155 (155 CV High Output)",
    url: "/manuals/cessna/SUPLEMENTOS+F172M+EC-OXT OCR.pdf",
    badge: "CD-155 AFM",
  },
  {
    category: "Hélices MT-Propeller",
    title: "Manual de Operación Gobernador y Hélice MT-Propeller MTV-6-A/187-129",
    url: "/manuals/cessna/OM+EC-NNX+++suplemento+motor.pdf",
    badge: "MT-Propeller",
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
  min_seconds: 60,
  content_html: `<!-- DIAPOSITIVA 1.1: 1.1 Objeto del Suplemento POH y Simbología de Seguridad -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD-135 / CD-155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">1.1 Objeto del Suplemento POH y Simbología de Seguridad</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Suplemento Oficial de Vuelo · POH Sección 1 (General)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 1 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📘 OBJETO Y SIMBOLOGÍA DE SEGURIDAD (SECCIÓN 1)</span>
        </div>
        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Objeto del Suplemento -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">OBJETO DEL SUPLEMENTO</strong>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              Este Suplemento Oficial al Manual de Operación de la Aeronave (POH) contiene la información técnica, limitaciones y procedimientos necesarios para la operación segura de los aviones Cessna 172 equipados con motores Continental CD-135 y CD-155.
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              La información contenida en este suplemento complementa o sustituye a la del POH básico de Cessna en todo lo relativo a la planta de potencia y sus sistemas asociados.
            </p>
          </div>

          <!-- Simbología de Seguridad POH -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">SIMBOLOGÍA OFICIAL DE SEGURIDAD POH</strong>
            
            <div class="flex items-start gap-2 text-[11px] leading-tight">
              <span class="font-bold text-red-600 dark:text-red-400 shrink-0 uppercase tracking-wide min-w-[70px]">WARNING:</span>
              <span class="text-slate-800 dark:text-slate-200">El incumplimiento de estas normas de seguridad puede provocar lesiones graves o incluso la muerte.</span>
            </div>

            <div class="flex items-start gap-2 text-[11px] leading-tight">
              <span class="font-bold text-amber-600 dark:text-amber-400 shrink-0 uppercase tracking-wide min-w-[70px]">CAUTION:</span>
              <span class="text-slate-800 dark:text-slate-200">El incumplimiento de estas notas y medidas de seguridad especiales puede causar daños al motor o a otros componentes.</span>
            </div>

            <div class="flex items-start gap-2 text-[11px] leading-tight">
              <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0 uppercase tracking-wide min-w-[70px]">NOTE:</span>
              <span class="text-slate-800 dark:text-slate-200">Información técnica añadida para una mejor comprensión y ejecución de una instrucción.</span>
            </div>
          </div>

          <!-- Advertencia POH Actualización -->
          <div class="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 flex items-start gap-2 text-[11px] leading-tight text-amber-900 dark:text-amber-200">
            <span class="text-base shrink-0">⚠️</span>
            <span><strong>WARNING (POH):</strong> La operación segura solo está asegurada con un suplemento POH actualizado. Las revisiones y enmiendas oficiales se publican mediante Service Bulletin TM TAE 000-0004.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Nota del Instructor y Gráfico (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">💡 NOTA DEL INSTRUCTOR Y GRÁFICO REQUERIDO</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-3">
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-3">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>👨‍✈️</span> ORIENTACIÓN DOCENTE
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de captura
              </span>
            </div>

            <div class="space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Explicación del Instructor:</span>
              <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                "Este curso no sustituye al POH básico de Cessna; define exclusivamente las diferencias y procedimientos del motor diésel y sus sistemas para operar con seguridad."
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Gráfico / Captura a incorporar:</span>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Fotografía exterior de un Cessna 172 en rampa y carátula oficial del Suplemento POH Continental.
              </p>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              Ref. POH: Suplemento Sección 1 (General · Pág. 1-1)
            </div>
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">1.2 Especificaciones del Motor Continental CD-135 / CD-155</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Arquitectura de Motor Diésel Turboalimentado (POH Pág. 1-2)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 1 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚙️ ESPECIFICACIONES DE PLANTA DE POTENCIA (ENGINE)</span>
        </div>
        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Datos técnicos del motor -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MOTOR CONTINENTAL CD-135 Y CD-155</strong>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              Motor de 4 cilindros en línea, cuatro tiempos, refrigeración líquida, doble árbol de levas en cabeza (DOHC), inyección directa Common-Rail y turboalimentado con intercooler. Cilindrada total: 1.991 cm³ (121.5 in³).
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              Controlado íntegramente por sistema electrónico FADEC. La hélice es accionada mediante caja reductora integrada (relación $i = 1.69$) con amortiguador mecánico de vibraciones y embrague de sobrecarga. Cuenta con motor de arranque y alternador integrados.
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
              <li class="flex items-start gap-1.5">• <span>Mando de mezcla y sistema de cebado (*primer*).</span></li>
            </ul>
          </div>

          <!-- Warning eléctrico POH -->
          <div class="p-2 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/60 flex items-start gap-2 text-[11px] leading-tight text-red-900 dark:text-red-200">
            <span class="text-base shrink-0">🚨</span>
            <span><strong>WARNING (POH):</strong> El motor requiere energía eléctrica continua para operar. Si fallan batería y alternador, el motor solo operará durante un máximo de **30 minutos** con la batería de reserva FADEC. Prestar máxima atención a las indicaciones de fallo del alternador.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Nota del Instructor y Gráfico (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">💡 NOTA DEL INSTRUCTOR Y GRÁFICO REQUERIDO</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-3">
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-3">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>👨‍✈️</span> ORIENTACIÓN DOCENTE
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de captura
              </span>
            </div>

            <div class="space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Explicación del Instructor:</span>
              <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                "Olvídate de buscar magnetos, palanca de mezcla roja o calefacción de carburador; el motor se gestiona por FADEC, pero depende críticamente de la energía eléctrica."
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Gráfico / Captura a incorporar:</span>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Fotografía del bloque motor bajo el capó mostrando el turbocompresor, common-rail y la caja reductora frontal.
              </p>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              Ref. POH: Suplemento Sección 1 (General · Pág. 1-2)
            </div>
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">1.3 Hélice MT-Propeller Tripala de Paso Constante</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Gobernador Hidráulico y Velocidad Constante (POH Pág. 1-3)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 1 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🌀 ESPECIFICACIONES DE HÉLICE (PROPELLER)</span>
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
              La hélice es de velocidad constante (*constant speed*). El paso de las palas se ajusta hidráulicamente mediante presión de aceite suministrada por el motor y gestionada directamente por el sistema FADEC.
            </p>
            <p class="text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed">
              El piloto no dispone de palanca mecánica de paso de hélice en cabina: al mover la palanca monomando de empuje (*Thrust Lever*), la ECU del FADEC determina y comanda el paso óptimo para mantener 2.300 RPM en despegue y crucero continuo.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Nota del Instructor y Gráfico (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">💡 NOTA DEL INSTRUCTOR Y GRÁFICO REQUERIDO</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-3">
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-3">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>👨‍✈️</span> ORIENTACIÓN DOCENTE
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de captura
              </span>
            </div>

            <div class="space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Explicación del Instructor:</span>
              <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                "No existe palanca azul de paso de hélice en cabina; el FADEC regula automáticamente el gobernador hidráulico a 2.300 RPM según la posición de la palanca monomando."
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Gráfico / Captura a incorporar:</span>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Vista frontal en detalle de las tres palas de material compuesto y cono de la hélice MT-Propeller instalada en el Cessna 172.
              </p>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              Ref. POH: Suplemento Sección 1 (General · Pág. 1-3)
            </div>
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">1.4 Combustibles Autorizados y Diferencias de Densidad</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">JET A-1, Diésel EN 590 y Prohibición de AVGAS (POH Pág. 1-3 y 1-7)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 1 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⛽ COMBUSTIBLES Y FLUIDOS (FUELS AND LIQUIDS)</span>
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
            <span><strong>CAUTION (POH):</strong> El uso de combustibles no aprobados provocará daños en el motor y en los componentes del sistema de combustible, pudiendo provocar una parada de motor en vuelo. **AVGAS 100LL está terminantemente prohibido.**</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Nota del Instructor y Gráfico (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">💡 NOTA DEL INSTRUCTOR Y GRÁFICO REQUERIDO</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-3">
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-3">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>👨‍✈️</span> ORIENTACIÓN DOCENTE
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de captura
              </span>
            </div>

            <div class="space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Explicación del Instructor:</span>
              <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                "Verifica siempre el combustible en el repostaje: repostar AVGAS 100LL destruye el sistema de inyección de alta presión. Además, ten en cuenta en el centrado que el queroseno es más pesado que la gasolina."
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Gráfico / Captura a incorporar:</span>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Foto en detalle del rótulo 'JET FUEL ONLY' junto a la boca de llenado de combustible en el plano del Cessna 172.
              </p>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              Ref. POH: Suplemento Sección 1 (General · Pág. 1-3 y 1-7)
            </div>
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">1.5 Fluidos de Servicio: Aceite, Reductora y Refrigerante</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Fluidos de Motor, Caja Reductora y Sistema de Refrigeración (POH Pág. 1-4)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 1 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛢️ LUBRICACIÓN Y REFRIGERACIÓN (LIQUIDS SPECIFICATION)</span>
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

    <!-- Columna Derecha (lg:col-span-5): Nota del Instructor y Gráfico (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">💡 NOTA DEL INSTRUCTOR Y GRÁFICO REQUERIDO</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-3">
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-3">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>👨‍✈️</span> ORIENTACIÓN DOCENTE
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de captura
              </span>
            </div>

            <div class="space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Explicación del Instructor:</span>
              <p class="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                "En la inspección prevuelo supervisamos tres fluidos independientes: nivel de aceite motor en la varilla, líquido refrigerante en el vaso de expansión y nivel en la mirilla de la reductora."
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">Gráfico / Captura a incorporar:</span>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
                Infografía con los envases oficiales de AeroShell Diesel Ultra y Glysantin G48 junto con la mirilla de nivel de la reductora.
              </p>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              Ref. POH: Suplemento Sección 1 (General · Pág. 1-4)
            </div>
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
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">1.6 Mandos e Instrumentación de Motor en Cabina</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Disposición de Instrumentos y Panel Anunciador (POH Figuras 1-1 y 1-2)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 1 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🎛️ INSTRUMENTACIÓN Y MANDOS EN CABINA (INSTRUMENT PANEL)</span>
        </div>
        <div class="space-y-1.5 py-0.5 text-xs">
          <!-- Mandos e interruptores -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">MANDOS E INTERRUPTORES ESPECÍFICOS</strong>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px] text-slate-700 dark:text-slate-300">
              <p>• <strong>Alt. Air Door:</strong> Mando de aire alternativo de motor.</p>
              <p>• <strong>Starter:</strong> Pulsador de arranque eléctrico.</p>
              <p>• <strong>BAT / MAIN / ALT:</strong> Interruptores de batería, barra y alternador.</p>
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

    <!-- Columna Derecha (lg:col-span-5): Nota del Instructor y Gráfico (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">💡 NOTA DEL INSTRUCTOR Y GRÁFICO REQUERIDO</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-3">
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-3">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>👨‍✈️</span> ORIENTACIÓN DOCENTE
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

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              Ref. POH: Suplemento Sección 1 (General · Pág. 1-5 y 1-6)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
};

// ============================================================================
// LECCIÓN 2: LIMITACIONES OPERACIONALES POH (10 DIAPOSITIVAS)
// ============================================================================
export const C172_LESSON_2 = {
  id: "17200000-0000-0000-0000-000000000001",
  course_id: C172_COURSE_ID,
  title: "2. Limitaciones Operacionales POH",
  slug: "limitaciones-operacionales-poh",
  sequence_order: 2,
  lesson_order: 2,
  min_seconds: 60,
  content_html: `<!-- DIAPOSITIVA 2.1: 1.1 Límites de Peso Estructural (Weight Limits) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.1 Límites de Peso Estructural (Weight Limits)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Pesos Máximos de Rampa, Despegue y Aterrizaje (C172 N, P y F-M)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚖️ WEIGHT LIMITS (SECTION 2)</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- CESSNA 172 N & F-M -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CESSNA 172 N & F, G, H, I, K, L, M</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Normal Category - Max. Ramp Weight: 1044 kg (2302 lbs)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Normal Category - Max. Takeoff Weight: 1043 kg (2300 lbs)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Normal Category - Max. Landing Weight: 1043 kg (2300 lbs)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Utility Category - Max. Ramp Weight: 908 kg (2002 lbs)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Utility Category - Max. Takeoff Weight: 907 kg (2000 lbs)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Utility Category - Max. Landing Weight: 907 kg (2000 lbs)</span>
            </div>
            </div>

            <!-- CESSNA 172 P -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CESSNA 172 P (TAE 125)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Normal Category - Max. Ramp Weight: 1090 kg (2402 lbs)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Normal Category - Max. Takeoff Weight: 1089 kg (2400 lbs)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Normal Category - Max. Landing Weight: 1089 kg (2400 lbs)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Utility Category - Max. Ramp Weight: 954 kg (2102 lbs)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Utility Category - Max. Takeoff Weight: 953 kg (2100 lbs)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Utility Category - Max. Landing Weight: 953 kg (2100 lbs)</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>No está permitido arrancar el motor utilizando energía externa (external power). Si el arranque no es posible empleando la batería de a bordo, debe verificarse obligatoriamente el estado de la batería antes del vuelo.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📐 ESPECIFICACIÓN DE DIAGRAMA POH</span>
        </div>
        <div class="flex flex-col items-center justify-start p-1.5 pt-1 space-y-2">
          <!-- Marco Indicador de Imagen Requerida -->
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 sm:p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-2">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>⚖️</span> ILUSTRACIÓN TÉCNICA REQUERIDA
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de generación
              </span>
            </div>

            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#0B2E59] dark:text-sky-200 leading-snug">
                Envolvente de Masa y Centrado (Weight & Balance Envelope)
              </h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Diagrama oficial de carga y centrado correspondiente a la Sección 2 y Hoja F.OPS.04, vinculando los pesos estructurales con los límites de brazo del centro de gravedad.
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2 sm:p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">
                Elementos que debe mostrar la ilustración:
              </span>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Categoría Normal:</strong> Límite de rampa 1044 kg (2302 lbs) y despegue/aterrizaje 1043 kg (2300 lbs) [1089 kg en C172 P].</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Categoría Utilitaria:</strong> Límite de rampa 908 kg (2002 lbs) y despegue/aterrizaje 907 kg (2000 lbs).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Compartimentos de equipaje:</strong> Brazos y cotas de Baggage Area 1 (54 kg máx) y Baggage Area 2 (23 kg máx).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Silueta C172:</strong> Posición del datum de referencia, brazos de asientos y centro de gravedad admisible.</span>
                </li>
              </ul>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              Ref. POH: Suplemento Sección 2 & POH Sección 6 / Hoja de Carga F.OPS.04
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.2: 1.2 Límites de Maniobra y Factores de Carga -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.2 Límites de Maniobra y Factores de Carga</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Maneuver Limits, Prohibición de Barrenas y Cargas G Negativas</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">✈️ MANEUVER & LOAD LIMITS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- LÍMITES DE MANIOBRA -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">LÍMITES DE MANIOBRA (MANEUVER LIMITS)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Normal Category: Sin cambios respecto a las limitaciones originales de la aeronave</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Utility Category: Prohibido iniciar barrenas intencionadamente (Intentionally initiating spins is prohibited)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Maniobras acrobáticas: No están autorizadas maniobras acrobáticas intencionadas</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Vuelo en turbulencia: Seleccionar posición BOTH en el selector de combustible</span>
            </div>
            </div>

            <!-- FACTORES DE CARGA -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">FACTORES DE CARGA Y ACELERACIONES G</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Flight Load Factors: Sin cambios respecto a las limitaciones estructurales del POH base</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Prohibición de Gs negativas: Prohibido iniciar intencionadamente maniobras con G negativa</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Aceleraciones negativas prolongadas: Deben evitarse rigurosamente</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Límites del motor: Deben respetarse los límites de factor de carga especificados en el manual del motor</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <ul class="list-disc pl-3 space-y-0.5 mt-0.5 text-[11px] leading-tight text-[11px] leading-tight">
            <li class="pl-0.5">Está prohibido iniciar intencionadamente maniobras con G negativa (Intentionally initiating negative G maneuvers is prohibited).</li>
            <li class="pl-0.5">Evite la duración prolongada de cargas G negativas. Las aceleraciones G negativas prolongadas pueden provocar problemas de control de hélice y fallos de motor.</li>
          </ul>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📐 ESPECIFICACIÓN DE DIAGRAMA POH</span>
        </div>
        <div class="flex flex-col items-center justify-start p-1.5 pt-1 space-y-2">
          <!-- Marco Indicador de Imagen Requerida -->
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 sm:p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-2">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>📈</span> ILUSTRACIÓN TÉCNICA REQUERIDA
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de generación
              </span>
            </div>

            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#0B2E59] dark:text-sky-200 leading-snug">
                Diagrama de Maniobra V-n (Flight Load Factor Envelope)
              </h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Gráfico cartesiano oficial de factor de carga "g" frente a la velocidad indicada (KIAS), mostrando los límites estructurales certificados y las envolventes operacionales.
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2 sm:p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">
                Elementos que debe mostrar la ilustración:
              </span>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Categoría Normal:</strong> Envolvente entre +3.8g y -1.52g (Flaps UP) y límite de +3.0g (Flaps DOWN).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Categoría Utilitaria:</strong> Envolvente ampliada entre +4.4g y -1.76g (Flaps UP) y +3.0g (Flaps DOWN).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Velocidades de corte:</strong> Velocidad de maniobra V_A, velocidad nunca exceder V_NE y curva de pérdida acelerada.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Señalética de maniobras prohibidas:</strong> Prohibición explícita de barrenas (spins) y maniobras acrobáticas.</span>
                </li>
              </ul>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              Ref. POH: Suplemento Sección 2 · Flight Load Factors & Maneuver Limits
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.3: 1.3 Límites de Motor: Potencia, RPM y Techo Operativo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.3 Límites de Motor: Potencia, RPM y Techo Operativo</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Technify Motors TAE 125 (CD-135 vs CD-155), RPM y Techo Certificado</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚙️ ENGINE OPERATING LIMITS</span>
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
              <span class="text-slate-800 dark:text-slate-200">Crucero máximo recomendado: 85% de carga (Max. recommended cruise)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Techo máximo certificado: 18.000 ft de altitud de presión</span>
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
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📐 ESPECIFICACIÓN DE DIAGRAMA POH</span>
        </div>
        <div class="flex flex-col items-center justify-start p-1.5 pt-1 space-y-2">
          <!-- Marco Indicador de Imagen Requerida -->
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 sm:p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-2">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>⚙️</span> ILUSTRACIÓN TÉCNICA REQUERIDA
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de generación
              </span>
            </div>

            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#0B2E59] dark:text-sky-200 leading-snug">
                Régimen de Potencia vs Altitud y Monomando FADEC
              </h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Gráfico comparativo de entrega de potencia y RPM de los motores Continental CD-135 vs CD-155 frente a la altitud, junto con el principio de control monomando.
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2 sm:p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">
                Elementos que debe mostrar la ilustración:
              </span>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Curvas CD-135 vs CD-155:</strong> Potencia máx despegue (99 kW / 135 HP vs 114 kW / 155 HP a 2300 RPM hélice).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Techos de servicio operativos:</strong> Cota máxima de 17.500 ft (CD-135) y 18.000 ft (CD-155).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Altitud crítica turbo:</strong> Mantenimiento de potencia nominal constante hasta la altitud crítica del turbocompresor.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Esquema Thrust Lever:</strong> Palanca única de empuje sin palancas de mezcla ni paso de hélice gobernada por ECU.</span>
                </li>
              </ul>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              Ref. POH: Suplemento Continental Sección 2 & Sección 5 (Power Limits & Performance)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.4: 1.4 Límites Operacionales de Temperatura -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.4 Límites Operacionales de Temperatura</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Límites de Aceite de Motor, Líquido Refrigerante y Caja Reductora</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🌡️ TEMPERATURE OPERATING LIMITS</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📐 ESPECIFICACIÓN DE DIAGRAMA POH</span>
        </div>
        <div class="flex flex-col items-center justify-start p-1.5 pt-1 space-y-2">
          <!-- Marco Indicador de Imagen Requerida -->
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 sm:p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-2">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>🌡️</span> ILUSTRACIÓN TÉCNICA REQUERIDA
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de generación
              </span>
            </div>

            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#0B2E59] dark:text-sky-200 leading-snug">
                Diagrama Sinóptico Térmico y Sensores del Bloque Motor
              </h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Esquema de ubicación de sensores térmicos en el motor Continental y termómetros de referencia con sus rangos mínimos, normales y máximos de operación.
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2 sm:p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">
                Elementos que debe mostrar la ilustración:
              </span>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Refrigerante (Coolant):</strong> Mín. arranque -32ºC, mín. plena potencia +60ºC, máx. operativa +105ºC.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Aceite Motor (Engine Oil):</strong> Mín. arranque -32ºC, mín. plena potencia +50ºC, máx. permitida +140ºC.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Aceite de Reductora (Gearbox):</strong> Límite superior absoluto de +120ºC (sin mínimo de plena potencia).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Aire de Admisión (MAT):</strong> Sensor en colector post-intercooler con límite máx de +75ºC (CD-135) / +80ºC (CD-155).</span>
                </li>
              </ul>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              Ref. POH: Suplemento Continental TAE 125 Sección 2 (Temperature Limits)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.5: 1.5 Límites de Presión y Consumo de Aceite -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.5 Límites de Presión y Consumo de Aceite</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Presión Mínima (1.2 / 2.3 bar), Máxima (6.0 bar) y Consumo Máximo (0.1 l/h)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛢️ OIL PRESSURE & CONSUMPTION</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📐 ESPECIFICACIÓN DE DIAGRAMA POH</span>
        </div>
        <div class="flex flex-col items-center justify-start p-1.5 pt-1 space-y-2">
          <!-- Marco Indicador de Imagen Requerida -->
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 sm:p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-2">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>🛢️</span> ILUSTRACIÓN TÉCNICA REQUERIDA
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de generación
              </span>
            </div>

            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#0B2E59] dark:text-sky-200 leading-snug">
                Circuito de Lubricación y Manómetro de Presión de Aceite
              </h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Esquema funcional del circuito de engrase forzado del motor y caja reductora, con los límites y arcos de presión de aceite indicados en bar.
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2 sm:p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">
                Elementos que debe mostrar la ilustración:
              </span>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Presiones de aceite motor:</strong> Mín. ralentí 1.2 bar, rango normal 2.3 a 6.0 bar y pico máx arranque frío 6.5 bar.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Circuito hidráulico:</strong> Cárter húmedo, bomba de engranajes, válvula de alivio bypass y filtro de aceite.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Intercambiador térmico:</strong> Radiador de aceite de reductora y enfriador agua-aceite del bloque.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Consumo y capacidad:</strong> Tasa máx de consumo (0.1 l/h) y comprobación de varilla (4.5 a 6.0 litros).</span>
                </li>
              </ul>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              Ref. POH: Suplemento Continental Sección 2 & Sección 7 (Oil Pressure & Lubrication)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.6: 1.6 Límites Térmicos de Combustible en Depósito -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.6 Límites Térmicos de Combustible en Depósito</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tabla 2-3a POH: Temperaturas Mínimas para JET A-1 (-30°C / -35°C) y Diésel (>0°C / -5°C)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⛽ FUEL TEMPERATURE LIMITS IN TANK</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📐 ESPECIFICACIÓN DE DIAGRAMA POH</span>
        </div>
        <div class="flex flex-col items-center justify-start p-1.5 pt-1 space-y-2">
          <!-- Marco Indicador de Imagen Requerida -->
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 sm:p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-2">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>⛽</span> ILUSTRACIÓN TÉCNICA REQUERIDA
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de generación
              </span>
            </div>

            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#0B2E59] dark:text-sky-200 leading-snug">
                Sondas Térmicas en Depósitos y Circuito de Retorno
              </h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Diagrama de los captadores térmicos en depósitos alares, circuito de recirculación caliente y límites operativos de temperatura según el tipo de combustible.
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2 sm:p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">
                Elementos que debe mostrar la ilustración:
              </span>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Límites JET A-1:</strong> Mínima despegue -30ºC (-34ºC con aditivo), mínima en vuelo -35ºC.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Límites Diésel EN 590:</strong> Mínima despegue +5ºC / 0ºC y mínima en vuelo -5ºC (riesgo de cristalización de parafinas).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Límite superior crítico:</strong> Temperatura máxima en depósito de +54ºC / +55ºC (cavitación de bomba).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Líneas de retorno:</strong> Recirculación de combustible templado desde el common-rail a los tanques alares.</span>
                </li>
              </ul>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              Ref. POH: Suplemento Continental Sección 2 (Fuel Temperature Limitations)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.7: 1.7 Marcas de Instrumentos CED 125 (Motor y Reductora) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.7 Marcas de Instrumentos CED 125 (Motor y Reductora)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Tabla 2-2 / 2-3b POH: Rangos Verde, Ámbar y Rojo en el Display Compacto</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📊 CED 125 INSTRUMENT MARKINGS</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- TACÓMETRO, PRESIÓN Y CARGA -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">TACÓMETRO, PRESIÓN Y CARGA (CED 125)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Tachometer [RPM]: Verde: 0 - 2.300 RPM | Línea Roja: > 2.300 RPM</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Oil Pressure [bar]: Roja: 0 - 1.1 | Ámbar: 1.2 - 2.2 | Verde: 2.3 - 5.1 | Ámbar: 5.2 - 6.5 | Roja: > 6.5 bar</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Oil Pressure [psi]: Roja: 0 - 16 | Ámbar: 17.4 - 32 | Verde: 33.4 - 74 | Ámbar: 75.4 - 87.0 | Roja: > 87.0 psi</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Load [%]: Verde: 0% - 100% (describe el porcentaje disponible de potencia máx.)</span>
            </div>
            </div>

            <!-- TEMPERATURAS DE FLUIDOS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">TEMPERATURAS: REFRIGERANTE, ACEITE Y REDUCTORA</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Coolant Temp [°C]: Roja: < -32 | Ámbar: -32...+59 | Verde: 60 - 100 | Ámbar: 101 - 105 | Roja: > 105 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Oil Temp [°C]: Roja: < -32 | Ámbar: -32...+49 | Verde: 50 - 129 | Ámbar: 130 - 140 | Roja: > 140 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Gearbox Temp [°C]: Verde: < 115 °C | Ámbar: 115 - 120 °C | Roja: > 120 °C</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>Load' describe el porcentaje disponible de la potencia máxima del motor. Si el interruptor Engine Master está desconectado (OFF), la indicación de carga no muestra ningún valor aunque la hélice esté girando.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📐 ESPECIFICACIÓN DE DIAGRAMA POH</span>
        </div>
        <div class="flex flex-col items-center justify-start p-1.5 pt-1 space-y-2">
          <!-- Marco Indicador de Imagen Requerida -->
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 sm:p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-2">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>🖥️</span> ILUSTRACIÓN TÉCNICA REQUERIDA
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de generación
              </span>
            </div>

            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#0B2E59] dark:text-sky-200 leading-snug">
                Carátula del Instrumento Digital CED 125 y Rangos de Color
              </h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Recreación vectorial del Compact Engine Display (CED 125) detallando la disposición de los cuadrantes y la codificación de arcos verde, amarillo y rojo según POH.
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2 sm:p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">
                Elementos que debe mostrar la ilustración:
              </span>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Tacómetro Hélice:</strong> Arco verde 1400 - 2300 RPM y línea roja en 2300 RPM (2500 transitorio máx 20s).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Carga Motor (% Load):</strong> Escala verde de 0% a 100% y línea roja para sobredemanda >100%.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Temperatura Refrigerante:</strong> Arco verde 60 - 105ºC y línea roja superior en 105ºC.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Temperatura y Presión de Aceite:</strong> Aceite 50-140ºC / Presión 2.3-6.0 bar (línea roja inf. 1.2 bar y sup. 6.5 bar).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Temperatura Caja Reductora:</strong> Arco verde 0 - 120ºC y línea roja en 120ºC.</span>
                </li>
              </ul>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              Ref. POH: Suplemento Continental TAE 125 Sección 2 (Instrument Markings - CED 125)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.8: 1.8 Marcas de Instrumentos AED 125 y Botón Confirm/Test -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.8 Marcas de Instrumentos AED 125 y Botón Confirm/Test</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Parámetros Eléctricos, Temperatura de Combustible y Lógica de Rearme de Alarmas</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚡ AED 125 & CONFIRM/TEST LOGIC</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- AED 125 PARÁMETROS -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">PARÁMETROS AUXILIARES (AED 125)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Fuel Temp (L y R) [°C]: Roja: < -30 | Ámbar: -30...-1 | Verde: 0 - 69 | Ámbar: 70 - 75 | Roja: > 75 °C</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Voltage (14V) [V]: Roja: 0 - 10 | Ámbar: 11 - 12.5 | Verde: 12.6 - 14.0 | Ámbar: 15.0 | Roja: > 15.0 V</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Voltage (28V) [V]: Roja: 0 - 21 | Ámbar: 22 - 24 | Verde: 25 - 29.4 | Ámbar: 29.5 - 30 | Roja: > 30 V</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Alternator Current (14V) [A]: Verde: 0 - 84 | Ámbar: 85 - 90 | Roja: > 90 A</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Alternator Current (28V) [A]: Verde: 0 - 52.4 | Ámbar: 52.5 - 60 | Roja: > 60 A</span>
            </div>
            </div>

            <!-- LÓGICA CONFIRM / TEST -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">LÓGICA DEL BOTÓN CONFIRM / TEST</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Activación de aviso: La luz AED/CED Caution se enciende al entrar en rango ámbar o rojo</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Memorización: Permanece encendida aunque el parámetro retorne a la zona verde</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Confirmación: El piloto debe presionar el botón Confirm/Test para apagar la lámpara</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Rearme automático: Tras ser confirmada, volverá a iluminarse si otro parámetro se desvía</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Prueba de encendido: Presionar el botón más de 1 segundo inicia la secuencia de autotest</span>
            </div>
            </div>
          </div>
        <div class="p-1.5 px-2 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-[11px] leading-tight my-0.5 shadow-2xs shrink-0 ">
          <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>ℹ️</span>
            <span>NOTE:</span>
          </strong>
          <div>La lámpara de aviso AED/CED permanece encendida incluso cuando la indicación del motor regresa al rango verde/normal de operación y debe ser confirmada presionando el pulsador Confirm/Test.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📐 ESPECIFICACIÓN DE DIAGRAMA POH</span>
        </div>
        <div class="flex flex-col items-center justify-start p-1.5 pt-1 space-y-2">
          <!-- Marco Indicador de Imagen Requerida -->
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 sm:p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-2">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>🔘</span> ILUSTRACIÓN TÉCNICA REQUERIDA
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de generación
              </span>
            </div>

            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#0B2E59] dark:text-sky-200 leading-snug">
                Unidad AED 125, Annunciator Panel y Mando Confirm/Test
              </h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Ilustración del display auxiliar AED 125, panel de luces de aviso en cabina y pulsador rotativo FADEC Test/Confirm Knob para la verificación prevuelo de canales ECU.
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2 sm:p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">
                Elementos que debe mostrar la ilustración:
              </span>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Instrumento AED 125:</strong> Parámetros de voltaje (V), intensidad de alternador (A) y caudal de combustible (l/h).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Annunciator Lightpanel:</strong> Avisadores luminosos CED/AED Caution, Warning de motor y aviso de bujías (Glow).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Pulsador FADEC Test/Confirm:</strong> Mando en panel para ejecutar el auto-test de alternancia de ECU A/B en prevuelo.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Secuencia de comprobación:</strong> Procedimiento de pulsación mantenida y confirmación visual de caída/recuperación de RPM.</span>
                </li>
              </ul>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              Ref. POH: Suplemento Continental Sección 2 & Sección 7 (AED 125 & Caution System)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.9: 1.9 Combustibles Autorizados y Capacidades de Depósitos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.9 Combustibles Autorizados y Capacidades de Depósitos</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Grados JET/Diésel, Densidad (0.84 kg/l), Capacidades y Aviso Low Level (<10 l)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⛽ FUEL GRADES & CAPACITIES</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📐 ESPECIFICACIÓN DE DIAGRAMA POH</span>
        </div>
        <div class="flex flex-col items-center justify-start p-1.5 pt-1 space-y-2">
          <!-- Marco Indicador de Imagen Requerida -->
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 sm:p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-2">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>🛢️</span> ILUSTRACIÓN TÉCNICA REQUERIDA
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de generación
              </span>
            </div>

            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#0B2E59] dark:text-sky-200 leading-snug">
                Esquema de Depósitos Alares, Capacidades y Selector
              </h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Diagrama técnico de los tanques alares C172 con las capacidades totales y utilizables en litros/galones, selector de combustible y advertencias de combustible diésel.
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2 sm:p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">
                Elementos que debe mostrar la ilustración:
              </span>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Capacidades depósitos estándar:</strong> 166 L (44 gal) total / 150 L (39.6 gal) utilizable [16 L no utilizables].</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Capacidades largo alcance:</strong> 212 L (56 gal) total / 201 L (53 gal) utilizable [11.4 L no utilizables].</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Válvula selectora:</strong> Posiciones Left, Right, Shut-Off y depósito colector intermedio (Header Tank).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Cartel de advertencia crítica:</strong> Rótulos "JET FUEL / DIESEL ONLY" y prohibición absoluta de AVGAS 100LL.</span>
                </li>
              </ul>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              Ref. POH: Suplemento Continental Sección 2 & Sección 7 (Fuel Specifications & Capacity)
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.10: 1.10 Fluidos Autorizados y Placards Obligatorios -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.10 Fluidos Autorizados y Placards Obligatorios</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aceites Aprobados, Refrigerante G48 y Letreros Mandatorios de Célula y Cabina</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Suplemento Sección 2 (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛢️ PERMISSIBLE FLUIDS & PLACARDS</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📐 ESPECIFICACIÓN DE DIAGRAMA POH</span>
        </div>
        <div class="flex flex-col items-center justify-start p-1.5 pt-1 space-y-2">
          <!-- Marco Indicador de Imagen Requerida -->
          <div class="w-full flex flex-col items-start justify-start rounded-xl bg-white dark:bg-slate-800/80 p-3 sm:p-3.5 border-2 border-dashed border-[#2361A8]/40 dark:border-sky-500/40 shadow-xs space-y-2">
            <div class="flex items-center justify-between w-full">
              <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF3FC] dark:bg-sky-950 text-[10px] font-bold text-[#0B2E59] dark:text-sky-300 border border-[#CBDFF7] dark:border-sky-800">
                <span>🏷️</span> ILUSTRACIÓN TÉCNICA REQUERIDA
              </span>
              <span class="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-900">
                Pendiente de generación
              </span>
            </div>

            <div>
              <h4 class="text-xs sm:text-sm font-bold text-[#0B2E59] dark:text-sky-200 leading-snug">
                Placards Obligatorios de Cabina y Accesos de Servicio
              </h4>
              <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                Infografía oficial con los rótulos obligatorios exigidos por certificación en panel y fuselaje, así como los puntos de servicio de refrigerante, aceite de motor y reductora.
              </p>
            </div>

            <div class="w-full rounded-lg bg-[#F8FAFC] dark:bg-slate-900/60 p-2 sm:p-2.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span class="text-[10px] font-bold uppercase tracking-wider text-[#2361A8] dark:text-sky-400 block">
                Elementos que debe mostrar la ilustración:
              </span>
              <ul class="text-[11px] text-slate-700 dark:text-slate-300 space-y-1">
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Placard acrobático de panel:</strong> Texto literal POH de operaciones Normal/Utilitaria y prohibición de acrobacias.</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Placards de combustible:</strong> Rótulos normalizados junto a las bocas de llenado de depósitos alares ("JET FUEL ONLY").</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Accesos en capó motor:</strong> Compuerta de varilla de aceite (AeroShell Diesel Ultra) y tapón presurizado de refrigerante (Glysantin G48).</span>
                </li>
                <li class="flex items-start gap-1.5">
                  <span class="font-bold text-[#2361A8] dark:text-sky-400 shrink-0">•</span>
                  <span><strong>Mirilla de reductora:</strong> Visor de nivel de líquido ATF Shell Spirax S4 en la caja reductora frontal.</span>
                </li>
              </ul>
            </div>

            <div class="text-[10px] text-slate-500 dark:text-slate-400 font-medium pt-0.5">
              Ref. POH: Suplemento Continental TAE 125 Sección 2 (Placards and Markings)
            </div>
          </div>
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
  min_seconds: 60,
  content_html: `<!-- DIAPOSITIVA 2.1: 2.1 Motor Continental TAE 125: Arquitectura y Especificaciones -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.1 Motor Continental TAE 125: Arquitectura y Especificaciones</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Modelos CD-135 (TAE 125-02-99) y CD-155 (TAE 125-02-114)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚙️ ENGINE SPECIFICATIONS</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/instrument-panel.png" alt="Planta motriz Continental TAE 125" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Figura 1-1 del POH: Disposición de instrumentación y cabina en la instalación TAE 125</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.2: 2.2 Reductora Integrada y Hélice MT-Propeller -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.2 Reductora Integrada y Hélice MT-Propeller</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Relación de Reducción i=1.69 y Paso Variable Constant Speed</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚙️ GEARBOX & PROPELLER</span>
        </div>
        <div class="space-y-1 py-0.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- CAJA REDUCTORA -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">CAJA REDUCTORA INTEGRADA (GEARBOX)</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Relación de reducción: i = 1.69 (las RPM del cigüeñal se reducen a RPM de hélice)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Amortiguación: Amortiguador mecánico de torsión y vibraciones integrado</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Embrague de sobrecarga (overload release): Desacopla ante picos de par anómalos o impacto de hélice</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Lubricación independiente: Circuito de aceite propio con intercambiador agua/aceite</span>
            </div>
            </div>

            <!-- HÉLICE MT-PROPELLER -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">HÉLICE TRIPALA CONSTANT SPEED</strong>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Fabricante: MT-Propeller Entwicklung GmbH</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Modelos: MTV-6-A/187-129 (Ø 1.87 m) o MTV-6-A/190-69 (Ø 1.90 m)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Construcción: 3 palas de material compuesto (madera laminada recubierta de fibra y borde de ataque de acero inoxidable)</span>
            </div>
            <div class="flex items-start gap-2 py-0 text-[11px] leading-tight">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">•</span>
              <span class="text-slate-800 dark:text-slate-200">Gobierno de paso: Regulador electro-hidráulico gobernado por el FADEC mediante presión de aceite de reductora</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/preflight.png" alt="Conjunto de Hélice MT-Propeller y Reductora" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Hélice tripala de velocidad constante MTV-6 y caja reductora con amortiguador mecánico</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.3: 2.3 Sistema FADEC: Control Digital y Redundancia Dual -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.3 Sistema FADEC: Control Digital y Redundancia Dual</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Doble ECU (Canal A y B), Sensores Duplicados y Mando Único</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">💻 FADEC ARCHITECTURE</span>
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
              <span class="text-slate-800 dark:text-slate-200">Batería FADEC Backup: Conectada exclusivamente al FADEC A, asegura 30 minutos de operación de motor sin alternador ni batería principal</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/lightpanel.png" alt="Panel FADEC y avisadores" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Arquitectura de doble canal digital FADEC A y B con mando monomando de potencia</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.4: 2.4 Gestión FADEC: Autoprueba, Categorías de Fallo y FORCE B -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.4 Gestión FADEC: Autoprueba, Categorías de Fallo y FORCE B</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Lógica del Pulsador de Test (2s), Categorías Low/High y Mando FORCE B</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🔘 FADEC TEST & FORCE B</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/lightpanel.png" alt="Pulsador de test y conmutador Force B" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Protocolo de discriminación de averías LOW/HIGH y conmutador manual a Canal B</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.5: 2.5 Sistema Eléctrico I: Fuentes de Potencia y Alternador -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.5 Sistema Eléctrico I: Fuentes de Potencia y Alternador</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Generación 14V/28V, Batería Principal y Batería de Excitación</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚡ ELECTRICAL POWER SOURCES</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/electrical-wiring.png" alt="Esquema de cableado eléctrico básico" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Figura 1-5 del POH: Circuito de alternador, batería principal y batería de excitación</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.6: 2.6 Sistema Eléctrico II: FADEC Backup Battery y Main Bus -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.6 Sistema Eléctrico II: FADEC Backup Battery y Main Bus</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Batería de Respaldo FADEC (30 Min) y Barra Eléctrica Principal</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🔋 BACKUP BATTERY & MAIN BUS</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/electrical-wiring.png" alt="Cableado de batería de respaldo y Main Bus" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Esquema de diodos de aislamiento y conmutación de emergencia de la batería FADEC Backup</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.7: 2.7 Sistema de Combustible I: Depósitos y Alimentación -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.7 Sistema de Combustible I: Depósitos y Alimentación</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Capacidades de Depósitos, Densidad (0.84 kg/l), Válvulas y Reservoir Tank</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⛽ FUEL TANKS & FEED CIRCUIT</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/fuel-system-schematic.png" alt="Esquema de combustible oficial" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Figura 1-4 del POH: Circuito de depósitos alares, selector de 3 vías y depósito nodriza</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.8: 2.8 Sistema de Combustible II: Bombas, Retorno y Enfriador -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.8 Sistema de Combustible II: Bombas, Retorno y Enfriador</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Bomba Eléctrica, Bomba de Alta Presión, Retorno y Deflector Térmico (>20°C)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⛽ COMMON RAIL & RETURN CIRCUIT</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/fuel-system-schematic.png" alt="Esquema del circuito de inyección y retorno" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Figura 1-4 del POH: Bomba de alta presión, raíl común, intercambiador y radiador de retorno</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.9: 2.9 Sistema de Refrigeración Líquida (Cooling System) -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.9 Sistema de Refrigeración Líquida (Cooling System)</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Termostato de 3 Vías (<84°C, 84-94°C, >94°C), Radiador y Aviso Water Level</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🌡️ LIQUID COOLING SYSTEM</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/cooling-system-schematic.png" alt="Esquema de refrigeración líquida" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Figura 1-6 del POH: Radiador de refrigerante, intercambiador de reductora y depósito de compensación</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.10: 2.10 Sistemas de Lubricación: Motor y Caja Reductora -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.10 Sistemas de Lubricación: Motor y Caja Reductora</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Circuitos Independientes de Aceite de Motor y Aceite de Caja Reductora</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛢️ LUBRICATION SYSTEMS</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/cooling-system-schematic.png" alt="Esquema de lubricación y refrigeración" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Figura 1-6 del POH: Intercambiador agua/aceite de reductora y circuito de enfriamiento</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.11: 2.11 Instrumentación de Motor: CED 125 y AED 125 -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.11 Instrumentación de Motor: CED 125 y AED 125</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Indicación Digital Compacta de Parámetros de Motor y Datos Auxiliares</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📊 DIGITAL ENGINE INSTRUMENTS</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/instrument-panel.png" alt="Panel de Instrumentos con CED 125 y AED 125" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Figura 1-1 del POH: Disposición del display compacto CED 125, display auxiliar AED 125 y amperímetro</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.12: 2.12 Panel de Alarmas (Lightpanel) y Mandos de Cabina -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[10px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-lg sm:text-xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">2.12 Panel de Alarmas (Lightpanel) y Mandos de Cabina</h1>
    </div>
    <span class="text-[11px] text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Luces Avisadoras de FADEC, Alternador, Nivel Bajo y Mandos de Motor</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch py-0.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Manual POH Suplemento Continental (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🚨 ANNUNCIATOR LIGHTPANEL</span>
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

    <!-- Columna Derecha (lg:col-span-5): Esquemas Técnicos y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800 mb-1">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex flex-col items-center justify-start p-2 pt-1 space-y-1">
          <div class="w-full max-h-[280px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/systems/lightpanel.png" alt="Figura 1-2 del POH: Panel de luces avisadoras" class="w-full max-h-[260px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Disposición de luces FADEC A/B, Alternator, Caution CED/AED, Low Fuel y Glow</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>`,
};;

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
  min_seconds: 60,
  content_html: `
<!-- DIAPOSITIVA 3.1: 3.1 Inspección Prevuelo I: Cabina Inicial -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.1 Inspección Prevuelo I: Cabina Inicial</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Comprobación General y Cabina</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛫 (1) CABIN</span>
        </div>
        <div class="space-y-2 py-1">
        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
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
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[170px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/preflight.png" alt="Inspección Prevuelo" class="w-full max-h-[150px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Diagrama general de inspección exterior y recorrido de cabina (POH Figura 4-1)</figcaption>
                  <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>Al conectar el interruptor de batería, utilizar una fuente de alimentación externa o girar la hélice a mano, trate la hélice como si el interruptor Engine Master estuviera conectado.</div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.2: 3.2 Inspección de Cabina II: Combustible y Cierre -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.2 Inspección de Cabina II: Combustible y Cierre</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Instrumentos de Combustible, Válvulas y Seguridad</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛫 (1) CABIN (Cont.)</span>
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
            <strong class="text-sky-800 dark:text-sky-300 block uppercase tracking-wide">💡 Verificaciones Clave:</strong>
            <p>Comprobar la indicación de cantidad y temperatura del combustible en ambos depósitos. La luz anunciadora <em>Water Level</em> debe permanecer apagada. Asegurar la válvula de corte de combustible completamente introducida (ON).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/fuel-system.png" alt="Sistema de combustible" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Disposición de válvulas selectoras de combustible y controles en cabina</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.3: 3.3 Inspección Exterior I: Empenaje y Ala Derecha -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.3 Inspección Exterior I: Empenaje y Ala Derecha</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Superficies de Mando y Borde de Salida</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🔍 (2) EMPENNAGE & (3) RIGHT WING Trailing Edge</span>
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
            <strong class="text-sky-800 dark:text-sky-300 block uppercase tracking-wide">💡 Inspección de Superficies Aerodinámicas:</strong>
            <p>Comprobar la libertad y suavidad de movimiento del timón de dirección, timón de profundidad, compensador y alerón derecho, verificando la ausencia de holguras excesivas y la seguridad de bisagras y varillajes.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/preflight.png" alt="Empenaje y semiala derecha" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Puntos de amarre, superficies aerodinámicas de mando y bisagras de alerón y flaps</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.4: 3.4 Inspección Exterior II: Combustible Ala Derecha -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.4 Inspección Exterior II: Combustible Ala Derecha</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación (4) RIGHT WING en Secuencia Completa</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="64">
    <!-- Columna Izquierda (lg:col-span-8): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-8 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⛽ (4) RIGHT WING</span>
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
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/fuel-system.png" alt="Drenajes de semiala derecha" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Válvulas de purga de depósitos alares, amarre, tren y tapón de llenado</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.5: 3.5 Inspección Exterior III: Drenajes de Reserva y Filtro -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.5 Inspección Exterior III: Drenajes de Reserva y Filtro</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación NOSE: Depósito de Reserva y Filtro</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⛽ (5) NOSE</span>
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
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/fuel-system.png" alt="Drenajes de morro" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Drenaje del depósito de reserva (fuselaje) y vaso decantador del filtro de combustible</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.6: 3.6 Inspección Exterior IV: Motor y Hélice -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.6 Inspección Exterior IV: Motor y Hélice</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Estación NOSE: Aceites, Reductora, Hélice y Tren</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🔍 (5) NOSE (Cont.)</span>
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
            <strong class="text-sky-800 dark:text-sky-300 block uppercase tracking-wide">💡 Inspección Visual Crítica:</strong>
            <p>El nivel de aceite de la reductora (Gearbox) debe cubrir <strong>al menos la mitad de la mirilla de inspección</strong>. Comprobar que no existan muescas en los bordes de ataque de las palas de la hélice y que las tomas de aire estén libres de obstrucciones.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/preflight.png" alt="Morro y motor" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Inspección de aceite motor, mirilla de reductora, tomas de aire y pala de hélice</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.7: 3.7 Inspección Exterior V: Semiala Izquierda -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.7 Inspección Exterior V: Semiala Izquierda</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Drenaje de Combustible, Pitot, Pérdida y Superficies de Control</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch py-1.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): POH Inspección (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🔍 (6) LEFT WING & (7) LEADING EDGE</span>
        </div>
        <div class="space-y-0.5 py-0">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 items-stretch">
            <!-- (6) LEFT WING: Combustible y Tren -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(6) LEFT WING</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-[11.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Quantity - CHECK VISUALLY for desired level not above marking in fuel filler</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-[11.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Filler Cap - SECURE</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-[11.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">(3)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Tank Sump Quick Drain Valves - DRAIN at least a cupful of fuel (using sampler cup) from each sump location to check for water, sediment and the right type of fuel (Diesel or JET-A1) before each flight and after each refueling. If water is observed, take further samples until clear and then gently rock wings and lower tail to the ground to move any additional contaminants to the sampling points. Take repeated samples from all fuel drain points until all contamination has been removed. If contaminants are still present, refer to previous WARNING (see right wing) and do not fly airplane.</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-[11.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">(4)</span>
                <span class="text-slate-800 dark:text-slate-200">Main Wheel Tire - CHECK for proper inflation and general condition (weather checks, tread depth and wear, etc.)</span>
              </div>
            </div>

            <!-- (7) LEADING EDGE -->
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(7) LEFT WING Leading Edge</strong>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-[11.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">(1)</span>
                <span class="text-slate-800 dark:text-slate-200">Pitot Tube Cover (if mounted) - REMOVE and CHECK for pitot blockage</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-[11.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">(2)</span>
                <span class="text-slate-800 dark:text-slate-200">Fuel Tank Vent Opening - CHECK for blockage</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-[11.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">(3)</span>
                <span class="text-slate-800 dark:text-slate-200">Stall Warning Opening - CHECK for blockage To check the system, place a clean handkerchief over the vent opening and apply suction; a sound from the warning horn will confirm system operation.</span>
              </div>
              <div lang="en" class="flex items-start gap-1.5 py-0.5 text-[11.5px] leading-snug">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[18px]">(4)</span>
                <span class="text-slate-800 dark:text-slate-200">Wing Tie-Down - DISCONNECT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA & (8) TRAILING EDGE</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-1.5 min-h-0 space-y-1.5">
          <div class="w-full max-h-[140px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-1.5 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden shrink-0">
            <img src="/images/c172/procedures/preflight.png" alt="Semiala izquierda" class="w-full max-h-[130px] object-contain rounded-lg" />
          </div>
          <figcaption class="text-center text-[11px] text-slate-500 dark:text-slate-400 font-medium shrink-0">Tubo pitot, ventilación, bocina de pérdida y superficies</figcaption>

          <!-- (8) LEFT WING Trailing Edge transferido limpiamente sin recortar nada -->
          <div class="w-full p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 shrink-0">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">(8) LEFT WING Trailing Edge</strong>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Aileron - CHECK freedom of movement and security</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">Flap - Check for security and conditions</span>
            </div>
          </div>

          <div class="w-full p-2 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs leading-snug shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div class="text-[11.5px]">Si, después de tomar muestras repetidamente, sigue habiendo indicios de contaminación, no debe volarse el avión. El personal de mantenimiento cualificado debe vaciar los depósitos y purgar el sistema. Debe eliminarse todo indicio de contaminación antes de volver a volar.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.8: 3.8 Antes del Arranque del Motor -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.8 Antes del Arranque del Motor</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Preparación Previa al Arranque</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚡ BEFORE STARTING ENGINE</span>
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
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[170px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Panel de instrumentos" class="w-full max-h-[150px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Disposición de instrumentos de vuelo, mandos y controles del motor Continental</figcaption>
          <div class="space-y-2 mt-2">
        <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 my-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <div>El interruptor Avionics Power debe estar desconectado durante el arranque del motor para evitar posibles daños en la aviónica.</div>
        </div>
        <div class="p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 my-0">
          <strong class="text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚡</span>
            <span>CAUTION:</span>
          </strong>
          <div>El control electrónico del motor necesita una fuente de alimentación eléctrica para funcionar. Para el funcionamiento normal, Battery, Alternator y Main Bus deben estar conectados. Su conmutación por separado solo está permitida para las pruebas y en caso de emergencia.</div>
        </div>
</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.9: 3.9 Puesta en Marcha: Procedimiento de Arranque -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.9 Puesta en Marcha: Procedimiento de Arranque</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Arranque del Motor Continental Diésel</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🔑 STARTING ENGINE</span>
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
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[170px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/lightpanel.png" alt="Panel anunciador" class="w-full max-h-[150px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Luces indicadoras FADEC A/B, Glow Control (bujías) y Water Level</figcaption>
                  <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>No utilice una unidad de alimentación en tierra para arrancar el motor. No está permitido arrancarlo con alimentación externa. Si no es posible arrancar el motor con la energía de la batería, debe verificarse el estado de la batería antes del vuelo.</div>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.10: 3.10 Calentamiento del Motor y Rodaje -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.10 Calentamiento del Motor y Rodaje</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Comprobaciones Eléctricas, FADEC Backup y Calentamiento</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⏱️ WARM UP</span>
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
        <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed my-1.5 shadow-2xs shrink-0 ">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>Debe asegurarse de que tanto Battery como Alternator estén conectados. Si está instalado el interruptor de alternador con guarda, la guarda del interruptor debe estar cerrada.</div>
        </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Instrumentos de motor" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Verificación de amperímetro, voltímetro e instrumentos de motor CED 125</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.11: 3.11 Antes del Despegue I: Cabina y Mandos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.11 Antes del Despegue I: Cabina y Mandos</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Chequeo de Cabina, Mandos y Ajustes Previos</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛫 BEFORE TAKE-OFF</span>
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
            <strong class="text-sky-800 dark:text-sky-300 block uppercase tracking-wide">💡 BEFORE TAKE-OFF:</strong>
            <p>Verificar el libre y correcto movimiento de todas las superficies de mando. Comprobar que el selector de combustible se encuentre rigurosamente en <strong>BOTH</strong> y el compensador ajustado en el rango de despegue (Take-off).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Cabina de mando" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Verificación de mandos libres, instrumentos ajustados y selector en BOTH</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.12: 3.12 Antes del Despegue II: Autoprueba FADEC -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.12 Antes del Despegue II: Autoprueba FADEC</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Protocolo Secuencial de Autoprueba FADEC y Hélice</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚙️ BEFORE TAKE-OFF</span>
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
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/lightpanel.png" alt="Panel FADEC" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Pulsador FADEC Test y comprobación secuencial de régimen con canales A y B</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.13: 3.13 Antes del Despegue III: Force B y Criterios Críticos -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.13 Antes del Despegue III: Force B y Criterios Críticos</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Conmutador Force B y Limitaciones de Seguridad</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚙️ BEFORE TAKE-OFF</span>
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
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/lightpanel.png" alt="Conmutador Force B" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Interruptor Force B a FADEC B y avisos críticos de intermitencia o fallo</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.14: 3.14 Antes del Despegue IV: Potencia y Configuración Final -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.14 Antes del Despegue IV: Potencia y Configuración Final</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Comprobación de Empuje 94% y Salida a Pista</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛫 BEFORE TAKE-OFF</span>
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
            <strong class="text-sky-800 dark:text-sky-300 block uppercase tracking-wide">💡 Chequeo de Carga de Motor:</strong>
            <p>Al aplicar <strong>FULL FORWARD</strong> en tierra, verificar que la indicación de carga (Load display) alcance al menos el <strong>94%</strong> y las RPM se sitúen entre <strong>2240 y 2300 RPM</strong> antes de retrasar a ralentí (IDLE).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Panel de instrumentos" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Prueba de potencia 94%, flap de despegue y bombas de combustible conectadas</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.15: 3.15 Despegue y Ascenso -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.15 Despegue y Ascenso</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Configuración de Despegue, Velocidades y Ascenso</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch py-1.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛫 TAKE-OFF & CLIMB</span>
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

          <!-- NOTE 1 queda en la izquierda -->
          <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[12.5px] leading-relaxed my-1 shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Si es necesario un ascenso de máximo rendimiento, utilice las velocidades indicadas en la tabla «Maximum Rate Of Climb» de la sección 5. Si la temperatura del aceite y/o del refrigerante se aproximan al límite superior, continúe con un ángulo de ascenso menor para mejorar la refrigeración, si es posible.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-1.5 min-h-0 space-y-2">
          <div class="w-full max-h-[300px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden shrink-0">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Panel de instrumentos" class="w-full max-h-[280px] object-contain rounded-lg" />
          </div>
          <figcaption class="text-center text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">Control de potencias, velocidades indicadas y vigilancia térmica durante el ascenso</figcaption>

          <!-- NOTE 2 transferido a la derecha -->
          <div class="w-full p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[12.5px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>ℹ️</span>
              <span>NOTE:</span>
            </strong>
            <div>Deben vigilarse las temperaturas del combustible.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.16: 3.16 Vuelo de Crucero y Gestión de Combustible -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.16 Vuelo de Crucero y Gestión de Combustible</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Potencia, Compensación y Gestión de Combustible</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch py-1.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">✈️ CRUISE</span>
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
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y PRECAUCIONES</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-1.5 min-h-0 space-y-2">
          <div class="w-full max-h-[260px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden shrink-0">
            <img src="/images/c172/procedures/fuel-system.png" alt="Sistema de combustible" class="w-full max-h-[240px] object-contain rounded-lg" />
          </div>
          <figcaption class="text-center text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">Retorno de combustible caliente a depósitos, equilibrio de tanques y precauciones térmicas</figcaption>

          <!-- CAUTION con el 3er punto transferido a la derecha -->
          <div lang="es" class="w-full p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[12.5px] leading-relaxed shadow-2xs shrink-0">
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

<!-- DIAPOSITIVA 3.17: 3.17 Descenso y Aterrizaje Normal -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.17 Descenso y Aterrizaje Normal</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimientos de Descenso, Aproximación y Toma</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛬 DESCENT & LANDING</span>
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
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Panel de instrumentos" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Configuraciones de flaps, velocidades de final y técnica de contacto en pista</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.18: 3.18 Maniobra de Escape: Aproximación Frustrada -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.18 Maniobra de Escape: Aproximación Frustrada</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Maniobra de Motor y al Aire (Go-Around)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🔄 BALKED LANDING</span>
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
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Instrumentos de vuelo" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Velocidad de frustrada 58 KIAS, retracción escalonada de flaps y potencia al 100%</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.19: 3.19 Tras el Aterrizaje y Parada de Motor -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.19 Tras el Aterrizaje y Parada de Motor</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Configuración de Pista y Parada</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛑 AFTER LANDING & SECURING AIRPLANE</span>
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
            <strong class="text-[#0B2E59] dark:text-sky-300 block uppercase tracking-wide text-xs">💡 TURBOCHARGER COOL-DOWN:</strong>
            <p>Mantener el motor al menos <strong>2 minutos al ralentí</strong> antes de apagar el <em>Engine Master</em> para permitir la disipación térmica y estabilización del turbocompresor.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia POH (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/fuel-system.png" alt="Parada de motor y amarre" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Secuencia de interruptores, guarda y selector de combustible en LEFT/RIGHT tras vuelo</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.20: 3.20 Procedimientos Especiales -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">3.20 Procedimientos Especiales</h1>
    </div>
    
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos Normales (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">📖 SPECIAL PROCEDURES</span>
        </div>
        <div class="space-y-2 py-1">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 items-stretch">
            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">
                🛫 PROCEDURES OVER 5500ft AIRFIELD ELEVATION
              </strong>
              <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                A altitudes superiores a 5,500 ft: acelerar con Thrust Lever FULL FORWARD con frenos aplicados hasta alcanzar el 100% de carga antes de soltar frenos.
              </p>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">
                📐 SHORT FIELD TAKE-OFF
              </strong>
              <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                Flaps 10°, frenos aplicados hasta máxima potencia. Alzar rueda de morro a 55 KIAS y mantener velocidad de ascenso sobre obstáculos de 57 KIAS.
              </p>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">
                ❄️ COLD WEATHER OPERATION
              </strong>
              <p class="text-xs sm:text-[13px] text-slate-700 dark:text-slate-300">
                Precalentamiento de motor por debajo de -10°C. Comprobar instalación de deflector (baffle) de refrigerador de combustible si OAT < 20°C.
              </p>
            </div>

            <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1 h-full flex flex-col justify-start">
              <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-1 uppercase tracking-wide">
                ☀️ HOT WEATHER OPERATION
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
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/fuel-system.png" alt="Sistema de combustible" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Consulta de limitaciones, tablas de rendimiento y parámetros específicos de vuelo</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>
`,
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
  min_seconds: 60,
  content_html: `
<!-- DIAPOSITIVA 4.1: 4.1 Fallo de Motor en Despegue: En Pista y Tras el Despegue -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.1 Fallo de Motor en Despegue: En Pista y Tras el Despegue</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Fallo en Carrera en Pista y Fallo Inmediato tras el Despegue</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🚨 ENGINE MALFUNCTION</span>
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

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Panel de instrumentos" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Mantenimiento de velocidad de planeo, corte de combustible y aislamiento eléctrico</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.2: 4.2 Fallo de Motor en Vuelo y Reencendido -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.2 Fallo de Motor en Vuelo y Reencendido</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Gestión de Alimentación de Combustible y Protocolo de Reencendido</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚙️ ENGINE MALFUNCTION IN FLIGHT</span>
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

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/fuel-system.png" alt="Sistema de combustible" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Conmutación a BOTH, bomba eléctrica y reencendido en el rango de 65 a 85 KIAS</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.3: 4.3 Avisos Luminosos FADEC en Vuelo -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.3 Avisos Luminosos FADEC en Vuelo</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Luces FADEC Parpadeantes o Fijas: Categorías Low y High</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">💡 FADEC WARNING</span>
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

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/lightpanel.png" alt="Panel FADEC" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Luces indicadoras FADEC A y B y botón de rearme / test en cabina</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.4: 4.4 Comportamiento Anómalo del Motor y Force B -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.4 Comportamiento Anómalo del Motor y Force B</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Conmutación Manual a Canal B y Prevención de Sobrerégimen de Hélice</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch py-1.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚙️ ABNORMAL ENGINE BEHAVIOR</span>
        </div>
        <div class="space-y-1.5 py-1">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs border-b border-slate-100 dark:border-slate-700 pb-0.5 uppercase tracking-wide">ABNORMAL ENGINE BEHAVIOR</strong>
            <p class="text-[11px] text-slate-600 dark:text-slate-400 italic leading-snug">If the engine acts abnormal during flight and system does not automatically switch to B-FADEC, switch to B-FADEC manually:</p>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(1)</span>
              <span class="text-slate-800 dark:text-slate-200">Select an appropriate airspeed to avoid engine overspeed.</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(2)</span>
              <span class="text-slate-800 dark:text-slate-200">"FORCE-B" switch to B-FADEC</span>
            </div>
            <div lang="en" class="flex items-start gap-1.5 py-0.5 text-xs sm:text-[12.5px] leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 shrink-0 min-w-[20px]">(3)</span>
              <span class="text-slate-800 dark:text-slate-200">Flight may be continued, but pilot should: i) Select airspeed to avoid overspeed, ii) Land as soon as possible, iii) Be prepared for emergency landing</span>
            </div>
          </div>

          <!-- WARNING con los primeros 2 puntos en la izquierda -->
          <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[12.5px] leading-relaxed my-1 shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <ul class="list-disc pl-4 space-y-1 mt-0.5 text-xs sm:text-[12.5px] leading-snug">
              <li class="pl-0.5">Solo es posible conmutar desde la posición automática a B-FADEC (A-FADEC está activo en operación normal, B-FADEC está activo en caso de fallo). Esto solo se hace necesario cuando no se produce la conmutación automática en caso de comportamiento anómalo del motor.</li>
              <li class="pl-0.5">Al operar únicamente con la batería FADEC Backup, el interruptor "Force B" NO debe ser activado. Esto apagará el motor.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y AVISOS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-1.5 min-h-0 space-y-2">
          <div class="w-full max-h-[220px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden shrink-0">
            <img src="/images/c172/procedures/lightpanel.png" alt="Conmutador Force B" class="w-full max-h-[200px] object-contain rounded-lg" />
          </div>
          <figcaption class="text-center text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">Conmutador manual FORCE B y precauciones críticas con la batería FADEC Backup</figcaption>

          <!-- WARNING con el 3er punto transferido a la derecha -->
          <div class="w-full p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[12.5px] leading-relaxed shadow-2xs shrink-0">
            <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-0.5 uppercase tracking-wide text-xs shrink-0">
              <span>⚠️</span>
              <span>WARNING:</span>
            </strong>
            <div class="text-[12px] leading-snug">Debido a fallos indicados por las luces de aviso FADEC, puede perderse la corriente de la válvula de la hélice, lo que conduce a un ajuste de paso fino. Esto puede provocar un sobrerrégimen. Velocidades por debajo de 100 KIAS son adecuadas para evitar el sobregiro en caso de fallo. Si el control de revoluciones de la hélice falla, los ascensos se pueden realizar a 65 KIAS y 100% de potencia.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.5: 4.5 Incendios: Motor en Tierra, en Vuelo y Eléctrico -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.5 Incendios: Motor en Tierra, en Vuelo y Eléctrico</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Protocolo de Corte de Fuego, Extinción y Aislamiento Eléctrico</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🔥 FIRES</span>
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

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[170px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/fuel-system.png" alt="Válvulas y cortes" class="w-full max-h-[150px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Cierre de válvula Shut-off, aislamiento de calefacción de cabina y deslastre eléctrico</figcaption>
                  <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 my-1 p-2">
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

<!-- DIAPOSITIVA 4.6: 4.6 Parada de Motor en Vuelo y Aterrizaje Forzoso -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.6 Parada de Motor en Vuelo y Aterrizaje Forzoso</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Procedimiento de Corte Voluntario y Aterrizaje sin Motor (Engine Out)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛬 EMERGENCY LANDING</span>
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

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/preflight.png" alt="Planeo de emergencia" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Planeo a 65 KIAS, hélice en paso grueso y desbloqueo de puertas de cabina</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.7: 4.7 Engelamiento Inadvertido y Recuperación de Barrena -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.7 Engelamiento Inadvertido y Recuperación de Barrena</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Condiciones Meteorológicas Adversas y Salida de Espiral</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch py-1.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-2.5 sm:p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">❄️ ICING & SPIRAL DIVE</span>
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

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-1.5 min-h-0 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Panel de instrumentos" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Toma de aire alternativo (Alternate Air), calefacción de pitot y horizonte de viraje</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.8: 4.8 Fallo del Alternador y Descarga de Batería -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-1.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.8 Fallo del Alternador y Descarga de Batería</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Avisos Luminosos, Batería Principal y Protocolo de Deslastre Eléctrico</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch py-1.5" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Emergencia Eléctrica (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚡ ELECTRICAL MALFUNCTIONS</span>
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

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y PRECAUCIONES</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-1.5 min-h-0 space-y-1.5">
          <div class="w-full max-h-[220px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden shrink-0">
            <img src="/images/c172/procedures/lightpanel.png" alt="Panel eléctrico" class="w-full max-h-[200px] object-contain rounded-lg" />
          </div>
          <figcaption class="text-center text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">Luz de aviso Alternator, amperímetro de descarga y protocolo de deslastre</figcaption>

          <!-- CAUTION con el Punto 2 en la derecha -->
          <div class="w-full p-2.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-xs sm:text-[12.5px] leading-relaxed shadow-2xs shrink-0">
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

<!-- DIAPOSITIVA 4.9: 4.9 Fallo Eléctrico Total y Batería FADEC Backup -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.9 Fallo Eléctrico Total y Batería FADEC Backup</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Aislamiento de Equipos y Funcionamiento Autónomo del Motor (30 Minutos)</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🔌 TOTAL ELECTRICAL FAILURE</span>
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

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Panel a oscuras" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Vuelo sin aviónica ni instrumentos eléctricos, motor soportado por FADEC Backup</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.10: 4.10 Anomalías de Aceite: Presión y Temperatura -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.10 Anomalías de Aceite: Presión y Temperatura</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Presión de Aceite Baja (&lt; 2.3 bar / &lt; 1.2 bar) y Sobretemperatura de Aceite</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛢️ ENGINE OIL MALFUNCTIONS</span>
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

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/lightpanel.png" alt="Indicador CED 125" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Vigilancia cruzada de presión y temperatura de aceite en el instrumento CED 125</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.11: 4.11 Anomalías Térmicas: Refrigerante, Water Level y Reductora -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.11 Anomalías Térmicas: Refrigerante, Water Level y Reductora</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Sobretemperatura de Refrigerante, Aviso Water Level y Temperatura de Reductora</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🌡️ COOLANT & GEARBOX MALFUNCTIONS</span>
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

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[350px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/fuel-system.png" alt="Circuito de refrigeración" class="w-full max-h-[330px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Radiador de refrigerante, vaso de expansión y mirilla de reductora del motor TAE</figcaption>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.12: 4.12 Pérdida de Potencia, Combustible y Malfunciones de Hélice -->
<div class="lesson-slide-container h-full flex flex-col justify-start text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <div>
      <div class="text-[11px] font-bold text-[#2361A8] dark:text-sky-400 uppercase tracking-wider">C172 · CD135 / CD155</div>
      <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight leading-tight">4.12 Pérdida de Potencia, Combustible y Malfunciones de Hélice</h1>
    </div>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">Disminución de Potencia, Temperaturas Límite de Combustible y RPM de Hélice</span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch py-2" data-left-pct="58">
    <!-- Columna Izquierda (lg:col-span-7): Procedimientos de Emergencia (Altura Fija 590px) -->
    <div class="lg:col-span-7 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">⚙️ FUEL & PROPELLER ABNORMALITIES</span>
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
    </div>

    <!-- Columna Derecha (lg:col-span-5): Referencia de Sistemas y Avisos (Altura Fija 590px) -->
    <div class="lg:col-span-5 flex flex-col">
      <div class="h-[590px] flex flex-col justify-start p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs" style="height: 590px;">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">🛩️ DIAGRAMA Y SISTEMAS</span>
        </div>
        <div class="flex-1 flex flex-col items-center justify-start p-2 min-h-0 pt-2 sm:pt-3 space-y-2">
          <div class="w-full max-h-[170px] flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 p-2 border border-slate-200 dark:border-slate-700 shadow-2xs overflow-hidden">
            <img src="/images/c172/procedures/instrument-panel.png" alt="Panel de instrumentos" class="w-full max-h-[150px] object-contain rounded-lg" />
          </div>
          <figcaption class="mt-1 text-center text-xs text-slate-500 dark:text-slate-400 font-medium">Control de potencias, limitación a 100 KIAS y control del paso de hélice</figcaption>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 items-stretch mt-1">
        <div class="p-2.5 rounded-xl border-l-4 border-red-500 bg-red-50/90 dark:bg-red-950/30 text-red-950 dark:text-red-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 h-full flex flex-col justify-start my-0">
          <strong class="text-red-700 dark:text-red-400 flex items-center gap-1.5 mb-1 uppercase tracking-wide text-xs sm:text-[13px] shrink-0">
            <span>⚠️</span>
            <span>WARNING:</span>
          </strong>
          <div>La bomba de alta presión debe ser revisada por un centro de servicio autorizado antes del siguiente vuelo.</div>
        </div>
        <div class="p-2.5 rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 text-sky-950 dark:text-sky-200 text-xs sm:text-[13px] leading-relaxed  shadow-2xs shrink-0 h-full flex flex-col justify-start my-0">
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
  </div>
</div>
`,
};

export const C172_LESSONS = [
  C172_LESSON_1,
  C172_LESSON_2,
  C172_LESSON_3,
  C172_LESSON_4,
  C172_LESSON_5,
];
