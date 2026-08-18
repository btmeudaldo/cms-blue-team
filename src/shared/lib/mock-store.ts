// Resilient Mock Store for offline / local dev when Supabase CLI is not running
// NOTE: mockProgressRecords and mockEnrollments are stored on `global` so they
// survive Next.js hot-module-reloads in dev mode. This makes lesson progress
// persist within a single server process session.

import { calculateMinimumReadingSeconds } from "@/features/learning/domain/reading-time";

// Extend Node.js global type for the mock state
declare global {
  var __mockProgressRecords: MockProgress[] | undefined;
  var __mockEnrollments: Set<string> | undefined;
  var __mockQuizAttempts: any[] | undefined;
}

export type MockCourse = {
  id: string;
  title: string;
  slug: string;
  description: string;
  image_url?: string;
  created_at: string;
  lessons: MockLesson[];
};

export type MockLesson = {
  id: string;
  course_id: string;
  title: string;
  slug: string;
  content_html: string;
  sequence_order: number;
  word_count: number;
  min_seconds: number;
};

export type MockProgress = {
  user_id: string;
  lesson_id: string;
  started_at: string;
  completed_at: string | null;
  elapsed_seconds: number;
  is_completed: boolean;
};

export type MockUser = {
  id: string;
  email: string;
  full_name: string;
  role: "student" | "instructor" | "admin";
};

const content1 = `
  <h2>1. Principios de Aerodinámica y Sustentación</h2>
  <p>La aerodinámica es la rama de la mecánica de fluidos que estudia las fuerzas que actúan sobre un cuerpo cuando se mueve a través del aire. Para que una aeronave se mantenga en vuelo, deben equilibrarse cuatro fuerzas fundamentales:</p>
  <div className="my-6 overflow-hidden rounded-2xl border border-sky-500/30 bg-sky-950/30 p-5 shadow-lg">
    <div className="flex items-center gap-2 font-extrabold text-[#1a80ff] mb-2 text-sm">
      <span>✈️ Fuerzas Aerodinámicas en Vuelo</span>
    </div>
    <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80" alt="Avión en vuelo y sustentación aerodinámica" className="w-full h-64 object-cover rounded-xl my-2" />
    <p className="text-xs text-slate-300 mt-2">Equilibrio constante entre Sustentación (Lift), Peso (Weight), Empuje (Thrust) y Resistencia (Drag).</p>
  </div>
  <h3>Las Cuatro Fuerzas del Vuelo</h3>
  <ul>
    <li><strong>Sustentación (Lift):</strong> Fuerza hacia arriba generada por la diferencia de presión sobre el perfil alar (Principio de Bernoulli y Tercera Ley de Newton).</li>
    <li><strong>Empuje (Thrust):</strong> Fuerza hacia adelante producida por el grupo motopropulsor (hélice o turbina).</li>
    <li><strong>Peso (Weight):</strong> Fuerza gravitatoria hacia abajo que actúa sobre la masa de la aeronave.</li>
    <li><strong>Resistencia (Drag):</strong> Fuerza hacia atrás producida por la fricción del aire al desplazarse.</li>
  </ul>
  <p>Durante un vuelo recto y nivelado no acelerado, la Sustentación equivale al Peso y el Empuje equivale a la Resistencia alar.</p>
`;

const content2 = `
  <h2>2. Instrumentos de Cabina y Sistemas Altimétricos</h2>
  <p>El panel básico de instrumentos primarios de vuelo, conocido técnicamente como el <em>"Six-Pack"</em>, proporciona al piloto toda la información de actitud, velocidad y altitud requerida tanto en vuelo VFR como IFR.</p>
  <div className="my-6 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-5 shadow-lg">
    <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80" alt="Cabina de Mando y Panel de Instrumentos" className="w-full h-64 object-cover rounded-xl my-2" />
    <p className="text-xs text-slate-400 mt-2 text-center">Figura 2.1: Panel primario de vuelo y giróscopos de navegación.</p>
  </div>
  <h3>Instrumentos Basados en el Sistema Pitot-Estática</h3>
  <p><strong>Altimétrico (Altimeter):</strong> Mide la presión atmosférica estática ambiental para indicar la altitud sobre el nivel medio del mar (MSL) según el calaje QNH seleccionado.</p>
  <p><strong>Anemómetro (Airspeed Indicator):</strong> Mide la presión dinámica de impacto del tubo Pitot para mostrar la Velocidad Indicar (IAS) en nudos.</p>
  <p><strong>Variómetro (Vertical Speed Indicator - VSI):</strong> Indica la tasa de ascenso o descenso de la aeronave en pies por minuto (fpm).</p>
`;

const content3 = `
  <h2>1. Interpretación de Informes Meteorológicos METAR y TAF</h2>
  <p>La información meteorológica actualizada es esencial para la planificación y seguridad operativa de todo vuelo comercial y privado.</p>
  <div className="my-6 overflow-hidden rounded-2xl border border-[#1a80ff]/30 bg-blue-950/40 p-5 shadow-lg">
    <img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80" alt="Meteorología Aeronáutica" className="w-full h-64 object-cover rounded-xl my-2" />
    <p className="text-xs text-slate-300 mt-2 text-center">Análisis de frentes nubosos, turbulencia y gradiente térmico de vuelo.</p>
  </div>
  <h3>Decodificación de Código METAR</h3>
  <p>Un informe METAR estándar contiene la localización ICAO, hora UTC del reporte, dirección e intensidad del viento en nudos, visibilidad horizontal en metros, fenómenos de tiempo presente y capas nubosas.</p>
  <ol>
    <li><strong>Viento:</strong> 24015KT indica viento del 240 grados a 15 nudos.</li>
    <li><strong>Visibilidad:</strong> 9999 indica visibilidad de 10 kilómetros o superior.</li>
    <li><strong>Nubes:</strong> SCT030 significa nubes dispersas a 3.000 pies AGL.</li>
  </ol>
`;

