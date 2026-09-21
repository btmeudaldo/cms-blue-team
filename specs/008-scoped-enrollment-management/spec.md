# Cursos y matrículas con permisos delimitados

## Contrato

El administrador gestiona todos los cursos y matrículas. Un instructor crea cursos a su nombre y modifica los propios o aquellos donde está asignado; solo elimina cursos propios sin expedientes protegidos. Un alumno no obtiene permisos de edición por conservar titularidad/asignación de una etapa anterior. El personal mantiene lectura del catálogo; el alumno accede a cursos matriculados.

Las matrículas solo pueden gestionarse por administradores o instructores autorizados en el curso. Cada guardado de selección es atómico: primero se valida todo el ámbito solicitado y después se cambian únicamente sus matrículas. Un curso ajeno, un fallo o un usuario inexistente no deja bajas parciales. La interfaz identifica los cursos gestionables y comunica los errores.

Las asignaciones de editores continúan reservadas a administradores. Instructores no pueden transferir la titularidad de cursos mediante escritura directa. Roles cliente no disponen de privilegios masivos ni acceso anónimo en las tablas afectadas.

## Fuera de alcance

Login y SSO aplazados por petición del usuario. No se cambia la equivalencia entre examen y avance visual ni los registros de lectura. No se borran históricos ni se definen plazos legales. El CMS publicado sigue siendo de pruebas privadas.
