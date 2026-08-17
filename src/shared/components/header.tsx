"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { signOutAction } from "@/app/actions/auth.actions";
import { ThemeToggle } from "./theme-toggle";
import { CloudStatusBanner } from "./cloud-status-banner";

type HeaderProps = {
  userEmail?: string;
  userName?: string;
  role?: "student" | "admin" | "instructor" | string;
  autoHideOnScroll?: boolean;
  isLoginPage?: boolean;
};

export function Header({
  userEmail,
  userName,
  role,
  autoHideOnScroll = false,
  isLoginPage = false,
}: HeaderProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const isAdmin = role === "admin" || role === "instructor";
  const roleLabel =
    role === "instructor"
      ? "Instructor"
      : role === "admin"
        ? "Director / Admin"
        : "Piloto Alumno";

  useEffect(() => {
    if (!autoHideOnScroll) return;

    function handleScroll() {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      setIsHidden(currentScrollY > 80 && isScrollingDown);
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [autoHideOnScroll]);

  useEffect(() => {
    if (!autoHideOnScroll) return;
    window.dispatchEvent(
      new CustomEvent("lesson-header-visibility", {
        detail: { hidden: isHidden },
      }),
    );
  }, [autoHideOnScroll, isHidden]);

  return (
    <>
      <CloudStatusBanner />
      <header
        className={`sticky top-0 z-40 border-b border-slate-200/70 bg-slate-50/95 dark:border-blue-300/20 dark:bg-[#1980ff]/30 backdrop-blur-xl shadow-sm transition-transform duration-300 relative ${
          autoHideOnScroll && isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="mx-auto flex min-h-[112px] max-w-[1540px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          {/* Brand Logo (Left) */}
          <Link
            href={isLoginPage ? "/" : "/courses"}
            className="group flex shrink-0 items-center justify-start p-0"
          >
            {/* Official horizontal logo, shared with the public website */}
            <img
              src="/logo-blue-team.svg"
              alt="BLUE TEAM Flight School"
              width={720}
              height={180}
              style={{
                width: "clamp(220px, 35vw, 480px)",
                height: "auto",
                maxHeight: "108px",
                objectFit: "contain",
                imageRendering: "-webkit-optimize-contrast",
              }}
              className="block dark:hidden group-hover:scale-105 transition-transform shrink-0"
            />

            <img
              src="/logo-blue-team-white.svg"
              alt="BLUE TEAM Flight School"
              width={720}
              height={180}
              style={{
                width: "clamp(220px, 35vw, 480px)",
                height: "auto",
                maxHeight: "108px",
                objectFit: "contain",
                imageRendering: "-webkit-optimize-contrast",
              }}
              className="hidden dark:block group-hover:scale-105 transition-transform shrink-0"
            />
            <span className="sr-only">BLUE FLIGHT SCHOOL</span>
          </Link>

          {/* Navigation Links (Middle) */}
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } absolute left-3 right-3 top-full z-50 flex-col items-stretch gap-1 rounded-2xl border border-slate-200 bg-white/95 p-3 text-xs font-semibold shadow-xl backdrop-blur-lg dark:border-slate-800 dark:bg-[#0b1426]/95 min-[992px]:static min-[992px]:flex min-[992px]:w-auto min-[992px]:flex-1 min-[992px]:flex-row min-[992px]:items-center min-[992px]:justify-center min-[992px]:gap-8 min-[992px]:rounded-none min-[992px]:border-0 min-[992px]:!bg-transparent min-[992px]:dark:!bg-transparent min-[992px]:!backdrop-blur-none min-[992px]:p-0 min-[992px]:text-sm min-[992px]:shadow-none`}
          >
            <Link
              href="/courses"
              onClick={() => setIsMenuOpen(false)}
              className="whitespace-nowrap px-0 py-1.5 text-[0.95rem] font-semibold text-slate-900 transition-colors duration-200 hover:text-[#1a80ff] dark:text-slate-50 dark:hover:text-white"
            >
              Cursos
            </Link>

            {isAdmin && (
              <>
                <Link
                  href="/admin/courses"
                  onClick={() => setIsMenuOpen(false)}
                  className="whitespace-nowrap px-0 py-1.5 text-[0.95rem] font-semibold text-slate-900 transition-colors duration-200 hover:text-[#1a80ff] dark:text-slate-50 dark:hover:text-white"
                >
                  Gestión
                </Link>
                <Link
                  href="/admin/users"
                  onClick={() => setIsMenuOpen(false)}
                  className="whitespace-nowrap px-0 py-1.5 text-[0.95rem] font-semibold text-slate-900 transition-colors duration-200 hover:text-[#1a80ff] dark:text-slate-50 dark:hover:text-white"
                >
                  Matrículas
                </Link>
                <Link
                  href="/admin/progress"
                  onClick={() => setIsMenuOpen(false)}
                  className="whitespace-nowrap px-0 py-1.5 text-[0.95rem] font-semibold text-slate-900 transition-colors duration-200 hover:text-[#1a80ff] dark:text-slate-50 dark:hover:text-white"
                >
                  Auditoría
                </Link>
              </>
            )}
          </nav>

          {/* User Controls & Mobile Toggle (Right) */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div className="shrink-0">
              <ThemeToggle />
            </div>

            {userEmail ? (
              <div className="flex items-center gap-2 sm:gap-3">
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
                href={isLoginPage ? "/" : "/login"}
                className="inline-flex items-center justify-center rounded-xl bg-[#1a80ff] px-3.5 py-2 text-xs font-bold text-white shadow-sm hover:bg-[#0066e6] transition-colors whitespace-nowrap"
              >
                {isLoginPage ? "← Volver al inicio" : "Iniciar sesión"}
              </Link>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-slate-600 dark:border-slate-700 dark:bg-[#0b1426]/80 dark:text-slate-300 min-[992px]:hidden shrink-0"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
