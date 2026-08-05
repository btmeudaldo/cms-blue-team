# Plan técnico: CMS con anticheating

## Decisiones

- El MVP se limita a gestión de cursos/lecciones, registro temporal verificable y fricción contra autoclickers por coordenadas fijas. Los requisitos posteriores se tratarán como incrementos separados.
- Se usará una RPC PostgreSQL como fuente de verdad para `start_lesson` y `complete_lesson`.
- Las Server Actions autentican, validan entradas con esquemas tipados y llaman a las RPC; no duplican la regla temporal.
- RLS resuelve aislamiento y autorización de datos. La autorización de alto nivel se duplica solo donde sea necesario para UX, nunca como sustituto de RLS.
- El bucket `course-media` será público únicamente para imágenes no sensibles; las operaciones de escritura/borrado se protegen por políticas y rol.
- `LessonPlayer` renderiza una franja inferior exclusiva para la acción de avance. Con `crypto.getRandomValues` obtiene una coordenada horizontal acotada (por ejemplo, 8–92 %), una vez por montaje, y la aplica sin provocar layout shift.

## Modelo relacional

| Entidad                | Responsabilidad                                          |
| ---------------------- | -------------------------------------------------------- |
| `profiles`             | Perfil y rol de `auth.users`.                            |
| `courses`              | Metadatos y propietario instructor.                      |
| `course_enrollments`   | Acceso de estudiante a un curso.                         |
| `lessons`              | Contenido HTML saneado, orden, palabras y tiempo mínimo. |
| `user_lesson_progress` | Inicio inmutable, finalización y tiempo derivado.        |

## Flujo de progreso

1. La página servidor comprueba sesión, matrícula, curso, lección y progreso.
2. El cliente invoca `startLessonAction`; la RPC inserta una única fila con `started_at = clock_timestamp()`.
3. El cliente muestra la cuenta atrás y habilita visualmente el botón cuando se cumplen tiempo y scroll del 90 %. El botón permanece dentro de su franja inferior y ocupa una posición horizontal aleatoria estable para esa carga.
4. `completeLessonAction` llama a la RPC, que bloquea el progreso, consulta `min_seconds`, calcula la diferencia con su reloj y actualiza atómicamente.
5. La acción revalida la ruta solo si la RPC confirma la finalización.

## Fases

### Fase 0 — Base del repositorio

Inicializar Next.js, configuración estricta, entorno Supabase local, convenciones, CI y documentación de variables.

### Fase 1 — Identidad y base de datos

Crear migraciones, trigger de perfil, roles, tablas, índices, RLS y RPC de inicio/finalización con pruebas de integración.

### Fase 2 — Dominio y acceso del estudiante

Implementar el dominio de cálculo de lectura, casos de uso, páginas de catálogo/lección y reproductor con restricciones visuales.

### Fase 3 — CMS de instructor

Crear administración de cursos, editor TipTap, saneamiento, subida de imágenes y cálculo de tiempo al guardar.

### Fase 4 — Observabilidad y endurecimiento

Añadir auditoría de eventos, límites razonables, errores trazables, pruebas RLS negativas y auditoría de accesibilidad.

### Fase 5 — Entrega

Ejecutar la batería completa, construir preview Vercel, comprobar manualmente el flujo temporal y documentar operación.

## Riesgos y mitigaciones

- **Autómatas avanzados**: el servidor solo acredita espera; mantener esta limitación explícita y añadir evaluaciones si se requiere acreditar aprendizaje.
- **Concurrencia/pestañas**: clave primaria `(user_id, lesson_id)`, inserción idempotente y bloqueo `FOR UPDATE` en la RPC.
- **XSS desde el editor**: lista restrictiva de nodos/atributos TipTap y saneador de HTML.
- **Escalada de rol**: el cliente no escribe roles y toda política consulta el perfil autenticado en servidor/base de datos.
- **Autoclickers por coordenadas**: la posición aleatoria estable dentro de una franja inferior reduce su eficacia, aunque no bloquea automatización que inspeccione el DOM o invoque la RPC.
- **Accesibilidad/UX**: la posición nunca cambia después de aparecer; la franja mantiene orden de tabulación, foco visible, etiqueta semántica y área táctil suficiente.
