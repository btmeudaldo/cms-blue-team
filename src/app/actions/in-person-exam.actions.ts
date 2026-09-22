"use server";

import { revalidatePath } from "next/cache";
import { requireVerifiedSession } from "@/shared/lib/supabase/session";
import { mockStore } from "@/shared/lib/mock-store";

export type InPersonExamInput = {
  id?: string;
  userId: string;
  courseId: string;
  examDate: string;
  classroom: string;
  scorePercentage: number;
  examinerName: string;
  notes?: string;
  documentUrl?: string;
};

export async function recordInPersonExamAction(input: InPersonExamInput) {
  try {
    const session = await requireVerifiedSession();
    if (session.profile.role !== "admin" && session.profile.role !== "instructor") {
      return { error: "No tienes permisos de instructor o administrador para registrar exámenes presenciales." };
    }

    const score = Number(input.scorePercentage);
    if (isNaN(score) || score < 0 || score > 100) {
      return { error: "La nota debe ser un número entero entre 0 y 100." };
    }

    if (!input.userId || !input.courseId || !input.examinerName?.trim()) {
      return { error: "El alumno, el curso y el nombre del examinador son obligatorios." };
    }

    const passed = score >= 75;
    const examRecord = {
      user_id: input.userId,
      course_id: input.courseId,
      exam_date: input.examDate || new Date().toISOString().slice(0, 10),
      classroom: input.classroom?.trim() || "Aula Teórica Principal",
      score_percentage: score,
      passed,
      examiner_name: input.examinerName.trim(),
      examiner_id: session.user.id,
      notes: input.notes?.trim() || null,
      document_url: input.documentUrl?.trim() || null,
      created_by: session.user.id,
    };

    let resultRecord: any = null;

    try {
      if (input.id) {
        const { data, error } = await session.client
          .from("in_person_exam_records")
          .update(examRecord)
          .eq("id", input.id)
          .select()
          .single();

        if (error) throw error;
        resultRecord = data;
      } else {
        const { data, error } = await session.client
          .from("in_person_exam_records")
          .insert({ ...examRecord, id: crypto.randomUUID() })
          .select()
          .single();

        if (error) throw error;
        resultRecord = data;
      }
    } catch {
      // Fallback to mock store in demo/offline mode
      resultRecord = mockStore.saveInPersonExam({
        ...examRecord,
        id: input.id,
      });
    }

    revalidatePath("/admin/progress");
    revalidatePath("/admin/users");
    revalidatePath(`/courses/${input.courseId}`);
    revalidatePath("/quizzes");

    return { success: true, record: resultRecord };
  } catch (err: any) {
    return { error: err.message || "Error al registrar el examen presencial." };
  }
}

export async function deleteInPersonExamAction(recordId: string) {
  try {
    const session = await requireVerifiedSession();
    if (session.profile.role !== "admin" && session.profile.role !== "instructor") {
      return { error: "No autorizado." };
    }

    try {
      const { error } = await session.client
        .from("in_person_exam_records")
        .delete()
        .eq("id", recordId);

      if (error) throw error;
    } catch {
      mockStore.deleteInPersonExam(recordId);
    }

    revalidatePath("/admin/progress");
    revalidatePath("/admin/users");

    return { success: true };
  } catch (err: any) {
    return { error: err.message || "Error al eliminar el examen presencial." };
  }
}
