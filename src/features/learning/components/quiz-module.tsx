"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { submitQuizAttemptAction } from "@/app/actions/quiz.actions";
import {
  addPendingQuizAttempt,
  removePendingQuizAttempt,
  type PendingQuizAttempt,
} from "../domain/quiz-attempt-queue";
import type { Quiz, QuizAttemptResult } from "../domain/quiz-types";

const PENDING_ATTEMPTS_STORAGE_KEY = "cms.pending-quiz-attempts";

function readPendingAttempts(): PendingQuizAttempt[] {
  try {
    const storedAttempts = localStorage.getItem(PENDING_ATTEMPTS_STORAGE_KEY);
    return storedAttempts ? JSON.parse(storedAttempts) : [];
  } catch {
    return [];
  }
}

function writePendingAttempts(attempts: PendingQuizAttempt[]) {
  localStorage.setItem(PENDING_ATTEMPTS_STORAGE_KEY, JSON.stringify(attempts));
}

type QuizModuleProps = {
  quiz: Quiz;
  previousAttempt?: QuizAttemptResult | null;
  isEmbedded?: boolean;
  onComplete?: (result: any) => void;
  nextLessonUrl?: string | null;
  nextLessonTitle?: string | null;
};

export function QuizModule({
  quiz,
  previousAttempt = null,
  isEmbedded = false,
  onComplete,
  nextLessonUrl = null,
  nextLessonTitle = null,
}: QuizModuleProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, number>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attemptResult, setAttemptResult] = useState<{
    scorePercentage: number;
    correctCount: number;
    totalQuestions: number;
    passed: boolean;
    minScore: number;
  } | null>(
    previousAttempt
      ? {
          scorePercentage: previousAttempt.score_percentage,
          correctCount: previousAttempt.correct_count,
          totalQuestions: previousAttempt.total_questions,
          passed: previousAttempt.passed,
          minScore: quiz.minPassScorePercentage || 70,
        }
      : null,
  );

  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [showReviewMode, setShowReviewMode] = useState(false);
  const [isPendingSync, setIsPendingSync] = useState(false);

  async function syncAttempt(attempt: PendingQuizAttempt) {
    const response = await submitQuizAttemptAction(
      attempt.quizId,
      attempt.answers,
      attempt.elapsedSeconds,
      attempt.id,
      attempt.completedAt,
    );

    if (response.success) {
      writePendingAttempts(
        removePendingQuizAttempt(readPendingAttempts(), attempt.id),
      );
      setIsPendingSync(false);
      return response;
    }

    setIsPendingSync(true);
    return response;
  }

  useEffect(() => {
    const syncPendingAttempts = async () => {
      const pendingAttempts = readPendingAttempts().filter(
        (attempt) => attempt.quizId === quiz.id,
      );
      for (const pendingAttempt of pendingAttempts) {
        await syncAttempt(pendingAttempt);
      }
    };

    void syncPendingAttempts();
    window.addEventListener("online", syncPendingAttempts);
    return () => window.removeEventListener("online", syncPendingAttempts);
  }, [quiz.id]);

  useEffect(() => {
    if (attemptResult && !showReviewMode) return;
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [attemptResult, showReviewMode]);

  const questions = quiz.questions || [];
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const answeredCount = Object.keys(selectedAnswers).length;
  const allAnswered = answeredCount === questions.length;

  function handleSelectOption(optionIndex: number) {
    if (!currentQuestion) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optionIndex,
    }));
  }

  async function handleSubmitQuiz() {
    setIsSubmitting(true);
    const correctCount = questions.filter(
      (question) =>
        selectedAnswers[question.id] === question.correctAnswerIndex,
    ).length;
    const scorePercentage = Math.round((correctCount / questions.length) * 100);
    const minScore = quiz.minPassScorePercentage || 70;
    const pendingAttempt: PendingQuizAttempt = {
      id: crypto.randomUUID(),
      quizId: quiz.id,
      answers: selectedAnswers,
      elapsedSeconds,
      completedAt: new Date().toISOString(),
    };

    writePendingAttempts(
      addPendingQuizAttempt(readPendingAttempts(), pendingAttempt),
    );
    setAttemptResult({
      scorePercentage,
      correctCount,
      totalQuestions: questions.length,
      passed: scorePercentage >= minScore,
      minScore,
    });

    try {
      const res = await syncAttempt(pendingAttempt);

      if (res.success) {
        if (onComplete) onComplete(res);
      }
    } catch (err) {
      setIsPendingSync(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleRetake() {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setAttemptResult(null);
    setElapsedSeconds(0);
    setShowReviewMode(false);
  }

  // --- RESULT VIEW ---
  if (attemptResult && !showReviewMode) {
    const passed = attemptResult.passed;
    return (
      <div
        className={`rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-md space-y-6 ${
          isEmbedded ? "max-w-full" : "max-w-3xl mx-auto"
        }`}
      >
        <div className="text-center space-y-3">
          <div
            className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl text-4xl shadow-lg ${
              passed
                ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 border border-emerald-300 dark:border-emerald-800"
                : "bg-rose-100 dark:bg-rose-950/60 text-rose-600 border border-rose-300 dark:border-rose-800"
            }`}
          >
            {passed ? "🏆" : "⚠️"}
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 px-3 py-1 text-xs font-bold text-[#1a80ff]">
            Evaluación Completada
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {passed ? "¡Felicidades! Has Aprobado" : "Evaluación Reprobada"}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            {passed
              ? `Has obtenido un ${attemptResult.scorePercentage}% de aciertos, superando la nota mínima exigida del ${attemptResult.minScore}%.`
              : `Obtuviste un ${attemptResult.scorePercentage}% de aciertos. Para aprobar necesitas alcanzar al menos un ${attemptResult.minScore}%.`}
          </p>

          <div className="pt-1">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              ✓ Intento guardado y registrado en tu expediente
            </span>
          </div>
        </div>

        {/* Executive Score Card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Calificación Obtenida
            </span>
            <div
              className={`text-3xl font-extrabold mt-1 ${
                passed
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-rose-600 dark:text-rose-400"
              }`}
            >
              {attemptResult.scorePercentage}%
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Aciertos Totales
            </span>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {attemptResult.correctCount} / {attemptResult.totalQuestions}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Tiempo Empleado
            </span>
            <div className="text-3xl font-extrabold text-[#1a80ff] mt-1">
              {Math.floor(elapsedSeconds / 60)}m {elapsedSeconds % 60}s
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={() => setShowReviewMode(true)}
            className="w-full sm:w-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer shadow-xs inline-flex items-center justify-center gap-1.5"
          >
            <span>🔍</span>
            <span>Revisar Explicaciones</span>
          </button>

          <button
            type="button"
            onClick={handleRetake}
            className="w-full sm:w-auto rounded-xl bg-indigo-600 dark:bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 dark:hover:bg-indigo-700 transition-all cursor-pointer shadow-xs inline-flex items-center justify-center gap-1.5"
          >
            <span>🔄</span>
            <span>Reintentar Examen</span>
          </button>

          {!isEmbedded && (
            <Link
              href={
                nextLessonUrl ||
                (quiz.course_id ? `/courses/${quiz.course_id}` : "/courses")
              }
              className="w-full sm:w-auto rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] px-5 py-2.5 text-xs font-bold text-white transition-all text-center shadow-xs inline-flex items-center justify-center gap-1.5"
            >
              <span>{nextLessonTitle ? "Siguiente Lección" : "Siguiente Lección"}</span>
              <span>&rarr;</span>
            </Link>
          )}
        </div>
      </div>
    );
  }

  // --- QUESTION TAKING / REVIEW VIEW ---
  if (!currentQuestion) {
    return (
      <div className="p-8 text-center text-slate-500">
        No hay preguntas cargadas en este quiz.
      </div>
    );
  }

  return (
    <div
      className={`rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm space-y-6 ${
        isEmbedded ? "max-w-full" : "max-w-3xl mx-auto"
      }`}
    >
      {/* Quiz Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-[10px] font-extrabold text-[#1a80ff] uppercase tracking-wider">
            Examen Teórico Aeronáutico
          </span>
          <h2 className="text-lg font-extrabold text-slate-900 dark:text-white mt-1">
            {quiz.title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          {showReviewMode && (
            <button
              type="button"
              onClick={() => setShowReviewMode(false)}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
            >
              &larr; Ver Calificación
            </button>
          )}
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            <span>⏱️</span>
            <span>
              {Math.floor(elapsedSeconds / 60)
                .toString()
                .padStart(2, "0")}
              :{(elapsedSeconds % 60).toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-between gap-2 text-xs">
        <span className="font-extrabold text-slate-700 dark:text-slate-300">
          Pregunta {currentQuestionIndex + 1} de {questions.length}
        </span>
        <span className="text-slate-400">
          Respondidas: {answeredCount} / {questions.length}
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full bg-[#1a80ff] transition-all duration-300 rounded-full"
          style={{
            width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="space-y-4 pt-2">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
          {currentQuestion.question}
        </h3>

        {/* Options List */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, optIdx) => {
            const isSelected = selectedAnswers[currentQuestion.id] === optIdx;

            return (
              <button
                key={optIdx}
                type="button"
                onClick={() => handleSelectOption(optIdx)}
                className={`w-full text-left flex items-center justify-between rounded-2xl border p-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "border-[#1a80ff] bg-blue-50/80 dark:bg-blue-950/40 text-[#1a80ff] shadow-sm font-bold"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl font-bold text-xs ${
                      isSelected
                        ? "bg-[#1a80ff] text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500"
                    }`}
                  >
                    {String.fromCharCode(65 + optIdx)}
                  </div>
                  <span>{option}</span>
                </div>

                <div
                  className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                    isSelected
                      ? "border-[#1a80ff] bg-[#1a80ff]"
                      : "border-slate-300 dark:border-slate-700"
                  }`}
                >
                  {isSelected && (
                    <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Educational Explanation in Review Mode */}
        {showReviewMode && (
          <div className="mt-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 p-4 text-xs space-y-1">
            <div className="font-bold text-[#1a80ff]">
              💡 Explicación Técnica Aeronáutica:
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {currentQuestion.explanation}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
        <button
          type="button"
          disabled={currentQuestionIndex === 0}
          onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 disabled:opacity-30 cursor-pointer"
        >
          &larr; Anterior
        </button>

        {!isLastQuestion ? (
          <button
            type="button"
            onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
            className="rounded-xl bg-slate-900 dark:bg-slate-800 text-white px-5 py-2 text-xs font-bold hover:bg-[#1a80ff] transition-colors cursor-pointer"
          >
            Siguiente &rarr;
          </button>
        ) : showReviewMode ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowReviewMode(false)}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-4 py-2 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
            >
              Ver Resumen
            </button>
            <Link
              href={
                nextLessonUrl ||
                (quiz.course_id ? `/courses/${quiz.course_id}` : "/courses")
              }
              className="rounded-xl bg-[#1a80ff] px-5 py-2 text-xs font-bold text-white hover:bg-[#0066e6] transition-all shadow-sm inline-flex items-center gap-1"
            >
              <span>Siguiente Lección</span>
              <span>&rarr;</span>
            </Link>
          </div>
        ) : (
          <button
            type="button"
            disabled={isSubmitting || !allAnswered}
            onClick={handleSubmitQuiz}
            className="rounded-xl bg-[#1a80ff] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#0066e6] disabled:opacity-50 transition-all shadow-sm cursor-pointer"
          >
            {isSubmitting
              ? "Evaluando..."
              : allAnswered
                ? "Finalizar Examen y Enviar"
                : "Responde todas para enviar"}
          </button>
        )}
      </div>
    </div>
  );
}
