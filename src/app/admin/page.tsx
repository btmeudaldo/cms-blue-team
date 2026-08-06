import Link from "next/link";
import { redirect } from "next/navigation";

import { Header } from "@/shared/components/header";
import {
  getResilientAllProgress,
  getResilientCourses,
  getResilientEnrollments,
  getResilientProfiles,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";

export default async function AdminDashboardPage() {
  const { user, profile } = await getResilientUser();

  if (profile?.role !== "admin" && profile?.role !== "instructor") {
    redirect("/courses");
  }

  const courses = await getResilientCourses(user.id, true);
  const profiles = await getResilientProfiles();
  const [progressList, enrollments] = await Promise.all([
    getResilientAllProgress(),
    getResilientEnrollments(),
  ]);

  const coursesCount = courses.length;
  const lessonsCount = courses.reduce(
    (acc: number, c: any) => acc + (c.lessons?.length || 0),
    0,
  );
  const enrollmentsCount = enrollments.length;
  const completedProgressCount = progressList.filter(
    (p: any) => p.is_completed,
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={profile?.role}
      />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-950/60 px-3 py-1 text-xs font-bold text-[#1a80ff] mb-2">
              Panel de Administración CMS
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Gestión General de Instructor
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Administra contenidos educativos, edita módulos, matricula alumnos
              y audita el tiempo real de estudio.
            </p>
          </div>

          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            &larr; Ver Vista de Alumno
          </Link>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-400 dark:text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">
                Cursos Totales
              </span>
              <span className="text-xl">📚</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {coursesCount || 0}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Módulos publicados
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-400 dark:text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">
                Lecciones
              </span>
              <span className="text-xl">📖</span>
            </div>
            <div className="text-3xl font-extrabold text-[#1a80ff]">
              {lessonsCount || 0}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Temas creados
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-400 dark:text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">
                Matrículas
              </span>
              <span className="text-xl">👥</span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
              {enrollmentsCount || 0}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Asignaciones de alumnos
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-slate-400 dark:text-slate-500">
              <span className="text-xs font-bold uppercase tracking-wider">
                Lecciones Completadas
              </span>
              <span className="text-xl">✅</span>
            </div>
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
              {completedProgressCount || 0}
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Verificadas por el servidor
            </p>
          </div>
        </div>

        {/* Quick Management Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/admin/courses"
            className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs card-hover transition-all space-y-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] text-xl font-bold group-hover:bg-[#1a80ff] group-hover:text-white transition-colors">
              📘
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff] transition-colors">
                Gestión de Cursos y Lecciones
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Crea nuevos cursos, edita lecciones existentes y ajusta las
                reglas de tiempo mínimo exigido.
              </p>
            </div>
            <div className="text-xs font-bold text-[#1a80ff] flex items-center gap-1">
              Administrar contenidos &rarr;
            </div>
          </Link>

          <Link
            href="/admin/users"
            className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs card-hover transition-all space-y-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] text-xl font-bold group-hover:bg-[#1a80ff] group-hover:text-white transition-colors">
              🎓
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff] transition-colors">
                Matrículas de Estudiantes
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Asigna alumnos a cursos específicos, gestiona desmatriculaciones
                y modifica roles de usuario.
              </p>
            </div>
            <div className="text-xs font-bold text-[#1a80ff] flex items-center gap-1">
              Administrar alumnos &rarr;
            </div>
          </Link>

          <Link
            href="/admin/progress"
            className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xs card-hover transition-all space-y-4"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] text-xl font-bold group-hover:bg-[#1a80ff] group-hover:text-white transition-colors">
              ⏱️
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff] transition-colors">
                Auditoría de Tiempos Real
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Inspecciona las marcas de inicio, término y segundos
                transcurridos registrados en el servidor.
              </p>
            </div>
            <div className="text-xs font-bold text-[#1a80ff] flex items-center gap-1">
              Ver registros de auditoría &rarr;
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
