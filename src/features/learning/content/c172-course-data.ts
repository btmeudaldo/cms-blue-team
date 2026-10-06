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
export const C172_LESSON_1 = {
  id: "17200000-0000-0000-0000-000000000001",
  course_id: C172_COURSE_ID,
  title: "1. Limitaciones Operacionales y Flota POH",
  slug: "limitaciones-operacionales-poh",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: 60,
  content_html: `
<!-- DIAPOSITIVA 1.1: Flota C172 Blue Team y Especificaciones por Matrícula -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 1 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        1.1 Flota Cessna 172 Blue Team y Especificaciones por Matrícula
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      EASA Part-FCL.710 · Familiarización de Tipo
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Imagen / Diagrama Recomendado -->
    <div class="h-full flex flex-col justify-center">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-3 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>🖼️ DIAGRAMA / ESQUEMA DE FLOTA</span>
          </span>
          <span class="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Ref: Ficha Operativa Blue Team
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Aeronaves de la Flota:</strong> Cuatro Cessna 172 equipadas con plantas motrices Continental Turbo Diésel de última generación y hélices tripala de paso variable MT-Propeller.
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
          <div class="font-bold text-[#0B2E59] dark:text-sky-400">Puntos Clave de Estandarización de Flota:</div>
          <div>• Todas las aeronaves de la escuela son operativamente <strong>Cessna 172</strong>.</div>
          <div>• Mando monopalanca de potencia (Single Lever Power Control FADEC).</div>
          <div>• Posiciones de flaps unificadas: <strong>10°, 20°, 30° y 40°</strong> en toda la flota.</div>
          <div>• Combustible exclusivo: <strong>JET A-1</strong> o Diésel automoción <strong>EN 590</strong>. Prohibido AVGAS.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Especificaciones de Flota -->
    <div class="space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-xs space-y-1">
          <div class="flex items-center justify-between">
            <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-base">EC-NNA</span>
            <span class="px-2 py-0.5 rounded text-xs font-bold bg-sky-500/10 text-sky-600">C172N</span>
          </div>
          <p class="text-base text-[#233043] dark:text-slate-200 font-medium">Continental CD-135 (TAE 125-01)</p>
          <div class="text-xs font-mono text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-700">
            <div>Potencia: 135 CV (99 kW)</div>
            <div class="text-sky-600 dark:text-sky-400 font-bold">Flaps: 10°, 20°, 30°, 40°</div>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-emerald-500/30 shadow-xs space-y-1">
          <div class="flex items-center justify-between">
            <span class="font-black text-emerald-600 dark:text-emerald-400 text-base">EC-OXV</span>
            <span class="px-2 py-0.5 rounded text-xs font-bold bg-emerald-500/10 text-emerald-600">C172K</span>
          </div>
          <p class="text-base text-[#233043] dark:text-slate-200 font-medium">Continental CD-135 (TAE 125-02-99)</p>
          <div class="text-xs font-mono text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-700">
            <div>Potencia: 135 CV (99 kW)</div>
            <div class="text-emerald-600 dark:text-emerald-400 font-bold">Flaps: 10°, 20°, 30°, 40°</div>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-indigo-500/30 shadow-xs space-y-1">
          <div class="flex items-center justify-between">
            <span class="font-bold text-indigo-600 dark:text-indigo-400 text-base">EC-NNX</span>
            <span class="px-2 py-0.5 rounded text-xs font-bold bg-indigo-500/10 text-indigo-600">C172</span>
          </div>
          <p class="text-base text-[#233043] dark:text-slate-200 font-medium">Continental CD-135 (TAE 125-02-99)</p>
          <div class="text-xs font-mono text-slate-500 pt-1 border-t border-slate-100 dark:border-slate-700">
            <div>Potencia: 135 CV (99 kW)</div>
            <div class="text-indigo-600 dark:text-indigo-400 font-bold">Flaps: 10°, 20°, 30°, 40°</div>
          </div>
        </div>

        <div class="p-3 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border-2 border-[#D98A1E] shadow-xs space-y-1">
          <div class="flex items-center justify-between">
            <span class="font-black text-[#D98A1E] dark:text-amber-400 text-base">EC-OXT</span>
            <span class="px-2 py-0.5 rounded text-xs font-bold bg-[#D98A1E]/20 text-[#D98A1E]">C172M · 155 CV</span>
          </div>
          <p class="text-sm text-amber-900 dark:text-amber-200 font-bold">Continental CD-155 (TAE 125-02-114)</p>
          <div class="text-xs font-mono text-amber-800 dark:text-amber-300 pt-1 border-t border-amber-200 dark:border-amber-800/50">
            <div>Potencia: 155 CV (114 kW)</div>
            <div class="text-[#D98A1E] font-bold">Flaps: 10°, 20°, 30°, 40°</div>
          </div>
        </div>
      </div>

      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-[#DCE4EE] dark:border-slate-700 text-sm text-[#6A7686] dark:text-slate-300 flex items-center justify-between">
        <span>⚙️ Tipo de Hélice: <strong>MT-Propeller MTV-6-A/187-129</strong> tripala composite</span>
        <span class="font-semibold text-[#0B2E59] dark:text-sky-300">Regulador electrohidráulico FADEC</span>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.2: Velocidades Notables (V-Speeds) y Anemómetro TAS -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 2 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        1.2 Velocidades Notables de Operación (V-Speeds) y Anemómetro TAS
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 2 (Limitaciones) & Suplemento Continental
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Imagen Real Anemómetro C172 con TAS -->
    <div class="h-full flex flex-col justify-center items-center">
      <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-[#D98A1E]/40 shadow-md flex flex-col items-center max-w-sm w-full">
        <img src="/images/c172/anemometro-final.jpg" alt="Anemómetro Cessna 172 con TAS" class="w-full max-h-[290px] object-contain rounded-xl shadow-inner bg-black/5" />
        <div class="mt-2 text-center">
          <span class="text-sm font-mono font-bold text-[#0B2E59] dark:text-sky-300 block">Anemómetro Cessna 172 con Calculador TAS y Código de Colores</span>
          <span class="text-sm text-slate-500 dark:text-slate-400">Arco Blanco: 41-85 KIAS · Arco Verde: 47-128 KIAS · Arco Amarillo: 128-160 KIAS · Línea Roja: 160 KIAS</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Tabla Completa de Velocidades Notables -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <div class="grid grid-cols-2 gap-2 text-xs">
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700 flex justify-between items-center">
          <div><span class="font-mono font-black text-rose-600 dark:text-rose-400 text-sm">Vso</span> <span class="text-slate-600 dark:text-slate-300 font-medium">Pérdida en config. aterrizaje</span></div>
          <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-sm">41 KIAS</span>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700 flex justify-between items-center">
          <div><span class="font-mono font-black text-slate-700 dark:text-slate-200 text-sm">Vs</span> <span class="text-slate-600 dark:text-slate-300 font-medium">Pérdida en limpio (flaps 0°)</span></div>
          <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-sm">47 KIAS</span>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700 flex justify-between items-center">
          <div><span class="font-mono font-black text-emerald-600 dark:text-emerald-400 text-sm">Vx</span> <span class="text-slate-600 dark:text-slate-300 font-medium">Mejor ángulo de ascenso</span></div>
          <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-sm">59 KIAS</span>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700 flex justify-between items-center">
          <div><span class="font-mono font-black text-emerald-600 dark:text-emerald-400 text-sm">Vy</span> <span class="text-slate-600 dark:text-slate-300 font-medium">Mejor régimen de ascenso</span></div>
          <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-sm">73 KIAS</span>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700 flex justify-between items-center">
          <div><span class="font-mono font-black text-sky-600 dark:text-sky-400 text-sm">Vfe</span> <span class="text-slate-600 dark:text-slate-300 font-medium">Máx flaps extendidos</span></div>
          <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-xs">85 kt (20°-40°) / 110 kt (10°)</span>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700 flex justify-between items-center">
          <div><span class="font-mono font-black text-amber-600 dark:text-amber-400 text-sm">Va</span> <span class="text-slate-600 dark:text-slate-300 font-medium">Velocidad de maniobra</span></div>
          <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-sm">97 KIAS</span>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700 flex justify-between items-center">
          <div><span class="font-mono font-black text-amber-600 dark:text-amber-400 text-sm">Vno</span> <span class="text-slate-600 dark:text-slate-300 font-medium">Máx crucero estructural</span></div>
          <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-sm">128 KIAS</span>
        </div>
        <div class="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 dark:border-rose-800 flex justify-between items-center">
          <div><span class="font-mono font-black text-rose-600 dark:text-rose-400 text-sm">Vne</span> <span class="text-rose-700 dark:text-rose-300 font-medium">Velocidad de nunca exceder</span></div>
          <span class="font-mono font-black text-rose-600 dark:text-rose-400 text-sm">160 KIAS</span>
        </div>
      </div>
      <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-sm text-sky-900 dark:text-sky-200">
        💡 <strong>Velocidad de Mejor Planeo (Vglide):</strong> <strong>65 KIAS</strong> con hélice en molinete y flaps 0°. Permite una relación de planeo teórica de 9:1 (1.5 NM por cada 1.000 ft de altitud perdida).
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.3: Factores de Carga y Maniobras Permitidas -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 3 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        1.3 Factores de Carga Estructural y Maniobras Autorizadas
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 2 · Envolvente Estructural V-n
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Diagrama Envolvente de Carga -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>📊 DIAGRAMA DE MANIOBRA V-n</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Ref: POH Sec. 2 Pág. 2-11
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Límites Estructurales del Diagrama de Vuelo:</strong> La aeronave está certificada en dos categorías estructurales distintas según el peso y centro de gravedad cargados.
        </div>
        <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
          <div>• <strong>Categoría Normal:</strong> Vuelo no acrobático, ochos perezosos, virajes escarpados hasta 60° de alabeo.</div>
          <div>• <strong>Categoría Utilitaria:</strong> Peso reducido (≤ 2.000 lb / 907 kg), asientos traseros y compartimento de equipaje vacíos.</div>
          <div>• <strong>Con Flaps Extendidos (Cualquier posición):</strong> Límite positivo reducido a <strong>+3.0 G</strong> y 0.0 G negativo.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Comparativa de Límites y Prohibiciones -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <div class="grid grid-cols-2 gap-3">
        <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 space-y-1">
          <span class="font-bold text-sky-800 dark:text-sky-300 block text-xs uppercase">Categoría Normal (MTOW 2300 lb)</span>
          <div class="text-base font-black text-[#0B2E59] dark:text-sky-200">+3.8 G / -1.52 G</div>
          <p class="text-sm text-slate-600 dark:text-slate-400">Flaps Arriba. Vuelo comercial y escuela básico.</p>
        </div>
        <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-1">
          <span class="font-bold text-indigo-800 dark:text-indigo-300 block text-xs uppercase">Categoría Utility (≤ 2000 lb)</span>
          <div class="text-base font-black text-indigo-900 dark:text-indigo-200">+4.4 G / -1.76 G</div>
          <p class="text-sm text-slate-600 dark:text-slate-400">Maniobras de entrenamiento avanzado autorizadas.</p>
        </div>
      </div>

      <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-300 dark:border-rose-800 space-y-1 text-slate-700 dark:text-slate-300">
        <span class="font-bold text-rose-700 dark:text-rose-400 block text-xs uppercase">⛔ Maniobras Expresamente Prohibidas</span>
        <ul class="list-disc pl-4 space-y-0.5 text-sm text-rose-900 dark:text-rose-200">
          <li><strong>Barrenas intencionadas (Spins):</strong> Terminantemente prohibidas con motor diésel y hélice MT-Propeller instalados.</li>
          <li>Acrobacia aérea de cualquier tipo (loopings, toneles, caídas de ala, vuelo invertido).</li>
          <li>Maniobras bruscas por encima de la velocidad de maniobra $V_A = 97$ KIAS.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.4: Pesos Máximos y Distribución de Carga -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 4 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        1.4 Pesos Máximos Estructurales y Distribución de Carga Útil
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 2 & Hojas Oficiales F.OPS.04
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Esquema de Estaciones de Carga -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>⚖️ ESTACIONES DE CARGA (POH FIG. 6-5)</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Datum: Frontal Cortafuegos (FS 0.0)
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Distribución Longitudinal de Masas:</strong> Cada elemento a bordo ejerce un momento respecto al cortafuegos. El piloto al mando es responsable de no superar los límites en ninguna fase del vuelo.
        </div>
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span class="font-bold text-slate-600 dark:text-slate-400 block text-xs">PILOTO Y COPILOTO</span>
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">Estación 37.0" (0.94 m)</span>
          </div>
          <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span class="font-bold text-slate-600 dark:text-slate-400 block text-xs">PASAJEROS TRASEROS</span>
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">Estación 73.0" (1.85 m)</span>
          </div>
          <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span class="font-bold text-slate-600 dark:text-slate-400 block text-xs">DEPÓSITOS DE COMBUSTIBLE</span>
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">Estación 47.9" (1.22 m)</span>
          </div>
          <div class="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span class="font-bold text-slate-600 dark:text-slate-400 block text-xs">EQUIPAJE 1 / EQUIPAJE 2</span>
            <span class="font-mono font-bold text-[#0B2E59] dark:text-sky-300">Est. 95.0" / Est. 123.0"</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Tabla de Pesos Límite -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <div class="space-y-2">
        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700">
          <span class="font-semibold text-slate-700 dark:text-slate-300">Peso Máximo al Despegue (MTOW)</span>
          <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-sm">2.300 lb / 1.043 kg</span>
        </div>
        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700">
          <span class="font-semibold text-slate-700 dark:text-slate-300">Peso Máximo al Aterrizaje (MLW)</span>
          <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-sm">2.300 lb / 1.043 kg</span>
        </div>
        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700">
          <span class="font-semibold text-slate-700 dark:text-slate-300">Compartimento de Equipaje Área 1</span>
          <span class="font-mono font-bold text-amber-600 dark:text-amber-400">Máx. 120 lb (54.4 kg)</span>
        </div>
        <div class="flex justify-between items-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-[#DCE4EE] dark:border-slate-700">
          <span class="font-semibold text-slate-700 dark:text-slate-300">Compartimento de Equipaje Área 2</span>
          <span class="font-mono font-bold text-amber-600 dark:text-amber-400">Máx. 50 lb (22.7 kg)</span>
        </div>
        <div class="flex justify-between items-center p-2 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800">
          <span class="font-semibold text-amber-900 dark:text-amber-200">Total Combinado Equipaje (Área 1 + 2)</span>
          <span class="font-mono font-black text-amber-700 dark:text-amber-300">Máx. 120 lb (54.4 kg)</span>
        </div>
      </div>
      <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-sm text-sky-900 dark:text-sky-200 leading-relaxed">
        📋 <strong>Densidad de Combustible:</strong> El combustible JET A-1 tiene una densidad aproximada de <strong>0.80 - 0.82 kg/L</strong> (6.7 lb/US Gal), notablemente más pesado que la gasolina de aviación AVGAS 100LL (0.72 kg/L). Debe tenerse en cuenta siempre al calcular la masa total de combustible.
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.5: Envolvente de Centro de Gravedad y Hoja F.OPS.04 -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 5 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        1.5 Envolvente de Centro de Gravedad (CG) y Hoja F.OPS.04
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Procedimiento Operacional Blue Team F.OPS.04
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Diagrama Envolvente CG -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>📈 ENVOLVENTE DE CENTRADO (POH SEC. 6)</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Límites: 35.0" a 47.3"
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Límites Delantero y Trasero:</strong>
        </div>
        <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
          <div>• <strong>Límite Delantero:</strong> 35.0" a 1.950 lb o menos, variando linealmente hasta 38.5" a 2.300 lb.</div>
          <div>• <strong>Límite Trasero:</strong> 47.3" constante en todo el rango de peso hasta 2.300 lb.</div>
          <div>• <strong>Peligro de CG Adelantado:</strong> Fuerzas excesivas de palanca en la rotación y recogida de aterrizaje; riesgo de golpear la pata de morro.</div>
          <div>• <strong>Peligro de CG Retrasado:</strong> Inestabilidad longitudinal, pérdida de autoridad de timón de profundidad para picar, tendencia a entrar en pérdida irrecuperable.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Datos de Masa en Vacío de la Flota -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Datos Reales de Pesada (Hoja Oficial F.OPS.04)</span>
      
      <div class="space-y-2 font-mono text-xs">
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div><strong class="text-sky-700 dark:text-sky-300">EC-NNA:</strong> BEW 755.44 kg (1.665.4 lb)</div>
          <span class="text-slate-600 dark:text-slate-400">Brazo: 1.042 m (41.02")</span>
        </div>
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div><strong class="text-emerald-700 dark:text-emerald-300">EC-OXV:</strong> BEW 778.20 kg (1.715.6 lb)</div>
          <span class="text-slate-600 dark:text-slate-400">Brazo: 1.038 m (40.87")</span>
        </div>
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div><strong class="text-indigo-700 dark:text-indigo-300">EC-NNX:</strong> BEW 795.83 kg (1.754.5 lb)</div>
          <span class="text-slate-600 dark:text-slate-400">Brazo: 1.026 m (40.39")</span>
        </div>
        <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800 flex justify-between items-center">
          <div><strong class="text-[#D98A1E] dark:text-amber-300">EC-OXT:</strong> BEW 785.00 kg (1.730.6 lb)</div>
          <span class="text-amber-800 dark:text-amber-300">Brazo: 1.035 m (40.75")</span>
        </div>
      </div>

      <div class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/50 text-sm text-slate-600 dark:text-slate-300 leading-snug">
        ⚠️ <strong>Obligatoriedad de Despacho:</strong> Antes de cada vuelo debe cumplimentarse la hoja física o digital F.OPS.04 con las firmas del PIC, masa de despegue y aterrizaje calculadas, y centro de gravedad dentro de la envolvente.
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.6: Combustibles Aprobados y Temperaturas Límite -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 6 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        1.6 Combustibles Autorizados y Temperaturas Límite
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      AFM Suplemento Continental TAE 125 Sección 2
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Especificaciones Técnicas de Combustibles -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>⛽ COMBUSTIBLES DE AVIACIÓN Y AUTOMOCIÓN</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Kerosén / Diésel
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Combustibles Homologados por EASA y Continental:</strong>
        </div>
        <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-400 block text-xs">1. JET A-1 / JET A (ASTM D 1655):</strong>
            <div>Combustible estándar de turbina. Temperatura mínima operacional de combustible: <strong>-30°C</strong>. Máxima: <strong>+55°C</strong>.</div>
          </div>
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <strong class="text-[#0B2E59] dark:text-sky-400 block text-xs">2. Diésel de Automoción EN 590:</strong>
            <div>Totalmente certificado. Temperatura mínima operacional de combustible: <strong>-5°C</strong> (por riesgo de cristalización de parafinas).</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Prohibiciones y Capacidad de Depósitos -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-400 space-y-1 text-slate-800 dark:text-slate-200">
        <strong class="text-rose-600 dark:text-rose-400 font-bold block text-xs uppercase">🚫 PROHIBICIÓN ABSOLUTA DE GASOLINA (AVGAS)</strong>
        <p class="text-xs">
          <strong>JAMÁS repostar AVGAS 100LL ni ninguna gasolina aeronáutica o de automoción.</strong> La inyección de gasolina destruiría inmediatamente la bomba de alta presión de 1.600 bar y provocaría autodetonación descontrolada con fallo catastrófico del motor.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <strong class="text-[#0B2E59] dark:text-sky-400 block text-xs uppercase">Capacidades de Depósito (2 tanques alares):</strong>
        <div class="grid grid-cols-2 gap-2 font-mono">
          <div>• Capacidad Total: <strong>42.0 US Gal (159 L)</strong></div>
          <div>• Combustible Útil: <strong>40.0 US Gal (151 L)</strong></div>
          <div>• No Utilizable: <strong>2.0 US Gal (7.6 L)</strong></div>
          <div>• Colector / Sump: <strong>0.5 US Gal (1.9 L)</strong></div>
        </div>
      </div>

      <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 text-sm text-amber-900 dark:text-amber-200">
        ⚠️ <strong>Comprobación de Temperatura Previa al Vuelo:</strong> En invierno, si se utiliza diésel EN 590 y la temperatura en plataforma o en nivel de crucero desciende de -5°C, no se puede iniciar el vuelo a menos que el combustible sea JET A-1.
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.7: Aceites Aprobados y Niveles -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 7 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        1.7 Lubricantes Aprobados de Motor y Caja Reductora
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Manual de Mantenimiento TAE 125 & Suplemento POH
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Aceite de Motor Continental -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-sm">🛢️ Aceite de Motor Diésel</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-sky-500/10 text-sky-600">Carter Húmedo</span>
      </div>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Tipo Aprobado:</strong> <em>AeroShell Oil Diesel Ultra 15W-40</em> o totalmente sintético según especificación MB 229.5 / MB 229.51.</div>
        <div>• <strong>Capacidad Total del Cárter:</strong> 6.0 Litros.</div>
        <div>• <strong>Nivel Mínimo Operacional:</strong> <strong>4.5 Litros</strong> (marcado estricto en la varilla).</div>
        <div>• <strong>Nivel Máximo Recomendado:</strong> <strong>6.0 Litros</strong>.</div>
        <div>• <strong>Consumo Máximo Aceptable:</strong> 0.1 Litros por hora de vuelo.</div>
      </div>
      <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 text-sm text-amber-900 dark:text-amber-200">
        ⚠️ <strong>Medición Correcta:</strong> Esperar al menos 5 minutos tras parar el motor para permitir el retorno del aceite al cárter antes de medir con la varilla.
      </div>
    </div>

    <!-- Columna Derecha: Aceite de Caja Reductora (Gearbox) -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-sm">⚙️ Aceite de Caja Reductora (Gearbox)</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/10 text-amber-600">Circuito Independiente</span>
      </div>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Tipo Aprobado:</strong> Fluido ATF sintético <em>Titan EG 5005 Plus</em> o <em>Shell Spirax S4 ATF HDX</em>.</div>
        <div>• <strong>Capacidad del Circuito:</strong> <strong>1.0 Litro</strong> aproximado.</div>
        <div>• <strong>Verificación Prevuelo:</strong> Mirilla visual en el lado frontal derecho del reductor. El nivel debe situarse en la mitad del visor óptico con el avión nivelado.</div>
        <div>• <strong>Función Crucial:</strong> Lubrica los engranajes de reducción y alimenta el actuador hidráulico del gobernador de la hélice MT-Propeller.</div>
      </div>
      <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 text-sm text-rose-900 dark:text-rose-200">
        🚨 <strong>Pérdida de Aceite de Reductora:</strong> Si se pierde presión en la reductora, los contrapesos y muelles llevarán la hélice automáticamente a <strong>paso grueso</strong> para reducir la resistencia aerodinámica.
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.8: Techo de Servicio, Viento Cruzado y Meteorología -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 8 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        1.8 Techo de Servicio, Viento Cruzado y Límites Meteorológicos
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 2 & Manual de Operaciones Blue Team
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Techo y Rendimiento en Altura -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">🏔️ Techo Operacional y Altitud</span>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <strong>Techo Máximo Certificado:</strong>
          <div class="font-mono font-bold text-sm text-[#0B2E59] dark:text-sky-300 mt-0.5">14.200 ft (CD-135) / 17.500 ft (CD-155)</div>
          <span class="text-sm text-slate-500">Mantiene el 100% de potencia hasta aprox. 6.000 - 8.000 ft gracias al turbocompresor de geometría variable.</span>
        </div>
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <strong>Uso de Oxígeno Suplementario (Part-NCO):</strong>
          <span class="block text-sm text-slate-600 dark:text-slate-400 mt-0.5">Obligatorio para la tripulación en vuelos continuados de más de 30 min entre FL100 y FL130, y en todo momento por encima de FL130.</span>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Viento Cruzado y Meteorología -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">💨 Viento Cruzado y Condiciones Adversas</span>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div class="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 flex justify-between items-center">
          <div>
            <strong>Viento Cruzado Máximo Demostrado:</strong>
            <span class="block text-sm text-slate-500">Componente perpendicular a la pista</span>
          </div>
          <span class="font-mono font-black text-base text-[#0B2E59] dark:text-sky-300">15 Nudos</span>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 space-y-1">
          <strong class="text-rose-700 dark:text-rose-400">Prohibición de Vuelo en Condiciones de Engelamiento (FIKI):</strong>
          <p class="text-sm text-rose-900 dark:text-rose-200">
            La aeronave NO está certificada para vuelo en condiciones de hielo conocidas (Flight Into Known Icing). En caso de encuentro inadvertido con engelamiento, abandonar la zona de inmediato cambiando de altitud o rumbo.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
`,
};

