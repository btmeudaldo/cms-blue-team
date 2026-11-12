import type { Quiz } from "../domain/quiz-types";

export const DA42_COURSE_ID = "da420000-0000-0000-0000-000000000042";

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
        "Según la Sección 5 del AFM de la DA42, ¿qué incrementos reglamentarios deben aplicarse a la carrera de despegue en tierra (Ground Roll) al operar en hierba seca corta (hasta 5 cm) y en hierba alta (5 a 10 cm)?",
      options: [
        "+5% en hierba corta y +10% en hierba alta.",
        "+25% en hierba corta y +50% en hierba alta.",
        "No se aplica incremento si la hierba no supera los 10 cm.",
        "+10% en hierba seca corta y +25% en hierba alta sobre la carrera de despegue en tierra.",
      ],
      correctAnswerIndex: 3,
      explanation:
        "El AFM de la DA42 establece en sus notas de performance de despegue que la carrera en suelo aumenta un 10% en hierba seca corta (hasta 5 cm) y un 25% en hierba alta (5 a 10 cm).",
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

export const DA42_QUIZZES: Quiz[] = [DA42_LESSON_6_QUIZ];
