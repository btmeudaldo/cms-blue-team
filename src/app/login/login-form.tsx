"use client";

import { useState } from "react";
import { demoLoginAction, signInAction, signUpAction } from "@/app/actions/auth.actions";

export function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loadingDemo, setLoadingDemo] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  async function handleDemo(role: "student" | "instructor" | "admin") {
    setLoadingDemo(role);
    setFormError(null);
    try {
      const res = (await demoLoginAction(role)) as { error?: string } | undefined;
      if (res?.error) {
        setFormError(res.error);
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
      const res = (isSignUp ? await signUpAction(formData) : await signInAction(formData)) as { error?: string } | undefined;
      if (res?.error) {
        setFormError(res.error);
      }
    } catch (err) {
      setFormError((err as Error).message || "Ocurrió un error inesperado al autenticar.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md space-y-6">
      {/* Quick Demo Login Card with 3 Dedicated Roles */}
      <div className="rounded-2xl border border-blue-100 dark:border-blue-900/50 bg-gradient-to-br from-blue-50/90 to-indigo-50/50 dark:from-blue-950/40 dark:to-indigo-950/20 p-5 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1a80ff]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Prueba Rápida de 1-Clic (Demo)
        </div>
        <p className="text-xs text-slate-600 dark:text-slate-300">
          Explora los distintos roles del sistema inmediatamente sin ingresar contraseña:
        </p>

        <div className="grid grid-cols-3 gap-2">
          {/* Demo Alumno */}
          <button
            type="button"
            disabled={loadingDemo !== null || isSubmitting}
            onClick={() => handleDemo("student")}
            className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 p-2.5 text-center shadow-xs hover:border-[#1a80ff] hover:bg-blue-50/80 dark:hover:bg-blue-950/60 transition-all group disabled:opacity-50 cursor-pointer"
          >
            <span className="text-xl">🎓</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff]">
              {loadingDemo === "student" ? "Cargando..." : "Alumno"}
            </span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400">Ver cursos</span>
          </button>

          {/* Demo Instructor */}
          <button
            type="button"
            disabled={loadingDemo !== null || isSubmitting}
            onClick={() => handleDemo("instructor")}
            className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 p-2.5 text-center shadow-xs hover:border-[#1a80ff] hover:bg-blue-50/80 dark:hover:bg-blue-950/60 transition-all group disabled:opacity-50 cursor-pointer"
          >
            <span className="text-xl">👨‍🏫</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff]">
              {loadingDemo === "instructor" ? "Cargando..." : "Instructor"}
            </span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400">Crear y asignar</span>
          </button>

          {/* Demo Admin */}
          <button
            type="button"
            disabled={loadingDemo !== null || isSubmitting}
            onClick={() => handleDemo("admin")}
            className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-900 p-2.5 text-center shadow-xs hover:border-[#1a80ff] hover:bg-blue-50/80 dark:hover:bg-blue-950/60 transition-all group disabled:opacity-50 cursor-pointer"
          >
            <span className="text-xl">⚙️</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#1a80ff]">
              {loadingDemo === "admin" ? "Cargando..." : "Admin"}
            </span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400">Control total</span>
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
            {!isSignUp && (
              <p className="text-[11px] opacity-90">
                Tip: Si es tu primera vez, puedes hacer clic en <strong>Registrar nuevo usuario</strong> arriba o usar los botones de <strong>Prueba Rápida Demo</strong>.
              </p>
            )}
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
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          {isSignUp && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Rol deseado
              </label>
              <select
                name="role"
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
              >
                <option value="student">Estudiante</option>
                <option value="instructor">Instructor</option>
                <option value="admin">Administrador Global</option>
              </select>
            </div>
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
