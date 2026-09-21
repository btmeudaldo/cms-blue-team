# Conservación frente a borrados indirectos

## Objetivo

Impedir que eliminar lecciones, cursos, perfiles o cuentas destruya progreso, resultados o intentos iniciados. El bloqueo se exige también al borrar mediante API administrativa; no depende de una consulta previa susceptible a concurrencia.

## Contrato

- Progreso existente, incluido un inicio incompleto, impide borrar su lección o perfil y, por cascada, su curso o cuenta.
- Resultados de examen impiden borrar la cuenta del alumno; se conserva la restricción existente sobre examen/lección/curso.
- Una copia privada de un examen iniciado queda vinculada a la cuenta y bloquea su borrado, aunque aún no exista resultado.
- La relación lección-curso es inmutable para evitar trasladar el contexto de expedientes por API directa. La interfaz no ofrece traslados actualmente.
- Cursos/lecciones sin evidencia académica conservan la eliminación legítima. Una eliminación rechazada no modifica ninguna fila ni invalida la interfaz como si hubiese tenido éxito.
- La interfaz muestra un error de conservación cuando PostgreSQL rechaza por FK (`23503`); otros fallos mantienen su comportamiento explícito.
- Revocar privilegios masivos de cursos/perfiles para clientes; los de lecciones/resultados/progreso ya están limitados.

## Límites

No es una política legal de plazos de conservación ni una certificación AESA. No se implementan archivado, anonimización, versionado integral de contenidos, exportaciones ni un procedimiento de purga. Administradores de base de datos pueden modificar el esquema o borrar directamente: este bloque protege las operaciones normales de la aplicación y los borrados referenciales. La semántica temporal de progreso y las políticas antiguas de cursos/matrículas continúan en el backlog.
