# Hoja de Ruta: Despliegue en Nube y Módulo de Progress Tests

Documentación oficial y planificación técnica para la arquitectura de acceso remoto de alumnos y el módulo de evaluaciones **Progress Tests (Exámenes de Progreso Aeronáutico)** para **CMS Blue Team**.

---

## ☁️ 1. Modelo de Despliegue: Nube Global (Vercel + Supabase Cloud)

Para permitir que los alumnos de aviación puedan estudiar los cursos teóricos del avión desde casa y acudir presencialmente únicamente a los exámenes finales:

### Infraestructura Recomendada:
- **Hosting del Frontend & Servidor SSR:** **Vercel** (Edge Network global con CDN integrada para imágenes y activos).
- **Base de Datos & Autenticación:** **Supabase Cloud (PostgreSQL)** con backups automatizados, replicación y políticas RLS.
- **Verificación Anticheating Remota:** La validación de tiempo mínimo exigido se realiza de forma atómica en el servidor PostgreSQL (marcas de tiempo de inicio/fin no manipulables por el cliente).

---

## 📝 2. Módulo de Exámenes "Progress Tests" (Evaluación de Progreso)

Diseño conceptual para la evaluación del aprendizaje aeronáutico:

### 🧩 Componentes Principales:

1. **Banco de Preguntas (Question Bank):**
   - Preguntas de opción múltiple (A, B, C, D).
   - Preguntas de Verdadero / Falso.
   - Diagramas e imágenes de instrumentación de cabina.
   - Ponderación y puntuación por pregunta.

2. **Motor de Examen para el Alumno:**
   - **Tiempo límite por examen:** Temporizador descendente sincronizado.
   - **Seguridad en la prueba:** Detección y registro de cambio de pestaña o pérdida de foco.
   - **Retroalimentación:** Explicación detallada tras finalizar la prueba (opcional según configuración del curso).

3. **Modo de Desbloqueo Presencial (Presencial PIN Unlock):**
   - Para exámenes finales del avión que requieren asistencia física en la academia:
   - El examen permanece en estado **"Bloqueado"** en la web hasta que el instructor autorice el acceso ingresando el **PIN del día** en el aula.

4. **Calificación Automatizada y Auditoría:**
   - Porcentaje mínimo de aprobación configurable (ejemplo: 75% u 80%).
   - Certificación automática y registro de sellos de tiempo en la base de datos para cumplimiento de normativas de aviación.

---

## 📂 3. Esquema de Base de Datos Proyectado (PostgreSQL / Supabase)

```sql
-- Tabla principal de Progress Tests
CREATE TABLE IF NOT EXISTS progress_tests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  passing_score INTEGER DEFAULT 75, -- % mínimo para aprobar
  time_limit_minutes INTEGER DEFAULT 45,
  requires_presencial_pin BOOLEAN DEFAULT false,
  presencial_pin TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Banco de Preguntas por Test
CREATE TABLE IF NOT EXISTS test_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_id UUID REFERENCES progress_tests(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  image_url TEXT,
  options JSONB NOT NULL, -- [{"id": "a", "text": "Opción A"}, ...]
  correct_option_id TEXT NOT NULL,
  explanation TEXT,
  position INTEGER DEFAULT 0
);

-- Registros de Intentos y Resultados de Alumnos
CREATE TABLE IF NOT EXISTS student_test_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  test_id UUID REFERENCES progress_tests(id) ON DELETE CASCADE,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  score_percentage INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  answers JSONB NOT NULL, -- Respuestas seleccionadas por el estudiante
  started_at TIMESTAMPTZ NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT now()
);
```

---

## 🚦 Estado del Documento
- **Estado:** Planificado y documentado para integración futura.
- **Acción requerida:** Ninguna en esta fase. El código actual del CMS se mantiene estable y listo para la extensión cuando el equipo lo requiera.
