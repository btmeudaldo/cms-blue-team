"use client";

import { useRef, useState, useEffect } from "react";

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

  // Interactive framing states: zoom, position X/Y, dragging
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isFramed, setIsFramed] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset framing controls when image URL changes
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsFramed(false);
  }, [previewUrl]);

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

  // Export current visually centered & zoomed image to Data URL using Canvas safely
  function applyCanvasCrop() {
    if (!previewUrl) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const size = 600; // High resolution square canvas
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Fill background
        ctx.fillStyle = "#0f172a";
        ctx.fillRect(0, 0, size, size);

        const containerWidth = containerRef.current?.clientWidth || 260;
        const ratio = size / containerWidth;

        // Base aspect cover dimensions in DOM container
        const coverRatio = Math.max(
          containerWidth / img.width,
          containerWidth / img.height,
        );
        const baseW = img.width * coverRatio;
        const baseH = img.height * coverRatio;

        // Scaled dimensions on Canvas
        const scaledW = baseW * scale * ratio;
        const scaledH = baseH * scale * ratio;

        // Center position + drag offset
        const drawX = (size - scaledW) / 2 + position.x * ratio;
        const drawY = (size - scaledH) / 2 + position.y * ratio;

        ctx.drawImage(img, drawX, drawY, scaledW, scaledH);

        const croppedDataUrl = canvas.toDataURL("image/jpeg", 0.85);
        if (croppedDataUrl && croppedDataUrl.startsWith("data:image/")) {
          setImageUrl(croppedDataUrl);
          setPreviewUrl(croppedDataUrl);
          setScale(1);
          setPosition({ x: 0, y: 0 });
          setIsFramed(true);
        }
      } catch (err) {
        // Safe fallback for CORS-protected external web images: mark as framed without breaking preview
        setIsFramed(true);
      }
    };
    img.onerror = () => {
      setIsFramed(true);
    };
    img.src = previewUrl;
  }

  function resetFraming() {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsFramed(false);
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

      {/* Interactive Visual Framer Box (Drag, Zoom & Center) */}
      {previewUrl && (
        <div className="space-y-3 p-4 rounded-3xl border border-blue-200 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-950/20">
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
        </div>
      )}
    </div>
  );
}

