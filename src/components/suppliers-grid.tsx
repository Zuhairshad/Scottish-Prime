"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  SUPPLIER_LOGOS,
  type Supplier,
} from "@/data/suppliers";

const CATEGORIES = ["All", "Major", "Challenger", "SME", "Specialist"] as const;
type Category = (typeof CATEGORIES)[number];

export function SuppliersGrid({ suppliers }: { suppliers: Supplier[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return suppliers.filter((s) => {
      if (category !== "All" && s.category !== category) return false;
      if (!q) return true;
      return (
        s.name.toLowerCase().includes(q) ||
        s.blurb.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      );
    });
  }, [suppliers, query, category]);

  return (
    <>
      {/* Search + category filter row */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
        <div className="flex-1 relative">
          <span
            aria-hidden
            className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft"
          >
            ⌕
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search suppliers (e.g. Octopus, British Gas, EDF)…"
            className="w-full h-14 rounded-[8px] bg-paper border border-hairline-strong pl-11 pr-12 t-body text-ink placeholder:text-ink-soft outline-none focus:border-accent-green focus:border-2"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 inline-flex items-center justify-center rounded-full text-ink-soft hover:text-ink hover:bg-ceramic press"
            >
              ✕
            </button>
          )}
        </div>
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`px-3.5 py-1.5 rounded-full t-body-sm-med border press transition-colors ${
                category === c
                  ? "bg-ink text-on-dark border-ink"
                  : "border-hairline-strong text-ink-soft hover:text-ink hover:border-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="t-body-sm text-ink-soft mb-6">
        Showing{" "}
        <span className="t-body-sm-med text-ink">
          {visible.length} of {suppliers.length}
        </span>{" "}
        suppliers
        {category !== "All" ? ` · ${category}` : ""}
        {query ? ` · "${query}"` : ""}
      </p>

      {/* Grid */}
      {visible.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((s) => (
            <SupplierCard key={s.slug} supplier={s} />
          ))}
        </div>
      ) : (
        <Card variant="paper" className="text-center !p-12 border border-hairline">
          <p className="t-h4 text-ink">No suppliers match those filters.</p>
          <p className="t-body text-ink-soft mt-2">
            Try clearing the search or selecting a different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
            className="mt-5 t-body-sm-med text-accent-green hover:underline"
          >
            ← Reset filters
          </button>
        </Card>
      )}
    </>
  );
}

function SupplierCard({ supplier: s }: { supplier: Supplier }) {
  const logo = SUPPLIER_LOGOS[s.slug];
  const initials = s.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  const monogramClass =
    s.variant === "green"
      ? "bg-accent-green text-white"
      : s.variant === "house"
      ? "bg-house-green text-white"
      : s.variant === "green-soft"
      ? "bg-uplift-green text-white"
      : s.variant === "gold"
      ? "bg-gold text-house-green"
      : s.variant === "gold-outline"
      ? "bg-gold-lightest text-gold border border-gold/30"
      : "bg-brand-green text-white";

  return (
    <Link
      href={`/energy-suppliers/${s.slug}`}
      className="group block h-full"
    >
      <Card
        variant="paper"
        className="card-hover h-full flex flex-col border border-hairline !p-6"
      >
        <div className="flex items-start justify-between gap-3 mb-4">
          {logo ? (
            <span className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-white border border-hairline overflow-hidden flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt={`${s.name} logo`}
                className="absolute inset-0 w-full h-full object-contain p-2"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const fb = el.nextElementSibling as HTMLElement | null;
                  if (fb) fb.style.display = "inline-flex";
                }}
              />
              <span
                aria-hidden
                style={{ display: "none" }}
                className={`absolute inset-0 items-center justify-center font-semibold text-[14px] ${monogramClass}`}
              >
                {initials}
              </span>
            </span>
          ) : (
            <span
              className={`inline-flex items-center justify-center w-14 h-14 rounded-full font-semibold text-[14px] flex-shrink-0 ${monogramClass}`}
            >
              {initials}
            </span>
          )}
          <Badge variant={s.variant}>{s.category}</Badge>
        </div>
        <h3 className="t-card-title">{s.name}</h3>
        <p className="t-body-sm text-ink/65 mt-3 flex-1 leading-relaxed">
          {s.blurb}
        </p>
        <div className="mt-5 pt-4 border-t border-hairline flex items-center justify-between">
          <span className="t-body-sm text-ink/55">
            {s.fuels.join(" · ")}
          </span>
          <span className="t-body-sm-med text-accent-green card-arrow">
            View
            <span aria-hidden>→</span>
          </span>
        </div>
      </Card>
    </Link>
  );
}
