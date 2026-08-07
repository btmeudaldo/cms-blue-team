# Especificación: progreso de lecciones persistente

## Objetivo

Una sesión autenticada debe usar Supabase como fuente de verdad para el acceso y el progreso de una lección. Los datos de demostración solo se usan en sesiones de demostración.

## Reglas

- Una URL de lección solo es válida si coincide con el UUID o `slug` de una lección del curso.
- Una URL inválida no puede iniciar ni completar otra lección.
- Los errores RPC de una sesión autenticada se devuelven al reproductor; no se sustituyen por progreso simulado.
- Cuando Supabase devuelve progreso, este prevalece sobre cualquier dato simulado.
- La matrícula no se crea implícitamente al abrir una lección; un administrador la asigna mediante el flujo existente.

## Criterios de aceptación

- Un identificador de lección desconocido no resuelve a la primera lección.
- El progreso completado de Supabase no puede ser sobrescrito por un mock.
- El flujo demo sigue funcionando sin sesión autenticada.
