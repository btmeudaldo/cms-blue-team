import { revalidatePath } from "next/cache";

export function callNextRevalidatePath(
  path: string,
  type?: "page" | "layout",
): void {
  if (type) {
    revalidatePath(path, type);
  } else {
    revalidatePath(path);
  }
}
