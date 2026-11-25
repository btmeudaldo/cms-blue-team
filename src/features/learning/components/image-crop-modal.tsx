"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  applyCropDrag,
  CROP_ASPECT_PRESETS,
  type CropAspectPresetId,
  type CropHandle,
  fitCropToAspectRatio,
  FULL_CROP_RECT,
  type NormalizedCropRect,
  nudgeCropRect,
  toPixelCropRect,
} from "@/features/learning/domain/image-crop";
import {
  checkLocalMediaSyncServer,
  getHostaliaMediaProxyUrl,
  getLocalMediaProxyUrl,
  getLocalOriginalPreviewUrl,
  isLocalhostBrowser,
  isMccPdpFilename,
} from "@/features/learning/domain/media-upload";

export type ImageCropSaveResult = {
  file: File;
  width: number;
  height: number;
  sizeBytes: number;
};

type ImageCropModalProps = {
  isOpen: boolean;
  imageUrl: string;
  originalUrl?: string | null;
  filename: string;
  title?: string;
  onSaveCrop: (result: ImageCropSaveResult) => Promise<void>;
  onRestoreOriginal?: () => Promise<void>;
  onClose: () => void;
};

const RESIZE_HANDLES: Array<{
  handle: Exclude<CropHandle, "move">;
  label: string;
  className: string;
}> = [
    { handle: "nw", label: "Esquina superior izquierda", className: "-top-2 -left-2 cursor-nwse-resize" },
    { handle: "n", label: "Borde superior", className: "-top-2 left-1/2 -translate-x-1/2 cursor-ns-resize" },
    { handle: "ne", label: "Esquina superior derecha", className: "-top-2 -right-2 cursor-nesw-resize" },
    { handle: "e", label: "Borde derecho", className: "top-1/2 -right-2 -translate-y-1/2 cursor-ew-resize" },
    { handle: "se", label: "Esquina inferior derecha", className: "-bottom-2 -right-2 cursor-nwse-resize" },
    { handle: "s", label: "Borde inferior", className: "-bottom-2 left-1/2 -translate-x-1/2 cursor-ns-resize" },
    { handle: "sw", label: "Esquina inferior izquierda", className: "-bottom-2 -left-2 cursor-nesw-resize" },
    { handle: "w", label: "Borde izquierdo", className: "top-1/2 -left-2 -translate-y-1/2 cursor-ew-resize" },
  ];

