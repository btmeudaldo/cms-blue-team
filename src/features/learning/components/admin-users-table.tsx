"use client";

import { useMemo, useState } from "react";
import { StudentEnrollmentManager } from "./student-enrollment-manager";

type AdminUsersTableProps = {
  manageableProfiles: any[];
  courses: any[];
  enrollments: any[];
  isFullAdmin: boolean;
  updateUserRoleAction: (userId: string, newRole: any) => Promise<any>;
};

export function AdminUsersTable({
  manageableProfiles,
  courses,
  enrollments,
  isFullAdmin,
  updateUserRoleAction,
}: AdminUsersTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");

  // Create enrollment map
  const userEnrollmentMap = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const e of enrollments || []) {
      if (!map.has(e.user_id)) {
        map.set(e.user_id, []);
      }
      map.get(e.user_id)!.push(e.course_id);
    }
    return map;
  }, [enrollments]);

  // Filtered users list
  const filteredUsers = useMemo(() => {
    return (manageableProfiles || []).filter((u: any) => {
      // Role filter
      if (roleFilter !== "all" && u.role !== roleFilter) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase().trim();
        const name = (u.full_name || "").toLowerCase();
        const email = (u.email || "").toLowerCase();

        if (!name.includes(q) && !email.includes(q)) {
          return false;
        }
      }

      return true;
    });
  }, [manageableProfiles, roleFilter, searchQuery]);

  return (
    <div className="lg:col-span-2 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden space-y-0">
      {/* Header & Filter Controls */}
      <div className="border-b border-slate-100 dark:border-slate-800 p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Gestión de Usuarios y Matrículas ({filteredUsers.length} de{" "}
              {manageableProfiles.length})
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              {isFullAdmin
                ? "Modifica permisos de roles y gestiona las matrículas aeronáuticas de cada alumno."
                : "Asigna o revoca matrículas en los módulos de aviación."}
            </p>
          </div>
        </div>

        {/* Search Input & Role Filter Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Real-time Instant Search Box */}
          <div className="relative flex-1 w-full">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
              🔍
            </span>
            <input
              type="text"
              placeholder="Buscar por nombre de alumno o correo electrónico..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pl-10 pr-4 py-2 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-bold p-1 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Role Filter Select (Admin ONLY) */}
          {isFullAdmin && (
            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
              className="w-full sm:w-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2 text-xs font-semibold text-slate-900 dark:text-white focus:border-[#1a80ff] cursor-pointer"
            >
              <option value="all">👥 Todos los Roles</option>
              <option value="student">🎓 Piloto Alumno</option>
              <option value="instructor">👨‍🏫 Instructor de Vuelo</option>
              <option value="admin">⚙️ Director / Admin</option>
            </select>
          )}
        </div>
      </div>

      {/* Users Table */}
      {filteredUsers.length === 0 ? (
        <div className="p-12 text-center text-sm text-slate-500 dark:text-slate-400 space-y-2">
          <div className="text-3xl">🔍</div>
          <p className="font-bold text-slate-700 dark:text-slate-300">
            No se encontraron usuarios o alumnos que coincidan con la búsqueda
          </p>
          <p className="text-xs text-slate-400">
            Comprueba el nombre o correo ingresado en el buscador.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-slate-800/60 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4">Usuario / Alumno</th>
                <th className="px-6 py-4">Rol en Escuela</th>
                <th className="px-6 py-4">
                  Matrículas Asignadas (Desplegable Escalable)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredUsers.map((u: any) => {
                const enrolledCourseIds = userEnrollmentMap.get(u.id) || [];

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
                            const newRole = String(
                              formData.get("role") ?? "student",
                            );
                            await updateUserRoleAction(u.id, newRole);
                          }}
                          className="flex items-center gap-2"
                        >
                          <select
                            name="role"
                            defaultValue={u.role || "student"}
                            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:border-[#1a80ff] cursor-pointer"
                          >
                            <option value="student">Piloto Alumno</option>
                            <option value="instructor">
                              Instructor de Vuelo
                            </option>
                            <option value="admin">Director / Admin</option>
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
  );
}