const words1 = content1.split(/\s+/).filter(Boolean).length;
const words2 = content2.split(/\s+/).filter(Boolean).length;
const words3 = content3.split(/\s+/).filter(Boolean).length;

const mockCourses: MockCourse[] = [
  {
    id: "course-demo-1",
    title: "Fundamentos de Pilotaje Privado & Aerodinámica (PPL)",
    slug: "fundamentos-pilotaje-privado-ppl",
    description:
      "Aprende las bases teóricas de la sustentación alar, mecánica de vuelo, instrumentos de cabina y navegación VFR.",
    image_url:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    created_at: new Date().toISOString(),
    lessons: [
      {
        id: "lesson-1-1",
        course_id: "course-demo-1",
        title: "1. Principios de Aerodinámica y Sustentación",
        slug: "principios-aerodinamica-sustentacion",
        content_html: content1,
        sequence_order: 1,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "lesson-1-2",
        course_id: "course-demo-1",
        title: "2. Instrumentos de Cabina y Sistemas Altimétricos",
        slug: "instrumentos-cabina-altimetria",
        content_html: content2,
        sequence_order: 2,
        word_count: words2,
        min_seconds: calculateMinimumReadingSeconds(words2),
      },
    ],
  },
  {
    id: "course-demo-2",
    title: "Procedimientos de Seguridad & Meteorología Aeronáutica",
    slug: "seguridad-meteorologia-aeronaval",
    description:
      "Gestión de situaciones críticas de vuelo, lectura de informes METAR/TAF y coordinación de tripulación en cabina (CRM).",
    image_url:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    created_at: new Date().toISOString(),
    lessons: [
      {
        id: "lesson-2-1",
        course_id: "course-demo-2",
        title: "1. Interpretación de Informes Meteorológicos METAR y TAF",
        slug: "interpretacion-metar-taf",
        content_html: content3,
        sequence_order: 1,
        word_count: words3,
        min_seconds: calculateMinimumReadingSeconds(words3),
      },
      {
        id: "lesson-2-2",
        course_id: "course-demo-2",
        title: "2. Gestión de Recursos en Cabina (CRM) y Factor Humano",
        slug: "gestion-recursos-cabina-crm",
        content_html: content1,
        sequence_order: 2,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "lesson-2-3",
        course_id: "course-demo-2",
        title: "3. Procedimientos de Emergencia y Cizalladura de Viento",
        slug: "procedimientos-emergencia-cizalladura",
        content_html: content2,
        sequence_order: 3,
        word_count: words2,
        min_seconds: calculateMinimumReadingSeconds(words2),
      },
    ],
  },
  {
    id: "course-demo-3",
    title: "Navegación Instrumental IFR & Radioayudas (VOR/ILS)",
    slug: "navegacion-instrumental-ifr-radioayudas",
    description:
      "Procedimientos IFR de precisión y no precisión, interpretación de cartas de aproximación Jeppesen, VOR, DME e ILS Cat I/II.",
    image_url:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    created_at: new Date().toISOString(),
    lessons: [
      {
        id: "lesson-3-1",
        course_id: "course-demo-3",
        title: "1. Principios de Aproximación por Instrumentos ILS Cat I/II",
        slug: "principios-aproximacion-ils",
        content_html: content2,
        sequence_order: 1,
        word_count: words2,
        min_seconds: calculateMinimumReadingSeconds(words2),
      },
      {
        id: "lesson-3-2",
        course_id: "course-demo-3",
        title: "2. Radioayudas VOR, DME y Arcos de Radiales",
        slug: "radioayudas-vor-dme-arcos",
        content_html: content1,
        sequence_order: 2,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "lesson-3-3",
        course_id: "course-demo-3",
        title: "3. Interpretación de Cartas Instrumentales Jeppesen",
        slug: "interpretacion-cartas-jeppesen",
        content_html: content3,
        sequence_order: 3,
        word_count: words3,
        min_seconds: calculateMinimumReadingSeconds(words3),
      },
    ],
  },
  {
    id: "course-demo-4",
    title: "Sistemas de Aeronaves C172/PA28 & Grupo Motopropulsor",
    slug: "sistemas-aeronaves-c172-pa28",
    description:
      "Estudio de motores de pistón alternativos, sistemas de combustible, electricidad de abordo, paso variable y emergencias del sistema.",
    image_url:
      "https://images.unsplash.com/photo-1519074069444-1ba4e69c1040?auto=format&fit=crop&w=800&q=80",
    created_at: new Date().toISOString(),
    lessons: [
      {
        id: "lesson-4-1",
        course_id: "course-demo-4",
        title: "1. Componentes del Motor Lycoming O-360 y Combustible",
        slug: "componentes-motor-lycoming",
        content_html: content1,
        sequence_order: 1,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "lesson-4-2",
        course_id: "course-demo-4",
        title: "2. Sistema Eléctrico de Abordo y Alternadores",
        slug: "sistema-electrico-abordo-alternadores",
        content_html: content2,
        sequence_order: 2,
        word_count: words2,
        min_seconds: calculateMinimumReadingSeconds(words2),
      },
      {
        id: "lesson-4-3",
        course_id: "course-demo-4",
        title: "3. Hélices de Paso Variable y Rendimiento de Potencia",
        slug: "helices-paso-variable-rendimiento",
        content_html: content3,
        sequence_order: 3,
        word_count: words3,
        min_seconds: calculateMinimumReadingSeconds(words3),
      },
    ],
  },
  {
    id: "course-demo-5",
    title: "Ciberseguridad en Sistemas Aviónicos & Redes de Cabina (Blue Team)",
    slug: "ciberseguridad-avonica-redes-cabina",
    description:
      "Protección de buses de datos ARINC 429, sistemas de gestión de vuelo (FMS), ADS-B y prevención de interferencias GPS/Spoofing.",
    image_url:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    created_at: new Date().toISOString(),
    lessons: [
      {
        id: "lesson-5-1",
        course_id: "course-demo-5",
        title: "1. Fundamentos de Ciberseguridad en Buses ARINC 429",
        slug: "fundamentos-ciberseguridad-arinc429",
        content_html: content1,
        sequence_order: 1,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "lesson-5-2",
        course_id: "course-demo-5",
        title: "2. Protección de Sistemas FMS y Protocolos ADS-B",
        slug: "proteccion-sistemas-fms-ads-b",
        content_html: content2,
        sequence_order: 2,
        word_count: words2,
        min_seconds: calculateMinimumReadingSeconds(words2),
      },
      {
        id: "lesson-5-3",
        course_id: "course-demo-5",
        title: "3. Prevención de Interferencia GPS y Jamming Aeronáutico",
        slug: "prevencion-interferencia-gps-jamming",
        content_html: content3,
        sequence_order: 3,
        word_count: words3,
        min_seconds: calculateMinimumReadingSeconds(words3),
      },
    ],
  },
];

