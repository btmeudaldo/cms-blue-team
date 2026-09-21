# Backlog de implementación

## Auditoría ATO: fase 2 — exámenes y notas

- [x] Inspeccionar esquema remoto y especificar contrato seguro en specs/004-secure-quiz-results.
- [x] RED: reproducir exposición y manipulación en PostgreSQL aislado y acciones.
- [x] GREEN: políticas mínimas y RPC de inicio/calificación idempotente con snapshot.
- [x] GREEN: DTO seguro, editor autorizado y UI sin notas locales.
- [x] Verificar SQL, unitarias, tipos, lint, formato, build y UI; límites en review.md.
- [x] Commit, push, preview y registro de límites; no producción.
- [ ] Validación integrada en Supabase de staging y aprobación específica de live.

## Auditoría ATO: fase 1 — acceso verificado (2026-09-21)

- [x] Leer código y documentar especificación/plan en specs/003-verified-access.
- [x] RED: reproducir cookies demo, roles editables, login fallido, mezcla de mocks y escaladas de privilegios.
- [x] GREEN: sesión verificada, consultas RLS y acciones sin fallback privilegiado.
- [x] GREEN: retirar controles demo y contraseña precargada; probar rutas protegidas.
- [x] Verificar tests, tipos, lint, formato, build y estado remoto RLS de exámenes (limitaciones documentadas en review.md).
- [x] Commit, push y preview Vercel desde rama de corrección.
- [ ] Verificar acceso en preview con sesión Vercel (protección SSO impide pruebas remotas anónimas).
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
