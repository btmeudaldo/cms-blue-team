import { describe, expect, it } from "vitest";

import {
  detectMarkdownPrefix,
  filterSlashCommands,
  generateAviationTableSnippet,
  SLASH_COMMANDS,
} from "./editor-keyboard-shortcuts";

describe("editor-keyboard-shortcuts domain", () => {
  describe("detectMarkdownPrefix", () => {
    it("detects H1, H2, and H3 prefixes correctly", () => {
      expect(detectMarkdownPrefix("# Introducción")).toEqual({
        type: "h1",
        prefix: "# ",
        cleanText: "Introducción",
      });
      expect(detectMarkdownPrefix("## Procedimientos Normales")).toEqual({
        type: "h2",
        prefix: "## ",
        cleanText: "Procedimientos Normales",
      });
      expect(detectMarkdownPrefix("### Lista de Despegue")).toEqual({
        type: "h3",
        prefix: "### ",
        cleanText: "Lista de Despegue",
      });
    });

    it("detects unordered bullet list prefixes (- and *)", () => {
      expect(detectMarkdownPrefix("- Chequeo exterior")).toEqual({
        type: "bullet-list",
        prefix: "- ",
        cleanText: "Chequeo exterior",
      });
      expect(detectMarkdownPrefix("* Nivel de combustible")).toEqual({
        type: "bullet-list",
        prefix: "* ",
        cleanText: "Nivel de combustible",
      });
    });

    it("detects ordered numbered list prefixes", () => {
      expect(detectMarkdownPrefix("1. Batería ON")).toEqual({
        type: "numbered-list",
        prefix: "1. ",
        cleanText: "Batería ON",
      });
      expect(detectMarkdownPrefix("12. Magnetos BOTH")).toEqual({
        type: "numbered-list",
        prefix: "12. ",
        cleanText: "Magnetos BOTH",
      });
    });

    it("detects quote and checklist prefixes", () => {
      expect(detectMarkdownPrefix("> Mantenga 3000 pies")).toEqual({
        type: "quote",
        prefix: "> ",
        cleanText: "Mantenga 3000 pies",
      });
      expect(detectMarkdownPrefix("[] Flaps en posición")).toEqual({
        type: "checklist",
        prefix: "[] ",
        cleanText: "Flaps en posición",
      });
    });

    it("returns null for ordinary text", () => {
      expect(detectMarkdownPrefix("Vuelo de crucero estándar")).toBeNull();
      expect(detectMarkdownPrefix("")).toBeNull();
      expect(detectMarkdownPrefix("Cessna 172")).toBeNull();
    });
  });

  describe("filterSlashCommands", () => {
    it("returns all slash commands when query is empty or just '/'", () => {
      expect(filterSlashCommands("").length).toBe(SLASH_COMMANDS.length);
      expect(filterSlashCommands("/").length).toBe(SLASH_COMMANDS.length);
    });

    it("filters commands by label or keyword", () => {
      const headingResults = filterSlashCommands("/h1");
      expect(headingResults.some((c) => c.id === "heading-1")).toBe(true);

      const warningResults = filterSlashCommands("alerta");
      expect(warningResults.some((c) => c.id === "aviation-warning")).toBe(true);

      const tableResults = filterSlashCommands("tabla");
      expect(tableResults.some((c) => c.id === "aviation-table")).toBe(true);
    });
  });

  describe("generateAviationTableSnippet", () => {
    it("generates an HTML table with performance headers and airspeed rows", () => {
      const snippet = generateAviationTableSnippet();
      expect(snippet).toContain("<table");
      expect(snippet).toContain("Parámetro / V-Speed");
      expect(snippet).toContain("Vx (Mejor Ángulo)");
      expect(snippet).toContain("Vy (Mejor Régimen)");
      expect(snippet).toContain("KIAS");
    });
  });
});
