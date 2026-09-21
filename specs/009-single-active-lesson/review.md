# Revisión: actividad única y evidencias separadas

## Resultado

- PostgreSQL admite una sola lección activa no completada por alumno. Todas las operaciones se serializan por alumno antes de bloquear registros. El índice único impide saltarse la exclusión mediante escrituras directas privilegiadas.
- Abrir una lección nueva o reanudar una pausada desactiva la anterior. Conserva el tiempo confirmado; descarta su intervalo pendiente para evitar acreditar periodos solapados. Heartbeats y pausas rezagados no reactivan la lección anterior.
- La interfaz detecta la pausa devuelta por el servidor, detiene los pulsos y ofrece reanudar la lectura.
- Tarjetas y detalle comparten un cálculo de avance con relaciones canónicas por ID. El aprobado cuenta como avance visual; la lectura confirmada tiene contador y etiquetas propios. Un suspenso posterior no sustituye un aprobado histórico.
- La calificación no crea ni modifica registros de lectura. Login y SSO permanecen fuera del alcance.

## Evidencia

- RED SQL: 18 casos, 11 fallaban antes de la migración. RED Auth/REST: dos lecciones activas cuando se esperaba una. RED UI/acciones: seis fallos reproducidos; proyección de cursos: ocho casos preparados antes de implementar.
- GREEN SQL: 19/19, incluyendo conexiones concurrentes, bloqueo y reloj, peticiones rezagadas, permisos y conservación exacta de evidencia al migrar.
- Auth/REST: 6/6 con dos sesiones reales. Aprobado con lectura incompleta conserva todos sus campos; aprobado sin lectura previa no genera ningún registro temporal.
- Regresiones locales: 156/156 (tiempos 56, permisos de cursos 54, aislamiento 25 y conservación 21).
- Unitarias: 217/217 tras los cambios finales; TypeScript correcto.
- Navegador: 2/2 recorridos, escritorio y móvil, usando dos instancias Chromium con foco real y lectura posterior de PostgreSQL. Comprueban pausa, reanudación y examen aprobado con lectura pendiente.
- La revisión visual detectó un indicador de tiempo que seguía mostrando actividad durante la pausa. Se corrigió con RED/GREEN y se repitió el recorrido móvil: 1/1 y captura final revisada.
- Supabase advisors local: sin incidencias de seguridad WARN.
- `npm run lint:fix` ejecutado: persisten cuatro errores y nueve advertencias anteriores (comillas en administración, preferencias de LessonPlayer y Date.now en editor de exámenes, entre otros). No se presenta el lint global como limpio.
- `npm run format` ejecutado; se restauró el formato ajeno a esta entrega de 102 archivos para evitar cambios colaterales.
- Un primer comando incluyó el runner `quiz-security.integration.mjs`, que exige otra base desechable y no se inició por su guardia de configuración. La suite correspondiente a este Supabase aislado se ejecutó después completa, con 156/156 correctos.

Capturas locales verificadas en `.vercel/single-active-evidence` (ignorado por Git): separación examen/lectura, pausa y reanudación, escritorio y móvil.

Servidor de desarrollo detenido y Supabase local aislado cerrado conservando el backup al finalizar la validación.

## Despliegue y límites

- Migración: `20260921150713_enforce_single_active_lesson.sql`, aplicada únicamente en Supabase local aislado `quiz-validation`.
- La migración pausa actividad incompleta existente (`is_active=false`, `last_resumed_at=null`). Conserva segundos confirmados y registros completados. Tras aplicarla, cada alumno puede reanudar su lectura.
- Una misma lección abierta en varios dispositivos comparte un único contador; cualquiera puede pausarla. Esta entrega garantiza exclusión del crédito temporal, no identifica el dispositivo físico ni demuestra atención humana.
- El examen sigue siendo accesible según sus permisos actuales; aprobarlo no exime del requisito de lectura ni acredita tiempo. No se añade un nuevo requisito de acceso a exámenes en esta entrega.
- Preview Ready: https://cms-blue-team-923cjx8t4-blue-team13.vercel.app (deployment `dpl_2iAza4ngNzH7njbAn8Th2Z2iyxWu`, código `f02791f`, rama `codex/single-active-lesson`). Compilación Next.js y TypeScript correctos en Vercel. CLI autenticada confirma health online/Supabase y login HTTP 200 con formulario esperado.
- Los recorridos funcionales se validaron contra Supabase local. La preview conserva la configuración remota existente; la exclusión en ella y en la web publicada requiere aplicar esta migración. Ninguna base remota se ha modificado.
- Persiste el desbordamiento anterior de la cabecera móvil (captura de 432 px para viewport de 390 px); queda para la revisión funcional y de accesibilidad pendiente.
- Publicar en la URL principal requiere autorización específica conforme a las instrucciones del repositorio.
