# Backlog de implementación

## Auditoría ATO: fase 8 — historial de cambios e incidencias

- [x] Inventario y contrato en specs/010-academic-audit; login/SSO fuera de alcance.
- [ ] RED SQL y aplicación: captura, atribución, permisos, conservación y errores.
- [ ] GREEN: eventos transaccionales y registro de incidencias; consulta administrativa paginada.
- [ ] Validar SQL/API/E2E, regresiones y calidad; documentar evidencia.
- [ ] Commit, push y preview; publicación remota requiere autorización específica posterior.

## Auditoría ATO: fase 7 — actividad única y evidencias separadas

- [x] Especificar contrato y plan en specs/009-single-active-lesson; login/SSO aplazados.
- [x] RED: reproducir actividad simultánea y etiquetas de lectura derivadas del examen.
- [x] GREEN: exclusión temporal en PostgreSQL, feedback de pausa y proyecciones visuales separadas.
- [x] Validar SQL, Auth/REST, navegador, regresiones y calidad; evidencia en specs/009-single-active-lesson/review.md.
- [x] Commit, push y preview Ready; migración y frontend publicados tras autorización específica. Registro en specs/009-single-active-lesson/review.md.

## Auditoría ATO: fase 6 — cursos y matrículas

- [x] Confirmar repositorio Blue Team y auditar políticas antiguas; plan/spec en specs/008-scoped-enrollment-management.
- [x] RED: permisos cruzados, titularidad y guardado parcial.
- [x] GREEN: permisos delimitados, guardado atómico y ámbito editable en pantalla.
- [x] Validar pruebas y recorrido integrado; 54 SQL, 6 API, 4 E2E, 201 unitarias y TypeScript correctos. Evidencia en specs/008-scoped-enrollment-management/review.md.
- [x] Commit, push y preview Blue Team Ready; registro en specs/008-scoped-enrollment-management/review.md.
- [x] Aplicar migración e interfaz en URL principal de pruebas tras autorización específica; ocho tablas intactas, políticas/RPC verificadas y web online. Evidencia en specs/008-scoped-enrollment-management/review.md.

## Pendientes posteriores del CMS

- [x] Activar en la web publicada la exclusión de tiempo simultáneo validada en 009; integridad y despliegue verificados.
- [ ] Registro auditable de eventos y cambios administrativos.
- [ ] Versionado de contenido/requisitos y exportación de expedientes.
- [ ] Completar revisión funcional y accesibilidad de las pantallas.
- Login/SSO: aplazado expresamente por el usuario mientras el CMS sigue en pruebas privadas.

## Auditoría ATO: fase 5 — progreso temporal verificado

- [x] Inspeccionar RPC y consumidores; especificar contrato y plan en specs/007-verified-lesson-timing.
- [x] RED: reproducir finalización mutable, matrícula revocada y éxito simulado.
- [x] GREEN: RPC temporales autorizadas e idempotentes, acciones verificadas y UI sincronizada.
- [x] Validar SQL, Auth/REST, recorrido de alumno, regresiones y calidad; 56 SQL, 6 API, 4 E2E, 187 unitarias y TypeScript correctos. Límites de lint en review.md.
- [x] Commit, push y preview Ready; evidencia en specs/007-verified-lesson-timing/review.md.
- [x] Aplicar migración temporal y frontend tras autorización live específica; seis tablas intactas, privilegios remotos verificados y web online. Evidencia en specs/007-verified-lesson-timing/review.md.

## Auditoría ATO: fase 4 — conservación de expedientes

- [x] Inspeccionar FK y rutas de borrado; documentar alcance y plan en specs/006-academic-record-preservation.
- [x] RED: reproducir pérdidas por cascada y errores de interfaz.
- [x] GREEN: restricciones referenciales, ámbito inmutable de lección y feedback de conservación.
- [x] Validar SQL, API, UI y regresiones; 21 pruebas de conservación, 2 E2E y 158 unitarias correctas; límites en review.md.
- [x] Commit, push y preview Ready; evidencia en specs/006-academic-record-preservation/review.md.
- [x] Aplicar migración y publicar frontend tras autorización específica de producción; seis tablas sin cambios de datos, restricciones activas y web online. Evidencia en specs/006-academic-record-preservation/review.md.

## Auditoría ATO: fase 3 — aislamiento de cursos

- [x] Verificar catálogo remoto y documentar contrato/plan en specs/005-course-data-isolation.
- [x] RED: reproducir lectura/escritura cruzada, falta de acceso del editor al progreso y grants masivos.
- [x] GREEN: migración de políticas y helper de autorización con privilegios mínimos.
- [x] Validar roles reales, regresión de exámenes, advisors, tipos y calidad; 25 SQL, 12 API, 13 de regresión y 150 unitarias correctas.
- [x] Commit, push, preview Ready y revisión con evidencia en specs/005-course-data-isolation/review.md.
- [x] Aplicar nueva migración en producción tras autorización específica; conservación exacta de datos y permisos remotos verificados.

## Auditoría ATO: fase 2 — exámenes y notas

