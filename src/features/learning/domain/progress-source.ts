export function preferPersistedProgress<T>(
  persistedProgress: T[] | null,
  simulatedProgress: T[],
): T[] {
  return persistedProgress ?? simulatedProgress;
}

export function getProgressForMode<T>(
  persistedProgress: T[] | null,
  simulatedProgress: T[],
  useSimulation: boolean,
): T[] {
  return useSimulation
    ? simulatedProgress
    : preferPersistedProgress(persistedProgress, simulatedProgress);
}
