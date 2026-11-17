"use client";

import Link from "next/link";
import { Fragment, useEffect, useState, type ReactNode } from "react";
import { BASE_PATH } from "@/shared/lib/base-path";

export type RouteId =
  | "courses"
  | "courses/[courseId]"
  | "courses/[courseId]/lessons/[lessonId]"
  | "quizzes"
  | "quizzes/[quizId]"
  | "admin"
  | "admin/audit"
  | "admin/courses"
  | "admin/courses/[courseId]"
  | "admin/courses/[courseId]/lessons/new"
  | "admin/courses/[courseId]/lessons/[lessonId]"
  | "admin/progress"
  | "admin/users";

let historyPatched = false;

function ensureHistoryEvents() {
  if (historyPatched || typeof window === "undefined") return;
  historyPatched = true;
  const origPush = window.history.pushState.bind(window.history);
  const origReplace = window.history.replaceState.bind(window.history);

  window.history.pushState = (...args) => {
    origPush(...args);
    queueMicrotask(() => {
      window.dispatchEvent(new Event("cms:locationchange"));
    });
  };

  window.history.replaceState = (...args) => {
    origReplace(...args);
    queueMicrotask(() => {
      window.dispatchEvent(new Event("cms:locationchange"));
    });
  };
}

function getRelativeSegments(pathname: string): string[] {
  const withoutBase =
    BASE_PATH && pathname.startsWith(BASE_PATH)
      ? pathname.slice(BASE_PATH.length)
      : pathname;
  return withoutBase.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
}

function readSearchParams(): Record<string, string | string[] | undefined> {
  const result: Record<string, string | string[] | undefined> = {};
  const sp = new URLSearchParams(window.location.search);
  for (const key of new Set(sp.keys())) {
    const values = sp.getAll(key);
    result[key] = values.length > 1 ? values : values[0];
  }
  return result;
}

async function renderRouteView(route: RouteId): Promise<ReactNode> {
  const segments = getRelativeSegments(window.location.pathname);

  switch (route) {
    case "courses": {
      const mod = await import("@/app/courses/view");
      return mod.renderCoursesPage();
    }
    case "courses/[courseId]": {
      const courseId = decodeURIComponent(segments[1] ?? "");
      const mod = await import("@/app/courses/[courseId]/view");
      return mod.renderStudentCourseDetailPage({
        params: Promise.resolve({ courseId }),
      });
    }
    case "courses/[courseId]/lessons/[lessonId]": {
      const courseId = decodeURIComponent(segments[1] ?? "");
      const lessonId = decodeURIComponent(segments[3] ?? "");
      const mod = await import(
        "@/app/courses/[courseId]/lessons/[lessonId]/view"
      );
      return mod.renderStudentLessonPage({
        params: Promise.resolve({ courseId, lessonId }),
      });
    }
    case "quizzes": {
      const mod = await import("@/app/quizzes/view");
      return mod.renderQuizzesListPage();
    }
    case "quizzes/[quizId]": {
      const quizId = decodeURIComponent(segments[1] ?? "");
      const mod = await import("@/app/quizzes/[quizId]/view");
      return mod.renderStandaloneQuizPage({
        params: Promise.resolve({ quizId }),
      });
    }
    case "admin": {
      const mod = await import("@/app/admin/view");
      return mod.renderAdminDashboardPage();
    }
    case "admin/audit": {
      const mod = await import("@/app/admin/audit/view");
      return mod.renderAuditPage({
        searchParams: Promise.resolve(readSearchParams()),
      });
    }
    case "admin/courses": {
      const mod = await import("@/app/admin/courses/view");
      return mod.renderAdminCoursesPage();
    }
    case "admin/courses/[courseId]": {
      const courseId = decodeURIComponent(segments[2] ?? "");
      const mod = await import("@/app/admin/courses/[courseId]/view");
      return mod.renderAdminCourseDetailPage({
        params: Promise.resolve({ courseId }),
      });
    }
    case "admin/courses/[courseId]/lessons/new": {
      const courseId = decodeURIComponent(segments[2] ?? "");
      const mod = await import(
        "@/app/admin/courses/[courseId]/lessons/new/view"
      );
      return mod.renderCreateLessonPage({
        params: Promise.resolve({ courseId }),
      });
    }
    case "admin/courses/[courseId]/lessons/[lessonId]": {
      const courseId = decodeURIComponent(segments[2] ?? "");
      const lessonId = decodeURIComponent(segments[4] ?? "");
      const mod = await import(
        "@/app/admin/courses/[courseId]/lessons/[lessonId]/view"
      );
      return mod.renderEditLessonPage({
        params: Promise.resolve({ courseId, lessonId }),
      });
    }
    case "admin/progress": {
      const mod = await import("@/app/admin/progress/view");
      return mod.renderAdminProgressAuditPage();
    }
    case "admin/users": {
      const mod = await import("@/app/admin/users/view");
      return mod.renderAdminUsersPage();
    }
  }
}

