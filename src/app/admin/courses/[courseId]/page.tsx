import { notFound, redirect } from "next/navigation";

import { Header } from "@/shared/components/header";
import { updateCourseAction } from "@/app/actions/course.actions";
import { deleteLessonAction } from "@/app/actions/lesson.actions";
import {
  getResilientCourseDetail,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";
import { AdminCourseDetailClientView } from "@/features/learning/components/admin-course-detail-client-view";

export default async function AdminCourseDetailPage({
  params,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const { courseId } = await params;
  const { user, profile } = await getResilientUser();

  if (profile?.role !== "admin" && profile?.role !== "instructor")
    redirect("/courses");

  // Fetch course detail and lessons with resilient fallback
  const course = await getResilientCourseDetail(courseId);

  if (!course) notFound();

  const updateThisCourse = updateCourseAction.bind(null, course.id);

  const lessons = (course.lessons || []).sort(
    (a: any, b: any) => a.sequence_order - b.sequence_order,
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={profile?.role}
      />

      <AdminCourseDetailClientView
        course={course}
        lessons={lessons}
        updateThisCourse={updateThisCourse}
        deleteLessonAction={deleteLessonAction}
      />
    </div>
  );
}

