"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import {
  getDemoAccount,
  type DemoRole,
} from "@/features/learning/domain/demo-account";
import { mockStore } from "@/shared/lib/mock-store";

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (!email || !password) {
    return { error: "Por favor ingresa tu correo y contraseña." };
  }

  const isValidPassword =
    password === "blueteam" ||
    password === process.env.DEMO_STUDENT_PASSWORD ||
    password === process.env.DEMO_ADMIN_PASSWORD;

  try {
    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) {
      const cookieStore = await cookies();
      cookieStore.set("demo_email", email, { path: "/" });
      redirect("/courses");
    }
  } catch (err) {
    // Supabase offline or mock mode fallback
  }

  if (!isValidPassword) {
    return {
      error: "Credenciales inválidas. Comprueba tu correo y contraseña.",
    };
  }

  // Resilient fallback for testing with valid password
  const mockProfiles = mockStore.getProfiles();
  const match = mockProfiles.find(
    (p) => p.email.toLowerCase() === email.toLowerCase() || p.id === email,
  );
  const userRole =
    match?.role ||
    (email.includes("admin")
      ? "admin"
      : email.includes("inst")
        ? "instructor"
        : "student");

  const cookieStore = await cookies();
  cookieStore.set("demo_email", email, { path: "/" });
  cookieStore.set("demo_role", userRole, { path: "/" });

  redirect(userRole === "student" ? "/courses" : "/admin");
}

export async function signUpAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const fullName = String(formData.get("fullName") ?? "").trim();

  if (!email || !password) {
    return { error: "Por favor ingresa tu correo y contraseña." };
  }

  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    if (error) {
      // Fallback
    } else if (data.user) {
      const cookieStore = await cookies();
      cookieStore.set("demo_email", email, { path: "/" });
      cookieStore.set("demo_role", "student", { path: "/" });
      redirect("/courses");
    }
  } catch (err) {}

  const cookieStore = await cookies();
  cookieStore.set("demo_email", email, { path: "/" });
  cookieStore.set("demo_role", "student", { path: "/" });

  redirect("/courses");
}

export async function demoUserSelectLoginAction(email: string, role: string) {
  const cookieStore = await cookies();
  cookieStore.set("demo_email", email, { path: "/" });
  cookieStore.set("demo_role", role, { path: "/" });

  return { redirectTo: role === "student" ? "/courses" : "/admin" };
}

export async function demoLoginAction(targetRole: DemoRole) {
  const cookieStore = await cookies();
  const email =
    targetRole === "admin"
      ? "admin@blueteam.com"
      : targetRole === "instructor"
        ? "instructor@blueteam.com"
        : "student@blueteam.com";

  cookieStore.set("demo_email", email, { path: "/" });
  cookieStore.set("demo_role", targetRole, { path: "/" });

  return { redirectTo: targetRole === "student" ? "/courses" : "/admin" };
}

export async function signOutAction() {
  try {
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
  } catch (err) {}

  const cookieStore = await cookies();
  cookieStore.set("demo_email", "", { path: "/", expires: new Date(0) });
  cookieStore.set("demo_role", "", { path: "/", expires: new Date(0) });
  redirect("/login");
}
