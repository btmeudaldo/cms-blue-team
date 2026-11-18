/**
 * Non-destructive SVG annotations overlaid on `.lesson-img-wrapper`.
 * Coordinates use a normalized 0..1000 viewBox so annotations scale cleanly
 * at any responsive image width.
 */

export type ImageAnnotation =
  | { kind: "pin"; x: number; y: number; label: string; color: string }
  | { kind: "circle"; x: number; y: number; r: number; color: string };

export function buildAnnotationsSvg(items: ImageAnnotation[]): string {
  if (items.length === 0) return "";
  const shapes = items
    .map((item) => {
      if (item.kind === "pin") {
        return (
          `<g data-ann="pin">` +
          `<circle cx="${item.x}" cy="${item.y}" r="26" fill="${item.color}" stroke="#ffffff" stroke-width="5" />` +
          `<text x="${item.x}" y="${item.y + 9}" text-anchor="middle" fill="#ffffff" font-size="26" font-weight="800" font-family="sans-serif">${item.label}</text>` +
          `</g>`
        );
      }
      return `<circle data-ann="circle" cx="${item.x}" cy="${item.y}" r="${item.r}" fill="none" stroke="${item.color}" stroke-width="8" />`;
    })
    .join("");

  return `<svg class="cbt-img-annotations pointer-events-none absolute inset-0 w-full h-full z-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">${shapes}</svg>`;
}
