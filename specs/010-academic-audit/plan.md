# Plan técnico

1. Inventariar escrituras existentes y definir payloads explícitos por tabla, sin modificar reglas académicas ni permisos actuales de edición.
2. RED SQL: captura, atribución, conservación, rollback, ausencia de secretos, permisos y reintentos de incidencias. RED aplicación: consultas restringidas, filtros seguros, errores y presentación.
3. Crear migración con tabla public.academic_audit_events, RLS de lectura administrativa, función de trigger privada y guardias de inmutabilidad. Añadir RPC de incidencias con wrapper invoker y comprobación privada de identidad/ámbito.
4. Crear feature audit con validación pura, consultas mediante cliente de sesión verificada, historial paginado y formulario; enlace desde administración.
5. Validar SQL, sesiones Auth/REST, E2E y capturas de escritorio/móvil; ejecutar regresiones, tipos, lint, formato y build de preview.
6. Commit por fases, push y preview. Documentar alcance, volumen y publicación pendiente.

## Archivos previstos

- Migración generada por CLI y scripts/academic-audit*.mjs.
- src/features/audit/domain, infrastructure y components con pruebas.
- src/app/admin/audit/page.tsx y pruebas; enlace en src/app/admin/page.tsx.
- src/app/actions/audit.actions.ts y pruebas.
- e2e/academic-audit.e2e.ts y playwright.audit.config.ts.
- constitution.md, specs/010-academic-audit y tasks/todo.md.

Los identificadores del historial no dependen de registros vivos; los datos anteriores/posteriores son una proyección permitida de la entidad, no una copia indiscriminada de filas.
