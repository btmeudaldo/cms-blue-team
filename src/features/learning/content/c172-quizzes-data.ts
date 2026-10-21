import type { Quiz } from "../domain/quiz-types";

export const C172_COURSE_ID = "17200000-0000-0000-0000-000000000172";

export const C172_LESSON_1_QUIZ: Quiz = {
  id: "quiz-c172-lesson-1",
  course_id: C172_COURSE_ID,
  lesson_id: "17200000-0000-0000-0000-000000000010",
  title: "Examen de Verificación: 1. Generalidades y Especificaciones del Avión",
  description: "Evaluación teórica de verificación sobre simbología oficial POH, planta motriz Continental CD-135/CD-155, hélice MT-Propeller de velocidad constante, combustibles y fluidos de servicio.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "c172-1-1",
      question: "En la documentación y suplementos oficiales del Cessna 172 con motor Continental CD-135 / CD-155, ¿qué significado tiene la indicación de seguridad clasificada como CAUTION?",
      options: [
        "Información técnica añadida exclusivamente para agilizar el rodaje o la navegación en ruta.",
        "Advertencia de que el incumplimiento del procedimiento puede causar daños mecánicos al motor o a otros componentes de la aeronave.",
        "Aviso de peligro inmediato en el que el incumplimiento causará inevitablemente lesiones graves o la muerte.",
        "Notificación obligatoria que requiere apagar el motor en vuelo de manera inmediata.",
      ],
      correctAnswerIndex: 1,
      explanation: "Según la simbología oficial del POH, WARNING advierte de riesgo de lesiones graves o muerte, mientras que CAUTION advierte de que el incumplimiento puede causar daños al motor o a los componentes del avión.",
    },
    {
      id: "c172-1-2",
      question: "Debido a la arquitectura de inyección directa Common-Rail y gestión electrónica FADEC del motor Continental CD-135 / CD-155, ¿cuáles de los siguientes sistemas convencionales de Cessna quedan totalmente eliminados y sin efecto en el POH?",
      options: [
        "El alternador principal y el motor de arranque eléctrico.",
        "El sistema de refrigeración líquida y el intercooler del turbocompresor.",
        "El carburador con su mando de calefacción, las magnetos de encendido, el mando de mezcla rojo y el cebador manual (primer).",
        "El depósito colector de combustible y la bomba eléctrica auxiliar.",
      ],
      correctAnswerIndex: 2,
      explanation: "El motor diésel Continental carece de carburador, magnetos, bujías y mando de mezcla; toda la gestión de combustión es electrónica e inyección Common-Rail controlada por la ECU FADEC.",
    },
    {
      id: "c172-1-3",
      question: "¿Cómo se controla el paso de las palas de la hélice tripala MT-Propeller de velocidad constante (constant speed) durante el vuelo?",
      options: [
        "Mediante una palanca azul de paso de hélice ubicada en el pedestal central de cabina.",
        "De forma totalmente automática por la ECU del FADEC mediante presión hidráulica de aceite según la posición de la palanca monomando (Thrust Lever), manteniendo 2.300 RPM.",
        "El paso es fijo y no varía en ninguna fase del vuelo.",
        "Mediante un servomotor eléctrico accionado exclusivamente con el interruptor FADEC Test.",
      ],
      correctAnswerIndex: 1,
      explanation: "En la cabina no existe palanca azul de paso. El sistema FADEC gobierna hidráulicamente el paso de las palas con presión de aceite para mantener 2.300 RPM constantes en despegue y crucero.",
    },
    {
      id: "c172-1-4",
      question: "Al planificar la carga y centrado (Mass and Balance) de un vuelo con JET A-1 en lugar de gasolina de aviación tradicional, ¿qué valor estándar de densidad debe considerarse y cuál es su implicación operacional?",
      options: [
        "Densidad de 0.72 kg/l; el combustible pesa exactamente lo mismo que el AVGAS 100LL.",
        "Densidad de 0.84 kg/l; el JET A-1 es sensiblemente más denso y pesado que el AVGAS, por lo que cada litro cargado suma más peso a la aeronave.",
        "Densidad de 1.00 kg/l; sólo se permite repostar depósitos al 50% de su capacidad.",
        "Densidad de 0.65 kg/l; el combustible es más ligero y permite aumentar el equipaje sin restricciones.",
      ],
      correctAnswerIndex: 1,
      explanation: "El JET A-1 y el diésel EN 590 tienen una densidad de 0.84 kg/l (frente a 0.715 kg/l del AVGAS), resultando en aproximadamente un 17% más de masa para el mismo volumen de combustible.",
    },
    {
      id: "c172-1-5",
      question: "Respecto a los fluidos de servicio del motor Continental Diésel y la reductora, ¿cuál de las siguientes afirmaciones es CORRECTA para la inspección prevuelo?",
      options: [
        "El motor y la caja reductora comparten el mismo cárter y depósito común de aceite.",
        "La caja reductora dispone de un circuito de lubricación totalmente independiente del motor y su nivel se verifica en su propia mirilla de inspección.",
        "El refrigerante líquido del motor debe ser 100% agua destilada sin aditivos anticongelantes.",
        "El aceite de la reductora se comprueba extrayendo la varilla de nivel del aceite de motor en el capó derecho.",
      ],
      correctAnswerIndex: 1,
      explanation: "La reductora y el motor son circuitos mecánicos y de lubricación completamente independientes. El nivel de aceite de motor se mide con su varilla y el de la reductora mediante su mirilla de cristal.",
    },
    {
      id: "c172-1-6",
      question: "En la consola de interruptores de cabina del Cessna 172 Continental Diésel, ¿cuál es la función primordial del interruptor ENGINE MASTER?",
      options: [
        "Accionar el motor de arranque eléctrico (starter) para voltear el cigüeñal.",
        "Conectar las luces de navegación y los equipos de aviónica secundaria.",
        "Alimentar eléctricamente la ECU del sistema FADEC para habilitar el control del motor e inyección de combustible.",
        "Seleccionar exclusivamente el canal auxiliar FADEC B.",
      ],
      correctAnswerIndex: 2,
      explanation: "El interruptor Engine Master sustituye la llave de encendido tradicional; su función es energizar el sistema de control FADEC para permitir la inyección de combustible y habilitar el arranque.",
    },
  ],
};

