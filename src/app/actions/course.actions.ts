"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export async function createCourseAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim().toLowerCase();
  const description = String(formData.get("description") ?? "").trim();
  if (!title || !slug) throw new Error("Title and slug are required");

  const supabase = await createSupabaseServerClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) throw new Error("Unauthenticated");
  const { error } = await supabase.from("courses").insert({ title, slug, description, created_by: auth.user.id });
  if (error) throw new Error(error.message);
  revalidatePath("/admin/courses");
}

export async function updateCourseAction(courseId: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim().toLowerCase();
  const description = String(formData.get("description") ?? "").trim();
  if (!title || !slug) throw new Error("Title and slug are required");
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("courses").update({ title, slug, description }).eq("id", courseId);
  if (error) throw new Error(error.message);
  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath("/admin/courses");
}
