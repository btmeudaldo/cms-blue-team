# Actividad única y separación de evidencias

## Alcance

El alumno solo puede acumular tiempo en una lección a la vez, incluso desde varias pestañas o dispositivos. La identidad y autorización permanecen verificadas en servidor. Login y SSO siguen aplazados.

## Contrato

- Iniciar una lección nueva o reanudar una pausada desactiva la anterior del mismo alumno. Se conservan todos los segundos ya confirmados; el intervalo pendiente de la anterior no se acredita al cambiar, para evitar solapamientos.
- Las peticiones heartbeat/pause rezagadas no reactivan una lección. Las operaciones se serializan por alumno; alumnos distintos son independientes.
- Iniciar repetidamente un registro existente sigue siendo idempotente. Los registros completados conservan sus evidencias originales.
- La migración pausa actividad incompleta existente sin alterar segundos confirmados, notas ni fechas de finalización. El alumno podrá reanudar después.
- La interfaz informa cuando el servidor devuelve la lección pausada y permite reanudar explícitamente.
- Aprobar un examen puede contar como avance visual, pero nunca sustituye el registro de lectura. Etiquetas y cálculos distinguen lectura confirmada de examen aprobado; un aprobado histórico no se pierde por un intento posterior suspenso.

## Aceptación

Pruebas SQL con conexiones concurrentes, Auth/REST y navegador demuestran exclusión entre lecciones, ausencia de doble crédito y reanudación. Las pruebas de lectura y cuestionarios prueban que una calificación no modifica el registro temporal. Se ejecutan regresiones, tipos y herramientas de calidad.

## Límites

La actividad registrada no demuestra por sí sola atención o identidad física. No se incorpora proctoring ni se declara conformidad normativa. Esta entrega termina en preview; aplicar la migración a la base publicada y promover el frontend requiere autorización específica.