// ============================================================================
// LECCIÓN 2: INGENIERÍA Y SISTEMAS CONTINENTAL DIESEL (8 DIAPOSITIVAS)
// ============================================================================
export const C172_LESSON_2 = {
  id: "17200000-0000-0000-0000-000000000002",
  course_id: C172_COURSE_ID,
  title: "2. Ingeniería del Avión y Sistemas Continental CD-135 / CD-155",
  slug: "sistemas-continental-diesel",
  sequence_order: 2,
  lesson_order: 2,
  min_seconds: 60,
  content_html: `
<!-- DIAPOSITIVA 2.1: Arquitectura del Motor Diésel Common Rail -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 1 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        2.1 Arquitectura del Motor Diésel Common Rail (TAE 125)
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Manual de Operación de Motor TAE 125
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Esquema Arquitectura Motor -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>⚙️ CORTE TRANSVERSAL DEL MOTOR</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Mercedes OM640 Derivado
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Configuración Mecánica:</strong> Motor de combustión interna alternativo de 4 cilindros en línea, ciclo diésel de 4 tiempos, doble árbol de levas en culata (DOHC) y 4 válvulas por cilindro (16V).
        </div>
        <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
          <div>• <strong>Cilindrada:</strong> 1.991 cm³ (121.5 in³). Diámetro 83 mm, carrera 92 mm.</div>
          <div>• <strong>Relación de Compresión:</strong> 18:1 (autoencendido por compresión adiabática; sin bujías ni magnetos).</div>
          <div>• <strong>Inyección Directa Common Rail:</strong> Riel común presurizado a <strong>1.600 bar</strong> con inyectores piezoeléctricos multiorificio de dosificación ultraprecisa.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Reductora y Rendimiento -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Caja Reductora y Potencias Comparadas</span>
      
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
        <strong class="text-slate-800 dark:text-slate-200 text-xs">Caja Reductora Mecánica Integrada (Ratio 1:1.69):</strong>
        <p class="text-sm text-slate-600 dark:text-slate-400">
          El cigüeñal del motor gira a régimen óptimo de combustión (hasta 3.890 RPM al 100% de potencia), mientras que la caja reductora desmultiplica la salida para que la hélice gire a un régimen eficiente y silencioso de máximo <strong>2.300 RPM</strong>.
        </p>
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800">
          <span class="font-bold text-sky-800 dark:text-sky-300 block text-xs">CD-135 (TAE 125-01 / 02-99)</span>
          <div class="font-black text-sm text-[#0B2E59] dark:text-sky-200 mt-1">135 CV (99 kW)</div>
          <span class="text-sm text-slate-500">Par motor: 410 Nm a 2.300 RPM</span>
        </div>
        <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800">
          <span class="font-bold text-[#D98A1E] dark:text-amber-400 block text-xs">CD-155 (TAE 125-02-114)</span>
          <div class="font-black text-sm text-[#D98A1E] dark:text-amber-200 mt-1">155 CV (114 kW)</div>
          <span class="text-sm text-slate-500">Par motor: 500 Nm a 2.300 RPM</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.2: Sobrealimentación con Turbo VNT e Intercooler -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 2 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        2.2 Sobrealimentación: Turbocompresor VNT e Intercooler
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Circuito de Admisión y Escape Continental
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Esquema Flujo de Aire Turbocomprimido -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>🌀 CIRCUITO DE AIRE FORZADO</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Turbo VNT + Radiador Aire-Aire
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Turbocompresor de Geometría Variable (VNT):</strong> Los álabes móviles del estátor de la turbina se posicionan mediante actuador eléctrico controlado directamente por el FADEC.
        </div>
        <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
          <div>• En bajas RPM o alta altitud, los álabes se cierran para acelerar los gases sobre la turbina y mantener la presión de soplado (Manifold Pressure).</div>
          <div>• En alta potencia al nivel del mar, los álabes se abren evitando sobrepresiones excesivas en la admisión.</div>
          <div>• <strong>Altitud Crítica:</strong> Mantiene la potencia máxima continua hasta aproximadamente <strong>6.000 ft (CD-135) y 8.000 ft (CD-155)</strong>.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Intercooler y Refrigeración de Admisión -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5">
        <strong class="text-[#0B2E59] dark:text-sky-400 block text-xs uppercase">❄️ Radiador Intercooler (Enfriador Aire-Aire):</strong>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Al comprimirse en el compresor centrífugo, el aire de admisión se calienta a más de 120°C. El intercooler reduce esta temperatura a unos 40-50°C antes de entrar en los colectores, aumentando la densidad del oxígeno por unidad de volumen y reduciendo la temperatura de combustión en los pistones.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800 text-sm text-amber-900 dark:text-amber-200 space-y-1">
        <strong class="block font-bold">⏱️ Procedimiento de Enfriamiento del Turbo:</strong>
        <p>
          Antes de cortar el motor tras el aterrizaje, es obligatorio mantener el motor en ralentí durante un mínimo de <strong>2 minutos</strong> (o rodaje suave equivalente) para que el aceite circule y enfríe los cojinetes del eje del turbo, evitando la carbonización del lubricante.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.3: Sistema de Refrigeración Líquida -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 3 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        2.3 Sistema de Refrigeración Líquida y Calefacción de Cabina
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Circuito Cerrado de Refrigeración
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Circuito de Agua-Glicol -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>🌡️ CIRCUITO CERRADO PRESURIZADO</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            50% Agua / 50% Glicol
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Propiedades Térmicas Superiores:</strong> El enfriamiento por líquido elimina los problemas de choque térmico clásicos en motores refrigerados por aire durante descensos prolongados con baja potencia.
        </div>
        <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
          <div>• <strong>Fluido Homologado:</strong> Mezcla 50/50 de agua desionizada y etilenglicol anticongelante (protección hasta <strong>-38°C</strong>).</div>
          <div>• <strong>Termostato de Apertura:</strong> Comienza a abrir a <strong>84°C</strong> dirigiendo el líquido hacia el radiador frontal/ventral.</div>
          <div>• <strong>Temperatura Normal de Operación:</strong> 80°C a 100°C. Límite máximo: <strong>105°C</strong>.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Calefacción de Cabina sin CO -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-300 dark:border-emerald-800 space-y-1.5">
        <strong class="text-emerald-800 dark:text-emerald-300 block text-xs uppercase">🛡️ Ventaja Crítica de Seguridad: Calefacción sin Monóxido de Carbono</strong>
        <p class="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          En los motores de pistón convencionales, la calefacción de cabina toma calor de una camisa que envuelve el tubo de escape, con grave riesgo de intoxicación por monóxido de carbono (CO) en caso de fisura. En el Continental diésel, la calefacción funciona mediante un <strong>radiador intercambiador líquido-aire</strong> derivado del circuito de refrigerante, <strong>eliminando por completo la posibilidad de intoxicación por CO en cabina</strong>.
        </p>
      </div>

      <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300">
        📌 <strong>Comprobación Prevuelo:</strong> Verificar el nivel en el vaso de expansión transparente bajo el capó superior y cerciorarse de que no existan manchas azuladas/verdosas en el carenado inferior.
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.4: FADEC Dual Redundante y Lógica de Conmutación -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 4 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        2.4 Arquitectura FADEC Dual y Conmutación Automática
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Full Authority Digital Engine Control (Dual Channel)
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Arquitectura Canal A y Canal B -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>💻 FADEC: CANAL A & CANAL B</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Redundancia Activa
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Dos Computadores Digitales Idénticos e Independientes:</strong> El motor no tiene conexión mecánica entre la palanca y los inyectores; el FADEC interpreta la posición de la palanca de gases (sensor potenciómetro dual).
        </div>
        <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
          <div>• <strong>Canal A (Principal por defecto):</strong> Controla inyección de combustible, presión de raíl, geometría de turbo y paso de hélice.</div>
          <div>• <strong>Canal B (Respaldo en caliente):</strong> Monitoriza todos los sensores en paralelo y calcula las mismas tablas en tiempo real.</div>
          <div>• <strong>Sensores Dobles:</strong> Sensor de posición de cigüeñal A/B, sensor de posición de árbol de levas A/B, presión de admisión A/B, etc.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Conmutación y Selector FORCE B -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
        <strong class="text-[#0B2E59] dark:text-sky-400 block text-xs uppercase">Auto-Switchover (Conmutación Automática):</strong>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          Si el FADEC A detecta una discrepancia en un sensor crítico o un fallo interno de microprocesador, transfiere el control al Canal B en <strong>milisegundos sin fluctuación de potencia</strong> ni interrupción de encendido.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800 space-y-1">
        <strong class="text-[#D98A1E] dark:text-amber-400 block text-xs uppercase">Interruptor FADEC FORCE B (Cabina):</strong>
        <p class="text-sm text-amber-900 dark:text-amber-200">
          Ubicado bajo guarda de seguridad en el panel. En caso de comportamiento anómalo del Canal A que no active la conmutación automática, el piloto puede conmutar manualmente a <strong>FORCE B</strong>.
        </p>
      </div>

      <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 text-sm text-rose-900 dark:text-rose-200">
        🚨 <strong>Luces FADEC A / FADEC B:</strong> Si una luz parpadea o queda fija, indica pérdida de redundancia. No se permite el despegue con ninguna luz FADEC encendida.
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.5: Hélice MT-Propeller Tripala de Paso Variable -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 5 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        2.5 Hélice MT-Propeller MTV-6 Tripala de Paso Variable
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Gobernador Electrohidráulico Monomando
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Construcción y Materiales -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>🚁 MT-PROPELLER MTV-6-A/187-129</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Tripala Composite
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Tecnología Natural Composite:</strong> Palas fabricadas con núcleo de madera de fresno/abedul laminada, recubiertas de fibra de vidrio epoxi y perfil de ataque en acero inoxidable pulido.
        </div>
        <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
          <div>• <strong>Ventajas frente al metal:</strong> Reducción sustancial del peso, amortiguación de vibraciones mecánicas y resistencia infinita a fatiga.</div>
          <div>• <strong>Diámetro de Hélice:</strong> 187 cm (73.6 in).</div>
          <div>• <strong>Régimen Máximo de Hélice:</strong> <strong>2.300 RPM</strong> constantes a plena potencia.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Control Electrohidráulico y Fail-Safe -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1">
        <strong class="text-[#0B2E59] dark:text-sky-400 block text-xs uppercase">Monomando FADEC (Single Lever Control):</strong>
        <p class="text-sm text-slate-600 dark:text-slate-300">
          No existe palanca azul de paso de hélice en cabina. El piloto únicamente mueve la palanca de gases (Power Lever de 0 a 100%). El FADEC comanda una válvula solenoide proporcional que ajusta la presión hidráulica de aceite hacia el cubo de la hélice, variando el paso continuamente.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-1">
        <strong class="text-indigo-800 dark:text-indigo-300 block text-xs uppercase">Mecanismo de Seguridad (Fail-Safe a Paso Grueso):</strong>
        <p class="text-base text-slate-700 dark:text-slate-300">
          • La presión de aceite de la reductora empuja el pistón hacia <strong>paso fino</strong> (altas RPM para despegue).<br/>
          • Contrapesos centrífugos y un muelle interno empujan hacia <strong>paso grueso</strong>.<br/>
          • <strong>Si cae la presión de aceite:</strong> La hélice viaja a paso grueso de forma automática, reduciendo drásticamente la resistencia parásita durante un planeo de emergencia.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.6: Sistema Eléctrico y Batería de Respaldo FADEC -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 6 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        2.6 Sistema Eléctrico y Batería de Respaldo FADEC Backup
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Arquitectura de Alimentación Vital
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Dependencia Eléctrica del Motor Diésel -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>⚡ ALIMENTACIÓN CRÍTICA DE MOTOR</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Generación y Almacenamiento
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Diferencia Esencial con Motores de Gasolina:</strong> Los motores convencionales tienen magnetos autónomas que funcionan sin batería. El motor diésel Common Rail <strong>depende de energía eléctrica continua</strong> para alimentar los inyectores, el FADEC y la bomba de combustible.
        </div>
        <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
          <div>• <strong>Alternador Principal:</strong> Arrastrado por correa en el motor, suministra energía a toda la barra eléctrica del avión y recarga las baterías.</div>
          <div>• <strong>Batería Principal:</strong> Plomo-ácido para el arranque del motor y barra general.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Batería FADEC Backup (30 Minutos) -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-emerald-500/40 shadow-sm space-y-3 text-xs sm:text-sm">
      <div class="flex items-center justify-between">
        <span class="font-black text-emerald-700 dark:text-emerald-400 text-sm uppercase">🔋 Batería de Respaldo FADEC Backup</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-emerald-500/10 text-emerald-600">30 Minutos Garantizados</span>
      </div>

      <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 space-y-1 text-slate-800 dark:text-slate-200">
        <strong class="text-emerald-900 dark:text-emerald-300 block">Autonomía y Protección ante Fallo Total del Alternador:</strong>
        <p class="text-xs leading-relaxed">
          Si fallan el alternador y se agota la batería principal, la <strong>Batería FADEC Backup</strong> asume de manera instantánea y aislada la alimentación del <strong>FADEC Canal A y las bombas diésel</strong> durante un mínimo estricto de <strong>30 minutos</strong> a máxima potencia de crucero.
        </p>
      </div>

      <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1 text-sm text-slate-600 dark:text-slate-300">
        <strong>Regla de Decisión Operacional:</strong>
        <div>Al encenderse la luz de fallo de alternador en vuelo: reducir de inmediato cargas no esenciales (luces, pitot heat innecesario, radios secundarias) y planificar aterrizaje en <strong>menos de 30 minutos</strong>.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.7: Sistema de Combustible Diésel -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 7 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        2.7 Sistema de Combustible: Depósitos, Bombas y Retorno Caliente
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Esquema de Fontanería JET A-1 / Diésel
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Esquema de Depósitos y Colector -->
    <div class="h-full flex flex-col justify-center space-y-3">
      <div class="p-5 rounded-2xl bg-[#F1F4F8] dark:bg-slate-900/90 border-2 border-[#D98A1E]/40 dark:border-[#D98A1E]/50 space-y-2.5 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="inline-flex items-center gap-2 font-black text-[#D98A1E] dark:text-amber-400 uppercase tracking-wider text-xs">
            <span>🚰 ESQUEMA DEL CIRCUITO DE COMBUSTIBLE</span>
          </span>
          <span class="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-[#DCE4EE] dark:bg-slate-800 text-[#0B2E59] dark:text-sky-300">
            Gravedad + Colector
          </span>
        </div>
        <div class="text-base sm:text-lg font-bold text-[#0B2E59] dark:text-slate-100 leading-snug">
          <strong>Ruta de Combustible desde las Alas:</strong> El combustible baja por gravedad desde los dos depósitos alares a través de la válvula selectora (LEFT, RIGHT) hacia un <strong>depósito colector (Sump Tank)</strong> de 1.9 L situado bajo el suelo de la cabina.
        </div>
        <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
          <div>• <strong>Sensor Water-in-Fuel:</strong> En la parte inferior del depósito colector existe una sonda óptica/eléctrica de detección de agua decantada.</div>
          <div>• <strong>Bomba de Alimentación Mecánica:</strong> Arrastrada por el motor, suministra baja presión hacia la bomba de alta presión.</div>
          <div>• <strong>Bomba Eléctrica Auxiliar:</strong> Controlada mediante interruptor en cabina (FUEL PUMP ON) para despegues, aterrizajes y emergencias.</div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Retorno de Combustible Caliente y Purgado -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-800 space-y-1">
        <strong class="text-[#D98A1E] dark:text-amber-400 block text-xs uppercase">Línea de Retorno de Combustible Caliente:</strong>
        <p class="text-sm text-amber-900 dark:text-amber-200">
          La bomba de alta presión (1.600 bar) genera un calor considerable. El exceso de combustible no inyectado retorna al depósito alar seleccionado a alta temperatura, lo que <strong>calienta el combustible en las alas</strong> y previene la formación de cristales de cera en vuelos a baja temperatura exterior.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1 text-base text-slate-700 dark:text-slate-300">
        <strong class="text-[#0B2E59] dark:text-sky-400 block text-xs">Puntos de Purga de Drenaje Prevuelo:</strong>
        <div>• 1 drenaje en cada ala (2 puntos alares).</div>
        <div>• 1 drenaje en el colector central / sump bajo el fuselaje.</div>
        <div>• 1 drenaje en el filtro de combustible del compartimento motor.</div>
        <div class="text-sm text-slate-500 italic mt-1">El JET A-1 es claro/incoloro o amarillento claro con olor característico a queroseno. Si se observa agua, drenar hasta obtener líquido 100% puro.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2.8: Instrumentación de Motor CED 125 y SED 125 -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 8 de 8
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        2.8 Instrumentación Digital del Motor: Indicadores CED 125 y SED 125
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Compact Engine Display & Secondary Engine Display
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Pantalla CED 125 Principal -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-sm">📺 Indicador Principal CED 125</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-sky-500/10 text-sky-600">Instrumento Primario</span>
      </div>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Tacómetro de Carga (% LOAD):</strong> Aguja e indicador digital de porcentaje de potencia demandada (0% a 100%).</div>
        <div>• <strong>Tacómetro de Hélice (RPM):</strong> Muestra las RPM exactas de la hélice tras la reductora (normal 1.700 a 2.300 RPM).</div>
        <div>• <strong>Presión de Aceite (OIL PRESS):</strong> Rango verde normal 2.3 a 6.0 bar.</div>
        <div>• <strong>Temperatura de Refrigerante (COOLANT TEMP):</strong> Rango normal 80°C a 100°C. Alerta amarilla >100°C, roja >105°C.</div>
      </div>
    </div>

    <!-- Columna Derecha: Pantalla SED 125 Secundaria y Luces FADEC -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-sm">📟 Indicador Secundario SED 125</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/10 text-amber-600">Parámetros Auxiliares</span>
      </div>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Temperatura de Aceite de Motor:</strong> Normal 50°C a 135°C. Mínimo 50°C para aplicar potencia de despegue.</div>
        <div>• <strong>Temperatura de Aceite de Reductora (GEARBOX):</strong> Límite máximo <strong>115°C</strong>.</div>
        <div>• <strong>Voltaje de Barra Principal:</strong> 26.0 - 28.5 V (en 28V) o 13.5 - 14.2 V (en 14V).</div>
        <div>• <strong>Caudal de Combustible (Fuel Flow):</strong> Indicado en Litros/hora (típico 18-24 L/h en crucero).</div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300">
        🔍 <strong>Test de Lámparas Prevuelo:</strong> Pulsar el interruptor "TEST" para verificar que se iluminan todas las bombillas testigo: FADEC A, FADEC B, GLOW PLUGS y WATER IN FUEL.
      </div>
    </div>
  </div>
</div>
`,
};

