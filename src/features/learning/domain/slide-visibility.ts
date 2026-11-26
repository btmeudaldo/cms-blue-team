import { splitLessonPages } from "./lesson-pages";

export type SlideVisibility = "public" | "private";
export type LessonVisibilityState = "public" | "private" | "mixed";

/**
 * Extracts the visibility of a slide HTML string.
 * Defaults to 'public' unless marked with data-slide-visibility="private" or class "slide-private".
 */
export function getSlideVisibility(slideHtml: string): SlideVisibility {
  if (!slideHtml || typeof slideHtml !== "string") return "public";
  if (
    /data-slide-visibility=["'](?:private|only-me)["']/i.test(slideHtml) ||
    /class=["'][^"']*\bslide-private\b[^"']*["']/i.test(slideHtml)
  ) {
    return "private";
  }
  return "public";
}

/**
 * Sets the visibility attribute on the outermost root element of a slide.
 */
export function setSlideVisibility(
  slideHtml: string,
  visibility: SlideVisibility
): string {
  if (!slideHtml || typeof slideHtml !== "string") return slideHtml;

  // Match optional leading comments, then opening tag
  const rootTagMatch = slideHtml.match(
    /^([\s\S]*?)(<[a-zA-Z0-9\-]+)([\s\S]*?>)([\s\S]*)$/
  );

  if (!rootTagMatch) {
    const attr =
      visibility === "private"
        ? ' data-slide-visibility="private"'
        : ' data-slide-visibility="public"';
    return `<div class="lesson-slide-container"${attr}>\n${slideHtml}\n</div>`;
  }

  const beforeTag = rootTagMatch[1];
  const tagName = rootTagMatch[2];
  let tagAttributesAndClose = rootTagMatch[3];
  const afterTag = rootTagMatch[4];

  // Remove existing data-slide-visibility attribute
  tagAttributesAndClose = tagAttributesAndClose.replace(
    /\s*data-slide-visibility=["'][^"']*["']/gi,
    ""
  );

  // Insert updated data-slide-visibility before '>'
  const closeIdx = tagAttributesAndClose.lastIndexOf(">");
  if (closeIdx !== -1) {
    const newAttr = ` data-slide-visibility="${visibility}"`;
    tagAttributesAndClose =
      tagAttributesAndClose.slice(0, closeIdx) +
      newAttr +
      tagAttributesAndClose.slice(closeIdx);
  }

  return beforeTag + tagName + tagAttributesAndClose + afterTag;
}

/**
 * Filters the slide list based on user role.
 * - Instructors and admins see ALL slides.
 * - Students only see slides with visibility === 'public'.
 */
export function getVisibleSlidesForUser(
  slides: string[],
  role?: string
): { visibleSlides: string[]; visibleToOriginalIndexMap: number[] } {
  if (role === "superadmin") {
    return {
      visibleSlides: slides,
      visibleToOriginalIndexMap: slides.map((_, i) => i),
    };
  }

  const visibleSlides: string[] = [];
  const visibleToOriginalIndexMap: number[] = [];

  slides.forEach((slide, idx) => {
    if (getSlideVisibility(slide) === "public") {
      visibleSlides.push(slide);
      visibleToOriginalIndexMap.push(idx);
    }
  });

  return { visibleSlides, visibleToOriginalIndexMap };
}

/**
 * Returns "public", "private", or "mixed" depending on the slides in contentHtml.
 * Lessons without content_html default to "public".
 */
export function getLessonVisibilityState(
  contentHtml?: string | null,
): LessonVisibilityState {
  if (!contentHtml || typeof contentHtml !== "string" || contentHtml.trim() === "") {
    return "public";
  }
  const slides = splitLessonPages(contentHtml);
  if (slides.length === 0) return "public";
  let privateCount = 0;
  for (const slide of slides) {
    if (getSlideVisibility(slide) === "private") {
      privateCount += 1;
    }
  }
  if (privateCount === 0) return "public";
  if (privateCount === slides.length) return "private";
  return "mixed";
}

/**
 * Sets the visibility of every slide in a lesson's contentHtml.
 */
export function setLessonVisibility(
  contentHtml: string,
  visibility: SlideVisibility,
): string {
  if (!contentHtml || typeof contentHtml !== "string" || contentHtml.trim() === "") {
    return contentHtml;
  }
  const slides = splitLessonPages(contentHtml);
  if (slides.length === 0) return contentHtml;
  return slides
    .map((slide) => setSlideVisibility(slide, visibility))
    .join("\n\n<!-- pagebreak -->\n\n");
}

/**
 * Returns true only when a lesson has non-empty content and every slide is marked private.
 * Lessons without content_html default to false (public).
 */
export function isLessonFullyPrivate(contentHtml?: string | null): boolean {
  if (!contentHtml || typeof contentHtml !== "string" || contentHtml.trim() === "") {
    return false;
  }
  const slides = splitLessonPages(contentHtml);
  return slides.length > 0 && slides.every((slide) => getSlideVisibility(slide) === "private");
}

/**
 * Excludes 100%-private lessons for everyone except superadmins.
 */
export function filterVisibleLessonsForUser<T extends { content_html?: string | null }>(
  lessons: T[],
  role?: string,
  isSuperAdmin?: boolean,
): T[] {
  if (isSuperAdmin || role === "superadmin") {
    return lessons;
  }
  return lessons.filter((lesson) => !isLessonFullyPrivate(lesson.content_html));
}
