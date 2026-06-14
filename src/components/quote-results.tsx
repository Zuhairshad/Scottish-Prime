"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export type Quote = {
  supplier: string;
  short: string;
  tint: "brand" | "accent" | "house" | "uplift" | "gold";
  unitRate: string;
  standingCharge: string;
  annual: number;
  contract: string;
  contractMonths: number;
  green: boolean;
  tier: "Major" | "Challenger" | "SME" | "Specialist";
  badge?: string;
};

const tintClass: Record<Quote["tint"], string> = {
  brand: "bg-brand-green text-white",
  accent: "bg-accent-green text-white",
  house: "bg-house-green text-white",
  uplift: "bg-uplift-green text-white",
  gold: "bg-gold text-house-green",
};

const CONTRACT_LENGTHS = ["Any", "12 months", "24 months", "36 months", "48+ months"] as const;
const TARIFF_TYPES = ["Any", "Green only"] as const;
const SUPPLIER_TIERS = ["All", "Major", "Challenger", "SME", "Specialist"] as const;
const SORTS = ["Cheapest", "Shortest term", "Greenest"] as const;

type ContractLen = (typeof CONTRACT_LENGTHS)[number];
type TariffType = (typeof TARIFF_TYPES)[number];
type SupplierTier = (typeof SUPPLIER_TIERS)[number];
type Sort = (typeof SORTS)[number];

