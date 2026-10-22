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
import { C172_QUIZZES } from "../content/c172-quizzes-data";

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
    const enrichedQuiz = C172_QUIZZES.find((q) => q.id === quiz.id);

    // Parse user answers from current session state or persisted attempt
    let userAnswers: Record<string, number> = {};
    if (state.answers && Object.keys(state.answers).length > 0) {
      userAnswers = state.answers;
    } else if ((attemptResult as any)?.answers) {
      const raw = (attemptResult as any).answers;
      if (typeof raw === "string") {
        try {
          userAnswers = JSON.parse(raw);
        } catch {}
      } else if (typeof raw === "object") {
        userAnswers = raw;
      }
    }

    return (
      <div
        className={`rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 lg:p-10 shadow-md space-y-6 ${
          isEmbedded ? "max-w-full" : "w-full max-w-5xl lg:max-w-6xl mx-auto"
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
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-base font-bold ${
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

          <p className="text-base text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
            {`Has obtenido un ${attemptResult.score_percentage}% de aciertos.`}
            {` La nota mínima requerida es del ${attemptResult.min_pass_score_percentage ?? 75}%.`}
          </p>

          <div className="pt-1">
            <span className="inline-flex items-center gap-2 text-base font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-4 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800">
              ✓ Intento guardado y registrado en tu expediente
            </span>
          </div>
        </div>

        {/* Executive Score Card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 text-center">
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
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
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Aciertos Totales
            </span>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {attemptResult.correct_count} / {attemptResult.total_questions}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 p-4 text-center">
            <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Tiempo Empleado
            </span>
            <div className="text-3xl font-extrabold text-[#1a80ff] mt-1">
              {`${Math.floor(attemptResult.elapsed_seconds / 60)}m ${attemptResult.elapsed_seconds % 60}s`}
            </div>
          </div>
        </div>

        {/* Sección de Explicaciones Técnicas POH */}
        {enrichedQuiz?.questions && enrichedQuiz.questions.length > 0 && (
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-1">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[#0B2E59] dark:text-sky-300 flex items-center gap-2">
                  <span>📖</span>
                  <span>
                    {passed
                      ? "Fundamentos Técnicos y Justificación POH"
                      : "Revisión del Examen y Justificación POH"}
                  </span>
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  {passed
                    ? "Consulta la justificación técnica de cada pregunta para consolidar tus conocimientos de vuelo."
                    : "Revisa las preguntas contestadas y consulta los fundamentos oficiales del POH antes de reintentar."}
                </p>
              </div>
            </div>

            <div className="space-y-4 max-h-[640px] lg:max-h-[720px] overflow-y-auto pr-1 sm:pr-2">
              {enrichedQuiz.questions.map((q, idx) => {
                const userAnswerIndex = userAnswers[q.id];
                const hasUserAnswer =
                  typeof userAnswerIndex === "number" &&
                  Number.isInteger(userAnswerIndex);
                const isCorrect = hasUserAnswer
                  ? userAnswerIndex === q.correctAnswerIndex
                  : null;

                const cardBorder =
                  isCorrect === true
                    ? "border-emerald-200/90 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/15"
                    : isCorrect === false
                    ? "border-rose-200/90 dark:border-rose-900/60 bg-rose-50/20 dark:bg-rose-950/15"
                    : "border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40";

                const badgeBg =
                  isCorrect === true
                    ? "bg-emerald-600"
                    : isCorrect === false
                    ? "bg-rose-600"
                    : "bg-[#1a80ff]";

                return (
                  <div
                    key={q.id}
                    className={`rounded-2xl border p-4 sm:p-5 space-y-3.5 text-left transition-colors ${cardBorder}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 min-w-0">
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white text-sm font-bold mt-0.5 shadow-xs ${badgeBg}`}
                        >
                          {idx + 1}
                        </span>
                        <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                          {q.question}
                        </span>
                      </div>

                      {isCorrect !== null && (
                        <span
                          className={`inline-flex items-center gap-1.5 text-sm sm:text-base font-bold px-3 py-1 rounded-full shrink-0 border ${
                            isCorrect
                              ? "text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/50 border-emerald-300/70 dark:border-emerald-800/60"
                              : "text-rose-700 dark:text-rose-300 bg-rose-100/80 dark:bg-rose-950/50 border-rose-300/70 dark:border-rose-800/60"
                          }`}
                        >
                          <span className="font-extrabold">{isCorrect ? "✓" : "✗"}</span>
                          <span className="hidden sm:inline">
                            {isCorrect ? "Correcta" : "Incorrecta"}
                          </span>
                        </span>
                      )}
                    </div>

                    <div className="pl-9 sm:pl-10 space-y-2.5">
                      {isCorrect === false &&
                        hasUserAnswer &&
                        q.options[userAnswerIndex] !== undefined && (
                          <div className="inline-flex items-start gap-2 text-base text-rose-700 dark:text-rose-300 bg-rose-50/90 dark:bg-rose-950/40 p-3 rounded-xl border border-rose-200 dark:border-rose-900/50 w-full leading-snug">
                            <span className="shrink-0 font-bold">✗ Tu respuesta:</span>
                            <span className="font-medium text-slate-800 dark:text-slate-200">
                              {q.options[userAnswerIndex]}
                            </span>
                          </div>
                        )}

                      <div className="inline-flex items-start gap-2 text-base font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 p-3 rounded-xl border border-emerald-200 dark:border-emerald-800/60 w-full leading-snug">
                        <span className="shrink-0">✓ Respuesta Correcta:</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">
                          {q.options[q.correctAnswerIndex]}
                        </span>
                      </div>

                      {q.explanation && (
                        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/90 dark:bg-sky-950/30 p-3.5 text-base leading-relaxed text-sky-950 dark:text-sky-200">
                          <strong className="text-sky-700 dark:text-sky-400 flex items-center gap-1.5 mb-1.5 uppercase tracking-wide text-sm sm:text-base font-bold">
                            <span>💡</span>
                            <span>Fundamento Oficial POH:</span>
                          </strong>
                          <div className="text-slate-800 dark:text-slate-200 text-base leading-relaxed">
                            {q.explanation}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {state.error && (
          <p role="alert" className="text-base text-rose-700 dark:text-rose-300">
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
                className="w-full sm:w-auto rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-base font-bold text-white transition-all text-center shadow-xs inline-flex items-center justify-center gap-2"
              >
                <span>
                  {nextLessonTitle
                    ? nextLessonTitle
                    : quiz.course_id
                      ? "Volver al Panel de Lecciones"
                      : "Volver a Evaluaciones"}
                </span>
                <span>&rarr;</span>
              </Link>

              <Link
                href="/quizzes"
                className="w-full sm:w-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 px-5 py-3 text-base font-semibold text-slate-700 dark:text-slate-300 transition-all text-center shadow-xs inline-flex items-center justify-center gap-2"
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
                className="w-full sm:w-auto rounded-xl bg-rose-600 hover:bg-rose-700 px-6 py-3 text-base font-bold text-white transition-all cursor-pointer shadow-xs inline-flex items-center justify-center gap-2"
              >
                <span>🔄</span>
                <span>{isStarting ? "Iniciando..." : "Reintentar Examen"}</span>
              </button>

              <Link
                href={
                  quiz.course_id ? `/courses/${quiz.course_id}` : "/quizzes"
                }
                className="w-full sm:w-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/50 px-5 py-3 text-base font-semibold text-slate-700 dark:text-slate-300 transition-all text-center shadow-xs inline-flex items-center justify-center gap-2"
              >
                <span>Volver al Panel de Lecciones</span>
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }

  if (!startedAttempt) {
    return (
      <section className="mx-auto max-w-3xl space-y-4 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900 text-base">
        <h2 className="text-xl sm:text-2xl font-bold">{quiz.title}</h2>
        <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">{quiz.description}</p>
        <p className="text-base text-slate-600 dark:text-slate-400">
          El examen comienza al pulsar iniciar. La nota se mostrará cuando el
          servidor confirme el resultado.
        </p>
        {state.error && (
          <p role="alert" className="text-base text-rose-700 dark:text-rose-300">
            {state.error}
          </p>
        )}
        <button
          type="button"
          disabled={isStarting}
          onClick={handleStart}
          className="rounded-xl bg-blue-700 hover:bg-blue-800 px-6 py-3.5 text-base font-bold text-white disabled:opacity-50 transition-colors"
        >
          {isStarting ? "Iniciando..." : "Iniciar examen"}
        </button>
      </section>
    );
  }

  // --- QUESTION TAKING / REVIEW VIEW ---
  if (!currentQuestion) {
    return (
      <div className="p-8 text-center text-slate-500 text-base">
        No hay preguntas cargadas en este quiz.
      </div>
    );
  }

  return (
    <div
      className={`rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm space-y-6 ${
        isEmbedded ? "max-w-full" : "max-w-4xl mx-auto"
      }`}
    >
      {/* Quiz Header Bar */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 px-3 py-1 text-sm font-extrabold text-[#1a80ff] uppercase tracking-wider">
            Examen Teórico Aeronáutico
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mt-1.5">
            {startedAttempt?.quiz.title ?? quiz.title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 px-3.5 py-2 text-base font-mono font-bold text-slate-700 dark:text-slate-300">
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
      <div className="flex items-center justify-between gap-2 text-base">
        <span className="font-extrabold text-slate-700 dark:text-slate-300">
          Pregunta {currentQuestionIndex + 1} de {questions.length}
        </span>
        <span className="text-slate-500 dark:text-slate-400">
          Respondidas: {answeredCount} / {questions.length}
        </span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full bg-[#1a80ff] transition-all duration-300 rounded-full"
          style={{
            width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
          }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="space-y-4 pt-2">
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
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
                className={`w-full text-left flex items-center justify-between rounded-2xl border p-4 sm:p-4.5 text-base sm:text-lg font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? "border-[#1a80ff] bg-blue-50/80 dark:bg-blue-950/40 text-[#1a80ff] shadow-sm font-bold"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-bold text-base ${
                      isSelected
                        ? "bg-[#1a80ff] text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {String.fromCharCode(65 + optIdx)}
                  </div>
                  <span className="leading-snug">{option}</span>
                </div>

                <div
                  className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ${
                    isSelected
                      ? "border-[#1a80ff] bg-[#1a80ff]"
                      : "border-slate-300 dark:border-slate-700"
                  }`}
                >
                  {isSelected && (
                    <div className="h-2 w-2 rounded-full bg-white"></div>
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
          className="rounded-xl border border-rose-300 p-4 text-base text-rose-700 dark:text-rose-300"
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
          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-5 py-2.5 text-base font-bold text-slate-600 dark:text-slate-300 disabled:opacity-30 cursor-pointer"
        >
          &larr; Anterior
        </button>

        {!isLastQuestion ? (
          <button
            type="button"
            onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
            className="rounded-xl bg-slate-900 dark:bg-slate-800 text-white px-6 py-2.5 text-base font-bold hover:bg-[#1a80ff] transition-colors cursor-pointer"
          >
            Siguiente &rarr;
          </button>
        ) : (
          <button
            type="button"
            disabled={state.submitting || !allAnswered}
            onClick={handleSubmitQuiz}
            className="rounded-xl bg-[#1a80ff] px-7 py-3 text-base font-bold text-white hover:bg-[#0066e6] disabled:opacity-50 transition-all shadow-sm cursor-pointer"
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
