export function preferPersistedProgress<T>(
  persistedProgress: T[] | null,
  simulatedProgress: T[],
): T[] {
  return persistedProgress ?? simulatedProgress;
}
