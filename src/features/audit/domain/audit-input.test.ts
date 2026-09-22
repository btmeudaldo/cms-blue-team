import { describe, expect, it } from "vitest";
import { parseAuditFilters, parseIncident } from "./audit-input";
const uuid = "11111111-1111-4111-8111-111111111111";
describe("audit input", () => {
  it("accepts bounded cursor and filters", () => expect(parseAuditFilters({ before: "42", entity_type: "incidents", course_id: uuid })).toEqual({ before: 42, entityType: "incidents", courseId: uuid }));
  it.each(["0", "-1", "1.5", "9007199254740992", "abc"])("rejects invalid cursor %s", (before) => expect(() => parseAuditFilters({ before })).toThrow());
  it("rejects invalid filters", () => { expect(() => parseAuditFilters({ entity_type: "secrets" })).toThrow(); expect(() => parseAuditFilters({ course_id: "all" })).toThrow(); });
  it("validates incident payload without accepting actor fields", () => expect(parseIncident({ courseId: uuid, requestId: uuid, category: "technical", description: "  Failed playback  " })).toEqual({ courseId: uuid, requestId: uuid, category: "technical", description: "Failed playback" }));
  it.each(["", " ", "a".repeat(2001)])("rejects empty or excessive descriptions", (description) => expect(() => parseIncident({ courseId: uuid, requestId: uuid, category: "other", description })).toThrow());
});
