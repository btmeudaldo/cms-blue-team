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

const skipBuild = process.argv.includes("--skip-build");
const basePathSegment =
  (process.env.NEXT_PUBLIC_BASE_PATH || "/cms")
    .trim()
    .replace(/^\/+|\/+$/g, "") || "cms";

function normalizeRemoteSubfolderDir(rawDir, requiredSegment) {
  const cleaned = rawDir.trim().replace(/\\/g, "/").replace(/\/+$/g, "");
  const normalized = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
  if (
    normalized === `/${requiredSegment}` ||
    normalized.endsWith(`/${requiredSegment}`)
  ) {
    return normalized;
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

async function main() {
  const host = process.env.FTP_HOST?.trim();
  const user = process.env.FTP_USER?.trim();
  const password = process.env.FTP_PASSWORD;
  const port = Number(process.env.FTP_PORT || "21");
  const secure = process.env.FTP_SECURE === "true";

  if (!host || !user || !password) {
    console.error("\n❌ Faltan credenciales FTP en .env.local.");
    console.error("Añade las siguientes variables en tu archivo .env.local:\n");
    console.error("FTP_HOST=ftp.blueteam.es");
    console.error("FTP_USER=tu-usuario-ftp");
    console.error("FTP_PASSWORD=tu-contraseña-ftp");
    console.error(`# Opcional: FTP_REMOTE_DIR=/httpdocs/${basePathSegment}\n`);
    process.exit(1);
  }

  if (!skipBuild) {
    console.log("📦 Generando exportación estática en out/ ...");
    execSync("npx next build --webpack", {
      stdio: "inherit",
      cwd: projectRoot,
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
  if (!fs.existsSync(htaccessPath)) {
    console.error(
      `❌ No se encontró ${htaccessPath}. Verifica public/.htaccess antes de subir.`,
    );
    process.exit(1);
  }

  const client = new Client(30000);
  client.ftp.verbose = process.env.FTP_VERBOSE === "true";

  let uploadedFiles = 0;
  client.trackProgress((info) => {
    if (info.type === "upload") {
      uploadedFiles += 1;
      if (uploadedFiles % 50 === 0) {
        console.log(`   ↳ ${uploadedFiles} archivos transferidos...`);
      }
    }
  });

  try {
    console.log(`🔌 Conectando a FTP ${host}:${port} ...`);
    await client.access({
      host,
      user,
      password,
      port,
      secure,
    });

    const remoteDir = await resolveRemoteDir(client);
    console.log(
      `📁 Subiendo contenido de out/ exclusivamente a la subcarpeta: ${remoteDir}`,
    );
    await client.ensureDir(remoteDir);
    await client.uploadFromDir(outDir);

    console.log(
      `\n✅ Despliegue completado en ${remoteDir} (${uploadedFiles} transferencias).`,
    );
    console.log(
      `🌐 Revisa el campus en: https://blueteam.es/${basePathSegment}/`,
    );
  } finally {
    client.close();
  }
}

main().catch((err) => {
  console.error("\n❌ Error durante el despliegue FTP a Hostalia:", err);
  process.exit(1);
});
