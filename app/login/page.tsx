import Link from "next/link";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-transparent px-6 py-12 text-[var(--foreground)]">
      <section className="mx-auto w-full max-w-md rounded-3xl border border-[color:var(--portal-border)] bg-[color:var(--portal-surface)] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <h1 className="text-3xl font-semibold tracking-tight">Wejście do panelu</h1>
        <p className="mt-2 text-sm text-[color:var(--portal-muted)]">
          Wersja statyczna: formularz działa po stronie przeglądarki.
        </p>
        <div className="mt-4 rounded-lg border border-[color:var(--portal-border)] bg-[color:var(--portal-surface-soft)] p-3 text-xs text-[color:var(--portal-muted)]">
          Backend auth jest wyłączony na hostingu statycznym.
        </div>

        <div className="mt-6">
          <LoginForm />
        </div>

        <Link
          href="/"
          className="mt-6 inline-block text-sm text-[color:var(--portal-accent-soft)] transition hover:text-[color:var(--portal-accent)]"
        >
          Wróć na stronę główną
        </Link>
      </section>
    </main>
  );
}
