# Revisión de exámenes y resultados

## Implementación

- Banco de respuestas accesible solo a administradores y docentes propietarios/asignados. Alumnos matriculados usan RPC con lista explícita de campos sin solucionario ni explicaciones.
- PostgreSQL inicia el intento, conserva copia privada del banco y umbral, calcula nota y tiempo y registra atómicamente. Envíos idénticos son idempotentes; respuestas diferentes de un intento cerrado se rechazan.
- API sin escritura directa de notas. Lectura de registros limitada al alumno y docentes del curso. Se bloquean borrado en cascada desde el examen/lección y traslado de un examen entre cursos.
- Interfaz sin calificación local, éxito simulado ni sincronización de la antigua cola localStorage. Un fallo mantiene intento/respuestas en memoria, bloqueados, para reenviar. Recargar antes de confirmar pierde ese estado local; no se afirma recuperación offline.
- Edición de cuestionarios conserva lectura autorizada separada y aporta ID/slug al insertar. Estado de aprobado histórico usa el resultado persistido, no el umbral actual.
- Registros antiguos se conservan con `grading_version = NULL`; no se recalifican ni se certifica su integridad retrospectiva. Los nuevos usan `server-v1`.

## Evidencia

- RED inicial ejecutado: 14 fallos SQL; reproducción efectiva de lectura anónima del solucionario e inserción/actualización de nota propia. RED de acciones/lecturas/UI previo a GREEN, commit `67fb468`.
- Revisión independiente detectó borrado por cascada y traslado de registros; ambos fallos reproducidos por separado y corregidos.
- 150 pruebas unitarias correctas. `npx tsc --noEmit` y build Next.js correctos.
- 19 pruebas SQL correctas en PostgreSQL 17.11 local, roles anon/authenticated y fixtures sintéticos, incluidos bancos inválidos y entregas concurrentes distintas. Advisors de seguridad locales: sin incidencias.
- Chromium: 7 E2E correctas; 1 omitida por falta de credenciales reales de alumno. Comprobados portada, login y rechazo de cookies falsificadas en rutas protegidas.
- Lint global ejecutado: quedan los 4 errores previos (comillas JSX en admin-courses-client-view, setState en lesson-player y Date.now en quiz-editor). Formato global ejecutado; formato ajeno retirado tras comprobar igualdad con Prettier y guardar copia.
- Revisión visual aislada de inicio, error y resultado, escritorio 1280 y móvil 390; CSS compilado real, acciones sintéticas, sin desbordamiento horizontal. No sustituye prueba integrada de Auth/REST remoto.

## Ejecución reproducible SQL

Usar una instancia PostgreSQL 17 desechable, fuera de `test-results` (Playwright borra su directorio de salida). Crear `quiz_security_test` y conectar como propietario local.

```powershell
$env:QUIZ_TEST_DATABASE_URL='postgresql://postgres@127.0.0.1:55439/quiz_security_test'
$env:QUIZ_MIGRATION='supabase/migrations/20260921091612_secure_quiz_results.sql'
node --test scripts/quiz-security.integration.mjs
```

El runner rechaza hosts no locales y nombres de base diferentes. Reinicia únicamente los esquemas sintéticos de esa base. Omitir `QUIZ_MIGRATION` reproduce RED sobre el esquema vulnerable.

## Despliegue y límites

Rama `codex/secure-quiz-results`, commit GREEN `245e367`, subida a GitHub. Vercel confirma target `preview` y estado `Ready`:

https://cms-blue-team-kbrlig4vq-eudaldocal-8684s-projects.vercel.app

Login remoto verificado por CLI autenticada: HTTP 200 y formulario real. La CLI generó un token de bypass de protección para la comprobación autorizada; no se desactivó la protección SSO. Capturas sintéticas conservadas en `test-results/visual-quiz/preview_screenshot-quiz-{start,error,result}-{desktop,mobile}.png`.

En la primera preview, la migración todavía no se había aplicado a producción. El historial previo diverge del esquema remoto: no ejecutar `supabase db push` indiscriminadamente. La validación integrada y aplicación posterior se documentan abajo.

La preview de código requiere esas RPC en su backend. Antes de migrar, la carga de cuestionarios fallaba explícitamente; no se restauraba acceso inseguro como fallback. La validación integrada se completó después mediante Supabase local aislado, sin crear rama de pago.

Retención completa, borrado de cuentas, límites de intentos, políticas de lecciones y garantías de exportación siguen pendientes. No se afirma cumplimiento AESA con este cambio.

