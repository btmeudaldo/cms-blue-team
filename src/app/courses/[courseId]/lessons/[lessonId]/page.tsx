import { LessonPlayer } from "@/features/learning/components/lesson-player";
import { calculateMinimumReadingSeconds } from "@/features/learning/domain/reading-time";
import { resolveLessonByIdentifier } from "@/features/learning/domain/lesson-route";
import { notFound } from "next/navigation";
import {
  getResilientCourseDetail,
  getResilientQuizAttempts,
  getResilientQuizForLesson,
  getResilientUser,
  getResilientUserProgress,
} from "@/shared/lib/supabase/resilient";

export default async function StudentLessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const { courseId, lessonId } = await params;
  const { user, profile, isDemo } = await getResilientUser();

  // Fetch course detail, user progress, quiz for current lesson, and quiz attempts
  const [course, userProgress] = await Promise.all([
    getResilientCourseDetail(courseId, isDemo),
    getResilientUserProgress(user.id, isDemo),
  ]);
  if (!course) notFound();

  const lessons = (course.lessons || []).sort(
    (a: any, b: any) => a.sequence_order - b.sequence_order,
  );

  const currentLesson = resolveLessonByIdentifier<any>(lessons, lessonId);
  if (!currentLesson) notFound();
  const currentIndex = lessons.indexOf(currentLesson);

  const [quiz, quizAttempts] = await Promise.all([
    getResilientQuizForLesson(currentLesson.id),
    getResilientQuizAttempts(user.id),
  ]);

  const quizAttempt = quiz
    ? (quizAttempts || []).find((a: any) => a.quiz_id === quiz.id)
    : null;

  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const progressMap = new Map(
    userProgress?.map((p: any) => [p.lesson_id, p]) || [],
  );

  const isAlreadyCompleted =
    (progressMap.get(currentLesson.id) as any)?.is_completed ?? false;
  const computedMinSeconds =
    currentLesson.min_seconds && currentLesson.min_seconds >= 30
      ? currentLesson.min_seconds
      : calculateMinimumReadingSeconds(currentLesson.word_count || 100);

  const lessonsSummary = lessons.map((l: any) => ({
    id: l.id,
    title: l.title,
    sequence_order: l.sequence_order,
    slug: l.slug,
  }));

  const completedLessonIds = Array.from(progressMap.entries())
    .filter(([_, p]: [string, any]) => p?.is_completed)
    .map(([id]) => id);

  return (
    <LessonPlayer
      contentHtml={currentLesson.content_html}
      lessonId={currentLesson.id}
      courseId={course.id}
      courseTitle={course.title}
      lessonTitle={currentLesson.title}
      minSeconds={computedMinSeconds}
      pathToRevalidate={`/courses/${course.id}`}
      nextLessonId={nextLesson?.id}
      prevLessonId={prevLesson?.id}
      isAlreadyCompleted={isAlreadyCompleted}
      userEmail={user.email}
      userName={profile?.full_name}
      role={profile?.role}
      lessonsSummary={lessonsSummary}
      completedLessonIds={completedLessonIds}
      quiz={quiz}
      quizAttempt={quizAttempt}
    />
  );
}
