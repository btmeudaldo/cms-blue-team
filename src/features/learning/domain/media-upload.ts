import { uploadLessonImageAction } from "@/app/actions/lesson.actions";
import { BASE_PATH } from "@/shared/lib/base-path";

const LOCAL_SYNC_BASE = "http://127.0.0.1:3099";
const MCC_PDP_FILENAME_RE = /^(?:p\d{3}|fcom_a320_fcu)_[a-z0-9_]+\.webp$/;
const HOSTALIA_PUBLIC_PROXY = "https://www.blueteam.es/elearning/api/media-proxy.php";

export function isLocalhostBrowser(): boolean {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
}

export function stripUrlQuery(url: string): string {
  return url.split("?")[0] ?? url;
}

export function isMccPdpFilename(filename: string): boolean {
  return MCC_PDP_FILENAME_RE.test(filename.trim());
}

export function getLocalOriginalPreviewUrl(filename: string): string {
  return `${LOCAL_SYNC_BASE}/original/${encodeURIComponent(stripUrlQuery(filename))}`;
}

export function getLocalMediaProxyUrl(url: string): string {
  return `${LOCAL_SYNC_BASE}/proxy?url=${encodeURIComponent(url)}`;
}

export function getHostaliaMediaProxyUrl(url: string): string {
  if (typeof window !== "undefined" && window.location.hostname.endsWith("blueteam.es")) {
    return `${BASE_PATH}/api/media-proxy.php?url=${encodeURIComponent(url)}`;
  }
  return `${HOSTALIA_PUBLIC_PROXY}?url=${encodeURIComponent(url)}`;
}

export async function checkLocalMediaSyncServer(): Promise<boolean> {
  if (!isLocalhostBrowser()) return false;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 500);
    const res = await fetch(`${LOCAL_SYNC_BASE}/health`, {
      signal: controller.signal,
      cache: "no-store",
    });
    clearTimeout(timer);
    return res.ok;
  } catch {
    return false;
  }
}

async function fileToDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("No se pudo codificar la imagen WebP."));
      }
    };
    reader.onerror = () =>
      reject(new Error("Error leyendo el archivo recortado."));
    reader.readAsDataURL(file);
  });
}

/**
 * Sube un archivo multimedia genérico (p. ej. al insertar nuevo archivo en editor):
 * 1) Intenta /api/upload-media.php en Hostalia.
 * 2) Si no está disponible (localhost), sube a Supabase Storage (`course-covers`).
 */
export async function uploadMediaFile(
  file: File,
  onStatusChange?: (message: string) => void,
): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    onStatusChange?.("Subiendo imagen a Hostalia...");
    const res = await fetch(`${BASE_PATH}/api/upload-media.php`, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const data = (await res.json()) as { url?: string };
      if (data?.url) {
        return data.url;
      }
    }
  } catch {
    // Endpoint PHP no disponible en entorno local; se usa Supabase Storage.
  }

  onStatusChange?.("Subiendo imagen a almacenamiento seguro...");
  return uploadLessonImageAction(formData);
}

/**
 * Sube una imagen recortada manteniendo exactamente el mismo nombre y URL base en Hostalia
 * cuando procede del curso MCC (o usando /api/upload-media.php en Hostalia),
 * actualizando `IMAGENES_URLS.json` cuando corre el servidor de sincronización local (`dev:media`).
 */
export async function uploadCroppedMediaFile(params: {
  file: File;
  targetFilename: string;
  onStatusChange?: (message: string) => void;
}): Promise<{
  url: string;
  canonicalUrl: string;
  syncedMode: "local-hostalia" | "hostalia-php" | "supabase";
}> {
  const { file, targetFilename, onStatusChange } = params;

  // 1. In localhost with `npm run dev:media`: overwrite disk + IMAGENES_URLS.json + Hostalia FTP in place
  if (isLocalhostBrowser() && (await checkLocalMediaSyncServer())) {
    onStatusChange?.(
      "Sincronizando recorte con Hostalia e IMAGENES_URLS.json...",
    );
    const dataUrl = await fileToDataUrl(file);
    const res = await fetch(`${LOCAL_SYNC_BASE}/crop`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        filename: targetFilename,
        dataUrl,
      }),
    });
    const payload = (await res.json()) as {
      ok?: boolean;
      url?: string;
      canonicalUrl?: string;
      error?: string;
    };
    if (!res.ok || !payload.url) {
      throw new Error(
        payload.error || "Error sincronizando recorte con Hostalia.",
      );
    }
    return {
      url: payload.url,
      canonicalUrl: payload.canonicalUrl ?? stripUrlQuery(payload.url),
      syncedMode: "local-hostalia",
    };
  }

  // 2. On Hostalia production: overwrite in-place via upload-media.php when MCC PDP filename matches
  const formData = new FormData();
  formData.append("file", file);
  if (isMccPdpFilename(targetFilename)) {
    formData.append("overwriteMccFilename", targetFilename);
  }

  try {
    onStatusChange?.("Subiendo recorte a Hostalia...");
    const res = await fetch(`${BASE_PATH}/api/upload-media.php`, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const data = (await res.json()) as {
        url?: string;
        canonicalUrl?: string;
      };
      if (data?.url) {
        return {
          url: data.url,
          canonicalUrl: data.canonicalUrl ?? stripUrlQuery(data.url),
          syncedMode: "hostalia-php",
        };
      }
    }
  } catch {
    // Hostalia PHP endpoint not available in localhost without dev:media
  }

  // 3. Fallback: Supabase Storage
  onStatusChange?.("Subiendo recorte a almacenamiento seguro...");
  const uploadedUrl = await uploadLessonImageAction(formData);
  return {
    url: uploadedUrl,
    canonicalUrl: stripUrlQuery(uploadedUrl),
    syncedMode: "supabase",
  };
}

export async function restoreLocalMediaOriginal(filename: string): Promise<{
  ok: boolean;
  versionedUrl?: string;
  width?: number | null;
  height?: number | null;
  sizeBytes?: number | null;
}> {
  if (!isLocalhostBrowser() || !(await checkLocalMediaSyncServer())) {
    return { ok: false };
  }
  const res = await fetch(`${LOCAL_SYNC_BASE}/restore`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ filename }),
  });
  if (!res.ok) {
    const errPayload = (await res.json().catch(() => ({}))) as {
      error?: string;
    };
    throw new Error(
      errPayload.error || "No se pudo restaurar el archivo en Hostalia.",
    );
  }
  const data = (await res.json()) as {
    versionedUrl?: string;
    width?: number | null;
    height?: number | null;
    sizeBytes?: number | null;
  };
  return {
    ok: true,
    versionedUrl: data.versionedUrl,
    width: data.width ?? null,
    height: data.height ?? null,
    sizeBytes: data.sizeBytes ?? null,
  };
}
