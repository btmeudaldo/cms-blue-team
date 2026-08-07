export function getNextLessonOrder(existingOrders: number[]): number {
  if (existingOrders.length === 0) return 1;

  return Math.max(...existingOrders) + 1;
}
