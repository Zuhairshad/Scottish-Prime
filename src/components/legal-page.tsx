import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <>
      <section className="bg-canvas border-b border-hairline">
        <Container className="py-14 md:py-20">
          <Link
            href="/"
            className="t-body-sm-med text-ink-soft hover:text-ink inline-flex items-center gap-1 mb-5"
          >
            ← Back to home
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <Badge variant="gold-outline">Legal</Badge>
            <span className="t-body-sm text-ink-soft">
              Last updated · {updated}
            </span>
          </div>
          <h1 className="t-hero t-serif text-ink max-w-3xl">{title}</h1>
          <p className="t-lead text-ink/70 mt-5 max-w-2xl">{intro}</p>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid lg:grid-cols-[220px_1fr] gap-10">
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-3">
                <p className="t-eyebrow text-ink-soft">In this document</p>
                <ul className="space-y-2">
                  {sections.map((s) => (
                    <li key={s.heading}>
                      <a
                        href={`#${slug(s.heading)}`}
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
              <div className="rounded-[12px] border border-gold/30 bg-gold-lightest p-5 mb-10">
                <p className="t-body-sm-med text-gold-dark">
                  Placeholder document
                </p>
                <p className="t-body-sm text-ink/70 mt-1">
                  The text below is a working draft, not legal advice. Final
                  copy will be issued by counsel before launch.
                </p>
              </div>

              {sections.map((s) => (
                <div
                  key={s.heading}
                  id={slug(s.heading)}
                  className="mb-10 scroll-mt-32 last:mb-0"
                >
                  <h2 className="t-h3 mb-3">{s.heading}</h2>
                  <p className="t-body text-ink/80 leading-relaxed">{s.body}</p>
                </div>
              ))}

              <div className="mt-12 pt-8 border-t border-hairline">
                <p className="t-body-sm text-ink-soft">
                  Questions about this document?{" "}
                  <Link
                    href="/contact"
                    className="text-accent-green hover:underline"
                  >
                    Contact our press desk
                  </Link>
                  .
                </p>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
}

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
