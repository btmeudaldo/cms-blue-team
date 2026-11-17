import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export function generateStaticParams() {
  return [{ courseId: "_placeholder" }];
}

export default function AdminCourseDetailPage(props: {
  params: Promise<{ courseId: string }>;
}) {
  if (process.env.VITEST) {
    return import("./view").then((mod) =>
      mod.renderAdminCourseDetailPage(props),
    );
  }
  return <ClientRouteLoader route="admin/courses/[courseId]" />;
}
