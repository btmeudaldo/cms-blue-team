"use client";

import { useEffect, useState } from "react";
import {
  listLessonMediaAction,
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
  uploadCroppedMediaFile,
} from "@/features/learning/domain/media-upload";
import { withBasePath } from "@/shared/lib/base-path";

type MediaLibraryTabProps = {
  onSelect: (url: string, filename: string) => void;
};

const COURSE_FILTERS: { id: MediaCourseTag | "all"; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "C172", label: "C172" },
  { id: "DA40", label: "DA40" },
  { id: "DA42", label: "DA42" },
  { id: "MCC", label: "APS MCC" },
  { id: "general", label: "General" },
];

export function MediaLibraryTab({ onSelect }: MediaLibraryTabProps) {
  const [items, setItems] = useState<LessonMediaItem[]>([]);
  const [search, setSearch] = useState("");
  const [courseTag, setCourseTag] = useState<MediaCourseTag | "all">("all");
  const [loading, setLoading] = useState(true);
  const [cropItem, setCropItem] = useState<LessonMediaItem | null>(null);
  const [localSyncActive, setLocalSyncActive] = useState(false);

  useEffect(() => {
    void checkLocalMediaSyncServer().then(setLocalSyncActive);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await listLessonMediaAction({ search, courseTag, limit: 250 });
        if (!cancelled) setItems(res);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }, 200);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [search, courseTag]);

  async function handleSaveCrop(
    target: LessonMediaItem,
    result: ImageCropSaveResult,
  ) {
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
    setCropItem(null);
  }

  async function handleRestoreOriginal(target: LessonMediaItem) {
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
    setCropItem(null);
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar imagen por nombre..."
          className="flex-1 min-w-[180px] rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:border-[#1a80ff] focus:outline-hidden"
        />
        <div className="flex flex-wrap gap-1">
          {COURSE_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setCourseTag(f.id)}
              className={`px-2.5 py-1 rounded-lg border text-[11px] font-bold cursor-pointer transition-colors ${courseTag === f.id
                  ? "bg-[#1a80ff] border-[#1a80ff] text-white"
                  : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-[#1a80ff]"
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="py-10 text-center text-xs text-slate-400">
          Cargando biblioteca de medios...
        </div>
      ) : items.length === 0 ? (
        <div className="py-10 text-center text-xs text-slate-400 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
          No hay imágenes registradas todavía. Sube una desde la pestaña &quot;Subir Archivo&quot;.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-72 overflow-y-auto pr-1">
          {items.map((item) => {
            const isCropped = Boolean(
              item.original_url && item.original_url !== item.url,
            );
            return (
              <div
                key={item.id}
                className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-1.5 hover:border-[#1a80ff] transition-all"
              >
                <button
                  type="button"
                  onClick={() => onSelect(item.url, item.filename)}
                  className="w-full text-left cursor-pointer"
                  title={`Insertar ${item.filename}`}
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-white dark:bg-slate-900 mb-1.5 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={withBasePath(item.url)}
                      alt={item.filename}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                    {isCropped && (
                      <span className="absolute top-1 left-1 rounded bg-emerald-600/90 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                        ✂️
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-1 px-0.5 pr-7">
                    <span className="truncate text-[11px] font-semibold text-slate-700 dark:text-slate-200">
                      {item.filename}
                    </span>
                    <span className="shrink-0 rounded bg-slate-200 dark:bg-slate-800 px-1 py-0.5 text-[9px] font-bold text-slate-600 dark:text-slate-400">
                      {item.course_tag}
                    </span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCropItem(item);
                  }}
                  title="Recortar imagen"
                  aria-label={`Recortar ${item.filename}`}
                  className="absolute bottom-1.5 right-1.5 rounded-md border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 px-1.5 py-0.5 text-[10px] font-bold text-[#1a80ff] hover:bg-[#1a80ff] hover:text-white transition-colors cursor-pointer"
                >
                  ✂️
                </button>
              </div>
            );
          })}
        </div>
      )}

      {cropItem && (
        <ImageCropModal
          isOpen={true}
          imageUrl={withBasePath(cropItem.url)}
          originalUrl={
            localSyncActive && isMccPdpFilename(cropItem.filename)
              ? getLocalOriginalPreviewUrl(cropItem.filename)
              : cropItem.original_url
                ? withBasePath(cropItem.original_url)
                : null
          }
          filename={cropItem.filename}
          onSaveCrop={(result) => handleSaveCrop(cropItem, result)}
          onRestoreOriginal={() => handleRestoreOriginal(cropItem)}
          onClose={() => setCropItem(null)}
        />
      )}
    </div>
  );
}
