import Link from "next/link";

export default function PanelPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 py-12 text-[var(--foreground)]">
      <section className="mx-auto w-full max-w-4xl rounded-3xl border border-[color:var(--portal-border)] bg-[color:var(--portal-surface)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--portal-accent-soft)]">
              Offhand Panel Demo
            </p>
            <h1 className="text-3xl font-semibold tracking-tight">Witaj</h1>
          </div>
          <Link
            href="/login"
            className="rounded-lg border border-[color:var(--portal-border)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-white/10"
          >
            Powrót do logowania
          </Link>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-[color:var(--portal-border)] bg-[color:var(--portal-surface-soft)] p-5">
            <h2 className="text-lg font-semibold">Status strony</h2>
            <p className="mt-2 text-sm text-[color:var(--portal-muted)]">
              Statyczny status wdrożenia jest dostępny dla szybkiej kontroli.
            </p>
            <Link
              href="/health"
              className="mt-4 inline-block rounded-lg bg-[color:var(--portal-accent)] px-3 py-2 text-sm font-semibold text-[#2d1b08] transition hover:bg-[#ffad58]"
            >
              Otwórz /health
            </Link>
          </article>

          <article className="rounded-2xl border border-[color:var(--portal-border)] bg-[color:var(--portal-surface-soft)] p-5">
            <h2 className="text-lg font-semibold">Pulpit techniczny</h2>
            <p className="mt-2 text-sm text-[color:var(--portal-muted)]">
              Publiczny dashboard pokazuje aktualnie aktywne moduły.
            </p>
            <Link
              href="/dashboard"
              className="mt-4 inline-block rounded-lg border border-[color:var(--portal-border)] px-3 py-2 text-sm font-semibold text-[var(--foreground)] transition hover:bg-white/10"
            >
              Otwórz Dashboard
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
