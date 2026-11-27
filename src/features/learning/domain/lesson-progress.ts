export type LessonProgress = {
  user_id: string;
  lesson_id: string;
  active_seconds: number;
  is_completed: boolean;
  is_active: boolean;
};
export type ProgressResult =
  { success: true; progress: LessonProgress } | { error: string };
export function formatLessonSeconds(seconds: number): string {
  const safe = Math.max(0, Math.floor(seconds));
  if (safe < 60) return `${safe}s`;
  const mins = Math.floor(safe / 60);
  const rem = safe % 60;
  return `${mins}:${String(rem).padStart(2, "0")}`;
}
export function getSlideRealMinSeconds(
  minSeconds: number,
  totalSlides: number,
): number {
  const safeMin = Math.max(0, Math.floor(minSeconds));
  if (safeMin === 0) return 0;
  const safeSlides = Math.max(1, Math.floor(totalSlides));
  return Math.max(1, Math.ceil(safeMin / safeSlides));
}

export function getSlideVideoSeconds(slideHtml: string): number {
  if (!slideHtml) return 0;
  let total = 0;
  for (const match of slideHtml.matchAll(/data-video-seconds=["'](\d+)["']/gi)) {
    const seconds = Number(match[1]);
    if (Number.isFinite(seconds) && seconds > 0) {
      total += seconds;
    }
  }
  return total;
}

export function getSlideWordCount(slideHtml: string): number {
  if (!slideHtml) return 0;
  const noComments = slideHtml.replace(/<!--[\s\S]*?-->/g, "");
  const leftBodyMatch = noComments.match(
    /<div class="space-y-1\.5 py-0\.5[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
  );
  const target = leftBodyMatch ? leftBodyMatch[0] : noComments;
  const plainText = target.replace(/<[^>]+>/g, " ").trim();
  if (!plainText) return 0;
  return plainText.split(/\s+/).filter(Boolean).length;
}

export function getSlideTargetSecondsList(
  minSeconds: number,
  slides: string[],
): number[] {
  const safeMin = Math.max(0, Math.floor(minSeconds));
  if (slides.length === 0) return [];
  if (safeMin === 0) return slides.map(() => 0);

  const videoSecondsList = slides.map(getSlideVideoSeconds);
  const totalVideoSeconds = videoSecondsList.reduce((sum, s) => sum + s, 0);
  const remainingBudget = Math.max(0, safeMin - totalVideoSeconds);
  const weights = slides.map(
    (s) => Math.max(25, Math.min(220, getSlideWordCount(s))) + 25,
  );
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);

  return weights.map((weight, idx) => {
    const base =
      remainingBudget > 0 && totalWeight > 0
        ? Math.ceil((remainingBudget * weight) / totalWeight)
        : 0;
    return Math.max(1, base + videoSecondsList[idx]);
  });
}

export function getSlideRealMinSecondsForIndex(
  minSeconds: number,
  slides: string[],
  slideIndex: number,
): number {
  const targets = getSlideTargetSecondsList(minSeconds, slides);
  return (
    targets[slideIndex] ?? getSlideRealMinSeconds(minSeconds, slides.length)
  );
}

export type RestoredSlideProgress = {
  completedPages: Record<number, boolean>;
  pageSecondsElapsed: Record<number, number>;
  resumePageIndex: number;
};

export function restoreSlideProgressFromActiveSeconds(
  activeSeconds: number,
  slideTargets: number[],
): RestoredSlideProgress {
  if (slideTargets.length === 0) {
    return { completedPages: {}, pageSecondsElapsed: {}, resumePageIndex: 0 };
  }
  let remaining = Math.max(0, Math.floor(activeSeconds));
  const completedPages: Record<number, boolean> = {};
  const pageSecondsElapsed: Record<number, number> = {};
  let resumePageIndex = slideTargets.length - 1;

  for (let i = 0; i < slideTargets.length; i++) {
    const target = Math.max(1, Math.floor(slideTargets[i]));
    if (remaining >= target) {
      completedPages[i] = true;
      pageSecondsElapsed[i] = target;
      remaining -= target;
    } else {
      if (remaining > 0) {
        pageSecondsElapsed[i] = remaining;
      }
      resumePageIndex = i;
      break;
    }
  }

  return { completedPages, pageSecondsElapsed, resumePageIndex };
}
export function remainingLessonSeconds(
  minimum: number,
  progress: Pick<LessonProgress, "active_seconds" | "is_completed"> | null,
) {
  return progress?.is_completed
    ? 0
    : Math.max(0, minimum - (progress?.active_seconds ?? 0));
}
export function canCompleteLesson(
  progress: Pick<LessonProgress, "active_seconds" | "is_completed"> | null,
  minimum: number,
  scrolled: boolean,
  armed: boolean,
  blocked: boolean,
) {
  return Boolean(
    progress &&
    !blocked &&
    remainingLessonSeconds(minimum, progress) === 0 &&
    scrolled &&
    armed,
  );
}
