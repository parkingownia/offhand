import type { Metadata } from "next";
import StudioShell from "@/app/components/site/StudioShell";
import Reveal from "@/app/components/ui/Reveal";
import Section from "@/app/components/ui/Section";
import { projects } from "@/app/content/studio";

export const metadata: Metadata = {
  title: "Projekty",
  description:
    "Minimalistyczna siatka case studies: duże wizuale, krótkie opisy i kontrolowane gradienty.",
};

export default function ProjectsPage() {
  return (
    <StudioShell>
      <Section className="section--plain page-intro">
        <Reveal>
          <p className="eyebrow">Projekty</p>
          <h1 className="section-title display-font">Case studies</h1>
          <p className="section-lead">
            Każdy projekt traktujemy jako precyzyjny obiekt: czytelna struktura, kontrolowana
            narracja i jakość wykonania na poziomie produkcyjnym.
          </p>
        </Reveal>
      </Section>

      <Section className="section--soft divider-top">
        <div className="projects-grid projects-grid--full">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={0.06 * index}>
              <article className="project-card project-card--large">
                <div className="project-card__visual" aria-hidden="true" />
                <div className="project-card__body">
                  <p className="project-card__industry">{project.industry}</p>
                  <h2 className="display-font">{project.title}</h2>
                  <p>{project.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </StudioShell>
  );
}
