import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/shared/components/header";
import { QuizModule } from "@/features/learning/components/quiz-module";
import {
  getResilientCourseDetail,
  getResilientQuiz,
  getResilientQuizAttempts,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";

export default async function StandaloneQuizPage({
  params,
}: {
  params: Promise<{ quizId: string }>;
}) {
  const { quizId } = await params;
  const { user, profile, isDemo } = await getResilientUser();

  const [quiz, attempts] = await Promise.all([
    getResilientQuiz(quizId),
    getResilientQuizAttempts(user.id),
  ]);

  if (!quiz) notFound();

  let nextLessonUrl: string | null = null;
  let nextLessonTitle: string | null = null;

  if (quiz.course_id) {
    try {
      const course = await getResilientCourseDetail(quiz.course_id, isDemo);
      if (course && course.lessons && course.lessons.length > 0) {
        const lessons = [...course.lessons].sort(
          (a: any, b: any) => (a.sequence_order || 0) - (b.sequence_order || 0),
        );
        const currentIndex = lessons.findIndex(
          (l: any) =>
            l.id === quiz.lesson_id || l.slug === (quiz as any).lesson_slug,
        );

        if (currentIndex !== -1 && currentIndex < lessons.length - 1) {
          const nextLesson = lessons[currentIndex + 1];
          nextLessonUrl = `/courses/${course.id}/lessons/${nextLesson.id}`;
          nextLessonTitle = nextLesson.title;
        } else if (currentIndex === lessons.length - 1) {
          nextLessonUrl = `/courses/${course.id}`;
          nextLessonTitle = "Volver al Curso";
        } else {
          nextLessonUrl = `/courses/${course.id}`;
          nextLessonTitle = "Volver al Curso";
        }
      }
    } catch {}
  }

  const userQuizAttempts = (attempts || []).filter(
    (a: any) => a.quiz_id === quiz.id,
  );
  const passedAttempt = userQuizAttempts.find((a: any) => a.passed);
  const latestAttempt =
    userQuizAttempts.length > 0
      ? userQuizAttempts[userQuizAttempts.length - 1]
      : null;
  const previousAttempt = passedAttempt || latestAttempt;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={profile?.role}
      />

      <main className="flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Link
              href="/quizzes"
              className="hover:text-[#1a80ff] transition-colors"
            >
              Evaluaciones
            </Link>
            <span>&rsaquo;</span>
            <span className="text-slate-900 dark:text-white truncate max-w-xs">
              {quiz.title}
            </span>
          </div>

          <Link
            href="/quizzes"
            className="hover:text-[#1a80ff] transition-colors"
          >
            &larr; Volver a la Lista
          </Link>
        </div>

        {/* Interactive Standalone Quiz Module */}
        <QuizModule
          quiz={quiz}
          previousAttempt={previousAttempt}
          nextLessonUrl={nextLessonUrl}
          nextLessonTitle={nextLessonTitle}
        />
      </main>
    </div>
  );
}
