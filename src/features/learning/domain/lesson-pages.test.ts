import { describe, expect, it } from "vitest";
import { splitLessonPages } from "./lesson-pages";

describe("splitLessonPages", () => {
  it("returns single page when no delimiter is present", () => {
    const html = "<p>Contenido continuo sin saltos.</p>";
    const pages = splitLessonPages(html);
    expect(pages).toEqual([html]);
  });

  it("splits by <!-- pagebreak --> comment delimiter", () => {
    const html = `
      <section>Página 1</section>
      <!-- pagebreak -->
      <section>Página 2</section>
      <!-- pagebreak -->
      <section>Página 3</section>
    `;
    const pages = splitLessonPages(html);
    expect(pages.length).toBe(3);
    expect(pages[0]).toContain("Página 1");
    expect(pages[1]).toContain("Página 2");
    expect(pages[2]).toContain("Página 3");
  });

  it("splits by <hr class='page-break' /> tags", () => {
    const html = "<p>Slide 1</p><hr class=\"page-break\" /><p>Slide 2</p>";
    const pages = splitLessonPages(html);
    expect(pages.length).toBe(2);
    expect(pages[0]).toBe("<p>Slide 1</p>");
    expect(pages[1]).toBe("<p>Slide 2</p>");
  });

  it("extracts pages from <div class='lesson-page'> containers", () => {
    const html = `
      <div class="lesson-page"><p>Contenido A</p></div>
      <div class="lesson-page"><p>Contenido B</p></div>
    `;
    const pages = splitLessonPages(html);
    expect(pages.length).toBe(2);
    expect(pages[0]).toBe("<p>Contenido A</p>");
    expect(pages[1]).toBe("<p>Contenido B</p>");
  });

  it("handles empty or falsy input gracefully", () => {
    expect(splitLessonPages("")).toEqual([""]);
    expect(splitLessonPages(null as any)).toEqual([""]);
  });
});
