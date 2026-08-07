const MINIMUM_POSITION = 8;
const MAXIMUM_POSITION = 92;
const POSITION_COUNT = MAXIMUM_POSITION - MINIMUM_POSITION + 1;

export function getNextAdvanceButtonPosition(
  currentPosition: number,
  randomValue: number,
): number {
  const offset = Math.abs(randomValue) % POSITION_COUNT;
  const candidate = MINIMUM_POSITION + offset;

  return candidate === currentPosition
    ? MINIMUM_POSITION + ((offset + 1) % POSITION_COUNT)
    : candidate;
}
