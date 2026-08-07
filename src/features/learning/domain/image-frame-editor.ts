export function shouldShowImageFrameEditor(
  imageUrl: string,
  isEditing: boolean,
): boolean {
  return Boolean(imageUrl) && isEditing;
}
