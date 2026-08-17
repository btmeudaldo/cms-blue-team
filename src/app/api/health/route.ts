import { NextResponse } from "next/server";
import dns from "node:dns";
import { getSupabasePublicEnv } from "@/shared/lib/supabase/env";

try {
  dns.setDefaultResultOrder("ipv4first");
} catch {}

export async function GET() {
  try {
    const { url, publishableKey } = getSupabasePublicEnv();
    const baseUrl = url.replace(/\/+$/, "");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(`${baseUrl}/auth/v1/health`, {
      headers: { apikey: publishableKey },
      cache: "no-store",
      signal: controller.signal,
    }).finally(() => clearTimeout(timeoutId));

    // A non-2xx response still proves that the Supabase endpoint is reachable.
    // Authenticated requests may legitimately return 401/403 without a user session.
    if (response.status < 500) {
      return NextResponse.json({ status: "online", source: "supabase" });
    }

    return NextResponse.json(
      {
        status: "offline",
        source: "supabase",
        error: `Supabase Auth respondió HTTP ${response.status}`,
      },
      { status: 503 },
    );
  } catch (error: any) {
    console.error(
      "[health] Supabase is unreachable:",
      error,
      "Cause:",
      error?.cause,
    );
    return NextResponse.json(
      {
        status: "offline",
        source: "supabase",
        error:
          error instanceof Error
            ? `${error.message} (${error.cause ?? "no cause"})`
            : "Error desconocido",
      },
      { status: 503 },
    );
  }
}
