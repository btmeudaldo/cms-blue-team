import type { Quiz } from "../domain/quiz-types";

export const DA42_COURSE_ID = "da420000-0000-0000-0000-000000000042";

export const DA42_LESSON_1_QUIZ: Quiz = {
  id: "quiz-da42-lesson-1",
  course_id: DA42_COURSE_ID,
  lesson_id: "da420000-0000-0000-0000-000000000010",
  title:
    "Examen de Verificación: 1. Generalidades y Especificaciones Técnicas",
  description:
    "Evaluación teórica de verificación sobre dimensiones generales, simbología oficial AFM, especificaciones de la planta motriz Continental CD-135 / CD-155, hélices MT-Propeller, combustible JET-A1 y depósitos, fluidos de servicio e instrumentación Garmin G1000 EIS de la Diamond DA42 Twin Star.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da42-1-1",
      question:
        "En la documentación técnica oficial de la DA42 (AFM y suplementos), ¿cuál es la distinción formal de seguridad entre un WARNING y un CAUTION, y qué exigencia establece el manual respecto a la documentación obligatoria a bordo?",
      options: [
        "Un WARNING alerta de un peligro inminente que puede provocar la muerte o lesiones graves; un CAUTION advierte de posibles daños al motor, sistemas o degradación a largo plazo; además, es obligatorio llevar el AFM en la bolsa lateral izquierda y la guía rápida G1000 CRG en la bolsa trasera del asiento delantero izquierdo.",
        "Un WARNING indica fallos de confort en cabina y un CAUTION daños estructurales; los manuales pueden dejarse en la escuela si se dispone de tableta digital autorizada.",
        "Un WARNING requiere apagar ambos motores en vuelo de inmediato y un CAUTION desviarse a un alternativo; solo es obligatorio llevar la lista de chequeo plastificada.",
        "No existe ninguna distinción técnica entre ambos términos en el AFM y los manuales solo se exigen en operaciones internacionales.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM Sección 1.3 define WARNING como riesgo inminente de lesiones graves o muerte, y CAUTION como daño potencial a componentes o aeronave. El Caution de la Sección 1.2 impone el transporte obligatorio del AFM en la bolsa lateral izquierda y del Garmin G1000 CRG en la bolsa posterior del asiento delantero izquierdo.",
    },
    {
      id: "da42-1-2",
      question:
        "En la planta motriz Continental CD-135 / CD-155 de la DA42, ¿cómo se gestiona la combustión y qué salvaguarda eléctrica vital asegura el funcionamiento de cada motor ante un fallo simultáneo del alternador y la batería principal?",
      options: [
        "Los motores operan por ciclo diésel con inyección Common Rail y FADEC digital redundante (ECU A y B); si fallan el alternador y la batería principal del avión, cada motor dispone de su propia batería de reserva (ECU Backup Battery) que garantiza un mínimo de 30 minutos de operación eléctrica continua para inyectores y computadoras.",
        "La combustión se alimenta por carburadores de flujo descendente; ante fallo eléctrico, los motores continúan funcionando indefinidamente gracias a las magnetos de encendido independientes.",
        "Cada motor dispone de una dinamo manual en el pedestal de gases que el copiloto debe accionar para alimentar las bujías.",
        "El motor se apaga de inmediato en menos de 5 segundos porque los inyectores se bloquean mecánicamente al faltar corriente del bus general.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Los motores CD-135/CD-155 utilizan ciclo diésel con inyección Common Rail controlada por FADEC. Al depender de la electricidad para inyectores y ECU, cada motor equipa una ECU Backup Battery que proporciona un mínimo de 30 minutos de autonomía eléctrica ante fallo de alternadores y batería principal (AFM 1.2).",
    },
    {
      id: "da42-1-3",
      question:
        "A diferencia de los aviones monomotor, las hélices MT-Propeller de la DA42 son abanderables (feathering). ¿Cómo actúan los seguros de arranque mecánicos (Start Locks) en tierra y qué ocurre con las palas si se corta el motor en vuelo?",
      options: [
        "En vuelo, al cortar el motor y caer la presión de aceite, contrapesos centrífugos y muelles llevan automáticamente las palas a bandera (81° ± 1°) para eliminar la resistencia de molinete; en tierra, por debajo de ~1.300 RPM, fiadores mecánicos (Start Locks) retienen las palas en 15° impidiendo que se abanderen, lo que garantiza el paso fino necesario para el siguiente arranque.",
        "En vuelo las palas se bloquean a 0° para girar más rápido y en tierra los Start Locks impiden que la hélice gire mientras el avión esté calzado.",
        "El abanderado se realiza exclusivamente accionando una palanca azul mecánica de paso y en tierra los Start Locks desconectan la reductora.",
        "Las palas se abanderan solo si el piloto sale a la plataforma a girarlas con la mano con el freno de estacionamiento puesto.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "En la DA42, la caída de presión de aceite en vuelo acciona los muelles y contrapesos que llevan las palas a bandera (81° ± 1°), minimizando la resistencia tras fallo de motor. En tierra, al reducir por debajo de 1.300 RPM antes de parar, los pernos centrífugos Start Locks bloquean las palas a 15° (paso fino) para permitir arrancar de nuevo sin sobrecargar el motor de arranque (AFM 1.3).",
    },
    {
      id: "da42-1-4",
      question:
        "En el sistema de combustible de la DA42 con depósitos principales (Main) y auxiliares (Aux), ¿cuál es la capacidad utilizable total de la flota, cuál es el límite de desbalance lateral y en qué condiciones está autorizada la posición CROSSFEED?",
      options: [
        "La capacidad total utilizable es de 76,4 US gal (~289 L); el desbalance máximo admisible entre depósitos principales es de 5,0 US gal (~19 L); y la posición CROSSFEED está autorizada en vuelo para alimentar un motor operativo desde el ala opuesta o corregir asimetrías, estando terminantemente prohibido despegar o aterrizar en CROSSFEED.",
        "La capacidad total utilizable es de 100 US gal; no existe límite de desbalance entre alas; y el despegue debe realizarse obligatoriamente con ambas válvulas en CROSSFEED.",
        "La capacidad es de 50 US gal en total; el desbalance máximo es de 15 US gal; y la posición CROSSFEED se utiliza únicamente en plataforma para llenar los depósitos por gravedad.",
        "La capacidad total es de 60 US gal de AVGAS 100LL; el desbalance es ilimitado; y la posición CROSSFEED se selecciona automáticamente sin mando en cabina.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La flota DA42 equipada con depósitos auxiliares dispone de 76,4 US gal utilizables (50 USG principales + 26,4 USG auxiliares). El desbalance máximo entre alas es de 5,0 US gal (~19 L). El AFM 2.14 prohíbe taxativamente el despegue y aterrizaje en posición CROSSFEED, la cual se reserva para vuelo con motor inoperativo (OEI) o corrección en ruta.",
    },
    {
      id: "da42-1-5",
      question:
        "Durante la comprobación de fluidos de servicio en la inspección prevuelo de la DA42, ¿cómo se verifican los niveles de lubricación del motor y de la reductora, y qué advertencia impone el AFM si aparece el aviso WATER LEVEL en el G1000?",
      options: [
        "El aceite motor se verifica con su varilla tras esperar entre 5 y 15 minutos de reposo tras la parada; la reductora tiene circuito independiente y su nivel debe situarse por encima de la mitad de la mirilla en la góndola; y si el aviso WATER LEVEL (refrigerante bajo) permanece activo en tierra, el arranque y despegue quedan terminantemente prohibidos.",
        "El motor y la reductora comparten un único depósito de aceite que se mide con una varilla común en el morro; el aviso WATER LEVEL solo es informativo y permite volar hasta 500 millas.",
        "La reductora carece de aceite porque funciona por engranajes secos de teflón; el aceite motor debe rellenarse hasta que rebose el tapón.",
        "El nivel de aceite motor solo se comprueba con el motor encendido a 2.000 RPM y el nivel de reductora se mide por el color del escape.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El motor y la reductora cuentan con circuitos y lubricantes completamente independientes. El aceite motor se mide con la varilla dejando 5-15 min de reposo para drenaje al cárter; la reductora se comprueba en su mirilla transparente frontal (mitad o superior). El aviso WATER LEVEL indica bajo refrigerante en el vaso de expansión, prohibiendo el AFM el arranque si está activo en tierra (AFM 1.5 y 2.4).",
    },
    {
      id: "da42-1-6",
      question:
        "En el Garmin G1000 de la DA42, ¿cómo determina el totalizador de combustible de la página FUEL la cantidad remanente a bordo y qué advertencia operacional establece la Cockpit Reference Guide (CRG)?",
      options: [
        "El totalizador calcula el combustible restante integrando matemáticamente el consumo medido por los caudalímetros desde el último reset manual; no mide directamente las boyas físicas de los depósitos, siendo obligatoria la comprobación visual directa previa al vuelo.",
        "El totalizador realiza una medición láser directa de nivel en tiempo real sin requerir comprobación física del piloto.",
        "Mide la masa del avión mediante sensores en el tren de aterrizaje para deducir el combustible consumido.",
        "Muestra únicamente la capacidad del depósito auxiliar izquierdo sin tener en cuenta los depósitos principales.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La G1000 Cockpit Reference Guide (CRG) advierte que el totalizador de combustible integra matemáticamente el flujo registrado por los transductores (FF) desde la inicialización manual, por lo que no sustituye la inspección física visual con varilla prevuelo.",
    },
  ],
};

export const DA42_LESSON_2_QUIZ: Quiz = {
  id: "quiz-da42-lesson-2",
  course_id: DA42_COURSE_ID,
  lesson_id: "da420000-0000-0000-0000-000000000020",
  title: "Examen de Verificación: 2. Limitaciones Operacionales AFM",
  description:
    "Evaluación teórica de verificación sobre velocidades estructurales (vNE, vNO, vA, vFE, vLOR, vMCA), marcas del anemómetro, límites de masa y centrado, factores de carga, limitaciones de motores Continental CD-135 / CD-155, temperaturas, presiones, instrumentación G1000 EIS y tipos de operaciones de la Diamond DA42 Twin Star.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da42-2-1",
      question:
        "¿Cuáles son la velocidad máxima para la retracción del tren de aterrizaje (vLOR) y la velocidad mínima de control en vuelo con un motor inoperativo (vMCA) según las limitaciones del AFM de la DA42?",
      options: [
        "vLOR = 156 KIAS (debido a la resistencia aerodinámica en compuertas de tren) y vMCA = 68 KIAS (velocidad de control direccional con motor crítico inoperativo).",
        "vLOR = 194 KIAS y vMCA = 82 KIAS.",
        "vLOR = 111 KIAS y vMCA = 56 KIAS.",
        "vLOR = 137 KIAS y vMCA = 79 KIAS.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM Sección 2 fija vLOR en 156 KIAS para proteger mecánicamente las compuertas del tren durante el repliegue y vMCA en 68 KIAS como límite crítico de control direccional monomotor.",
    },
    {
      id: "da42-2-2",
      question:
        "En la cinta anemométrica del Garmin G1000 PFD de la DA42, ¿qué significado operacional tienen la línea radial azul a 82 KIAS y el arco blanco comprendido entre 56 y 111 KIAS?",
      options: [
        "Línea azul: mejor régimen de ascenso monomotor (vYSE = 82 KIAS); arco blanco: rango de operación con flaps totalmente extendidos en posición Landing (vSO = 56 KIAS a vFE = 111 KIAS).",
        "Línea azul: velocidad de rotación; arco blanco: rango de crucero rápido en aire turbulento.",
        "Línea azul: velocidad de nunca exceder; arco blanco: velocidad de planeo sin motores.",
        "Línea azul: velocidad mínima de control; arco blanco: rango de retracción de flaps.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La línea radial azul marca vYSE (82 KIAS) para obtener el máximo ascenso o mínimo descenso con un motor inoperativo. El arco blanco abarca el margen operativo con flaps LDG extendidos (56 a 111 KIAS).",
    },
    {
      id: "da42-2-3",
      question:
        "¿Cuáles son la masa máxima autorizada de aterrizaje (MLM), la masa máxima sin combustible (MZFM) y el límite de peso en el maletero de morro (Nose Baggage) de la DA42?",
      options: [
        "MLM = 1.700 kg (3.748 lb), MZFM = 1.650 kg (3.638 lb) y maletero de morro máximo 30 kg (66 lb) combinado entre compartimentos izquierdo y derecho.",
        "MLM = 1.785 kg, MZFM = 1.785 kg y maletero de morro máximo 100 kg.",
        "MLM = 1.542 kg, MZFM = 1.250 kg y maletero de morro máximo 45 kg.",
        "MLM = 1.600 kg, MZFM = 1.450 kg y maletero de morro máximo 15 kg.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM Sección 2.3 establece una masa máxima de aterrizaje MLM de 1.700 kg para todas las versiones, MZFM de 1.650 kg y un límite estricto de 30 kg en el maletero delantero con redes de retención obligatorias.",
    },
    {
      id: "da42-2-4",
      question:
        "¿Dónde se ubica físicamente el Plano de Referencia (Datum Plane) de la DA42 y cuál es el límite de centro de gravedad posterior a la masa máxima al despegue (1.700 kg o 1.785 kg)?",
      options: [
        "Ubicado exactamente a 2,196 m (86,46 in) por delante del punto más adelantado del encastre alar; el límite posterior de CG a MTOM se sitúa a 2,480 m (97,64 in).",
        "Ubicado en el cortafuegos del motor izquierdo con límite posterior a 1,500 m.",
        "Ubicado en el cono de morro de la aeronave con límite posterior a 3,200 m.",
        "Ubicado en el borde de ataque del timón de profundidad con límite posterior a 2,350 m.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Según el AFM 2.4, el Datum Plane se sitúa a 2,196 m por delante del encastre alar (Root Rib on Stub Wing), y el límite posterior de CG a masa máxima es 2,480 m (97,64 pulgadas).",
    },
    {
      id: "da42-2-5",
      question:
        "En la categoría Normal (JAR-23) de la DA42, ¿cuáles son los factores de carga límite estructurales a la velocidad de maniobra (vA) con flaps UP y con flaps extendidos (APP o LDG)?",
      options: [
        "A vA con flaps UP: +3.8 g / -1.52 g; con flaps extendidos (APP o LDG): +2.0 g / 0 g.",
        "A vA con flaps UP: +6.0 g / -3.0 g; con flaps extendidos: +3.8 g / -1.52 g.",
        "A vA con flaps UP: +2.5 g / -1.0 g; con flaps extendidos: +1.5 g / -0.5 g.",
        "A vA con flaps UP: +4.4 g / -1.76 g; con flaps extendidos: +2.2 g / -1.0 g.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM Sección 2.5 limita la envolvente estructural en categoría Normal a +3.8 g / -1.52 g con flaps UP a vA, y a +2.0 g / 0 g en cualquier posición de flaps extendidos.",
    },
    {
      id: "da42-2-6",
      question:
        "¿Cuáles son las RPM máximas continuas de hélice en la DA42, el límite de sobrevelocidad admisible (overspeed) y el ciclo de enfriamiento requerido tras 6 intentos consecutivos de arranque?",
      options: [
        "Máximo continuo de 2.300 RPM; sobrevelocidad máxima de 2.500 RPM durante 20 segundos; tras 6 intentos consecutivos, dejar enfriar el motor de arranque al menos 30 minutos.",
        "Máximo continuo de 2.700 RPM; sobrevelocidad de 3.000 RPM durante 1 minuto; reposo del arrancador de 2 horas.",
        "Máximo continuo de 1.800 RPM; sobrevelocidad de 2.000 RPM durante 10 segundos; sin reposo de arrancador.",
        "Máximo continuo de 2.400 RPM; sobrevelocidad de 2.600 RPM durante 45 segundos; reposo de 5 minutos.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Las hélices MT-Propeller operan a 2.300 RPM continuas máximas, admitiendo un overspeed transitorio de 2.500 RPM (20 s máx.). El arrancador admite accionamientos de 10 s y tras 6 intentos requiere 30 minutos de enfriamiento.",
    },
    {
      id: "da42-2-7",
      question:
        "¿Cuáles son las temperaturas mínimas que deben alcanzar el aceite del motor y el refrigerante antes de poder aplicar potencia de despegue (100% Load) en la DA42?",
      options: [
        "Aceite al menos 50 °C y refrigerante al menos 60 °C (ambos dentro del arco verde).",
        "Aceite al menos 0 °C y refrigerante al menos 20 °C.",
        "Aceite al menos 100 °C y refrigerante al menos 95 °C.",
        "No existe ninguna temperatura mínima requerida si la temperatura ambiente supera 15 °C.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM Sección 2.4 prohíbe taxativamente aplicar potencia máxima (100% Load) hasta que la temperatura de aceite alcance 50 °C y el refrigerante 60 °C para asegurar la fluidez y protección de los componentes internos.",
    },
    {
      id: "da42-2-8",
      question:
        "¿Cuál es el rango normal de presión de aceite (arco verde) en los motores Continental de la DA42 y cuáles son los niveles mínimo y máximo de lubricante en el cárter?",
      options: [
        "Presión normal de 2.3 a 5.2 bar; capacidad en cárter mínima de 4,5 L (4.8 US qts) y máxima de 6,0 L (6.3 US qts).",
        "Presión normal de 1.0 a 2.0 bar; capacidad en cárter mínima de 2,0 L y máxima de 3,5 L.",
        "Presión normal de 5.2 a 8.0 bar; capacidad en cárter mínima de 7,0 L y máxima de 10,0 L.",
        "Presión normal de 0.5 a 1.5 bar; capacidad en cárter mínima de 1,0 L y máxima de 5,0 L.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El circuito de cárter húmedo opera entre 2.3 y 5.2 bar en verde, con límites de llenado físico entre 4,5 L mínimo y 6,0 L máximo por cada motor Continental.",
    },
    {
      id: "da42-2-9",
      question:
        "En la DA42 con motores Continental CD-155, ¿cuál es la temperatura mínima de combustible JET A-1 en depósitos requerida para el despegue y cuál es la temperatura máxima absoluta admisible?",
      options: [
        "Temperatura mínima para despegue de +5 °C (+41 °F) y temperatura máxima admisible de +75 °C (+167 °F).",
        "Temperatura mínima para despegue de -50 °C y máxima de +40 °C.",
        "Temperatura mínima para despegue de +25 °C y máxima de +120 °C.",
        "Temperatura mínima para despegue de 0 °C y máxima de +50 °C.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Para el motor Continental CD-155 con JET A-1, la temperatura mínima en el depósito para iniciar el despegue es +5 °C (+41 °F), mientras que el límite superior absoluto es +75 °C.",
    },
    {
      id: "da42-2-10",
      question:
        "Según la tabla oficial de marcas del Garmin G1000 EIS en el AFM Sección 2, ¿qué límites de temperatura de refrigerante (Coolant Temp) delimitan el arco verde y la línea roja superior de advertencia?",
      options: [
        "Arco verde de 60 a 96 °C (hasta 101 °C en CD-155) y línea roja superior a partir de 105 °C.",
        "Arco verde de 40 a 70 °C y línea roja a partir de 80 °C.",
        "Arco verde de 80 a 120 °C y línea roja a partir de 150 °C.",
        "Arco verde de 0 a 50 °C y línea roja a partir de 90 °C.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La tabla 2.5 del AFM especifica el rango verde normal entre 60 y 96 °C (101 °C en motor CD-155), entrando en advertencia ámbar hasta 105 °C y alerta roja de alta temperatura por encima de 105 °C.",
    },
    {
      id: "da42-2-11",
      question:
        "En el sistema eléctrico de 28 V de la DA42 monitoreado en el G1000 EIS, ¿cuál es el rango de voltaje normal (arco verde) y qué condición de carga activa la zona roja en los amperímetros L/R?",
      options: [
        "Voltaje normal en arco verde de 24.1 a 32.0 V y zona roja en amperímetros si la corriente generada excede de 70 A.",
        "Voltaje normal en arco verde de 12.0 a 14.5 V y zona roja si excede de 20 A.",
        "Voltaje normal en arco verde de 35.0 a 40.0 V y zona roja si excede de 100 A.",
        "El sistema eléctrico no se monitoriza en la pantalla EIS, solo cuenta con voltímetro analógico externo.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El sistema eléctrico de 28V opera normalmente entre 24.1 y 32.0 V en arco verde. Los alternadores generan hasta 60-70 A, activándose la advertencia roja por sobrecorriente por encima de 70 A.",
    },
    {
      id: "da42-2-12",
      question:
        "¿Cuál es la capacidad total utilizable combinada de combustible (depósitos principales + auxiliares), el desbalance máximo permitido entre depósitos principales y qué posición deben tener las válvulas en despegue y aterrizaje?",
      options: [
        "Total utilizable de 76.4 US gal (~289.2 L), desbalance máximo admisible de 5.0 US gal (~19 L) y válvulas obligatoriamente en posición ON (prohibido CROSSFEED en despegue o aterrizaje).",
        "Total utilizable de 100 US gal, desbalance máximo de 15 US gal y válvulas en CROSSFEED obligatorio.",
        "Total utilizable de 40 US gal, desbalance máximo de 10 US gal y válvulas en posición OFF.",
        "Total utilizable de 50 US gal, sin límite de desbalance y despegue en posición AUX.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La DA42 dispone de 50 USG utilizables en tanques principales y 26.4 USG en auxiliares (total 76.4 USG). El desbalance máximo entre alas es de 5.0 US gal y las válvulas deben estar estrictamente en ON para despegue y aterrizaje.",
    },
    {
      id: "da42-2-13",
      question:
        "Respecto al techo operativo, tripulación mínima y limitaciones de engelamiento de la DA42 en la flota escolar, ¿cuáles son las limitaciones oficiales del AFM?",
      options: [
        "Techo operativo máximo de 18.000 ft (5.486 m), tripulación mínima de 1 piloto en el asiento delantero izquierdo y aeronave estrictamente NO autorizada para vuelo en engelamiento conocido (Known Icing).",
        "Techo operativo de 25.000 ft, tripulación mínima obligatoria de 2 pilotos y autorizada en cualquier condición de engelamiento severo.",
        "Techo operativo de 10.000 ft, autorizada únicamente en VFR diurno con 3 tripulantes.",
        "Techo operativo de 14.000 ft, vuelo acrobático autorizado y deshielo por botas neumáticas.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM Sección 2 fija el techo de servicio en 18.000 ft, tripulación mínima de un piloto en el asiento izquierdo y prohíbe el vuelo en engelamiento conocido (Known Icing) al estar el sistema TKS inoperativo en la flota.",
    },
  ],
};

export const DA42_LESSON_3_QUIZ: Quiz = {
  id: "quiz-da42-lesson-3",
  course_id: DA42_COURSE_ID,
  lesson_id: "da420000-0000-0000-0000-000000000030",
  title:
    "Examen de Verificación: 3. Descripción del Avión y sus Sistemas (AFM Sección 7)",
  description:
    "Evaluación teórica oficial de verificación sobre plantas motrices Continental CD-135 / CD-155, FADEC dual, sistema eléctrico bimotor de 28 VDC, combustible con Crossfeed, instrumentación Garmin G1000 EIS/CAS y tren retráctil de la Diamond DA42 Twin Star.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da42-3-1",
      question:
        "¿Cuáles son las potencias máximas y características de arquitectura de los motores Continental CD-135 y CD-155 en la DA42, y qué mandos y componentes tradicionales quedan totalmente suprimidos en cabina gracias a la gestión FADEC?",
      options: [
        "El CD-135 entrega 99 kW (135 HP) y el CD-155 entrega 114 kW (155 HP) a 2.300 RPM de hélice; al ser diésel Common Rail gobernados por FADEC, se suprimen mezcla (Mixture), paso de hélice (Propeller), calefacción de carburador, magnetos, bujías y cebador manual, controlándose cada motor exclusivamente mediante su monopalanca Power Lever.",
        "Ambos entregan 180 HP a 2.700 RPM, manteniendo mandos manuales de mezcla enriquecida y palancas azules de paso de hélice.",
        "El CD-135 rinde 80 kW y el CD-155 rinde 160 kW con carburador doble flotante y dos magnetos por bancada.",
        "Son motores de 6 cilindros refrigerados por aire donde el FADEC solo controla el alternador principal.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El motor CD-135 entrega 99 kW (135 HP) y el CD-155 entrega 114 kW (155 HP). La combustión por compresión diésel y el control FADEC eliminan mandos manuales de mezcla, paso de hélice, bujías, magnetos y cebador, unificando todo el control en una única Power Lever por motor.",
    },
    {
      id: "da42-3-2",
      question:
        "En el sistema de reductora y hélice MT-Propeller tripala de la DA42, ¿a qué ángulo exacto se abanderan las palas (feathering) al colocar el ENGINE MASTER en OFF en vuelo y qué función cumplen los seguros centrífugos (start locks) en tierra?",
      options: [
        "Las palas se abanderan a 45° y los start locks evitan que el alternador se sobrecargue durante el rodaje.",
        "Las palas se abanderan a 81° ± 1° por acción de contrapesos y presión de nitrógeno para minimizar la resistencia aerodinámica; en tierra, a menos de 950–1.300 RPM, los fiadores mecánicos (start locks) impiden el abanderamiento para mantener la hélice en paso fino y facilitar el próximo arranque.",
        "Las palas se orientan a 0° para entrar en autorrotación constante; los start locks bloquean el timón de dirección para que no vibre.",
        "El abanderamiento es exclusivamente eléctrico y los start locks impiden el paso de combustible a los inyectores.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Al cortar el ENGINE MASTER en vuelo (con RPM > 950-1.300), la válvula drena aceite y los contrapesos junto al nitrógeno colocan las palas a 81° ± 1°. En tierra a bajas RPM (< 950-1.300 RPM), los fiadores mecánicos de bloqueo centrífugo impiden que las palas entren en bandera para permitir el arranque con baja resistencia de paso fino.",
    },
    {
      id: "da42-3-3",
      question:
        "¿Cómo está estructurada la redundancia digital del sistema FADEC en cada una de las dos plantas motrices de la Diamond DA42?",
      options: [
        "Cada motor cuenta con dos unidades de control electrónico independientes (ECU A activa y ECU B en espera activa) con sensórica duplicada (RPM, MAP, raíl y temperaturas), conmutando automáticamente de canal si se detecta un fallo crítico.",
        "Existe una única ECU central compartida en el morro que controla simultáneamente ambos motores mediante cables Bowden.",
        "El motor izquierdo opera con control digital ECU A y el motor derecho únicamente mediante control mecánico manual analógico.",
        "Cada motor tiene tres ECUs alimentadas exclusivamente por la batería del teléfono móvil de la tripulación.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM 7.9.2 describe que cada motor bimotor dispone de su propia arquitectura FADEC con dos canales independientes (ECU A y ECU B) y sensores duplicados. En operación normal manda la ECU A y, ante cualquier fallo crítico, conmuta automáticamente a la ECU B sin interrupción de potencia.",
    },
    {
      id: "da42-3-4",
      question:
        "En relación con la comprobación de motores previa al despegue, ¿cuáles son los requisitos de régimen de motor para iniciar el ECU TEST y cuál es el procedimiento ante avisos de ECU en vuelo?",
      options: [
        "El ECU TEST exige 100% de potencia y en vuelo se debe apagar inmediatamente el motor ante cualquier aviso.",
        "El ECU TEST solo se activa con las palancas en ralentí (IDLE) y régimen de RPM < 900; en vuelo, sobre IDLE, pulsar ECU TEST más de 2 segundos resetea avisos menores una sola vez, debiendo aterrizar en el aeródromo adecuado más próximo si la luz persiste o reaparece.",
        "El ECU TEST se realiza a velocidad de crucero pulsando el interruptor de los flaps eléctricos.",
        "El botón ECU TEST desconecta los inyectores Common Rail durante 30 segundos para limpiar carbonilla en la cámara de combustión.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El AFM 4A.6.8 y 7.9.2 establecen que la prueba de autoprueba FADEC solo inicia con Power Levers en IDLE y RPM < 900 (en caso contrario no arranca). En vuelo (RPM > 900), mantener presionado el botón más de 2 segundos resetea avisos menores una sola vez; si no se extingue o vuelve a encenderse, exige aterrizar en el aeródromo adecuado más cercano.",
    },
    {
      id: "da42-3-5",
      question:
        "¿Cuáles son las características principales del sistema eléctrico de generación primaria de la DA42 bimotor según el AFM Sección 7.10?",
      options: [
        "Red de 28 Vcc alimentada por dos alternadores independientes movidos por correa de 28 V / 60 A cada uno (120 A combinados) y una batería principal de plomo-ácido de 24 V / 13.6 Ah ubicada en el compartimento de morro.",
        "Red de 12 Vcc con un único alternador de 40 A en el motor izquierdo y dínamo manual en el derecho.",
        "Red de corriente alterna de 115 V a 400 Hz con turbina de aire de impacto permanente.",
        "Red de 48 Vcc alimentada exclusivamente por paneles solares instalados en el intradós alar.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM Sección 7.10 especifica una red de corriente continua de 28 VDC, dos alternadores independientes de 28 V / 60 A instalados uno en cada motor y una batería principal de 24 V / 13.6 Ah situada en el morro del avión.",
    },
    {
      id: "da42-3-6",
      question:
        "En caso de un fallo eléctrico grave con pérdida de ambos alternadores y de la batería principal en la DA42, ¿qué función cumplen las baterías de respaldo ECU (ECU Backup Batteries) y qué advertencia crítica debe respetarse con el conmutador ECU SWAP?",
      options: [
        "Alimentan todas las luces exteriores y pantallas durante 5 horas, y el conmutador ECU SWAP debe colocarse en OFF.",
        "Suministran energía eléctrica exclusiva a la ECU B de cada motor durante un mínimo de 30 minutos; el conmutador ECU SWAP debe permanecer en AUTOMATIC o ECU B, ya que seleccionar manualmente ECU A provocaría la parada inmediata del motor por carecer de alimentación eléctrica.",
        "Alimentan el motor de arranque en vuelo para reencendidos continuos, con el conmutador ECU SWAP forzado en ECU A.",
        "Conectan automáticamente la radio de emergencia con la torre de control desconectando los motores.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El AFM 7.10 indica que las baterías de respaldo de la ECU (dos bloques de 24 V) alimentan exclusivamente a la ECU B de cada motor durante al menos 30 minutos. Dado que la ECU A queda desenergizada en fallo eléctrico total, cambiar el conmutador a ECU A apagará inmediatamente el motor.",
    },
    {
      id: "da42-3-7",
      question:
        "Respecto a los depósitos y válvulas de combustible de la DA42, ¿cuáles son las capacidades utilizables estándar y en qué circunstancias está autorizado el uso de la posición CROSSFEED?",
      options: [
        "26.0 US gal utilizables por cada Main Tank alar (52.0 US gal en total) más 13.7 US gal utilizables por cada Aux Tank de góndola (79.4 US gal utilizables totales); CROSSFEED se emplea para corregir desbalances en vuelo nivelado o alimentar el motor operativo con el ala contraria en vuelo monomotor (nunca en ambos motores a la vez).",
        "10 US gal por ala; CROSSFEED es mandatorio en despegue y aterrizaje simultáneamente en ambos motores.",
        "50 US gal en un único depósito central; CROSSFEED no existe en la DA42.",
        "100 US gal utilizables por depósito con transferencia automática por gravedad sin válvulas selectoras.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM 7.9.5 certifica 26.0 US gal utilizables en cada depósito principal alar y 13.7 US gal en cada depósito auxiliar de góndola (total 79.4 US gal). La posición CROSSFEED solo debe usarse para reequilibrar combustible en vuelo o en operación monomotor (OEI), estando terminantemente prohibido seleccionar CROSSFEED en ambos selectores a la vez.",
    },
    {
      id: "da42-3-8",
      question:
        "En el circuito de combustible de los motores Continental CD-135/CD-155 de la DA42, ¿qué bombas intervienen en la alimentación de alta presión y qué función cumple el retorno y enfriador de combustible (Fuel Cooler)?",
      options: [
        "Una bomba mecánica de baja presión (LP) y una bomba mecánica de alta presión (HP) Common Rail asistidas por bombas eléctricas auxiliares (FUEL PUMP L/R); el exceso de combustible caliente retorna al depósito que alimenta al motor pasando por un Fuel Cooler para evitar vaporizaciones si la temperatura exterior no supera 20 °C con deflectores.",
        "Solo existen bombas manuales de pie bajo los pedales del copiloto sin circuito de retorno ni enfriador.",
        "Una bomba eléctrica sumergida de 200 bar que inyecta directamente gasolina de aviación en el colector de admisión sin retorno.",
        "Una bomba de vacío accionada por el horizonte artificial que presuriza los depósitos a 15 psi.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El sistema Common Rail cuenta con una bomba LP mecánica, una bomba HP mecánica y bombas auxiliares eléctricas (L/R FUEL PUMP). El caudal no inyectado regresa caliente al depósito correspondiente a través del intercambiador Fuel Cooler (limitado operacionalmente respecto a sus deflectores invernales si OAT > 20 °C).",
    },
    {
      id: "da42-3-9",
      question:
        "En el sistema de refrigeración líquida (Cooling System) de la DA42, ¿qué elementos componen el circuito de cada motor y qué implicación operativa tiene la alerta 'WATER LEVEL' en el G1000?",
      options: [
        "El sistema es puramente por aire mediante aletas en los cilindros y no dispone de alerta WATER LEVEL.",
        "Cada motor dispone de un circuito presurizado con mezcla 50/50 agua-refrigerante con intercambiador frontal, termostato y depósito de compensación; si la alerta WATER LEVEL se ilumina fija en tierra, el nivel de líquido refrigerante es bajo y el despegue está prohibido.",
        "El refrigerante es combustible JET A-1 que circula por el cárter y WATER LEVEL indica agua en el depósito de aceite de la reductora.",
        "Usa nitrógeno líquido criogénico que debe rellenarse cada 20 minutos de vuelo si se apaga la alerta WATER LEVEL.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El motor Continental emplea refrigeración líquida con mezcla 50:50 de agua y anticongelante (G48 o G30). Un sensor en el depósito de compensación activa la alerta WATER LEVEL en el G1000 ante bajo nivel; si permanece activa en tierra, no se autoriza el vuelo.",
    },
    {
      id: "da42-3-10",
      question:
        "En cuanto a los sistemas de lubricación de la DA42, ¿qué circuitos independientes existen en cada góndola de motor y qué indica la alerta ámbar 'L/R GBOX TEMP'?",
      options: [
        "El circuito de aceite de motor (cárter húmedo, 4,5 a 6,0 L) y el circuito de aceite de la caja reductora (lubricación y gobierno de hélice) son independientes con sus propios radiadores; L/R GBOX TEMP alerta de sobretemperatura en la reductora (>115 °C) exigiendo reducción de potencia.",
        "El motor y la reductora comparten un único depósito de líquido de frenos sintético de 2 litros sin indicación térmica.",
        "No existe aceite en la reductora porque emplea engranajes secos de teflón autolubricados.",
        "Indica que el cárter de motor se ha quedado sin combustible y la hélice se abanderará en 5 segundos.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El aceite motor (AeroShell Diesel Ultra) y el aceite de reductora (Shell Spirax 75W-90) son totalmente independientes. La reductora dispone de su propio intercambiador térmico y sonda de temperatura, activando L/R GBOX TEMP en ámbar si supera 115 °C (rojo a 120 °C).",
    },
    {
      id: "da42-3-11",
      question:
        "En la instrumentación de motor Garmin G1000 EIS de la DA42 bimotor, ¿cómo se presentan los parámetros de potencia y motor en la barra vertical del MFD?",
      options: [
        "Muestra agujas analógicas convencionales de presión de admisión (Manifold Pressure en inHg) y flujo de mezcla en galones por hora.",
        "Presenta lecturas duales independientes para motor izquierdo (L) y derecho (R), encabezadas por los indicadores digitales y arcos de % LOAD (potencia efectiva) y RPM de hélice, seguidos de presión/temperatura de aceite, refrigerante, reductora, combustible y parámetros eléctricos.",
        "Muestra únicamente el estado del piloto automático y oculta los parámetros de motor hasta que se produce una avería catastrófica.",
        "Presenta una sola aguja combinada que hace el promedio de los dos motores sin diferenciar entre el izquierdo y el derecho.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La barra EIS (Engine Indication System) del G1000 en la DA42 bimotor muestra permanentemente columnas dobles (L y R) con % LOAD y RPM en la parte superior, integrando las lecturas analógicas digitales de todos los parámetros de planta de potencia y sistemas de vuelo.",
    },
    {
      id: "da42-3-12",
      question:
        "En el sistema de alertas CAS (Crew Alerting System) del Garmin G1000 en la DA42, ¿cómo se categorizan jerárquicamente las alertas en pantalla y cómo se reconoce su recepción en cabina?",
      options: [
        "Warnings en rojo con señal acústica continua para fallos críticos (ej. L/R OIL PRES, DOOR UNLOCKED); Cautions en amarillo con tono sonoro para condiciones anormales (ej. L/R ALTN FAIL, LOW FUEL); y Avisos en blanco para información operativa; se silencian y consultan con la tecla ALERTS del PFD.",
        "Todas las alertas se muestran en verde y se apagan automáticamente girando los mandos de compensación de dirección.",
        "Solo existen avisos sonoros por voz sintética en alemán sin indicación de texto en pantalla.",
        "Las alertas rojas solo pueden cancelarse cortando la llave Electric Master en vuelo.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El sistema CAS del G1000 clasifica los avisos en Warnings rojos (máxima prioridad y peligro inmediato con alarma continua), Cautions amarillos (precaución con tono breve) y Avisos blancos de estado, gestionados a través de la tecla de función ALERTS del PFD.",
    },
    {
      id: "da42-3-13",
      question:
        "Respecto a los mandos de vuelo y superficies hipersustentadoras de la DA42, ¿qué arquitectura mecánica y eléctrica presentan los alerones, timones y flaps?",
      options: [
        "Mandos de vuelo primarios accionados por varillas rígidas de empuje y tracción (push-pull rods) y cables; flaps eléctricos con selector de 3 posiciones (UP, APP a 156 KIAS, LDG a 136 KIAS) provistos de compensación aerodinámica automática en timón de profundidad.",
        "Mandos fly-by-wire puramente electrónicos sin conexión física entre la palanca de mando y las superficies de control.",
        "Flaps hidráulicos de accionamiento manual mediante palanca de bombeo continuo entre los asientos delanteros.",
        "Alerones y timón de profundidad accionados exclusivamente por presión neumática del sistema de vacío.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM 7.7 describe mandos de vuelo primarios operados mediante varillas rígidas de empuje (push-pull rods) para alerones y timón de profundidad, y cables para dirección. Los flaps son eléctricos de tres posiciones (UP, APP con VFE 156 KIAS y LDG con VFE 136 KIAS) con compuerta de compensación integrada.",
    },
    {
      id: "da42-3-14",
      question:
        "En el sistema de tren de aterrizaje retráctil de la DA42 (AFM Sección 7.5), ¿qué tecnología acciona el tren, cuál es la velocidad máxima de retracción (vLO RET) y cómo se opera la extensión de emergencia?",
      options: [
        "Tren retráctil triciclo accionado electrohidráulicamente mediante bomba reversible con acumulador de nitrógeno; retracción autorizada hasta vLO RET = 156 KIAS (extensión hasta 194 KIAS); la extensión de emergencia se realiza tirando de la palanca roja EMERGENCY GEAR EXTENSION, que alivia la presión hidráulica permitiendo la caída libre por gravedad asistida por resortes.",
        "Tren de retracción manual por manivela de 50 vueltas con velocidad máxima de 80 KIAS y extensión neumática con cartucho pirotécnico.",
        "Tren fijo no retráctil cubierto por carenados aerodinámicos de composite con rueda de morro loca sin freno.",
        "Tren eléctrico con motor paso a paso sin posibilidad de extensión de emergencia si falla el alternador.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM 7.5 especifica un tren triciclo retráctil electrohidráulico con montantes oleoneumáticos, rueda de morro orientable enlazada a pedales, velocidad de retracción hasta 156 KIAS (vLO RET) y extensión hasta 194 KIAS (vLE / vLO EXT). El tirador EMERGENCY GEAR alivia la presión del circuito hidráulico para que el tren caiga por gravedad y bloquee mecánicamente con asistencia de muelles.",
    },
  ],
};

export const DA42_LESSON_4_QUIZ: Quiz = {
  id: "quiz-da42-lesson-4",
  course_id: DA42_COURSE_ID,
  lesson_id: "da420000-0000-0000-0000-000000000040",
  title:
    "Examen de Verificación: 4. Procedimientos Normales y Operación Diésel",
  description:
    "Evaluación teórica de verificación sobre inspección de cabina (Cabin Check), inspección exterior (Walkaround), arranque de motores diésel Continental, rodaje, pruebas FADEC en punto de espera, despegue, ascenso, crucero, aproximación, aterrizaje, enfriamiento de turbos y repostaje de la Diamond DA42 Twin Star.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da42-4-1",
      question:
        "¿Cuál es el primer paso obligatorio que debe ejecutarse al iniciar la lista de chequeo de cabina (Cabin Check) en la DA42 antes de cualquier otra comprobación?",
      options: [
        "Fijar el freno de estacionamiento (Parking Brake) en posición ON para inmovilizar la aeronave.",
        "Encender la bomba eléctrica de combustible izquierda.",
        "Extender los flaps a posición LDG.",
        "Conectar la batería principal (ELECT. MASTER ON).",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El primer paso de la lista de chequeo de cabina según el AFM Sección 4A.3.1 es verificar y fijar el freno de estacionamiento (Parking Brake - SET ON) para asegurar mecánicamente que el avión no pueda desplazarse inadvertidamente.",
    },
    {
      id: "da42-4-2",
      question:
        "Durante la comprobación de cabina previa a conectar la electricidad, ¿en qué posición deben estar los interruptores ENGINE MASTER y las llaves de contacto?",
      options: [
        "ENGINE MASTER en ON y llave en posición START.",
        "ENGINE MASTER izquierdo en ON y derecho en OFF.",
        "Ambos ENGINE MASTER en posición OFF y la llave de contacto (START KEY) retirada del panel.",
        "ENGINE MASTER en OFF con la llave girada a BOTH.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Antes de energizar el sistema eléctrico principal, ambos ENGINE MASTER deben estar firmemente en OFF y la llave de arranque retirada para prevenir cualquier activación intempestiva del circuito de inyección o del motor de arranque.",
    },
    {
      id: "da42-4-3",
      question:
        "Al realizar la prueba de detección de incendio de motores (FIRE TEST) con la alimentación eléctrica conectada, ¿qué indicaciones sensoriales deben presentarse en cabina para validar el sistema?",
      options: [
        "Se apagan todas las pantallas del G1000 y se corta el bus esencial.",
        "Se iluminan los avisos luminosos rojos L/R FIRE en el panel anunciador y suena la alarma acústica de advertencia continua.",
        "Se disparan automáticamente los extintores de halón en las góndolas.",
        "Únicamente parpadea un mensaje blanco en la pantalla PFD sin sonido.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La prueba FIRE TEST comprueba la continuidad de los lazos detectores de fuego en ambas góndolas de motor, iluminando las alertas rojas L FIRE y R FIRE en el panel de anunciadores y activando el zumbador acústico de cabina.",
    },
    {
      id: "da42-4-4",
      question:
        "Durante la comprobación del tope variable de profundidad (Variable Elevator Backstop), ¿qué movimiento debe observarse en la palanca de mandos cuando los flaps están en LDG y se aplica potencia de comprobación (ambas palancas > 20% de potencia)?",
      options: [
        "La palanca de mandos se bloquea rígidamente hacia atrás sin poder moverse.",
        "La palanca de mandos mantenida hacia atrás se mueve notablemente y de forma perceptible hacia adelante (restringiendo el recorrido ascendente a 13°).",
        "La palanca vibra emitiendo una alarma de pérdida acústica.",
        "El timón de profundidad se desplaza lateralmente hacia la izquierda.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Al comprobar el Elevator Backstop con flaps LDG y potencia aplicada, el limitador mecánico accionado eléctricamente se enclava reduciendo el deflexión máxima del timón de 15,5° a 13°, lo que empuja visiblemente la palanca hacia adelante.",
    },
    {
      id: "da42-4-5",
      question:
        "Al iniciar la inspección exterior en el tren de aterrizaje principal izquierdo, ¿cuál es la longitud mínima recomendada de vástago cromado limpio y visible en el pistón amortiguador oleoneumático?",
      options: [
        "Al menos 4 cm (1,6 in) de pistón cromado visible, libre de fugas de fluido hidráulico.",
        "Menos de 1 cm para mantener el centro de gravedad bajo.",
        "Exactamente 15 cm con las ruedas bloqueadas.",
        "No debe verse metal cromado, debe estar totalmente comprimido.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM y el manual de mantenimiento especifican que en reposo el pistón del amortiguador del tren principal debe mostrar al menos 4 cm (1,6 pulgadas) de vástago limpio sin trazas de fuga hidráulica ni mellas.",
    },
    {
      id: "da42-4-6",
      question:
        "¿Dónde y cómo se comprueba visualmente el nivel de aceite lubricante de la caja reductora de la hélice en la góndola del motor izquierdo durante el walkaround?",
      options: [
        "A través de la mirilla (sight glass) transparente situada en la parte inferior del morro de la góndola, comprobando que el nivel esté centrado en el visor.",
        "Desmontando la hélice y utilizando una varilla metálica graduada.",
        "Únicamente en la página de motor de la pantalla MFD del G1000 en vuelo.",
        "En el tapón de drenaje de combustible del ala izquierda.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La caja reductora dispone de un visor o mirilla de cristal en la tobera inferior del capó delantero de la góndola, permitiendo al piloto verificar que el aceite de reductora se encuentra en la marca central.",
    },
    {
      id: "da42-4-7",
      question:
        "Al drenar las válvulas de combustible situadas bajo la góndola y el ala izquierda, ¿cuál es el procedimiento y criterio de aceptación requerido?",
      options: [
        "Purgar combustible en un vaso de muestreo transparente comprobando la ausencia total de agua, sedimentos o impurezas y el color característico del combustible de aviación.",
        "Drenar combustible directamente sobre el suelo de la plataforma hasta que huela a queroseno.",
        "Abrir el drenador solo si el indicador de cabina marca menos de 10 galones.",
        "Comprobar que el combustible drenado contenga alcohol etílico anticongelante.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El muestreo debe realizarse con un vaso de prueba limpio y transparente para inspeccionar visualmente la ausencia de agua (que decanta al fondo) y partículas sólidas antes de cada vuelo.",
    },
    {
      id: "da42-4-8",
      question:
        "Durante la inspección del borde de salida del ala izquierda (alerón y flap), ¿qué elementos mecánicos específicos deben verificarse?",
      options: [
        "Libertad y suavidad de movimiento del alerón, holguras dentro de límites, bisagras con pasadores de seguridad (split pins) colocados y varillas de accionamiento del flap íntegras.",
        "Que los alerones estén soldados rígidamente para evitar oscilaciones.",
        "Que el flap no se mueva bajo ninguna circunstancia eléctrica.",
        "Que la aleta de compensación del timón de dirección esté pegada con cinta adhesiva.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "En el borde de salida se verifica el recorrido suave y sin rozamiento del alerón, la ausencia de juego excesivo, el aseguramiento con pasadores en las bisagras y la integridad de las varillas de empuje del flap.",
    },
    {
      id: "da42-4-9",
      question:
        "Al inspeccionar el empenaje de cola en T de la DA42, ¿cuáles son los componentes críticos que deben revisarse en el estabilizador horizontal y timón de profundidad?",
      options: [
        "Las luces de aterrizaje y el sensor de temperatura exterior OAT.",
        "El estado estructural del estabilizador horizontal, articulación y bisagras del elevador, la aleta de compensación (trim tab) y la antena de navegación VOR/LOC montada en la deriva.",
        "El radiador de aceite y la caja reductora de la hélice trasera.",
        "La toma estática alternativa de cabina y la válvula de combustible cruzado.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El empenaje en T aloja el estabilizador horizontal, el timón de profundidad con su aleta y varillaje de compensador, las bisagras y la antena dipolo VOR/LOC en la parte superior del timón de dirección.",
    },
    {
      id: "da42-4-10",
      question:
        "En el tren de aterrizaje principal derecho, además de neumático, frenos y amortiguador, ¿qué componentes eléctricos de señalización deben inspeccionarse visualmente?",
      options: [
        "Los microinterruptores de posición de tren bloqueado abajo (downlock switch) y arriba (uplock switch) con su cableado intacto.",
        "Las bujías de precalentamiento y la ECU B.",
        "El sensor de flujo de combustible y la válvula de bypass del radiador.",
        "Las antenas DME y transpondedor montadas en el tambor de freno.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El mecanismo de retracción del tren de aterrizaje cuenta con microinterruptores mecánicos que confirman al sistema G1000 el enclavamiento arriba o abajo del tren; deben inspeccionarse por suciedad, roturas o cables sueltos.",
    },
    {
      id: "da42-4-11",
      question:
        "Al revisar el ala derecha y sus bocas de combustible (principal y auxiliar si está instalado), ¿qué comprobación física debe realizarse con los tapones de llenado?",
      options: [
        "Verificar visualmente el nivel de combustible y asegurar que los tapones queden firmemente enclavados, con la lengüeta orientada hacia atrás y sellando herméticamente.",
        "Dejar los tapones flojos para permitir la entrada de aire y ventilación natural de los depósitos.",
        "Rellenar ambos depósitos con gasolina AVGAS 100LL de forma obligatoria.",
        "Retirar los tapones y guardarlos en el compartimento de equipaje delantero.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Los tapones de combustible deben comprobarse visualmente asegurando que su junta esté sana, el mecanismo de presión enclave perfectamente y la palanquilla quede alineada hacia popa para evitar que el flujo de aire aerodinámico la levante en vuelo.",
    },
    {
      id: "da42-4-12",
      question:
        "En la inspección de la hélice de paso variable MT-Propeller del motor derecho, ¿qué detalle del borde de ataque debe examinarse con especial atención?",
      options: [
        "La ausencia de golpes, mellas profundas, delaminaciones y daños en la chapa metálica de protección de acero inoxidable del borde de ataque.",
        "Que las palas giren libremente a más de 3.000 RPM empujándolas con la mano con el contacto puesto.",
        "Que la pala esté recubierta de grasa lubricante en toda su superficie externa.",
        "Que los contrapesos de paso de la hélice hayan sido desmontados.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Las hélices MT-Propeller de madera compuesta disponen de un blindaje metálico en el borde de ataque para protegerlas de piedras y erosión; cualquier daño o delaminación requiere evaluación técnica antes del vuelo.",
    },
    {
      id: "da42-4-13",
      question:
        "En el morro de la aeronave, ¿qué comprobación de seguridad es imprescindible en las compuertas de equipaje (Nose Baggage Doors) antes de dar por finalizado el walkaround?",
      options: [
        "Comprobar que ambas compuertas estén completamente cerradas, pestillos enrasados y cerraduras bloqueadas con llave.",
        "Dejar las compuertas entreabiertas para refrigerar el radar meteorológico.",
        "Llenar los compartimentos de morro por encima de 45 kg en cada lado sin pesar el equipaje.",
        "Desconectar los actuadores del tren delantero desde el interior del compartimento.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Una apertura intempestiva de la compuerta de equipaje de morro en vuelo causaría daños aerodinámicos severos e impacto contra el parabrisas; es obligatorio verificar su bloqueo físico con llave.",
    },
    {
      id: "da42-4-14",
      question:
        "¿Cuál es la longitud mínima visible de pistón cromado del tren delantero (Nose Gear) en reposo durante la inspección exterior de la DA42?",
      options: [
        "Al menos 15 cm (aprox. 5,9 in) de vástago cromado visible y limpio en el amortiguador oleoneumático.",
        "Exactamente 2 cm.",
        "50 cm con el morro levantado.",
        "No debe haber ningún pistón visible porque es un tren rígido de ballesta.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El tren delantero de la DA42 requiere una extensión mínima en reposo de al menos 15 cm (5,9 pulgadas) de pistón cromado para garantizar la amortiguación adecuada durante la carrera de despegue y aterrizaje.",
    },
    {
      id: "da42-4-15",
      question:
        "En la lista de chequeo 'Before Engine Start' (Antes del arranque de motores), ¿cuál de las siguientes acciones es obligatoria para garantizar la seguridad de los ocupantes y de la estructura?",
      options: [
        "Ajustar la posición de los pedales del timón a la talla del piloto, abrochar y ajustar cinturones/arneses, y verificar cúpula delantera y puerta trasera cerradas y enclavadas.",
        "Seleccionar flaps en posición LDG y encender las luces de aterrizaje.",
        "Poner las palancas de potencia al 100% antes de conectar la batería.",
        "Desbloquear el freno de estacionamiento para permitir que el avión ruede con la puesta en marcha.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Antes de arrancar se debe asegurar la ergonomía del piloto mediante el ajuste del pedalier, amarrar arneses de cuatro puntos y enclavar las cerraduras de cabina (cúpula con palanca y cerrojo de puerta trasera).",
    },
    {
      id: "da42-4-16",
      question:
        "Tras girar la llave de arranque (START) y arrancar un motor diésel de la DA42, ¿cuál es el tiempo máximo permitido para que la presión de aceite entre en el rango verde?",
      options: [
        "3 segundos; si no se observa presión de aceite verde en ese plazo, debe cortarse el ENGINE MASTER inmediatamente.",
        "60 segundos a ralentí.",
        "5 minutos mientras sube la temperatura del refrigerante.",
        "No hay límite de tiempo mientras el motor siga encendido.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "En los motores diésel Continental CD-135/CD-155, la presión de aceite debe alcanzar el rango verde en un máximo de 3 segundos tras el arranque; la falta de presión en ese tiempo obliga al corte inmediato del ENGINE MASTER para evitar daños mecánicos irreversibles.",
    },
    {
      id: "da42-4-17",
      question:
        "Antes de aplicar potencia de rodaje o someter a carga los motores diésel de la DA42, ¿cuál es la temperatura mínima de aceite recomendada en el G1000?",
      options: [
        "Al menos 50 °C (rango verde en la escala de OIL TEMP).",
        "Al menos 150 °C con aviso de advertencia amarillo.",
        "0 °C si se utiliza combustible diésel para automoción.",
        "No es necesario esperar a ninguna temperatura ya que el FADEC compensa la viscosidad fría.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM establece que la temperatura de aceite del motor debe alcanzar al menos 50 °C (indicador en verde) antes de aumentar potencia para rodar o someter el motor a cargas operativas elevadas.",
    },
    {
      id: "da42-4-18",
      question:
        "Durante el rodaje (Taxiing), la rueda de morro orientable de la DA42 gira con los pedales hasta ±20°. Si se necesita un viraje más cerrado (hasta 52°), ¿qué técnica debe emplearse?",
      options: [
        "Aplicar frenado diferencial suave en el pedal de la rueda principal interior al viraje mientras se mantiene potencia mínima en los motores.",
        "Pedir a un asistente exterior que empuje físicamente la punta del ala.",
        "Apagar el motor del lado exterior al viraje.",
        "Subir la palanca de flaps a posición LDG para ayudar al giro por sustentación asimétrica.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El guiado por pedales proporciona ±20° de ángulo; la aplicación combinada de pedal a fondo y freno diferencial en la rueda principal interior desacopla el resorte del tren de morro permitiendo giros cerrados de hasta 52°.",
    },
    {
      id: "da42-4-19",
      question:
        "Durante la comprobación de motores en el punto de espera (ECU Test), ¿qué secuencia automatizada realiza el FADEC cuando el piloto mantiene pulsado el botón ECU TEST?",
      options: [
        "El motor apaga ambos canales FADEC y detiene la hélice en seco.",
        "Aumenta las RPM a ~1.900, conmuta de ECU A a ECU B comprobando el gobernador de la hélice y ciclos de control, y regresa a ECU A en ralentí apagando las luces de aviso.",
        "Dispara el extintor de fuego simulado durante 15 segundos.",
        "Acelera el motor al 100% de potencia con frenos calados.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El test FADEC en punto de espera automatiza el chequeo cruzado de las computadoras A y B a ~1.900 RPM comprobando la conmutación de mando, el gobernador de hélice y la inyección sin intervención manual.",
    },
    {
      id: "da42-4-20",
      question:
        "Al realizar la prueba de máxima potencia (Full Power Check) durante 10 segundos antes del despegue, ¿qué parámetros mínimos de motor deben verificarse en el G1000?",
      options: [
        "Carga del motor (LOAD) entre 95% y 100% y velocidad de giro de hélice entre 2.250 y 2.300 RPM en ambos motores con todos los parámetros en arco verde.",
        "Carga inferior al 50% y 1.200 RPM.",
        "LOAD al 110% en arco rojo y hélice a 3.000 RPM.",
        "Solo es necesario comprobar que el horizonte artificial esté nivelado.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El Full Power Check confirma que ambos motores entregan la potencia máxima nominal de despegue (95-100% LOAD) y que los gobernadores de hélice clavan las RPM en el régimen de trabajo (2.250 a 2.300 RPM).",
    },
    {
      id: "da42-4-21",
      question:
        "Para un despegue normal en la DA42 (Flaps UP, peso máximo típico de 1.700 kg), ¿cuáles son las velocidades indicadas de rotación (vr) y de mejor régimen de ascenso bimotor (vy)?",
      options: [
        "vr = 70 KIAS y vy = 79 KIAS (o vx = 76 KIAS si se requiere el mejor ángulo).",
        "vr = 50 KIAS y vy = 65 KIAS.",
        "vr = 85 KIAS y vy = 120 KIAS.",
        "vr = 60 KIAS y vy = 70 KIAS.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Las velocidades publicadas en el AFM para despegue normal con flaps UP a 1.700 kg son vr = 70 KIAS y vy = 79 KIAS para el ascenso inicial en ambos motores.",
    },
    {
      id: "da42-4-22",
      question:
        "¿En qué momento exacto durante el despegue inicial debe subirse la palanca del tren de aterrizaje (Gear UP)?",
      options: [
        "Inmediatamente al despegar las ruedas de la pista, sin mirar los instrumentos.",
        "Únicamente cuando se confirme ascenso positivo simultáneo en el altímetro y variómetro (VSI) y no quede longitud de pista remanente para aterrizar y frenar con seguridad.",
        "Al alcanzar el nivel de crucero a 10.000 ft.",
        "Al cruzar la velocidad vA de maniobra.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La regla de oro bimotor exige mantener el tren abajo mientras exista pista física remanente para frenar en caso de fallo prematuro, retrayéndolo solo con ascenso positivo firme y sin pista utilizable.",
    },
    {
      id: "da42-4-23",
      question:
        "Si la DA42 está equipada con depósitos de combustible auxiliares (Auxiliary Tanks), ¿cuándo y cómo se realiza el trasvase a los depósitos principales en crucero?",
      options: [
        "Cuando la cantidad en los depósitos principales baje a ≤ 17 US gal (aprox. 64 L), activando los interruptores FUEL AUX PUMPS de cada ala durante el tiempo necesario para rellenarlos.",
        "Antes de encender los motores en tierra con las llaves de contacto en OFF.",
        "Los depósitos auxiliares alimentan directamente a los inyectores sin pasar por los principales.",
        "Solo en el tramo de viento en cola justo antes de aterrizar.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Los depósitos auxiliares trasvasan combustible a los depósitos principales mediante bombas eléctricas auxiliares; debe iniciarse cuando los tanques principales descienden a 17 galones o menos para no rebosarlos.",
    },
    {
      id: "da42-4-24",
      question:
        "¿Cuáles son las velocidades máximas de extensión de flaps (vFE) en la DA42 para las posiciones T/O y LDG?",
      options: [
        "Flaps T/O hasta 133 KIAS y Flaps LDG hasta 113 KIAS.",
        "Flaps T/O hasta 90 KIAS y Flaps LDG hasta 80 KIAS.",
        "Flaps T/O hasta 155 KIAS y Flaps LDG hasta 140 KIAS.",
        "No tienen limitación de velocidad.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Las limitaciones estructurales del AFM Sección 2 fijan vFE en 133 KIAS para la posición intermedia Takeoff (T/O) y en 113 KIAS para la deflexión completa Landing (LDG).",
    },
    {
      id: "da42-4-25",
      question:
        "Al iniciar una maniobra de motor y al aire / frustrada bimotor (Go-Around) desde la configuración de aterrizaje completo, ¿cuál es el primer cambio de configuración de flaps requerido?",
      options: [
        "Subir los flaps completamente a posición UP de golpe.",
        "Retraer los flaps inmediatamente de posición LDG a posición T/O (intermedia) mientras se aplica potencia máxima (MAX Power) y se adopta actitud de ascenso.",
        "Mantener los flaps en LDG durante todo el ascenso hasta altitud de crucero.",
        "Cortar la potencia de ambos motores y planear hacia el terreno.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "En frustrada bimotor, la resistencia parásita excesiva de la posición LDG se elimina de inmediato seleccionando Flaps T/O mientras se aplica máxima potencia, retrayendo a UP solo cuando se alcance una altitud segura y velocidad superior a 79 KIAS.",
    },
    {
      id: "da42-4-26",
      question:
        "Tras el aterrizaje y rodaje al estacionamiento, ¿por qué es obligatorio mantener los motores diésel Continental a ralentí (IDLE) durante al menos 2 minutos antes de cortar el ENGINE MASTER?",
      options: [
        "Para permitir que los turbocompresores se enfríen gradualmente con flujo continuo de aceite y evitar la coquización o carbonización del lubricante en sus cojinetes de alta temperatura.",
        "Para vaciar completamente el combustible de las líneas de inyección.",
        "Para calentar los frenos de disco antes de parar.",
        "Para descargar las baterías principales a cero voltios.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Los turbocompresores operan a temperaturas extremas; detener el flujo de aceite de golpe con el turbo caliente quemaría el aceite residual en los cojinetes (coquización), provocando fallos catastróficos prematuros.",
    },
    {
      id: "da42-4-27",
      question:
        "Durante las operaciones de repostaje de combustible Jet A-1 en la DA42, ¿qué medida de prevención electrostática es obligatoria antes de retirar los tapones de los depósitos?",
      options: [
        "Conectar firmemente el cable de toma de tierra/masa (grounding wire) del camión cisterna o manguera al perno de puesta a tierra de la aeronave.",
        "Humedecer las alas con agua salada.",
        "Dejar conectada la alimentación externa de corriente (GPU).",
        "Mantener un motor en ralentí para disipar la carga.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La fricción del combustible al fluir genera cargas electrostáticas elevadas; conectar el cable de masa al perno específico de la aeronave antes de abrir tapones iguala los potenciales y elimina el riesgo de chispas inflamables.",
    },
  ],
};

export const DA42_LESSON_5_QUIZ: Quiz = {
  id: "quiz-da42-lesson-5",
  course_id: DA42_COURSE_ID,
  lesson_id: "da420000-0000-0000-0000-000000000050",
  title:
    "Examen de Verificación: 5. Procedimientos de Emergencia y Casos Anómalos",
  description:
    "Evaluación teórica de verificación sobre velocidades críticas de emergencia (vMCA, vYSE), avisos G1000 de temperatura y presión, fallos de motor (EFATO, crucero, aproximación, frustrada monomotor), embanderado y reencendido, emergencias eléctricas y de fuego, tren de aterrizaje, barrena y procedimientos anómalos de la Diamond DA42 Twin Star (Continental CD-135 / CD-155).",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da42-5-1",
      question:
        "¿Cuáles son las velocidades críticas monomotor de referencia en emergencias para la DA42 y cuál es la frecuencia internacional de socorro?",
      options: [
        "vMCA = 68 KIAS (mínimo control monomotor), vYSE = 82 KIAS (mejor régimen de ascenso monomotor) y 121.500 MHz en la radio de comunicaciones.",
        "vMCA = 82 KIAS, vYSE = 68 KIAS y 123.450 MHz.",
        "vMCA = 56 KIAS, vYSE = 76 KIAS y 118.100 MHz.",
        "vMCA = 70 KIAS, vYSE = 90 KIAS y 121.000 MHz.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM Sección 3.1.2 fija la vMCA en 68 KIAS y la vYSE en 82 KIAS (línea azul). En el G1000 se sintoniza 121.500 MHz manteniendo pulsado el botón COM transfer más de 2 segundos.",
    },
    {
      id: "da42-5-2",
      question:
        "Ante un aviso rojo de alta temperatura de refrigerante de motor (> 105 °C) durante el ascenso en la DA42, ¿qué acción inmediata recomienda el AFM para intentar restablecer la refrigeración?",
      options: [
        "Cortar inmediatamente el interruptor ENGINE MASTER en ascenso sin intentar refrigerar.",
        "Reducir la potencia del motor afectado un 10% o más e incrementar la velocidad de ascenso 10 KIAS o más para aumentar el flujo de aire exterior de enfriamiento.",
        "Aumentar la potencia al 100% y ascender en pérdida para ganar altitud rápido.",
        "Seleccionar crossfeed de combustible y apagar los alternadores.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El procedimiento 4B.3.2 indica comprobar el nivel de refrigerante, reducir la potencia del motor afectado en al menos un 10% y subir 10 KIAS la velocidad para maximizar el caudal de aire en los radiadores.",
    },
    {
      id: "da42-5-3",
      question:
        "Si en vuelo se ilumina el aviso rojo de baja presión de aceite (< 1,0 bar) en uno de los motores Continental, ¿cuál es la conducta operativa que debe adoptar el piloto?",
      options: [
        "Subir la palanca de potencia a tope para obligar a la bomba mecánica de aceite a generar más presión.",
        "Abrir la calefacción de cabina para aliviar la presión del circuito.",
        "Reducir la potencia del motor afectado, prever una fuga total de aceite y fallo inminente del motor, y planificar un aterrizaje de precaución (asegurando y embanderando si hay vibraciones o pérdida total de presión).",
        "Ignorar el aviso si la temperatura de la reductora se mantiene en verde.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El procedimiento 4B.3.4 alerta de que una presión inferior a 1,0 bar presagia pérdida total de aceite y bloqueo mecánico; debe reducirse potencia, planificar toma de precaución y preparar la parada de motor.",
    },
    {
      id: "da42-5-4",
      question:
        "Si tras poner en marcha un motor en la DA42 la indicación de STARTER permanece iluminada de forma continua, ¿qué anomalía indica y qué debe hacerse de inmediato?",
      options: [
        "Indica que el alternador está recargando la batería principal a alta velocidad; no requiere acción.",
        "Indica que las bujías de precalentamiento siguen encendidas y se apagarán al despegar.",
        "Debe conectarse la EPU externa para desconectar el relé magnéticamente.",
        "Indica que el relé del motor de arranque ha quedado pegado/engranado; se debe cortar inmediatamente el ENGINE MASTER del motor afectado para evitar daños y riesgo de fuego.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El procedimiento 3.7.3 indica que un relé de arranque soldado destruye el motor de arranque y descarga las baterías; exige apagar el ENGINE MASTER del motor afectado de inmediato.",
    },
    {
      id: "da42-5-5",
      question:
        "En caso de fallo de una de las pantallas principales del G1000 (PFD o MFD) o si la pantalla no conmuta automáticamente al modo de reversión, ¿cómo debe actuar el piloto?",
      options: [
        "Pulsar el botón rojo DISPLAY BACKUP en el panel de audio GMA 1347 para forzar manualmente el modo de reversión en la pantalla operativa restante.",
        "Apagar el interruptor ELECT. MASTER para reiniciar el sistema operativo del G1000.",
        "Desconectar los disyuntores de las dos unidades de aviónica en vuelo.",
        "Continuar el vuelo únicamente guiándose por la brújula húmeda magnética.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El pulsador DISPLAY BACKUP ubicado en el panel de audio central fuerza la presentación combinada de instrumentos de vuelo y parámetros de motor en el display que continúa funcionando.",
    },
    {
      id: "da42-5-6",
      question:
        "Ante una pérdida repentina de potencia en vuelo, ¿cómo debe identificar el piloto de la DA42 qué motor ha fallado antes de tomar acciones de corte?",
      options: [
        "Cortar inmediatamente el motor del lado hacia el que se requiere pisar el pedal con fuerza.",
        "Identificar el pie sin resistencia sobre el timón de dirección ('pie muerto, motor muerto') y corroborar en el MFD con la caída de Load (0%), RPM y flujo de combustible.",
        "Guiarse exclusivamente por la aguja de temperatura de aceite antes de tocar el timón.",
        "Apagar ambos motores y luego reencender uno al azar.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La regla de oro multimotor ('dead foot, dead engine') identifica el lado inoperativo por la ausencia de resistencia en el timón, debiendo corroborarse en los instrumentos de motor del MFD.",
    },
    {
      id: "da42-5-7",
      question:
        "En el procedimiento de parada y puesta en bandera (Engine Securing) de la DA42, ¿qué acción principal desencadena físicamente el embanderado de la hélice?",
      options: [
        "Tirar de una palanca mecánica de paso de hélice en la consola central.",
        "Poner la palanca de potencia en IDLE y esperar a que el viento detenga el giro.",
        "Colocar el interruptor ENGINE MASTER del motor fallido en OFF; esto desenergiza la válvula solenoide liberando la presión de aceite y los contrapesos y nitrógeno llevan las palas a bandera.",
        "Apagar el alternador del motor vivo.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Al poner ENGINE MASTER en OFF, la electroválvula del gobernador se desenergiza, evacuando el aceite del buje de la MT-Propeller; la presión del nitrógeno y los contrapesos colocan las palas a 81° (bandera).",
    },
    {
      id: "da42-5-8",
      question:
        "Para efectuar un reencendido de motor por molinete (Windmilling Restart) sin utilizar el arrancador eléctrico en la DA42, ¿cuál es el rango de velocidad indicada requerido por el AFM?",
      options: [
        "Entre 68 y 75 KIAS a cualquier altitud.",
        "Superior a 180 KIAS con flaps en posición LDG.",
        "Entre 82 y 95 KIAS exclusivamente con tren extendido.",
        "Entre 125 y 145 KIAS a una altitud máxima recomendada de 10.000 ft.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El AFM 3.5.4(a) establece que para que el acumulador de presión venza los contrapesos y la hélice comience a girar por molinete de forma autónoma, la velocidad debe estar entre 125 y 145 KIAS (<= 10.000 ft).",
    },
    {
      id: "da42-5-9",
      question:
        "Si un motor falla o presenta anomalías graves durante la carrera de despegue en pista antes de la rotación, disponiendo de pista remanente suficiente para detener el avión, ¿cuál es la primera y prioritaria acción del piloto?",
      options: [
        "Reducir ambas palancas de potencia inmediatamente a ralentí (IDLE), mantener el eje de pista con timón y aplicar frenada máxima según sea necesario.",
        "Aplicar potencia máxima en el motor sano y continuar el despegue monomotor en pista.",
        "Poner la hélice en bandera y abrir la cúpula para frenar aerodinámicamente.",
        "Subir el morro de inmediato para saltar los obstáculos del final de pista.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Con pista remanente suficiente y por debajo de Vr, el despegue se aborta siempre: ambas palancas a IDLE, timón para evitar la guiñada asimétrica y frenar enérgicamente dentro del pavimento.",
    },
    {
      id: "da42-5-10",
      question:
        "Ante un fallo de motor inmediatamente después del despegue (EFATO) con el tren de aterrizaje ya recogido y velocidad superior a 82 KIAS (vYSE), ¿qué criterio operativo establece el AFM?",
      options: [
        "Aterrizar de inmediato en el campo de frente independientemente de la altitud o velocidad.",
        "Potencia máxima en el motor operativo, flaps UP, mantener 82 KIAS (vYSE), identificar y embanderar el motor fallido, y continuar ascenso hacia altitud segura.",
        "Reducir a 68 KIAS (vMCA) para ascender con el mayor ángulo posible.",
        "Extender flaps en LDG para conseguir sustentación extra con un solo motor.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Si el tren está arriba y la velocidad supera vYSE (82 KIAS), la DA42 es capaz de mantener ascenso monomotor positivo; se mantiene la línea azul, se limpia la resistencia y se asegura el motor fallido.",
    },
    {
      id: "da42-5-11",
      question:
        "Durante el vuelo continuado con un motor inoperativo (OEI) en crucero, ¿cómo debe ajustarse la actitud aerodinámica y el compensador de dirección para lograr la mínima resistencia?",
      options: [
        "Mantener la bola exactamente centrada y las alas perfectamente horizontales a nivel cero.",
        "Bancar 10° hacia el lado del motor fallido para compensar la guiñada.",
        "Ajustar el timón de dirección para mantener media bola desplazada hacia el motor operativo y bancar entre 3° y 5° hacia el lado del motor vivo.",
        "Mantener los flaps en posición T/O durante todo el vuelo de crucero monomotor.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Para anular la resistencia inducida por el resbale lateral en vuelo monomotor, se debe volar con 3° a 5° de alabeo hacia el motor vivo y la bola desplazada aproximadamente la mitad de su diámetro hacia el motor bueno.",
    },
    {
      id: "da42-5-12",
      question:
        "En una aproximación y aterrizaje con un motor inoperativo en la DA42, ¿en qué momento debe seleccionarse la posición completa de flaps (LDG)?",
      options: [
        "En el tramo de viento en cola al interceptar la altitud del circuito.",
        "Al cruzar el punto de referencia de inicio del viraje a base.",
        "Nunca se deben utilizar flaps en aproximaciones monomotor.",
        "Únicamente en corta final cuando el aterrizaje en pista esté absolutamente asegurado y ya no se contemple la posibilidad de frustrar la toma.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "Los flaps en LDG generan una resistencia aerodinámica muy alta que comprometería gravemente la capacidad de ascender en caso de frustrada; solo se extienden cuando el toque en pista es ineludible y seguro.",
    },
    {
      id: "da42-5-13",
      question:
        "Al ejecutar un motor y al aire con un motor inoperativo (Single-Engine Go-Around) en la DA42, ¿cuál es la velocidad de seguridad que debe alcanzarse y mantenerse para asegurar el ascenso?",
      options: [
        "vYSE = 82 KIAS (línea azul del velocímetro) con tren arriba y flaps retraídos.",
        "vMCA = 68 KIAS con flaps en posición LDG.",
        "105 KIAS con flaps en posición T/O.",
        "60 KIAS manteniendo el tren extendido para evitar guiñada.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La maniobra de frustrada monomotor requiere potencia máxima en el motor operativo, acelerar a vYSE (82 KIAS), retraer tren y flaps con ascenso positivo para conseguir tasa de trepada.",
    },
    {
      id: "da42-5-14",
      question:
        "Si se detecta fuego de motor en tierra durante el rodaje o la puesta en marcha en la DA42, ¿cuál es la secuencia inmediata de corte y aislamiento de sistemas?",
      options: [
        "Dejar los motores al ralentí y encender la bomba auxiliar de combustible.",
        "Ambos ENGINE MASTER en OFF, ambos FUEL SELECTOR en OFF y ELECT. MASTER en OFF, procediendo a la evacuación inmediata de los ocupantes.",
        "Desconectar únicamente la batería y esperar a que el combustible se consuma solo.",
        "Conectar el aire acondicionado de cabina para expulsar las llamas.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Ante fuego en tierra es vital aislar el foco de combustión y desenergizar la cabina: cortar de golpe alimentación de inyección (ENGINE MASTER), paso de combustible desde las alas (SELECTORS) y electricidad (ELECT. MASTER).",
    },
    {
      id: "da42-5-15",
      question:
        "Ante la confirmación de fuego en uno de los motores durante el vuelo, ¿por qué es mandatorio colocar de inmediato los mandos de Cabin Heat y Defrost en posición OFF?",
      options: [
        "Para evitar que aumente la presión de aire en los turbocompresores.",
        "Para reducir el consumo de combustible del motor sano.",
        "Para cortar inmediatamente la entrada de humo, gases tóxicos y posibles llamas hacia el habitáculo de la cabina a través del sistema de ventilación.",
        "Para desviar aire caliente hacia las alas y evitar el engelamiento.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El sistema de calefacción de cabina toma aire próximo a las góndolas motoras; ante fuego, es imperativo cerrar Cabin Heat y Defrost para evitar la asfixia o intoxicación de los ocupantes.",
    },
    {
      id: "da42-5-16",
      question:
        "Si se genera humo denso o fuego de origen eléctrico tras el panel de instrumentos en vuelo, ¿cuál es el procedimiento para desenergizar el sistema sin perder los instrumentos esenciales en IMC?",
      options: [
        "Cortar ambos ENGINE MASTER y planear a ciegas hacia el suelo.",
        "Desconectar únicamente el piloto automático y encender todas las luces de cabina.",
        "Mantener todos los sistemas eléctricos encendidos y abrir la cúpula principal en vuelo rápido.",
        "Activar el interruptor EMERGENCY en ON (alimentando el horizonte standby) y seguidamente colocar AVIONIC MASTER y ELECT. MASTER en OFF, abriendo la ventilación.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "Al pasar el switch EMERGENCY a ON, el horizonte de actitud standby queda alimentado por su batería de reserva propia; así se pueden apagar con seguridad los buses principales (ELECT. MASTER y AVIONIC MASTER en OFF).",
    },
    {
      id: "da42-5-17",
      question:
        "En caso de un fallo eléctrico total en la DA42, ¿qué instrumentos y sistemas continúan operativos al activar el interruptor EMERGENCY en ON y durante cuánto tiempo?",
      options: [
        "El horizonte artificial de reserva (Standby Horizon) y la luz de inundación de cabina durante un mínimo de 1 hora y 30 minutos mediante su propio pack de baterías independientes.",
        "Ambas pantallas G1000 completas durante 4 horas.",
        "El tren de aterrizaje y los flaps hidráulicos de forma indefinida.",
        "La radio principal COM 1 y el transpondedor durante 30 minutos.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El paquete de baterías secas del sistema de emergencia alimenta exclusivamente el horizonte artificial analógico standby y la luz de cortesía superior durante al menos 90 minutos (AFM 3.7.1).",
    },
    {
      id: "da42-5-18",
      question:
        "Al ejecutar la extensión manual de emergencia del tren de aterrizaje en la DA42, ¿qué velocidad máxima no debe rebasarse y cómo se enclavan las patas del tren?",
      options: [
        "Velocidad máxima de 100 KIAS y requiere bombear una palanca manual 50 veces.",
        "Velocidad máxima de 156 KIAS (vLOR); al tirar del mando de emergencia se libera la presión hidráulica y el tren cae por gravedad y muelles mecánicos hasta enclavarse (3 verdes).",
        "Velocidad máxima de 188 KIAS y se enclava mediante cartuchos pirotécnicos de gas.",
        "No hay límite de velocidad si se tira de la palanca roja con flaps abajo.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Por debajo de vLOR (156 KIAS), tirar de la palanca de emergencia libera las válvulas del bloque hidráulico; la gravedad y los resortes extienden y bloquean las tres patas en su posición baja.",
    },
    {
      id: "da42-5-19",
      question:
        "Durante un aterrizaje de emergencia con tren arriba (panzada) en la DA42, ¿qué acción final recomienda el AFM realizar justo antes de la toma de tierra para minimizar el riesgo de incendio?",
      options: [
        "Mantener ambos motores a potencia de despegue hasta que el fuselaje impacte la pista.",
        "Abrir los tanques de combustible auxiliares para vaciarlos en el aire a baja cota.",
        "Cortar ambos interruptores ENGINE MASTER y selectores de combustible justo antes del contacto con el suelo, y apagar el ELECT. MASTER tras la parada total antes de evacuar.",
        "Poner el morro abajo bruscamente para clavar los motores en la tierra.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Cortar los motores instantes antes del impacto detiene la rotación de las hélices (evitando metralla de palas y rotura violenta) y corta el flujo de combustible a alta presión en el vano motor.",
    },
    {
      id: "da42-5-20",
      question:
        "Al aterrizar con un neumático del tren principal desinflado en la DA42, ¿cuál es la técnica de toma de tierra y control direccional recomendada?",
      options: [
        "Aterrizar con el ala de la rueda pinchada baja para forzar el frenado inmediato por fricción de llanta.",
        "Tomar con el morro muy alto y aplicar freno de estacionamiento antes del toque de ruedas.",
        "Desviar el avión hacia la hierba antes de cruzar el umbral de pista.",
        "Tomar tierra primero sobre la rueda principal inflada (ala sana baja), retrasando el contacto de la rueda pinchada el mayor tiempo posible y manteniendo el control de guiñada con timón y freno sano.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El AFM 3.6.4 prescribe tocar sobre el borde de pista del lado de la rueda intacta con esa ala ligeramente baja, manteniendo la pata desinflada en el aire mientras la velocidad aerodinámica lo permita.",
    },
    {
      id: "da42-5-21",
      question:
        "Para configurar la DA42 en un descenso de emergencia rápido (Emergency Descent) manteniendo la máxima tasa de caída estructuralmente segura, ¿qué elementos deben configurarse?",
      options: [
        "Flaps en posición UP, tren de aterrizaje DOWN (actuando como freno aerodinámico), ambas palancas de potencia en IDLE y velocidad hasta vNO (155 KIAS) o vNE en aire en calma.",
        "Flaps en posición LDG, tren UP y potencia al 100% en picada.",
        "Parar ambos motores y dejar las hélices en molinete en posición horizontal.",
        "Abrir la cúpula de cabina en vuelo a 180 KIAS.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El procedimiento 3.9.7 indica flaps UP, tren abajo (que actúa como un eficaz freno aerodinámico), palancas a ralentí y acelerar hasta la velocidad máxima permitida por la turbulencia ambiental.",
    },
    {
      id: "da42-5-22",
      question:
        "Ante una entrada inadvertida en barrena (Spin) en la DA42, ¿cuál es la secuencia estándar de recuperación inmediata según el AFM?",
      options: [
        "Aplicar potencia máxima asimétrica en el motor exterior de la barrena y tirar de la palanca hacia atrás.",
        "Potencia a IDLE, timón a fondo en sentido contrario al giro de la barrena, palanca de mando adelante con alerones neutros y flaps UP, centrando pedales al cesar el giro.",
        "Mantener timón en el sentido del giro y desplegar flaps en posición LDG.",
        "Dejar los mandos completamente sueltos y esperar a que el avión salga por sí mismo.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La DA42 se recupera de barrena aplicando la técnica clásica certificada: cortar potencia, timón opuesto a la rotación, picar para quebrar la pérdida con alerones neutros y centrar al detenerse el giro.",
    },
    {
      id: "da42-5-23",
      question:
        "Si en vuelo de crucero se observan fluctuaciones u oscilaciones periódicas en las RPM de una hélice que no se corrigen variando la potencia, ¿qué procedimiento técnico permite verificar el control de la gobernación?",
      options: [
        "Apagar el alternador del motor opuesto.",
        "Cortar el disyuntor de la bomba de aceite de la hélice en vuelo.",
        "Accionar el interruptor selector ECU SWAP a la posición ECU B para forzar el control del motor y gobernador por la ECU secundaria (volviendo a AUTO si la anomalía continúa).",
        "Realizar una prueba de paso de bandera en vuelo de crucero.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El procedimiento 3.9.3 indica que ante RPM oscilantes se debe probar cambiando la potencia y, si persiste, conmutar mediante ECU SWAP a la ECU B para comprobar si el canal B estabiliza el control de la hélice.",
    },
    {
      id: "da42-5-24",
      question:
        "Si es necesario aterrizar con una masa superior a la máxima de aterrizaje (entre 1.700 kg y 1.785 kg MTOW), ¿qué velocidades y precauciones operativas exige el procedimiento anómalo 4B.8 del AFM?",
      options: [
        "Mantener al menos 84 KIAS (FLAPS APP) u 86 KIAS, limitar el régimen de descenso con toma suave, evitar frenadas bruscas e inspeccionar el tren tras aterrizar.",
        "Aterrizar por debajo de 75 KIAS con FLAPS LDG, aplicar frenada máxima nada más tocar pista y continuar el siguiente vuelo con normalidad.",
        "Aumentar el régimen de descenso en corta final para tocar firme en la zona de toma y detener el avión antes de consumir pista.",
        "Vaciar combustible en vuelo mediante las válvulas de vaciado rápido de emergencia hasta quedar por debajo de 1.500 kg.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El procedimiento 4B.8 (Landing with High Mass > 1700 kg) exige mantener una velocidad mínima de aproximación (84 KIAS con FLAPS APP / 86 KIAS), efectuar una toma suave con mínima velocidad vertical para evitar daños estructurales en el tren, evitar frenadas bruscas para prevenir sobrecalentamiento de frenos e inspeccionar el tren y anotarlo en el libro de mantenimiento tras aterrizar.",
    },
  ],
};

export const DA42_LESSON_6_QUIZ: Quiz = {
  id: "quiz-da42-lesson-6",
  course_id: DA42_COURSE_ID,
  lesson_id: "da420000-0000-0000-0000-000000000060",
  title:
    "Examen de Verificación: 6. Documentación Prevuelo, Masa y Centrado, Combustible y Performance",
  description:
    "Evaluación teórica de verificación sobre despacho operativo F.OPS.02, teoría de masa y centrado, loadsheet F.OPS.04, envolvente de CG, planificación de combustible bimotor (reserva 1h 30min OM Blue Team), densidades JET A-1 y ábacos de performance de despegue y aterrizaje de la Diamond DA42 Twin Star (Continental CD-135 / CD-155).",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da42-6-1",
      question:
        "¿Cuáles son los 4 pilares operacionales obligatorios que el Piloto al Mando (PIC) debe cumplimentar y verificar en el formulario de despacho F.OPS.02 antes de iniciar cualquier vuelo en la DA42 Twin Star?",
      options: [
        "Masa y centrado (W&B dentro de la envolvente y sin exceder MTOM), planificación de combustible (Fuel Planning con reserva OM de 1h 30m), performance de despegue y performance de aterrizaje factorizada.",
        "Horas de vuelo del alumno en multimotor, pronóstico de ruta a 5 días y revisión médica aeronáutica anual.",
        "Presión de neumáticos, nivel de aceite de las dos cajas reductoras y voltaje de batería principal.",
        "Plan de vuelo IFR en Eurocontrol, tasas de navegación aérea y asignación de slots de llegada.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El formulario F.OPS.02 (Hoja de Despacho Operacional de Blue Team) exige la verificación documental de los cuatro pilares: 1) Masa y Centrado (Part-NCO.GEN.105), 2) Planificación de Combustible con reserva reforzada OM de 1h 30m (Part-NCO.OP.125), 3) Performance de Despegue y 4) Performance de Aterrizaje.",
    },
    {
      id: "da42-6-2",
      question:
        "En la Diamond DA42 Twin Star, ¿dónde se sitúa exactamente el plano de referencia longitudinal (Datum) según la Sección 6 del AFM?",
      options: [
        "En la punta del cono de la hélice izquierda (propeller spinner tip).",
        "En un plano vertical situado a 2,196 metros (86,46 in) por delante del punto más adelantado de la costilla de raíz del ala corta (stub wing root rib).",
        "En el cortafuegos delantero de las dos góndolas de los motores Continental.",
        "Exactamente sobre el eje central del tren de aterrizaje principal.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "De acuerdo con la Sección 6 del AFM de la DA42, el Datum se define como un plano vertical imaginario localizado a 2,196 metros (86,46 pulgadas) por delante del punto anterior de la costilla de raíz del ala corta (stub wing root rib), midiéndose todos los brazos hacia atrás en valores positivos.",
    },
    {
      id: "da42-6-3",
      question:
        "De acuerdo con el Loadsheet oficial F.OPS.04 y el AFM de la DA42, ¿cuáles son los brazos de palanca (estaciones) correspondientes al equipaje de morro y a los tanques principales de combustible en las alas?",
      options: [
        "Equipaje de morro a 2,300 m y tanques principales a 0,600 m tras el Datum.",
        "Equipaje de morro a 1,250 m y tanques principales a 3,890 m tras el Datum.",
        "Equipaje de morro a 0,600 m y tanques principales de combustible a 2,630 m tras el Datum.",
        "Equipaje de morro a 3,250 m y tanques principales a 2,420 m tras el Datum.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "En el F.OPS.04 y el AFM de la DA42, el compartimento de morro (capacidad máxima 30 kg) tiene un brazo muy adelantado de 0,600 m (23,6 in), mientras que los depósitos principales de combustible alares se sitúan en la estación 2,630 m (103,5 in) tras el Datum.",
    },
    {
      id: "da42-6-4",
      question:
        "En la envolvente oficial de masa y centrado de la DA42 Twin Star (AFM 6.4.4), ¿cuál es el límite trasero (Aft CG Limit) admisible a lo largo de todo el rango de masas?",
      options: [
        "2,35 m constante hasta 1.468 kg de masa.",
        "2,40 m en despegue y 2,42 m en aterrizaje.",
        "2,63 m correspondiente a la línea de los depósitos alares.",
        "2,48 m (97,6 in) constante desde la masa mínima en vuelo hasta la MTOM máxima certificada.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "La envolvente oficial de la DA42 establece un límite de centrado trasero rígido e invariable de 2,48 m (97,6 in) a lo largo de todo el rango de masas, tanto para la MTOM estándar de 1.700 kg como para los 1.785 kg con modificación MÄM 42-088.",
    },
    {
      id: "da42-6-5",
      question:
        "¿Cómo se calcula la Zero Fuel Mass (ZFM) en la DA42 y qué masa de despegue (TOM) resulta al añadir 140,0 kg (166,7 L) de Jet A-1 a una ZFM de 1.435,0 kg?",
      options: [
        "La ZFM es la masa vacía más tripulación y equipaje (1.435,0 kg); sumando el combustible de despegue (140,0 kg) se obtiene una TOM de 1.575,0 kg.",
        "La ZFM es la masa máxima de despegue menos el combustible de reserva; la TOM resultante sería 1.700,0 kg.",
        "La ZFM incluye el combustible de contingencia y ruta; la TOM resultante sería de 1.435,0 kg.",
        "La ZFM equivale a la masa de aterrizaje; la TOM resultante sería de 1.621,4 kg.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "ZFM = BEW (1.250 kg) + Pilotos (160 kg) + Equipajes (25 kg) = 1.435,0 kg. Al añadir el Takeoff Fuel de 140,0 kg (166,7 L a 0,84 kg/L), la Masa de Despegue (TOM) calculada es exactamente 1.575,0 kg.",
    },
    {
      id: "da42-6-6",
      question:
        "Puesto que los depósitos principales alares están en la estación 2,630 m (por detrás del CG medio del avión), ¿cómo evoluciona la posición del centro de gravedad al quemar el combustible de ruta (Trip Fuel)?",
      options: [
        "El centro de gravedad se desplaza hacia atrás, acercándose al límite de 2,48 m.",
        "El centro de gravedad se desplaza progresivamente hacia adelante, por lo que es obligatorio verificar que no rebase el límite adelantado al aterrizar.",
        "El centro de gravedad permanece completamente estático e inmóvil durante todo el vuelo.",
        "El centro de gravedad se desvía exclusivamente hacia el ala izquierda por efecto del par motor.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Al encontrarse los tanques principales a 2,630 m (traseros respecto al rango operativo de CG de 2,40 a 2,45 m), el consumo de combustible resta peso de atrás, provocando que el centro de gravedad avance hacia la proa. En el aterrizaje debe verificarse que el LCG no viole el límite delantero.",
    },
    {
      id: "da42-6-7",
      question:
        "En la DA42 Twin Star con motores Continental CD-135 / CD-155, ¿cuál es el consumo horario medio total bimotor en régimen de crucero estándar al 60% de carga (LOAD) según las tablas del AFM?",
      options: [
        "Aproximadamente 20,4 L/h total (consumo típico de la monomotor DA40).",
        "Aproximadamente 55,0 L/h total bimotor.",
        "Aproximadamente 33,0 L/h total bimotor (16,5 L/h por motor / 27,7 kg/h).",
        "Aproximadamente 12,5 L/h total bimotor.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Las tablas de crucero del AFM de la DA42 indican que al 60% de LOAD el consumo total de ambos motores asciende a 33,0 L/h (16,5 L/h por motor, equivalentes a 8,7 USG/h o 27,7 kg/h de Jet A-1).",
    },
    {
      id: "da42-6-8",
      question:
        "Si durante un vuelo de crucero en la DA42 se encuentra una fuerte componente de viento de cara (headwind), ¿qué impacto directo tiene sobre la navegación y el combustible requerido?",
      options: [
        "Aumenta la velocidad sobre el suelo (GS) y disminuye el consumo horario de los motores.",
        "No modifica la GS ni el tiempo de vuelo, solo altera la temperatura del refrigerante motor.",
        "Reduce el combustible de reserva obligatoria por volar a menor régimen de avance.",
        "Disminuye la velocidad sobre el suelo (GS), aumenta el tiempo estimado en ruta (ETE) y aumenta la cantidad necesaria de combustible de etapa (Trip Fuel).",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El viento de cara reduce la Ground Speed (GS = TAS - Vviento). Al ser menor la GS, el tiempo de vuelo aumenta (ETE = Distancia / GS), demandando mayor cantidad de combustible de crucero (Trip Fuel = ETE x Consumo Horario).",
    },
    {
      id: "da42-6-9",
      question:
        "Con los depósitos principales alares completos (189,2 L utilizables) y manteniendo crucero bimotor al 60% LOAD (33,0 L/h), ¿cuál es la autonomía bruta máxima de la DA42 antes de considerar reservas?",
      options: [
        "Más de 5 horas y media brutas de vuelo (aproximadamente 5,73 horas / 5 h 44 min continuados).",
        "Apenas 2 horas y 15 minutos de autonomía máxima.",
        "Más de 9 horas y media de vuelo continuado con tanques principales.",
        "Exactamente 3 horas y 30 minutos de autonomía.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Dividiendo 189,2 litros utilizables de los depósitos principales entre el consumo bimotor al 60% LOAD de 33,0 L/h se obtienen 5,73 horas brutas de vuelo (5 horas y 44 minutos) antes de agotar los tanques.",
    },
    {
      id: "da42-6-10",
      question:
        "De acuerdo con la normativa interna de seguridad del Manual de Operaciones (OM) de Blue Team, ¿cuál es la reserva final de combustible obligatoria que debe mantenerse inalterable para cualquier vuelo en la DA42?",
      options: [
        "45 minutos de reserva como marca el mínimo reglamentario estándar de EASA Part-NCO (24,8 L).",
        "1 hora y 30 minutos (90 minutos) de reserva final inalterable, equivalente a 49,5 litros de Jet A-1 en bimotor.",
        "30 minutos de reserva diurna o 15 minutos en circuito de tráfico local en Tenerife Norte.",
        "2 horas y 30 minutos de reserva obligatoria independientemente de la ruta.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El Operations Manual (OM) de Blue Team impone para el bimotor DA42 una reserva final reforzada de 1 hora y 30 minutos (49,5 L de Jet A-1 a 33 L/h), duplicando el mínimo legal de 45 min de EASA Part-NCO para maximizar la seguridad operacional.",
    },
    {
      id: "da42-6-11",
      question:
        "En la planificación de combustible del F.OPS.02 de la DA42, ¿cuál es el factor de densidad estándar del Jet A-1 y qué combustible mínimo de rampa resulta para 1 hora de ruta local con 20 min de alternativo y reserva OM de 1h 30m?",
      options: [
        "Densidad de 0,72 kg/L y un combustible mínimo de rampa de 65,0 litros.",
        "Densidad de 1,00 kg/L y un combustible mínimo de rampa de 150,0 litros.",
        "Densidad de 0,84 kg/L y un combustible mínimo de rampa de 99,5 litros (Taxi 6 L + Trip 33 L + Alternativo 11 L + Reserva 49,5 L).",
        "Densidad de 0,84 kg/L y un combustible mínimo de rampa de 49,5 litros.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El Jet A-1 tiene una densidad estándar de 0,84 kg/L. El desglose mínimo exigido en el F.OPS.02 para 1 hora de vuelo es: Rodaje 6,0 L + Ruta 33,0 L + Alternativo 11,0 L + Reserva final OM 49,5 L = 99,5 L (83,6 kg de Jet A-1).",
    },
    {
      id: "da42-6-12",
      question:
        "Según las condiciones de referencia de despegue del AFM (Sección 5) de la DA42, ¿cuáles son las velocidades de rotación (Vr) con Flaps UP / T/O, cruce de obstáculo de 50 ft y ascenso monomotor (Vyse)?",
      options: [
        "Vr = 70 KIAS (UP) / 67 KIAS (T/O), 50 ft = 77 KIAS y Vyse = 82 KIAS.",
        "Vr = 60 KIAS (UP) / 55 KIAS (T/O), 50 ft = 68 KIAS y Vyse = 75 KIAS.",
        "Vr = 76 KIAS (UP) / 72 KIAS (T/O), 50 ft = 85 KIAS y Vyse = 90 KIAS.",
        "Vr = 82 KIAS (UP) / 79 KIAS (T/O), 50 ft = 88 KIAS y Vyse = 95 KIAS.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "En condiciones de referencia AFM Sección 5 (MAX 100% Load), la DA42 rota a Vr = 70 KIAS con Flaps UP (67 KIAS con Flaps T/O), cruza los 50 ft a 77 KIAS, asciende con dos motores a Vy = 79 KIAS y con un solo motor operativo a Vyse = 82 KIAS.",
    },
    {
      id: "da42-6-13",
      question:
        "Al consultar las tablas de aterrizaje del AFM de la DA42 (Flaps LDG), ¿cuál es la velocidad de referencia (v_REF) a 1.700 kg y cuál es la penalización por componente de viento en cola (tailwind)?",
      options: [
        "v_REF = 76 KIAS y la distancia de aterrizaje se incrementa un 10% por cada 2 nudos de viento en cola.",
        "v_REF = 65 KIAS y la distancia se incrementa un 5% por cada 10 nudos de viento en cola.",
        "v_REF = 82 KIAS y el viento en cola no penaliza si se frena al máximo.",
        "v_REF = 70 KIAS y la distancia se reduce un 10% por el empuje dinámico.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "A la MTOM estándar de 1.700 kg con Flaps LDG, la velocidad de aproximación de referencia es v_REF = 76 KIAS. El viento en cola penaliza fuertemente incrementando la distancia en un 10% por cada 2 kt.",
    },
    {
      id: "da42-6-14",
      question:
        "En la verificación de performance de despegue del formulario F.OPS.02 frente a las distancias declaradas del aeródromo, ¿qué condición reglamentaria debe cumplirse inexcusablemente?",
      options: [
        "Basta con que la carrera en suelo (Ground Roll) no supere la pista, sin considerar la altura de 50 ft.",
        "La distancia total de despegue sobre obstáculo de 50 ft calculada en el AFM (con factores de corrección aplicados) debe ser estrictamente menor o igual que la longitud disponible (TORA / TODA).",
        "La distancia calculada puede exceder un 15% la pista si la temperatura exterior es inferior a 20 °C.",
        "Solo se comprueba si la masa al despegue supera los 1.750 kg.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Para autorizar el despacho seguro en el F.OPS.02, la distancia total requerida para alcanzar 50 ft calculada en el AFM debe ser menor o igual a las distancias disponibles de pista declaradas en el AIP (TORA y TODA).",
    },
    {
      id: "da42-6-15",
      question:
        "Al evaluar la performance de aterrizaje en el F.OPS.02, ¿qué representa la Landing Distance Available (LDA) y qué margen de seguridad escolar aplica Blue Team multiplicando por el factor 1,43?",
      options: [
        "La LDA es la distancia entre el umbral y el hangar; el factor 1,43 es para el repostaje de combustible.",
        "La LDA es la velocidad indicada sobre el umbral; el factor 1,43 representa el coeficiente de fricción.",
        "La LDA es la longitud de pista física declarada disponible para el aterrizaje; Blue Team multiplica la distancia del AFM sobre 50 ft por 1,43 (+43% de margen) para garantizar una parada holgada y segura.",
        "El factor 1,43 solo se aplica si la pista está contaminada con hielo o nieve.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "La LDA es la longitud física declarada de pista disponible para el aterrizaje. Blue Team aplica una estricta política de seguridad multiplicando la distancia del AFM sobre 50 ft por un factor de seguridad de 1,43 (+43% de margen de parada).",
    },
    {
      id: "da42-6-16",
      question:
        "Para dar por formalmente cerrado y legalmente válido el despacho operativo F.OPS.02 de la DA42 antes de dirigirse a la aeronave, ¿qué requisito formal de firma es indispensable?",
      options: [
        "La doble firma obligatoria del Alumno (PIC bajo supervisión) y del Instructor de Vuelo (CRI/FI MEP) responsable de la operación tras verificar los 4 pilares de seguridad.",
        "La firma exclusiva del jefe de mantenimiento en el hangar técnico.",
        "El sello de autorización de la torre de control de navegación aérea.",
        "No requiere ninguna firma si el plan de vuelo ya fue enviado por la aplicación móvil.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El despacho operacional F.OPS.02 concluye con el compromiso formal de seguridad mediante la doble firma presencial: el alumno (Piloto al Mando en formación) que calculó los datos y el Instructor de Vuelo responsable que supervisa y valida la salida.",
    },
  ],
};

export const DA42_QUIZZES: Quiz[] = [
  DA42_LESSON_1_QUIZ,
  DA42_LESSON_2_QUIZ,
  DA42_LESSON_3_QUIZ,
  DA42_LESSON_4_QUIZ,
  DA42_LESSON_5_QUIZ,
  DA42_LESSON_6_QUIZ,
];
