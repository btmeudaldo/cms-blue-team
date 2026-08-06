import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between selection:bg-[#1a80ff] selection:text-white">
      {/* Header Bar */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1a80ff] text-white font-extrabold text-xl shadow-lg shadow-blue-500/30">
              BT
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">
              BLUE<span className="text-[#1a80ff]">TEAM</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl bg-[#1a80ff] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/30 hover:bg-[#0066e6] transition-all active:scale-95"
            >
              Acceso Rápido / Demo &rarr;
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-6 py-16 lg:py-24 flex flex-col items-center text-center justify-center space-y-12">
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-bold text-[#1a80ff]">
            <span className="h-2 w-2 rounded-full bg-[#1a80ff] animate-ping"></span>
            Plataforma de Formación con Anticheating Temporal
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            CMS de Cursos con Registro Temporal{" "}
            <span className="text-[#1a80ff]">Verificable por Servidor</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Plataforma educativa de alto rendimiento diseñada para crear cursos
            estructurados, lecciones enriquecidas y garantizar tiempos mínimos
            de estudio reales validados en PostgreSQL.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1a80ff] px-8 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-500/25 hover:bg-[#0066e6] hover:scale-105 transition-all"
            >
              <span>Ingresar a la Plataforma</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>

            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/80 px-8 py-4 text-sm font-bold text-slate-200 hover:bg-slate-800 hover:text-white transition-all"
            >
              Ver Catálogo de Cursos
            </Link>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left pt-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 space-y-3 hover:border-blue-500/40 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-[#1a80ff] text-2xl font-bold">
              ⏱️
            </div>
            <h3 className="text-lg font-bold text-white">
              Reloj de Servidor Anti-Fraude
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              El tiempo real transcurrido se deriva en PostgreSQL mediante la
              diferencia atómica `completed_at - started_at`. Imposible de
              manipular desde el navegador.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 space-y-3 hover:border-blue-500/40 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-[#1a80ff] text-2xl font-bold">
              🎯
            </div>
            <h3 className="text-lg font-bold text-white">
              Botón Posición Aleatoria
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Dificulta autoclickers automáticos mediante la asignación de
              coordenadas aleatorias horizontales estables por carga dentro del
              dock de avance inferior.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/60 p-8 space-y-3 hover:border-blue-500/40 transition-colors">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-[#1a80ff] text-2xl font-bold">
              📊
            </div>
            <h3 className="text-lg font-bold text-white">
              CMS de Instructor Completo
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Editor de contenidos enriquecidos, cálculo automático de minutos
              de lectura por recuento de palabras y auditoría completa de
              matriculados.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Blue Team CMS. Plataforma de Formación
        Profesional.
      </footer>
    </div>
  );
}
