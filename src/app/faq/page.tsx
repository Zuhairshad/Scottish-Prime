import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = {
  title: "FAQ, Scottish Prime Energy",
  description:
    "Answers to the most common questions about UK business energy comparison, switching, contracts and renewals.",
};

type Section = {
  heading: string;
  tag: string;
  variant: "green" | "house" | "gold" | "green-soft" | "gold-outline";
  items: { q: string; a: string }[];
};

const sections: Section[] = [
  {
    heading: "Switching",
    tag: "Switching",
    variant: "green",
    items: [
      {
        q: "How long does a business energy switch take?",
        a: "Most switches complete within 4–6 weeks of your existing contract end date. Smart meter switches can complete in a few working days.",
      },
      {
        q: "Will my supply be interrupted?",
        a: "No. Switching changes who bills you, not your physical supply. There is zero downtime.",
      },
      {
        q: "Can I switch mid-contract?",
        a: "Generally no, UK business contracts cannot be exited mid-term unless your supplier breaches the contract. We can line up your new deal to start the day your current contract ends.",
      },
      {
        q: "What information do I need to switch?",
        a: "Your business postcode, your MPAN/MPRN (on any energy bill), and your renewal date. We pull most of this automatically from your postcode.",
      },
    ],
  },
  {
    heading: "Contracts",
    tag: "Contracts",
    variant: "house",
    items: [
      {
        q: "What contract length should I choose?",
        a: "12, 24, 36 and 48-month terms are all common. Longer terms typically lock in a slightly lower rate but reduce flexibility. We&apos;ll show you total cost across all options.",
      },
      {
        q: "What is a deemed contract?",
        a: "A &lsquo;deemed&rsquo; contract is the expensive default rate you roll onto if you fail to switch before your existing contract ends. Avoid by switching early.",
      },
      {
        q: "What&apos;s a TPI fee and do you charge one?",
        a: "Third-Party Intermediary (TPI) fees are uplifts brokers sometimes add to your unit rate. Under new Ofgem rules these must be disclosed. We publish ours transparently in your quote.",
      },
      {
        q: "Can I bundle gas and electricity into one contract?",
        a: "Yes, most major UK suppliers offer dual-fuel for business customers, though it&apos;s often cheaper to buy each fuel from the best-priced supplier separately. We&apos;ll show both options.",
      },
    ],
  },
  {
    heading: "Pricing & billing",
    tag: "Billing",
    variant: "green-soft",
    items: [
      {
        q: "How much could my business save?",
        a: "UK businesses typically save 20–40% by switching to a more competitive supplier. The exact figure depends on your current tariff, contract length and consumption.",
      },
      {
        q: "Do you charge any fees?",
        a: "Scottish Prime Energy is free to use. We&apos;re paid by suppliers, never by you.",
      },
      {
        q: "What&apos;s the standing charge?",
        a: "A fixed daily fee covering the cost of being connected to the grid. Charged regardless of how much energy you use.",
      },
      {
        q: "What are unit rates and exit fees?",
        a: "Unit rate is the price per kWh of energy you consume. Exit fees apply if you terminate certain contracts early, we&apos;ll always flag them clearly before you sign.",
      },
    ],
  },
  {
    heading: "Meters",
    tag: "Meters",
    variant: "gold",
    items: [
      {
        q: "Do I have to pay for a new meter?",
        a: "No. When you switch supply with us, meter installs are free, covered by your supplier.",
      },
      {
        q: "What&apos;s the difference between smart, HH and standard meters?",
        a: "Smart meters auto-report half-hourly readings. HH meters are mandatory for sites with 100+ kVA peak demand. Standard meters are read manually or via dial-in.",
      },
      {
        q: "Can I switch supplier and keep my smart meter?",
        a: "Yes, SMETS2 meters work across all major UK suppliers in smart mode.",
      },
    ],
  },
  {
    heading: "Renewable energy",
    tag: "Renewable",
    variant: "green",
    items: [
      {
        q: "Is REGO-backed electricity actually green?",
        a: "Yes, it&apos;s certified renewable under Ofgem&apos;s REGO scheme, matching every kWh you consume 1:1 with renewable generation.",
      },
      {
        q: "Does green energy cost more?",
        a: "Usually less than a penny per unit. For most UK SMEs, the green and standard tariffs are within £20/month of each other.",
      },
      {
        q: "Can I get evidence for ESG reporting?",
        a: "Yes, annual REGO certificates and emissions evidence packs are issued by your supplier and accepted by CDP, SECR and most procurement frameworks.",
      },
    ],
  },
  {
    heading: "Support",
    tag: "Support",
    variant: "gold-outline",
    items: [
      {
        q: "Who do I contact if something goes wrong?",
        a: "Your dedicated account manager, their direct line is in your myHUB dashboard, or call us on 0161 521 3400.",
      },
      {
        q: "What is myHUB?",
        a: "Our customer portal, every contract, invoice, meter reading and renewal date in one place. Free for every Scottish Prime customer.",
      },
      {
        q: "Are you regulated by Ofgem?",
        a: "We&apos;re a TPI (Third-Party Intermediary) operating under Ofgem&apos;s broker code of practice. Suppliers are directly regulated by Ofgem.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="relative surface-house overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=2000&q=80"
          alt="Library of energy reference books and binders"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-house-green via-house-green/80 to-house-green/30" />
        <Container className="relative py-20 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="gold-outline" className="mb-5">
              Help &amp; FAQ
            </Badge>
            <h1 className="t-display">
              Every question{" "}
              <span className="text-accent-green">UK businesses ask us.</span>
            </h1>
            <p className="t-lead text-on-dark-soft mt-6 max-w-2xl">
              Switching, contracts, billing, meters, renewables and support, 
              the questions our customers ask most, answered without jargon.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <a
                key={s.heading}
                href={`#${s.heading.toLowerCase().replace(/\s/g, "-")}`}
                className="t-body-sm-med px-4 py-1.5 rounded-full border border-hairline-strong text-ink-soft hover:text-ink hover:border-ink"
              >
                {s.heading}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {sections.map((s, idx) => (
        <section
          key={s.heading}
          id={s.heading.toLowerCase().replace(/\s/g, "-")}
          className={`py-16 ${idx % 2 === 0 ? "bg-ceramic" : ""}`}
        >
          <Container>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
              <div>
                <Badge variant={s.variant}>{s.tag}</Badge>
                <h2 className="t-h2 mt-4">{s.heading}</h2>
              </div>
              <div className="space-y-3">
                {s.items.map((item) => (
                  <details
                    key={item.q}
                    className="group bg-paper rounded-[8px] border border-hairline p-6"
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
      ))}

      <section className="py-16">
        <Container>
          <Card variant="paper" className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="t-eyebrow text-accent-green">Still stuck</span>
              <h3 className="t-h3 mt-2">Talk to a UK energy specialist.</h3>
              <p className="t-body text-ink-soft mt-2">
                Real humans, based in Glasgow, ready in under one working hour.
              </p>
            </div>
            <div className="flex gap-3">
              <ButtonLink href="/contact" variant="primary">
                Contact us →
              </ButtonLink>
              <ButtonLink href="tel:08009888375" variant="outline">
                0800 9888 375
              </ButtonLink>
            </div>
          </Card>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
