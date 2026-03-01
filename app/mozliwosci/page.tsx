import type { Metadata } from "next";
import StudioShell from "@/app/components/site/StudioShell";
import GlassCard from "@/app/components/ui/GlassCard";
import Reveal from "@/app/components/ui/Reveal";
import Section from "@/app/components/ui/Section";
import { capabilities } from "@/app/content/studio";

export const metadata: Metadata = {
  title: "Możliwości",
  description:
    "Premium websites, interaktywne platformy marki, systemy designu oraz optymalizacja wydajności.",
};

export default function CapabilitiesPage() {
  return (
    <StudioShell>
      <Section className="section--plain page-intro">
        <Reveal>
          <p className="eyebrow">Możliwości</p>
          <h1 className="section-title display-font">Co budujemy</h1>
          <p className="section-lead">
            Tworzymy doświadczenia webowe klasy premium: od strategii i systemu wizualnego,
            po wdrożenie gotowe na ruch i rozwój produktu.
          </p>
        </Reveal>
      </Section>

      <Section className="section--soft divider-top">
        <div className="cards-grid cards-grid--two">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={0.08 * index}>
              <GlassCard className="capability-card">
                <p className="capability-card__index">0{index + 1}</p>
                <h2 className="card-title display-font">{item.title}</h2>
                <p className="card-summary">{item.summary}</p>
                <p>{item.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </StudioShell>
  );
}
