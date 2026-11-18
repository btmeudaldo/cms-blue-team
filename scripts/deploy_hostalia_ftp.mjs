import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "basic-ftp";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(projectRoot, ".env.local") });
dotenv.config({ path: path.join(projectRoot, ".env") });

const isPreview = process.argv.includes("--preview");
const skipBuild = process.argv.includes("--skip-build");
const forceFull = process.argv.includes("--full");

const HEAVY_TOP_DIRS = new Set(["images", "manuals", "assets", "course-assets"]);
// Carpetas gestionadas en runtime en Hostalia (imágenes subidas desde el CMS):
// el deploy nunca debe borrarlas, limpiarlas ni sobreescribirlas.
const PROTECTED_REMOTE_DIRS = new Set(["media"]);

const basePathSegment = isPreview
  ? "elearning-preview"
  : (process.env.NEXT_PUBLIC_BASE_PATH || "/elearning")
      .trim()
      .replace(/^\/+|\/+$/g, "") || "elearning";
const basePath = `/${basePathSegment}`;

function buildHtaccess(targetBasePath, previewMode) {
  const heavyRules = previewMode
    ? `  # Reutilizar imágenes, manuales y recursos pesados desde /elearning/ sin duplicar ~400 MB
  RewriteRule ^images/da42/(.*)$ /elearning/images/DA42/$1 [L]
  RewriteRule ^(images|manuals|assets|course-assets)/(.*)$ /elearning/$1/$2 [L]`
    : `  # Compatibilidad mayúsculas/minúsculas DA42 en servidor Linux (Hostalia)
  RewriteRule ^images/da42/(.*)$ images/DA42/$1 [L]`;

  const staticCheck = `  # Si el archivo o directorio existe físicamente, servirlo tal cual
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]`;

  const dynamicRules = `  # Payloads RSC (.txt) y HTML de rutas dinámicas hacia su plantilla _placeholder
  RewriteRule ^courses/[^/]+/lessons/[^/]+/(.+\\.txt)$ courses/_placeholder/lessons/_placeholder/$1 [L]
  RewriteRule ^courses/[^/]+/lessons/[^/]+/?$ courses/_placeholder/lessons/_placeholder/index.html [L]

  RewriteRule ^courses/[^/]+/(.+\\.txt)$ courses/_placeholder/$1 [L]
  RewriteRule ^courses/[^/]+/?$ courses/_placeholder/index.html [L]

  RewriteRule ^quizzes/[^/]+/(.+\\.txt)$ quizzes/_placeholder/$1 [L]
  RewriteRule ^quizzes/[^/]+/?$ quizzes/_placeholder/index.html [L]

  RewriteRule ^admin/courses/[^/]+/lessons/new/(.+\\.txt)$ admin/courses/_placeholder/lessons/new/$1 [L]
  RewriteRule ^admin/courses/[^/]+/lessons/new/?$ admin/courses/_placeholder/lessons/new/index.html [L]

  RewriteRule ^admin/courses/[^/]+/lessons/[^/]+/(.+\\.txt)$ admin/courses/_placeholder/lessons/_placeholder/$1 [L]
  RewriteRule ^admin/courses/[^/]+/lessons/[^/]+/?$ admin/courses/_placeholder/lessons/_placeholder/index.html [L]

  RewriteRule ^admin/courses/[^/]+/(.+\\.txt)$ admin/courses/_placeholder/$1 [L]
  RewriteRule ^admin/courses/[^/]+/?$ admin/courses/_placeholder/index.html [L]`;

  const orderedSections = previewMode
    ? [staticCheck, heavyRules, dynamicRules]
    : [heavyRules, staticCheck, dynamicRules];

  return `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase ${targetBasePath}/

  # Forzar HTTPS y dominio canónico www.blueteam.es (mismo origen que la web principal)
  RewriteCond %{HTTPS} off
  RewriteCond %{HTTP:X-Forwarded-Proto} !https
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

  RewriteCond %{HTTP_HOST} ^blueteam\\.es$ [NC]
  RewriteRule ^ https://www.blueteam.es%{REQUEST_URI} [L,R=301]

${orderedSections.join("\n\n")}
</IfModule>
`;
}

