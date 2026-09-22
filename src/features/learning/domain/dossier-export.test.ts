import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { exportDossierCSV, exportGlobalAuditCSV } from "./dossier-export";

describe("dossier-export", () => {
  const originalBlob = global.Blob;
  const originalUrl = global.URL;
  const originalDocument = (global as any).document;

  beforeEach(() => {
    const mockElement = {
      setAttribute: vi.fn(),
      click: vi.fn(),
    };

    (global as any).document = {
      createElement: vi.fn().mockReturnValue(mockElement),
      body: {
        appendChild: vi.fn(),
        removeChild: vi.fn(),
      },
    };
  });

  afterEach(() => {
    global.Blob = originalBlob;
    global.URL = originalUrl;
    (global as any).document = originalDocument;
  });

  it("includes DNI/NIE in the exported student dossier CSV", () => {
    let capturedBlobContent = "";
    global.Blob = vi.fn().mockImplementation((content: string[]) => {
      capturedBlobContent = content.join("");
      return {};
    }) as any;

    global.URL.createObjectURL = vi.fn().mockReturnValue("blob:mock-url");
    global.URL.revokeObjectURL = vi.fn();

    const student = {
      id: "student-1",
      full_name: "Capitán Lucas",
      email: "lucas@blueteam.com",
      dni_nie: "12345678X",
    };

    const records = [
      {
        lesson_id: "lesson-1",
        user_id: "student-1",
        elapsed_seconds: 120,
        is_completed: true,
        started_at: "2026-09-22T08:00:00Z",
        completed_at: "2026-09-22T08:02:00Z",
      },
    ];

    const lessonMap = new Map([
      [
        "lesson-1",
        {
          id: "lesson-1",
          title: "Seguridad en Pista",
          courseTitle: "Operaciones Aeroportuarias",
          min_seconds: 60,
        },
      ],
    ]);

    exportDossierCSV(student, records, lessonMap, [], []);

    expect(capturedBlobContent).toContain("DNI/NIE");
    expect(capturedBlobContent).toContain("12345678X");
    expect(capturedBlobContent).toContain("Capitán Lucas");
    expect(capturedBlobContent).toContain("Operaciones Aeroportuarias");
  });

  it("includes DNI/NIE in the global audit CSV", () => {
    let capturedBlobContent = "";
    global.Blob = vi.fn().mockImplementation((content: string[]) => {
      capturedBlobContent = content.join("");
      return {};
    }) as any;

    global.URL.createObjectURL = vi.fn().mockReturnValue("blob:mock-url");

    const profiles = [
      {
        id: "student-2",
        full_name: "Elena Gómez",
        email: "elena@blueteam.com",
        dni_nie: "87654321Z",
      },
    ];
    const profileMap = new Map([["student-2", profiles[0]]]);
    const records = [
      {
        lesson_id: "lesson-2",
        user_id: "student-2",
        elapsed_seconds: 90,
        is_completed: true,
      },
    ];
    const lessonMap = new Map([
      ["lesson-2", { id: "lesson-2", title: "Procedimientos", min_seconds: 60 }],
    ]);

    exportGlobalAuditCSV(records, profileMap, lessonMap, profiles);

    expect(capturedBlobContent).toContain("DNI/NIE");
    expect(capturedBlobContent).toContain("87654321Z");
    expect(capturedBlobContent).toContain("Elena Gómez");
  });
});
