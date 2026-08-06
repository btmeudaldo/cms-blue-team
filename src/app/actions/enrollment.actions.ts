"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { mockStore } from "@/shared/lib/mock-store";

export async function createNewUserAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const fullName = String(formData.get("fullName") ?? "").trim();
  const role = String(formData.get("role") ?? "student") as "student" | "instructor" | "admin";

  if (!email || !password) {
    throw new Error("El correo y la contraseña son requeridos.");
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data: signUpData } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, role },
      },
    });

    if (signUpData?.user) {
      await supabase.from("profiles").upsert({
        id: signUpData.user.id,
        email,
        full_name: fullName || email.split("@")[0],
        role,
      });
    }
  } catch (err) {
    // Offline fallback
  }

  mockStore.addProfile({
    id: `user-${Date.now()}`,
    email,
    full_name: fullName || email.split("@")[0],
    role,
  });

  revalidatePath("/admin/users");
}

export async function enrollStudentAction(courseId: string, userId: string) {
  try {
    const supabase = await createSupabaseServerClient();
    await supabase.from("course_enrollments").upsert({
      course_id: courseId,
      user_id: userId,
    });
  } catch (err) {
    // Offline fallback
  }

  mockStore.enroll(userId, courseId);
  revalidatePath("/admin/users");
  revalidatePath("/courses");
}

export async function unenrollStudentAction(courseId: string, userId: string) {
  try {
    const supabase = await createSupabaseServerClient();
    await supabase
      .from("course_enrollments")
      .delete()
      .eq("course_id", courseId)
      .eq("user_id", userId);
  } catch (err) {
    // Offline fallback
  }

  mockStore.unenroll(userId, courseId);
  revalidatePath("/admin/users");
  revalidatePath("/courses");
}

export async function updateStudentEnrollmentsAction(
  userId: string,
  enrolledCourseIds: string[],
  allCourseIds: string[]
) {
  try {
    const supabase = await createSupabaseServerClient();
    const toDelete = allCourseIds.filter((id) => !enrolledCourseIds.includes(id));
    if (toDelete.length > 0) {
      await supabase
        .from("course_enrollments")
        .delete()
        .eq("user_id", userId)
        .in("course_id", toDelete);
    }

    if (enrolledCourseIds.length > 0) {
      const upsertRows = enrolledCourseIds.map((cId) => ({ course_id: cId, user_id: userId }));
      await supabase.from("course_enrollments").upsert(upsertRows);
    }
  } catch (err) {
    // Offline fallback
  }

  for (const cId of allCourseIds) {
    if (enrolledCourseIds.includes(cId)) {
      mockStore.enroll(userId, cId);
    } else {
      mockStore.unenroll(userId, cId);
    }
  }

  revalidatePath("/admin/users");
  revalidatePath("/courses");
}

export async function updateUserRoleAction(userId: string, newRole: "student" | "admin" | "instructor") {
  try {
    const supabase = await createSupabaseServerClient();
    await supabase
      .from("profiles")
      .update({ role: newRole })
      .eq("id", userId);
  } catch (err) {
    // Offline fallback
  }

  mockStore.updateProfileRole(userId, newRole);

  revalidatePath("/admin/users");
}
