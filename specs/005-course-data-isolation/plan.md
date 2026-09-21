# Plan técnico

1. Inspeccionar catálogo remoto sin mutaciones y dependencias en acciones/consultas. Reutilizar Supabase local aislado `quiz-validation`, sin reset.
2. Añadir `scripts/course-isolation.integration.mjs` con fixtures sintéticos y pruebas SQL transaccionales de roles/RLS contra esquema real; ejecutar RED antes de SQL de producción.
3. Crear migración con CLI. Helper definer en esquema privado con identidad y rol persistido; mantener firma pública `can_manage_course(uuid)` como invoker para dependencias existentes. Sustituir políticas de lessons; preservar SELECT propio de progreso y corregir acceso docente. Limitar grants explícitamente.
4. Ejecutar GREEN y regresión de exámenes/Auth/REST, tipos y checks pertinentes; comprobar advisors. No editar frontend salvo fallo demostrado.
5. Registrar evidencia en review.md, commit por fase, push y preview. Esta entrega prepara la nueva migración; la autorización live de exámenes no se extiende automáticamente a otra migración.

## Archivos

- Nuevos: especificación/plan/review bajo `specs/005-course-data-isolation`, runners `scripts/course-isolation.integration.mjs` y `scripts/course-isolation-api.mjs`, y migración generada con CLI.
- Actualizados: `tasks/todo.md`, `tasks/lessons.md`.
- Condicional: pruebas SQL heredadas de privilegios si su expectativa de helper definer deja de aplicar al wrapper invoker.
