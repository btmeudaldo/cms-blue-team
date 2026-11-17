export const BASE_PATH = (
  process.env.NEXT_PUBLIC_BASE_PATH ?? "/elearning"
).replace(/\/+$/, "");

export function withBasePath(path?: string | null): string {
  if (!path) return "";
  if (!BASE_PATH) return path;
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:") ||
    path.startsWith("blob:") ||
    path.startsWith("#") ||
    path.startsWith(`${BASE_PATH}/`) ||
    path === BASE_PATH
  ) {
    return path;
  }
  if (path.startsWith("/")) {
    return `${BASE_PATH}${path}`;
  }
  return path;
}

export function withBasePathHtml(html: string): string {
  if (!html || !BASE_PATH) return html;
  return html.replace(/(['"(])\/(images|manuals)\//g, `$1${BASE_PATH}/$2/`);
}
