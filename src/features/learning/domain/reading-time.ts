const DEFAULT_WORDS_PER_MINUTE = 200;
const DEFAULT_READING_RIGIDITY = 0.7;
const PRODUCT_MINIMUM_SECONDS = 30;

export function calculateMinimumReadingSeconds(wordCount: number): number {
  if (!Number.isInteger(wordCount) || wordCount < 0) {
    throw new Error("wordCount must be a non-negative integer");
  }

  const estimatedSeconds = Math.ceil(
    (wordCount / DEFAULT_WORDS_PER_MINUTE) * 60 * DEFAULT_READING_RIGIDITY,
  );

  return Math.max(PRODUCT_MINIMUM_SECONDS, estimatedSeconds);
}
