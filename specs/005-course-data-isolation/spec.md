# Aislamiento de lecciones y lectura de progreso

## Problema verificado

El catálogo remoto contiene comparaciones tautológicas en las políticas de lecciones: `enrollment.course_id = enrollment.course_id` y `editor.course_id = editor.course_id`. Una matrícula o asignación en un curso abre acceso cruzado. `can_manage_course` omite editores asignados y no comprueba el rol del propietario. Los grants de lecciones/progreso incluyen TRUNCATE, que no queda restringido por RLS.

## Contrato

- Alumno: lectura de lecciones únicamente en cursos matriculados; sin escritura directa de lecciones ni progreso.
- Instructor: se conserva la lectura global del catálogo de lecciones existente; gestión de lecciones y lectura de progreso solo en cursos propios o asignados, con rol persistido instructor.
- Administrador: gestión global de lecciones y lectura global de progreso.
- Progreso propio: se mantiene la lectura histórica del alumno; las escrituras continúan por RPC existentes.
- Ningún cliente anon/authenticated obtiene TRUNCATE, REFERENCES o TRIGGER sobre lecciones/progreso; anon no tiene acceso a estas tablas ni al helper de autorización.
- UPDATE debe comprobar tanto origen como destino; no debe permitir mover una lección a un curso no autorizado.
- Se conservan datos y contratos de las RPC de progreso. La semántica temporal, retención y permisos globales de matrículas se revisarán en bloques posteriores.

## Aceptación

Pruebas reales en Supabase local: alumno matriculado en A no lee B; instructor asignado A no puede insertar/editar/borrar B; administrador/propietario/editor legítimos funcionan; editor ve progreso de A sin ver B; retirar asignación quita acceso; alumno no se convierte en editor por registros de propietario/asignación; privilegios masivos revocados; RPC de progreso siguen operativas.
