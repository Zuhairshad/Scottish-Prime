import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FaqList } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Renewable Business Energy, Scott Prime Energy",
  description:
    "100% REGO-backed renewable electricity tariffs and green gas for UK businesses. Compare 10+ green suppliers.",
};

export default function RenewableEnergyPage() {
  return (
    <>
      <section className="relative surface-house overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=80"
          alt="Wind turbines across a UK landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-house-green via-house-green/80 to-house-green/35" />
        <Container className="relative py-20 md:py-28">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div>
              <Badge variant="gold-outline" className="mb-5">
                Renewable energy
              </Badge>
              <h1 className="t-display">
                100% renewable.{" "}
                <span className="text-gold">No premium required.</span>
              </h1>
              <p className="t-lead text-white/75 mt-6 max-w-xl">
                REGO-backed renewable electricity tariffs are now within a
                penny of standard rates. Switch your UK business to certified
                green energy in under 4-13 hours.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <ButtonLink href="/#compare" variant="on-dark-fill" size="lg">
                  Compare green tariffs →
                </ButtonLink>
                <ButtonLink href="/insights/rego-renewable-tariffs-guide" variant="on-dark-outline" size="lg">
                  Read the REGO guide
                </ButtonLink>
              </div>
            </div>

            <Card variant="house" className="bg-uplift-green">
              <Badge variant="green-soft" className="mb-4">Certified</Badge>
              <h3 className="t-h3 text-on-dark">REGO-backed tariffs</h3>
              <p className="t-body text-on-dark-soft mt-3">
                Every kWh you consume matched 1:1 with a Renewable Energy
                Guarantee of Origin certificate.
              </p>
              <ul className="mt-6 space-y-3 t-body-sm-med text-on-dark">
                <Tick>Ofgem-administered scheme</Tick>
                <Tick>Wind, solar, hydro &amp; biomass</Tick>
                <Tick>Scope 2 emissions = 0</Tick>
                <Tick>Carbon reporting evidence pack</Tick>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-4 gap-6">
            <StatCard value="12+" label="Green suppliers compared" />
            <StatCard value="100%" label="REGO-backed electricity" />
            <StatCard value="0 tCO₂e" label="Scope 2 emissions" />
            <StatCard value="< 1p" label="Premium vs standard tariff" />
          </div>
        </Container>
      </section>

      <section className="py-24 bg-ceramic">
        <Container>
          <div className="max-w-2xl">
            <span className="t-eyebrow text-accent-green">Green tariff types</span>
            <h2 className="t-h2 mt-3">
              Three ways UK businesses go renewable.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <TariffCard
              tag="Entry"
              tagVariant="green"
              title="REGO-matched"
              body="Every unit consumed matched 1:1 with a Renewable Energy Guarantee of Origin. The default green tariff."
              specs={["Within 1p of standard rates", "Available from all major suppliers", "Annual certificate provided"]}
              image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
            />
            <TariffCard
              tag="Premium"
              tagVariant="house"
              title="Source-tracked PPA"
              body="Your supply matched to a specific UK wind farm or solar park via a Power Purchase Agreement."
              specs={["Demonstrates additionality", "Site-specific reporting", "Multi-year contracts"]}
              image="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80"
            />
            <TariffCard
              tag="Carbon-neutral"
              tagVariant="green-soft"
              title="Green gas + offsets"
              body="Biomethane-injected gas supply plus verified offsets for residual scope 1 emissions."
              specs={["Biomethane injection", "Verified carbon credits", "Annual ESG evidence pack"]}
              image="https://images.unsplash.com/photo-1473312644643-9d6e72d61d28?auto=format&fit=crop&w=1200&q=80"
            />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="t-eyebrow text-accent-green">Why now</span>
              <h2 className="t-h2 mt-3">
                Green energy used to cost more. Not any more.
              </h2>
              <p className="t-body text-ink-soft mt-4">
                Wholesale renewable generation has scaled dramatically. For
                most UK SMEs, switching to a 100% REGO-backed tariff now adds
                less than a penny per unit, often nothing at all. The
                reporting benefit is significant.
              </p>
              <ul className="mt-6 space-y-3 t-body text-ink">
                <Bullet>Reduce reportable Scope 2 emissions to zero</Bullet>
                <Bullet>Satisfy ESG and procurement frameworks</Bullet>
                <Bullet>Strengthen tender responses and B-Corp positioning</Bullet>
                <Bullet>Future-proof against carbon levies</Bullet>
              </ul>
              <ButtonLink href="/#compare" variant="primary" className="mt-8">
                Run a green comparison →
              </ButtonLink>
            </div>

            <Card variant="paper">
              <span className="t-eyebrow text-accent-green">Sample comparison</span>
              <h3 className="t-card-title mt-3">Café chain, 3 sites · 84,000 kWh / year</h3>
              <div className="mt-6 space-y-4">
                <CompareRow
                  label="Standard tariff"
                  value="£21,420 / yr"
                  sub="0% REGO-backed"
                />
                <CompareRow
                  label="Green tariff"
                  value="£21,650 / yr"
                  sub="100% REGO-backed"
                  highlight
                />
                <CompareRow
                  label="Premium"
                  value="+£230 / yr"
                  sub="Less than £20/month for net-zero electricity"
                />
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <FaqList
        heading="Renewable energy questions, answered"
        items={[
          {
            q: "Is REGO-backed electricity actually green?",
            a: "It&apos;s certified renewable under Ofgem&apos;s REGO scheme, every kWh you consume is matched 1:1 with renewable generation. For demonstrable additionality, a source-tracked PPA goes further.",
          },
          {
            q: "Can I get green gas too?",
            a: "Yes. Most major suppliers offer biomethane-blended gas tariffs, often paired with verified offsets to produce a carbon-neutral supply.",
          },
          {
            q: "Does green energy cost more?",
            a: "Usually no more than a penny per unit. For many UK SMEs, the green tariff and standard tariff are within £20/month of each other.",
          },
          {
            q: "Can I get evidence for my ESG report?",
            a: "Yes. Suppliers issue annual REGO certificates and emissions evidence packs that satisfy CDP, SECR and most procurement frameworks.",
          },
        ]}
      />

      <CtaBanner
        eyebrow="Net-zero made simple"
        title="Switch your UK business to 100% renewable."
        body="REGO-backed electricity from 12+ certified suppliers. Compare live in under 4-13 hours."
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-accent-green mt-0.5">✓</span>
      <span>{children}</span>
    </li>
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

function TariffCard({
  tag,
  tagVariant,
  title,
  body,
  specs,
  image,
}: {
  tag: string;
  tagVariant: "green" | "house" | "green-soft" | "gold";
  title: string;
  body: string;
  specs: string[];
  image: string;
}) {
  const featured = tag === "Premium";
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
              Best for ESG
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

function CompareRow({
  label,
  value,
  sub,
  highlight,
}: {
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-[12px] p-5 ${
        highlight
          ? "bg-green-light border-2 border-accent-green shadow-card"
          : "bg-white border border-hairline"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="t-body-sm-med text-ink flex items-center gap-2">
          {highlight && <span className="text-accent-green">★</span>}
          {label}
        </span>
        <span className="t-h4 text-ink">{value}</span>
      </div>
      <p className="t-body-sm text-ink/60 mt-1.5">{sub}</p>
    </div>
  );
}
