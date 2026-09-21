# Revisión de la primera fase de acceso

## Cambios

- Auth verificado y perfil persistido sustituyen cookies demo, roles por correo y metadata editable.
- Login falla sin credenciales válidas; el registro pendiente informa confirmación por correo.
- Controles de acceso demo y contraseña precargada retirados; endpoints antiguos rechazan solicitudes.
- Consultas académicas usan cliente de sesión/RLS, sin mezclar mockStore ni reintentar con service_role.
- Cursos, lecciones y matrículas rechazan errores de autorización sin éxito ficticio. Gestión de usuarios/roles continúa reservada al administrador; instructores conservan matrículas.
- Lecciones y edición de cuestionarios comprueban explícitamente propietario/editor asignado, además del rol. Guardar un cuestionario verifica su relación con lección y curso.

## Validación local

- TDD: fallos RED reproducidos en acceso, acciones, login y autorización por curso antes de corregir.
- 130 pruebas unitarias correctas; TypeScript y build de producción correctos.
- Chromium: 9 E2E correctas; 4 omitidas por falta de cuentas E2E reales configuradas. Se comprueba login y rechazo de cookies falsificadas en cinco rutas.
- Viewport móvil: 6 E2E de acceso correctas. La revisión visual detecta desbordamiento previo del encabezado en móvil; queda fuera de la corrección de autorización.
- Captura local revisada: `test-results/preview_screenshot-login.png`.
- ESLint dirigido a archivos de código/test de la corrección correcto.
- `npm run lint:fix` global ejecutado: permanecen 4 errores y 9 advertencias preexistentes, en componentes ajenos al cierre de acceso.
- `npm run format` ejecutado; cambios de formato ajenos retirados para limitar el diff. Se verifica formato de los archivos modificados.
- E2E local sin acceso de red a Supabase; la prueba de health admite offline. Los positivos Auth/RLS usan dobles de prueba: no sustituyen validación con cuentas reales.

## Verificación remota solo lectura y siguiente prioridad

El proyecto remoto coincide con el enlazado local. No se ha modificado su esquema ni sus datos.

1. Quizzes/quiz_attempts sí tienen RLS en remoto (el historial local no representa íntegramente ese estado). La política SELECT pública de quizzes expone `questions.correctAnswerIndex`. Las políticas de INSERT/UPDATE de intentos dejan al alumno modificar sus propios resultados. Es el siguiente bloqueo crítico.
2. Políticas de lecciones contienen condiciones ambiguas resueltas como tautologías; la API directa mantiene un riesgo de acceso a otros cursos. Esta fase añade defensa en acciones, pero no cierra el acceso directo SQL/API.
3. `can_manage_course` remoto solo incluye administrador/creador, no editores asignados: estos pueden recibir menos progreso al respetar RLS. Corregir el alcance SQL mediante migración y pruebas de integración; no restaurar service_role.
4. Permanecen pendientes corrección/calificación de exámenes, persistencia fiable del progreso, conservación histórica y garantías de exportación. No se afirma cumplimiento AESA con esta entrega.

## Entrega

Rama `codex/verified-access`, sin merge a main ni despliegue live. Commits de código: `a7df990` (RED) y `a88fc78` (GREEN).

Vercel confirma despliegue Preview correcto de `a88fc789a3d4d6520c6511d482409cf3c0005151` (deployment GitHub `6563746921`):

https://cms-blue-team-ojaxpu5ar-eudaldocal-8684s-projects.vercel.app

La protección SSO de Vercel redirige el navegador y las pruebas remotas a su login. No se ha desactivado esa protección. Las comprobaciones de UI remotas quedan bloqueadas hasta disponer de sesión Vercel autorizada; no equivalen a un fallo de acceso del CMS. La captura revisada corresponde al entorno local, no a la preview remota.
