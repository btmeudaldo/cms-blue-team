"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { calculateMinimumReadingSeconds } from "@/features/learning/domain/reading-time";

export async function createCourseAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "")
    .trim()
    .toLowerCase();
  const description = String(formData.get("description") ?? "").trim();
  const imageUrl = String(formData.get("imageUrl") ?? "").trim();

  if (!title || !slug) throw new Error("Título y slug son obligatorios.");

  const supabase = await createSupabaseServerClient();
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) throw new Error("Unauthenticated");

  const { data: newCourse, error } = await supabase
    .from("courses")
    .insert({
      title,
      slug,
      description,
      image_url: imageUrl || null,
      created_by: auth.user.id,
    })
    .select("id")
    .single();
  if (error) throw new Error(error.message);

  const { error: enrollmentError } = await supabase
    .from("course_enrollments")
    .upsert({ course_id: newCourse.id, user_id: auth.user.id });
  if (enrollmentError) throw new Error(enrollmentError.message);

  revalidatePath("/admin/courses");
  revalidatePath("/courses");
}

export async function updateCourseAction(courseId: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "")
    .trim()
    .toLowerCase();
  const description = String(formData.get("description") ?? "").trim();
  const imageUrl = String(formData.get("imageUrl") ?? "").trim();

  if (!title || !slug) throw new Error("Título y slug son obligatorios.");

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase
    .from("courses")
    .update({ title, slug, description, image_url: imageUrl || null })
    .eq("id", courseId);
  if (error) throw new Error(error.message);

  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
}

export async function deleteCourseAction(courseId: string) {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.from("courses").delete().eq("id", courseId);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/courses");
  revalidatePath("/courses");
}

export async function seedDemoCoursesAction() {
  const supabase = await createSupabaseServerClient();
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) throw new Error("Unauthenticated");
  const userId = auth.user.id;

  const slug1 = "fundamentos-pilotaje-privado-ppl";
  let { data: existingCourse1 } = await supabase
    .from("courses")
    .select("id")
    .eq("slug", slug1)
    .maybeSingle();

  let course1Id = existingCourse1?.id;

  if (!course1Id) {
    const { data: newC1 } = await supabase
      .from("courses")
      .insert({
        title: "Fundamentos de Pilotaje Privado & Aerodinámica (PPL)",
        slug: slug1,
        description:
          "Aprende las bases teóricas de la sustentación alar, mecánica de vuelo, instrumentos de cabina y navegación VFR.",
        image_url:
          "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
        created_by: userId,
      })
      .select("id")
      .single();
    course1Id = newC1?.id;
  }

  if (course1Id) {
    await supabase.from("course_enrollments").upsert({
      course_id: course1Id,
      user_id: userId,
    });

    const { count: lessonCount1 } = await supabase
      .from("lessons")
      .select("*", { count: "exact", head: true })
      .eq("course_id", course1Id);

    if (!lessonCount1 || lessonCount1 === 0) {
      const content1 = `
          <h2>1. Principios de Aerodinámica y Sustentación</h2>
          <p>La aerodinámica es la rama de la mecánica de fluidos que estudia las fuerzas que actúan sobre un cuerpo cuando se mueve a través del aire.</p>
          <div className="my-6 overflow-hidden rounded-2xl border border-sky-500/30 bg-sky-950/30 p-5 shadow-lg">
            <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80" alt="Fuerzas Aerodinámicas" className="w-full h-64 object-cover rounded-xl my-2" />
          </div>
          <p>En aviación, deben equilibrarse cuatro fuerzas fundamentales: Sustentación (Lift), Peso (Weight), Empuje (Thrust) y Resistencia (Drag).</p>
        `;

      const words1 = content1.split(/\s+/).filter(Boolean).length;
      await supabase.from("lessons").insert({
        course_id: course1Id,
        title: "1. Principios de Aerodinámica y Sustentación",
        slug: "principios-aerodinamica-sustentacion",
        content_html: content1,
        lesson_order: 1,
        sequence_order: 1,
        word_count: words1,
        min_seconds: calculateMinimumReadingSeconds(words1),
      });
    }
  }
  revalidatePath("/courses");
  revalidatePath("/admin/courses");
  revalidatePath("/admin/users");

  return { success: true };
}
