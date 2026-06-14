import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const navLinks = [
  { label: "Business Electricity", href: "/business-electricity" },
  { label: "Business Gas", href: "/business-gas" },
  { label: "Suppliers", href: "/energy-suppliers" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top conversion strip, black filled per DESIGN.md */}
      <div className="bg-black text-white">
        <Container className="flex items-center justify-between py-1.5">
          <p className="t-body-sm-med flex items-center gap-2">
            <span className="text-gold">★</span>
            <span className="hidden sm:inline">
              Renewing soon? Compare 20+ UK suppliers live, 
            </span>
            <Link
              href="/#compare"
              className="underline underline-offset-2 hover:text-gold"
            >
              get a quote
            </Link>
          </p>
          <Link
            href="/insights"
            className="hidden md:inline t-body-sm-med text-white/70 hover:text-white"
          >
            Market insights →
          </Link>
        </Container>
      </div>

      {/* Main nav, paper bg with soft three-layer lift */}
      <div className="bg-paper shadow-nav">
        <Container className="flex items-center justify-between h-[72px] lg:h-[83px]">
          <Link href="/" className="flex items-center gap-2.5 press">
            <Logo />
            <span className="t-h5 text-ink">Scottish Prime</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="t-body-sm-med text-ink hover:text-accent-green"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href="/#compare" variant="dark">
              Compare now
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative inline-flex items-center justify-center w-11 h-11 rounded-full overflow-hidden ring-1 ring-gold/50 bg-house-green">
      <img
        src="/logo.png"
        alt="Scottish Prime Energy"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "scale(1.6)", objectPosition: "55% 50%" }}
      />
    </span>
  );
}

