import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  session: vi.fn(),
  revalidate: vi.fn(),
}));

vi.mock("@/shared/lib/supabase/session", () => ({
  requireVerifiedSession: mocks.session,
}));
vi.mock("next/cache", () => ({ revalidatePath: mocks.revalidate }));

import { uploadLessonImageAction } from "./lesson.actions";

describe("uploadLessonImageAction", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("throws forbidden if role is student", async () => {
    mocks.session.mockResolvedValue({
      profile: { role: "student" },
      user: { id: "user-1" },
    });

    const formData = new FormData();
    formData.append("file", new File(["test"], "diagram.png", { type: "image/png" }));

    await expect(uploadLessonImageAction(formData)).rejects.toThrow("Forbidden");
  });

  it("throws if no file is provided", async () => {
    mocks.session.mockResolvedValue({
      profile: { role: "instructor" },
      user: { id: "user-1" },
    });

    const formData = new FormData();
    await expect(uploadLessonImageAction(formData)).rejects.toThrow(
      "No image file was selected.",
    );
  });

  it("throws if file exceeds 5MB", async () => {
    mocks.session.mockResolvedValue({
      profile: { role: "instructor" },
      user: { id: "user-1" },
    });

    const largeBuffer = new Uint8Array(5 * 1024 * 1024 + 10);
    const largeFile = new File([largeBuffer], "huge.png", { type: "image/png" });

    const formData = new FormData();
    formData.append("file", largeFile);

    await expect(uploadLessonImageAction(formData)).rejects.toThrow(
      "The image file exceeds the 5 MB limit.",
    );
  });

  it("throws if file type is unsupported", async () => {
    mocks.session.mockResolvedValue({
      profile: { role: "instructor" },
      user: { id: "user-1" },
    });

    const badFile = new File(["dummy pdf content"], "doc.pdf", {
      type: "application/pdf",
    });
    const formData = new FormData();
    formData.append("file", badFile);

    await expect(uploadLessonImageAction(formData)).rejects.toThrow(
      "Unsupported image format",
    );
  });

  it("successfully uploads supported image file and returns public CDN url", async () => {
    const uploadMock = vi.fn().mockResolvedValue({ error: null });
    const getPublicUrlMock = vi.fn().mockReturnValue({
      data: { publicUrl: "https://example.supabase.co/storage/v1/object/public/course-covers/user-1/lessons/abc.png" },
    });

    const storageMock = {
      from: vi.fn().mockReturnValue({
        upload: uploadMock,
        getPublicUrl: getPublicUrlMock,
      }),
    };

    mocks.session.mockResolvedValue({
      profile: { role: "instructor" },
      user: { id: "user-1" },
      client: {
        storage: storageMock,
      },
    });

    const validFile = new File(["image-bytes"], "wing-diagram.png", {
      type: "image/png",
    });
    const formData = new FormData();
    formData.append("file", validFile);

    const result = await uploadLessonImageAction(formData);

    expect(storageMock.from).toHaveBeenCalledWith("course-covers");
    expect(uploadMock).toHaveBeenCalled();
    expect(result).toBe(
      "https://example.supabase.co/storage/v1/object/public/course-covers/user-1/lessons/abc.png",
    );
  });
});
