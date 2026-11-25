import { listLessonMediaAction } from "@/app/actions/media.actions";
import { AdminMediaClientView } from "@/features/learning/components/admin-media-client-view";
import { Header } from "@/shared/components/header";
import { safeRedirect } from "@/shared/lib/client-navigation";
import { getResilientUser } from "@/shared/lib/supabase/resilient";

export async function renderAdminMediaPage() {
  const { user, profile } = await getResilientUser();

  if (
    profile?.role !== "superadmin" &&
    profile?.role !== "admin" &&
    profile?.role !== "instructor"
  ) {
    safeRedirect("/courses");
  }

  const items = await listLessonMediaAction({ limit: 500 });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={profile?.role}
      />
      <AdminMediaClientView initialItems={items} />
    </div>
  );
}
