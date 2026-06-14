import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CompareForm } from "@/components/sections/compare-form";
import { SupplierLogos } from "@/components/sections/supplier-logos";
import { FaqList } from "@/components/sections/faq";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ScrollMarquee } from "@/components/scroll-marquee";
import { PressStrip } from "@/components/press-strip";

const HOME_TESTIMONIALS = [
  {
    quote:
      "Saved us thousands a year across three sites. The comparison engine actually showed live prices, no calls, no chasing. Our quarterly bills used to be a mystery; now I can predict to the pound what we'll pay each month. Switched the gas at the same time and it took an afternoon, not a fortnight.",
    name: "Priya Shah",
    role: "Director, Maven Logistics",
    location: "Manchester",
    saved: "£4,200 / yr",
    switchedFrom: "SSE",
    since: "2024",
  },
  {
    quote:
      "Switched our gas contract in twenty minutes. They handled the changeover with our existing supplier completely; I didn't speak to a single call centre, and the new rate kicked in the day after my old contract ended. Three years on, every renewal has been the same: one email, one e-signature, done.",
    name: "James Whitley",
    role: "Owner, The Whitley Group",
    location: "Leeds",
    saved: "£8,140 / yr",
    switchedFrom: "British Gas",
    since: "2023",
    featured: true,
  },
  {
    quote:
      "The team understood our multi-site setup and built a procurement strategy other brokers wouldn't even touch. Twenty-three care homes, half-hourly meters on the bigger sites, all rolling onto a single framework with our chosen supplier. Year one saved £41,000. Year two saved £29,000.",
    name: "Aisha Bennett",
    role: "Operations Lead, Northway Care",
    location: "Birmingham",
    saved: "£41,000 yr 1",
    switchedFrom: "Multiple",
    since: "2022",
  },
  {
    quote:
      "Our renewal window was nine days from closing. They had us locked into a better rate within forty-eight hours, properly impressive. The procurement team walked me through three options, told me which one they'd take, and explained why. No upsell, no pressure. The whole thing felt grown up.",
    name: "Hamza Khan",
    role: "MD, Khan Engineering",
    location: "Glasgow",
    saved: "£2,800 / yr",
    switchedFrom: "ScottishPower",
    since: "2025",
  },
  {
    quote:
      "First broker who explained REGOs without trying to sell me something. Now on a hundred percent renewable tariff at nine pence less per kWh than our old standard contract. They also produced an evidence pack we used directly in our SECR submission, saved our finance team a week of work.",
    name: "Eilidh Macleod",
    role: "Operations Director, Highland Roastery",
    location: "Edinburgh",
    saved: "£6,500 / yr",
    switchedFrom: "EDF Energy",
    since: "2025",
    featured: true,
  },
  {
    quote:
      "Multi-site procurement that doesn't feel like multi-site procurement. One dashboard, one account manager, contracts that all renew together. Across seventeen retail sites we're now paying less than we were eighteen months ago even with wholesale costs up. Their renewal alerts alone are worth the relationship.",
    name: "Marcus Tate",
    role: "Finance Lead, Tate Retail Group",
    location: "Bristol",
    saved: "£22,300 / yr",
    switchedFrom: "E.ON Next",
    since: "2024",
  },
  {
    quote:
      "We run a small hotel, most brokers ignore us. The Scottish Prime team gave us proper procurement attention and shaved thirty-one percent off our annual gas bill. The account manager calls every quarter to check we're still happy with the deal, which honestly nobody else does.",
    name: "Catherine Brodie",
    role: "Founder, Brodie Hospitality",
    location: "Aberdeen",
    saved: "£3,460 / yr",
    switchedFrom: "Octopus",
    since: "2025",
  },
  {
    quote:
      "Came for the comparison, stayed for myHUB. Renewal alerts, meter reads, invoices, every contract across our care homes in one place. Finance team is finally happy and I've got my evenings back. We've gone from juggling fourteen separate supplier portals to a single login.",
    name: "Sanjay Patel",
    role: "Procurement Director, Patel Care Services",
    location: "London",
    saved: "£18,900 / yr",
    switchedFrom: "Multiple",
    since: "2023",
  },
];

