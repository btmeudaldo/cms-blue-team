export interface LessonModuleGroup<T> {
  moduleTitle: string | null;
  items: Array<{ lesson: T; index: number }>;
}

/**
 * Agrupa lecciones consecutivas por `module_title` conservando el índice global
 * (`0..lessons.length - 1`). Si ninguna lección tiene módulo asignado, devuelve
 * `hasModules: false` y un único grupo para mantener intacta la lista plana.
 */
export function groupLessonsByModule<T extends { module_title?: string | null }>(
  lessons: T[],
): { hasModules: boolean; groups: LessonModuleGroup<T>[] } {
  const normalized = lessons.map((lesson) => lesson.module_title?.trim() || null);
  const hasModules = normalized.some((title) => title !== null);

  if (!hasModules) {
    return {
      hasModules: false,
      groups: [
        {
          moduleTitle: null,
          items: lessons.map((lesson, index) => ({ lesson, index })),
        },
      ],
    };
  }

  const groups: LessonModuleGroup<T>[] = [];
  for (let index = 0; index < lessons.length; index++) {
    const lesson = lessons[index];
    const moduleTitle = normalized[index];
    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.moduleTitle === moduleTitle) {
      lastGroup.items.push({ lesson, index });
    } else {
      groups.push({
        moduleTitle,
        items: [{ lesson, index }],
      });
    }
  }

  return { hasModules: true, groups };
}

/** Devuelve true para bloques de archivo histórico que conviene mostrar colapsados por defecto. */
export function isArchiveModule(moduleTitle?: string | null): boolean {
  return Boolean(moduleTitle && /^archivo\b/i.test(moduleTitle.trim()));
}

/** Formatea la duración agregada de un módulo; oculta duraciones simbólicas (< 60 s). */
export function formatModuleDuration(totalSeconds: number): string | null {
  if (!Number.isFinite(totalSeconds) || totalSeconds < 60) {
    return null;
  }
  const totalMinutes = Math.round(totalSeconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (hours === 0) {
    return `${mins} min`;
  }
  if (mins === 0) {
    return `${hours} h`;
  }
  return `${hours} h ${mins} min`;
}
