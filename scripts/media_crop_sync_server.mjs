import crypto from "node:crypto";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "basic-ftp";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(projectRoot, ".env.local") });
dotenv.config({ path: path.join(projectRoot, ".env") });

const PORT = Number(process.env.MEDIA_SYNC_PORT || "3099");
const PDP_DIR = path.join(projectRoot, "scratch", "mcc_md", "08_pdp_jan2024");
const IMAGES_ROOT = path.join(PDP_DIR, "imagenes");
const ORIGINALS_ROOT = path.join(PDP_DIR, "imagenes_originales");
const URL_MAP_PATH = path.join(PDP_DIR, "IMAGENES_URLS.json");

const basePathSegment =
  (process.env.NEXT_PUBLIC_BASE_PATH || "/elearning")
    .trim()
    .replace(/^\/+|\/+$/g, "") || "elearning";

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

async function resolveRemoteRoot(client) {
  const configured = process.env.FTP_REMOTE_DIR;
  if (configured && configured.trim() !== "") {
    return normalizeRemoteSubfolderDir(configured, basePathSegment);
  }
  const entries = await client.list();
  const dirNames = new Set(
    entries.filter((entry) => entry.isDirectory).map((entry) => entry.name),
  );
  if (dirNames.has("httpdocs")) return `/httpdocs/${basePathSegment}`;
  if (dirNames.has("public_html")) return `/public_html/${basePathSegment}`;
  return `/${basePathSegment}`;
}

function readWebpDimensions(buffer) {
  if (
    buffer.length < 30 ||
    buffer.toString("ascii", 0, 4) !== "RIFF" ||
    buffer.toString("ascii", 8, 12) !== "WEBP"
  ) {
    return { width: null, height: null };
  }
  const chunk = buffer.toString("ascii", 12, 16);
  if (chunk === "VP8X" && buffer.length >= 30) {
    return {
      width: 1 + buffer.readUIntLE(24, 3),
      height: 1 + buffer.readUIntLE(27, 3),
    };
  }
  if (chunk === "VP8 " && buffer.length >= 30) {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }
  if (chunk === "VP8L" && buffer.length >= 25) {
    const bits = buffer.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }
  return { width: null, height: null };
}

function readUrlMap() {
  if (!fs.existsSync(URL_MAP_PATH)) {
    throw new Error(`No existe IMAGENES_URLS.json en ${URL_MAP_PATH}`);
  }
  return JSON.parse(fs.readFileSync(URL_MAP_PATH, "utf8"));
}

function writeUrlMap(map) {
  fs.writeFileSync(URL_MAP_PATH, `${JSON.stringify(map, null, 2)}\n`, "utf8");
}

function findEntryByFilename(map, filename) {
  const cleanName = path.posix.basename(filename.split("?")[0]);
  for (const [relFile, entry] of Object.entries(map)) {
    if (entry.filename === cleanName) {
      return { relFile, entry };
    }
  }
  return null;
}

async function uploadBufferToHostalia(localPath, remoteDirParts, remoteFilename) {
  const host = process.env.FTP_HOST?.trim();
  const user = process.env.FTP_USER?.trim();
  const password = process.env.FTP_PASSWORD;
  const port = Number(process.env.FTP_PORT || "21");
  const secure = process.env.FTP_SECURE === "true";

  if (!host || !user || !password) {
    throw new Error("Faltan credenciales FTP en .env.local.");
  }

  const client = new Client(60000);
  await client.access({ host, user, password, port, secure });
  try {
    const remoteRoot = await resolveRemoteRoot(client);
    const remoteDir = path.posix.join(remoteRoot, ...remoteDirParts);
    await client.ensureDir(remoteDir);
    await client.uploadFrom(localPath, remoteFilename);
  } finally {
    try {
      client.close();
    } catch {}
  }
}

