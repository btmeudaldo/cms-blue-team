/**
 * Editable content boxes ("cuadros") for lesson slides.
 *
 * Colours are stored as CSS custom properties in the inline `style` attribute
 * (never as dynamic Tailwind classes, which Tailwind v4 would not compile).
 * Layout modes are stored as `data-*` attributes. See `.cbt-box` in globals.css.
 */

export type BoxPresetId =
  | "warning"
  | "info"
  | "danger"
  | "note"
  | "success"
  | "procedure"
  | "neutral"
  | "custom";

export type BoxBorderMode = "left" | "full" | "dashed" | "none";
export type BoxShadow = "none" | "sm" | "md";
export type BoxAlign = "left" | "center";

export type BoxStyle = {
  preset: BoxPresetId;
  bg: string;
  border: string;
  text: string;
  borderMode: BoxBorderMode;
  borderWidth: number; // px
  radius: number; // px
  padding: number; // px
  shadow: BoxShadow;
  align: BoxAlign;
};

export type BoxPreset = {
  id: Exclude<BoxPresetId, "custom">;
  label: string;
  icon: string;
  title: string;
  bg: string;
  border: string;
  text: string;
};

/** Palette taken from the colours already used in the C172/DA40/DA42 slides. */
export const BOX_PRESETS: BoxPreset[] = [
  { id: "warning", label: "Precaución", icon: "⚠️", title: "PRECAUCIÓN", bg: "#fffbeb", border: "#f59e0b", text: "#451a03" },
  { id: "danger", label: "Peligro / Aviso", icon: "⛔", title: "AVISO", bg: "#fff1f2", border: "#f43f5e", text: "#4c0519" },
  { id: "info", label: "Información", icon: "ℹ️", title: "NOTA", bg: "#eff6ff", border: "#3b82f6", text: "#172554" },
  { id: "note", label: "Nota técnica", icon: "📘", title: "NOTA TÉCNICA", bg: "#f0f9ff", border: "#0ea5e9", text: "#082f49" },
  { id: "procedure", label: "Procedimiento", icon: "✈️", title: "PROCEDIMIENTO", bg: "#edf6ff", border: "#1a80ff", text: "#0a224a" },
  { id: "success", label: "Correcto / OK", icon: "✅", title: "CORRECTO", bg: "#ecfdf5", border: "#10b981", text: "#022c22" },
  { id: "neutral", label: "Neutro", icon: "📋", title: "RESUMEN", bg: "#f8fafc", border: "#cbd5e1", text: "#0f172a" },
];

export const BOX_ICONS = ["⚠️", "⛔", "ℹ️", "📘", "✈️", "✅", "📋", "🛑", "🔥", "⛽", "🧭", "🌦️", "📡", "🔧", "⏱️", "💡", "📌", "🛬", "🛫", "❄️"];

export const DEFAULT_BOX_STYLE: BoxStyle = {
  preset: "warning",
  bg: "#fffbeb",
  border: "#f59e0b",
  text: "#451a03",
  borderMode: "left",
  borderWidth: 4,
  radius: 12,
  padding: 12,
  shadow: "sm",
  align: "left",
};

export function getPreset(id: BoxPresetId): BoxPreset | undefined {
  return BOX_PRESETS.find((p) => p.id === id);
}

export function styleFromPreset(id: BoxPresetId, base: BoxStyle = DEFAULT_BOX_STYLE): BoxStyle {
  const preset = getPreset(id);
  if (!preset) return { ...base, preset: "custom" };
  return { ...base, preset: preset.id, bg: preset.bg, border: preset.border, text: preset.text };
}

const HEX_RE = /^#[0-9a-f]{3}([0-9a-f]{3})?$/i;
const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

function safeHex(value: string | undefined, fallback: string): string {
  return value && HEX_RE.test(value.trim()) ? value.trim().toLowerCase() : fallback;
}

function readVar(style: string, name: string): string | undefined {
  const m = style.match(new RegExp(`${name}\\s*:\\s*([^;]+)`));
  return m ? m[1].trim() : undefined;
}

