import { describe, expect, it } from "vitest";

import { MCC_LEGACY_LESSONS, MCC_LESSONS, MCC_PDP_LESSONS, clampLeftPct } from "./mcc-course-data";
import {
  MCC_MODULES,
  MCC_SECONDS_PER_SLIDE,
  buildMccSlide,
  mccMinSeconds,
  mccVideoSeconds,
  youtubeEmbedUrl,
} from "./mcc/slide-builder";
import { sanitizeLessonHtml } from "../domain/sanitize-html";
import { INT_01_SLIDE_COUNT, MCC_INT_01 } from "./mcc/int-01";
import { INT_02_SLIDE_COUNT, MCC_INT_02 } from "./mcc/int-02";
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
import { MCC_SOP_11, SOP_11_SLIDE_COUNT } from "./mcc/sop-11";
import { MCC_SOP_12, SOP_12_SLIDE_COUNT } from "./mcc/sop-12";
import { MCC_SOP_13, SOP_13_SLIDE_COUNT } from "./mcc/sop-13";
import { MCC_SOP_14, SOP_14_SLIDE_COUNT } from "./mcc/sop-14";
import { MCC_SIS_01, SIS_01_SLIDE_COUNT } from "./mcc/sis-01";
import { MCC_SIS_02, SIS_02_SLIDE_COUNT } from "./mcc/sis-02";

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
    const pdpOrders = MCC_PDP_LESSONS.map((l) => l.sequence_order);
    expect(pdpOrders).toEqual(Array.from({ length: MCC_PDP_LESSONS.length }, (_, i) => i + 1));
    expect(MCC_SOP_02.sequence_order).toBe(MCC_SOP_01.sequence_order + 1);
    const legacyLessons = MCC_LESSONS.slice(MCC_PDP_LESSONS.length);
    const legacyOrders = legacyLessons.map((l) => l.sequence_order);
    expect(Math.min(...legacyOrders)).toBeGreaterThan(100);
    expect(legacyLessons.every((l) => l.module_title === MCC_MODULES.LEGACY)).toBe(true);
    expect(
      [
        MCC_SOP_01,
        MCC_SOP_02,
        MCC_SOP_03,
        MCC_SOP_04,
        MCC_SOP_05,
        MCC_SOP_06,
        MCC_SOP_07,
        MCC_SOP_08,
        MCC_SOP_09,
        MCC_SOP_10,
      ].every((l) => l.module_title === MCC_MODULES.NORMAL_SOP),
    ).toBe(true);
    expect(
      [MCC_SOP_11, MCC_SOP_12, MCC_SOP_13, MCC_SOP_14].every(
        (l) => l.module_title === MCC_MODULES.ABNORMAL_SOP,
      ),
    ).toBe(true);
    expect(MCC_SIS_01.module_title).toBe(MCC_MODULES.SYSTEMS);
    expect(MCC_SIS_02.module_title).toBe(MCC_MODULES.SYSTEMS);
    expect(new Set(MCC_LESSONS.map((l) => l.id)).size).toBe(MCC_LESSONS.length);
    expect(new Set(MCC_LESSONS.map((l) => l.sequence_order)).size).toBe(MCC_LESSONS.length);
  });
});

describe("MCC video embeds", () => {
  const video = { youtubeId: "abcDEF123_-", title: 'Briefing "demo"', channel: "Canal de prueba", durationSeconds: 245, start: 30 };
  const spec = {
    comment: "SLIDE TEST.1: video",
    eyebrow: "E",
    title: "T",
    subtitle: "S",
    leftTitle: "L",
    rightTitle: "R",
    image: "https://www.blueteam.es/elearning/media/mcc/pdp/x.webp",
    sourceRef: "Source: test",
    cards: [],
    video,
  };

  it("renders a privacy-enhanced YouTube iframe instead of the image", () => {
    const html = buildMccSlide(spec);
    expect(html).toContain('src="https://www.youtube-nocookie.com/embed/abcDEF123_-?rel=0&start=30"');
    expect(html).toContain('data-video-seconds="245"');
    expect(html).toContain('title="Briefing &quot;demo&quot;"');
    expect(html).toContain("Vídeo: Canal de prueba (YouTube)");
    expect(html).not.toContain("<img ");
  });

  it("survives the lesson HTML sanitizer", () => {
    const clean = sanitizeLessonHtml(buildMccSlide(spec));
    expect(clean).toContain("<iframe");
    expect(clean).toContain("youtube-nocookie.com/embed/abcDEF123_-?rel=0&start=30");
  });

  it("rejects invalid IDs and adds the video time to the lesson time", () => {
    expect(() => youtubeEmbedUrl({ ...video, youtubeId: "https://youtu.be/x" })).toThrow();
    expect(mccVideoSeconds([spec, { ...spec, video: undefined }])).toBe(245);
    expect(mccMinSeconds(20, 245)).toBe(3300);
  });
});

