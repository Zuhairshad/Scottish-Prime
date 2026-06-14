import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant =
  | "primary"        // Green Accent filled (white text), main CTA
  | "outline"        // Green Accent outlined on light bg
  | "dark"           // Black filled (white text), Join-now strip
  | "dark-outline"   // Text Black outlined, Sign-in
  | "on-dark-fill"   // White filled on dark green, text Green Accent
  | "on-dark-outline"// White outlined on dark green
  | "ghost"          // Plain link-like
  | "link";

const base =
  "inline-flex items-center justify-center gap-2 t-button select-none press disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-green text-white border border-accent-green rounded-[50px] px-4 py-[7px] hover:brightness-110",
  outline:
    "bg-transparent text-accent-green border border-accent-green rounded-[50px] px-4 py-[7px] hover:bg-accent-green/5",
  dark:
    "bg-black text-white border border-black rounded-[50px] px-4 py-[7px] hover:bg-black/85",
  "dark-outline":
    "bg-transparent text-ink border border-[rgba(0,0,0,0.87)] rounded-[50px] px-4 py-[7px] hover:bg-black/5",
  "on-dark-fill":
    "bg-white text-accent-green border border-white rounded-[50px] px-4 py-[7px] hover:bg-white/90",
  "on-dark-outline":
    "bg-transparent text-white border border-white rounded-[50px] px-4 py-[7px] hover:bg-white/10",
  ghost: "bg-transparent text-ink hover:bg-black/5 rounded-md px-2 py-1",
  link: "bg-transparent text-accent-green hover:underline p-0",
};

type CommonProps = {
  variant?: Variant;
  size?: "md" | "lg";
  children: ReactNode;
  className?: string;
};

const sizes: Record<"md" | "lg", string> = {
  md: "",
  lg: "!px-7 !py-3.5 text-[15px]",
};

function classes(variant: Variant, size: "md" | "lg", className: string) {
  return [
    base,
    variants[variant],
    variant === "ghost" || variant === "link" ? "" : sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  href,
  children,
  ...rest
}: CommonProps & ComponentProps<typeof Link>) {
  return (
    <Link href={href} className={classes(variant, size, className)} {...rest}>
      {children}
    </Link>
  );
}
