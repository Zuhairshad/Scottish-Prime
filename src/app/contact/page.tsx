import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact Us, Scott Prime Energy",
  description:
    "Talk to a UK business energy specialist. Phone, email, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative surface-house overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=2000&q=80"
          alt="UK energy specialist on a call"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-house-green via-house-green/80 to-house-green/30" />
        <Container className="relative py-20 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="gold-outline" className="mb-5">
              Monday–Friday, 9am–6pm
            </Badge>
            <h1 className="t-display">
              Talk to a{" "}
              <span className="text-gold">UK energy specialist.</span>
            </h1>
            <p className="t-lead text-white/75 mt-6 max-w-2xl">
              Real humans, based in Glasgow, who know UK business energy inside
              out. Call us, email us, or send a quick message, we&apos;ll get
              back to you within one working hour.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 t-body-sm-med text-white">
              <span><span className="text-gold">★</span> 0800 9888 375</span>
              <span><span className="text-gold">★</span> info@scottprimeenergy.co.uk</span>
              <span><span className="text-gold">★</span> Under 1hr response</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-3 gap-6">
            <ContactCard
              tag="Sales"
              tagVariant="green"
              title="Get a quote"
              body="Talk through your renewal or set up a new contract with our procurement team."
              phone="0800 9888 375"
              email="info@scottprimeenergy.co.uk"
            />
            <ContactCard
              tag="Support"
              tagVariant="green-soft"
              title="Existing customers"
              body="Billing queries, contract changes, meter issues, your account team is on the other end."
              phone="0161 521 3400"
              email="support@scottishprimeenergy.co.uk"
            />
            <ContactCard
              tag="Press"
              tagVariant="house"
              title="Press & partnerships"
              body="Media enquiries, partnership proposals, careers and corporate."
              phone="0161 521 3500"
              email="press@scottishprimeenergy.co.uk"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 bg-ceramic">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div>
              <span className="t-eyebrow text-accent-green">Send a message</span>
              <h2 className="t-h2 mt-3">
                Tell us about your business and we&apos;ll be in touch.
              </h2>
              <p className="t-body text-ink-soft mt-4">
                Typical response time is under one working hour. For urgent
                contract queries please call us directly.
              </p>

              <div className="mt-10 space-y-6">
                <InfoRow label="Head office" value="Bothwell Street, Glasgow, G2 4JR" />
                <InfoRow label="Companies House" value="04967449" />
                <InfoRow label="Trustpilot" value="4.8 / 5 from 12,000+ reviews" />
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="bg-house-green text-on-dark rounded-[12px] px-10 py-14 md:px-16 grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="t-eyebrow text-accent-green">Prefer to compare yourself</span>
              <h2 className="t-h2 mt-3 max-w-xl">
                Skip the call and run a live comparison.
              </h2>
            </div>
            <ButtonLink href="/#compare" variant="on-dark-fill">
              Compare prices →
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactCard({
  tag,
  tagVariant,
  title,
  body,
  phone,
  email,
}: {
  tag: string;
  tagVariant: "green" | "green-soft" | "house" | "gold";
  title: string;
  body: string;
  phone: string;
  email: string;
}) {
  return (
    <Card variant="paper" className="card-hover relative !p-7 border border-hairline overflow-hidden h-full flex flex-col">
      <span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-green to-brand-green"
      />
      <div className="flex items-center justify-between mb-5">
        <Badge variant={tagVariant}>{tag}</Badge>
        <span className="t-eyebrow text-ink/40">Direct line</span>
      </div>
      <h3 className="t-card-title">{title}</h3>
      <p className="t-body text-ink/70 mt-3 flex-1">{body}</p>

      <div className="mt-6 pt-5 border-t border-hairline space-y-3">
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="flex items-center gap-3 group/row"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gold-lightest text-gold border border-gold/30">
            ☎
          </span>
          <div>
            <p className="t-eyebrow text-ink/50">Phone</p>
            <p className="t-body-sm-med text-ink group-hover/row:text-accent-green">
              {phone}
            </p>
          </div>
        </a>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-3 group/row"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-accent-green/10 text-accent-green border border-accent-green/30">
            @
          </span>
          <div className="min-w-0">
            <p className="t-eyebrow text-ink/50">Email</p>
            <p className="t-body-sm-med text-accent-green truncate">
              {email}
            </p>
          </div>
        </a>
      </div>
    </Card>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="t-eyebrow text-ink-soft">{label}</p>
      <p className="t-body text-ink mt-1">{value}</p>
    </div>
  );
}

