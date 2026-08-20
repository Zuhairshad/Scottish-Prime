import Link from "next/link";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/newsletter-form";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Compare",
    links: [
      { label: "Business Electricity", href: "/business-electricity" },
      { label: "Business Gas", href: "/business-gas" },
      { label: "Meter Installation", href: "/meter-installation" },
      { label: "Renewable Energy", href: "/renewable-energy" },
    ],
  },
  {
    heading: "Suppliers",
    links: [
      { label: "All Suppliers", href: "/energy-suppliers" },
      { label: "British Gas", href: "/energy-suppliers/british-gas" },
      { label: "EDF Energy", href: "/energy-suppliers/edf-energy" },
      { label: "E.ON Next", href: "/energy-suppliers/eon-next" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "myHUB", href: "/myhub" },
      { label: "Energy Guides", href: "/insights" },
      { label: "Awards", href: "/about" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms of service", href: "/legal/terms" },
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Cookies", href: "/legal/cookies" },
      { label: "Modern slavery", href: "/legal/modern-slavery" },
    ],
  },
  {
    heading: "Talk to us",
    links: [
      { label: "Sales enquiries", href: "/contact" },
      { label: "Existing customers", href: "/contact" },
      { label: "Press desk", href: "/contact" },
      { label: "Careers", href: "/about" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-house-green text-white mt-auto">
      <Container className="py-16">
        {/* Newsletter strip with gold accent */}
        <div className="border-y border-white/10 py-8 mb-12 grid md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <span className="t-eyebrow text-gold">Stay sharp</span>
            <h3 className="t-h3 text-white mt-2 max-w-md">
              Monthly UK energy market briefings, free to your inbox.
            </h3>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="t-body-sm-med text-gold mb-4">{col.heading}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="t-body-sm text-white/70 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative inline-flex items-center justify-center w-11 h-11 rounded-full overflow-hidden ring-1 ring-gold/50 bg-house-green">
              <img
                src="/logo.png"
                alt="Scott Prime Energy"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="t-body-sm-med text-white">Scott Prime Energy</span>
          </div>
          <p className="t-body-sm text-white/60">
            © 2026 Scott Prime Energy Ltd · Comparing UK business energy since 2007 ·{" "}
            <span className="text-gold">★</span> 4.8 / 5 · 500,000+ businesses served
          </p>
        </div>
      </Container>
    </footer>
  );
}
