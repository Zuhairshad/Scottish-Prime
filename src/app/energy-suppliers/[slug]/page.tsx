import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CompareForm } from "@/components/sections/compare-form";
import { CtaBanner } from "@/components/sections/cta-banner";
import { suppliers, getSupplier } from "@/data/suppliers";

export function generateStaticParams() {
  return suppliers.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supplier = getSupplier(slug);
  if (!supplier) return { title: "Supplier not found" };
  return {
    title: `${supplier.name} Business Energy, Scottish Prime Energy`,
    description: supplier.blurb,
  };
}

export default async function SupplierPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supplier = getSupplier(slug);
  if (!supplier) notFound();

  const related = suppliers
    .filter((s) => s.slug !== supplier.slug && s.category === supplier.category)
    .slice(0, 3);

  return (
    <>
      <section className="relative surface-house overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2000&q=80"
          alt="UK National Grid pylons across countryside"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-house-green via-house-green/80 to-house-green/35" />
        <Container className="relative py-20 md:py-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-start">
            <div>
              <Link
                href="/energy-suppliers"
                className="t-body-sm-med text-white/70 hover:text-white inline-flex items-center gap-1 mb-6"
              >
                ← All suppliers
              </Link>
              <Badge variant="gold-outline" className="mb-5">
                {supplier.category} supplier
              </Badge>
              <h1 className="t-display">
                {supplier.name}{" "}
                <span className="text-gold">business energy.</span>
              </h1>
              <p className="t-lead text-white/75 mt-6 max-w-xl">
                {supplier.blurb}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <ButtonLink href="#compare" variant="on-dark-fill" size="lg">
                  Get {supplier.name} quote →
                </ButtonLink>
                <ButtonLink href="/contact" variant="on-dark-outline" size="lg">
                  Talk to a specialist
                </ButtonLink>
              </div>

              <div className="grid grid-cols-3 gap-6 mt-10 t-body-sm text-white/70">
                <FactStat label="Established" value={supplier.established} />
                <FactStat label="UK HQ" value={supplier.hq} />
                <FactStat label="Customers" value={supplier.customers} />
              </div>
            </div>

            <div id="compare">
              <CompareForm variant="dark" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12">
            <div>
              <span className="t-eyebrow text-accent-green">
                Our procurement team&apos;s verdict
              </span>
              <h2 className="t-h2 mt-3">What we think of {supplier.name}.</h2>
              <p className="t-body text-ink-soft mt-4 max-w-2xl">
                {supplier.verdict}
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <ProsCard
                  title="Where they win"
                  items={supplier.features}
                  variant="pro"
                />
                <ProsCard
                  title="Worth knowing"
                  items={supplier.caveats}
                  variant="con"
                />
              </div>
            </div>

            <aside className="space-y-6">
              <Card variant="paper">
                <span className="t-eyebrow text-accent-green">Best for</span>
                <p className="t-body text-ink mt-2">{supplier.best}</p>
              </Card>

              <Card variant="paper">
                <span className="t-eyebrow text-accent-green">Fuels</span>
                <div className="flex flex-wrap gap-2 mt-3">
                  {supplier.fuels.map((f) => (
                    <Badge key={f} variant="green-soft">
                      {f}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card variant="paper">
                <span className="t-eyebrow text-accent-green">
                  Contract terms
                </span>
                <ul className="mt-3 space-y-1.5">
                  {supplier.contractTerms.map((t) => (
                    <li
                      key={t}
                      className="t-body-sm-med text-ink flex items-center gap-2"
                    >
                      <span className="text-accent-green">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </Card>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-ceramic">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="t-eyebrow text-accent-green">
                Compare against the market
              </span>
              <h2 className="t-h2 mt-3">
                See {supplier.name} against every other UK supplier, live.
              </h2>
              <p className="t-body text-ink-soft mt-4">
                We rank live tariffs from {supplier.name} against the rest of
                the market on your actual consumption profile. Free, no credit
                check, takes 30 seconds.
              </p>
              <ButtonLink href="/#compare" variant="primary" className="mt-8">
                Run a comparison →
              </ButtonLink>
            </div>

            <Card variant="paper">
              <span className="t-eyebrow text-accent-green">
                Sample quote, Manchester SME
              </span>
              <h3 className="t-card-title mt-2">42,000 kWh / yr · 12-month fix</h3>
              <div className="mt-6 space-y-3">
                <QuoteRow label={supplier.name} value="£10,840 / yr" highlight />
                <QuoteRow label="Market average" value="£11,420 / yr" />
                <QuoteRow label="Cheapest match" value="£10,210 / yr" />
              </div>
              <p className="t-body-sm text-ink-soft mt-6">
                Indicative figures based on June 2026 wholesale prices.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-20">
          <Container>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <span className="t-eyebrow text-accent-green">
                  Other {supplier.category.toLowerCase()} suppliers
                </span>
                <h2 className="t-h2 mt-3">Compare alongside.</h2>
              </div>
              <Link
                href="/energy-suppliers"
                className="t-body-sm-med text-accent-green hover:underline"
              >
                See all suppliers →
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/energy-suppliers/${r.slug}`}>
                  <Card variant="paper" className="h-full">
                    <Badge variant={r.variant}>{r.category}</Badge>
                    <h3 className="t-card-title mt-4">{r.name}</h3>
                    <p className="t-body-sm text-ink-soft mt-2">{r.blurb}</p>
                    <p className="t-body-sm-med text-accent-green mt-5">
                      View supplier →
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBanner
        eyebrow={`Switch to ${supplier.name}`}
        title={`Get a live ${supplier.name} quote in 30 seconds.`}
        body={`Free comparison. ${supplier.name} ranked against the rest of the UK market on your actual consumption.`}
      />
    </>
  );
}

function FactStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="t-eyebrow text-gold">{label}</p>
      <p className="t-body-sm-med text-white mt-1">{value}</p>
    </div>
  );
}

function ProsCard({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "pro" | "con";
}) {
  return (
    <Card variant="paper">
      <h3 className="t-card-title">{title}</h3>
      <ul className="mt-4 space-y-2.5 t-body-sm text-ink">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <span
              className={
                variant === "pro" ? "text-accent-green mt-0.5" : "text-gold mt-0.5"
              }
            >
              {variant === "pro" ? "✓" : "!"}
            </span>
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function QuoteRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-[8px] px-4 py-3 flex items-center justify-between ${
        highlight ? "bg-green-light border border-accent-green" : "bg-ceramic"
      }`}
    >
      <span className="t-body-sm-med text-ink">{label}</span>
      <span className="t-h5 text-ink">{value}</span>
    </div>
  );
}
