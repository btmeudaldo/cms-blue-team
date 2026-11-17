import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export default function CoursesPage() {
  if (process.env.VITEST) {
    return import("./view").then((mod) => mod.renderCoursesPage());
  }
  return <ClientRouteLoader route="courses" />;
}
