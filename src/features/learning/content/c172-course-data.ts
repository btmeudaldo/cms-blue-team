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

// LECCIÓN 1: Flota C172 Blue Team y Especificaciones por Matrícula
export const C172_LESSON_1 = {
  id: "17200000-0000-0000-0000-000000000001",
  course_id: C172_COURSE_ID,
  title: "1. Flota C172 Blue Team y Especificaciones por Matrícula",
  slug: "flota-c172-especificaciones-matricula",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: 540, // 9 minutos
  content_html: `
<div class="lesson-slide-container space-y-4 text-slate-800 dark:text-slate-100">
  <!-- Header de la diapositiva -->
  <div class="border-b border-sky-500/20 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-1">
        <span>✈️ Diapositiva 1 / 5 · EASA Part-FCL.710</span>
      </div>
      <h1 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
        1. Flota Cessna 172 Blue Team y Especificaciones por Matrícula
      </h1>
    </div>
    <span class="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
      📖 Documentación disponible en el botón lateral <strong>"Documentación POH"</strong>
    </span>
  </div>

  <!-- Tarjetas de Aeronaves de Flota -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-sky-500/30 shadow-xs space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-black text-sky-600 dark:text-sky-400 text-sm">EC-NNA</span>
        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-500/10 text-sky-600">C172N · 1978</span>
      </div>
      <p class="text-[11px] text-slate-600 dark:text-slate-300">Wichita (EE.UU.) · Eléctrico 28V.</p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        <div>Motor: TAE 125-01 (135 CV)</div>
        <div class="text-amber-600 dark:text-amber-400 font-bold">Flaps: 10°, 20°, 30°</div>
      </div>
    </div>

    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-emerald-500/30 shadow-xs space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-black text-emerald-600 dark:text-emerald-400 text-sm">EC-OXV</span>
        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/10 text-emerald-600">F172K · 1970</span>
      </div>
      <p class="text-[11px] text-slate-600 dark:text-slate-300">Reims Aviation · Eléctrico 14V.</p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        <div>Motor: TAE 125-02-99 (135 CV)</div>
        <div class="text-emerald-600 dark:text-emerald-400 font-bold">Flaps: 10°, 20°, 30°, 40°</div>
      </div>
    </div>

    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-indigo-500/30 shadow-xs space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-black text-indigo-600 dark:text-indigo-400 text-sm">EC-NNX</span>
        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-indigo-500/10 text-indigo-600">Reims F-M</span>
      </div>
      <p class="text-[11px] text-slate-600 dark:text-slate-300">Reims / STC Continental CD-135.</p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        <div>Hélice tripala MT-Propeller</div>
        <div class="text-indigo-600 dark:text-indigo-400 font-bold">Flaps: 10°, 20°, 30°</div>
      </div>
    </div>

    <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-purple-500/30 shadow-xs space-y-1">
      <div class="flex items-center justify-between">
        <span class="font-black text-purple-600 dark:text-purple-400 text-sm">EC-OXT</span>
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
  <div class="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
    <div class="flex items-center justify-between text-xs font-bold">
      <span class="flex items-center gap-1.5 text-slate-900 dark:text-white">
        <span class="px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-[10px]">FIG. 1-1</span>
        Geometría y Dimensiones Principales C172 (POH Sec. 1)
      </span>
      <div class="flex gap-2 text-[10px] text-slate-500">
        <span>Envergadura: <strong>10.97 m (36')</strong></span>
        <span>•</span>
        <span>Longitud: <strong>8.20 m (26' 11")</strong></span>
        <span>•</span>
        <span>Altura: <strong>2.68 m (8' 9.5")</strong></span>
      </div>
    </div>

    <div class="w-full flex justify-center py-1">
      <svg viewBox="0 0 900 240" class="w-full max-h-52 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7" />
          </marker>
        </defs>

        <!-- Silueta Tres Vistas simplificada y limpia -->
        <g transform="translate(40, 20)">
          <text x="180" y="15" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 font-bold text-xs">VISTA EN PLANTA (SUPERIOR)</text>
          <!-- Ala -->
          <rect x="30" y="70" width="300" height="32" rx="4" class="fill-sky-500/20 stroke-sky-600" stroke-width="1.5" />
          <!-- Fuselaje -->
          <ellipse cx="180" cy="86" rx="22" ry="70" class="fill-sky-500/15 stroke-sky-600" stroke-width="1.5" />
          <!-- Estabilizador Horizontal -->
          <rect x="120" y="145" width="120" height="14" rx="2" class="fill-sky-500/25 stroke-sky-600" stroke-width="1.5" />
          <!-- Cota Envergadura -->
          <line x1="30" y1="45" x2="330" y2="45" stroke="#0284c7" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
          <text x="180" y="40" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 font-bold text-[11px]">Envergadura: 10.97 m (36' 0")</text>
        </g>

        <g transform="translate(480, 20)">
          <text x="180" y="15" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 font-bold text-xs">VISTA LATERAL (PERFIL)</text>
          <!-- Perfil fuselaje -->
          <path d="M 40 85 C 60 70, 110 65, 160 65 C 230 65, 300 80, 320 85 C 300 95, 230 100, 160 100 C 110 100, 60 95, 40 85 Z" class="fill-sky-500/15 stroke-sky-600" stroke-width="1.5" />
          <!-- Cabina / Ala alta -->
          <polygon points="120,65 170,40 210,40 220,65" class="fill-sky-500/30 stroke-sky-600" stroke-width="1.2" />
          <!-- Deriva Vertical -->
          <polygon points="290,80 320,35 330,35 325,85" class="fill-sky-500/25 stroke-sky-600" stroke-width="1.5" />
          <!-- Tren triciclo -->
          <circle cx="95" cy="115" r="7" class="fill-slate-700" />
          <line x1="95" y1="95" x2="95" y2="115" stroke="#0284c7" stroke-width="2" />
          <circle cx="190" cy="118" r="9" class="fill-slate-700" />
          <line x1="180" y1="95" x2="190" y2="118" stroke="#0284c7" stroke-width="2" />
          <!-- Cota Longitud -->
          <line x1="40" y1="135" x2="330" y2="135" stroke="#0284c7" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
          <text x="185" y="150" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 font-bold text-[11px]">Longitud: 8.20 m (26' 11") · Altura: 2.68 m</text>
        </g>
      </svg>
    </div>
  </div>

  <!-- Puntos clave operacionales -->
  <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs">
    <span class="font-bold text-slate-900 dark:text-white block mb-1">📌 Conclusiones Clave de la Flota:</span>
    <ul class="space-y-1 text-[11px] text-slate-600 dark:text-slate-300">
      <li>• <strong>Comunalidad:</strong> Todas las aeronaves cuentan con motorización Continental Turbo Diésel (Jet A-1) y monomando electrónico (FADEC).</li>
      <li>• <strong>Diferencia Crítica de Flaps:</strong> EC-NNA cuenta con 3 muescas (10°, 20°, 30°), mientras que EC-OXV, EC-OXT y EC-NNX cuentan con 4 posiciones (hasta 40°).</li>
      <li>• Consulta los POHs y hojas de carga en cualquier momento abriendo el panel lateral <strong>"Documentación POH"</strong>.</li>
    </ul>
  </div>
</div>
`,
};

