"use client";

import {
  BOX_ICONS,
  BOX_PRESETS,
  styleFromPreset,
  type BoxBorderMode,
  type BoxShadow,
  type BoxStyle,
} from "../domain/box-styles";

type BoxPropertiesPanelProps = {
  value: BoxStyle;
  isLegacy: boolean;
  onChange: (next: BoxStyle) => void;
  onIcon: (icon: string) => void;
  onConvert: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
  onMove: (dir: -1 | 1) => void;
  onClose: () => void;
};

const label = "block text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-1";
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

function ColorField({ name, value, onPick }: { name: string; value: string; onPick: (v: string) => void }) {
  return (
    <label className="flex items-center justify-between gap-2 text-xs text-slate-700 dark:text-slate-200">
      <span>{name}</span>
      <span className="flex items-center gap-1.5">
        <span className="font-mono text-[10px] text-slate-400">{value}</span>
        <input
          type="color"
          value={value.length === 4 ? `#${[...value.slice(1)].map((c) => c + c).join("")}` : value}
          onChange={(e) => onPick(e.target.value)}
          className="h-7 w-9 cursor-pointer rounded border border-slate-200 dark:border-slate-700 bg-transparent p-0.5"
        />
      </span>
    </label>
  );
}

function Range({ name, value, min, max, onPick }: { name: string; value: number; min: number; max: number; onPick: (n: number) => void }) {
  return (
    <label className="block text-xs text-slate-700 dark:text-slate-200">
      <span className="flex justify-between">
        <span>{name}</span>
        <span className="font-mono text-[10px] text-slate-400">{value}px</span>
      </span>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onPick(Number(e.target.value))} className="w-full accent-[#1a80ff]" />
    </label>
  );
}

export function BoxPropertiesPanel({
  value,
  isLegacy,
  onChange,
  onIcon,
  onConvert,
  onDuplicate,
  onDelete,
  onMove,
  onClose,
}: BoxPropertiesPanelProps) {
  const set = (patch: Partial<BoxStyle>) => onChange({ ...value, ...patch });
  const setColor = (patch: Partial<BoxStyle>) => onChange({ ...value, ...patch, preset: "custom" });

  return (
    <aside
      data-testid="box-properties-panel"
      // Keep the editor selection/focus when interacting with the panel
      onMouseDown={(e) => {
        const t = e.target as HTMLElement;
        if (t.tagName !== "INPUT") e.preventDefault();
      }}
      className="w-full lg:w-72 shrink-0 self-start lg:sticky lg:top-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-4"
    >
      <div className="flex items-center justify-between">
        <strong className="text-sm text-slate-900 dark:text-white">🎨 Propiedades del cuadro</strong>
        <button type="button" onClick={onClose} className="text-xs font-bold text-slate-400 hover:text-slate-700 cursor-pointer" title="Cerrar panel">
          ✕
        </button>
      </div>

      {isLegacy ? (
        <div className="space-y-2 rounded-2xl border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/40 p-3 text-xs text-amber-900 dark:text-amber-200">
          <p className="font-semibold">
            Este cuadro usa el formato antiguo. Conviértelo para poder cambiar colores, bordes e icono.
          </p>
          <button
            type="button"
            onClick={onConvert}
            className="w-full rounded-xl bg-[#1a80ff] hover:bg-[#0066e6] px-3 py-2 font-bold text-white cursor-pointer"
          >
            ✨ Convertir a cuadro editable
          </button>
        </div>
      ) : (
        <>
          <div>
            <span className={label}>Estilo predefinido</span>
            <div className="grid grid-cols-2 gap-1.5">
              {BOX_PRESETS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => onChange(styleFromPreset(p.id, value))}
                  className={`flex items-center gap-1.5 rounded-xl px-2 py-1.5 text-left text-[11px] font-bold cursor-pointer border-2 ${
                    value.preset === p.id ? "ring-2 ring-[#1a80ff] ring-offset-1" : ""
                  }`}
                  style={{ background: p.bg, borderColor: p.border, color: p.text }}
                >
                  <span>{p.icon}</span>
                  <span className="truncate">{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className={label}>Colores {value.preset === "custom" && "(personalizado)"}</span>
            <ColorField name="Fondo" value={value.bg} onPick={(bg) => setColor({ bg })} />
            <ColorField name="Borde" value={value.border} onPick={(border) => setColor({ border })} />
            <ColorField name="Texto" value={value.text} onPick={(text) => setColor({ text })} />
          </div>

          <div className="space-y-2">
            <span className={label}>Borde</span>
            <Segmented<BoxBorderMode>
              value={value.borderMode}
              onSelect={(borderMode) =>
                set({ borderMode, borderWidth: borderMode === "left" ? Math.max(value.borderWidth, 3) : borderMode === "none" ? value.borderWidth : Math.max(1, Math.min(value.borderWidth, 3)) })
              }
              options={[
                { id: "left", label: "Izquierda" },
                { id: "full", label: "Completo" },
                { id: "dashed", label: "Discontinuo" },
                { id: "none", label: "Sin borde" },
              ]}
            />
            {value.borderMode !== "none" && (
              <Range name="Grosor" value={value.borderWidth} min={1} max={12} onPick={(borderWidth) => set({ borderWidth })} />
            )}
            <Range name="Esquinas" value={value.radius} min={0} max={32} onPick={(radius) => set({ radius })} />
            <Range name="Relleno interior" value={value.padding} min={0} max={40} onPick={(padding) => set({ padding })} />
          </div>

          <div className="space-y-2">
            <span className={label}>Sombra y alineación</span>
            <Segmented<BoxShadow>
              value={value.shadow}
              onSelect={(shadow) => set({ shadow })}
              options={[
                { id: "none", label: "Sin sombra" },
                { id: "sm", label: "Suave" },
                { id: "md", label: "Marcada" },
              ]}
            />
            <Segmented
              value={value.align}
              onSelect={(align) => set({ align })}
              options={[
                { id: "left", label: "⬅ Izquierda" },
                { id: "center", label: "↔ Centrado" },
              ]}
            />
          </div>

          <div>
            <span className={label}>Icono</span>
            <div className="flex flex-wrap gap-1">
              {BOX_ICONS.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  onClick={() => onIcon(icon)}
                  className="h-7 w-7 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#1a80ff] hover:bg-blue-50 dark:hover:bg-blue-950 cursor-pointer"
                >
                  {icon}
                </button>
              ))}
              <button
                type="button"
                onClick={() => onIcon("")}
                className={`${chip} ${chipOff}`}
                title="Quitar icono"
              >
                Sin icono
              </button>
            </div>
          </div>
        </>
      )}

      <div className="grid grid-cols-2 gap-1.5 border-t border-slate-100 dark:border-slate-800 pt-3">
        <button type="button" onClick={() => onMove(-1)} className={`${chip} ${chipOff}`}>⬆ Subir</button>
        <button type="button" onClick={() => onMove(1)} className={`${chip} ${chipOff}`}>⬇ Bajar</button>
        <button type="button" onClick={onDuplicate} className={`${chip} ${chipOff}`}>⧉ Duplicar</button>
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
