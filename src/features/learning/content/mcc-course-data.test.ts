import { describe, expect, it } from "vitest";

import { MCC_LEGACY_LESSONS, MCC_LESSONS, MCC_PDP_LESSONS, clampLeftPct } from "./mcc-course-data";
import { MCC_SOP_01, SOP_01_SLIDE_COUNT } from "./mcc/sop-01";

describe("clampLeftPct", () => {
  it("defaults to a 50/50 split", () => {
    expect(clampLeftPct()).toBe(50);
  });

  it("uses the same 15–85 range as the lesson editor", () => {
    expect(clampLeftPct(60)).toBe(60);
    expect(clampLeftPct(5)).toBe(15);
    expect(clampLeftPct(95)).toBe(85);
    expect(clampLeftPct(62.4)).toBe(62);
  });
});

describe("MCC lessons", () => {
  it("keep the 50/50 grid for slides without leftPct", () => {
    const html = MCC_LEGACY_LESSONS[0].content_html;
    expect(html).toContain('data-left-pct="50"');
    expect(html).toContain("grid-template-columns: minmax(0px, 50fr) minmax(0px, 50fr) !important;");
    expect(html).not.toContain("undefined");
  });

  it("list the PDP lessons first and the legacy lessons after them", () => {
    expect(MCC_LESSONS[0]).toBe(MCC_PDP_LESSONS[0]);
    const legacyOrders = MCC_LESSONS.slice(MCC_PDP_LESSONS.length).map((l) => l.sequence_order);
    expect(Math.min(...legacyOrders)).toBeGreaterThan(100);
    expect(new Set(MCC_LESSONS.map((l) => l.id)).size).toBe(MCC_LESSONS.length);
    expect(new Set(MCC_LESSONS.map((l) => l.sequence_order)).size).toBe(MCC_LESSONS.length);
  });
});

describe("SOP-01", () => {
  const slides = MCC_SOP_01.content_html.split("<!-- pagebreak -->");

  it("is a computable 1 h lesson", () => {
    expect(MCC_SOP_01.min_seconds).toBe(3600);
    expect(slides).toHaveLength(SOP_01_SLIDE_COUNT);
  });

  it("only uses PDP images hosted on Hostalia and cites a source on every slide", () => {
    const imgs = [...MCC_SOP_01.content_html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1]);
    expect(imgs.length).toBeGreaterThan(0);
    for (const src of imgs) {
      expect(src).toMatch(/^https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p\d{3}_[a-z0-9_]+\.webp$/);
    }
    for (const slide of slides) {
      // La fuente se conserva solo en el comentario HTML, nunca como texto visible.
      expect(slide).toMatch(/<!-- SLIDE SOP-01\.\d+: [^>]*\| (Source|Fuente): [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("does not include the First FFS, navigation or PIR slides", () => {
    expect(MCC_SOP_01.content_html).not.toMatch(/First FFS|p01[1-7]_|Navigation buttons/);
  });
});
