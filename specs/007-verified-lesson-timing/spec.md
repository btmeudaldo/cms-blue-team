# Progreso temporal verificado

## Objetivo

Un alumno solo obtiene confirmación de progreso persistido por PostgreSQL. Se mantienen las cinco firmas RPC existentes. Todas verifican identidad y matrícula vigente; los datos ya finalizados no cambian al repetir ninguna operación, aunque cambie después el mínimo de la lección.

## Casos y garantías

- Inicio repetido conserva un único registro y su fecha original.
- Reanudar una sesión ya activa es idempotente; pausar o enviar heartbeat estando pausada no añade tiempo.
- El servidor calcula segundos enteros con su reloj después de adquirir el bloqueo. Cada intervalo acredita entre cero y quince segundos. Peticiones concurrentes no duplican intervalos ni retroceden tiempos.
- Finalizar antes del mínimo se rechaza atómicamente; finalizar válidamente conserva para siempre la primera fecha y tiempo acreditados frente a las RPC del alumno.
- Las acciones requieren sesión verificada, propagan los rechazos y retornan datos reales. No escriben directamente progreso ni usan mocks como alternativa.
- La interfaz espera el inicio confirmado, sincroniza el tiempo acreditado y solo muestra finalización tras confirmación persistida. Los errores son visibles y accesibles.

## Límites

Los heartbeats no prueban atención humana. No se añade exclusión entre lecciones/dispositivos, registro de eventos, versionado del mínimo o contenido ni política legal de retención. No se reescriben históricos. Esta entrega llega a preview; su migración y frontend requieren autorización específica para live.