// LECCIÓN 2: Célula, Superficies de Mando y Sistema de Flaps
export const C172_LESSON_2 = {
  id: "17200000-0000-0000-0000-000000000002",
  course_id: C172_COURSE_ID,
  title: "2. Célula, Superficies de Mando y Sistema de Flaps",
  slug: "celula-mandos-vuelo-flaps",
  sequence_order: 2,
  lesson_order: 2,
  min_seconds: 540, // 9 minutos
  content_html: `
<div class="lesson-slide-container space-y-4 text-slate-800 dark:text-slate-100">
  <div class="border-b border-sky-500/20 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-1">
        <span>✈️ Diapositiva 2 / 5 · Mandos y Flaps</span>
      </div>
      <h1 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
        2. Célula, Superficies Primarias y Sistema Diferencial de Flaps
      </h1>
    </div>
    <span class="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
      POH Cessna Sección 7 (Flight Controls & Wing Flaps)
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
        <span>🛠️ Mandos Primarios de Vuelo</span>
      </h3>
      <ul class="space-y-1.5 text-slate-600 dark:text-slate-300 text-[11px]">
        <li>• <strong>Alerones tipo Frise:</strong> Transmisión mediante cables y poleas. El alerón ascendente deflexiona más que el descendente para contrarrestar la guiñada adversa.</li>
        <li>• <strong>Timón de Profundidad (Elevador):</strong> Unido al estabilizador horizontal, con compensador mecánico (trim tab) en el lado derecho ajustable desde la rueda central de cabina.</li>
        <li>• <strong>Timón de Dirección (Rudder):</strong> Accionado por cables conectados directamente a los pedales con enlace por muelles a la rueda de morro.</li>
      </ul>
    </div>

    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
        <span>📐 Flaps Ranurados (Slotted Flaps)</span>
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-[11px]">
        Flaps accionados eléctricamente mediante motor con husillo sinfín en la semiala derecha. La ranura permite canalizar aire de alta presión del intradós al extradós retrasando el desprendimiento de la capa límite.
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

  <!-- Diagrama Perfil Alar NACA 2412 y Flap -->
  <div class="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-1.5">
    <div class="flex items-center justify-between text-xs font-bold">
      <span class="text-slate-900 dark:text-white">Perfil Alar NACA 2412 y Cinemática de Flap Ranurado (POH Fig. 7-3)</span>
      <span class="text-[10px] text-slate-500">Espesor relativo: 12% · Camber: 2%</span>
    </div>
    <div class="w-full flex justify-center py-1">
      <svg viewBox="0 0 700 130" class="w-full max-h-36 h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
        <!-- Perfil NACA 2412 -->
        <path d="M 60 65 C 100 20, 260 20, 420 50 C 440 55, 455 60, 460 65 C 440 75, 300 80, 160 80 C 100 80, 70 75, 60 65 Z" class="fill-sky-500/20 stroke-sky-600" stroke-width="2" />
        <!-- Flap ranurado deflexionado -->
        <g transform="translate(450, 58) rotate(25)">
          <path d="M 0 0 C 40 5, 90 15, 140 25 C 120 35, 60 30, 0 10 Z" class="fill-amber-500/30 stroke-amber-600" stroke-width="2" />
          <text x="60" y="18" class="fill-amber-800 dark:fill-amber-200 text-[10px] font-bold">Flap Ranurado</text>
        </g>
        <!-- Flujo de aire a través de la ranura -->
        <path d="M 410 75 C 430 72, 445 60, 470 50" fill="none" stroke="#0284c7" stroke-width="2" stroke-dasharray="3,3" />
        <text x="230" y="55" class="fill-sky-800 dark:fill-sky-200 text-xs font-bold text-center">Perfil NACA 2412 (C172)</text>
        <text x="490" y="35" class="fill-sky-600 text-[10px] font-semibold">Ranura de alta energía</text>
      </svg>
    </div>
  </div>
</div>
`,
};

