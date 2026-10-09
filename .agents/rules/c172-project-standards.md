# Reglas y Estándares de Diseño Obligatorios - CMS Blue Team

Este archivo contiene directrices técnicas y de diseño **inviolables** que deben cumplirse en cualquier modificación, corrección o desarrollo dentro del proyecto. Actúa como la memoria permanente de desarrollo para evitar cualquier tipo de regresión.

---

## 1. Geometría y Estructura Visual de las Diapositivas (Lecciones C172)
- **Altura fija estricta:** Las tarjetas de contenido (tanto la columna izquierda como la columna derecha) deben mantener siempre una altura exacta de **574px** mediante las clases `h-[574px]` y el atributo `style="height: 574px;"`.
- **Alineación superior:** Los contenedores deben usar siempre `justify-start` (alineación superior). Si sobra espacio vertical tras el contenido o el gráfico, este espacio **debe quedar siempre abajo**, nunca centrado ni empujado hacia abajo.
- **Simetría perfecta:** Ambas columnas (`lg:col-span-7` a la izquierda y `lg:col-span-5` a la derecha) deben terminar en la misma línea visual horizontal.
- **Cero desbordamiento:** Ninguna tarjeta debe desbordar hacia abajo ni generar barras de scroll vertical innecesarias.

---

## 2. Integridad del Contenido Aeronáutico (POH Oficial)
- **Prohibido resumir o recortar texto POH:** El texto técnico de la columna izquierda proviene de manuales oficiales de vuelo (POH Cessna 172 y Suplemento Continental TAE 125). No se debe acortar, omitir ni alterar ningún dato numérico, limitación, advertencia o tabla.
- **Correspondencia visual estricta:** La columna derecha debe contener exclusivamente diagramas, infografías o marcos de especificación técnica que guarden relación directa con el contenido específico de la columna izquierda de esa misma diapositiva. Prohibido insertar imágenes genéricas que no correspondan al tema tratado.

---

## 3. Seguridad, Roles y Selector de Visibilidad
- **Superadmin exclusivo:** El usuario `btmeudaldo@gmail.com` tiene el rol exclusivo de `superadmin`.
- **Control de visibilidad:** El selector de visibilidad de diapositivas ("Visible para todos" / "Solo para mí") y los avisos de diapositiva privada deben mostrarse **únicamente** cuando el usuario autenticado sea `superadmin`.
- **Experiencia de Alumnos y Administradores:** Ni los administradores estándar ni los alumnos ni los instructores deben ver selectores de visibilidad. Su barra de navegación debe permanecer completamente limpia.

---

## 4. Flujo de Sincronización y Persistencia Bidireccional (Supabase ⟷ Local)
- **Principio "Pull antes de Push":** Para evitar machacar ediciones manuales que el usuario realice directamente en Supabase, antes de modificar el archivo local `c172-course-data.ts`, es obligatorio verificar y descargar el estado actual de Supabase ejecutando:
  ```bash
  node scripts/pull_from_supabase.mjs
  ```
- **Sincronización Supabase:** Tras aplicar las modificaciones validadas en el archivo local, sincronizar hacia todos los cursos de Supabase con:
  ```bash
  node scripts/sync_all_c172_courses.mjs
  ```
- **Prohibido sobreescribir a ciegas:** Nunca ejecutar una sobreescritura unidireccional sin haber incorporado previamente cualquier cambio que exista en la base de datos de producción.

---

## 5. Criterios de Calidad y Validación
- Antes de dar por finalizada cualquier tarea o realizar commits:
  1. `npx tsc --noEmit` debe dar 0 errores.
  2. `npm test` debe pasar al 100% (todos los tests en verde).
  3. Los cambios deben commitearse y subirse a la rama correspondiente de GitHub.
