"use client";

import { useEffect, useState } from "react";

export function CloudStatusBanner() {
  const [status, setStatus] = useState<"checking" | "online" | "offline">(
    "checking",
  );
  const [consecutiveFailures, setConsecutiveFailures] = useState(0);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    async function checkHealth() {
      setStatus("checking");
      try {
        const res = await fetch("/api/health", { cache: "no-store" });
        if (res.ok) {
          setConsecutiveFailures(0);
          setStatus("online");
        } else {
          setConsecutiveFailures((failures) => failures + 1);
        }
      } catch {
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
          void fetch("/api/health", { cache: "no-store" })
            .then((res) => {
              if (res.ok) setStatus("online");
              else setConsecutiveFailures(2);
            })
            .catch(() => setConsecutiveFailures(2));
        }}
        className="ml-2 rounded-lg bg-slate-950/20 hover:bg-slate-950/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white font-bold cursor-pointer"
      >
        Reintentar
      </button>
    </div>
  );
}
