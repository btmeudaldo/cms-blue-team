"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import { calculateMinimumReadingSeconds } from "@/features/learning/domain/reading-time";
import { mockStore } from "@/shared/lib/mock-store";

export async function createCourseAction(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "")
    .trim()
    .toLowerCase();
  const description = String(formData.get("description") ?? "").trim();
  const imageUrl = String(formData.get("imageUrl") ?? "").trim();

  if (!title || !slug) throw new Error("Título y slug son obligatorios.");

  try {
    const supabase = await createSupabaseServerClient();
    const { data: auth, error: authError } = await supabase.auth.getUser();
    if (!authError && auth?.user) {
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

      if (!error && newCourse) {
        await supabase
          .from("course_enrollments")
          .upsert({ course_id: newCourse.id, user_id: auth.user.id });

        revalidatePath("/admin/courses");
        revalidatePath("/courses");
        revalidatePath("/admin/users");
        redirect(`/admin/courses/${newCourse.id}`);
      }
    }
  } catch (err) {
    // Supabase offline / mock mode fallback
  }

  // Fallback to mockStore for resilient local creation
  const newMock = mockStore.addCourse({
    title,
    slug,
    description,
    image_url: imageUrl || undefined,
  });

  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  revalidatePath("/admin/users");

  redirect(`/admin/courses/${newMock.id}`);
}

export async function updateCourseAction(courseId: string, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slug = String(formData.get("slug") ?? "")
    .trim()
    .toLowerCase();
  const description = String(formData.get("description") ?? "").trim();
  const imageUrl = String(formData.get("imageUrl") ?? "").trim();

  if (!title || !slug) throw new Error("Título y slug son obligatorios.");

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase
      .from("courses")
      .update({ title, slug, description, image_url: imageUrl || null })
      .eq("id", courseId);
    if (!error) {
      revalidatePath(`/admin/courses/${courseId}`);
      revalidatePath("/admin/courses");
      revalidatePath("/courses");
      revalidatePath("/admin/users");
      return;
    }
  } catch (err) {}

  // Fallback to mockStore
  const course = mockStore.getCourseById(courseId);
  if (course) {
    course.title = title;
    course.slug = slug;
    course.description = description;
    if (imageUrl) course.image_url = imageUrl;
  }

  revalidatePath(`/admin/courses/${courseId}`);
  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  revalidatePath("/admin/users");
}

export async function deleteCourseAction(courseId: string) {
  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from("courses").delete().eq("id", courseId);
    if (!error) {
      revalidatePath("/admin/courses");
      revalidatePath("/courses");
      revalidatePath("/admin/users");
      return;
    }
  } catch (err) {}

  // Fallback to mockStore
  mockStore.deleteCourse(courseId);

  revalidatePath("/admin/courses");
  revalidatePath("/courses");
  revalidatePath("/admin/users");
}

