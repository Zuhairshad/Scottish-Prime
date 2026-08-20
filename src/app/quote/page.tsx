import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { QuoteResults, type Quote } from "@/components/quote-results";

export const metadata = {
  title: "Your live quotes, Scott Prime Energy",
  description:
    "Live business energy quotes ranked cheapest-first from every major UK supplier.",
};

import { SUPPLIER_LOGOS } from "@/data/suppliers";

const QUOTES: Quote[] = [
  {
    supplier: "Pozitive Energy",
    short: "Pz",
    tint: "accent",
    logo: SUPPLIER_LOGOS["pozitive-energy"],
    unitRate: "23.41p / kWh",
    standingCharge: "38.60p / day",
    annual: 9840,
    contract: "24 months",
    contractMonths: 24,
    green: false,
    tier: "SME",
  },
  {
    supplier: "Yu Energy",
    short: "Yu",
    tint: "gold",
    logo: SUPPLIER_LOGOS["yu-energy"],
    unitRate: "24.02p / kWh",
    standingCharge: "39.10p / day",
    annual: 10110,
    contract: "12 months",
    contractMonths: 12,
    green: false,
    tier: "SME",
  },
  {
    supplier: "E.ON Next",
    short: "EON",
    tint: "house",
    logo: SUPPLIER_LOGOS["eon-next"],
    unitRate: "24.45p / kWh",
    standingCharge: "40.30p / day",
    annual: 10380,
    contract: "12 months",
    contractMonths: 12,
    green: true,
    tier: "Major",
    badge: "Most popular",
  },
  {
    supplier: "British Gas",
    short: "BG",
    tint: "brand",
    logo: SUPPLIER_LOGOS["british-gas"],
    unitRate: "25.10p / kWh",
    standingCharge: "42.10p / day",
    annual: 10620,
    contract: "36 months",
    contractMonths: 36,
    green: false,
    tier: "Major",
  },
  {
    supplier: "EDF Energy",
    short: "EDF",
    tint: "accent",
    logo: SUPPLIER_LOGOS["edf-energy"],
    unitRate: "25.28p / kWh",
    standingCharge: "41.85p / day",
    annual: 10720,
    contract: "24 months",
    contractMonths: 24,
    green: false,
    tier: "Major",
  },
  {
    supplier: "Scottish Power",
    short: "SP",
    tint: "brand",
    logo: SUPPLIER_LOGOS["scottish-power"],
    unitRate: "25.45p / kWh",
    standingCharge: "43.20p / day",
    annual: 10810,
    contract: "12 months",
    contractMonths: 12,
    green: false,
    tier: "Major",
  },
  {
    supplier: "SSE",
    short: "SSE",
    tint: "accent",
    logo: SUPPLIER_LOGOS["sse"],
    unitRate: "25.80p / kWh",
    standingCharge: "42.50p / day",
    annual: 10920,
    contract: "24 months",
    contractMonths: 24,
    green: false,
    tier: "Major",
  },
];

const MARKET_AVERAGE = 13420;

type Search = {
  postcode?: string;
  businessName?: string;
  energyType?: string;
  renewal?: string;
};

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const params = await searchParams;
  const postcode = (params.postcode || "M1 4BT").toUpperCase();
  const business = params.businessName || "Your business";
  const energyType =
    params.energyType === "gas"
      ? "Business gas"
      : params.energyType === "both"
      ? "Gas + electricity"
      : "Business electricity";

  const cheapest = [...QUOTES].sort((a, b) => a.annual - b.annual)[0];
  const saving = MARKET_AVERAGE - cheapest.annual;

  return (
    <>
      <section className="bg-canvas border-b border-hairline">
        <Container className="py-10 md:py-14">
          <Link
            href="/"
            className="t-body-sm-med text-ink-soft hover:text-ink inline-flex items-center gap-1 mb-5"
          >
            ← Edit your details
          </Link>

          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <p className="t-eyebrow text-accent-green mb-2">Live quotes</p>
              <h1 className="t-hero text-ink">
                {QUOTES.length} live tariffs for{" "}
                <span className="text-accent-green">{postcode}</span>
              </h1>
              <p className="t-body text-ink-soft mt-3 max-w-xl">
                {energyType} · {business} · ranked cheapest-first using your
                estimated annual consumption. Quotes refresh every 60 seconds.
              </p>
            </div>

            <Card variant="paper" className="!p-5 min-w-[240px] border border-hairline">
              <p className="t-eyebrow text-gold">You could save</p>
              <p className="t-jumbo text-accent-green mt-1">
                £{saving.toLocaleString()}
              </p>
              <p className="t-body-sm text-ink-soft mt-1">
                vs. UK market average of £{MARKET_AVERAGE.toLocaleString()} /
                yr
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-10 md:py-14">
        <Container>
          <QuoteResults quotes={QUOTES} />
        </Container>
      </section>
    </>
  );
}
