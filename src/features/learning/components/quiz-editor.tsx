"use client";

import { useState } from "react";
import { saveQuizAction } from "@/app/actions/quiz.actions";

type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
};

type QuizEditorProps = {
  courseId: string;
  lessonId: string;
  initialQuiz?: {
    id?: string;
    title?: string;
    description?: string;
    minPassScorePercentage?: number;
    questions?: Question[];
  } | null;
};

export function QuizEditor({
  courseId,
  lessonId,
  initialQuiz,
}: QuizEditorProps) {
  const [title, setTitle] = useState(
    initialQuiz?.title || "Examen Teórico de Verificación",
  );
  const [description, setDescription] = useState(
    initialQuiz?.description ||
      "Evaluación teórica de opción múltiple para validar los conocimientos adquiridos en la lección.",
  );
  const [minPassScore, setMinPassScore] = useState(
    initialQuiz?.minPassScorePercentage || 70,
  );

  const [questions, setQuestions] = useState<Question[]>(
    initialQuiz?.questions && initialQuiz.questions.length > 0
      ? initialQuiz.questions
      : [
          {
            id: `q-${Date.now()}-1`,
            question:
              "¿Cuál es el concepto principal expuesto en esta lección?",
            options: [
              "Opción A: Concepto o procedimiento correcto",
              "Opción B: Alternativa incorrecta 1",
              "Opción C: Alternativa incorrecta 2",
              "Opción D: Alternativa incorrecta 3",
            ],
            correctAnswerIndex: 0,
            explanation:
              "Explicación pedagógica de por qué la opción A es la respuesta correcta.",
          },
        ],
  );

  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  function handleAddQuestion() {
    const newQ: Question = {
      id: `q-${Date.now()}-${questions.length + 1}`,
      question: "Nueva pregunta teórica...",
      options: ["Opción A", "Opción B", "Opción C", "Opción D"],
      correctAnswerIndex: 0,
      explanation: "Explicación de la respuesta...",
    };
    setQuestions([...questions, newQ]);
  }

  function handleRemoveQuestion(index: number) {
    if (questions.length <= 1) {
      alert("El examen debe tener al menos una pregunta.");
      return;
    }
    const updated = [...questions];
    updated.splice(index, 1);
    setQuestions(updated);
  }

  function handleQuestionChange(
    index: number,
    field: keyof Question,
    value: any,
  ) {
    const updated = [...questions];
    updated[index] = { ...updated[index], [field]: value };
    setQuestions(updated);
  }

  function handleOptionChange(qIndex: number, oIndex: number, value: string) {
    const updated = [...questions];
    const newOptions = [...updated[qIndex].options];
    newOptions[oIndex] = value;
    updated[qIndex] = { ...updated[qIndex], options: newOptions };
    setQuestions(updated);
  }

  async function handleSaveQuiz() {
    setIsSaving(true);
    setSaveStatus("idle");
    setStatusMessage(null);

    try {
      await saveQuizAction(courseId, lessonId, {
        id: initialQuiz?.id || `quiz-${lessonId}`,
        title,
        description,
        minPassScorePercentage: minPassScore,
        questions,
      });

      setSaveStatus("success");
      setStatusMessage("¡Cuestionario guardado con éxito!");
      setTimeout(() => setSaveStatus("idle"), 3000);
    } catch (err) {
      setSaveStatus("error");
      setStatusMessage((err as Error).message);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 dark:bg-blue-950 px-3 py-1 text-xs font-extrabold text-[#1a80ff] mb-1">
            📝 Editor de Examen Teórico
          </span>
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Preguntas y Opciones de Evaluación
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Define las preguntas de opción múltiple, alternativas y
            explicaciones pedagógicas para esta lección.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSaveQuiz}
          disabled={isSaving}
          className="rounded-2xl bg-[#1a80ff] px-5 py-2.5 text-xs font-extrabold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all disabled:opacity-50 shrink-0"
        >
          {isSaving ? "Guardando Cuestionario..." : "💾 Guardar Cuestionario"}
        </button>
      </div>

      {saveStatus === "success" && (
        <div className="rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 p-4 text-xs font-bold text-emerald-800 dark:text-emerald-300">
          ✓ {statusMessage}
        </div>
      )}

      {saveStatus === "error" && (
        <div className="rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 p-4 text-xs font-bold text-rose-700 dark:text-rose-300">
          ⚠ Error: {statusMessage}
        </div>
      )}

      {/* Quiz Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 dark:bg-slate-950/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800/60">
        <div className="md:col-span-2 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Título del Examen
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Descripción / Instrucciones
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm text-slate-900 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
            Puntaje Mínimo de Aprobación (%)
          </label>
          <input
            type="number"
            min={50}
            max={100}
            value={minPassScore}
            onChange={(e) => setMinPassScore(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-sm font-bold text-slate-900 dark:text-white"
          />
          <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
            Porcentaje necesario para aprobar el examen (estándar aviación:
            70%).
          </p>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
            Preguntas del Examen ({questions.length})
          </h3>
          <button
            type="button"
            onClick={handleAddQuestion}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-[#1a80ff] hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            ➕ Añadir Pregunta
          </button>
        </div>

        {questions.map((q, qIndex) => (
          <div
            key={q.id || qIndex}
            className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-4 shadow-2xs"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-3">
              <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                Pregunta #{qIndex + 1}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveQuestion(qIndex)}
                className="text-xs font-semibold text-rose-500 hover:text-rose-700 transition-colors"
              >
                🗑️ Eliminar Pregunta
              </button>
            </div>

            {/* Question Text */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Enunciado de la Pregunta
              </label>
              <textarea
                rows={2}
                value={q.question}
                onChange={(e) =>
                  handleQuestionChange(qIndex, "question", e.target.value)
                }
                placeholder="Escribe el enunciado de la pregunta..."
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2 text-xs text-slate-900 dark:text-white"
              />
            </div>

            {/* Options List */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                Opciones de Respuesta (Marca la respuesta correcta ✓)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {q.options.map((opt, oIndex) => {
                  const isCorrect = q.correctAnswerIndex === oIndex;
                  return (
                    <div
                      key={oIndex}
                      className={`flex items-center gap-2 rounded-xl border p-2.5 transition-all ${
                        isCorrect
                          ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30"
                          : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          handleQuestionChange(
                            qIndex,
                            "correctAnswerIndex",
                            oIndex,
                          )
                        }
                        className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 text-[10px] font-bold transition-all ${
                          isCorrect
                            ? "border-emerald-600 bg-emerald-600 text-white"
                            : "border-slate-400 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}
                        title="Marcar como respuesta correcta"
                      >
                        {isCorrect ? "✓" : String.fromCharCode(65 + oIndex)}
                      </button>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) =>
                          handleOptionChange(qIndex, oIndex, e.target.value)
                        }
                        className="w-full bg-transparent text-xs font-medium text-slate-900 dark:text-white focus:outline-hidden"
                        placeholder={`Opción ${String.fromCharCode(65 + oIndex)}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Explicación Pedagógica (Mostrada tras responder)
              </label>
              <textarea
                rows={2}
                value={q.explanation}
                onChange={(e) =>
                  handleQuestionChange(qIndex, "explanation", e.target.value)
                }
                placeholder="Explica por qué esta es la respuesta correcta..."
                className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2 text-xs text-slate-900 dark:text-white"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
