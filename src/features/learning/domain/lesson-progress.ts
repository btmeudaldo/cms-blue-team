export type LessonProgress = {
  user_id: string;
  lesson_id: string;
  active_seconds: number;
  is_completed: boolean;
  is_active: boolean;
};
export type ProgressResult =
  { success: true; progress: LessonProgress } | { error: string };
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
