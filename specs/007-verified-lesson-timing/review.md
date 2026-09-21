# Revisión del progreso temporal

## Hallazgos y solución

Las acciones antiguas devolvían datos simulados aunque fallasen sesión o RPC; la finalización intentaba escribir directamente el progreso y silenciaba rechazos. Las RPC permitían cambiar una fecha ya finalizada, operar sin matrícula vigente en pausa/reanudación/heartbeat y restar tiempo al esperar un bloqueo.

La migración `20260921110432_verify_lesson_timing.sql` concentra las transiciones en `learning_private.record_lesson_activity`, con identidad y matrícula verificadas, locks breves y reloj leído después del bloqueo. Los cinco endpoints mantienen sus firmas como wrappers invoker. Finalizaciones repetidas conservan todos los campos; las operaciones privadas también validan identidad, matrícula y operación. No se modifican filas históricas.

Las acciones y el reproductor se actualizan para trabajar con confirmaciones persistidas, sin mocks ni escrituras directas. El mínimo aplicable es el almacenado en PostgreSQL.

## Evidencia

- RED: 22 fallos de 38 casos SQL iniciales y uno de dos casos concurrentes; acciones 20 fallos y dominio ausente. Commit inicial `3a890d4`.
- GREEN SQL: 54/54 casos transaccionales y 2/2 con conexiones concurrentes reales. Incluyen invocación privada, aislamiento entre alumnos, ausencia de inicio, mínimos, relojes futuros, matrícula retirada e inmutabilidad tras cambio de requisitos.
- Regresión: 46/46 SQL de conservación/aislamiento, 12/12 Auth/REST de aislamiento y 13/13 Auth/REST de exámenes.
- Advisors locales a nivel info: solo aviso conocido de RLS sin políticas en snapshots privados, intencional para bloquear acceso cliente; [referencia](https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy). Ningún warning/error nuevo.
- Revisión SQL independiente sin bloqueantes para este alcance.
- Auth/REST temporal: 6/6, incluido tiempo real, inmutabilidad de las cinco RPC, escritura directa denegada y matrícula retirada.
- 187 pruebas unitarias y TypeScript correctos. Pruebas RED/GREEN adicionales capturan reanudación fallida, heartbeat encolado que ocultaba ese error y avance que incluía lecciones de otros cursos. Cola compartida serializa limpieza/reinicio del reproductor; heartbeat vuelve a comprobar confirmación al ejecutarse.
- Lint y formato globales ejecutados. Permanecen 4 errores y 9 avisos preexistentes; el nuevo aviso de estado síncrono en el efecto temporal se corrigió. Cambios de formato ajenos retirados usando copia previa en `.vercel/timing-quality-backup.json`.
- Repetir E2E requiere `node scripts/lesson-timing-fixture.mjs --create` antes de `E2E_BASE_URL=http://localhost:3005 npx playwright test --config playwright.timing.config.ts`; reutilizar fixtures finalizadas no constituye un recorrido de inicio nuevo.
- E2E final: 4/4 en escritorio y móvil con fixtures nuevas. Inicio, acreditación, finalización y recarga reales; revocación de matrícula rechaza el envío sin falso éxito. Capturas revisadas en `test-results/lesson-timing/**/preview_screenshot-timing-{completed,rejected}.png`; porcentaje de curso corregido a 100%, aviso visible y botón bloqueado ante rechazo.

## Operación y límites

SQL aplicado únicamente en Supabase local `quiz-validation` (55321/55322), sin reset. Producción solo se consultó para comprobar definiciones. La entrega necesita aplicar migración y frontend juntos tras autorización específica live, que todavía no se ha solicitado.

Rama `codex/verified-lesson-timing`, GREEN `34c54b2`, subida a GitHub. [Preview Ready](https://cms-blue-team-mefwyjfxg-eudaldocal-8684s-projects.vercel.app), deployment `dpl_HoAGmV7s3qiVuWFKVbAUi4eQkZ6d`: build/TypeScript correctos y login HTTP 200 con formulario mediante CLI autenticada. La preview usa el backend alojado sin la migración nueva; la validación integrada y las capturas corresponden al entorno local completo. Supabase de pruebas detenido con backup, sin tocar el stack original.

El contador muestra tiempo acreditado por el servidor en actualizaciones periódicas. El sistema no demuestra atención humana ni impide automatizar heartbeats. Exclusión entre lecciones/dispositivos, eventos auditables, versionado de requisitos/contenido y cierre de políticas antiguas de cursos/matrículas continúan pendientes. No se afirma conformidad AESA.
