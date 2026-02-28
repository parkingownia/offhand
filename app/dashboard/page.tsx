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
    <main className="min-h-screen bg-transparent px-6 py-12 text-[var(--foreground)]">
      <section className="mx-auto w-full max-w-5xl rounded-3xl border border-[color:var(--portal-border)] bg-[color:var(--portal-surface)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <header className="mb-8 flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-[color:var(--portal-muted)]">
            Pierwszy moduł Offhand jest gotowy.
          </p>
          <p className="text-xs uppercase tracking-wide text-[#f6d7bf]/80">
            Wygenerowano: {generatedAt}
          </p>
        </header>
        <div className="grid gap-4 sm:grid-cols-2">
          {modules.map((module) => (
            <article
              key={module.path}
              className="rounded-2xl border border-[color:var(--portal-border)] bg-[color:var(--portal-surface-soft)] p-5"
            >
              <h2 className="text-lg font-semibold">{module.name}</h2>
              <p className="mt-2 text-sm text-[color:var(--portal-muted)]">
                {module.description}
              </p>
              <Link
                href={module.path}
                className="mt-4 inline-block rounded-lg bg-[color:var(--portal-accent)] px-3 py-2 text-sm font-semibold text-[#2d1b08] transition hover:bg-[#ffad58]"
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