const mockProfiles: MockUser[] = [
  {
    id: "student-123",
    email: "student@blueteam.com",
    full_name: "Piloto Alumno BlueTeam",
    role: "student",
  },
  {
    id: "instructor-123",
    email: "instructor@blueteam.com",
    full_name: "Instructor de Vuelo BlueTeam",
    role: "instructor",
  },
  {
    id: "admin-123",
    email: "admin@blueteam.com",
    full_name: "Director de Escuela BlueTeam",
    role: "admin",
  },
  // 3 Instructores más
  {
    id: "instructor-2",
    email: "inst.martinez@blueteam.com",
    full_name: "Capt. Roberto Martínez (Instructor PPL/CPL)",
    role: "instructor",
  },
  {
    id: "instructor-3",
    email: "inst.alvarez@blueteam.com",
    full_name: "Capt. Laura Álvarez (Instructora IFR/Navegación)",
    role: "instructor",
  },
  {
    id: "instructor-4",
    email: "inst.reyes@blueteam.com",
    full_name: "Capt. Fernando Reyes (Instructor Ciberseguridad & Avionica)",
    role: "instructor",
  },
  // 10 Alumnos de prueba
  {
    id: "student-1",
    email: "alumno1@blueteam.com",
    full_name: "Carlos Mendoza (Alumno PPL)",
    role: "student",
  },
  {
    id: "student-2",
    email: "alumno2@blueteam.com",
    full_name: "Sofía Rodríguez (Alumno CPL)",
    role: "student",
  },
  {
    id: "student-3",
    email: "alumno3@blueteam.com",
    full_name: "Alejandro Gómez (Alumno ATPL)",
    role: "student",
  },
  {
    id: "student-4",
    email: "alumno4@blueteam.com",
    full_name: "Lucía Fernández (Alumno VFR)",
    role: "student",
  },
  {
    id: "student-5",
    email: "alumno5@blueteam.com",
    full_name: "Mateo Navas (Alumno IFR)",
    role: "student",
  },
  {
    id: "student-6",
    email: "alumno6@blueteam.com",
    full_name: "Elena Benítez (Alumno PPL)",
    role: "student",
  },
  {
    id: "student-7",
    email: "alumno7@blueteam.com",
    full_name: "Javier Morales (Alumno CPL)",
    role: "student",
  },
  {
    id: "student-8",
    email: "alumno8@blueteam.com",
    full_name: "Valeria Torres (Alumno ATPL)",
    role: "student",
  },
  {
    id: "student-9",
    email: "alumno9@blueteam.com",
    full_name: "Daniel Castillo (Alumno VFR)",
    role: "student",
  },
  {
    id: "student-10",
    email: "alumno10@blueteam.com",
    full_name: "Paula Gutiérrez (Alumno IFR)",
    role: "student",
  },
];

const defaultEnrollments = new Set<string>([
  "student-123_course-demo-1",
  "student-123_course-demo-2",
  "instructor-123_course-demo-1",
  "instructor-123_course-demo-2",
  "admin-123_course-demo-1",
  "admin-123_course-demo-2",
  "instructor-2_course-demo-1",
  "instructor-3_course-demo-1",
  "instructor-4_course-demo-2",
  "student-1_course-demo-1",
  "student-2_course-demo-1",
  "student-3_course-demo-1",
  "student-4_course-demo-1",
  "student-5_course-demo-2",
  "student-6_course-demo-2",
  "student-7_course-demo-1",
  "student-8_course-demo-2",
  "student-9_course-demo-1",
  "student-10_course-demo-2",
]);

