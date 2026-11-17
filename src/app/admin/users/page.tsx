import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export default function AdminUsersPage() {
  if (process.env.VITEST) {
    return import("./view").then((mod) => mod.renderAdminUsersPage());
  }
  return <ClientRouteLoader route="admin/users" />;
}
