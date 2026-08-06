import { signInAction } from "@/app/actions/auth.actions";

export default function LoginPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-4 px-6">
      <h1>Acceso</h1>
      <p>Inicia sesión para acceder a tus cursos.</p>
      <form action={signInAction} className="flex flex-col gap-4">
        <label>Email<input className="w-full border p-2" name="email" type="email" required /></label>
        <label>Contraseña<input className="w-full border p-2" name="password" type="password" required /></label>
        <button className="rounded bg-slate-900 px-4 py-2 text-white" type="submit">Entrar</button>
      </form>
    </main>
  );
}
