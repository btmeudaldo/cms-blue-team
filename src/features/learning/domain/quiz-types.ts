export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
};

export type Quiz = {
  id: string;
  course_id: string;
  lesson_id?: string;
  title: string;
  description: string;
  minPassScorePercentage: number; // default 70
  questions: QuizQuestion[];
};

export type StudentQuizQuestion = Pick<
  QuizQuestion,
  "id" | "question" | "options"
>;

export type StudentQuiz = Omit<Quiz, "questions"> & {
  questions: StudentQuizQuestion[];
};

export type StartedQuizAttempt = {
  attempt_id: string;
  started_at: string;
  quiz: StudentQuiz;
};

export type QuizAttemptResult = {
  id: string;
  user_id: string;
  quiz_id: string;
  score_percentage: number;
  correct_count: number;
  total_questions: number;
  passed: boolean;
  completed_at: string;
  elapsed_seconds: number;
  min_pass_score_percentage?: number | null;
};

export type LessonCombinedStatus = {
  isFullyApproved: boolean;
  readingCompliant: boolean;
  quizPassed: boolean;
  hasQuiz: boolean;
  quizScorePercentage: number | null;
  statusLabel: string;
  statusBadgeVariant: "success" | "warning" | "info" | "error";
};
