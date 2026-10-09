export type SlideVisibility = "public" | "private";

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