// Persist across HMR reloads in dev — global survives hot-module-replacement
const mockEnrollments: Set<string> =
  global.__mockEnrollments ?? (global.__mockEnrollments = defaultEnrollments);

const nowTime = new Date();
const start1 = new Date(nowTime.getTime() - 1000 * 60 * 120).toISOString();
const end1 = new Date(nowTime.getTime() - 1000 * 60 * 118).toISOString();
const start2 = new Date(nowTime.getTime() - 1000 * 60 * 60).toISOString();
const end2 = new Date(nowTime.getTime() - 1000 * 60 * 58).toISOString();
const start3 = new Date(nowTime.getTime() - 1000 * 60 * 30).toISOString();
const end3 = new Date(nowTime.getTime() - 1000 * 60 * 28).toISOString();

const defaultProgressRecords: MockProgress[] = [
  {
    user_id: "student-123",
    lesson_id: "lesson-1-1",
    started_at: start1,
    completed_at: end1,
    elapsed_seconds: 60,
    is_completed: true,
  },
  {
    user_id: "student-123",
    lesson_id: "lesson-1-2",
    started_at: start2,
    completed_at: end2,
    elapsed_seconds: 65,
    is_completed: true,
  },
  {
    user_id: "student-1",
    lesson_id: "lesson-1-1",
    started_at: start1,
    completed_at: end1,
    elapsed_seconds: 75,
    is_completed: true,
  },
  {
    user_id: "student-2",
    lesson_id: "lesson-1-1",
    started_at: start2,
    completed_at: end2,
    elapsed_seconds: 80,
    is_completed: true,
  },
  {
    user_id: "student-3",
    lesson_id: "lesson-1-2",
    started_at: start3,
    completed_at: end3,
    elapsed_seconds: 45,
    is_completed: true,
  },
  {
    user_id: "student-4",
    lesson_id: "lesson-1-1",
    started_at: start3,
    completed_at: end3,
    elapsed_seconds: 90,
    is_completed: true,
  },
  {
    user_id: "student-5",
    lesson_id: "lesson-2-1",
    started_at: start1,
    completed_at: end1,
    elapsed_seconds: 110,
    is_completed: true,
  },
  {
    user_id: "student-6",
    lesson_id: "lesson-2-1",
    started_at: start2,
    completed_at: end2,
    elapsed_seconds: 95,
    is_completed: true,
  },
  {
    user_id: "student-7",
    lesson_id: "lesson-1-1",
    started_at: start2,
    completed_at: end2,
    elapsed_seconds: 60,
    is_completed: true,
  },
  {
    user_id: "student-8",
    lesson_id: "lesson-2-1",
    started_at: start3,
    completed_at: end3,
    elapsed_seconds: 120,
    is_completed: true,
  },
  {
    user_id: "student-9",
    lesson_id: "lesson-1-1",
    started_at: start1,
    completed_at: end1,
    elapsed_seconds: 50,
    is_completed: true,
  },
  {
    user_id: "student-10",
    lesson_id: "lesson-2-1",
    started_at: start2,
    completed_at: end2,
    elapsed_seconds: 130,
    is_completed: true,
  },
];

