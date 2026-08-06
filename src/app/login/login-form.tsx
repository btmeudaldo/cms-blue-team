"use client";

import { useState } from "react";

import { createSupabaseBrowserClient } from "@/shared/lib/supabase/browser";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const supabase = createSupabaseBrowserClient();
    const result = isRegistering
      ? await supabase.auth.signUp({ email, password })
      : await supabase.auth.signInWithPassword({ email, password });

    if (result.error) { setMessage(result.error.message); return; }
    window.location.assign("/courses");
  }

  return <form className="flex flex-col gap-4" onSubmit={submit}>
    <label>Email<input className="w-full border p-2" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
    <label>Contraseña<input className="w-full border p-2" type="password" minLength={6} value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
    {message && <p role="alert">{message}</p>}
    <button className="rounded bg-slate-900 px-4 py-2 text-white" type="submit">{isRegistering ? "Crear cuenta" : "Entrar"}</button>
    <button className="text-left underline" type="button" onClick={() => setIsRegistering((value) => !value)}>{isRegistering ? "Ya tengo cuenta" : "Crear una cuenta"}</button>
  </form>;
}
