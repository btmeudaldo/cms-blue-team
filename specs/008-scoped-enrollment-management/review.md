# Revisión de cursos y matrículas

## Corrección

Las políticas antiguas combinaban permisos de instructor global con permisos por curso. Se eliminan y sustituyen por políticas de ámbito explícito. Se exige rol vigente para modificar o borrar cursos y se impide al instructor cambiar su propietario. Se revocan privilegios masivos y anónimos en cursos, matrículas y asignaciones.

El guardado de matrículas pasa a una única RPC transaccional: valida identidad, rol, destino y todos los cursos solicitados antes de modificar. Solo cambia el ámbito indicado, preserva las otras matrículas y sus fechas. La función pública usa invoker; la implementación privilegiada permanece en learning_private con search_path vacío y autorización explícita. El privilegio privado permite bloquear filas que RLS no permite actualizar a instructores, sin concederles nuevos permisos sobre perfiles. Un bloqueo transaccional por alumno serializa guardados del mismo destino; filas de actor, destino, cursos y asignación estabilizan la autorización durante el cambio.

La página calcula cursos gestionables desde la sesión verificada. El modal muestra ese ámbito y mantiene separado el borrador de la selección confirmada; los rechazos mantienen abierto el formulario con aviso accesible.

## Evidencia

- RED SQL: 19 fallos de 41 pruebas; acciones 5 fallos. Commit `b41ea82`.
- GREEN SQL: 54/54, incluyendo llamadas privadas directas, permisos cruzados, titularidad histórica, propietario inmutable para instructor, parámetros inválidos y ausencia de cambios parciales.
- Auth/REST: 6/6 con usuarios reales locales, incluyendo conservación de matrículas ajenas y rechazo atómico.
- Revisión raíz del SQL y contratos; wrappers con permisos mínimos y sin cambios de datos históricos.
- Regresión SQL: aislamiento 25/25, conservación 21/21 y tiempos 56/56. Suite unitaria 201/201 y TypeScript correctos.
- Interfaz/helper: 11/11 casos, incluyendo borrador cancelado, error accesible, ámbito limitado y confirmación solo tras persistencia. Advisors locales: cero warnings/errors.
- Lint y formato globales ejecutados; continúan 4 errores y 9 avisos preexistentes. Cambios de formato ajenos retirados desde copia previa ignorada `.vercel/enrollment-quality-backup.json`; lint dirigido de los archivos nuevos/editados de este bloque correcto.
- E2E 4/4: instructor y administrador en escritorio/móvil, selección guardada y reabierta con datos persistidos. Capturas revisadas en `test-results/enrollment-scope/**/preview_screenshot-enrollment-{instructor,admin}.png`; formulario legible, conserva el desbordamiento previo de la cabecera móvil fuera de este bloque. Un selector inicial ambiguo se sustituyó por identificador único de fixture; no fue fallo de permisos.

## Límites y operación

Esta entrega se validó en Supabase aislado quiz-validation (55321/55322) y se publicó en el proyecto alojado wkxylgsauhruoopclfwm tras autorización específica del usuario el 2026-09-21. Migración remota `20260921131730`, nombre `scope_course_administration`. Repo actual btmeudaldo/cms-blue-team y Vercel Blue Team verificados. Login/SSO y contraseñas no se modifican.

Rama `codex/scoped-enrollment-management`, GREEN `7d79285`, subida al repositorio oficial. [Preview Ready](https://cms-blue-team-5l473cntb-blue-team13.vercel.app) del equipo `blue-team13`, deployment `dpl_5D7ifA1vP8cyTk2Fzc2t8ZQDTkMh`; build/TypeScript correctos y login HTTP 200 con formulario mediante CLI autenticada. El flujo completo se validó en local antes de publicar. Dev server detenido y Supabase aislado parado conservando backup; stack original intacto.

Publicado en [URL principal de pruebas](https://cms-blue-team-six.vercel.app), deployment `dpl_E1dnckg31yUwm1K4FKrHHuEGiFdN`, URL inmutable https://cms-blue-team-n7izbbhte-blue-team13.vercel.app. Inspect resuelve la URL habitual a esta versión Ready. Build/TypeScript correctos, login HTTP 200 con formulario y health `online`/`supabase`.

Recuentos y huellas MD5 de filas completas idénticos antes/después: cursos 5 (`49bf7204c159021715d9025275180b47`), matrículas 17 (`032601bd3e8f1ae35017b2d586217d8b`), editores 0 (`d41d8cd98f00b204e9800998ecf8427e`), lecciones 16 (`81f583c1a4abe2755c82025bd639cb7b`), perfiles 11 (`496ccac89cc7342ae28e8bdd555f2e9b`), progreso 7 (`2e76e5b0ef3b4b1bd803986989c1d5e6`), intentos 6 (`b0680bd5aed20fed50a3755ccfaefc4c`), snapshots 1 (`b9971e0e8b92de78f2809759f86638b9`). No se crearon fixtures ni se modificaron matrículas alojadas para probar.

Catálogo remoto confirma las 11 políticas nuevas, cero grants anónimos/masivos en las tres tablas, trigger de propietario activo, RPC público invoker y privado definer con search_path vacío y EXECUTE solo para usuarios autenticados. Advisors mantiene los avisos previos: snapshots privados sin políticas, cuatro funciones definer accesibles a anon y cuatro a authenticated, y protección de contraseñas filtradas deshabilitada; sin avisos nuevos atribuibles al bloque. Referencias de revisión: [funciones públicas](https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable) y [contraseñas filtradas](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection).

No se incorpora histórico de altas/bajas, ni control de versiones de selecciones simultáneas: los guardados se serializan y prevalece el último dentro de su ámbito. No se afirma conformidad AESA. El resto del plan del CMS figura en tasks/todo.md.
