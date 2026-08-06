"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { seedDemoCoursesAction } from "@/app/actions/course.actions";

type SeedDemoButtonProps = {
  label?: string;
  variant?: "primary" | "secondary";
};

export function SeedDemoButton({
  label = "Generar Cursos Demo",
  variant = "secondary",
}: SeedDemoButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSeed() {
    setLoading(true);
    setErrorMsg(null);

    try {
      await seedDemoCoursesAction();
      router.refresh();
    } catch (err) {
      console.error("Error al sembrar cursos demo:", err);
      setErrorMsg((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="inline-flex flex-col items-center">
      <button
        type="button"
        disabled={loading}
        onClick={handleSeed}
        className={`inline-flex items-center gap-2 rounded-xl text-xs font-bold transition-all cursor-pointer disabled:opacity-50 ${
          variant === "primary"
            ? "bg-[#1a80ff] px-5 py-2.5 text-white shadow-md shadow-blue-500/20 hover:bg-[#0066e6]"
            : "border border-blue-200 dark:border-blue-800 bg-white dark:bg-slate-800 px-4 py-2 text-[#1a80ff] dark:text-blue-400 shadow-xs hover:bg-blue-50 dark:hover:bg-slate-700"
        }`}
      >
        <svg
          className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          {loading ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12a8 8 0 018-8v8H4z" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          )}
        </svg>
        <span>{loading ? "Generando lecciones..." : label}</span>
      </button>

      {errorMsg && (
        <span className="mt-1 text-[11px] font-semibold text-rose-600 dark:text-rose-400">
          ⚠ {errorMsg}
        </span>
      )}
    </div>
  );
}