const defaultQuizzes = [
  {
    id: "quiz-aerodinamica",
    course_id: "course-1",
    lesson_id: "lesson-1-1",
    lesson_slug: "principios-aerodinamica-sustentacion",
    title: "Examen de Verificación: Aerodinámica y Sustentación",
    description:
      "Evaluación teórica oficial sobre las 4 fuerzas fundamentales de vuelo, teorema de Bernoulli y ángulo de ataque crítico.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q1-1",
        question:
          "¿Qué principio físico explica la generación de la fuerza de sustentación en un perfil alar por la diferencia de velocidades de aire?",
        options: [
          "Principio de Bernoulli",
          "Tercera Ley de Kepler",
          "Efecto Doppler de Frecuencia",
          "Ley de Conservación de Masa de Pascal",
        ],
        correctAnswerIndex: 0,
        explanation:
          "El Principio de Bernoulli establece que al aumentar la velocidad de un fluido sobre la curvatura del extradós, su presión disminuye, generando la fuerza de sustentación hacia arriba.",
      },
      {
        id: "q1-2",
        question:
          "¿Qué sucede cuando el ángulo de ataque de un perfil alar supera el ángulo límite crítico?",
        options: [
          "El avión aumenta la velocidad de ascenso automáticamente",
          "Ocurre una Pérdida Aerodinámica (Stall) con desprendimiento del flujo de aire",
          "La resistencia aerodinámica disminuye a cero",
          "La sustentación se duplica instantáneamente",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Al superar el ángulo de ataque crítico, el flujo de aire se desprende de forma turbulenta del extradós, provocando una caída drástica de sustentación (Stall).",
      },
      {
        id: "q1-3",
        question:
          "¿Cuáles son las 4 fuerzas fundamentales que actúan sobre una aeronave en vuelo recto y nivelado?",
        options: [
          "Compresión, Expansión, Inercia y Fricción",
          "Sustentación, Peso, Empuje y Resistencia",
          "Presión, Temperatura, Altitud y Humedad",
          "Gravedad, Fuerza Centrípeto, Torque y Guiñada",
        ],
        correctAnswerIndex: 1,
        explanation:
          "En vuelo equilibrado no acelerado, la Sustentación equivale al Peso (Lift = Weight) y el Empuje equivale a la Resistencia (Thrust = Drag).",
      },
    ],
  },
  {
    id: "quiz-sixpack",
    course_id: "course-1",
    lesson_id: "lesson-1-2",
    lesson_slug: "instrumentacion-cabina-sixpack",
    title: "Examen de Verificación: Instrumentación Six-Pack y Variómetros",
    description:
      "Evaluación teórica sobre relojería básica de cabina, alimentación Pitot-Estática e instrumentos giroscópicos.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q2-1",
        question:
          "¿Cuáles son los 3 instrumentos primarios alimentados por el sistema de presión Pitot-Estática?",
        options: [
          "Horizonte Artificial, Indicador de Rumbo y Coordinador de Viraje",
          "Anemómetro (ASI), Altímetro y Variómetro (VSI)",
          "Tacómetro, Indicador de Presión de Aceite y Voltímetro",
          "Transpondedor, Radio VOR y Marcador Marker Beacon",
        ],
        correctAnswerIndex: 1,
        explanation:
          "El anemómetro utiliza presión Pitot y estática. El altímetro y el variómetro operan exclusivamente con la presión estática atmosférica.",
      },
      {
        id: "q2-2",
        question:
          "¿Qué instrumento giroscópico proporciona la indicación de la actitud de cabeceo y alabeo del avión respecto al horizonte?",
        options: [
          "Horizonte Artificial (Indicador de Actitud)",
          "Altímetro Barométrico",
          "Variómetro Vertical",
          "Indicador de Rumbo Giroscópico",
        ],
        correctAnswerIndex: 0,
        explanation:
          "El Horizonte Artificial muestra mediante una representación de cielo/tierra los ángulos de alabeo y cabeceo instantáneos de la aeronave.",
      },
      {
        id: "q2-3",
        question:
          "¿Qué lectura indica la aguja del Variómetro (VSI) cuando el avión mantiene un vuelo nivelado constante a 3.000 pies?",
        options: [
          "Marca 3.000 pies por minuto",
          "Marca cero pies por minuto (0 fpm)",
          "Marca 1.013 hPa",
          "Oscila entre 500 y 1.000 fpm",
        ],
        correctAnswerIndex: 1,
        explanation:
          "El Variómetro mide la tasa de variación de presión estática. Si no hay ascenso ni descenso, marca exactamente 0 fpm.",
      },
    ],
  },
  {
    id: "quiz-meteorologia",
    course_id: "course-2",
    lesson_id: "lesson-2-1",
    lesson_slug: "capas-atmosfericas-frentes-vientos",
    title:
      "Examen de Verificación: Capas Atmosféricas, Frentes Térmicos y Vientos",
    description:
      "Evaluación sobre estructura atmosférica, nubes peligrosas de desarrollo vertical y fenómenos frontales.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q3-1",
        question:
          "¿En qué capa atmosférica se desarrolla la mayor parte del vuelo VFR de instrucción y los fenómenos meteorológicos?",
        options: ["Troposfera", "Estratosfera", "Mesosfera", "Termosfera"],
        correctAnswerIndex: 0,
        explanation:
          "La Troposfera comprende desde la superficie hasta aproximadamente 36.000 pies y contiene el 99% del vapor de agua y clima atmosférico.",
      },
      {
        id: "q3-2",
        question:
          "¿Qué tipo de nubes de gran desarrollo vertical representan el mayor riesgo de turbulencia severa, cizalladura (windshear) y granizo?",
        options: [
          "Cirrus (CI)",
          "Cumulonimbus (CB)",
          "Stratus (ST)",
          "Altocumulus (AC)",
        ],
        correctAnswerIndex: 1,
        explanation:
          "Los Cumulonimbus (CB) generan tormentas severas con fuertísimas corrientes ascendentes y descendentes peligrosas para el vuelo.",
      },
    ],
  },
  {
    id: "quiz-metar-taf",
    course_id: "course-2",
    lesson_id: "lesson-2-2",
    lesson_slug: "decodificacion-reportes-metar-taf",
    title:
      "Examen de Verificación: Decodificación de Reportes METAR y Pronósticos TAF",
    description:
      "Evaluación teórica sobre lectura rápida de claves meteorológicas aeronáuticas METAR y TAF.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q4-1",
        question:
          "En el grupo de viento METAR '24012KT', ¿qué representan estos valores?",
        options: [
          "Viento procedente del rumbo 240° geográfico a 12 nudos de intensidad",
          "Temperatura de 24°C e intensidad de 12 nudos",
          "Presión barométrica de 240 hPa a 12 km de visibilidad",
          "Viento del rumbo 120° a 24 nudos",
        ],
        correctAnswerIndex: 0,
        explanation:
          "Los tres primeros dígitos (240) expresan la dirección de donde proviene el viento en grados magnéticos/geográficos y los últimos (12KT) la velocidad en nudos.",
      },
      {
        id: "q4-2",
        question:
          "En la codificación METAR europea, ¿qué visibilidad horizontal representa la cifra '9999'?",
        options: [
          "Visibilidad ilimitada superior a 10 kilómetros",
          "Visibilidad reducida a 999 metros",
          "Niebla densa en pista",
          "Visibilidad de 9.999 pies",
        ],
        correctAnswerIndex: 0,
        explanation:
          "El valor 9999 indica visibilidad excelente igual o mayor a 10.000 metros (10 km).",
      },
    ],
  },
  {
    id: "quiz-prevuelo",
    course_id: "course-3",
    lesson_id: "lesson-3-1",
    lesson_slug: "inspeccion-prevuelo-checklist-rampa",
    title: "Examen de Verificación: Inspección Pre-Vuelo y Checklist de Rampa",
    description:
      "Evaluación sobre la rutina Walk-Around, verificación de mandos de vuelo y purga de combustible.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q5-1",
        question:
          "¿En qué sentido estandarizado se debe realizar la inspección exterior del avión (Walk-Around) en rampa?",
        options: [
          "En el sentido de las agujas del reloj rodeando la aeronave",
          "Únicamente revisando el motor",
          "De atrás hacia adelante por el fuselaje central",
          "Sin un orden definido",
        ],
        correctAnswerIndex: 0,
        explanation:
          "La rutina de inspección prevuelo exige seguir un circuito ordenado en sentido horario comenzando por la cabina y el ala izquierda.",
      },
      {
        id: "q5-2",
        question:
          "¿Por qué es crítico extraer muestras de los drenajes de combustible antes del primer vuelo del día?",
        options: [
          "Para verificar la ausencia de agua decantada en el fondo y partículas contaminantes",
          "Para medir el nivel de octanaje exacto",
          "Para calentar el tanque",
          "Para reducir el peso de despegue",
        ],
        correctAnswerIndex: 0,
        explanation:
          "El agua es más densa que la gasolina de aviación (AVGAS) y se deposita en el fondo de las purgas. Si no se elimina, puede causar parada de motor.",
      },
    ],
  },
  {
    id: "quiz-emergencias",
    course_id: "course-3",
    lesson_id: "lesson-3-2",
    lesson_slug: "gestion-fallas-motor-aterrizajes-emergencia",
    title:
      "Examen de Verificación: Gestión de Fallas de Motor y Aterrizajes forzosos",
    description:
      "Evaluación teórica sobre protocolo ABCD ante falla de motor, velocidades de planeo y llamadas de socorro.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q6-1",
        question:
          "Ante una pérdida repentina de potencia del motor en vuelo de crucero, ¿cuál es la primera acción obligatoria del protocolo ABCD?",
        options: [
          "A (Airspeed): Ajustar la actitud para volar a la velocidad de mejor planeo (Best Glide)",
          "D (Declare): Gritar en la cabina",
          "C (Checklist): Leer el manual completo",
          "B (Best Field): Aterrizar inmediatamente en cualquier sitio sin controlar la velocidad",
        ],
        correctAnswerIndex: 0,
        explanation:
          "Lo primero es volar el avión y establecer la velocidad de mejor planeo (Airspeed) para maximizar la distancia y el tiempo disponible.",
      },
      {
        id: "q6-2",
        question:
          "¿Qué código de transpondedor debe seleccionar el piloto al declarar situación de emergencia grave a bordo?",
        options: ["7700", "7500", "7600", "7000"],
        correctAnswerIndex: 0,
        explanation:
          "7700 activa la alerta de emergencia en las pantallas del control de tráfico aéreo radar.",
      },
    ],
  },
  {
    id: "quiz-ils-vor",
    course_id: "course-4",
    lesson_id: "lesson-4-1",
    lesson_slug: "principios-aproximacion-ils",
    title: "Examen de Verificación: Navegación IFR e Aproximaciones ILS/VOR",
    description:
      "Evaluación teórica sobre guía lateral de Localizador y guía vertical de Senda de Planeo ILS.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q7-1",
        question:
          "En un sistema de aterrizaje por instrumentos (ILS), ¿qué componente proporciona la guía de alineación lateral con el eje central de la pista?",
        options: [
          "Localizador (LOC)",
          "Senda de Planeo (Glide Path / GP)",
          "Marker Beacon Exterior",
          "DME de Distancia",
        ],
        correctAnswerIndex: 0,
        explanation:
          "El Localizador (LOC) emite señales de radio que guían al piloto horizontalmente hacia el eje exacto de la pista de aterrizaje.",
      },
      {
        id: "q7-2",
        question:
          "¿Qué ángulo estándar de descenso vertical sobre el terreno suele proporcionar la Senda de Planeo (Glide Path) en un procedimiento ILS Cat I?",
        options: ["3,0 grados", "10,0 grados", "1,5 grados", "45,0 grados"],
        correctAnswerIndex: 0,
        explanation:
          "El ángulo estándar de senda de planeo óptimo en aviación comercial e instrumental es de 3,0° respecto al plano horizontal de la pista.",
      },
    ],
  },
  {
    id: "quiz-sistemas-motor",
    course_id: "course-5",
    lesson_id: "lesson-5-1",
    lesson_slug: "componentes-motor-lycoming",
    title:
      "Examen de Verificación: Grupo Motopropulsor Lycoming O-360 y Sistemas",
    description:
      "Evaluación teórica sobre arquitectura de motor aeronáutico de 4 cilindros y sistema de encendido doble por magnetos.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q8-1",
        question:
          "¿Por qué los motores de aviación de pistón cuentan con un sistema de encendido doble con dos magnetos independientes?",
        options: [
          "Por redundancia de seguridad en vuelo y mejora en la eficiencia de combustión en la cámara",
          "Para gastar más combustible",
          "Porque una magneto se apaga automáticamente al despegar",
          "Para alimentar las luces de la cabina",
        ],
        correctAnswerIndex: 0,
        explanation:
          "Cada cilindro tiene 2 bujías alimentadas por magnetos separadas. Si una magneto o bujía falla en vuelo, el motor sigue funcionando de forma segura.",
      },
      {
        id: "q8-2",
        question:
          "¿Qué síntoma primario advierte al piloto de la formación de hielo en el carburador en motores de aspiración?",
        options: [
          "Caída gradual de las RPM del motor (o caída de la presión de admisión)",
          "Aumento de la velocidad del avión",
          "Encendido de las luces de navegación",
          "Aumento inmediato de la temperatura del aceite",
        ],
        correctAnswerIndex: 0,
        explanation:
          "El hielo obstruye la garganta del carburador reduciendo el paso de mezcla aire/combustible, manifestándose con una pérdida constante de RPM.",
      },
    ],
  },
];

