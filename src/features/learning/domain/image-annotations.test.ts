import { describe, expect, it } from "vitest";
import { buildAnnotationsSvg } from "./image-annotations";
import { sanitizeLessonHtml } from "./sanitize-html";

describe("image-annotations", () => {
  it("returns empty string when there are no annotations", () => {
    expect(buildAnnotationsSvg([])).toBe("");
  });

  it("builds SVG overlay with pins and circles that survives sanitization", () => {
    const svg = buildAnnotationsSvg([
      { kind: "pin", x: 250, y: 300, label: "1", color: "#ef4444" },
      { kind: "circle", x: 500, y: 500, r: 90, color: "#1a80ff" },
    ]);
    expect(svg).toContain('class="cbt-img-annotations');
    expect(svg).toContain('data-ann="pin"');
    expect(svg).toContain('data-ann="circle"');
    expect(sanitizeLessonHtml(svg)).toBe(svg);
  });
});
