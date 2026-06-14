import { Container } from "@/components/ui/container";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SuppliersGrid } from "@/components/suppliers-grid";
import { suppliers } from "@/data/suppliers";

export const metadata = {
  title: "UK Energy Suppliers Directory, Scottish Prime Energy",
  description:
    "Profiles of every major UK business energy supplier, British Gas, EDF, E.ON Next, Octopus and more.",
};

export default function SuppliersPage() {
  return (
    <>
      {/* Directory hero — cream canvas with subtle UK skyline backdrop */}
      <section className="relative bg-canvas overflow-hidden border-b border-hairline">
        <img
          src="https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=2000&q=80"
          alt="London business district skyline at dusk"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/80 to-canvas/20" />
        <Container className="relative py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="t-eyebrow text-accent-green">
                Supplier directory
              </span>
              <span className="h-px w-12 bg-hairline-strong" />
              <span className="t-body-sm text-ink-soft">12 profiles</span>
            </div>
            <h1 className="t-hero t-serif text-ink">
              Every UK business energy supplier,{" "}
              <span className="text-accent-green italic">on one page.</span>
            </h1>
            <p className="t-lead text-ink/70 mt-5 max-w-2xl">
              Profiles, tariff types and the verdict from our procurement team
            , so you know exactly what each supplier brings to your
              business.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SuppliersGrid suppliers={suppliers} />
        </Container>
      </section>

      <CtaBanner
        eyebrow="Pick the right supplier"
        title="Not sure which supplier fits your business?"
        body="Our procurement specialists match you to the right supplier in minutes, free of charge."
      />
    </>
  );
}
