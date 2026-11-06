import type { Quiz } from "../domain/quiz-types";

export const DA40_COURSE_ID = "da400000-0000-0000-0000-000000000040";

export const DA40_LESSON_1_QUIZ: Quiz = {
  id: "quiz-da40-lesson-1",
  course_id: DA40_COURSE_ID,
  lesson_id: "da400000-0000-0000-0000-000000000010",
  title: "Examen de Verificación: 1. Generalidades y Especificaciones Técnicas",
  description:
    "Evaluación teórica de verificación sobre simbología oficial AFM, planta motriz Continental CD-155, hélice MT-Propeller de velocidad constante, combustibles y fluidos de servicio de la Diamond DA40 TDI.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da40-1-1",
      question:
        "En la documentación oficial y suplementos AFM de la Diamond DA40 TDI, ¿qué consecuencia operativa específica distingue a la indicación de seguridad clasificada como WARNING frente a un CAUTION?",
      options: [
        "Información complementaria añadida exclusivamente para agilizar el rodaje o la navegación en ruta.",
        "Advertencia de que el incumplimiento del procedimiento puede causar averías mecánicas leves o daños a componentes de la aeronave.",
        "Aviso de un peligro operativo inminente en el que el incumplimiento del procedimiento causará con certeza o gran probabilidad lesiones graves o la muerte del personal.",
        "Requerimiento automático de apagar el motor y planear de inmediato hacia la pista más cercana.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Según la simbología oficial de seguridad del AFM (Sección 1), WARNING advierte de una situación de riesgo operativo inminente que causará lesiones personales graves o la muerte, mientras que CAUTION advierte de posibles averías o daños mecánicos al equipo o a la aeronave.",
    },
    {
      id: "da40-1-2",
      question:
        "¿A qué régimen de giro máximo continuo (RPM) y potencia entrega el motor turbo diésel Continental CD-155 de la Diamond DA40 TDI al 100% de carga al nivel del mar?",
      options: [
        "2.700 RPM y 180 CV (132 kW).",
        "2.300 RPM y una potencia de 114 kW (155 CV).",
        "2.500 RPM y 160 CV (118 kW).",
        "1.900 RPM y 100 kW (136 CV).",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El motor Continental CD-155 (cilindrada de 1.991 cm³) entrega una potencia máxima continua al 100% LOAD de 114 kW (155 CV DIN) a 2.300 RPM de hélice en condiciones ISA a nivel del mar.",
    },
    {
      id: "da40-1-3",
      question:
        "¿Qué diámetro oficial tiene la hélice tripala de paso constante MT-Propeller (MTV-6-A/187-129) de la DA40 TDI y cuál es su característica constructiva principal?",
      options: [
        "1,90 m de diámetro, construida íntegramente en aleación ligera de aluminio macizo.",
        "1,87 m (73,6 in) de diámetro, con palas de madera laminada recubiertas de composite y perfil de acero inoxidable en el borde de ataque.",
        "1,75 m de diámetro, con palas monobloque de fibra de carbono sin refuerzos metálicos.",
        "2,05 m de diámetro, hélice bipala de paso fijo de madera barnizada.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La hélice oficial de velocidad constante MT-Propeller homologada en la DA40 TDI (modelo MTV-6-A/187-129) mide 1,87 m de diámetro (73,6 pulgadas). Sus tres palas combinan un núcleo de madera laminada amortiguadora de vibraciones con recubrimiento de composite y un refuerzo protector de acero inoxidable en el borde de ataque.",
    },
    {
      id: "da40-1-4",
      question:
        "En la Diamond DA40 TDI operando con JET A-1, ¿de qué depósito se alimenta el motor en condiciones normales de vuelo y cómo se gestiona el combustible del depósito auxiliar (Aux Tank) del ala derecha?",
      options: [
        "El motor se alimenta simultáneamente de ambas semialas mediante una llave selectora de combustible en posición BOTH.",
        "El motor se alimenta exclusivamente del depósito principal (Main Tank, ala izquierda); el combustible del Aux Tank debe trasvasarse al principal activando la bomba eléctrica con el interruptor FUEL TRANSFER.",
        "El motor consume en primer lugar el combustible del Aux Tank por gravedad y conmuta al Main Tank al agotarse.",
        "Ambos depósitos están comunicados permanentemente por vasos comunicantes pasivos sin requerir bomba eléctrica ni intervención del piloto.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "En la DA40 TDI, la línea de alimentación y retorno del motor conecta únicamente con el Main Tank (ala izquierda, 14 US gal utilizables). Para utilizar el combustible del Aux Tank (ala derecha, 14 US gal utilizables), el piloto debe activar la bomba eléctrica mediante el interruptor FUEL TRANSFER (~60 US gal/h), la cual trasvasa el combustible al tanque principal y se desconecta automáticamente al vaciarse el tanque auxiliar o llenarse el principal.",
    },
    {
      id: "da40-1-5",
      question:
        "Durante la inspección prevuelo en la DA40 TDI, ¿cómo debe verificarse el nivel de aceite de la caja reductora a través de la mirilla de cristal y qué acción debe tomarse si está bajo?",
      options: [
        "El nivel debe cubrir completamente la mirilla hasta rebosar; si se observa alguna burbuja de aire, debe drenarse el cárter.",
        "El nivel debe situarse por encima de la mitad de la mirilla de inspección; si se observa por debajo de la mitad, se debe informar al instructor.",
        "La mirilla debe permanecer completamente vacía en tierra y sólo llenarse cuando la bomba mecánica funcione en vuelo.",
        "La caja reductora carece de mirilla visual y su nivel se comprueba únicamente mediante la varilla del aceite motor en el capó superior.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Según los procedimientos de inspección de la DA40 TDI, el aceite de la caja reductora se verifica visualmente a través de la mirilla situada en la parte inferior frontal del capó. El nivel debe situarse por encima de la mitad de la mirilla de inspección; si se observa por debajo de la mitad, se debe informar al instructor antes del vuelo.",
    },
    {
      id: "da40-1-6",
      question:
        "En la cabina de la Diamond DA40 TDI, ¿qué mando sustituye a las tradicionales palancas de hélice (azul) y mezcla (roja), y en qué unidad gradúa la potencia entregada por la planta motriz?",
      options: [
        "Un mando giratorio vernier de presión de admisión graduado en pulgadas de mercurio (inHg).",
        "La palanca monomando (Power Lever) regulada por el FADEC, que gradúa la potencia directamente en porcentaje de carga (% LOAD de 0 a 100%).",
        "Un reóstato digital en el pedestal central que ajusta directamente las RPM de la hélice.",
        "Dos palancas independientes e intercaladas para el canal ECU A y el canal ECU B.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Gracias a la gestión electrónica dual FADEC del motor Continental CD-155, se eliminan el mando de mezcla y la palanca de paso de hélice. Toda la planta motriz se gobierna mediante la palanca monomando (Power Lever), la cual ajusta de manera integrada la presión de sobrealimentación, la inyección y el paso de la hélice, indicando la potencia en porcentaje de carga (% LOAD de 0 a 100%).",
    },
  ],
};

export const DA40_QUIZZES: Quiz[] = [DA40_LESSON_1_QUIZ];
