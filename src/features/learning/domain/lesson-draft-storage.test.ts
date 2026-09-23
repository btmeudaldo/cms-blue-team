import { beforeEach, describe, expect, it, vi } from "vitest";

import {
  clearLessonDraft,
  getLessonDraftStorageKey,
  hasUnsavedDraftDifference,
  loadLessonDraft,
  saveLessonDraft,
} from "./lesson-draft-storage";

describe("lesson-draft-storage domain", () => {
  const store: Record<string, string> = {};

  beforeEach(() => {
    for (const key in store) {
      delete store[key];
    }
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store[k] || null,
      setItem: (k: string, v: string) => {
        store[k] = v;
      },
      removeItem: (k: string) => {
        delete store[k];
      },
    });
  });

  it("generates predictable storage keys", () => {
    expect(getLessonDraftStorageKey("course-1", "lesson-1")).toBe(
      "cms_lesson_draft_course-1_lesson-1",
    );
    expect(getLessonDraftStorageKey("course-1", "")).toBe(
      "cms_lesson_draft_course-1_new",
    );
  });

  it("saves and loads a valid lesson draft", () => {
    saveLessonDraft("course-1", "lesson-1", "<p>Draft content</p>");

    const loaded = loadLessonDraft("course-1", "lesson-1");
    expect(loaded).not.toBeNull();
    expect(loaded?.contentHtml).toBe("<p>Draft content</p>");
    expect(typeof loaded?.savedAt).toBe("string");
  });

  it("clears a lesson draft", () => {
    saveLessonDraft("course-1", "lesson-1", "<p>Content</p>");
    expect(loadLessonDraft("course-1", "lesson-1")).not.toBeNull();

    clearLessonDraft("course-1", "lesson-1");
    expect(loadLessonDraft("course-1", "lesson-1")).toBeNull();
  });

  it("detects meaningful unsaved differences between server HTML and draft", () => {
    const server = "<p>Initial text</p>";
    const draftDifferent = "<p>Initial text with additions</p>";
    const draftIdentical = "<p>Initial text</p>";
    const draftEmpty = "";

    expect(hasUnsavedDraftDifference(server, draftDifferent)).toBe(true);
    expect(hasUnsavedDraftDifference(server, draftIdentical)).toBe(false);
    expect(hasUnsavedDraftDifference(server, draftEmpty)).toBe(false);
  });
});
