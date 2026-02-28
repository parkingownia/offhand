import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTH_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import LogoutButton from "./LogoutButton";

export default async function PanelPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  const session = verifySessionToken(token);

  if (!session) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <section className="mx-auto w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
              Offhand Panel
            </p>
            <h1 className="text-3xl font-semibold tracking-tight">
              Witaj, {session.email}
            </h1>
          </div>
          <LogoutButton />
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold">Status API</h2>
            <p className="mt-2 text-sm text-slate-600">
              Endpoint healthcheck jest dostępny i gotowy do monitoringu.
            </p>
            <Link
              href="/api/health"
              className="mt-4 inline-block rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Otwórz /api/health
            </Link>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-lg font-semibold">Pulpit techniczny</h2>
            <p className="mt-2 text-sm text-slate-600">
              Publiczny dashboard pokazuje aktualnie aktywne moduły.
            </p>
            <Link
              href="/dashboard"
              className="mt-4 inline-block rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Otwórz Dashboard
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
