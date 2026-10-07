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

## Curso nuevo C172: suplemento EC-NNA y muestra

- [x] Confirmar alcance: prevuelo completo, listas en inglés, explicación en español y referencias a procedimientos especiales.
- [x] Crear rama `codex/c172-suplemento-ec-nna` desde `desarrollo-c172`.
- [x] Cotejar las páginas 4-6, 4-7, 4-8 y 4-9 y las figuras de 1-5 y 1-6 con el PDF renderizado.
- [x] Preparar tres fragmentos de muestra y revisar las capturas locales a 1440 × 900.
- [x] Crear curso independiente y lección de muestra en el CMS, sin matrícula de alumnos.
- [x] Verificar tres diapositivas, tres imágenes y coincidencia del HTML local con el almacenado.
- [x] Conservar imágenes y fragmentos fuera del repositorio público, en scratch, e integrarlos dentro de la lección protegida por RLS.
- [ ] Revisar la muestra dentro del reproductor del CMS con sesión autorizada.
- [x] Validación editorial del usuario antes de ampliar la secuencia completa.

### Revisión de la muestra

Curso: `85579dd2-2450-48d4-a1f9-bb9da7257a76`. Lección: `d2131c35-2d9f-4626-a37a-954178c8c045`. Detalle y alcance en `docs/curso-ec-nna-suplemento/propuesta.md`. La vista local de las tres muestras usa un lienzo de 600 px. No se han cambiado código de aplicación ni esquemas de base de datos. La revisión automática rechazó subir recortes a almacenamiento público; las imágenes permanecen integradas en las lecciones con acceso autorizado.

## Lección 3: procedimientos normales completos

- [x] Completar prevuelo, preparación, arranque, calentamiento, comprobaciones antes del despegue y secuencia normal hasta el aseguramiento.
- [x] Cotejar las listas y avisos con las páginas renderizadas; registrar internamente las erratas del original sin inventar cifras.
- [x] Retirar fuentes visibles, mensajes de fragmentos y denominación TAE de las diapositivas; utilizar CD135 / CD155.
- [x] Mantener las acciones en inglés y los avisos y subtítulos en español.
- [x] Añadir únicamente referencias para altitud elevada, pista corta y frío/calor.
- [x] Conservar títulos de lecciones 1, 2 y 4 pendientes de rehacer desde el manual, por decisión explícita del usuario.
- [x] Revisar 48 diapositivas locales a 1440 × 900: cero desbordamientos en lienzo de 600 px y una imagen cargada en cada una.
- [x] Guardar la lección protegida y comprobar coincidencia byte a byte del contenido almacenado.
- [ ] Revisar el resultado dentro del reproductor autenticado del CMS.

### Revisión de la lección completa

Lección 3: 48 diapositivas, HTML MD5 `1a63b4166b521a67d2dc3cbb79d916f3`. Evidencia local: `scratch/manual-normal-review/complete-*.png` y `scratch/c172-course-samples/layout-report.json` (sin incidencias). No se modificó código de aplicación ni se publicaron los recortes del manual. Las lecciones 1, 2 y 4 contienen solo un aviso de elaboración pendiente. El curso anterior permanece intacto.

## Reorganización editorial por checklist

- [x] Agrupar los fragmentos de una misma checklist, procurando una o dos diapositivas por lista.
- [x] Mantener íntegros los pasos y su orden, con los avisos asociados; evitar mezclar procedimientos distintos.
- [x] Ajustar la distribución de texto e imagen y medir todas las diapositivas en el lienzo de 600 px.
- [x] Comparar secuencia de bloques con la versión anterior para asegurar que no se pierde contenido.
- [x] Guardar y verificar el contenido protegido; registrar cambios.
- [x] Subir commit y comprobar preview.

Alcance: edición de contenido y maquetación de la lección 3; sin cambios de código de aplicación ni esquema de datos. La agrupación se valida antes de sustituir la versión guardada.

### Revisión de la reorganización

25 diapositivas y 25 imágenes, frente a las 48 anteriores. Cabina, morro, arranque, antes del despegue y crucero quedan en dos diapositivas; las otras listas, en una. Se agrupan fases consecutivas relacionadas con encabezados propios: bordes del ala izquierda, después del despegue/ascenso, descenso/antes del aterrizaje y después del aterrizaje/aseguramiento. En las cuatro páginas más densas, dos columnas de texto preservan la lectura de arriba abajo y de izquierda a derecha.

La secuencia completa de bloques coincide con la anterior; solo se añaden encabezados separadores y se sustituyen títulos repetidos. Verificación local en anchos de 1100, 1280 y 1440 px: todas las imágenes cargan y ningún bloque rebasa el lienzo de 600 px. HTML guardado coincide byte a byte: MD5 `5dfb720cc1277264f2d823b725c7b40f`. Copia reversible de la versión de 48 páginas y capturas en `scratch/`, sin publicar material del manual en el repositorio.

## Aprovechamiento del espacio por lista continua

- [x] Unificar la inspección exterior sin separar automáticamente por zona del avión.
- [x] Reunir otros fragmentos cortos de la misma fase y mostrar las figuras necesarias, hasta dos por página.
- [x] Mantener idénticos y en el mismo orden todos los bloques de acciones y avisos; conservar subtítulos de zona.
- [x] Medir las páginas completas sin scroll ni recortes y revisar capturas.
- [x] Guardar la lección protegida y documentar el resultado.

Alcance autorizado: solo distribución del contenido existente. No se resume, elimina ni modifica ninguna acción o aviso.

### Revisión de la distribución continua

17 diapositivas y 25 figuras (una o dos por página). La inspección exterior ocupa cuatro páginas consecutivas, frente a siete páginas de zonas independientes en la versión anterior. Se conserva la numeración reiniciada de cada zona y su encabezado original. Cabina y crucero caben en una página; arranque/calentamiento y despegue/ascenso aprovechan páginas compartidas. Los cortes responden al tamaño íntegro de los bloques, sin partir los párrafos largos de drenaje.

Se comprobó igualdad exacta y orden de todos los bloques de acciones y avisos respecto al guion de 48 páginas. Solo cambian agrupación, encabezados y distribución de figuras originales. Verificación local de las 17 páginas a 1100, 1280 y 1440 px: todas las figuras cargan y ningún bloque desborda el lienzo de 600 px. Capturas `scratch/manual-normal-review/continuous-*.png`. HTML guardado igual al local: MD5 `3a0c6b88cb110fbf6b5ad35eff227d76`. La comprobación en el reproductor autenticado continúa pendiente.
