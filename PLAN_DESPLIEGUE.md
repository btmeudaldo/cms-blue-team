# Plan Estratégico de Despliegue y Arquitectura: Blue Team Flight School

> **Documento de referencia técnica y operativa**  
> **Fecha de creación:** Septiembre 2026  
> **Estado:** Fase de Desarrollo y Preparación para Producción  
> **Proyectos involucrados:**
> - `Web Blue Team` (Portal Público y Catálogo — Vite / React)
> - `CMS Blue Team` (Campus Virtual / LMS y Evaluaciones — Next.js)
> - `Supabase` (Base de Datos PostgreSQL, RLS y Autenticación Centralizada)

---

## 1. Contexto, Infraestructura y Objetivos

- **Infraestructura contratada:** Hosting compartido en **Hostalia** (gestión de dominios y hosting web tradicional Apache/PHP/FTP).
- **Escala de usuarios:** ~100 alumnos, más equipo docente (instructores) y dirección (administradores).
- **Objetivo clave:** 
  1. Cero costes recurrentes imprevistos (evitar planes de pago forzosos como Vercel Pro).
  2. Integración transparente y profesional bajo el dominio de la escuela (`blueteam.es`).
  3. Autenticación unificada y segura sin duplicar cuentas ni contraseñas.

---

## 2. Comparativa y Decisión de Hosting para el CMS

Actualmente el CMS está desarrollado en **Next.js 16** con componentes de servidor y Server Actions. Se evalúan las siguientes opciones para su paso a producción:

| Criterio | Opción A: Hostalia (Export Estático) ⭐ | Opción B: Cloudflare Pages | Opción C: Vercel |
| :--- | :--- | :--- | :--- |
| **Alojamiento** | Servidor propio de Hostalia (FTP) | Red global Cloudflare | Servidores Vercel |
| **Coste adicional** | **0 €** (ya está pagado) | **0 €** (plan gratuito ilimitado) | 0 € en Hobby / **20 $/mes** en Pro |
| **Riesgo de pago** | **Ninguno**. Control 100% de la escuela. | **Ninguno**. Admite uso comercial libre. | **Alto**. Si detectan uso comercial exigen Pro. |
| **Visibilidad de marca** | 100% `blueteam.es` | 100% `campus.blueteam.es` | 100% `campus.blueteam.es` |
| **Esfuerzo técnico** | Adaptar Server Actions a llamadas cliente | Configuración directa con adaptador | Mínimo en fase de pruebas |

### Decisión Acordada:
1. **Fase de Desarrollo Actual:** Se mantiene el desarrollo en local y pruebas provisionales.
2. **Fase de Producción Definitiva:** 
   - **Opción recomendada por política de empresa:** Adaptar el CMS a **Exportación Estática (`output: 'export'`)** y subirlo por FTP a Hostalia. Así todo el ecosistema (Web + Campus) vive en el hosting que ya paga la escuela, sin intermediarios ni facturas en dólares.
   - **Plan de contingencia sin tocar código:** Si no se desea refactorizar a estático, utilizar **Cloudflare Pages** (gratuito para empresas, ancho de banda ilimitado).

---

## 3. Hoja de Ruta para Adaptar el CMS a Hostalia (Modo Estático)

Cuando se decida subir el CMS a Hostalia por FTP, se seguirán estos pasos técnicos:

1. **Configurar `output: 'export'` en `next.config.mjs`:**
   - Permite que `npm run build` genere una carpeta `out/` con archivos HTML, CSS y JS listos para subir por FTP.
2. **Migrar Server Actions (`"use server"`) a Cliente:**
   - Funciones como `signInAction`, registro de tiempos de lección y guardado de quizzes pasarán de ejecutarse en el servidor Node de Next.js a ejecutarse en el navegador con `@supabase/supabase-js` (exactamente igual a como ya trabaja la web principal).
3. **Manejo de Sesión en Cliente:**
   - Reemplazar `@supabase/ssr` (que depende de cookies leídas por un servidor Node) por el cliente estándar de Supabase con persistencia en el navegador (`localStorage` o cookies de dominio).
4. **Configuración de `.htaccess` en Hostalia:**
   - Añadir una regla de reescritura Apache para que las rutas dinámicas (`/courses/[courseId]`, `/quizzes/[quizId]`) no den error 404 al recargar la página:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /campus/
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /campus/index.html [L]
   </IfModule>
   ```

---

## 4. Estrategia de Login Único (Single Sign-On / SSO)

### Diagnóstico de Seguridad Realizado:
- **Ambas aplicaciones ya comparten el mismo proyecto de Supabase** (`wkxylgsauhruoopclfwm.supabase.co`).
- **Descarte de tokens en URL:** No se transferirán `access_token` ni `refresh_token` en query strings ni fragmentos de URL por motivos de seguridad (riesgo de fugas en historial del navegador, logs de servidores y cabeceras `Referer`).

### Arquitectura de SSO Definitiva para Producción:
Cuando ambas aplicaciones estén desplegadas en sus URLs finales, se implementará una de las dos vías seguras:

#### Vía 1: Cookies Compartidas de Dominio (`.blueteam.es`)
- Si la web está en `blueteam.es` y el CMS en `campus.blueteam.es` (o subcarpeta `/campus`):
  - El cliente de Supabase de la web almacena la sesión en una cookie configurada con `domain: '.blueteam.es'`.
  - Al iniciar sesión en la web, la cookie es accesible de inmediato por el CMS sin ningún paso de redirección ni intercambio de tokens.

#### Vía 2: Flujo de Código de Autorización OAuth 2.1 con PKCE
- Si los orígenes o dominios están desacoplados:
  - El usuario pulsa "Campus" en la web.
  - Se inicia una solicitud al servidor OAuth 2.1 nativo de Supabase.
  - Supabase detecta la sesión activa en el navegador y emite un `authorization_code` temporal de un solo uso con verificación PKCE (`code_challenge` y `code_verifier`).
  - El CMS canjea ese código por la sesión de forma segura y autoriza al alumno.

---

## 5. Resumen de Credenciales y Entorno Verificado

- **Proyecto Supabase Cloud:** `https://wkxylgsauhruoopclfwm.supabase.co`
- **Roles y Usuarios de Prueba Verificados en Base de Datos:**
  - **Admin:** `admin@blueteam.com` / `btmeudaldo@gmail.com` (Contraseña: `blueteam`)
  - **Instructor:** `instructor@blueteam.com` / `inst.martinez@blueteam.com` (Contraseña: `blueteam`)
  - **Alumno:** `student@blueteam.com` / `student.test@blueteam.com` (Contraseña: `blueteam`)
- **Regla de oro:** Las contraseñas en Supabase siempre viajan con cifrado criptográfico irreversible; la contraseña unificada para todos los usuarios de prueba en desarrollo es `blueteam`.
