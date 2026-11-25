import { describe, expect, it } from "vitest";

import { MCC_LEGACY_LESSONS, MCC_LESSONS, MCC_PDP_LESSONS, clampLeftPct } from "./mcc-course-data";
import { MCC_SOP_01, SOP_01_SLIDE_COUNT } from "./mcc/sop-01";
import { MCC_SOP_02, SOP_02_SLIDE_COUNT } from "./mcc/sop-02";
import { MCC_SOP_03, SOP_03_SLIDE_COUNT } from "./mcc/sop-03";

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

  it("only uses A320 Hostalia images, hides sources cleanly and excludes airlines/registrations", () => {
    const imgs = [...MCC_SOP_01.content_html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1]);
    expect(imgs).toHaveLength(SOP_01_SLIDE_COUNT);
    for (const src of imgs) {
      expect(src).toMatch(/^https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/(?:p\d{3}|fcom_a320_fcu)_[a-z0-9_]+\.webp(?:\?v=\d+)?$/);
    }
    for (const slide of slides) {
      // La fuente se conserva solo en el comentario HTML, nunca como texto visible.
      expect(slide).toMatch(/<!-- SLIDE SOP-01\.\d+: [^>]*\| (Source|Fuente): [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
    const htmlNoUrls = MCC_SOP_01.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a321|ops\s*2\.2|callouts fcu|ec-[a-z]{3})\b/i);
  });

  it("does not include the First FFS, navigation or PIR slides", () => {
    expect(MCC_SOP_01.content_html).not.toMatch(/First FFS|p01[1-7]_|Navigation buttons/);
  });
});

describe("SOP-02", () => {
  const slides = MCC_SOP_02.content_html.split("<!-- pagebreak -->");

  it("is a computable 0.75 h lesson with one flow image per slide", () => {
    expect(MCC_SOP_02.min_seconds).toBe(2700);
    expect(slides).toHaveLength(SOP_02_SLIDE_COUNT);
    for (const slide of slides) {
      expect(slide).toMatch(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p0[2-4]\d_flow_patterns\.webp"/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("covers every flow pattern page of the PDP (p.23–41)", () => {
    const pages = [...MCC_SOP_02.content_html.matchAll(/p0(\d\d)_flow_patterns/g)].map((m) => Number(m[1]));
    expect(new Set(pages)).toEqual(new Set([23, ...Array.from({ length: 18 }, (_, i) => 24 + i)]));
  });
});

describe("SOP-03", () => {
  const slides = MCC_SOP_03.content_html.split("<!-- pagebreak -->");

  it("is a computable 1 h lesson placed after SOP-02", () => {
    expect(MCC_SOP_03.min_seconds).toBe(3600);
    expect(slides).toHaveLength(SOP_03_SLIDE_COUNT);
    expect(MCC_SOP_03.sequence_order).toBe(MCC_SOP_02.sequence_order + 1);
  });

  it("uses only cockpit preparation images from the PDP (p.138–155) and hides sources", () => {
    const pages = [...MCC_SOP_03.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_cockpit_preparation\.webp"/g)].map((m) => Number(m[1]));
    expect(pages.length).toBeGreaterThan(0);
    for (const p of pages) {
      expect(p).toBeGreaterThanOrEqual(138);
      expect(p).toBeLessThanOrEqual(155);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-03\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_03.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a321|ec-[a-z]{3})\b/i);
  });
});
