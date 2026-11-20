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
  const [dismissed, setDismissed] = useState(false);

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

  if (!unmaximized || dismissed) return null;

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
      className={`flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-sky-200 dark:border-sky-800/80 bg-sky-50/90 dark:bg-sky-950/40 text-sky-950 dark:text-sky-100 shadow-2xs ${
        compact ? "px-3 py-1.5 text-xs" : "px-4 py-2.5 text-xs sm:text-sm"
      }`}
    >
      <div className="flex items-center gap-2">
        <span aria-hidden="true">🖥️</span>
        <span>
          Las diapositivas y diagramas están optimizados para verse con la{" "}
          <strong>ventana maximizada</strong>.
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
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Cerrar aviso"
          title="Ocultar aviso"
          className="rounded-lg px-1.5 py-0.5 text-xs font-bold text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-colors cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
