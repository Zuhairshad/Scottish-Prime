import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FaqList } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Business Meter Installation, Scottish Prime Energy",
  description:
    "Free smart, half-hourly and standard meter installation for UK businesses. Managed end to end.",
};

export default function MeterInstallationPage() {
  return (
    <>
      <section className="relative surface-house overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=2000&q=80"
          alt="UK industrial site with smart meter"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-house-green via-house-green/80 to-house-green/35" />
        <Container className="relative py-20 md:py-28">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div>
              <Badge variant="gold-outline" className="mb-5">
                Meter installation
              </Badge>
              <h1 className="t-display">
                Free meter installs.{" "}
                <span className="text-gold">Smart by default.</span>
              </h1>
              <p className="t-lead text-white/75 mt-6 max-w-xl">
                Smart, half-hourly or standard, we install, configure and
                certify business meters across the UK at no cost when you
                switch your supply with us.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <ButtonLink href="/#compare" variant="on-dark-fill" size="lg">
                  Request an install →
                </ButtonLink>
                <ButtonLink href="/contact" variant="on-dark-outline" size="lg">
                  Talk to a specialist
                </ButtonLink>
              </div>
            </div>

            <Card variant="house" className="bg-uplift-green">
              <Badge variant="green-soft" className="mb-4">Most requested</Badge>
              <h3 className="t-h3 text-on-dark">Smart meter (SMETS2)</h3>
              <p className="t-body text-on-dark-soft mt-3">
                Half-hourly readings, automatic billing, no manual reads.
              </p>
              <ul className="mt-6 space-y-3 t-body-sm-med text-on-dark">
                <Tick>Free install &amp; commissioning</Tick>
                <Tick>Half-hourly granularity</Tick>
                <Tick>Works with all major UK suppliers</Tick>
                <Tick>4–6 week typical lead time</Tick>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-2xl">
            <span className="t-eyebrow text-accent-green">Meter types</span>
            <h2 className="t-h2 mt-3">
              Every business meter type, installed by certified UK engineers.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <MeterCard
              tag="Smart"
              tagVariant="green"
              title="Smart meter (SMETS2)"
              body="Half-hourly readings sent automatically to your supplier. End of estimated billing."
              specs={["SMETS2 certified", "WAN-connected", "In-Home Display included"]}
              image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80"
            />
            <MeterCard
              tag="Half-hourly"
              tagVariant="gold"
              title="Half-hourly (HH) meter"
              body="Mandatory for sites with 100+ kVA maximum demand. Detailed settlement data."
              specs={["Profile class 5–8", "Data collector & aggregator", "Full HH data feed"]}
              image="https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80"
            />
            <MeterCard
              tag="Standard"
              tagVariant="green-soft"
              title="Standard credit meter"
              body="Single or two-rate analogue meters for smaller business sites with stable demand."
              specs={["Profile class 1–4", "Quarterly meter reads", "MPAN / MPRN registered"]}
              image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </Container>
      </section>

      <section className="py-24 bg-ceramic">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <span className="t-eyebrow text-accent-green">How it works</span>
            <h2 className="t-h2 mt-3">From request to certified install in 4–6 weeks.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              {
                n: "01",
                t: "Tell us about your site",
                d: "Postcode, business name and current supply, we identify your MPAN/MPRN automatically.",
              },
              {
                n: "02",
                t: "We confirm meter type",
                d: "Our engineers confirm which meter suits your load profile and arrange supplier sign-off.",
              },
              {
                n: "03",
                t: "Engineer site visit",
                d: "MOCOPA-accredited engineer installs the meter and commissions the WAN connection.",
              },
              {
                n: "04",
                t: "Certified & live",
                d: "Meter goes live, settlement registered, first half-hourly reads flow to your supplier.",
              },
            ].map((s) => (
              <Card key={s.n} variant="paper">
                <p className="t-eyebrow text-accent-green">Step {s.n}</p>
                <h3 className="t-card-title mt-3">{s.t}</h3>
                <p className="t-body-sm text-ink-soft mt-3">{s.d}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="t-eyebrow text-accent-green">Why install with us</span>
              <h2 className="t-h2 mt-3">
                MOCOPA-accredited. Free at the point of switch.
              </h2>
              <p className="t-body text-ink-soft mt-4">
                Our metering team is MOCOPA-accredited for HH and smart
                installations across England, Scotland and Wales. We
                co-ordinate with your DNO, MOP and supplier so you don&apos;t
                have to.
              </p>
              <ButtonLink href="/contact" variant="primary" className="mt-8">
                Book a site survey →
              </ButtonLink>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card variant="paper">
                <p className="t-h3 text-ink">£0</p>
                <p className="t-body-sm text-ink-soft mt-1">
                  Install cost when you switch supply with us
                </p>
              </Card>
              <Card variant="paper">
                <p className="t-h3 text-ink">4–6 wks</p>
                <p className="t-body-sm text-ink-soft mt-1">
                  Typical end-to-end lead time
                </p>
              </Card>
              <Card variant="paper">
                <p className="t-h3 text-ink">MOCOPA</p>
                <p className="t-body-sm text-ink-soft mt-1">
                  Accredited for HH and smart installs
                </p>
              </Card>
              <Card variant="paper">
                <p className="t-h3 text-ink">UK-wide</p>
                <p className="t-body-sm text-ink-soft mt-1">
                  Engineers across England, Scotland &amp; Wales
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <FaqList
        heading="Meter installation questions, answered"
        items={[
          {
            q: "Do I have to pay for a new meter?",
            a: "No. When you switch your supply through Scottish Prime Energy, the meter install is free, covered by your supplier as part of the contract.",
          },
          {
            q: "Will my supply be interrupted during install?",
            a: "There&apos;s typically a 20–40 minute supply interruption while the engineer fits the new meter. We schedule it around your trading hours.",
          },
          {
            q: "Can I keep my existing supplier and just upgrade my meter?",
            a: "Possible in some cases, your existing supplier may need to authorise the install. Our team can co-ordinate this for you.",
          },
          {
            q: "What&apos;s the difference between SMETS2 and HH metering?",
            a: "SMETS2 is the UK&apos;s second-generation smart meter standard for smaller sites. HH (half-hourly) is mandatory for sites with 100+ kVA peak demand.",
          },
        ]}
      />

      <CtaBanner
        eyebrow="Free with every switch"
        title="Upgrade your meter for free."
        body="Smart, half-hourly or standard, MOCOPA-accredited engineers install at no cost when you switch your supply with us."
        primaryLabel="Compare prices →"
        primaryHref="/#compare"
      />
    </>
  );
}

function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-accent-green mt-0.5">✓</span>
      <span>{children}</span>
    </li>
  );
}

