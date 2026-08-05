# Backlog de implementación

## Preparación

- [x] Confirmar el alcance de primera entrega: registro temporal verificable y botón de posición variable.
- [x] Inicializar el proyecto Next.js 16 con TypeScript, Tailwind, lint y formato.
- [ ] Configurar Supabase CLI/local y CI sin secretos.

## Fase 1: datos e identidad (TDD)

- [x] RED: pruebas de dominio para cálculo de palabras y `min_seconds`.
- [x] GREEN: implementar el cálculo puro de lectura.
- [ ] RED: pruebas SQL de roles, matrícula y aislamiento RLS.
- [ ] GREEN: crear migraciones de esquema, índices y políticas RLS.
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