const IMG = {
  heroOwner:
    "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
  cafe: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
  manufacturing:
    "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1200&q=80",
  solar:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  pylons:
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
  team: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
};

export default function HomePage() {
  return (
    <>
      <section className="bg-canvas">
        <Container className="py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <Badge variant="gold-outline" className="mb-5">
                Trustpilot 4.8 / 5, 12,418 reviews
              </Badge>
              <h1 className="t-display t-serif text-ink">
                Switch your business energy in{" "}
                <span className="text-accent-green">30 seconds.</span>
              </h1>
              <p className="t-lead text-ink/70 mt-6 max-w-xl">
                The UK&apos;s only marketplace with live business electricity
                and gas prices from every major supplier, side by side, on a
                single screen. No call-centre quotes, no waiting on hold, no
                broker uplift you can&apos;t see.
              </p>
              <p className="t-lead text-ink/70 mt-4 max-w-xl">
                We pull live tariffs from 20+ UK suppliers, rank them against
                your actual consumption profile, and let you e-sign your new
                contract online in under thirty seconds. Independent since
                2007. Free to use, paid by suppliers, never by you. Over
                <span className="text-accent-green font-semibold"> £150M
                saved</span> for 500,000+ UK businesses to date.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <ButtonLink href="#compare" variant="primary" size="lg">
                  Compare prices →
                </ButtonLink>
                <ButtonLink href="/contact" variant="outline" size="lg">
                  Talk to an expert
                </ButtonLink>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 t-body-sm-med text-ink">
                <Inline icon="★" color="gold" label="£150M+ saved" />
                <Inline icon="✓" color="green" label="500,000+ businesses served" />
                <Inline icon="✓" color="green" label="20+ suppliers compared live" />
              </div>
            </div>

            <div id="compare" className="relative">
              <div className="absolute -top-4 -right-2 hidden md:block rotate-3 z-10">
                <Badge variant="gold" className="!text-[13px] shadow-card">
                  Most-saved this week: £29,600
                </Badge>
              </div>
              <div className="relative rounded-[12px] overflow-hidden shadow-card mb-6 aspect-[4/3]">
                <img
                  src={IMG.heroOwner}
                  alt="UK business owner reviewing energy quotes"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-house-green/85 via-house-green/20 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="t-body-sm-med text-gold mb-1">★★★★★</p>
                  <p className="t-body-sm">
                    &ldquo;Saved thousands a year across three sites. No hold
                    music. No chasing.&rdquo;
                  </p>
                  <p className="t-body-sm text-white/70 mt-1">
                    Priya · Maven Logistics, Manchester
                  </p>
                </div>
              </div>
              <CompareForm variant="light" />
            </div>
          </div>
        </Container>
      </section>

      <SupplierLogos />

      <section className="py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <span className="t-eyebrow text-accent-green">
              Everything you need
            </span>
            <h2 className="t-h1 text-brand-green mt-3">
              One marketplace, every UK business energy need.
            </h2>
            <p className="t-lead text-ink/70 mt-4">
              From live comparison to procurement, meter installation and
              renewable supply, Scottish Prime Energy is the single platform
              behind your business energy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <ServiceCard
              image={IMG.pylons}
              tag="Electricity"
              title="Business Electricity"
              body="Live tariffs from every major UK supplier, ranked against your actual annual consumption rather than estimates. E-sign your new contract online in thirty seconds with no credit check, and we line the switch up to start the day your existing contract ends."
              features={["20+ UK suppliers", "30-second e-sign", "Zero supply downtime"]}
              stat="Avg saving"
              statValue="27% / yr"
              href="/business-electricity"
            />
            <ServiceCard
              image={IMG.cafe}
              tag="Gas"
              title="Business Gas"
              body="Compare gas unit rates, standing charges and exit fees from every UK supplier on a single screen. Same-day quotes for SMEs, multi-site portfolios and high-consumption industrial sites, all priced from your real annual usage."
              features={["Live unit rates", "Same-day quotes", "Multi-site ready"]}
              stat="Typical saving"
              statValue="22–38%"
              href="/business-gas"
              accent
            />
            <ServiceCard
              image={IMG.solar}
              tag="Renewable"
              title="Renewable Energy"
              body="100% REGO-backed renewable electricity from twelve certified UK suppliers, often within a penny per kWh of standard rates. Cut your Scope 2 emissions to zero with audit-ready evidence for CDP, SECR and procurement frameworks."
              features={["REGO-certified", "Zero Scope 2", "12+ green suppliers"]}
              stat="Premium"
              statValue="< 1p / kWh"
              href="/renewable-energy"
            />
            <ServiceCard
              image={IMG.manufacturing}
              tag="Meters"
              title="Meter Installation"
              body="MOCOPA-accredited engineers fit SMETS2 smart meters, half-hourly meters and standard credit meters across England, Scotland and Wales. Free at the point of switch, fully co-ordinated with your DNO, MOP and supplier."
              features={["MOCOPA-accredited", "UK-wide engineers", "Free at switch"]}
              stat="Lead time"
              statValue="4–6 weeks"
              href="/meter-installation"
            />
          </div>
        </Container>
      </section>

      <section className="bg-house-green text-white">
        <Container className="py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="t-eyebrow text-gold">Why Scottish Prime</span>
              <h2 className="t-h1 text-white mt-3">
                Comparing UK business energy{" "}
                <span className="text-gold">since 2007.</span>
              </h2>
              <p className="t-lead text-white/75 mt-5">
                We&apos;re the only UK retailer that shows live business energy
                prices side by side, no waiting on hold, no broker uplift you
                can&apos;t see.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-10">
                <StatTile value="£150M+" label="Saved for UK businesses" />
                <StatTile value="500K+" label="Businesses served" />
                <StatTile value="20+" label="Suppliers compared live" />
                <StatTile value="4.8 ★" label="Trustpilot, 12K reviews" />
              </div>

              <div className="flex flex-wrap gap-3 mt-10">
                <ButtonLink href="/about" variant="on-dark-fill">
                  Our story
                </ButtonLink>
                <ButtonLink href="/reviews" variant="on-dark-outline">
                  Read 12,000+ reviews
                </ButtonLink>
              </div>
            </div>

            <div className="relative rounded-[12px] overflow-hidden aspect-[4/5] lg:aspect-[3/4] shadow-card">
              <img
                src={IMG.team}
                alt="Scottish Prime Energy UK procurement team"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-house-green/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur rounded-[12px] p-5 shadow-card">
                  <p className="t-eyebrow text-accent-green">Live right now</p>
                  <p className="t-h4 text-ink mt-1">
                    1,247 quotes generated today
                  </p>
                  <p className="t-body-sm text-ink/60 mt-1">
                    Average saving: 27% on annual electricity spend
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <span className="t-eyebrow text-accent-green">How it works</span>
            <h2 className="t-h1 text-brand-green mt-3">
              Switch in three steps.
            </h2>
            <p className="t-lead text-ink/70 mt-4">
              No call-centre quotes. No paperwork. No supply interruption.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                n: "01",
                t: "Enter your postcode",
                d: "Tell us where your business operates. We pull live rates from every major UK supplier in seconds.",
              },
              {
                n: "02",
                t: "Compare live prices",
                d: "Side-by-side tariffs, unit rates, standing charges and exit fees, all on one screen.",
              },
              {
                n: "03",
                t: "Switch online",
                d: "E-sign your contract. We manage your switch end to end with zero downtime.",
              },
            ].map((s, i) => (
              <Card
                key={s.n}
                variant="paper"
                className={`card-hover border ${
                  i === 0 ? "border-gold/40" : "border-hairline"
                }`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full t-h3 ${
                      i === 0
                        ? "bg-gold text-house-green"
                        : "bg-gold-lightest text-gold border border-gold/30"
                    }`}
                  >
                    {s.n}
                  </span>
                  <div>
                    <p className="t-eyebrow text-accent-green">Step {s.n}</p>
                    <p className="t-body-sm text-ink/55 mt-0.5">
                      {i === 0
                        ? "~15 seconds"
                        : i === 1
                        ? "~30 seconds"
                        : "Online e-sign"}
                    </p>
                  </div>
                </div>
                <h3 className="t-card-title">{s.t}</h3>
                <p className="t-body text-ink/70 mt-3">{s.d}</p>
                <div className="mt-6 pt-5 border-t border-hairline">
                  <span className="t-body-sm-med text-accent-green card-arrow">
                    {i === 2 ? "All done" : "Next step"}
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-ceramic">
        <Container>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div className="max-w-3xl">
              <span className="t-eyebrow text-accent-green">
                Loved by UK businesses
              </span>
              <h2 className="t-jumbo t-serif text-brand-green mt-4 leading-[1.05]">
                Half a million companies{" "}
                <span className="text-accent-green italic">switched with us.</span>
              </h2>
            </div>
            <Link
              href="/reviews"
              className="t-body-sm-med text-accent-green hover:underline whitespace-nowrap"
            >
              See all 12,000+ reviews →
            </Link>
          </div>
        </Container>

        {/* Sticky-pin marquee — vertical scroll drives horizontal swipe,
            then resumes downward scroll once all cards have passed */}
        <ScrollMarquee speed={1.8} easing={0.1} count={HOME_TESTIMONIALS.length}>
          {HOME_TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="w-[500px] md:w-[560px] h-[440px] flex-shrink-0 flex"
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </ScrollMarquee>
      </section>

      <section className="py-16 bg-canvas">
        <Container>
          <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-center">
            <div>
              <span className="t-eyebrow text-gold">As featured in</span>
              <h3 className="t-h3 text-ink mt-2 max-w-sm">
                The UK press on Scottish Prime Energy.
              </h3>
            </div>
            <PressStrip />
          </div>
        </Container>
      </section>

      <FaqList items={homeFaqs} />

      <CtaBanner
        eyebrow="Free comparison · No credit check"
        title="See your business savings in 30 seconds."
        body="Live prices from 20+ UK suppliers. Switched online. £150M+ saved already."
      />
    </>
  );
}

const homeFaqs = [
  {
    q: "How much could my business save?",
    a: "On average, UK businesses save 20–40% by switching to a more competitive supplier. The exact figure depends on your tariff, contract length and consumption profile.",
  },
  {
    q: "How long does a business energy switch take?",
    a: "Most switches complete in 4–6 weeks once your existing contract ends. Smart meter switches can complete in days. We manage every step.",
  },
  {
    q: "Will my supply be interrupted?",
    a: "No. Switching changes who bills you, not your physical supply. There is zero downtime.",
  },
  {
    q: "Do you charge any fees?",
    a: "Scottish Prime Energy is free to use. We're paid by suppliers, never by you, and every broker fee is disclosed on your quote.",
  },
];

function Inline({
  icon,
  color,
  label,
}: {
  icon: string;
  color: "gold" | "green";
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={color === "gold" ? "text-gold" : "text-accent-green"}>
        {icon}
      </span>
      {label}
    </span>
  );
}

function ServiceCard({
  image,
  tag,
  title,
  body,
  features,
  stat,
  statValue,
  href,
  accent,
}: {
  image: string;
  tag: string;
  title: string;
  body: string;
  features: string[];
  stat: string;
  statValue: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <Link href={href} className="group block">
      <Card
        variant="paper"
        className={`
          !p-0 overflow-hidden h-full flex flex-col
          border ${accent ? "border-gold/40" : "border-hairline"}
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_0_0.5px_rgba(0,0,0,0.16),0_12px_28px_-4px_rgba(0,30,43,0.18)]
          hover:border-accent-green/40
        `}
      >
        {/* Image — slight zoom on group hover */}
        <div className="relative aspect-[5/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Bottom gradient for badge legibility */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-house-green/80 via-house-green/30 to-transparent" />
          {/* Tag on bottom-left */}
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <Badge variant="house" className="!text-[11px] backdrop-blur-sm">
              {tag}
            </Badge>
            {accent && (
              <span className="t-body-sm-med text-gold bg-house-green/60 backdrop-blur-sm rounded-[50px] px-2.5 py-[3px] text-[11px]">
                Popular
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="t-card-title text-ink">{title}</h3>
          <p className="t-body-sm text-ink/65 mt-3 leading-relaxed">{body}</p>

          {/* Feature chips */}
          <ul className="mt-5 space-y-2">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 t-body-sm text-ink"
              >
                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-accent-green flex-shrink-0" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          {/* Footer — stat + CTA arrow */}
          <div className="mt-6 pt-5 border-t border-hairline flex items-end justify-between gap-3">
            <div>
              <p className="t-eyebrow text-ink/50">{stat}</p>
              <p className="t-h5 text-accent-green mt-0.5">{statValue}</p>
            </div>
            <span className="t-body-sm-med text-accent-green inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Explore
              <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}

function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[12px] bg-white/5 border border-white/10 p-5">
      <p className="t-h2 text-gold">{value}</p>
      <p className="t-body-sm text-white/70 mt-1">{label}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  location,
  featured,
  saved,
  switchedFrom,
  since,
}: {
  quote: string;
  name: string;
  role: string;
  location: string;
  featured?: boolean;
  saved?: string;
  switchedFrom?: string;
  since?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <Card
      variant={featured ? "gold-tint" : "paper"}
      className={`card-hover relative !p-6 border flex flex-col w-full h-full ${
        featured ? "border-gold/40" : "border-hairline"
      }`}
    >
      {/* Quotation mark watermark */}
      <span
        aria-hidden
        className={`absolute top-2 right-4 leading-none ${
          featured ? "text-gold/30" : "text-accent-green/15"
        }`}
        style={{ fontSize: "64px" }}
      >
        &ldquo;
      </span>

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-0.5 text-gold text-base">★★★★★</div>
          {featured && (
            <span className="t-body-sm-med text-gold bg-white/60 rounded-[50px] px-2.5 py-[3px] text-[11px]">
              Featured
            </span>
          )}
        </div>
        <p className="t-lead text-ink leading-snug flex-1">{quote}</p>

        {(saved || switchedFrom || since) && (
          <div
            className={`mt-4 grid grid-cols-3 gap-2 px-3 py-2.5 rounded-[10px] ${
              featured ? "bg-white/50" : "bg-ceramic/60"
            }`}
          >
            {saved && (
              <div>
                <p className="t-eyebrow text-ink/45 text-[10px]">Saved</p>
                <p className="t-body-sm-med text-accent-green mt-0.5">{saved}</p>
              </div>
            )}
            {switchedFrom && (
              <div>
                <p className="t-eyebrow text-ink/45 text-[10px]">From</p>
                <p className="t-body-sm-med text-ink mt-0.5">{switchedFrom}</p>
              </div>
            )}
            {since && (
              <div>
                <p className="t-eyebrow text-ink/45 text-[10px]">Since</p>
                <p className="t-body-sm-med text-ink mt-0.5">{since}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-ink/10 flex items-center gap-3">
          <span
            className={`inline-flex items-center justify-center w-11 h-11 rounded-full font-semibold text-[13px] flex-shrink-0 ${
              featured
                ? "bg-gold text-house-green"
                : "bg-house-green text-white"
            }`}
          >
            {initials}
          </span>
          <div className="min-w-0">
            <p className="t-body-sm-med text-ink truncate">{name}</p>
            <p className="t-body-sm text-ink/60 truncate">{role}</p>
            <p className="t-body-sm text-ink/45 truncate">{location}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