// LECCIÓN 3: Tren de Aterrizaje Fijo, Amortiguador y Frenos
export const C172_LESSON_3 = {
  id: "17200000-0000-0000-0000-000000000003",
  course_id: C172_COURSE_ID,
  title: "3. Tren de Aterrizaje Fijo, Amortiguador y Frenos",
  slug: "tren-aterrizaje-frenos",
  sequence_order: 3,
  lesson_order: 3,
  min_seconds: 540, // 9 minutos
  content_html: `
<div class="lesson-slide-container space-y-4 text-slate-800 dark:text-slate-100">
  <div class="border-b border-sky-500/20 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-1">
        <span>✈️ Diapositiva 3 / 5 · Tren y Frenos</span>
      </div>
      <h1 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
        3. Tren de Aterrizaje Fijo, Amortiguación y Frenos Monodisco
      </h1>
    </div>
    <span class="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
      POH Cessna Sección 7 (Landing Gear & Brake System)
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider text-[11px]">
        🛞 Tren Principal
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-[11px]">
        Patas de acero para muelles de una sola pieza (acero al cromo-vanadio tratado térmicamente). Absorben los impactos del aterrizaje mediante deformación elástica sin componentes hidráulicos.
      </p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        Presión nominal: 29 a 38 PSI.
      </div>
    </div>

    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px]">
        🛩️ Tren de Morro
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-[11px]">
        Puntal oleoneumático (aire comprimido y líquido hidráulico <strong>MIL-H-5606</strong>). Amortiguador de bamboleo (<em>shimmy damper</em>) para evitar oscilaciones rápidas en tomas y rodaje.
      </p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        Extensión vástago: 45 mm (1.75 in / 2-3 dedos).
      </div>
    </div>

    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[11px]">
        🛑 Dirección y Frenos
      </h3>
      <p class="text-slate-600 dark:text-slate-300 text-[11px]">
        Dirección de morro orientable 10° a cada lado mediante los pedales. Con frenado diferencial asimétrico sobre las punteras, el ángulo de giro alcanza hasta <strong>30°</strong>.
      </p>
      <div class="text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-100 dark:border-slate-700/60">
        Frenos hidráulicos de disco simple Cleveland.
      </div>
    </div>
  </div>

  <div class="p-3 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800/60 text-xs">
    <span class="font-bold text-amber-800 dark:text-amber-300 block mb-1">⚠️ Comprobación Obligatoria en Inspección Prevuelo:</span>
    <p class="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
      Comprobar visualmente que el vástago cromado del puntal de morro esté limpio, sin restos de fluido hidráulico rojo (MIL-H-5606) y con una extensión aproximada de 2 a 3 dedos (45 mm). Un puntal completamente colapsado transmite impactos directos a la bancada del motor diésel y la hélice en tomas de pista.
    </p>
  </div>
</div>
`,
};

