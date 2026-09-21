import { renderToStaticMarkup } from "react-dom/server";
import { beforeEach, describe, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({ hook: vi.fn() }));
vi.mock("react", async (importOriginal) => ({
  ...(await importOriginal<typeof import("react")>()),
  useActionState: mocks.hook,
}));
import { AcademicDeleteForm } from "./academic-delete-form";
beforeEach(() => {
  mocks.hook.mockReset();
  mocks.hook.mockReturnValue([undefined, () => {}, false]);
});
describe("academic delete form", () => {
  it("shows a returned conservation error in an accessible alert", () => {
    mocks.hook.mockReturnValue([
      { error: "Conservación de registros" },
      () => {},
      false,
    ]);
    const html = renderToStaticMarkup(
      <AcademicDeleteForm action={vi.fn()} label="Eliminar curso" />,
    );
    expect(html).toContain('role="alert"');
    expect(html).toContain("Conservación de registros");
    expect(html).toContain('aria-label="Eliminar curso"');
  });
  it("disables submission while pending and retains the accessible label", () => {
    mocks.hook.mockReturnValue([undefined, () => {}, true]);
    const html = renderToStaticMarkup(
      <AcademicDeleteForm action={vi.fn()} label="Eliminar lección" />,
    );
    expect(html).toContain('disabled=""');
    expect(html).toContain('aria-label="Eliminar lección"');
  });
  it("does not show an error initially", () => {
    const html = renderToStaticMarkup(
      <AcademicDeleteForm action={vi.fn()} label="Eliminar curso" />,
    );
    expect(html).not.toContain('role="alert"');
    expect(html).not.toContain('disabled=""');
  });
  it("forwards the expected result and propagates unexpected failures", async () => {
    const action = vi.fn().mockResolvedValue({ error: "Conservación" });
    renderToStaticMarkup(
      <AcademicDeleteForm action={action} label="Eliminar curso" />,
    );
    const submit = mocks.hook.mock.calls[0][0] as () => Promise<unknown>;
    await expect(submit()).resolves.toEqual({ error: "Conservación" });
    action.mockRejectedValue(new Error("Network failed"));
    await expect(submit()).rejects.toThrow("Network failed");
  });
});
