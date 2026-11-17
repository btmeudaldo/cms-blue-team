import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export default function AdminCoursesPage() {
  if (process.env.VITEST) {
    return import("./view").then((mod) => mod.renderAdminCoursesPage());
  }
  return <ClientRouteLoader route="admin/courses" />;
}
