import { ClientRouteLoader } from "@/shared/components/client-route-loader";

export function generateStaticParams() {
  return [{ quizId: "_placeholder" }];
}

export default function StandaloneQuizPage(props: {
  params: Promise<{ quizId: string }>;
}) {
  if (process.env.VITEST) {
    return import("./view").then((mod) => mod.renderStandaloneQuizPage(props));
  }
  return <ClientRouteLoader route="quizzes/[quizId]" />;
}
