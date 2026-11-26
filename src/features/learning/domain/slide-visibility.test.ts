import { describe, expect, it } from "vitest";
import {
  getSlideVisibility,
  setSlideVisibility,
  getLessonVisibilityState,
  setLessonVisibility,
  getVisibleSlidesForUser,
  isLessonFullyPrivate,
  filterVisibleLessonsForUser,
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

    it("returns all slides only for superadmin", () => {
      const forSuperAdmin = getVisibleSlidesForUser(slides, "superadmin");
      expect(forSuperAdmin.visibleSlides).toHaveLength(3);
      expect(forSuperAdmin.visibleToOriginalIndexMap).toEqual([0, 1, 2]);
    });

    it("returns only public slides for admins, instructors, and students", () => {
      const forAdmin = getVisibleSlidesForUser(slides, "admin");
      expect(forAdmin.visibleSlides).toHaveLength(2);
      expect(forAdmin.visibleToOriginalIndexMap).toEqual([0, 2]);

      const forInstructor = getVisibleSlidesForUser(slides, "instructor");
      expect(forInstructor.visibleSlides).toHaveLength(2);
      expect(forInstructor.visibleToOriginalIndexMap).toEqual([0, 2]);

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

  describe("isLessonFullyPrivate", () => {
    it("returns false for empty, null or undefined content", () => {
      expect(isLessonFullyPrivate("")).toBe(false);
      expect(isLessonFullyPrivate(null)).toBe(false);
      expect(isLessonFullyPrivate(undefined)).toBe(false);
    });

    it("returns false when all slides are public or mixed", () => {
      const allPublic = `<div class="lesson-slide-container">A</div><!-- pagebreak --><div class="lesson-slide-container" data-slide-visibility="public">B</div>`;
      const mixed = `<div class="lesson-slide-container" data-slide-visibility="private">A</div><!-- pagebreak --><div class="lesson-slide-container">B</div>`;
      expect(isLessonFullyPrivate(allPublic)).toBe(false);
      expect(isLessonFullyPrivate(mixed)).toBe(false);
    });

    it("returns true when every slide is marked private", () => {
      const allPrivate = `<div class="lesson-slide-container" data-slide-visibility="private">A</div><!-- pagebreak --><div class="lesson-slide-container" data-slide-visibility="private">B</div>`;
      expect(isLessonFullyPrivate(allPrivate)).toBe(true);
    });
  });

  describe("getLessonVisibilityState & setLessonVisibility", () => {
    it("detects public, private and mixed lesson states", () => {
      expect(getLessonVisibilityState("")).toBe("public");
      expect(getLessonVisibilityState(null)).toBe("public");
      expect(
        getLessonVisibilityState(
          `<div class="lesson-slide-container">A</div><!-- pagebreak --><div class="lesson-slide-container" data-slide-visibility="public">B</div>`,
        ),
      ).toBe("public");
      expect(
        getLessonVisibilityState(
          `<div class="lesson-slide-container" data-slide-visibility="private">A</div><!-- pagebreak --><div class="lesson-slide-container" data-slide-visibility="private">B</div>`,
        ),
      ).toBe("private");
      expect(
        getLessonVisibilityState(
          `<div class="lesson-slide-container" data-slide-visibility="private">A</div><!-- pagebreak --><div class="lesson-slide-container">B</div>`,
        ),
      ).toBe("mixed");
    });

    it("updates every slide visibility in a multi-slide lesson", () => {
      const html = `<!-- SLIDE 1 --><div class="lesson-slide-container">A</div>\n\n<!-- pagebreak -->\n\n<!-- SLIDE 2 --><div class="lesson-slide-container" data-slide-visibility="public">B</div>`;
      const hidden = setLessonVisibility(html, "private");
      expect(getLessonVisibilityState(hidden)).toBe("private");
      expect(hidden.match(/data-slide-visibility="private"/g)).toHaveLength(2);

      const shown = setLessonVisibility(hidden, "public");
      expect(getLessonVisibilityState(shown)).toBe("public");
      expect(shown.match(/data-slide-visibility="public"/g)).toHaveLength(2);
    });
  });

  describe("filterVisibleLessonsForUser", () => {
    const lessons = [
      { id: "pub", content_html: `<div class="lesson-slide-container">Public</div>` },
      {
        id: "mixed",
        content_html: `<div class="lesson-slide-container" data-slide-visibility="private">A</div><!-- pagebreak --><div class="lesson-slide-container">B</div>`,
      },
      {
        id: "hidden",
        content_html: `<div class="lesson-slide-container" data-slide-visibility="private">Draft 1</div><!-- pagebreak --><div class="lesson-slide-container" data-slide-visibility="private">Draft 2</div>`,
      },
    ];

    it("hides 100%-private lessons for students, instructors, admins, and undefined role", () => {
      for (const role of ["student", "instructor", "admin", undefined]) {
        const visible = filterVisibleLessonsForUser(lessons, role);
        expect(visible.map((l) => l.id)).toEqual(["pub", "mixed"]);
      }
    });

    it("keeps all lessons for superadmin role or isSuperAdmin flag", () => {
      expect(filterVisibleLessonsForUser(lessons, "superadmin").map((l) => l.id)).toEqual([
        "pub",
        "mixed",
        "hidden",
      ]);
      expect(filterVisibleLessonsForUser(lessons, "admin", true).map((l) => l.id)).toEqual([
        "pub",
        "mixed",
        "hidden",
      ]);
    });
  });
});
