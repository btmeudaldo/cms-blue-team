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

  <!-- Bloque 1: Identificación y Matrículas de la Flota -->
  <section class="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block"></span>
      1.1 Flota Cessna 172 Blue Team y Especificaciones por Matrícula
    </h2>
    
    <!-- Imagen Flota con float / wrap -->
    <div class="sm:float-right sm:ml-6 mb-4 sm:mb-2 sm:w-80 rounded-xl overflow-hidden border border-sky-500/30 bg-sky-950/20 p-3 shadow-md">
      <div class="aspect-video w-full rounded-lg bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center p-3 text-center border border-dashed border-sky-400/40">
        <span class="text-2xl mb-1">📸</span>
        <span class="text-xs font-bold text-sky-600 dark:text-sky-300">[FOTO-01: Flota Blue Team en Plataforma]</span>
        <span class="text-[10px] text-slate-500 dark:text-slate-400 mt-1">EC-OXT, EC-OXV, EC-NNA y EC-NNX alineados frente al hangar</span>
      </div>
      <p class="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-2 italic">
        Figura 1.1: Aeronaves C172 modernizadas con planta motriz Continental CD-135 / CD-155.
      </p>
    </div>

    <p class="text-sm leading-relaxed mb-3">
      Toda la flota de Cessna 172 de <strong>Blue Team Flight School</strong> está compuesta por células de tipo <strong>Reims/Cessna F172</strong> certificadas bajo normativa EASA, propulsadas exclusivamente por motores <strong>Continental Turbo Diésel common rail (CD-135 y CD-155)</strong> con combustible <strong>JET A-1</strong>. Cada aeronave cuenta con sus características operacionales y datos de centrado reflejados en sus respectivas hojas de carga:
    </p>

    <div class="overflow-x-auto my-3">
      <table class="w-full text-xs text-left border-collapse border border-slate-200 dark:border-slate-700 rounded-lg">
        <thead class="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-200 uppercase font-semibold">
          <tr>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Matrícula</th>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Modelo Célula</th>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Motor Continental</th>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Peso Vacío (BEW)</th>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Brazo / Momento Vacío</th>
            <th class="p-2.5 border border-slate-200 dark:border-slate-700">Hélice y Cabina</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
          <tr class="hover:bg-sky-500/5">
            <td class="p-2.5 font-bold text-sky-600 dark:text-sky-400">EC-OXT</td>
            <td class="p-2.5">Reims F172M (F172-1095)</td>
            <td class="p-2.5">CD-155 (155 HP TAE 125-02-99)</td>
            <td class="p-2.5 font-mono">Según W&B vigente</td>
            <td class="p-2.5 font-mono">FADEC dual / Jet A-1</td>
            <td class="p-2.5">Monomando, MT-Propeller tripala, AED/CED</td>
          </tr>
          <tr class="hover:bg-sky-500/5">
            <td class="p-2.5 font-bold text-sky-600 dark:text-sky-400">EC-OXV</td>
            <td class="p-2.5">Reims F172K (F172-0740)</td>
            <td class="p-2.5">CD-135 (135 HP TAE 125-01)</td>
            <td class="p-2.5 font-mono">Según W&B vigente</td>
            <td class="p-2.5 font-mono">FADEC dual / Jet A-1</td>
            <td class="p-2.5">Monomando, MT-Propeller tripala, AED/CED</td>
          </tr>
          <tr class="hover:bg-sky-500/5">
            <td class="p-2.5 font-bold text-sky-600 dark:text-sky-400">EC-NNA</td>
            <td class="p-2.5">Reims-Cessna 172</td>
            <td class="p-2.5">CD-135 / CD-155</td>
            <td class="p-2.5 font-mono font-bold text-emerald-600 dark:text-emerald-400">755.44 kg</td>
            <td class="p-2.5 font-mono">1.042 m (787.23 kg·m)</td>
            <td class="p-2.5">Hoja de carga oficial F.OPS.04.NNA</td>
          </tr>
          <tr class="hover:bg-sky-500/5">
            <td class="p-2.5 font-bold text-sky-600 dark:text-sky-400">EC-NNX</td>
            <td class="p-2.5">Reims-Cessna 172</td>
            <td class="p-2.5">CD-135 / CD-155</td>
            <td class="p-2.5 font-mono font-bold text-emerald-600 dark:text-emerald-400">795.83 kg</td>
            <td class="p-2.5 font-mono">1.026 m (816.05 kg·m)</td>
            <td class="p-2.5">Hoja de carga oficial F.OPS.04.NNX</td>
          </tr>
        </tbody>
      </table>
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

      <div class="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 class="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2 text-xs uppercase tracking-wider text-sky-600 dark:text-sky-400">
          <span>📐 Flaps Ranurados Eléctricos (Slotted)</span>
        </h3>
        <p class="text-xs text-slate-600 dark:text-slate-300 mb-2">
          Los flaps son de tipo ranurado (<em>slotted</em>), accionados por un motor eléctrico con eje sinfín situado en la semiala derecha. Permiten incrementar la sustentación a baja velocidad y añadir resistencia parásita para aproximaciones pronunciadas.
        </p>
        <div class="grid grid-cols-4 gap-2 text-center text-xs font-bold pt-1">
          <div class="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg border border-slate-200 dark:border-slate-600">
            <span class="block text-slate-400 text-[10px]">Posición 1</span>
            <span class="text-sky-500 font-mono text-sm">10°</span>
            <span class="block text-[9px] text-slate-500">Campo Corto / Blando</span>
          </div>
          <div class="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg border border-slate-200 dark:border-slate-600">
            <span class="block text-slate-400 text-[10px]">Posición 2</span>
            <span class="text-sky-500 font-mono text-sm">20°</span>
            <span class="block text-[9px] text-slate-500">Aproximación Base</span>
          </div>
          <div class="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg border border-slate-200 dark:border-slate-600">
            <span class="block text-slate-400 text-[10px]">Posición 3</span>
            <span class="text-sky-500 font-mono text-sm">30°</span>
            <span class="block text-[9px] text-slate-500">Aterrizaje Normal</span>
          </div>
          <div class="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg border border-slate-200 dark:border-slate-600">
            <span class="block text-slate-400 text-[10px]">Posición 4</span>
            <span class="text-sky-500 font-mono text-sm">40°</span>
            <span class="block text-[9px] text-slate-500">Campo Corto / Max Drag</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Bloque 3: Tren de Aterrizaje y Frenos -->
  <section class="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <h2 class="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block"></span>
      1.3 Tren de Aterrizaje, Dirección de Morro y Sistema de Frenos
    </h2>

    <div class="sm:float-right sm:ml-6 mb-4 sm:mb-2 sm:w-72 rounded-xl overflow-hidden border border-amber-500/30 bg-amber-950/20 p-3 shadow-md">
      <div class="aspect-square w-full rounded-lg bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center p-3 text-center border border-dashed border-amber-400/40">
        <span class="text-2xl mb-1">📸</span>
        <span class="text-xs font-bold text-amber-600 dark:text-amber-300">[FOTO-02: Tren de Morro C172]</span>
        <span class="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Puntal oleoneumático (2-3 dedos de extensión), tijera de dirección y shimmy damper</span>
      </div>
      <p class="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-2 italic">
        Figura 1.2: Inspección exterior del tren de morro en prevuelo.
      </p>
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

    <!-- Anemómetro Float / Wrap -->
    <div class="sm:float-right sm:ml-6 mb-4 sm:mb-2 sm:w-72 rounded-xl overflow-hidden border border-red-500/30 bg-red-950/20 p-3 shadow-md">
      <div class="aspect-square w-full rounded-lg bg-slate-200 dark:bg-slate-800 flex flex-col items-center justify-center p-3 text-center border border-dashed border-red-400/40">
        <span class="text-2xl mb-1">⏱️</span>
        <span class="text-xs font-bold text-red-600 dark:text-red-300">[FOTO-03: Anemómetro de Cabina]</span>
        <span class="text-[10px] text-slate-500 dark:text-slate-400 mt-1">Arcos blanco (41-85), verde (47-128), amarillo (128-160) y línea roja (160 KIAS)</span>
      </div>
      <p class="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-2 italic">
        Figura 1.3: Marcación oficial de velocidades aerodinámicas.
      </p>
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
        <div class="p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600">
          <span class="font-bold text-slate-900 dark:text-white block text-sm">Categoría Utilitaria (MTOW: 2000 lb / 907 kg)</span>
          <p class="text-slate-600 dark:text-slate-300 mt-1">
            <strong>Flaps ARRIBA:</strong> <span class="font-mono font-bold text-sky-600 dark:text-sky-400">+4.4 g / -1.76 g</span><br/>
            <em>Autorizados virajes escarpados (&gt;60°), ochos perezosos, chandelles y barrenas voluntarias. Prohibido ocupar asientos traseros o cargar equipaje.</em>
          </p>
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
  </section>

  <!-- Resumen de Preparación para el Examen Oficial -->
  <div class="p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-indigo-500/10 border border-sky-500/30 text-xs text-slate-700 dark:text-slate-200">
    <span class="font-bold text-sky-600 dark:text-sky-400 block mb-1 text-sm">📋 Resumen Rápido — Preguntas Oficiales de Examen Cubiertas en esta Lección:</span>
    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
      <li>✅ <strong>Pregunta 5:</strong> MTOW = 2300 lb (Normal) / 2000 lb (Utility).</li>
      <li>✅ <strong>Pregunta 6:</strong> Carga máxima Baggage Area 1 = 120 lb (54.4 kg).</li>
      <li>✅ <strong>Pregunta 7:</strong> Definición Vne = <em>Velocidad que no se puede exceder bajo ninguna condición de vuelo</em>.</li>
      <li>✅ <strong>Pregunta 8:</strong> Valor Vne = 160 KIAS (165 KCAS).</li>
      <li>✅ <strong>Pregunta 9:</strong> Arco blanco = 41 a 85 KIAS (Vso a Vfe).</li>
      <li>✅ <strong>Pregunta 12:</strong> Factores de carga Normal = +3.8 g / -1.52 g.</li>
    </ul>
  </div>

</div>
`
};
