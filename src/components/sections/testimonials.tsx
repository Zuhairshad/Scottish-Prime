"use client";
import Link from "next/link";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    quote:
      "Saved us thousands a year across three sites. The comparison engine actually showed live prices, no calls, no chasing. Our quarterly bills used to be a mystery; now I can predict to the pound what we'll pay each month.",
    name: "Priya Shah",
    role: "Director, Maven Logistics",
    location: "Manchester",
    saved: "£4,200 / yr",
    switchedFrom: "SSE",
    since: "2024",
  },
  {
    quote:
      "Switched our gas contract in twenty minutes. They handled the changeover completely; I didn't speak to a single call centre, and the new rate kicked in the day after my old contract ended.",
    name: "James Whitley",
    role: "Owner, The Whitley Group",
    location: "Leeds",
    saved: "£8,140 / yr",
    switchedFrom: "British Gas",
    since: "2023",
    featured: true,
  },
  {
    quote:
      "The team understood our multi-site setup and built a procurement strategy other brokers wouldn't even touch. Twenty-three care homes, all rolling onto a single framework.",
    name: "Aisha Bennett",
    role: "Operations Lead, Northway Care",
    location: "Birmingham",
    saved: "£41,000 yr 1",
    switchedFrom: "Multiple",
    since: "2022",
  },
  {
    quote:
      "Our renewal window was nine days from closing. They had us locked into a better rate within forty-eight hours, properly impressive. No upsell, no pressure.",
    name: "Hamza Khan",
    role: "MD, Khan Engineering",
    location: "Glasgow",
    saved: "£2,800 / yr",
    switchedFrom: "ScottishPower",
    since: "2025",
  },
  {
    quote:
      "First broker who explained REGOs without trying to sell me something. Now on a hundred percent renewable tariff at nine pence less per kWh than our old standard contract.",
    name: "Eilidh Macleod",
    role: "Operations Director, Highland Roastery",
    location: "Edinburgh",
    saved: "£6,500 / yr",
    switchedFrom: "EDF Energy",
    since: "2025",
    featured: true,
  },
  {
    quote:
      "Multi-site procurement that doesn't feel like multi-site procurement. One dashboard, one account manager, contracts that all renew together.",
    name: "Marcus Tate",
    role: "Finance Lead, Tate Retail Group",
    location: "Bristol",
    saved: "£22,300 / yr",
    switchedFrom: "E.ON Next",
    since: "2024",
  },
  {
    quote:
      "We run a small hotel, most brokers ignore us. The Scottish Prime team gave us proper procurement attention and shaved thirty-one percent off our annual gas bill.",
    name: "Catherine Brodie",
    role: "Founder, Brodie Hospitality",
    location: "Aberdeen",
    saved: "£3,460 / yr",
    switchedFrom: "Octopus",
    since: "2025",
  },
  {
    quote:
      "Came for the comparison, stayed for myHUB. Renewal alerts, meter reads, invoices, every contract across our care homes in one place. Finance team is finally happy.",
    name: "Sanjay Patel",
    role: "Procurement Director, Patel Care Services",
    location: "London",
    saved: "£18,900 / yr",
    switchedFrom: "Multiple",
    since: "2023",
  },
  {
    quote:
      "Switched the gas at the same time and it took an afternoon, not a fortnight. Three years on, every renewal has been the same: one email, one e-signature, done.",
    name: "Rachel Turner",
    role: "Finance Manager, Turner & Co",
    location: "Cardiff",
    saved: "£5,700 / yr",
    switchedFrom: "British Gas",
    since: "2023",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-[var(--color-ceramic)] relative">
      <div className="max-w-7xl mx-auto px-5 md:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border border-[var(--color-accent-green)]/30 text-[var(--color-accent-green)] py-1 px-4 rounded-lg text-sm font-semibold tracking-wide uppercase">
              Testimonials
            </div>
          </div>

          <h2 className="t-jumbo t-serif text-[var(--color-brand-green)] text-center mt-5 leading-[1.05]">
            Half a million companies{" "}
            <span className="text-[var(--color-accent-green)] italic">
              switched with us.
            </span>
          </h2>
          <p className="text-center mt-5 text-[var(--color-ink)]/70 text-lg">
            See what our customers have to say about us.
          </p>
          <Link
            href="/reviews"
            className="mt-4 text-sm font-semibold text-[var(--color-accent-green)] hover:underline"
          >
            See all 12,000+ reviews →
          </Link>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
