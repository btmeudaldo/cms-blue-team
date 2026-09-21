type Lesson = { id: string };
type Progress = { lesson_id: string; is_completed: boolean };
type Quiz = { id: string; course_id: string; lesson_id?: string | null };
type Attempt = { quiz_id: string; passed: boolean; score_percentage: number };

export function summarizeCourseProgress<
  L extends Lesson,
  Q extends Quiz,
  A extends Attempt,
>(
  course: { id: string; lessons: L[] },
  progress: Progress[],
  availableQuizzes: Q[],
  attempts: A[],
) {
  const quizzes = availableQuizzes.filter(
    (quiz) => quiz.course_id === course.id,
  );
  const recordedReads = new Set(
    progress
      .filter((entry) => entry.is_completed)
      .map((entry) => entry.lesson_id),
  );
  const attemptsByQuiz = new Map<string, A>();
  for (const attempt of attempts) {
    const current = attemptsByQuiz.get(attempt.quiz_id);
    if (
      !current ||
      (!current.passed && attempt.passed) ||
      (current.passed === attempt.passed &&
        attempt.score_percentage > current.score_percentage)
    ) {
      attemptsByQuiz.set(attempt.quiz_id, attempt);
    }
  }
  const lessons = course.lessons.map((lesson) => {
    const quiz = quizzes.find((candidate) => candidate.lesson_id === lesson.id);
    const attempt = quiz ? attemptsByQuiz.get(quiz.id) : undefined;
    const readingCompleted = recordedReads.has(lesson.id);
    const quizPassed = attempt?.passed ?? false;
    return {
      lesson,
      quiz,
      attempt,
      readingCompleted,
      quizPassed,
      advanced: readingCompleted || quizPassed,
    };
  });
  const advancedLessonsCount = lessons.filter(
    (lesson) => lesson.advanced,
  ).length;
  const readLessonsCount = lessons.filter(
    (lesson) => lesson.readingCompleted,
  ).length;
  const passedQuizzesCount = quizzes.filter(
    (quiz) => attemptsByQuiz.get(quiz.id)?.passed,
  ).length;
  const totalItems = lessons.length + quizzes.length;
  const completedItems = advancedLessonsCount + passedQuizzesCount;
  return {
    lessons,
    quizzes,
    advancedLessonsCount,
    readLessonsCount,
    passedQuizzesCount,
    progressPercent: totalItems
      ? Math.round((100 * completedItems) / totalItems)
      : 0,
    isFullyAdvanced: totalItems > 0 && completedItems === totalItems,
    hasPendingQuizzes:
      advancedLessonsCount === lessons.length &&
      passedQuizzesCount < quizzes.length,
  };
}