describe("MCC pacing", () => {
  it("computes min_seconds at 2.5 min per slide, rounded to 5 min", () => {
    expect(MCC_SECONDS_PER_SLIDE).toBe(150);
    expect(mccMinSeconds(20)).toBe(3000);
    expect(mccMinSeconds(25)).toBe(3900);
    expect(mccMinSeconds(15)).toBe(2400);
    for (const lesson of MCC_PDP_LESSONS) {
      const slides = lesson.content_html.split("<!-- pagebreak -->").length;
      const videoSeconds = [...lesson.content_html.matchAll(/data-video-seconds="(\d+)"/g)].reduce((s, m) => s + Number(m[1]), 0);
      expect(lesson.min_seconds).toBe(mccMinSeconds(slides, videoSeconds));
      expect(lesson.min_seconds % 300).toBe(0);
    }
  });

  it("keeps the built lessons within the 30 h online budget", () => {
    const total = MCC_PDP_LESSONS.reduce((sum, l) => sum + l.min_seconds, 0);
    expect(total).toBeLessThanOrEqual(108_000);
  });
});

describe("INT-01", () => {
  const slides = MCC_INT_01.content_html.split("<!-- pagebreak -->");

  it("opens the course in the introduction module, before SOP-01", () => {
    expect(MCC_PDP_LESSONS[0]).toBe(MCC_INT_01);
    expect(MCC_INT_01.sequence_order).toBe(1);
    expect(MCC_INT_01.module_title).toBe(MCC_MODULES.INTRO);
    expect(slides).toHaveLength(INT_01_SLIDE_COUNT);
    expect(MCC_INT_01.min_seconds).toBe(mccMinSeconds(INT_01_SLIDE_COUNT));
  });

  it("uses FCOM/FCTM figures hosted on Hostalia and keeps the FCTM source in the comment", () => {
    const images = [...MCC_INT_01.content_html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1]);
    expect(images).toHaveLength(INT_01_SLIDE_COUNT);
    for (const url of images) {
      expect(url).toMatch(/^https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/fcom_a320_[a-z0-9_]+\.webp(\?v=\d+)?$/);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE INT-01\.\d+: [^>]*\| Source: FCTM A320 AOP-10[^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes optional equipment, airlines, other types and registrations", () => {
    const htmlNoUrls = MCC_INT_01.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:HUD|DCDU)\b/);
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a350|a380|a321|neo|ec-[a-z]{3})\b/i);
  });
});

describe("INT-02", () => {
  const slides = MCC_INT_02.content_html.split("<!-- pagebreak -->");

  it("follows INT-01 in the introduction module, before SOP-01", () => {
    expect(MCC_INT_02.sequence_order).toBe(MCC_INT_01.sequence_order + 1);
    expect(MCC_SOP_01.sequence_order).toBe(MCC_INT_02.sequence_order + 1);
    expect(MCC_INT_02.module_title).toBe(MCC_MODULES.INTRO);
    expect(slides).toHaveLength(INT_02_SLIDE_COUNT);
    expect(MCC_INT_02.min_seconds).toBe(mccMinSeconds(INT_02_SLIDE_COUNT));
  });

  it("uses hosted FCOM figures or PDP briefing slides and keeps the FCTM source in the comment", () => {
    const images = [...MCC_INT_02.content_html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1]);
    expect(images).toHaveLength(INT_02_SLIDE_COUNT);
    for (const url of images) {
      expect(url).toMatch(/^https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/(fcom_a320_[a-z0-9_]+|p\d{3}_[a-z_]+)\.webp(\?v=\d+)?$/);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE INT-02\.\d+: [^>]*\| Source: FCTM A320 AOP-20[^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("includes the TEM briefing structure and excludes airlines, other types and registrations", () => {
    const htmlNoUrls = MCC_INT_02.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).toContain("MITIGATIONS");
    expect(htmlNoUrls).toContain("shared mental model");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a350|a380|a321|neo|ec-[a-z]{3})\b/i);
  });
});

