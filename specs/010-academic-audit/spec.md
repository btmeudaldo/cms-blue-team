# Historial de auditoría académica

## Objetivo

Registrar cambios confirmados del CMS con actor, fecha del servidor, entidad afectada y estado anterior/posterior. El administrador puede consultar el historial y registrar incidencias de curso. Login y SSO quedan fuera de alcance.

## Historias y garantías

- Como administrador consulto cambios de cursos, lecciones/requisitos, matrículas, asignaciones docentes, roles, exámenes, inicio de intentos, resultados y progreso, con filtros y paginación.
- Como responsable registro una incidencia de curso con categoría y descripción, sin atribuir automáticamente fraude a una pausa o pérdida de foco.
- PostgreSQL captura las escrituras en la misma transacción mediante triggers; los eventos confirmados no dependen de que la interfaz envíe un segundo mensaje.
- Actor autenticado y rol proceden de identidad verificada y perfil persistido. Operaciones de servicio/base de datos se identifican como tales; no se atribuyen al alumno afectado. Un cambio de rol propio conserva el rol previo del actor.
- Historial sin claves foráneas destructivas: permanece después de borrar entidades operativas. Usuarios de aplicación y service_role no pueden insertar directamente, modificar, borrar ni truncar eventos.
- Lectura inicial exclusiva del administrador. RPC de incidencias permite administrador o instructor con autorización vigente sobre el curso; devuelve identificador y no abre acceso general al historial.
- Payload por lista permitida, sin contraseñas, tokens, correos, HTML completo, respuestas ni solucionarios. El contenido se identifica por huella; cambios del banco de preguntas se señalan sin copiar sus respuestas.
- Incidencias: curso, categoría technical/assessment/integrity/other, descripción de 1 a 2000 caracteres y clave de reintento UUID. Reintentar la misma petición conserva un único evento; reutilizar la clave con datos diferentes se rechaza.
- Sin eventos para actualizaciones irrelevantes idénticas. Se registran las modificaciones efectivas de progreso, incluidos segundos confirmados por heartbeat.

## Límites explícitos

El historial comienza al aplicar la migración; no reconstruye hechos anteriores. Un rollback revierte también el evento: no registra intentos rechazados ni fallos de autenticación. Los administradores de PostgreSQL pueden alterar el esquema: no es un archivo externo inalterable ni certificación AESA. El versionado íntegro de contenido, exportación, retención/archivo y recuperación son bloques posteriores. Se vigilará el volumen de eventos temporales; consultas paginadas e índices evitan cargarlo completo.

La entrega se valida en Supabase local aislado y termina en preview. Migración remota y publicación principal requieren autorización específica para esta entrega.
