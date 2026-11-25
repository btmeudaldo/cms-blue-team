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
