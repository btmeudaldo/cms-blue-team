import Link from "next/link";
import { LoginForm } from "./login-form";
import { ThemeToggle } from "@/shared/components/theme-toggle";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col justify-between transition-colors">
      {/* Mini top bar */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1a80ff] text-white font-bold text-lg">
            BT
          </div>
          <span className="font-extrabold text-xl text-slate-900 dark:text-white">
            BLUE<span className="text-[#1a80ff]">TEAM</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/"
            className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            &larr; Volver al inicio
          </Link>
        </div>
      </div>

      {/* Center login form */}
      <div className="flex flex-1 items-center justify-center px-4 py-8">
        <LoginForm />
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-slate-400 dark:text-slate-500">
        &copy; {new Date().getFullYear()} Blue Team CMS. Plataforma de Formación
        con Verificación Temporal.
      </footer>
    </main>
  );
}