export function QuoteResults({ quotes }: { quotes: Quote[] }) {
  const [contractLen, setContractLen] = useState<ContractLen>("Any");
  const [tariffType, setTariffType] = useState<TariffType>("Any");
  const [tier, setTier] = useState<SupplierTier>("All");
  const [sort, setSort] = useState<Sort>("Cheapest");
  const [switching, setSwitching] = useState<string | null>(null);

  const visible = useMemo(() => {
    let list = quotes.filter((q) => {
      if (contractLen === "12 months" && q.contractMonths !== 12) return false;
      if (contractLen === "24 months" && q.contractMonths !== 24) return false;
      if (contractLen === "36 months" && q.contractMonths !== 36) return false;
      if (contractLen === "48+ months" && q.contractMonths < 48) return false;
      if (tariffType === "Green only" && !q.green) return false;
      if (tier !== "All" && q.tier !== tier) return false;
      return true;
    });

    list = [...list];
    if (sort === "Cheapest") list.sort((a, b) => a.annual - b.annual);
    if (sort === "Shortest term") list.sort((a, b) => a.contractMonths - b.contractMonths);
    if (sort === "Greenest") list.sort((a, b) => Number(b.green) - Number(a.green));

    return list;
  }, [quotes, contractLen, tariffType, tier, sort]);

  if (switching) {
    const q = quotes.find((x) => x.supplier === switching);
    return (
      <Card variant="paper" className="!p-8 border border-accent-green ring-1 ring-accent-green/30">
        <Badge variant="green-soft" className="mb-3">Step 2 of 3</Badge>
        <h2 className="t-h2 mt-2">
          Switching to <span className="text-accent-green">{switching}</span>
        </h2>
        <p className="t-body text-ink/70 mt-3 max-w-2xl">
          We've reserved the {q?.contract} tariff at{" "}
          <span className="t-body-sm-med text-ink">£{q?.annual.toLocaleString()} / yr</span>{" "}
          for the next 24 hours while we validate your meter point and prepare
          the contract for e-signature.
        </p>
        <div className="mt-6 grid sm:grid-cols-3 gap-3 max-w-xl">
          <Step done label="Quote generated" />
          <Step current label="Validating MPAN" />
          <Step label="E-sign contract" />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="primary">
            Finish with a specialist →
          </ButtonLink>
          <button
            type="button"
            onClick={() => setSwitching(null)}
            className="t-button text-ink border border-hairline-strong rounded-[50px] px-4 py-[7px] press hover:bg-ceramic"
          >
            ← Back to quotes
          </button>
        </div>
        <p className="t-body-sm text-ink-soft mt-6">
          Demo flow — no contract is created on this preview. A real switch
          would now pass through Ofgem-regulated DTC and supplier APIs.
        </p>
      </Card>
    );
  }

  return (
    <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">
      {/* Sticky sidebar */}
      <aside className="space-y-4 lg:sticky lg:top-32">
        <Card variant="paper" className="!p-5 border border-hairline">
          <p className="t-h5 mb-4">Filter</p>

          <FilterGroup label="Contract length">
            {CONTRACT_LENGTHS.map((c) => (
              <FilterPill
                key={c}
                label={c}
                active={contractLen === c}
                onClick={() => setContractLen(c)}
              />
            ))}
          </FilterGroup>

          <FilterGroup label="Tariff type">
            {TARIFF_TYPES.map((c) => (
              <FilterPill
                key={c}
                label={c}
                active={tariffType === c}
                onClick={() => setTariffType(c)}
              />
            ))}
          </FilterGroup>

          <FilterGroup label="Supplier tier">
            {SUPPLIER_TIERS.map((c) => (
              <FilterPill
                key={c}
                label={c}
                active={tier === c}
                onClick={() => setTier(c)}
              />
            ))}
          </FilterGroup>

          {(contractLen !== "Any" || tariffType !== "Any" || tier !== "All") && (
            <button
              type="button"
              onClick={() => {
                setContractLen("Any");
                setTariffType("Any");
                setTier("All");
              }}
              className="mt-4 t-body-sm-med text-accent-green hover:underline"
            >
              Reset filters
            </button>
          )}
        </Card>

        <Card variant="house" className="!p-5">
          <p className="t-eyebrow text-gold">Need a hand</p>
          <p className="t-h5 text-white mt-2">Talk to a specialist</p>
          <p className="t-body-sm text-white/70 mt-2">
            Sub-1hr response. Free, no obligation.
          </p>
          <ButtonLink href="/contact" variant="on-dark-fill" className="mt-4 w-full">
            Call us
          </ButtonLink>
        </Card>
      </aside>

      {/* Results */}
      <div>
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <p className="t-body-sm text-ink-soft">
            Showing{" "}
            <span className="text-ink t-body-sm-med">
              {visible.length} of {quotes.length}
            </span>{" "}
            tariffs · sorted by{" "}
            <span className="text-ink t-body-sm-med">{sort.toLowerCase()}</span>
          </p>
          <div className="flex gap-2">
            {SORTS.map((s) => (
              <SortPill
                key={s}
                label={s}
                active={sort === s}
                onClick={() => setSort(s)}
              />
            ))}
          </div>
        </div>

        {visible.length > 0 ? (
          <div className="space-y-3">
            {visible.map((q, i) => (
              <QuoteRow
                key={q.supplier}
                quote={q}
                rank={i + 1}
                onSwitch={() => setSwitching(q.supplier)}
              />
            ))}
          </div>
        ) : (
          <Card variant="paper" className="!p-12 text-center border border-hairline">
            <p className="t-h4 text-ink">No tariffs match those filters.</p>
            <p className="t-body text-ink-soft mt-2">
              Try widening contract length or supplier tier.
            </p>
            <button
              type="button"
              onClick={() => {
                setContractLen("Any");
                setTariffType("Any");
                setTier("All");
              }}
              className="mt-5 t-body-sm-med text-accent-green hover:underline"
            >
              ← Reset filters
            </button>
          </Card>
        )}

        <p className="t-body-sm text-ink-soft mt-8">
          Indicative figures only. Final pricing confirmed after we
          validate your MPAN/MPRN with your supplier. By continuing you agree
          to our{" "}
          <Link href="/legal/privacy" className="text-accent-green hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

function QuoteRow({
  quote,
  rank,
  onSwitch,
}: {
  quote: Quote;
  rank: number;
  onSwitch: () => void;
}) {
  return (
    <Card
      variant="paper"
      className={`!p-0 overflow-hidden border ${
        rank === 1 ? "border-accent-green ring-1 ring-accent-green/30" : "border-hairline"
      }`}
    >
      <div className="grid md:grid-cols-[auto_1fr_auto] gap-5 p-5 items-center">
        <div className="flex items-center gap-3">
          <span
            className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-semibold text-[13px] flex-shrink-0 ${tintClass[quote.tint]}`}
          >
            {quote.short}
          </span>
          <div>
            <p className="t-h5 text-ink">{quote.supplier}</p>
            <div className="flex gap-2 mt-1 flex-wrap">
              {rank === 1 && <Badge variant="green">Cheapest</Badge>}
              {quote.badge && rank !== 1 && <Badge variant="house">{quote.badge}</Badge>}
              {quote.green && <Badge variant="green-soft">100% Renewable</Badge>}
              <span className="t-body-sm text-ink-soft">{quote.contract}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 t-body-sm">
          <div>
            <p className="text-ink-soft">Unit rate</p>
            <p className="t-body-sm-med text-ink">{quote.unitRate}</p>
          </div>
          <div>
            <p className="text-ink-soft">Standing charge</p>
            <p className="t-body-sm-med text-ink">{quote.standingCharge}</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-ink-soft">Annual cost</p>
            <p className="t-h4 text-accent-green">£{quote.annual.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <button
            type="button"
            onClick={onSwitch}
            className="t-button bg-accent-green text-white rounded-[50px] px-5 py-2.5 press hover:brightness-110 whitespace-nowrap"
          >
            Switch to this tariff →
          </button>
        </div>
      </div>
    </Card>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <p className="t-eyebrow text-ink-soft mb-2">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`t-body-sm-med px-3 py-1 rounded-[50px] border press transition-colors ${
        active
          ? "bg-house-green text-white border-house-green"
          : "bg-white text-ink border-hairline-strong hover:border-ink"
      }`}
    >
      {label}
    </button>
  );
}

function SortPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`t-body-sm-med px-3.5 py-1.5 rounded-[50px] border press transition-colors ${
        active
          ? "bg-ink text-white border-ink"
          : "bg-white text-ink-soft border-hairline-strong hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}

function Step({
  label,
  done,
  current,
}: {
  label: string;
  done?: boolean;
  current?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-3 py-2.5 rounded-[10px] border ${
        done
          ? "bg-accent-green/10 border-accent-green/40 text-accent-green"
          : current
          ? "bg-gold-lightest border-gold/40 text-gold-dark"
          : "bg-ceramic border-hairline text-ink-soft"
      }`}
    >
      <span aria-hidden>{done ? "✓" : current ? "●" : "○"}</span>
      <span className="t-body-sm-med">{label}</span>
    </div>
  );
}