describe("SOP-01", () => {
  const slides = MCC_SOP_01.content_html.split("<!-- pagebreak -->");

  it("is a computable lesson (2.5 min/slide)", () => {
    expect(MCC_SOP_01.min_seconds).toBe(mccMinSeconds(SOP_01_SLIDE_COUNT));
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

  it("is a computable lesson (2.5 min/slide) with one flow image per slide", () => {
    expect(MCC_SOP_02.min_seconds).toBe(mccMinSeconds(SOP_02_SLIDE_COUNT));
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

  it("is a computable lesson (2.5 min/slide) placed after SOP-02", () => {
    expect(MCC_SOP_03.min_seconds).toBe(mccMinSeconds(SOP_03_SLIDE_COUNT));
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

  it("is a computable lesson (2.5 min/slide) placed after SOP-03", () => {
    expect(MCC_SOP_04.min_seconds).toBe(mccMinSeconds(SOP_04_SLIDE_COUNT));
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

  it("is a computable lesson (2.5 min/slide) placed after SOP-04", () => {
    expect(MCC_SOP_05.min_seconds).toBe(mccMinSeconds(SOP_05_SLIDE_COUNT));
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

  it("is a computable lesson (2.5 min/slide) placed after SOP-05", () => {
    expect(MCC_SOP_06.min_seconds).toBe(mccMinSeconds(SOP_06_SLIDE_COUNT));
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

  it("is a computable lesson (2.5 min/slide) placed after SOP-06", () => {
    expect(MCC_SOP_07.min_seconds).toBe(mccMinSeconds(SOP_07_SLIDE_COUNT));
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

  it("is a computable lesson (2.5 min/slide) placed after SOP-07", () => {
    expect(MCC_SOP_08.min_seconds).toBe(mccMinSeconds(SOP_08_SLIDE_COUNT));
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

  it("is a computable lesson (2.5 min/slide) placed after SOP-08", () => {
    expect(MCC_SOP_09.min_seconds).toBe(mccMinSeconds(SOP_09_SLIDE_COUNT));
    expect(slides).toHaveLength(SOP_09_SLIDE_COUNT);
    expect(MCC_SOP_09.sequence_order).toBe(MCC_SOP_08.sequence_order + 1);
  });

  it("uses normal procedures PDP images (p.299–318, 400–419) without SOP-01 duplicates or A330/neo pages", () => {
    const pages = [...MCC_SOP_09.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_(?:ap_fd_and_a_thr_engagement_disengagement|circling|glide_slope_interception_from_above|ground_speed_mini_function|normal_law_protections|use_of_bird|visual_pattern)(?:_a320)?\.webp(?:\?v=\d+)?"/g)].map((m) => Number(m[1]));
    expect(pages).toHaveLength(SOP_09_SLIDE_COUNT);
    expect(MCC_SOP_09.content_html).not.toMatch(/\/(?:p311_glide_slope_interception_from_above|p314_ground_speed_mini_function|p316_ground_speed_mini_function|p317_ground_speed_mini_function)\.webp/);
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

  it("is a computable lesson (2.5 min/slide) placed after SOP-09", () => {
    expect(MCC_SOP_10.min_seconds).toBe(mccMinSeconds(SOP_10_SLIDE_COUNT));
    expect(slides).toHaveLength(SOP_10_SLIDE_COUNT);
    expect(MCC_SOP_10.sequence_order).toBe(MCC_SOP_09.sequence_order + 1);
  });

  it("uses ILS raw data / LVO PDP images (p.341–399) without multi-type or duplicated pages", () => {
    const pages = [...MCC_SOP_10.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_(?:ils_raw_data|low_visibility_operations)(?:_a320)?\.webp(?:\?v=\d+)?"/g)].map((m) => Number(m[1]));
    expect(pages).toHaveLength(SOP_10_SLIDE_COUNT);
    expect(MCC_SOP_10.content_html).not.toMatch(/\/(?:p353_ils_raw_data|p368_ils_raw_data|p397_low_visibility_operations)\.webp/);
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
describe("SOP-11", () => {
  const slides = MCC_SOP_11.content_html.split("<!-- pagebreak -->");

  it("is a computable lesson (2.5 min/slide) placed after SOP-10", () => {
    expect(MCC_SOP_11.min_seconds).toBe(mccMinSeconds(SOP_11_SLIDE_COUNT));
    expect(slides).toHaveLength(SOP_11_SLIDE_COUNT);
    expect(MCC_SOP_11.sequence_order).toBe(MCC_SOP_10.sequence_order + 1);
  });

  it("uses abnormal operations / summary PDP images (p.420–442) without the multi-type covers", () => {
    const pages = [...MCC_SOP_11.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_(?:management_of_abnormal_operations|use_of_summary)(?:_a320)?\.webp(?:\?v=\d+)?"/g)].map((m) => Number(m[1]));
    expect(pages).toHaveLength(SOP_11_SLIDE_COUNT);
    expect(MCC_SOP_11.content_html).not.toMatch(/\/(?:p424|p425)_management_of_abnormal_operations\.webp/);
    for (const p of pages) {
      expect(p).toBeGreaterThanOrEqual(420);
      expect(p).toBeLessThanOrEqual(442);
      expect([420, 436]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-11\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names, other types and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_11.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a350|a380|a321|neo|ec-[a-z]{3})\b/i);
  });
});
describe("SOP-12", () => {
  const slides = MCC_SOP_12.content_html.split("<!-- pagebreak -->");

  it("is a computable lesson (2.5 min/slide) placed after SOP-11", () => {
    expect(MCC_SOP_12.min_seconds).toBe(mccMinSeconds(SOP_12_SLIDE_COUNT));
    expect(slides).toHaveLength(SOP_12_SLIDE_COUNT);
    expect(MCC_SOP_12.sequence_order).toBe(MCC_SOP_11.sequence_order + 1);
  });

  it("uses emergency PDP images without covers, multi-type pages, SOP-02 flows or ROPS", () => {
    const pages = [...MCC_SOP_12.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_(?:all_engine_flameout|emergency_evacuation|engine_failure_after_v1|engine_failure_in_cruise|low_energy_aural_alert|rejected_takeoff)\.webp(?:\?v=\d+)?"/g)].map((m) => Number(m[1]));
    expect(pages).toHaveLength(SOP_12_SLIDE_COUNT);
    for (const p of pages) {
      expect((p >= 443 && p <= 450) || (p >= 492 && p <= 511) || (p >= 522 && p <= 529)).toBe(true);
      expect([446, 447, 492, 494, 500, 505, 522, 524, 529]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-12\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names, other types, options not fitted and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_12.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a350|a380|a321|neo|rops|ec-[a-z]{3})\b/i);
  });
});
describe("SOP-13", () => {
  const slides = MCC_SOP_13.content_html.split("<!-- pagebreak -->");

  it("is a computable lesson (2.5 min/slide) placed after SOP-12", () => {
    expect(MCC_SOP_13.min_seconds).toBe(mccMinSeconds(SOP_13_SLIDE_COUNT));
    expect(slides).toHaveLength(SOP_13_SLIDE_COUNT);
    expect(MCC_SOP_13.sequence_order).toBe(MCC_SOP_12.sequence_order + 1);
  });

  it("uses emergency PDP images without covers, multi-type pages or equipment not fitted", () => {
    const pages = [...MCC_SOP_13.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_(?:dual_fmgc_failure|emergency_descent|flight_control_laws|flight_crew_incapacitation|smoke|unreliable_speed_indication)\.webp(?:\?v=\d+)?"/g)].map((m) => Number(m[1]));
    expect(pages).toHaveLength(SOP_13_SLIDE_COUNT);
    for (const p of pages) {
      expect((p >= 451 && p <= 460) || (p >= 483 && p <= 491) || (p >= 512 && p <= 521) || (p >= 534 && p <= 540) || (p >= 557 && p <= 563)).toBe(true);
      expect([451, 454, 458, 460, 483, 491, 512, 513, 516, 534, 535, 539, 563]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-13\.\d+: [^>]*\| Source: [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names, other types, options not fitted and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_13.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a350|a380|a321|neo|buss|ec-[a-z]{3})\b/i);
  });
});
describe("SOP-14", () => {
  const slides = MCC_SOP_14.content_html.split("<!-- pagebreak -->");

  it("is a computable lesson (2.5 min/slide) placed after SOP-13", () => {
    expect(MCC_SOP_14.min_seconds).toBe(mccMinSeconds(SOP_14_SLIDE_COUNT));
    expect(slides).toHaveLength(SOP_14_SLIDE_COUNT);
    expect(MCC_SOP_14.sequence_order).toBe(MCC_SOP_13.sequence_order + 1);
  });

  it("uses EGPWS/stall/TCAS/windshear PDP images without covers, multi-type or AP/FD TCAS pages", () => {
    const pages = [...MCC_SOP_14.content_html.matchAll(/<img src="https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/p(\d{3})_(?:egpws|stall_recovery|tcas|windshear)\.webp(?:\?v=\d+)?"/g)].map((m) => Number(m[1]));
    expect(pages).toHaveLength(SOP_14_SLIDE_COUNT);
    for (const p of pages) {
      expect((p >= 461 && p <= 482) || (p >= 541 && p <= 556) || (p >= 672 && p <= 685)).toBe(true);
      expect([461, 480, 481, 541, 545, 548, 549, 550, 556, 672]).not.toContain(p);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SOP-14\.\d+: [^>]*\| Source: [^>]*-->/);
      const visible = slide.replace(/<!--[\s\S]*?-->/g, "");
      expect(visible).not.toMatch(/(Source|Fuente): /);
      expect(visible).not.toContain("AP/FD TCAS");
      expect(slide).not.toContain("undefined");
    }
  });

  it("excludes airline names, other types and aircraft registrations", () => {
    const htmlNoUrls = MCC_SOP_14.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a350|a380|a321|neo|ec-[a-z]{3})\b/i);
  });
});
describe("SIS-01", () => {
  const slides = MCC_SIS_01.content_html.split("<!-- pagebreak -->");

  it("is a computable lesson (2.5 min/slide) placed right after SOP-14 (SOP → systems)", () => {
    expect(MCC_SIS_01.min_seconds).toBe(mccMinSeconds(SIS_01_SLIDE_COUNT));
    expect(slides).toHaveLength(SIS_01_SLIDE_COUNT);
    expect(SIS_01_SLIDE_COUNT).toBe(15);
    expect(MCC_SIS_01.sequence_order).toBe(MCC_SOP_14.sequence_order + 1);
  });

  it("uses only FCOM figures hosted on Hostalia and keeps the source in the comment", () => {
    const images = [...MCC_SIS_01.content_html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1]);
    expect(images).toHaveLength(SIS_01_SLIDE_COUNT);
    for (const url of images) {
      expect(url).toMatch(/^https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/fcom_a320_sis_[a-z_]+\.webp\?v=\d+$/);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SIS-01\.\d+: [^>]*\| Source: FCOM A320 [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("applies the CTA-1 corrections and excludes airlines, other types and registrations", () => {
    const htmlNoUrls = MCC_SIS_01.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).not.toMatch(/12\.14|LD3|Golden Rule/i);
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a350|a380|a321|neo|ec-[a-z]{3})\b/i);
  });
});
describe("SIS-02", () => {
  const slides = MCC_SIS_02.content_html.split("<!-- pagebreak -->");

  it("is a computable lesson (2.5 min/slide) placed right after SIS-01", () => {
    expect(MCC_SIS_02.min_seconds).toBe(mccMinSeconds(SIS_02_SLIDE_COUNT));
    expect(slides).toHaveLength(SIS_02_SLIDE_COUNT);
    expect(SIS_02_SLIDE_COUNT).toBe(15);
    expect(MCC_SIS_02.sequence_order).toBe(MCC_SIS_01.sequence_order + 1);
  });

  it("uses only FCOM figures hosted on Hostalia and keeps the source in the comment", () => {
    const images = [...MCC_SIS_02.content_html.matchAll(/<img src="([^"]+)"/g)].map((m) => m[1]);
    expect(images).toHaveLength(SIS_02_SLIDE_COUNT);
    for (const url of images) {
      expect(url).toMatch(/^https:\/\/www\.blueteam\.es\/elearning\/media\/mcc\/pdp\/fcom_a320_sis_[a-z_]+\.webp\?v=\d+$/);
    }
    for (const slide of slides) {
      expect(slide).toMatch(/<!-- SLIDE SIS-02\.\d+: [^>]*\| Source: FCOM A320 [^>]*-->/);
      expect(slide.replace(/<!--[\s\S]*?-->/g, "")).not.toMatch(/(Source|Fuente): /);
      expect(slide).not.toContain("undefined");
    }
  });

  it("uses the EC-ILQ usable fuel figures, no ACT, and excludes airlines, other types and registrations", () => {
    const htmlNoUrls = MCC_SIS_02.content_html.replace(/https:\/\/[^\s"'>]+/g, "");
    expect(htmlNoUrls).toContain("18 729");
    expect(htmlNoUrls).toContain("5 435");
    expect(htmlNoUrls).not.toMatch(/\bACT\b|Additional Center Tank/);
    expect(htmlNoUrls).not.toMatch(/\b(?:iberia|vueling|ibs|a330|a340|a350|a380|a321|neo|ec-[a-z]{3})\b/i);
  });
});