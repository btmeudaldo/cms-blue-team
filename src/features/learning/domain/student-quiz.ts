import type { StudentQuiz } from "./quiz-types";

export function toStudentQuiz(quiz: StudentQuiz): StudentQuiz {
  return {
    id: quiz.id,
    course_id: quiz.course_id,
    lesson_id: quiz.lesson_id,
    title: quiz.title,
    description: quiz.description,
    minPassScorePercentage: quiz.minPassScorePercentage,
    questions: quiz.questions.map(({ id, question, options }) => ({
      id,
      question,
      options,
    })),
  };
}
