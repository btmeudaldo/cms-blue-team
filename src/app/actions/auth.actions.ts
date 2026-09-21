"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import type { DemoRole } from "@/features/learning/domain/demo-account";

async function clearLegacyIdentity() {
  const cookieStore = await cookies();
  for (const name of ["demo_email", "demo_role"]) {
    cookieStore.set(name, "", { path: "/", expires: new Date(0) });
  }
}

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password)
    return { error: "Por favor ingresa tu correo y contraseña." };
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error || !data.user || !data.session) {
      return {
        error: "Credenciales inválidas. Comprueba tu correo y contraseña.",
      };
    }
  } catch {
    return {
      error:
        "No se pudo contactar con el servicio de acceso. Inténtalo de nuevo.",
    };
  }
  await clearLegacyIdentity();
  redirect("/courses");
}

export async function signUpAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const fullName = String(formData.get("fullName") ?? "").trim();
  if (!email || !password)
    return { error: "Por favor ingresa tu correo y contraseña." };
  try {
    const supabase = await createSupabaseServerClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    if (error || !data.user)
      return {
        error: "No se pudo completar el registro. Contacta con la escuela.",
      };
    if (!data.session)
      return {
        message:
          "Revisa tu correo para confirmar la cuenta antes de iniciar sesión.",
      };
  } catch {
    return {
      error:
        "No se pudo contactar con el servicio de registro. Inténtalo de nuevo.",
    };
  }
  await clearLegacyIdentity();
  redirect("/courses");
}

// Reject old clients explicitly; hiding their buttons alone would leave an endpoint open.
export async function demoUserSelectLoginAction(_email: string, _role: string) {
  return {
    error:
      "El acceso de demostración está deshabilitado. Utiliza tu cuenta de la escuela.",
  };
}

export async function demoLoginAction(_targetRole: DemoRole) {
  return {
    error:
      "El acceso de demostración está deshabilitado. Utiliza tu cuenta de la escuela.",
  };
}

export async function signOutAction() {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signOut();
  if (error)
    throw new Error("No se pudo cerrar la sesión. Inténtalo de nuevo.");
  await clearLegacyIdentity();
  redirect("/login");
}
