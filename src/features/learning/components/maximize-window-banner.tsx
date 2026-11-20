"use client";

import { useEffect, useState } from "react";
import { isWindowUnmaximized } from "../domain/window-maximized";

type MaximizeWindowBannerProps = {
  compact?: boolean;
};

export function MaximizeWindowBanner({
  compact = false,
}: MaximizeWindowBannerProps) {
  const [unmaximized, setUnmaximized] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const evaluate = () => {
      setUnmaximized(
        isWindowUnmaximized({
          availWidth: window.screen?.availWidth ?? 0,
          availHeight: window.screen?.availHeight ?? 0,
          outerWidth: window.outerWidth ?? 0,
          outerHeight: window.outerHeight ?? 0,
          isFullscreen: Boolean(document?.fullscreenElement),
        }),
      );
    };

    const onResize = () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(evaluate, 150);
    };

    evaluate();
    window.addEventListener("resize", onResize);
    document.addEventListener("fullscreenchange", evaluate);
    return () => {
      if (timer) clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("fullscreenchange", evaluate);
    };
  }, []);

  if (!unmaximized) return null;

  async function handleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // Ignore if browser blocks fullscreen
    }
  }

  return (
    <div
      role="status"
      className={`flex items-center justify-between gap-2 rounded-2xl border border-sky-200 dark:border-sky-800/80 bg-sky-50/95 dark:bg-slate-900/95 text-sky-950 dark:text-sky-100 ${
        compact
          ? "px-2.5 py-1 text-[11px] shadow-md backdrop-blur-md whitespace-nowrap"
          : "flex-wrap px-4 py-2.5 text-xs sm:text-sm shadow-2xs"
      }`}
    >
      <div className="flex items-center gap-1.5">
        <span aria-hidden="true">🖥️</span>
        <span>
          {compact ? (
            <>
              Optimizado para <strong>ventana maximizada</strong> o{" "}
              <strong>pantalla completa</strong>
            </>
          ) : (
            <>
              Las diapositivas y diagramas están optimizados para{" "}
              <strong>ventana maximizada</strong> o{" "}
              <strong>pantalla completa</strong>.
            </>
          )}
        </span>
      </div>
      <div className="flex items-center gap-2 ml-auto">
        <button
          type="button"
          onClick={handleFullscreen}
          className="rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] px-2.5 py-1 text-[11px] font-bold text-white transition-colors cursor-pointer"
        >
          ⛶ Pantalla completa
        </button>
      </div>
    </div>
  );
}
