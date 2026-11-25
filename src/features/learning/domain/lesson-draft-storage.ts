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

function pruneStorageForDrafts(
  storage: Storage,
  preserveKey: string,
): void {
  const historyKeys: string[] = [];
  const otherDraftKeys: Array<{ key: string; savedAt: string }> = [];

  for (let i = 0; i < storage.length; i++) {
    const k = storage.key(i);
    if (!k || k === preserveKey) continue;
    if (k.startsWith("cms_lesson_history_")) {
      historyKeys.push(k);
    } else if (k.startsWith("cms_lesson_draft_")) {
      let savedAt = "";
      try {
        const parsed = JSON.parse(storage.getItem(k) || "{}") as Partial<LessonDraft>;
        if (typeof parsed.savedAt === "string") savedAt = parsed.savedAt;
      } catch {}
      otherDraftKeys.push({ key: k, savedAt });
    }
  }

  // First remove revision history snapshots (heaviest entries)
  for (const k of historyKeys) {
    storage.removeItem(k);
  }
  // Then remove oldest other drafts if needed
  otherDraftKeys.sort((a, b) => a.savedAt.localeCompare(b.savedAt));
  for (const item of otherDraftKeys) {
    storage.removeItem(item.key);
  }
}

export function saveLessonDraft(
  courseId: string,
  identifier: string,
  contentHtml: string,
): void {
  const storage = getStorage();
  if (!storage) return;
  const key = getLessonDraftStorageKey(courseId, identifier);
  const payload = JSON.stringify({
    contentHtml,
    savedAt: new Date().toISOString(),
  } satisfies LessonDraft);

  try {
    storage.setItem(key, payload);
  } catch {
    // Reclaim quota from older cached drafts/history and retry once cleanly
    try {
      pruneStorageForDrafts(storage, key);
      storage.setItem(key, payload);
    } catch {
      // Ignore if payload alone exceeds total browser quota
    }
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
    const updated = [newRevision, ...revisions].slice(0, 3);
    storage.setItem(key, JSON.stringify(updated));
  } catch {
    // Skip local revision cache when browser storage quota is full
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

