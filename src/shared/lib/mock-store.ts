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
    id: "11111111-1111-1111-1111-111111111101",
    title: "Fundamentos de Pilotaje Privado & Aerodinámica (PPL)",
    slug: "fundamentos-pilotaje-privado-ppl",
    description:
      "Aprende las bases teóricas de la sustentación alar, mecánica de vuelo, instrumentos de cabina y navegación VFR.",
    image_url:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    created_at: new Date().toISOString(),
    lessons: [
      {
        id: "11111111-1111-1111-1111-000000000001",
        course_id: "11111111-1111-1111-1111-111111111101",
        title: "1. Principios de Aerodinámica y Sustentación",
        slug: "principios-aerodinamica-sustentacion",
        content_html: content1,
        sequence_order: 1,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "11111111-1111-1111-1111-000000000002",
        course_id: "11111111-1111-1111-1111-111111111101",
        title: "2. Instrumentos de Cabina y Sistemas Altimétricos",
        slug: "instrumentos-cabina-altimetria",
        content_html: content2,
        sequence_order: 2,
        word_count: words2,
        min_seconds: calculateMinimumReadingSeconds(words2),
      },
      {
        id: "11111111-1111-1111-1111-000000000003",
        course_id: "11111111-1111-1111-1111-111111111101",
        title: "3. Maniobras VFR, Virajes de Escarpado y Pérdidas",
        slug: "maniobras-vfr-virajes-perdidas",
        content_html: content1,
        sequence_order: 3,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "11111111-1111-1111-1111-000000000004",
        course_id: "11111111-1111-1111-1111-111111111101",
        title: "4. Patrones de Tráfico en Aeródromo y Comunicaciones",
        slug: "patrones-trafico-comunicaciones",
        content_html: content2,
        sequence_order: 4,
        word_count: words2,
        min_seconds: calculateMinimumReadingSeconds(words2),
      },
    ],
  },
  {
    id: "22222222-2222-2222-2222-222222222202",
    title: "Procedimientos de Seguridad & Meteorología Aeronáutica",
    slug: "seguridad-meteorologia-aeronaval",
    description:
      "Gestión de situaciones críticas de vuelo, lectura de informes METAR/TAF y coordinación de tripulación en cabina (CRM).",
    image_url:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
    created_at: new Date().toISOString(),
    lessons: [
      {
        id: "22222222-2222-2222-2222-000000000001",
        course_id: "22222222-2222-2222-2222-222222222202",
        title: "1. Interpretación de Informes Meteorológicos METAR y TAF",
        slug: "interpretacion-metar-taf",
        content_html: content3,
        sequence_order: 1,
        word_count: words3,
        min_seconds: calculateMinimumReadingSeconds(words3),
      },
      {
        id: "22222222-2222-2222-2222-000000000002",
        course_id: "22222222-2222-2222-2222-222222222202",
        title: "2. Gestión de Recursos en Cabina (CRM) y Factor Humano",
        slug: "gestion-recursos-cabina-crm",
        content_html: content1,
        sequence_order: 2,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "22222222-2222-2222-2222-000000000003",
        course_id: "22222222-2222-2222-2222-222222222202",
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
    id: "33333333-3333-3333-3333-333333333303",
    title: "Navegación Instrumental IFR & Radioayudas (VOR/ILS)",
    slug: "navegacion-instrumental-ifr-radioayudas",
    description:
      "Procedimientos IFR de precisión y no precisión, interpretación de cartas de aproximación Jeppesen, VOR, DME e ILS Cat I/II.",
    image_url:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
    created_at: new Date().toISOString(),
    lessons: [
      {
        id: "33333333-3333-3333-3333-000000000001",
        course_id: "33333333-3333-3333-3333-333333333303",
        title: "1. Principios de Aproximación por Instrumentos ILS Cat I/II",
        slug: "principios-aproximacion-ils",
        content_html: content2,
        sequence_order: 1,
        word_count: words2,
        min_seconds: calculateMinimumReadingSeconds(words2),
      },
      {
        id: "33333333-3333-3333-3333-000000000002",
        course_id: "33333333-3333-3333-3333-333333333303",
        title: "2. Radioayudas VOR, DME y Arcos de Radiales",
        slug: "radioayudas-vor-dme-arcos",
        content_html: content1,
        sequence_order: 2,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "33333333-3333-3333-3333-000000000003",
        course_id: "33333333-3333-3333-3333-333333333303",
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
    id: "44444444-4444-4444-4444-444444444404",
    title: "Sistemas de Aeronaves C172/PA28 & Grupo Motopropulsor",
    slug: "sistemas-aeronaves-c172-pa28",
    description:
      "Estudio de motores de pistón alternativos, sistemas de combustible, electricidad de abordo, paso variable y emergencias del sistema.",
    image_url:
      "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?auto=format&fit=crop&w=800&q=80",
    created_at: new Date().toISOString(),
    lessons: [
      {
        id: "44444444-4444-4444-4444-000000000001",
        course_id: "44444444-4444-4444-4444-444444444404",
        title: "1. Componentes del Motor Lycoming O-360 y Combustible",
        slug: "componentes-motor-lycoming",
        content_html: content1,
        sequence_order: 1,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "44444444-4444-4444-4444-000000000002",
        course_id: "44444444-4444-4444-4444-444444444404",
        title: "2. Sistema Eléctrico de Abordo y Alternadores",
        slug: "sistema-electrico-abordo-alternadores",
        content_html: content2,
        sequence_order: 2,
        word_count: words2,
        min_seconds: calculateMinimumReadingSeconds(words2),
      },
      {
        id: "44444444-4444-4444-4444-000000000003",
        course_id: "44444444-4444-4444-4444-444444444404",
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
    id: "55555555-5555-5555-5555-555555555505",
    title: "Ciberseguridad en Sistemas Aviónicos & Redes de Cabina (Blue Team)",
    slug: "ciberseguridad-avonica-redes-cabina",
    description:
      "Protección de buses de datos ARINC 429, sistemas de gestión de vuelo (FMS), ADS-B y prevención de interferencias GPS/Spoofing.",
    image_url:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    created_at: new Date().toISOString(),
    lessons: [
      {
        id: "55555555-5555-5555-5555-000000000001",
        course_id: "55555555-5555-5555-5555-555555555505",
        title: "1. Fundamentos de Ciberseguridad en Buses ARINC 429",
        slug: "fundamentos-ciberseguridad-arinc429",
        content_html: content1,
        sequence_order: 1,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      },
      {
        id: "55555555-5555-5555-5555-000000000002",
        course_id: "55555555-5555-5555-5555-555555555505",
        title: "2. Protección de Sistemas FMS y Protocolos ADS-B",
        slug: "proteccion-sistemas-fms-ads-b",
        content_html: content2,
        sequence_order: 2,
        word_count: words2,
        min_seconds: calculateMinimumReadingSeconds(words2),
      },
      {
        id: "55555555-5555-5555-5555-000000000003",
        course_id: "55555555-5555-5555-5555-555555555505",
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
  "student@blueteam.com_11111111-1111-1111-1111-111111111101",
  "student@blueteam.com_22222222-2222-2222-2222-222222222202",
  "instructor@blueteam.com_11111111-1111-1111-1111-111111111101",
  "instructor@blueteam.com_22222222-2222-2222-2222-222222222202",
  "admin@blueteam.com_11111111-1111-1111-1111-111111111101",
  "admin@blueteam.com_22222222-2222-2222-2222-222222222202",
  "alumno1@blueteam.com_11111111-1111-1111-1111-111111111101",
  "alumno1@blueteam.com_22222222-2222-2222-2222-222222222202",
  "alumno2@blueteam.com_11111111-1111-1111-1111-111111111101",
  "alumno2@blueteam.com_22222222-2222-2222-2222-222222222202",
]);

// Persist across HMR reloads in dev — global survives hot-module-replacement
const mockEnrollments: Set<string> =
  global.__mockEnrollments = defaultEnrollments;

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
    course_id: "11111111-1111-1111-1111-111111111101",
    lesson_id: "11111111-1111-1111-1111-000000000001",
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
    course_id: "11111111-1111-1111-1111-111111111101",
    lesson_id: "11111111-1111-1111-1111-000000000002",
    lesson_slug: "instrumentos-cabina-altimetria",
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
    id: "quiz-maniobras-vfr",
    course_id: "11111111-1111-1111-1111-111111111101",
    lesson_id: "11111111-1111-1111-1111-000000000003",
    lesson_slug: "maniobras-vfr-virajes-perdidas",
    title: "Examen de Verificación: Maniobras VFR y Virajes de Escarpado",
    description:
      "Evaluación sobre virajes ladeados de 45° a 60°, factor de carga y recuperación de pérdidas.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q3-1",
        question:
          "¿Qué sucede con el factor de carga (G) sobre la estructura del avión durante un viraje escarpado nivelado de 60° de inclinación?",
        options: [
          "Permanece en 1.0 G",
          "Se duplica alcanzando 2.0 G",
          "Disminuye a 0.5 G",
          "Se triplica alcanzando 3.0 G",
        ],
        correctAnswerIndex: 1,
        explanation:
          "En un viraje nivelado de 60° de alabeo, la fuerza centrífuga eleva el factor de carga resultante a exactamente 2.0 G.",
      },
      {
        id: "q3-2",
        question:
          "¿Cuál es el primer paso prioritario para recuperar una aeronave de una situación de pérdida aerodinámica (Stall)?",
        options: [
          "Reducir el ángulo de ataque disminuyendo la presión hacia atrás sobre la palanca de mandos",
          "Desplegar los flaps al máximo inmediatamente",
          "Poner el motor al ralentí",
          "Girar el timón de dirección abruptamente",
        ],
        correctAnswerIndex: 0,
        explanation:
          "La prioridad absoluta ante una pérdida es bajar el morro para reducir el ángulo de ataque por debajo del valor crítico y restablecer el flujo laminar sobre el ala.",
      },
    ],
  },
  {
    id: "quiz-patrones-trafico",
    course_id: "11111111-1111-1111-1111-111111111101",
    lesson_id: "11111111-1111-1111-1111-000000000004",
    lesson_slug: "patrones-trafico-comunicaciones",
    title: "Examen de Verificación: Patrón de Tráfico y Comunicaciones VFR",
    description:
      "Evaluación teórica sobre circuito de aeródromo, tramos de viento en cola, base y final.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q4-1",
        question:
          "¿Cuál es la altitud estándar de circuito de tránsito de aeródromo para aeronaves de aviación general sobre el terreno (AGL)?",
        options: ["1.000 pies AGL", "500 pies AGL", "3.000 pies AGL", "2.500 pies AGL"],
        correctAnswerIndex: 0,
        explanation:
          "La altitud estándar recomendada en aviación general para el circuito de aeródromo VFR es 1.000 pies sobre el nivel del terreno (AGL).",
      },
      {
        id: "q4-2",
        question:
          "¿En qué tramo del patrón de tráfico el avión vuela paralelo a la pista en sentido opuesto al aterrizaje?",
        options: [
          "Tramo Viento en Cola (Downwind)",
          "Tramo Base",
          "Tramo Final",
          "Tramo Viento Cruzado (Crosswind)",
        ],
        correctAnswerIndex: 0,
        explanation:
          "El tramo Viento en Cola (Downwind) se vuela de forma paralela a la pista activa en el sentido del viento predominante.",
      },
    ],
  },
  {
    id: "quiz-metar-taf",
    course_id: "22222222-2222-2222-2222-222222222202",
    lesson_id: "22222222-2222-2222-2222-000000000001",
    lesson_slug: "interpretacion-metar-taf",
    title: "Examen de Verificación: Interpretación de METAR y TAF",
    description:
      "Evaluación teórica sobre decodificación de reportes METAR y pronósticos de terminal TAF.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q5-1",
        question:
          "En la codificación METAR europea, ¿qué representa la clave '24015KT'?",
        options: [
          "Viento procedente de 240° a 15 nudos",
          "Temperatura de 24°C con visibilidad de 15 km",
          "Presión de 1024 hPa a 15 nudos",
          "Visibilidad de 2400 metros a 15 nudos",
        ],
        correctAnswerIndex: 0,
        explanation:
          "Los 3 primeros dígitos (240) representan la dirección en grados y los siguientes (15KT) la velocidad del viento en nudos.",
      },
      {
        id: "q5-2",
        question:
          "¿Qué visibilidad horizontal representa la clave METAR '9999'?",
        options: [
          "Visibilidad excelente de 10 kilómetros o superior",
          "Visibilidad reducida a 999 metros",
          "Niebla densa en rampa",
          "Techo de nubes a 9.999 pies",
        ],
        correctAnswerIndex: 0,
        explanation:
          "9999 indica visibilidad despejada igual o superior a 10 km.",
      },
    ],
  },
  {
    id: "quiz-crm-factor-humano",
    course_id: "22222222-2222-2222-2222-222222222202",
    lesson_id: "22222222-2222-2222-2222-000000000002",
    lesson_slug: "gestion-recursos-cabina-crm",
    title: "Examen de Verificación: Gestión de Recursos en Cabina (CRM)",
    description:
      "Evaluación sobre liderazgo en vuelo, conciencia situacional y trabajo en equipo.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q6-1",
        question:
          "¿Cuál es el objetivo principal del Crew Resource Management (CRM) en aviación?",
        options: [
          "Optimizar el uso de todos los recursos disponibles (humanos, equipo e información) para mitigar el error operativo",
          "Aumentar la velocidad de crucero del avión",
          "Reducir el consumo de combustible en rampa",
          "Eliminar el uso de listas de chequeo",
        ],
        correctAnswerIndex: 0,
        explanation:
          "El CRM busca maximizar la seguridad operativa mediante la comunicación fluida, toma de decisiones y prevención del error humano.",
      },
    ],
  },
  {
    id: "quiz-emergencia-windshear",
    course_id: "22222222-2222-2222-2222-222222222202",
    lesson_id: "22222222-2222-2222-2222-000000000003",
    lesson_slug: "procedimientos-emergencia-cizalladura",
    title: "Examen de Verificación: Procedimientos de Emergencia y Windshear",
    description:
      "Evaluación sobre maniobras de escape ante cizalladura de viento y fallas críticas.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q7-1",
        question:
          "Ante la advertencia de cizalladura de viento (Windshear) en despegue o aproximación, ¿cuál es la maniobra de escape obligatoria?",
        options: [
          "Aplicar máxima potencia disponible inmediatamente y mantener cabeceo de ascenso alto sin cambiar configuración",
          "Reducir motores al ralentí y picar el avión",
          "Girar 90° a la izquierda sin aplicar potencia",
          "Desplegar el tren de aterrizaje",
        ],
        correctAnswerIndex: 0,
        explanation:
          "La maniobra de escape exige potencia máxima y elevación del morro hasta el límite de pérdida para salir de la microrráfaga.",
      },
    ],
  },
  {
    id: "quiz-ils-cat",
    course_id: "33333333-3333-3333-3333-333333333303",
    lesson_id: "33333333-3333-3333-3333-000000000001",
    lesson_slug: "principios-aproximacion-ils",
    title: "Examen de Verificación: Aproximación por Instrumentos ILS Cat I/II",
    description:
      "Evaluación teórica sobre Localizador, Senda de Planeo (Glide Path) y mínimos de decisión DH.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q8-1",
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
          "El Localizador (LOC) emite señales que guían la alineación lateral con el eje de pista.",
      },
      {
        id: "q8-2",
        question:
          "¿Qué ángulo estándar de descenso proporciona la Senda de Planeo (Glide Path) en un ILS Cat I?",
        options: ["3,0 grados", "10,0 grados", "1,5 grados", "5,0 grados"],
        correctAnswerIndex: 0,
        explanation:
          "El ángulo estándar de senda de planeo óptimo en procedimientos de precisión ILS es de 3,0°.",
      },
    ],
  },
  {
    id: "quiz-radioayudas-vor",
    course_id: "33333333-3333-3333-3333-333333333303",
    lesson_id: "33333333-3333-3333-3333-000000000002",
    lesson_slug: "radioayudas-vor-dme-arcos",
    title: "Examen de Verificación: Radioayudas VOR, DME y Arcos de Radiales",
    description:
      "Evaluación sobre navegación omnidireccional VHF, medición DME y arcos de radiales.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q9-1",
        question:
          "¿Qué mide el equipo medidor de distancia DME instalado a bordo de la aeronave?",
        options: [
          "La distancia inclinada (Slant Range) en millas náuticas hacia la estación en tierra",
          "La altitud barométrica sobre el mar",
          "La velocidad indicada de impacto de aire",
          "El ángulo de alabeo de las alas",
        ],
        correctAnswerIndex: 0,
        explanation:
          "El equipo DME mide la distancia inclinada directa en millas náuticas (NM) entre la aeronave y el transmisor en tierra.",
      },
    ],
  },
  {
    id: "quiz-cartas-jeppesen",
    course_id: "33333333-3333-3333-3333-333333333303",
    lesson_id: "33333333-3333-3333-3333-000000000003",
    lesson_slug: "interpretacion-cartas-jeppesen",
    title: "Examen de Verificación: Interpretación de Cartas Jeppesen",
    description:
      "Evaluación sobre fichas SID, STAR y perfiles de altitud mínima de sector (MSA).",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q10-1",
        question:
          "En las cartas Jeppesen de aproximación IFR, ¿qué representa la Altitud Mínima de Sector (MSA)?",
        options: [
          "Altitud que garantiza un franqueamiento de obstáculos mínimo de 1.000 pies dentro de un radio de 25 NM de la radioayuda",
          "Altitud máxima de despegue",
          "Altitud de crucero económica",
          "Velocidad de decisión de frenado",
        ],
        correctAnswerIndex: 0,
        explanation:
          "La MSA asegura un margen de seguridad de 1.000 pies sobre cualquier terreno en un radio de 25 millas náuticas.",
      },
    ],
  },
  {
    id: "quiz-motor-lycoming",
    course_id: "44444444-4444-4444-4444-444444444404",
    lesson_id: "44444444-4444-4444-4444-000000000001",
    lesson_slug: "componentes-motor-lycoming",
    title: "Examen de Verificación: Motor Lycoming O-360 y Sistemas",
    description:
      "Evaluación sobre arquitectura de motor aeronáutico de 4 cilindros y encendido doble por magnetos.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q11-1",
        question:
          "¿Por qué los motores de aviación de pistón cuentan con un sistema de encendido doble con dos magnetos independientes?",
        options: [
          "Por redundancia de seguridad en vuelo y mejora en la eficiencia de combustión",
          "Para gastar más combustible",
          "Porque una magneto se apaga automáticamente al despegar",
          "Para alimentar las luces de navegación",
        ],
        correctAnswerIndex: 0,
        explanation:
          "Las magnetos dobles garantizan que si una falla, el motor continúa funcionando de forma segura con la segunda unidad.",
      },
    ],
  },
  {
    id: "quiz-sistema-electrico",
    course_id: "44444444-4444-4444-4444-444444444404",
    lesson_id: "44444444-4444-4444-4444-000000000002",
    lesson_slug: "sistema-electrico-abordo-alternadores",
    title: "Examen de Verificación: Sistema Eléctrico de Abordo",
    description:
      "Evaluación sobre alternadores de aviación, disyuntores térmicos (Circuit Breakers) y batería principal.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q12-1",
        question:
          "En caso de falla total del alternador principal en vuelo IFR nocturno, ¿cuál es la acción prioritaria recomendada?",
        options: [
          "Desconectar las cargas eléctricas no esenciales (Essential Bus Only) para preservar la batería de a bordo",
          "Aumentar las RPM del motor al máximo",
          "Apagar las magnetos de encendido",
          "Reiniciar el transpondedor continuamente",
        ],
        correctAnswerIndex: 0,
        explanation:
          "Se deben apagar los equipos secundarios para extender la autonomía de la batería a los instrumentos esenciales de vuelo.",
      },
    ],
  },
  {
    id: "quiz-paso-variable",
    course_id: "44444444-4444-4444-4444-444444444404",
    lesson_id: "44444444-4444-4444-4444-000000000003",
    lesson_slug: "helices-paso-variable-rendimiento",
    title: "Examen de Verificación: Hélices de Paso Variable",
    description:
      "Evaluación sobre gobernador hidráulico de hélice, presión de admisión (Manifold Pressure) y RPM.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q13-1",
        question:
          "¿Qué ventaja proporciona una hélice de velocidad constante y paso variable frente a una de paso fijo?",
        options: [
          "Permite mantener las RPM óptimas del motor tanto en ascenso de alta potencia como en crucero de alta velocidad",
          "Reduce el peso total del motor en un 50%",
          "Elimina la necesidad de utilizar combustible de aviación",
          "Evita las pérdidas aerodinámicas del ala",
        ],
        correctAnswerIndex: 0,
        explanation:
          "El gobernador ajusta el ángulo de las palas para mantener la hélice en su régimen de eficiencia máxima en todas las fases de vuelo.",
      },
    ],
  },
  {
    id: "quiz-arinc429",
    course_id: "55555555-5555-5555-5555-555555555505",
    lesson_id: "55555555-5555-5555-5555-000000000001",
    lesson_slug: "fundamentos-ciberseguridad-arinc429",
    title: "Examen de Verificación: Ciberseguridad en Buses ARINC 429",
    description:
      "Evaluación sobre topología de buses de datos de aviónica, trazabilidad de etiquetas y protección Blue Team.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q14-1",
        question:
          "¿Cuál es la característica principal de transmisión física del bus de datos serie de aviación ARINC 429?",
        options: [
          "Transmisión unidireccional por par trenzado apantallado con un único emisor por bus",
          "Conexión Wi-Fi bidireccional no encriptada",
          "Bus paralelo de 64 bits",
          "Transmisión de fibra óptica monomodo sin etiquetas",
        ],
        correctAnswerIndex: 0,
        explanation:
          "ARINC 429 es un estándar serie unidireccional de un solo transmisor (Simplex) que evita colisiones en la red de aviónica.",
      },
    ],
  },
  {
    id: "quiz-fms-adsb",
    course_id: "55555555-5555-5555-5555-555555555505",
    lesson_id: "55555555-5555-5555-5555-000000000002",
    lesson_slug: "proteccion-sistemas-fms-ads-b",
    title: "Examen de Verificación: Protección de FMS y Protocolos ADS-B",
    description:
      "Evaluación sobre validación de bases de datos NavData y mitigación de ADS-B Spoofing.",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q15-1",
        question:
          "¿Qué riesgo de ciberseguridad representa la falta de cifrado o autenticación en las emisiones de ADS-B Out?",
        options: [
          "Vulnerabilidad a ataques de suplantación de señal (ADS-B Spoofing) creando aeronaves fantasma en las pantallas TCAS",
          "Aumento involuntario de la velocidad de vuelo",
          "Apagado repentino del motor principal",
          "Bloqueo hidráulico de los flaps",
        ],
        correctAnswerIndex: 0,
        explanation:
          "Sin autenticación, un atacante puede emitir tramas ADS-B falsas para proyectar tráfico inexistente en los sistemas de vigilancia de a bordo.",
      },
    ],
  },
  {
    id: "quiz-gps-jamming",
    course_id: "55555555-5555-5555-5555-555555555505",
    lesson_id: "55555555-5555-5555-5555-000000000003",
    lesson_slug: "prevencion-interferencia-gps-jamming",
    title: "Examen de Verificación: Prevención de Interferencia GPS y Jamming",
    description:
      "Evaluación sobre interferencias de radiofrecuencia GNSS, receptores RAIM y conmutación inercial (IRS).",
    minPassScorePercentage: 70,
    questions: [
      {
        id: "q16-1",
        question:
          "¿Qué tecnología de a bordo permite a la aeronave continuar con una navegación de alta precisión cuando las señales GPS sufren inhibición (Jamming)?",
        options: [
          "Sistemas de Referencia Inercial (IRS / INS) acoplados con filtrado Kalman",
          "Radio comercial AM/FM",
          "Brújula de pie de rampa",
          "BOCINA de alerta audible exterior",
        ],
        correctAnswerIndex: 0,
        explanation:
          "Los giróscopos láser y acelerómetros de las plataformas inerciales (IRS) mantienen la posición sin depender de señales de satélite externas.",
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
  deleteLesson(lessonId: string) {
    for (const course of mockCourses) {
      const idx = course.lessons.findIndex(
        (l) => l.id === lessonId || l.slug === lessonId,
      );
      if (idx !== -1) {
        course.lessons.splice(idx, 1);
        return true;
      }
    }
    return false;
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
      (a) =>
        a.user_id === userId ||
        a.user_id === "student@blueteam.com" ||
        (userId.includes("student") && a.user_id?.includes("student")),
    );
  },
  getLatestQuizAttempt(userId: string, quizId: string) {
    const attempts = this.getQuizAttempts(userId).filter(
      (a) => a.quiz_id === quizId || a.lesson_id === quizId,
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
    const quiz =
      this.getQuizById(quizId) || this.getQuizByLessonId(quizId);
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

    // Remove older attempts for this user and quiz
    const existingIdx = mockQuizAttempts.findIndex(
      (a) =>
        (a.user_id === userId || a.user_id === "student@blueteam.com") &&
        (a.quiz_id === quiz.id || a.quiz_id === quizId),
    );
    if (existingIdx !== -1) {
      mockQuizAttempts.splice(existingIdx, 1);
    }

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