// LECCIÓN 4: Limitaciones de Velocidad y Arcos de Anemómetro
export const C172_LESSON_4 = {
  id: "17200000-0000-0000-0000-000000000004",
  course_id: C172_COURSE_ID,
  title: "4. Limitaciones de Velocidad y Arcos de Anemómetro",
  slug: "limitaciones-velocidad-anemometro",
  sequence_order: 4,
  lesson_order: 4,
  min_seconds: 540, // 9 minutos
  content_html: `
<div class="lesson-slide-container space-y-4 text-slate-800 dark:text-slate-100">
  <div class="border-b border-sky-500/20 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 mb-1">
        <span>✈️ Diapositiva 4 / 5 · Velocidades de Flota</span>
      </div>
      <h1 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
        4. Velocidades Operacionales (V-Speeds) y Marcaciones del Anemómetro
      </h1>
    </div>
    <span class="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
      POH Cessna Sección 2 (Airspeed Limitations & CS-23)
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <!-- Tabla de Velocidades Oficiales -->
    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px] flex items-center justify-between">
        <span>📋 Velocidades Certificadas C172</span>
        <span class="font-mono text-sky-600">KIAS</span>
      </h3>
      <table class="w-full text-left border-collapse text-[11px]">
        <thead>
          <tr class="border-b border-slate-200 dark:border-slate-700 text-slate-400 font-bold">
            <th class="py-1">V-Speed</th>
            <th class="py-1">Valor</th>
            <th class="py-1">Significado Operacional</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 dark:divide-slate-800 font-medium">
          <tr><td class="font-bold text-sky-600 py-1">Vso</td><td class="font-mono font-bold">41 KIAS</td><td>Pérdida en configuración de aterrizaje (flaps abajo)</td></tr>
          <tr><td class="font-bold text-slate-700 dark:text-slate-300 py-1">Vs</td><td class="font-mono font-bold">47 KIAS</td><td>Pérdida en configuración limpia (flaps arriba)</td></tr>
          <tr><td class="font-bold text-emerald-600 py-1">Vx</td><td class="font-mono font-bold">59 KIAS</td><td>Mejor ángulo de ascenso (franqueamiento obstáculos)</td></tr>
          <tr><td class="font-bold text-emerald-600 py-1">Vy</td><td class="font-mono font-bold">73 KIAS</td><td>Mejor régimen de ascenso (máxima altitud en tiempo)</td></tr>
          <tr><td class="font-bold text-amber-600 py-1">Vfe</td><td class="font-mono font-bold">85 KIAS</td><td>Máxima con flaps extendidos (110 KIAS flap 10° NNA)</td></tr>
          <tr><td class="font-bold text-amber-600 py-1">Va</td><td class="font-mono font-bold">97 KIAS</td><td>Velocidad de maniobra (con peso máximo MTOW)</td></tr>
          <tr><td class="font-bold text-amber-600 py-1">Vno</td><td class="font-mono font-bold">128 KIAS</td><td>Máxima de crucero estructural (aire en calma)</td></tr>
          <tr><td class="font-bold text-rose-600 py-1">Vne</td><td class="font-mono font-bold">160 KIAS</td><td>Velocidad de nunca exceder (Línea roja radical)</td></tr>
        </tbody>
      </table>
    </div>

    <!-- Código de Colores del Anemómetro CS-23 -->
    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-[11px]">
        🎨 Arcos Reglamentarios del Anemómetro
      </h3>
      <div class="space-y-1.5 text-[11px]">
        <div class="p-2 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-between border-l-4 border-slate-300 dark:border-slate-500">
          <div><strong>Arco Blanco (41 - 85 KIAS):</strong> Rango operativo con flaps (Vso a Vfe).</div>
        </div>
        <div class="p-2 rounded bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-between border-l-4 border-emerald-500">
          <div><strong>Arco Verde (47 - 128 KIAS):</strong> Rango de operación normal (Vs a Vno).</div>
        </div>
        <div class="p-2 rounded bg-amber-50 dark:bg-amber-950/30 flex items-center justify-between border-l-4 border-amber-500">
          <div><strong>Arco Amarillo (128 - 160 KIAS):</strong> Precaución; solo en aire sin turbulencias.</div>
        </div>
        <div class="p-2 rounded bg-rose-50 dark:bg-rose-950/30 flex items-center justify-between border-l-4 border-rose-500">
          <div><strong>Línea Roja (160 KIAS):</strong> Vne — Prohibido superar bajo ninguna condición.</div>
        </div>
      </div>
    </div>
  </div>
</div>
`,
};

