# Plan técnico

Se mantienen la constitución y arquitectura existentes.

1. Reproducir con pruebas la actividad simultánea y las etiquetas de lectura derivadas indebidamente del examen.
2. Migración incremental: bloqueo transaccional por alumno, transferencia de actividad sin crédito pendiente y unicidad parcial del alumno activo. Mantener wrappers y autorización existentes.
3. Añadir is_active al contrato de progreso y feedback de pausa en LessonPlayer. Extraer selección de intentos y estado de avance a dominio puro compartido por las dos vistas del curso.
4. Validar SQL concurrente, Auth/REST, navegador y regresiones académicas; revisar evidencia visual.
5. Commit, push y preview. Documentar límites y paso pendiente para aplicar la migración publicada.

## Archivos previstos

- Nueva migración en supabase/migrations y scripts/single-active-lesson.integration.mjs.
- Scripts y E2E de actividad simultánea y separación de evidencias.
- src/features/learning/domain/lesson-progress.ts y nuevo helper de progreso visual, con pruebas.
- src/app/actions/progress.actions.ts, LessonPlayer y pruebas correspondientes.
- src/app/courses/page.tsx y src/app/courses/[courseId]/page.tsx.
- specs/009-single-active-lesson y tasks/todo.md.
