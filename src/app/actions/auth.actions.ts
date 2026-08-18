"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createSupabaseServerClient } from "@/shared/lib/supabase/server";
import {
  getDemoAccount,
  getDemoRedirectPath,
  type DemoRole,
} from "@/features/learning/domain/demo-account";
import { mockStore } from "@/shared/lib/mock-store";

function withTimeout<T>(promise: Promise<T>, ms = 1500): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Timeout of ${ms}ms exceeded`));
    }, ms);

    promise
      .then((res) => {
        clearTimeout(timer);
        resolve(res);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();

  if (!email || !password) {
    return { error: "Por favor ingresa tu correo y contraseña." };
  }

  const isValidPassword =
    password === "blueteam" ||
    password === process.env.DEMO_STUDENT_PASSWORD ||
    password === process.env.DEMO_INSTRUCTOR_PASSWORD ||
    password === process.env.DEMO_ADMIN_PASSWORD;

  try {
    const supabase = await createSupabaseServerClient();
    const res: any = await withTimeout(
      supabase.auth.signInWithPassword({
        email,
        password,
      }),
      1500,
    ).catch(() => ({ data: null, error: true }));

    if (!res.error && res.data?.user) {
      const cookieStore = await cookies();
      cookieStore.set("demo_email", email, { path: "/" });
      cookieStore.set("demo_role", "", { path: "/", expires: new Date(0) });
      redirect("/courses");
    }
  } catch (err: any) {
    if (err?.digest?.startsWith("NEXT_REDIRECT")) throw err;
    console.error("[signInAction] Supabase login failed or timed out", err);
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
    const res: any = await withTimeout(
      supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
        },
      }),
      1500,
    ).catch(() => ({ data: null, error: true }));

    if (!res.error && res.data?.user) {
      const cookieStore = await cookies();
      cookieStore.set("demo_email", email, { path: "/" });
      cookieStore.set("demo_role", "student", { path: "/" });
      redirect("/courses");
    }
  } catch (err: any) {
    if (err?.digest?.startsWith("NEXT_REDIRECT")) throw err;
  }

  const cookieStore = await cookies();
  cookieStore.set("demo_email", email, { path: "/" });
  cookieStore.set("demo_role", "student", { path: "/" });

  redirect("/courses");
}

export async function demoUserSelectLoginAction(email: string, role: string) {
  try {
    const supabase = await createSupabaseServerClient();
    const res = await withTimeout(
      supabase.auth.signInWithPassword({
        email,
        password: "blueteam",
      }),
      1500,
    ).catch(() => ({ data: null, error: true }));

    if (!res.error && res.data?.user) {
      const cookieStore = await cookies();
      cookieStore.set("demo_email", "", { path: "/", expires: new Date(0) });
      cookieStore.set("demo_role", "", { path: "/", expires: new Date(0) });
      return { redirectTo: role === "student" ? "/courses" : "/admin" };
    }
  } catch (err: any) {
    if (err?.digest?.startsWith("NEXT_REDIRECT")) throw err;
  }

  const cookieStore = await cookies();
  cookieStore.set("demo_email", email, { path: "/" });
  cookieStore.set("demo_role", role, { path: "/" });

  return { redirectTo: role === "student" ? "/courses" : "/admin" };
}

export async function demoLoginAction(targetRole: DemoRole) {
  const demoAccount = getDemoAccount(targetRole);
  const redirectTo = getDemoRedirectPath(targetRole);

  try {
    const supabase = await createSupabaseServerClient();
    const result = await withTimeout(
      supabase.auth.signInWithPassword(demoAccount),
    );

    if (!result.error && result.data.user) {
      const cookieStore = await cookies();
      cookieStore.set("demo_email", "", { path: "/", expires: new Date(0) });
      cookieStore.set("demo_role", "", { path: "/", expires: new Date(0) });
      return { redirectTo };
    }
  } catch {
    // The demo fallback below keeps the application usable when Auth is offline.
  }

  const cookieStore = await cookies();
  cookieStore.set("demo_email", demoAccount.email, { path: "/" });
  cookieStore.set("demo_role", targetRole, { path: "/" });

  return { redirectTo };
}

export async function signOutAction() {
  try {
    const supabase = await createSupabaseServerClient();
    await withTimeout(supabase.auth.signOut(), 1000).catch(() => null);
  } catch (err: any) {
    if (err?.digest?.startsWith("NEXT_REDIRECT")) throw err;
  }

  const cookieStore = await cookies();
  cookieStore.set("demo_email", "", { path: "/", expires: new Date(0) });
  cookieStore.set("demo_role", "", { path: "/", expires: new Date(0) });
  redirect("/login");
}
