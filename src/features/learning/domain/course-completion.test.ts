import { describe, expect, it } from "vitest";
import {
  checkCourseCertificateEligibility,
  generateCertificateVerificationCode,
} from "./course-completion";

describe("course-completion domain", () => {
  const mockCourse = {
    id: "course-1",
    title: "Piloto Privado PPL(A)",
    slug: "ppl-a",
    theory_hours: 100,
    lessons: [
      { id: "les-1", slug: "meteorologia", min_seconds: 60 },
      { id: "les-2", slug: "navegacion", min_seconds: 60 },
    ],
  };

  it("fails eligibility if lessons are not 100% read with minimum time", () => {
    const progressRecords = [
      { lesson_id: "les-1", elapsed_seconds: 80, is_completed: true, user_id: "u-1" },
      { lesson_id: "les-2", elapsed_seconds: 20, is_completed: true, user_id: "u-1" }, // under min_seconds (60s)
    ];

    const eligibility = checkCourseCertificateEligibility(
      mockCourse,
      progressRecords,
      [],
      [],
      "u-1",
    );

    expect(eligibility.isEligible).toBe(false);
    expect(eligibility.stats.isAllLessonsRead).toBe(false);
    expect(eligibility.stats.readLessonsCount).toBe(1);
    expect(eligibility.reasons.some((r) => r.includes("tiempo mínimo"))).toBe(true);
  });

  it("fails eligibility if 100% lessons read but no exam taken", () => {
    const progressRecords = [
      { lesson_id: "les-1", elapsed_seconds: 80, is_completed: true, user_id: "u-1" },
      { lesson_id: "les-2", elapsed_seconds: 90, is_completed: true, user_id: "u-1" },
    ];

    const eligibility = checkCourseCertificateEligibility(
      mockCourse,
      progressRecords,
      [],
      [],
      "u-1",
    );

    expect(eligibility.isEligible).toBe(false);
    expect(eligibility.stats.isAllLessonsRead).toBe(true);
    expect(eligibility.qualifyingExam).toBeNull();
    expect(eligibility.reasons.some((r) => r.toLowerCase().includes("examen oficial"))).toBe(true);
  });

  it("fails eligibility if exam score is under 75% threshold", () => {
    const progressRecords = [
      { lesson_id: "les-1", elapsed_seconds: 80, is_completed: true, user_id: "u-1" },
      { lesson_id: "les-2", elapsed_seconds: 90, is_completed: true, user_id: "u-1" },
    ];

    const inPersonExams = [
      {
        id: "exam-fail",
        user_id: "u-1",
        course_id: "course-1",
        score_percentage: 74,
        passed: false,
        exam_date: "2026-09-20",
        examiner_name: "Capt. Rogers",
      },
    ];

    const eligibility = checkCourseCertificateEligibility(
      mockCourse,
      progressRecords,
      inPersonExams,
      [],
      "u-1",
    );

    expect(eligibility.isEligible).toBe(false);
    expect(eligibility.qualifyingExam?.passed).toBe(false);
    expect(eligibility.qualifyingExam?.score).toBe(74);
  });

  it("approves eligibility with in-person exam >= 75%", () => {
    const progressRecords = [
      { lesson_id: "les-1", elapsed_seconds: 80, is_completed: true, user_id: "u-1" },
      { lesson_id: "les-2", elapsed_seconds: 90, is_completed: true, user_id: "u-1" },
    ];

    const inPersonExams = [
      {
        id: "exam-pass",
        user_id: "u-1",
        course_id: "course-1",
        score_percentage: 85,
        passed: true,
        exam_date: "2026-09-22",
        examiner_name: "Capt. Rogers",
        classroom: "Aula 3",
      },
    ];

    const eligibility = checkCourseCertificateEligibility(
      mockCourse,
      progressRecords,
      inPersonExams,
      [],
      "u-1",
    );

    expect(eligibility.isEligible).toBe(true);
    expect(eligibility.qualifyingExam?.type).toBe("in_person");
    expect(eligibility.qualifyingExam?.score).toBe(85);
    expect(eligibility.qualifyingExam?.examinerName).toBe("Capt. Rogers");
  });

  it("approves eligibility with online quiz >= 75% if no in-person exam exists", () => {
    const progressRecords = [
      { lesson_id: "les-1", elapsed_seconds: 80, is_completed: true, user_id: "u-1" },
      { lesson_id: "les-2", elapsed_seconds: 90, is_completed: true, user_id: "u-1" },
    ];

    const quizAttempts = [
      {
        id: "attempt-1",
        user_id: "u-1",
        quiz_id: "les-2",
        score_percentage: 80,
        passed: true,
        completed_at: "2026-09-21T10:00:00Z",
      },
    ];

    const eligibility = checkCourseCertificateEligibility(
      mockCourse,
      progressRecords,
      [],
      quizAttempts,
      "u-1",
    );

    expect(eligibility.isEligible).toBe(true);
    expect(eligibility.qualifyingExam?.type).toBe("online");
    expect(eligibility.qualifyingExam?.score).toBe(80);
  });

  it("prioritizes in-person exam over online quiz", () => {
    const progressRecords = [
      { lesson_id: "les-1", elapsed_seconds: 80, is_completed: true, user_id: "u-1" },
      { lesson_id: "les-2", elapsed_seconds: 90, is_completed: true, user_id: "u-1" },
    ];

    const inPersonExams = [
      {
        id: "exam-pass",
        user_id: "u-1",
        course_id: "course-1",
        score_percentage: 92,
        passed: true,
        exam_date: "2026-09-22",
        examiner_name: "Chief Examiner",
      },
    ];

    const quizAttempts = [
      {
        id: "attempt-1",
        user_id: "u-1",
        quiz_id: "les-2",
        score_percentage: 78,
        passed: true,
        completed_at: "2026-09-20T10:00:00Z",
      },
    ];

    const eligibility = checkCourseCertificateEligibility(
      mockCourse,
      progressRecords,
      inPersonExams,
      quizAttempts,
      "u-1",
    );

    expect(eligibility.isEligible).toBe(true);
    expect(eligibility.qualifyingExam?.type).toBe("in_person");
    expect(eligibility.qualifyingExam?.score).toBe(92);
  });

  it("approves course without exam when 100% lessons are read, showing examStatus 'not_applicable'", () => {
    const courseWithoutExam = {
      id: "c172-course",
      slug: "cessna-172-continental-diesel",
      title: "Cessna 172 Differences",
      requires_exam: false,
      lessons: [{ id: "c172-les-1", min_seconds: 50 }],
    };

    const progressRecords = [
      { lesson_id: "c172-les-1", elapsed_seconds: 60, is_completed: true, user_id: "u-1" },
    ];

    const eligibility = checkCourseCertificateEligibility(
      courseWithoutExam,
      progressRecords,
      [],
      [],
      "u-1",
      [],
    );

    expect(eligibility.isEligible).toBe(true);
    expect(eligibility.examStatus).toBe("not_applicable");
    expect(eligibility.isExamApplicable).toBe(false);
    expect(eligibility.qualifyingExam).toBeNull();
    expect(eligibility.missingRequirements).toHaveLength(0);
  });

  it("does not leak unrelated quiz attempts from other courses into a course without quizzes", () => {
    const courseWithoutExam = {
      id: "c172-course",
      slug: "cessna-172-continental-diesel",
      title: "Cessna 172 Differences",
      lessons: [{ id: "c172-les-1", min_seconds: 50 }],
    };

    // User has an attempt from PPL aerodynamics exam (100%)
    const otherCourseQuizAttempts = [
      {
        id: "attempt-aerodinamica",
        user_id: "u-1",
        quiz_id: "quiz-aerodinamica",
        score_percentage: 100,
        passed: true,
        completed_at: "2026-09-20T10:00:00Z",
      },
    ];

    const allQuizzes = [
      { id: "quiz-aerodinamica", course_id: "ppl-course", lesson_id: "les-ppl-1" },
    ];

    const eligibility = checkCourseCertificateEligibility(
      courseWithoutExam,
      [],
      [],
      otherCourseQuizAttempts,
      "u-1",
      allQuizzes,
    );

    // Should NOT mark the C172 course exam as passed with 100% from PPL
    expect(eligibility.examStatus).toBe("not_applicable");
    expect(eligibility.isExamApplicable).toBe(false);
    expect(eligibility.qualifyingExam).toBeNull();
  });

  it("generates deterministic certificate verification code", () => {
    const code1 = generateCertificateVerificationCode("12345678Z", "PPL(A)", "2026-09-22");
    const code2 = generateCertificateVerificationCode("12345678Z", "PPL(A)", "2026-09-22");
    const code3 = generateCertificateVerificationCode("87654321A", "PPL(A)", "2026-09-22");

    expect(code1).toMatch(/^BT-ATO-2026-[A-Z0-9]+-[A-Z0-9]+-[A-Z0-9]{4}$/);
    expect(code1).toBe(code2);
    expect(code1).not.toBe(code3);
  });
});
