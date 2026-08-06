// Resilient Mock Store for offline / local dev when Supabase CLI is not running

import { calculateMinimumReadingSeconds } from "@/features/learning/domain/reading-time";

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
    image_url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
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
    image_url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
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
];

const mockEnrollments: Set<string> = new Set([
  "student-123_course-demo-1",
  "student-123_course-demo-2",
  "instructor-123_course-demo-1",
  "instructor-123_course-demo-2",
  "admin-123_course-demo-1",
  "admin-123_course-demo-2",
]);

const nowTime = new Date();
const start1 = new Date(nowTime.getTime() - 1000 * 60 * 30).toISOString();
const end1 = new Date(nowTime.getTime() - 1000 * 60 * 29).toISOString();
const start2 = new Date(nowTime.getTime() - 1000 * 60 * 15).toISOString();
const end2 = new Date(nowTime.getTime() - 1000 * 60 * 14).toISOString();

const mockProgressRecords: MockProgress[] = [
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
];

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
  updateProfileRole(userId: string, newRole: "student" | "instructor" | "admin") {
    const profile = mockProfiles.find((p) => p.id === userId || p.email === userId);
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
  getUserProgress(userId: string) {
    return mockProgressRecords;
  },
  getAllProgress() {
    return mockProgressRecords;
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
      existing.completed_at = now.toISOString();
      existing.is_completed = true;
      existing.elapsed_seconds = Math.max(30, existing.elapsed_seconds || 65);
    }
    return existing;
  },
};
