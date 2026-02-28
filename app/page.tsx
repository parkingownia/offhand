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

const interiorImage =
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2400&q=80";
const portraitImage =
  "https://images.unsplash.com/photo-1554629947-334ff61d85dc?auto=format&fit=crop&w=1600&q=80";
const resourceImages = [
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=80",
];

export default function Home() {
  return (
    <main>
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" />
      </div>

      <header className="site-header" data-reveal>
        <div className="page site-header__inner">
          <div className="site-header__brand">
            <p className="site-header__tag">Offhand Studio</p>
            <p className="site-header__title display-font">Portal marki</p>
          </div>

          <nav className="site-header__nav">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#book" className="btn btn--primary">
            Umów rozmowę
          </a>
        </div>
      </header>

      <section className="hero section section--navy" data-reveal>
        <svg
          className="hero__line"
          viewBox="0 0 1000 420"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="hero__line-path hero__line-path--one"
            data-line
            d="M-20,280 C120,220 200,180 320,220 C440,260 520,220 640,170 C760,120 860,140 1040,110"
          />
          <path
            className="hero__line-path hero__line-path--two"
            data-line
            d="M-40,330 C110,280 230,240 350,274 C470,308 570,270 690,220 C820,166 900,182 1080,150"
          />
        </svg>

        <div className="page hero__grid">
          <article>
            <p className="hero__eyebrow">Kierunek pracy</p>
            <h1 className="hero__title display-font">
              Strona, która mówi ludzkim językiem i prowadzi klienta do decyzji.
            </h1>
            <p className="hero__lead">
              Projektujemy komunikację i portal w stylu skandynawskim: dużo światła,
              porządek i treść bez marketingowej waty. Ma być jasno, spokojnie i
              skutecznie.
            </p>
            <div className="hero__actions">
              <a href="#workshops" className="btn btn--primary">
                Zacznij od warsztatu
              </a>
              <Link href="/dashboard" className="btn btn--secondary btn--contrast">
                Zobacz demo portalu
              </Link>
            </div>
          </article>

          <aside className="hero__aside card card--dark">
            <p className="hero__aside-title">Wybierz klimat marki</p>
            <div className="hero__chips">
              {moods.map((mood, index) => (
                <button
                  key={mood}
                  type="button"
                  className={`chip ${index === 0 ? "chip--active" : ""}`}
                >
                  {mood}
                </button>
              ))}
            </div>
            <p className="hero__aside-text">
              Wybierasz ton, a my przekładamy to na konkret: teksty, układ strony i
              plan działań, który da się wdrożyć od razu.
            </p>
          </aside>
        </div>
      </section>

      <section
        id="workshops"
        className="section section--paper section--image divider-top"
        data-reveal
      >
        <div
          className="section__bg"
          data-parallax
          data-speed="0.06"
          data-max="12"
          style={{ backgroundImage: `url(${interiorImage})` }}
          aria-hidden="true"
        />

        <div className="page">
          <div className="section-head">
            <h2 className="section-title display-font">Formy współpracy</h2>
            <p className="section-copy">
              Każda forma kończy się konkretnym efektem. Bez długich prezentacji, za to
              z materiałem gotowym do użycia.
            </p>
          </div>

          <div className="tracks">
            {paths.map((path) => (
              <article key={path.name} className="track-row">
                <div>
                  <p className="track-row__meta">{path.length}</p>
                  <h3 className="track-row__title display-font">{path.name}</h3>
                </div>
                <p className="track-row__desc">{path.description}</p>
                <Link href={path.href} className="btn btn--primary">
                  {path.action}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section section--paper divider-top" data-reveal>
        <div className="page about-grid">
          <article>
            <p className="hero__eyebrow" style={{ color: "#677484" }}>
              Jak pracujemy
            </p>
            <h2 className="section-title display-font">
              Skandynawska prostota i bardzo konkretna treść.
            </h2>
            <p className="section-copy">
              Dbamy o przestrzeń, czytelną hierarchię i język, który brzmi jak rozmowa.
              Dzięki temu klient od razu rozumie, czym się zajmujesz i co zrobić dalej.
            </p>
            <a href="#one-on-one" className="btn btn--secondary">
              Zobacz konsultacje 1:1
            </a>
          </article>

          <article id="one-on-one" className="about-side">
            <figure className="portrait card" data-parallax data-speed="0.04" data-max="6">
              <img
                className="portrait__image"
                src={portraitImage}
                alt="Portret osoby w naturalnym świetle na neutralnym tle"
                loading="lazy"
              />
            </figure>

            <ul className="about-list">
              {[
                "Porządkujemy przekaz, żeby klient od razu łapał sens oferty.",
                "Układamy stronę tak, by naturalnie prowadziła do kontaktu.",
                "Dajemy plan publikacji, który da się utrzymać co tydzień.",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="resources" className="section section--paper divider-top" data-reveal>
        <div className="page">
          <div className="section-head">
            <h2 className="section-title display-font">Materiały</h2>
            <Link href="/health" className="btn btn--secondary">
              Sprawdź status strony
            </Link>
          </div>

          <div className="resource-grid">
            {resources.map((resource, index) => (
              <article key={resource.title} className="resource-card card">
                <div
                  className="resource-card__media"
                  data-parallax
                  data-speed="0.04"
                  data-max="6"
                >
                  <img
                    src={resourceImages[index % resourceImages.length]}
                    alt="Detal biurka, notatnika i szkicu w naturalnym świetle"
                    loading="lazy"
                  />
                </div>
                <h3 className="resource-card__title display-font">{resource.title}</h3>
                <p className="resource-card__detail">{resource.detail}</p>
                <button type="button" className="btn btn--primary">
                  Poproś o dostęp
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="section cta divider-top" data-reveal>
        <div className="page">
          <p className="cta__label">Następny krok</p>
          <div className="cta__grid">
            <h2 className="cta__title display-font">
              Umów 60 minut rozmowy i wyjdź z jasnym planem na najbliższy miesiąc.
            </h2>
            <div className="cta__actions">
              <a
                href="mailto:hello@offhand.pl?subject=Rozmowa%20o%20stronie%20i%20ofercie"
                className="btn btn--primary"
              >
                Napisz: hello@offhand.pl
              </a>
              <Link href="/login" className="btn btn--secondary btn--contrast">
                Wejdź do strefy demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