function sendJson(res, status, data) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(data));
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on("data", (chunk) => {
      total += chunk.length;
      if (total > 8 * 1024 * 1024) {
        reject(new Error("Payload exceeds 8 MB limit"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch (err) {
        reject(err);
      }
    });
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  const reqUrl = new URL(req.url || "/", `http://127.0.0.1:${PORT}`);

  if (req.method === "GET" && reqUrl.pathname === "/health") {
    sendJson(res, 200, { ok: true, mode: "local-hostalia-sync" });
    return;
  }

  if (req.method === "GET" && reqUrl.pathname.startsWith("/original/")) {
    try {
      const requested = decodeURIComponent(reqUrl.pathname.slice("/original/".length));
      const map = readUrlMap();
      const hit = findEntryByFilename(map, requested);
      if (!hit) {
        sendJson(res, 404, { error: "Imagen no encontrada en IMAGENES_URLS.json" });
        return;
      }
      const backupPath = path.join(ORIGINALS_ROOT, hit.relFile);
      const currentPath = path.join(IMAGES_ROOT, hit.relFile);
      const fileToServe = fs.existsSync(backupPath) ? backupPath : currentPath;
      if (!fs.existsSync(fileToServe)) {
        sendJson(res, 404, { error: "Archivo no encontrado en disco" });
        return;
      }
      const bytes = fs.readFileSync(fileToServe);
      res.writeHead(200, {
        "Content-Type": "image/webp",
        "Content-Length": bytes.length,
        "Cache-Control": "no-store",
        "Access-Control-Allow-Origin": "*",
      });
      res.end(bytes);
    } catch (err) {
      sendJson(res, 500, { error: err instanceof Error ? err.message : "Error interno" });
    }
    return;
  }

  if (req.method === "POST" && reqUrl.pathname === "/crop") {
    try {
      const body = await readJsonBody(req);
      const { filename, dataUrl } = body;
      if (typeof filename !== "string" || typeof dataUrl !== "string") {
        sendJson(res, 400, { error: "Faltan filename o dataUrl" });
        return;
      }
      const match = dataUrl.match(/^data:image\/webp;base64,([A-Za-z0-9+/=]+)$/);
      if (!match) {
        sendJson(res, 400, { error: "Se esperaba data URL image/webp base64" });
        return;
      }
      const buffer = Buffer.from(match[1], "base64");
      const { width, height } = readWebpDimensions(buffer);
      if (!width || !height) {
        sendJson(res, 400, { error: "Buffer WebP inválido" });
        return;
      }
      const sha256 = crypto.createHash("sha256").update(buffer).digest("hex");
      const version = Math.floor(Date.now() / 1000);

      const map = readUrlMap();
      const hit = findEntryByFilename(map, filename);

      if (hit) {
        const localCurrent = path.join(IMAGES_ROOT, hit.relFile);
        const localBackup = path.join(ORIGINALS_ROOT, hit.relFile);
        if (fs.existsSync(localCurrent) && !fs.existsSync(localBackup)) {
          fs.mkdirSync(path.dirname(localBackup), { recursive: true });
          fs.copyFileSync(localCurrent, localBackup);
        }
        fs.mkdirSync(path.dirname(localCurrent), { recursive: true });
        fs.writeFileSync(localCurrent, buffer);

        await uploadBufferToHostalia(localCurrent, ["media", "mcc", "pdp"], hit.entry.filename);

        map[hit.relFile] = {
          ...hit.entry,
          width,
          height,
          size_bytes: buffer.length,
          sha256,
          cropped: true,
          version,
        };
        writeUrlMap(map);

        const canonicalUrl = hit.entry.url;
        console.log(`✂️  [Hostalia+JSON] ${hit.entry.filename} (${width}×${height}) → v=${version}`);
        sendJson(res, 200, {
          ok: true,
          url: `${canonicalUrl}?v=${version}`,
          canonicalUrl,
          width,
          height,
          sizeBytes: buffer.length,
          overwritten: true,
        });
        return;
      }

      // Non-MCC image cropped locally: upload to Hostalia /media/lessons/cropped/
      const tmpFile = path.join(PDP_DIR, `.tmp_crop_${version}.webp`);
      const safeName = path.posix
        .basename(filename.split("?")[0])
        .replace(/[^a-zA-Z0-9_.-]+/g, "_");
      fs.writeFileSync(tmpFile, buffer);
      try {
        await uploadBufferToHostalia(tmpFile, ["media", "lessons", "cropped"], safeName);
      } finally {
        fs.rmSync(tmpFile, { force: true });
      }
      const canonicalUrl = `https://www.blueteam.es/${basePathSegment}/media/lessons/cropped/${safeName}`;
      console.log(`✂️  [Hostalia] ${safeName} (${width}×${height}) → v=${version}`);
      sendJson(res, 200, {
        ok: true,
        url: `${canonicalUrl}?v=${version}`,
        canonicalUrl,
        width,
        height,
        sizeBytes: buffer.length,
        overwritten: false,
      });
    } catch (err) {
      console.error("❌ Error en /crop:", err);
      sendJson(res, 500, { error: err instanceof Error ? err.message : "Error al sincronizar recorte" });
    }
    return;
  }

  if (req.method === "POST" && reqUrl.pathname === "/restore") {
    try {
      const body = await readJsonBody(req);
      const { filename } = body;
      if (typeof filename !== "string") {
        sendJson(res, 400, { error: "Falta filename" });
        return;
      }
      const map = readUrlMap();
      const hit = findEntryByFilename(map, filename);
      if (!hit) {
        sendJson(res, 404, { error: "Imagen no registrada en IMAGENES_URLS.json" });
        return;
      }
      const localBackup = path.join(ORIGINALS_ROOT, hit.relFile);
      const localCurrent = path.join(IMAGES_ROOT, hit.relFile);
      if (!fs.existsSync(localBackup)) {
        sendJson(res, 404, { error: "No existe copia original previa para restaurar" });
        return;
      }
      fs.copyFileSync(localBackup, localCurrent);
      const buffer = fs.readFileSync(localCurrent);
      const { width, height } = readWebpDimensions(buffer);
      const sha256 = crypto.createHash("sha256").update(buffer).digest("hex");
      const version = Math.floor(Date.now() / 1000);

      await uploadBufferToHostalia(localCurrent, ["media", "mcc", "pdp"], hit.entry.filename);

      map[hit.relFile] = {
        ...hit.entry,
        width,
        height,
        size_bytes: buffer.length,
        sha256,
        cropped: false,
        version,
      };
      writeUrlMap(map);

      console.log(`↺  [Hostalia+JSON] Restaurado original ${hit.entry.filename}`);
      sendJson(res, 200, {
        ok: true,
        url: hit.entry.url,
        versionedUrl: `${hit.entry.url}?v=${version}`,
        width,
        height,
        sizeBytes: buffer.length,
      });
    } catch (err) {
      console.error("❌ Error en /restore:", err);
      sendJson(res, 500, { error: err instanceof Error ? err.message : "Error al restaurar original" });
    }
    return;
  }

  sendJson(res, 404, { error: "Not found" });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`✂️  Media Crop Sync Server activo en http://127.0.0.1:${PORT}`);
  console.log(`   Mantiene mismo nombre y URL en Hostalia + actualiza IMAGENES_URLS.json`);
});
