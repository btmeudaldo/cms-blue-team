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
});