// LECCIÓN 5: Factores de Carga, Pesos, Centrado y Prohibición de Barrenas
export const C172_LESSON_5 = {
  id: "17200000-0000-0000-0000-000000000005",
  course_id: C172_COURSE_ID,
  title: "5. Factores de Carga, Masas, Centrado y Prohibición de Barrenas",
  slug: "factores-carga-pesos-centrado-barrenas",
  sequence_order: 5,
  lesson_order: 5,
  min_seconds: 540, // 9 minutos
  content_html: `
<div class="lesson-slide-container space-y-4 text-slate-800 dark:text-slate-100">
  <div class="border-b border-sky-500/20 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
    <div>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1">
        <span>✈️ Diapositiva 5 / 5 · Peso, Centrado y Seguridad</span>
      </div>
      <h1 class="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
        5. Masas, Centrado, Hojas F.OPS.04 y Prohibición Estricta de Barrenas
      </h1>
    </div>
    <span class="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
      EASA Part-FCL.710 & POH Suplementos TAE
    </span>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px]">
        ⚖️ Pesos y Categorías Estructurales
      </h3>
      <ul class="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
        <li>• <strong>Categoría Normal:</strong> MTOW de 1043 kg (2300 lb) / 1089 kg (2400 lb en modelos modernos). Factores de carga límites: <strong>+3.8G / -1.52G</strong> (flaps arriba).</li>
        <li>• <strong>Categoría Utilitaria:</strong> Peso máximo reducido a 907 kg (2000 lb). Factores de carga límites: <strong>+4.4G / -1.76G</strong>.</li>
        <li>• <strong>Bodega 1 (Baggage Area 1):</strong> Carga máxima admisible de <strong>54.4 kg (120 lb)</strong>.</li>
      </ul>
    </div>

    <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-2">
      <h3 class="font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider text-[11px]">
        📑 Hojas Oficiales de Carga F.OPS.04
      </h3>
      <p class="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
        Cada avión dispone de su hoja individualizada en la flota Blue Team:
      </p>
      <div class="space-y-1 font-mono text-[10px] text-slate-500 pt-1">
        <div>• <strong>EC-NNA:</strong> BEW 755.44 kg · Brazo: 1.042 m · Momento: 787.23 kg·m</div>
        <div>• <strong>EC-NNX:</strong> BEW 795.83 kg · Brazo: 1.026 m · Momento: 816.05 kg·m</div>
      </div>
      <p class="text-[10px] text-slate-400 italic">
        Consulta las hojas completas desde el botón lateral <strong>"Documentación POH"</strong>.
      </p>
    </div>
  </div>

  <!-- Prohibición Estricta de Barrenas (Spins) -->
  <div class="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border-2 border-rose-500/80 text-xs space-y-1.5">
    <div class="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-black text-sm uppercase tracking-wide">
      <span>⛔ SEGURIDAD OPERACIONAL CRÍTICA (POH SUPL. SEC. 2):</span>
    </div>
    <p class="text-[11px] text-rose-800 dark:text-rose-200 font-semibold leading-relaxed">
      LAS BARRENAS (SPINS) ESTÁN ESTRICTAMENTE PROHIBIDAS EN TODA LA FLOTA CESSNA 172 CON MOTORIZACIÓN CONTINENTAL CD-135 / CD-155 DIÉSEL, INCLUSO EN CATEGORÍA UTILITARIA.
    </p>
    <p class="text-[10px] text-rose-600 dark:text-rose-400 leading-relaxed">
      La instalación del bloque motor diésel y la reductora altera los momentos de inercia giroscópicos y la dinámica de autorrotación, imposibilitando la recuperación estándar certificada. Maniobras autorizadas: virajes escarpados (máx 60°), ochos perezosos y pérdidas simples.
    </p>
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
