import Link from "next/link";
import { Header } from "@/shared/components/header";
import { LessonPlayer } from "@/features/learning/components/lesson-player";
import { resolveLessonByIdentifier } from "@/features/learning/domain/lesson-route";
import { notFound } from "next/navigation";
import {
  C172_COURSE_ID,
  C172_COURSE_SLUG,
  C172_DOCUMENTATION,
} from "@/features/learning/content/c172-course-data";
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

  const isSuperAdmin = user?.email === "btmeudaldo@gmail.com";
  const isDraftLesson = currentLesson.sequence_order > 1;

  if (!isSuperAdmin && isDraftLesson) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col">
        <Header
          userEmail={user.email}
          userName={profile?.full_name}
          role={profile?.role}
        />
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center space-y-5 shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 text-3xl">
              🔒
            </div>
            <div className="space-y-2">
              <span className="inline-block rounded-full bg-amber-100 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 px-3 py-1 text-xs font-black uppercase tracking-wider text-amber-700 dark:text-amber-300">
                Módulo en Preparación
              </span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {currentLesson.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Esta lección se encuentra actualmente en fase de revisión pedagógica y técnica por Jefatura de Estudios / Blue Team.
                Estará disponible en la plataforma próximamente.
              </p>
            </div>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/courses/${course.slug || course.id}/lessons/${lessons[0]?.slug || lessons[0]?.id}`}
                className="flex-1 rounded-xl bg-[#1a80ff] px-4 py-2.5 text-xs font-bold text-white hover:bg-[#0066e6] transition-colors"
              >
                Ir a la Lección 1
              </Link>
              <Link
                href={`/courses/${course.slug || course.id}`}
                className="flex-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Volver al Curso
              </Link>
            </div>
          </div>
        </main>
      </div>
    );
  }

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
  const safeNextLessonId =
    !isSuperAdmin && nextLesson && nextLesson.sequence_order > 1
      ? null
      : nextLesson?.slug || nextLesson?.id;

  const progressMap = new Map(
    userProgress?.map((p: any) => [p.lesson_id, p]) || [],
  );

  const isAlreadyCompleted =
    (progressMap.get(currentLesson.id) as any)?.is_completed ?? false;

  const lessonsSummary = lessons.map((l: any) => ({
    id: l.id,
    title:
      !isSuperAdmin && l.sequence_order > 1
        ? `${l.title} (🔒 Próximamente)`
        : l.title,
    sequence_order: l.sequence_order,
    slug: l.slug,
  }));

  const courseLessonIds = new Set(lessons.map((lesson: any) => lesson.id));
  const completedLessonIds: string[] = (userProgress || [])
    .filter((p: any) => p?.is_completed && courseLessonIds.has(p.lesson_id))
    .map((p: any) => String(p.lesson_id));

  const isC172 =
    course.slug === C172_COURSE_SLUG || course.id === C172_COURSE_ID;

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
      nextLessonId={safeNextLessonId}
      prevLessonId={prevLesson?.slug || prevLesson?.id}
      isAlreadyCompleted={isAlreadyCompleted}
      userEmail={user.email}
      userName={profile?.full_name}
      role={profile?.role}
      lessonsSummary={lessonsSummary}
      completedLessonIds={completedLessonIds}
      quiz={quiz}
      quizAttempt={quizAttempt}
      courseDocs={isC172 ? C172_DOCUMENTATION : undefined}
    />
  );
}
