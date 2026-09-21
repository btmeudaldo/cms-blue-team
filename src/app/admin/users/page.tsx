import Link from "next/link";
import { redirect } from "next/navigation";

import { Header } from "@/shared/components/header";
import {
  createNewUserAction,
  updateUserRoleAction,
} from "@/app/actions/enrollment.actions";
import {
  getResilientEnrollments,
  getResilientProfiles,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";
import { AdminUsersTable } from "@/features/learning/components/admin-users-table";
import { getManageableEnrollmentCourses } from "@/features/learning/infrastructure/manageable-enrollment-courses";

export default async function AdminUsersPage() {
  const { user, profile: currentProfile } = await getResilientUser();

  if (
    currentProfile?.role !== "admin" &&
    currentProfile?.role !== "instructor"
  ) {
    redirect("/courses");
  }

  const isFullAdmin = currentProfile?.role === "admin";

  // Fetch profiles, courses, and enrollments concurrently
  const [profiles, courses, enrollments] = await Promise.all([
    getResilientProfiles(),
    getManageableEnrollmentCourses(),
    getResilientEnrollments(),
  ]);

  const manageableProfiles = isFullAdmin
    ? profiles
    : profiles.filter(
        (profile: { role: string }) => profile.role === "student",
      );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={currentProfile?.full_name}
        role={currentProfile?.role}
      />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Navigation & Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <Link
                href="/admin"
                className="hover:text-[#1a80ff] transition-colors"
              >
                Administración
              </Link>
              <span>&rsaquo;</span>
              <span className="text-slate-900 dark:text-white">
                Matrículas &amp; Usuarios
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Gestión de Usuarios y Asignaciones
            </h1>
          </div>

          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            &larr; Volver al Panel Admin
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Create User Card Form (Admin ONLY) */}
          {isFullAdmin ? (
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-6">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-[10px] font-extrabold mb-1">
                  Exclusivo Director / Administrador
                </div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                  Registrar Nuevo Usuario
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Crea pilotos alumnos o instructores de vuelo.
                </p>
              </div>

              <form action={createNewUserAction} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Ej. Capitán Mateo Rivas"
                    required
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="mateo@blueteam.com"
                    required
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Contraseña Inicial
                  </label>
                  <input
                    name="password"
                    type="password"
                    defaultValue="blueteam"
                    placeholder="••••••••"
                    required
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Rol Inicial
                  </label>
                  <select
                    name="role"
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden transition-all"
                  >
                    <option value="student">Piloto Alumno</option>
                    <option value="instructor">Instructor de Vuelo</option>
                    <option value="admin">Director / Administrador</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#1a80ff] py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] transition-all cursor-pointer"
                >
                  + Registrar Usuario
                </button>
              </form>
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1a80ff]">
                <span>👨‍✈️</span> Modo Instructor de Vuelo
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Como <strong>Instructor de Vuelo</strong> puedes matricular y
                asignar a los alumnos los cursos que has creado o tienes
                asignados. La creación de usuarios y cambio de roles de sistema
                es de gestión exclusiva del{" "}
                <strong>Director de la Escuela</strong>.
              </p>
            </div>
          )}

          {/* Interactive Users & Enrollments Table with Real-Time Search */}
          <AdminUsersTable
            manageableProfiles={manageableProfiles}
            courses={courses || []}
            enrollments={enrollments || []}
            isFullAdmin={isFullAdmin}
            updateUserRoleAction={updateUserRoleAction}
          />
        </div>
      </main>
    </div>
  );
}
