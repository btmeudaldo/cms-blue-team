import { isValidElement, type ReactNode } from "react";
import { beforeEach, expect, it, vi } from "vitest";
const mocks = vi.hoisted(() => ({
  action: vi.fn(),
  state: vi.fn(),
  transition: vi.fn(),
  setError: vi.fn(),
  setOpen: vi.fn(),
}));
vi.mock("@/app/actions/enrollment.actions", () => ({
  updateStudentEnrollmentsAction: mocks.action,
}));
vi.mock("react", async (original) => ({
  ...(await original<typeof import("react")>()),
  useState: mocks.state,
  useMemo: (fn: () => unknown) => fn(),
  useTransition: () => [false, mocks.transition],
}));
import { StudentEnrollmentManager } from "./student-enrollment-manager";
function nodes(
  node: ReactNode,
): Array<{ type: unknown; props: Record<string, any> }> {
  if (Array.isArray(node)) return node.flatMap(nodes);
  if (!isValidElement<Record<string, any>>(node)) return [];
  return [node, ...nodes(node.props.children)];
}
beforeEach(() => {
  vi.resetAllMocks();
  mocks.state
    .mockReturnValueOnce([true, mocks.setOpen])
    .mockReturnValueOnce(["", vi.fn()])
    .mockReturnValueOnce(["all", vi.fn()])
    .mockReturnValueOnce([["owned", "outside"], vi.fn()])
    .mockReturnValueOnce([null, mocks.setError])
    .mockReturnValueOnce([["outside"], vi.fn()]);
  mocks.transition.mockImplementation((fn: () => Promise<void>) => fn());
  mocks.action.mockResolvedValue(undefined);
});
function render(courses = [{ id: "owned", title: "Owned", slug: "owned" }]) {
  return nodes(
    StudentEnrollmentManager({
      userId: "student",
      userName: "Student",
      courses,
      initialEnrolledCourseIds: ["owned", "outside"],
    }),
  );
}
it("submits only selected courses in the manageable scope", async () => {
  const button = render().find(
    (node) =>
      node.type === "button" && node.props.children === "Guardar Matrículas",
  )!;
  await button.props.onClick();
  expect(mocks.action).toHaveBeenCalledWith("student", ["owned"], ["owned"]);
});
it("keeps the editor open and reports a failed save", async () => {
  mocks.action.mockRejectedValue(new Error("Denied"));
  const button = render().find(
    (node) =>
      node.type === "button" && node.props.children === "Guardar Matrículas",
  )!;
  await button.props.onClick();
  expect(mocks.setOpen).not.toHaveBeenCalledWith(false);
  expect(mocks.setError).toHaveBeenCalledWith(
    "No se pudieron guardar las matrículas. Revisa tus permisos e inténtalo de nuevo.",
  );
});
it("disables saving when no course can be managed", () => {
  const button = render([]).find(
    (node) =>
      node.type === "button" && node.props.children === "Guardar Matrículas",
  )!;
  expect(button.props.disabled).toBe(true);
});
it("renders a save failure as an accessible alert", () => {
  mocks.state.mockReset();
  mocks.state
    .mockReturnValueOnce([true, mocks.setOpen])
    .mockReturnValueOnce(["", vi.fn()])
    .mockReturnValueOnce(["all", vi.fn()])
    .mockReturnValueOnce([["owned"], vi.fn()])
    .mockReturnValueOnce([
      "No se pudieron guardar las matrículas.",
      mocks.setError,
    ])
    .mockReturnValueOnce([["outside"], vi.fn()]);
  expect(
    render().find((node) => node.props.role === "alert")?.props.children,
  ).toBe("No se pudieron guardar las matrículas.");
});
it("does not present an unsaved course selection as an enrollment", () => {
  const trigger = render().find((node) => node.type === "button")!;
  const spans = nodes(trigger.props.children);
  expect(JSON.stringify(spans.map((node) => node.props.children))).toContain(
    "Sin Matrículas",
  );
});
it("provides an accessible name for the enrollment dialog and close button", () => {
  const rendered = render();
  const dialog = rendered.find((node) => node.props.role === "dialog");
  expect(dialog?.props["aria-modal"]).toBe(true);
  expect(
    rendered.some(
      (node) =>
        node.props.id === dialog?.props["aria-labelledby"] &&
        node.type === "h3",
    ),
  ).toBe(true);
  expect(
    rendered.some(
      (node) =>
        node.type === "button" &&
        node.props["aria-label"] === "Cerrar matrículas",
    ),
  ).toBe(true);
});
