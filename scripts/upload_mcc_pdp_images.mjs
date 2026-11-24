import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";
import { Client } from "basic-ftp";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(projectRoot, ".env.local") });
dotenv.config({ path: path.join(projectRoot, ".env") });

const isDryRun = process.argv.includes("--dry-run");
const forceUpload = process.argv.includes("--force");

const PDP_DIR = path.join(projectRoot, "scratch", "mcc_md", "08_pdp_jan2024");
const SELECCION_PATH = path.join(PDP_DIR, "SELECCION.md");
const IMAGES_ROOT = path.join(PDP_DIR, "imagenes");
const URL_MAP_OUTPUT = path.join(PDP_DIR, "IMAGENES_URLS.json");

const basePathSegment =
  (process.env.NEXT_PUBLIC_BASE_PATH || "/elearning")
    .trim()
    .replace(/^\/+|\/+$/g, "") || "elearning";
const PUBLIC_BASE_URL = `https://www.blueteam.es/${basePathSegment}/media/mcc/pdp`;

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

function readWebpDimensions(buffer) {
  if (buffer.length < 30) return { width: null, height: null };
  if (
    buffer.toString("ascii", 0, 4) !== "RIFF" ||
    buffer.toString("ascii", 8, 12) !== "WEBP"
  ) {
    return { width: null, height: null };
  }

  const chunk = buffer.toString("ascii", 12, 16);
  if (chunk === "VP8X" && buffer.length >= 30) {
    const width = 1 + buffer.readUIntLE(24, 3);
    const height = 1 + buffer.readUIntLE(27, 3);
    return { width, height };
  }
  if (chunk === "VP8 " && buffer.length >= 30) {
    const width = buffer.readUInt16LE(26) & 0x3fff;
    const height = buffer.readUInt16LE(28) & 0x3fff;
    return { width, height };
  }
  if (chunk === "VP8L" && buffer.length >= 25) {
    const bits = buffer.readUInt32LE(21);
    const width = (bits & 0x3fff) + 1;
    const height = ((bits >> 14) & 0x3fff) + 1;
    return { width, height };
  }
  return { width: null, height: null };
}

/**
 * Parses the markdown selection table under "## Tabla completa de selección"
 * in SELECCION.md and validates every local WebP file exists on disk.
 */
