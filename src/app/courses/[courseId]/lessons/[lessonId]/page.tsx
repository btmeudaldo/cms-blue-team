import { LessonPlayer } from "@/features/learning/components/lesson-player";
import { calculateMinimumReadingSeconds } from "@/features/learning/domain/reading-time";
import { resolveLessonByIdentifier } from "@/features/learning/domain/lesson-route";
import { notFound } from "next/navigation";
import {
  getResilientCourseDetail,
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

  // Fetch course and lessons list with resilient fallback
  const course = await getResilientCourseDetail(courseId, isDemo);
  if (!course) notFound();

  const lessons = (course.lessons || []).sort(
    (a: any, b: any) => a.sequence_order - b.sequence_order,
  );

  const currentLesson = resolveLessonByIdentifier<any>(lessons, lessonId);
  if (!currentLesson) notFound();
  const currentIndex = lessons.indexOf(currentLesson);

  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  // Check progress
  const userProgress = await getResilientUserProgress(user.id, isDemo);
  const progressMap = new Map(
    userProgress?.map((p: any) => [p.lesson_id, p]) || [],
  );

  const isAlreadyCompleted =
    (progressMap.get(currentLesson.id) as any)?.is_completed ?? false;
  const computedMinSeconds =
    currentLesson.min_seconds && currentLesson.min_seconds >= 30
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
