import Link from "next/link";
import { redirect } from "next/navigation";

import { Header } from "@/shared/components/header";
import {
  getResilientAllProgress,
  getResilientCourses,
  getResilientProfiles,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";
import { AuditFilterTable } from "@/features/learning/components/audit-filter-table";

export default async function AdminProgressAuditPage() {
  const { user, profile: currentProfile } = await getResilientUser();

  if (
    currentProfile?.role !== "admin" &&
    currentProfile?.role !== "instructor"
  ) {
    redirect("/courses");
  }

  const [profiles, progressRecords, courses] = await Promise.all([
    getResilientProfiles(),
    getResilientAllProgress(),
    getResilientCourses(user.id, true),
  ]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={currentProfile?.full_name}
        role={currentProfile?.role}
      />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <Link
                href="/admin"
                className="hover:text-[#1a80ff] transition-colors"
              >
                Administración
              </Link>
              <span>&rsaquo;</span>
              <span className="text-slate-900 dark:text-white">
                Auditoría de Tiempos
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Registro de Tiempos Anticheating
            </h1>
          </div>

          <Link
            href="/admin"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            &larr; Volver al Panel Admin
          </Link>
        </div>

        {/* Interactive Audit Table with Student & Course Filters */}
        <AuditFilterTable
          profiles={profiles}
          progressRecords={progressRecords}
          courses={courses}
        />
      </main>
    </div>
  );
}