export function ImageCropModal({
  isOpen,
  imageUrl,
  originalUrl,
  filename,
  title = "Recortar lámina o imagen",
  onSaveCrop,
  onRestoreOriginal,
  onClose,
}: ImageCropModalProps) {
  const headingId = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const pressedOutsideRef = useRef(false);

  const hasDistinctOriginal = Boolean(originalUrl && originalUrl !== imageUrl);
  const [useOriginalSource, setUseOriginalSource] = useState(hasDistinctOriginal);

  const activeRemoteUrl =
    useOriginalSource && originalUrl ? originalUrl : imageUrl;

  const [displaySrc, setDisplaySrc] = useState<string | null>(null);
  const [naturalSize, setNaturalSize] = useState<{ w: number; h: number }>({
    w: 0,
    h: 0,
  });
  const [cropRect, setCropRect] = useState<NormalizedCropRect>(FULL_CROP_RECT);
  const [aspectPreset, setAspectPreset] = useState<CropAspectPresetId>("free");
  const [isLoadingSource, setIsLoadingSource] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [liveAnnouncement, setLiveAnnouncement] = useState<string>("");

  const dragStateRef = useRef<{
    handle: CropHandle;
    startX: number;
    startY: number;
    initialRect: NormalizedCropRect;
    stageWidth: number;
    stageHeight: number;
    pointerId: number;
  } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const selectedRatio = useMemo(
    () => CROP_ASPECT_PRESETS.find((p) => p.id === aspectPreset)?.ratio ?? null,
    [aspectPreset],
  );

  const imageAspect = useMemo(() => {
    if (naturalSize.w > 0 && naturalSize.h > 0) {
      return naturalSize.w / naturalSize.h;
    }
    return 4 / 3;
  }, [naturalSize]);

  // Reset source toggle when modal opens for a new image
  useEffect(() => {
    if (isOpen) {
      setUseOriginalSource(Boolean(originalUrl && originalUrl !== imageUrl));
      setCropRect(FULL_CROP_RECT);
      setAspectPreset("free");
      setErrorMessage(null);
      setLiveAnnouncement("");
    }
  }, [isOpen, imageUrl, originalUrl]);

  // Synchronize native <dialog> top-layer modal open/close state and closedby policy
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.setAttribute("closedby", isSaving ? "none" : "any");

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen, isSaving]);

  // Load image via CORS-safe blob/proxy -> ObjectURL so <canvas> is never tainted and console stays clean
  useEffect(() => {
    if (!isOpen || !activeRemoteUrl) return;
    let cancelled = false;
    let objectUrl: string | null = null;

    async function fetchImageBlob(url: string): Promise<Blob> {
      const res = await fetch(url, {
        mode: "cors",
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      return res.blob();
    }

    async function loadCorsCleanBlob() {
      setIsLoadingSource(true);
      setErrorMessage(null);
      setDisplaySrc(null);
      setNaturalSize({ w: 0, h: 0 });

      const candidates: string[] = [];
      const isDirectLocalOrBlob =
        activeRemoteUrl.startsWith("blob:") ||
        activeRemoteUrl.startsWith("data:") ||
        activeRemoteUrl.startsWith("http://127.0.0.1:") ||
        activeRemoteUrl.startsWith("/");

      if (isDirectLocalOrBlob) {
        candidates.push(activeRemoteUrl);
      } else if (isLocalhostBrowser()) {
        const hasLocalSync = await checkLocalMediaSyncServer();
        if (hasLocalSync) {
          if (isMccPdpFilename(filename)) {
            candidates.push(getLocalOriginalPreviewUrl(filename));
          }
          candidates.push(getLocalMediaProxyUrl(activeRemoteUrl));
        } else {
          // On localhost without dev:media, go straight through Hostalia PHP CORS proxy first
          // so the browser does not emit a blocked cross-origin console error first.
          candidates.push(getHostaliaMediaProxyUrl(activeRemoteUrl));
          candidates.push(activeRemoteUrl);
        }
      } else {
        let sameOrigin = false;
        try {
          sameOrigin =
            typeof window !== "undefined" &&
            new URL(activeRemoteUrl, window.location.origin).origin ===
              window.location.origin;
        } catch { }
        candidates.push(activeRemoteUrl);
        if (!sameOrigin) {
          candidates.push(getHostaliaMediaProxyUrl(activeRemoteUrl));
        }
      }

      for (const candidate of candidates) {
        if (cancelled) return;
        try {
          const blob = await fetchImageBlob(candidate);
          if (cancelled) return;
          objectUrl = URL.createObjectURL(blob);
          setDisplaySrc(objectUrl);
          setIsLoadingSource(false);
          return;
        } catch {
          // Try next CORS-safe candidate
        }
      }

      if (!cancelled) {
        setIsLoadingSource(false);
        setErrorMessage(
          isLocalhostBrowser()
            ? "No se pudo cargar la imagen con permisos CORS para recortar. Inicia el servidor local con 'npm run dev:media' o comprueba tu conexión."
            : "No se pudo cargar la imagen con permisos CORS para recortar.",
        );
      }
    }

    void loadCorsCleanBlob();

    return () => {
      cancelled = true;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [isOpen, activeRemoteUrl, filename]);

  const pixelInfo = useMemo(() => {
    if (naturalSize.w <= 0 || naturalSize.h <= 0) return null;
    return toPixelCropRect(cropRect, naturalSize.w, naturalSize.h);
  }, [cropRect, naturalSize]);

  const handleRequestClose = useCallback(() => {
    if (isSaving) return;
    onClose();
  }, [isSaving, onClose]);

  const handleAspectChange = (presetId: CropAspectPresetId) => {
    setAspectPreset(presetId);
    const ratio =
      CROP_ASPECT_PRESETS.find((p) => p.id === presetId)?.ratio ?? null;
    if (ratio) {
      setCropRect((prev) => fitCropToAspectRatio(prev, ratio, imageAspect));
    }
  };

  const handlePointerDown = (
    handle: CropHandle,
    event: React.PointerEvent<HTMLElement>,
  ) => {
    if (event.button !== 0 || isSaving) return;
    event.stopPropagation();
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    dragStateRef.current = {
      handle,
      startX: event.clientX,
      startY: event.clientY,
      initialRect: cropRect,
      stageWidth: rect.width,
      stageHeight: rect.height,
      pointerId: event.pointerId,
    };
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const drag = dragStateRef.current;
    if (!drag || event.pointerId !== drag.pointerId) return;
    const dxNorm = (event.clientX - drag.startX) / drag.stageWidth;
    const dyNorm = (event.clientY - drag.startY) / drag.stageHeight;

    setCropRect(
      applyCropDrag(drag.initialRect, drag.handle, dxNorm, dyNorm, {
        aspectRatio: selectedRatio,
        imageAspect,
      }),
    );
  };

  const handlePointerEnd = (event: React.PointerEvent<HTMLElement>) => {
    const drag = dragStateRef.current;
    if (!drag || event.pointerId !== drag.pointerId) return;
    dragStateRef.current = null;
    setIsDragging(false);
    if (pixelInfo) {
      setLiveAnnouncement(
        `Área de recorte ajustada a ${pixelInfo.width} por ${pixelInfo.height} píxeles`,
      );
    }
  };

  const handleCropKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const step = event.shiftKey ? 0.04 : 0.01;
    let dx = 0;
    let dy = 0;
    if (event.key === "ArrowLeft") dx = -step;
    else if (event.key === "ArrowRight") dx = step;
    else if (event.key === "ArrowUp") dy = -step;
    else if (event.key === "ArrowDown") dy = step;
    else return;

    event.preventDefault();
    const mode = event.altKey ? "resize" : "move";
    setCropRect((prev) =>
      nudgeCropRect(prev, dx, dy, mode, {
        aspectRatio: selectedRatio,
        imageAspect,
      }),
    );
  };

  const handleConfirmSave = async () => {
    const img = imgRef.current;
    if (!img || naturalSize.w <= 0 || naturalSize.h <= 0 || isSaving) return;

    setIsSaving(true);
    setErrorMessage(null);
    try {
      const px = toPixelCropRect(cropRect, naturalSize.w, naturalSize.h);
      const canvas = document.createElement("canvas");
      canvas.width = px.outputWidth;
      canvas.height = px.outputHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        throw new Error("No se pudo inicializar el lienzo de recorte.");
      }

      ctx.drawImage(
        img,
        px.x,
        px.y,
        px.width,
        px.height,
        0,
        0,
        px.outputWidth,
        px.outputHeight,
      );

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(resolve, "image/webp", 0.9),
      );
      if (!blob) {
        throw new Error(
          "No se pudo exportar el recorte WebP (verifica CORS del servidor).",
        );
      }

      const cleanName = filename.replace(/\.[^.]+$/, "") + ".webp";
      const file = new File([blob], cleanName, { type: "image/webp" });

      await onSaveCrop({
        file,
        width: px.outputWidth,
        height: px.outputHeight,
        sizeBytes: file.size,
      });
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "No se pudo guardar la imagen recortada.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleRestoreClick = async () => {
    if (!onRestoreOriginal || isSaving) return;
    setIsSaving(true);
    setErrorMessage(null);
    try {
      await onRestoreOriginal();
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "No se pudo restaurar la lámina original.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  const isPointOutsideDialog = (
    event: React.PointerEvent<HTMLDialogElement>,
    dialog: HTMLDialogElement,
  ) => {
    const r = dialog.getBoundingClientRect();
    return (
      event.clientX < r.left ||
      event.clientX > r.right ||
      event.clientY < r.top ||
      event.clientY > r.bottom
    );
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={headingId}
      onCancel={(e) => {
        if (isSaving) {
          e.preventDefault();
          return;
        }
        e.preventDefault();
        handleRequestClose();
      }}
      onClose={(e) => {
        e.currentTarget.returnValue = "";
        if (isOpen && !isSaving) {
          onClose();
        }
      }}
      onPointerDown={(e) => {
        pressedOutsideRef.current = isPointOutsideDialog(e, e.currentTarget);
      }}
      onPointerUp={(e) => {
        if (
          !isSaving &&
          pressedOutsideRef.current &&
          isPointOutsideDialog(e, e.currentTarget)
        ) {
          handleRequestClose();
        }
        pressedOutsideRef.current = false;
      }}
      className="m-auto w-[min(96vw,1080px)] max-h-[94vh] rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-0 text-slate-900 dark:text-slate-100 shadow-2xl backdrop:bg-slate-950/75"
    >
      <div className="flex flex-col max-h-[94vh]">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 px-5 py-3.5">
          <div className="min-w-0">
            <h1
              id={headingId}
              className="text-base font-extrabold tracking-tight text-slate-900 dark:text-white truncate"
            >
              ✂️ {title}
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate font-mono">
              {filename}
              {naturalSize.w > 0 &&
                ` · Original: ${naturalSize.w}×${naturalSize.h} px`}
              {pixelInfo &&
                ` · Recorte: ${pixelInfo.outputWidth}×${pixelInfo.outputHeight} px`}
            </p>
          </div>
          <button
            type="button"
            onClick={handleRequestClose}
            disabled={isSaving}
            aria-label="Cerrar editor de recorte"
            className="shrink-0 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 cursor-pointer"
          >
            ✕ Cerrar
          </button>
        </div>

        {/* Toolbar: Aspect Ratio & Original toggle */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 px-5 py-2.5">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-1">
              Proporción:
            </span>
            {CROP_ASPECT_PRESETS.map((preset) => {
              const active = aspectPreset === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  autoFocus={preset.id === "free"}
                  onClick={() => handleAspectChange(preset.id)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-colors cursor-pointer ${active
                      ? "bg-[#1a80ff] text-white"
                      : "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                >
                  {preset.label}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setAspectPreset("free");
                setCropRect(FULL_CROP_RECT);
              }}
              className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer ml-1"
            >
              ↺ 100%
            </button>
          </div>

          {hasDistinctOriginal && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setUseOriginalSource((prev) => !prev)}
                className="rounded-lg border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 cursor-pointer"
              >
                {useOriginalSource
                  ? "Viéndolo sobre lámina original"
                  : "Cambiar a lámina original sin recorte"}
              </button>
            </div>
          )}
        </div>

        {/* Interactive Crop Stage */}
        <div className="flex-1 overflow-auto bg-slate-950/90 p-4 flex items-center justify-center min-h-[340px]">
          <div
            ref={stageRef}
            className="relative inline-block max-w-full max-h-[62vh] select-none overflow-hidden rounded-lg shadow-xl ring-1 ring-white/10"
          >
            {displaySrc ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                ref={imgRef}
                src={displaySrc}
                alt={filename}
                crossOrigin="anonymous"
                draggable={false}
                onLoad={(e) => {
                  const el = e.currentTarget;
                  setNaturalSize({
                    w: el.naturalWidth,
                    h: el.naturalHeight,
                  });
                  setErrorMessage(null);
                }}
                onError={() => {
                  setErrorMessage(
                    "No se pudo cargar la imagen con permisos CORS para recortar.",
                  );
                }}
                className="block max-h-[62vh] max-w-full w-auto h-auto pointer-events-none select-none"
              />
            ) : (
              <div className="flex items-center justify-center min-w-[320px] min-h-[240px] text-xs font-semibold text-slate-300">
                {isLoadingSource
                  ? "Cargando imagen para recorte..."
                  : "Imagen no disponible para recorte"}
              </div>
            )}

            {naturalSize.w > 0 && (
              <div
                role="region"
                tabIndex={0}
                aria-label="Selección de recorte. Usa las flechas del teclado para mover o Alt más flechas para redimensionar."
                onKeyDown={handleCropKeyDown}
                onPointerDown={(e) => handlePointerDown("move", e)}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerEnd}
                onPointerCancel={handlePointerEnd}
                style={{
                  left: `${cropRect.x * 100}%`,
                  top: `${cropRect.y * 100}%`,
                  width: `${cropRect.width * 100}%`,
                  height: `${cropRect.height * 100}%`,
                  boxShadow: "0 0 0 9999px rgba(2, 6, 23, 0.72)",
                  touchAction: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
                className={`absolute border-2 border-[#38bdf8] focus:outline-none focus:ring-2 focus:ring-white ${isDragging ? "cursor-grabbing" : "cursor-grab"
                  }`}
              >
                {/* Rule-of-thirds visual guides */}
                <div className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-3">
                  <div className="border-r border-b border-white/20" />
                  <div className="border-r border-b border-white/20" />
                  <div className="border-b border-white/20" />
                  <div className="border-r border-b border-white/20" />
                  <div className="border-r border-b border-white/20" />
                  <div className="border-b border-white/20" />
                  <div className="border-r border-white/20" />
                  <div className="border-r border-white/20" />
                  <div />
                </div>

                {/* Live px badge inside crop box */}
                {pixelInfo && (
                  <div className="pointer-events-none absolute top-1.5 left-1.5 rounded bg-slate-950/80 px-1.5 py-0.5 text-[10px] font-mono font-bold text-[#38bdf8]">
                    {pixelInfo.width}×{pixelInfo.height} px
                  </div>
                )}

                {/* 8 interactive corner & edge handles */}
                {RESIZE_HANDLES.map(({ handle, label, className }) => (
                  <button
                    key={handle}
                    type="button"
                    aria-label={`Ajustar recorte: ${label}`}
                    onPointerDown={(e) => handlePointerDown(handle, e)}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerEnd}
                    onPointerCancel={handlePointerEnd}
                    style={{
                      touchAction: "none",
                      WebkitUserSelect: "none",
                      userSelect: "none",
                    }}
                    className={`absolute h-4 w-4 rounded-full border-2 border-white bg-[#1a80ff] shadow-md transition-transform hover:scale-110 ${className}`}
                  />
                ))}
              </div>
            )}

            {isLoadingSource && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60">
                <div className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow">
                  Cargando imagen en alta resolución...
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Visually hidden live region for screen reader feedback */}
        <div className="sr-only" aria-live="polite">
          {liveAnnouncement}
        </div>

        {/* Footer & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 dark:border-slate-800 px-5 py-3.5 bg-white dark:bg-slate-900">
          <div className="min-w-0 flex-1 text-xs">
            {errorMessage ? (
              <span className="font-semibold text-rose-600 dark:text-rose-400">
                ⚠️ {errorMessage}
              </span>
            ) : (
              <span className="text-slate-500 dark:text-slate-400">
                Arrastra las esquinas o mueve el marco. Flechas: mover · Shift: paso rápido.
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {hasDistinctOriginal && onRestoreOriginal && (
              <button
                type="button"
                onClick={handleRestoreClick}
                disabled={isSaving}
                className="rounded-xl border border-amber-300 dark:border-amber-700 px-3.5 py-2 text-xs font-bold text-amber-800 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/60 disabled:opacity-50 cursor-pointer"
              >
                Restaurar original
              </button>
            )}
            <button
              type="button"
              onClick={handleRequestClose}
              disabled={isSaving}
              className="rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleConfirmSave}
              disabled={isSaving || isLoadingSource || naturalSize.w <= 0}
              className="rounded-xl bg-[#1a80ff] px-5 py-2 text-xs font-extrabold text-white shadow-sm hover:bg-[#0066e6] disabled:opacity-50 cursor-pointer"
            >
              {isSaving ? "Guardando recorte..." : "✂️ Guardar recorte"}
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
