# Constitución del CMS de cursos

## Propósito

Construir un CMS de e-learning ligero que gestione cursos, lecciones y progreso verificable. El sistema acredita el tiempo mínimo transcurrido desde el inicio de una lección; no afirma probar comprensión o atención humana.

## Tecnología fijada

- Next.js 16 con App Router, TypeScript estricto y Tailwind CSS.
- Supabase: Auth, PostgreSQL, Storage y migraciones SQL versionadas.
- Despliegue en Vercel: siempre `preview` antes de cualquier producción.
- Editor de contenido: TipTap.

## Invariantes de seguridad

1. El navegador nunca autoriza la finalización ni aporta el tiempo transcurrido como dato de confianza.
2. PostgreSQL calcula el tiempo usando su propio reloj y verifica identidad, matrícula y `min_seconds` de forma atómica.
3. Todas las tablas expuestas tienen RLS y las funciones RPC tienen privilegios mínimos.
4. La clave `service_role` nunca se expone al cliente.
5. El HTML del editor se sanea antes de persistirse y antes de renderizarse.
6. Scroll, `event.isTrusted`, cuenta atrás y posición variable del botón son fricción de interfaz; no controles de seguridad.
7. La posición aleatoria se calcula una vez por carga de lección dentro de una franja inferior reservada; nunca tapa el contenido ni cambia mientras el alumno puede interactuar.
8. La identidad se verifica con Supabase Auth y el rol se obtiene exclusivamente del perfil persistido; cookies demo, correo y metadatos editables no conceden permisos.
9. Las operaciones de usuario respetan RLS. Un rechazo o fallo no se reintenta con service_role ni se convierte en éxito simulado.
10. La aplicación académica no permite accesos sin contraseña ni incorpora datos de demostración en consultas reales.
11. Los solucionarios no se envían a alumnos. PostgreSQL calcula resultados sobre una copia del examen al inicio; el cliente no escribe notas ni fechas acreditadas.

## Arquitectura

- Dominio puro en `src/features/*/domain`, sin Next.js ni Supabase.
- Casos de uso en `application`; infraestructura Supabase/Next en `shared/lib` y `app/actions`.
- Todo elemento usado por una sola funcionalidad permanece dentro de esa funcionalidad; pasa a `shared` solo tras un segundo consumidor real.

## Calidad

- TDD obligatorio: prueba RED ejecutada, cambio mínimo GREEN y refactorización.
- Las migraciones de seguridad tienen pruebas de integración contra Supabase local.
- Antes de integrar código: typecheck, lint, formato, pruebas unitarias, integración y e2e pertinentes.
- Los commits siguen Conventional Commits y se realizan por fase verificable.
