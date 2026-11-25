"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  restoreLessonMediaOriginalAction,
  updateLessonMediaCropAction,
  type LessonMediaItem,
  type MediaCourseTag,
} from "@/app/actions/media.actions";
import {
  ImageCropModal,
  type ImageCropSaveResult,
} from "@/features/learning/components/image-crop-modal";
import {
  checkLocalMediaSyncServer,
  getLocalOriginalPreviewUrl,
  isMccPdpFilename,
  restoreLocalMediaOriginal,
  stripUrlQuery,
  uploadCroppedMediaFile,
} from "@/features/learning/domain/media-upload";
import { withBasePath } from "@/shared/lib/base-path";

const COURSE_FILTERS: Array<{ id: MediaCourseTag | "all"; label: string }> = [
  { id: "all", label: "Todos" },
  { id: "MCC", label: "APS MCC" },
  { id: "C172", label: "C172" },
  { id: "DA40", label: "DA40" },
  { id: "DA42", label: "DA42" },
  { id: "general", label: "General" },
];

type CropStatusFilter = "all" | "uncropped" | "cropped";

export function AdminMediaClientView({
  initialItems,
}: {
  initialItems: LessonMediaItem[];
}) {
  const [items, setItems] = useState<LessonMediaItem[]>(initialItems);
  const [search, setSearch] = useState("");
  const [courseTag, setCourseTag] = useState<MediaCourseTag | "all">("MCC");
  const [cropFilter, setCropFilter] = useState<CropStatusFilter>("all");
  const [activeItem, setActiveItem] = useState<LessonMediaItem | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [localSyncActive, setLocalSyncActive] = useState<boolean | null>(null);
  const [previewBust, setPreviewBust] = useState<Record<string, number>>({});

  useEffect(() => {
    void checkLocalMediaSyncServer().then(setLocalSyncActive);
  }, []);

  const stats = useMemo(() => {
    const scope =
      courseTag === "all"
        ? items
        : items.filter((item) => item.course_tag === courseTag);
    const croppedCount = scope.filter(
      (item) => item.original_url && item.original_url !== item.url,
    ).length;
    return {
      total: scope.length,
      cropped: croppedCount,
      uncropped: scope.length - croppedCount,
    };
  }, [items, courseTag]);

  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((item) => {
      if (courseTag !== "all" && item.course_tag !== courseTag) return false;
      const isCropped = Boolean(
        item.original_url && item.original_url !== item.url,
      );
      if (cropFilter === "cropped" && !isCropped) return false;
      if (cropFilter === "uncropped" && isCropped) return false;
      if (q && !item.filename.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [items, courseTag, cropFilter, search]);

  async function handleSaveCrop(
    target: LessonMediaItem,
    result: ImageCropSaveResult,
  ) {
    setBusyId(target.id);
    setFeedback(null);
    try {
      const uploaded = await uploadCroppedMediaFile({
        file: result.file,
        targetFilename: target.filename,
      });

      const updated = await updateLessonMediaCropAction({
        id: target.id,
        url: uploaded.url,
        originalUrl: uploaded.canonicalUrl,
        width: result.width,
        height: result.height,
        sizeBytes: result.sizeBytes,
      });

      setItems((prev) =>
        prev.map((row) => (row.id === updated.id ? updated : row)),
      );
      setPreviewBust((prev) => ({ ...prev, [updated.id]: Date.now() }));
      setActiveItem(null);

      const syncLabel =
        uploaded.syncedMode === "local-hostalia"
          ? "sobrescrito en Hostalia, IMAGENES_URLS.json y Supabase (?v=)"
          : uploaded.syncedMode === "hostalia-php"
            ? "sobrescrito en Hostalia y Supabase (?v=)"
            : "subido a Supabase Storage y sincronizado";

      setFeedback(
        `✅ ${updated.filename} (${result.width}×${result.height} px) ${syncLabel}.`,
      );
    } finally {
      setBusyId(null);
    }
  }

  async function handleRestoreOriginal(target: LessonMediaItem) {
    setBusyId(target.id);
    setFeedback(null);
    try {
      const localRestore = await restoreLocalMediaOriginal(target.filename);
      const updated = await restoreLessonMediaOriginalAction({
        id: target.id,
        ...(localRestore.ok
          ? {
            width: localRestore.width,
            height: localRestore.height,
            sizeBytes: localRestore.sizeBytes,
          }
          : {}),
      });
      setItems((prev) =>
        prev.map((row) => (row.id === updated.id ? updated : row)),
      );
      setPreviewBust((prev) => ({ ...prev, [updated.id]: Date.now() }));
      setActiveItem((prev) => (prev?.id === updated.id ? null : prev));
      setFeedback(
        `↺ Lámina original restaurada para ${updated.filename}${localRestore.ok ? " (Hostalia e IMAGENES_URLS.json actualizados)" : ""
        }.`,
      );
    } catch (err) {
      setFeedback(
        `⚠️ ${err instanceof Error ? err.message : "No se pudo restaurar."}`,
      );
    } finally {
      setBusyId(null);
    }
  }

  async function handleCopyUrl(item: LessonMediaItem) {
    try {
      await navigator.clipboard.writeText(stripUrlQuery(item.url));
      setCopiedId(item.id);
      setTimeout(() => {
        setCopiedId((cur) => (cur === item.id ? null : cur));
      }, 1500);
    } catch {
      // Clipboard API unavailable
    }
  }

  function resolvePreviewSrc(item: LessonMediaItem): string {
    const base = withBasePath(item.url);
    const bust = previewBust[item.id];
    if (!bust || base.includes("?v=")) return base;
    return `${base}${base.includes("?") ? "&" : "?"}v=${bust}`;
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-8 space-y-6">
      {/* Header & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
            <Link href="/admin" className="text-[#1a80ff] hover:underline">
              ← Panel de Administración
            </Link>
            {localSyncActive === true && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                🟢 Sync Hostalia + IMAGENES_URLS.json activo
              </span>
            )}
            {localSyncActive === false &&
              typeof window !== "undefined" &&
              (window.location.hostname === "localhost" ||
                window.location.hostname === "127.0.0.1") && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 dark:bg-amber-950/60 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800 dark:text-amber-300">
                  🟡 Usa <code className="font-mono">npm run dev:media</code> para sobrescribir en Hostalia y actualizar IMAGENES_URLS.json
                </span>
              )}
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            ✂️ Biblioteca y Recorte de Láminas
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Recorta cualquier lámina conservando exactamente su nombre y URL base en Hostalia (con versión <code className="font-mono text-xs">?v=</code> anti-caché) y copia original de respaldo.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-semibold">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2">
            Total:{" "}
            <span className="font-extrabold text-slate-900 dark:text-white">
              {stats.total}
            </span>
          </div>
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-2 text-emerald-700 dark:text-emerald-300">
            Recortadas:{" "}
            <span className="font-extrabold">{stats.cropped}</span>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3.5 py-2 text-slate-600 dark:text-slate-300">
            Pendientes:{" "}
            <span className="font-extrabold">{stats.uncropped}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-xs">
        <div className="flex flex-wrap items-center gap-2">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por archivo o página (p. ej. p171, windshear)..."
            className="w-72 max-w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 px-3.5 py-2 text-xs text-slate-800 dark:text-slate-200 focus:border-[#1a80ff] focus:outline-hidden"
          />

          <div className="flex flex-wrap gap-1">
            {COURSE_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setCourseTag(f.id)}
                className={`rounded-lg border px-2.5 py-1.5 text-xs font-bold transition-colors cursor-pointer ${courseTag === f.id
                    ? "bg-[#1a80ff] border-[#1a80ff] text-white"
                    : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#1a80ff]"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1">
          {(
            [
              { id: "all", label: "Todas" },
              { id: "uncropped", label: "Sin recortar" },
              { id: "cropped", label: "Recortadas" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCropFilter(tab.id)}
              className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition-colors cursor-pointer ${cropFilter === tab.id
                  ? "bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900"
                  : "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {feedback && (
        <div className="rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/40 px-4 py-2.5 text-xs font-semibold text-blue-900 dark:text-blue-200">
          {feedback}
        </div>
      )}

      {/* Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 py-16 text-center text-sm text-slate-500 dark:text-slate-400">
          No hay imágenes que coincidan con el filtro seleccionado.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item) => {
            const isCropped = Boolean(
              item.original_url && item.original_url !== item.url,
            );
            const isBusy = busyId === item.id;
            const sizeKb = item.size_bytes
              ? `${Math.round(item.size_bytes / 1024)} KB`
              : null;

            return (
              <article
                key={item.id}
                className="flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3 shadow-xs hover:border-[#1a80ff]/60 transition-colors"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-950 mb-3 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={resolvePreviewSrc(item)}
                    alt={item.filename}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                  />
                  <span
                    className={`absolute top-2 left-2 rounded-md px-2 py-0.5 text-[10px] font-extrabold shadow-xs ${isCropped
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-900/75 text-white"
                      }`}
                  >
                    {isCropped ? "✂️ Recortada" : "Original"}
                  </span>
                  <span className="absolute top-2 right-2 rounded-md bg-white/90 dark:bg-slate-900/90 px-1.5 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-200">
                    {item.course_tag}
                  </span>
                </div>

                <div className="space-y-1 flex-1 min-w-0 mb-3">
                  <p
                    className="truncate font-mono text-xs font-bold text-slate-800 dark:text-slate-100"
                    title={item.filename}
                  >
                    {item.filename}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.width && item.height
                      ? `${item.width}×${item.height} px`
                      : "Dimensión auto"}
                    {sizeKb ? ` · ${sizeKb}` : ""}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    disabled={isBusy}
                    onClick={() => setActiveItem(item)}
                    className="flex-1 rounded-xl bg-[#1a80ff] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#0066e6] disabled:opacity-50 cursor-pointer"
                  >
                    ✂️ Recortar
                  </button>
                  {isCropped && (
                    <button
                      type="button"
                      disabled={isBusy}
                      onClick={() => void handleRestoreOriginal(item)}
                      title="Volver a la lámina original completa"
                      className="rounded-xl border border-amber-300 dark:border-amber-700 px-2.5 py-1.5 text-xs font-semibold text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/50 disabled:opacity-50 cursor-pointer"
                    >
                      ↺
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => void handleCopyUrl(item)}
                    title="Copiar URL canónica (sin parámetro de caché)"
                    className="rounded-xl border border-slate-200 dark:border-slate-700 px-2.5 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                  >
                    {copiedId === item.id ? "✓" : "🔗"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {activeItem && (
        <ImageCropModal
          isOpen={true}
          imageUrl={resolvePreviewSrc(activeItem)}
          originalUrl={
            localSyncActive && isMccPdpFilename(activeItem.filename)
              ? getLocalOriginalPreviewUrl(activeItem.filename)
              : activeItem.original_url
                ? withBasePath(activeItem.original_url)
                : null
          }
          filename={activeItem.filename}
          onSaveCrop={(result) => handleSaveCrop(activeItem, result)}
          onRestoreOriginal={() => handleRestoreOriginal(activeItem)}
          onClose={() => setActiveItem(null)}
        />
      )}
    </main>
  );
}
