type LessonScrollProgressInput = {
  articleHeight: number;
  articleTop: number;
  hasUserScrolled: boolean;
  viewportHeight: number;
};

export function getLessonScrollProgress({
  articleHeight,
  articleTop,
  hasUserScrolled,
  viewportHeight,
}: LessonScrollProgressInput): number {
  if (!hasUserScrolled || articleHeight <= 0) return 0;

  const traversedPixels = viewportHeight - articleTop;
  return Math.min(
    100,
    Math.max(0, Math.round((traversedPixels / articleHeight) * 100)),
  );
}
