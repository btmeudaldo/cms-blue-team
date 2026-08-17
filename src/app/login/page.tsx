import { LoginForm } from "./login-form";
import { Header } from "@/shared/components/header";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col justify-between transition-colors">
      <Header isLoginPage />

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
