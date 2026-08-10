"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  demoLoginAction,
  demoUserSelectLoginAction,
  signInAction,
  signUpAction,
} from "@/app/actions/auth.actions";

export function LoginForm() {
  const router = useRouter();
  const [isSignUp, setIsSignUp] = useState(false);
  const [loadingDemo, setLoadingDemo] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const [selectedStudentEmail, setSelectedStudentEmail] = useState(
    "student@blueteam.com",
  );
  const [selectedInstructorEmail, setSelectedInstructorEmail] = useState(
    "instructor@blueteam.com",
  );

  async function handleSelectDemoUser(email: string, role: string) {
    setLoadingDemo(email);
    setFormError(null);
    try {
      const res = (await demoUserSelectLoginAction(email, role)) as
        { error?: string; redirectTo?: string } | undefined;
      if (res?.error) {
        setFormError(res.error);
      } else if (res?.redirectTo) {
        router.replace(res.redirectTo);
        router.refresh();
      }
    } catch (err) {
      setFormError((err as Error).message);
    } finally {
      setLoadingDemo(null);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);

    const formData = new FormData(event.currentTarget);

    try {
      const res = (
        isSignUp ? await signUpAction(formData) : await signInAction(formData)
      ) as { error?: string } | undefined;
      if (res?.error) {
        setFormError(res.error);
      }
    } catch (err) {
      setFormError(
        (err as Error).message || "Ocurrió un error inesperado al autenticar.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md space-y-6">
      {/* Quick Demo Login Card with Selectable Dropdowns */}
      <div className="rounded-2xl border border-blue-100 dark:border-blue-900/50 bg-gradient-to-br from-blue-50/90 to-indigo-50/50 dark:from-blue-950/40 dark:to-indigo-950/20 p-5 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a80ff]">
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
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          Acceso Rápido de Prueba (Sin Contraseña)
        </div>

        <div className="space-y-4">
          {/* Student Dropdown & Login */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300">
              🎓 Seleccionar Alumno de Prueba:
            </label>
            <select
              value={selectedStudentEmail}
              onChange={(e) => setSelectedStudentEmail(e.target.value)}
              className="w-full truncate rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs font-semibold text-slate-900 dark:text-white focus:border-[#1a80ff] cursor-pointer"
            >
              <option value="student@blueteam.com">
                🎓 Piloto Alumno BlueTeam (student@blueteam.com)
              </option>
              <option value="alumno1@blueteam.com">
                👤 Carlos Mendoza - Alumno PPL (alumno1@blueteam.com)
              </option>
              <option value="alumno2@blueteam.com">
                👤 Sofía Rodríguez - Alumno CPL (alumno2@blueteam.com)
              </option>
              <option value="alumno3@blueteam.com">
                👤 Alejandro Gómez - Alumno ATPL (alumno3@blueteam.com)
              </option>
              <option value="alumno4@blueteam.com">
                👤 Lucía Fernández - Alumno VFR (alumno4@blueteam.com)
              </option>
              <option value="alumno5@blueteam.com">
                👤 Mateo Navas - Alumno IFR (alumno5@blueteam.com)
              </option>
              <option value="alumno6@blueteam.com">
                👤 Elena Benítez - Alumno PPL (alumno6@blueteam.com)
              </option>
              <option value="alumno7@blueteam.com">
                👤 Javier Morales - Alumno CPL (alumno7@blueteam.com)
              </option>
              <option value="alumno8@blueteam.com">
                👤 Valeria Torres - Alumno ATPL (alumno8@blueteam.com)
              </option>
              <option value="alumno9@blueteam.com">
                👤 Daniel Castillo - Alumno VFR (alumno9@blueteam.com)
              </option>
              <option value="alumno10@blueteam.com">
                👤 Paula Gutiérrez - Alumno IFR (alumno10@blueteam.com)
              </option>
            </select>
            <button
              type="button"
              disabled={loadingDemo !== null}
              onClick={() =>
                handleSelectDemoUser(selectedStudentEmail, "student")
              }
              className="w-full rounded-xl bg-[#1a80ff] py-2.5 text-xs font-bold text-white hover:bg-[#0066e6] transition-all cursor-pointer shadow-xs"
            >
              {loadingDemo === selectedStudentEmail
                ? "Entrando..."
                : "Entrar como Alumno Seleccionado"}
            </button>
          </div>

          {/* Instructor Dropdown & Login */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300">
              👨‍🏫 Seleccionar Instructor de Prueba:
            </label>
            <select
              value={selectedInstructorEmail}
              onChange={(e) => setSelectedInstructorEmail(e.target.value)}
              className="w-full truncate rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 px-3.5 py-2.5 text-xs font-semibold text-slate-900 dark:text-white focus:border-[#1a80ff] cursor-pointer"
            >
              <option value="instructor@blueteam.com">
                👨‍🏫 Instructor de Vuelo BlueTeam (instructor@blueteam.com)
              </option>
              <option value="inst.martinez@blueteam.com">
                ✈️ Capt. Roberto Martínez - PPL/CPL (inst.martinez@blueteam.com)
              </option>
              <option value="inst.alvarez@blueteam.com">
                ✈️ Capt. Laura Álvarez - IFR (inst.alvarez@blueteam.com)
              </option>
              <option value="inst.reyes@blueteam.com">
                ✈️ Capt. Fernando Reyes - Avionica (inst.reyes@blueteam.com)
              </option>
            </select>
            <button
              type="button"
              disabled={loadingDemo !== null}
              onClick={() =>
                handleSelectDemoUser(selectedInstructorEmail, "instructor")
              }
              className="w-full rounded-xl bg-indigo-600 py-2.5 text-xs font-bold text-white hover:bg-indigo-700 transition-all cursor-pointer shadow-xs"
            >
              {loadingDemo === selectedInstructorEmail
                ? "Entrando..."
                : "Entrar como Instructor Seleccionado"}
            </button>
          </div>

          {/* Admin Direct Button */}
          <button
            type="button"
            disabled={loadingDemo !== null}
            onClick={() => handleSelectDemoUser("admin@blueteam.com", "admin")}
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 py-2.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
          >
            <span>⚙️</span> Entrar como Director de Escuela / Administrador
          </button>
        </div>
      </div>

      {/* Main Auth Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl shadow-slate-100 dark:shadow-none space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            {isSignUp ? "Crear una cuenta" : "Iniciar Sesión"}
          </h2>
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setFormError(null);
            }}
            className="text-xs font-semibold text-[#1a80ff] hover:underline cursor-pointer"
          >
            {isSignUp ? "¿Ya tienes cuenta?" : "Registrar nuevo usuario"}
          </button>
        </div>

        {/* Error Alert Message */}
        {formError && (
          <div className="rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 p-3.5 text-xs text-rose-700 dark:text-rose-300 space-y-1">
            <div className="font-bold flex items-center gap-1">
              <span>⚠</span> {formError}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Nombre Completo
              </label>
              <input
                name="fullName"
                type="text"
                placeholder="Ej. María García"
                required
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Correo Electrónico
            </label>
            <input
              name="email"
              type="email"
              placeholder="tu@empresa.com"
              required
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                defaultValue="blueteam"
                placeholder="••••••••"
                required
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 pl-3.5 pr-10 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm p-1 rounded-md cursor-pointer select-none"
                title={
                  showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                }
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {isSignUp && (
            <p className="rounded-xl border border-blue-100 bg-blue-50 px-3.5 py-2.5 text-xs text-blue-800 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-200">
              Las cuentas nuevas se registran como alumnos. Un administrador
              puede asignar otros roles desde el panel de usuarios.
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-[#1a80ff] py-3 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6] hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting
              ? "Verificando..."
              : isSignUp
                ? "Registrar e Ingresar"
                : "Ingresar a la plataforma"}
          </button>
        </form>
      </div>
    </div>
  );
}
