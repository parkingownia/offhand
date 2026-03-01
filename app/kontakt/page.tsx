import type { Metadata } from "next";
import StudioShell from "@/app/components/site/StudioShell";
import Reveal from "@/app/components/ui/Reveal";
import Section from "@/app/components/ui/Section";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Jeśli budujesz produkt wymagający klarowności, dyscypliny i głębi, porozmawiajmy.",
};

export default function ContactPage() {
  return (
    <StudioShell>
      <Section className="section--plain page-intro">
        <Reveal>
          <p className="eyebrow">Kontakt</p>
          <h1 className="section-title display-font">Zbudujmy coś precyzyjnego</h1>
          <p className="section-lead">
            Jeśli tworzysz projekt, który potrzebuje klarowności, dyscypliny i głębi,
            jesteśmy gotowi do współpracy.
          </p>
        </Reveal>
      </Section>

      <Section className="section--soft divider-top">
        <Reveal className="contact-grid">
          <form className="contact-form" action="#" method="post">
            <label className="field" htmlFor="name">
              Imię i nazwisko
              <input id="name" name="name" type="text" className="field__control" required />
            </label>

            <label className="field" htmlFor="email">
              E-mail
              <input id="email" name="email" type="email" className="field__control" required />
            </label>

            <label className="field" htmlFor="message">
              Wiadomość
              <textarea
                id="message"
                name="message"
                className="field__control field__control--textarea"
                rows={6}
                required
              />
            </label>

            <button type="submit" className="btn btn--primary">
              Wyślij wiadomość
            </button>
          </form>

          <aside className="contact-aside">
            <p className="eyebrow">Studio</p>
            <p>
              Pracujemy z markami, które cenią jakość wykonania i długoterminową spójność
              systemu cyfrowego.
            </p>
            <p>
              Kontakt bezpośredni: <a href="mailto:hello@offhand.pl" className="text-link">hello@offhand.pl</a>
            </p>
          </aside>
        </Reveal>
      </Section>
    </StudioShell>
  );
}
