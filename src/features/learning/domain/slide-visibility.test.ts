import { describe, expect, it } from "vitest";
import {
  getSlideVisibility,
  setSlideVisibility,
  getVisibleSlidesForUser,
} from "./slide-visibility";

describe("slide-visibility domain", () => {
  describe("getSlideVisibility", () => {
    it("defaults to public if no marker attribute is present", () => {
      const html = `<div class="lesson-slide-container"><p>Hello World</p></div>`;
      expect(getSlideVisibility(html)).toBe("public");
    });

    it("detects private via data-slide-visibility attribute", () => {
      const html = `<div class="lesson-slide-container" data-slide-visibility="private"><p>Draft</p></div>`;
      expect(getSlideVisibility(html)).toBe("private");
    });

    it("detects private via slide-private class", () => {
      const html = `<div class="lesson-slide-container slide-private"><p>Draft</p></div>`;
      expect(getSlideVisibility(html)).toBe("private");
    });

    it("handles empty or non-string input safely", () => {
      expect(getSlideVisibility("")).toBe("public");
      // @ts-expect-error test non-string
      expect(getSlideVisibility(null)).toBe("public");
    });
  });

  describe("setSlideVisibility", () => {
    it("sets private on an element without attribute", () => {
      const html = `<div class="lesson-slide-container">\n<h1>Title</h1>\n</div>`;
      const result = setSlideVisibility(html, "private");
      expect(result).toContain('data-slide-visibility="private"');
      expect(getSlideVisibility(result)).toBe("private");
    });

    it("updates existing attribute from private to public", () => {
      const html = `<div class="lesson-slide-container" data-slide-visibility="private">\n<h1>Title</h1>\n</div>`;
      const result = setSlideVisibility(html, "public");
      expect(result).toContain('data-slide-visibility="public"');
      expect(result).not.toContain('data-slide-visibility="private"');
      expect(getSlideVisibility(result)).toBe("public");
    });

    it("handles html with leading comments", () => {
      const html = `<!-- comment -->\n<div class="lesson-slide-container">\n<h1>Title</h1>\n</div>`;
      const result = setSlideVisibility(html, "private");
      expect(result).toContain('data-slide-visibility="private"');
      expect(getSlideVisibility(result)).toBe("private");
    });
  });

  describe("getVisibleSlidesForUser", () => {
    const slides = [
      `<div class="lesson-slide-container" data-slide-visibility="public">Slide 1</div>`,
      `<div class="lesson-slide-container" data-slide-visibility="private">Slide 2 (private)</div>`,
      `<div class="lesson-slide-container">Slide 3 (default public)</div>`,
    ];

    it("returns all slides for instructors and admins", () => {
      const forAdmin = getVisibleSlidesForUser(slides, "admin");
      expect(forAdmin.visibleSlides).toHaveLength(3);
      expect(forAdmin.visibleToOriginalIndexMap).toEqual([0, 1, 2]);

      const forInstructor = getVisibleSlidesForUser(slides, "instructor");
      expect(forInstructor.visibleSlides).toHaveLength(3);
      expect(forInstructor.visibleToOriginalIndexMap).toEqual([0, 1, 2]);
    });

    it("returns only public slides for students", () => {
      const forStudent = getVisibleSlidesForUser(slides, "student");
      expect(forStudent.visibleSlides).toHaveLength(2);
      expect(forStudent.visibleSlides[0]).toBe(slides[0]);
      expect(forStudent.visibleSlides[1]).toBe(slides[2]);
      expect(forStudent.visibleToOriginalIndexMap).toEqual([0, 2]);
    });

    it("returns only public slides when role is undefined or anonymous", () => {
      const forAnon = getVisibleSlidesForUser(slides);
      expect(forAnon.visibleSlides).toHaveLength(2);
      expect(forAnon.visibleToOriginalIndexMap).toEqual([0, 2]);
    });
  });
});
