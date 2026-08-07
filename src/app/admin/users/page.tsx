import Link from "next/link";
import { redirect } from "next/navigation";

import { Header } from "@/shared/components/header";
import {
  createNewUserAction,
  updateUserRoleAction,
} from "@/app/actions/enrollment.actions";
import {
  getResilientCourses,
  getResilientEnrollments,
  getResilientProfiles,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";
import { StudentEnrollmentManager } from "@/features/learning/components/student-enrollment-manager";

export default async function AdminUsersPage() {
  const { user, profile: currentProfile } = await getResilientUser();

  if (
    currentProfile?.role !== "admin" &&
    currentProfile?.role !== "instructor"
  ) {
    redirect("/courses");
  }

  const isFullAdmin = currentProfile?.role === "admin";

  // Fetch all profiles resiliently
  const profiles = await getResilientProfiles();

  // Fetch all courses resiliently
  const [courses, enrollments] = await Promise.all([
    getResilientCourses(user.id, true),
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
                asignar cursos a los alumnos. La creación de usuarios y cambio
                de roles de sistema es de gestión exclusiva del{" "}
                <strong>Director de la Escuela</strong>.
              </p>
            </div>
          )}

          {/* Users Table */}
          <div className="lg:col-span-2 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
            <div className="border-b border-slate-100 dark:border-slate-800 p-6">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Usuarios Registrados ({manageableProfiles.length})
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {isFullAdmin
                  ? "Modifica permisos de roles y gestiona las matrículas aeronáuticas de cada alumno."
                  : "Asigna o revoca matrículas en los módulos de aviación."}
              </p>
            </div>

            {manageableProfiles.length === 0 ? (
              <div className="p-8 text-center text-sm text-slate-500 dark:text-slate-400">
                No hay usuarios registrados en el sistema.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
                  <thead className="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="px-6 py-4">Usuario</th>
                      <th className="px-6 py-4">Rol en Escuela</th>
                      <th className="px-6 py-4">
                        Matrículas Asignadas (Desplegable Escalable)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {manageableProfiles.map((u: any) => {
                      // Get initial enrolled course IDs for this student
                      const enrolledCourseIds = enrollments
                        .filter((enrollment) => enrollment.user_id === u.id)
                        .map((enrollment) => enrollment.course_id);

                      return (
                        <tr
                          key={u.id}
                          className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors"
                        >
                          <td className="px-6 py-4">
                            <div className="font-bold text-slate-900 dark:text-white text-sm">
                              {u.full_name || u.email?.split("@")[0]}
                            </div>
                            <div className="text-slate-400 dark:text-slate-500 font-mono text-[11px]">
                              {u.email}
                            </div>
                          </td>

                          <td className="px-6 py-4">
                            {isFullAdmin ? (
                              <form
                                action={async (formData: FormData) => {
                                  "use server";
                                  const newRole = String(
                                    formData.get("role") ?? "student",
                                  ) as any;
                                  await updateUserRoleAction(u.id, newRole);
                                }}
                                className="flex items-center gap-2"
                              >
                                <select
                                  name="role"
                                  defaultValue={u.role || "student"}
                                  className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:border-[#1a80ff]"
                                >
                                  <option value="student">Piloto Alumno</option>
                                  <option value="instructor">
                                    Instructor de Vuelo
                                  </option>
                                  <option value="admin">
                                    Director / Admin
                                  </option>
                                </select>
                                <button
                                  type="submit"
                                  className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-[#1a80ff] transition-colors cursor-pointer"
                                >
                                  Guardar
                                </button>
                              </form>
                            ) : (
                              <span
                                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                                  u.role === "admin"
                                    ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
                                    : u.role === "instructor"
                                      ? "bg-blue-50 dark:bg-blue-950/60 text-[#1a80ff] border border-blue-200 dark:border-blue-800"
                                      : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                                }`}
                              >
                                {u.role === "admin"
                                  ? "Director / Admin"
                                  : u.role === "instructor"
                                    ? "Instructor de Vuelo"
                                    : "Piloto Alumno"}
                              </span>
                            )}
                          </td>

                          <td className="px-6 py-4">
                            {/* Scalable Multi-Select Component for 50-100+ Courses */}
                            <StudentEnrollmentManager
                              userId={u.id}
                              userName={u.full_name || u.email?.split("@")[0]}
                              courses={courses || []}
                              initialEnrolledCourseIds={enrolledCourseIds}
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
