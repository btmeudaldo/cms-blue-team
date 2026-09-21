# Plan

1. Catalogar FK remotas sin datos personales y confirmar ausencia de snapshots huérfanos. Leer acciones y formularios reales.
2. RED SQL transaccional sobre Supabase local: cascadas de lección/curso/perfil/cuenta, cuenta con solo resultado o solo snapshot, traslado lección-curso, privilegios masivos y eliminación legítima sin registros. No reset.
3. RED unitario de acciones y formulario de eliminación para conflicto FK. Después, devolver error esperado accesible en ambos formularios sin ocultar errores ajenos.
4. Migración mínima creada con CLI: FK RESTRICT de progreso a lección/perfil y resultado a cuenta; FK snapshot-cuenta RESTRICT; trigger de ámbito de lección; grants masivos cursos/perfiles. Conservar índices existentes y no reescribir registros.
5. GREEN SQL/API/UI pertinentes, regresión exámenes/aislamiento, tipos, lint/formato, build, revisión independiente y preview. Captura del rechazo visible usando datos locales sintéticos.
6. Commit/push por fase y revisión. Migración de producción pendiente de autorización específica de esta entrega.

## Archivos

- `supabase/migrations/*_preserve_academic_records.sql`.
- `scripts/academic-record-preservation.integration.mjs` y pruebas API/browser necesarias.
- Acciones `course.actions.ts`, `lesson.actions.ts` y sus tests.
- Componente de formulario de borrado dentro de learning y sus tests; consumidores de cursos/lecciones.
- `specs/006-academic-record-preservation/*`, `tasks/todo.md`.
