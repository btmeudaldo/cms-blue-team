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
export const C172_COURSE_DESCRIPTION = "Curso oficial de familiarización de tipo, diferencias técnicas y procedimientos de emergencia para la flota Cessna 172 con motores Continental CD-135 y CD-155 Turbo Diésel (EC-OXT, EC-OXV, EC-NNA, EC-NNX) de Blue Team Flight School, conforme a EASA Part-FCL.710.";
export const C172_COURSE_IMAGE_URL = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80";

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
    url: "/manuals/cessna/suplementos-ec-oxt.pdf",
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

  // Secciones Técnicas Modulares por Matrícula (EC-NNA)
  {
    category: "Secciones Técnicas EC-NNA",
    registration: "EC-NNA",
    title: "Sec. 1: General y Dimensiones Principales",
    url: "/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC01_General_y_Dimensiones.pdf",
    badge: "Sec. 1",
  },
  {
    category: "Secciones Técnicas EC-NNA",
    registration: "EC-NNA",
    title: "Sec. 2: Limitaciones Operacionales y Flaps 30° / 110 KIAS",
    url: "/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC02_Limitaciones_Operacionales.pdf",
    badge: "Sec. 2",
  },
  {
    category: "Secciones Técnicas EC-NNA",
    registration: "EC-NNA",
    title: "Sec. 4: Procedimientos Normales e Inspección Prevuelo",
    url: "/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC04_Procedimientos_Normales_Prevuelo.pdf",
    badge: "Sec. 4",
  },
  {
    category: "Secciones Técnicas EC-NNA",
    registration: "EC-NNA",
    title: "Sec. 7: Descripción de Sistemas, Célula, Flaps y Tren",
    url: "/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC07_Descripcion_de_Sistemas_Celula_y_Flaps.pdf",
    badge: "Sec. 7",
  },
  {
    category: "Secciones Técnicas EC-NNA",
    registration: "EC-NNA",
    title: "Supl. Diésel Sec. 1: Planta Motriz TAE 125 y FADEC",
    url: "/manuals/cessna/secciones/EC-NNA/EC-NNA_SUPL-TAE-SEC01_General_Motor_Diesel.pdf",
    badge: "Supl. Motor",
  },
  {
    category: "Secciones Técnicas EC-NNA",
    registration: "EC-NNA",
    title: "Supl. Diésel Sec. 2: Limitaciones y Prohibición de Barrenas",
    url: "/manuals/cessna/secciones/EC-NNA/EC-NNA_SUPL-TAE-SEC02_Limitaciones_Motor_y_Prohibicion_Barrenas.pdf",
    badge: "Supl. Barrenas",
  },

  // Secciones Técnicas Modulares por Matrícula (EC-OXV)
  {
    category: "Secciones Técnicas EC-OXV",
    registration: "EC-OXV",
    title: "Sec. 2: Descripción General y Flaps 40°",
    url: "/manuals/cessna/secciones/EC-OXV/EC-OXV_POH-SEC02_Descripcion_y_Flaps_40_Grados.pdf",
    badge: "Sec. 2",
  },
  {
    category: "Secciones Técnicas EC-OXV",
    registration: "EC-OXV",
    title: "Sec. 4: Limitaciones de Velocidad y Operación",
    url: "/manuals/cessna/secciones/EC-OXV/EC-OXV_POH-SEC04_Limitaciones_Operacionales.pdf",
    badge: "Sec. 4",
  },
  {
    category: "Secciones Técnicas EC-OXV",
    registration: "EC-OXV",
    title: "Supl. Diésel Sec. 2: Limitaciones TAE 125 y Barrenas",
    url: "/manuals/cessna/secciones/EC-OXV/EC-OXV_SUPL-TAE-SEC02_Limitaciones_Motor_y_Prohibicion_Barrenas.pdf",
    badge: "Supl. Barrenas",
  },

  // Secciones Técnicas Modulares por Matrícula (EC-NNX y EC-OXT)
  {
    category: "Secciones Técnicas EC-NNX / EC-OXT",
    registration: "EC-NNX",
    title: "EC-NNX Supl. TAE Sec. 2: Limitaciones y Prohibición de Barrenas",
    url: "/manuals/cessna/secciones/EC-NNX/EC-NNX_SUPL-TAE-SEC02_Limitaciones_Motor_y_Prohibicion_Barrenas.pdf",
    badge: "Supl. Barrenas",
  },
  {
    category: "Secciones Técnicas EC-NNX / EC-OXT",
    registration: "EC-OXT",
    title: "EC-OXT Supl. TAE Sec. 2: Limitaciones y Prohibición de Barrenas",
    url: "/manuals/cessna/secciones/EC-OXT/EC-OXT_SUPL-TAE-SEC02_Limitaciones_Motor_y_Prohibicion_Barrenas.pdf",
    badge: "Supl. Barrenas",
  },
];

