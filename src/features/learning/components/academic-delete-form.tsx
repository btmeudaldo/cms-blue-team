"use client";

import { useActionState } from "react";

type AcademicDeleteFormProps = {
  action: () => Promise<void | { error: string }>;
  label: string;
};

export function AcademicDeleteForm({ action, label }: AcademicDeleteFormProps) {
  const [state, formAction, pending] = useActionState(
    async () => await action(),
    undefined,
  );

  return (
    <form action={formAction} className="max-w-xs space-y-2">
      <button
        type="submit"
        title={label}
        aria-label={label}
        disabled={pending}
        className="rounded-xl border border-slate-200 dark:border-slate-800 p-2 text-slate-400 hover:border-rose-200 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-600 transition-colors cursor-pointer disabled:cursor-wait disabled:opacity-50"
      >
        <svg
          aria-hidden="true"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
      {state?.error && (
        <p role="alert" className="text-xs text-rose-700 dark:text-rose-300">
          {state.error}
        </p>
      )}
    </form>
  );
}
