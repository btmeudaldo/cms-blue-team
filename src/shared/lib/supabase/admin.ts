import "server-only";

import { createClient } from "@supabase/supabase-js";

import { getSupabaseAdminEnv } from "./env";

export function createSupabaseAdminClient() {
  const { serviceRoleKey, url } = getSupabaseAdminEnv();

  return createClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
