import Link from "next/link";
import { summarizeCourseProgress } from "@/features/learning/domain/course-progress";
import { notFound } from "next/navigation";

import { Header } from "@/shared/components/header";
import {
  getResilientCourseDetail,
  getResilientInPersonExams,
  getResilientQuizAttempts,
  getResilientQuizzes,
  getResilientUser,
  getResilientUserProgress,
} from "@/shared/lib/supabase/resilient";
import { checkCourseCertificateEligibility } from "@/features/learning/domain/course-completion";
import { CourseCertificateCard } from "@/features/learning/components/course-certificate-card";

export default async function StudentCourseDetailPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const { user, profile, isDemo } = await getResilientUser();
  const role = profile?.role ?? "student";
  const isAdmin = role === "admin" || role === "instructor";

  // Fetch course, progress, quizzes, quiz attempts and in-person exams concurrently
  const [course, userProgress, quizzes, quizAttempts, inPersonExams] = await Promise.all([
    getResilientCourseDetail(courseId, isDemo),
    getResilientUserProgress(user.id, isDemo),
    getResilientQuizzes(),
    getResilientQuizAttempts(user.id),
    getResilientInPersonExams(user.id),
  ]);

  if (!course) notFound();

  // Sort lessons
  const lessons = (course.lessons || []).sort(
    (a: any, b: any) => a.sequence_order - b.sequence_order,
  );

  const summary = summarizeCourseProgress(
    { id: course.id, lessons },
    userProgress ?? [],
    quizzes ?? [],
    quizAttempts ?? [],
  );
  const completedLessonsCount = summary.advancedLessonsCount;
  const courseQuizzes = summary.quizzes;
  const passedQuizzesCount = summary.passedQuizzesCount;
  const progressPercent = summary.progressPercent;
  const isFullyCompleted = summary.isFullyAdvanced;
  const hasPendingQuizzes = summary.hasPendingQuizzes;

  const certificateEligibility = checkCourseCertificateEligibility(
    course,
    userProgress ?? [],
    inPersonExams ?? [],
    quizAttempts ?? [],
    user.id,
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={role}
      />

      <main className="flex-1 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link
            href="/courses"
            className="hover:text-[#1a80ff] transition-colors"
          >
            Mis Cursos
          </Link>
          <span>&rsaquo;</span>
          <span className="text-slate-900 dark:text-white truncate">
            {course.title}
          </span>
        </div>

        {/* Course Header Banner */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 px-3 py-1 text-xs font-bold text-[#1a80ff]">
                <span className="h-2 w-2 rounded-full bg-[#1a80ff]"></span>
                Curso de Formación
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {course.title}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {course.description || "Sin descripción proporcionada."}
              </p>
            </div>

            {lessons.length > 0 && (
              <Link
                href={`/courses/${course.slug || course.id}/lessons/${lessons[0].slug || lessons[0].id}`}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1a80ff] px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all shrink-0"
              >
                <span>
                  {completedLessonsCount > 0
                    ? "Continuar Aprendizaje"
                    : "Comenzar Curso"}
                </span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            )}
          </div>

          {/* Progress Bar (Student) vs Instructor Supervision Bar (Admin/Instructor) */}
          {isAdmin ? (
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-blue-50/50 dark:bg-blue-950/20 rounded-2xl p-4 border border-blue-100 dark:border-blue-900/40">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1a80ff] text-white font-bold text-base">
                  👨‍🏫
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                    Supervisión Docente y Control Académico
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {lessons.length} lecciones con control de lectura y{" "}
                    {courseQuizzes.length} evaluaciones teóricas activas.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/admin/progress"
                  className="rounded-xl bg-[#1a80ff] px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#0066e6] transition-colors"
                >
                  <span>📊 Ver Expedientes de Alumnos</span>
                </Link>
                <Link
                  href="/admin/courses"
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span>✏️ Gestionar Cursos</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-400">
                <span>Mi avance en el curso</span>
                <span>
                  {completedLessonsCount}/{lessons.length} lecciones &middot;{" "}
                  {passedQuizzesCount}/{courseQuizzes.length} exámenes (
                  {progressPercent}%)
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">{`Lecturas verificadas: ${summary.readLessonsCount}/${lessons.length}`}</p>
              <div className="h-2.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 rounded-full ${
                    isFullyCompleted
                      ? "bg-emerald-500"
                      : hasPendingQuizzes
                        ? "bg-amber-500"
                        : "bg-[#1a80ff]"
                  }`}
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Official Course Certificate Status & Download */}
        <CourseCertificateCard
          course={course}
          student={{
            id: user.id,
            full_name: profile?.full_name,
            email: user.email || "",
            dni_nie: profile?.dni_nie,
          }}
          eligibility={certificateEligibility}
        />

        {/* Syllabus / Lessons & Quizzes List */}
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Contenido del Curso y Evaluaciones</span>
            <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              ({lessons.length} temas)
            </span>
          </h2>

          {lessons.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center text-slate-500 dark:text-slate-400 text-sm">
              Este curso no tiene lecciones creadas todavía.
            </div>
          ) : (
            <div className="space-y-4">
              {lessons.map((lesson: any, index: number) => {
                const {
                  quiz,
                  attempt: quizAttempt,
                  quizPassed,
                  readingCompleted,
                  advanced: isCompleted,
                } = summary.lessons[index];

                return (
                  <div key={lesson.id} className="space-y-2">
                    {/* Lesson Main Row */}
                    <Link
                      href={`/courses/${course.slug || course.id}/lessons/${lesson.slug || lesson.id}`}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-xs card-hover transition-all group"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold text-sm transition-colors ${
                            isCompleted
                              ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                              : "bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] border border-blue-100 dark:border-blue-900 group-hover:bg-[#1a80ff] group-hover:text-white"
                          }`}
                        >
                          {isCompleted ? "✓" : index + 1}
                        </div>

                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff] transition-colors">
                              {lesson.title}
                            </h3>
                            {isCompleted && (
                              <span className="rounded-full bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                                {readingCompleted
                                  ? "Lectura OK"
                                  : "Examen aprobado · Lectura pendiente"}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            {lesson.word_count || 0} palabras &middot; Tiempo
                            mín. exigido: {lesson.min_seconds}s
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="hidden sm:inline-block text-xs font-bold text-[#1a80ff] opacity-0 group-hover:opacity-100 transition-opacity">
                          Estudiar lección
                        </span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-blue-50 dark:group-hover:bg-slate-700 group-hover:text-[#1a80ff] transition-colors">
                          &rarr;
                        </div>
                      </div>
                    </Link>

                    {/* Associated Quiz Row (Displayed underneath lesson if available) */}
                    {quiz && (
                      <div className="ml-6 sm:ml-12 pl-4 border-l-2 border-slate-200 dark:border-slate-800">
                        {quizPassed ? (
                          <Link
                            href={`/quizzes/${quiz.id}`}
                            className="flex items-center justify-between rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 p-3 text-xs transition-all hover:bg-emerald-100/70"
                          >
                            <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300">
                              <span>📝</span>
                              <span>{quiz.title}</span>
                              <span className="rounded-full bg-emerald-200 dark:bg-emerald-900 px-2 py-0.5 text-[10px] font-black text-emerald-900 dark:text-emerald-200">
                                ✓ Examen Aprobado (
                                {quizAttempt.score_percentage}%)
                              </span>
                            </div>
                            <span className="font-bold text-emerald-700 dark:text-emerald-400 hover:underline">
                              Revisar Examen &rarr;
                            </span>
                          </Link>
                        ) : isCompleted ? (
                          <Link
                            href={`/quizzes/${quiz.id}`}
                            className="flex items-center justify-between rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 p-3 text-xs transition-all hover:bg-blue-100 dark:hover:bg-blue-900/50"
                          >
                            <div className="flex items-center gap-2 font-bold text-[#1a80ff]">
                              <span>📝</span>
                              <span>{quiz.title}</span>
                              <span className="rounded-full bg-blue-200 dark:bg-blue-900 px-2 py-0.5 text-[10px] font-black text-[#1a80ff] dark:text-blue-200">
                                ✨ Habilitado (70% Mín.)
                              </span>
                            </div>
                            <span className="font-extrabold text-[#1a80ff] hover:underline">
                              Iniciar Examen Teórico &rarr;
                            </span>
                          </Link>
                        ) : (
                          <div className="flex items-center justify-between rounded-xl bg-slate-100/80 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 p-3 text-xs opacity-75">
                            <div className="flex items-center gap-2 font-semibold text-slate-500 dark:text-slate-400">
                              <span>🔒</span>
                              <span>{quiz.title}</span>
                            </div>
                            <span className="text-[11px] font-medium text-slate-400 italic">
                              Completa la lectura para desbloquear
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