export const C172_LESSON_2_QUIZ: Quiz = {
  id: "quiz-c172-lesson-2",
  course_id: C172_COURSE_ID,
  lesson_id: "17200000-0000-0000-0000-000000000001",
  title: "Examen de Verificación: 2. Limitaciones Operacionales POH",
  description: "Evaluación teórica de verificación sobre velocidades límite de la célula, marcas de instrumentos de vuelo y motor (CED/AED 125), pesos estructurales, factores de carga, límites térmicos y de fluidos de servicio según el POH y suplementos de Continental Diésel.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "c172-2-1",
      question: "A peso máximo al despegue (2.300 lbs), ¿cuál es la velocidad de maniobra de diseño (VA) en el Cessna 172 y qué ocurre con esta limitación de velocidad si la aeronave opera a un peso inferior (por ejemplo, 1.600 lbs)?",
      options: [
        "Es de 97 KIAS y disminuye a 80 KIAS a menor peso, dado que el ala entra en pérdida con menor aceleración vertical protegiendo la estructura de sobrecargas.",
        "Es de 128 KIAS y permanece fija e invariable con independencia de la masa de la aeronave.",
        "Es de 97 KIAS a peso máximo y aumenta a 110 KIAS al estar la aeronave más liviana.",
        "Es de 85 KIAS y solo resulta aplicable cuando se vuela con flaps extendidos en aproximación.",
      ],
      correctAnswerIndex: 0,
      explanation: "Según la Sección 2 del POH, la velocidad de maniobra VA es de 97 KIAS a 2.300 lbs, 89 KIAS a 1.950 lbs y 80 KIAS a 1.600 lbs. A menor peso, la aeronave requiere menor ángulo de ataque para sustentar, por lo que una ráfaga brusca genera un factor de carga mayor antes de alcanzar la pérdida; consecuentemente, VA disminuye al reducirse el peso para proteger la célula.",
    },
    {
      id: "c172-2-2",
      question: "En el anemómetro del Cessna 172 adaptado a Continental Diésel, ¿qué significado operacional y límites de velocidad delimita el Arco Verde?",
      options: [
        "Rango de operación de flaps, desde 40 KIAS (VSO) hasta 85 KIAS (VFE).",
        "Rango de operación normal, desde 48 KIAS (VS1 a peso máximo en configuración limpia) hasta 128 KIAS (VNO, máxima velocidad estructural de crucero).",
        "Rango de precaución en aire en calma, comprendido entre 128 KIAS y 160 KIAS (VNE).",
        "Rango óptimo de planeo sin motor, comprendido entre 65 KIAS y 97 KIAS.",
      ],
      correctAnswerIndex: 1,
      explanation: "El Arco Verde representa el rango normal de operación. Su límite inferior (48 KIAS) es la velocidad de pérdida con flaps arriba a MTOW (VS1) y su límite superior (128 KIAS) es la velocidad máxima estructural de crucero (VNO).",
    },
    {
      id: "c172-2-3",
      question: "De acuerdo con las limitaciones estructurales de la Sección 2 del POH, ¿cuáles son los pesos máximos autorizados al despegue (MTOW) en Categoría Normal y Categoría Utilidad respectivamente?",
      options: [
        "2.450 lbs (1.111 kg) en Categoría Normal y 2.200 lbs (998 kg) en Categoría Utilidad.",
        "2.300 lbs (1.043 kg) tanto en Categoría Normal como en Categoría Utilidad.",
        "2.300 lbs (1.043 kg) en Categoría Normal y 2.000 lbs (907 kg) en Categoría Utilidad.",
        "2.550 lbs (1.157 kg) en Categoría Normal y 2.150 lbs (975 kg) en Categoría Utilidad.",
      ],
      correctAnswerIndex: 2,
      explanation: "El peso máximo al despegue y aterrizaje certificado para la aeronave en Categoría Normal es de 2.300 lbs (1.043 kg). Para operar en Categoría Utilidad (que autoriza mayores factores de carga de hasta +4.4g), el peso máximo se reduce a 2.000 lbs (907 kg).",
    },
    {
      id: "c172-2-4",
      question: "Al operar la aeronave certificada en Categoría Utilidad para maniobras de entrenamiento, ¿cuál es la limitación referente a los compartimentos de equipaje (Baggage Areas 1 y 2) y los asientos traseros?",
      options: [
        "Se autoriza un máximo de 50 lbs (22.7 kg) en Baggage Area 1 y los asientos traseros pueden ser ocupados por pasajeros livianos.",
        "Está estrictamente prohibido transportar equipaje en cualquiera de los compartimentos (0 lbs) y los asientos traseros no deben estar ocupados.",
        "Se autoriza el peso combinado habitual de 120 lbs siempre que el centro de gravedad permanezca dentro de la envolvente de utilidad.",
        "Solo se permite equipaje ligero de mano en Baggage Area 2 hasta un peso máximo estricto de 25 lbs.",
      ],
      correctAnswerIndex: 1,
      explanation: "En Categoría Utilidad rige una estricta limitación reglamentaria del POH: los compartimentos de equipaje deben estar completamente vacíos (0 lbs) y los asientos traseros no pueden estar ocupados para garantizar los márgenes de carga estructural (+4.4g) y el centrado delantero requerido.",
    },
    {
      id: "c172-2-5",
      question: "¿Cuáles son los factores de carga límite de vuelo (flight load factors) reglamentarios en Categoría Normal con flaps retraídos (UP) y con flaps extendidos (DOWN)?",
      options: [
        "Flaps UP: +4.4g / -1.76g; Flaps DOWN: +3.8g.",
        "Flaps UP: +3.8g / -1.52g; Flaps DOWN: +3.0g (con factor negativo no autorizado).",
        "Flaps UP: +3.5g / -1.0g; Flaps DOWN: +2.5g / -0.5g.",
        "Flaps UP: +3.8g / 0g; Flaps DOWN: +3.5g con barrenas deliberadas autorizadas.",
      ],
      correctAnswerIndex: 1,
      explanation: "En Categoría Normal los factores de carga límite son de +3.8g a -1.52g con flaps arriba. Con flaps extendidos, el factor de carga positivo máximo se reduce a +3.0g para proteger la estructura del mecanismo hipersustentador, quedando prohibidas las maniobras con aceleraciones negativas.",
    },
    {
      id: "c172-2-6",
      question: "Respecto a los motores Continental CD-135 / CD-155 (Technify Motors), ¿a qué componente corresponden las RPM indicadas en el instrumento de cabina y qué limitación operacional existe sobre el arranque con energía externa (GPU)?",
      options: [
        "Las RPM corresponden al cigüeñal del motor diésel y se permite el arranque rutinario con toma externa GPU a 28V.",
        "Las RPM corresponden a la hélice (relación de reducción i = 1.69) y está terminantemente prohibido arrancar con energía externa (external power); si no arranca con la batería de a bordo, debe verificarse la batería antes del vuelo.",
        "Las RPM corresponden a la turbina del turbocompresor y la GPU es obligatoria cuando la OAT desciende por debajo de 0 °C.",
        "Las RPM corresponden al alternador secundario y el arranque con GPU solo se permite si el interruptor FADEC Backup está en ON.",
      ],
      correctAnswerIndex: 1,
      explanation: "En el suplemento POH, todas las indicaciones de RPM corresponden a la hélice (reducida respecto al motor con ratio i = 1.69, max 2.300 RPM). Además, el POH prohíbe taxativamente el arranque con energía externa para asegurar que la aeronave no despegue con una batería principal degradada, vital para la alimentación del FADEC.",
    },
    {
      id: "c172-2-7",
      question: "Según la Sección 2 del suplemento POH, ¿cuál es la temperatura mínima de aceite motor requerida antes de aplicar potencia de despegue y cuál es la temperatura máxima admisible de líquido refrigerante (coolant)?",
      options: [
        "Aceite motor: mínimo 50 °C; Refrigerante: máximo 105 °C.",
        "Aceite motor: mínimo 30 °C; Refrigerante: máximo 120 °C.",
        "Aceite motor: mínimo 60 °C; Refrigerante: máximo 90 °C.",
        "Aceite motor: mínimo 0 °C; Refrigerante: máximo 140 °C.",
      ],
      correctAnswerIndex: 0,
      explanation: "El límite mínimo de operación de temperatura de aceite para poder aplicar potencia de despegue (Take-off RPM) es de 50 °C. Para el líquido refrigerante, la temperatura máxima de operación admisible en la línea roja es de 105 °C.",
    },
    {
      id: "c172-2-8",
      question: "¿Cuáles son los límites de presión mínima de aceite motor en ralentí (idle), presión mínima en régimen de despegue/vuelo y el consumo máximo admisible de lubricante?",
      options: [
        "Mínima en ralentí: 0.5 bar; Mínima en vuelo: 1.5 bar; Consumo máx.: 0.5 l/h.",
        "Mínima en ralentí: 1.2 bar (17.4 psi); Mínima en despegue/vuelo: 2.3 bar (33.4 psi); Consumo máx.: 0.1 l/h.",
        "Mínima en ralentí: 2.3 bar; Mínima en vuelo: 5.1 bar; Consumo máx.: 0.25 l/h.",
        "Mínima en ralentí: 1.0 bar; Mínima en vuelo: 3.0 bar; Consumo máx.: 1.0 l cada 10 horas.",
      ],
      correctAnswerIndex: 1,
      explanation: "En ralentí la presión de aceite no debe descender de 1.2 bar. En vuelo y a potencia de despegue la presión mínima obligatoria es de 2.3 bar (arco verde de 2.3 a 5.1 bar). El consumo máximo tolerable según POH es de 0.1 litros/hora.",
    },
    {
      id: "c172-2-9",
      question: "Al operar con combustible Diésel de automoción (DIN EN 590) o con una mezcla en los depósitos que contenga más de un 10% de Diésel, ¿cuál es la limitación de temperatura mínima en los depósitos antes del despegue?",
      options: [
        "Debe ser superior a -30 °C, idéntico al régimen para querosene JET A-1.",
        "Debe ser superior a 0 °C antes del despegue (y no inferior a -5 °C en vuelo) para prevenir la obstrucción del filtro de combustible por precipitación de parafinas.",
        "Debe mantenerse de forma obligatoria por encima de +15 °C mediante calefacción eléctrica en plataforma.",
        "No existe limitación térmica de combustible si la temperatura del motor ya alcanzó 50 °C.",
      ],
      correctAnswerIndex: 1,
      explanation: "El combustible Diésel de automoción (EN 590) o cualquier mezcla con más del 10% de Diésel tiene tendencia a cristalizar parafinas a baja temperatura, por lo que el POH exige que la temperatura en depósito sea superior a 0 °C antes de despegar y no baje de -5 °C en vuelo (frente a los -30 °C / -35 °C permitidos con JET A-1).",
    },
    {
      id: "c172-2-10",
      question: "En el instrumento digital CED 125 (Compact Engine Display), ¿cuáles son los parámetros monitorizados del grupo motopropulsor y cuáles son los límites de línea roja para las RPM de la hélice y la temperatura de la caja reductora (gearbox)?",
      options: [
        "Presión de admisión (MAP), EGT y CHT; Límite rojo: 2.700 RPM y 150 °C de reductora.",
        "RPM de hélice, Carga (Load %), Presión de aceite, Temperatura de aceite, Temperatura de refrigerante y Temperatura de reductora; Límite rojo: > 2.300 RPM y > 120 °C de reductora.",
        "Flujo de combustible, Nivel de depósitos y Voltaje; Límite rojo: > 2.500 RPM y > 105 °C de reductora.",
        "Amperios del alternador, Presión diferencial FADEC y OAT; Límite rojo: > 2.100 RPM y > 140 °C de reductora.",
      ],
      correctAnswerIndex: 1,
      explanation: "El CED 125 integra tacómetro de hélice (máx. 2.300 RPM en rojo), % de potencia (LOAD), presión de aceite, y las temperaturas de aceite (rojo >140 °C), refrigerante (rojo >105 °C) y reductora de engranajes (rojo >120 °C).",
    },
    {
      id: "c172-2-11",
      question: "Respecto a la pantalla auxiliar AED 125 y las luces de advertencia \"CED/AED Caution\" en cabina, ¿cómo opera el pulsador \"CONFIRM / TEST\" tras una desviación de un parámetro al rango ámbar o rojo?",
      options: [
        "La luz de aviso se apaga sola de forma instantánea tan pronto como el parámetro regresa al rango verde, sin intervención del piloto.",
        "El pulsador resetea la alimentación de la FADEC borrando el registro de averías.",
        "La luz de aviso permanece encendida (memorizada) aunque el parámetro retorne al rango verde, exigiendo que el piloto pulse \"Confirm/Test\" para confirmarla y rearmar el sistema.",
        "El pulsador conmuta forzosamente la barra eléctrica de 28V a la batería auxiliar FADEC.",
      ],
      correctAnswerIndex: 2,
      explanation: "El sistema de alerta posee lógica de enclavamiento: cuando una lectura entra en precaución o alarma, la lámpara de aviso se enciende y queda fija incluso si la lectura se normaliza. El piloto debe pulsar \"Confirm/Test\" para reconocer el evento y rearmar la alerta para futuras anomalías.",
    },
    {
      id: "c172-2-12",
      question: "En la flota Cessna 172 con planta motriz Continental Diésel, ¿qué combustible de aviación está terminantemente PROHIBIDO y cuándo se ilumina el aviso \"Fuel L\" o \"Fuel R\" (Low Level)?",
      options: [
        "Está prohibido el JET A-1; el aviso de bajo nivel se activa al restar 20 litros utilizables por ala.",
        "Está prohibido el Diésel EN 590; el aviso se activa con 5 galones en el depósito sumidero central.",
        "Está terminantemente prohibido el AVGAS (cualquier grado, ej. 100LL) ya que arruina la bomba de alta presión common-rail; el aviso Low Level se enciende cuando el nivel en el depósito correspondiente es inferior a 10 litros (2.6 gal).",
        "Están prohibidos los combustibles con aditivos Biobor JF; el aviso se activa solo con el combustible no utilizable.",
      ],
      correctAnswerIndex: 2,
      explanation: "El uso de AVGAS está terminantemente prohibido en motores diésel de aviación porque carece de las propiedades lubricantes requeridas por la bomba common-rail de alta presión (pudiendo griparla de inmediato). Las luces de aviso Low Level se encienden cuando quedan menos de 10 litros en el depósito respectivo.",
    },
    {
      id: "c172-2-13",
      question: "De acuerdo con la Sección 2 del suplemento POH sobre fluidos aprobados y placards obligatorios de la modificación, ¿cuál de las siguientes afirmaciones es correcta?",
      options: [
        "La reductora utiliza el mismo lubricante sintético que el motor (Shell Helix Ultra 5W-30) y no se requiere ningún rótulo en las bocas de combustible.",
        "La caja reductora requiere lubricante específico de engranajes (Centurion Gearbox Oil N1 o Shell Spirax S6), el refrigerante es mezcla 50:50 con Glysantin G48 y en las bocas de combustible es obligatorio el letrero \"JET FUEL ONLY - JET A-1 / DIESEL\".",
        "El refrigerante del motor es agua pura desmineralizada sin glicol para optimizar el peso de la aeronave.",
        "Todos los placards originales de Cessna referentes a limitaciones de célula quedan derogados por la instalación del motor diésel.",
      ],
      correctAnswerIndex: 1,
      explanation: "El motor Continental Diésel y la reductora tienen circuitos de lubricación completamente independientes con fluidos distintos (aceite motor vs aceite de caja reductora como Shell Spirax S6). El refrigerante es agua desmineralizada y BASF Glysantin G48 al 50:50. Además, las bocas de llenado deben portar el placard mandatorio \"JET FUEL ONLY\".",
    },
  ],
};

export const C172_QUIZZES: Quiz[] = [
  C172_LESSON_1_QUIZ,
  C172_LESSON_2_QUIZ,
];
