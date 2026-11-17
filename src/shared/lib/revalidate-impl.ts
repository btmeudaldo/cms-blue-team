export function callNextRevalidatePath(
  _path: string,
  _type?: "page" | "layout",
): void {
  // No-op in static browser bundle; client views listen to "cms:revalidate".
}
