import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SignInForm } from "@/components/sign-in-form";

export const metadata = {
  title: "myHUB Sign In, Scottish Prime Energy",
  description:
    "Sign in to myHUB, your business energy command centre. Contracts, invoices, meter reads and renewals in one place.",
};

export default function MyHubPage() {
  return (
    <>
      <section className="relative surface-house overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
          alt="Energy management dashboard on a laptop screen"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-house-green via-house-green/80 to-house-green/25" />
        <Container className="relative py-20 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left: marketing pitch */}
            <div>
              <Badge variant="gold-outline" className="mb-5">
                myHUB, the customer portal
              </Badge>
              <h1 className="t-h1">
                Your business energy{" "}
                <span className="text-accent-green">command centre.</span>
              </h1>
              <p className="t-lead text-on-dark-soft mt-6 max-w-lg">
                Every contract, invoice, meter reading and renewal date in one
                place. Free for every Scottish Prime customer.
              </p>

              <ul className="mt-8 space-y-3 t-body text-on-dark">
                <Feature title="Live contract dashboard">
                  See every site, supplier and contract end date at a glance.
                </Feature>
                <Feature title="Renewal alerts">
                  Automatic 90 / 60 / 30-day reminders so you never roll onto a
                  deemed rate.
                </Feature>
                <Feature title="Invoice archive">
                  Every PDF bill, downloadable, searchable, exportable to CSV.
                </Feature>
                <Feature title="Meter read submission">
                  Submit reads in 5 seconds, pushed direct to your supplier.
                </Feature>
              </ul>
            </div>

            {/* Right: sign-in card */}
            <SignInForm />
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="max-w-2xl">
            <span className="t-eyebrow text-accent-green">
              Everything you need
            </span>
            <h2 className="t-h2 mt-3">Run your business energy in one place.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <FeatureCard
              tag="Contracts"
              tagVariant="green"
              title="Every site, every contract"
              body="Single shop or 100-site portfolio, every contract end date, supplier and tariff in one dashboard."
            />
            <FeatureCard
              tag="Renewals"
              tagVariant="gold"
              title="Never miss a renewal window"
              body="Automatic 90 / 60 / 30-day alerts. Plus a one-click quote at every contract expiry."
            />
            <FeatureCard
              tag="Invoices"
              tagVariant="green-soft"
              title="Searchable invoice archive"
              body="Every PDF bill, downloadable, exportable, filterable by site, supplier or date."
            />
            <FeatureCard
              tag="Meters"
              tagVariant="house"
              title="Submit reads in seconds"
              body="Manual meter reads pushed direct to your supplier. Skip the call centre."
            />
            <FeatureCard
              tag="Reporting"
              tagVariant="green"
              title="Consumption & carbon"
              body="kWh consumption charts and Scope 2 emissions calculations, export-ready for ESG."
            />
            <FeatureCard
              tag="Team"
              tagVariant="gold-outline"
              title="Multi-user access"
              body="Invite finance, ops and procurement with role-based permissions."
            />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Card variant="paper" className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="t-eyebrow text-accent-green">Not a customer yet</span>
              <h3 className="t-h3 mt-2">Get a quote first, then sign up to myHUB.</h3>
              <p className="t-body text-ink-soft mt-2">
                myHUB is free for every Scottish Prime customer, no separate
                subscription.
              </p>
            </div>
            <ButtonLink href="/#compare" variant="primary">
              Compare prices →
            </ButtonLink>
          </Card>
        </Container>
      </section>
    </>
  );
}

function Feature({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent-green text-house-green text-xs font-bold flex-shrink-0">
        ✓
      </span>
      <span>
        <span className="t-body-sm-med text-on-dark">{title}</span>{" "}
        <span className="t-body-sm text-on-dark-soft">,  {children}</span>
      </span>
    </li>
  );
}

function FeatureCard({
  tag,
  tagVariant,
  title,
  body,
}: {
  tag: string;
  tagVariant: "green" | "house" | "green-soft" | "gold" | "gold-outline";
  title: string;
  body: string;
}) {
  return (
    <Card
      variant="paper"
      className="card-hover relative !p-6 border border-hairline overflow-hidden h-full"
    >
      <div className="flex items-center justify-between mb-5">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/30 text-[18px]">
          ✓
        </span>
        <Badge variant={tagVariant}>{tag}</Badge>
      </div>
      <h3 className="t-card-title">{title}</h3>
      <p className="t-body text-ink/65 mt-3 leading-relaxed">{body}</p>
    </Card>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="t-body-sm-med text-ink block mb-1.5">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-11 rounded-[8px] px-3 t-body bg-paper border border-hairline-strong text-ink placeholder:text-ink-soft outline-none focus:border-accent-green focus:border-2"
      />
    </label>
  );
}
