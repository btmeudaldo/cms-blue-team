# Exámenes y resultados verificables

Cerrar la lectura pública de respuestas y la escritura directa de notas propias. Conservar los registros existentes y preparar preview sin cambios a producción.

## Requisitos

- Anónimos no leen cuestionarios ni intentos. Alumnos matriculados reciben enunciados y opciones, nunca índices correctos ni explicaciones.
- Administradores y docentes propietarios o asignados editan el banco de su curso. Otros docentes no leen su solucionario ni sus expedientes.
- Iniciar crea identificador, fecha y copia privada de preguntas y umbral en PostgreSQL, vinculados al usuario verificado.
- Enviar solo acepta identificador del intento y respuestas. PostgreSQL verifica identidad y matrícula, valida respuestas, calcula nota y tiempo y registra atómicamente.
- La misma entrega devuelve el mismo resultado; cambiar respuestas de un intento finalizado falla. Entregas concurrentes no duplican notas.
- Roles API no insertan, actualizan, borran ni truncan resultados directamente. Históricos se conservan sin atribuirles garantías nuevas.
- La interfaz solo confirma resultados persistidos. Un fallo conserva respuestas e identificador en memoria para reenviar, sin aprobado local.

## Límites

No se afirma cumplimiento AESA completo. Retención reglamentaria, firma de registros, límites de convocatorias y publicación de explicaciones requieren otro bloque. Las políticas de lecciones pendientes quedan fuera.
