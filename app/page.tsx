import Link from "next/link";

const nav = [
  { label: "Warsztaty", href: "#workshops" },
  { label: "Konsultacje 1:1", href: "#one-on-one" },
  { label: "Materiały", href: "#resources" },
  { label: "O nas", href: "#about" },
];

const moods = [
  "Spokojnie i jasno",
  "Odważnie i konkretnie",
  "Twórczo, ale poukładanie",
  "Ludzko i blisko klienta",
  "Krótko i na temat",
];

const paths = [
  {
    name: "Warsztat marki",
    length: "2 dni",
    description:
      "Po warsztacie masz gotowy kierunek komunikacji i plan publikacji na najbliższe tygodnie.",
    action: "Zobacz szczegóły",
    href: "/dashboard",
  },
  {
    name: "Konsultacje 1:1",
    length: "4 tygodnie",
    description:
      "Pracujemy regularnie nad ofertą i stroną, żeby klient wiedział, co robisz i dlaczego warto.",
    action: "Przejdź do demo",
    href: "/panel",
  },
  {
    name: "Pakiet materiałów",
    length: "we własnym tempie",
    description:
      "Checklisty i szablony pomagające pisać prościej i sprzedawać bez napinania się.",
    action: "Sprawdź materiały",
    href: "/health",
  },
];

