"use client";

import type {
  ImageAlign,
  ImageAspectRatio,
  ImageObjectFit,
  ImageObjectPosition,
  ImageShadow,
  ImageStyle,
} from "../domain/image-styles";

type ImagePropertiesPanelProps = {
  value: ImageStyle;
  onChange: (next: ImageStyle) => void;
  onRotate?: () => void;
  onFlip?: () => void;
  onAddPin?: () => void;
  onAddCircle?: () => void;
  onClearAnnotations?: () => void;
  onMove: (dir: -1 | 1) => void;
  onDuplicate: () => void;
  onReplace: () => void;
  onDelete: () => void;
  onClose: () => void;
};

const label =
  "block text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1";
const chip =
  "px-2 py-1 rounded-lg border text-[11px] font-bold transition-colors cursor-pointer";
const chipOn = "bg-[#1a80ff] border-[#1a80ff] text-white";
const chipOff =
  "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[#1a80ff]";

function Segmented<T extends string>({
  options,
  value,
  onSelect,
}: {
  options: { id: T; label: string }[];
  value: T;
  onSelect: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1">
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onSelect(o.id)}
          className={`${chip} ${value === o.id ? chipOn : chipOff}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function ImagePropertiesPanel({
  value,
  onChange,
  onRotate,
  onFlip,
  onAddPin,
  onAddCircle,
  onClearAnnotations,
  onMove,
  onDuplicate,
  onReplace,
  onDelete,
  onClose,
}: ImagePropertiesPanelProps) {
  const set = (patch: Partial<ImageStyle>) => onChange({ ...value, ...patch });
  const numericWidth = value.widthPct === "auto" ? 100 : value.widthPct;

  return (
    <aside
      data-testid="image-properties-panel"
      onMouseDown={(e) => {
        const t = e.target as HTMLElement;
        if (t.tagName !== "INPUT" && t.tagName !== "TEXTAREA") e.preventDefault();
      }}
      className="w-full lg:w-72 shrink-0 self-start lg:sticky lg:top-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-4"
    >
      <div className="flex items-center justify-between">
        <strong className="text-sm text-slate-900 dark:text-white">
          🖼️ Propiedades de imagen
        </strong>
        <button
          type="button"
          onClick={onClose}
          className="text-xs font-bold text-slate-400 hover:text-slate-700 cursor-pointer"
          title="Cerrar panel"
        >
          ✕
        </button>
      </div>

      {/* Tamaño (%) */}
      <div className="space-y-2">
        <span className={label}>
          Ancho ({value.widthPct === "auto" ? "Auto" : `${value.widthPct}%`})
        </span>
        <div className="flex flex-wrap gap-1">
          {([25, 50, 75, 100] as const).map((pct) => (
            <button
              key={pct}
              type="button"
              onClick={() => set({ widthPct: pct })}
              className={`${chip} ${value.widthPct === pct ? chipOn : chipOff}`}
            >
              {pct}%
            </button>
          ))}
          <button
            type="button"
            onClick={() => set({ widthPct: "auto" })}
            className={`${chip} ${value.widthPct === "auto" ? chipOn : chipOff}`}
          >
            Auto
          </button>
        </div>
        <input
          type="range"
          min={15}
          max={100}
          value={numericWidth}
          onChange={(e) => set({ widthPct: Number(e.target.value) })}
          className="w-full accent-[#1a80ff]"
        />
      </div>

      {/* Proporción y Ajuste */}
      <div className="space-y-2">
        <span className={label}>Proporción</span>
        <Segmented<ImageAspectRatio>
          value={value.aspectRatio}
          onSelect={(aspectRatio) => set({ aspectRatio })}
          options={[
            { id: "auto", label: "Auto" },
            { id: "16/9", label: "16:9" },
            { id: "4/3", label: "4:3" },
            { id: "1/1", label: "1:1" },
          ]}
        />
        <span className={`${label} pt-1`}>Ajuste</span>
        <Segmented<ImageObjectFit>
          value={value.objectFit}
          onSelect={(objectFit) => set({ objectFit })}
          options={[
            { id: "contain", label: "Completa (contain)" },
            { id: "cover", label: "Rellenar (cover)" },
          ]}
        />
        {value.objectFit === "cover" && (
          <>
            <span className={`${label} pt-1`}>Enfoque</span>
            <Segmented<ImageObjectPosition>
              value={value.objectPosition}
              onSelect={(objectPosition) => set({ objectPosition })}
              options={[
                { id: "top", label: "Arriba" },
                { id: "center", label: "Centro" },
                { id: "bottom", label: "Abajo" },
                { id: "left", label: "Izq" },
                { id: "right", label: "Der" },
              ]}
            />
          </>
        )}
      </div>

      {/* Alineación */}
      <div className="space-y-1.5">
        <span className={label}>Alineación</span>
        <Segmented<ImageAlign>
          value={value.align}
          onSelect={(align) => set({ align })}
          options={[
            { id: "left", label: "⬅ Izquierda" },
            { id: "center", label: "↔ Centro" },
            { id: "right", label: "➡ Derecha" },
          ]}
        />
      </div>

      {/* Apariencia */}
      <div className="space-y-2">
        <span className={label}>Apariencia</span>
        <Segmented<ImageShadow>
          value={value.shadow}
          onSelect={(shadow) => set({ shadow })}
          options={[
            { id: "none", label: "Sin sombra" },
            { id: "sm", label: "Suave" },
            { id: "md", label: "Marcada" },
          ]}
        />
        <label className="flex items-center justify-between text-xs text-slate-700 dark:text-slate-200 pt-1 cursor-pointer">
          <span>Mostrar borde</span>
          <input
            type="checkbox"
            checked={value.border}
            onChange={(e) => set({ border: e.target.checked })}
            className="h-4 w-4 accent-[#1a80ff]"
          />
        </label>
        <label className="block text-xs text-slate-700 dark:text-slate-200">
          <span className="flex justify-between">
            <span>Esquinas redondeadas</span>
            <span className="font-mono text-[10px] text-slate-400">
              {value.radius}px
            </span>
          </span>
          <input
            type="range"
            min={0}
            max={32}
            value={value.radius}
            onChange={(e) => set({ radius: Number(e.target.value) })}
            className="w-full accent-[#1a80ff]"
          />
        </label>
      </div>

      {/* Pie de foto y Texto alternativo */}
      <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-3">
        <div>
          <span className={label}>Pie de foto (opcional)</span>
          <input
            type="text"
            value={value.caption}
            onChange={(e) => set({ caption: e.target.value })}
            placeholder="Ej. Panel de instrumentos G1000..."
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 px-2.5 py-1.5 text-xs text-slate-800 dark:text-slate-200 focus:border-[#1a80ff] focus:outline-hidden"
          />
        </div>
        <div>
          <span className={label}>Texto alternativo (accesibilidad)</span>
          <input
            type="text"
            value={value.alt}
            onChange={(e) => set({ alt: e.target.value })}
            placeholder="Describe la imagen para lectores de pantalla"
            className={`w-full rounded-xl border px-2.5 py-1.5 text-xs bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 focus:border-[#1a80ff] focus:outline-hidden ${
              !value.alt.trim()
                ? "border-amber-400 dark:border-amber-600"
                : "border-slate-200 dark:border-slate-700"
            }`}
          />
          {!value.alt.trim() && (
            <p className="mt-1 text-[10px] font-semibold text-amber-600 dark:text-amber-400">
              ⚠️ Añade una descripción breve para accesibilidad.
            </p>
          )}
        </div>
      </div>

      {/* Rotación y Anotaciones SVG */}
      {(onRotate || onAddPin) && (
        <div className="space-y-2 border-t border-slate-100 dark:border-slate-800 pt-3">
          <span className={label}>Edición y anotaciones</span>
          <div className="grid grid-cols-2 gap-1.5">
            {onRotate && (
              <button type="button" onClick={onRotate} className={`${chip} ${chipOff}`}>
                ↻ Rotar 90°
              </button>
            )}
            {onFlip && (
              <button type="button" onClick={onFlip} className={`${chip} ${chipOff}`}>
                ⇄ Voltear
              </button>
            )}
            {onAddPin && (
              <button type="button" onClick={onAddPin} className={`${chip} ${chipOff}`}>
                🔴 + Punto
              </button>
            )}
            {onAddCircle && (
              <button type="button" onClick={onAddCircle} className={`${chip} ${chipOff}`}>
                ⭕ + Círculo
              </button>
            )}
            {onClearAnnotations && (
              <button
                type="button"
                onClick={onClearAnnotations}
                className={`${chip} ${chipOff} col-span-2`}
              >
                🧹 Limpiar anotaciones
              </button>
            )}
          </div>
        </div>
      )}

      {/* Acciones */}
      <div className="grid grid-cols-2 gap-1.5 border-t border-slate-100 dark:border-slate-800 pt-3">
        <button type="button" onClick={onReplace} className={`${chip} ${chipOff} col-span-2`}>
          🔄 Reemplazar imagen
        </button>
        <button type="button" onClick={() => onMove(-1)} className={`${chip} ${chipOff}`}>
          ⬆ Subir
        </button>
        <button type="button" onClick={() => onMove(1)} className={`${chip} ${chipOff}`}>
          ⬇ Bajar
        </button>
        <button type="button" onClick={onDuplicate} className={`${chip} ${chipOff}`}>
          ⧉ Duplicar
        </button>
        <button
          type="button"
          onClick={onDelete}
          className={`${chip} border-rose-200 dark:border-rose-800 bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-300 hover:bg-rose-100`}
        >
          🗑 Eliminar
        </button>
      </div>
    </aside>
  );
}
