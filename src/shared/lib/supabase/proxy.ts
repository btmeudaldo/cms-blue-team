import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { getSupabasePublicEnv } from "./env";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });
  const { publishableKey, url } = getSupabasePublicEnv();

  const supabase = createServerClient(url, publishableKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(values) {
        values.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        values.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
      },
    },
  });

  try {
    const getUserPromise = supabase.auth.getUser();
    const timeoutPromise = new Promise<{ data: { user: null } }>((resolve) =>
      setTimeout(() => resolve({ data: { user: null } }), 1000),
    );

    const {
      data: { user },
    } = await Promise.race([getUserPromise, timeoutPromise]);

    // Auto-healing: If a valid Supabase user session is present, purge leftover demo cookies
    if (user) {
      if (
        request.cookies.has("demo_role") ||
        request.cookies.has("demo_email")
      ) {
        response.cookies.set("demo_role", "", {
          path: "/",
          expires: new Date(0),
        });
        response.cookies.set("demo_email", "", {
          path: "/",
          expires: new Date(0),
        });
      }
    }
  } catch {}

  return response;
}