// ============================================================================
// LECCIÓN 3: PROCEDIMIENTOS NORMALES Y CHECKLISTS (9 DIAPOSITIVAS)
// ============================================================================
export const C172_LESSON_3 = {
  id: "17200000-0000-0000-0000-000000000003",
  course_id: C172_COURSE_ID,
  title: "3. Procedimientos Normales y Operación Continental Diésel",
  slug: "procedimientos-normales-c172",
  sequence_order: 3,
  lesson_order: 3,
  min_seconds: 60,
  content_html: `
<!-- DIAPOSITIVA 3.1: Inspección Prevuelo I: Cabina y Empenaje -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 1 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        3.1 Inspección Exterior (Walkaround) I: Cabina de Mando y Empenaje
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 4 & Checklist Blue Team
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Interior Cabina -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-sm">🛫 Interior de Cabina de Mando</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-sky-500/10 text-sky-600">Prevuelo</span>
      </div>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Documentación de a bordo:</strong> ARC, Certificado de Aeronavegabilidad, Seguro, Licencia de Estación, POH y F.OPS.04 firmada.</div>
        <div>2. <strong>Bloqueo de mandos (Gust Lock):</strong> Quitado y estibado.</div>
        <div>3. <strong>Interruptores de encendido:</strong> Magnetos/Engine OFF, Master OFF.</div>
        <div>4. <strong>Disyuntores (Circuit Breakers):</strong> Todos dentro.</div>
        <div>5. <strong>Master Switch ON:</strong> Comprobar cantidad de combustible, luces FADEC y bajar flaps a <strong>40°</strong> para inspección de planos. Master OFF.</div>
      </div>
    </div>

    <!-- Columna Derecha: Fuselaje y Empenaje de Cola -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-sm">🛩️ Empenaje de Cola y Fuselaje</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/10 text-amber-600">Inspección</span>
      </div>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Antenas:</strong> Firmes y sin deformaciones en el lomo del fuselaje.</div>
        <div>2. <strong>Estabilizador Horizontal y Profundidad:</strong> Libertad de movimiento, sin holguras anormales en pernos y varillajes.</div>
        <div>3. <strong>Tab de Compensador (Trim Tab):</strong> Verificar varilla de mando conectada y alineación con la escala neutra de cabina.</div>
        <div>4. <strong>Timón de Dirección (Rudder):</strong> Bisagras lubricadas, cables de mando tensos y luz estroboscópica/navegación intacta.</div>
        <div>5. <strong>Amarre de Cola (Tie-down):</strong> Suelto y calzos retirados.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.2: Inspección Prevuelo II: Semialas y Tomas -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 2 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        3.2 Inspección Exterior II: Semialas, Flaps 10°-40° y Tomas Pitot-Estática
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Inspección Perimétrica de Planos
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Flaps y Mandos de Vuelo Alares -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Borde de Salida y Flaps 10°-40°</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Superficies de Flaps (10°, 20°, 30°, 40°):</strong> Carriles y rodillos libres de suciedad, juego lateral dentro de tolerancias, varilla empujadora asegurada con tuerca castillo y pasador.</div>
        <div>• <strong>Alerones:</strong> Libre y suave deflexión, contrapesos estáticos firmes, fijación de bisagras sin holgura y varilla de mando íntegra.</div>
        <div>• <strong>Puntas de Ala y Luces de Navegación:</strong> Luces verde (estribor) y roja (babor) funcionales, cubiertas sin fisuras.</div>
      </div>
    </div>

    <!-- Columna Derecha: Tomas de Presión y Combustible -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Borde de Ataque y Tomas Instrumentales</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Tubo Pitot:</strong> Retirar funda protectora, comprobar orificios frontal y de drenaje libres de insectos u obstrucciones.</div>
        <div>• <strong>Avisador de Pérdida Neumático:</strong> Orificio en borde de ataque limpio (prueba de succión audible en cabina).</div>
        <div>• <strong>Tapones de Combustible:</strong> Comprobar nivel visual de JET A-1, junta de goma estanca y tapón cerrado y orientado al viento relativo.</div>
        <div>• <strong>Drenadores Alares:</strong> Tomar muestra de combustible en vaso transparente para verificar ausencia de agua y partículas sólidas.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.3: Inspección Prevuelo III: Planta Motriz e Inspección de Fluidos -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 3 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        3.3 Inspección Exterior III: Planta Motriz, Hélice MT y Niveles de Fluidos
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Comprobaciones Específicas Continental Diésel
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Hélice MT y Tomas de Admisión -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Hélice MT-Propeller y Cono</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Palas de Composite:</strong> Inspeccionar el blindaje de acero inoxidable del borde de ataque sin impactos ni delaminaciones.</div>
        <div>2. <strong>Cono de Hélice (Spinner):</strong> Firme, sin grietas en la base ni pérdidas de grasa o fluido hidráulico en el cubo.</div>
        <div>3. <strong>Tomas de Aire del Carenado:</strong> Filtro de aire y tomas de radiador de agua, aceite e intercooler completamente despejados de hojas o insectos.</div>
        <div>4. <strong>Tren de Morro:</strong> Presión de amortiguador oleoneumático (aprox. 45 mm visible), neumático con dibujo y sin deformaciones.</div>
      </div>
    </div>

    <!-- Columna Derecha: Niveles de Aceite y Refrigerante en Capó -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-[#D98A1E]/40 shadow-sm space-y-2.5">
      <span class="font-bold text-[#D98A1E] dark:text-amber-400 block text-xs uppercase">Niveles Críticos Bajo el Capó</span>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <strong class="text-[#0B2E59] dark:text-sky-300">Aceite de Motor (Varilla):</strong>
          <span class="block">Comprobar nivel entre <strong>4.5 L (mín)</strong> y <strong>6.0 L (máx)</strong> de AeroShell Diesel Ultra 15W-40.</span>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <strong class="text-[#0B2E59] dark:text-sky-300">Aceite de Reductora (Mirilla):</strong>
          <span class="block">Nivel en la mitad del visor de cristal óptico.</span>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <strong class="text-[#0B2E59] dark:text-sky-300">Líquido Refrigerante (Vaso de Expansión):</strong>
          <span class="block">Nivel visible entre las marcas MIN y MAX con el motor frío.</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.4: Puesta en Marcha y Calentadores -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 4 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        3.4 Puesta en Marcha: Calentadores (Glow Plugs) y Arranque
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Secuencia Oficial de Arranque TAE 125
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Procedimiento Paso a Paso -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Secuencia de Puesta en Marcha</span>
      <div class="space-y-1.5 text-slate-700 dark:text-slate-300 text-xs">
        <div>1. <strong>Freno de estacionamiento:</strong> Calzado y bloqueado.</div>
        <div>2. <strong>Palanca de Potencia (Power Lever):</strong> <strong>IDLE</strong> (ralentí absoluto).</div>
        <div>3. <strong>Selector de Combustible:</strong> Tanque más lleno (LEFT o RIGHT).</div>
        <div>4. <strong>Master Switch:</strong> <strong>ON</strong>. Verificar test automático de CED 125.</div>
        <div>5. <strong>Engine Master (Interruptor de Motor):</strong> <strong>ON</strong>.</div>
        <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-300 text-amber-900 dark:text-amber-200">
          ⏳ <strong>Luz GLOW PLUGS (Calentadores):</strong> Encendida. <strong>ESPERAR A QUE SE APAGUE COMPLETAMENTE</strong> antes de accionar el estárter.
        </div>
        <div>6. <strong>Área de hélice:</strong> "¡LIBRE!" acústico y visual.</div>
        <div>7. <strong>Llave de Arranque:</strong> START (máximo 10 segundos continuados). Soltar al encender.</div>
      </div>
    </div>

    <!-- Columna Derecha: Parámetros Inmediatos Post-Arranque -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Verificaciones Inmediatas Post-Arranque</span>
      
      <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border-2 border-emerald-400 space-y-1 text-slate-800 dark:text-slate-200">
        <strong class="text-emerald-900 dark:text-emerald-300 block text-xs uppercase">🛢️ Presión de Aceite de Motor (OIL PRESS):</strong>
        <p class="text-xs">
          Debe alcanzar el arco verde (>2.3 bar) en <strong>menos de 5 segundos</strong> tras el arranque. Si en 10 segundos no hay presión positiva, <strong>cortar el motor inmediatamente (Engine Master OFF)</strong>.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Régimen de Ralentí:</strong> 710 - 890 RPM de hélice estables.</div>
        <div>• <strong>Alternador y Carga:</strong> Luz de alternador apagada, voltaje entre 13.5-14.2 V (o 26.5-28.5 V).</div>
        <div>• <strong>Aviónica Master:</strong> ON una vez estabilizado el régimen eléctrico.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.5: Rodaje y Calentamiento Térmico -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 5 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        3.5 Rodaje en Tierra y Temperatura Mínima Operacional
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Gestión Térmica en Plataforma y Calles de Rodaje
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Técnicas de Rodaje -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Procedimiento de Rodaje</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Frenos:</strong> Comprobar eficacia y simetría al soltar estacionamiento antes de entrar en calle activa.</div>
        <div>2. <strong>Control de Velocidad:</strong> Rodar a paso de persona ligera. Evitar rodar con potencia continua frenando contra el motor; desacelerar a ralentí y aplicar toques suaves de freno.</div>
        <div>3. <strong>Instrumentos de Vuelo:</strong> Verificar virador indicando hacia el lado del giro, bola de resbale hacia el exterior y rumbo aumentando/disminuyendo en el giro.</div>
      </div>
    </div>

    <!-- Columna Derecha: Temperatura Mínima para Prueba / Despegue -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-amber-400/50 shadow-sm space-y-3 text-xs sm:text-sm">
      <span class="font-bold text-[#D98A1E] dark:text-amber-400 block text-xs uppercase">🌡️ Umbrales Térmicos Reglamentarios</span>
      
      <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 space-y-1 text-slate-800 dark:text-slate-200">
        <strong class="text-amber-900 dark:text-amber-300 block text-xs uppercase">Temperatura Mínima de Refrigerante:</strong>
        <div class="text-base font-black text-[#0B2E59] dark:text-sky-200">Mínimo 60°C (140°F)</div>
        <p class="text-xs">
          <strong>NO se debe iniciar el Run-up ni aplicar potencia de despegue</strong> hasta que la temperatura del líquido refrigerante alcance al menos <strong>60°C</strong> y el aceite de motor alcance al menos <strong>50°C</strong>.
        </p>
      </div>

      <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300">
        💡 En invierno o con bajas temperaturas, rodar con potencias moderadas (1.000 - 1.200 RPM de hélice) para favorecer el calentamiento suave del bloque motor.
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.6: Prueba de Motor y Test FADEC Automático -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 6 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        3.6 Prueba de Motor (Run-Up) y Test Automático FADEC
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Secuencia Automática de Diagnóstico BIESTA
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Pasos de la Prueba FADEC -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Secuencia del Test FADEC</span>
      <div class="space-y-1.5 text-slate-700 dark:text-slate-300 text-xs">
        <div>1. <strong>Frenos de estacionamiento:</strong> Firmes y calzados. Zona trasera despejada.</div>
        <div>2. <strong>Temperaturas de Motor:</strong> Refrigerante ≥ 60°C, Aceite ≥ 50°C.</div>
        <div>3. <strong>Palanca de Potencia:</strong> <strong>IDLE</strong> (ralentí absoluto).</div>
        <div>4. <strong>Botón FADEC TEST:</strong> <strong>PULSAR Y MANTENER PRESIONADO</strong> durante toda la secuencia.</div>
        <div class="p-2 rounded-lg bg-sky-50 dark:bg-sky-950/30 border border-sky-300 text-sky-900 dark:text-sky-200">
          🤖 <strong>Ciclo Automático FADEC:</strong> El computador toma el control automático acelerando el motor entre 1.700 y 1.900 RPM de hélice, conmuta entre Canal A y Canal B, prueba las luces testigo y modula el paso de hélice.
        </div>
        <div>5. <strong>Fin del Test:</strong> El motor retorna automáticamente a ralentí y las luces FADEC se apagan. Soltar el botón.</div>
      </div>
    </div>

    <!-- Columna Derecha: Criterios de Aceptación / Rechazo -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-3 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Criterios de Aceptación</span>
      
      <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-300 text-xs text-slate-800 dark:text-slate-200 space-y-1">
        <strong class="text-emerald-800 dark:text-emerald-300 block uppercase">Prueba Válida para Vuelo:</strong>
        <div>• Las luces FADEC A y FADEC B se encienden alternativamente durante el ciclo y <strong>se apagan por completo al concluir</strong>.</div>
        <div>• Presiones y temperaturas dentro de arcos verdes.</div>
      </div>

      <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-400 text-sm text-rose-900 dark:text-rose-200 space-y-1">
        <strong class="block uppercase font-bold">Aborto Obligatorio:</strong>
        <div>• Si alguna luz FADEC queda encendida o parpadeando tras la prueba: <strong>NO DESPEGAR</strong>.</div>
        <div>• Si el motor no sube de vueltas o hay vibraciones violentas durante el cambio de paso.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.7: Despegue Normal y Campo Corto -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 7 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        3.7 Técnicas de Despegue: Normal y Campo Corto (Short Field)
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 4 & Secc. 5 (Rendimientos)
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Despegue Normal -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-sm">🛫 Despegue Normal</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-sky-500/10 text-sky-600">Pistas Estándar</span>
      </div>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Configuración de Flaps:</strong> <strong>0°</strong> (o <strong>10°</strong> según viento y longitud de pista).</div>
        <div>• <strong>Bomba de Combustible Auxiliar:</strong> <strong>ON</strong>.</div>
        <div>• <strong>Aplicación de Potencia:</strong> Avanzar palanca suave pero continuamente hasta el <strong>100% de carga</strong> (aprox. 2.300 RPM hélice).</div>
        <div>• <strong>Velocidad de Rotación (Vr):</strong> <strong>55 KIAS</strong>. Alzar suavemente el morro a actitud de ascenso.</div>
        <div>• <strong>Velocidad de Ascenso Inicial:</strong> <strong>70-75 KIAS</strong> (Vy = 73 KIAS).</div>
      </div>
    </div>

    <!-- Columna Derecha: Despegue en Campo Corto -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-indigo-500/30 shadow-sm space-y-2.5">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-indigo-700 dark:text-indigo-300 text-sm">🏞️ Despegue en Campo Corto (Short Field)</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-indigo-500/10 text-indigo-600">POH Sec. 4-13</span>
      </div>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Configuración de Flaps:</strong> Obligatorio <strong>10°</strong>.</div>
        <div>• <strong>Alineación y Frenos:</strong> Aprovechar toda la pista disponible. Pisar frenos fuertemente calzados.</div>
        <div>• <strong>Potencia:</strong> Avanzar palanca al <strong>100%</strong> con frenos pisados; verificar 100% en CED 125 y liberar frenos.</div>
        <div>• <strong>Velocidad de Rotación:</strong> <strong>50 KIAS</strong>.</div>
        <div>• <strong>Franqueo de Obstáculo de 50 ft:</strong> Mantener <strong>56 KIAS</strong> hasta superar el obstáculo, luego acelerar a 73 KIAS y retraer flaps por encima de 65 KIAS.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.8: Crucero y Gestión Térmica -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 8 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        3.8 Ascenso, Crucero y Prevención de Enfriamiento Rápido en Descenso
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Régimen de Crucero y Consumos
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Parámetros de Crucero y Consumos -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Ajustes de Crucero Recomendados</span>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div>
            <strong class="text-sky-800 dark:text-sky-300">Crucero Económico (65% LOAD):</strong>
            <span class="block text-sm text-slate-500">Velocidad: 100-105 KTAS</span>
          </div>
          <span class="font-mono font-bold text-sm text-[#0B2E59] dark:text-sky-300">Consumo: ~19-21 L/h</span>
        </div>
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <div>
            <strong class="text-indigo-800 dark:text-indigo-300">Crucero Rápido (75% LOAD):</strong>
            <span class="block text-sm text-slate-500">Velocidad: 110-118 KTAS</span>
          </div>
          <span class="font-mono font-bold text-sm text-indigo-700 dark:text-indigo-300">Consumo: ~23-26 L/h</span>
        </div>
      </div>
      <div class="text-sm text-slate-600 dark:text-slate-400">
        Sin control de mezcla: El FADEC ajusta la riqueza estequiométrica automáticamente con cualquier altitud y temperatura exterior.
      </div>
    </div>

    <!-- Columna Derecha: Gestión Térmica en Descenso -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-amber-300 dark:border-amber-800/60 shadow-sm space-y-3 text-xs sm:text-sm">
      <span class="font-bold text-[#D98A1E] dark:text-amber-400 block text-xs uppercase">❄️ Gestión Térmica en Descensos</span>
      <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 text-sm text-amber-900 dark:text-amber-200 space-y-1.5">
        <strong>Evitar Descenso Prolongado a Cero Potencia:</strong>
        <p class="leading-relaxed">
          Aunque el motor refrigerado por líquido tolera mejor las variaciones térmicas que los motores refrigerados por aire, en descensos prolongados desde niveles altos se recomienda mantener un mínimo de <strong>20% a 25% de potencia (LOAD)</strong> para mantener el circuito a más de 75°C y garantizar respuesta inmediata de potencia en caso de frustrada.
        </p>
      </div>
      <div class="text-sm text-slate-600 dark:text-slate-400">
        • Bomba de combustible auxiliar: Conectar <strong>ON</strong> antes de iniciar el descenso hacia el circuito de tráfico.
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3.9: Circuito de Tráfico, Aterrizaje y Parada -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#D98A1E]/15 text-[#D98A1E] dark:text-amber-400 border border-[#D98A1E]/30">
        ✈️ Diapositiva 9 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        3.9 Circuito, Aterrizaje con Flaps 30°-40°, Frustrada y Parada
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 4 (Aterrizaje y Frustrada)
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Circuito y Aterrizaje Normal / Viento Cruzado -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Aproximación y Aterrizaje</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Viento en Cola:</strong> 80-85 KIAS, flaps 10° por debajo de 110 KIAS.</div>
        <div>• <strong>Tramo Base:</strong> 70-75 KIAS, flaps 20° por debajo de 85 KIAS.</div>
        <div>• <strong>Final Corto:</strong> Flaps <strong>30° o 40°</strong>, velocidad de aproximación <strong>60-65 KIAS</strong>.</div>
        <div>• <strong>Con Viento Cruzado Fuerte o Racheado:</strong> Se recomienda limitar los flaps a <strong>20°</strong> y mantener 65-70 KIAS en final.</div>
        <div>• <strong>Recogida:</strong> Cortar a ralentí al cruzar el umbral y posar suavemente primero sobre el tren principal.</div>
      </div>
    </div>

    <!-- Columna Derecha: Frustrada (Go-Around) y Parada de Motor -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 space-y-1 text-slate-800 dark:text-slate-200">
        <strong class="text-[#D98A1E] dark:text-amber-400 block text-xs uppercase">🔄 Maniobra de Motor y al Aire (Go-Around):</strong>
        <div class="text-xs space-y-0.5">
          <div>1. Palanca de Potencia: <strong>100%</strong> inmediatamente.</div>
          <div>2. Flaps: Retraer inmediatamente de 40°/30° a <strong>20°</strong>.</div>
          <div>3. Velocidad: Ascender a <strong>58-65 KIAS</strong>.</div>
          <div>4. Con régimen positivo y libre de obstáculos: Retraer flaps a 10° y luego a 0°.</div>
        </div>
      </div>

      <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1 text-base text-slate-700 dark:text-slate-300">
        <strong class="text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">🛑 Secuencia de Parada de Motor:</strong>
        <div>• Esperar <strong>2 minutos en ralentí</strong> para estabilización de turbo.</div>
        <div>• Aviónica Master OFF · Luces OFF.</div>
        <div>• <strong>Engine Master OFF:</strong> El motor se detiene de forma instantánea. Master OFF.</div>
      </div>
    </div>
  </div>
</div>
`,
};

