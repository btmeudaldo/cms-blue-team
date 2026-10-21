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

export const C172_QUIZZES: Quiz[] = [
  C172_LESSON_1_QUIZ,
];