export async function seedDemoCoursesAction() {
  const supabase = await createSupabaseServerClient();
  const { data: auth, error: authError } = await supabase.auth.getUser();
  if (authError || !auth.user) throw new Error("Unauthenticated");
  const userId = auth.user.id;

  const DEMO_COURSES = [
    {
      title: "Fundamentos de Pilotaje Privado & Aerodinámica (PPL)",
      slug: "fundamentos-pilotaje-privado-ppl",
      description:
        "Aprende las bases teóricas de la sustentación alar, mecánica de vuelo, instrumentos de cabina y navegación VFR.",
      image_url:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
      lessons: [
        {
          title: "1. Principios de Aerodinámica y Sustentación Alar",
          slug: "principios-aerodinamica-sustentacion",
          content_html: `
            <h2>1. Principios de Aerodinámica y Sustentación</h2>
            <p>La aerodinámica estudia las fuerzas que actúan sobre un cuerpo al desplazarse por la atmósfera. Para mantener el vuelo estabilizado se requiere el equilibrio entre 4 fuerzas:</p>
            <div class="my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-lg">
              <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80" alt="Perfil alar y sustentación" class="w-full h-64 object-cover rounded-xl my-2" />
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center italic">Fuerzas principales: Sustentación (Lift), Empuje (Thrust), Peso (Weight) y Resistencia (Drag).</p>
            </div>
            <h3>Las Cuatro Fuerzas de Vuelo</h3>
            <ul>
              <li><strong>Sustentación (Lift):</strong> Creada por el perfil alar en virtud del Principio de Bernoulli y la Tercera Ley de Newton.</li>
              <li><strong>Empuje (Thrust):</strong> Proporcionado por el grupo motopropulsor.</li>
              <li><strong>Peso (Weight):</strong> Fuerza gravitatoria hacia abajo.</li>
              <li><strong>Resistencia (Drag):</strong> Oposición aerodinámica al avance.</li>
            </ul>
          `.trim(),
        },
        {
          title: "2. Instrumentación de Cabina Six-Pack & Variómetros",
          slug: "instrumentacion-cabina-sixpack",
          content_html: `
            <h2>2. Relojes Primarios de Navegación VFR</h2>
            <p>El panel básico de pilotaje se organiza en torno a 6 instrumentos esenciales alimentados por el sistema Pitot-Estática y giroscópicos:</p>
            <div class="my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-lg">
              <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80" alt="Cabina de mando" class="w-full h-64 object-cover rounded-xl my-2" />
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center italic">Anemómetro, Horizonte Artificial, Altimétria, Coordinador de Viraje, Indicador de Rumbo y Variómetro.</p>
            </div>
            <div class="my-4 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 p-4 text-xs text-sky-900 dark:text-sky-200 font-semibold">
              <strong>✈️ Regla de Escaneo:</strong> Verifica los instrumentos cada 5 a 10 segundos alternando la mirada entre el horizonte real exterior y la actitud de morro/alabeo.
            </div>
          `.trim(),
        },
      ],
    },
    {
      title: "Meteorología Aeronáutica & Análisis METAR/TAF",
      slug: "meteorologia-aeronautica-metar-taf",
      description:
        "Estudio de frentes atmosféricos, formación de hielo, turbulencia y decodificación de partes meteorológicos en tiempo real.",
      image_url:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80",
      lessons: [
        {
          title: "1. Capas Atmosféricas, Frentes Térmicos y Vientos",
          slug: "capas-atmosfericas-frentes-vientos",
          content_html: `
            <h2>1. Estructura Atmosférica y Masa de Aire</h2>
            <p>La troposfera es la capa viva donde se desarrolla la aviación comercial y de instrucción general. Las variaciones de temperatura y presión atmosférica producen los vientos alisios y locales.</p>
            <div class="my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-lg">
              <img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80" alt="Nubes y frente frío" class="w-full h-64 object-cover rounded-xl my-2" />
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center italic">Acumulaciones nubosas de desarrollo vertical (Cumulonimbus) y techos operacionales.</p>
            </div>
          `.trim(),
        },
        {
          title: "2. Decodificación de Reportes METAR & Pronósticos TAF",
          slug: "decodificacion-reportes-metar-taf",
          content_html: `
            <h2>2. Partes Meteorológicos Reglamentarios</h2>
            <p>El código METAR expresa en formato estándar las condiciones observadas en un aeródromo específico a la hora dada.</p>
            <h3>EjemploMETAR LEMD 061200Z 24012KT 9999 FEW030 18/09 Q1018</h3>
            <ul>
              <li><strong>24012KT:</strong> Viento del rumbo 240° a 12 nudos.</li>
              <li><strong>9999:</strong> Visibilidad horizontal superior a 10 km.</li>
              <li><strong>FEW030:</strong> Escasa nubosidad a 3.000 pies AGL.</li>
              <li><strong>Q1018:</strong> Ajuste altimétrico QNH de 1018 hPa.</li>
            </ul>
          `.trim(),
        },
      ],
    },
    {
      title: "Procedimientos de Cabina & Emergencias de Vuelo",
      slug: "procedimientos-cabina-emergencias-vuelo",
      description:
        "Briefing de seguridad, listas de verificación checklist, gestión de fallas de motor y maniobras de aterrizaje forzoso.",
      image_url:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      lessons: [
        {
          title: "1. Inspección Pre-vuelo y Checklist en Rampa",
          slug: "inspeccion-prevuelo-checklist-rampa",
          content_html: `
            <h2>1. Rutina de Seguridad Walk-Around</h2>
            <p>Antes de abordar la cabina, la tripulación debe realizar la inspección exterior completa en sentido de las agujas del reloj alrededor de la estructura.</p>
            <div class="my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-lg">
              <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80" alt="Avión en rampa" class="w-full h-64 object-cover rounded-xl my-2" />
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center italic">Revisión de tubo pitot, comandos de vuelo, drenaje de combustible y presión de neumáticos.</p>
            </div>
          `.trim(),
        },
        {
          title: "2. Gestión de Fallas de Motor & Aterrizajes de Emergencia",
          slug: "gestion-fallas-motor-aterrizajes-emergencia",
          content_html: `
            <h2>2. Protocolo ABCD ante Pérdida de Potencia</h2>
            <ol>
              <li><strong>A (Airspeed):</strong> Establecer velocidad de mejor planeo (ej. 65 knots).</li>
              <li><strong>B (Best Field):</strong> Seleccionar terreno despejado en dirección al viento.</li>
              <li><strong>C (Checklist):</strong> Intentar reencendido de motor si la altura lo permite.</li>
              <li><strong>D (Declare):</strong> Transmitir MAYDAY en 121.5 MHz y activar transpondedor en 7700.</li>
            </ol>
          `.trim(),
        },
      ],
    },
  ];

  for (const cData of DEMO_COURSES) {
    let { data: existingCourse } = await supabase
      .from("courses")
      .select("id")
      .eq("slug", cData.slug)
      .maybeSingle();

    let courseId = existingCourse?.id;

    if (!courseId) {
      const { data: newC } = await supabase
        .from("courses")
        .insert({
          title: cData.title,
          slug: cData.slug,
          description: cData.description,
          image_url: cData.image_url,
          created_by: userId,
        })
        .select("id")
        .single();
      courseId = newC?.id;
    }

    if (courseId) {
      await supabase.from("course_enrollments").upsert({
        course_id: courseId,
        user_id: userId,
      });

      const { count: lessonCount } = await supabase
        .from("lessons")
        .select("*", { count: "exact", head: true })
        .eq("course_id", courseId);

      if (!lessonCount || lessonCount === 0) {
        for (let i = 0; i < cData.lessons.length; i++) {
          const l = cData.lessons[i];
          const words = l.content_html.split(/\s+/).filter(Boolean).length;
          await supabase.from("lessons").insert({
            course_id: courseId,
            title: l.title,
            slug: l.slug,
            content_html: l.content_html,
            lesson_order: i + 1,
            sequence_order: i + 1,
            word_count: words,
            min_seconds: calculateMinimumReadingSeconds(words),
          });
        }
      }
    }
  }

  // Check all existing courses in database without lessons and auto-generate 2 lessons for them too
  const { data: allCourses } = await supabase
    .from("courses")
    .select("id, title, slug");
  if (allCourses && allCourses.length > 0) {
    for (const crs of allCourses) {
      const { count: cCount } = await supabase
        .from("lessons")
        .select("*", { count: "exact", head: true })
        .eq("course_id", crs.id);

      if (!cCount || cCount === 0) {
        const l1Content = `
          <h2>1. Introducción Teórica a ${crs.title}</h2>
          <p>Bienvenido al módulo de estudio aeronáutico. En esta primera unidad revisaremos los conceptos esenciales y normativas de aviación civil vigentes.</p>
          <div class="my-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-lg">
            <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80" alt="Diagrama aeronáutico" class="w-full h-64 object-cover rounded-xl my-2" />
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center italic">Instrucción teórica certificada para pilotos de la Escuela de Aviación Blue Team.</p>
          </div>
          <h3>Objetivos Operacionales</h3>
          <ul>
            <li>Comprender los principios de vuelo y maniobras aplicables a ${crs.title}.</li>
            <li>Conocer los márgenes de seguridad y limitaciones operativas de la aeronave.</li>
          </ul>
        `.trim();

        const l2Content = `
          <h2>2. Procedimientos Operativos & Prácticas de Vuelo</h2>
          <p>En esta segunda unidad abordaremos la aplicación práctica en cabina, técnicas de pilotaje y análisis de factores humanos.</p>
          <div class="my-4 rounded-2xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200 dark:border-sky-800 p-4 text-xs text-sky-900 dark:text-sky-200 font-semibold">
            <strong>✈️ Nota de Instructor:</strong> El estudio continuo de las listas de verificación checklist reduce significativamente el riesgo en todas las fases de vuelo.
          </div>
        `.trim();

        const w1 = l1Content.split(/\s+/).filter(Boolean).length;
        const w2 = l2Content.split(/\s+/).filter(Boolean).length;

        await supabase.from("lessons").insert([
          {
            course_id: crs.id,
            title: `1. Introducción Teórica a ${crs.title}`,
            slug: `${crs.slug}-leccion-1`,
            content_html: l1Content,
            lesson_order: 1,
            sequence_order: 1,
            word_count: w1,
            min_seconds: calculateMinimumReadingSeconds(w1),
          },
          {
            course_id: crs.id,
            title: `2. Procedimientos Operativos de ${crs.title}`,
            slug: `${crs.slug}-leccion-2`,
            content_html: l2Content,
            lesson_order: 2,
            sequence_order: 2,
            word_count: w2,
            min_seconds: calculateMinimumReadingSeconds(w2),
          },
        ]);
      }
    }
  }

  revalidatePath("/courses");
  revalidatePath("/admin/courses");
  revalidatePath("/admin/users");

  return { success: true };
}
