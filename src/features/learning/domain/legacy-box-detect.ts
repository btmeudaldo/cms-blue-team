import { DEFAULT_BOX_STYLE, styleFromPreset, type BoxPresetId, type BoxStyle } from "./box-styles";

/**
 * Detects the hand-written Tailwind boxes already present in the course
 * content (e.g. `border-l-4 border-amber-500 bg-amber-50/90 ...`) so the
 * editor can offer to convert them into editable `.cbt-box` elements.
 */

const COLOR_TO_PRESET: Record<string, BoxPresetId> = {
  amber: "warning",
  yellow: "warning",
  orange: "warning",
  rose: "danger",
  red: "danger",
  blue: "info",
  sky: "note",
  cyan: "note",
  emerald: "success",
  green: "success",
  slate: "neutral",
  gray: "neutral",
};

const COLOR_NAMES = Object.keys(COLOR_TO_PRESET).join("|");
const BG_RE = new RegExp(`(?:^|\\s)bg-(${COLOR_NAMES})-(50|100)(?:/\\d+)?(?=\\s|$)`);
const BORDER_RE = new RegExp(`(?:^|\\s)border-(${COLOR_NAMES})-(\\d{3})(?=\\s|$)`);

export type LegacyBoxMatch = {
  preset: BoxPresetId;
  style: BoxStyle;
};

/** Returns the equivalent preset if the class list looks like a legacy coloured box. */
export function detectLegacyBox(className: string): LegacyBoxMatch | null {
  if (!className || /(?:^|\s)cbt-box(?:\s|$)/.test(className)) return null;
  const bg = className.match(BG_RE);
  if (!bg) return null;
  const border = className.match(BORDER_RE);
  // Neutral slate/gray backgrounds are very common for layout cards: only treat
  // them as boxes when they also carry an accent left border.
  const color = border?.[1] ?? bg[1];
  const preset = COLOR_TO_PRESET[color];
  if (preset === "neutral" && !/(?:^|\s)border-l-\d/.test(className)) return null;

  const base = styleFromPreset(preset);
  const borderMode = /(?:^|\s)border-l-\d/.test(className)
    ? "left"
    : /(?:^|\s)border-dashed(?:\s|$)/.test(className)
      ? "dashed"
      : /(?:^|\s)border(?:-2)?(?=\s|$)/.test(className)
        ? "full"
        : "none";
  const shadow = /(?:^|\s)shadow-(md|lg|xl)/.test(className)
    ? "md"
    : /(?:^|\s)shadow/.test(className)
      ? "sm"
      : "none";
  const radius = /rounded-2xl/.test(className) ? 16 : /rounded-xl/.test(className) ? 12 : /rounded-lg/.test(className) ? 8 : /rounded/.test(className) ? 6 : 0;
  const borderWidth = Number(className.match(/(?:^|\s)border-l-(\d)/)?.[1] ?? (borderMode === "none" ? 0 : 1));

  return {
    preset,
    style: {
      ...base,
      borderMode,
      borderWidth: borderMode === "left" ? borderWidth : borderMode === "none" ? 0 : Math.max(1, borderWidth),
      radius,
      padding: DEFAULT_BOX_STYLE.padding,
      shadow,
    },
  };
}

/** Colour / border / shadow / radius / padding utilities replaced by the `.cbt-box` variables. */
const VISUAL_CLASS_RE =
  /^(?:dark:)?(?:bg-|border(?:-|$)|text-(?:slate|gray|amber|yellow|orange|rose|red|blue|sky|cyan|emerald|green)-|shadow|rounded|p-|px-|py-)/;

/** Removes the visual utilities from a legacy box, keeping layout/typography classes. */
export function stripLegacyVisualClasses(className: string): string {
  return className
    .split(/\s+/)
    .filter((c) => c && !VISUAL_CLASS_RE.test(c))
    .join(" ");
}
