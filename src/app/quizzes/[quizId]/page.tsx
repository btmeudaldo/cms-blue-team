import Link from "next/link";
import { notFound } from "next/navigation";

import { Header } from "@/shared/components/header";
import { QuizModule } from "@/features/learning/components/quiz-module";
import {
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
  const { user, profile } = await getResilientUser();

  const [quiz, attempts] = await Promise.all([
    getResilientQuiz(quizId),
    getResilientQuizAttempts(user.id),
  ]);

  if (!quiz) notFound();

  const previousAttempt = (attempts || []).find(
    (a: any) => a.quiz_id === quiz.id,
  );

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
        <QuizModule quiz={quiz} previousAttempt={previousAttempt} />
      </main>
    </div>
  );
}
