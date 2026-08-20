import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "Customer Reviews, Scott Prime Energy",
  description:
    "Read 12,000+ verified reviews from UK businesses who've switched with us. Trustpilot 4.8 / 5.",
};

const reviews = [
  {
    quote:
      "Saved us £4,200 a year across our three sites. The comparison engine actually showed us live prices, no calls, no chasing.",
    name: "Priya Shah",
    role: "Director, Maven Logistics",
    location: "Manchester",
    rating: 5,
  },
  {
    quote:
      "Switched our gas contract in 20 minutes. They handled the changeover with our existing supplier completely.",
    name: "James Whitley",
    role: "Owner, The Whitley Group",
    location: "Leeds",
    rating: 5,
  },
  {
    quote:
      "The team understood our multi-site setup and built a procurement strategy that other brokers wouldn&apos;t even touch.",
    name: "Aisha Bennett",
    role: "Operations Lead, Northway Care",
    location: "Birmingham",
    rating: 5,
  },
  {
    quote:
      "Genuinely transparent, they showed me every quote, including the ones that didn&apos;t make them more money. Refreshing.",
    name: "Daniel Okoye",
    role: "Founder, Okoye & Co",
    location: "London",
    rating: 5,
  },
  {
    quote:
      "Our renewal window closed in 9 days and they had us locked into a better rate within 48 hours. Phenomenal.",
    name: "Hannah Reeves",
    role: "Finance Manager, Reeves Hospitality",
    location: "Bristol",
    rating: 5,
  },
  {
    quote:
      "myHUB is the single best customer portal I&apos;ve used in any utility. Renewal alerts saved us from rolling onto a deemed rate.",
    name: "Marcus Patel",
    role: "MD, Patel Engineering",
    location: "Coventry",
    rating: 5,
  },
  {
    quote:
      "Friendly team, no jargon, didn&apos;t try to push the most expensive deal. Will be back at our next renewal.",
    name: "Sophie Carter",
    role: "Owner, Carter Bakehouse",
    location: "Edinburgh",
    rating: 4,
  },
  {
    quote:
      "Took 4-13 hours to compare. Took 4 minutes to switch. Saved £1,800. Don&apos;t know why I waited so long.",
    name: "Owen Davies",
    role: "Director, Davies Print",
    location: "Cardiff",
    rating: 5,
  },
  {
    quote:
      "Specialist HH meter team was incredible. They know procurement better than any broker I&apos;ve dealt with in 12 years.",
    name: "Rebecca Lin",
    role: "Procurement Director, Northgate Foods",
    location: "Sheffield",
    rating: 5,
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="relative surface-house overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80"
          alt="Confident UK business owner pleased with energy savings"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-house-green via-house-green/80 to-house-green/25" />
        <Container className="relative py-20 md:py-24">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
            <div>
              <Badge variant="gold-outline" className="mb-5">
                Trustpilot Excellence 2025
              </Badge>
              <h1 className="t-display">
                Loved by{" "}
                <span className="text-accent-green">500,000+ UK businesses.</span>
              </h1>
              <p className="t-lead text-on-dark-soft mt-6 max-w-xl">
                12,000+ verified reviews. 4.8 average rating. Real businesses,
                real switches, real savings, straight from the people who run
                them.
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <ButtonLink href="/#compare" variant="on-dark-fill">
                  Compare prices →
                </ButtonLink>
                <ButtonLink href="https://uk.trustpilot.com" variant="on-dark-outline">
                  See on Trustpilot
                </ButtonLink>
              </div>
            </div>

            <Card variant="house" className="bg-uplift-green">
              <div className="flex gap-1 text-accent-green mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-2xl">★</span>
                ))}
              </div>
              <p className="t-jumbo text-on-dark">4.8 / 5</p>
              <p className="t-body text-on-dark-soft mt-2">
                Based on 12,418 verified Trustpilot reviews
              </p>
              <div className="mt-8 space-y-3">
                <RatingBar label="5 star" pct={86} />
                <RatingBar label="4 star" pct={9} />
                <RatingBar label="3 star" pct={3} />
                <RatingBar label="2 star" pct={1} />
                <RatingBar label="1 star" pct={1} />
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-4 gap-6">
            <StatCard value="12,418" label="Trustpilot reviews" />
            <StatCard value="4.8 / 5" label="Average rating" />
            <StatCard value="500K+" label="Businesses switched" />
            <StatCard value="£150M+" label="Saved in total" />
          </div>
        </Container>
      </section>

      <section className="py-20 bg-ceramic">
        <Container>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div className="max-w-xl">
              <span className="t-eyebrow text-accent-green">What customers say</span>
              <h2 className="t-h2 mt-3">
                12,000+ verified reviews from UK businesses.
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Most recent", "Highest rated", "Most relevant"].map((cat, i) => (
                <span
                  key={cat}
                  className={`t-body-sm-med px-4 py-1.5 rounded-full border ${
                    i === 0
                      ? "bg-ink text-on-dark border-ink"
                      : "border-hairline-strong text-ink-soft"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>

        </Container>
      </section>

      <CtaBanner
        eyebrow="Join half a million businesses"
        title="See why 86% of our customers rate us 5 stars."
        body="Live comparison. Free to use. Switched online in under 4-13 hours."
      />
    </>
  );
}

function RatingBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="t-body-sm text-on-dark-soft w-16">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-hairline-dark overflow-hidden">
        <div
          className="h-full bg-accent-green"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="t-body-sm text-on-dark-soft w-10 text-right">{pct}%</span>
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

function ReviewCard({
  quote,
  name,
  role,
  location,
  rating,
}: {
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <Card
      variant="paper"
      className="card-hover relative !p-7 border border-hairline overflow-hidden h-full flex flex-col"
    >
      <span
        aria-hidden
        className="absolute top-3 right-5 leading-none text-accent-green/15"
        style={{ fontSize: "84px" }}
      >
        &ldquo;
      </span>

      <div className="relative flex items-center justify-between mb-4">
        <div className="flex gap-0.5 text-gold text-lg">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={i < rating ? "" : "opacity-20"}>★</span>
          ))}
        </div>
        <span className="t-body-sm text-ink/50">Verified</span>
      </div>

      <p className="relative t-body md:text-[18px] text-ink leading-relaxed flex-1">
        {quote}
      </p>

      <div className="mt-6 pt-5 border-t border-hairline flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-house-green text-white font-semibold text-[13px]">
          {initials}
        </span>
        <div>
          <p className="t-body-sm-med text-ink">{name}</p>
          <p className="t-body-sm text-ink/60">{role}</p>
          <p className="t-body-sm text-ink/50">{location}</p>
        </div>
      </div>
    </Card>
  );
}
