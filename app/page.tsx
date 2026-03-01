import type { Metadata } from "next";
import Link from "next/link";
import StudioShell from "@/app/components/site/StudioShell";
import AnimatedLine from "@/app/components/ui/AnimatedLine";
import ButtonLink from "@/app/components/ui/ButtonLink";
import GlassCard from "@/app/components/ui/GlassCard";
import Reveal from "@/app/components/ui/Reveal";
import Section from "@/app/components/ui/Section";
import { capabilities, projects } from "@/app/content/studio";

export const metadata: Metadata = {
  title: "Cyfrowe rzemiosło światła",
  description:
    "Projektujemy precyzyjne doświadczenia webowe inspirowane światłem, szkłem i skandynawską dyscypliną formy.",
};

export default function HomePage() {
  return (
    <StudioShell>
      <section className="hero">
        <AnimatedLine />
        <div className="page hero__inner">
          <Reveal className="hero__content">
            <p className="eyebrow">Light Through Glass</p>
            <h1 className="hero__title display-font">Cyfrowe rzemiosło w najczystszej formie</h1>
            <p className="hero__subtitle">
              Projektujemy precyzyjne, architektoniczne doświadczenia webowe kształtowane
              przez światło, przestrzeń i klarowność.
            </p>
            <p className="hero__lead">
              Inspirujemy się strukturami kryształu i ambientowym dźwiękiem. Łączymy
              skandynawską powściągliwość z inżynieryjną precyzją, aby każdy projekt był
              dopracowanym obiektem cyfrowym.
            </p>
            <div className="hero__actions">
              <ButtonLink href="/mozliwosci" variant="primary">
                Zobacz możliwości
              </ButtonLink>
              <ButtonLink href="/inspiracje" variant="secondary">
                Poznaj inspiracje
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal className="hero__panel" delay={0.15}>
            <GlassCard className="hero__manifesto">
              <p className="eyebrow eyebrow--soft">Pozycjonowanie</p>
              <h2 className="hero__manifesto-title display-font">
                Projektujemy strony premium dla marek z obszaru architektury, designu,
                motoryzacji, kultury i technologii.
              </h2>
              <p className="hero__manifesto-copy">
                To nie jest szablonowy landing. To precyzyjna przestrzeń decyzji,
                zaprojektowana z dyscypliną, spokojem i głębią.
              </p>
            </GlassCard>
          </Reveal>
        </div>
      </section>

      <Section className="section--soft">
        <Reveal className="impact-grid">
          <GlassCard>
            <p className="impact-grid__label">Manifest</p>
            <h3 className="display-font">Sztuka i rzemiosło</h3>
            <p>
              Wrażliwość na światło i rytm wspiera decyzje projektowe, ale centrum zawsze
              pozostaje jakość wykonania.
            </p>
          </GlassCard>

          <GlassCard>
            <p className="impact-grid__label">Jakość wdrożenia</p>
            <h3 className="display-font">Precyzja inżynierska</h3>
            <p>
              Architektura komponentów, tokeny i kontrolowany ruch budują spójność na
              poziomie całego produktu.
            </p>
          </GlassCard>

          <GlassCard>
            <p className="impact-grid__label">Efekt biznesowy</p>
            <h3 className="display-font">Zaufanie i klarowność</h3>
            <p>
              Użytkownik czuje spokój, rozumie ofertę i szybciej podejmuje decyzję.
            </p>
          </GlassCard>
        </Reveal>
      </Section>

      <Section id="mozliwosci" className="section--plain">
        <Reveal className="section-head">
          <p className="eyebrow">Możliwości</p>
          <h2 className="section-title display-font">Co budujemy</h2>
        </Reveal>

        <div className="cards-grid cards-grid--two">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * index}>
              <GlassCard>
                <h3 className="card-title display-font">{item.title}</h3>
                <p className="card-summary">{item.summary}</p>
                <p>{item.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="projekty" className="section--plain divider-top">
        <Reveal className="section-head section-head--with-link">
          <div>
            <p className="eyebrow">Case studies</p>
            <h2 className="section-title display-font">Wybrane projekty</h2>
          </div>
          <ButtonLink href="/projekty" variant="ghost">
            Zobacz pełną siatkę
          </ButtonLink>
        </Reveal>

        <div className="projects-grid">
          {projects.slice(0, 3).map((project, index) => (
            <Reveal key={project.title} delay={0.1 * index}>
              <article className="project-card">
                <div className="project-card__visual" aria-hidden="true" />
                <div className="project-card__body">
                  <p className="project-card__industry">{project.industry}</p>
                  <h3 className="display-font">{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="section--soft divider-top">
        <Reveal className="cta-block">
          <p className="eyebrow">Następny krok</p>
          <h2 className="section-title display-font">Porozmawiajmy o projekcie wymagającym precyzji</h2>
          <p>
            Jeśli budujesz markę, która potrzebuje klarowności, dyscypliny i głębi,
            zaprojektujemy dla niej spójny obiekt cyfrowy.
          </p>
          <div className="hero__actions">
            <ButtonLink href="/kontakt" variant="primary">
              Przejdź do kontaktu
            </ButtonLink>
            <Link href="mailto:hello@offhand.pl" className="text-link">
              hello@offhand.pl
            </Link>
          </div>
        </Reveal>
      </Section>
    </StudioShell>
  );
}
