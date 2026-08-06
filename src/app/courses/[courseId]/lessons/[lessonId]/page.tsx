import { LessonPlayer } from "@/features/learning/components/lesson-player";
import { calculateMinimumReadingSeconds } from "@/features/learning/domain/reading-time";
import { getResilientCourseDetail, getResilientUser, getResilientUserProgress } from "@/shared/lib/supabase/resilient";

export default async function StudentLessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const { courseId, lessonId } = await params;
  const { user, profile } = await getResilientUser();

  // Fetch course and lessons list with resilient fallback
  const course = await getResilientCourseDetail(courseId);

  const lessons = (course.lessons || []).sort(
    (a: any, b: any) => a.sequence_order - b.sequence_order
  );

  let currentIndex = lessons.findIndex((l: any) => l.id === lessonId || l.slug === lessonId);
  if (currentIndex === -1) {
    currentIndex = 0; // Fallback to first lesson if not matched exactly
  }

  const defaultHtml = `
    <h2>Introducción a la Defensa en Profundidad</h2>
    <p>La estrategia de defensa en profundidad consiste en superponer múltiples capas de seguridad para proteger los activos de información críticos de una organización.</p>
    <p>En el enfoque de <strong>Blue Team</strong>, la visibilidad es la herramienta número uno. Sin logs consolidados en un SIEM (Security Information and Event Management), la detección de amenazas se vuelve prácticamente imposible en tiempo real.</p>
    <h3>Pilares de Seguridad</h3>
    <ul>
      <li><strong>Prevención:</strong> Firewalls, EDR, políticas de acceso estricto.</li>
      <li><strong>Detección:</strong> Reglas Sigma, monitoreo de eventos de red y análisis de comportamiento (UEBA).</li>
      <li><strong>Respuesta:</strong> Playbooks automatizados de aislamiento de hosts y contención.</li>
    </ul>
  `;
  const defaultWords = defaultHtml.split(/\s+/).filter(Boolean).length;

  const currentLesson = lessons[currentIndex] || {
    id: lessonId,
    title: "1. Introducción a la Defensa en Profundidad",
    content_html: defaultHtml,
    word_count: defaultWords,
    min_seconds: calculateMinimumReadingSeconds(defaultWords),
  };

  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  // Check progress
  const userProgress = await getResilientUserProgress(user.id);
  const progressMap = new Map(
    userProgress?.map((p: any) => [p.lesson_id, p]) || []
  );

  const isAlreadyCompleted = (progressMap.get(currentLesson.id) as any)?.is_completed ?? false;
  const computedMinSeconds = currentLesson.min_seconds && currentLesson.min_seconds >= 30
    ? currentLesson.min_seconds
    : calculateMinimumReadingSeconds(currentLesson.word_count || 100);

  return (
    <LessonPlayer
      contentHtml={currentLesson.content_html}
      lessonId={currentLesson.id}
      courseId={course.id}
      lessonTitle={currentLesson.title}
      minSeconds={computedMinSeconds}
      pathToRevalidate={`/courses/${course.id}`}
      nextLessonId={nextLesson?.id}
      prevLessonId={prevLesson?.id}
      isAlreadyCompleted={isAlreadyCompleted}
      userEmail={user.email}
      userName={profile?.full_name}
      role={profile?.role}
    />
  );
}
