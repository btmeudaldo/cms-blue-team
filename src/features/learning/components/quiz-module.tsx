"use client";

import {
  startTransition,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  startQuizAttemptAction,
  submitQuizAttemptAction,
} from "@/app/actions/quiz.actions";
import {
  initialQuizSubmission,
  quizSubmissionReducer,
} from "../domain/quiz-submission-state";
import type {
  StudentQuiz,
  StartedQuizAttempt,
  QuizAttemptResult,
} from "../domain/quiz-types";

type QuizModuleProps = {
  quiz: StudentQuiz;
  previousAttempt?: QuizAttemptResult | null;
  isEmbedded?: boolean;
  onComplete?: (result: { success: true; attempt: QuizAttemptResult }) => void;
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
  const [state, dispatch] = useReducer(quizSubmissionReducer, {
    ...initialQuizSubmission,
    result: previousAttempt,
  });
  const [startedAttempt, setStartedAttempt] =
    useState<StartedQuizAttempt | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isStarting, setIsStarting] = useState(false);
  const requestInFlight = useRef(false);
  const attemptResult = state.result;
  const selectedAnswers = state.answers;
  const questions = startedAttempt?.quiz.questions ?? [];
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const answeredCount = Object.keys(selectedAnswers).length;
  const allAnswered =
    questions.length > 0 &&
    questions.every((question) =>
      Number.isInteger(selectedAnswers[question.id]),
    );

  useEffect(() => {
    if (!startedAttempt || attemptResult) return;
    const timer = setInterval(
      () => setElapsedSeconds((previous) => previous + 1),
      1000,
    );
    return () => clearInterval(timer);
  }, [startedAttempt, attemptResult]);

  function handleStart() {
    if (requestInFlight.current) return;
    requestInFlight.current = true;
    setIsStarting(true);
    startTransition(async () => {
      try {
        const response = await startQuizAttemptAction(quiz.id);
        if ("error" in response) {
          dispatch({ type: "failed", error: response.error });
          return;
        }
        setStartedAttempt(response.attempt);
        dispatch({ type: "started", attemptId: response.attempt.attempt_id });
        setCurrentQuestionIndex(0);
        setElapsedSeconds(0);
      } catch {
        dispatch({
          type: "failed",
          error:
            "No se ha podido iniciar el examen. Comprueba la conexión e inténtalo de nuevo.",
        });
      } finally {
        requestInFlight.current = false;
        setIsStarting(false);
      }
    });
  }

  function handleSelectOption(optionIndex: number) {
    if (currentQuestion && !requestInFlight.current)
      dispatch({
        type: "answer",
        questionId: currentQuestion.id,
        option: optionIndex,
      });
  }

  function handleSubmitQuiz() {
    if (
      !state.attemptId ||
      !allAnswered ||
      requestInFlight.current ||
      attemptResult
    )
      return;
    requestInFlight.current = true;
    const attemptId = state.attemptId;
    const answers = { ...state.answers };
    dispatch({ type: "submit" });
    startTransition(async () => {
      try {
        const response = await submitQuizAttemptAction(attemptId, answers);
        if ("error" in response) {
          dispatch({ type: "failed", error: response.error });
          return;
        }
        if (response.attempt.id !== attemptId) {
          dispatch({
            type: "failed",
            error:
              "No se ha podido confirmar este intento. Reenvía las mismas respuestas.",
          });
          return;
        }
        dispatch({ type: "confirmed", result: response.attempt });
        onComplete?.({ success: true, attempt: response.attempt });
      } catch {
        dispatch({
          type: "failed",
          error:
            "No se ha recibido confirmación del resultado. Comprueba la conexión y reenvía las mismas respuestas.",
        });
      } finally {
        requestInFlight.current = false;
      }
    });
  }

  // --- RESULT VIEW ---
  if (attemptResult) {
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
            {passed ? (attemptResult.score_percentage === 100 ? "🌟" : "🏆") : "⚠️"}
          </div>

          <div
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
              passed
                ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60"
                : "bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800/60"
            }`}
          >
            {passed ? "Evaluación Superada" : "Evaluación No Superada"}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {passed
              ? attemptResult.score_percentage === 100
                ? "¡Puntuación Perfecta (100%)!"
                : "¡Felicidades! Has Aprobado"
              : "No has alcanzado la nota mínima"}
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
            {`Has obtenido un ${attemptResult.score_percentage}% de aciertos.`}
            {` La nota mínima requerida es del ${attemptResult.min_pass_score_percentage ?? 75}%.`}
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
              {attemptResult.score_percentage}%
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Aciertos Totales
            </span>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {attemptResult.correct_count} / {attemptResult.total_questions}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 text-center">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Tiempo Empleado
            </span>
            <div className="text-3xl font-extrabold text-[#1a80ff] mt-1">
              {`${Math.floor(attemptResult.elapsed_seconds / 60)}m ${attemptResult.elapsed_seconds % 60}s`}
            </div>
          </div>
        </div>

        {state.error && (
          <p role="alert" className="text-sm text-rose-700 dark:text-rose-300">
            {state.error}
          </p>
        )}
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          {passed ? (
            <>
              <Link
                href={
                  nextLessonUrl ||
                  (quiz.course_id ? `/courses/${quiz.course_id}` : "/quizzes")
                }
                className="w-full sm:w-auto rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-2.5 text-xs font-bold text-white transition-all text-center shadow-xs inline-flex items-center justify-center gap-1.5"
              >
                <span>
                  {nextLessonTitle
                    ? `Continuar: ${nextLessonTitle}`
                    : quiz.course_id
                      ? "Continuar con el Curso"
                      : "Volver a Evaluaciones"}
                </span>
                <span>&rarr;</span>
              </Link>

              <Link
                href="/quizzes"
                className="w-full sm:w-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all text-center shadow-xs inline-flex items-center justify-center gap-1.5"
              >
                <span>Volver a Evaluaciones</span>
              </Link>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleStart}
                disabled={isStarting}
                className="w-full sm:w-auto rounded-xl bg-rose-600 hover:bg-rose-700 px-5 py-2.5 text-xs font-bold text-white transition-all cursor-pointer shadow-xs inline-flex items-center justify-center gap-1.5"
              >
                <span>🔄</span>
                <span>{isStarting ? "Iniciando..." : "Reintentar Examen"}</span>
              </button>

              <Link
                href={
                  quiz.course_id ? `/courses/${quiz.course_id}` : "/quizzes"
                }
                className="w-full sm:w-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 px-4 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all text-center shadow-xs inline-flex items-center justify-center gap-1.5"
              >
                <span>Volver al curso</span>
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }

  if (!startedAttempt) {
    return (
      <section className="mx-auto max-w-3xl space-y-4 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-bold">{quiz.title}</h2>
        <p>{quiz.description}</p>
        <p className="text-sm">
          El examen comienza al pulsar iniciar. La nota se mostrará cuando el
          servidor confirme el resultado.
        </p>
        {state.error && (
          <p role="alert" className="text-sm text-rose-700 dark:text-rose-300">
            {state.error}
          </p>
        )}
        <button
          type="button"
          disabled={isStarting}
          onClick={handleStart}
          className="rounded-xl bg-blue-700 px-5 py-3 font-bold text-white disabled:opacity-50"
        >
          {isStarting ? "Iniciando..." : "Iniciar examen"}
        </button>
      </section>
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
            {startedAttempt?.quiz.title ?? quiz.title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
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
                disabled={state.locked}
                aria-pressed={isSelected}
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
      </div>

      {state.error && (
        <div
          role="alert"
          className="rounded-xl border border-rose-300 p-4 text-sm text-rose-700 dark:text-rose-300"
        >
          {state.error} Las respuestas quedan bloqueadas para reenviar este
          mismo intento.
        </div>
      )}
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
        ) : (
          <button
            type="button"
            disabled={state.submitting || !allAnswered}
            onClick={handleSubmitQuiz}
            className="rounded-xl bg-[#1a80ff] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#0066e6] disabled:opacity-50 transition-all shadow-sm cursor-pointer"
          >
            {state.submitting
              ? "Evaluando..."
              : allAnswered
                ? state.locked
                  ? "Reenviar respuestas"
                  : "Finalizar Examen y Enviar"
                : "Responde todas para enviar"}
          </button>
        )}
      </div>
    </div>
  );
}