// LECCIÓN ÚNICA OFICIAL CON 5 DIAPOSITIVAS INTERNAS PAGINADAS
export const C172_LESSON_1 = {
  id: "17200000-0000-0000-0000-000000000001",
  course_id: C172_COURSE_ID,
  title: "1. Célula, Mandos de Vuelo y Limitaciones Operacionales de Flota",
  slug: "celula-mandos-limitaciones-flota",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: 50, // 10 segundos por diapositiva para pruebas (5 diapositivas = 50s)
  content_html: `
<!-- DIAPOSITIVA 1: Flota C172 Blue Team y Especificaciones por Matrícula -->
<div class="lesson-slide-container space-y-3.5 text-slate-800 dark:text-slate-100">
  <div class="border-b border-sky-500/20 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-1">
        <span>✈️ Diapositiva 1 de 5 · EASA Part-FCL.710</span>
      </div>
      <h1 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
        1.1 Flota Cessna 172 Blue Team y Especificaciones por Matrícula
      </h1>
    </div>
    <span class="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
      📖 Manuales POH en el botón superior <strong>"Documentación POH"</strong>
    </span>
  </div>

  <!-- Tarjetas de Aeronaves de Flota -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-sky-500/30 shadow-xs space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-black text-sky-600 dark:text-sky-400 text-xs sm:text-sm">EC-NNA</span>
        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-500/10 text-sky-600">C172N · 1978</span>
      </div>
      <p class="text-[11px] text-slate-600 dark:text-slate-300">Wichita (EE.UU.) · Eléctrico 28V.</p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        <div>Motor: TAE 125-01 (135 CV)</div>
        <div class="text-amber-600 dark:text-amber-400 font-bold">Flaps: 10°, 20°, 30°</div>
      </div>
    </div>

    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-emerald-500/30 shadow-xs space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-black text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">EC-OXV</span>
        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-600">F172K · 1970</span>
      </div>
      <p class="text-[11px] text-slate-600 dark:text-slate-300">Reims Aviation · Eléctrico 14V.</p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        <div>Motor: TAE 125-02-99 (135 CV)</div>
        <div class="text-emerald-600 dark:text-emerald-400 font-bold">Flaps: 10°, 20°, 30°, 40°</div>
      </div>
    </div>

    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-indigo-500/30 shadow-xs space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-black text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm">EC-NNX</span>
        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-indigo-500/10 text-indigo-600">Reims F-M</span>
      </div>
      <p class="text-[11px] text-slate-600 dark:text-slate-300">Reims / STC Continental CD-135.</p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        <div>Hélice tripala MT-Propeller</div>
        <div class="text-indigo-600 dark:text-indigo-400 font-bold">Flaps: 10°, 20°, 30°</div>
      </div>
    </div>

    <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-purple-500/30 shadow-xs space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-black text-purple-600 dark:text-purple-400 text-xs sm:text-sm">EC-OXT</span>
        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-purple-500/10 text-purple-600">F172M · 1974</span>
      </div>
      <p class="text-[11px] text-slate-600 dark:text-slate-300">Reims · CD-155 Potencia superior.</p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        <div>Motor: TAE 125-02-114 (155 CV)</div>
        <div class="text-purple-600 dark:text-purple-400 font-bold">Flaps: 10°, 20°, 30°, 40°</div>
      </div>
    </div>
  </div>

  <!-- Diagrama Oficial Tres Vistas C172 Proporcional -->
  <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1.5">
    <div class="flex items-center justify-between text-xs font-bold">
      <span class="flex items-center gap-1.5 text-slate-900 dark:text-white">
        <span class="px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-[9px]">FIG. 1-1</span>
        Geometría y Dimensiones Principales C172 (POH Sec. 1)
      </span>
      <div class="flex gap-2 text-[10px] text-slate-500">
        <span>Envergadura: <strong>10.97 m (36')</strong></span>
        <span>•</span>
        <span>Longitud: <strong>8.20 m (26' 11")</strong></span>
        <span>•</span>
        <span>Altura: <strong>2.68 m</strong></span>
      </div>
    </div>

    <div class="w-full flex justify-center py-1">
      <svg viewBox="0 0 900 230" class="w-full max-h-48 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7" />
          </marker>
        </defs>

        <g transform="translate(40, 15)">
          <text x="180" y="15" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 font-bold text-xs">VISTA EN PLANTA (SUPERIOR)</text>
          <rect x="30" y="65" width="300" height="30" rx="4" class="fill-sky-500/20 stroke-sky-600" stroke-width="1.5" />
          <ellipse cx="180" cy="80" rx="20" ry="65" class="fill-sky-500/15 stroke-sky-600" stroke-width="1.5" />
          <rect x="120" y="135" width="120" height="12" rx="2" class="fill-sky-500/25 stroke-sky-600" stroke-width="1.5" />
          <line x1="30" y1="45" x2="330" y2="45" stroke="#0284c7" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
          <text x="180" y="38" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 font-bold text-[10px]">Envergadura: 10.97 m (36' 0")</text>
        </g>

        <g transform="translate(480, 15)">
          <text x="180" y="15" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 font-bold text-xs">VISTA LATERAL (PERFIL)</text>
          <path d="M 40 80 C 60 65, 110 60, 160 60 C 230 60, 300 75, 320 80 C 300 90, 230 95, 160 95 C 110 95, 60 90, 40 80 Z" class="fill-sky-500/15 stroke-sky-600" stroke-width="1.5" />
          <polygon points="120,60 170,38 210,38 220,60" class="fill-sky-500/30 stroke-sky-600" stroke-width="1.2" />
          <polygon points="290,75 320,32 330,32 325,80" class="fill-sky-500/25 stroke-sky-600" stroke-width="1.5" />
          <circle cx="95" cy="108" r="6" class="fill-slate-700" />
          <line x1="95" y1="90" x2="95" y2="108" stroke="#0284c7" stroke-width="2" />
          <circle cx="190" cy="110" r="8" class="fill-slate-700" />
          <line x1="180" y1="90" x2="190" y2="110" stroke="#0284c7" stroke-width="2" />
          <line x1="40" y1="130" x2="330" y2="130" stroke="#0284c7" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
          <text x="185" y="145" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 font-bold text-[10px]">Longitud: 8.20 m (26' 11") · Altura: 2.68 m</text>
        </g>
      </svg>
    </div>
  </div>

  <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
    <span class="font-bold text-slate-900 dark:text-white block mb-0.5">📌 Puntos Clave de Flota:</span>
    <p class="text-[11px] text-slate-600 dark:text-slate-300">
      Todas las aeronaves comparten la planta motriz Continental Turbo Diésel monomando FADEC. La diferencia operativa principal radica en los flaps (EC-NNA hasta 30°, resto hasta 40°).
    </p>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 2: Célula, Superficies Primarias y Flaps Eléctricos -->
<div class="lesson-slide-container space-y-3.5 text-slate-800 dark:text-slate-100">
  <div class="border-b border-sky-500/20 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-1">
        <span>✈️ Diapositiva 2 de 5 · Mandos y Flaps</span>
      </div>
      <h1 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
        1.2 Célula, Superficies Primarias y Sistema de Flaps Ranurados
      </h1>
    </div>
    <span class="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
      POH Cessna Sec. 7 (Flight Controls & Flaps)
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px]">
        🛠️ Mandos Primarios de Vuelo
      </h3>
      <ul class="space-y-1.5 text-slate-600 dark:text-slate-300 text-[11px]">
        <li>• <strong>Alerones tipo Frise:</strong> Transmisión por cables y poleas. El alerón que asciende deflexiona con mayor ángulo para neutralizar la guiñada adversa.</li>
        <li>• <strong>Elevador y Compensador:</strong> Timón de profundidad con tab móvil en el lado derecho accionado por la rueda central de cabina.</li>
        <li>• <strong>Timón de Dirección:</strong> Conectado a los pedales y con enlace por muelles al tren de morro.</li>
      </ul>
    </div>

    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px]">
        📐 Flaps Ranurados Eléctricos (Slotted)
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-[11px]">
        Flaps con motor eléctrico en la semiala derecha. La ranura canaliza aire de alta velocidad desde el intradós al extradós para mantener el flujo adherido.
      </p>
      <div class="grid grid-cols-2 gap-2 pt-1">
        <div class="p-2 rounded bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/50">
          <span class="font-bold text-amber-700 dark:text-amber-300 block text-[10px]">EC-NNA (3 pos):</span>
          <span class="font-mono font-bold text-xs">10°, 20°, 30°</span>
          <p class="text-[9px] text-slate-500 mt-0.5">Vfe 10°: 110 KIAS · Vfe 20°-30°: 85 KIAS</p>
        </div>
        <div class="p-2 rounded bg-sky-50 dark:bg-sky-950/30 border border-sky-300 dark:border-sky-800/50">
          <span class="font-bold text-sky-700 dark:text-sky-300 block text-[10px]">OXV, OXT, NNX (4 pos):</span>
          <span class="font-mono font-bold text-xs">10°, 20°, 30°, 40°</span>
          <p class="text-[9px] text-slate-500 mt-0.5">Vfe fija: 85 KIAS para cualquier grado.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Diagrama Perfil Alar NACA 2412 -->
  <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
    <div class="flex items-center justify-between text-xs font-bold">
      <span class="text-slate-900 dark:text-white">Perfil Alar NACA 2412 y Flap Ranurado (POH Fig. 7-3)</span>
      <span class="text-[10px] text-slate-500">Espesor 12% · Camber 2%</span>
    </div>
    <div class="w-full flex justify-center py-1">
      <svg viewBox="0 0 700 120" class="w-full max-h-32 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
        <path d="M 60 60 C 100 18, 260 18, 420 48 C 440 52, 455 58, 460 62 C 440 72, 300 75, 160 75 C 100 75, 70 70, 60 60 Z" class="fill-sky-500/20 stroke-sky-600" stroke-width="2" />
        <g transform="translate(450, 55) rotate(25)">
          <path d="M 0 0 C 40 5, 90 15, 140 25 C 120 35, 60 30, 0 10 Z" class="fill-amber-500/30 stroke-amber-600" stroke-width="2" />
          <text x="60" y="16" class="fill-amber-800 dark:fill-amber-200 text-[10px] font-bold">Flap Ranurado</text>
        </g>
        <path d="M 410 70 C 430 68, 445 55, 470 45" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3" />
        <text x="230" y="50" class="fill-sky-800 dark:fill-sky-200 text-xs font-bold">Perfil NACA 2412</text>
        <text x="490" y="32" class="fill-sky-600 text-[10px] font-semibold">Ranura energizadora</text>
      </svg>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 3: Tren de Aterrizaje Fijo, Amortiguador y Frenos -->
<div class="lesson-slide-container space-y-3.5 text-slate-800 dark:text-slate-100">
  <div class="border-b border-sky-500/20 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-1">
        <span>✈️ Diapositiva 3 de 5 · Tren y Frenos</span>
      </div>
      <h1 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
        1.3 Tren de Aterrizaje Fijo, Amortiguación y Frenos Monodisco
      </h1>
    </div>
    <span class="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
      POH Cessna Sec. 7 (Landing Gear & Brakes)
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider text-[11px]">
        🛞 Tren Principal
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-[11px]">
        Patas de acero para muelles de una sola pieza (acero al cromo-vanadio). Absorben los impactos del aterrizaje mediante flexión elástica sin circuitos hidráulicos.
      </p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        Presión: 29 a 38 PSI.
      </div>
    </div>

    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px]">
        🛩️ Tren de Morro
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-[11px]">
        Puntal oleoneumático con aire comprimido y fluido hidráulico <strong>MIL-H-5606</strong>. Equipado con amortiguador de bamboleo (<em>shimmy damper</em>).
      </p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        Extensión vástago: 45 mm (2-3 dedos).
      </div>
    </div>

    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[11px]">
        🛑 Dirección y Frenos
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-[11px]">
        Orientación directa de 10° con pedales y hasta <strong>30°</strong> mediante frenado diferencial asimétrico. Frenos de disco simple Cleveland accionados por punteras.
      </p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        Frenos monodisco hidráulicos.
      </div>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/60 text-xs">
    <span class="font-bold text-amber-800 dark:text-amber-300 block mb-0.5">⚠️ Comprobación Obligatoria en Prevuelo:</span>
    <p class="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
      Comprobar visualmente que el vástago del puntal de morro esté limpio, sin fugas de líquido hidráulico rojo (MIL-H-5606) y con extensión de 2 a 3 dedos (45 mm / 1.75 in). Un puntal colapsado transmite impactos directos a la reductora del motor diésel y la hélice.
    </p>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 4: Velocidades Operacionales y Arcos de Anemómetro -->
<div class="lesson-slide-container space-y-3.5 text-slate-800 dark:text-slate-100">
  <div class="border-b border-sky-500/20 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 mb-1">
        <span>✈️ Diapositiva 4 de 5 · Velocidades de Flota</span>
      </div>
      <h1 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
        1.4 Velocidades Límite y Marcaciones del Anemómetro (EASA CS-23)
      </h1>
    </div>
    <span class="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
      POH Cessna Sec. 2 (Airspeed Limitations)
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] flex items-center justify-between">
        <span>📋 Velocidades Certificadas C172</span>
        <span class="font-mono text-sky-600">KIAS</span>
      </h3>
      <table class="w-full text-left border-collapse text-[10.5px]">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-slate-400 font-bold">
            <th class="py-0.5">V-Speed</th>
            <th class="py-0.5">Valor</th>
            <th class="py-0.5">Significado Operacional</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
          <tr><td class="font-bold text-sky-600 py-0.5">Vso</td><td class="font-mono font-bold">41 KIAS</td><td>Pérdida en configuración de aterrizaje (flaps extendidos)</td></tr>
          <tr><td class="font-bold text-slate-700 dark:text-slate-300 py-0.5">Vs</td><td class="font-mono font-bold">47 KIAS</td><td>Pérdida en configuración limpia (flaps retraídos)</td></tr>
          <tr><td class="font-bold text-emerald-600 py-0.5">Vx</td><td class="font-mono font-bold">59 KIAS</td><td>Mejor ángulo de ascenso (franqueamiento de obstáculos)</td></tr>
          <tr><td class="font-bold text-emerald-600 py-0.5">Vy</td><td class="font-mono font-bold">73 KIAS</td><td>Mejor régimen de ascenso (máxima ganancia de altitud)</td></tr>
          <tr><td class="font-bold text-amber-600 py-0.5">Vfe</td><td class="font-mono font-bold">85 KIAS</td><td>Máxima con flaps (en EC-NNA flap 10° autorizado hasta 110 KIAS)</td></tr>
          <tr><td class="font-bold text-amber-600 py-0.5">Va</td><td class="font-mono font-bold">97 KIAS</td><td>Velocidad de maniobra con peso máximo MTOW</td></tr>
          <tr><td class="font-bold text-amber-600 py-0.5">Vno</td><td class="font-mono font-bold">128 KIAS</td><td>Máxima estructural de crucero (aire en calma)</td></tr>
          <tr><td class="font-bold text-rose-600 py-0.5">Vne</td><td class="font-mono font-bold">160 KIAS</td><td>Velocidad de nunca exceder (Línea roja radical)</td></tr>
        </tbody>
      </table>
    </div>

    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
        🎨 Arcos Reglamentarios del Anemómetro
      </h3>
      <div class="space-y-1.5 text-[11px]">
        <div class="p-1.5 rounded bg-slate-100 dark:bg-slate-800 border-l-4 border-slate-400">
          <strong>Arco Blanco (41 - 85 KIAS):</strong> Rango operativo con flaps (Vso a Vfe).
        </div>
        <div class="p-1.5 rounded bg-emerald-50 dark:bg-emerald-950/30 border-l-4 border-emerald-500">
          <strong>Arco Verde (47 - 128 KIAS):</strong> Rango normal de crucero y maniobra (Vs a Vno).
        </div>
        <div class="p-1.5 rounded bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500">
          <strong>Arco Amarillo (128 - 160 KIAS):</strong> Precaución; únicamente en aire en calma.
        </div>
        <div class="p-1.5 rounded bg-rose-50 dark:bg-rose-950/30 border-l-4 border-rose-500">
          <strong>Línea Roja (160 KIAS):</strong> Vne — Prohibido superar bajo ninguna condición.
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 5: Factores de Carga, Pesos, Centrado y Prohibición de Barrenas -->
<div class="lesson-slide-container space-y-3.5 text-slate-800 dark:text-slate-100">
  <div class="border-b border-sky-500/20 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1">
        <span>✈️ Diapositiva 5 de 5 · Peso, Centrado y Seguridad</span>
      </div>
      <h1 class="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight">
        1.5 Masas, Centrado, Hojas F.OPS.04 y Prohibición Estricta de Barrenas
      </h1>
    </div>
    <span class="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
      EASA Part-FCL.710 & POH Suplementos TAE
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px]">
        ⚖️ Pesos y Categorías Estructurales
      </h3>
      <ul class="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
        <li>• <strong>Categoría Normal:</strong> MTOW de 1043 kg (2300 lb) / 1089 kg (2400 lb). Factores límite: <strong>+3.8G / -1.52G</strong> (flaps arriba).</li>
        <li>• <strong>Categoría Utilitaria:</strong> Peso máximo 907 kg (2000 lb). Factores límite: <strong>+4.4G / -1.76G</strong>.</li>
        <li>• <strong>Bodega 1 (Baggage Area 1):</strong> Carga máxima admisible de <strong>54.4 kg (120 lb)</strong>.</li>
      </ul>
    </div>

    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px]">
        📑 Hojas Oficiales de Carga F.OPS.04
      </h3>
      <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
        Datos de pesaje certificados para cálculo de masa y centrado:
      </p>
      <div class="space-y-0.5 font-mono text-[10px] text-slate-500 pt-0.5">
        <div>• <strong>EC-NNA:</strong> BEW 755.44 kg · Brazo: 1.042 m · Momento: 787.23 kg·m</div>
        <div>• <strong>EC-NNX:</strong> BEW 795.83 kg · Brazo: 1.026 m · Momento: 816.05 kg·m</div>
      </div>
      <p class="text-[10px] text-slate-400 italic pt-1">
        Consulta las hojas completas desde el botón lateral <strong>"Documentación POH"</strong>.
      </p>
    </div>
  </div>

  <!-- Prohibición Estricta de Barrenas (Spins) -->
  <div class="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-500/80 text-xs space-y-1">
    <div class="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-black text-xs sm:text-sm uppercase tracking-wide">
      <span>⛔ SEGURIDAD OPERACIONAL CRÍTICA (POH SUPL. SEC. 2):</span>
    </div>
    <p class="text-[11px] text-rose-800 dark:text-rose-200 font-semibold leading-relaxed">
      LAS BARRENAS (SPINS) ESTÁN ESTRICTAMENTE PROHIBIDAS EN TODA LA FLOTA CESSNA 172 CON MOTORIZACIÓN CONTINENTAL CD-135 / CD-155 DIÉSEL, INCLUSO EN CATEGORÍA UTILITARIA.
    </p>
    <p class="text-[10px] text-rose-600 dark:text-rose-400 leading-relaxed">
      La instalación del bloque motor diésel y la reductora altera los momentos de inercia giroscópicos y la dinámica de autorrotación, imposibilitando la recuperación estándar certificada.
    </p>
  </div>
</div>
`,
};

export const C172_LESSONS = [C172_LESSON_1];
