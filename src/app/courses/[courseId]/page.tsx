import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export function generateStaticParams() {
  return [
    { courseId: "_placeholder" },
    { courseId: "cessna-172-continental-diesel" },
    { courseId: "da40-tdi" },
    { courseId: "da42-twin-star" },
    { courseId: "aps-mcc-a320" },
  ];
}

export default function StudentCourseDetailPage(props: {
  params: Promise<{ courseId: string }>;
}) {
  if (process.env.VITEST) {
    return import("./view").then((mod) =>
      mod.renderStudentCourseDetailPage(props),
    );
  }
  return <ClientRouteLoader route="courses/[courseId]" />;
}
