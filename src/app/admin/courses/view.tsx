import { safeRedirect } from "@/shared/lib/client-navigation";

import { Header } from "@/shared/components/header";
import {
  createCourseAction,
  deleteCourseAction,
} from "@/app/actions/course.actions";
import {
  getResilientCourses,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";
import { AdminCoursesClientView } from "@/features/learning/components/admin-courses-client-view";

export async function renderAdminCoursesPage() {
  const { user, profile } = await getResilientUser();

  if (
    profile?.role !== "superadmin" &&
    profile?.role !== "admin" &&
    profile?.role !== "instructor"
  )
    safeRedirect("/courses");

  // Fetch courses with resilient fallback
  const courses = await getResilientCourses(user.id, true);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={profile?.role}
      />

      <AdminCoursesClientView
        courses={courses}
        createCourseAction={createCourseAction}
        deleteCourseAction={deleteCourseAction}
      />
    </div>
  );
}
