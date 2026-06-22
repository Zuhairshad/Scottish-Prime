import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaBanner({
  eyebrow = "Ready to switch?",
  title = "Compare business energy in 4-13 hours",
  body = "Live prices from 20+ UK suppliers. No fees. No catch.",
  primaryHref = "/#compare",
  primaryLabel = "Compare Now",
  secondaryHref = "/contact",
  secondaryLabel = "Talk to an expert",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="py-16 bg-canvas">
      <Container>
        <div className="relative overflow-hidden bg-house-green text-white rounded-[12px] px-8 py-16 md:px-16 md:py-20 flex flex-col items-center text-center">
          {/* Gold decorative arc */}
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gold/10 blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-gold/5 blur-2xl"
          />

          <span className="relative t-eyebrow text-gold mb-4">{eyebrow}</span>
          <h2 className="relative t-h1 text-white max-w-2xl">{title}</h2>
          <p className="relative t-lead text-white/75 mt-4 max-w-xl">{body}</p>
          <div className="relative flex flex-wrap items-center justify-center gap-3 mt-8">
            <ButtonLink href={primaryHref} variant="on-dark-fill" size="lg">
              {primaryLabel}
            </ButtonLink>
            <ButtonLink href={secondaryHref} variant="on-dark-outline" size="lg">
              {secondaryLabel}
            </ButtonLink>
          </div>

          <p className="relative t-body-sm text-white/60 mt-6">
            <span className="text-gold">★</span> Trustpilot 4.8 / 5 ·{" "}
            <span className="text-gold">★</span> Free to use ·{" "}
            <span className="text-gold">★</span> 30-second switch
          </p>
        </div>
      </Container>
    </section>
  );
}
