import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  session: vi.fn(),
  editor: vi.fn(),
  revalidate: vi.fn(),
}));

vi.mock("@/shared/lib/supabase/session", () => ({
  requireVerifiedSession: mocks.session,
}));
vi.mock("@/features/learning/application/course-authorization", () => ({
  requireCourseEditor: mocks.editor,
}));
vi.mock("next/cache", () => ({ revalidatePath: mocks.revalidate }));

import {
  uploadLessonImageAction,
  updateSlideVisibilityAction,
} from "./lesson.actions";

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

describe("updateSlideVisibilityAction", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("updates target slide visibility attribute and revalidates paths", async () => {
    const singleMock = vi.fn().mockResolvedValue({
      data: {
        id: "lesson-uuid-1",
        content_html:
          '<div class="lesson-slide-container"><p>Slide 1</p></div>\n\n<!-- pagebreak -->\n\n<div class="lesson-slide-container"><p>Slide 2</p></div>',
      },
      error: null,
    });
    const updateEqMock = vi.fn().mockResolvedValue({ error: null });
    const updateMock = vi.fn().mockReturnValue({ eq: updateEqMock });

    const queryMock: any = {
      eq: vi.fn(),
      single: singleMock,
    };
    queryMock.eq.mockReturnValue(queryMock);

    const clientMock = {
      from: vi.fn((table: string) => {
        if (table === "lessons") {
          return {
            select: vi.fn().mockReturnValue(queryMock),
            update: updateMock,
          };
        }
        return {};
      }),
    };

    mocks.editor.mockResolvedValue({ client: clientMock });

    const res = await updateSlideVisibilityAction({
      lessonId: "lesson-uuid-1",
      courseId: "course-1",
      slideIndex: 1,
      visibility: "private",
    });

    expect(res).toEqual({ success: true, visibility: "private" });
    expect(updateMock).toHaveBeenCalledWith(
      expect.objectContaining({
        content_html: expect.stringContaining('data-slide-visibility="private"'),
      }),
    );
    expect(mocks.revalidate).toHaveBeenCalledWith("/courses/course-1/lessons/lesson-uuid-1");
  });

  it("throws error if slideIndex is out of range", async () => {
    const singleMock = vi.fn().mockResolvedValue({
      data: {
        id: "lesson-uuid-1",
        content_html: '<div class="lesson-slide-container"><p>Single Slide</p></div>',
      },
      error: null,
    });
    const queryMock: any = {
      eq: vi.fn(),
      single: singleMock,
    };
    queryMock.eq.mockReturnValue(queryMock);

    const clientMock = {
      from: vi.fn(() => ({
        select: vi.fn().mockReturnValue(queryMock),
      })),
    };

    mocks.editor.mockResolvedValue({ client: clientMock });

    await expect(
      updateSlideVisibilityAction({
        lessonId: "lesson-uuid-1",
        courseId: "course-1",
        slideIndex: 5,
        visibility: "private",
      }),
    ).rejects.toThrow("Índice de diapositiva no válido.");
  });
});

