# Revisión de conservación de expedientes

## Implementación

`20260921103442_preserve_academic_records.sql` sustituye cascadas por RESTRICT desde progreso a lección/perfil y desde resultados de examen a cuenta Auth. Añade referencia RESTRICT de snapshots a cuenta. Una eliminación de curso, perfil o cuenta que alcanzase esos registros se rechaza atómicamente. Se mantienen las restricciones previas de resultados/snapshots a cuestionario.

El curso de una lección es inmutable; la API no puede cambiar retrospectivamente su atribución en el expediente. Se revocan TRUNCATE/REFERENCES/TRIGGER de cursos/perfiles para roles cliente. Las referencias utilizadas ya cuentan con índices adecuados. La elección de RESTRICT sigue la [semántica referencial de PostgreSQL](https://www.postgresql.org/docs/18/ddl-constraints.html#DDL-CONSTRAINTS-FK).

Las acciones de borrado devuelven un error esperado ante `23503`, sin revalidar como si hubiera éxito. `AcademicDeleteForm` presenta un aviso accesible y deshabilita el botón mientras se envía. No se silencian otros errores. El contenido sin registros sigue siendo eliminable.

## Evidencia

- RED SQL: **21 casos, 12 fallos** por cascadas, traslado y privilegios excesivos. RED acciones: **2 fallos FK** antes de corregir; formulario nuevo ausente antes de implementar. Commit RED `ccc1bb0`.
- GREEN SQL: **21/21**. Incluye progreso incompleto, resultado legacy sin snapshot, snapshot sin resultado, eliminación legítima sin evidencia y conservación de todas las relaciones tras rechazo. Fixtures transaccionales con rollback, sin reset.
- Regresión: **25/25 SQL de aislamiento**, **12/12 Auth/REST de aislamiento**, **13/13 Auth/REST de exámenes**.
- El traslado rechazado devuelve ahora `22023` por la regla inmutable antes de llegar al rechazo RLS; solo ese caso de regresión acepta ambos códigos. Los demás mantienen `42501` estricto.
- Auth Admin local real: baja de cuenta sintética con resultados rechazada (HTTP 500 de GoTrue por FK); cuenta y todos los intentos permanecen. No existe formulario de baja de cuentas en el CMS actual.
- **158 pruebas unitarias correctas** y TypeScript correcto.
- **2 E2E integradas correctas**, escritorio y móvil: login de administrador real, rechazo de borrado de lección/curso con progreso, mensaje accesible y presencia de ambos tras recarga.
- Capturas locales revisadas bajo `test-results/academic-preservation/academic-preservation.e2e.-f2cd0-e-y-conserva-ambos-visibles-{chromium,mobile}/preview_screenshot-preserved-{lesson,course}.png`. El mensaje se ajusta a la tarjeta; persiste el desbordamiento previo del encabezado móvil, fuera de este bloque.
- Advisors SQL locales: **0 incidencias**. Revisión independiente sin hallazgos bloqueantes dentro del alcance.
- Lint global ejecutado: permanecen **4 errores y 9 avisos preexistentes**. Formato global ejecutado; cambios ajenos retirados tras comparar con Prettier sobre HEAD y guardar copia. No se afirma lint global limpio.

## Operación y límites

La migración se ha aplicado únicamente en Supabase local `quiz-validation` (55321/55322). Credenciales/fixtures permanecen en `.vercel/`, ignorado. No se han intentado borrados ni creado cuentas en producción.

Antes de migrar producción, verificar nuevamente que `quiz_private.attempt_snapshots.user_id` no tenga huérfanos; el preflight remoto actual devuelve cero. Comparar recuentos/huellas de progreso, resultados, snapshots y contenidos antes/después. Aplicar solo esta migración, no el historial local divergente.

Esta entrega requiere migración y frontend para el mensaje de conservación. **Pendiente de autorización específica de producción**; primero preview.

No hay archivado ni plazos legales definidos, purga o anonimización. No se congelan contenido, títulos ni mínimos históricos; tampoco se corrige aún la repetición de finalizaciones de progreso. Un administrador de base de datos puede modificar el esquema o borrar registros directamente. Continúan pendientes las políticas antiguas de cursos/matrículas y el versionado/exportación del expediente; no se afirma conformidad AESA.
