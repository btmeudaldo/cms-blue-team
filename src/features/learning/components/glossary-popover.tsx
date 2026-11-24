"use client";

import { useEffect, useMemo, useState } from "react";
import type {
  GlossaryCategory,
  GlossaryEntry,
} from "@/features/learning/content/mcc-glossary";

const CATEGORY_LABELS: Record<
  GlossaryCategory,
  { label: string; badgeClass: string }
> = {
  acronym: {
    label: "Sigla",
    badgeClass:
      "bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300 border-sky-200 dark:border-sky-800",
  },
  system: {
    label: "Sistema",
    badgeClass:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
  },
  speed: {
    label: "Velocidad",
    badgeClass:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  },
  concept: {
    label: "Concepto",
    badgeClass:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  },
};

interface GlossaryPopoverProps {
  entry: GlossaryEntry;
  anchorRect: {
    top: number;
    bottom: number;
    left: number;
    width: number;
  };
  pinned: boolean;
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function GlossaryPopover({
  entry,
  anchorRect,
  pinned,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: GlossaryPopoverProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const cardWidth = 350;
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1200;
  const viewportHeight =
    typeof window !== "undefined" ? window.innerHeight : 800;

  const centerX = anchorRect.left + anchorRect.width / 2;
  const clampedLeft = Math.max(
    12,
    Math.min(centerX - cardWidth / 2, viewportWidth - cardWidth - 12),
  );

  // Flip above trigger if near bottom edge of viewport
  const showAbove = anchorRect.bottom + 175 > viewportHeight && anchorRect.top > 180;
  const topPosition = showAbove ? undefined : anchorRect.bottom + 8;
  const bottomPosition = showAbove
    ? viewportHeight - anchorRect.top + 8
    : undefined;

  const cat = CATEGORY_LABELS[entry.category];

  return (
    <div
      role="tooltip"
      data-glossary-popover="true"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "fixed",
        left: `${clampedLeft}px`,
        top: topPosition !== undefined ? `${topPosition}px` : undefined,
        bottom: bottomPosition !== undefined ? `${bottomPosition}px` : undefined,
        width: `${Math.min(cardWidth, viewportWidth - 24)}px`,
        zIndex: 60,
      }}
      className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl p-3 text-left animate-in fade-in duration-150"
    >
      <div className="flex items-start justify-between gap-2 pb-1.5 border-b border-slate-100 dark:border-slate-800">
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[15px] font-extrabold text-[#0B2E59] dark:text-sky-300">
              {entry.term}
            </span>
            <span
              className={`px-1.5 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wide ${cat.badgeClass}`}
            >
              {cat.label}
            </span>
          </div>
          {entry.expansion && (
            <div className="text-[13px] font-bold text-[#2361A8] dark:text-sky-400 leading-snug mt-0.5">
              {entry.expansion}
            </div>
          )}
        </div>
        {pinned && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar definición"
            className="h-6 w-6 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold shrink-0 cursor-pointer"
          >
            ✕
          </button>
        )}
      </div>

      <p className="text-[13px] text-slate-700 dark:text-slate-200 leading-relaxed mt-1.5">
        {entry.definition}
      </p>

      <div className="mt-2 pt-1 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-[10px] text-slate-500 dark:text-slate-400">
        <span className="truncate">{entry.source}</span>
        <span className="shrink-0 font-medium">
          {pinned ? "Esc para cerrar" : "Clic para fijar"}
        </span>
      </div>
    </div>
  );
}

interface GlossaryDrawerProps {
  open: boolean;
  onClose: () => void;
  entries: GlossaryEntry[];
}

export function GlossaryDrawer({
  open,
  onClose,
  entries,
}: GlossaryDrawerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | GlossaryCategory>("all");

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((entry) => {
      if (category !== "all" && entry.category !== category) return false;
      if (!q) return true;
      return (
        entry.term.toLowerCase().includes(q) ||
        (entry.expansion?.toLowerCase().includes(q) ?? false) ||
        entry.definition.toLowerCase().includes(q)
      );
    });
  }, [entries, query, category]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <aside
        className="absolute right-0 top-0 bottom-0 w-full max-w-lg bg-white dark:bg-slate-900 p-6 shadow-2xl flex flex-col gap-4 border-l border-slate-200 dark:border-slate-800 animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
        aria-label="Glosario oficial A320"
      >
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">📖</span>
            <div>
              <span className="text-[10px] font-extrabold uppercase text-[#1a80ff] tracking-wider block">
                Referencia Oficial FCOM · Procedures
              </span>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Glosario A320 — Siglas y Conceptos ({entries.length})
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="h-8 w-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 font-bold transition-colors cursor-pointer"
            title="Cerrar glosario"
          >
            ✕
          </button>
        </div>

        <div className="space-y-2 shrink-0">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar sigla o concepto (ej. ND, ECAM, Green Dot)..."
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#1a80ff]/50"
            autoFocus
          />

          <div className="flex flex-wrap gap-1.5">
            {(
              [
                ["all", "Todos"],
                ["acronym", "Siglas"],
                ["system", "Sistemas"],
                ["speed", "Velocidades"],
                ["concept", "Conceptos"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setCategory(key)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors cursor-pointer ${
                  category === key
                    ? "bg-[#1a80ff] text-white border-[#1a80ff]"
                    : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto space-y-2 pr-1">
          {filtered.length === 0 ? (
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center py-8">
              No se encontraron términos para &ldquo;{query}&rdquo;.
            </p>
          ) : (
            filtered.map((entry) => {
              const cat = CATEGORY_LABELS[entry.category];
              return (
                <div
                  key={entry.term}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 space-y-1"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-extrabold text-[#0B2E59] dark:text-sky-300">
                        {entry.term}
                      </span>
                      {entry.expansion && (
                        <span className="text-xs font-semibold text-[#2361A8] dark:text-sky-400">
                          — {entry.expansion}
                        </span>
                      )}
                    </div>
                    <span
                      className={`px-1.5 py-0.5 rounded-md border text-[10px] font-bold uppercase shrink-0 ${cat.badgeClass}`}
                    >
                      {cat.label}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed">
                    {entry.definition}
                  </p>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {entry.source}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </aside>
    </div>
  );
}
