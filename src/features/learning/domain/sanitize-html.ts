export function sanitizeLessonHtml(html: string): string {
  if (!html) return "";
  return html
    .replace(
      /<(script|style|iframe|object|embed)\b[^>]*>[\s\S]*?<\/\1>/gi,
      "",
    )
    .replace(/<(script|style|iframe|object|embed)\b[^>]*\/?\s*>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(
      /\s(href|src)\s*=\s*(?:("|')\s*(?:javascript|vbscript|data:(?!image\/))[^"']*\2|(?:javascript|vbscript|data:(?!image\/))[^\s>]*)/gi,
      "",
    );
}

