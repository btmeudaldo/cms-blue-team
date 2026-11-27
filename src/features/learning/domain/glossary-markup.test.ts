import { describe, expect, it } from "vitest";
import { annotateGlossaryHtml } from "./glossary-markup";
import { MCC_GLOSSARY } from "../content/mcc-glossary";
import { sanitizeLessonHtml } from "./sanitize-html";

function stripTags(html: string): string {
  return html.replace(/<[^>]+>/g, "");
}

describe("annotateGlossaryHtml", () => {
  it("wraps acronyms in body text without altering visible text", () => {
    const input = `<div class="space-y-1.5"><p>Check the ND and PFD during ECAM actions.</p></div>`;
    const output = annotateGlossaryHtml(input, MCC_GLOSSARY);

    expect(stripTags(output)).toBe(stripTags(input));
    expect(output).toContain('data-glossary-term="ND">ND</button>');
    expect(output).toContain('data-glossary-term="PFD">PFD</button>');
    expect(output).toContain('data-glossary-term="ECAM">ECAM</button>');
  });

  it("matches only whole words and never corrupts words like LANDING or FLAPS", () => {
    const input = `<p>LANDING GEAR and FLAPS stay normal while AP and ND work.</p>`;
    const output = annotateGlossaryHtml(input, MCC_GLOSSARY);

    expect(output).not.toContain("LANDING</button>");
    expect(output).not.toContain("FLAPS</button>");
    expect(output).toContain('data-glossary-term="AP">AP</button>');
    expect(output).toContain('data-glossary-term="ND">ND</button>');
  });

  it("never modifies HTML attributes, h1 titles, existing buttons, or source footer", () => {
    const input = `
      <div>
        <h1>1.8 ND and ECAM Overview</h1>
        <img src="https://www.blueteam.es/elearning/media/mcc/pdp/fcom_a320_sis_nd.webp" alt="ND and PFD Diagram" />
        <p>The ND shows F-PLN and TCAS.</p>
        <button type="button">Existing ND button</button>
        <div class="text-[10px] border-t border-slate-200 dark:border-slate-800 shrink-0">Source: FCOM ND ATA 31</div>
      </div>`;
    const output = annotateGlossaryHtml(input, MCC_GLOSSARY);

    expect(output).toContain("<h1>1.8 ND and ECAM Overview</h1>");
    expect(output).toContain('alt="ND and PFD Diagram"');
    expect(output).toContain("<button type=\"button\">Existing ND button</button>");
    expect(output).toContain(">Source: FCOM ND ATA 31</div>");
    expect(output).toContain('data-glossary-term="ND">ND</button>');
    expect(output).toContain('data-glossary-term="F-PLN">F-PLN</button>');
    expect(output).toContain('data-glossary-term="TCAS">TCAS</button>');
  });

  it("matches longest compound terms before shorter ones (SEC F-PLN, A/THR, α-FLOOR)", () => {
    const input = `<p>Verify SEC F-PLN and A/THR plus α-FLOOR and Green Dot.</p>`;
    const output = annotateGlossaryHtml(input, MCC_GLOSSARY);

    expect(output).toContain('data-glossary-term="SEC F-PLN">SEC F-PLN</button>');
    expect(output).toContain('data-glossary-term="A/THR">A/THR</button>');
    expect(output).toContain('data-glossary-term="α-FLOOR">α-FLOOR</button>');
    expect(output).toContain('data-glossary-term="Green Dot">Green Dot</button>');
  });

  it("matches slash-separated acronyms and newly added terms like PFD/ND, VMO/MMO, ECAM/ND XFR, VMAX, and β-target", () => {
    const input = `<p>Check PFD/ND, ECAM/ND XFR, VMO/MMO, VMAX, and yellow/blue β-target.</p>`;
    const output = annotateGlossaryHtml(input, MCC_GLOSSARY);

    expect(output).toContain('data-glossary-term="PFD">PFD</button>/<button');
    expect(output).toContain('data-glossary-term="ND">ND</button>');
    expect(output).toContain('data-glossary-term="ECAM">ECAM</button>/<button');
    expect(output).toContain('data-glossary-term="XFR">XFR</button>');
    expect(output).toContain('data-glossary-term="VMO">VMO</button>/<button');
    expect(output).toContain('data-glossary-term="MMO">MMO</button>');
    expect(output).toContain('data-glossary-term="VMAX">VMAX</button>');
    expect(output).toContain('data-glossary-term="β-target">β-target</button>');
  });

  it("survives sanitizeLessonHtml intact", () => {
    const input = `<p>Monitor FMA and FCU on ND.</p>`;
    const safe = sanitizeLessonHtml(input);
    const annotated = annotateGlossaryHtml(safe, MCC_GLOSSARY);
    expect(annotated).toContain('data-glossary-term="FMA">FMA</button>');
    expect(annotated).toContain('data-glossary-term="FCU">FCU</button>');
  });

  it("skips elements marked with data-glossary-skip='true' and iframes", () => {
    const input = `<div><p data-glossary-skip="true">Vídeo: A320 ECAM Training (YouTube)</p><p>Check ECAM.</p></div>`;
    const output = annotateGlossaryHtml(input, MCC_GLOSSARY);
    expect(output).toContain('<p data-glossary-skip="true">Vídeo: A320 ECAM Training (YouTube)</p>');
    expect(output).toContain('<p>Check <button type="button"');
    expect(output).toContain('data-glossary-term="ECAM">ECAM</button>.</p>');
  });

  it("keeps MCC_GLOSSARY integrity without empty fields or duplicate terms/aliases", () => {
    const seen = new Map<string, string>();
    for (const entry of MCC_GLOSSARY) {
      expect(entry.term.trim().length).toBeGreaterThan(0);
      expect(entry.definition.trim().length).toBeGreaterThan(0);
      expect(entry.source.trim().length).toBeGreaterThan(0);

      for (const form of [entry.term, ...(entry.aliases ?? [])]) {
        const key = form.toUpperCase();
        expect(seen.has(key), `Duplicate glossary term/alias: ${form}`).toBe(false);
        seen.set(key, entry.term);
      }
    }
  });

  it("annotates new FMGS/FMA, navigation, performance and FCOM terms cleanly", () => {
    const input = `<p>Check FCOM RTOW and LVTO limits; expect FINAL APP, OP CLB, ALT*, G/S*, CAT III, and VSW above FLAPS and LANDING.</p>`;
    const output = annotateGlossaryHtml(input, MCC_GLOSSARY);

    for (const term of ["FCOM", "RTOW", "LVTO", "FINAL APP", "OP CLB", "ALT*", "G/S*", "CAT III", "VSW"]) {
      expect(output).toContain(`data-glossary-term="${term}">${term}</button>`);
    }
    expect(output).not.toContain("FLAPS</button>");
    expect(output).not.toContain("LANDING</button>");
  });
});
