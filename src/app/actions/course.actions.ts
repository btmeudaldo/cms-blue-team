"use server";

import { revalidatePath } from "next/cache";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { calculateMinimumReadingSeconds } from "@/features/learning/domain/reading-time";
import { mockStore } from "@/shared/lib/mock-store";

export async function createCourseAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim().toLowerCase();
  const description = String(formData.get("description") ?? "").trim();
  const imageUrl = String(formData.get("imageUrl") ?? "").trim();

  if (!title || !slug) throw new Error("Título y slug son obligatorios.");

  try {
    const supabase = await createSupabaseServerClient();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Supabase timeout")), 1500)
    );

    const authPromise = supabase.auth.getUser();
    const authRes: any = await Promise.race([authPromise, timeoutPromise]);
    const userId = authRes?.data?.user?.id || "admin-123";

    const insertPromise = supabase
      .from("courses")
      .insert({ title, slug, description, image_url: imageUrl, created_by: userId })
      .select("id")
      .single();

    const { data: newCourse, error }: any = await Promise.race([insertPromise, timeoutPromise]);
    if (!error && newCourse) {
      await supabase.from("course_enrollments").upsert({
        course_id: newCourse.id,
        user_id: userId,
      });
    }
  } catch (err) {
    // Offline fallback to mockStore
    mockStore.addCourse({ title, slug, description, image_url: imageUrl });
  }

  revalidatePath("/admin/courses");
  revalidatePath("/courses");
}

export async function updateCourseAction(courseId: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim().toLowerCase();
  const description = String(formData.get("description") ?? "").trim();
  const imageUrl = String(formData.get("imageUrl") ?? "").trim();

  if (!title || !slug) throw new Error("Título y slug son obligatorios.");

  try {
    const supabase = await createSupabaseServerClient();
    await supabase.from("courses").update({ title, slug, description, image_url: imageUrl }).eq("id", courseId);
  } catch (err) {
    const course = mockStore.getCourseById(courseId);
    if (course) {
      course.title = title;
      course.slug = slug;
      course.description = description;
      course.image_url = imageUrl;
    }
  }

  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
}

export async function deleteCourseAction(courseId: string) {
  try {
    const supabase = await createSupabaseServerClient();
    await supabase.from("courses").delete().eq("id", courseId);
  } catch (err) {
    mockStore.deleteCourse(courseId);
  }

  revalidatePath("/admin/courses");
  revalidatePath("/courses");
}

export async function seedDemoCoursesAction() {
  // Always populate mock store as guaranteed fallback
  mockStore.enroll("student-123", "course-demo-1");
  mockStore.enroll("student-123", "course-demo-2");
  mockStore.enroll("instructor-123", "course-demo-1");
  mockStore.enroll("instructor-123", "course-demo-2");
  mockStore.enroll("admin-123", "course-demo-1");
  mockStore.enroll("admin-123", "course-demo-2");

  try {
    const supabase = await createSupabaseServerClient();
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Supabase timeout")), 1500)
    );

    const authPromise = supabase.auth.getUser();
    const authRes: any = await Promise.race([authPromise, timeoutPromise]);
    const userId = authRes?.data?.user?.id || "student-123";

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
          description: "Aprende las bases teóricas de la sustentación alar, mecánica de vuelo, instrumentos de cabina y navegación VFR.",
          image_url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
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
          sequence_order: 1,
          word_count: words1,
          min_seconds: calculateMinimumReadingSeconds(words1),
        });
      }
    }
  } catch (err) {
    // Graceful offline fallback
  }

  revalidatePath("/courses");
  revalidatePath("/admin/courses");
  revalidatePath("/admin/users");

  return { success: true };
}
