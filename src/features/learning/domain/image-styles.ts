/**
 * Editable image styles for lesson slides.
 *
 * Width is stored as a percentage (`15%`–`100%` or `"auto"`) so images adapt
 * cleanly on mobile and inside multi-column layouts.
 */

export type ImageAspectRatio = "auto" | "16/9" | "4/3" | "1/1";
export type ImageObjectFit = "contain" | "cover";
export type ImageObjectPosition = "center" | "top" | "bottom" | "left" | "right";
export type ImageAlign = "left" | "center" | "right";
export type ImageShadow = "none" | "sm" | "md";

export type ImageStyle = {
  widthPct: number | "auto";
  aspectRatio: ImageAspectRatio;
  objectFit: ImageObjectFit;
  objectPosition: ImageObjectPosition;
  align: ImageAlign;
  radius: number; // px (0..32)
  shadow: ImageShadow;
  border: boolean;
  alt: string;
  caption: string;
};

export const DEFAULT_IMAGE_STYLE: ImageStyle = {
  widthPct: "auto",
  aspectRatio: "auto",
  objectFit: "contain",
  objectPosition: "center",
  align: "center",
  radius: 16,
  shadow: "md",
  border: true,
  alt: "",
  caption: "",
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

export function parseWidthPct(rawWidth: string | null | undefined): number | "auto" {
  if (!rawWidth) return "auto";
  const trimmed = rawWidth.trim().toLowerCase();
  if (trimmed === "auto" || trimmed === "") return "auto";
  if (trimmed.endsWith("%")) {
    const n = parseFloat(trimmed);
    return Number.isFinite(n) ? clamp(Math.round(n), 15, 100) : "auto";
  }
  return "auto";
}

export function normalizeAspectRatio(raw: string | null | undefined): ImageAspectRatio {
  if (!raw) return "auto";
  const cleaned = raw.replace(/\s+/g, "");
  if (cleaned === "16/9" || cleaned === "4/3" || cleaned === "1/1") return cleaned;
  return "auto";
}

export function normalizeObjectFit(raw: string | null | undefined): ImageObjectFit {
  return raw?.trim() === "cover" ? "cover" : "contain";
}

export function normalizeObjectPosition(raw: string | null | undefined): ImageObjectPosition {
  const v = raw?.trim().toLowerCase();
  if (v === "top" || v === "bottom" || v === "left" || v === "right") return v;
  return "center";
}

export function normalizeAlign(className: string): ImageAlign {
  if (/(?:^|\s)(?:img-align-left|float-left)(?:\s|$)/.test(className)) return "left";
  if (/(?:^|\s)(?:img-align-right|float-right)(?:\s|$)/.test(className)) return "right";
  return "center";
}

export function normalizeShadow(className: string): ImageShadow {
  if (/(?:^|\s)shadow-(?:lg|md|xl)(?:\s|$)/.test(className)) return "md";
  if (/(?:^|\s)shadow(?:-sm|-2xs|-xs)?(?:\s|$)/.test(className)) return "sm";
  return "none";
}

export function buildWrapperClasses(align: ImageAlign, shadow: ImageShadow, border: boolean, extraClasses = ""): string {
  const alignCls =
    align === "left"
      ? "img-align-left"
      : align === "right"
        ? "img-align-right"
        : "img-align-center mx-auto";
  const shadowCls =
    shadow === "md" ? "shadow-lg" : shadow === "sm" ? "shadow-sm" : "shadow-none";
  const borderCls = border
    ? "border border-slate-200 dark:border-slate-800"
    : "border-0";

  const base = [
    "lesson-img-wrapper",
    "my-4",
    "overflow-hidden",
    "bg-white",
    "dark:bg-slate-900",
    "p-0",
    "text-center",
    "relative",
    "group",
    alignCls,
    shadowCls,
    borderCls,
  ];

  const strippedExtra = extraClasses
    .split(/\s+/)
    .filter(
      (c) =>
        c &&
        !/^(?:lesson-img-wrapper|img-align-(?:left|center|right)|float-(?:left|right)|mx-auto|shadow(?:-\w+)?|border(?:-\w+)*|dark:border-\w+(?:-\d+)?|rounded(?:-\w+)?|p-\d+|px-\d+|py-\d+|cbt-img-selected)$/.test(
          c,
        ),
    );

  return [...base, ...strippedExtra].join(" ").replace(/\s+/g, " ").trim();
}
