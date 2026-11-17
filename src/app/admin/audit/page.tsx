import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export default function AuditPage(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  if (process.env.VITEST) {
    return import("./view").then((mod) => mod.renderAuditPage(props));
  }
  return <ClientRouteLoader route="admin/audit" />;
}
