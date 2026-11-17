import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export default function QuizzesListPage() {
  if (process.env.VITEST) {
    return import("./view").then((mod) => mod.renderQuizzesListPage());
  }
  return <ClientRouteLoader route="quizzes" />;
}
