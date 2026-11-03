# Reglas y Estándares de Diseño y Contenido - DA40 TDI

Este archivo define las directrices y criterios obligatorios para la creación y edición de diapositivas y contenido del curso **Diamond DA40 TDI (Thielert TAE 125 / Continental CD-135 / CD-155)**. Actúa como **memoria permanente** del proyecto.

---

## 1. Referencias al AFM y Títulos Limpios
- **Prohibición estricta de números de sección o capítulos del AFM**:
  - No incluir números de sección o subapartados del manual (p. ej. `3.2.5`, `3.2.2(b)`, `4B.3.2`, `3.5.1`, `AFM 3.1.2`, `4B.1`, etc.) en subtítulos, cabeceras de recuadros, títulos de tarjetas ni notas.
  - Los títulos de las checklists y tarjetas deben mostrar **únicamente el nombre operativo y claro** de la maniobra o sistema en mayúsculas (p. ej., `TAKE-OFF CAN NO LONGER BE ABORTED`, `WINDMILLING PROPELLER`, `STATIONARY PROPELLER`, `EMERGENCY LANDING WITH ENGINE OFF`).
  - En las notas y remisiones, no usar números de sección (evitar *"in accordance with 3.5.1"*); redactar en su lugar el nombre de la maniobra: *"in accordance with EMERGENCY LANDING WITH ENGINE OFF"*.
  - **Diferenciación crítica**: Esta prohibición aplica exclusivamente a los códigos de sección del AFM; nunca debe afectar a distancias métricas (como `3.14 km`), pesos (`1150 kg`, `1000 kg`, `850 kg`), velocidades (`73 KIAS`), números de paso (`1.`, `2.`) ni a la numeración correlativa de las diapositivas (`5.1`, `5.2`, etc.).
- **Terminología aeronáutica**:
  - Usar siempre **«ala izquierda»** y **«ala derecha»** (Left Wing / Right Wing). Queda prohibido el uso del término académico de ingeniería *«semiala»*.
- **Sin insignias artificiales**:
  - No incluir badges o bloques decorativos artificiales tipo `✅ END OF CHECKLIST` o `✅ NORMAL OPERATING PROCEDURES COMPLETE`. El contenido debe limitarse a la lista y notas técnicas operacionales.

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

---

## 5. Visibilidad de Diapositivas Nuevas (Privadas por Defecto)
- **Toda nueva diapositiva que se cree debe nacer SIEMPRE oculta para los alumnos (`data-slide-visibility="private"`)**:
  ```html
  <div class="lesson-slide-container" data-slide-visibility="private">
  ```
- **Propósito**: Garantizar que solo el usuario / instructor / administrador pueda ver las diapositivas durante la fase de desarrollo, revisión o borrador. Los alumnos nunca las verán hasta que el usuario decida publicarlas explícitamente.
- **Preservación permanente**: Los scripts de sincronización (`seed_da40_course.mjs`) deben respetar y preservar este atributo en todo momento.

