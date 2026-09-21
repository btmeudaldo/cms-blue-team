import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { Header } from "@/shared/components/header";
import { updateLessonAction } from "@/app/actions/lesson.actions";
import {
  getResilientCourseDetail,
  getEditableQuizForLesson,
  getResilientUser,
} from "@/shared/lib/supabase/resilient";
import { LessonEditorForm } from "@/features/learning/components/lesson-editor-form";
import { QuizEditor } from "@/features/learning/components/quiz-editor";

export default async function EditLessonPage({
  params,
}: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  const { courseId, lessonId } = await params;
  const { user, profile } = await getResilientUser();

  if (profile?.role !== "admin" && profile?.role !== "instructor")
    redirect("/courses");

  const course = await getResilientCourseDetail(courseId);

  if (!course) notFound();

  const lesson = (course.lessons || []).find(
    (l: any) => l.id === lessonId || l.slug === lessonId,
  );

  if (!lesson) notFound();

  const updateThisLesson = updateLessonAction.bind(null, lesson.id, courseId);

  const quiz = await getEditableQuizForLesson(course.id, lesson.id);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1120] text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Header
        userEmail={user.email}
        userName={profile?.full_name}
        role={profile?.role}
      />

      <main className="flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6 py-8 space-y-8">
        {/* Navigation */}
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
              <Link
                href="/admin/courses"
                className="hover:text-[#1a80ff] transition-colors"
              >
                Cursos
              </Link>
              <span>&rsaquo;</span>
              <Link
                href={`/admin/courses/${courseId}`}
                className="hover:text-[#1a80ff] transition-colors"
              >
                {course.title}
              </Link>
              <span>&rsaquo;</span>
              <span className="text-slate-900 dark:text-white truncate">
                {lesson.title}
              </span>
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Editar Lección
            </h1>
          </div>

          <Link
            href={`/admin/courses/${courseId}`}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            &larr; Volver al Curso
          </Link>
        </div>

        {/* Lesson Editor Card with Multimedia & Live Preview Toolbar */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
          <LessonEditorForm
            action={updateThisLesson}
            courseId={courseId}
            defaultTitle={lesson.title}
            defaultSlug={lesson.slug}
            defaultOrder={lesson.sequence_order}
            defaultMinSeconds={lesson.min_seconds}
            defaultContentHtml={lesson.content_html}
            isEditing={true}
          />
        </div>

        {/* Quiz & Question Editor for Instructors */}
        <QuizEditor
          courseId={course.id}
          lessonId={lesson.id}
          initialQuiz={quiz}
        />
      </main>
    </div>
  );
}
