# Revisión de aislamiento de cursos

## Cambio

Migración `20260921102045_isolate_course_lessons_and_progress.sql`: elimina las comparaciones tautológicas y todas las políticas permisivas antiguas de lecciones/progreso, comprueba rol persistido y curso para escritura, e incluye al instructor asignado en la lectura de progreso. Conserva el catálogo global de contenido para docentes y el progreso propio para alumnos.

Las comprobaciones privilegiadas residen en `learning_private`, no expuesto por REST. `public.can_manage_course(uuid)` conserva su contrato como wrapper invoker sin ejecución anónima. Se revocan los permisos masivos de lecciones/progreso, incluido TRUNCATE, que RLS no protege. El progreso no admite escritura directa de clientes; siguen funcionando las RPC existentes.

## Evidencia

- RED SQL ejecutado sobre réplica local de estructura/grants remotos: 25 casos, 14 fallos de aislamiento/permisos. RED API real: 12 casos, 7 fallos. Commit RED `7302996`.
- GREEN: **25/25 pruebas SQL**, con fixtures aleatorios dentro de transacción y rollback, sin reset del entorno.
- GREEN: **12/12 pruebas Auth/PostgREST**. Alumno A no lee B; editor A no inserta/actualiza/borra B; edición legítima y lectura de progreso asignado funcionan; RPC de progreso conservadas; anon rechazado.
- Regresión de exámenes: **13/13 comprobaciones Auth/REST** después de cambiar las políticas.
- Unitarias: **150/150**. TypeScript y ESLint dirigido a los runners correctos.
- Advisors de seguridad locales: **0 incidencias**. Revisión independiente sin hallazgos bloqueantes dentro del alcance declarado.
- `npm run lint:fix` ejecutado: permanecen los mismos **4 errores y 9 avisos anteriores** en componentes ajenos. `npm run format` ejecutado excluyendo archivos ignorados; formato ajeno retirado tras comparar exactamente con la salida de Prettier de HEAD y guardar copia. Archivos de esta entrega comprobados.
- Sin cambios de frontend ni de las funciones temporales; no se requiere una nueva captura de UI para esta migración.

## Reproducción local

Se utiliza el Supabase aislado `quiz-validation` (API 55321, PostgreSQL 55322), con estructura remota y la migración de exámenes ya aplicada. Los runners rechazan otro proyecto/host/puerto. `.vercel/local-supabase.json` contiene las credenciales ignoradas por Git.

```powershell
node --test scripts/course-isolation.integration.mjs
# Las cuentas sintéticas se preparan con scripts/quiz-staging-api.mjs.
node --test scripts/course-isolation-api.mjs
```

Aplicar la nueva migración únicamente a ese entorno local antes de GREEN. La suite API conserva sus fixtures sintéticos; nunca apunta a producción.

## Límites y entrega

**La nueva migración no se ha aplicado a producción.** El historial local y remoto previo diverge: aplicar solo esta migración revisada cuando se autorice esta entrega; no usar `db push` indiscriminadamente.

Este bloque cierra acceso directo a lecciones/progreso. Permanecen pendientes las políticas de `courses` por propietario sin validar rol, borrados indirectos por cascada y conservación de expedientes, permisos globales de matrículas y semántica temporal/idempotencia de las RPC. No se afirma aislamiento completo de toda la plataforma ni conformidad AESA.

El test SQL heredado `security_definer_function_privileges_test.sql` exige revocar helpers públicos todavía usados por políticas y falla ya contra el esquema remoto anterior. La nueva suite verifica los privilegios efectivos del helper de esta entrega y las operaciones reales bajo `authenticated`; no se modifica ese test ajeno ni se presenta toda la suite heredada como aprobada.
