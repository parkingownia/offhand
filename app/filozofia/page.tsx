import type { Metadata } from "next";
import StudioShell from "@/app/components/site/StudioShell";
import Reveal from "@/app/components/ui/Reveal";
import Section from "@/app/components/ui/Section";

export const metadata: Metadata = {
  title: "Filozofia",
  description:
    "Klarowność jako dyscyplina: struktura przed dekoracją, przestrzeń przed szumem, precyzja przed efektem.",
};

export default function PhilosophyPage() {
  return (
    <StudioShell>
      <Section className="section--plain page-intro">
        <Reveal>
          <p className="eyebrow">Filozofia</p>
          <h1 className="section-title display-font">Klarowność to dyscyplina</h1>
          <p className="section-lead">
            Wierzymy, że prawdziwy luksus w projektowaniu cyfrowym to powściągliwość.
            Struktura przed dekoracją. Przestrzeń przed szumem. Precyzja przed efektem.
          </p>
          <p className="section-copy-long">
            Nasz proces czerpie z architektury i wzornictwa przemysłowego. Każdy interfejs
            traktujemy jak fizyczny obiekt: z wyważonymi proporcjami, czytelną hierarchią i
            kontrolowanym ruchem. Dzięki temu forma nie dominuje treści, lecz wspiera
            decyzję użytkownika.
          </p>
        </Reveal>
      </Section>

      <Section className="section--soft divider-top">
        <Reveal className="principles-grid">
          {[
            ["Dyscyplina układu", "Siatka i proporcje prowadzą odbiorcę bez chaosu."],
            ["Światło i warstwy", "Transparentność i subtelny kontrast budują głębię."],
            ["Ruch pod kontrolą", "Animacja wspiera orientację, nigdy nie odciąga uwagi."],
            ["Kod jako rzemiosło", "Projekt zamykamy w czystej, skalowalnej architekturze."],
          ].map(([title, copy]) => (
            <article key={title} className="principle-item">
              <h2 className="display-font">{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </Reveal>
      </Section>
    </StudioShell>
  );
}
