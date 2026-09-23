export interface LessonDraft {
  contentHtml: string;
  savedAt: string; // ISO String
}

export function getLessonDraftStorageKey(
  courseId: string,
  identifier: string,
): string {
  const safeIdentifier = identifier || "new";
  return `cms_lesson_draft_${courseId}_${safeIdentifier}`;
}

function getStorage(): Storage | null {
  try {
    if (typeof localStorage !== "undefined") {
      return localStorage;
    }
  } catch (e) {}
  return null;
}

export function saveLessonDraft(
  courseId: string,
  identifier: string,
  contentHtml: string,
): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    const key = getLessonDraftStorageKey(courseId, identifier);
    const draft: LessonDraft = {
      contentHtml,
      savedAt: new Date().toISOString(),
    };
    storage.setItem(key, JSON.stringify(draft));
  } catch (e) {
    console.warn("Failed to save lesson draft to localStorage:", e);
  }
}

export function loadLessonDraft(
  courseId: string,
  identifier: string,
): LessonDraft | null {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const key = getLessonDraftStorageKey(courseId, identifier);
    const raw = storage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as LessonDraft;
    if (parsed && typeof parsed.contentHtml === "string") {
      return parsed;
    }
  } catch (e) {
    console.warn("Failed to load lesson draft from localStorage:", e);
  }
  return null;
}

export function clearLessonDraft(
  courseId: string,
  identifier: string,
): void {
  const storage = getStorage();
  if (!storage) return;
  try {
    const key = getLessonDraftStorageKey(courseId, identifier);
    storage.removeItem(key);
  } catch (e) {
    console.warn("Failed to remove lesson draft from localStorage:", e);
  }
}

export function hasUnsavedDraftDifference(
  serverHtml: string,
  draftHtml: string,
): boolean {
  const normalize = (html: string) =>
    html
      .replace(/\s+/g, " ")
      .replace(/<p><br><\/p>/g, "")
      .trim();

  const normServer = normalize(serverHtml);
  const normDraft = normalize(draftHtml);

  return normDraft.length > 0 && normServer !== normDraft;
}
