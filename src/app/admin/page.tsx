import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export default function AdminDashboardPage() {
  if (process.env.VITEST) {
    return import("./view").then((mod) => mod.renderAdminDashboardPage());
  }
  return <ClientRouteLoader route="admin" />;
}