function readPx(style: string, name: string, fallback: number, min: number, max: number): number {
  const raw = readVar(style, name);
  const n = raw ? parseFloat(raw) : NaN;
  return Number.isFinite(n) ? clamp(Math.round(n), min, max) : fallback;
}

function oneOf<T extends string>(value: string | null | undefined, options: readonly T[], fallback: T): T {
  return value && (options as readonly string[]).includes(value) ? (value as T) : fallback;
}

export type BoxAttributes = {
  style: string | null;
  "data-cbt-box": string | null;
  "data-border": string | null;
  "data-shadow": string | null;
  "data-align": string | null;
};

/** Reads a BoxStyle from the raw attributes of a `.cbt-box` element. */
export function readBoxStyle(attrs: Partial<BoxAttributes>): BoxStyle {
  const style = attrs.style || "";
  const d = DEFAULT_BOX_STYLE;
  return {
    preset: oneOf(attrs["data-cbt-box"], [...BOX_PRESETS.map((p) => p.id), "custom"] as const, "custom"),
    bg: safeHex(readVar(style, "--box-bg"), d.bg),
    border: safeHex(readVar(style, "--box-border"), d.border),
    text: safeHex(readVar(style, "--box-text"), d.text),
    borderMode: oneOf(attrs["data-border"], ["left", "full", "dashed", "none"] as const, d.borderMode),
    borderWidth: readPx(style, "--box-border-w", d.borderWidth, 0, 12),
    radius: readPx(style, "--box-radius", d.radius, 0, 40),
    padding: readPx(style, "--box-pad", d.padding, 0, 48),
    shadow: oneOf(attrs["data-shadow"], ["none", "sm", "md"] as const, d.shadow),
    align: oneOf(attrs["data-align"], ["left", "center"] as const, d.align),
  };
}

const BOX_VAR_NAMES = ["--box-bg", "--box-border", "--box-text", "--box-border-w", "--box-radius", "--box-pad"];

/**
 * Serialises a BoxStyle to attributes. `existingStyle` keeps any unrelated
 * inline declarations (e.g. width) already present on the element.
 */
export function serializeBoxStyle(box: BoxStyle, existingStyle = ""): BoxAttributes {
  const kept = existingStyle
    .split(";")
    .map((s) => s.trim())
    .filter((s) => s && !BOX_VAR_NAMES.some((v) => s.startsWith(`${v}:`) || s.startsWith(`${v} :`)));
  const vars = [
    `--box-bg: ${safeHex(box.bg, DEFAULT_BOX_STYLE.bg)}`,
    `--box-border: ${safeHex(box.border, DEFAULT_BOX_STYLE.border)}`,
    `--box-text: ${safeHex(box.text, DEFAULT_BOX_STYLE.text)}`,
    `--box-border-w: ${clamp(Math.round(box.borderWidth), 0, 12)}px`,
    `--box-radius: ${clamp(Math.round(box.radius), 0, 40)}px`,
    `--box-pad: ${clamp(Math.round(box.padding), 0, 48)}px`,
  ];
  return {
    style: [...kept, ...vars].join("; ") + ";",
    "data-cbt-box": box.preset,
    "data-border": box.borderMode,
    "data-shadow": box.shadow,
    "data-align": box.align,
  };
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

/** HTML for a brand-new box inserted from the "Bloques" menu. */
export function buildBoxHtml(presetId: BoxPresetId, bodyText = "Escribe aquí el contenido del cuadro."): string {
  const box = styleFromPreset(presetId);
  const preset = getPreset(presetId);
  const a = serializeBoxStyle(box);
  const icon = preset?.icon ?? "📌";
  const title = preset?.title ?? "TÍTULO";
  return (
    `<div class="cbt-box" data-cbt-box="${a["data-cbt-box"]}" data-border="${a["data-border"]}" data-shadow="${a["data-shadow"]}" data-align="${a["data-align"]}" style="${escapeHtml(a.style!)}">` +
    `<p><strong><span class="cbt-box__icon">${icon}</span> ${escapeHtml(title)}:</strong> ${escapeHtml(bodyText)}</p>` +
    `</div><p><br></p>`
  );
}
