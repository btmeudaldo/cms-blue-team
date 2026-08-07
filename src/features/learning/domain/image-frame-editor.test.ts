import { describe, expect, it } from "vitest";

import { shouldShowImageFrameEditor } from "./image-frame-editor";

describe("shouldShowImageFrameEditor", () => {
  it("keeps an existing cover in preview mode until editing is explicitly requested", () => {
    expect(
      shouldShowImageFrameEditor("https://example.test/cover.jpg", false),
    ).toBe(false);
  });

  it("shows framing controls only for an existing cover in edit mode", () => {
    expect(
      shouldShowImageFrameEditor("https://example.test/cover.jpg", true),
    ).toBe(true);
  });
});
