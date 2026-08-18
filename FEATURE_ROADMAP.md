# ✈️ BLUE TEAM CMS - Hoja de Ruta de Funcionalidades (Feature Roadmap)

Documento de seguimiento para la planificación e implementación progresiva de nuevas características en el CMS de la Escuela de Aviación **BLUE TEAM**.

---

## 🟢 Estado de Implementación

| N°    | Funcionalidad                                                         | Estado                         | Prioridad      |
| ----- | --------------------------------------------------------------------- | ------------------------------ | -------------- |
| **1** | Certificados Digitales en PDF de Horas Teóricas                       | 🔴 Descartado por el usuario   | —              |
| **2** | **Módulo de Evaluaciones y Quizzes Teóricos de Aviación**             | ✅ **Completado & Desplegado** | **ALTA**       |
| **3** | **Exportación de Expedientes Académicos a PDF/CSV para Inspecciones** | ✅ **Completado & Desplegado** | **MEDIA-ALTA** |
| **4** | **Soporte PWA / Modo Lectura sin Conexión (Móvil/Tablet)**            | ⏳ **Pendiente (Próximo)**     | **MEDIA**      |
| **5** | **Notificaciones y Alertas de Avance/Inactividad para Alumnos**       | ⏳ **Pendiente**               | **MEDIA**      |
| **6** | **Panel Estadístico de Analítica Académica (Dashboard Director)**     | ⏳ **Pendiente**               | **MEDIA-BAJA** |

---

## 📋 Detalle de Funcionalidades Pendientes por Implementar

### 📄 3. Exportación de Expedientes Académicos a PDF/CSV (Próximo Candidato)

- **Objetivo**: Añadir un botón en el **Expediente Académico del Alumno** (`/admin/progress`) para descargar un reporte impreso oficial con las marcas de tiempo atómicas del servidor, lecciones completadas, porcentaje de verificación y notas de exámenes.
- **Ventajas**:
  - **Respuesta Inmediata a Auditorías**: Preparado para inspecciones de la autoridad aeronáutica (DGAC / EASA / FAA).
  - **Formato Membretado**: Archivo PDF listo para adjuntar a la carpeta física o digital del alumno.

---

### 📱 4. Soporte PWA / Modo Lectura sin Conexión

- **Objetivo**: Convertir la aplicación web en una **Progressive Web App (PWA)** mediante Service Workers y Web App Manifest, permitiendo instalar la app en iOS/Android/iPad.
- **Ventajas**:
  - **Disponibilidad en Vuelo / Hangar**: El alumno puede estudiar los contenidos teóricos sin conexión a internet.
  - **Sincronización Automática**: Al recuperar señal, se envían las marcas de tiempo al servidor.

---

### 🔔 5. Notificaciones de Recordatorio y Alertas para Alumnos

- **Objetivo**: Sistema de alertas automáticas cuando un alumno lleve más de 3 días inactivo en su curso, o cuando un instructor le asigne un nuevo módulo.
- **Ventajas**:
  - **Retención y Motivación**: Incrementa la tasa de finalización de la formación.
  - **Acción en 1-Clic**: El instructor puede enviar un mensaje de recordatorio directamente desde la ficha del expediente del alumno.

---

### 📊 6. Panel Estadístico de Analítica Académica (Dashboard Director)

- **Objetivo**: Vista ejecutiva con gráficos interactivos (Recharts) que muestre horas globales de estudio por semana, lecciones con más/menos dedicación y tasa de aprobación de quizzes por materia.
- **Ventajas**:
  - **Toma de Decisiones basada en Datos**: Permite identificar qué temas de aviación resultan más complejos para los alumnos y ajustar la enseñanza.

---

_Última actualización: 17 de Agosto, 2026._