function normalizeRemoteSubfolderDir(rawDir, requiredSegment) {
  const cleaned = rawDir.trim().replace(/\\/g, "/").replace(/\/+$/g, "");
  const normalized = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
  if (
    normalized === `/${requiredSegment}` ||
    normalized.endsWith(`/${requiredSegment}`)
  ) {
    return normalized;
  }
  if (
    (requiredSegment === "elearning-preview" || requiredSegment === "elearning") &&
    normalized.endsWith("/elearning")
  ) {
    return `${normalized.slice(0, -10)}/${requiredSegment}`;
  }
  if (normalized === "/cms" || normalized.endsWith("/cms")) {
    return `${normalized.slice(0, -4)}/${requiredSegment}`;
  }
  return `${normalized === "/" ? "" : normalized}/${requiredSegment}`;
}

async function resolveRemoteDir(client) {
  const configured = process.env.FTP_REMOTE_DIR;
  if (configured && configured.trim() !== "") {
    return normalizeRemoteSubfolderDir(configured, basePathSegment);
  }

  const entries = await client.list();
  const dirNames = new Set(
    entries.filter((entry) => entry.isDirectory).map((entry) => entry.name),
  );

  if (dirNames.has("httpdocs")) {
    return `/httpdocs/${basePathSegment}`;
  }
  if (dirNames.has("public_html")) {
    return `/public_html/${basePathSegment}`;
  }
  return `/${basePathSegment}`;
}

function collectFilesByDir(rootDir) {
  const groups = new Map();

  function walk(currentDir, relDir) {
    const topDir = relDir.split("/")[0];
    if (topDir && PROTECTED_REMOTE_DIRS.has(topDir)) {
      return;
    }
    if (isPreview && topDir && HEAVY_TOP_DIRS.has(topDir)) {
      return;
    }

    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        const nextRelDir = relDir ? `${relDir}/${entry.name}` : entry.name;
        walk(fullPath, nextRelDir);
      } else if (entry.isFile()) {
        const stats = fs.statSync(fullPath);
        files.push({
          name: entry.name,
          localPath: fullPath,
          size: stats.size,
        });
      }
    }

    if (files.length > 0) {
      groups.set(relDir, files);
    }
  }

  walk(rootDir, "");
  return groups;
}

async function createFtpClient(config) {
  const client = new Client(120000);
  client.ftp.verbose = process.env.FTP_VERBOSE === "true";
  await client.access(config);
  return client;
}