function isRedirectError(err: unknown): boolean {
  const message = (err as { message?: string })?.message ?? "";
  const digest = (err as { digest?: string })?.digest ?? "";
  return (
    message.includes("NEXT_REDIRECT") || digest.includes("NEXT_REDIRECT")
  );
}

function isNotFoundError(err: unknown): boolean {
  const message = (err as { message?: string })?.message ?? "";
  const digest = (err as { digest?: string })?.digest ?? "";
  return (
    digest.includes("NEXT_HTTP_ERROR_FALLBACK;404") ||
    digest.includes("NEXT_NOT_FOUND") ||
    message === "Not found" ||
    message === "NEXT_NOT_FOUND"
  );
}

export function ClientRouteLoader({ route }: { route: RouteId }) {
  const [rendered, setRendered] = useState<{
    node: ReactNode;
    url: string;
  } | null>(null);
  const [status, setStatus] = useState<
    "loading" | "ready" | "not_found" | "error"
  >("loading");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    ensureHistoryEvents();
    const triggerReload = () => setReloadToken((n) => n + 1);
    window.addEventListener("popstate", triggerReload);
    window.addEventListener("cms:locationchange", triggerReload);
    window.addEventListener("cms:revalidate", triggerReload);

    return () => {
      window.removeEventListener("popstate", triggerReload);
      window.removeEventListener("cms:locationchange", triggerReload);
      window.removeEventListener("cms:revalidate", triggerReload);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const currentUrl = window.location.pathname + window.location.search;
      if (!rendered || rendered.url !== currentUrl) {
        setStatus("loading");
      }
      setErrorMessage("");
      try {
        const node = await renderRouteView(route);
        if (!cancelled) {
          setRendered({ node, url: currentUrl });
          setStatus("ready");
        }
      } catch (err) {
        if (cancelled) return;
        if (isRedirectError(err)) {
          return;
        }
        if (isNotFoundError(err)) {
          setStatus("not_found");
          return;
        }
        setErrorMessage(
          err instanceof Error
            ? err.message
            : "No se pudo cargar esta sección. Comprueba tu conexión.",
        );
        setStatus("error");
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route, reloadToken]);

  if (status === "not_found") {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="text-4xl">🧭</div>
        <h1 className="text-2xl font-extrabold">Recurso no encontrado</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
          El curso, lección o examen solicitado no existe o no tienes permiso
          para acceder a él.
        </p>
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 rounded-xl bg-[#1a80ff] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#0066e6] transition-colors"
        >
          &larr; Volver a Mis Cursos
        </Link>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="text-4xl">⚠️</div>
        <h1 className="text-xl font-extrabold">Error al cargar la página</h1>
        <p className="text-sm text-rose-600 dark:text-rose-400 max-w-md">
          {errorMessage}
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setReloadToken((n) => n + 1)}
            className="rounded-xl bg-[#1a80ff] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#0066e6] transition-colors cursor-pointer"
          >
            Reintentar
          </button>
          <Link
            href="/courses"
            className="rounded-xl border border-slate-200 dark:border-slate-800 px-5 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Ir a Cursos
          </Link>
        </div>
      </div>
    );
  }

  if (status === "loading" && !rendered) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col items-center justify-center p-6 space-y-3">
        <div className="h-9 w-9 rounded-full border-4 border-[#1a80ff] border-t-transparent animate-spin" />
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          Cargando campus Blue Team...
        </p>
      </div>
    );
  }

  return <Fragment key={rendered?.url}>{rendered?.node}</Fragment>;
}
