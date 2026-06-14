import type { ReactNode, HTMLAttributes } from "react";

type Variant =
  | "paper"     // White card on canvas, default
  | "ceramic"   // Warm cream-darker tile
  | "house"     // House Green dark panel
  | "uplift"    // Mid-dark green panel
  | "gold-tint" // Pale gold-cream surface
  | "flat";     // No shadow, just rounded paper

const variants: Record<Variant, string> = {
  paper:
    "bg-paper rounded-[12px] p-6 shadow-card",
  ceramic:
    "bg-ceramic rounded-[12px] p-6",
  house:
    "bg-house-green text-white rounded-[12px] p-6",
  uplift:
    "bg-uplift-green text-white rounded-[12px] p-6",
  "gold-tint":
    "bg-gold-lightest rounded-[12px] p-6",
  flat:
    "bg-paper rounded-[12px] p-6 border border-hairline",
};

export function Card({
  variant = "paper",
  className = "",
  children,
  ...rest
}: { variant?: Variant; children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${variants[variant]} ${className}`} {...rest}>
      {children}
    </div>
  );
}
