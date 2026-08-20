import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { articles, type Article } from "@/data/articles";

export const metadata = {
  title: "Energy Market Insights, Scott Prime Energy",
  description:
    "UK business energy market analysis, switching guides and renewable energy explainers.",
};

const FILTER_CATEGORIES = [
  "All",
  "Market outlook",
  "Procurement",
  "Renewables",
  "Meters",
  "Policy",
];

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const active = params.category || "All";
  const [featured, ...rest] = articles;
  const filtered =
    active === "All" ? rest : rest.filter((a) => a.category === active);

  return (
    <>
      {/* Magazine masthead, cream canvas with faint editorial backdrop */}
      <section className="relative bg-canvas border-b border-hairline overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2000&q=80"
          alt="Editor's desk with a notebook, coffee and newspaper"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-canvas/15" />
        <Container className="relative py-14 md:py-20">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="t-eyebrow text-accent-green">
                  Issue 47, June 2026
                </span>
                <span className="h-px flex-1 bg-hairline-strong max-w-[200px]" />
                <span className="t-body-sm text-ink-soft">10 articles</span>
              </div>

              <h1 className="t-display t-serif text-ink leading-[1.05]">
                The UK energy market,{" "}
                <span className="text-accent-green italic">decoded.</span>
              </h1>
              <p className="t-lead text-ink/70 mt-6 max-w-xl">
                Plain-English explainers, switching guides, procurement deep
                dives and live market commentary, written by the team that
                actually buys energy for 500,000+ UK businesses.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="space-y-3 border-l border-hairline-strong pl-6">
                <p className="t-eyebrow text-ink-soft">In this issue</p>
                <ul className="space-y-2 t-body-sm">
                  <li>· Winter 2026 wholesale outlook</li>
                  <li>· REGO vs PPA, the additionality question</li>
                  <li>· Multi-site procurement playbook</li>
                  <li>· Half-hourly metering, explained</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Link href={`/insights/${featured.slug}`} className="group block">
            <Card
              variant="paper"
              className="card-hover grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center !p-6 border border-hairline"
            >
              <div className="relative aspect-[16/10] rounded-[12px] overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-house-green/85 via-house-green/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge variant={featured.categoryVariant} className="backdrop-blur-sm">
                    Featured · {featured.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 t-body-sm-med text-white">
                  {featured.readTime}
                </div>
              </div>
              <div>
                <p className="t-eyebrow text-accent-green">This week's read</p>
                <h2 className="t-h2 mt-3">{featured.title}</h2>
                <p className="t-body text-ink-soft mt-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 t-body-sm text-ink-soft mt-6">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <p className="t-body-sm-med text-accent-green mt-6">
                  Read the full outlook →
                </p>
              </div>
            </Card>
          </Link>
        </Container>
      </section>

      <section className="py-20 bg-ceramic">
        <Container>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="t-eyebrow text-accent-green">Latest articles</span>
              <h2 className="t-h2 mt-3">Browse the full archive.</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTER_CATEGORIES.map((cat) => {
                const isActive = active === cat;
                const href =
                  cat === "All" ? "/insights" : `/insights?category=${encodeURIComponent(cat)}`;
                return (
                  <Link
                    key={cat}
                    href={href}
                    scroll={false}
                    className={`t-body-sm-med px-4 py-1.5 rounded-full border press transition-colors ${
                      isActive
                        ? "bg-ink text-on-dark border-ink"
                        : "border-hairline-strong text-ink-soft hover:text-ink hover:border-ink"
                    }`}
                  >
                    {cat}
                  </Link>
                );
              })}
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <Card variant="paper" className="text-center !p-12 border border-hairline">
              <p className="t-h4 text-ink">No articles in this category yet.</p>
              <p className="t-body text-ink-soft mt-2">
                Try another filter or browse all articles.
              </p>
              <Link
                href="/insights"
                className="inline-block mt-5 t-body-sm-med text-accent-green hover:underline"
              >
                ← Back to all articles
              </Link>
            </Card>
          )}

        </Container>
      </section>

      <CtaBanner
        eyebrow="Beyond the headlines"
        title="Get insights tailored to your renewal."
        body="Our procurement team can pull a personalised market briefing for your sites, free for any business approaching renewal."
        primaryLabel="Request a briefing"
        primaryHref="/contact"
      />
    </>
  );
}

function ArticleCard({ article: a }: { article: Article }) {
  return (
    <Link href={`/insights/${a.slug}`} className="group block h-full">
      <Card
        variant="paper"
        className="card-hover !p-0 overflow-hidden h-full flex flex-col border border-hairline"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-house-green">
          <img
            src={a.image}
            alt={a.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-house-green/80 via-house-green/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge variant={a.categoryVariant} className="backdrop-blur-sm">
              {a.category}
            </Badge>
          </div>
          <div className="absolute bottom-3 right-4 t-body-sm-med text-white">
            {a.readTime}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <p className="t-eyebrow text-ink/50">{a.date}</p>
          <h3 className="t-card-title mt-2">{a.title}</h3>
          <p className="t-body-sm text-ink/65 mt-3 flex-1 leading-relaxed">
            {a.excerpt}
          </p>
          <div className="mt-5 pt-4 border-t border-hairline">
            <span className="t-body-sm-med text-accent-green card-arrow">
              Read article
              <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
