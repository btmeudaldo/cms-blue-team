"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import {
  getDemoAccount,
  type DemoRole,
} from "@/features/learning/domain/demo-account";

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Por favor ingresa tu correo y contraseña." };
  }

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return {
      error:
        "Credenciales inválidas. Comprueba tu correo y contraseña o utiliza la prueba de 1-Clic Demo.",
    };
  }

  const cookieStore = await cookies();
  cookieStore.set("demo_role", "student", { path: "/" });

  redirect("/courses");
}

export async function signUpAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const fullName = String(formData.get("fullName") ?? "").trim();

  if (!email || !password) {
    return { error: "Por favor ingresa tu correo y contraseña." };
  }

  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
    },
  });

  if (error) {
    return { error: `Error en el registro: ${error.message}` };
  }

  if (!data.user) return { error: "No se pudo crear la cuenta." };

  redirect("/courses");
}

export async function demoLoginAction(targetRole: DemoRole) {
  if (process.env.NODE_ENV !== "development") {
    return {
      error: "El acceso rápido solo está disponible en el entorno local.",
    };
  }

  const account = getDemoAccount(targetRole);
  if (!account.password) {
    return { error: "Falta configurar la contraseña de demostración local." };
  }
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword(account);
  if (error)
    return { error: "La cuenta de demostración local no está disponible." };

  redirect(targetRole === "student" ? "/courses" : "/admin");
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
