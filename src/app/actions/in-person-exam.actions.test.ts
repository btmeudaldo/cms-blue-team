import { beforeEach, describe, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  session: vi.fn(),
  revalidate: vi.fn(),
  saveInPersonExam: vi.fn(),
  deleteInPersonExam: vi.fn(),
}));

vi.mock("@/shared/lib/supabase/session", () => ({
  requireVerifiedSession: mocks.session,
}));

vi.mock("@/shared/lib/mock-store", () => ({
  mockStore: {
    saveInPersonExam: mocks.saveInPersonExam,
    deleteInPersonExam: mocks.deleteInPersonExam,
  },
}));

vi.mock("next/cache", () => ({
  revalidatePath: mocks.revalidate,
}));

import {
  recordInPersonExamAction,
  deleteInPersonExamAction,
} from "./in-person-exam.actions";

describe("in-person-exam.actions", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("blocks non-staff users from recording in-person exams", async () => {
    mocks.session.mockResolvedValue({
      user: { id: "student-1" },
      profile: { role: "student" },
    });

    const res = await recordInPersonExamAction({
      userId: "student-1",
      courseId: "course-1",
      examDate: "2026-09-22",
      classroom: "Aula 1",
      scorePercentage: 80,
      examinerName: "Examiner",
    });

    expect(res.error).toBeDefined();
    expect(res.error).toContain("No tienes permisos");
  });

  it("rejects invalid scores below 0 or above 100", async () => {
    mocks.session.mockResolvedValue({
      user: { id: "admin-1" },
      profile: { role: "admin" },
    });

    const resOver = await recordInPersonExamAction({
      userId: "student-1",
      courseId: "course-1",
      examDate: "2026-09-22",
      classroom: "Aula 1",
      scorePercentage: 105,
      examinerName: "Examiner",
    });

    expect(resOver.error).toContain("0 y 100");

    const resUnder = await recordInPersonExamAction({
      userId: "student-1",
      courseId: "course-1",
      examDate: "2026-09-22",
      classroom: "Aula 1",
      scorePercentage: -5,
      examinerName: "Examiner",
    });

    expect(resUnder.error).toContain("0 y 100");
  });

  it("rejects missing mandatory fields", async () => {
    mocks.session.mockResolvedValue({
      user: { id: "admin-1" },
      profile: { role: "admin" },
    });

    const res = await recordInPersonExamAction({
      userId: "",
      courseId: "course-1",
      examDate: "2026-09-22",
      classroom: "Aula 1",
      scorePercentage: 80,
      examinerName: "",
    });

    expect(res.error).toContain("obligatorios");
  });

  it("successfully records in-person exam for instructor/admin with 75% threshold calculation", async () => {
    mocks.session.mockResolvedValue({
      user: { id: "instructor-1" },
      profile: { role: "instructor" },
      client: {
        from: () => ({
          insert: () => ({
            select: () => ({
              single: () => Promise.reject(new Error("Use mock store fallback")),
            }),
          }),
        }),
      },
    });

    mocks.saveInPersonExam.mockImplementation((record) => record);

    const res = await recordInPersonExamAction({
      userId: "student-1",
      courseId: "course-1",
      examDate: "2026-09-22",
      classroom: "Aula B",
      scorePercentage: 76,
      examinerName: "Capt. Rogers",
    });

    expect(res.success).toBe(true);
    expect(res.record).toBeDefined();
    expect(res.record.passed).toBe(true);
    expect(res.record.score_percentage).toBe(76);
  });
});
