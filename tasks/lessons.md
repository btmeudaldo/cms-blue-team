# Lecciones operativas

- Mientras el usuario mantenga el CMS en pruebas privadas, tratar Vercel como entorno de pruebas publicado. Posponer SSO y unificación del login hasta que lo solicite; continuar con integridad académica y funcionalidades del CMS.

- Cuando un bloqueo provenga de una CLI, iniciar su flujo de autenticación específico y verificarlo con la propia CLI; el login de la web no sustituye esa sesión.
- Con la CLI Vercel autenticada, usar sus comprobaciones de despliegue y continuar el trabajo autorizado; la protección SSO del navegador no implica que falte acceso operativo ni requiere repetir el login.

- Mantener las garantías de seguridad en servidor y PostgreSQL; los controles del navegador son únicamente experiencia de usuario y fricción.
- Para ajustes visuales persistentes de imágenes, aplicar los cambios sobre `.lesson-img-wrapper`, que es el contenedor serializado al guardar, no solamente sobre la etiqueta `img`.
- Separar visual y semánticamente la barra general de formato de texto de los controles locales de cada imagen.