// ============================================================================
// LECCIÓN 4: PROCEDIMIENTOS DE EMERGENCIA (9 DIAPOSITIVAS)
// ============================================================================
export const C172_LESSON_4 = {
  id: "17200000-0000-0000-0000-000000000004",
  course_id: C172_COURSE_ID,
  title: "4. Procedimientos de Emergencia y Casos Anómalos",
  slug: "procedimientos-emergencia-c172",
  sequence_order: 4,
  lesson_order: 4,
  min_seconds: 60,
  content_html: `
<!-- DIAPOSITIVA 4.1: Fallo de Motor en Carrera de Despegue y Tras el Despegue -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
        ✈️ Diapositiva 1 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        4.1 Fallo de Motor en Despegue: En Pista y a Baja Cota (&lt;800 ft AGL)
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 3 & Suplemento TAE 125
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Fallo en Carrera en Pista -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-rose-600 dark:text-rose-400 text-sm">🛑 Fallo Durante la Carrera de Despegue</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-rose-500/10 text-rose-600">En Tierra</span>
      </div>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Palanca de Potencia:</strong> <strong>IDLE</strong> inmediatamente.</div>
        <div>2. <strong>Frenos:</strong> Aplicar frenada máxima sin derrapar los neumáticos.</div>
        <div>3. <strong>Flaps:</strong> Retraer a 0° para maximizar el peso sobre las ruedas y la eficacia de frenada.</div>
        <div>4. <strong>Engine Master:</strong> <strong>OFF</strong> antes de abandonar la pista asfaltada.</div>
        <div>5. <strong>Master Switch:</strong> <strong>OFF</strong>.</div>
      </div>
    </div>

    <!-- Columna Derecha: Fallo Tras el Despegue < 800 ft -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-rose-400 dark:border-rose-800 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <div class="flex items-center justify-between border-b border-rose-100 dark:border-rose-900 pb-2">
        <span class="font-bold text-rose-700 dark:text-rose-300 text-sm">⚠️ Fallo de Motor en Vuelo (&lt; 800 ft AGL)</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-rose-500/20 text-rose-700 dark:text-rose-300 font-mono">No Turn Back</span>
      </div>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div class="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 text-rose-950 dark:text-rose-200">
          <strong>REGLA DE ORO DEL VIRADOR DE RETORNO:</strong><br/>
          <strong>JAMÁS intentar regresar a la pista virando 180° a baja cota.</strong> Es la causa número uno de entrada en pérdida y barrena fatal.
        </div>
        <div>• <strong>Velocidad:</strong> Picar de inmediato para mantener <strong>65 KIAS</strong> (flaps arriba) o <strong>60 KIAS</strong> (flaps abajo).</div>
        <div>• <strong>Dirección de Aterrizaje:</strong> Aterrizar al frente dentro de un arco de ±30° del eje de pista.</div>
        <div>• <strong>Flaps:</strong> Extender a <strong>40°</strong> cuando el aterrizaje esté asegurado para tocar a la menor velocidad de energía posible (41 KIAS).</div>
        <div>• <strong>Corte de Emergencia:</strong> Selector Fuel OFF, Engine Master OFF, Master OFF antes de tomar contacto.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.2: Fallo de Motor en Vuelo y Mejor Planeo -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
        ✈️ Diapositiva 2 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        4.2 Fallo de Motor en Crucero: Velocidad de Planeo (Vglide) y Reencendido
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Procedimiento de Planeo Óptimo
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Mejor Planeo 65 KIAS -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-sm">🛩️ Vglide = 65 KIAS</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-sky-500/10 text-sky-600">Ratio 9:1</span>
      </div>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Velocidad de Mejor Planeo:</strong> <strong>65 KIAS</strong> con flaps retraídos.</div>
        <div>• <strong>Relación de Planeo:</strong> Aproximadamente 9 a 1 (se recorren 9 NM horizontales por cada 6.000 ft de descenso, o 1.5 NM por cada 1.000 ft).</div>
        <div>• <strong>Hélice a Paso Grueso:</strong> Al perderse la presión de aceite, la hélice viaja a paso grueso reduciendo notablemente la frenada aerodinámica respecto a una hélice metálica tradicional.</div>
        <div>• <strong>Campo de Aterrizaje:</strong> Seleccionar campo adecuado inmediatamente en el sector de viento en contra.</div>
      </div>
    </div>

    <!-- Columna Derecha: Intento de Reencendido en Vuelo -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-amber-600 dark:text-amber-400 text-sm">🔄 Checklist de Reencendido en Vuelo</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/10 text-amber-600">Si hay altitud</span>
      </div>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Velocidad de Vuelo:</strong> Mantener 65 a 80 KIAS.</div>
        <div>2. <strong>Bomba de Combustible Eléctrica:</strong> <strong>ON</strong>.</div>
        <div>3. <strong>Selector de Combustible:</strong> Cambiar al otro depósito (si estaba en LEFT, poner RIGHT).</div>
        <div>4. <strong>FADEC:</strong> Conmutar a <strong>FORCE B</strong> si se sospecha fallo del Canal A.</div>
        <div>5. <strong>Engine Master:</strong> OFF durante 2 segundos y volver a ON.</div>
        <div>6. <strong>Si la hélice está parada:</strong> Accionar la llave de encendido a posición START brevemente.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.3: Testigos y Alarmas FADEC -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
        ✈️ Diapositiva 3 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        4.3 Avisos Luminosos FADEC: Parpadeo, Fijo y Conmutador FORCE B
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Procedimientos Anómalos de Control FADEC
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Interpretación de Luces Testigo -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Significado de las Luces FADEC A / B</span>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-300 space-y-0.5">
          <strong class="text-amber-900 dark:text-amber-300 block">Luz FADEC Parpadeando (Blinking):</strong>
          <p>Indica una degradación menor o fallo de un sensor redundante secundario. El FADEC sigue funcionando con el canal activo pero se ha perdido parte de la redundancia.</p>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 space-y-0.5">
          <strong class="text-rose-700 dark:text-rose-400 block">Luz FADEC Fija (Steady On):</strong>
          <p>Fallo grave en uno de los canales. El control ha sido transferido automáticamente al otro computador. Se debe planificar aterrizaje en el aeródromo adecuado más cercano.</p>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Uso del Conmutador FORCE B -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Conmutación Manual con FORCE B</span>
      <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <strong>¿Cuándo usar el interruptor FORCE B?</strong>
        <p class="leading-relaxed">
          Si el motor presenta fallos de encendido, fluctuaciones de RPM o falta de respuesta al mando y las luces FADEC no han conmutado automáticamente al Canal B, levantar la tapa de protección y colocar el interruptor en <strong>FORCE B</strong>.
        </p>
        <p class="text-sm text-slate-500 italic">
          Si con FORCE B el motor no mejora, retornar a posición AUTO / NORMAL.
        </p>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.4: Fallo Eléctrico y Gestión de Batería de Respaldo -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
        ✈️ Diapositiva 4 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        4.4 Fallo del Alternador y Gestión de Batería FADEC Backup (30 Min)
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Procedimiento de Fallo de Generación Eléctrica
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Síntomas y Diagnóstico -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-rose-600 dark:text-rose-400 block text-xs uppercase">Síntomas de Fallo de Alternador</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Luz de Alternador / Baja Tensión:</strong> Encendida en el panel de anunciadores.</div>
        <div>• <strong>Voltímetro en SED 125:</strong> Cae por debajo de 25 V (en sistema 28V) o por debajo de 12.5 V (en sistema 14V).</div>
        <div>• <strong>Amperímetro:</strong> Indica descarga continuada de la batería principal.</div>
      </div>
      <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-300">
        Intento de reseteo: Alternator Switch OFF durante 2 segundos y volver a ON. Si la luz permanece encendida, cortar el alternador definitivamente.
      </div>
    </div>

    <!-- Columna Derecha: Desconexión de Cargas y Cronómetro 30 Min -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-rose-400 dark:border-rose-800 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-rose-700 dark:text-rose-300 block text-xs uppercase">Deslastre de Carga (Load Shedding)</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. Desconectar de inmediato consumidores prescindibles: Luces estroboscópicas, taxi, calefactor de tubo pitot (salvo en IMC), radios secundarias y GPS secundario.</div>
        <div>2. Transmitir "PAN PAN" o declarar emergencia con ATC según proximidad de pistas.</div>
        <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 text-rose-900 dark:text-rose-200">
          ⏱️ <strong>REGLA DE LOS 30 MINUTOS:</strong><br/>
          La Batería FADEC Backup garantiza alimentación exclusiva al FADEC y bombas diésel durante <strong>30 minutos</strong> desde que la batería principal se agota. El aterrizaje debe completarse sin demora.
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.5: Sobretemperatura de Refrigerante y Caja Reductora -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
        ✈️ Diapositiva 5 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        4.5 Sobretemperatura de Refrigerante (&gt;105°C) y Caja Reductora (&gt;115°C)
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Procedimientos Anómalos Térmicos
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Sobretemperatura Refrigerante -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-rose-600 dark:text-rose-400 text-sm">🌡️ Refrigerante &gt; 105°C (Coolant Temp)</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-rose-500/10 text-rose-600">Alerta Roja</span>
      </div>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Calefacción de Cabina (Cabin Heat):</strong> <strong>PULL FULL ON</strong> (actúa como radiador supletorio disipando calor hacia la cabina).</div>
        <div>2. <strong>Palanca de Potencia:</strong> Reducir carga a menos del 60% si la altitud lo permite.</div>
        <div>3. <strong>Velocidad de Vuelo:</strong> Aumentar a 80-90 KIAS bajando ligeramente el morro para mejorar el flujo de aire en el radiador.</div>
        <div>4. <strong>Si la temperatura no baja:</strong> Aterrizar en el aeródromo más cercano.</div>
      </div>
    </div>

    <!-- Columna Derecha: Sobretemperatura Reductora -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-amber-600 dark:text-amber-400 text-sm">⚙️ Reductora &gt; 115°C (Gearbox Temp)</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/10 text-amber-600">Alerta Roja</span>
      </div>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Palanca de Potencia:</strong> Reducir de inmediato al mínimo necesario para vuelo nivelado (50% - 55% LOAD).</div>
        <div>2. <strong>Vigilancia de Presión:</strong> Si la temperatura sube acompañada de fluctuación de RPM o caída de presión de reductora, anticipar que la hélice puede ir a paso grueso de forma inminente.</div>
        <div>3. <strong>Aterrizaje:</strong> Planificar aproximación directa a pista con motor encendido pero sin aceleraciones bruscas.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.6: Pérdida de Presión de Aceite de Motor -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
        ✈️ Diapositiva 6 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        4.6 Baja Presión de Aceite de Motor: Diagnóstico y Acción
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Procedimiento Crítico de Lubricación
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Distinción Falsa Alarma vs Pérdida Real -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Evaluación Cruzada de Instrumentos</span>
      <div class="space-y-2 text-base text-slate-700 dark:text-slate-300">
        <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <strong class="text-amber-800 dark:text-amber-300">Caso 1: Presión baja pero temperatura normal:</strong>
          <p class="text-sm text-slate-600 dark:text-slate-400">Puede deberse a un fallo del transmisor o del sensor de presión en el CED 125. Monitorizar de cerca y aterrizar en el aeródromo más cercano para revisión técnica.</p>
        </div>
        <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300">
          <strong class="text-rose-700 dark:text-rose-400">Caso 2: Presión baja Y temperatura de aceite subiendo:</strong>
          <p class="text-sm text-rose-900 dark:text-rose-200"><strong>Pérdida real y severa de aceite.</strong> La parada del motor por gripaje mecánico o desintegración térmica es inminente en los próximos minutos.</p>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Plan de Acción Inmediato -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-rose-400 dark:border-rose-800 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-rose-700 dark:text-rose-300 block text-xs uppercase">Plan de Acción con Pérdida Confirmada</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Reducir potencia:</strong> Reducir palanca al mínimo necesario para mantener sustentación hacia el campo de aterrizaje más próximo.</div>
        <div>2. <strong>Selección Inmediata de Campo:</strong> Tratar la situación como un planeo forzoso inminente.</div>
        <div>3. <strong>No esperar a la parada violenta:</strong> Cuando el aterrizaje esté asegurado, cortar el motor (Engine Master OFF) para evitar daños estructurales o fuego en la toma.</div>
        <div>4. <strong>Planeo a 65 KIAS:</strong> Hélice en paso grueso, flaps 40° en corta final.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.7: Contaminación de Combustible (Water in Fuel) -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
        ✈️ Diapositiva 7 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        4.7 Alarma Water in Fuel y Contaminación de Combustible
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Sensor de Agua en Colector de Combustible
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Activación del Sensor -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <div class="flex items-center justify-between border-b border-slate-100 dark:border-slate-700 pb-2">
        <span class="font-bold text-amber-600 dark:text-amber-400 text-sm">💡 Testigo WATER IN FUEL Encendido</span>
        <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-500/10 text-amber-600">Alerta Sump</span>
      </div>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Función del Sensor:</strong> Detecta la presencia de agua decantada en el fondo del depósito colector central de 1.9 L.</div>
        <div>• <strong>Comportamiento del Diésel con Agua:</strong> El agua no se disuelve en el JET A-1 o diésel; decanta en el fondo por densidad. Si pasa al circuito de alta presión, la lubricación de la bomba de 1.600 bar falla y los inyectores se bloquean.</div>
      </div>
    </div>

    <!-- Columna Derecha: Procedimiento Operativo -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Procedimiento en Vuelo</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Bomba de Combustible Auxiliar:</strong> Conectar <strong>ON</strong>.</div>
        <div>2. <strong>Selector de Combustible:</strong> Cambiar al depósito con menor sospecha de contaminación.</div>
        <div>3. <strong>Gestión de Potencia:</strong> Evitar movimientos rápidos de la palanca de gases; mantener potencia constante y estable.</div>
        <div>4. <strong>Decisión:</strong> Planificar aterrizaje inmediato en el aeródromo más próximo para drenar el colector.</div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.8: Entrada Inadvertida en Barrena y Recuperación P.A.R.E. -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
        ✈️ Diapositiva 8 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        4.8 Entrada Inadvertida en Barrena: Mnemotécnica P.A.R.E.
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 3 & Suplementos TAE 125
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Dinámica de la Barrena -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-rose-600 dark:text-rose-400 block text-xs uppercase">Aerodinámica de la Barrena (Spin)</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <p>
          Una barrena es una condición de <strong>pérdida agravada con guiñada</strong> donde un ala entra más profundamente en pérdida que la otra, produciendo una rotación helicoidal descendente autorrotativa.
        </p>
        <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-300 text-rose-900 dark:text-rose-200">
          ⚠️ <strong>Recordatorio Crítico:</strong> Las barrenas intencionadas están estrictamente prohibidas en toda la flota C172 con motor diésel y hélice de composite.
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Recuperación Reglamentaria P.A.R.E. -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-indigo-400 dark:border-indigo-800 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-black text-indigo-700 dark:text-indigo-300 block text-xs uppercase">Secuencia Invariable P.A.R.E.</span>
      <div class="space-y-2 text-xs">
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
          <span class="font-black text-lg text-rose-600 dark:text-rose-400 font-mono">P</span>
          <div><strong>POWER IDLE:</strong> Palanca de potencia inmediatamente a ralentí para eliminar el efecto giroscópico y la sustentación asimétrica.</div>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
          <span class="font-black text-lg text-amber-600 dark:text-amber-400 font-mono">A</span>
          <div><strong>AILERONS NEUTRAL:</strong> Alerones rigurosamente neutros (intentar levantar el ala con alerón agrava la barrena).</div>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
          <span class="font-black text-lg text-sky-600 dark:text-sky-400 font-mono">R</span>
          <div><strong>RUDDER FULL OPPOSITE:</strong> Timón de dirección pisado a fondo en sentido opuesto al giro de rotación.</div>
        </div>
        <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
          <span class="font-black text-lg text-emerald-600 dark:text-emerald-400 font-mono">E</span>
          <div><strong>ELEVATOR FORWARD:</strong> Empujar palanca hacia adelante con decisión para romper la pérdida en ambas alas.</div>
        </div>
      </div>
      <div class="text-sm text-slate-500 italic">
        Al cesar la rotación: Timón al centro y recuperar suavemente de la picada sin exceder Va ni +3.8 G.
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4.9: Amerizaje de Emergencia (Ditching) y Evacuación -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <div class="flex items-center gap-3">
      <span class="px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
        ✈️ Diapositiva 9 de 9
      </span>
      <h1 class="text-2xl sm:text-3xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
        4.9 Amerizaje Forzoso (Ditching) y Protocolo de Evacuación
      </h1>
    </div>
    <span class="text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 3 Pág. 3-12 & Suplementos
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center flex-1 my-auto py-2">
    <!-- Columna Izquierda: Técnica de Contacto con el Agua -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#DCE4EE] dark:border-slate-700 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-sky-800 dark:text-sky-300 block text-xs uppercase">Técnica de Toma en el Agua</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>• <strong>Con Oleaje Fuerte y Viento Suave:</strong> <strong>Aterrizar PARALELO a las crestas de las olas (swell)</strong> para evitar impactar frontalmente contra la pared vertical de agua.</div>
        <div>• <strong>Con Viento Muy Fuerte (>25 kt):</strong> Aterrizar de cara al viento para reducir la velocidad relativa de impacto respecto al suelo.</div>
        <div>• <strong>Configuración de Flaps:</strong> <strong>Flaps 40°</strong> (o 30°) para lograr la menor velocidad posible (41 KIAS) en el momento del impacto.</div>
        <div>• <strong>Actitud de Vuelo:</strong> Morro ligeramente elevado (nariz arriba) posando primero la parte trasera del fuselaje.</div>
      </div>
    </div>

    <!-- Columna Derecha: Preparación de Cabina y Evacuación -->
    <div class="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border-2 border-sky-400 dark:border-sky-800 shadow-sm space-y-2.5 text-xs sm:text-sm">
      <span class="font-bold text-[#0B2E59] dark:text-sky-300 block text-xs uppercase">Preparación de Cabina y Evacuación</span>
      <div class="space-y-1.5 text-base text-slate-700 dark:text-slate-300">
        <div>1. <strong>Puertas de Cabina:</strong> <strong>DESBLOQUEAR PESTILLOS ANTES DE CONTACTAR</strong> para evitar que la deformación del fuselaje las trabe e impida la salida.</div>
        <div>2. <strong>Arneses de Seguridad:</strong> Ajustados al máximo por todos los ocupantes.</div>
        <div>3. <strong>Chalecos Salvavidas:</strong> Colocados pero <strong>NO INFLAR DENTRO DE LA CABINA</strong> (inflar únicamente tras salir al exterior).</div>
        <div>4. <strong>Radiobaliza ELT:</strong> Activar manualmente si es accesible. Evacuar sobre el plano alar.</div>
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
];
