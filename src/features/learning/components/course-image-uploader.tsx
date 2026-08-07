"use client";

import { useState } from "react";

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

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = (e.target?.result as string) || "";
      setImageUrl(dataUrl);
      setPreviewUrl(dataUrl);
    };
    reader.readAsDataURL(file);
  }

  function handleUrlChange(val: string) {
    setImageUrl(val);
    setPreviewUrl(val);
  }

  const safeUrl = imageUrl || "";

  return (
    <div className="space-y-3">
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
            accept="image/png, image/jpeg, image/webp, image/svg+xml, image/gif"
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
              PNG, JPG, WEBP o SVG (Se guardará codificada en BD)
            </span>
          </div>
        </div>
      )}

      {/* Square Image Thumbnail Preview (1:1 Aspect Ratio) */}
      {previewUrl && (
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-square w-full max-w-[280px] mx-auto bg-slate-900 shadow-md group my-2">
          <img
            src={previewUrl}
            alt="Vista previa de portada"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 z-10">
            <button
              type="button"
              onClick={() => {
                setImageUrl("");
                setPreviewUrl("");
                setFileName(null);
              }}
              className="rounded-lg bg-slate-900/85 hover:bg-rose-600 text-white px-2.5 py-1 text-[11px] font-bold backdrop-blur-xs transition-colors cursor-pointer shadow-sm"
            >
              ✕ Eliminar
            </button>
          </div>
          <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-white/10 text-center">
            <span className="text-[10px] font-bold text-slate-200 flex items-center justify-center gap-1">
              <span>📷</span> Vista Previa Cuadrada (1:1)
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
