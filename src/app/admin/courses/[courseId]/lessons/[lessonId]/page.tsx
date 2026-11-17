import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export function generateStaticParams() {
  return [{ courseId: "_placeholder", lessonId: "_placeholder" }];
}

export default function EditLessonPage(props: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  if (process.env.VITEST) {
    return import("./view").then((mod) => mod.renderEditLessonPage(props));
  }
  return (
    <ClientRouteLoader route="admin/courses/[courseId]/lessons/[lessonId]" />
  );
}
