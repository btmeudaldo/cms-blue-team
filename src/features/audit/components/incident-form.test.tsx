import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, expect, it, vi } from "vitest";
const mock = vi.hoisted(() => ({ actionState: vi.fn(), action: vi.fn(), state: vi.fn(), setRequest: vi.fn(), setDescription: vi.fn() }));
vi.mock("@/app/actions/audit.actions", () => ({ reportAcademicIncidentAction: mock.action }));
vi.mock("react", async (original) => ({ ...(await original<typeof import("react")>()), useActionState: mock.actionState, useState: mock.state }));
import { IncidentForm } from "./incident-form";
beforeEach(() => { vi.resetAllMocks(); mock.actionState.mockReturnValue([null, () => {}, false]); mock.state.mockReturnValueOnce(["request", mock.setRequest]).mockReturnValueOnce(["course", vi.fn()]).mockReturnValueOnce(["technical", vi.fn()]).mockReturnValueOnce(["Description", mock.setDescription]); });
function render() { return renderToStaticMarkup(<IncidentForm initialRequestId="request" courses={[{ id: "course", title: "Course" }]} />); }
it("preserves request and text after failure for safe retry", async () => { mock.action.mockResolvedValue({ error: "offline" }); render(); const handler = mock.actionState.mock.calls[0][0]; expect(await handler()).toEqual({ error: "offline" }); expect(mock.setRequest).not.toHaveBeenCalled(); expect(mock.setDescription).not.toHaveBeenCalled(); expect(mock.action).toHaveBeenCalledWith({ requestId: "request", courseId: "course", category: "technical", description: "Description" }); });
it("rotates request and clears description only after confirmed success", async () => { mock.action.mockResolvedValue({ success: true, eventId: 42 }); render(); await mock.actionState.mock.calls[0][0](); expect(mock.setRequest).toHaveBeenCalledWith(expect.any(String)); expect(mock.setDescription).toHaveBeenCalledWith(""); });
it("shows error accessibly and disables submission while pending", () => { mock.actionState.mockReturnValue([{ error: "offline" }, () => {}, true]); const html = render(); expect(html).toContain('role="alert"'); expect(html).toContain('disabled=""'); expect(html).toContain('for="incident-description"'); });
