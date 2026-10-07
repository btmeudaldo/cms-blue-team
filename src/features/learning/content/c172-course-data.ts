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
<!-- DIAPOSITIVA 1.1: Flota C172 Blue Team: Especificaciones Generales y Fundamentos Tecnológicos -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.1 Flota Cessna 172: Especificaciones Generales y Fundamentos Tecnológicos
    </h1>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      EASA Part-FCL.710 · Blue Team Flight School
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1 min-h-0 py-2" data-left-pct="42" style="--col-left: 42fr; --col-right: 58fr; grid-template-columns: minmax(0, 42fr) minmax(0, 58fr);">
    <!-- Columna Izquierda (5 cols / 42%): Más estrecha y perfectamente equilibrada -->
    <div class="lg:col-span-5 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3 sm:p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            📋 ESPECIFICACIONES
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Flota C172
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-1.5 gap-2">
          <!-- Un solo cuadro unificado para las especificaciones generales -->
          <div class="p-2.5 sm:p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs leading-snug">
            <div class="flex items-start gap-1.5">
              <span class="text-sm shrink-0 mt-0.5">🛩️</span>
              <div>
                <strong class="text-[#0B2E59] dark:text-sky-300">Aeronave:</strong> Cessna 172 monomotor de ala alta, 4 plazas, tren de aterrizaje triciclo fijo con amortiguación oleoneumática en morro y ballestas tubulares de acero en principales.
              </div>
            </div>

            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-1 flex items-start gap-1.5">
              <span class="text-sm shrink-0 mt-0.5">🔧</span>
              <div>
                <strong class="text-[#0B2E59] dark:text-sky-300">Planta Motriz:</strong> Continental CD-135/CD-155 (familia TAE 125 / Centurion 2.0/2.0S), con 4 cilindros en línea, ciclo diésel 4 tiempos (1991 cm³), refrigeración líquida, inyección directa Common Rail y turbo con intercooler.
                <div class="mt-0.5 font-mono text-slate-600 dark:text-slate-300 text-[11px]">
                  • CD-135: 135 HP (99 kW) a 2300 RPM de hélice<br/>
                  • CD-155: 155 HP (114 kW) a 2300 RPM de hélice
                </div>
              </div>
            </div>

            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-1 flex items-start gap-1.5">
              <span class="text-sm shrink-0 mt-0.5">⚙️</span>
              <div>
                <strong class="text-[#0B2E59] dark:text-sky-300">Hélice Tripala de Paso Variable:</strong> MT-Propeller MTV-6-A/187-129 composite, (diámetro 1,87 m) de velocidad constante con gobernador electrohidráulico controlado por el FADEC.
              </div>
            </div>

            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-1 flex items-start gap-1.5">
              <span class="text-sm shrink-0 mt-0.5">🕹️</span>
              <div>
                <strong class="text-[#0B2E59] dark:text-sky-300">Mando Monopalanca (Single Lever):</strong> Palanca de potencia para gobernar aceleración, inyección y paso de hélice 0% a 100%. Sin palancas mecánicas de mezcla ni paso.
              </div>
            </div>
          </div>

          <!-- Cuadros en 2 columnas inferiores compactos -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs leading-snug">
              <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5 text-xs">Mandos de vuelo:</strong>
              Superficies de control primarias convencionales accionadas por cables y poleas; flaps de accionamiento eléctrico 10°, 20°, 30° y 40°.
            </div>
            <div class="p-2 sm:p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-500/60 dark:border-amber-500/60 shadow-2xs leading-snug">
              <strong class="text-amber-800 dark:text-amber-300 block mb-0.5 text-xs">Combustible Exclusivo:</strong>
              <strong>JET A-1</strong> exclusivamente. Prohibido AVGAS. No utiliza ni tolera mezclas con AVGAS (destruiría los componentes de alta presión).
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (7 cols): Conceptos Clave y Tecnologías del Sistema -->
    <div class="lg:col-span-7 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            💡 TECNOLOGÍAS DEL SISTEMA
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Conceptos Clave
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-1.5 gap-2">
          <!-- Un solo cuadro unificado para FADEC y Common Rail -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 text-xs sm:text-[13px] leading-snug">
            <!-- FADEC -->
            <div>
              <div class="flex items-center justify-between">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">🧠 FADEC (Full Authority Digital Engine Control)</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600">Doble Canal (A / B)</span>
              </div>
              <p class="text-slate-600 dark:text-slate-300 mt-1 leading-snug text-xs sm:text-[12px]">
                Es el cerebro informático del motor. Monitoriza continuamente parámetros presiones, temperaturas, RPM y posición de palanca de gases, gestiona de forma automática y optimiza la dosificación de combustible, la presión del turbo y el paso de la hélice. Elimina el riesgo de sobrerrégimen y la necesidad de ajustar la mezcla manualmente a distintas altitudes o fases de vuelo. Al no usar magnetos convencionales, una <strong>Batería de Respaldo FADEC</strong> garantiza el suministro eléctrico para que el motor siga funcionando ante fallo eléctrico del avión durante un máximo de 30 minutos a través del canal A (no forzar canal B).
              </p>
            </div>

            <!-- Common Rail -->
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2">
              <div class="flex items-center justify-between">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300">💉 Common Rail e Inyección Directa</span>
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-600">&gt;1350 bar</span>
              </div>
              <p class="text-slate-600 dark:text-slate-300 mt-1 leading-snug text-xs sm:text-[12px]">
                Una bomba mecánica presuriza el combustible JET A-1 a alta presión en un conducto común (rail) y los inyectores lo pulverizan directamente en la cámara de combustión. Las bujías de precalentamiento Glow Plugs preparan el motor para el arranque elevando la temperatura, sin necesidad de cebador manual (primer) ni riesgo de ahogo.
              </p>
            </div>
          </div>

          <!-- Cuadros inferiores Turbo y Gearbox -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 block mb-0.5">🌪️ Turbo e Intercooler</span>
              <p class="text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs">
                El turbo aprovecha los gases de escape para mantener la presión de admisión en altitud evitando la pérdida de potencia de motores atmosféricos. El intercooler enfría el aire comprimido para aumentar su densidad de oxígeno.
              </p>
            </div>

            <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs leading-snug">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 block mb-0.5">⚙️ Gearbox</span>
              <p class="text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs">
                El motor gira a un régimen máximo continuo de ~3900 RPM, y mediante una relación de reducción, las revoluciones se desmultiplican a un régimen máximo de hélice de 2300 RPM. Entre el cigüeñal y la caja reductora se incorpora un embrague de fricción amortiguador para mitigar las vibraciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.2: Velocidades Notables (V-Speeds) y Anemómetro TAS -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1 shrink-0">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.2 Velocidades Notables de Operación (V-Speeds) y Anemómetro TAS
    </h1>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 2 (Limitaciones) &amp; Suplemento Continental
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1 min-h-0 py-2" data-left-pct="33" style="--col-left: 33fr; --col-right: 67fr; grid-template-columns: minmax(0, 33fr) minmax(0, 67fr);">
    <!-- Columna Izquierda (4 cols / 33%): Anemómetro C172 con TAS (Cuadro 100% Cuadrado) -->
    <div class="lg:col-span-4 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            🧭 ANEMÓMETRO C172
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Código Colores
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-around py-1 gap-2">
          <!-- Cuadro estrictamente CUADRADO (1:1) sin bandas laterales -->
          <div class="w-full aspect-square max-w-[205px] sm:max-w-[215px] mx-auto p-1 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs flex items-center justify-center overflow-hidden" style="aspect-ratio: 1 / 1;">
            <img src="/images/c172/anemometro-final.jpg" alt="Anemómetro Cessna 172 con TAS" class="w-full h-full object-cover rounded-xl shadow-inner" style="aspect-ratio: 1 / 1; width: 100%; height: 100%; object-fit: cover;">
          </div>

          <!-- Arcos de Color en una sola columna vertical separados y perfectamente alineados -->
          <div class="flex flex-col gap-1.5 p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs text-[11px] sm:text-xs">
            <div class="flex items-center justify-between py-0.5 border-b border-slate-100 dark:border-slate-700/50">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 flex items-center gap-1.5">
                <span>⚪</span> <span>Blanco:</span>
              </span>
              <span class="font-mono font-semibold text-slate-700 dark:text-slate-200">
                41-85 kt <span class="text-slate-400 font-sans text-[10px]">(Flaps)</span>
              </span>
            </div>
            <div class="flex items-center justify-between py-0.5 border-b border-slate-100 dark:border-slate-700/50">
              <span class="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                <span>🟢</span> <span>Verde:</span>
              </span>
              <span class="font-mono font-semibold text-slate-700 dark:text-slate-200">
                47-128 kt <span class="text-slate-400 font-sans text-[10px]">(Normal)</span>
              </span>
            </div>
            <div class="flex items-center justify-between py-0.5 border-b border-slate-100 dark:border-slate-700/50">
              <span class="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <span>🟡</span> <span>Amarillo:</span>
              </span>
              <span class="font-mono font-semibold text-slate-700 dark:text-slate-200">
                128-160 kt <span class="text-slate-400 font-sans text-[10px]">(Calma)</span>
              </span>
            </div>
            <div class="flex items-center justify-between py-0.5">
              <span class="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                <span>🔴</span> <span>Rojo:</span>
              </span>
              <span class="font-mono font-semibold text-slate-700 dark:text-slate-200">
                160 kt <span class="text-slate-400 font-sans text-[10px] font-normal">(Vne)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (8 cols): Espaciosa para las 8 V-Speeds + Vglide -->
    <div class="lg:col-span-8 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3.5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            ⚡ TABLA DE VELOCIDADES NOTABLES Y USO OPERACIONAL
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">
            Valores Certificados KIAS
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-1.5 gap-1.5">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
            <!-- Vso -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-mono font-black text-rose-600 dark:text-rose-400 text-xs sm:text-sm">Vso · 41 KIAS</span>
                <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Flaps 40°</span>
              </div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-[11px]">Pérdida en Aterrizaje</div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">Velocidad con flaps 40° y motor al ralentí. Base para aproximación final (1.3 Vso ≈ 60-65 KIAS).</p>
            </div>

            <!-- Vs -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-mono font-black text-slate-800 dark:text-slate-200 text-xs sm:text-sm">Vs · 47 KIAS</span>
                <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400">Flaps 0°</span>
              </div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-[11px]">Pérdida en Limpio</div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">Límite inferior del arco verde. Margen mínimo de seguridad en despegues y virajes en limpio.</p>
            </div>

            <!-- Vx -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-mono font-black text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">Vx · 59 KIAS</span>
                <span class="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">Obstáculos</span>
              </div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-[11px]">Mejor Ángulo de Ascenso</div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">Mayor ganancia de altitud en la menor distancia recorrida. Imprescindible en pistas cortas.</p>
            </div>

            <!-- Vy -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-mono font-black text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">Vy · 73 KIAS</span>
                <span class="text-[10px] font-bold text-emerald-700 dark:text-emerald-400">Ruta</span>
              </div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-[11px]">Mejor Régimen de Ascenso</div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">Máxima altitud en el menor tiempo. Ascenso estándar en ruta con óptima refrigeración motor.</p>
            </div>

            <!-- Vfe -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-mono font-black text-sky-600 dark:text-sky-400 text-xs sm:text-sm">Vfe · 85 / 110 KIAS</span>
                <span class="text-[10px] font-bold text-sky-700 dark:text-sky-400">Flaps</span>
              </div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-[11px]">Máx. con Flaps Extendidos</div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">Tope arco blanco (85 kt para 20°-40°) y límite primer punto 10° (110 kt). Evita daños estructurales.</p>
            </div>

            <!-- Va -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-mono font-black text-amber-600 dark:text-amber-400 text-xs sm:text-sm">Va · 97 KIAS</span>
                <span class="text-[10px] font-bold text-amber-700 dark:text-amber-400">Turbulencia</span>
              </div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-[11px]">Velocidad de Maniobra</div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">Velocidad obligatoria con turbulencia severa. Permite deflexión completa de un mando sin deformación.</p>
            </div>

            <!-- Vno -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-mono font-black text-amber-600 dark:text-amber-400 text-xs sm:text-sm">Vno · 128 KIAS</span>
                <span class="text-[10px] font-bold text-amber-700 dark:text-amber-400">Crucero</span>
              </div>
              <div class="font-bold text-slate-800 dark:text-slate-200 text-[11px]">Máx. Crucero Estructural</div>
              <p class="text-[11px] text-slate-600 dark:text-slate-400 leading-tight mt-0.5">Límite superior arco verde. Por encima (128-160 KIAS, arco amarillo) solo en aire totalmente en calma.</p>
            </div>

            <!-- Vne -->
            <div class="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-500/60 dark:border-rose-500/60 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-mono font-black text-rose-600 dark:text-rose-400 text-xs sm:text-sm">Vne · 160 KIAS</span>
                <span class="text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase">Línea Roja</span>
              </div>
              <div class="font-bold text-rose-900 dark:text-rose-200 text-[11px]">Velocidad de Nunca Exceder</div>
              <p class="text-[11px] text-rose-800 dark:text-rose-300 leading-tight mt-0.5">Línea roja terminal. Jamás debe rebasarse por riesgo inminente de flutter o rotura estructural.</p>
            </div>
          </div>

          <!-- Vglide Banner compacto -->
          <div class="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-xs text-sky-900 dark:text-sky-200 shadow-2xs leading-snug">
            💡 <strong>Velocidad de Mejor Planeo (Vglide = 65 KIAS):</strong> Ante parada de motor con flaps 0° y hélice en molinete. Ratio óptimo de <strong>9:1</strong> (~1.5 NM horizontal por cada 1.000 ft de altitud perdida).
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.3: Pesos Máximos y Distribución de Carga -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.3 Pesos Máximos Estructurales y Distribución de Carga Útil
    </h1>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 2 (Limitaciones) &amp; Hojas Oficiales ATO F.OPS.04
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch flex-1 min-h-0 py-1.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr; grid-template-columns: minmax(0, 50fr) minmax(0, 50fr);">
    <!-- Columna Izquierda (6 cols): Esquema de Estaciones de Carga y Principio de Momentos -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            ⚖️ ESTACIONES DE CARGA (POH SECC. 6 &amp; F.OPS.04)
          </span>
          <span class="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
            Datum: Frontal Cortafuegos (FS 0.0)
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-1.5 gap-2 text-xs">
          <!-- Fundamento Didáctico: Datum y Ley del Momento -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs leading-snug">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5 text-xs sm:text-[13px]">
              📐 Principio Físico del Momento (Momento = Masa × Brazo):
            </strong>
            <p class="text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs">
              Todas las distancias longitudinales se miden en metros o pulgadas hacia atrás desde la <strong>cara anterior del parallamas (Datum = 0.0)</strong>. Cuanto mayor sea el brazo de palanca de un objeto o pasajero, mayor será su efecto multiplicador sobre la posición final del Centro de Gravedad (CG).
            </p>
          </div>

          <!-- Cuadrícula 2x2 de Estaciones Oficiales ATO / POH -->
          <div class="grid grid-cols-2 gap-2">
            <!-- Pilotos -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs">Piloto y Copiloto</span>
                <span class="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">Asientos Del.</span>
              </div>
              <div class="font-mono font-bold text-sky-700 dark:text-sky-300 text-[11px] mt-0.5">
                Brazo: 0,940 m · 37.0"
              </div>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                Rango ajustable sobre raíles: 0,86 m a 1,17 m (34" a 46").
              </p>
            </div>

            <!-- Pasajeros Traseros -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs">Pasajeros Traseros</span>
                <span class="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">Doble Brazo</span>
              </div>
              <div class="font-mono font-bold text-amber-700 dark:text-amber-400 text-[11px] mt-0.5">
                Brazo: 1,854 m · 73.0"
              </div>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                ¡Casi el doble de brazo que delante! Mucho más efecto en el CG.
              </p>
            </div>

            <!-- Combustible Alar -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs">Combustible (Fuel)</span>
                <span class="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">Depósitos Alas</span>
              </div>
              <div class="font-mono font-bold text-sky-700 dark:text-sky-300 text-[11px] mt-0.5">
                Brazo: 1,168 m · 46.0"
              </div>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                Situado cerca del CG medio (1,04 m). Poco influye al consumirse.
              </p>
            </div>

            <!-- Equipajes 1 y 2 -->
            <div class="p-2 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs">
              <div class="flex items-center justify-between">
                <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs">Equipaje 1 / 2</span>
                <span class="px-1.5 py-0.2 rounded text-[10px] font-mono font-bold bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-300">Cola</span>
              </div>
              <div class="font-mono font-bold text-rose-700 dark:text-rose-400 text-[11px] mt-0.5">
                Brazo 1: 2,413 m (95") · 2: 3,124 m (123")
              </div>
              <p class="text-[10px] text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
                Brazos extremos en el fuselaje trasero. Desplazan el CG atrás.
              </p>
            </div>
          </div>

          <!-- Cuadro de Explicación Práctica de Vuelo para el Alumno -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-500/50 dark:border-amber-500/50 shadow-2xs leading-snug">
            <span class="font-bold text-amber-900 dark:text-amber-200 block text-xs mb-0.5">
              💡 Lección Práctica para el Piloto (Efecto Palanca hacia la Cola):
            </span>
            <p class="text-amber-950/90 dark:text-amber-200/90 text-[11px]">
              Una maleta de 20 kg en el Área 2 (brazo 3,12 m) genera <strong>62,5 kg·m</strong> de momento hacia atrás, mientras que en el asiento del copiloto apenas generaría <strong>18,8 kg·m</strong>. La carga trasera no asegurada o excesiva desplaza el CG hacia atrás, reduciendo la estabilidad longitudinal y provocando entradas en pérdida difíciles de recuperar.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (6 cols): Tabla de Pesos Límite, Regla del Equipaje y Combustible JET A-1 -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            🏋️ PESOS LÍMITE Y CARGA ÚTIL OPERACIONAL
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            Límites Certificados POH Secc. 2
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-1.5 gap-2 text-xs">
          <!-- Tabla Oficial de Pesos Estructurales -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5">
            <div class="flex justify-between items-center text-xs">
              <span class="font-semibold text-slate-800 dark:text-slate-200">Peso Máximo al Despegue (MTOW)</span>
              <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-xs sm:text-[13px]">1.043 kg / 2.300 lb</span>
            </div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-1 flex justify-between items-center text-xs">
              <div class="flex items-center gap-1.5">
                <span class="font-semibold text-slate-800 dark:text-slate-200">Peso Máximo al Aterrizaje (MLW)</span>
                <span class="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1 rounded">= MTOW</span>
              </div>
              <span class="font-mono font-black text-[#0B2E59] dark:text-sky-300 text-xs sm:text-[13px]">1.043 kg / 2.300 lb</span>
            </div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-1 flex justify-between items-center text-xs">
              <span class="text-slate-600 dark:text-slate-400">Peso Máximo en Rampa (Ramp Weight)</span>
              <span class="font-mono font-semibold text-slate-700 dark:text-slate-300">1.044 kg / 2.302 lb (+1 kg rodaje)</span>
            </div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-1 flex justify-between items-center text-xs">
              <span class="text-slate-600 dark:text-slate-400">Peso en Vacío Básico (BEW) Flota Real</span>
              <span class="font-mono font-semibold text-slate-700 dark:text-slate-300">NNA: 755 kg · NNX: 796 kg</span>
            </div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-1 flex justify-between items-center text-xs">
              <span class="font-semibold text-[#0B2E59] dark:text-sky-300">Carga Útil Típica (Useful Load = MTOW - BEW)</span>
              <span class="font-mono font-bold text-emerald-700 dark:text-emerald-400">~247 kg a 287 kg</span>
            </div>
          </div>

          <!-- Cuadro de Explicación Didáctica: ¿Por qué MTOW = MLW? -->
          <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-[11px] leading-snug">
            <strong class="text-[#0B2E59] dark:text-sky-300 block mb-0.5">
              🤔 ¿Por qué en la C172 el MTOW y el MLW son exactamente iguales?
            </strong>
            <span class="text-slate-600 dark:text-slate-300">
              A diferencia de aviones comerciales o bimotores donde el tren no tolera aterrizar a peso máximo, en la C172 los trenes principales de acero tubular y la bancada están certificados para absorber el impacto a 2.300 lb. Esto permite retornar y tomar inmediatamente en caso de emergencia tras despegar sin quemar combustible.
            </span>
          </div>

          <!-- Regla de Oro del Equipaje Combinado (Área 1 + 2) -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-500/60 dark:border-amber-500/60 shadow-2xs leading-snug">
            <div class="flex justify-between items-center">
              <span class="font-bold text-amber-900 dark:text-amber-200 text-xs">
                🧳 Regla de Oro del Equipaje (Área 1 + Área 2)
              </span>
              <span class="font-mono font-black text-amber-800 dark:text-amber-300 text-xs sm:text-[13px]">
                Máx. Combinado: 54 kg (120 lb)
              </span>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-1 text-[11px] text-amber-900/90 dark:text-amber-200/90 border-t border-amber-200 dark:border-amber-800/60 pt-1">
              <div>• <strong>Área 1 (Brazo 2,41 m):</strong> Máx. 54 kg (120 lb)</div>
              <div>• <strong>Área 2 (Brazo 3,12 m):</strong> Máx. 23 kg (50 lb)</div>
            </div>
            <p class="text-[10.5px] text-amber-800 dark:text-amber-300 mt-1 italic leading-tight">
              ⚠️ Aunque cargues 23 kg en Área 2, en Área 1 solo podrás meter hasta 31 kg para no sobrepasar los 54 kg combinados por resistencia del suelo de cabina.
            </p>
          </div>

          <!-- Cuadro de Combustible JET A-1 según F.OPS.04 -->
          <div class="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 text-sky-900 dark:text-sky-200 text-[11px] leading-snug">
            ⛽ <strong>Combustible JET A-1 (Densidad Oficial 0,84 kg/L):</strong> En la hoja de carga F.OPS.04 de Blue Team se calcula con 0,84 kg/L (~17% más denso que el AVGAS a 0,72 kg/L). Los 127,4 L utilizables pesan <strong>107 kg</strong>. Con ~770 kg de avión en vacío y 107 kg de combustible, solo quedan <strong>166 kg de carga de pago</strong> para ocupantes.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.4: Factores de Carga y Maniobras Permitidas -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.4 Factores de Carga Estructural y Maniobras Autorizadas
    </h1>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 2 (Limitaciones) &amp; Suplemento Motor TAE 125
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch flex-1 min-h-0 py-1.5" data-left-pct="50" style="--col-left: 50fr; --col-right: 50fr; grid-template-columns: minmax(0, 50fr) minmax(0, 50fr);">
    <!-- Columna Izquierda (6 cols / 50%): Diagrama V-n, Física del Factor de Carga y Explicación de VA -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            📊 DIAGRAMA V-n Y FÍSICA DEL FACTOR DE CARGA
          </span>
          <span class="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400">
            POH Secc. 2 &amp; Secc. 4
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-1.5 gap-2 text-xs leading-snug">
          <!-- Bloque 1: Definición y Factores en Viraje con Incremento de Vs -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs sm:text-[13px]">
                📐 Factor de Carga (n = Sustentación / Peso)
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-300 font-mono">
                n = L / W
              </span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs">
              En vuelo recto y nivelado n = 1.0 G. En viraje coordinado, el ala debe generar sustentación extra para equilibrar el peso y la fuerza centrífuga: <strong>n = 1 / cos(alabeo)</strong>.
            </p>
            <!-- Cuadrícula de virajes coordinados -->
            <div class="grid grid-cols-4 gap-1 pt-0.5 text-center font-mono text-[10px] sm:text-[11px]">
              <div class="p-1 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                <span class="text-slate-400 block text-[9px] uppercase">Alabeo 0°</span>
                <strong class="text-slate-700 dark:text-slate-200">1.0 G</strong>
                <span class="text-[9px] text-slate-400 block">Vs: 47 kt</span>
              </div>
              <div class="p-1 rounded-lg bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
                <span class="text-slate-400 block text-[9px] uppercase">Alabeo 45°</span>
                <strong class="text-slate-700 dark:text-slate-200">1.41 G</strong>
                <span class="text-[9px] text-slate-400 block">Vs: 56 kt</span>
              </div>
              <div class="p-1 rounded-lg bg-sky-50 dark:bg-sky-950/50 border border-sky-300 dark:border-sky-700">
                <span class="text-sky-600 dark:text-sky-400 block text-[9px] font-bold uppercase">Viraje 60°</span>
                <strong class="text-sky-700 dark:text-sky-300">2.00 G</strong>
                <span class="text-[9px] text-sky-600 dark:text-sky-400 font-bold block">Vs: 66 kt (+41%)</span>
              </div>
              <div class="p-1 rounded-lg bg-amber-50 dark:bg-amber-950/50 border border-amber-300 dark:border-amber-700">
                <span class="text-amber-600 dark:text-amber-400 block text-[9px] font-bold uppercase">Alabeo 75°</span>
                <strong class="text-amber-700 dark:text-amber-300">3.86 G ⚠️</strong>
                <span class="text-[9px] text-amber-700 dark:text-amber-300 font-bold block">Vs: 92 kt (+96%)</span>
              </div>
            </div>
            <div class="text-[10.5px] text-slate-500 dark:text-slate-400 pt-0.5 leading-tight">
              • <strong>Fórmula de Pérdida Acelerada:</strong> <code>Vs(acel) = Vs × √n</code>. En un viraje escarpado a 60°, el avión pesa el doble y entrará en pérdida si cae por debajo de 66 KIAS aunque vuele muy por encima de los 47 KIAS habituales.<br/>
              • <strong>Factor de Seguridad (150%):</strong> Los componentes estructurales resisten hasta 1.5 veces el límite antes de romperse (+5.7 G), pero a partir de +3.8 G se produce <strong>deformación permanente irreparable</strong>.
            </div>
          </div>

          <!-- Bloque 2: Velocidad de Maniobra VA como Fusible Estructural -->
          <div class="p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs sm:text-[13px]">
                🛡️ Velocidad de Maniobra (VA) — El Fusible Aerodinámico
              </span>
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-mono">
                No señalizada en anemómetro
              </span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs">
              <strong>Definición oficial POH:</strong> Velocidad máxima a la que se puede aplicar deflexión total y brusca de un mando sin dañar la estructura. Por debajo de VA, el ala entra en pérdida aerodinámica antes de alcanzar la sobrecarga límite.
            </p>
            <div class="p-2 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700 text-[11px] text-amber-950 dark:text-amber-200 leading-snug">
              <strong>💡 La paradoja del peso (¿Por qué VA baja con menos peso?):</strong><br/>
              A 2.300 lb = <strong>97 KIAS</strong> · A 1.950 lb = <strong>89 KIAS</strong> · A 1.600 lb = <strong>80 KIAS</strong>.<br/>
              Un avión más ligero tiene menos inercia y se acelera mucho más rápido ante una ráfaga vertical o un tirón de palanca. Reducir la velocidad garantiza que el ala entre en pérdida y descargue la fuerza antes de sobrepasar los +3.8 G.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (6 cols / 50%): Límites por Categoría, Flaps y Prohibiciones -->
    <div class="lg:col-span-6 flex flex-col min-h-0">
      <div class="flex-1 flex flex-col justify-between p-3.5 sm:p-4 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-1.5 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-xs sm:text-sm">
            ⚖️ CATEGORÍAS, FLAPS Y PROHIBICIONES OPERACIONALES
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
            POH Secc. 2 &amp; Sup. TAE 125
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-1.5 gap-2 text-xs leading-snug">
          <!-- Comparativa Categorías Normal vs Utility -->
          <div class="grid grid-cols-2 gap-2">
            <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <span class="font-bold text-sky-800 dark:text-sky-300 block text-xs uppercase">Categoría Normal</span>
              <div class="text-sm sm:text-base font-black text-[#0B2E59] dark:text-sky-200 font-mono">+3.8 G / -1.52 G</div>
              <p class="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400">
                MTOW 2.300 lb (1.043 kg). Flaps arriba. Maniobras no acrobáticas y virajes escarpados con alabeo de hasta 60°.
              </p>
            </div>

            <div class="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-0.5">
              <span class="font-bold text-indigo-800 dark:text-indigo-300 block text-xs uppercase">Categoría Utility</span>
              <div class="text-sm sm:text-base font-black text-indigo-900 dark:text-indigo-200 font-mono">+4.4 G / -1.76 G</div>
              <p class="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400">
                Peso ≤ 2.000 lb (907 kg). <strong>Asientos traseros y equipaje VACÍOS</strong>. Para mantener el CG adelantado y máxima respuesta.
              </p>
            </div>
          </div>

          <!-- Maniobras Autorizadas en Utility con Velocidades Oficiales POH -->
          <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-bold text-[#0B2E59] dark:text-sky-300 text-xs">
                ✈️ Maniobras Autorizadas en Utility y Velocidades de Entrada (POH):
              </span>
              <span class="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400">POH Secc. 4</span>
            </div>
            <div class="grid grid-cols-3 gap-1 text-center font-mono text-[10px]">
              <div class="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <span class="text-slate-500 block text-[9px]">Chandelles</span>
                <strong class="text-indigo-700 dark:text-indigo-300">106 KIAS</strong>
              </div>
              <div class="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <span class="text-slate-500 block text-[9px]">Lazy Eights</span>
                <strong class="text-indigo-700 dark:text-indigo-300">106 KIAS</strong>
              </div>
              <div class="p-1 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <span class="text-slate-500 block text-[9px]">Steep Turns &gt;60°</span>
                <strong class="text-indigo-700 dark:text-indigo-300">97 KIAS</strong>
              </div>
            </div>
          </div>

          <!-- Cuadro de Flaps Extendidos con Explicación de Torsión -->
          <div class="p-2 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-700/60 shadow-2xs flex items-center justify-between gap-2">
            <div class="flex items-center gap-1.5">
              <span class="text-base shrink-0">⚠️</span>
              <div>
                <strong class="text-amber-900 dark:text-amber-300 text-xs block">Límite con Flaps Extendidos (10° a 40°): +3.0 G / 0.0 G</strong>
                <span class="text-[10px] sm:text-[11px] text-amber-800 dark:text-amber-400">
                  Al deflactar flaps, el centro de presiones retrocede y genera un fuerte momento de torsión alar. Las superficies hipersustentadoras no toleran aceleración negativa (0 G).
                </span>
              </div>
            </div>
            <div class="font-mono font-black text-amber-900 dark:text-amber-200 text-xs sm:text-sm shrink-0 px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-900/60 border border-amber-300 dark:border-amber-700">
              +3.0 G / 0 G
            </div>
          </div>

          <!-- Cuadro de Prohibiciones Oficiales Suplemento Motor TAE 125 -->
          <div class="p-2 sm:p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-500/60 dark:border-rose-500/60 shadow-2xs space-y-0.5 text-slate-800 dark:text-slate-200">
            <div class="flex items-center justify-between">
              <span class="font-bold text-rose-700 dark:text-rose-400 text-xs uppercase flex items-center gap-1">
                <span>⛔</span>
                <span>Prohibiciones POH &amp; Suplemento Motor Continental TAE 125</span>
              </span>
              <span class="text-[10px] font-bold text-rose-600 dark:text-rose-400 font-mono">Sec. 2 Pág. 2-2</span>
            </div>
            <ul class="list-disc pl-4 space-y-0.5 text-[10px] sm:text-[11px] text-rose-950 dark:text-rose-200">
              <li><strong>Barrenas intencionadas (Spins):</strong> Terminantemente prohibidas en la flota diésel (<em>«Intentionally initiating spins is prohibited»</em>) por la inercia del grupo motor y hélice tripala de composite con gobernador FADEC.</li>
              <li><strong>G Negativas intencionadas:</strong> Prohibidas estrictamente. La falta de bomba invertida acrobática puede provocar descebado de lubricación y combustible (<em>«can cause propeller control and engine problems»</em>).</li>
              <li><strong>Acrobacia aérea:</strong> Prohibidos loopings, toneles, caídas de ala y vuelo invertido.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div><!-- pagebreak -->

<!-- DIAPOSITIVA 1.5: Envolvente de Centro de Gravedad y Hoja F.OPS.04 -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.5 Envolvente de Centro de Gravedad (CG) y Hoja F.OPS.04
    </h1>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Procedimiento Operacional Blue Team F.OPS.04
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0 py-3">
    <!-- Columna Izquierda (6 cols): Diagrama Envolvente CG -->
    <div class="lg:col-span-6 h-full flex flex-col min-h-0">
      <div class="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-2 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-sm">
            📈 ENVOLVENTE DE CENTRADO (POH SEC. 6)
          </span>
          <span class="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
            Límites: 35.0" a 47.3"
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-2 space-y-2.5">
          <!-- Un solo cuadro unificado para límites de CG -->
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-sm">Límites Delantero y Trasero:</strong>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2 space-y-1.5">
              <div>• <strong>Límite Delantero:</strong> 35.0" a 1.950 lb o menos, variando linealmente hasta 38.5" a 2.300 lb.</div>
              <div>• <strong>Límite Trasero:</strong> 47.3" constante en todo el rango de peso hasta 2.300 lb.</div>
              <div>• <strong>Peligro de CG Adelantado:</strong> Fuerzas excesivas de palanca en la rotación y recogida de aterrizaje; riesgo de golpear la pata de morro.</div>
              <div>• <strong>Peligro de CG Retrasado:</strong> Inestabilidad longitudinal, pérdida de autoridad de timón de profundidad para picar, tendencia a entrar en pérdida irrecuperable.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (6 cols): Datos de Masa en Vacío de la Flota -->
    <div class="lg:col-span-6 h-full flex flex-col min-h-0">
      <div class="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-2 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-sm">
            📋 DATOS REALES DE PESADA (F.OPS.04)
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">
            Flota C172 Blue Team
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-2 space-y-2.5">
          <!-- Un solo cuadro unificado para las 4 aeronaves -->
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 font-mono text-xs">
            <div class="flex justify-between items-center">
              <div><strong class="text-sky-700 dark:text-sky-300">EC-NNA:</strong> BEW 755.44 kg (1.665.4 lb)</div>
              <span class="text-slate-600 dark:text-slate-400">Brazo: 1.042 m (41.02")</span>
            </div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2 flex justify-between items-center">
              <div><strong class="text-emerald-700 dark:text-emerald-300">EC-OXV:</strong> BEW 778.20 kg (1.715.6 lb)</div>
              <span class="text-slate-600 dark:text-slate-400">Brazo: 1.038 m (40.87")</span>
            </div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2 flex justify-between items-center">
              <div><strong class="text-indigo-700 dark:text-indigo-300">EC-NNX:</strong> BEW 795.83 kg (1.754.5 lb)</div>
              <span class="text-slate-600 dark:text-slate-400">Brazo: 1.026 m (40.39")</span>
            </div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2 flex justify-between items-center">
              <div><strong class="text-[#D98A1E] dark:text-amber-400">EC-OXT:</strong> BEW 785.00 kg (1.730.6 lb)</div>
              <span class="text-slate-600 dark:text-slate-400">Brazo: 1.035 m (40.75")</span>
            </div>
          </div>

          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-500/60 dark:border-amber-500/60 shadow-2xs text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-snug">
            ⚠️ <strong>Obligatoriedad de Despacho:</strong> Antes de cada vuelo debe cumplimentarse la hoja física o digital F.OPS.04 con las firmas del PIC, masa de despegue y aterrizaje calculadas, y centro de gravedad dentro de la envolvente.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.6: Combustibles Aprobados y Temperaturas Límite -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.6 Combustibles Autorizados y Temperaturas Límite
    </h1>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      AFM Suplemento Continental TAE 125 Sección 2
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0 py-3">
    <!-- Columna Izquierda (6 cols): Especificaciones Técnicas de Combustibles -->
    <div class="lg:col-span-6 h-full flex flex-col min-h-0">
      <div class="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-2 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-sm">
            ⛽ COMBUSTIBLES DE AVIACIÓN Y AUTOMOCIÓN
          </span>
          <span class="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
            Kerosén / Diésel
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-2 space-y-2.5">
          <!-- Un solo cuadro unificado para los combustibles aprobados -->
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <strong class="text-[#0B2E59] dark:text-sky-300 block text-sm">Combustibles Homologados por EASA y Continental:</strong>

            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2 space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-400 block text-xs">1. JET A-1 / JET A (ASTM D 1655):</strong>
              <div>Combustible estándar de turbina. Temperatura mínima operacional de combustible: <strong>-30°C</strong>. Máxima: <strong>+55°C</strong>.</div>
            </div>

            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2 space-y-1">
              <strong class="text-[#0B2E59] dark:text-sky-400 block text-xs">2. Diésel de Automoción EN 590:</strong>
              <div>Totalmente certificado. Temperatura mínima operacional de combustible: <strong>-5°C</strong> (por riesgo de cristalización de parafinas).</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (6 cols): Prohibiciones y Capacidad de Depósitos -->
    <div class="lg:col-span-6 h-full flex flex-col min-h-0">
      <div class="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-2 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-sm">
            ⚠️ CAPACIDADES Y RESTRICCIONES CRÍTICAS
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">
            Límites Operacionales
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-2 space-y-2.5">
          <!-- Prohibición AVGAS -->
          <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-500/60 dark:border-rose-500/60 shadow-2xs space-y-1 text-slate-800 dark:text-slate-200 text-xs">
            <strong class="text-rose-700 dark:text-rose-400 font-bold block text-xs uppercase">🚫 PROHIBICIÓN ABSOLUTA DE GASOLINA (AVGAS)</strong>
            <p>
              <strong>JAMÁS repostar AVGAS 100LL ni ninguna gasolina aeronáutica o de automoción.</strong> La inyección de gasolina destruiría inmediatamente la bomba de alta presión de 1.600 bar y provocaría autodetonación descontrolada con fallo catastrófico del motor.
            </p>
          </div>

          <!-- Capacidad de Depósito -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
            <strong class="text-[#0B2E59] dark:text-sky-400 block text-xs uppercase">Capacidades de Depósito (2 tanques alares):</strong>
            <div class="grid grid-cols-2 gap-2 font-mono">
              <div>• Capacidad Total: <strong>42.0 US Gal (159 L)</strong></div>
              <div>• Combustible Útil: <strong>40.0 US Gal (151 L)</strong></div>
              <div>• No Utilizable: <strong>2.0 US Gal (7.6 L)</strong></div>
              <div>• Colector / Sump: <strong>0.5 US Gal (1.9 L)</strong></div>
            </div>
          </div>

          <!-- Comprobación previa -->
          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-500/60 dark:border-amber-500/60 shadow-2xs text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-snug">
            ⚠️ <strong>Comprobación de Temperatura Previa al Vuelo:</strong> En invierno, si se utiliza diésel EN 590 y la temperatura en plataforma o en nivel de crucero desciende de -5°C, no se puede iniciar el vuelo a menos que el combustible sea JET A-1.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.7: Aceites Aprobados y Niveles -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.7 Lubricantes Aprobados de Motor y Caja Reductora
    </h1>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      Manual de Mantenimiento TAE 125 & Suplemento POH
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0 py-3">
    <!-- Columna Izquierda (6 cols): Aceite de Motor Continental -->
    <div class="lg:col-span-6 h-full flex flex-col min-h-0">
      <div class="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-2 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-sm">
            🛢️ ACEITE DE MOTOR DIÉSEL
          </span>
          <span class="text-xs font-bold text-sky-700 dark:text-sky-300">
            Cárter Húmedo
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-2 space-y-2.5">
          <!-- Un solo cuadro unificado para aceite de motor -->
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div>• <strong>Tipo Aprobado:</strong> <em>AeroShell Oil Diesel Ultra 15W-40</em> o totalmente sintético según especificación MB 229.5 / MB 229.51.</div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2">• <strong>Capacidad Total del Cárter:</strong> 6.0 Litros.</div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2">• <strong>Nivel Mínimo Operacional:</strong> <strong>4.5 Litros</strong> (marcado estricto en la varilla).</div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2">• <strong>Nivel Máximo Recomendado:</strong> <strong>6.0 Litros</strong>.</div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2">• <strong>Consumo Máximo Aceptable:</strong> 0.1 Litros por hora de vuelo.</div>
          </div>

          <div class="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border-2 border-amber-500/60 dark:border-amber-500/60 shadow-2xs text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-snug">
            ⚠️ <strong>Medición Correcta:</strong> Esperar al menos 5 minutos tras parar el motor para permitir el retorno del aceite al cárter antes de medir con la varilla.
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (6 cols): Aceite de Caja Reductora (Gearbox) -->
    <div class="lg:col-span-6 h-full flex flex-col min-h-0">
      <div class="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-2 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-sm">
            ⚙️ ACEITE DE CAJA REDUCTORA (GEARBOX)
          </span>
          <span class="text-xs font-bold text-amber-700 dark:text-amber-400">
            Circuito Independiente
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-2 space-y-2.5">
          <!-- Un solo cuadro unificado para caja reductora -->
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div>• <strong>Tipo Aprobado:</strong> Fluido ATF sintético <em>Titan EG 5005 Plus</em> o <em>Shell Spirax S4 ATF HDX</em>.</div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2">• <strong>Capacidad del Circuito:</strong> <strong>1.0 Litro</strong> aproximado.</div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2">• <strong>Verificación Prevuelo:</strong> Mirilla visual en el lado frontal derecho del reductor. El nivel debe situarse en la mitad del visor óptico con el avión nivelado.</div>
            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2">• <strong>Función Crucial:</strong> Lubrica los engranajes de reducción y alimenta el actuador hidráulico del gobernador de la hélice MT-Propeller.</div>
          </div>

          <div class="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-500/60 dark:border-rose-500/60 shadow-2xs text-xs sm:text-sm text-rose-900 dark:text-rose-200 leading-snug">
            🚨 <strong>Pérdida de Aceite de Reductora:</strong> Si se pierde presión en la reductora, los contrapesos y muelles llevarán la hélice automáticamente a <strong>paso grueso</strong> para reducir la resistencia aerodinámica.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- pagebreak -->

<!-- DIAPOSITIVA 1.8: Techo de Servicio, Viento Cruzado y Meteorología -->
<div class="lesson-slide-container h-full flex flex-col justify-between text-slate-800 dark:text-slate-100">
  <div class="border-b border-[#DCE4EE] dark:border-slate-800 pb-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 shrink-0">
    <h1 class="text-xl sm:text-2xl font-bold text-[#0B2E59] dark:text-sky-300 tracking-tight">
      1.8 Techo de Servicio, Viento Cruzado y Límites Meteorológicos
    </h1>
    <span class="text-xs sm:text-sm text-[#6A7686] dark:text-slate-400 font-semibold hidden sm:block">
      POH Sección 2 & Manual de Operaciones Blue Team
    </span>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch flex-1 min-h-0 py-3">
    <!-- Columna Izquierda (6 cols): Techo y Rendimiento en Altura -->
    <div class="lg:col-span-6 h-full flex flex-col min-h-0">
      <div class="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-2 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-sm">
            🏔️ TECHO OPERACIONAL Y ALTITUD
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">
            Rendimiento en Altura
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-2 space-y-2.5">
          <!-- Un solo cuadro unificado para Techo y Oxígeno -->
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1">Techo Máximo Certificado:</strong>
              <div class="font-mono font-bold text-sm text-[#0B2E59] dark:text-sky-300">14.200 ft (CD-135) / 17.500 ft (CD-155)</div>
              <span class="text-slate-600 dark:text-slate-400 text-xs block mt-1">Mantiene el 100% de potencia hasta aprox. 6.000 - 8.000 ft gracias al turbocompresor de geometría variable.</span>
            </div>

            <div class="border-t border-slate-100 dark:border-slate-700/60 pt-2.5">
              <strong class="text-[#0B2E59] dark:text-sky-300 block mb-1">Uso de Oxígeno Suplementario (Part-NCO):</strong>
              <span class="text-slate-600 dark:text-slate-400 text-xs block">Obligatorio para la tripulación en vuelos continuados de más de 30 min entre FL100 y FL130, y en todo momento por encima de FL130.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha (6 cols): Viento Cruzado y Meteorología -->
    <div class="lg:col-span-6 h-full flex flex-col min-h-0">
      <div class="h-full flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] dark:bg-slate-900/90 border-2 border-slate-200 dark:border-slate-800 shadow-xs">
        <div class="flex items-center justify-between shrink-0 pb-2 border-b border-slate-200 dark:border-slate-800">
          <span class="font-bold text-[#0B2E59] dark:text-sky-300 uppercase tracking-wider text-sm">
            💨 VIENTO CRUZADO Y CONDICIONES ADVERSAS
          </span>
          <span class="text-xs text-slate-500 dark:text-slate-400 font-semibold">
            Límites Ambientales
          </span>
        </div>

        <div class="flex-1 flex flex-col justify-between py-2 space-y-2.5">
          <!-- Viento Cruzado -->
          <div class="p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-2xs flex justify-between items-center text-xs sm:text-sm">
            <div>
              <strong class="text-[#0B2E59] dark:text-sky-300 block">Viento Cruzado Máximo Demostrado:</strong>
              <span class="text-slate-600 dark:text-slate-400 text-xs">Componente perpendicular a la pista</span>
            </div>
            <span class="font-mono font-black text-base text-[#0B2E59] dark:text-sky-300">15 Nudos</span>
          </div>

          <!-- Prohibición de Engelamiento (FIKI) -->
          <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border-2 border-rose-500/60 dark:border-rose-500/60 shadow-2xs space-y-1 text-xs text-slate-800 dark:text-slate-200">
            <strong class="text-rose-700 dark:text-rose-400 block text-xs uppercase">Prohibición de Vuelo en Condiciones de Engelamiento (FIKI):</strong>
            <p>
              La aeronave NO está certificada para vuelo en condiciones de hielo conocidas (Flight Into Known Icing). En caso de encuentro inadvertido con engelamiento, abandonar la zona de inmediato cambiando de altitud o rumbo.
            </p>
          </div>
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
