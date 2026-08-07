// Resilient Mock Store for offline / local dev when Supabase CLI is not running
// NOTE: mockProgressRecords and mockEnrollments are stored on `global` so they
// survive Next.js hot-module-reloads in dev mode. This makes lesson progress
// persist within a single server process session.

import { calculateMinimumReadingSeconds } from "@/features/learning/domain/reading-time";

// Extend Node.js global type for the mock state
declare global {
  var __mockProgressRecords: MockProgress[] | undefined;

  var __mockEnrollments: Set<string> | undefined;
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

// Persist across HMR reloads in dev — global survives hot-module-replacement.
// This ensures lesson progress is not lost when Next.js reloads the module.
const mockProgressRecords: MockProgress[] =
  global.__mockProgressRecords ??
  (global.__mockProgressRecords = defaultProgressRecords);

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
    let existing = mockProgressRecords.find((p) => p.lesson_id === lessonId);
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
    let existing = mockProgressRecords.find((p) => p.lesson_id === lessonId);
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
};
