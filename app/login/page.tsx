import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <section className="mx-auto w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Wejście do panelu</h1>
        <p className="mt-2 text-sm text-slate-300">
          Wersja statyczna: formularz działa po stronie przeglądarki.
        </p>
        <div className="mt-4 rounded-lg border border-slate-700 bg-slate-950 p-3 text-xs text-slate-300">
          Backend auth jest wyłączony na hostingu statycznym.
        </div>

        <div className="mt-6">
          <LoginForm />
        </div>

        <Link
          href="/"
          className="mt-6 inline-block text-sm text-cyan-300 transition hover:text-cyan-200"
        >
          Wróć na stronę główną
        </Link>
      </section>
    </main>
  );
}
