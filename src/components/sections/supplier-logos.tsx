"use client";

import { Container } from "@/components/ui/container";

type Supplier = {
  name: string;
  short: string;
  tint: "brand" | "accent" | "house" | "uplift" | "gold";
  /** Optional path to an official logo image in /public/logos/. */
  logo?: string;
};

/**
 * Logos are hot-linked from Wikipedia's Special:FilePath endpoint,
 * which redirects to the canonical image for a given filename.
 * If a filename has been renamed on Wikipedia and the redirect 404s,
 * the LogoPill's onError handler falls back to the colored monogram.
 *
 * To replace any URL with a self-hosted asset later, drop the file at
 * /public/logos/<slug>.png and change the `logo:` value to that path.
 */
const WIKI = "https://en.wikipedia.org/wiki/Special:FilePath";

const SUPPLIERS: Supplier[] = [
  { name: "British Gas",    short: "BG",  tint: "brand",  logo: `${WIKI}/British_Gas_logo.svg`                  },
  { name: "EDF Energy",     short: "EDF", tint: "accent", logo: `${WIKI}/EDF_Energy_logo.svg`                   },
  { name: "E.ON Next",      short: "EON", tint: "house",  logo: `${WIKI}/Logo_E.ON.svg`                         },
  { name: "Scottish Power", short: "SP",  tint: "brand",  logo: `${WIKI}/ScottishPower_Logo_2023.svg`           },
  { name: "SSE",            short: "SSE", tint: "accent", logo: `${WIKI}/SSE_plc_logo.svg`                      },
  { name: "Drax",           short: "Dx",  tint: "house",  logo: `${WIKI}/DRAX_POWERBLUE_RGB.png`                },
  { name: "Total Energies", short: "TE",  tint: "uplift", logo: `${WIKI}/TotalEnergies_logo.svg`                },
  { name: "Npower",         short: "N",   tint: "brand",  logo: `${WIKI}/RWE_npower_logo.png`                   },
  { name: "Pozitive",       short: "Pz",  tint: "accent", logo: "https://www.google.com/s2/favicons?domain=pozitiveenergy.co.uk&sz=128"    },
  { name: "Yu Energy",      short: "Yu",  tint: "gold",   logo: "https://www.google.com/s2/favicons?domain=yuenergy.co.uk&sz=128"          },
];

const tintClass: Record<Supplier["tint"], string> = {
  brand: "bg-brand-green text-white",
  accent: "bg-accent-green text-white",
  house: "bg-house-green text-white",
  uplift: "bg-uplift-green text-white",
  gold: "bg-gold text-house-green",
};

export function SupplierLogos({
  heading = "Live prices from the UK's leading suppliers",
  dark = false,
}: {
  heading?: string;
  dark?: boolean;
}) {
  return (
    <section className={dark ? "py-16 bg-house-green" : "py-16 bg-canvas"}>
      <Container>
        <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
          <div>
            <p
              className={`t-eyebrow ${
                dark ? "text-gold" : "text-accent-green"
              }`}
            >
              {heading}
            </p>
            <p
              className={`t-body-sm mt-1.5 ${
                dark ? "text-white/60" : "text-ink-soft"
              }`}
            >
              20+ UK suppliers compared live, every quote ranked cheapest-first.
            </p>
          </div>
          <span
            className={`t-body-sm-med px-3 py-1 rounded-[50px] ${
              dark
                ? "bg-white/10 text-white border border-white/20"
                : "bg-house-green text-white"
            }`}
          >
            10 listed
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3">
          {SUPPLIERS.map((s) => (
            <LogoPill key={s.name} supplier={s} dark={dark} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function LogoPill({ supplier, dark }: { supplier: Supplier; dark: boolean }) {
  return (
    <div
      className={`
        flex items-center gap-3 px-3 py-3 rounded-[50px]
        press transition-transform hover:-translate-y-0.5
        ${
          dark
            ? "bg-white/5 border border-white/15 hover:bg-white/10"
            : "bg-white border border-hairline-strong shadow-card hover:border-accent-green/40"
        }
      `}
    >
      <SupplierMark supplier={supplier} />
      <span
        className={`t-body-sm-med truncate ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {supplier.name}
      </span>
    </div>
  );
}

/**
 * Renders the supplier's logo image when present, with a graceful
 * fallback to the monogram disc if the file is missing (onError).
 */
function SupplierMark({ supplier }: { supplier: Supplier }) {
  if (supplier.logo) {
    return (
      <span className="relative inline-flex items-center justify-center w-11 h-11 rounded-full bg-white border border-hairline overflow-hidden flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={supplier.logo}
          alt={`${supplier.name} logo`}
          className="absolute inset-0 w-full h-full object-contain p-1.5"
          onError={(e) => {
            // If the file isn't there yet, swap to monogram by removing the
            // image and revealing the underlying fallback span.
            const el = e.currentTarget;
            el.style.display = "none";
            const fallback = el.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "inline-flex";
          }}
        />
        <span
          aria-hidden
          style={{ display: "none" }}
          className={`
            absolute inset-0 items-center justify-center
            font-semibold text-[13px] tracking-tight
            ${tintClass[supplier.tint]}
          `}
        >
          {supplier.short}
        </span>
      </span>
    );
  }

  return (
    <span
      className={`
        inline-flex items-center justify-center
        w-11 h-11 rounded-full flex-shrink-0
        font-semibold text-[13px] tracking-tight
        shadow-[inset_0_0_0_2px_rgba(255,255,255,0.15)]
        ${tintClass[supplier.tint]}
      `}
    >
      {supplier.short}
    </span>
  );
}
