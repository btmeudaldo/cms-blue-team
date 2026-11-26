import { describe, expect, it } from "vitest";

import { formatModuleDuration, groupLessonsByModule, isArchiveModule } from "./lesson-modules";

describe("groupLessonsByModule", () => {
  it("keeps a single flat group when no lesson defines module_title", () => {
    const lessons = [
      { id: "1", title: "L1" },
      { id: "2", title: "L2", module_title: null },
      { id: "3", title: "L3", module_title: "   " },
    ];

    const result = groupLessonsByModule(lessons);
    expect(result.hasModules).toBe(false);
    expect(result.groups).toHaveLength(1);
    expect(result.groups[0].moduleTitle).toBeNull();
    expect(result.groups[0].items.map((item) => item.index)).toEqual([0, 1, 2]);
  });

  it("groups consecutive lessons by normalized module_title and preserves global index", () => {
    const lessons = [
      { id: "1", module_title: "Módulo 1 · Normales" },
      { id: "2", module_title: "  Módulo 1 · Normales  " },
      { id: "3", module_title: "Módulo 2 · Anormales" },
      { id: "4", module_title: null },
    ];

    const result = groupLessonsByModule(lessons);
    expect(result.hasModules).toBe(true);
    expect(result.groups).toHaveLength(3);
    expect(result.groups[0]).toEqual({
      moduleTitle: "Módulo 1 · Normales",
      items: [
        { lesson: lessons[0], index: 0 },
        { lesson: lessons[1], index: 1 },
      ],
    });
    expect(result.groups[1]).toEqual({
      moduleTitle: "Módulo 2 · Anormales",
      items: [{ lesson: lessons[2], index: 2 }],
    });
    expect(result.groups[2]).toEqual({
      moduleTitle: null,
      items: [{ lesson: lessons[3], index: 3 }],
    });
  });
});

describe("formatModuleDuration", () => {
  it("returns null below 60 seconds", () => {
    expect(formatModuleDuration(0)).toBeNull();
    expect(formatModuleDuration(10)).toBeNull();
    expect(formatModuleDuration(59)).toBeNull();
  });

  it("formats minutes, exact hours and hours with minutes", () => {
    expect(formatModuleDuration(2700)).toBe("45 min");
    expect(formatModuleDuration(36000)).toBe("10 h");
    expect(formatModuleDuration(10800)).toBe("3 h");
    expect(formatModuleDuration(9000)).toBe("2 h 30 min");
  });
});

describe("isArchiveModule", () => {
  it("detects archive module titles", () => {
    expect(isArchiveModule("Archivo · Versión anterior (CTA / VAAF)")).toBe(true);
    expect(isArchiveModule("  archivo histórico ")).toBe(true);
    expect(isArchiveModule("Módulo 1 · Procedimientos Estándar y Normales")).toBe(false);
    expect(isArchiveModule(null)).toBe(false);
    expect(isArchiveModule(undefined)).toBe(false);
  });
});
