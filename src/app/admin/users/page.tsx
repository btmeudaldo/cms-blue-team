import Link from "next/link";

export default function AdminUsersPage() {
  return <main className="mx-auto max-w-4xl px-6 py-12"><h1>Gestionar alumnos</h1><p>La asignación de matrículas se habilitará junto con el CRUD de cursos.</p><Link href="/admin">Volver a administración</Link></main>;
}
