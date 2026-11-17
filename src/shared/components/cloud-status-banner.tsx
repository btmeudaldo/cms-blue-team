"use client";

import { useEffect, useState } from "react";
import { getSupabasePublicEnv } from "@/shared/lib/supabase/env";

async function checkSupabaseReachable(): Promise<boolean> {
  try {
    const { url, publishableKey } = getSupabasePublicEnv();
    const baseUrl = url.replace(/\/+$/, "");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    try {
      const res = await fetch(`${baseUrl}/auth/v1/health`, {
        headers: { apikey: publishableKey },
        cache: "no-store",
        signal: controller.signal,
      });
      return res.status < 500;
    } finally {
      clearTimeout(timeoutId);
    }
  } catch {
    return false;
  }
}

export function CloudStatusBanner() {
  const [status, setStatus] = useState<"checking" | "online" | "offline">(
    "checking",
  );
  const [consecutiveFailures, setConsecutiveFailures] = useState(0);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    async function checkHealth() {
      setStatus("checking");
      const ok = await checkSupabaseReachable();
      if (ok) {
        setConsecutiveFailures(0);
        setStatus("online");
      } else {
        setConsecutiveFailures((failures) => failures + 1);
      }
    }

    checkHealth();
    const interval = setInterval(checkHealth, 30000);
    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV !== "production") return null;

  if (
    status === "online" ||
    (status === "checking" && consecutiveFailures < 2)
  ) {
    return null;
  }

  return (
    <div className="bg-amber-500 dark:bg-amber-600 text-slate-950 dark:text-white px-4 py-2 text-xs font-extrabold text-center flex items-center justify-center gap-2 shadow-md animate-in slide-in-from-top duration-200 border-b border-amber-600">
      <span className="text-sm">⚠️</span>
      <span>
        Aviso: Sin conexión con Supabase Cloud. La plataforma está operando en
        Modo Resiliente Local con datos guardados.
      </span>
      <button
        type="button"
        onClick={() => {
          setConsecutiveFailures(0);
          setStatus("checking");
          void checkSupabaseReachable().then((ok) => {
            if (ok) setStatus("online");
            else setConsecutiveFailures(2);
          });
        }}
        className="ml-2 rounded-lg bg-slate-950/20 hover:bg-slate-950/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white font-bold cursor-pointer"
      >
        Reintentar
      </button>
    </div>
  );
}
