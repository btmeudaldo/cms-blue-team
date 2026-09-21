# Plan

1. Confirmar políticas/grants remotos y consumidores actuales tras cambio a repositorio btmeudaldo y equipo Vercel Blue Team.
2. RED SQL de permisos cruzados, titularidad histórica, traslado de propietario y atomicidad. RED acciones de denegación y delegación a RPC; RED interfaz del ámbito editable.
3. Migración por CLI: reemplazar políticas antiguas de cursos/matrículas, permisos mínimos, guardia de propietario y RPC transaccional privado con wrapper invoker.
4. Acciones usan sesión verificada y RPC para matrículas, sin service_role. Pantalla filtra ámbito editable y presenta errores sin éxito aparente.
5. Verificación local SQL/Auth/REST, unitarias, TypeScript, E2E y capturas, lint/formato y regresiones académicas. Commit por fase, push y preview en cuenta Blue Team.

## Archivos previstos

- Migración nueva y scripts de integración de permisos/matrículas.
- src/app/actions/enrollment.actions.ts y pruebas de mutaciones administrativas.
- Pantalla y componentes de matrículas en admin/users y dependencias de consultas necesarias.
- specs/008-scoped-enrollment-management, tasks/todo.md y tasks/lessons.md.

La migración y el frontend permanecen pendientes de autorización específica para publicar esta entrega en la URL de producción, conforme a las instrucciones del repositorio.
