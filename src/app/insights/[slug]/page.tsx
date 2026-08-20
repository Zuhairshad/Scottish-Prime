import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { articles, getArticle, type Article } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: `${article.title}, Scott Prime Energy`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 3);

  return (
    <>
      <section className="relative surface-house overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-house-green via-house-green/80 to-house-green/30" />
        <Container className="relative py-20 md:py-24">
          <div className="max-w-3xl">
            <Link
              href="/insights"
              className="t-body-sm-med text-on-dark-soft hover:text-on-dark inline-flex items-center gap-1 mb-6"
            >
              ← All insights
            </Link>
            <Badge variant={article.categoryVariant} className="mb-5">
              {article.category}
            </Badge>
            <h1 className="t-h1">{article.title}</h1>
            <p className="t-lead text-on-dark-soft mt-6">
              {article.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-6 mt-8 t-body-sm text-on-dark-soft">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-green text-house-green t-body-sm-med">
                  {initials(article.author.name)}
                </span>
                <div>
                  <p className="t-body-sm-med text-on-dark">
                    {article.author.name}
                  </p>
                  <p className="t-body-sm text-on-dark-soft">
                    {article.author.role}
                  </p>
                </div>
              </div>
              <span className="hidden md:inline opacity-40">·</span>
              <span>{article.date}</span>
              <span className="opacity-40">·</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-[1fr_3fr_1fr] gap-10">
            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <p className="t-eyebrow text-ink-soft mb-3">In this article</p>
                <ul className="space-y-2">
                  {article.body
                    .filter((s) => s.heading)
                    .map((s) => (
                      <li key={s.heading}>
                        <a
                          href={`#${slugify(s.heading!)}`}
                          className="t-body-sm text-ink-soft hover:text-accent-green"
                        >
                          {s.heading}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>

            <article className="max-w-2xl">
              {article.body.map((section, i) => (
                <div key={i} className={i > 0 ? "mt-10" : ""}>
                  {section.heading && (
                    <h2
                      id={slugify(section.heading)}
                      className="t-h3 mt-4 mb-4 scroll-mt-32"
                    >
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="t-body text-ink mt-4">
                      {p}
                    </p>
                  ))}
                </div>
              ))}

              <hr className="my-12 border-hairline" />

              <Card variant="ceramic">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-green text-house-green t-h5 flex-shrink-0">
                    {initials(article.author.name)}
                  </span>
                  <div>
                    <p className="t-body-sm-med text-ink">
                      {article.author.name}
                    </p>
                    <p className="t-body-sm text-ink-soft">
                      {article.author.role}
                    </p>
                    <p className="t-body-sm text-ink-soft mt-3">
                      Part of the Scott Prime Energy procurement team, 500,000+
                      UK businesses switched, £150M+ saved.
                    </p>
                  </div>
                </div>
              </Card>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-4">
                <Card variant="house" className="bg-house-green p-6">
                  <span className="t-eyebrow text-accent-green">Compare</span>
                  <h3 className="t-card-title text-on-dark mt-2">
                    Run a live quote on your business.
                  </h3>
                  <p className="t-body-sm text-on-dark-soft mt-2">
                    20+ suppliers, side by side, in 4-13 hours.
                  </p>
                  <ButtonLink
                    href="/#compare"
                    variant="on-dark-fill"
                    className="mt-5 w-full"
                  >
                    Compare prices →
                  </ButtonLink>
                </Card>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-ceramic">
          <Container>
            <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
              <div>
                <span className="t-eyebrow text-accent-green">
                  Related, {article.category}
                </span>
                <h2 className="t-h2 mt-3">More on this topic.</h2>
              </div>
              <Link
                href="/insights"
                className="t-body-sm-med text-accent-green hover:underline"
              >
                See all insights →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <RelatedCard key={r.slug} article={r} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBanner
        eyebrow="Want a tailored briefing"
        title="Get our market take on your renewal."
        body="Free briefing from our procurement desk, sized to your actual sites and consumption."
        primaryLabel="Request briefing"
        primaryHref="/contact"
      />
    </>
  );
}

function RelatedCard({ article: a }: { article: Article }) {
  return (
    <Link href={`/insights/${a.slug}`} className="block h-full">
      <Card
        variant="paper"
        className="h-full hover:shadow-[rgba(0,30,43,0.08)_0px_4px_12px_0px] transition-shadow"
      >
        <Badge variant={a.categoryVariant}>{a.category}</Badge>
        <h3 className="t-card-title mt-4">{a.title}</h3>
        <p className="t-body-sm text-ink-soft mt-2">{a.excerpt}</p>
        <div className="flex items-center gap-2 t-body-sm text-ink-soft mt-4">
          <span>{a.date}</span>
          <span>·</span>
          <span>{a.readTime}</span>
        </div>
      </Card>
    </Link>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
