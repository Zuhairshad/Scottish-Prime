import { Container } from "@/components/ui/container";

type Item = { q: string; a: string };

export function FaqList({
  heading = "Frequently asked questions",
  items,
}: {
  heading?: string;
  items: Item[];
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <span className="t-eyebrow text-accent-green">Help & FAQ</span>
            <h2 className="t-h2 mt-3">{heading}</h2>
            <p className="t-body text-ink-soft mt-4">
              Quick answers to the questions UK business owners ask us most.
            </p>
          </div>
          <div className="space-y-3">
            {items.map((item) => (
              <details
                key={item.q}
                className="group bg-paper rounded-[8px] border-b border-hairline p-6"
              >
                <summary className="flex items-center justify-between cursor-pointer t-h5 text-ink list-none">
                  <span>{item.q}</span>
                  <span className="ml-4 text-accent-green text-xl leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="t-body text-ink-soft mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