- [x] Inspeccionar esquema remoto y especificar contrato seguro en specs/004-secure-quiz-results.
- [x] RED: reproducir exposición y manipulación en PostgreSQL aislado y acciones.
- [x] GREEN: políticas mínimas y RPC de inicio/calificación idempotente con snapshot.
- [x] GREEN: DTO seguro, editor autorizado y UI sin notas locales.
- [x] Verificar SQL, unitarias, tipos, lint, formato, build y UI; límites en review.md.
- [x] Commit, push, preview y registro de límites; no producción.
- [x] Validación integrada en Supabase local y autorización específica de migración posterior.
- [x] Usuario autoriza validación integrada y posterior migración; prefiere Supabase local sin rama de pago.
- [x] Recuperar Docker sin reset y levantar Supabase local aislado, conservando el stack existente.
- [x] Restaurar estructura y grants sin expedientes; validar 13 comprobaciones Auth/REST y 2 recorridos reales desktop/móvil; advisors locales sin incidencias.
- [x] Preparar frontend compatible, aplicar migración autorizada y verificar conservación de históricos y permisos en producción; evidencia en specs/004-secure-quiz-results/review.md.

## Auditoría ATO: fase 1 — acceso verificado (2026-09-21)

- [x] Leer código y documentar especificación/plan en specs/003-verified-access.
- [x] RED: reproducir cookies demo, roles editables, login fallido, mezcla de mocks y escaladas de privilegios.
- [x] GREEN: sesión verificada, consultas RLS y acciones sin fallback privilegiado.
- [x] GREEN: retirar controles demo y contraseña precargada; probar rutas protegidas.
- [x] Verificar tests, tipos, lint, formato, build y estado remoto RLS de exámenes (limitaciones documentadas en review.md).
- [x] Commit, push y preview Vercel desde rama de corrección.
- [x] Verificar login en preview mediante CLI Vercel autenticada y rutas protegidas sin sesión.
- [x] Revisión: registrar resultado y siguientes prioridades (exámenes, progreso, conservación, exportación).

## Preparación

- [x] Confirmar el alcance de primera entrega: registro temporal verificable y botón de posición variable.
- [x] Inicializar el proyecto Next.js 16 con TypeScript, Tailwind, lint y formato.
- [x] Configurar Supabase CLI/local sin secretos.

## Fase 1: datos e identidad (TDD)

- [x] RED: pruebas de dominio para cálculo de palabras y `min_seconds`.
- [x] GREEN: implementar el cálculo puro de lectura.
- [x] RED: pruebas SQL del esquema base de roles, matrícula y progreso.
- [x] GREEN: crear migración de esquema e índices; RLS queda en el siguiente ciclo TDD.
- [ ] RED: pruebas SQL para inicio idempotente y finalización temporal.
- [ ] GREEN: crear RPC `start_lesson` y `complete_lesson` con reloj de base de datos.

## Fase 2: estudiante (TDD)

- [ ] RED: pruebas de los casos de uso y de las Server Actions.
- [ ] GREEN: páginas protegidas de curso/lección y acciones de progreso.
- [ ] RED: e2e de bloqueo por cuenta atrás y scroll inferior al 90 %.
- [ ] RED: prueba de componente/e2e que exige una franja inferior libre de contenido, coordenada aleatoria acotada y posición estable durante la lección.
- [ ] GREEN: `LessonPlayer`, cuenta atrás y botón protegido en una franja inferior con posición horizontal aleatoria estable.
- [ ] E2E: verificar que una llamada directa no evita la regla SQL.

## Fase 3: CMS (TDD)

- [ ] RED: pruebas de autorización de instructor y validación de lección.
- [ ] GREEN: CRUD de cursos/lecciones.
- [ ] RED: pruebas de saneamiento y cálculo al guardar.
- [ ] GREEN: TipTap, carga de imagen y persistencia segura.

## Fase 4: calidad y preview

- [ ] Añadir pruebas de accesibilidad y errores de autorización.
- [ ] Ejecutar formato, lint, typecheck, unitarias, integración y e2e.
- [ ] Crear commit semántico, push y preview Vercel.
- [ ] Validar manualmente la preview con usuario alumno e instructor.

## Revisión

Pendiente de ejecución.

## Corrección: persistencia de portadas de cursos (en curso)

- [x] Diagnosticar: las imágenes locales se codifican como `data:` en la columna del curso y los fallos de persistencia se silencian.
- [x] RED/GREEN: definir y validar tipo y tamaño para archivos de portada.
- [x] GREEN: guardar las portadas en Supabase Storage y persistir su URL pública estable.
- [ ] Verificar pruebas, tipos, lint, formato y subida real de una portada.

## Corrección: progreso persistente (en curso)

- [x] Documentar el diagnóstico y el alcance: no crear matrículas implícitas.
- [x] RED/GREEN: cubrir resolución de UUID/slug y prioridad de Supabase sobre mocks.
- [x] GREEN: rechazar rutas de lección desconocidas y separar progreso real del simulado.
- [x] RED/GREEN: impedir la ejecución de RPC de progreso por `anon`.
- [ ] Verificar pruebas, tipos, lint, formato y advisors de Supabase.

## Corrección: tamaño de imágenes en lecciones (en curso)

- [x] Diagnosticar: los controles actuales solo redimensionan la etiqueta de imagen.
- [x] RED: definir y probar los límites de tamaño del cuadro completo.
- [x] GREEN: redimensionar y persistir el contenedor de cada imagen desde el editor.
- [x] Verificar pruebas, tipos, lint y formato (formato global pendiente por archivos ajenos).

## Corrección: alineación de imágenes en lecciones (en curso)

- [x] Diagnosticar el contenedor persistente que controla la posición horizontal.
- [x] RED: definir las clases de alineación izquierda, centro y derecha.
- [x] GREEN: añadir controles y persistir la alineación elegida en cada cuadro.
- [x] Verificar pruebas, tipos, lint y formato.
