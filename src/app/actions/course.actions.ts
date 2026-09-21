"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireVerifiedSession } from "@/shared/lib/supabase/session";
import { getCourseCoverUploadError } from "@/features/learning/domain/course-cover-upload";

async function requireCourseStaff() {
  const session = await requireVerifiedSession();
  if (
    session.profile.role !== "admin" &&
    session.profile.role !== "instructor"
  ) {
    throw new Error("Forbidden");
  }
  return session;
}

function courseFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "")
    .trim()
    .toLowerCase();
  const description = String(formData.get("description") ?? "").trim();
  const imageUrl = String(formData.get("imageUrl") ?? "").trim();
  if (!title || !slug) throw new Error("Título y slug son obligatorios.");
  return { title, slug, description, image_url: imageUrl || null };
}

function revalidateCourses() {
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  revalidatePath("/admin/users");
}

export async function createCourseAction(formData: FormData) {
  const { client, user } = await requireCourseStaff();
  const fields = courseFields(formData);
  const { data: course, error } = await client
    .from("courses")
    .insert({ ...fields, created_by: user.id })
    .select("id")
    .single();
  if (error) throw new Error(`No se pudo crear el curso: ${error.message}`);
  if (!course) throw new Error("No se pudo crear el curso.");
  const { error: enrollmentError } = await client
    .from("course_enrollments")
    .upsert({ course_id: course.id, user_id: user.id });
  if (enrollmentError)
    throw new Error(
      `Curso creado, pero no se pudo registrar la matrícula: ${enrollmentError.message}`,
    );
  revalidateCourses();
  redirect(`/admin/courses/${course.id}`);
}

export async function uploadCourseCoverAction(formData: FormData) {
  const { client, user } = await requireCourseStaff();
  const file = formData.get("file");
  if (!(file instanceof File))
    throw new Error("No se seleccionó ningún archivo de imagen.");
  const validationError = getCourseCoverUploadError(file);
  if (validationError) throw new Error(validationError);
  const buffer = Buffer.from(await file.arrayBuffer());
  const extension = file.type.split("/")[1];
  const objectPath = `${user.id}/${crypto.randomUUID()}.${extension}`;
  const { error } = await client.storage
    .from("course-covers")
    .upload(objectPath, buffer, { contentType: file.type, upsert: false });
  if (error)
    throw new Error(`No se pudo subir la imagen de portada: ${error.message}`);
  return client.storage.from("course-covers").getPublicUrl(objectPath).data
    .publicUrl;
}

export async function updateCourseAction(courseId: string, formData: FormData) {
  const { client } = await requireCourseStaff();
  const fields = courseFields(formData);
  const { data, error } = await client
    .from("courses")
    .update(fields)
    .eq("id", courseId)
    .select("id")
    .maybeSingle();
  if (error)
    throw new Error(`No se pudo actualizar el curso: ${error.message}`);
  if (!data)
    throw new Error("Curso no encontrado o sin permiso para actualizarlo.");
  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath(`/courses/${courseId}`);
  revalidatePath(`/courses/${fields.slug}`);
  revalidateCourses();
}

export async function deleteCourseAction(courseId: string) {
  const { client } = await requireCourseStaff();
  const { data, error } = await client
    .from("courses")
    .delete()
    .eq("id", courseId)
    .select("id")
    .maybeSingle();
  if (error) throw new Error(`No se pudo eliminar el curso: ${error.message}`);
  if (!data)
    throw new Error("Curso no encontrado o sin permiso para eliminarlo.");
  revalidateCourses();
}

export async function seedDemoCoursesAction() {
  throw new Error(
    "La creación de cursos de demostración está deshabilitada en el sistema académico.",
  );
}
