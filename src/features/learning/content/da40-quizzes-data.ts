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
        "El motor se alimenta simultáneamente de ambas alas mediante una llave selectora de combustible en posición BOTH.",
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

export const DA40_LESSON_2_QUIZ: Quiz = {
  id: "quiz-da40-lesson-2",
  course_id: DA40_COURSE_ID,
  lesson_id: "da400000-0000-0000-0000-000000000020",
  title: "Examen de Verificación: 2. Limitaciones Operacionales AFM",
  description:
    "Evaluación teórica de verificación sobre velocidades límite de la célula, marcas del anemómetro, pesos estructurales, factores de carga, límites térmicos y de fluidos de servicio según el AFM de la Diamond DA40 TDI con motor Continental CD-155.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da40-2-1",
      question:
        "A masa máxima de despegue (1.150 kg), ¿cuál es la velocidad de maniobra de diseño (VA) en la Diamond DA40 TDI y qué ocurre con dicha limitación si la aeronave vuela a un peso inferior (780 a 980 kg)?",
      options: [
        "Es de 129 KIAS y se mantiene fija sin importar la masa del avión.",
        "Es de 108 KIAS y disminuye a 94 KIAS a menor peso, dado que el ala entra en pérdida con menor aceleración vertical protegiendo la estructura de sobrecargas.",
        "Es de 178 KIAS y aumenta a 190 KIAS cuando el avión va más ligero.",
        "Es de 91 KIAS constante, coincidiendo con la velocidad máxima de flaps en aterrizaje.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Según la tabla de limitaciones de velocidad del AFM (Sección 2), VA es de 108 KIAS para masas entre 980 kg y 1.150 kg, y se reduce a 94 KIAS para masas entre 780 kg y 980 kg. Por encima de VA no deben aplicarse deflexiones completas ni bruscas de mandos.",
    },
    {
      id: "da40-2-2",
      question:
        "En el anemómetro de la Diamond DA40 TDI, ¿entre qué velocidades indicadas se extiende el arco blanco reglamentario y qué representa operativamente su límite inferior (49 KIAS)?",
      options: [
        "De 52 a 129 KIAS; representa la velocidad de crucero normal en aire turbulento.",
        "De 129 a 178 KIAS; representa el rango de precaución en aire en calma.",
        "De 49 a 91 KIAS; el límite inferior representa la velocidad de pérdida (VSO) a masa máxima (1.150 kg) con flaps en posición de aterrizaje (LDG).",
        "De 41 a 85 KIAS; representa el rango de operación de flaps en despegue (T/O).",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El arco blanco (49 a 91 KIAS) delimita el rango operativo con flaps extendidos en aterrizaje. Su extremo inferior (49 KIAS) es la velocidad de pérdida en configuración LDG a MTOW (1.150 kg), y su extremo superior (91 KIAS) es la VFE máxima para flaps en LDG (para flaps T/O el límite es 108 KIAS).",
    },
    {
      id: "da40-2-3",
      question:
        "De acuerdo con las limitaciones de la Sección 2 del AFM de la DA40 TDI, ¿cuáles son los pesos máximos al despegue (MTOW) autorizados para la Categoría Normal y la Categoría Utility respectivamente?",
      options: [
        "1.150 kg (2.535 lb) en Categoría Normal y 980 kg (2.161 lb) en Categoría Utility.",
        "1.043 kg (2.300 lb) en Categoría Normal y 907 kg (2.000 lb) en Categoría Utility.",
        "1.250 kg en Categoría Normal y 1.100 kg en Categoría Utility.",
        "980 kg en ambas categorías, variando únicamente el límite de equipaje.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM certifica a la DA40 TDI con un peso máximo al despegue (MTOW) de 1.150 kg (2.535 lb) en Categoría Normal y de 980 kg (2.161 lb) en Categoría Utility para entrenamiento de maniobras avanzadas.",
    },
    {
      id: "da40-2-4",
      question:
        "¿Cuál es el peso máximo admisible en el compartimento de equipaje trasero de la DA40 TDI y cuál es el requisito reglamentario para operar en Categoría Utility respecto a los asientos traseros y equipaje?",
      options: [
        "Máximo 50 kg; en Categoría Utility se permite un pasajero trasero si no lleva equipaje.",
        "Máximo 30 kg (66 lb) asegurado con red reglamentaria; en Categoría Utility los asientos traseros deben estar totalmente vacíos y sin ningún equipaje.",
        "Máximo 15 kg; en Categoría Utility se permite equipaje siempre que no sobrepase 10 kg.",
        "Máximo 60 kg; en Categoría Utility se permite cargar equipaje si el combustible está al 50%.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El compartimento de equipaje principal tras los respaldos traseros tiene un límite estructural de 30 kg (66 lb) y debe fijarse con la red de 4 puntos. Para operar en Categoría Utility (MTOW 980 kg), el AFM exige que los asientos traseros permanezcan desocupados y no se transporte equipaje.",
    },
    {
      id: "da40-2-5",
      question:
        "¿Cuáles son los factores de carga límite de vuelo en la Diamond DA40 TDI en Categoría Normal con flaps retraídos (UP) y cuál es la limitación estricta del AFM respecto a las barrenas?",
      options: [
        "+4.4 G / -1.76 G; las barrenas intencionadas están autorizadas sólo con instructor a bordo.",
        "+3.8 G / -1.52 G; las barrenas intencionadas están terminantemente prohibidas (Spinning is prohibited).",
        "+2.0 G / 0 G; se autoriza iniciar barrenas por encima de 5.000 ft AGL.",
        "+3.0 G / -1.0 G; se permite barrena de media vuelta para entrenamiento de pérdida.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "En Categoría Normal con flaps UP los factores de carga límite son +3.8 G y -1.52 G (+2.0 G y 0 G con flaps extendidos). El AFM prohíbe de forma taxativa la ejecución de barrenas intencionadas en todas las categorías de vuelo.",
    },
    {
      id: "da40-2-6",
      question:
        "Según las limitaciones de planta motriz de la Sección 2 del AFM para el motor Continental CD-155, ¿cuáles son el régimen de giro máximo continuo de la hélice y el techo operativo certificado (Operating Altitude) de la DA40 TDI?",
      options: [
        "2.700 RPM de hélice y techo de 14.000 ft.",
        "2.500 RPM de hélice y techo de 18.000 ft.",
        "2.300 RPM de hélice y techo de servicio operativo certificado de 16.400 ft (5.000 m).",
        "2.100 RPM de hélice y techo de 12.000 ft.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Para el motor Continental CD-155 (114 kW / 155 CV DIN), el régimen máximo de giro continuo de la hélice regulado por FADEC es de 2.300 RPM (con un overspeed transitorio de hasta 2.500 RPM durante un máximo de 20 segundos) y el techo de servicio operativo certificado de la DA40 TDI es de 16.400 ft (5.000 m).",
    },
    {
      id: "da40-2-7",
      question:
        "Antes de aplicar potencia de despegue (Take-off), ¿cuáles son las temperaturas mínimas obligatorias que deben alcanzar el refrigerante del motor (Coolant) y el aceite de motor según el AFM de la DA40 TDI?",
      options: [
        "Refrigerante mínimo 40 °C y aceite de motor mínimo 30 °C.",
        "Refrigerante mínimo 60 °C y aceite de motor mínimo 50 °C.",
        "Refrigerante mínimo 80 °C y aceite de motor mínimo 70 °C.",
        "No se requiere temperatura mínima si el motor lleva 2 minutos al ralentí.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La Sección 2 del AFM establece como condición indispensable antes del despegue que la temperatura de refrigerante alcance al menos 60 °C (banda verde de 60 a 96 °C) y la temperatura de aceite alcance un mínimo de 50 °C (banda verde de 50 a 125 °C).",
    },
    {
      id: "da40-2-8",
      question:
        "¿Cuáles son los límites reglamentarios del AFM para la presión de aceite de motor en régimen normal de vuelo y cuál es la tasa máxima de consumo admisible de aceite en la DA40 TDI?",
      options: [
        "Presión normal de 1.0 a 3.0 bar y consumo máximo de 0,5 L/h.",
        "Presión normal de 2.3 a 5.2 bar y consumo máximo admisible de 0,1 L/h.",
        "Presión normal de 3.5 a 6.5 bar y consumo máximo de 0,3 L/h.",
        "Presión normal de 1.5 a 4.0 bar y consumo máximo de 0,25 L/h.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La banda verde de presión de aceite en vuelo en la DA40 TDI abarca de 2.3 a 5.2 bar (la mínima en ralentí es 1.2 bar y la máxima absoluta 6.5 bar). El consumo de aceite del motor no debe exceder en ningún caso 0,1 L/h (aprox. 0.106 US quarts/h).",
    },
    {
      id: "da40-2-9",
      question:
        "Operando con queroseno de aviación JET A-1 en la Diamond DA40 TDI, ¿cuáles son los límites de temperatura mínima y máxima admisible de combustible en los depósitos según el AFM?",
      options: [
        "Temperatura mínima operativa de -30 °C (-22 °F) y máxima de +75 °C (+167 °F).",
        "Temperatura mínima de 0 °C y máxima de +50 °C.",
        "Temperatura mínima de -15 °C y máxima de +60 °C.",
        "Temperatura mínima de -45 °C y máxima de +85 °C.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Para queroseno JET A-1 / JET A / JP-8, el rango admisible de temperatura en los tanques alares abarca desde un mínimo de -30 °C hasta un máximo de +75 °C, gracias a la excelente fluidez en frío del queroseno y a la disipación térmica del Fuel Cooler.",
    },
    {
      id: "da40-2-10",
      question:
        "En la barra de instrumentos de motor EIS del Garmin G1000 de la DA40 TDI, ¿a partir de qué temperatura de la caja reductora (Gearbox Temp - GT) entra el parámetro en la banda roja de advertencia (WARNING)?",
      options: [
        "Superior a 120 °C (con rango ámbar de precaución entre 115 °C y 120 °C).",
        "Superior a 140 °C (con rango ámbar entre 125 °C y 140 °C).",
        "Superior a 105 °C (con rango ámbar entre 96 °C y 105 °C).",
        "Superior a 96 °C en cualquier condición.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "En la tabla oficial 2.5 del AFM, la temperatura de reductora (GT) es verde por debajo de 115 °C, ámbar (precaución) entre 115 °C y 120 °C, y roja (WARNING) por encima de 120 °C.",
    },
    {
      id: "da40-2-11",
      question:
        "En el sistema de indicación eléctrica del Garmin G1000 en la DA40 TDI (sistema de 14 V), ¿cuál es el rango de voltaje normal (banda verde) y por debajo de qué valor entra en advertencia roja?",
      options: [
        "Banda verde de 11.0 V a 12.6 V; roja por debajo de 10.0 V.",
        "Banda verde de 12.6 V a 15.0 V; advertencia roja por debajo de 11.0 V (y por encima de 15.5 V).",
        "Banda verde de 13.5 V a 16.0 V; roja por debajo de 12.0 V.",
        "Banda verde de 24.0 V a 28.0 V; roja por debajo de 22.0 V.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Según la Tabla 2.6 del AFM para la DA40 TDI con barra de 14 V, el rango verde normal del voltímetro abarca de 12.6 V a 15.0 V. Los rangos ámbar son 11.0–12.6 V y 15.0–15.5 V, y la banda roja de alarma se activa con tensiones inferiores a 11.0 V o superiores a 15.5 V.",
    },
    {
      id: "da40-2-12",
      question:
        "Respecto a los depósitos estándar (Standard Tanks) de la Diamond DA40 TDI, ¿cuáles son la capacidad utilizable por cada ala y la capacidad total utilizable combinada de combustible en galones estadounidenses?",
      options: [
        "14,0 US gal utilizables por cada ala (Main en ala izquierda y Aux en ala derecha), sumando un total utilizable de 28,0 US gal (106,0 L).",
        "15,0 US gal utilizables por cada ala, sumando un total utilizable de 30,0 US gal.",
        "10,0 US gal utilizables en el ala izquierda y 18,0 US gal en el ala derecha, sumando 28,0 US gal.",
        "20,0 US gal utilizables por cada ala, sumando un total utilizable de 40,0 US gal.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "En la configuración de depósitos estándar de la DA40 TDI, cada ala aloja un depósito de 15,0 US gal de los cuales 14,0 US gal son utilizables (1,0 US gal no utilizable por cada ala). Esto proporciona un total de 28,0 US gal utilizables (106,0 L) y 2,0 US gal no utilizables en total.",
    },
    {
      id: "da40-2-13",
      question:
        "En las bocas de llenado de combustible y según los letreros mandatorios (placards) del AFM en la DA40 TDI equipada con motor Continental CD-155, ¿qué combustible tradicional de aviación general está TERMINANTEMENTE PROHIBIDO repostar bajo cualquier circunstancia?",
      options: [
        "Queroseno de aviación JET A-1.",
        "Diésel de automoción norma EN 590.",
        "Gasolina de aviación AVGAS 100LL (o cualquier otra gasolina con o sin plomo).",
        "Queroseno de grado militar JP-8.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El motor Continental CD-155 es un motor ciclo diésel turboalimentado de inyección directa. El repostaje de gasolina de aviación AVGAS 100LL o gasolinas de automoción está terminantemente prohibido por el AFM y señalado en las bocas de llenado de las alas, ya que provocaría autodetonación incontrolada y daños catastróficos inmediatos al motor.",
    },
  ],
};

export const DA40_LESSON_3_QUIZ: Quiz = {
  id: "quiz-da40-lesson-3",
  course_id: DA40_COURSE_ID,
  lesson_id: "da400000-0000-0000-0000-000000000030",
  title:
    "Examen de Verificación: 3. Ingeniería del Avión y Sistemas Continental CD-155",
  description:
    "Evaluación teórica de verificación sobre arquitectura del motor Continental CD-155, reductora y hélice MT-Propeller, sistema FADEC y ECU Backup Battery, circuitos de combustible y refrigeración, instrumentación Garmin G1000 EIS y sistemas de célula de la Diamond DA40 TDI.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da40-3-1",
      question:
        "¿Cuál es la arquitectura y principio de funcionamiento de la planta motriz Continental CD-155 que equipa a la Diamond DA40 TDI?",
      options: [
        "Motor diésel de 4 cilindros en línea, ciclo de 4 tiempos, refrigeración líquida con cárter húmedo, inyección directa Common-Rail y turbocompresor con intercooler.",
        "Motor de 4 cilindros opuestos refrigerado por aire con dos magnetos de encendido y carburador de flotador.",
        "Motor turbohélice de turbina libre con reductora epicicloidal y escape libre.",
        "Motor diésel de 6 cilindros en V refrigerado por aire de aspiración atmosférica.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El motor Continental CD-155 es un propulsor diésel de 4 cilindros en línea y 1.991 cm³ de cilindrada, turboalimentado con intercooler, inyección directa Common-Rail y refrigeración líquida en circuito cerrado, gobernado íntegramente por sistema electrónico FADEC.",
    },
    {
      id: "da40-3-2",
      question:
        "¿Qué función cumple el embrague de sobrecarga (overload release) integrado en la caja reductora del motor Continental CD-155 de la DA40 TDI?",
      options: [
        "Permitir poner la hélice en bandera manualmente desde cabina en caso de parada de motor.",
        "Desacoplar la transmisión mecánica entre el motor y la hélice ante picos de par anómalos o un impacto de las palas en tierra para proteger el cigüeñal.",
        "Conectar el motor de arranque eléctrico directamente a la hélice para voltear el conjunto en frío.",
        "Modificar el paso de la hélice de forma mecánica en caso de pérdida total de presión de aceite.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La caja reductora (relación i = 1:1.69) cuenta con un embrague de sobrecarga (overload release) que desacopla la conexión mecánica entre el eje del motor y la hélice cuando se detectan sobrecargas bruscas o en caso de un impacto de hélice (propeller strike), salvaguardando la integridad del cigüeñal y la estructura interna del motor.",
    },
    {
      id: "da40-3-3",
      question:
        "En cuanto a la arquitectura y gobierno del sistema FADEC del motor Continental CD-155, ¿cómo funciona la redundancia entre sus unidades de control de motor (ECU)?",
      options: [
        "Dispone de dos unidades de control independientes (ECU A y ECU B) con sensores duplicados; ante cualquier fallo interno de la ECU activa, el sistema conmuta automáticamente al canal de respaldo.",
        "La ECU A controla los cilindros 1 y 2, mientras que la ECU B controla exclusivamente los cilindros 3 y 4.",
        "La ECU B es un módulo mecánico de emergencia con varillas y carburador secundario de respaldo.",
        "Ambas ECUs operan en paralelo inyectando el doble de caudal de combustible en la rampa cuando se aplica máxima potencia.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El sistema FADEC cuenta con redundancia total basada en dos computadoras idénticas (ECU A y ECU B) y sensores duplicados. En operación normal la ECU A es el canal activo y la ECU B permanece en espera monitorizando el sistema; si la ECU activa detecta una anomalía interna, transfiere automáticamente el control a la otra ECU.",
    },
    {
      id: "da40-3-4",
      question:
        "Durante la prueba previa al despegue con el pulsador ECU TEST, ¿cuáles son las condiciones de motor obligatorias para que se inicie el ciclo automático y qué verificación ejecuta el sistema?",
      options: [
        "Palanca de potencia al 100% LOAD; verifica que la hélice alcance 2.500 RPM en tierra.",
        "Motor apagado con llave Electric Master conectada; comprueba el movimiento de las superficies de mando.",
        "Palanca de potencia en ralentí (IDLE) y régimen por debajo de 900 RPM; el sistema conmuta de ECU A a ECU B, cicla el paso de hélice y regresa a ECU A apagando las luces de aviso.",
        "Palanca de potencia a 1.400 RPM y bomba eléctrica desconectada.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "La autoprueba de la ECU solo se inicia si la palanca de potencia está en IDLE y las RPM de hélice son inferiores a 900. Al mantener presionado el pulsador ECU TEST, el sistema conmuta a la ECU B, varía la presión de aceite ciclando la hélice con una leve sacudida y regresa automáticamente al canal A apagando las luces avisadoras si la prueba es satisfactoria.",
    },
    {
      id: "da40-3-5",
      question:
        "En el sistema eléctrico de 12 Vcc de la DA40 TDI, ¿cuál es la función exclusiva de la pequeña batería de excitación (12 V / 1.3 Ah)?",
      options: [
        "Suministrar corriente de excitación inicial al rotor del alternador de 90 A para permitir su cebado y generación eléctrica incluso si la batería principal estuviera descargada.",
        "Alimentar las luces de navegación y la radio durante 2 horas en caso de fallo eléctrico total.",
        "Accionar el motor de arranque eléctrico (starter) en arranques en clima frío.",
        "Alimentar directamente la bomba de combustible de trasvase del ala derecha.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El alternador de 90 A requiere corriente de excitación para iniciar su campo magnético. La batería de excitación dedicada de 1.3 Ah asegura el suministro al bobinado inductor del alternador, garantizando que comience a generar corriente de inmediato aunque la batería principal de 23 Ah presente un bajo nivel de carga.",
    },
    {
      id: "da40-3-6",
      question:
        "Si durante el vuelo se produce un fallo total y simultáneo del alternador principal y de la batería principal de la aeronave, ¿qué protección ofrece la batería de respaldo de la ECU (ECU Backup Battery) y cuánto tiempo garantiza el funcionamiento del motor?",
      options: [
        "Permite mantener encendida toda la aviónica del Garmin G1000 y el piloto automático durante 2 horas.",
        "Suministra energía de forma aislada y directa al sistema FADEC (ECU B y bomba de combustible) durante un mínimo garantizado de 30 minutos de funcionamiento del motor.",
        "Solo alimenta los instrumentos Six-Pack y el transpondedor durante 10 minutos para descender.",
        "No suministra energía a los inyectores, obligando a un planeo sin motor inmediato.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Al depender el motor diésel de la energía eléctrica para los inyectores y la ECU, la DA40 TDI incorpora dos baterías selladas de respaldo (ECU Backup Battery) que garantizan un mínimo de 30 minutos de suministro ininterrumpido al canal ECU B y a su bomba de combustible ante la pérdida total de los buses principales.",
    },
    {
      id: "da40-3-7",
      question:
        "En el sistema de combustible de la DA40 TDI, ¿por qué la válvula selectora de combustible (Fuel Shut-off Valve) dispone únicamente de posiciones ON y OFF sin selector para el tanque auxiliar?",
      options: [
        "Porque el motor se alimenta única y directamente del depósito principal (Main Tank, ala izquierda); el combustible del ala derecha debe trasvasarse eléctricamente al principal y no alimenta al motor de forma directa.",
        "Porque los dos depósitos alares están permanentemente comunicados por vasos comunicantes y se vacían por igual.",
        "Porque la válvula es de accionamiento neumático y alterna automáticamente de depósito cada 15 minutos.",
        "Porque la DA40 TDI cuenta con un único depósito central ubicado en el fuselaje bajo los asientos.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Las tuberías de alimentación de combustible y retorno hacia el motor conectan exclusivamente con el Main Tank (ala izquierda, 14 US gal utilizables). El depósito auxiliar (Aux Tank, ala derecha, 14 US gal utilizables) sirve de reserva y su combustible debe bombearse al tanque principal mediante la bomba eléctrica de trasvase.",
    },
    {
      id: "da40-3-8",
      question:
        "En el circuito de combustible del Continental CD-155, ¿qué trayectoria sigue el combustible sobrante de la rampa de inyección Common Rail y cuál es el propósito del intercambiador térmico (Fuel Cooler)?",
      options: [
        "Se pulveriza al exterior mediante un venturi bajo el fuselaje para mantener baja la masa del avión.",
        "Retorna directamente al depósito del ala derecha sin enfriador para atemperar el tanque auxiliar.",
        "Retorna hacia el depósito principal (Main Tank) pasando previamente por el enfriador (Fuel Cooler) para disipar el exceso de temperatura absorbido en los inyectores y la bomba de alta presión.",
        "Se recircula inmediatamente a los inyectores sin pasar por ningún depósito para aumentar el empuje.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "El combustible que recircula a alta presión por la Common Rail absorbe calor del bloque motor y de la bomba de alta presión. Para evitar que el combustible en el Main Tank alcance temperaturas peligrosas o genere bolsas de vapor, pasa obligatoriamente por el intercambiador de calor de combustible (Fuel Cooler) antes de retornar al tanque principal.",
    },
    {
      id: "da40-3-9",
      question:
        "¿Cómo regula el sistema de refrigeración líquida del motor Continental CD-155 la temperatura del motor entre el arranque en frío y el vuelo en crucero?",
      options: [
        "Mediante persianas de capó (cowl flaps) que el piloto abre o cierra manualmente con una palanca en cabina.",
        "Mediante una válvula termostática que en frío hace recircular el refrigerante sin pasar por el radiador, y a partir de 80 °C abre el flujo hacia el radiador frontal para mantener la temperatura en el rango normal de 60 a 96 °C.",
        "Modificando electrónicamente el paso de la hélice para aumentar el flujo de aire al radiador.",
        "No incorpora termostato y todo el caudal de líquido refrigerante fluye siempre al 100% por el radiador.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El circuito cerrado presurizado de refrigerante (50% agua destilada y 50% anticongelante Glysantin) está regulado por una válvula termostática de derivación. Por debajo de 80 °C el fluido evita el radiador para acelerar el calentamiento del motor; a partir de 80 °C (abriendo totalmente a 95 °C) conduce el líquido a través del radiador principal frontal en el morro.",
    },
    {
      id: "da40-3-10",
      question:
        "Respecto a los circuitos de lubricación de la DA40 TDI con motor Continental CD-155, ¿cuál de las siguientes afirmaciones describe con exactitud su configuración técnica?",
      options: [
        "El motor y la reductora comparten el mismo cárter de aceite común y se miden con una única varilla de nivel.",
        "El motor y la caja reductora disponen de dos circuitos de lubricación totalmente independientes y separados; el motor usa cárter húmedo comprobado con varilla y la reductora emplea su propio aceite verificado en la mirilla frontal inferior.",
        "La caja reductora no requiere ningún tipo de lubricante al emplear engranajes cerámicos secos.",
        "El aceite de motor se verifica a través de la mirilla inferior y el de la reductora mediante una varilla situada en el ala izquierda.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El motor diésel y la caja reductora cuentan con circuitos y fluidos de lubricación totalmente independientes. El motor lubrica cárter y turbo con aceite motor (4,5 a 6,0 L) medido por varilla en el capó superior; la caja reductora y el gobernador de hélice usan 1,0 L de lubricante especial para engranajes (Centurion N1 / Shell Spirax) supervisado en la mirilla frontal inferior.",
    },
    {
      id: "da40-3-11",
      question:
        "En la suite integrada Garmin G1000 de la DA40 TDI, ¿qué parámetro se visualiza en la indicación primaria de potencia del motor en lugar de la tradicional presión de admisión de motores de explosión?",
      options: [
        "El porcentaje de potencia de carga desarrollado (% LOAD) de 0% a 100%, calculado y controlado digitalmente por el FADEC.",
        "La presión de admisión en pulgadas de mercurio (inHg) leída en el colector de admisión.",
        "La presión absoluta de retorno de combustible en la Common Rail en libras por pulgada cuadrada (psi).",
        "La temperatura de gases de escape de turbina (EGT) en grados Fahrenheit.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Al tratarse de un motor turbo diésel gestionado electrónicamente por FADEC, la potencia no se gradúa por presión de admisión ni mezcla, sino mediante el indicador primario de % LOAD (0% a 100%), que refleja la fracción de potencia máxima que la ECU está entregando en función de la posición monomando de la Power Lever.",
    },
    {
      id: "da40-3-12",
      question:
        "En el sistema de alertas de tripulación (CAS - Crew Alerting System) del Garmin G1000 de la DA40 TDI, ¿qué significado operacional tiene una alerta visual en color ÁMBAR (CAUTION) frente a una alerta en color ROJO (WARNING)?",
      options: [
        "La alerta en Ámbar exige cortar inmediatamente el motor en vuelo, mientras que la Roja es solo una sugerencia de mantenimiento.",
        "Ambas alertas tienen idéntica prioridad operativa y solo cambian de color según sea de día o de noche.",
        "La alerta en Ámbar (CAUTION) indica una condición anormal del sistema que requiere atención pronta del piloto, mientras que la alerta en Rojo (WARNING) advierte de un peligro crítico inmediato que exige acción correctiva urgente.",
        "La alerta en Ámbar indica fallo de una bombilla de cabina y la Roja avisa de que el transpondedor está respondiendo.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "En la jerarquía de avisos del CAS de Garmin G1000, los avisos en ROJO (WARNING) alertan de situaciones críticas para la seguridad del vuelo (fuego de motor, baja presión de aceite, puerta abierta) que requieren reacción de emergencia inmediata. Los avisos en ÁMBAR (CAUTION) alertan de malfunciones o estados anormales que requieren atención y supervisión operativa pronta para evitar un peligro mayor.",
    },
    {
      id: "da40-3-13",
      question:
        "En el sistema de mandos de vuelo de la Diamond DA40 TDI, ¿qué mecanismo de transmisión cinemática se utiliza para gobernar los alerones y el timón de profundidad desde las palancas de mando (control sticks)?",
      options: [
        "Cables flexibles trenzados de acero con poleas y tensores en los extremos de ala.",
        "Varillas rígidas de empuje de acero (steel push-rods) con terminales de rótula sellados con barniz de seguridad, garantizando un mando directo y libre de holguras.",
        "Servomotores puramente eléctricos (fly-by-wire) sin varillajes mecánicos de conexión.",
        "Circuito hidráulico de alta presión accionado por acumuladores de nitrógeno en el cono de cola.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "En la DA40 TDI, la articulación entre las palancas de control (control sticks) y las superficies de alerones y timón de profundidad se realiza mediante varillas rígidas de empuje de acero (steel push-rods) montadas sobre cojinetes de bolas y rótulas selladas con barniz de seguridad, proporcionando una respuesta aerodinámica precisa, rígida y resistente.",
    },
    {
      id: "da40-3-14",
      question:
        "Durante las operaciones de rodaje y maniobras en tierra con la Diamond DA40 TDI, ¿cómo se controla la dirección de la aeronave teniendo en cuenta el diseño de la pata de morro?",
      options: [
        "Una barra mecánica rígida conecta directamente los pedales a la pata de morro permitiendo girarla hasta 45°.",
        "Mediante un volante manual auxiliar de dirección instalado a la izquierda de la consola de instrumentos.",
        "Mediante frenado diferencial en las punteras de los pedales de timón, ya que la rueda de morro es de giro libre (free-castering) y carece de conexión mecánica directa con los pedales.",
        "Mediante servomotores eléctricos de tren orientados de forma automática por la unidad de aviónica.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "La pata de morro de la DA40 TDI cuenta con una rueda orientable loca o libre (free-castering) con amortiguación por elastómeros y no tiene timonería mecánica conectada a los pedales. La dirección en tierra se realiza aplicando frenado diferencial en la puntera del pedal del lado al que se desea virar asistido por el flujo de aire del timón de dirección.",
    },
  ],
};

export const DA40_LESSON_4_QUIZ: Quiz = {
  id: "quiz-da40-lesson-4",
  course_id: DA40_COURSE_ID,
  lesson_id: "da400000-0000-0000-0000-000000000040",
  title:
    "Examen de Verificación: 4. Procedimientos Normales y Operación Diésel",
  description:
    "Evaluación teórica de verificación sobre inspección prevuelo en cabina y exterior, puesta en marcha y rodaje, pruebas de motor ECU Test y Swap, perfiles de despegue y ascenso (SOPs Blue Team), crucero y trasvase de combustible, aproximación, motor y al aire y procedimientos especiales de la Diamond DA40 TDI.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da40-4-1",
      question:
        "Durante la comprobación inicial de cabina (CABIN CHECK) en la DA40 TDI antes de conectar los interruptores eléctricos, ¿en qué posiciones deben verificarse el conmutador ECU SWAP y la válvula de combustible de emergencia?",
      options: [
        "ECU SWAP en posición AUTOMATIC y la válvula de combustible hacia adelante en posición abierta y bloqueada (LOCK).",
        "ECU SWAP en posición ECU B y la válvula de combustible cerrada en OFF.",
        "ECU SWAP en posición TEST y la válvula en posición intermedia.",
        "Ambos mandos en posición desconectada y con la llave retirada.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El checklist oficial de cabina (CABIN CHECK) establece como ítem de seguridad obligatorio que el selector ECU SWAP esté asegurado en AUTOMATIC y que la llave de corte de combustible (Emergency Fuel Valve) se encuentre abierta (hacia adelante) y enclavada por su fiador de seguridad.",
    },
    {
      id: "da40-4-2",
      question:
        "En la inspección del tren de aterrizaje principal izquierdo (Estación 1), ¿cuál es la presión de inflado reglamentaria del neumático y qué anomalía indica una marca de alineación (slip mark) desplazada entre llanta y neumático?",
      options: [
        "1.8 bar (26 psi); indica que el neumático está frío.",
        "2.5 bar (36 psi); una marca desalineada indica un frenado brusco con giro relativo del neumático sobre la llanta, lo que genera riesgo inminente de cizallamiento de la válvula.",
        "3.2 bar (46 psi); indica sobrepresión por calentamiento del ferodo de freno.",
        "2.0 bar (29 psi); indica desgaste normal de la banda de rodadura.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "La presión nominal de inflado de las ruedas del tren principal es de 2.5 bar (36 psi). La desalineación de la marca roja de testigo (slip mark) advierte de que el neumático ha resbalado sobre la llanta durante una frenada severa, pudiendo degollar la válvula interior y causar un reventón inmediato en el siguiente aterrizaje.",
    },
    {
      id: "da40-4-3",
      question:
        "Durante la inspección del borde de ataque del ala izquierda (Estación 2), ¿cómo se comprueba operativamente el correcto funcionamiento del avisador acústico de pérdida (Stall Warning)?",
      options: [
        "Presionando manualmente una lengüeta metálica hacia arriba hasta que haga clic.",
        "Aspirando suavemente con la boca o perilla limpia sobre la ranura del avisador en el borde de ataque para verificar que suena la alarma audible en cabina.",
        "Conectando la calefacción de Pitot en cabina durante 3 minutos hasta escuchar el tono.",
        "Aplicando un compresor de aire a presión sobre el orificio de toma estática.",
      ],
      correctAnswerIndex: 1,
      explanation:
        "El avisador de pérdida de la DA40 es de accionamiento neumático por succión. Se comprueba aplicando una suave succión con los labios (o un paño limpio) sobre la ranura del borde de ataque del ala izquierda, verificando que se escuche claramente la bocina de pérdida en el interior de la cabina.",
    },
    {
      id: "da40-4-4",
      question:
        "En la inspección del empenaje en T (Estación 4), ¿qué elemento del estabilizador vertical inferior debe inspeccionarse para detectar posibles tomas de contacto inadvertidas de la cola contra la pista (tail strike)?",
      options: [
        "El patín de cola inferior (tail skid y aleta ventral inferior), comprobando la ausencia de rozaduras, grietas o roturas de la fibra.",
        "La luz de navegación blanca instalada en el cono de cola.",
        "El descargador de estática situado en la punta del timón de profundidad.",
        "El contrapeso aerodinámico superior del timón de dirección.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El punto más bajo de la estructura de cola es el patín (tail skid) y la aleta ventral inferior. Su inspección visual permite verificar si la aeronave ha sufrido una toma con excesivo ángulo de cabeceo (tail strike) que haya podido dañar el fuselaje o la estructura de composite del empenaje.",
    },
    {
      id: "da40-4-5",
      question:
        "En la inspección del ala derecha (Estación 6), ¿qué comprobación visual específica debe realizarse en las articulaciones mecánicas de los flaps y alerones?",
      options: [
        "Engrasar los rodamientos con aceite Centurion antes de moverlos.",
        "Comprobar la tensión de los cables flexibles de acero con un tensiómetro.",
        "Verificar visualmente la correcta conexión del varillaje rígido, las bisagras y la presencia del pasador de seguridad (safety pin) en los terminales de rótula.",
        "Desmontar el terminal de la varilla para comprobar la ausencia de holguras.",
      ],
      correctAnswerIndex: 2,
      explanation:
        "Los alerones y flaps se accionan mediante varillas rígidas de empuje. En cada bisagra y punto de unión articulado es mandatorio comprobar visualmente la libertad de movimiento, el estado de los pernos y la presencia del pasador o pasador de chaveta de seguridad (safety pin) que impide el desprendimiento accidental del mando.",
    },
    {
      id: "da40-4-6",
      question:
        "Al realizar la purga de combustible en los sumideros y drenajes del tren y alas, ¿cuál es el procedimiento obligatorio si se observa presencia de agua o partículas de suciedad en la muestra?",
      options: [
        "Continuar drenando sucesivamente en un vaso transparente hasta que la muestra de combustible salga totalmente limpia, libre de sedimentos y sin gotas de agua.",
        "Agitar enérgicamente el plano del ala para mezclar el agua con el JET A-1.",
        "Poner el motor en marcha a ralentí para que el filtro gascolator absorba la humedad.",
        "Anotar la novedad en el libro de vuelo y despegar manteniendo la bomba de trasvase encendida.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Si se aprecian gotas de agua o sedimentos en el decantador de purga, el piloto debe repetir el drenaje las veces necesarias hasta que la muestra extraída de combustible JET A-1 se observe completamente homogénea, transparente y exenta de contaminación acuosa o partículas sólidas.",
    },
    {
      id: "da40-4-7",
      question:
        "En la estación de morro (Front Fuselage), ¿qué advertencia crítica de seguridad (WARNING) establece el AFM respecto al movimiento manual de la hélice en tierra?",
      options: [
        "Nunca mover la hélice a mano si el interruptor ENGINE MASTER está en ON, ni tampoco inmediatamente tras parar el motor aunque esté en OFF debido a la presión residual en la rampa Common Rail.",
        "Solo se permite mover la hélice a mano si la llave Electric Master está puesta en el contacto.",
        "Debe girarse siempre en sentido contrario a las agujas del reloj un mínimo de 10 vueltas antes de arrancar.",
        "La hélice se debe voltear a mano con fuerza para purgar el aire de los inyectores.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Al tratarse de un motor con inyección directa Common Rail y control electrónico, si queda presión acumulada en la rampa o si el interruptor ENGINE MASTER está conectado, mover la hélice a mano puede desencadenar una inyección accidental y un movimiento brusco imprevisto del motor con consecuencias letales.",
    },
    {
      id: "da40-4-8",
      question:
        "En la parte inferior del fuselaje delantero, ¿cuál es el propósito operativo de accionar la válvula de purga del filtro decantador principal (Gascolator) durante la inspección prevuelo?",
      options: [
        "Purgar el punto más bajo del circuito de alimentación de combustible al motor para asegurar la ausencia total de agua condensada y sedimentos antes de la puesta en marcha.",
        "Comprobar el caudal máximo de las bombas eléctricas de inyección.",
        "Vaciar el combustible del vuelo anterior para renovar la carga.",
        "Ajustar la presión diferencial del intercambiador de calor de combustible (Fuel Cooler).",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El gascolator o filtro principal de combustible es el punto inferior donde convergen las líneas de alimentación antes de las bombas de alta presión. Su purga en cada prevuelo permite drenar cualquier resto de agua condensada o suciedad antes de que penetre en los componentes de inyección del motor.",
    },
    {
      id: "da40-4-9",
      question:
        "En la lista de comprobación ANTES DEL ARRANQUE (Before Starting Engine), ¿cuál es la verificación obligatoria respecto a la cúpula frontal (Canopy) y la puerta trasera de pasajeros?",
      options: [
        "Verificar que la cúpula esté completamente cerrada con la palanca frontal hacia adelante y asegurada, y la puerta trasera enclavada con su manilla y pestillo de seguridad bloqueado.",
        "Dejar la cúpula fijada en la primera posición de refrigeración para ventilar los gases del motor.",
        "Bloquear únicamente la puerta trasera, ya que la cúpula frontal se ajusta sola por presión aerodinámica al rodar.",
        "Abrir ambas puertas para facilitar la comunicación con el señalero en rampa.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Antes de arrancar el motor es un paso indispensable de seguridad comprobar que tanto la cúpula delantera como la puerta trasera estén totalmente enclavadas y con sus pestillos de seguridad bloqueados para evitar aperturas no deseadas en tierra o en vuelo.",
    },
    {
      id: "da40-4-10",
      question:
        "Durante la puesta en marcha del motor Continental CD-155, tras conectar el interruptor ENGINE MASTER, ¿qué indicación en cabina debe observarse antes de accionar la llave a la posición START en un arranque en frío?",
      options: [
        "Esperar a que se apague el aviso luminoso de precalentamiento (GLOW ON), confirmando que las bujías de precalentamiento han alcanzado la temperatura óptima en las cámaras de combustión.",
        "Accionar inmediatamente la posición START sin esperar ninguna señal luminosa.",
        "Avanzar la palanca monomando (Power Lever) al 50% de carga.",
        "Presionar de forma continuada el pulsador ECU TEST.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "En arranques en frío con motor diésel, al pasar ENGINE MASTER a ON se activa el sistema de precalentamiento de los cilindros (indicación GLOW ON). El piloto debe aguardar a que la indicación se apague para garantizar un arranque suave y limpio al accionar el motor de arranque.",
    },
    {
      id: "da40-4-11",
      question:
        "Durante el rodaje de la DA40 TDI, ¿qué verificación es obligatoria realizar inmediatamente después de que el avión inicie el movimiento desde el estacionamiento?",
      options: [
        "Aplicar potencia máxima durante 5 segundos para comprobar el tacómetro.",
        "Comprobar la eficacia de los frenos en ambas punteras de los pedales asegurando que detienen la aeronave de forma equilibrada y simétrica.",
        "Conectar la bomba eléctrica de trasvase del ala derecha.",
        "Extender los flaps a posición de aterrizaje (LDG).",
      ],
      correctAnswerIndex: 1,
      explanation:
        "Nada más comenzar a rodar el avión, el piloto debe presionar suavemente las punteras de ambos pedales para verificar la presión y respuesta del sistema hidráulico de frenado antes de adentrarse en calles de rodaje o zonas transitadas.",
    },
    {
      id: "da40-4-12",
      question:
        "En la lista de comprobación ANTES DEL DESPEGUE (Before Take-Off), ¿en qué posición deben ajustarse el compensador de profundidad (Elevator Trim) y los flaps de cara a la carrera de despegue?",
      options: [
        "Compensador de profundidad en la marca de despegue (T/O) y selector de flaps en posición T/O (verificando la indicación en panel).",
        "Compensador totalmente a morro arriba y flaps en posición LDG.",
        "Compensador centrado en posición neutral y flaps totalmente retraídos (UP).",
        "Compensador en morro abajo y flaps en posición T/O.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Para el despegue normal en la DA40 TDI, la configuración aerodinámica estándar certificada exige situar la rueda del compensador en la indicación T/O y desplegar los flaps en posición intermedia de despegue (T/O - 20°).",
    },
    {
      id: "da40-4-13",
      question:
        "Al realizar la comprobación de máxima potencia estática en tierra previa al despegue (Power lever FULL FORWARD), ¿cuál es el régimen mínimo de RPM de hélice que debe comprobar el piloto en el G1000 EIS?",
      options: [
        "Entre 2.250 y 2.300 RPM al 100% de LOAD con todos los parámetros de motor en rango verde.",
        "2.700 RPM con luz roja de advertencia parpadeando.",
        "1.800 RPM y un 65% de LOAD.",
        "2.500 RPM continuas sin límite de tiempo.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Con la palanca de potencia a fondo (FULL FORWARD) en el punto de espera, el motor Continental CD-155 debe desarrollar el 100% de LOAD y la hélice debe estabilizarse entre 2.250 y 2.300 RPM dentro del rango verde antes de autorizar el despegue.",
    },
    {
      id: "da40-4-14",
      question:
        "Según la tabla de velocidades operativas del AFM de la Diamond DA40 TDI a peso máximo (1.150 kg), ¿cuáles son la velocidad de rotación (VR), la velocidad de mejor régimen de ascenso (VY con flaps T/O) y el viento cruzado máximo demostrado?",
      options: [
        "Rotación (VR) a 59 KIAS, mejor régimen (VY) a 66 KIAS y viento cruzado máximo demostrado de 20 nudos.",
        "Rotación a 50 KIAS, mejor régimen a 75 KIAS y viento cruzado de 12 nudos.",
        "Rotación a 65 KIAS, mejor régimen a 85 KIAS y viento cruzado de 25 nudos.",
        "Rotación a 45 KIAS, mejor régimen a 60 KIAS y viento cruzado de 15 nudos.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "A masa máxima de 1.150 kg, la DA40 TDI rota a 59 KIAS (VR), asciende en régimen óptimo (VY) con flaps T/O a 66 KIAS y tiene un componente de viento cruzado máximo demostrado en certificación de 20 nudos.",
    },
    {
      id: "da40-4-15",
      question:
        "Tras el despegue inicial a 66 KIAS con flaps T/O, ¿a qué altitud mínima de seguridad y velocidad indicada establecen los SOPs de Blue Team y el AFM la aceleración y retracción de flaps a configuración limpia (UP)?",
      options: [
        "A 500 ft AGL con tasa positiva confirmada, acelerando a 73 KIAS (Cruise Climb), seleccionando flaps a UP y apagando la luz de aterrizaje.",
        "Inmediatamente tras la rotación a 50 ft AGL acelerando a 90 KIAS.",
        "A 1.000 ft AGL manteniendo 59 KIAS y flaps en T/O.",
        "Únicamente al nivelar a la altitud final de crucero a 120 KIAS.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Según los SOPs de Blue Team Flight School y el procedimiento de ascenso del AFM, una vez alcanzados los 500 ft AGL con régimen positivo de ascenso, se acelera la aeronave a 73 KIAS (velocidad de ascenso en crucero a 1.150 kg), se retraen los flaps a posición UP (configuración limpia) y se apaga la luz de aterrizaje.",
    },
    {
      id: "da40-4-16",
      question:
        "Durante el vuelo de crucero en la DA40 TDI, ¿cuándo se recomienda iniciar el trasvase de combustible desde el depósito del ala derecha (Aux Tank) hacia el depósito principal del ala izquierda (Main Tank)?",
      options: [
        "Cuando el indicador del depósito principal (Main Tank) descienda a un nivel de aproximadamente 10 a 12 US galones, activando el interruptor FUEL TRANSFER.",
        "Cuando el depósito principal esté completamente vacío y el motor comience a fallar.",
        "Justo en el momento de la rotación en despegue.",
        "Únicamente tras aterrizar y cortar el motor en la plataforma.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Dado que el motor solo consume del Main Tank (ala izquierda), cuando este desciende a unas 10-12 US galones de capacidad, se debe encender la bomba eléctrica (FUEL TRANSFER) para transferir el combustible del ala derecha sin riesgo de desbordamiento, completando el proceso en unos 12-15 minutos (caudal ~60 US gal/h).",
    },
    {
      id: "da40-4-17",
      question:
        "Según la precaución (CAUTION) del AFM relativa al descenso y la aproximación final a peso máximo (1.150 kg), ¿qué ajuste mínimo de potencia se requiere mantener por encima de 5.000 ft y cuál es la velocidad indicada recomendada en corta final con flaps LDG?",
      options: [
        "Mantener al menos un 30% de LOAD para evitar que la combustión se detenga inadvertidamente por enfriamiento, y una velocidad en corta final de 71 KIAS.",
        "Mantener 0% de LOAD (ralentí puro) y una velocidad de 55 KIAS.",
        "Mantener un 75% de LOAD constante y una velocidad en final de 85 KIAS.",
        "Mantener un 15% de LOAD y una velocidad en final de 60 KIAS.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "En descensos prolongados por encima de 5.000 ft, el AFM advierte de mantener como mínimo un 30% de LOAD para evitar el sobreenfriamiento del motor diésel y la parada inadvertida de combustión. En aproximación corta final a MTOW (1.150 kg) con flaps LDG, la velocidad de referencia es 71 KIAS.",
    },
    {
      id: "da40-4-18",
      question:
        "Al ejecutar una maniobra de aproximación frustrada o motor y al aire (Go-Around) desde configuración de aterrizaje, ¿cuál es la secuencia correcta de acciones y en qué punto se limpian totalmente los flaps según los SOPs de la escuela?",
      options: [
        "Palanca monomando a MAX de inmediato, adoptar actitud de ascenso para estabilizar 66 KIAS, retraer flaps de LDG a T/O, y no subirlos a UP hasta tener tasa positiva y alcanzar los 500 ft AGL a 73 KIAS.",
        "Cortar la potencia a ralentí, aplicar frenos y esperar a que el avión toque tierra.",
        "Retraer los flaps directamente de LDG a UP antes de avanzar la potencia.",
        "Mantener flaps en LDG durante todo el circuito y virar inmediatamente con 45° de inclinación.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La regla mnemotécnica es Potencia, Actitud y Flaps: potencia a MAX sin vacilar, morro arriba buscando 66 KIAS (VY) y retracción inmediata de LDG a T/O. La transición final a flaps UP no se realiza hasta confirmar tasa positiva y superar los 500 ft AGL a 73 KIAS, conforme a los SOPs de Blue Team.",
    },
    {
      id: "da40-4-19",
      question:
        "En el procedimiento de parada de motor (Engine Shut-Down), ¿por qué exige el AFM mantener el motor al ralentí (IDLE) durante al menos 2 minutos antes de desconectar el interruptor ENGINE MASTER?",
      options: [
        "Para permitir que el turbocompresor y el aceite de lubricación disipen el calor acumulado y estabilicen su temperatura antes de que se detenga el flujo de aceite.",
        "Para consumir todo el combustible residual de los inyectores Common Rail.",
        "Para que la batería de excitación se descargue completamente.",
        "Para permitir la calibración automática de los giróscopos de la suite Garmin G1000.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El turbocompresor gira a altísimas revoluciones y temperatura. Detener el motor inmediatamente tras rodar cortaría la circulación de aceite mientras el turbo sigue caliente, coquificando el aceite en sus cojinetes. El AFM exige 2 minutos en IDLE para refrigerar adecuadamente el conjunto turboalimentado.",
    },
    {
      id: "da40-4-20",
      question:
        "Según la sección de Procedimientos Especiales del AFM, ¿qué efecto específico tiene el vuelo con lluvia (Flight in Rain) sobre la performance de la Diamond DA40 TDI?",
      options: [
        "Deteriora el rendimiento aerodinámico, incrementando sensiblemente la distancia de despegue y reduciendo la velocidad máxima horizontal, si bien su efecto sobre las características de mando y vuelo es mínimo.",
        "Provoca una parada inmediata del motor por aspiración de agua en las tomas del intercooler.",
        "Incrementa la velocidad de crucero en un 10% gracias a la reducción de fricción superficial del agua.",
        "Reduce la velocidad de pérdida en 10 nudos permitiendo aproximaciones más lentas.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM especifica en Procedimientos Especiales que el agua de lluvia sobre los perfiles alares de composite deteriora la performance, incrementando la carrera y distancia de despegue y disminuyendo la velocidad máxima horizontal, recomendando evitar lluvia muy densa principalmente por la pérdida crítica de visibilidad exterior.",
    },
  ],
};

export const DA40_LESSON_5_QUIZ: Quiz = {
  id: "quiz-da40-lesson-5",
  course_id: DA40_COURSE_ID,
  lesson_id: "da400000-0000-0000-0000-000000000050",
  title:
    "Examen de Verificación: 5. Procedimientos de Emergencia y Casos Anómalos",
  description:
    "Evaluación teórica de verificación sobre velocidades de planeo y emergencia, fallos de motor en tierra y vuelo, EFATO, reencendido de motor, malfunciones de hélice y gobernador, emergencias de fuego y eléctricas, barrena, engelamiento, alertas CAS y procedimientos anormales del AFM en la Diamond DA40 TDI.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da40-5-1",
      question:
        "A peso máximo de despegue (1.150 kg), ¿cuál es la velocidad indicada de mejor planeo (Best Glide Speed) con flaps UP en la DA40 TDI y cuál es su razón de planeo con la hélice en molinete (windmilling)?",
      options: [
        "73 KIAS con una razón de planeo de 1 : 8.8 (aprox. 1.45 NM o 2.68 km por cada 1.000 ft de altitud perdida).",
        "65 KIAS con una razón de planeo de 1 : 12.0.",
        "85 KIAS con una razón de planeo de 1 : 6.0.",
        "59 KIAS con una razón de planeo de 1 : 15.0.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM estipula que a MTOW (1.150 kg) la velocidad de mejor ángulo de planeo con flaps UP es de 73 KIAS (68 KIAS a 1.000 kg y 60 KIAS a 850 kg). Con la hélice girando en molinete (windmilling), la razón de planeo es de 1 : 8.8.",
    },
    {
      id: "da40-5-2",
      question:
        "Ante una anomalía grave de motor durante la carrera de despegue en pista disponiendo de longitud suficiente (Take-Off Can Still Be Aborted), ¿cuál es la primera e inmediata acción que debe realizar el piloto?",
      options: [
        "Llevar la palanca de potencia inmediatamente a ralentí (IDLE) y aplicar frenos según sea necesario manteniendo el eje de pista.",
        "Poner la hélice en bandera y abrir la cúpula frontal para frenar aerodinámicamente.",
        "Desconectar la llave Electric Master a plena potencia para cortar la corriente.",
        "Seleccionar flaps en posición LDG de inmediato mientras se gira hacia la hierba.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El procedimiento de aborto de despegue en pista (Aborted Take-Off) exige llevar la palanca monomando inmediatamente a IDLE y frenar con firmeza y simetría manteniendo la aeronave alineada con el eje de la pista hasta su completa detención.",
    },
    {
      id: "da40-5-3",
      question:
        "En caso de fallo de motor inmediatamente tras el despegue cuando ya no es posible aterrizar en la pista y no se ha alcanzado una altitud segura (EFATO), ¿qué advertencia crítica (WARNING) establece el AFM de la DA40 TDI?",
      options: [
        "Aterrizar en línea recta por delante adoptando 72 KIAS con flaps T/O y no intentar virar de vuelta al aeródromo, ya que el viraje de retorno a baja cota puede ser mortal.",
        "Virar inmediatamente 180° hacia la pista aplicando 60° de inclinación con los pedales.",
        "Mantener el morro arriba buscando la velocidad de rotación (59 KIAS) para no descender.",
        "Apagar el transpondedor y realizar una barrena controlada para perder altura.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM incluye una advertencia enérgica (WARNING): ante una parada de motor en ascenso inicial sin altitud segura, debe realizarse un aterrizaje forzoso en línea recta por delante (72 KIAS a 1.150 kg con flaps T/O). Intentar virar de vuelta a la pista (turn back) suele provocar entrada en pérdida y barrena fatal contra el terreno.",
    },
    {
      id: "da40-5-4",
      question:
        "Si durante el vuelo de crucero el motor Continental CD-155 comienza a marchar de manera áspera e irregular (Engine Running Roughly), ¿qué acción se debe realizar con el conmutador ECU SWAP y qué indica el AFM si el problema no se resuelve?",
      options: [
        "Seleccionar manualmente la posición ECU B; si el problema no se resuelve, regresar el conmutador a la posición AUTOMATIC.",
        "Mantener el conmutador en ECU B durante todo el vuelo aunque el motor empeore.",
        "Cortar inmediatamente el interruptor ENGINE MASTER a OFF en vuelo.",
        "Presionar de inmediato el pulsador ECU TEST a máxima potencia.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El checklist para marcha irregular exige probar el canal secundario seleccionando ECU B. Si la anomalía no desaparece al pasar a ECU B, la nota del AFM indica que se debe volver a situar el conmutador en AUTOMATIC y buscar el aeródromo más próximo para un aterrizaje de precaución.",
    },
    {
      id: "da40-5-5",
      question:
        "Ante una pérdida de potencia en vuelo (Loss of Power) con la hélice girando en molinete por encima de 60 KIAS, ¿qué procedimiento de reseteo del sistema FADEC contempla el checklist del AFM?",
      options: [
        "Ciclar el interruptor ENGINE MASTER a OFF y seguidamente a ON para reiniciar el control electrónico de la ECU e intentar restablecer la inyección.",
        "Desconectar la batería principal y extraer la llave de contacto en vuelo.",
        "Presionar el botón ECU TEST durante 10 segundos continuados.",
        "Mover la palanca de potencia bruscamente de IDLE a MAX cinco veces seguidas.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Si el motor pierde potencia y la hélice sigue girando en molinete por la velocidad del aire (≥ 60 KIAS), ciclar el interruptor ENGINE MASTER (OFF y luego ON) actúa como un reinicio del sistema FADEC, permitiendo rearmar las computadoras y recuperar la alimentación en caso de bloqueo electrónico menor.",
    },
    {
      id: "da40-5-6",
      question:
        "¿Cuál es el rango de velocidad recomendada por el AFM para el reencendido de motor en vuelo con la hélice girando en molinete (Windmilling Propeller) y qué posición debe adoptar la palanca de potencia?",
      options: [
        "Velocidad indicada entre 73 y 110 KIAS con la palanca de potencia en ralentí (IDLE).",
        "Velocidad de 130 a 160 KIAS con la palanca al 100% LOAD.",
        "Velocidad por debajo de 50 KIAS con la palanca en MAX.",
        "Velocidad de 40 KIAS con los flaps en posición LDG.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Para reencender el motor con la hélice en molinete (sin necesidad de accionar el arrancador eléctrico), el AFM exige mantener una velocidad comprendida entre 73 y 110 KIAS con la palanca monomando en IDLE, abriendo el Alternate Air y verificando la válvula de combustible en NORMAL antes de activar el ENGINE MASTER.",
    },
    {
      id: "da40-5-7",
      question:
        "Si en vuelo se presentan oscilaciones periódicas en las revoluciones de la hélice (Oscillating RPM), ¿cuál es la primera acción operativa recomendada por el AFM para intentar estabilizar el gobernador de la hélice?",
      options: [
        "Modificar ligeramente la posición de la palanca de potencia (Power Lever) para sacar al gobernador del punto de resonancia o inestabilidad.",
        "Cortar el interruptor ENGINE MASTER de inmediato.",
        "Aplicar frenado diferencial en las punteras de los pedales.",
        "Activar la baliza de emergencia ELT en cabina.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Cuando se presentan oscilaciones de RPM de la hélice, el primer paso consiste en variar ligeramente la posición de la palanca monomando. A menudo un leve cambio de consigna de empuje permite que el gobernador hidráulico recupere el control estable de la presión de aceite sobre el buje de la hélice.",
    },
    {
      id: "da40-5-8",
      question:
        "En caso de que se produzca una sobrevelocidad descontrolada de la hélice (Propeller Overspeed) superando las 2.300 RPM en vuelo, ¿cuál es el procedimiento que debe aplicar el piloto?",
      options: [
        "Reducir la palanca de potencia lo necesario para devolver y mantener las RPM dentro del rango verde admisible del tacómetro, reduciendo la velocidad aerodinámica si fuera preciso.",
        "Avanzar la palanca al 100% LOAD para forzar el paso grueso de las palas.",
        "Apagar la aviónica y desconectar la calefacción de cabina.",
        "Llevar la palanca de mando bruscamente hacia atrás hasta provocar la pérdida.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Ante una sobrevelocidad de la hélice provocada por fallo del gobernador, el piloto debe reducir la palanca de potencia (Power Lever) para impedir que las RPM superen el límite estructural de 2.500 RPM transitorias (o 2.300 RPM continuas), aterrizando en el aeródromo adecuado más cercano.",
    },
    {
      id: "da40-5-9",
      question:
        "Si se detecta fuego de motor en tierra durante la puesta en marcha o el rodaje (Engine Fire on Ground), ¿cuál es la secuencia inmediata de corte de seguridad antes de evacuar la cabina?",
      options: [
        "Válvula de corte de combustible en OFF, interruptor ENGINE MASTER en OFF, ELECTRIC MASTER en OFF y evacuar inmediatamente la aeronave.",
        "Aumentar la potencia al 100% para disipar el fuego por el rebufo de la hélice.",
        "Conectar la bomba eléctrica de trasvase del ala derecha.",
        "Desplegar los flaps en posición LDG y esperar dentro del avión al servicio de bomberos.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Para extinguir el fuego en tierra es vital cortar el suministro de combustible cerrando la Emergency Fuel Valve (OFF), cortar la inyección eléctrica (ENGINE MASTER OFF) y desenergizar la batería (ELECTRIC MASTER OFF) antes de desalojar la cabina de inmediato.",
    },
    {
      id: "da40-5-10",
      question:
        "Ante una alarma de fuego o humo procedente del motor en vuelo (Engine Fire in Flight), ¿cuáles son las dos acciones inmediatas más críticas para aislar el fuego de la cabina y cortar su propagación?",
      options: [
        "Cerrar inmediatamente la válvula de emergencia de combustible (Emergency fuel valve OFF) y cerrar el mando de calefacción de cabina (Cabin Heat OFF).",
        "Abrir la calefacción de cabina al máximo y encender la bomba eléctrica de combustible.",
        "Subir el morro a la velocidad de pérdida para ahogar las llamas.",
        "Conmutar a ECU B y mantener potencia máxima continua.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "En caso de fuego de motor en vuelo, cortar la válvula de combustible (OFF) priva al incendio de su fuente de alimentación, mientras que cerrar la calefacción (Cabin Heat OFF) impide de forma tajante la entrada de gases letales, humo denso y llamas hacia el habitáculo de pasajeros.",
    },
    {
      id: "da40-5-11",
      question:
        "Si se produce fuego o humo de origen eléctrico en el panel de instrumentos en vuelo (Electrical Fire in Flight), ¿qué acción permite aislar la red eléctrica principal manteniendo la alimentación de los instrumentos esenciales de actitud?",
      options: [
        "Conectar el interruptor EMERGENCY SWITCH en ON y a continuación pasar el ELECTRIC MASTER a OFF para desenergizar las barras principales.",
        "Apagar el interruptor ENGINE MASTER dejando el Electric Master en ON.",
        "Extraer todos los fusibles de la ECU con la mano en pleno vuelo.",
        "Abrir la cúpula frontal por completo en vuelo para ventilar el humo.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Conectar el EMERGENCY SWITCH (ON) energiza el horizonte artificial y la luz de emergencia mediante su propia batería estanca independiente. Seguidamente, colocar el ELECTRIC MASTER en OFF corta el alternador y la batería principal, eliminando la fuente del cortocircuito eléctrico sin perder las referencias de actitud.",
    },
    {
      id: "da40-5-12",
      question:
        "Durante la aproximación final para un aterrizaje forzoso de emergencia con motor parado (Emergency Landing with Engine Off), ¿qué acción vital debe realizarse justo antes de la toma de contacto en el terreno?",
      options: [
        "Cortar la válvula de combustible (OFF), apagar el ENGINE MASTER (OFF) y desconectar el ELECTRIC MASTER (OFF) para eliminar fuentes de ignición e incendio tras el impacto.",
        "Mantener el Electric Master conectado para asegurar el funcionamiento de las luces estroboscópicas.",
        "Retraer los flaps a posición UP justo en el momento de la recogida.",
        "Desabrochar los arneses de seguridad en corta final para abandonar el avión rápidamente.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Justo antes de la toma de contacto en un aterrizaje forzoso fuera de pista, cortar combustible (Emergency Valve OFF) y desenergizar por completo la aeronave (ENGINE MASTER y ELECTRIC MASTER OFF) previene que chispas eléctricas o derrames de combustible provoquen un incendio catastrófico tras el impacto.",
    },
    {
      id: "da40-5-13",
      question:
        "Al realizar una toma con un neumático principal desinflado (Defective Tire), ¿cómo debe actuar el piloto sobre los mandos aerodinámicos durante la carrera de aterrizaje?",
      options: [
        "Mantener el ala del neumático desinflado levantada mediante el uso de alerones el mayor tiempo posible, transfiriendo el peso del avión a la rueda sana y frenando únicamente con esta.",
        "Frenar a fondo con la rueda desinflada para detener el avión cuanto antes.",
        "Retraer los flaps a UP antes de tocar tierra.",
        "Aterrizar intencionadamente con viento en cola para reducir la fricción.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Para evitar que la rueda desinflada clave la llanta en la pista provocando una guiñada violenta o daños estructurales, el piloto aterriza con flaps LDG a la mínima velocidad posible, utiliza alerones para mantener levantada el ala averiada y aplica frenado diferencial únicamente en la rueda con el neumático intacto.",
    },
    {
      id: "da40-5-14",
      question:
        "Ante una entrada inadvertida en barrena (Unintentional Spin), ¿cuál es la técnica reglamentaria aprobada por el AFM de la DA40 TDI para recuperar el vuelo nivelado?",
      options: [
        "Palanca de potencia a IDLE, timón a fondo contrario al sentido de rotación, alerones neutros con palanca adelante para romper la pérdida, flaps UP y recuperación suave de la picada una vez detenida la rotación.",
        "Palanca al 100% LOAD y tirar suavemente de la palanca hacia atrás.",
        "Alerones a fondo en el sentido del giro y flaps en posición LDG.",
        "Pisar ambos pedales de freno a fondo simultáneamente.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El procedimiento de recuperación de barrena (Spin Recovery) sigue los pasos universales certificados: potencia a ralentí (IDLE), pedal de timón a fondo opuesto a la rotación, alerones al centro, palanca hacia adelante para restablecer el flujo laminar sobre el ala, flaps retraídos a UP y, una vez cesado el giro, centrar timón y nivelar con suavidad.",
    },
    {
      id: "da40-5-15",
      question:
        "Si la aeronave penetra de forma inadvertida en condiciones de engelamiento (Unintentional Flight into Icing), ¿cuál es la directriz del AFM respecto a la maniobra del vuelo y la operación de los flaps para el aterrizaje si hay acumulación de hielo?",
      options: [
        "Abandonar la zona de engelamiento de inmediato, conectar la calefacción de Pitot, abrir el Alternate Air y evitar el uso de flaps en posición LDG para el aterrizaje, realizando la aproximación a mayor velocidad con flaps UP o T/O.",
        "Continuar el vuelo en la misma altitud y desplegar flaps LDG para romper el hielo acumulado.",
        "Apagar el calefactor de cabina y realizar un descenso continuado con motor cortado.",
        "Descender con la palanca a ralentí para enfriar los bordes de ataque.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La DA40 TDI no está certificada para volar en engelamiento conocido. Al encontrar hielo inadvertido debe salirse inmediatamente de la condición, calentar pitot, abrir Alternate Air y no desplegar flaps en LDG para la toma (riesgo de pérdida prematura de empenaje o ala), aterrizando con flaps UP o T/O a mayor velocidad.",
    },
    {
      id: "da40-5-16",
      question:
        "En caso de un fallo eléctrico total y simultáneo de los buses principales en vuelo, ¿qué sistema garantiza que el piloto conserve indicaciones giroscópicas de actitud y horizonte artificial y durante cuánto tiempo?",
      options: [
        "El interruptor EMERGENCY SWITCH, cuya batería interna dedicada alimenta de forma aislada el horizonte artificial de respaldo y la luz de emergencia durante al menos 1,5 horas.",
        "La batería de excitación del alternador durante 5 minutos.",
        "El conmutador ECU SWAP durante 10 minutos.",
        "No existe ningún respaldo de instrumentos de actitud ante fallo eléctrico total.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El sistema de instrumentos de emergencia de la DA40 TDI dispone de una batería independiente que se activa colocando el conmutador EMERGENCY SWITCH en ON, garantizando al menos 1,5 horas (90 minutos) de alimentación exclusiva para el horizonte artificial de respaldo y la iluminación de emergencia del panel.",
    },
    {
      id: "da40-5-17",
      question:
        "Si en pleno vuelo se ilumina la alerta de puerta abierta (DOOR OPEN) o se percibe que la cúpula no está correctamente enclavada, ¿cuál es la pauta operativa dictada por el AFM?",
      options: [
        "Mantener el control de vuelo reduciendo la velocidad a un máximo de 140 KIAS, no intentar cerrar la puerta con maniobras violentas y aterrizar en el aeródromo más próximo para asegurarla en tierra.",
        "Empujar la cúpula hacia arriba para expulsarla de la aeronave y evitar ruidos.",
        "Apagar de inmediato el motor diésel y buscar un aterrizaje forzoso.",
        "Realizar un viraje escarpado de 60° para forzar el cierre de la puerta por gravedad.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La aerodinámica de la DA40 mantiene la cúpula o puerta pegada al fuselaje sin desprenderse. El AFM instruye no intentar cerrarla con violencia en vuelo para no perder el control de la aeronave, mantener una velocidad ≤ 140 KIAS y aterrizar con normalidad en el aeródromo adecuado más cercano para cerrarla en tierra.",
    },
    {
      id: "da40-5-18",
      question:
        "Al ejecutar un aterrizaje de precaución (Precautionary Landing) con motor operativo en un terreno no preparado o aeródromo no familiar, ¿cuál es la velocidad y configuración recomendada por el AFM para el vuelo de reconocimiento previo sobre el campo?",
      options: [
        "Altitud de reconocimiento de aproximadamente 500 ft AGL a una velocidad indicada de 73 KIAS con flaps en posición T/O.",
        "Reconocimiento a 50 ft AGL a 120 KIAS con flaps en posición UP.",
        "Reconocimiento a 1.500 ft AGL a 49 KIAS con flaps en posición LDG.",
        "Reconocimiento a ras de suelo con el motor cortado.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Antes de tomar en un campo no balizado, el AFM prescribe una pasada de inspección a 500 ft AGL con flaps T/O y 73 KIAS para evaluar la dirección del viento, el estado de la superficie, la pendiente y la presencia de obstáculos antes de incorporarse al circuito final de aterrizaje.",
    },
    {
      id: "da40-5-19",
      question:
        "Si durante el vuelo se ilumina el aviso de precaución ECU A (ECU A FAIL) en el panel de alertas CAS, ¿cuál es el procedimiento oficial de reinicio y qué decisión debe tomar el piloto si la alarma no se resetea?",
      options: [
        "Presionar el pulsador ECU TEST durante más de 2 segundos para intentar resetear el mensaje; si la alarma reaparece o no se apaga, aterrizar en el aeródromo adecuado más próximo y someter el motor a mantenimiento.",
        "Mover inmediatamente la llave selectora de combustible a la posición OFF.",
        "Seleccionar manualmente la posición ECU B y continuar hasta el destino planificado aunque esté lejano.",
        "Desconectar el fusible del alternador en la consola izquierda.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Ante aviso de ECU A, el sistema ya ha transferido el control a ECU B. El piloto debe pulsar ECU TEST durante >2 segundos para comprobar si se trata de un fallo transitorio menor. Si el aviso persiste o no se apaga, el vuelo debe interrumpirse aterrizando en el aeródromo adecuado más cercano para someter el motor a mantenimiento obligatorio.",
    },
    {
      id: "da40-5-20",
      question:
        "Ante una indicación anómala de altas revoluciones de hélice (High RPM) en el Garmin G1000 EIS rozando la banda roja, ¿cómo debe actuar el piloto para proteger el conjunto motor-reductora?",
      options: [
        "Reducir la palanca de potencia (Power Lever) lo necesario para devolver y mantener las RPM dentro del rango verde del tacómetro; si la potencia remanente no es suficiente, ejecutar un aterrizaje de precaución.",
        "Avanzar la palanca de potencia al 100% continuo para bloquear el regulador.",
        "Tirar de la palanca hacia atrás bruscamente para inducir la pérdida y frenar la hélice.",
        "Cortar la batería principal y apagar las pantallas de aviónica.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Conforme al procedimiento 4B.2.1 del AFM, ante un régimen excesivo de hélice el piloto debe retrasar la palanca de empuje para situar las RPM en banda verde. Si la potencia utilizable resultante resulta insuficiente para un vuelo seguro, debe realizarse un aterrizaje de precaución.",
    },
    {
      id: "da40-5-21",
      question:
        "Ante la indicación de fallo del alternador o aviso de bajo voltaje (LOW VOLTS) en vuelo, ¿cuál es la gestión eléctrica mandatoria que debe realizar el piloto de inmediato?",
      options: [
        "Verificar el disyuntor del alternador, desconectar todos los equipos y consumidores eléctricos no indispensables para prolongar la carga de la batería y planificar el aterrizaje en el aeródromo adecuado más próximo.",
        "Encender todas las luces de cabina para forzar la corriente del alternador.",
        "Apagar el interruptor ENGINE MASTER en pleno vuelo para ahorrar energía.",
        "Pasar inmediatamente el conmutador ECU SWAP a posición TEST.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Sin alternador, la red depende exclusivamente de la batería principal. El piloto debe chequear el disyuntor del alternador y desconectar consumidores prescindibles (luces exteriores, calefactor de pitot en VMC, pantallas auxiliares) para extender la autonomía eléctrica y aterrizar con prontitud.",
    },
    {
      id: "da40-5-22",
      question:
        "Si durante un ascenso prolongado se observa una temperatura anormalmente alta del líquido refrigerante (Coolant Temp en ámbar), ¿qué maniobra de refrigeración aerodinámica recomienda aplicar el AFM si no hay aviso de pérdida de líquido (COOL LVL apagado)?",
      options: [
        "Reducir la potencia de motor un 10% e incrementar la velocidad indicada 10 KIAS para aumentar el flujo de aire refrigerante sobre el radiador principal del morro.",
        "Poner la potencia al 100% LOAD y trepar en pérdida buscando aire más frío.",
        "Apagar el motor diésel y planear a 50 KIAS con la hélice parada.",
        "Abrir la compuerta de aceite en vuelo mediante la palanca de flaps.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El procedimiento 4B.2.2 del AFM establece que, si no hay pérdida de fluido, se reduzca un 10% de potencia y se aumente la velocidad en 10 KIAS; esto disminuye la generación térmica del motor y maximiza el caudal de aire atmosférico que atraviesa el radiador frontal de refrigerante.",
    },
    {
      id: "da40-5-23",
      question:
        "Si en vuelo de crucero la indicación de presión de aceite del motor Continental CD-155 desciende bruscamente hacia la banda roja (< 1.2 bar), ¿cuál es la pauta operativa y el escenario de emergencia que debe anticipar el piloto?",
      options: [
        "Reducir la potencia al mínimo necesario para mantener el vuelo seguro, vigilar la temperatura de aceite y anticipar un posible fallo mecánico inminente de motor preparándose para un aterrizaje forzoso.",
        "Mantener potencia máxima para llegar al destino antes de que se gaste el aceite.",
        "Desconectar la bomba de trasvase del ala derecha.",
        "Conmutar a ECU B y resetear el sistema con el botón de test.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Una caída severa de presión de aceite anticipa pérdida masiva de lubricación y parada de motor inminente por agarrotamiento mecánico. El AFM manda reducir potencia al mínimo indispensable, controlar la temperatura y planificar de inmediato el aterrizaje forzoso con motor parado.",
    },
    {
      id: "da40-5-24",
      question:
        "Si falla la bomba eléctrica de trasvase de combustible y se recurre a la posición de trasvase de emergencia en la válvula selectora (EMERG. TRANSFER), ¿qué advertencia crítica (WARNING) impone el AFM al piloto antes de que el depósito auxiliar (Aux Tank) se quede a cero?",
      options: [
        "Debe regresarse obligatoriamente la válvula de emergencia a posición NORMAL antes de que la indicación del depósito auxiliar llegue a cero; de lo contrario, el motor se detendrá en vuelo al vaciarse el tanque auxiliar.",
        "Mantener la válvula en EMERG. TRANSFER hasta después de haber aterrizado en el hangar.",
        "Cortar el interruptor Electric Master antes de que el nivel baje de 5 galones.",
        "El motor no se ve afectado porque toma del tanque colector de cola.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "En EMERG. TRANSFER la bomba mecánica del motor aspira directamente del tanque auxiliar hacia el principal. El AFM advierte taxativamente (WARNING) que se debe retornar la válvula a NORMAL antes de agotar el Aux Tank, pues al vaciarse el tanque auxiliar el motor succionaría aire provocando la parada inmediata del motor en vuelo.",
    },
  ],
};

export const DA40_LESSON_6_QUIZ: Quiz = {
  id: "quiz-da40-lesson-6",
  course_id: DA40_COURSE_ID,
  lesson_id: "da400000-0000-0000-0000-000000000060",
  title:
    "Examen de Verificación: 6. Documentación Prevuelo, Masa y Centrado, Combustible y Performance",
  description:
    "Evaluación teórica de verificación sobre despacho operativo F.OPS.02, teoría de masa y centrado, loadsheet F.OPS.04, envolvente de CG, planificación de combustible (reserva 1h 30min OM Blue Team), densidades JET A-1 y ábacos de performance de despegue y aterrizaje de la Diamond DA40 TDI.",
  minPassScorePercentage: 75,
  questions: [
    {
      id: "da40-6-1",
      question:
        "¿Cuáles son los 4 pilares operacionales obligatorios que debe cumplimentar y verificar el piloto en el formulario de despacho prevuelo F.OPS.02 antes de cada salida?",
      options: [
        "Masa y centrado (W&B), planificación de combustible (Fuel Planning con reserva OM), performance de despegue y performance de aterrizaje.",
        "Horas de vuelo del piloto, estado de cuenta de la escuela, pronóstico a 5 días y revisión médica anual.",
        "Presión de los tres neumáticos, nivel de aceite de la caja de engranajes, voltaje de batería y cantidad de pasajeros.",
        "Ruta IFR en Eurocontrol, plan de vuelo OACI presentado, slots de salida y verificación de tasas de navegación.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El F.OPS.02 (Hoja de Despacho Operacional de Blue Team) exige comprobar formalmente los cuatro pilares: 1) Masa y centrado (W&B), 2) Planificación de combustible (Fuel Planning incluyendo 1h 30m de reserva según OM), 3) Performance de despegue y 4) Performance de aterrizaje.",
    },
    {
      id: "da40-6-2",
      question:
        "En la Diamond DA40 TDI, ¿dónde se sitúa el Datum (plano de referencia de brazos longitudinales) según el AFM?",
      options: [
        "En un plano vertical imaginario situado a 2,194 m (86,38 in) por delante del punto más adelantado de la costilla de raíz del ala corta (stub wing root rib).",
        "En el borde de ataque del morro del cono de la hélice (propeller spinner tip).",
        "En el cortafuegos delantero del motor Continental CD-155.",
        "Exactamente sobre el centro del tren de aterrizaje principal.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Según la Sección 6 del AFM de la DA40 TDI, el plano de referencia (Datum) se encuentra localizado a 2,194 metros (86,38 pulgadas) por delante del punto más adelantado de la costilla de raíz del ala corta (stub wing root rib).",
    },
    {
      id: "da40-6-3",
      question:
        "De acuerdo con la hoja de carga F.OPS.04 y el AFM de la DA40 TDI, ¿cuáles son los brazos (estaciones) longitudinales correspondientes a los asientos delanteros (pilotos) y a los depósitos de combustible en las alas?",
      options: [
        "Asientos delanteros a 2,300 m y combustible en alas a 2,630 m tras el Datum.",
        "Asientos delanteros a 1,500 m y combustible en alas a 3,100 m tras el Datum.",
        "Asientos delanteros a 2,630 m y combustible en alas a 2,300 m tras el Datum.",
        "Asientos delanteros a 2,400 m y combustible en alas a 2,400 m tras el Datum (brazo neutro).",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La hoja de masa y centrado F.OPS.04 y el AFM establecen que los asientos delanteros tienen una estación de 2,300 m (90,55 in) y los depósitos principales de combustible en las alas se encuentran a 2,630 m (103,54 in) detrás del Datum.",
    },
    {
      id: "da40-6-4",
      question:
        "Puesto que el depósito de combustible se ubica a 2,630 m (por detrás del centro de gravedad medio del avión), ¿cómo evoluciona la posición del CG a medida que se consume combustible durante el vuelo?",
      options: [
        "El centro de gravedad se desplaza progresivamente hacia adelante, por lo que es obligatorio verificar que no rebase el límite delantero al aterrizar.",
        "El centro de gravedad se desplaza hacia atrás, amenazando con exceder el límite trasero de peso.",
        "El centro de gravedad se mantiene perfectamente estático e inmóvil durante todo el vuelo.",
        "El centro de gravedad se desplaza lateralmente hacia el ala izquierda exclusivamente.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Al estar los tanques de combustible a 2,630 m (traseros respecto al rango habitual de CG de 2,40 a 2,59 m), a medida que se quema combustible se resta peso de atrás, provocando que el CG se desplace hacia ADELANTE. Por ello es mandatorio verificar el límite delantero al aterrizaje con poco combustible.",
    },
    {
      id: "da40-6-5",
      question:
        "¿Cómo se define y calcula la Zero Fuel Mass (ZFM) en la hoja de carga F.OPS.04?",
      options: [
        "ZFM = Masa Básica Vacía (BEM) + tripulación delantera + pasajeros traseros + equipajes (sin incluir el combustible utilizable de despegue).",
        "ZFM = Masa Máxima de Despegue menos el peso del piloto al mando.",
        "ZFM = Peso total del avión cargado con combustible de despegue menos el combustible de reserva.",
        "ZFM = Masa del fuselaje sin alas ni tren de aterrizaje.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La Masa Cero Combustible (Zero Fuel Mass - ZFM) es el peso total del avión y su carga útil sin combustible utilizable: ZFM = Masa Vacía (BEM) + Ocupantes (delanteros y traseros) + Equipaje. Sumándole el Take-Off Fuel se obtiene la Take-Off Mass (TOM).",
    },
    {
      id: "da40-6-6",
      question:
        "¿Por qué es obligatorio en el F.OPS.02 calcular y plotear tanto el punto de Despegue (TOM / TOCG) como el punto de Aterrizaje (LM / LCG)?",
      options: [
        "Porque la masa se reduce al consumir el combustible de ruta (Trip Fuel) y el centro de gravedad viaja hacia adelante, debiendo confirmar que aterrizará dentro de la envolvente y sin exceder el MLM ni el límite delantero.",
        "Porque la masa máxima de despegue es menor que la masa máxima de aterrizaje en este modelo de avión.",
        "Porque el combustible aumenta de peso durante el descenso al enfriarse con la altitud.",
        "Únicamente por un requisito estadístico de la autoridad aeronáutica que no influye en la estabilidad del avión.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El consumo del Trip Fuel reduce el peso total y mueve el centro de gravedad hacia la proa (adelante). El piloto debe comprobar que tanto la masa al aterrizar (LM <= MLM de 1150 kg) como el CG al aterrizaje (LCG) permanecen dentro de los límites aprobados de la envolvente.",
    },
    {
      id: "da40-6-7",
      question:
        "En la planificación de navegación en crucero al 70% de carga de motor (LOAD), ¿cuál es el consumo horario medio aproximado del motor Continental CD-155 según el AFM?",
      options: [
        "Aproximadamente 20,4 litros por hora (5,4 US gal/h).",
        "Aproximadamente 38,0 litros por hora (10,0 US gal/h).",
        "Aproximadamente 12,5 litros por hora (3,3 US gal/h).",
        "Aproximadamente 48,0 litros por hora (12,7 US gal/h).",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El motor Continental CD-155 tiene un consumo extremadamente eficiente de JET A-1: al 70% LOAD consume aproximadamente 20,4 L/h (5,4 galones/h). Al 60% LOAD desciende a aprox. 17,2 L/h (4,5 gal/h).",
    },
    {
      id: "da40-6-8",
      question:
        "Si durante el vuelo de navegación se encuentra un fuerte viento de cara (headwind) en altitud de crucero, ¿qué impacto directo tiene sobre la planificación de vuelo y el combustible requerido?",
      options: [
        "Disminuye la velocidad sobre el suelo (GS), aumenta el tiempo estimado en ruta (EET) y aumenta la cantidad necesaria de combustible de etapa (Trip Fuel).",
        "Aumenta la velocidad sobre el suelo (GS) y disminuye el consumo de combustible de crucero.",
        "No modifica la GS ni el tiempo de vuelo, solo cambia la temperatura del aceite motor.",
        "Reduce el combustible de reserva final obligatorio por volar más despacio.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El viento de cara reduce directamente la Ground Speed (GS = TAS - Vviento). A menor GS, mayor tiempo de vuelo (EET = Distancia / GS) y por tanto se quemará más combustible de etapa (Trip Fuel = EET x Consumo). El piloto debe prever esto antes de despegar.",
    },
    {
      id: "da40-6-9",
      question:
        "Con los depósitos de combustible estándar (capacidad utilizable de 106 litros / 28,0 US gal) y manteniendo un crucero económico al 60% LOAD (17,2 L/h), ¿cuál es la autonomía bruta aproximada del avión?",
      options: [
        "Más de 5 horas y media brutas de vuelo (aprox. 6 horas hasta agotamiento total sin reservas).",
        "Apenas 2 horas y 15 minutos de autonomía máxima.",
        "Más de 10 horas y media de vuelo continuado.",
        "Exactamente 3 horas con 30 minutos.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Dividiendo 106 litros utilizables entre un consumo de crucero al 60% de 17,2 L/h se obtienen aproximadamente 6,1 horas brutas de autonomía (más de 5 horas y media holgadamente antes de reservas), demostrando la gran eficiencia del motor diésel CD-155.",
    },
    {
      id: "da40-6-10",
      question:
        "Según el Manual de Operaciones (OM) de Blue Team Flight School, ¿cuál es la reserva final de combustible obligatoria y mínima que debe planificarse y mantenerse inalterable para cualquier vuelo en la DA40 TDI?",
      options: [
        "1 hora y 30 minutos (90 minutos) de reserva final, equivalente a un mínimo de 22,7 litros de JET A-1.",
        "45 minutos de reserva como marca el mínimo reglamentario estándar de OACI/EASA para vuelos VFR diurnos.",
        "30 minutos de reserva diurna o 15 minutos en circuito de tráfico local.",
        "2 horas y 30 minutos de combustible independientemente de la ruta.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La normativa interna de seguridad de Blue Team (Operations Manual) fija una reserva final reforzada de 1 hora y 30 minutos (22,7 L de JET A-1) para todos los vuelos de escuela en la DA40, superando ampliamente el mínimo reglamentario estándar para maximizar la seguridad operacional.",
    },
    {
      id: "da40-6-11",
      question:
        "En la hoja de carga F.OPS.04 y en los cálculos de masa de la DA40 TDI, ¿cuál es el factor de densidad estándar oficial para convertir litros de combustible JET A-1 a kilogramos de masa?",
      options: [
        "0,84 kg/litro (o 0,80 kg/L según tabla del AFM; Blue Team estandariza 0,84 kg/L para JET A-1).",
        "0,72 kg/litro (densidad típica de la gasolina AVGAS 100LL).",
        "1,00 kg/litro (equivalente a la densidad del agua dulce pura).",
        "0,65 kg/litro.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El combustible de aviación JET A-1 tiene una densidad estándar de 0,84 kg por litro (a diferencia de la gasolina AVGAS 100LL que ronda los 0,72 kg/L). Cada litro de JET A-1 pesa 0,84 kg, dato crucial para no subestimar la masa total al despegar.",
    },
    {
      id: "da40-6-12",
      question:
        "De acuerdo con los gráficos y tablas de performance de despegue del AFM de la DA40 TDI, ¿qué factor de incremento de distancia debe aplicarse a la carrera de despegue en tierra (Ground Roll) si la pista es de hierba seca corta (hasta 5 cm de altura)?",
      options: [
        "Se incrementa la carrera de despegue en un 10% (+10%).",
        "Se incrementa la carrera de despegue en un 50% (+50%).",
        "No se aplica ninguna corrección si la hierba no supera los 10 cm.",
        "Se reduce la carrera de despegue en un 15% por amortiguación de las ruedas.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La Sección 5 del AFM indica que operar en pistas de hierba seca corta (hasta 5 cm) incrementa la distancia de carrera en tierra (ground roll) aproximadamente un 10%. Para hierba alta (5 a 10 cm) el incremento sobre el rodaje asciende al 15% o superior.",
    },
    {
      id: "da40-6-13",
      question:
        "Al consultar el ábaco de aterrizaje del AFM de la DA40 TDI, ¿cuál es la penalización estándar en la distancia de aterrizaje cuando se aterriza con componente de viento en cola (tailwind)?",
      options: [
        "La distancia de toma y parada se incrementa en un 10% por cada 2 nudos de viento en cola.",
        "La distancia se incrementa en un 5% por cada 10 nudos de viento en cola.",
        "La distancia disminuye un 10% porque el viento empuja la aeronave contra el suelo.",
        "El viento en cola no penaliza la distancia de aterrizaje si se utiliza flap en posición LAND.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El AFM advierte con gran rigor que el viento en cola es altamente penalizador: la distancia de aterrizaje aumenta un 10% por cada 2 nudos de componente de cola. Un viento de cola de tan solo 6 nudos incrementa la distancia de parada en un 30%.",
    },
    {
      id: "da40-6-14",
      question:
        "En la verificación de despegue del formulario F.OPS.02 frente a las distancias declaradas del aeródromo, ¿qué condición reglamentaria debe cumplirse inexcusablemente?",
      options: [
        "La distancia total requerida de despegue sobre obstáculo de 50 ft calculada en el AFM debe ser estrictamente menor que la longitud disponible (TORA / TODA).",
        "La distancia calculada puede exceder un 10% la pista si la temperatura es menor de 15 °C.",
        "Basta con que la carrera en tierra (Ground Roll) sea inferior a la TORA, sin importar la altura de 50 ft.",
        "Solo se comprueba si la masa del avión supera los 1200 kg.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "Para autorizar el despacho en el F.OPS.02, la distancia de despegue calculada por el AFM (Ground Roll + libramiento de obstáculo de 50 ft, con factores de seguridad correspondientes) debe ser menor o igual a las distancias disponibles de pista (TORA y TODA declaradas en el AIP).",
    },
    {
      id: "da40-6-15",
      question:
        "¿Qué representa la distancia declarada LDA (Landing Distance Available) de un aeródromo y qué cálculo debe contrastarse contra ella en el F.OPS.02?",
      options: [
        "Es la longitud de pista física declarada disponible para la carrera de aterrizaje en tierra; la distancia de aterrizaje calculada desde 50 ft en el AFM debe ser inferior a la LDA.",
        "Es la distancia entre el umbral de pista y el hangar de mantenimiento.",
        "Es el tramo de aproximación final libre de obstáculos por fuera del perímetro del aeropuerto.",
        "Es la velocidad indicada a la que se debe cruzar el umbral dividida por el coeficiente de fricción.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "La LDA (Landing Distance Available) es la longitud de pista disponible y adecuada para el recorrido en tierra de un avión que aterriza. La distancia total de aterrizaje calculada con el AFM (desde 50 ft hasta la parada total) no puede sobrepasar la LDA del aeródromo de destino ni de los alternativos.",
    },
    {
      id: "da40-6-16",
      question:
        "Para dar por cerrado y válido el formulario de despacho operacional F.OPS.02 antes de subir a la aeronave, ¿qué requisito formal de firma es indispensable en la escuela de vuelo?",
      options: [
        "La doble firma obligatoria y presencial del Alumno (PIC bajo supervisión) y del Instructor de Vuelo responsable de la operación.",
        "La firma exclusiva del mecánico jefe de mantenimiento en la oficina técnica.",
        "El sello del director del aeropuerto en la torre de control.",
        "No requiere ninguna firma si el alumno ya aprobó el examen de verificación teórica.",
      ],
      correctAnswerIndex: 0,
      explanation:
        "El despacho operacional F.OPS.02 concluye con el compromiso formal de seguridad mediante la doble firma: el alumno (Piloto al Mando en formación) que calculó y revisó los datos, y el Instructor de Vuelo asignado que valida la corrección de la masa, el combustible y las performances.",
    },
  ],
};

export const DA40_QUIZZES: Quiz[] = [
  DA40_LESSON_1_QUIZ,
  DA40_LESSON_2_QUIZ,
  DA40_LESSON_3_QUIZ,
  DA40_LESSON_4_QUIZ,
  DA40_LESSON_5_QUIZ,
  DA40_LESSON_6_QUIZ,
];
