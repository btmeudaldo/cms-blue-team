export function addPendingLessonCompletion(
  lessonIds: string[],
  lessonId: string,
): string[] {
  return lessonIds.includes(lessonId) ? lessonIds : [...lessonIds, lessonId];
}

export function removePendingLessonCompletion(
  lessonIds: string[],
  lessonId: string,
): string[] {
  return lessonIds.filter((pendingLessonId) => pendingLessonId !== lessonId);
}
