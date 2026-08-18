import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { getSupabaseAdminEnv, getSupabasePublicEnv } from "./env";

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  const { publishableKey, url } = getSupabasePublicEnv();

  return createServerClient(url, publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(values) {
        try {
          values.forEach(({ name, options, value }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // Server Components cannot persist refreshed auth cookies.
        }
      },
    },
  });
}

export function createSupabaseAdminClient() {
  try {
    const { serviceRoleKey, url } = getSupabaseAdminEnv();
    const { createClient } = require("@supabase/supabase-js");
    return createClient(url, serviceRoleKey);
  } catch {
    return null;
  }
}
