import { describe, expect, it } from "vitest";

import { buildBoxHtml, readBoxStyle, serializeBoxStyle, styleFromPreset } from "./box-styles";
import { detectLegacyBox, stripLegacyVisualClasses } from "./legacy-box-detect";
import { sanitizeLessonHtml } from "./sanitize-html";

describe("box-styles", () => {
  it("round-trips a style through attributes", () => {
    const style = { ...styleFromPreset("danger"), borderMode: "full" as const, radius: 20, padding: 18, shadow: "md" as const, align: "center" as const };
    const attrs = serializeBoxStyle(style);
    expect(readBoxStyle(attrs)).toEqual(style);
  });

  it("keeps unrelated inline declarations and replaces old box vars", () => {
    const attrs = serializeBoxStyle(styleFromPreset("info"), "width: 50%; --box-bg: #000000");
    expect(attrs.style).toContain("width: 50%");
    expect(attrs.style).toContain("--box-bg: #eff6ff");
    expect(attrs.style).not.toContain("#000000");
  });

  it("rejects non-hex colours and clamps numbers", () => {
    const attrs = serializeBoxStyle({ ...styleFromPreset("info"), bg: "red;background:url(x)", padding: 500 });
    expect(attrs.style).not.toContain("url(");
    expect(readBoxStyle(attrs).padding).toBe(48);
  });

  it("falls back to defaults for unknown attributes", () => {
    const s = readBoxStyle({ style: "", "data-border": "weird", "data-cbt-box": "nope" });
    expect(s.borderMode).toBe("left");
    expect(s.preset).toBe("custom");
  });

  it("builds box HTML that survives sanitisation", () => {
    const html = buildBoxHtml("warning");
    expect(html).toContain('class="cbt-box"');
    expect(sanitizeLessonHtml(html)).toBe(html);
  });
});

describe("legacy-box-detect", () => {
  const amber =
    "p-1.5 rounded-xl border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 text-amber-950 dark:text-amber-200 text-[18px] leading-tight shadow-2xs";

  it("detects the amber left-border alerts used in DA42", () => {
    const m = detectLegacyBox(amber);
    expect(m?.preset).toBe("warning");
    expect(m?.style.borderMode).toBe("left");
    expect(m?.style.borderWidth).toBe(4);
    expect(m?.style.radius).toBe(12);
  });

  it("maps rose, blue and sky alerts", () => {
    expect(detectLegacyBox(amber.replace(/amber/g, "rose"))?.preset).toBe("danger");
    expect(detectLegacyBox(amber.replace(/amber/g, "blue"))?.preset).toBe("info");
    expect(detectLegacyBox("my-4 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 p-4")?.style.borderMode).toBe("full");
  });

  it("ignores plain layout cards and existing cbt boxes", () => {
    expect(detectLegacyBox("rounded-2xl border border-slate-200 bg-white p-4")).toBeNull();
    expect(detectLegacyBox("bg-slate-50 border border-slate-200 p-4")).toBeNull();
    expect(detectLegacyBox("cbt-box bg-amber-50")).toBeNull();
  });

  it("strips visual classes but keeps typography/layout", () => {
    expect(stripLegacyVisualClasses(amber)).toBe("text-[18px] leading-tight");
    expect(stripLegacyVisualClasses("p-2 mt-1 shrink-0 bg-red-50 border-red-200")).toBe("mt-1 shrink-0");
  });
});