// Default initial attempt for demo student
const defaultQuizAttempts = [
  {
    id: "attempt-student-1",
    user_id: "student@blueteam.com",
    quiz_id: "quiz-aerodinamica",
    score_percentage: 100,
    correct_count: 3,
    total_questions: 3,
    passed: true,
    completed_at: new Date().toISOString(),
    elapsed_seconds: 45,
  },
];

const mockProgressRecords: MockProgress[] =
  global.__mockProgressRecords ??
  (global.__mockProgressRecords = defaultProgressRecords);

const mockQuizAttempts: any[] =
  global.__mockQuizAttempts ??
  (global.__mockQuizAttempts = defaultQuizAttempts);

export const mockStore = {
  getCourses() {
    return mockCourses;
  },
  getCourseById(courseId: string) {
    return mockCourses.find((c) => c.id === courseId || c.slug === courseId);
  },
  addCourse(course: Omit<MockCourse, "id" | "created_at" | "lessons">) {
    const newCourse: MockCourse = {
      ...course,
      id: `course-${Date.now()}`,
      created_at: new Date().toISOString(),
      lessons: [],
    };
    mockCourses.push(newCourse);
    return newCourse;
  },
  updateCourse(courseId: string, data: Partial<MockCourse>) {
    const course = this.getCourseById(courseId);
    if (course) {
      if (data.title !== undefined) course.title = data.title;
      if (data.slug !== undefined) course.slug = data.slug;
      if (data.description !== undefined) course.description = data.description;
      if (data.image_url !== undefined) course.image_url = data.image_url;
      return course;
    }
    return null;
  },
  deleteCourse(courseId: string) {
    const index = mockCourses.findIndex((c) => c.id === courseId);
    if (index !== -1) mockCourses.splice(index, 1);
  },
  addLesson(courseId: string, lesson: Omit<MockLesson, "id" | "course_id">) {
    const course = this.getCourseById(courseId);
    if (!course) return null;
    const newLesson: MockLesson = {
      ...lesson,
      id: `lesson-${Date.now()}`,
      course_id: course.id,
    };
    course.lessons.push(newLesson);
    return newLesson;
  },
  updateLesson(
    lessonId: string,
    data: {
      title: string;
      slug: string;
      content_html: string;
      sequence_order: number;
      word_count: number;
      min_seconds: number;
    },
  ) {
    for (const course of mockCourses) {
      const lesson = course.lessons.find(
        (l) => l.id === lessonId || l.slug === lessonId,
      );
      if (lesson) {
        lesson.title = data.title;
        lesson.slug = data.slug;
        lesson.content_html = data.content_html;
        lesson.sequence_order = data.sequence_order;
        lesson.word_count = data.word_count;
        lesson.min_seconds = data.min_seconds;
        return lesson;
      }
    }
    return null;
  },
  getProfiles() {
    return mockProfiles;
  },
  addProfile(user: MockUser) {
    const existing = mockProfiles.find((p) => p.email === user.email);
    if (!existing) {
      mockProfiles.push(user);
    }
    return user;
  },
  updateProfileRole(
    userId: string,
    newRole: "student" | "instructor" | "admin",
  ) {
    const profile = mockProfiles.find(
      (p) => p.id === userId || p.email === userId,
    );
    if (profile) {
      profile.role = newRole;
    }
  },
  enroll(userId: string, courseId: string) {
    mockEnrollments.add(`${userId}_${courseId}`);
  },
  unenroll(userId: string, courseId: string) {
    mockEnrollments.delete(`${userId}_${courseId}`);
  },
  isEnrolled(userId: string, courseId: string) {
    return mockEnrollments.has(`${userId}_${courseId}`);
  },
  setStudentEnrollments(userId: string, enrolledCourseIds: string[]) {
    for (const key of Array.from(mockEnrollments)) {
      if (key.startsWith(`${userId}_`)) {
        mockEnrollments.delete(key);
      }
    }
    for (const courseId of enrolledCourseIds) {
      mockEnrollments.add(`${userId}_${courseId}`);
    }
  },
  getUserProgress(userId: string) {
    return mockProgressRecords.filter(
      (p) => p.user_id === userId || userId === "all",
    );
  },
  getProgressByUserId(userId: string) {
    return mockProgressRecords.filter(
      (p) => p.user_id === userId || userId === "all",
    );
  },
  getAllProgress() {
    return mockProgressRecords;
  },
  getEnrollments() {
    const list: { user_id: string; course_id: string }[] = [];
    mockEnrollments.forEach((entry) => {
      const parts = entry.split("_");
      if (parts.length >= 2) {
        list.push({ user_id: parts[0], course_id: parts.slice(1).join("_") });
      }
    });
    return list;
  },
  getStudentCourses(userId: string) {
    const enrolledSet = new Set(
      this.getEnrollments()
        .filter((e) => e.user_id === userId)
        .map((e) => e.course_id),
    );
    return mockCourses.filter(
      (c) => enrolledSet.has(c.id) || enrolledSet.has(c.slug),
    );
  },
  startLesson(userId: string, lessonId: string) {
    let existing = mockProgressRecords.find(
      (p) => p.user_id === userId && p.lesson_id === lessonId,
    );
    if (!existing) {
      existing = {
        user_id: userId,
        lesson_id: lessonId,
        started_at: new Date().toISOString(),
        completed_at: null,
        elapsed_seconds: 0,
        is_completed: false,
      };
      mockProgressRecords.push(existing);
    }
    return existing;
  },
  completeLesson(userId: string, lessonId: string) {
    let existing = mockProgressRecords.find(
      (p) => p.user_id === userId && p.lesson_id === lessonId,
    );
    const now = new Date();
    if (!existing) {
      existing = {
        user_id: userId,
        lesson_id: lessonId,
        started_at: new Date(now.getTime() - 65000).toISOString(),
        completed_at: now.toISOString(),
        elapsed_seconds: 65,
        is_completed: true,
      };
      mockProgressRecords.push(existing);
    } else {
      existing.is_completed = true;
      existing.completed_at = now.toISOString();
      if (!existing.elapsed_seconds || existing.elapsed_seconds < 60) {
        existing.elapsed_seconds = 65;
      }
    }
    return existing;
  },
  heartbeatLesson(userId: string, lessonId: string) {
    let existing = mockProgressRecords.find(
      (p) => p.user_id === userId && p.lesson_id === lessonId,
    );
    if (existing) {
      existing.elapsed_seconds = (existing.elapsed_seconds || 0) + 10;
    }
  },
  getQuizzes() {
    return defaultQuizzes;
  },
  getQuizById(quizId: string) {
    return defaultQuizzes.find(
      (q) =>
        q.id === quizId ||
        q.lesson_id === quizId ||
        (q as any).lesson_slug === quizId,
    );
  },
  getQuizByLessonId(lessonId: string) {
    return defaultQuizzes.find(
      (q) =>
        q.lesson_id === lessonId ||
        q.id === lessonId ||
        (q as any).lesson_slug === lessonId ||
        (Boolean((q as any).lesson_slug) &&
          lessonId.includes((q as any).lesson_slug)),
    );
  },
  getQuizAttempts(userId?: string) {
    if (!userId || userId === "all") return mockQuizAttempts;
    return mockQuizAttempts.filter(
      (a) => a.user_id === userId || a.user_id?.includes("student"),
    );
  },
  getLatestQuizAttempt(userId: string, quizId: string) {
    const attempts = mockQuizAttempts.filter(
      (a) =>
        (a.user_id === userId || a.user_id === "student@blueteam.com") &&
        a.quiz_id === quizId,
    );
    if (attempts.length === 0) return null;
    return attempts[attempts.length - 1];
  },
  submitQuizAttempt(
    userId: string,
    quizId: string,
    answers: Record<string, number>,
    elapsedSeconds: number,
  ) {
    const quiz = this.getQuizById(quizId);
    if (!quiz) return null;

    let correctCount = 0;
    for (const q of quiz.questions) {
      if (answers[q.id] === q.correctAnswerIndex) {
        correctCount++;
      }
    }

    const totalQuestions = quiz.questions.length;
    const scorePercentage =
      totalQuestions > 0
        ? Math.round((correctCount / totalQuestions) * 100)
        : 0;
    const passed = scorePercentage >= (quiz.minPassScorePercentage || 70);

    const attempt = {
      id: `attempt-${Date.now()}`,
      user_id: userId,
      quiz_id: quiz.id,
      lesson_id: quiz.lesson_id,
      lesson_slug: (quiz as any).lesson_slug,
      score_percentage: scorePercentage,
      correct_count: correctCount,
      total_questions: totalQuestions,
      passed,
      completed_at: new Date().toISOString(),
      elapsed_seconds: elapsedSeconds,
    };

    mockQuizAttempts.push(attempt);
    return attempt;
  },
  saveQuiz(courseId: string, lessonId: string, quizData: any) {
    let existing = defaultQuizzes.find(
      (q) =>
        q.lesson_id === lessonId ||
        q.id === quizData.id ||
        q.id === `quiz-${lessonId}`,
    );

    if (existing) {
      existing.title = quizData.title;
      existing.description = quizData.description;
      existing.minPassScorePercentage =
        Number(quizData.minPassScorePercentage) || 70;
      existing.questions = quizData.questions;
      return existing;
    } else {
      const newQuiz = {
        id: quizData.id || `quiz-${lessonId}`,
        course_id: courseId,
        lesson_id: lessonId,
        lesson_slug: quizData.lesson_slug || lessonId,
        title: quizData.title,
        description: quizData.description,
        minPassScorePercentage: Number(quizData.minPassScorePercentage) || 70,
        questions: quizData.questions,
      };
      defaultQuizzes.push(newQuiz);
      return newQuiz;
    }
  },
};
