import { LessonPlayer } from "@/features/learning/components/lesson-player";
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

  // If viewing as staff/admin, ensure enrollment exists so student progress RPC works smoothly
  if (profile?.role === "admin" || profile?.role === "instructor") {
    try {
      const { createSupabaseServerClient } = await import(
        "@/shared/lib/supabase/server"
      );
      const client = await createSupabaseServerClient();
      await client
        .from("course_enrollments")
        .upsert(
          { user_id: user.id, course_id: course.id },
          { onConflict: "user_id,course_id", ignoreDuplicates: true },
        );
    } catch {}
  }

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

  const userQuizAttempts = (quizAttempts || []).filter(
    (a: any) => a.quiz_id === quiz?.id,
  );
  const passedAttempt = userQuizAttempts.find((a: any) => a.passed);
  const latestAttempt =
    userQuizAttempts.length > 0
      ? userQuizAttempts[userQuizAttempts.length - 1]
      : null;
  const quizAttempt = passedAttempt || latestAttempt;

  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  const progressMap = new Map(
    userProgress?.map((p: any) => [p.lesson_id, p]) || [],
  );

  const isAlreadyCompleted =
    (progressMap.get(currentLesson.id) as any)?.is_completed ?? false;

  const lessonsSummary = lessons.map((l: any) => ({
    id: l.id,
    title: l.title,
    sequence_order: l.sequence_order,
    slug: l.slug,
  }));

  const courseLessonIds = new Set(lessons.map((lesson: any) => lesson.id));
  const completedLessonIds: string[] = (userProgress || [])
    .filter((p: any) => p?.is_completed && courseLessonIds.has(p.lesson_id))
    .map((p: any) => String(p.lesson_id));

  return (
    <LessonPlayer
      key={currentLesson.id}
      contentHtml={currentLesson.content_html}
      lessonId={currentLesson.id}
      courseId={course.slug || course.id}
      courseTitle={course.title}
      lessonTitle={currentLesson.title}
      minSeconds={currentLesson.min_seconds}
      pathToRevalidate={`/courses/${course.slug || course.id}`}
      nextLessonId={nextLesson?.slug || nextLesson?.id}
      prevLessonId={prevLesson?.slug || prevLesson?.id}
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
