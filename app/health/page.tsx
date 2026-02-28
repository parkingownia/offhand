import Link from "next/link";

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
          OFFHAND STATUS
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Wdrożenie statyczne aktywne
        </h1>
        <p className="mt-3 text-slate-600">
          Strona działa w trybie statycznym i jest gotowa do publikacji przez FTP.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Wróć na stronę główną
        </Link>
      </section>
    </main>
  );
}
