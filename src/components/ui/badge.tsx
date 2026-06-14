import type { ReactNode } from "react";

type Variant =
  | "green"        // Green Accent filled pill, primary status
  | "green-soft"   // Pale mint pill
  | "house"        // House Green deep pill
  | "gold"         // Rewards-style gold pill (use sparingly)
  | "gold-outline" // Outlined gold (e.g. "item" cost pill)
  | "ceramic"      // Neutral cream pill
  | "ink";         // Black filled pill

const variants: Record<Variant, string> = {
  green: "bg-accent-green text-white rounded-[50px] px-3 py-[3px]",
  "green-soft":
    "bg-green-light text-house-green rounded-[50px] px-3 py-[3px]",
  house: "bg-house-green text-white rounded-[50px] px-3 py-[3px]",
  gold: "bg-gold text-white rounded-[50px] px-3 py-[3px]",
  "gold-outline":
    "border border-gold text-gold rounded-[50px] px-3 py-[3px] bg-transparent",
  ceramic: "bg-ceramic text-ink rounded-[50px] px-3 py-[3px]",
  ink: "bg-black text-white rounded-[50px] px-3 py-[3px]",
};

export function Badge({
  variant = "green",
  children,
  className = "",
}: {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 t-button !text-[12px] ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
