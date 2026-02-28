import Link from "next/link";

const navigation = [
  { label: "Workshops", href: "#programy" },
  { label: "One-on-one", href: "#kontakt" },
  { label: "Ebook", href: "#zasoby" },
  { label: "About", href: "#rezultaty" },
  { label: "Resources", href: "#zasoby" },
];

const programs = [
  {
    title: "Brand Sprint 5 dni",
    format: "Intensywne warsztaty 1:1",
    description:
      "Po tygodniu masz strategię komunikacji, ton marki i gotowe filary treści.",
    outcome: "Dokument strategiczny + mapa contentu",
  },
  {
    title: "Portal Eksperta",
    format: "Oferta + struktura strony",
    description:
      "Projektujemy portal, który tłumaczy Twoją metodę i prowadzi klienta do decyzji.",
    outcome: "Architektura strony + pakiet sekcji sprzedażowych",
  },
  {
    title: "Mentoring Visibility",
    format: "Model abonamentowy",
    description:
      "Cotygodniowa praca nad publikacjami, ofertą i rytmem sprzedaży bez chaosu.",
    outcome: "System publikacji i plan lead generation",
  },
];

const process = [
  {
    step: "01",
    title: "Diagnoza marki",
    copy: "Rozpoznajemy przewagi, język klienta i punkty tarcia w aktualnej komunikacji.",
  },
  {
    step: "02",
    title: "Narracja i oferta",
    copy: "Budujemy centralną ideę, nową strukturę oferty i sekwencję argumentów.",
  },
  {
    step: "03",
    title: "Produkcja portalu",
    copy: "Składamy strony, sekcje i CTA tak, aby każda podstrona pracowała sprzedażowo.",
  },
  {
    step: "04",
    title: "Rytm wzrostu",
    copy: "Wdrażamy plan publikacji i checklistę optymalizacji po każdym tygodniu.",
  },
];

const outcomes = [
  "Jasny positioning i język marki, który można skalować.",
  "Portal z logiczną ścieżką od pierwszego wejścia do rezerwacji rozmowy.",
  "Stały system contentowy, który wspiera sprzedaż zamiast ją zastępować.",
];

const resources = [
  {
    title: "Playbook: Ekspert w 30 dni",
    note: "Praktyczny plan publikacji i kolejności działań.",
  },
  {
    title: "Checklist: Strona, która sprzedaje",
    note: "Kontrola sekcji, CTA i narracji przed publikacją.",
  },
  {
    title: "Kalkulator: Oferta premium",
    note: "Szybkie oszacowanie marży i progu opłacalności.",
  },
];

