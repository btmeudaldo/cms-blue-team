import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export default function AdminProgressAuditPage() {
  if (process.env.VITEST) {
    return import("./view").then((mod) => mod.renderAdminProgressAuditPage());
  }
  return <ClientRouteLoader route="admin/progress" />;
}
