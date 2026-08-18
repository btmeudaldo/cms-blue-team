import { describe, expect, it } from "vitest";

import { getCourseCoverUploadError } from "./course-cover-upload";

describe("getCourseCoverUploadError", () => {
  it("accepts an image file within the course-cover size limit", () => {
    expect(
      getCourseCoverUploadError({ type: "image/webp", size: 2 * 1024 * 1024 }),
    ).toBeNull();
  });

  it("rejects files that are not supported images", () => {
    expect(
      getCourseCoverUploadError({ type: "application/pdf", size: 1024 }),
    ).toBe("Selecciona una imagen PNG, JPG, WEBP o GIF.");
  });

  it("rejects files over the 5 MB course-cover limit", () => {
    expect(
      getCourseCoverUploadError({
        type: "image/jpeg",
        size: 5 * 1024 * 1024 + 1,
      }),
    ).toBe("La imagen no puede superar 5 MB.");
  });
});
