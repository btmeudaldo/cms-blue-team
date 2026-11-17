import { redirect } from "next/navigation";
import { withBasePath } from "./base-path";
import { callNextRevalidatePath } from "@/shared/lib/revalidate-impl";

export function safeRevalidatePath(
  path: string,
  type?: "page" | "layout",
): void {
  try {
    callNextRevalidatePath(path, type);
  } catch {
    // Ignored outside Next.js server cache store.
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("cms:revalidate", { detail: { path, type } }),
    );
  }
}

export function safeRedirect(path: string): never {
  if (typeof window !== "undefined" && !process.env.VITEST) {
    window.location.assign(withBasePath(path));
    throw Object.assign(new Error(`NEXT_REDIRECT:${path}`), {
      digest: "NEXT_REDIRECT",
    });
  }
  return redirect(path);
}
