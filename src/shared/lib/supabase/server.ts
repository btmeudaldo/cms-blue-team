import { createClient } from "@supabase/supabase-js";
import { createSupabaseBrowserClient } from "./browser";
import { getSupabaseAdminEnv } from "./env";

export async function createSupabaseServerClient() {
  return createSupabaseBrowserClient();
}

export function createSupabaseAdminClient() {
  try {
    const { serviceRoleKey, url } = getSupabaseAdminEnv();
    return createClient(url, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
  } catch {
    return null;
  }
}