const moods = [
  { title: "Timeless Clarity", tone: "Spokojna precyzja i premium minimalizm." },
  { title: "Fearless Adventure", tone: "Odważna narracja z energią wzrostu." },
  { title: "Boundless Creativity", tone: "Twórcza komunikacja oparta o system." },
  { title: "Friendly Horizon", tone: "Ludzki ton i jasna obietnica marki." },
  { title: "Hyper Efficient", tone: "Szybka decyzja i konkretne CTA." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent px-4 pb-24 pt-8 text-[var(--foreground)] sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="glass-panel reveal rounded-2xl px-5 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--portal-accent-soft)]">
                Offhand Atelier
              </p>
              <p className="text-xs text-[color:var(--portal-muted)]">
                Brand strategy portal
              </p>
            </div>
            <nav className="hidden gap-5 text-sm text-[color:var(--portal-muted)] md:flex">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>
            <Link
              href="/dashboard"
              className="rounded-xl border border-[color:var(--portal-border)] px-4 py-2 text-sm font-medium transition hover:bg-white/10"
            >
              Demo panel
            </Link>
          </div>
        </header>

        <section className="grid items-stretch gap-6 lg:grid-cols-[1.3fr_1fr]">
          <article className="glass-panel reveal delay-1 relative overflow-hidden rounded-3xl px-6 py-8 sm:px-8">
            <div className="floating absolute -right-10 -top-14 h-44 w-44 rounded-full bg-[color:var(--portal-accent)]/20 blur-3xl" />
            <p className="accent-chip mb-4 inline-flex rounded-full px-3 py-1 text-xs tracking-wide text-[color:var(--portal-accent-soft)]">
              Strategia, która brzmi jak Ty
            </p>
            <h1 className="display-font max-w-3xl text-4xl leading-[1.05] sm:text-6xl">
              Portal marki eksperta, który prowadzi klienta od ciekawości do decyzji.
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[color:var(--portal-muted)] sm:text-base">
              Projektujemy komunikację i strukturę oferty tak, aby Twoja marka była
              rozpoznawalna, spójna i gotowa na skalowanie sprzedaży bez przypadkowych
              działań.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#kontakt"
                className="pulsing rounded-xl bg-[color:var(--portal-accent)] px-5 py-3 text-sm font-semibold text-[#2d1b08] transition hover:bg-[#ffad58]"
              >
                Umow rozmowe strategiczna
              </a>
              <a
                href="#proces"
                className="rounded-xl border border-[color:var(--portal-border)] px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                Zobacz proces
              </a>
            </div>
          </article>

          <aside className="glass-panel reveal delay-2 rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--portal-accent-soft)]">
              Moodboard kierunku
            </p>
            <div className="mt-4 grid gap-3">
              {moods.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[color:var(--portal-border)] bg-black/20 p-4 text-sm text-[color:var(--portal-muted)]"
                >
                  <p className="font-semibold text-[var(--foreground)]">{item.title}</p>
                  <p className="mt-1 text-xs">{item.tone}</p>
                </div>
              ))}
            </div>
            <div className="soft-divider mt-6 border-t pt-5 text-sm text-[color:var(--portal-muted)]">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--portal-accent-soft)]">
                Aktualny focus
              </p>
              <p className="mt-2">
                Portal budowany pod podkatalog <strong className="text-white">/offhand</strong>{" "}
                i gotowy do publikacji przez FTP.
              </p>
            </div>
          </aside>
        </section>

        <section id="programy" className="reveal delay-2 grid gap-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="display-font text-3xl sm:text-4xl">Programy wspolpracy</h2>
            <p className="max-w-xl text-sm text-[color:var(--portal-muted)]">
              Wybierasz format: sprint, budowa portalu albo mentoring. Każdy wariant
              kończy się gotowym systemem działania.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {programs.map((program) => (
              <article
                key={program.title}
                className="glass-panel rounded-2xl p-5 transition hover:-translate-y-1"
              >
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--portal-accent-soft)]">
                  {program.format}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{program.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--portal-muted)]">
                  {program.description}
                </p>
                <p className="mt-4 rounded-xl bg-black/20 px-3 py-2 text-xs text-[#ffd8b6]">
                  {program.outcome}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="proces" className="reveal delay-3 grid gap-4">
          <h2 className="display-font text-3xl sm:text-4xl">Proces budowy portalu</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {process.map((item) => (
              <article key={item.step} className="glass-panel rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--portal-accent-soft)]">
                  Etap {item.step}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-[color:var(--portal-muted)]">{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="rezultaty" className="reveal delay-3 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <article className="glass-panel rounded-3xl p-6">
            <h2 className="display-font text-3xl sm:text-4xl">Co dostajesz po wdrozeniu</h2>
            <ul className="mt-5 grid gap-3 text-sm text-[color:var(--portal-muted)]">
              {outcomes.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-[color:var(--portal-border)] bg-black/20 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <aside id="kontakt" className="glass-panel rounded-3xl p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--portal-accent-soft)]">
              Start projektu
            </p>
            <h3 className="display-font mt-3 text-3xl">Zarezerwuj warsztat startowy</h3>
            <p className="mt-4 text-sm text-[color:var(--portal-muted)]">
              60 minut. Diagnoza obecnej komunikacji, szybki plan działań i decyzja,
              który format współpracy ma sens na dziś.
            </p>
            <div className="mt-6 grid gap-3">
              <Link
                href="/login"
                className="rounded-xl bg-[color:var(--portal-accent)] px-4 py-3 text-center text-sm font-semibold text-[#2d1b08] transition hover:bg-[#ffad58]"
              >
                Otworz panel demo
              </Link>
              <a
                href="mailto:hello@offhand.pl?subject=Warsztat%20startowy%20Offhand"
                className="rounded-xl border border-[color:var(--portal-border)] px-4 py-3 text-center text-sm font-semibold transition hover:bg-white/10"
              >
                Napisz: hello@offhand.pl
              </a>
            </div>
          </aside>
        </section>

        <section id="zasoby" className="reveal delay-3 grid gap-4">
          <h2 className="display-font text-3xl sm:text-4xl">Biblioteka zasobow</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {resources.map((item) => (
              <article key={item.title} className="glass-panel rounded-2xl p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--portal-muted)]">{item.note}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[color:var(--portal-accent-soft)]">
                  Wkrótce
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
