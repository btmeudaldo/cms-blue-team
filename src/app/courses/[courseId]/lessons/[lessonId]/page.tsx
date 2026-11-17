import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export function generateStaticParams() {
  return [{ courseId: "_placeholder", lessonId: "_placeholder" }];
}

export default function StudentLessonPage(props: {
  params: Promise<{ courseId: string; lessonId: string }>;
}) {
  if (process.env.VITEST) {
    return import("./view").then((mod) => mod.renderStudentLessonPage(props));
  }
  return <ClientRouteLoader route="courses/[courseId]/lessons/[lessonId]" />;
}
