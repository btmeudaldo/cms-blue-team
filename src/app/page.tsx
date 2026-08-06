import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6">
      <h1>CMS de formación</h1>
      <p>Plataforma de cursos con progreso temporal verificado por el servidor.</p>
      <Link className="w-fit rounded bg-slate-900 px-4 py-2 text-white" href="/login">
        Acceder
      </Link>
    </main>
  );
}
