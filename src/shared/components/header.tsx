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
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 dark:border-blue-900/40 dark:bg-[#050b18]/90 backdrop-blur-md shadow-xs transition-all p-0">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-0">
          {/* Brand Logo & Navigation */}
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <Link
              href="/courses"
              className="flex items-center group shrink-0 m-0 p-0"
            >
              <img
                src="/logo-largo.png"
                alt="BLUE TEAM Flight School"
                width={800}
                height={273}
                style={{
                  height: "clamp(100px, 10vw, 135px)",
                  width: "auto",
                  objectFit: "contain",
                  margin: 0,
                  padding: 0,
                  display: "block",
                  imageRendering: "-webkit-optimize-contrast",
                }}
                className="dark:hidden group-hover:scale-105 transition-transform shrink-0"
              />
              <img
                src="/logo-largo-blanco.png"
                alt="BLUE TEAM Flight School"
                width={800}
                height={273}
                style={{
                  height: "clamp(100px, 10vw, 135px)",
                  width: "auto",
                  objectFit: "contain",
                  margin: 0,
                  padding: 0,
                  display: "block",
                  imageRendering: "-webkit-optimize-contrast",
                }}
                className="hidden dark:block group-hover:scale-105 transition-transform shrink-0"
              />
              <span className="sr-only">BLUE</span>
              <span className="sr-only">FLIGHT SCHOOL</span>
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
