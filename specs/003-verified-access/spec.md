# Acceso verificado y separación de demostración

## Alcance de la primera corrección prioritaria

La ATO necesita impedir accesos administrativos por cookies manipuladas, roles inferidos o contraseñas demo. Una caída de Auth o de perfiles debe denegar acceso. Las consultas académicas usarán la sesión del usuario y RLS, sin service_role ni datos ficticios. Las mutaciones de cursos, lecciones y matrículas rechazarán falta de permisos y errores sin fallback privilegiado.

## Aceptación

- Cookies demo, correo con admin y user_metadata.role no autorizan.
- Solo Auth verificado y perfil con rol válido permiten una sesión.
- Login fallido y registro pendiente de confirmación no crean sesiones ficticias.
- Entradas demo y sembrado demo quedan deshabilitados en servidor y se retiran sus controles de acceso.
- Rechazos RLS no disparan reintentos privilegiados; cero filas no se presentan como éxito.
- Consultas de expedientes no incluyen mocks y fallan explícitamente ante errores de persistencia.
- El login funciona con credenciales reales; no contiene contraseña precargada.

## Fuera de esta fase

Motor de evaluación, bitácora inmutable, retención y firma de informes se mantienen en el backlog de auditoría. El estado remoto de RLS de exámenes debe verificarse antes de considerar cerrado ese riesgo crítico. No se despliega producción.
