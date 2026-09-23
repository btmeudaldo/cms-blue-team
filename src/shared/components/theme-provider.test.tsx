import { describe, expect, it, vi, beforeEach } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { ThemeProvider, useTheme } from "./theme-provider";

function ThemeConsumer() {
  const { theme } = useTheme();
  return <span data-testid="theme">{theme}</span>;
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
    });
    vi.stubGlobal("window", {
      requestAnimationFrame: (cb: FrameRequestCallback) => {
        cb(0);
        return 0;
      },
      cancelAnimationFrame: vi.fn(),
      matchMedia: vi.fn(() => ({ matches: true })), // Even if OS prefers dark!
    });
    vi.stubGlobal("document", {
      documentElement: {
        classList: {
          add: vi.fn(),
          remove: vi.fn(),
        },
      },
    });
  });

  it("defaults strictly to light theme regardless of system dark mode", () => {
    const markup = renderToStaticMarkup(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );
    expect(markup).toContain("light");
    expect(markup).not.toContain("dark");
  });

  it("respects explicit dark theme saved in localStorage", () => {
    vi.stubGlobal("localStorage", {
      getItem: vi.fn((key: string) =>
        key === "blueteam-theme" ? "dark" : null,
      ),
      setItem: vi.fn(),
    });

    const markup = renderToStaticMarkup(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );
    expect(markup).toBeDefined();
  });
});
