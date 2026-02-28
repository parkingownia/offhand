import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 py-12 text-slate-900">
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <header className="space-y-3">
          <p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700">
            OFFHAND READY
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Offhand</h1>
          <p className="max-w-2xl text-slate-600">
            Bazowy serwis działa. Przejdź do dashboardu lub sprawdź API healthcheck.
          </p>
        </header>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-700"
          >
            Zaloguj się
          </Link>
          <Link
            href="/panel"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Panel użytkownika
          </Link>
          <Link
            href="/api/health"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            API Health JSON
          </Link>
        </div>
      </section>
    </main>
  );
}
