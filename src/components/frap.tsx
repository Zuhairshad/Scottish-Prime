import Link from "next/link";

/**
 * Frap, signature floating circular CTA from DESIGN.md.
 * 56px Green Accent disc with gold ring + layered shadow stack.
 * Fixed bottom-right, persists across every page.
 */
export function Frap() {
  return (
    <Link
      href="/#compare"
      aria-label="Compare business energy"
      className="
        fixed bottom-6 right-6 z-40
        inline-flex items-center justify-center
        w-14 h-14 rounded-full
        bg-accent-green text-white
        ring-2 ring-gold ring-offset-2 ring-offset-canvas
        shadow-frap
        press
        hover:brightness-110
      "
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6"
        aria-hidden="true"
      >
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="currentColor" />
      </svg>
      <span className="sr-only">Compare energy prices</span>
      {/* Gold pulse halo */}
      <span
        aria-hidden
        className="
          absolute inset-0 rounded-full
          ring-2 ring-gold/40
          animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]
        "
      />
    </Link>
  );
}