function parseSelectionFile(markdownPath) {
  if (!fs.existsSync(markdownPath)) {
    throw new Error(`No existe el archivo de selección: ${markdownPath}`);
  }

  const content = fs.readFileSync(markdownPath, "utf8");
  const lines = content.split(/\r?\n/);

  let inSelectionTable = false;
  const items = [];
  const seenFiles = new Set();

  for (const line of lines) {
    if (line.startsWith("## Tabla completa de selección")) {
      inSelectionTable = true;
      continue;
    }
    if (inSelectionTable && line.startsWith("## ")) {
      break;
    }
    if (!inSelectionTable || !line.startsWith("|")) continue;

    const match = line.match(
      /^\|\s*([^|]+?)\s*\|\s*(\d+)\s*\|\s*`([^`]+\.webp)`\s*\|\s*(.+?)\s*\|$/,
    );
    if (!match) continue;

    const [, block, pageStr, relFile, usage] = match;
    const page = Number(pageStr);
    const localPath = path.join(IMAGES_ROOT, relFile);
    if (!fs.existsSync(localPath)) {
      throw new Error(`Archivo WebP no encontrado en disco: ${localPath}`);
    }
    if (seenFiles.has(relFile)) {
      throw new Error(`Archivo duplicado en SELECCION.md: ${relFile}`);
    }
    seenFiles.add(relFile);

    const buffer = fs.readFileSync(localPath);
    const sha256 = crypto.createHash("sha256").update(buffer).digest("hex");
    const { width, height } = readWebpDimensions(buffer);
    const basename = path.posix.basename(relFile.replace(/\\/g, "/"));

    items.push({
      block: block.trim(),
      page,
      relFile: relFile.replace(/\\/g, "/"),
      filename: basename,
      usage: usage.trim(),
      localPath,
      size_bytes: buffer.length,
      sha256,
      width,
      height,
      url: `${PUBLIC_BASE_URL}/${basename}`,
    });
  }

  if (items.length === 0) {
    throw new Error("No se encontraron filas válidas en Tabla completa de selección.");
  }

  return items;
}

async function createFtpClient(config) {
  const client = new Client(120000);
  client.ftp.verbose = process.env.FTP_VERBOSE === "true";
  await client.access(config);
  return client;
}

async function uploadToHostalia(items) {
  const host = process.env.FTP_HOST?.trim();
  const user = process.env.FTP_USER?.trim();
  const password = process.env.FTP_PASSWORD;
  const port = Number(process.env.FTP_PORT || "21");
  const secure = process.env.FTP_SECURE === "true";

  if (!host || !user || !password) {
    throw new Error(
      "Faltan credenciales FTP (FTP_HOST, FTP_USER, FTP_PASSWORD) en .env.local.",
    );
  }

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
    const remoteMediaDir = path.posix.join(remoteRoot, "media", "mcc", "pdp");
    await client.ensureDir(remoteMediaDir);

    const remoteSizes = new Map();
    try {
      const list = await client.list();
      for (const entry of list) {
        if (entry.isFile) {
          remoteSizes.set(entry.name, Number(entry.size));
        }
      }
    } catch {
      // Directory freshly created.
    }

    console.log(`🔌 Conectado a Hostalia FTP → ${remoteMediaDir}`);

    for (const item of items) {
      if (!forceUpload && remoteSizes.get(item.filename) === item.size_bytes) {
        skippedCount += 1;
        continue;
      }

      let success = false;
      for (let attempt = 1; attempt <= 3 && !success; attempt += 1) {
        try {
          await client.uploadFrom(item.localPath, item.filename);
          uploadedCount += 1;
          success = true;
          if (uploadedCount % 25 === 0) {
            console.log(`   ↳ ${uploadedCount} subidos (${skippedCount} omitidos)...`);
          }
        } catch (err) {
          if (attempt >= 3) throw err;
          console.warn(
            `⚠️ Error subiendo ${item.filename} (intento ${attempt}/3): ${err.message}. Reconectando...`,
          );
          await new Promise((resolve) => setTimeout(resolve, 1500));
          await reconnect();
          await client.ensureDir(remoteMediaDir);
        }
      }
    }

    console.log(
      `✅ Hostalia FTP completado: ${uploadedCount} subidos, ${skippedCount} ya actualizados.`,
    );
  } finally {
    try {
      client.close();
    } catch {}
  }
}

async function registerInSupabase(items) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceKey) {
    throw new Error(
      "Faltan credenciales Supabase (NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY) en .env.local.",
    );
  }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: existingRows, error: listErr } = await supabase
    .from("lesson_media")
    .select("id, url, sha256_hash")
    .eq("course_tag", "MCC");

  if (listErr) {
    throw new Error(
      `Error consultando lesson_media (¿falta aplicar la migración 20261124150000_add_mcc_to_lesson_media.sql?): ${listErr.message}`,
    );
  }

  const existingByUrl = new Map((existingRows || []).map((row) => [row.url, row]));
  let inserted = 0;
  let updated = 0;

  for (const item of items) {
    const existing = existingByUrl.get(item.url);
    const payload = {
      url: item.url,
      filename: item.filename,
      course_tag: "MCC",
      width: item.width,
      height: item.height,
      size_bytes: item.size_bytes,
      sha256_hash: item.sha256,
    };

    if (existing) {
      if (!forceUpload && existing.sha256_hash === item.sha256) {
        continue;
      }
      const { error: updErr } = await supabase
        .from("lesson_media")
        .update(payload)
        .eq("id", existing.id);
      if (updErr) {
        throw new Error(`Error actualizando ${item.filename} en Supabase: ${updErr.message}`);
      }
      updated += 1;
    } else {
      const { error: insErr } = await supabase.from("lesson_media").insert(payload);
      if (insErr) {
        throw new Error(`Error insertando ${item.filename} en Supabase: ${insErr.message}`);
      }
      inserted += 1;
    }
  }

  console.log(
    `✅ Supabase lesson_media (course_tag='MCC'): ${inserted} insertados, ${updated} actualizados.`,
  );
}

function writeUrlMappingFile(items) {
  const mapping = {};
  for (const item of items) {
    mapping[item.relFile] = {
      block: item.block,
      page: item.page,
      filename: item.filename,
      url: item.url,
      usage: item.usage,
      width: item.width,
      height: item.height,
      size_bytes: item.size_bytes,
      sha256: item.sha256,
    };
  }
  fs.writeFileSync(URL_MAP_OUTPUT, `${JSON.stringify(mapping, null, 2)}\n`, "utf8");
  console.log(`📝 Mapa de URLs guardado en ${path.relative(projectRoot, URL_MAP_OUTPUT)}`);
}

async function main() {
  const items = parseSelectionFile(SELECCION_PATH);
  const totalBytes = items.reduce((acc, item) => acc + item.size_bytes, 0);
  const byBlock = items.reduce((acc, item) => {
    acc[item.block] = (acc[item.block] || 0) + 1;
    return acc;
  }, {});

  console.log(
    `📦 Selección validada: ${items.length} archivos WebP (${(totalBytes / (1024 * 1024)).toFixed(2)} MB)`,
  );
  console.log(`   Bloques:`, byBlock);
  console.log(`   URL pública destino: ${PUBLIC_BASE_URL}/<archivo>.webp`);

  if (isDryRun) {
    console.log("⏭️  Modo --dry-run activo: no se sube a Hostalia ni se escribe en Supabase ni en IMAGENES_URLS.json.");
    return;
  }

  await uploadToHostalia(items);
  await registerInSupabase(items);
  writeUrlMappingFile(items);
}

main().catch((err) => {
  console.error("\n❌ Error en upload_mcc_pdp_images:", err.message);
  process.exit(1);
});
