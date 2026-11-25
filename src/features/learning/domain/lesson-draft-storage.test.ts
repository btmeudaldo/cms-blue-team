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
      get length() {
        return Object.keys(store).length;
      },
      key: (i: number) => Object.keys(store)[i] ?? null,
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

  it("prunes stale history/drafts and retries when localStorage hits QuotaExceededError", () => {
    store["cms_lesson_history_c1_old"] = "heavy-history";
    store["cms_lesson_draft_c1_old"] = JSON.stringify({
      contentHtml: "old",
      savedAt: "2020-01-01T00:00:00.000Z",
    });

    vi.stubGlobal("localStorage", {
      get length() {
        return Object.keys(store).length;
      },
      key: (i: number) => Object.keys(store)[i] ?? null,
      getItem: (k: string) => store[k] || null,
      setItem: (k: string, v: string) => {
        if ("cms_lesson_history_c1_old" in store) {
          throw new DOMException("Quota exceeded", "QuotaExceededError");
        }
        store[k] = v;
      },
      removeItem: (k: string) => {
        delete store[k];
      },
    });

    saveLessonDraft("c1", "active", "<p>Updated SOP-01</p>");
    expect(store["cms_lesson_history_c1_old"]).toBeUndefined();
    expect(loadLessonDraft("c1", "active")?.contentHtml).toBe("<p>Updated SOP-01</p>");
  });
});
