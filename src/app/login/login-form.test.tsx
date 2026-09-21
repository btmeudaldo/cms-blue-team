import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { isValidElement, type ReactElement, type ReactNode } from "react";
const state = vi.hoisted(() => ({
  values: [] as unknown[],
  cursor: 0,
  signUp: vi.fn(),
  signIn: vi.fn(),
}));
vi.mock("react", async (importOriginal) => ({
  ...(await importOriginal<typeof import("react")>()),
  useState: (initial: unknown) => {
    const index = state.cursor++;
    if (!(index in state.values)) state.values[index] = initial;
    return [
      state.values[index],
      (value: unknown) => {
        state.values[index] = value;
      },
    ];
  },
}));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ replace: vi.fn(), refresh: vi.fn() }),
}));
vi.mock("@/app/actions/auth.actions", () => ({
  signUpAction: state.signUp,
  signInAction: state.signIn,
}));
import { LoginForm } from "./login-form";
function renderForm() {
  state.cursor = 0;
  return LoginForm();
}
function findForm(
  node: ReactNode,
): ReactElement<{ onSubmit: (event: unknown) => Promise<void> }> | undefined {
  if (!isValidElement<{ children?: ReactNode }>(node)) return;
  if (node.type === "form")
    return node as ReactElement<{
      onSubmit: (event: unknown) => Promise<void>;
    }>;
  for (const child of [node.props.children].flat()) {
    const found = findForm(child);
    if (found) return found;
  }
}
beforeEach(() => {
  state.values = [];
  state.cursor = 0;
  vi.clearAllMocks();
});
describe("LoginForm real accounts", () => {
  it("does not offer passwordless demonstration identities", () => {
    const html = renderToStaticMarkup(renderForm());
    expect(html).not.toMatch(
      /Sin Contraseña|Seleccionar Alumno de Prueba|Entrar como Director|student@blueteam/,
    );
  });
  it("starts with an empty password", () => {
    const html = renderToStaticMarkup(renderForm());
    const password = html.match(/<input[^>]*name="password"[^>]*>/)?.[0];
    expect(password).toBeDefined();
    expect(password).not.toMatch(/value="[^"]+"/);
  });
  it.each([false, true])(
    "associates labels and inputs in signup=%s",
    (signUp) => {
      state.values[0] = signUp;
      const html = renderToStaticMarkup(renderForm());
      for (const name of signUp
        ? ["email", "password", "fullName"]
        : ["email", "password"]) {
        expect(html).toContain(`for="${name}"`);
        expect(html).toContain(`id="${name}"`);
      }
    },
  );
  it("shows the email confirmation returned by registration", async () => {
    state.values[0] = true;
    state.signUp.mockResolvedValue({
      message: "Confirma tu cuenta por correo.",
    });
    const form = findForm(renderForm());
    expect(form).toBeDefined();
    await form!.props.onSubmit({
      preventDefault: vi.fn(),
      currentTarget: undefined,
    });
    const html = renderToStaticMarkup(renderForm());
    expect(html).toContain("Confirma tu cuenta por correo.");
    expect(html).toContain('role="status"');
  });
});
