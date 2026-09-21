"use client";

import { useState } from "react";
import { signInAction, signUpAction } from "@/app/actions/auth.actions";

export function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    setFormMessage(null);

    const formData = new FormData(event.currentTarget);

    try {
      const res = (
        isSignUp ? await signUpAction(formData) : await signInAction(formData)
      ) as { error?: string; message?: string } | undefined;
      if (res?.error) {
        setFormError(res.error);
      } else if (res?.message) {
        setFormMessage(res.message);
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
              setFormMessage(null);
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

        {formMessage && (
          <p
            role="status"
            className="rounded-xl bg-blue-50 p-3.5 text-sm text-blue-800 dark:bg-blue-950/30 dark:text-blue-200"
          >
            {formMessage}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
              >
                Nombre Completo
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Ej. María García"
                required
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
            >
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@empresa.com"
              required
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
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
                ? "Crear cuenta"
                : "Ingresar a la plataforma"}
          </button>
        </form>
      </div>
    </div>
  );
}
