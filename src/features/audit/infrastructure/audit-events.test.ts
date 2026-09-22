import { beforeEach, expect, it, vi } from "vitest";
const mock = vi.hoisted(() => ({ session: vi.fn(), from: vi.fn(), query: { select: vi.fn(), order: vi.fn(), limit: vi.fn(), eq: vi.fn(), lt: vi.fn() } }));
vi.mock("@/shared/lib/supabase/session", () => ({ requireVerifiedSession: mock.session }));
import { readAuditEvents } from "./audit-events";
beforeEach(() => { vi.resetAllMocks(); mock.session.mockResolvedValue({ client: { from: mock.from }, profile: { role: "admin" } }); mock.from.mockReturnValue(mock.query); for (const fn of Object.values(mock.query)) fn.mockReturnValue(mock.query); });
it("reads 51 descending rows with bounded filters and returns 50 plus cursor", async () => {
  mock.query.limit.mockResolvedValue({ data: Array.from({ length: 51 }, (_, i) => ({ id: 100-i })), error: null });
  const result = await readAuditEvents({ before: 101, entityType: "incidents", courseId: "course" });
  expect(mock.from).toHaveBeenCalledWith("academic_audit_events"); expect(mock.query.select).not.toHaveBeenCalledWith("*"); expect(mock.query.order).toHaveBeenCalledWith("id", { ascending: false }); expect(mock.query.lt).toHaveBeenCalledWith("id", 101); expect(mock.query.eq).toHaveBeenCalledWith("course_id", "course"); expect(result.events).toHaveLength(50); expect(result.nextBefore).toBe(51);
});
it.each(["student", "instructor"])("rejects %s before data query", async (role) => { mock.session.mockResolvedValue({ profile: { role } }); await expect(readAuditEvents({})).rejects.toThrow(); expect(mock.from).not.toHaveBeenCalled(); });
it("does not replace query failure with an empty history", async () => { mock.query.limit.mockResolvedValue({ data: null, error: { message: "offline" } }); await expect(readAuditEvents({})).rejects.toThrow("No se pudo cargar"); });
