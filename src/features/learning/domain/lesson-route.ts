export type RoutableLesson = {
  id: string;
  slug?: string | null;
};

export function resolveLessonByIdentifier<T extends RoutableLesson>(
  lessons: T[],
  identifier: string,
): T | null {
  return (
    lessons.find(
      (lesson) => lesson.id === identifier || lesson.slug === identifier,
    ) ?? null
  );
}
