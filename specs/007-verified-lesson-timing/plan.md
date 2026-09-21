# Plan técnico

1. Inspeccionar definiciones remotas y consumidores; recuperar Supabase local aislado sin reset. Changelog y documentación de funciones Supabase revisados.
2. RED: runner SQL transaccional con identidad, matrícula, inmutabilidad, límites temporales y concurrencia; tests de acciones y estado del reproductor que capturen falsos éxitos.
3. GREEN: migración generada por CLI con un comando privado autorizado y bloqueos de fila; wrappers públicos invoker con EXECUTE mínimo. Reloj posterior al bloqueo, finalización idempotente y deltas no negativos. Sin cambios de filas existentes.
4. GREEN: acciones verificadas y reproductor con confirmación del servidor, gestión de errores y orden de operaciones de actividad. Mantener el dominio temporal separado de React cuando facilite pruebas.
5. Ejecutar SQL y regresiones, Auth/REST y recorrido real de alumno, unitarias, TypeScript, lint/formato y revisión independiente. Documentar límites reales.
6. Commit por fase, push y preview; registrar evidencia antes de solicitar autorización live.

## Archivos

- Nuevos: migración generada por CLI, scripts/lesson-timing.integration.mjs, tests de acciones/estado y specs/007-verified-lesson-timing.
- Modificados: src/app/actions/progress.actions.ts, src/features/learning/components/lesson-player.tsx, sus dependencias temporales necesarias, constitution.md y tasks/todo.md.
- Condicional: página de lección y E2E para transportar/verificar progreso confirmado.

Las funciones privilegiadas quedan en learning_private, con search_path vacío e identidad/matrícula comprobadas incluso si se invocan directamente. Se sigue la guía de [funciones Supabase](https://supabase.com/docs/guides/database/functions).
