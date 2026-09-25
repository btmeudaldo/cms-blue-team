/**
 * Splits lesson content HTML into discrete pages/slides.
 * Supports:
 * - HTML comment delimiters: <!-- pagebreak -->, <!-- slidebreak -->
 * - Tag delimiters: <hr class="page-break" />, <hr class="lesson-pagebreak" />
 * - Explicit sections: <section class="lesson-page" ...> or <div class="lesson-page" ...>
 *
 * If no delimiters are found, returns the entire HTML as a single page.
 */
export function splitLessonPages(contentHtml: string): string[] {
  if (!contentHtml || typeof contentHtml !== "string") {
    return [""];
  }

  // 1. Check for standard pagebreak comments or hr pagebreak tags
  const pagebreakRegex =
    /(?:<!--\s*(?:pagebreak|slidebreak|page-break|slide-break)\s*-->|<hr\s+class=["'][^"']*(?:page-break|lesson-pagebreak)[^"']*["']\s*\/?>)/gi;

  if (pagebreakRegex.test(contentHtml)) {
    const rawPages = contentHtml.split(pagebreakRegex);
    const cleaned = rawPages.map((p) => p.trim()).filter((p) => p.length > 0);
    return cleaned.length > 0 ? cleaned : [contentHtml];
  }

  // 2. Check for explicit lesson-page container elements
  const sectionPageRegex = /<(?:section|div)\s+[^>]*class=["'][^"']*lesson-page[^"']*["'][^>]*>([\s\S]*?)<\/(?:section|div)>/gi;
  const sectionMatches: string[] = [];
  let match: RegExpExecArray | null;

  while ((match = sectionPageRegex.exec(contentHtml)) !== null) {
    if (match[1] && match[1].trim()) {
      sectionMatches.push(match[1].trim());
    }
  }

  if (sectionMatches.length > 0) {
    return sectionMatches;
  }

  // Default: single page
  return [contentHtml.trim()];
}