async function main() {
  const host = process.env.FTP_HOST?.trim();
  const user = process.env.FTP_USER?.trim();
  const password = process.env.FTP_PASSWORD;
  const port = Number(process.env.FTP_PORT || "21");
  const secure = process.env.FTP_SECURE === "true";

  if (!host || !user || !password) {
    console.error("\n❌ Faltan credenciales FTP.");
    console.error(
      "Define FTP_HOST, FTP_USER y FTP_PASSWORD en .env.local o en variables de entorno.\n",
    );
    process.exit(1);
  }

  if (!skipBuild) {
    console.log(
      `📦 Generando exportación estática en out/ (basePath=${basePath}) ...`,
    );
    execSync("npx next build --webpack", {
      stdio: "inherit",
      cwd: projectRoot,
      env: {
        ...process.env,
        NEXT_PUBLIC_BASE_PATH: basePath,
      },
    });
  } else {
    console.log("⏭️  Saltando compilación (--skip-build).");
  }

  const outDir = path.join(projectRoot, "out");
  if (!fs.existsSync(outDir)) {
    console.error(
      `❌ No existe la carpeta ${outDir}. Ejecuta "npm run build" primero.`,
    );
    process.exit(1);
  }

  const htaccessPath = path.join(outDir, ".htaccess");
  fs.writeFileSync(htaccessPath, buildHtaccess(basePath, isPreview), "utf8");
  console.log(
    `📝 Generado out/.htaccess para ${basePath}/ (${isPreview ? "modo preview ligera" : "modo producción"})`,
  );

  const fileGroups = collectFilesByDir(outDir);
  const totalFiles = Array.from(fileGroups.values()).reduce(
    (sum, list) => sum + list.length,
    0,
  );
  console.log(
    `📂 Preparados ${totalFiles} archivos en ${fileGroups.size} carpetas para ${basePath}/`,
  );

  const ftpConfig = { host, user, password, port, secure };
  let client = await createFtpClient(ftpConfig);
  let uploadedCount = 0;
  let skippedCount = 0;

  async function reconnect() {
    try {
      client.close();
    } catch {}
    client = await createFtpClient(ftpConfig);
  }

  try {
    const remoteRoot = await resolveRemoteDir(client);
    console.log(
      `🔌 Conectado a ${host}:${port}. Subiendo exclusivamente a ${remoteRoot}`,
    );

    const existingSizeCache = new Map();

    async function listRemoteSizesForDir(remoteDir) {
      if (existingSizeCache.has(remoteDir)) {
        return existingSizeCache.get(remoteDir);
      }
      const sizeMap = new Map();
      try {
        const list = await client.list();
        for (const entry of list) {
          if (entry.isFile) {
            sizeMap.set(entry.name, Number(entry.size));
          }
        }
      } catch {
        // Empty or newly created directory.
      }
      existingSizeCache.set(remoteDir, sizeMap);
      return sizeMap;
    }

    for (const [relDir, files] of fileGroups.entries()) {
      const remoteDir = relDir
        ? path.posix.join(remoteRoot, relDir)
        : remoteRoot;
      const topDir = relDir.split("/")[0];
      const isHeavyDir = !forceFull && !isPreview && HEAVY_TOP_DIRS.has(topDir);

      let dirEntered = false;
      let remoteSizes = null;

      async function enterDir() {
        await client.ensureDir(remoteDir);
        dirEntered = true;
        if (isHeavyDir && !remoteSizes) {
          remoteSizes = await listRemoteSizesForDir(remoteDir);
        }
      }

      async function enterDirWithRetry() {
        for (let attempt = 1; attempt <= 3; attempt += 1) {
          try {
            await enterDir();
            return;
          } catch (err) {
            if (attempt >= 3) throw err;
            console.warn(
              `⚠️ Error accediendo a ${remoteDir} (intento ${attempt}/3): ${err.message}. Reconectando...`,
            );
            dirEntered = false;
            await new Promise((r) => setTimeout(r, 1500));
            await reconnect();
          }
        }
      }

      for (const file of files) {
        if (isHeavyDir) {
          if (!dirEntered) {
            await enterDirWithRetry();
          }
          if (remoteSizes && remoteSizes.get(file.name) === file.size) {
            skippedCount += 1;
            continue;
          }
        }

        let success = false;
        for (let attempt = 1; attempt <= 3 && !success; attempt += 1) {
          try {
            if (!dirEntered) {
              await enterDir();
            }
            await client.uploadFrom(file.localPath, file.name);
            uploadedCount += 1;
            success = true;
            if (uploadedCount % 25 === 0) {
              console.log(
                `   ↳ ${uploadedCount} archivos subidos (${skippedCount} pesados ya presentes omitidos)...`,
              );
            }
          } catch (err) {
            if (attempt >= 3) {
              throw err;
            }
            console.warn(
              `⚠️ Error subiendo ${relDir ? `${relDir}/` : ""}${file.name} (intento ${attempt}/3): ${err.message}. Reconectando...`,
            );
            dirEntered = false;
            await new Promise((r) => setTimeout(r, 1500));
            await reconnect();
          }
        }
      }
    }

    console.log(
      `\n✅ Despliegue completado en ${remoteRoot}: ${uploadedCount} subidos, ${skippedCount} sin cambios omitidos.`,
    );
    console.log(`🌐 Disponible en: https://www.blueteam.es${basePath}/`);
  } finally {
    try {
      client.close();
    } catch {}
  }
}

main().catch((err) => {
  console.error("\n❌ Error durante el despliegue FTP a Hostalia:", err);
  process.exit(1);
});
