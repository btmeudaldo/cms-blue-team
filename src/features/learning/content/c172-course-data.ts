export const C172_COURSE_ID = "17200000-0000-0000-0000-000000000172";
export const C172_COURSE_SLUG = "cessna-172-continental-diesel";
export const C172_COURSE_TITLE = "Curso de Familiarización y Diferencias Cessna 172 (Continental CD-135 / CD-155)";
export const C172_COURSE_DESCRIPTION = "Curso oficial de familiarización de tipo, diferencias técnicas y procedimientos de emergencia para la flota Cessna 172 con motores Continental CD-135 y CD-155 Turbo Diésel (EC-OXT, EC-OXV, EC-NNA, EC-NNX) de Blue Team Flight School, conforme a EASA Part-FCL.710.";
export const C172_COURSE_IMAGE_URL = "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80";

export const C172_LESSON_1 = {
  id: "17200000-0000-0000-0000-000000000001",
  course_id: C172_COURSE_ID,
  title: "1. Célula, Mandos de Vuelo y Limitaciones Operacionales de Flota",
  slug: "celula-mandos-limitaciones-flota",
  sequence_order: 1,
  lesson_order: 1,
  min_seconds: 2700, // 45 minutos oficiales
  content_html: `
<div class="lesson-slide-container space-y-6 text-slate-800 dark:text-slate-100">
  
  <!-- Slide Header -->
  <div class="border-b border-sky-500/30 pb-4">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20 mb-2">
      <span>✈️ Blue Team Flight School — EASA Part-FCL.710</span>
    </div>
    <h1 class="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
      1. Célula, Mandos de Vuelo y Limitaciones Operacionales de Flota
    </h1>
    <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">
      Familiarización técnica con la flota Cessna 172 con motorización Continental CD-135 / CD-155 Turbo Diésel.
    </p>
  </div>

  <!-- Barra de Consulta Rápida POH & Secciones Técnicas Oficiales -->
  <div class="p-3.5 rounded-2xl bg-slate-100/90 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700/80 shadow-sm space-y-2.5">
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
      <div class="flex items-center gap-2">
        <span class="text-lg">📑</span>
        <div>
          <span class="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white block">Documentación POH Oficial de Flota — Organizada por Secciones</span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400">Consulta directa por sección técnica o manual completo según EASA Part-FCL</span>
        </div>
      </div>
      <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 self-start sm:self-center">
        ● 45 Secciones Modulares Disponibles
      </span>
    </div>

    <!-- Guía de Navegación Estructural según Manual -->
    <div class="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-[11px] text-sky-800 dark:text-sky-300">
      <span class="font-bold flex items-center gap-1.5 mb-1">
        <span>📂</span> <span>Organización Modular de la Flota:</span>
      </span>
      <p class="leading-relaxed">
        Los manuales han sido segmentados en secciones independientes por matrícula (<strong>EC-NNA</strong>, <strong>EC-OXV</strong>, <strong>EC-NNX</strong> y <strong>EC-OXT</strong>). Cada botón abre directamente el PDF oficial de la sección técnica correspondiente (General, Limitaciones, Flaps/Sistemas, Rendimiento o Suplemento Diésel), facilitando una consulta ágil sin necesidad de navegar por cientos de páginas.
      </p>
    </div>

    <!-- Accesos Directos a Secciones Clave de esta Lección -->
    <div class="space-y-1.5 pt-1 text-xs">
      <div class="text-[11px] font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
        <span>🔍 Secciones Técnicas Directas de esta Lección (Célula, Limitaciones y Mandos):</span>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC01_General_y_Dimensiones.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 border border-sky-300 dark:border-sky-700 hover:border-sky-500 hover:shadow-md transition">
          <span>📘 NNA Sec. 1 (General y Dimensiones)</span>
          <span class="text-[10px] opacity-70">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC02_Limitaciones_Operacionales.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 border border-sky-300 dark:border-sky-700 hover:border-sky-500 hover:shadow-md transition">
          <span>📘 NNA Sec. 2 (Limitaciones y Flaps 30°)</span>
          <span class="text-[10px] opacity-70">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC07_Descripcion_de_Sistemas_Celula_y_Flaps.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-white dark:bg-slate-900 text-sky-600 dark:text-sky-400 border border-sky-300 dark:border-sky-700 hover:border-sky-500 hover:shadow-md transition">
          <span>📘 NNA Sec. 7 (Sistemas, Flaps y Tren)</span>
          <span class="text-[10px] opacity-70">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-OXV/EC-OXV_POH-SEC02_Descripcion_y_Flaps_40_Grados.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-sky-500 hover:shadow-md transition">
          <span>📗 OXV Sec. 2 (Flaps 40°)</span>
          <span class="text-[10px] opacity-70">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-OXV/EC-OXV_POH-SEC04_Limitaciones_Operacionales.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-sky-500 hover:shadow-md transition">
          <span>📗 OXV Sec. 4 (Limitaciones)</span>
          <span class="text-[10px] opacity-70">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-OXT/EC-OXT_SUPL-TAE-SEC02_Limitaciones_Motor_y_Prohibicion_Barrenas.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 border border-rose-300 dark:border-rose-800 hover:border-rose-500 hover:shadow-md transition">
          <span>📙 OXT Supl. Sec. 2 (Prohibición Barrena)</span>
          <span class="text-[10px] opacity-70">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-NNX/EC-NNX_SUPL-TAE-SEC02_Limitaciones_Motor_y_Prohibicion_Barrenas.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-medium bg-white dark:bg-slate-900 text-rose-600 dark:text-rose-400 border border-rose-300 dark:border-rose-800 hover:border-rose-500 hover:shadow-md transition">
          <span>📕 NNX Supl. Sec. 2 (Prohibición Barrena)</span>
          <span class="text-[10px] opacity-70">↗</span>
        </a>
      </div>

      <!-- Enlaces a Manuales Completos & Hojas de Carga -->
      <div class="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-200 dark:border-slate-700/60 text-[11px]">
        <span class="text-slate-500 dark:text-slate-400 font-semibold">Tomos completos:</span>
        <a href="/manuals/cessna/poh-ec-nna.pdf" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 underline hover:text-sky-500">POH NNA Completo ↗</a>
        <span class="text-slate-300 dark:text-slate-600">•</span>
        <a href="/manuals/cessna/poh-ec-oxv.pdf" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 underline hover:text-sky-500">POH OXV Completo ↗</a>
        <span class="text-slate-300 dark:text-slate-600">•</span>
        <a href="/manuals/cessna/poh-ec-nnx.pdf" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 underline hover:text-sky-500">POH NNX Completo ↗</a>
        <span class="text-slate-300 dark:text-slate-600">•</span>
        <a href="/manuals/cessna/suplementos-ec-oxt.pdf" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 underline hover:text-sky-500">Supl. OXT Completo ↗</a>
        <span class="text-slate-300 dark:text-slate-600">•</span>
        <a href="/manuals/cessna/loadsheet-ec-nna.pdf" target="_blank" rel="noopener noreferrer" class="text-slate-600 dark:text-slate-300 underline hover:text-sky-500">⚖️ F.OPS.04.NNA ↗</a>
        <span class="text-slate-300 dark:text-slate-600">•</span>
        <a href="/manuals/cessna/loadsheet-ec-nnx.pdf" target="_blank" rel="noopener noreferrer" class="text-slate-600 dark:text-slate-300 underline hover:text-sky-500">⚖️ F.OPS.04.NNX ↗</a>
      </div>
    </div>
  </div>

  <!-- Bloque 1: Identificación y Matrículas de la Flota -->
  <section class="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block"></span>
      1.1 Flota Cessna 172 Blue Team y Especificaciones por Matrícula
    </h2>
    
    <!-- Diagrama Técnico 1.1: Geometría Tres Vistas y Dimensiones Principales (POH C172N Fig. 1-1) -->
    <div class="my-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-sky-500/30 shadow-md">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div class="flex items-center gap-2">
          <span class="p-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-bold">FIG. 1-1</span>
          <div>
            <h3 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Diagrama Oficial: Geometría y Dimensiones Principales C172</h3>
            <span class="text-[10px] text-slate-500 dark:text-slate-400">Datos certificados POH Cessna 172N / Reims F172 (Escala técnica proporcional)</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            Envergadura: 10.97 m (36' 0")
          </span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            Longitud: 8.20 m (26' 11")
          </span>
        </div>
      </div>

      <!-- SVG Tres Vistas -->
      <div class="w-full py-2 overflow-x-auto">
        <svg viewBox="0 0 900 360" class="w-full min-w-[700px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7" />
            </marker>
            <marker id="arrow-amber" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#d97706" />
            </marker>
            <linearGradient id="planeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0284c7" stop-opacity="0.15" />
              <stop offset="100%" stop-color="#0369a1" stop-opacity="0.25" />
            </linearGradient>
          </defs>

          <!-- Cuadrícula técnica sutil de fondo -->
          <pattern id="grid1" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" stroke-opacity="0.04" stroke-width="1" />
          </pattern>
          <rect width="900" height="360" fill="url(#grid1)" />

          <!-- ================= VISTA PLANTA (SUPERIOR) ================= -->
          <g transform="translate(10, 20)">
            <text x="210" y="22" text-anchor="middle" class="fill-slate-500 dark:fill-slate-400 text-[11px] font-bold uppercase tracking-wider">Vista en Planta (Top View)</text>
            
            <!-- Alas -->
            <polygon points="190,55 230,55 385,82 385,115 230,110 190,110 35,115 35,82" fill="url(#planeGrad)" stroke="#0284c7" stroke-width="2" stroke-linejoin="round"/>
            <!-- Líneas de flaps y alerones -->
            <line x1="85" y1="108" x2="190" y2="108" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,2" />
            <line x1="230" y1="108" x2="335" y2="108" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,2" />
            <line x1="35" y1="105" x2="85" y2="105" stroke="#0284c7" stroke-width="1.5" />
            <line x1="335" y1="105" x2="385" y2="105" stroke="#0284c7" stroke-width="1.5" />
            <text x="137" y="124" text-anchor="middle" class="fill-sky-600 dark:fill-sky-400 text-[9px] font-semibold">Flap Izq</text>
            <text x="282" y="124" text-anchor="middle" class="fill-sky-600 dark:fill-sky-400 text-[9px] font-semibold">Flap Der</text>
            <text x="60" y="124" text-anchor="middle" class="fill-slate-500 text-[9px]">Alerón L</text>
            <text x="360" y="124" text-anchor="middle" class="fill-slate-500 text-[9px]">Alerón R</text>

            <!-- Fuselaje -->
            <path d="M 210,38 C 218,38 226,60 226,105 L 223,240 C 223,260 216,285 210,290 C 204,285 197,260 197,240 L 194,105 C 194,60 202,38 210,38 Z" fill="url(#planeGrad)" stroke="#0284c7" stroke-width="2" />
            <!-- Cabina parabrisas -->
            <polygon points="200,85 220,85 223,120 197,120" fill="#38bdf8" fill-opacity="0.3" stroke="#0284c7" stroke-width="1" />
            <!-- Hélice Tripala MT-Propeller -->
            <ellipse cx="210" cy="38" rx="8" ry="4" fill="#0f172a" />
            <line x1="210" y1="38" x2="210" y2="12" stroke="#d97706" stroke-width="3" stroke-linecap="round" />
            <line x1="210" y1="38" x2="187" y2="51" stroke="#d97706" stroke-width="3" stroke-linecap="round" />
            <line x1="210" y1="38" x2="233" y2="51" stroke="#d97706" stroke-width="3" stroke-linecap="round" />
            <circle cx="210" cy="38" r="3" fill="#fbbf24" />

            <!-- Estabilizador Horizontal y Timón Profundidad -->
            <polygon points="160,270 260,270 270,292 150,292" fill="url(#planeGrad)" stroke="#0284c7" stroke-width="2" stroke-linejoin="round" />
            <line x1="152" y1="285" x2="268" y2="285" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="3,2" />

            <!-- Cota Envergadura Alar -->
            <line x1="35" y1="42" x2="385" y2="42" stroke="#0284c7" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
            <line x1="35" y1="48" x2="35" y2="36" stroke="#0284c7" stroke-width="1" />
            <line x1="385" y1="48" x2="385" y2="36" stroke="#0284c7" stroke-width="1" />
            <rect x="155" y="32" width="110" height="18" rx="4" class="fill-white dark:fill-slate-900" stroke="#0284c7" stroke-width="1" />
            <text x="210" y="45" text-anchor="middle" class="fill-sky-600 dark:fill-sky-400 text-[10px] font-bold">36' 0" (10.97 m)</text>

            <!-- Cota Longitud Total -->
            <line x1="15" y1="12" x2="15" y2="290" stroke="#0284c7" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
            <line x1="10" y1="12" x2="25" y2="12" stroke="#0284c7" stroke-width="1" />
            <line x1="10" y1="290" x2="25" y2="290" stroke="#0284c7" stroke-width="1" />
            <g transform="translate(10, 150) rotate(-90)">
              <rect x="-55" y="-10" width="110" height="18" rx="4" class="fill-white dark:fill-slate-900" stroke="#0284c7" stroke-width="1" />
              <text x="0" y="3" text-anchor="middle" class="fill-sky-600 dark:fill-sky-400 text-[10px] font-bold">26' 11" (8.20 m)</text>
            </g>

            <!-- Ancho Estabilizador Cota -->
            <line x1="150" y1="310" x2="270" y2="310" stroke="#0284c7" stroke-width="1" marker-start="url(#arrow)" marker-end="url(#arrow)" />
            <text x="210" y="325" text-anchor="middle" class="fill-slate-500 dark:fill-slate-400 text-[9px]">Estabilizador: 11' 4" (3.45 m)</text>
          </g>

          <!-- ================= VISTA PERFIL (LATERAL) ================= -->
          <g transform="translate(450, 20)">
            <text x="210" y="22" text-anchor="middle" class="fill-slate-500 dark:fill-slate-400 text-[11px] font-bold uppercase tracking-wider">Vista Lateral (Side View)</text>
            
            <!-- Fuselaje Perfil -->
            <path d="M 40,118 C 55,108 80,105 110,105 L 170,105 C 190,80 230,80 270,105 L 340,115 C 365,120 375,123 385,125 L 385,115 L 375,65 C 372,55 365,55 358,55 L 345,75 L 340,125 L 110,135 C 75,135 50,130 40,118 Z" fill="url(#planeGrad)" stroke="#0284c7" stroke-width="2" stroke-linejoin="round" />
            
            <!-- Cabina Cristal lateral -->
            <path d="M 125,105 L 165,88 L 220,88 L 210,118 L 125,118 Z" fill="#38bdf8" fill-opacity="0.3" stroke="#0284c7" stroke-width="1" />
            <line x1="165" y1="88" x2="165" y2="118" stroke="#0284c7" stroke-width="1" />

            <!-- Ala Perfil montada alta -->
            <path d="M 130,85 C 145,78 200,80 235,90 L 130,85 Z" fill="#0284c7" fill-opacity="0.4" stroke="#0284c7" stroke-width="1.5" />
            <!-- Montante alar (Wing Strut) -->
            <line x1="180" y1="88" x2="185" y2="132" stroke="#0369a1" stroke-width="2.5" stroke-linecap="round" />
            <text x="215" y="102" class="fill-sky-700 dark:fill-sky-300 text-[9px] font-semibold">Montante Alar</text>

            <!-- Tren de Aterrizaje -->
            <!-- Tren Principal de ballesta de acero -->
            <line x1="190" y1="133" x2="198" y2="168" stroke="#334155" stroke-width="3" stroke-linecap="round" />
            <circle cx="199" cy="172" r="8" fill="#1e293b" stroke="#64748b" stroke-width="2" />
            <text x="212" y="172" class="fill-slate-600 dark:fill-slate-300 text-[9px] font-bold">Tren Principal</text>

            <!-- Tren de Morro Oleoneumático -->
            <line x1="72" y1="128" x2="75" y2="168" stroke="#334155" stroke-width="3" stroke-linecap="round" />
            <!-- Vástago cromado visible -->
            <line x1="74" y1="152" x2="74.5" y2="161" stroke="#38bdf8" stroke-width="2" />
            <circle cx="76" cy="172" r="7" fill="#1e293b" stroke="#64748b" stroke-width="2" />
            <text x="50" y="195" text-anchor="middle" class="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold">Puntal Morro</text>

            <!-- Hélice Frontal Perfil -->
            <line x1="36" y1="80" x2="36" y2="155" stroke="#d97706" stroke-width="3" stroke-linecap="round" />
            <circle cx="38" cy="118" r="5" fill="#0f172a" />
            
            <!-- Cota de Altura Total -->
            <line x1="410" y1="55" x2="410" y2="180" stroke="#0284c7" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
            <line x1="400" y1="55" x2="415" y2="55" stroke="#0284c7" stroke-width="1" />
            <line x1="400" y1="180" x2="415" y2="180" stroke="#0284c7" stroke-width="1" />
            <g transform="translate(425, 118) rotate(90)">
              <rect x="-45" y="-10" width="90" height="18" rx="4" class="fill-white dark:fill-slate-900" stroke="#0284c7" stroke-width="1" />
              <text x="0" y="3" text-anchor="middle" class="fill-sky-600 dark:fill-sky-400 text-[10px] font-bold">8' 9.5" (2.68 m)</text>
            </g>

            <!-- Distancia entre Ejes (Wheelbase) -->
            <line x1="76" y1="183" x2="199" y2="183" stroke="#d97706" stroke-width="1.5" marker-start="url(#arrow-amber)" marker-end="url(#arrow-amber)" />
            <text x="137" y="197" text-anchor="middle" class="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold">Batalla: 5' 5" (1.65 m)</text>

            <!-- ================= VISTA FRONTAL (ESQUEMA TREN Y VÍA) ================= -->
            <g transform="translate(30, 220)">
              <text x="180" y="15" text-anchor="middle" class="fill-slate-500 dark:fill-slate-400 text-[10px] font-bold uppercase tracking-wider">Vía del Tren Principal (Front View)</text>
              <!-- Arco fuselaje frontal -->
              <ellipse cx="180" cy="50" rx="30" ry="24" fill="url(#planeGrad)" stroke="#0284c7" stroke-width="1.5" />
              <!-- Alas frontales con diedro 1°30' -->
              <line x1="60" y1="36" x2="180" y2="40" stroke="#0284c7" stroke-width="2.5" />
              <line x1="180" y1="40" x2="300" y2="36" stroke="#0284c7" stroke-width="2.5" />
              <!-- Montantes -->
              <line x1="100" y1="38" x2="165" y2="58" stroke="#0369a1" stroke-width="2" />
              <line x1="260" y1="38" x2="195" y2="58" stroke="#0369a1" stroke-width="2" />
              <!-- Patas de tren principal -->
              <line x1="165" y1="60" x2="130" y2="92" stroke="#334155" stroke-width="3" stroke-linecap="round" />
              <line x1="195" y1="60" x2="230" y2="92" stroke="#334155" stroke-width="3" stroke-linecap="round" />
              <circle cx="128" cy="94" r="6" fill="#1e293b" />
              <circle cx="232" cy="94" r="6" fill="#1e293b" />
              <!-- Rueda morro central -->
              <line x1="180" y1="65" x2="180" y2="90" stroke="#64748b" stroke-width="2" />
              <circle cx="180" cy="94" r="5" fill="#1e293b" />
              <!-- Cota de Vía (Wheel Track) -->
              <line x1="128" y1="106" x2="232" y2="106" stroke="#0284c7" stroke-width="1.5" marker-start="url(#arrow)" marker-end="url(#arrow)" />
              <rect x="140" y="112" width="80" height="16" rx="3" class="fill-white dark:fill-slate-900" stroke="#0284c7" stroke-width="1" />
              <text x="180" y="123" text-anchor="middle" class="fill-sky-600 dark:fill-sky-400 text-[9px] font-bold">Vía: 8' 4" (2.54 m)</text>
            </g>
          </g>
        </svg>
      </div>

      <div class="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span>Fuente: POH Cessna 172N Sección 1 (Pág. 4, Figura 1-1 "Principal Dimensions").</span>
        <span class="font-medium text-sky-600 dark:text-sky-400">Hélice Tripala MT-Propeller: Diámetro 1.87 m (MTV-6-A-187-129)</span>
      </div>
    </div>

    <p class="text-sm leading-relaxed mb-3">
      Toda la flota de Cessna 172 de <strong>Blue Team Flight School</strong> está compuesta por aeronaves certificadas bajo normativa EASA y propulsadas exclusivamente por motores <strong>Continental Turbo Diésel common rail (CD-135 y CD-155)</strong> con combustible <strong>JET A-1</strong> y hélice monomando tripala <strong>MT-Propeller</strong> de paso variable gobernada por FADEC dual.
    </p>

    <!-- Tabla Comparativa Oficial de la Flota (4 Manuales POH / Suplementos) -->
    <div class="overflow-x-auto my-3">
      <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-700 rounded-lg">
        <thead class="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-200 uppercase font-semibold">
          <tr>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Matrícula</th>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Modelo Célula POH</th>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Motor Diésel / Suplemento</th>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Recorrido Flaps</th>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Masa y Centrado (W&B)</th>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Hélice y FADEC</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr class="hover:bg-sky-500/5">
            <td class="p-2.5 font-bold text-sky-600 dark:text-sky-400">EC-OXT</td>
            <td class="p-2.5">Reims/Cessna F172M (s/n 1095)</td>
            <td class="p-2.5">CD-155 (155 HP / TAE 125-02-99)</td>
            <td class="p-2.5 font-mono font-bold text-sky-600 dark:text-sky-400">0° - 40° (4 pos.)</td>
            <td class="p-2.5">Hoja F.OPS.04 vigente</td>
            <td class="p-2.5">MT-Propeller tripala / FADEC dual</td>
          </tr>
          <tr class="hover:bg-sky-500/5">
            <td class="p-2.5 font-bold text-sky-600 dark:text-sky-400">EC-OXV</td>
            <td class="p-2.5">Reims/Cessna F172K (s/n 0740)</td>
            <td class="p-2.5">CD-135 / CD-155 (TAE 125-02-114)</td>
            <td class="p-2.5 font-mono font-bold text-sky-600 dark:text-sky-400">0° - 40° (4 pos.)</td>
            <td class="p-2.5">Hoja F.OPS.04 vigente</td>
            <td class="p-2.5">MT-Propeller tripala / FADEC dual</td>
          </tr>
          <tr class="hover:bg-sky-500/5">
            <td class="p-2.5 font-bold text-sky-600 dark:text-sky-400">EC-NNA</td>
            <td class="p-2.5">Cessna 172N (Reims F172N)</td>
            <td class="p-2.5">CD-155 (155 HP / TAE 125-02-114)</td>
            <td class="p-2.5 font-mono font-bold text-amber-500">0° - 30° (3 pos.)</td>
            <td class="p-2.5">
              <a href="/manuals/cessna/loadsheet-ec-nna.pdf" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 font-semibold underline hover:text-sky-500">
                F.OPS.04.NNA ↗
              </a>
            </td>
            <td class="p-2.5">MT-Propeller tripala / FADEC dual</td>
          </tr>
          <tr class="hover:bg-sky-500/5">
            <td class="p-2.5 font-bold text-sky-600 dark:text-sky-400">EC-NNX</td>
            <td class="p-2.5">Reims/Cessna F172 (Serie F-M)</td>
            <td class="p-2.5">CD-135 (TAE 125-01) / CD-155</td>
            <td class="p-2.5 font-mono font-bold text-sky-600 dark:text-sky-400">0° - 40° (4 pos.)</td>
            <td class="p-2.5">
              <a href="/manuals/cessna/loadsheet-ec-nnx.pdf" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 font-semibold underline hover:text-sky-500">
                F.OPS.04.NNX ↗
              </a>
            </td>
            <td class="p-2.5">MT-Propeller tripala / FADEC dual</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Aclaración Operacional sobre Hojas de Carga y Centrado -->
    <div class="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-xs text-slate-700 dark:text-slate-300 space-y-1.5">
      <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
        <span>⚖️</span>
        <span>Aclaración Operacional — Masa y Centrado Individual (W&B)</span>
      </div>
      <p class="leading-relaxed">
        Los pesos en vacío (<strong>BEW</strong>) y sus brazos de palanca <strong>no constituyen una diferencia fija de modelo o tipo</strong>; son datos propios y exclusivos de cada célula concreta, determinados individualmente en pesaje oficial de taller y plasmados en su respectiva hoja de carga <strong>F.OPS.04</strong>.
      </p>
      <p class="leading-relaxed text-[11px] text-slate-500 dark:text-slate-400">
        <em>Ejemplos reales de la flota Blue Team:</em> la hoja <a href="/manuals/cessna/loadsheet-ec-nna.pdf" target="_blank" rel="noopener noreferrer" class="font-semibold underline text-sky-600 dark:text-sky-400"><code>F.OPS.04.NNA</code> ↗</a> (EC-NNA) registra un BEW de <strong>755.44 kg</strong> con brazo de <strong>1.042 m</strong> (momento 787.23 kg·m), mientras que la <a href="/manuals/cessna/loadsheet-ec-nnx.pdf" target="_blank" rel="noopener noreferrer" class="font-semibold underline text-sky-600 dark:text-sky-400"><code>F.OPS.04.NNX</code> ↗</a> (EC-NNX) registra un BEW de <strong>795.83 kg</strong> con brazo de <strong>1.026 m</strong> (momento 816.05 kg·m). En cada vuelo el alumno o tripulante al mando debe consultar la hoja F.OPS.04 específica de la aeronave asignada.
      </p>
    </div>

    <!-- Recuadro Comparativo Flota 1.1 -->
    <div class="mt-3 p-3.5 rounded-xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/20 text-xs space-y-2">
      <div class="flex items-center gap-2 font-bold text-sky-700 dark:text-sky-300">
        <span>✈️</span>
        <span class="uppercase tracking-wider">Particularidades de Flota — Célula y Modelos (EC-OXT · EC-OXV · EC-NNA · EC-NNX)</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-300">
        <div>• <strong>EC-OXT:</strong> Reims F172M (1974). Célula europea construida bajo licencia Reims Aviation, fuselaje semimonocasco con protección anticorrosión integral.</div>
        <div>• <strong>EC-OXV:</strong> Reims F172K (1970). Célula clásica Reims con tren principal tubular de acero y bancada motor adaptada para STC TAE 125.</div>
        <div>• <strong>EC-NNA:</strong> Cessna 172N (1978). Variante 172N de Wichita con sistema eléctrico base de 28V y pre-instalación de fábrica para menor arrastre inducido.</div>
        <div>• <strong>EC-NNX:</strong> Reims F172 (Serie F-M). Homologada con STC Continental CD-135 / CD-155 y hélice tripala MT-Propeller MTV-6-A-187-129.</div>
      </div>
      <!-- Referencias al Manual -->
      <div class="pt-2 border-t border-sky-500/20 flex flex-wrap items-center gap-2 text-[11px]">
        <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">📖 Referencias POH (Sección directa):</span>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC01_General_y_Dimensiones.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800/60 hover:bg-sky-100 transition shadow-sm">
          <span>POH C172N Sec. 1 (General y Dimensiones)</span>
          <span class="text-[10px]">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_SUPL-TAE-SEC01_General_Motor_Diesel.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800/60 hover:bg-sky-100 transition shadow-sm">
          <span>Supl. TAE 125 Sec. 1 (Planta Motriz)</span>
          <span class="text-[10px]">↗</span>
        </a>
        <a href="/manuals/cessna/poh-ec-nna.pdf#page=4" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-sky-600 underline text-[10px] ml-1">
          (Ver en manual completo)
        </a>
      </div>
    </div>
  </section>

  <!-- Bloque 2: Célula y Superficies de Mando -->
  <section class="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block"></span>
      1.2 Célula, Superficies Primarias y Flaps Eléctricos
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div class="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 class="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <span>🛠️ Estructura y Mandos Primarios</span>
        </h3>
        <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
          <li><strong>Estructura alar:</strong> Monoplano de ala alta afianzada mediante un montante simple a cada lado. Construcción totalmente metálica de aleación de aluminio semimonocasco.</li>
          <li><strong>Alerones convencionales:</strong> Tipo diferencial Frise accionados mecánicamente por cables y poleas. El alerón que asciende deflexiona más para contrarrestar la guiñada adversa.</li>
          <li><strong>Timón de profundidad (Elevador):</strong> Unido al estabilizador horizontal, accionado desde los cuernos de mando.</li>
          <li><strong>Compensador mecánico (Trim Tab):</strong> Ubicado en el timón de profundidad derecho, operable desde cabina mediante la rueda vertical del pedestal central con indicador analógico de despegue (Takeoff).</li>
          <li><strong>Timón de dirección (Rudder):</strong> Accionado por cables conectados directamente a los pedales de cabina.</li>
        </ul>
      </div>

      <div class="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-xs uppercase tracking-wider text-sky-600 dark:text-sky-400">
            <span>📐 Flaps Ranurados Eléctricos (Slotted)</span>
          </h3>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            Diferencia entre Modelos
          </span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
          Los flaps son de tipo ranurado (<em>slotted</em>), accionados por un motor eléctrico con eje sinfín situado en la semiala derecha. Permiten incrementar la sustentación a baja velocidad y añadir resistencia parásita en aproximación.
        </p>

        <!-- Comparativa de Flaps entre Modelos de la Flota -->
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
            <span class="font-bold text-sky-600 dark:text-sky-400 block text-[11px]">EC-OXV, EC-OXT, EC-NNX</span>
            <span class="text-[10px] text-slate-500 block">Modelos F172K / F172M:</span>
            <span class="font-mono font-bold text-slate-800 dark:text-slate-200 text-xs mt-1 block">4 pos: 10°, 20°, 30°, 40°</span>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Máxima resistencia con 40° para aterrizajes en campos cortos.</p>
          </div>
          <div class="p-2.5 rounded-lg bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
            <span class="font-bold text-amber-600 dark:text-amber-400 block text-[11px]">EC-NNA</span>
            <span class="text-[10px] text-slate-500 block">Modelo 172N:</span>
            <span class="font-mono font-bold text-amber-600 dark:text-amber-300 text-xs mt-1 block">3 pos: 10°, 20°, 30°</span>
            <p class="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Deflexión limitada a 30° de fábrica para optimizar el ascenso en frustrada.</p>
          </div>
        </div>

        <div class="p-2 rounded bg-slate-100 dark:bg-slate-700/40 text-[11px] text-slate-600 dark:text-slate-300">
          ℹ️ <strong>Rango de velocidades de flaps:</strong> En toda la flota el flap completo está limitado a <strong>85 KIAS</strong> (Vfe). En <strong>EC-NNA</strong>, el primer punto de flap (10°) está homologado para extenderse hasta <strong>110 KIAS</strong>, facilitando la desaceleración previa al circuito de tránsito.
        </div>
      </div>
    </div>

    <!-- Diagrama Técnico 1.2: Perfil Aerodinámico y Cinemática de Flaps Ranurados (Slotted Flaps) -->
    <div class="mt-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-sky-500/30 shadow-md">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div class="flex items-center gap-2">
          <span class="p-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-bold">FIG. 7-3</span>
          <div>
            <h3 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Diagrama Oficial: Cinemática y Deflexión de Flaps Ranurados</h3>
            <span class="text-[10px] text-slate-500 dark:text-slate-400">Efecto slot de alta energía y comparativa angular: 0°-30° (EC-NNA) vs 0°-40° (EC-OXV / EC-OXT / EC-NNX)</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            NNA: Máx 30°
          </span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            OXV/OXT/NNX: Máx 40°
          </span>
        </div>
      </div>

      <div class="w-full py-2 overflow-x-auto">
        <svg viewBox="0 0 850 280" class="w-full min-w-[650px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow-flow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 2 L 8 5 L 0 8 z" fill="#38bdf8" />
            </marker>
            <linearGradient id="airfoilGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#0284c7" stop-opacity="0.08" />
            </linearGradient>
            <linearGradient id="slotFlowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8" />
              <stop offset="100%" stop-color="#0284c7" stop-opacity="0.3" />
            </linearGradient>
          </defs>

          <!-- ================= PANEL IZQUIERDO: AERODINÁMICA DEL FLAP RANURADO (SLOT) ================= -->
          <g transform="translate(10, 15)">
            <text x="210" y="20" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 text-[11px] font-bold uppercase tracking-wider">Principio Aerodinámico — Flap Ranurado (Slotted Airfoil)</text>
            
            <!-- Perfil Principal del Ala (Corte Transversal NACA 2412) -->
            <path d="M 50,110 C 60,65 140,55 240,65 C 290,70 320,82 340,95 C 330,115 315,120 295,125 C 220,130 110,135 50,110 Z" fill="url(#airfoilGrad)" stroke="#0284c7" stroke-width="2" />
            <text x="170" y="98" text-anchor="middle" class="fill-sky-800 dark:fill-sky-200 text-xs font-bold">Semiala C172 (NACA 2412)</text>
            
            <!-- Flap Ranurado en posición desplegada (20°) -->
            <path d="M 330,105 C 342,98 360,98 395,115 L 430,155 C 410,162 385,155 355,145 C 335,138 322,125 330,105 Z" fill="#0284c7" fill-opacity="0.3" stroke="#0284c7" stroke-width="2" />
            <text x="395" y="142" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 text-[10px] font-bold">Flap Ranurado</text>

            <!-- Ranura (Slot) señalizada -->
            <path d="M 305,135 C 320,128 328,112 340,100" fill="none" stroke="#38bdf8" stroke-width="3" stroke-linecap="round" marker-end="url(#arrow-flow)" />
            <path d="M 290,140 C 315,135 330,118 355,108 C 375,105 405,120 425,145" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#arrow-flow)" />
            
            <!-- Callout Ranura de Alta Energía -->
            <rect x="220" y="155" width="140" height="34" rx="6" class="fill-sky-50 dark:fill-slate-800" stroke="#0284c7" stroke-width="1" />
            <text x="290" y="169" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 text-[10px] font-bold">Ranura (Slot) de Alta Presión</text>
            <text x="290" y="181" text-anchor="middle" class="fill-slate-500 dark:fill-slate-400 text-[9px]">Retarda desprendimiento de capa límite</text>

            <!-- Flechas de flujo de aire superior e inferior -->
            <path d="M 30,85 C 80,48 180,40 280,50 C 340,58 390,85 435,130" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrow-flow)" />
            <path d="M 30,125 C 100,140 200,142 280,142" fill="none" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="5,3" />
            
            <text x="210" y="225" text-anchor="middle" class="fill-slate-600 dark:fill-slate-400 text-[10px]">
              Al extenderse, abre una tobera convergente que canaliza aire de alta energía desde el intradós hacia el extradós.
            </text>
          </g>

          <!-- Divisor Vertical -->
          <line x1="475" y1="20" x2="475" y2="245" stroke="#cbd5e1" stroke-dasharray="4,4" class="dark:stroke-slate-800" stroke-width="1.5" />

          <!-- ================= PANEL DERECHO: COMPARATIVA DE DEFLEXIÓN ANGULAR ================= -->
          <g transform="translate(490, 15)">
            <text x="175" y="20" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 text-[11px] font-bold uppercase tracking-wider">Cinemática y Recorrido de Flaps en Flota</text>

            <!-- Eje Pivote -->
            <circle cx="90" cy="110" r="6" fill="#0284c7" stroke="#0369a1" stroke-width="2" />
            <text x="90" y="95" text-anchor="middle" class="fill-slate-500 text-[9px] font-bold">Eje de Giro</text>

            <!-- Posición Flap 0° (Línea de cuerda neutra) -->
            <line x1="90" y1="110" x2="270" y2="110" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4" />
            <text x="285" y="113" class="fill-slate-500 font-mono text-[10px] font-bold">0° (UP)</text>

            <!-- Posición 10° -->
            <line x1="90" y1="110" x2="265" y2="140" stroke="#0ea5e9" stroke-width="2" />
            <circle cx="265" cy="140" r="3" fill="#0ea5e9" />
            <text x="280" y="143" class="fill-sky-600 dark:fill-sky-400 font-mono text-[10px] font-bold">10° <tspan class="text-[9px] font-normal text-slate-500">(110 kt NNA / 85 kt OXV)</tspan></text>

            <!-- Posición 20° -->
            <line x1="90" y1="110" x2="250" y2="170" stroke="#0284c7" stroke-width="2" />
            <circle cx="250" cy="170" r="3" fill="#0284c7" />
            <text x="265" y="173" class="fill-sky-700 dark:fill-sky-300 font-mono text-[10px] font-bold">20° <tspan class="text-[9px] font-normal text-slate-500">(Aprox / Campo Corto)</tspan></text>

            <!-- Posición 30° (LÍMITE EC-NNA) -->
            <line x1="90" y1="110" x2="225" y2="198" stroke="#d97706" stroke-width="2.5" />
            <circle cx="225" cy="198" r="4" fill="#d97706" />
            <rect x="238" y="190" width="105" height="17" rx="3" class="fill-amber-50 dark:fill-amber-950/40" stroke="#d97706" stroke-width="1" />
            <text x="290" y="202" text-anchor="middle" class="fill-amber-600 dark:fill-amber-400 font-mono text-[10px] font-bold">30° (MÁX EC-NNA)</text>

            <!-- Posición 40° (LÍMITE EC-OXV, EC-OXT, EC-NNX) -->
            <line x1="90" y1="110" x2="195" y2="220" stroke="#0284c7" stroke-width="2.5" />
            <circle cx="195" cy="220" r="4" fill="#0284c7" />
            <rect x="208" y="215" width="135" height="17" rx="3" class="fill-sky-50 dark:fill-sky-950/40" stroke="#0284c7" stroke-width="1" />
            <text x="275" y="227" text-anchor="middle" class="fill-sky-600 dark:fill-sky-400 font-mono text-[10px] font-bold">40° (OXV · OXT · NNX)</text>

            <!-- Sector de Ángulo -->
            <path d="M 230,110 A 140 140 0 0 1 180,205" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2" />

            <text x="175" y="255" text-anchor="middle" class="fill-slate-500 text-[10px]">
              Motor eléctrico con eje sinfín en semiala derecha accionado por switch selector de consola.
            </text>
          </g>
        </svg>
      </div>

      <div class="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span>Fuente: POH Cessna 172N / Reims F172 Sección 7 ("Wing Flap System & Kinematics").</span>
        <span class="font-medium text-amber-600 dark:text-amber-400">Vfe: 85 KIAS (Flap Completo) · EC-NNA Flap 10° autorizado hasta 110 KIAS</span>
      </div>
    </div>

    <!-- Recuadro Comparativo Flota 1.2 -->
    <div class="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/20 text-xs space-y-2">
      <div class="flex items-center gap-2 font-bold text-sky-700 dark:text-sky-300">
        <span>✈️</span>
        <span class="uppercase tracking-wider">Particularidades de Flota — Mandos de Vuelo y Flaps (EC-OXT · EC-OXV · EC-NNA · EC-NNX)</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-300">
        <div>• <strong>EC-OXT, EC-OXV, EC-NNX (4 posiciones):</strong> Flaps con selector de 4 muescas mecánicas (10°, 20°, 30°, 40°). Vfe = 85 KIAS aplicable a cualquier grado de extensión. La posición de 40° aporta un gran coeficiente de resistencia para descensos pronunciados sin incremento de velocidad.</div>
        <div>• <strong>EC-NNA (3 posiciones):</strong> Flaps con recorrido limitado a 30° (10°, 20°, 30°). Vfe = 110 KIAS para flap 10° y 85 KIAS para 20°-30°. La ausencia de 40° previene pérdidas excesivas de gradiente de ascenso ante frustradas inadvertidas.</div>
      </div>
      <!-- Referencias al Manual -->
      <div class="pt-2 border-t border-sky-500/20 flex flex-wrap items-center gap-2 text-[11px]">
        <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">📖 Referencias POH (Sección directa):</span>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC07_Descripcion_de_Sistemas_Celula_y_Flaps.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800/60 hover:bg-sky-100 transition shadow-sm">
          <span>General: POH C172N Sec. 7 (Flight Controls & Flaps)</span>
          <span class="text-[10px]">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC02_Limitaciones_Operacionales.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-300 dark:border-amber-800/60 hover:bg-amber-100 transition shadow-sm">
          <span>EC-NNA: POH Sec. 2 (Flaps 30° y 110 KIAS)</span>
          <span class="text-[10px]">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-OXV/EC-OXV_POH-SEC02_Descripcion_y_Flaps_40_Grados.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-sky-500 transition shadow-sm">
          <span>EC-OXV: POH F172K Sec. 2 (Flaps 40°)</span>
          <span class="text-[10px]">↗</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Bloque 3: Tren de Aterrizaje y Frenos -->
  <section class="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block"></span>
      1.3 Tren de Aterrizaje, Dirección de Morro y Sistema de Frenos
    </h2>

    <!-- Diagrama Técnico 1.3: Tren de Morro Oleoneumático, Amortiguador de Bamboleo y Cinemática de Dirección -->
    <div class="my-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-amber-500/30 shadow-md">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div class="flex items-center gap-2">
          <span class="p-1.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold">FIG. 7-4</span>
          <div>
            <h3 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Diagrama Oficial: Esquema Funcional del Tren de Morro y Dirección</h3>
            <span class="text-[10px] text-slate-500 dark:text-slate-400">Puntal oleoneumático (MIL-H-5606), amortiguador de bamboleo (shimmy damper) y ángulos de giro</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            Extensión: 2-3 Dedos (~5 cm)
          </span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            Giro: 10° Pedales / 30° Frenos
          </span>
        </div>
      </div>

      <div class="w-full py-2 overflow-x-auto">
        <svg viewBox="0 0 860 320" class="w-full min-w-[700px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow-amber2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#d97706" />
            </marker>
            <marker id="arrow-sky2" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7" />
            </marker>
            <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#94a3b8" />
              <stop offset="30%" stop-color="#f8fafc" />
              <stop offset="70%" stop-color="#cbd5e1" />
              <stop offset="100%" stop-color="#64748b" />
            </linearGradient>
            <linearGradient id="fluidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#ef4444" stop-opacity="0.8" />
              <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.9" />
            </linearGradient>
          </defs>

          <!-- ================= PANEL IZQUIERDO: SECCIÓN DEL PUNTAL OLEONEUMÁTICO ================= -->
          <g transform="translate(20, 15)">
            <text x="170" y="18" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 text-[11px] font-bold uppercase tracking-wider">Corte Técnico — Puntal Telescópico Oleoneumático</text>

            <!-- Soporte Superior al Cortafuegos -->
            <rect x="130" y="32" width="80" height="14" rx="3" fill="#334155" />
            <text x="170" y="42" text-anchor="middle" class="fill-slate-200 text-[9px] font-semibold">Anclaje Cortafuegos</text>

            <!-- Cilindro Exterior (Barril) -->
            <rect x="145" y="46" width="50" height="95" rx="4" fill="#475569" stroke="#1e293b" stroke-width="2" />
            
            <!-- Cámara de Nitrógeno / Aire a Presión -->
            <rect x="150" y="52" width="40" height="35" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1" stroke-dasharray="3,2" />
            <text x="170" y="73" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 text-[9px] font-bold">Aire / N₂ Presión</text>

            <!-- Cámara de Fluido Hidráulico MIL-H-5606 (Líquido Rojo) -->
            <rect x="150" y="87" width="40" height="48" fill="url(#fluidGrad)" />
            <text x="170" y="112" text-anchor="middle" class="fill-white text-[9px] font-black tracking-tight">MIL-H-5606</text>
            <text x="170" y="123" text-anchor="middle" class="fill-rose-100 text-[8px] font-medium">(Líquido Rojo)</text>

            <!-- Válvula de Orificio Dosificador (Metering Pin) -->
            <line x1="150" y1="87" x2="165" y2="87" stroke="#0f172a" stroke-width="2" />
            <line x1="175" y1="87" x2="190" y2="87" stroke="#0f172a" stroke-width="2" />
            <circle cx="170" cy="87" r="2.5" fill="#f8fafc" />

            <!-- Vástago Cromado Inferior Móvil (Piston Tube) -->
            <rect x="155" y="141" width="30" height="52" fill="url(#chromeGrad)" stroke="#475569" stroke-width="1.5" />

            <!-- Cota de Extensión en Prevuelo (2-3 Dedos) -->
            <line x1="200" y1="141" x2="200" y2="193" stroke="#d97706" stroke-width="2" marker-start="url(#arrow-amber2)" marker-end="url(#arrow-amber2)" />
            <line x1="188" y1="141" x2="206" y2="141" stroke="#d97706" stroke-width="1" />
            <line x1="188" y1="193" x2="206" y2="193" stroke="#d97706" stroke-width="1" />
            <rect x="210" y="155" width="125" height="24" rx="4" class="fill-amber-50 dark:fill-amber-950/60" stroke="#d97706" stroke-width="1" />
            <text x="272" y="167" text-anchor="middle" class="fill-amber-700 dark:fill-amber-300 text-[10px] font-bold">2 - 3 DEDOS (~5 cm)</text>
            <text x="272" y="176" text-anchor="middle" class="fill-slate-500 text-[8px]">Comprobación obligatoria prevuelo</text>

            <!-- Tijera de Torsión (Torque Links) que mantiene la rueda alineada -->
            <polyline points="145,120 120,145 155,170" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="145" cy="120" r="3" fill="#0f172a" />
            <circle cx="120" cy="145" r="3" fill="#0f172a" />
            <circle cx="155" cy="170" r="3" fill="#0f172a" />
            <text x="110" y="148" text-anchor="end" class="fill-slate-500 text-[9px] font-semibold">Tijera de Torsión</text>

            <!-- Horquilla Inferior y Rueda -->
            <path d="M 155,193 L 155,225 L 140,245 L 200,245 L 185,225 L 185,193 Z" fill="#475569" stroke="#1e293b" stroke-width="1.5" />
            <!-- Neumático de Morro -->
            <ellipse cx="170" cy="255" rx="30" ry="18" fill="#1e293b" stroke="#0f172a" stroke-width="2" />
            <circle cx="170" cy="255" r="9" fill="#94a3b8" stroke="#334155" stroke-width="2" />
            <text x="170" y="290" text-anchor="middle" class="fill-slate-500 text-[9px]">Presión: 26 - 31 PSI</text>
          </g>

          <!-- Divisor Vertical -->
          <line x1="380" y1="20" x2="380" y2="295" stroke="#cbd5e1" stroke-dasharray="4,4" class="dark:stroke-slate-800" stroke-width="1.5" />

          <!-- ================= PANEL DERECHO: SHIMMY DAMPER Y ÁNGULOS DE DIRECCIÓN ================= -->
          <g transform="translate(410, 15)">
            <text x="210" y="18" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 text-[11px] font-bold uppercase tracking-wider">Shimmy Damper y Cinemática de Giro</text>

            <!-- Subdiagrama A: Shimmy Damper Hidráulico -->
            <g transform="translate(20, 32)">
              <rect x="30" y="8" width="130" height="28" rx="4" fill="#334155" stroke="#1e293b" stroke-width="1.5" />
              <!-- Fluido interno amortiguador -->
              <rect x="40" y="12" width="110" height="20" fill="url(#fluidGrad)" />
              <!-- Pistón con orificio calibrado -->
              <rect x="90" y="10" width="8" height="24" fill="#cbd5e1" stroke="#475569" stroke-width="1" />
              <line x1="30" y1="22" x2="20" y2="22" stroke="#64748b" stroke-width="3" />
              <line x1="98" y1="22" x2="185" y2="22" stroke="#64748b" stroke-width="3" />
              <circle cx="18" cy="22" r="3" fill="#0f172a" />
              <circle cx="187" cy="22" r="3" fill="#0f172a" />
              <text x="95" y="47" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 text-[9px] font-bold">Amortiguador de Bamboleo (Shimmy Damper)</text>
              <text x="95" y="58" text-anchor="middle" class="fill-slate-500 text-[8px]">Previene oscilaciones violentas de alta frecuencia en despegue/toma</text>
            </g>

            <!-- Subdiagrama B: Cinemática de Dirección y Pedales -->
            <g transform="translate(20, 105)">
              <text x="200" y="15" text-anchor="middle" class="fill-slate-500 text-[10px] font-bold uppercase">Límites de Giro de la Rueda de Morro</text>

              <!-- Eje Central Neutro -->
              <line x1="200" y1="120" x2="200" y2="20" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />
              <circle cx="200" cy="120" r="6" fill="#0284c7" />

              <!-- Giro solo con Pedales (+/- 10°) -->
              <path d="M 200,120 L 175,35" stroke="#0ea5e9" stroke-width="2.5" />
              <path d="M 200,120 L 225,35" stroke="#0ea5e9" stroke-width="2.5" />
              <!-- Arco 10° -->
              <path d="M 183,55 A 70 70 0 0 1 217,55" fill="none" stroke="#0ea5e9" stroke-width="2" />
              <rect x="155" y="65" width="90" height="18" rx="3" class="fill-sky-50 dark:fill-sky-950/60" stroke="#0ea5e9" stroke-width="1" />
              <text x="200" y="77" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 font-mono text-[9px] font-bold">± 10° (Solo Pedales)</text>

              <!-- Giro con Frenado Diferencial (+/- 30°) -->
              <path d="M 200,120 L 135,45" stroke="#d97706" stroke-width="2" stroke-dasharray="3,2" />
              <path d="M 200,120 L 265,45" stroke="#d97706" stroke-width="2" stroke-dasharray="3,2" />
              <!-- Arco 30° -->
              <path d="M 155,50 A 100 100 0 0 1 245,50" fill="none" stroke="#d97706" stroke-width="2" />
              <rect x="135" y="22" width="130" height="18" rx="3" class="fill-amber-50 dark:fill-amber-950/60" stroke="#d97706" stroke-width="1" />
              <text x="200" y="34" text-anchor="middle" class="fill-amber-700 dark:fill-amber-300 font-mono text-[9px] font-bold">± 30° (Frenado Diferencial)</text>

              <!-- Varillaje elástico con muelles (Steering Bungee) -->
              <g transform="translate(10, 115)">
                <rect x="0" y="0" width="120" height="22" rx="4" class="fill-slate-100 dark:fill-slate-800" stroke="#94a3b8" stroke-width="1" />
                <text x="60" y="14" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 text-[9px] font-semibold">Varilla Elástica con Resortes</text>
              </g>
              <g transform="translate(270, 115)">
                <rect x="0" y="0" width="120" height="22" rx="4" class="fill-slate-100 dark:fill-slate-800" stroke="#94a3b8" stroke-width="1" />
                <text x="60" y="14" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 text-[9px] font-semibold">Desconexión en Vuelo (Aire)</text>
              </g>

              <text x="200" y="155" text-anchor="middle" class="fill-slate-500 text-[9px]">
                En vuelo, el puntal se extiende completamente y desacopla el varillaje de dirección para reducir la resistencia aerodinámica de los pedales.
              </text>
            </g>
          </g>
        </svg>
      </div>

      <div class="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span>Fuente: POH Cessna 172N / Reims F172 Sección 7 ("Nose Gear Strut & Steering System").</span>
        <span class="font-medium text-amber-600 dark:text-amber-400">Inspección Prevuelo: Comprobar vástago limpio sin película de aceite ni mellas</span>
      </div>
    </div>

    <div class="space-y-3 text-sm leading-relaxed">
      <p>
        El tren de aterrizaje es de tipo <strong>triciclo fijo</strong>, diseñado para soportar elevadas cargas operacionales en pistas no preparadas con mínimo mantenimiento:
      </p>
      <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300">
        <li>
          <strong>Tren Principal de Ballesta:</strong> Patas de acero cónico tubular (<em>tubular spring steel struts</em>). Absorben el impacto mediante flexión elástica estructural pura, eliminando fluidos hidráulicos y cámaras de aire propensas a fugas.
        </li>
        <li>
          <strong>Rueda de Morro Oleoneumática:</strong> Amortiguador telescópico cargado con fluido hidráulico <strong>MIL-H-5606</strong> (líquido rojo) y aire/nitrógeno a presión. En la inspección prevuelo debe comprobarse que el vástago cromado visible tenga una extensión entre <strong>2 y 3 dedos (aprox. 5 cm / 2 pulgadas)</strong>.
        </li>
        <li>
          <strong>Amortiguador de Bamboleo (Shimmy Damper):</strong> Cilindro hidráulico montado en la horquilla de morro para absorber oscilaciones violentas de alta frecuencia durante despegues y aterrizajes.
        </li>
        <li>
          <strong>Dirección en Tierra (Steering):</strong> Acoplada mecánicamente a los pedales del timón de dirección mediante varillaje elástico provisto de muelles. Permite un viraje de <strong>hasta 10° a cada lado</strong> solo con pedales, y de <strong>hasta 30° a cada lado</strong> al aplicar frenado diferencial asimétrico.
        </li>
        <li>
          <strong>Frenos Hidráulicos de Disco:</strong> Sistema hidráulico independiente para cada rueda principal, alimentado desde un depósito de líquido en el cortafuegos. Se accionan presionando con las puntas de los pies en la parte superior de los pedales.
        </li>
      </ul>
    </div>

    <!-- Recuadro Comparativo Flota 1.3 -->
    <div class="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/20 text-xs space-y-2">
      <div class="flex items-center gap-2 font-bold text-sky-700 dark:text-sky-300">
        <span>✈️</span>
        <span class="uppercase tracking-wider">Particularidades de Flota — Tren de Aterrizaje y Frenos (EC-OXT · EC-OXV · EC-NNA · EC-NNX)</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-300">
        <div>• <strong>Comunalidad Total en Amortiguación:</strong> Las cuatro aeronaves comparten el mismo tren principal de acero cónico tubular sin fluido y puntal oleoneumático de morro con líquido <strong>MIL-H-5606</strong>. Comprobación obligatoria en prevuelo de ausencia de fugas y vástago limpio de 2 a 3 dedos.</div>
        <div>• <strong>Presiones y Carenados (Wheel Pants):</strong> Presión nominal: morro 26-31 PSI / principales 29-38 PSI. En las cuatro aeronaves los carenados de ruedas pueden instalarse para crucero o retirarse para operaciones de escuela en pista no asfaltada según orden técnica de mantenimiento.</div>
      </div>
      <!-- Referencias al Manual -->
      <div class="pt-2 border-t border-sky-500/20 flex flex-wrap items-center gap-2 text-[11px]">
        <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">📖 Referencias POH (Sección directa):</span>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC07_Descripcion_de_Sistemas_Celula_y_Flaps.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800/60 hover:bg-sky-100 transition shadow-sm">
          <span>General: POH C172N Sec. 7 (Landing Gear & Brakes)</span>
          <span class="text-[10px]">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC04_Procedimientos_Normales_Prevuelo.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-sky-500 transition shadow-sm">
          <span>Inspección Prevuelo: POH C172N Sec. 4 (Nose Gear & Strut)</span>
          <span class="text-[10px]">↗</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Bloque 4: Limitaciones de Velocidad y Arcos de Anemómetro -->
  <section class="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
        1.4 Velocidades Límite y Marcaciones del Anemómetro (Examen Q7, Q8, Q9)
      </h2>
      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
        Ítem Clave Examen Oficial
      </span>
    </div>

    <!-- Diagrama Técnico 1.4: Dial Oficial del Anemómetro y Arcos de Velocidad (POH Sec. 2) -->
    <div class="my-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-red-500/30 shadow-md">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div class="flex items-center gap-2">
          <span class="p-1.5 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 font-mono text-xs font-bold">SEC. 2</span>
          <div>
            <h3 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Diagrama Oficial: Dial del Anemómetro y Código de Colores Reglamentario</h3>
            <span class="text-[10px] text-slate-500 dark:text-slate-400">Calibración en KIAS (Nudos Indicados) conforme a EASA CS-23 y POH C172</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
            Vne: 160 KIAS (Línea Roja)
          </span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            Arco Blanco: 41 - 85 KIAS
          </span>
        </div>
      </div>

      <div class="w-full py-2 overflow-x-auto">
        <svg viewBox="0 0 860 380" class="w-full min-w-[720px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="dialShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.3" />
            </filter>
            <radialGradient id="bezelGrad" cx="50%" cy="50%" r="50%">
              <stop offset="85%" stop-color="#1e293b" />
              <stop offset="96%" stop-color="#334155" />
              <stop offset="100%" stop-color="#0f172a" />
            </radialGradient>
          </defs>

          <!-- ================= PANEL IZQUIERDO: DIAL ANALÓGICO CIRCULAR DEL ANEMÓMETRO ================= -->
          <g transform="translate(190, 190)">
            <!-- Bisel exterior -->
            <circle cx="0" cy="0" r="160" fill="url(#bezelGrad)" stroke="#475569" stroke-width="4" filter="url(#dialShadow)" />
            <!-- Tornillos de fijación instrumental en panel -->
            <circle cx="-142" cy="-142" r="4" fill="#64748b" stroke="#0f172a" stroke-width="1" />
            <circle cx="142" cy="-142" r="4" fill="#64748b" stroke="#0f172a" stroke-width="1" />
            <circle cx="-142" cy="142" r="4" fill="#64748b" stroke="#0f172a" stroke-width="1" />
            <circle cx="142" cy="142" r="4" fill="#64748b" stroke="#0f172a" stroke-width="1" />

            <!-- Fondo negro de la esfera -->
            <circle cx="0" cy="0" r="140" fill="#090d16" stroke="#1e293b" stroke-width="2" />

            <!-- ================= ARCOS DE COLOR (ESCALA: 0kt = 220°, 40kt = 150°, 85kt = 40°, 128kt = -60°, 160kt = -135°) ================= -->
            
            <!-- ARCO BLANCO: 41 a 85 KIAS (Flap Operating Range) -->
            <!-- Radio 124, desde ~150° hasta ~40° -->
            <path d="M -107,62 A 124 124 0 0 1 95,79" fill="none" stroke="#f8fafc" stroke-width="10" stroke-linecap="round" />
            
            <!-- ARCO VERDE: 47 a 128 KIAS (Normal Operating Range) -->
            <!-- Radio 112, desde ~138° hasta ~ -60° -->
            <path d="M -83,75 A 112 112 0 1 1 56,-97" fill="none" stroke="#22c55e" stroke-width="9" />

            <!-- ARCO AMARILLO: 128 a 160 KIAS (Caution Range - Smooth Air Only) -->
            <!-- Radio 112, desde ~ -60° hasta ~ -135° -->
            <path d="M 56,-97 A 112 112 0 0 1 -79,-79" fill="none" stroke="#eab308" stroke-width="9" />

            <!-- LÍNEA ROJA RADIAL: 160 KIAS (Vne - Never Exceed Speed) -->
            <line x1="-80" y1="-80" x2="-130" y2="-130" stroke="#ef4444" stroke-width="6" stroke-linecap="round" />

            <!-- MARCAS Y NÚMEROS DE VELOCIDAD -->
            <!-- 40 KIAS -->
            <line x1="-115" y1="66" x2="-130" y2="75" stroke="#f8fafc" stroke-width="2.5" />
            <text x="-100" y="60" text-anchor="middle" class="fill-white font-mono text-[11px] font-bold">40</text>

            <!-- 60 KIAS -->
            <line x1="-35" y1="125" x2="-40" y2="135" stroke="#f8fafc" stroke-width="2.5" />
            <text x="-30" y="112" text-anchor="middle" class="fill-white font-mono text-[11px] font-bold">60</text>

            <!-- 80 KIAS -->
            <line x1="68" y1="105" x2="78" y2="120" stroke="#f8fafc" stroke-width="2.5" />
            <text x="60" y="94" text-anchor="middle" class="fill-white font-mono text-[11px] font-bold">80</text>

            <!-- 100 KIAS -->
            <line x1="125" y1="10" x2="137" y2="10" stroke="#f8fafc" stroke-width="2.5" />
            <text x="105" y="14" text-anchor="middle" class="fill-white font-mono text-[11px] font-bold">100</text>

            <!-- 120 KIAS -->
            <line x1="95" y1="-80" x2="105" y2="-88" stroke="#f8fafc" stroke-width="2.5" />
            <text x="80" y="-68" text-anchor="middle" class="fill-white font-mono text-[11px] font-bold">120</text>

            <!-- 140 KIAS -->
            <line x1="0" y1="-125" x2="0" y2="-138" stroke="#f8fafc" stroke-width="2.5" />
            <text x="0" y="-105" text-anchor="middle" class="fill-white font-mono text-[11px] font-bold">140</text>

            <!-- 160 KIAS -->
            <text x="-80" y="-95" text-anchor="middle" class="fill-red-400 font-mono text-[12px] font-black">160</text>

            <!-- Texto Central en Dial -->
            <text x="0" y="-30" text-anchor="middle" class="fill-slate-400 font-mono text-[9px] font-bold tracking-widest">AIRSPEED</text>
            <text x="0" y="-18" text-anchor="middle" class="fill-sky-400 font-mono text-[12px] font-black tracking-widest">KNOTS</text>
            <text x="0" y="45" text-anchor="middle" class="fill-slate-500 font-mono text-[8px]">C172 / EASA CS-23</text>

            <!-- Aguja Analógica indicando 105 KIAS (Crucero típico) -->
            <g transform="rotate(78)">
              <polygon points="-4,20 0,-120 4,20" fill="#f8fafc" stroke="#0f172a" stroke-width="1" />
              <polygon points="-2,15 0,-115 2,15" fill="#f8fafc" />
              <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#475569" stroke-width="3" />
              <circle cx="0" cy="0" r="6" fill="#0f172a" />
            </g>
          </g>

          <!-- ================= PANEL DERECHO: LEYENDA TÉCNICA Y PREGUNTAS DE EXAMEN ================= -->
          <g transform="translate(390, 25)">
            <text x="0" y="16" class="fill-slate-900 dark:fill-white text-xs font-bold uppercase tracking-wider">
              Marcación Oficial de Velocidades y Criterios EASA (POH Sec. 2)
            </text>

            <!-- Ítem 1: Vne Línea Roja -->
            <g transform="translate(0, 30)">
              <rect x="0" y="0" width="440" height="48" rx="8" class="fill-red-50 dark:fill-red-950/40" stroke="#ef4444" stroke-width="1.5" />
              <circle cx="18" cy="24" r="8" fill="#ef4444" />
              <text x="18" y="28" text-anchor="middle" class="fill-white font-mono text-[10px] font-black">!</text>
              <text x="36" y="19" class="fill-red-700 dark:fill-red-300 font-bold text-xs">Vne — 160 KIAS (Línea Roja Radial) · [Preguntas 7 y 8]</text>
              <text x="36" y="36" class="fill-slate-600 dark:fill-slate-300 text-[10px]">
                <em>"Velocidad que no se puede exceder bajo ninguna condición de vuelo"</em> (165 KCAS).
              </text>
            </g>

            <!-- Ítem 2: Arco Amarillo -->
            <g transform="translate(0, 86)">
              <rect x="0" y="0" width="440" height="48" rx="8" class="fill-amber-50 dark:fill-amber-950/40" stroke="#eab308" stroke-width="1.5" />
              <circle cx="18" cy="24" r="8" fill="#eab308" />
              <text x="36" y="19" class="fill-amber-700 dark:fill-amber-300 font-bold text-xs">Arco Amarillo — 128 a 160 KIAS (Vno a Vne)</text>
              <text x="36" y="36" class="fill-slate-600 dark:fill-slate-300 text-[10px]">
                Rango de precaución. Operar solo en aire completamente calmo (<em>smooth air</em>).
              </text>
            </g>

            <!-- Ítem 3: Arco Verde -->
            <g transform="translate(0, 142)">
              <rect x="0" y="0" width="440" height="48" rx="8" class="fill-emerald-50 dark:fill-emerald-950/40" stroke="#22c55e" stroke-width="1.5" />
              <circle cx="18" cy="24" r="8" fill="#22c55e" />
              <text x="36" y="19" class="fill-emerald-700 dark:fill-emerald-300 font-bold text-xs">Arco Verde — 47 a 128 KIAS (Vs1 a Vno)</text>
              <text x="36" y="36" class="fill-slate-600 dark:fill-slate-300 text-[10px]">
                Rango normal de operación estructural. <strong>Vs1 = 47 KIAS</strong> (pérdida limpia MTOW).
              </text>
            </g>

            <!-- Ítem 4: Arco Blanco -->
            <g transform="translate(0, 198)">
              <rect x="0" y="0" width="440" height="58" rx="8" class="fill-sky-50 dark:fill-sky-950/40" stroke="#0284c7" stroke-width="1.5" />
              <circle cx="18" cy="29" r="8" fill="#0284c7" />
              <text x="36" y="19" class="fill-sky-700 dark:fill-sky-300 font-bold text-xs">Arco Blanco — 41 a 85 KIAS (Vso a Vfe) · [Pregunta 9]</text>
              <text x="36" y="34" class="fill-slate-600 dark:fill-slate-300 text-[10px]">
                Rango con flaps extendidos. <strong>Vso = 41 KIAS</strong> (pérdida flaps 40° al ralentí).
              </text>
              <text x="36" y="48" class="fill-amber-600 dark:fill-amber-400 font-semibold text-[10px]">
                ★ Particularidad EC-NNA: Flap 10° autorizado hasta 110 KIAS (POH C172N Sec. 2).
              </text>
            </g>

            <!-- Ítem 5: Va Velocidad de Maniobra -->
            <g transform="translate(0, 264)">
              <rect x="0" y="0" width="440" height="48" rx="8" class="fill-purple-50 dark:fill-purple-950/40" stroke="#a855f7" stroke-width="1.5" />
              <circle cx="18" cy="24" r="8" fill="#a855f7" />
              <text x="36" y="19" class="fill-purple-700 dark:fill-purple-300 font-bold text-xs">Va — Velocidad de Maniobra (No figura en el dial)</text>
              <text x="36" y="36" class="fill-slate-600 dark:fill-slate-300 text-[10px]">
                <strong>97 KIAS</strong> (a 2300 lb) / <strong>89 KIAS</strong> (a 1950 lb) / <strong>80 KIAS</strong> (a 1600 lb). Varia con el peso real.
              </text>
            </g>
          </g>
        </svg>
      </div>

      <div class="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span>Fuente: POH Cessna 172N / Reims F172 Sección 2 ("Airspeed Limitations & Airspeed Indicator Markings").</span>
        <span class="font-bold text-red-600 dark:text-red-400">Preguntas 7, 8 y 9 del Examen Oficial de Blue Team</span>
      </div>
    </div>

    <p class="text-sm leading-relaxed mb-3">
      El anemómetro del Cessna 172 indica la velocidad en nudos indicados (<strong>KIAS</strong>) y calibrados (<strong>KCAS</strong>). Todos los pilotos deben conocer con precisión matemática sus rangos reglamentarios:
    </p>

    <div class="space-y-2 text-xs">
      <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border-l-4 border-red-500 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="font-bold text-red-600 dark:text-red-400 text-sm">Vne — Never Exceed Speed (Línea Roja Radial)</span>
          <span class="font-mono font-black text-red-600 dark:text-red-400 text-base">160 KIAS / 165 KCAS</span>
        </div>
        <p class="text-slate-600 dark:text-slate-300 mt-1">
          <strong>Definición Oficial (Pregunta 7 y 8):</strong> <em>La velocidad que no se puede exceder bajo ninguna condición de vuelo</em>. Su superación compromete la integridad estructural frente a ráfagas y flutter alar.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border-l-4 border-amber-500 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="font-bold text-amber-600 dark:text-amber-400">Vno — Maximum Structural Cruising Speed (Arco Amarillo)</span>
          <span class="font-mono font-bold text-amber-600 dark:text-amber-400">128 KIAS a 160 KIAS</span>
        </div>
        <p class="text-slate-600 dark:text-slate-300 mt-1">
          Rango de precaución. Solo debe volarse en aire completamente en calma (<em>smooth air</em>) y evitando maniobras bruscas.
        </p>
      </div>

      <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border-l-4 border-emerald-500 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="font-bold text-emerald-600 dark:text-emerald-400">Vs1 a Vno — Rango Normal de Operación (Arco Verde)</span>
          <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">47 KIAS a 128 KIAS</span>
        </div>
        <p class="text-slate-600 dark:text-slate-300 mt-1">
          <strong>Vs1 = 47 KIAS:</strong> Velocidad de pérdida en configuración limpia (flaps 0° y motor al ralentí).
        </p>
      </div>

      <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border-l-4 border-sky-400 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="font-bold text-sky-600 dark:text-sky-400">Vso a Vfe — Rango de Operación con Flaps (Arco Blanco - Examen Q9)</span>
          <span class="font-mono font-bold text-sky-600 dark:text-sky-400">41 KIAS a 85 KIAS</span>
        </div>
        <p class="text-slate-600 dark:text-slate-300 mt-1">
          <strong>Vso = 41 KIAS (inicio arco blanco):</strong> Pérdida con flaps 40° al ralentí.<br/>
          <strong>Vfe = 85 KIAS (fin arco blanco):</strong> Velocidad máxima para extender flaps (Flap Extended Speed).
        </p>
      </div>

      <div class="p-3 rounded-xl bg-white dark:bg-slate-800 border-l-4 border-purple-500 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="font-bold text-purple-600 dark:text-purple-400">Va — Velocidad de Maniobra (Maneuvering Speed)</span>
          <span class="font-mono font-bold text-purple-600 dark:text-purple-400">97 KIAS (2300 lb) / 80 KIAS (1600 lb)</span>
        </div>
        <p class="text-slate-600 dark:text-slate-300 mt-1">
          Máxima velocidad para deflexión completa de mandos sin riesgo estructural. A menor peso, menor es Va (97 kt a 2300 lb, 89 kt a 1950 lb, 80 kt a 1600 lb).
        </p>
      </div>
    </div>

    <!-- Recuadro Comparativo Flota 1.4 -->
    <div class="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/20 text-xs space-y-2">
      <div class="flex items-center gap-2 font-bold text-sky-700 dark:text-sky-300">
        <span>✈️</span>
        <span class="uppercase tracking-wider">Particularidades de Flota — Anemómetro y Velocidades Operacionales (EC-OXT · EC-OXV · EC-NNA · EC-NNX)</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-300">
        <div>• <strong>Velocidades Estructurales Comunes:</strong> Vne (160 KIAS), Vno (128 KIAS), Vs1 (47 KIAS) y factores Va calculados según MTOW aplican idénticamente a las 4 aeronaves.</div>
        <div>• <strong>Diferencia Operativa de Flaps:</strong> En EC-OXT, EC-OXV y EC-NNX nunca superar 85 KIAS al extender cualquier punto de flaps. En EC-NNA, se autoriza la extensión de 10° de flaps hasta 110 KIAS para desaceleración en descenso o incorporación a circuito.</div>
      </div>
      <!-- Referencias al Manual -->
      <div class="pt-2 border-t border-sky-500/20 flex flex-wrap items-center gap-2 text-[11px]">
        <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">📖 Referencias POH (Sección directa):</span>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC02_Limitaciones_Operacionales.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800/60 hover:bg-sky-100 transition shadow-sm">
          <span>General: POH C172N Sec. 2 (Airspeed Limitations & Markings)</span>
          <span class="text-[10px]">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-OXV/EC-OXV_POH-SEC04_Limitaciones_Operacionales.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:border-sky-500 transition shadow-sm">
          <span>EC-OXV: POH F172K Sec. 4 (Airspeed Limits)</span>
          <span class="text-[10px]">↗</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Bloque 5: Factores de Carga, Pesos y Límites de Bodega -->
  <section class="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <div class="flex items-center justify-between mb-3">
      <h2 class="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
        1.5 Categorías de Vuelo, Factores de Carga y Límites de Bodega (Examen Q5, Q6, Q12)
      </h2>
      <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
        Normativa EASA
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
      <!-- Normal vs Utility -->
      <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
        <h3 class="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sky-600 dark:text-sky-400">
          ⚖️ Factores de Carga Máximos (Load Factor - Examen Q12)
        </h3>
        <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600">
          <span class="font-bold text-slate-900 dark:text-white block text-sm">Categoría Normal (MTOW: 2300 lb / 1043 kg)</span>
          <p class="text-slate-600 dark:text-slate-300 mt-1">
            <strong>Flaps ARRIBA:</strong> <span class="font-mono font-bold text-emerald-600 dark:text-emerald-400">+3.8 g / -1.52 g</span> (Pregunta 12)<br/>
            <strong>Flaps ABAJO:</strong> <span class="font-mono font-bold text-amber-500">+3.0 g / 0.0 g</span><br/>
            <em>Maniobras acrobáticas y barrenas (spins) estrictamente prohibidas.</em>
          </p>
        </div>
        <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600 space-y-2">
          <div class="flex items-center justify-between">
            <span class="font-bold text-slate-900 dark:text-white block text-sm">Categoría Utilitaria (MTOW: 2000 lb / 907 kg)</span>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              ⛔ Barrenas Prohibidas
            </span>
          </div>
          <p class="text-slate-600 dark:text-slate-300">
            <strong>Flaps ARRIBA:</strong> <span class="font-mono font-bold text-sky-600 dark:text-sky-400">+4.4 g / -1.76 g</span><br/>
            <strong>Requisitos de cabina:</strong> Asientos traseros completamente desocupados y prohibición absoluta de equipaje en bodega.<br/>
            <strong>Maniobras autorizadas:</strong> Virajes escarpados con alabeo superior a 60°, ochos perezosos (lazy eights), chandelles y pérdidas de sustentación reglamentarias.
          </p>
          <div class="p-2.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-700 dark:text-rose-300 text-[11px] leading-relaxed">
            <strong>🚫 LIMITACIÓN TAXATIVA DEL SUPLEMENTO DIESEL (POH Sec. 2):</strong><br/>
            <em>"Utility Category: Intentionally initiating spins is prohibited"</em> — Las <strong>barrenas voluntarias están TOTALMENTE PROHIBIDAS</strong> en toda la flota Cessna 172 Turbo Diésel de Blue Team, incluso en categoría utilitaria (a diferencia del modelo clásico avgas).<br/>
            Asimismo, se prohíben expresamente las <strong>maniobras con G negativa intencionada</strong> (<em>"Intentionally initiating negative G maneuvers is prohibited"</em>) y las cargas G negativas prolongadas, las cuales provocan descebe de aceite y graves problemas de control de paso en la hélice monomando y motor.
          </div>
        </div>
      </div>

      <!-- Bodega de equipaje -->
      <div class="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3">
        <h3 class="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-sky-600 dark:text-sky-400">
          📦 Limitaciones de Bodega de Equipaje (Examen Q6)
        </h3>
        <p class="text-slate-600 dark:text-slate-300">
          El compartimento de carga posterior está dividido en dos zonas estructurales claramente diferenciadas:
        </p>
        <div class="space-y-2">
          <div class="p-2.5 bg-slate-50 dark:bg-slate-700/50 rounded-lg flex items-center justify-between">
            <div>
              <span class="font-bold text-slate-900 dark:text-white block">Baggage Area 1 (Zona Delantera)</span>
              <span class="text-[10px] text-slate-500">Desde respaldos traseros hasta mamparo</span>
            </div>
            <span class="font-mono font-black text-sm text-sky-600 dark:text-sky-400">120 lb (54.4 kg)</span>
          </div>
          <div class="p-2.5 bg-slate-50 dark:bg-slate-700/50 rounded-lg flex items-center justify-between">
            <div>
              <span class="font-bold text-slate-900 dark:text-white block">Baggage Area 2 (Zona Trasera)</span>
              <span class="text-[10px] text-slate-500">Detrás del mamparo posterior</span>
            </div>
            <span class="font-mono font-black text-sm text-amber-500">50 lb (22.7 kg)</span>
          </div>
        </div>
        <div class="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-[11px]">
          ⚠️ <strong>Límite Combinado:</strong> La carga total combinada entre Área 1 y Área 2 nunca puede superar los <strong>120 lb (54.4 kg)</strong> y debe afianzarse siempre con la red de sujeción.
        </div>
      </div>
    </div>

    <!-- Diagrama Técnico 1.5A: Diagrama V-n Oficial de Factores de Carga y Envolvente de Vuelo (POH Sec. 2) -->
    <div class="mt-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-500/30 shadow-md">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div class="flex items-center gap-2">
          <span class="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold">FIG. 2-1</span>
          <div>
            <h3 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Diagrama Oficial: Envolvente de Vuelo V-n (Flight Load Factor Envelope)</h3>
            <span class="text-[10px] text-slate-500 dark:text-slate-400">Límites estructurales de G en Categoría Normal (+3.8/-1.52g) vs Utilitaria (+4.4/-1.76g) y Flaps Down (+3.0g)</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Normal: +3.8g / -1.52g
          </span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
            🚫 Prohibición Barrena
          </span>
        </div>
      </div>

      <div class="w-full py-2 overflow-x-auto">
        <svg viewBox="0 0 860 360" class="w-full min-w-[700px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="utilityGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0284c7" stop-opacity="0.18" />
              <stop offset="100%" stop-color="#0284c7" stop-opacity="0.05" />
            </linearGradient>
            <linearGradient id="normalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#10b981" stop-opacity="0.22" />
              <stop offset="100%" stop-color="#10b981" stop-opacity="0.05" />
            </linearGradient>
            <linearGradient id="flapsGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.05" />
            </linearGradient>
          </defs>

          <!-- Cuadrícula de fondo -->
          <pattern id="gridVn" width="40" height="30" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 30" fill="none" stroke="currentColor" stroke-opacity="0.05" stroke-width="1" />
          </pattern>
          <rect x="70" y="20" width="750" height="280" fill="url(#gridVn)" />

          <!-- Eje Horizontal: Velocidad KIAS (0 a 180 kt) -->
          <!-- Escala X: X = 70 + (KIAS * 4.1) -->
          <!-- 0kt=70, 40kt=234, 47kt=262, 85kt=418, 97kt=467, 128kt=594, 160kt=726 -->
          <line x1="70" y1="210" x2="820" y2="210" stroke="#64748b" stroke-width="1.5" />
          <text x="820" y="228" text-anchor="end" class="fill-slate-500 font-mono text-[10px] font-bold">KIAS →</text>

          <!-- Eje Vertical: Factor de Carga G (-2.0 a +5.0) -->
          <!-- Escala Y: G=0 es Y=210. 1g = 35px. +1g=175, +2g=140, +3g=105, +3.8g=77, +4.4g=56, -1g=245, -1.52g=263, -1.76g=272 -->
          <line x1="70" y1="20" x2="70" y2="300" stroke="#64748b" stroke-width="1.5" />
          <text x="65" y="30" text-anchor="end" class="fill-slate-500 font-mono text-[10px] font-bold">+g ↑</text>
          
          <!-- Marcas Eje G -->
          <line x1="65" y1="210" x2="70" y2="210" stroke="#64748b" stroke-width="1.5" />
          <text x="60" y="214" text-anchor="end" class="fill-slate-500 font-mono text-[9px]">0 g</text>
          
          <line x1="65" y1="175" x2="70" y2="175" stroke="#64748b" stroke-width="1.5" />
          <text x="60" y="179" text-anchor="end" class="fill-slate-500 font-mono text-[9px]">+1.0 g</text>
          
          <line x1="65" y1="105" x2="70" y2="105" stroke="#d97706" stroke-width="1.5" />
          <text x="60" y="109" text-anchor="end" class="fill-amber-600 font-mono text-[9px] font-bold">+3.0 g</text>

          <line x1="65" y1="77" x2="70" y2="77" stroke="#10b981" stroke-width="1.5" />
          <text x="60" y="81" text-anchor="end" class="fill-emerald-600 font-mono text-[9px] font-bold">+3.8 g</text>

          <line x1="65" y1="56" x2="70" y2="56" stroke="#0284c7" stroke-width="1.5" />
          <text x="60" y="60" text-anchor="end" class="fill-sky-600 font-mono text-[9px] font-bold">+4.4 g</text>

          <line x1="65" y1="263" x2="70" y2="263" stroke="#10b981" stroke-width="1.5" />
          <text x="60" y="267" text-anchor="end" class="fill-emerald-600 font-mono text-[9px] font-bold">-1.52 g</text>

          <line x1="65" y1="272" x2="70" y2="272" stroke="#0284c7" stroke-width="1.5" />
          <text x="60" y="276" text-anchor="end" class="fill-sky-600 font-mono text-[9px] font-bold">-1.76 g</text>

          <!-- ================= POLÍGONO ENVOLVENTE CATEGORÍA UTILITARIA (+4.4g / -1.76g) ================= -->
          <!-- Curva de pérdida positiva: desde (47kt, 1g) sube parabólicamente hasta (97kt, 4.4g) -> recta hasta (160kt, 4.4g) -> baja a (160kt, 0g) -> (128kt, -1.76g) -> curva pérdida neg -->
          <path d="M 262,175 C 320,150 400,90 467,56 L 726,56 L 726,210 L 594,272 L 467,272 C 380,265 320,230 262,210 Z" fill="url(#utilityGrad)" stroke="#0284c7" stroke-width="2" stroke-dasharray="5,3" />

          <!-- ================= POLÍGONO ENVOLVENTE CATEGORÍA NORMAL (+3.8g / -1.52g) ================= -->
          <!-- Curva pérdida positiva: desde (47kt, 1g) sube hasta (92kt, 3.8g) -> recta hasta 128kt (Vno) -> decrece a 160kt (+3.0g) -> 160kt (0g) -> 128kt (-1.52g) -> curva pérdida neg -->
          <path d="M 262,175 C 310,155 380,105 447,77 L 594,77 L 726,105 L 726,210 L 594,263 L 447,263 C 370,255 310,225 262,210 Z" fill="url(#normalGrad)" stroke="#10b981" stroke-width="2.5" />

          <!-- ================= ENVOLVENTE CON FLAPS EXTENDIDOS (Vfe = 85 KIAS / +3.0g / 0g) ================= -->
          <path d="M 238,175 C 290,140 360,110 418,105 L 418,210 L 238,210 Z" fill="url(#flapsGrad)" stroke="#d97706" stroke-width="2" stroke-linecap="round" />
          <text x="330" y="150" text-anchor="middle" class="fill-amber-700 dark:fill-amber-300 font-bold text-[9px]">Flaps Down (+3.0 g / Vfe 85kt)</text>

          <!-- LÍNEAS DE VELOCIDAD VERTICALES -->
          <!-- Vs1 = 47 KIAS -->
          <line x1="262" y1="20" x2="262" y2="295" stroke="#64748b" stroke-width="1" stroke-dasharray="3,3" />
          <text x="262" y="310" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 font-mono text-[9px] font-bold">Vs1</text>
          <text x="262" y="322" text-anchor="middle" class="fill-slate-500 font-mono text-[8px]">47 kt</text>

          <!-- Vfe = 85 KIAS -->
          <line x1="418" y1="20" x2="418" y2="295" stroke="#d97706" stroke-width="1" stroke-dasharray="3,3" />
          <text x="418" y="310" text-anchor="middle" class="fill-amber-600 font-mono text-[9px] font-bold">Vfe</text>
          <text x="418" y="322" text-anchor="middle" class="fill-slate-500 font-mono text-[8px]">85 kt</text>

          <!-- Va = 97 KIAS (a 2300 lb) -->
          <line x1="467" y1="20" x2="467" y2="295" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,3" />
          <text x="467" y="310" text-anchor="middle" class="fill-purple-600 font-mono text-[9px] font-bold">Va</text>
          <text x="467" y="322" text-anchor="middle" class="fill-slate-500 font-mono text-[8px]">97 kt</text>

          <!-- Vno = 128 KIAS -->
          <line x1="594" y1="20" x2="594" y2="295" stroke="#eab308" stroke-width="1" stroke-dasharray="3,3" />
          <text x="594" y="310" text-anchor="middle" class="fill-amber-600 font-mono text-[9px] font-bold">Vno</text>
          <text x="594" y="322" text-anchor="middle" class="fill-slate-500 font-mono text-[8px]">128 kt</text>

          <!-- Vne = 160 KIAS -->
          <line x1="726" y1="20" x2="726" y2="295" stroke="#ef4444" stroke-width="2" />
          <text x="726" y="310" text-anchor="middle" class="fill-red-600 font-mono text-[10px] font-black">Vne (Línea Roja)</text>
          <text x="726" y="322" text-anchor="middle" class="fill-red-600 font-mono text-[9px] font-bold">160 kt</text>

          <!-- Labels de Áreas -->
          <rect x="490" y="85" width="130" height="22" rx="4" class="fill-emerald-100/90 dark:fill-emerald-950/80" stroke="#10b981" stroke-width="1" />
          <text x="555" y="99" text-anchor="middle" class="fill-emerald-800 dark:fill-emerald-300 font-bold text-[10px]">Normal: +3.8 g / -1.52 g</text>

          <rect x="490" y="35" width="130" height="20" rx="4" class="fill-sky-100/90 dark:fill-sky-950/80" stroke="#0284c7" stroke-width="1" />
          <text x="555" y="48" text-anchor="middle" class="fill-sky-800 dark:fill-sky-300 font-bold text-[9px]">Utility: +4.4 g / -1.76 g</text>

          <!-- Cartel Destacado de Prohibición de Barrena por STC Diésel -->
          <g transform="translate(620, 240)">
            <rect x="0" y="0" width="190" height="52" rx="6" class="fill-rose-50 dark:fill-rose-950/90" stroke="#ef4444" stroke-width="1.5" />
            <text x="95" y="16" text-anchor="middle" class="fill-rose-700 dark:fill-rose-300 font-bold text-[10px]">⛔ LIMITACIÓN STC DIÉSEL</text>
            <text x="95" y="30" text-anchor="middle" class="fill-slate-700 dark:fill-slate-200 text-[8px] font-semibold">"Intentionally initiating spins"</text>
            <text x="95" y="42" text-anchor="middle" class="fill-rose-600 dark:fill-rose-400 font-bold text-[9px]">TOTALMENTE PROHIBIDO</text>
          </g>
        </svg>
      </div>

      <div class="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span>Fuente: POH Cessna 172N Sección 2 (Pág. 13, Figura 2-1 "Flight Load Factor Envelope").</span>
        <span class="font-bold text-emerald-600 dark:text-emerald-400">Pregunta 12 del Examen Oficial de Blue Team (+3.8 g / -1.52 g)</span>
      </div>
    </div>

    <!-- Diagrama Técnico 1.5B: Distribución de Carga en Bodega y Brazos de Estación (POH Fig. 6-1) -->
    <div class="mt-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-sky-500/30 shadow-md">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 gap-2">
        <div class="flex items-center gap-2">
          <span class="p-1.5 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 font-mono text-xs font-bold">FIG. 6-1</span>
          <div>
            <h3 class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Diagrama Oficial: Compartimento de Carga y Estaciones de Fuselaje</h3>
            <span class="text-[10px] text-slate-500 dark:text-slate-400">Límites estructurales de peso y brazo (Arm / Station) según POH C172N y Hojas F.OPS.04</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20">
            Área 1: 120 lb (54.4 kg)
          </span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            Combinado: 120 lb máx
          </span>
        </div>
      </div>

      <div class="w-full py-2 overflow-x-auto">
        <svg viewBox="0 0 860 250" class="w-full min-w-[700px] h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="arrow-sta" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7" />
            </marker>
          </defs>

          <!-- Perfil esquemático de cabina y bodega -->
          <g transform="translate(30, 20)">
            <text x="400" y="15" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 text-[11px] font-bold uppercase tracking-wider">
              Distribución Longitudinal de Carga en Fuselaje (Datum Línea Cortafuegos = Estación 0.0)
            </text>

            <!-- Contorno de cabina y fuselaje -->
            <path d="M 50,140 L 100,50 L 320,50 L 520,70 L 740,110 L 740,140 L 50,140 Z" fill="#0284c7" fill-opacity="0.06" stroke="#0284c7" stroke-width="1.5" />

            <!-- Asientos Delanteros (Piloto y Copiloto - Brazo 37.0 in / 0.94 m) -->
            <rect x="180" y="70" width="40" height="55" rx="5" fill="#334155" stroke="#1e293b" stroke-width="1.5" />
            <text x="200" y="95" text-anchor="middle" class="fill-white text-[9px] font-bold">Pilotos</text>
            <text x="200" y="106" text-anchor="middle" class="fill-slate-300 text-[8px]">Sta 37"</text>

            <!-- Asientos Traseros (Pasajeros - Brazo 73.0 in / 1.85 m) -->
            <rect x="330" y="70" width="40" height="55" rx="5" fill="#475569" stroke="#1e293b" stroke-width="1.5" />
            <text x="350" y="95" text-anchor="middle" class="fill-white text-[9px] font-bold">Pax Tras.</text>
            <text x="350" y="106" text-anchor="middle" class="fill-slate-300 text-[8px]">Sta 73"</text>

            <!-- Mamparo divisorio asientos / bodega -->
            <line x1="380" y1="52" x2="380" y2="140" stroke="#0f172a" stroke-width="2" stroke-dasharray="3,2" />

            <!-- ================= BAGGAGE AREA 1 (Brazo 95.0 in / 2.41 m) ================= -->
            <rect x="390" y="65" width="130" height="70" rx="6" class="fill-sky-100/80 dark:fill-sky-950/70" stroke="#0284c7" stroke-width="2" />
            <text x="455" y="85" text-anchor="middle" class="fill-sky-800 dark:fill-sky-200 text-xs font-black">BAGGAGE AREA 1</text>
            <text x="455" y="102" text-anchor="middle" class="fill-sky-600 dark:fill-sky-400 font-mono text-sm font-black">120 lb (54.4 kg)</text>
            <text x="455" y="118" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 text-[9px]">Brazo / Station: 95.0 in (2.41 m)</text>
            <text x="455" y="129" text-anchor="middle" class="fill-slate-500 text-[8px] font-semibold">Examen Oficial [Pregunta 6]</text>

            <!-- Mamparo posterior inter-bodega -->
            <line x1="530" y1="71" x2="530" y2="140" stroke="#64748b" stroke-width="2" stroke-dasharray="3,2" />

            <!-- ================= BAGGAGE AREA 2 (Brazo 123.0 in / 3.12 m) ================= -->
            <rect x="540" y="75" width="120" height="60" rx="6" class="fill-amber-100/80 dark:fill-amber-950/70" stroke="#d97706" stroke-width="2" />
            <text x="600" y="93" text-anchor="middle" class="fill-amber-800 dark:fill-amber-200 text-xs font-black">BAGGAGE AREA 2</text>
            <text x="600" y="108" text-anchor="middle" class="fill-amber-600 dark:fill-amber-400 font-mono text-xs font-bold">50 lb (22.7 kg)</text>
            <text x="600" y="123" text-anchor="middle" class="fill-slate-600 dark:fill-slate-300 text-[9px]">Brazo / Station: 123.0 in (3.12 m)</text>

            <!-- Cota de Carga Combinada Máxima -->
            <line x1="390" y1="150" x2="660" y2="150" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow-sta)" marker-end="url(#arrow-sta)" />
            <rect x="460" y="158" width="160" height="24" rx="4" class="fill-slate-900" />
            <text x="540" y="174" text-anchor="middle" class="fill-white font-mono text-xs font-bold">MÁXIMO COMBINADO: 120 lb (54.4 kg)</text>

            <!-- Datum Referencia Cortafuegos -->
            <line x1="50" y1="35" x2="50" y2="190" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,2" />
            <text x="50" y="205" text-anchor="middle" class="fill-red-600 font-mono text-[9px] font-bold">DATUM (Sta 0.0)</text>

            <!-- Cotas de Brazo desde Datum -->
            <line x1="50" y1="185" x2="455" y2="185" stroke="#0284c7" stroke-width="1" marker-end="url(#arrow-sta)" />
            <text x="250" y="180" text-anchor="middle" class="fill-sky-700 dark:fill-sky-300 font-mono text-[9px]">Brazo Área 1 = 95.0"</text>

            <line x1="50" y1="218" x2="600" y2="218" stroke="#d97706" stroke-width="1" marker-end="url(#arrow-sta)" />
            <text x="320" y="213" text-anchor="middle" class="fill-amber-700 dark:fill-amber-300 font-mono text-[9px]">Brazo Área 2 = 123.0"</text>
          </g>
        </svg>
      </div>

      <div class="mt-2 pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
        <span>Fuente: POH Cessna 172N Sección 6 (Figura 6-1 "Loading Arrangements").</span>
        <span class="font-bold text-sky-600 dark:text-sky-400">Pregunta 6 del Examen Oficial de Blue Team (120 lb máx en Área 1)</span>
      </div>
    </div>

    <!-- Recuadro Comparativo Flota 1.5 -->
    <div class="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/20 text-xs space-y-2">
      <div class="flex items-center gap-2 font-bold text-sky-700 dark:text-sky-300">
        <span>✈️</span>
        <span class="uppercase tracking-wider">Particularidades de Flota — Categorías, Pesos y Prohibición de Barrenas (EC-OXT · EC-OXV · EC-NNA · EC-NNX)</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-300">
        <div>• <strong>Envolventes y Cargas Estándar:</strong> MTOW común (1043 kg / 2300 lb Normal y 907 kg / 2000 lb Utilitaria). Capacidades idénticas de bodega (120 lb máx) y factores +3.8g / -1.52g (Normal) y +4.4g / -1.76g (Utilitaria).</div>
        <div>• <strong>Unificación Restrictiva por STC Diésel:</strong> En las cuatro aeronaves rige sin excepción la prohibición de barrenas intencionadas y maniobras con Gs negativas forzadas, debiendo anular cualquier indicación previa del manual base avgas.</div>
      </div>
      <!-- Referencias al Manual -->
      <div class="pt-2 border-t border-sky-500/20 flex flex-wrap items-center gap-2 text-[11px]">
        <span class="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">📖 Referencias POH (Sección directa):</span>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_POH-SEC02_Limitaciones_Operacionales.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-semibold bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800/60 hover:bg-sky-100 transition shadow-sm">
          <span>General: POH C172N Sec. 2 (Pesos, Cargas y Bodega)</span>
          <span class="text-[10px]">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-NNA/EC-NNA_SUPL-TAE-SEC02_Limitaciones_Motor_y_Prohibicion_Barrenas.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800/60 hover:bg-rose-100 transition shadow-sm">
          <span>EC-NNA: Supl. Sec. 2 (Prohibición Barrena)</span>
          <span class="text-[10px]">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-OXV/EC-OXV_SUPL-TAE-SEC02_Limitaciones_Motor_y_Prohibicion_Barrenas.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800/60 hover:bg-rose-100 transition shadow-sm">
          <span>EC-OXV: Supl. Sec. 2 (Prohibición Barrena)</span>
          <span class="text-[10px]">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-OXT/EC-OXT_SUPL-TAE-SEC02_Limitaciones_Motor_y_Prohibicion_Barrenas.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800/60 hover:bg-rose-100 transition shadow-sm">
          <span>EC-OXT: Supl. Sec. 2 (Prohibición Barrena)</span>
          <span class="text-[10px]">↗</span>
        </a>
        <a href="/manuals/cessna/secciones/EC-NNX/EC-NNX_SUPL-TAE-SEC02_Limitaciones_Motor_y_Prohibicion_Barrenas.pdf" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-800/60 hover:bg-rose-100 transition shadow-sm">
          <span>EC-NNX: Supl. Sec. 2 (Prohibición Barrena)</span>
          <span class="text-[10px]">↗</span>
        </a>
      </div>
    </div>
  </section>

  <!-- Resumen de Preparación para el Examen Oficial -->
  <div class="p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 border border-sky-500/30 text-xs text-slate-700 dark:text-slate-200">
    <span class="font-bold text-sky-600 dark:text-sky-400 block mb-1 text-sm">📋 Resumen Rápido — Preguntas Oficiales de Examen y Criterios Operacionales:</span>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
      <li>✅ <strong>Pregunta 5:</strong> MTOW = 2300 lb (Normal) / 2000 lb (Utility).</li>
      <li>✅ <strong>Pregunta 6:</strong> Carga máxima Baggage Area 1 = 120 lb (54.4 kg).</li>
      <li>✅ <strong>Pregunta 7:</strong> Definición Vne = <em>Velocidad que no se puede exceder bajo ninguna condición de vuelo</em>.</li>
      <li>✅ <strong>Pregunta 8:</strong> Valor Vne = 160 KIAS (165 KCAS).</li>
      <li>✅ <strong>Pregunta 9:</strong> Arco blanco = 41 a 85 KIAS (Vso a Vfe).</li>
      <li>✅ <strong>Pregunta 12:</strong> Factores de carga Normal = +3.8 g / -1.52 g.</li>
      <li>⛔ <strong>Seguridad Operacional (POH Supl. Sec 2):</strong> Barrenas (spins) = <em>Estrictamente prohibidas en toda la flota C172 Diésel, incluso en categoría utilitaria</em>.</li>
      <li>📐 <strong>Diferencia de Flaps:</strong> EC-NNA tiene deflexión máxima de 30° (0°-30°), mientras que OXV, OXT y NNX alcanzan hasta 40° (0°-40°).</li>
    </ul>
  </div>

</div>
`
};
