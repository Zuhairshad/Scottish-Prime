import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CompareForm } from "@/components/sections/compare-form";
import { SupplierLogos } from "@/components/sections/supplier-logos";
import { FaqList } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Business Electricity Comparison, Scottish Prime Energy",
  description:
    "Compare live business electricity prices from 20+ UK suppliers and switch online in under 4-13 hours.",
};

export default function BusinessElectricityPage() {
  return (
    <>
      <section className="relative surface-house overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=2000&q=80"
          alt="High-voltage electricity transmission lines against an evening sky"
          className="absolute inset-0 w-full h-full object-cover opacity-65"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-house-green via-house-green/90 to-house-green/25" />
        <Container className="relative py-20 md:py-28">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div>
              <Badge variant="gold-outline" className="mb-5">
                Business electricity
              </Badge>
              <h1 className="t-display">
                Live electricity quotes.{" "}
                <span className="text-gold">Side by side.</span>
              </h1>
              <p className="t-lead text-white/75 mt-6 max-w-xl">
                The UK&apos;s only marketplace with live business electricity
                prices from every major supplier, on one screen, in 30
                seconds.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <ButtonLink href="#compare" variant="on-dark-fill" size="lg">
                  Compare electricity →
                </ButtonLink>
                <ButtonLink href="/contact" variant="on-dark-outline" size="lg">
                  Speak to a specialist
                </ButtonLink>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 t-body-sm-med text-white">
                <span><span className="text-gold">★</span> Trustpilot 4.8 / 5</span>
                <span><span className="text-gold">★</span> Free to use</span>
                <span><span className="text-gold">★</span> 30-second switch</span>
              </div>
            </div>
            <div id="compare">
              <CompareForm variant="dark" />
            </div>
          </div>
        </Container>
      </section>

      <SupplierLogos heading="Electricity rates from 20+ UK suppliers" />

      <section className="py-24">
        <Container>
          <div className="max-w-2xl">
            <span className="t-eyebrow text-accent-green">Why compare</span>
            <h2 className="t-h2 mt-3">
              Built for the way UK businesses actually buy energy.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              title="Live multi-supplier pricing"
              body="No call-centre quotes. Live rates from 20+ suppliers, refreshed by the second."
            />
            <FeatureCard
              title="Transparent unit rates"
              body="Standing charges, unit rates and exit fees, all visible before you sign."
            />
            <FeatureCard
              title="Switch online in 30s"
              body="E-sign your contract and we handle the entire switchover end to end."
            />
            <FeatureCard
              title="No fees, ever"
              body="Free to use. We're paid by suppliers, never by you."
            />
            <FeatureCard
              title="Multi-site portfolios"
              body="From single shops to 100-site estates, we handle complex setups."
            />
            <FeatureCard
              title="Renewals managed"
              body="myHUB keeps every contract date in one place so you never miss a window."
            />
          </div>
        </Container>
      </section>

      <section className="py-24 bg-ceramic">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="t-eyebrow text-accent-green">
                Real savings
              </span>
              <h2 className="t-h2 mt-3">
                See what businesses like yours have saved.
              </h2>
              <p className="t-body text-ink-soft mt-4">
                Average savings range from 22% to 41% on annual electricity
                spend. Here&apos;s a snapshot of recent switches we&apos;ve
                managed.
              </p>
              <ButtonLink href="#compare" variant="primary" className="mt-8">
                Run my comparison →
              </ButtonLink>
            </div>
            <div className="space-y-4">
              <SavingsRow
                business="Café chain (3 sites)"
                before="£18,420 / yr"
                after="£11,960 / yr"
                save="£6,460"
              />
              <SavingsRow
                business="Manufacturing SME"
                before="£64,200 / yr"
                after="£44,810 / yr"
                save="£19,390"
              />
              <SavingsRow
                business="Care home group"
                before="£112,000 / yr"
                after="£82,400 / yr"
                save="£29,600"
              />
              <SavingsRow
                business="Independent retailer"
                before="£4,210 / yr"
                after="£2,940 / yr"
                save="£1,270"
              />
            </div>
          </div>
        </Container>
      </section>

      <FaqList
        heading="Business electricity questions, answered"
        items={[
          {
            q: "How do you find the cheapest electricity rate?",
            a: "We pull live tariffs from every major UK supplier and rank them by total annual cost using your actual consumption profile.",
          },
          {
            q: "What happens to my current contract?",
            a: "We line up your new contract to start the day after your existing one ends. No overlap, no gap.",
          },
          {
            q: "Do you handle half-hourly meters?",
            a: "Yes, our procurement team specialises in HH meters and multi-site portfolios.",
          },
          {
            q: "Can I get a green / renewable electricity tariff?",
            a: "Absolutely. Most suppliers offer 100% REGO-backed renewable tariffs. We list them clearly.",
          },
        ]}
      />

      <CtaBanner
        title="Find your cheapest electricity rate."
        body="20+ suppliers compared live. Free to use. Switch in under 4-13 hours."
      />
    </>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <Card
      variant="paper"
      className="card-hover relative !p-6 border border-hairline overflow-hidden h-full"
    >
      <span
        aria-hidden
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/30 text-[16px] mb-4"
      >
        ⚡
      </span>
      <h3 className="t-card-title">{title}</h3>
      <p className="t-body text-ink/70 mt-3 leading-relaxed">{body}</p>
    </Card>
  );
}

function SavingsRow({
  business,
  before,
  after,
  save,
}: {
  business: string;
  before: string;
  after: string;
  save: string;
}) {
  return (
    <Card
      variant="paper"
      className="card-hover flex items-center justify-between gap-4 border border-hairline !p-5"
    >
      <div className="flex items-center gap-4 min-w-0">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-house-green text-gold font-semibold text-[14px] flex-shrink-0">
          {business.split(" ").map((w) => w[0]).slice(0, 2).join("")}
        </span>
        <div className="min-w-0">
          <p className="t-body-sm-med text-ink truncate">{business}</p>
          <p className="t-body-sm text-ink/60 mt-1">
            {before} <span className="text-ink/30">→</span> {after}
          </p>
        </div>
      </div>
      <Badge variant="green-soft">Save {save}</Badge>
    </Card>
  );
}
