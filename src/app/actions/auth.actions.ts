"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  
  if (!email || !password) {
    return { error: "Por favor ingresa tu correo y contraseña." };
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  
  if (error) {
    return { error: "Credenciales inválidas. Comprueba tu correo y contraseña o utiliza la prueba de 1-Clic Demo." };
  }

  const cookieStore = await cookies();
  cookieStore.set("demo_role", "student", { path: "/" });

  redirect("/courses");
}

export async function signUpAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const fullName = String(formData.get("fullName") ?? "").trim();
  const role = String(formData.get("role") ?? "student");

  if (!email || !password) {
    return { error: "Por favor ingresa tu correo y contraseña." };
  }
  
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName, role },
    },
  });

  if (error) {
    return { error: `Error en el registro: ${error.message}` };
  }

  if (data.user) {
    await supabase.from("profiles").upsert({
      id: data.user.id,
      email: data.user.email,
      full_name: fullName || email.split("@")[0],
      role: role === "admin" || role === "instructor" ? role : "student",
    });
  }

  const cookieStore = await cookies();
  cookieStore.set("demo_role", role, { path: "/" });

  redirect(role === "admin" || role === "instructor" ? "/admin" : "/courses");
}

export async function demoLoginAction(targetRole: "student" | "instructor" | "admin") {
  let email = "student@blueteam.com";
  let fullName = "Estudiante BlueTeam";

  if (targetRole === "instructor") {
    email = "instructor@blueteam.com";
    fullName = "Instructor BlueTeam";
  } else if (targetRole === "admin") {
    email = "admin@blueteam.com";
    fullName = "Administrador BlueTeam";
  }

  const password = "DemoPassword2026!";

  // Set demo_role cookie for instant resilient session mode
  const cookieStore = await cookies();
  cookieStore.set("demo_role", targetRole, { path: "/" });

  try {
    const supabase = await createSupabaseServerClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    
    if (signInError) {
      const { data: signUpData } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            role: targetRole,
          },
        },
      });

      if (signUpData?.user) {
        await supabase.from("profiles").upsert({
          id: signUpData.user.id,
          email: email,
          full_name: fullName,
          role: targetRole,
        });

        await supabase.auth.signInWithPassword({ email, password });
      }
    }

    const { data: userData } = await supabase.auth.getUser();
    if (userData?.user) {
      await supabase.from("profiles").upsert({
        id: userData.user.id,
        email: email,
        role: targetRole,
        full_name: fullName,
      });
    }
  } catch (err) {
    // Resilient fallback
  }

  if (targetRole === "admin" || targetRole === "instructor") {
    redirect("/admin");
  } else {
    redirect("/courses");
  }
}

export async function signOutAction() {
  try {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  } catch (err) {}

  const cookieStore = await cookies();
  cookieStore.set("demo_role", "", { path: "/", expires: new Date(0) });
  redirect("/login");
}
