import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "About Us, Scottish Prime Energy",
  description:
    "Comparing UK business energy since 2007. Over £150M saved for 500,000+ UK businesses.",
};

export default function AboutPage() {
  return (
    <>
      {/* Editorial cream hero, no dark band, photo lives in column-2 */}
      <section className="bg-canvas">
        <Container className="py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="t-eyebrow text-accent-green mb-5">
                Our story, est. 2007
              </p>
              <h1 className="t-display t-serif text-ink">
                Built for the people who{" "}
                <span className="text-accent-green italic">actually run</span>{" "}
                businesses.
              </h1>
              <p className="t-lead text-ink/70 mt-7 max-w-xl">
                We started Scottish Prime Energy to fix the most frustrating part
                of running a UK business: buying energy. Two decades later,
                we&apos;re the country&apos;s leading independent marketplace, 
                live prices, transparent rates, switched online in thirty
                seconds.
              </p>
              <div className="flex flex-wrap gap-3 mt-9">
                <ButtonLink href="/#compare" variant="primary" size="lg">
                  Compare prices →
                </ButtonLink>
                <ButtonLink href="/reviews" variant="outline" size="lg">
                  Read 12,000+ reviews
                </ButtonLink>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg pt-6 border-t border-hairline">
                <Inline value="500K+" label="Businesses" />
                <Inline value="£150M+" label="Saved" />
                <Inline value="4.8 / 5" label="Trustpilot" />
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[12px] overflow-hidden aspect-[4/5] shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                  alt="Scottish Prime Energy team in a collaborative working session"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-left-8 max-w-[260px]">
                <Card variant="paper" className="!p-4">
                  <p className="t-eyebrow text-gold">Glasgow HQ</p>
                  <p className="t-h5 mt-1">120-person team</p>
                  <p className="t-body-sm text-ink-soft mt-1">
                    Procurement, engineering and account management, all
                    under one roof.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="£150M+" label="Saved for UK businesses" />
            <StatCard value="500K+" label="Businesses served" />
            <StatCard value="20+" label="Suppliers compared live" />
            <StatCard value="4.8 / 5" label="Trustpilot rating" />
          </div>
        </Container>
      </section>

      <section className="py-24 bg-ceramic">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12">
            <div>
              <span className="t-eyebrow text-accent-green">Our story</span>
              <h2 className="t-h2 mt-3">
                Two decades of stripping the noise out of UK business energy.
              </h2>
            </div>
            <div className="space-y-10">
              <Milestone
                year="2007"
                title="Founded in Glasgow"
                body="Started as a two-person team taking on the hold-music industrial complex of UK business energy."
              />
              <Milestone
                year="2012"
                title="100,000 businesses served"
                body="Crossed our first major milestone, over 100,000 UK SMEs switched through Scottish Prime."
              />
              <Milestone
                year="2017"
                title="Launched live comparison"
                body="The first UK marketplace to show live business energy prices from every major supplier on one screen."
              />
              <Milestone
                year="2021"
                title="myHUB customer portal"
                body="Renewals, contracts and invoices in one place, no more chasing paperwork at expiry."
              />
              <Milestone
                year="2026"
                title="£150M saved"
                body="Half a million UK businesses have switched with us. Still independent. Still free to use."
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-2xl">
            <span className="t-eyebrow text-accent-green">What we believe</span>
            <h2 className="t-h2 mt-3">Three things that make us different.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <ValueCard
              tag="Transparent"
              tagVariant="green"
              title="Live, not lagged"
              body="No call-centre quotes. Every tariff we show is the rate the supplier is offering right now, refreshed by the second."
            />
            <ValueCard
              tag="Independent"
              tagVariant="house"
              title="Free to use, always"
              body="We&apos;re paid by suppliers, never by you. We rank by total cost, never by who pays us more."
            />
            <ValueCard
              tag="Built in-house"
              tagVariant="green-soft"
              title="Engineers on staff"
              body="Our comparison engine, contract automation and myHUB portal are all built by our own product team in Glasgow."
            />
          </div>
        </Container>
      </section>

      <section className="py-24 bg-ceramic">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="t-eyebrow text-accent-green">Recognition</span>
              <h2 className="t-h2 mt-3">Awards and accreditations.</h2>
              <p className="t-body text-ink-soft mt-4">
                Recognised by the industry and the UK business community for
                customer service, transparency and innovation in energy
                procurement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "UK Energy Awards, Broker of the Year",
                "Trustpilot Excellence 2025",
                "Sunday Times Best Companies",
                "Investors in People Gold",
                "ICS ServiceMark",
                "Cyber Essentials Plus",
              ].map((a) => (
                <Card key={a} variant="paper">
                  <p className="t-body-sm-med text-ink">{a}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Join 500,000+ UK businesses"
        title="Switch your business energy with us."
        body="Live multi-supplier comparison. Free to use. Trusted by half a million UK companies."
      />
    </>
  );
}

function Inline({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="t-h4 text-accent-green">{value}</p>
      <p className="t-body-sm text-ink-soft">{label}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <Card variant="paper" className="card-hover border border-hairline">
      <div className="w-10 h-1 rounded-full bg-accent-green mb-5" />
      <p className="t-jumbo text-accent-green leading-none">{value}</p>
      <p className="t-body text-ink/65 mt-3">{label}</p>
    </Card>
  );
}

function Milestone({
  year,
  title,
  body,
}: {
  year: string;
  title: string;
  body: string;
}) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-6 group">
      <div className="relative">
        <span className="t-h3 text-accent-green leading-none">{year}</span>
        <div className="absolute -right-3 top-1/2 w-px h-12 -translate-y-1/2 bg-hairline-strong hidden md:block" />
      </div>
      <div className="pb-6 border-b border-hairline group-last:border-b-0">
        <h3 className="t-card-title">{title}</h3>
        <p className="t-body text-ink/70 mt-2">{body}</p>
      </div>
    </div>
  );
}

function ValueCard({
  tag,
  tagVariant,
  title,
  body,
}: {
  tag: string;
  tagVariant: "green" | "house" | "green-soft" | "gold";
  title: string;
  body: string;
}) {
  return (
    <Card variant="paper" className="card-hover relative !p-7 border border-hairline overflow-hidden">
      {/* Top accent bar */}
      <span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green via-brand-green to-house-green"
      />
      <div className="flex items-center justify-between mb-5">
        <Badge variant={tagVariant}>{tag}</Badge>
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gold-lightest text-gold text-[14px] font-semibold border border-gold/30">
          ✓
        </span>
      </div>
      <h3 className="t-card-title">{title}</h3>
      <p className="t-body text-ink/70 mt-3 leading-relaxed">{body}</p>
    </Card>
  );
}
