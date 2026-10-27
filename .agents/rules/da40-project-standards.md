# Reglas y Estándares de Diseño y Contenido - DA40 TDI

Este archivo define las directrices y criterios obligatorios para la creación y edición de diapositivas y contenido del curso **Diamond DA40 TDI (Thielert TAE 125 / Continental CD-135 / CD-155)**. Actúa como **memoria permanente** del proyecto.

---

## 1. Referencias al AFM (Manual de Vuelo)
- **Prohibido saturar las diapositivas con referencias de capítulos o secciones**: No incluir menciones continuas a números de sección o checklist tipo `(AFM 4A.6, 4B.3 & 7.9)`, `(SECCIÓN 4A Y 4B):`, `(AFM 4A.6)`, etc., en los encabezados, tarjetas o puntos clave.
- **Excepción estricta**: Solo se mencionará la referencia exacta al manual en casos muy necesarios o cuando el usuario lo solicite expresamente.
- El contenido debe estar redactado de forma limpia, pedagógica y directa para el alumno/piloto.

---

## 2. Rigor Operacional y Realidad Aeronáutica (Airmanship)
- **Prueba de motor / ECU TEST**:
  - La autoprueba de conmutación de canales (ECU A <-> B) y ciclado de hélice es un procedimiento que se realiza **exclusivamente en tierra durante el prevuelo** (palanca en IDLE y RPM < 900).
  - En vuelo, el autotest está inhibido por la ECU (el régimen por molinete de la hélice supera siempre con creces las 900 RPM) y ningún procedimiento operativo contempla ciclar el paso en vuelo.
  - La **única función del botón ECU TEST en vuelo** es el reseteo de avisos leves de precaución (`ECU A` o `ECU B`) manteniéndolo presionado más de 2 segundos.
- **Batería de Respaldo FADEC / ECU (`ECU Backup Battery`)**:
  - Su propósito vital es **suministrar energía eléctrica a la ECU B si fallan el alternador y la batería principal**, evitando la parada instantánea del motor diésel.
  - No etiquetarla como batería "IFR": aunque la normativa legal de certificación KOEL la liste como requisito para despachar en IFR, operativamente volar con la batería de respaldo agotada o sin pasar el test (`ECU BACKUP UNSAFE` encendido) supone un riesgo crítico de parada de motor ante cualquier fallo eléctrico. Ante fallo de test en tierra, se debe abortar el vuelo.

---

## 3. Geometría y Estructura Visual
- Mantener la altura fija estricta de las tarjetas (`h-[590px]` y `style="height: 590px;"`) con `overflow-hidden` para evitar barras de scroll vertical.
- Distribución de columnas con grid `lg:grid-cols-12` (`lg:col-span-7` para contenido y `lg:col-span-5` para soporte gráfico / audiovisual).

---

## 4. Sincronización Obligatoria con Supabase
- Cada vez que se cree o modifique una diapositiva en `da40-course-data.ts`, es obligatorio ejecutar inmediatamente:
  ```bash
  node scripts/seed_da40_course.mjs
  ```
  para que el cambio se refleje en la plataforma web en tiempo real.