const resources = [
  {
    title: "Lista kontrolna oferty",
    detail: "Prosty schemat: co pokazać, w jakiej kolejności i jak domknąć działanie.",
  },
  {
    title: "Plan publikacji na 4 tygodnie",
    detail: "Co publikować, żeby ludzie rozumieli Twoją usługę i chętniej pytali o współpracę.",
  },
  {
    title: "Mapa cen i pakietów",
    detail: "Jak uporządkować ceny i zakres pracy, żeby nie zaniżać swojej wartości.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f4ef]/95 px-4 pb-20 pt-6 text-[#1f282a] sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d8d4ca] pb-5">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#8b8375]">
              Offhand Studio
            </p>
            <p className="display-font mt-1 text-2xl text-[#1f282a]">Portal marki</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#5c615f] md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#1f282a]">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            className="rounded-full bg-[#1f282a] px-5 py-2.5 text-sm font-medium text-[#f6f4ef] transition hover:bg-[#2a3638]"
          >
            Umów rozmowę
          </a>
        </header>

        <section className="grid gap-10 pb-14 pt-14 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <article>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8c6d4f]">
              Kierunek pracy
            </p>
            <h1 className="display-font mt-4 max-w-4xl text-5xl leading-[1.05] text-[#1e2527] sm:text-7xl">
              Strona, która mówi ludzkim językiem i prowadzi klienta do decyzji.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#535a58]">
              Projektujemy komunikację i portal w stylu skandynawskim: dużo światła,
              porządek i treść bez marketingowej waty. Ma być jasno, spokojnie i
              skutecznie.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#workshops"
                className="rounded-full bg-[#db9d64] px-5 py-2.5 text-sm font-semibold text-[#3a2412] transition hover:bg-[#e7aa72]"
              >
                Zacznij od warsztatu
              </a>
              <Link
                href="/dashboard"
                className="rounded-full border border-[#c8c3b6] px-5 py-2.5 text-sm font-semibold text-[#2f383a] transition hover:bg-[#ece9e2]"
              >
                Zobacz demo portalu
              </Link>
            </div>
          </article>

          <aside className="space-y-5 border-l border-[#d8d4ca] pl-6 lg:pl-8">
            <p className="text-xs uppercase tracking-[0.25em] text-[#8b8375]">
              Wybierz klimat marki
            </p>
            <div className="flex flex-wrap gap-2">
              {moods.map((mood) => (
                <button
                  key={mood}
                  type="button"
                  className="rounded-full border border-[#d4cec1] bg-[#f8f6f1] px-3 py-1.5 text-xs text-[#4e5654] transition hover:border-[#b6ad9a] hover:text-[#1f282a]"
                >
                  {mood}
                </button>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-[#5a615f]">
              Wybierasz ton, a my przekładamy to na konkret: teksty, układ strony i
              plan działań, który da się wdrożyć od razu.
            </p>
          </aside>
        </section>

        <section id="workshops" className="border-t border-[#d8d4ca] py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display-font text-4xl text-[#1f282a] sm:text-5xl">
              Formy współpracy
            </h2>
            <p className="max-w-2xl text-sm text-[#5a615f]">
              Każda forma kończy się konkretnym efektem. Bez długich prezentacji, za to
              z materiałem gotowym do użycia.
            </p>
          </div>
          <div className="mt-8 divide-y divide-[#d8d4ca]">
            {paths.map((path) => (
              <article key={path.name} className="grid gap-4 py-6 md:grid-cols-[1.1fr_2fr_auto] md:items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8c6d4f]">{path.length}</p>
                  <h3 className="mt-1 text-2xl text-[#222b2d]">{path.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#58605e]">{path.description}</p>
                <Link
                  href={path.href}
                  className="justify-self-start rounded-full bg-[#1f282a] px-4 py-2 text-sm font-medium text-[#f4f2ec] transition hover:bg-[#2b3638]"
                >
                  {path.action}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="grid gap-8 border-t border-[#d8d4ca] py-12 lg:grid-cols-[1.1fr_1fr]"
        >
          <article>
            <p className="text-xs uppercase tracking-[0.25em] text-[#8b8375]">Jak pracujemy</p>
            <h2 className="display-font mt-3 text-4xl text-[#1f282a] sm:text-5xl">
              Skandynawska prostota i bardzo konkretna treść.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#58605e]">
              Dbamy o przestrzeń, czytelną hierarchię i język, który brzmi jak rozmowa.
              Dzięki temu klient od razu rozumie, czym się zajmujesz i co zrobić dalej.
            </p>
            <a
              href="#one-on-one"
              className="mt-6 inline-block rounded-full border border-[#c8c3b6] px-5 py-2.5 text-sm font-semibold text-[#2f383a] transition hover:bg-[#ece9e2]"
            >
              Zobacz konsultacje 1:1
            </a>
          </article>
          <article id="one-on-one" className="space-y-4">
            {[
              "Porządkujemy przekaz, żeby klient od razu łapał sens oferty.",
              "Układamy stronę tak, by naturalnie prowadziła do kontaktu.",
              "Dajemy plan publikacji, który da się utrzymać co tydzień.",
            ].map((item) => (
              <div key={item} className="border-l-2 border-[#d6a16b] pl-4">
                <p className="text-sm text-[#4f5755]">{item}</p>
              </div>
            ))}
          </article>
        </section>

        <section id="resources" className="border-t border-[#d8d4ca] py-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="display-font text-4xl text-[#1f282a] sm:text-5xl">Materiały</h2>
            <Link
              href="/health"
              className="rounded-full border border-[#c8c3b6] px-5 py-2.5 text-sm font-semibold text-[#2f383a] transition hover:bg-[#ece9e2]"
            >
              Sprawdź status strony
            </Link>
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {resources.map((resource) => (
              <article key={resource.title} className="space-y-2">
                <h3 className="text-xl text-[#1f282a]">{resource.title}</h3>
                <p className="text-sm text-[#5b615f]">{resource.detail}</p>
                <button
                  type="button"
                  className="rounded-full bg-[#1f282a] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4f2ec] transition hover:bg-[#2b3638]"
                >
                  Poproś o dostęp
                </button>
              </article>
            ))}
          </div>
        </section>

        <section
          id="book"
          className="mt-2 rounded-3xl bg-[#1f282a] px-6 py-10 text-[#f5f2ea] sm:px-10"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#d7b491]">Następny krok</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.4fr_auto] lg:items-center">
            <h2 className="display-font max-w-3xl text-4xl leading-tight sm:text-5xl">
              Umów 60 minut rozmowy i wyjdź z jasnym planem na najbliższy miesiąc.
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:hello@offhand.pl?subject=Rozmowa%20o%20stronie%20i%20ofercie"
                className="rounded-full bg-[#db9d64] px-5 py-2.5 text-sm font-semibold text-[#3a2412] transition hover:bg-[#e7aa72]"
              >
                Napisz: hello@offhand.pl
              </a>
              <Link
                href="/login"
                className="rounded-full border border-[#6a7475] px-5 py-2.5 text-sm font-semibold text-[#f5f2ea] transition hover:bg-white/10"
              >
                Wejdź do strefy demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
