import dns from "node:dns";

try {
  dns.setDefaultResultOrder("ipv4first");
} catch {}

export function getSupabasePublicEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !publishableKey) {
    throw new Error("Missing Supabase public environment variables");
  }

  return { publishableKey, url };
}

export function getSupabaseAdminEnv() {
  const { url } = getSupabasePublicEnv();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceRoleKey) throw new Error("Missing Supabase service role key");

  return { serviceRoleKey, url };
}
