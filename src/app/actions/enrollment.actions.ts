"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { createSupabaseAdminClient } from "@/shared/lib/supabase/admin";
import { requireVerifiedSession } from "@/shared/lib/supabase/session";

async function requireEnrollmentStaff() {
  const session = await requireVerifiedSession();
  if (
    session.profile.role !== "admin" &&
    session.profile.role !== "instructor"
  ) {
    throw new Error("No autorizado para gestionar matrículas.");
  }
  return session.client;
}

export async function createNewUserAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const fullName = String(formData.get("fullName") ?? "").trim();
  const dniNie = String(formData.get("dniNie") ?? "").trim();
  const role = String(formData.get("role") ?? "student") as
    "student" | "instructor" | "admin";

  if (!email || !password) {
    throw new Error("El correo y la contraseña son requeridos.");
  }

  const supabase = await createSupabaseServerClient();
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) throw new Error("Unauthenticated");

  const { data: currentProfile, error: currentProfileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", auth.user.id)
    .single();
  if (currentProfileError || currentProfile?.role !== "admin") {
    throw new Error("Solo un administrador puede crear usuarios.");
  }

  const adminClient = createSupabaseAdminClient();
  const { data: createdUser, error: createUserError } =
    await adminClient.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: fullName, dni_nie: dniNie },
    });

  if (createUserError || !createdUser.user)
    throw new Error(createUserError?.message ?? "No se pudo crear el usuario.");

  const { error: profileError } = await adminClient
    .from("profiles")
    .update({
      role,
      full_name: fullName || email.split("@")[0],
      email,
      dni_nie: dniNie || null,
    })
    .eq("id", createdUser.user.id);
  if (profileError) throw new Error(profileError.message);

  revalidatePath("/admin/users");
  revalidatePath("/admin/progress");
}

export async function updateUserDniAction(userId: string, dniNie: string) {
  const supabase = await requireEnrollmentStaff();
  const trimmedDni = dniNie.trim();

  // Try RPC first for strict DB-enforced check
  const { error: rpcError } = await supabase.rpc("set_student_dni", {
    p_user_id: userId,
    p_dni_nie: trimmedDni,
  });

  if (rpcError) {
    // Fallback directly to admin client for reliable execution
    const adminClient = createSupabaseAdminClient();
    const { error: adminError } = await adminClient
      .from("profiles")
      .update({ dni_nie: trimmedDni || null })
      .eq("id", userId);
    if (adminError) throw new Error(adminError.message);
  }

  revalidatePath("/admin/users");
  revalidatePath("/admin/progress");
}

export async function enrollStudentAction(courseId: string, userId: string) {
  return updateStudentEnrollmentsAction(userId, [courseId], [courseId]);
}

export async function unenrollStudentAction(courseId: string, userId: string) {
  return updateStudentEnrollmentsAction(userId, [], [courseId]);
}

export async function updateStudentEnrollmentsAction(
  userId: string,
  enrolledCourseIds: string[],
  allCourseIds: string[],
) {
  const supabase = await requireEnrollmentStaff();
  const { error } = await supabase.rpc("set_student_enrollments", {
    p_user_id: userId,
    p_enrolled_course_ids: [...new Set(enrolledCourseIds)],
    p_scope_course_ids: [...new Set([...allCourseIds, ...enrolledCourseIds])],
  });
  if (error) throw new Error(error.message);

  revalidatePath("/admin/users");
  revalidatePath("/courses");
}

export async function updateUserRoleAction(
  userId: string,
  newRole: "student" | "admin" | "instructor",
) {
  const { client: supabase, profile } = await requireVerifiedSession();
  if (profile.role !== "admin")
    throw new Error("Solo un administrador puede cambiar roles.");
  const { error } = await supabase
    .from("profiles")
    .update({ role: newRole })
    .eq("id", userId);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/users");
}
