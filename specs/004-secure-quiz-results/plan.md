# Plan técnico

1. Reproducir permisos vulnerables en PostgreSQL aislado a partir del esquema remoto inspeccionado, sin copiar datos. No ejecutar el historial local divergente contra producción.
2. Pruebas por rol y acciones/UI: registrar RED antes de implementar.
3. Migración aditiva: quizzes restringidos a editores, resultados de solo lectura con alcance; snapshots privados con RLS. RPC públicas SECURITY INVOKER delegan en funciones privadas con autorización explícita y privilegios mínimos.
4. RPC `list_available_quizzes(p_quiz_id text default null, p_lesson_id uuid default null)` devuelve array JSON seguro; `start_quiz_attempt(p_quiz_id text)` devuelve `{attempt_id, started_at, quiz}`; `submit_quiz_attempt(p_attempt_id uuid, p_answers jsonb)` devuelve resultado persistido snake_case, incluido `min_pass_score_percentage` del snapshot.
5. Separar StudentQuiz del banco editable. Lecturas de alumnos siempre por RPC; editor usa lectura protegida distinta. Acciones con sesión verificada sin mocks/service_role. UI inicia explícitamente y solo muestra notas confirmadas; reenvíos conservan intento y respuestas.
6. Integración SQL incluida concurrencia, unitarias, TypeScript, lint/formato, build y revisión visual. Commit RED/GREEN, push y preview; documentar límites y validar antes de producción.

Archivos: migración supabase/migrations; pruebas SQL/runner; quiz.actions.ts y tests; quiz-types.ts; quiz-module.tsx; resilient.ts y tests; consumidores de tipos y página de edición; constitution.md, tasks/todo.md y especificación.
