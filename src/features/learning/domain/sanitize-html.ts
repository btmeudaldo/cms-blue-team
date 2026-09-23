const TRUSTED_IFRAME_SRC_REGEX =
  /^https:\/\/(www\.)?(youtube\.com\/embed\/|youtube-nocookie\.com\/embed\/|player\.vimeo\.com\/video\/)[\w\-?&=%#.]*$/i;

export function sanitizeLessonHtml(html: string): string {
  if (!html) return "";

  // Handle iframes specially: preserve only trusted video embed URLs
  let sanitized = html.replace(
    /<iframe\b([^>]*?)>(?:[\s\S]*?<\/iframe>)?/gi,
    (_match, attrs) => {
      const srcMatch = attrs.match(/\ssrc=(?:"([^"]*)"|'([^']*)'|([^\s>]+))/i);
      const src = srcMatch ? srcMatch[1] || srcMatch[2] || srcMatch[3] : "";
      if (src && TRUSTED_IFRAME_SRC_REGEX.test(src.trim())) {
        const cleanAttrs = attrs.replace(
          /\son\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi,
          "",
        );
        return `<iframe${cleanAttrs}></iframe>`;
      }
      return "";
    },
  );

  return sanitized
    .replace(/<(script|style|object|embed)\b[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<(script|style|object|embed)\b[^>]*\/?\s*>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(
      /\s(href|src)\s*=\s*(?:("|')\s*(?:javascript|vbscript|data:(?!image\/))[^"']*\2|(?:javascript|vbscript|data:(?!image\/))[^\s>]*)/gi,
      "",
    );
}

