import { cache } from "react";
import { createSupabaseServerClient } from "./server";

export class AuthenticationRequiredError extends Error {
  constructor() {
    super("Debes iniciar sesión con una cuenta verificada.");
  }
}

export const requireVerifiedSession = cache(async () => {
  const client = await createSupabaseServerClient();
  const { data: auth, error: authError } = await client.auth.getUser();
  if (authError || !auth.user) throw new AuthenticationRequiredError();
  const { data: profile, error } = await client
    .from("profiles")
    .select("role, full_name, email, dni_nie")
    .eq("id", auth.user.id)
    .maybeSingle();

  // User-editable metadata and legacy demo cookies cannot grant permissions.
  const role = profile?.role as unknown;
  if (
    error ||
    !profile ||
    (role !== "admin" && role !== "instructor" && role !== "student")
  ) {
    throw new Error(
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
