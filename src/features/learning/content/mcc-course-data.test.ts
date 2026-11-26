import { describe, expect, it } from "vitest";

import { MCC_LEGACY_LESSONS, MCC_LESSONS, MCC_PDP_LESSONS, clampLeftPct } from "./mcc-course-data";
import { MCC_SOP_01, SOP_01_SLIDE_COUNT } from "./mcc/sop-01";
import { MCC_SOP_02, SOP_02_SLIDE_COUNT } from "./mcc/sop-02";
import { MCC_SOP_03, SOP_03_SLIDE_COUNT } from "./mcc/sop-03";
import { MCC_SOP_04, SOP_04_SLIDE_COUNT } from "./mcc/sop-04";
import { MCC_SOP_05, SOP_05_SLIDE_COUNT } from "./mcc/sop-05";
import { MCC_SOP_06, SOP_06_SLIDE_COUNT } from "./mcc/sop-06";
import { MCC_SOP_07, SOP_07_SLIDE_COUNT } from "./mcc/sop-07";
import { MCC_SOP_08, SOP_08_SLIDE_COUNT } from "./mcc/sop-08";
import { MCC_SOP_09, SOP_09_SLIDE_COUNT } from "./mcc/sop-09";
import { MCC_SOP_10, SOP_10_SLIDE_COUNT } from "./mcc/sop-10";

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
    const pages = [...MCC_SOP_03.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_cockpit_preparation\.webp(?:\?v=\d+)?"/g)].map((m) => Number(m[1]));
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

describe("SOP-04", () => {
  const slides = MCC_SOP_04.content_html.split("<!-- pagebreak -->");

  it("is a computable 1 h lesson placed after SOP-03", () => {
    expect(MCC_SOP_04.min_seconds).toBe(3600);
    expect(slides).toHaveLength(SOP_04_SLIDE_COUNT);
    expect(MCC_SOP_04.sequence_order).toBe(MCC_SOP_03.sequence_order + 1);
  });

  it("uses only A320 pages of the PDP chapter (p.156–171) or FCOM diagrams and hides sources", () => {
    const files = [...MCC_SOP_04.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/((?:p(\d{3})|fcom_a320)_[a-z0-9_]+)\.webp(?:\?v=\d+)?"/g)];
    expect(files).toHaveLength(SOP_04_SLIDE_COUNT);
    // Única lámina de fuera del capítulo: el flujo After Start solo A320 (Flow Patterns p.30) en lugar de p.171;
    // el resto son láminas p.156–170 o diagramas oficiales FCOM A320 (`fcom_a320_*`).
    const pages = files
      .filter((m) => m[1] !== "p030_flow_patterns" && !m[1].startsWith("fcom_a320_"))
      .map((m) => Number(m[2]));
    expect(pages).not.toContain(171);
    for (const p of pages) {
      expect(p).toBeGreaterThanOrEqual(156);
      expect(p).toBeLessThanOrEqual(171);
      // 164, 166 y 169 son láminas solo de A330.
      expect([164, 166, 169]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-04\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_04.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a321|ec-[a-z]{3})\b/i);
  });
});

describe("SOP-05", () => {
  const slides = MCC_SOP_05.content_html.split("<!-- pagebreak -->");

  it("is a computable 1 h lesson placed after SOP-04", () => {
    expect(MCC_SOP_05.min_seconds).toBe(3600);
    expect(slides).toHaveLength(SOP_05_SLIDE_COUNT);
    expect(MCC_SOP_05.sequence_order).toBe(MCC_SOP_04.sequence_order + 1);
  });

  it("uses one taxi/takeoff PDP image per slide (p.172–197) and hides sources", () => {
    const pages = [...MCC_SOP_05.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_(?:taxi_before_takeoff|takeoff)\.webp(?:\?v=\d+)?"/g)].map((m) => Number(m[1]));
    expect(pages).toHaveLength(SOP_05_SLIDE_COUNT);
    for (const p of pages) {
      expect(p).toBeGreaterThanOrEqual(172);
      expect(p).toBeLessThanOrEqual(197);
      // Flujos ya usados en SOP-02, lámina ya usada en SOP-01 y callouts de SOP-01.
      expect([180, 188, 191, 194, 195, 197]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-05\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_05.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a321|ec-[a-z]{3})\b/i);
  });
});

describe("SOP-06", () => {
  const slides = MCC_SOP_06.content_html.split("<!-- pagebreak -->");

  it("is a computable 1 h lesson placed after SOP-05", () => {
    expect(MCC_SOP_06.min_seconds).toBe(3600);
    expect(slides).toHaveLength(SOP_06_SLIDE_COUNT);
    expect(MCC_SOP_06.sequence_order).toBe(MCC_SOP_05.sequence_order + 1);
  });

  it("uses climb/cruise/descent PDP images (p.198–227) or FCOM diagrams without A330-only or SOP-02 duplicate pages", () => {
    const files = [...MCC_SOP_06.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/((?:p(\d{3})_(?:climb|cruise|descent)|fcom_a320)[a-z0-9_]*)\.webp(?:\?v=\d+)?"/g)];
    expect(files).toHaveLength(SOP_06_SLIDE_COUNT);
    const pages = files
      .filter((m) => !m[1].startsWith("fcom_a320_"))
      .map((m) => Number(m[2]));
    expect(pages.length).toBeGreaterThan(0);
    for (const p of pages) {
      expect(p).toBeGreaterThanOrEqual(198);
      expect(p).toBeLessThanOrEqual(227);
      expect([198, 200, 202, 217, 218, 225, 227]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-06\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_06.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a321|ec-[a-z]{3})\b/i);
  });
});

describe("SOP-07", () => {
  const slides = MCC_SOP_07.content_html.split("<!-- pagebreak -->");

  it("is a computable 1.5 h lesson placed after SOP-06", () => {
    expect(MCC_SOP_07.min_seconds).toBe(5400);
    expect(slides).toHaveLength(SOP_07_SLIDE_COUNT);
    expect(MCC_SOP_07.sequence_order).toBe(MCC_SOP_06.sequence_order + 1);
  });

  it("uses 2D/3D approach PDP images (p.228–263) or FCOM diagrams without SOP-01 duplicates, A330 values or repeated pages", () => {
    const files = [...MCC_SOP_07.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/((?:p(\d{3})_(?:2d|3d)_approach(?:_a320)?|fcom_a320_[a-z0-9_]+))\.webp(?:\?v=\d+)?"/g)];
    expect(files.length).toBeGreaterThan(0);
    expect(MCC_SOP_07.content_html).not.toMatch(/\/(?:p239_2d|p244_2d|p261_3d)_approach\.webp/);
    const pages = files
      .filter((m) => !m[1].startsWith("fcom_a320_"))
      .map((m) => Number(m[2]));
    expect(pages.length).toBeGreaterThan(0);
    for (const p of pages) {
      expect(p).toBeGreaterThanOrEqual(228);
      expect(p).toBeLessThanOrEqual(263);
      expect([233, 237, 239, 242, 245, 248, 249, 250, 251, 253, 258, 263]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-07\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_07.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a321|ec-[a-z]{3})\b/i);
  });
});

describe("SOP-08", () => {
  const slides = MCC_SOP_08.content_html.split("<!-- pagebreak -->");

  it("is a computable 1 h lesson placed after SOP-07", () => {
    expect(MCC_SOP_08.min_seconds).toBe(3600);
    expect(slides).toHaveLength(SOP_08_SLIDE_COUNT);
    expect(MCC_SOP_08.sequence_order).toBe(MCC_SOP_07.sequence_order + 1);
  });

  it("uses go-around/landing/parking PDP images (p.264–298) or FCOM diagrams without SOP-01/02 duplicates or A330 lines", () => {
    const files = [...MCC_SOP_08.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/((?:p(\d{3})_(?:go_around|landing|after_landing_parking_securing_the_a_c)(?:_a320)?|fcom_a320_[a-z0-9_]+))\.webp(?:\?v=\d+)?"/g)];
    expect(files.length).toBeGreaterThan(0);
    expect(MCC_SOP_08.content_html).not.toMatch(/\/p267_go_around\.webp/);
    const pages = files
      .filter((m) => !m[1].startsWith("fcom_a320_"))
      .map((m) => Number(m[2]));
    expect(pages.length).toBeGreaterThan(0);
    for (const p of pages) {
      expect(p).toBeGreaterThanOrEqual(264);
      expect(p).toBeLessThanOrEqual(298);
      expect([268, 271, 273, 274, 275, 278, 286, 287, 294, 295]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-08\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_08.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a321|ec-[a-z]{3})\b/i);
  });
});

describe("SOP-09", () => {
  const slides = MCC_SOP_09.content_html.split("<!-- pagebreak -->");

  it("is a computable 1 h lesson placed after SOP-08", () => {
    expect(MCC_SOP_09.min_seconds).toBe(3600);
    expect(slides).toHaveLength(SOP_09_SLIDE_COUNT);
    expect(MCC_SOP_09.sequence_order).toBe(MCC_SOP_08.sequence_order + 1);
  });

  it("uses normal procedures PDP images (p.299–318, 400–419) without SOP-01 duplicates or A330/neo pages", () => {
    const pages = [...MCC_SOP_09.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_(?:ap_fd_and_a_thr_engagement_disengagement|circling|glide_slope_interception_from_above|ground_speed_mini_function|normal_law_protections|use_of_bird|visual_pattern)\.webp(?:\?v=\d+)?"/g)].map((m) => Number(m[1]));
    expect(pages).toHaveLength(SOP_09_SLIDE_COUNT);
    for (const p of pages) {
      expect((p >= 299 && p <= 318) || (p >= 400 && p <= 419)).toBe(true);
      expect([300, 307, 308, 315, 407]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-09\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names, other types and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_09.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a321|a320neo|neo|ec-[a-z]{3})\b/i);
  });
});
describe("SOP-10", () => {
  const slides = MCC_SOP_10.content_html.split("<!-- pagebreak -->");

  it("is a computable 30 min lesson placed after SOP-09", () => {
    expect(MCC_SOP_10.min_seconds).toBe(1800);
    expect(slides).toHaveLength(SOP_10_SLIDE_COUNT);
    expect(MCC_SOP_10.sequence_order).toBe(MCC_SOP_09.sequence_order + 1);
  });

  it("uses ILS raw data / LVO PDP images (p.341–399) without multi-type or duplicated pages", () => {
    const pages = [...MCC_SOP_10.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_(?:ils_raw_data|low_visibility_operations)\.webp(?:\?v=\d+)?"/g)].map((m) => Number(m[1]));
    expect(pages).toHaveLength(SOP_10_SLIDE_COUNT);
    for (const p of pages) {
      expect(p).toBeGreaterThanOrEqual(341);
      expect(p).toBeLessThanOrEqual(399);
      expect([341, 370, 371, 372, 374, 376, 377, 378, 380, 392, 398, 399]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-10\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names, other types, options not fitted and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_10.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a350|a380|a321|neo|fls|bxl|hud|ec-[a-z]{3})\b/i);
  });
});