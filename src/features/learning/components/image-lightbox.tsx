"use client";

import { useEffect, useState } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  const [zoom, setZoom] = useState<1 | 1.5 | 2>(1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt || "Vista ampliada de imagen"}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950/90 backdrop-blur-xs p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mb-3 flex items-center gap-2 rounded-full bg-slate-900/90 border border-slate-700 px-3 py-1.5 text-xs font-bold text-white shadow-lg"
      >
        {([1, 1.5, 2] as const).map((z) => (
          <button
            key={z}
            type="button"
            onClick={() => setZoom(z)}
            className={`px-2.5 py-0.5 rounded-full cursor-pointer transition-colors ${
              zoom === z ? "bg-[#1a80ff] text-white" : "text-slate-300 hover:text-white"
            }`}
          >
            {z}x
          </button>
        ))}
        <button
          type="button"
          onClick={onClose}
          className="ml-2 px-2 py-0.5 rounded-full text-slate-300 hover:text-white cursor-pointer"
          title="Cerrar (Esc)"
        >
          ✕
        </button>
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[82vh] max-w-[92vw] overflow-auto rounded-2xl border border-slate-800 bg-slate-900 p-2 shadow-2xl"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
          className="max-h-[78vh] w-auto object-contain transition-transform duration-150"
        />
      </div>

      {alt && (
        <p className="mt-2 max-w-2xl text-center text-xs text-slate-300">{alt}</p>
      )}
    </div>
  );
}
