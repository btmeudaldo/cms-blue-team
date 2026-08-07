import Link from "next/link";
import { signOutAction } from "@/app/actions/auth.actions";
import { ThemeToggle } from "./theme-toggle";
import { CloudStatusBanner } from "./cloud-status-banner";

type HeaderProps = {
  userEmail?: string;
  userName?: string;
  role?: "student" | "admin" | "instructor" | string;
};

export function Header({ userEmail, userName, role }: HeaderProps) {
  const isAdmin = role === "admin" || role === "instructor";
  const roleLabel =
    role === "instructor"
      ? "Instructor"
      : role === "admin"
        ? "Director / Admin"
        : "Piloto Alumno";

  return (
    <>
      <CloudStatusBanner />
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 dark:border-slate-800/80 dark:bg-slate-900/90 backdrop-blur-md shadow-xs transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        {/* Brand Logo & Navigation */}
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <Link
            href="/courses"
            className="flex items-center gap-2.5 group shrink-0"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-[#0066e6] to-[#1a80ff] text-white shadow-sm shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg leading-tight tracking-tight text-slate-900 dark:text-white">
                BLUE<span className="text-[#1a80ff]">TEAM</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500">
                Escuela de Aviación
              </span>
            </div>
          </Link>

          {/* Navigation Links with Non-Overlapping Spacing */}
          <nav className="flex items-center gap-1 text-xs sm:text-sm font-semibold">
            <Link
              href="/courses"
              className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[#1a80ff] hover:bg-blue-50/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60 transition-colors"
            >
              Cursos
            </Link>

            {isAdmin && (
              <>
                <Link
                  href="/admin/courses"
                  className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[#1a80ff] hover:bg-blue-50/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60 transition-colors"
                >
                  Gestión
                </Link>
                <Link
                  href="/admin/users"
                  className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[#1a80ff] hover:bg-blue-50/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60 transition-colors hidden sm:inline-block"
                >
                  Matrículas
                </Link>
                <Link
                  href="/admin/progress"
                  className="px-2.5 py-1.5 rounded-lg text-slate-700 hover:text-[#1a80ff] hover:bg-blue-50/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60 transition-colors hidden lg:inline-block"
                >
                  Auditoría
                </Link>
              </>
            )}
          </nav>
        </div>

        {/* User Info & Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <ThemeToggle />

          {userEmail ? (
            <div className="flex items-center gap-3">
              {/* Compact User Name and Role Badge */}
              <div className="hidden sm:flex flex-col items-end leading-tight max-w-[140px] sm:max-w-[160px]">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate w-full text-right">
                  {userName || userEmail.split("@")[0]}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 text-[10px] font-extrabold text-[#1a80ff] mt-0.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1a80ff]"></span>
                  {roleLabel}
                </span>
              </div>

              {/* User Avatar */}
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-extrabold text-xs border border-slate-200 dark:border-slate-700">
                {(userName || userEmail)[0].toUpperCase()}
              </div>

              {/* Logout button */}
              <form action={signOutAction}>
                <button
                  type="submit"
                  title="Cerrar sesión"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-rose-600 hover:bg-rose-50 hover:border-rose-200 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </form>
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-[#1a80ff] px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#0066e6] transition-colors"
            >
              Iniciar sesión
            </Link>
          )}
        </div>
      </div>
    </header>
    </>
  );
}