## Continuación: validación integrada y migración autorizadas

El usuario autoriza validar el recorrido completo y después aplicar la migración. Prefiere evitar la rama de pago: no se ha creado ningún recurso facturable. Se utilizará Supabase local completo, con Auth, REST y PostgreSQL y datos sintéticos.

Preflight remoto: migración todavía ausente, 16 cuestionarios y 5 intentos históricos. Exportación de catálogo solo de estructura y grants en `.vercel/staging-schema.sql` y `.vercel/staging-grants.sql` (ignoradas). No se copiaron expedientes.

Prueba integrada ejecutada en `e2e/quiz-staging.e2e.ts`, configuración separada `playwright.staging.config.ts`: login real, inicio, respuestas, 50 %, persistencia tras recarga y ausencia de solucionario. **2 pruebas correctas**, escritorio y móvil; TypeScript correcto. Las respuestas RSC se leen completas antes de navegar para evitar que Chromium descarte cuerpos aún abiertos. Capturas reales en `test-results/quiz-staging/`.

Docker recuperado conservando y regenerando las carpetas que contenían únicamente sockets obsoletos (`Docker/run` y `docker-secrets-engine`); copias `*-stale-*` conservadas. Sin reset, borrado de volúmenes ni modificación del stack anterior `CMS_Blue_Team`.

Supabase aislado `quiz-validation` operativo en puertos 55321/55322, fuera de `test-results`. Importador exige marcador, puerto local y esquema público vacío; no reinicia bases existentes. Restaurada estructura y grants remotos y aplicada exactamente la migración candidata. `scripts/quiz-staging-api.mjs` crea cinco cuentas sintéticas y valida **13 comprobaciones correctas** con Auth/PostgREST reales: aislamiento, ausencia de solucionario, rechazo de escritura directa, snapshot, idempotencia y concurrencia. Credenciales y fixtures solo en `.vercel/`, ignorado. Advisors de seguridad locales: **0 incidencias**. Unitarias repetidas: **150 correctas**.

## Entrega autorizada completada (2026-09-21)

- Código y pruebas registrados en `9d41c86`, rama `codex/secure-quiz-results`, subidos a GitHub. Preview Ready: https://cms-blue-team-prsghmdx5-eudaldocal-8684s-projects.vercel.app. Login comprobado HTTP 200 con formulario real.
- Frontend compilado con configuración de producción mediante `--prod --skip-domain`, build y TypeScript correctos; promovido después de aplicar la migración. Deployment `dpl_FENjQgZTKoCZQcEfjtTk9XmQdyzJ`, estado Ready.
- Producción: https://cms-blue-team-eudaldocal-8684s-projects.vercel.app. `/api/health` devuelve `online/supabase`; `/quizzes` sin sesión devuelve 307 a `/login`.
- Aplicado únicamente el SQL revisado `20260921091612_secure_quiz_results.sql` mediante MCP. Historial remoto confirma `20260921090542 / secure_quiz_results` (el servicio asigna su versión al aplicarla); no se ejecutó el historial local divergente.
- Conservación comprobada: 16 cuestionarios, 5 intentos históricos, todos con `grading_version = NULL`. Huella MD5 de todos los campos históricos ordenados por ID antes/después: `32d4ba1664407d36f45af5b4a4d90697`; igualdad exacta. Se usa como comprobación de conservación, no como firma de auditoría.
- Verificación remota de privilegios: sin SELECT anónimo al banco; sin INSERT/UPDATE/DELETE autenticado a notas; sin SELECT autenticado a snapshots. Las tres RPC públicas son invoker y no ejecutables por anon. Solo política SELECT acotada en resultados.
- Cinco comprobaciones REST negativas reales en producción: `quizzes`, `quiz_attempts` y las tres RPC rechazan anon con `42501`. No se crearon cuentas ni intentos de prueba en producción.
- Advisors alojados: aviso `rls_enabled_no_policy` en `quiz_private.attempt_snapshots` es intencionado: tabla privada, no expuesta y sin privilegios de cliente; solo funciones internas controladas acceden. [Referencia del aviso](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy). Permanecen los avisos anteriores sobre [funciones públicas definer](https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable) y [protección de contraseñas filtradas](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection); no se afirma que toda la plataforma esté endurecida.

El recorrido autenticado completo se verificó en Supabase local con estructura y grants remotos; las comprobaciones posteriores en producción fueron de lectura y denegación. Los límites de retención, lecciones y cumplimiento ATO indicados arriba siguen pendientes.
