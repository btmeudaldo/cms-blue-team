"use client";

import { useRef, useState } from "react";

import { getCourseCoverUploadError } from "@/features/learning/domain/course-cover-upload";
import { getDefaultImageFrame } from "@/features/learning/domain/image-framing";
import { shouldShowImageFrameEditor } from "@/features/learning/domain/image-frame-editor";
import { createSupabaseBrowserClient } from "@/shared/lib/supabase/browser";
import { uploadCourseCoverAction } from "@/app/actions/course.actions";

type CourseImageUploaderProps = {
  defaultImageUrl?: string | null;
};

export function CourseImageUploader({
  defaultImageUrl = "",
}: CourseImageUploaderProps) {
  const initialUrl = defaultImageUrl || "";
  const [mode, setMode] = useState<"url" | "file">("url");
  const [imageUrl, setImageUrl] = useState(initialUrl);
  const [previewUrl, setPreviewUrl] = useState(initialUrl);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isEditingFrame, setIsEditingFrame] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  // Interactive framing states: zoom, position X/Y, dragging
  const [scale, setScale] = useState(getDefaultImageFrame().scale);
  const [position, setPosition] = useState(getDefaultImageFrame().position);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFramed, setIsFramed] = useState(getDefaultImageFrame().isFramed);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  function resetFraming() {
    const frame = getDefaultImageFrame();
    setScale(frame.scale);
    setPosition(frame.position);
    setIsFramed(frame.isFramed);
  }

  function compressAndSetImage(rawUrl: string, autoFramed = false) {
    const normalized =
      rawUrl.includes("/storage/v1/object/") &&
      !rawUrl.includes("/storage/v1/object/public/")
        ? rawUrl.replace("/storage/v1/object/", "/storage/v1/object/public/")
        : rawUrl;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const maxDim = 320;
        let w = img.width;
        let h = img.height;
        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, w, h);
          const compressed = canvas.toDataURL("image/jpeg", 0.6);
          setImageUrl(compressed);
          setPreviewUrl(compressed);
          if (autoFramed) setIsFramed(true);
          return;
        }
      } catch (e) {}
      setImageUrl(normalized);
      setPreviewUrl(normalized);
      if (autoFramed) setIsFramed(true);
    };
    img.onerror = () => {
      setImageUrl(normalized);
      setPreviewUrl(normalized);
      if (autoFramed) setIsFramed(true);
    };
    img.src = normalized;
  }

  async function uploadCourseCover(file: Blob) {
    try {
      const formData = new FormData();
      formData.append("file", file, `cover.${file.type.split("/")[1] || "jpg"}`);
      return await uploadCourseCoverAction(formData);
    } catch (err: any) {
      // Browser client fallback attempt if server action fails
      const extension = file.type.split("/")[1] || "jpg";
      const supabase = createSupabaseBrowserClient();
      const { data: auth } = await supabase.auth.getUser();

      const userId = auth?.user?.id || "demo-user";
      const objectPath = `${userId}/${crypto.randomUUID()}.${extension}`;
      const { error: uploadError } = await supabase.storage
        .from("course-covers")
        .upload(objectPath, file, { contentType: file.type, upsert: true });

      if (!uploadError) {
        return supabase.storage.from("course-covers").getPublicUrl(objectPath).data
          .publicUrl;
      }

      throw new Error(
        err?.message || "No se pudo subir la imagen. Inténtalo de nuevo.",
      );
    }
  }

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const validationError = getCourseCoverUploadError(file);
    if (validationError) {
      setUploadError(validationError);
      event.target.value = "";
      return;
    }

    resetFraming();
    setIsEditingFrame(true);
    setFileName(file.name);
    setUploadError(null);
    setIsUploading(true);

    try {
      const publicUrl = await uploadCourseCover(file);
      setImageUrl(publicUrl);
      setPreviewUrl(publicUrl);
    } catch (error) {
      setImageUrl("");
      setPreviewUrl("");
      setUploadError(
        error instanceof Error
          ? error.message
          : "No se pudo subir la imagen. Inténtalo de nuevo.",
      );
    } finally {
      setIsUploading(false);
    }
  }

  function handleUrlChange(val: string) {
    const normalized =
      val.includes("/storage/v1/object/") &&
      !val.includes("/storage/v1/object/public/")
        ? val.replace("/storage/v1/object/", "/storage/v1/object/public/")
        : val;
    resetFraming();
    setIsEditingFrame(true);
    setUploadError(null);
    setImageUrl(normalized);
    setPreviewUrl(normalized);
  }

  // Mouse Drag Events
  function handleMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!isDragging) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  }

  function handleMouseUp() {
    setIsDragging(false);
  }

  // Touch Drag Events (Mobile)
  function handleTouchStart(e: React.TouchEvent) {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    }
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!isDragging || e.touches.length !== 1) return;
    setPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y,
    });
  }

  function handleTouchEnd() {
    setIsDragging(false);
  }

  // Export the selected framing to a persistent Storage object.
  function applyCanvasCrop() {
    if (!previewUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const size = 320; // 320x320 resolution (<25KB)
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const C = containerRef.current?.clientWidth || 260;

        const baseCoverScale = Math.max(C / img.width, C / img.height);
        const effectiveScale = baseCoverScale * Math.max(0.1, scale);

        const domW = img.width * effectiveScale;
        const domH = img.height * effectiveScale;

        const origCenterX = (domW / 2 - position.x) / effectiveScale;
        const origCenterY = (domH / 2 - position.y) / effectiveScale;

        const origCropSize = Math.min(
          img.width,
          img.height,
          C / effectiveScale,
        );

        let sx = origCenterX - origCropSize / 2;
        let sy = origCenterY - origCropSize / 2;

        const maxSx = Math.max(0, img.width - origCropSize);
        const maxSy = Math.max(0, img.height - origCropSize);
        sx = Math.max(0, Math.min(maxSx, sx));
        sy = Math.max(0, Math.min(maxSy, sy));

        ctx.drawImage(
          img,
          sx,
          sy,
          origCropSize,
          origCropSize,
          0,
          0,
          size,
          size,
        );

        canvas.toBlob(
          async (croppedImage) => {
            if (!croppedImage) return;

            setUploadError(null);
            setIsUploading(true);
            try {
              const publicUrl = await uploadCourseCover(croppedImage);
              setImageUrl(publicUrl);
              setPreviewUrl(publicUrl);
              setIsFramed(true);
              setIsEditingFrame(false);
            } catch (error) {
              setUploadError(
                error instanceof Error
                  ? error.message
                  : "No se pudo guardar el encuadre. Inténtalo de nuevo.",
              );
            } finally {
              setIsUploading(false);
            }
          },
          "image/jpeg",
          0.6,
        );
      } catch (err) {
        // Safe fallback
        setImageUrl(previewUrl);
        setIsFramed(true);
        setIsEditingFrame(false);
      }
    };
    img.onerror = () => {
      setImageUrl(previewUrl);
      setIsFramed(true);
      setIsEditingFrame(false);
    };
    img.src = previewUrl;
  }

  const safeUrl = imageUrl || "";

  return (
    <div className="space-y-4">
      <input type="hidden" name="imageUrl" value={safeUrl} />

      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
          Imagen de Portada del Curso
        </label>

        {/* Mode Selector Tabs */}
        <div className="inline-flex items-center rounded-xl bg-slate-100 dark:bg-slate-800 p-0.5 border border-slate-200 dark:border-slate-700 text-[11px] font-bold">
          <button
            type="button"
            onClick={() => setMode("url")}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              mode === "url"
                ? "bg-white dark:bg-slate-900 text-[#1a80ff] shadow-xs"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            🔗 URL Directa
          </button>
          <button
            type="button"
            onClick={() => setMode("file")}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              mode === "file"
                ? "bg-white dark:bg-slate-900 text-[#1a80ff] shadow-xs"
                : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            📁 Cargar desde Ordenador
          </button>
        </div>
      </div>

      {mode === "url" ? (
        <input
          type="url"
          value={safeUrl.startsWith("data:") ? "" : safeUrl}
          onChange={(e) => handleUrlChange(e.target.value)}
          placeholder="https://images.unsplash.com/photo-..."
          className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-3.5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-[#1a80ff] focus:outline-hidden focus:ring-2 focus:ring-blue-100 transition-all"
        />
      ) : (
        <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-[#1a80ff] dark:hover:border-[#1a80ff] rounded-2xl p-4 text-center bg-slate-50 dark:bg-slate-950/50 transition-all group">
          <input
            type="file"
            accept="image/png, image/jpeg, image/webp, image/gif"
            onChange={handleFileChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
          />
          <div className="flex flex-col items-center justify-center gap-1">
            <span className="text-2xl group-hover:scale-110 transition-transform">
              📤
            </span>
            <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
              {fileName
                ? `Archivo seleccionado: ${fileName}`
                : "Haz clic para seleccionar imagen de tu equipo"}
            </span>
            <span className="text-[10px] text-slate-400">
              PNG, JPG, WEBP o GIF (máximo 5 MB; se guardará de forma segura)
            </span>
          </div>
        </div>
      )}

      {isUploading && (
        <p className="text-xs font-semibold text-[#1a80ff]" role="status">
          Subiendo imagen…
        </p>
      )}

      {uploadError && (
        <p className="text-xs font-semibold text-rose-600" role="alert">
          {uploadError}
        </p>
      )}

      {/* Interactive Visual Framer Box (Drag, Zoom & Center) */}
      {previewUrl && (
        <div className="space-y-3 p-4 rounded-3xl border border-blue-200 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-950/20">
          {!shouldShowImageFrameEditor(previewUrl, isEditingFrame) && (
            <>
              <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-lg">
                <img
                  src={imageUrl}
                  alt="Portada guardada"
                  className="h-full w-full object-cover"
                />
              </div>
              <button
                type="button"
                onClick={() => setIsEditingFrame(true)}
                className="mx-auto flex rounded-xl border border-[#1a80ff] bg-white px-4 py-2 text-xs font-bold text-[#1a80ff] transition-colors hover:bg-blue-50"
              >
                Editar encuadre
              </button>
            </>
          )}

          {shouldShowImageFrameEditor(previewUrl, isEditingFrame) && (
            <>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <span>🎯</span> Encuadre Visual Cuadrado (1:1)
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">
                  💡 Arrastra la foto completa para centrarla
                </span>
              </div>

              {/* Interactive Square Container */}
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={`relative rounded-2xl overflow-hidden border-2 border-dashed border-[#1a80ff]/50 aspect-square w-full max-w-[260px] mx-auto bg-slate-950 shadow-lg select-none touch-none ${
                  isDragging ? "cursor-grabbing" : "cursor-grab"
                }`}
              >
                <img
                  ref={imageRef}
                  src={previewUrl}
                  alt="Portada interactiva"
                  style={{
                    transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) scale(${scale})`,
                    transition: isDragging ? "none" : "transform 0.1s ease-out",
                  }}
                  className="absolute top-1/2 left-1/2 min-w-full min-h-full max-w-none max-h-none object-cover pointer-events-none select-none"
                />

                {/* Grid Overlay Guide Lines */}
                <div className="absolute inset-0 border border-white/20 pointer-events-none grid grid-cols-3 grid-rows-3">
                  <div className="border-r border-b border-white/10"></div>
                  <div className="border-r border-b border-white/10"></div>
                  <div className="border-b border-white/10"></div>
                  <div className="border-r border-b border-white/10"></div>
                  <div className="border-r border-b border-white/10"></div>
                  <div className="border-b border-white/10"></div>
                  <div className="border-r border-white/10"></div>
                  <div className="border-r border-white/10"></div>
                  <div></div>
                </div>

                {/* Delete Button */}
                <div className="absolute top-2 right-2 z-20">
                  <button
                    type="button"
                    onClick={() => {
                      setImageUrl("");
                      setPreviewUrl("");
                      setFileName(null);
                      setIsFramed(false);
                      setIsEditingFrame(false);
                    }}
                    className="rounded-lg bg-slate-900/85 hover:bg-rose-600 text-white px-2 py-1 text-[10px] font-bold backdrop-blur-xs transition-colors cursor-pointer shadow-sm"
                  >
                    ✕ Eliminar
                  </button>
                </div>
              </div>

              {/* Controls Bar: Zoom Slider & Recenter */}
              <div className="space-y-2 max-w-[260px] mx-auto">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span>🔍 Zoom / Tamaño:</span>
                  <span className="font-mono text-[#1a80ff] font-bold">
                    {Math.round(scale * 100)}%
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setScale((s) => Math.max(0.2, s - 0.1))}
                    className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-1 text-xs font-extrabold hover:bg-slate-100 cursor-pointer"
                  >
                    ➖
                  </button>
                  <input
                    type="range"
                    min="0.2"
                    max="3.0"
                    step="0.05"
                    value={scale}
                    onChange={(e) => setScale(parseFloat(e.target.value))}
                    className="flex-1 accent-[#1a80ff] cursor-pointer"
                  />
                  <button
                    type="button"
                    onClick={() => setScale((s) => Math.min(3.0, s + 0.1))}
                    className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-2 py-1 text-xs font-extrabold hover:bg-slate-100 cursor-pointer"
                  >
                    ➕
                  </button>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      resetFraming();
                      setIsEditingFrame(false);
                    }}
                    className="flex-1 rounded-xl border border-slate-300 bg-white py-1.5 text-[11px] font-bold text-slate-700 transition-colors hover:bg-slate-100"
                  >
                    Cancelar
                  </button>
                  <button
                    type="button"
                    onClick={resetFraming}
                    className="flex-1 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    🎯 Recentrar Posición
                  </button>
                  <button
                    type="button"
                    onClick={applyCanvasCrop}
                    className="flex-1 rounded-xl bg-[#1a80ff] py-1.5 text-[11px] font-bold text-white shadow-xs hover:bg-[#0066e6] transition-colors cursor-pointer"
                  >
                    {isFramed ? "✅ Encuadre Aplicado" : "✨ Fijar Encuadre"}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
