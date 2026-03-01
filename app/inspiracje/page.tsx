import type { Metadata } from "next";
import StudioShell from "@/app/components/site/StudioShell";
import Reveal from "@/app/components/ui/Reveal";
import Section from "@/app/components/ui/Section";
import { artistReferences } from "@/app/content/studio";

export const metadata: Metadata = {
  title: "Dźwięk i inspiracje",
  description:
    "Dźwięk jako struktura: artystyczne źródła wrażliwości projektowej studia Offhand.",
};

export default function InspirationPage() {
  return (
    <StudioShell>
      <Section className="section--plain page-intro">
        <Reveal>
          <p className="eyebrow">Dźwięk i inspiracje</p>
          <h1 className="section-title display-font">Dźwięk jako struktura</h1>
          <p className="section-lead">
            Nasz język wizualny jest inspirowany ambientowymi kompozycjami, w których harfa,
            dzwonki i długie pogłosy budują przestrzeń zamiast szumu.
          </p>
          <p className="section-copy-long">
            Dźwięk zachowuje się jak światło w szkle: odbija się, załamuje i rozpuszcza.
            Ten sam mechanizm przenosimy do interfejsów: warstwy, rytm, klarowność,
            powściągliwość.
          </p>
        </Reveal>
      </Section>

      <Section className="section--soft divider-top">
        <Reveal>
          <ul className="artist-list" aria-label="Artyści inspirujący studio">
            {artistReferences.map((artist) => (
              <li key={artist} className="artist-list__item">
                {artist}
              </li>
            ))}
          </ul>

          <p className="spotify-note">
            Delikatny punkt odniesienia:
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-link"
            >
              Spotify
            </a>
            . Inspiracja wspiera proces, ale nie jest centrum naszej oferty.
          </p>
        </Reveal>
      </Section>
    </StudioShell>
  );
}
