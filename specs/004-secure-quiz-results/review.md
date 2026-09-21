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

La migración **no se ha aplicado a producción**. El historial previo diverge del esquema remoto: no ejecutar `supabase db push` indiscriminadamente. La entrega debe aplicar esta migración revisada sobre un entorno que reproduzca el esquema remoto y luego verificar Auth/PostgREST con cuentas reales antes de live.

La preview de código requiere esas RPC en su backend. Apuntarla al Supabase de producción sin migrar provoca rechazo explícito de la carga de cuestionarios; no se restaura acceso inseguro como fallback. No hay rama Supabase de pruebas disponible al inicio de esta entrega. Para validación alojada completa se necesita un proyecto de staging o una rama de base de datos autorizada.

Retención completa, borrado de cuentas, límites de intentos, políticas de lecciones y garantías de exportación siguen pendientes. No se afirma cumplimiento AESA con este cambio.

## Continuación: validación integrada y migración autorizadas

El usuario autoriza validar el recorrido completo y después aplicar la migración. Prefiere evitar la rama de pago: no se ha creado ningún recurso facturable. Se utilizará Supabase local completo, con Auth, REST y PostgreSQL y datos sintéticos.

Preflight remoto: migración todavía ausente, 16 cuestionarios y 5 intentos históricos. Exportación de catálogo solo de estructura y grants en `.vercel/staging-schema.sql` y `.vercel/staging-grants.sql` (ignoradas). No se copiaron expedientes.

Prueba integrada ejecutada en `e2e/quiz-staging.e2e.ts`, configuración separada `playwright.staging.config.ts`: login real, inicio, respuestas, 50 %, persistencia tras recarga y ausencia de solucionario. **2 pruebas correctas**, escritorio y móvil; TypeScript correcto. Las respuestas RSC se leen completas antes de navegar para evitar que Chromium descarte cuerpos aún abiertos. Capturas reales en `test-results/quiz-staging/`.

Docker recuperado conservando y regenerando las carpetas que contenían únicamente sockets obsoletos (`Docker/run` y `docker-secrets-engine`); copias `*-stale-*` conservadas. Sin reset, borrado de volúmenes ni modificación del stack anterior `CMS_Blue_Team`.

Supabase aislado `quiz-validation` operativo en puertos 55321/55322, fuera de `test-results`. Importador exige marcador, puerto local y esquema público vacío; no reinicia bases existentes. Restaurada estructura y grants remotos y aplicada exactamente la migración candidata. `scripts/quiz-staging-api.mjs` crea cinco cuentas sintéticas y valida **13 comprobaciones correctas** con Auth/PostgREST reales: aislamiento, ausencia de solucionario, rechazo de escritura directa, snapshot, idempotencia y concurrencia. Credenciales y fixtures solo en `.vercel/`, ignorado. Advisors de seguridad locales: **0 incidencias**. Unitarias repetidas: **150 correctas**.

Siguiente paso autorizado: preparar frontend compatible sin promoción automática, aplicar únicamente la migración revisada y promover después; verificar conservación de históricos y permisos. No ejecutar el historial divergente completo.
