import { describe, expect, it } from "vitest";

import { sanitizeLessonHtml } from "./sanitize-html";

describe("sanitizeLessonHtml", () => {
  it("removes executable elements and event-handler attributes", () => {
    const html =
      '<p onclick="steal()">Safe</p><script>alert(1)</script><iframe src="https://evil.test"></iframe>';

    expect(sanitizeLessonHtml(html)).toBe("<p>Safe</p>");
  });

  it("removes dangerous URL protocols whether quoted or not", () => {
    const html =
      '<a href=javascript:alert(1)>link</a><img src="data:text/html,boom"><a href="https://safe.test">ok</a>';

    expect(sanitizeLessonHtml(html)).toBe(
      '<a>link</a><img><a href="https://safe.test">ok</a>',
    );
  });

  it("preserves trusted video embed iframes like YouTube and Vimeo while stripping handlers", () => {
    const youtube =
      '<div class="video"><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Flight Video" onclick="bad()"></iframe></div>';
    const vimeo =
      '<iframe src="https://player.vimeo.com/video/123456789"></iframe>';

    expect(sanitizeLessonHtml(youtube)).toBe(
      '<div class="video"><iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Flight Video"></iframe></div>',
    );
    expect(sanitizeLessonHtml(vimeo)).toBe(
      '<iframe src="https://player.vimeo.com/video/123456789"></iframe>',
    );
  });

  it("blocks untrusted iframes with arbitrary domains", () => {
    const malicious =
      '<iframe src="https://phishing.site/login"></iframe><iframe src="javascript:alert(1)"></iframe>';

    expect(sanitizeLessonHtml(malicious)).toBe("");
  });
});

