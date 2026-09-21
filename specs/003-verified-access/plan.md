# Plan técnico

1. Añadir pruebas de regresión ejecutables sobre sesión, acciones de autenticación, lecturas académicas y mutaciones privilegiadas; registrar RED antes de implementación.
2. Crear `src/shared/lib/supabase/session.ts` con identidad Auth y perfil verificados. Mantener la interfaz de lectura existente mientras se eliminan fallbacks demo y service_role de `resilient.ts`.
3. Corregir `src/app/actions/auth.actions.ts`, `course.actions.ts`, `lesson.actions.ts` y `enrollment.actions.ts`. Mantener únicamente operaciones administrativas explícitas autorizadas de gestión de usuarios.
4. Retirar accesos demo y contraseña precargada de `src/app/login/login-form.tsx`; adaptar pruebas E2E de autenticación a sesiones reales configuradas y añadir rechazo de cookies falsificadas.
5. Verificar unitarias, TypeScript, lint, formato, build y E2E pertinentes. Inspeccionar RLS remoto solo lectura, sin aplicar cambios de esquema en esta fase.
6. Commit por fases RED/GREEN, push en rama `codex/` y preview Vercel; comprobar login y rutas protegidas. Documentar límites de verificaciones que requieran cuentas reales.

No se añaden dependencias. La infraestructura de sesión compartida tiene consumidores de autenticación y aprendizaje; las reglas puras de aprendizaje permanecen locales.