function MeterCard({
  tag,
  tagVariant,
  title,
  body,
  specs,
  image,
}: {
  tag: string;
  tagVariant: "green" | "gold" | "green-soft" | "house";
  title: string;
  body: string;
  specs: string[];
  image: string;
}) {
  const featured = tag === "Smart";
  return (
    <Card
      variant="paper"
      className={`card-hover relative !p-0 border overflow-hidden h-full flex flex-col group ${
        featured ? "border-gold/50" : "border-hairline"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-house-green/85 via-house-green/30 to-transparent" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <Badge variant={tagVariant} className="backdrop-blur-sm">
            {tag}
          </Badge>
          {featured && (
            <span className="t-body-sm-med text-gold bg-house-green/60 backdrop-blur-sm rounded-[50px] px-2.5 py-[3px] text-[11px]">
              Most requested
            </span>
          )}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="t-card-title">{title}</h3>
        <p className="t-body text-ink/70 mt-3 flex-1 leading-relaxed">{body}</p>

        <ul className="mt-5 pt-4 border-t border-hairline space-y-2.5">
          {specs.map((s) => (
            <li
              key={s}
              className="flex items-start gap-2.5 t-body-sm text-ink"
            >
              <span className="mt-[2px] inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent-green/15 text-accent-green text-[10px] font-bold">
                ✓
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
