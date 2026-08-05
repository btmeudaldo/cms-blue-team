# Especificación: CMS de cursos con progreso temporal verificable

## Objetivo

Permitir a instructores y administradores crear cursos y lecciones enriquecidas; permitir a estudiantes matriculados recorrerlas y completar una lección únicamente después del tiempo mínimo definido por la lección.

## Alcance confirmado del MVP

El requisito inicial de gerencia es registrar de forma fiable el tiempo de cada lección y dificultar autoclickers mediante una posición variable del botón «Siguiente». No se incluye acreditación de conocimientos, evaluación, certificación ni controles adicionales hasta que se soliciten.

## Actores

- **Estudiante**: consulta los cursos en los que está matriculado, inicia y completa sus propias lecciones.
- **Instructor**: crea y administra sus cursos, lecciones y medios.
- **Administrador**: administra todos los recursos y matrículas.

## Historias de usuario

1. Como instructor, creo un curso y ordeno sus lecciones.
2. Como instructor, edito una lección con TipTap, incorporo imágenes y puedo sobrescribir el tiempo mínimo calculado.
3. Como estudiante matriculado, abro una lección y veo una cuenta atrás basada en el tiempo mínimo.
4. Como estudiante, solo puedo activar «Siguiente» tras acabar la cuenta atrás y recorrer al menos el 90 % del contenido; el botón aparece en una posición horizontal variable de una franja inferior reservada.
5. Como estudiante, solo puedo completar la lección si el servidor confirma que el mínimo ha transcurrido desde mi inicio registrado.
6. Como instructor/admin, consulto el estado y el tiempo real registrado de los estudiantes autorizados.

## Reglas de negocio

- El cálculo por defecto es `ceil((word_count / 200) * 60 * 0.7)`, con un mínimo de producto inicial de 30 segundos.
- El instructor puede definir un `min_seconds` mayor o menor, siempre entero y no negativo.
- El primer inicio de una lección crea el progreso y conserva `started_at` en recargas posteriores.
- La finalización es idempotente: repetirla devuelve el progreso ya completado sin modificar sus marcas temporales.
- Solo una matrícula activa da acceso a una lección.
- El servidor deriva `elapsed_seconds` de `completed_at - started_at`; nunca se acepta desde el cliente.
- El requisito visual de recorrido se considera satisfecho al alcanzar el 90 % del contenido desplazable de la lección.
- Cada carga de lección asigna una posición horizontal aleatoria al botón «Siguiente», limitada a una franja inferior independiente del contenido de la lección.
- La posición se mantiene fija hasta que se abandona o recarga la lección, evitando movimientos inesperados, cambios de diseño y problemas de accesibilidad.
- La franja reserva espacio suficiente, conserva un objetivo táctil accesible y mantiene el botón visible mediante desplazamiento normal, sin superponerse a texto, imágenes o controles del editor.

## Criterios de aceptación

- Un estudiante no matriculado no puede leer ni iniciar una lección.
- Un estudiante no puede completar antes de `started_at + min_seconds`, aunque llame directamente a la acción o RPC.
- Un estudiante no puede leer ni modificar progreso ajeno.
- Tras cumplir el mínimo, la finalización deja `is_completed=true`, `completed_at` y `elapsed_seconds` coherentes.
- Refrescar o abrir otra pestaña no reinicia la marca de inicio.
- Cada carga muestra el botón en una posición distinta dentro de la franja inferior delimitada, sin invadir el área de contenido ni moverse durante la interacción.
- El editor guarda contenido seguro, el conteo de palabras y el mínimo correspondiente.

## Fuera de alcance de la primera entrega

- Certificados, pagos, foros, evaluaciones y SCORM.
- Detección biométrica, vigilancia de webcam o promesa de demostrar atención/comprensión.
- Protección frente a automatización avanzada que simule tráfico y espere el tiempo exigido.
