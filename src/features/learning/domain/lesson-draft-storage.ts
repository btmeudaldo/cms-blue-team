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

export function getLessonHistoryStorageKey(
  courseId: string,
  identifier: string,
): string {
  const safeIdentifier = identifier || "new";
  return `cms_lesson_history_${courseId}_${safeIdentifier}`;
}

export function saveLessonRevision(
  courseId: string,
  identifier: string,
  contentHtml: string,
): void {
  const storage = getStorage();
  if (!storage || !contentHtml) return;
  try {
    const key = getLessonHistoryStorageKey(courseId, identifier);
    const existingRaw = storage.getItem(key);
    let revisions: LessonDraft[] = [];
    if (existingRaw) {
      try {
        revisions = JSON.parse(existingRaw) as LessonDraft[];
      } catch {}
    }
    if (revisions.length > 0 && revisions[0].contentHtml === contentHtml) {
      return;
    }
    const newRevision: LessonDraft = {
      contentHtml,
      savedAt: new Date().toISOString(),
    };
    const updated = [newRevision, ...revisions].slice(0, 20);
    storage.setItem(key, JSON.stringify(updated));
  } catch (e) {
    console.warn("Failed to save lesson revision history:", e);
  }
}

export function loadLessonRevisions(
  courseId: string,
  identifier: string,
): LessonDraft[] {
  const storage = getStorage();
  if (!storage) return [];
  try {
    const key = getLessonHistoryStorageKey(courseId, identifier);
    const raw = storage.getItem(key);
    if (!raw) return [];
    return JSON.parse(raw) as LessonDraft[];
  } catch (e) {
    console.warn("Failed to load lesson revisions:", e);
  }
  return [];
}

