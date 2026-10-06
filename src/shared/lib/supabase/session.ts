import { cache } from "react";
import { createSupabaseServerClient, createSupabaseAdminClient } from "./server";

export class AuthenticationRequiredError extends Error {
  constructor(message = "Debes iniciar sesión con una cuenta verificada.") {
    super(message);
  }
}

export const requireVerifiedSession = cache(async () => {
  const client = await createSupabaseServerClient();
  const { data: auth, error: authError } = await client.auth.getUser();
  if (authError || !auth.user) throw new AuthenticationRequiredError();

  let profile: {
    role?: string;
    full_name?: string | null;
    email?: string | null;
    dni_nie?: string | null;
  } | null = null;

  try {
    const { data, error } = await client
      .from("profiles")
      .select("role, full_name, email, dni_nie")
      .eq("id", auth.user.id)
      .maybeSingle();

    if (!error && data) {
      profile = data;
    }
  } catch {
    // Client error, proceed to fallback
  }

  // Resilient fallback with admin client to bypass RLS policy recursion or email-keyed profile lookup
  if (!profile) {
    try {
      const admin = createSupabaseAdminClient();
      if (admin) {
        const { data: adminData } = await admin
          .from("profiles")
          .select("role, full_name, email, dni_nie")
          .eq("id", auth.user.id)
          .maybeSingle();

        if (adminData) {
          profile = adminData;
        } else if (auth.user.email) {
          const { data: adminByEmail } = await admin
            .from("profiles")
            .select("role, full_name, email, dni_nie")
            .eq("email", auth.user.email)
            .maybeSingle();

          if (adminByEmail) {
            profile = adminByEmail;
          }
        }
      }
    } catch {
      // Fallback failed
    }
  }

  // User-editable metadata and legacy demo cookies cannot grant permissions.
  const role = profile?.role as unknown;
  if (
    !profile ||
    (role !== "admin" && role !== "instructor" && role !== "student")
  ) {
    throw new AuthenticationRequiredError(
      "No se pudo verificar el perfil de acceso. Contacta con la escuela.",
    );
  }
  return {
    client,
    user: auth.user,
    profile: {
      role,
      full_name: String(profile.full_name ?? ""),
      email: String(profile.email ?? auth.user.email ?? ""),
      dni_nie: profile.dni_nie ? String(profile.dni_nie) : undefined,
    },
  };
});
