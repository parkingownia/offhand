import Link from "next/link";

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 py-12 text-[var(--foreground)]">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-[color:var(--portal-border)] bg-[color:var(--portal-surface)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-[color:var(--portal-accent-soft)]">
          OFFHAND STATUS
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Wdrożenie statyczne aktywne
        </h1>
        <p className="mt-3 text-[color:var(--portal-muted)]">
          Strona działa w trybie statycznym i jest gotowa do publikacji przez FTP.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-[color:var(--portal-accent)] px-4 py-2 text-sm font-semibold text-[#2d1b08] transition hover:bg-[#ffad58]"
        >
          Wróć na stronę główną
        </Link>
      </section>
    </main>
  );
}
