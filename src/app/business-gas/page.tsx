import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CompareForm } from "@/components/sections/compare-form";
import { SupplierLogos } from "@/components/sections/supplier-logos";
import { FaqList } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Business Gas Comparison, Scottish Prime Energy",
  description:
    "Compare live business gas prices across every major UK supplier. Switch online with no fees and no downtime.",
};

export default function BusinessGasPage() {
  return (
    <>
      {/* Warm gold-tint hero, gas is warmth, not depth */}
      <section className="relative bg-gold-lightest overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80"
          alt="Gas hob flame burning blue and orange"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gold-lightest via-gold-lightest/80 to-gold-lightest/20" />
        <Container className="relative py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[50px] bg-white border border-gold/40 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="t-body-sm-med text-ink">Business gas</span>
              </div>
              <h1 className="t-display t-serif text-ink">
                Compare business gas{" "}
                <span className="text-accent-green italic">in seconds.</span>
              </h1>
              <p className="t-lead text-ink/70 mt-6 max-w-xl">
                Live gas tariffs from every major UK supplier, quoted from
                your real consumption, not estimates. Same-day quotes for
                SMEs, multi-site portfolios and high-consumption industrial
                sites.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <ButtonLink href="#compare" variant="primary" size="lg">
                  Compare gas →
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline" size="lg">
                  Speak to a specialist
                </ButtonLink>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md pt-6 border-t border-gold/30">
                <Stat value="20+" label="UK suppliers" />
                <Stat value="22–38%" label="Typical saving" />
                <Stat value="4.8★" label="Trustpilot" />
              </div>
            </div>
            <div id="compare">
              <CompareForm variant="light" />
            </div>
          </div>
        </Container>
      </section>

      <SupplierLogos heading="Gas tariffs from the UK's leading suppliers" />

      <section className="py-24">
        <Container>
          <div className="max-w-2xl">
            <span className="t-eyebrow text-accent-green">
              How it works
            </span>
            <h2 className="t-h2 mt-3">
              Three steps to a better gas contract.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                t: "Postcode + MPR",
                d: "Drop in your postcode and meter point reference. Or just the postcode if you don't have it handy.",
              },
              {
                t: "Live tariff table",
                d: "Filter by 12, 24, 36 or 48-month contracts. Sort by unit rate or total annual cost.",
              },
              {
                t: "E-sign + done",
                d: "Sign online and we handle the switchover with your existing supplier.",
              },
            ].map((s, i) => (
              <Card key={s.t} variant="paper">
                <p className="t-eyebrow text-accent-green">
                  Step 0{i + 1}
                </p>
                <h3 className="t-card-title mt-3">{s.t}</h3>
                <p className="t-body text-ink-soft mt-3">{s.d}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24 bg-ceramic">
        <Container>
          <div className="max-w-2xl">
            <span className="t-eyebrow text-accent-green">
              For every kind of business
            </span>
            <h2 className="t-h2 mt-3">
              From corner shops to multi-site portfolios.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <UseCase
              title="Hospitality"
              body="Pubs, restaurants and hotels with high overnight gas usage."
              image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
            />
            <UseCase
              title="Manufacturing"
              body="Industrial heating, kilns, and process gas, variable consumption sorted."
              image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80"
            />
            <UseCase
              title="Healthcare"
              body="Care homes and clinics with regulated heating requirements."
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
            />
            <UseCase
              title="Retail"
              body="Independent and chain retailers with multi-site portfolios."
              image="https://images.unsplash.com/photo-1604754742629-3e5728249d73?auto=format&fit=crop&w=900&q=80"
            />
          </div>
        </Container>
      </section>

      <FaqList
        heading="Business gas questions, answered"
        items={[
          {
            q: "How accurate are the quotes?",
            a: "We use live supplier tariffs and your actual annual consumption to produce real, sign-ready quotes, not estimates.",
          },
          {
            q: "Can I switch gas and electricity together?",
            a: "Yes, and we'll quote them side by side so you can pick the best supplier for each, or bundle them.",
          },
          {
            q: "What about new gas connections?",
            a: "Our meters team handles new connections and meter installations end to end.",
          },
          {
            q: "Do you handle out-of-contract or deemed rates?",
            a: "Yes, these are usually the most expensive tariffs. We can move you to a fixed contract immediately.",
          },
        ]}
      />

      <CtaBanner
        title="Find your cheapest gas contract."
        body="20+ UK gas suppliers compared live. No fees. Switch in 4-13 hours."
      />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="t-h4 text-accent-green">{value}</p>
      <p className="t-body-sm text-ink-soft">{label}</p>
    </div>
  );
}

function UseCase({
  title,
  body,
  image,
}: {
  title: string;
  body: string;
  image: string;
}) {
  return (
    <Card
      variant="paper"
      className="card-hover relative !p-0 border border-hairline overflow-hidden h-full flex flex-col group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-house-green/80 via-house-green/20 to-transparent" />
        <Badge variant="gold" className="absolute top-3 left-3 !text-[11px]">
          {title}
        </Badge>
      </div>
      <div className="p-5 flex-1">
        <h3 className="t-card-title">{title}</h3>
        <p className="t-body-sm text-ink/70 mt-3 leading-relaxed">{body}</p>
      </div>
    </Card>
  );
}
