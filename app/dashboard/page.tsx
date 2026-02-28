import Link from "next/link";

const modules = [
  {
    name: "Status strony",
    path: "/health",
    description: "Statyczny status wdrożenia i gotowości serwisu.",
  },
  {
    name: "Homepage",
    path: "/",
    description: "Punkt startowy aplikacji i nawigacja do modułów.",
  },
  {
    name: "Logowanie demo",
    path: "/login",
    description: "Przejście do panelu bez backendowej sesji.",
  },
  {
    name: "Panel demo",
    path: "/panel",
    description: "Wersja front-end bez autoryzacji po stronie serwera.",
  },
];

export default function DashboardPage() {
  const generatedAt = new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <section className="mx-auto w-full max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
        <header className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-slate-300">Pierwszy moduł Offhand jest gotowy.</p>
          <p className="text-xs uppercase tracking-wide text-slate-400">
            Wygenerowano: {generatedAt}
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((module) => (
            <article
              key={module.path}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-5"
            >
              <h2 className="text-lg font-semibold">{module.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{module.description}</p>
              <Link
                href={module.path}
                className="mt-4 inline-block rounded-lg bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
              >
                Przejdź do modułu
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
