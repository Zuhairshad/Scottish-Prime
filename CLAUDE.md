# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> **Read `AGENTS.md` first.** This project runs a Next.js version with breaking changes vs. training data. Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`.

## Commands

```bash
npm run dev      # Next.js dev server (Turbopack) at http://localhost:3000
npm run build    # Production build
npm run start    # Serve the production build
```

There is no linter, test runner, or typecheck script wired up — `npm run build` is the only correctness gate. There are no tests.

## Project

Scott Prime Energy — a marketing / lead-generation site for UK business energy comparison. It is a **content-and-forms site**: no database, no auth, no CMS. All content lives in TypeScript, and the only backend is a single lead-capture email endpoint.

- **Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript (strict), Tailwind CSS v4.
- **Path alias:** `@/*` → `./src/*`.

## Architecture

### Content lives in `src/data/`, not a CMS
- `data/suppliers.ts` — the `Supplier[]` array + `SUPPLIER_LOGOS` map + `getSupplier(slug)`. Drives the suppliers grid, comparison results, and every `/energy-suppliers/[slug]` page (statically generated via `generateStaticParams`).
- `data/articles.ts` — the `Article[]` array with full `body` content. Drives `/insights` and `/insights/[slug]`.

To add a supplier or article, append a typed object to the relevant array — routing, static params, and metadata flow from the data automatically. Both types carry a `variant` field keyed to the brand color system below.

### Lead capture is the only server code
Every form (`contact-form`, `compare-form`, `newsletter-form`) is a `"use client"` component that POSTs JSON to `POST /api/send-lead` ([route.ts](src/app/api/send-lead/route.ts)). The convention: send `{ formType, pageUrl, ...arbitraryFields }`. The route delivers emails directly via standard SMTP (Namecheap Private Email / Webmail) using `nodemailer`.

Env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASSWORD`, `LEAD_RECIPIENT_EMAIL`, `LEAD_SENDER_EMAIL`. If `SMTP_PASSWORD` is missing or placeholder, the route **logs the lead and returns success without sending** — forms work in local dev with no config.


### Components
- `src/components/ui/` — primitives (`Button`/`ButtonLink`, `Card`, `Badge`, `Container`). `Button` variants encode brand roles (e.g. `primary`, `on-dark-fill`); prefer these over ad-hoc classes.
- `src/components/sections/` — page-level composed blocks (`compare-form`, `cta-banner`, `faq`, `supplier-logos`).
- `src/components/` — global chrome (`site-header`, `site-footer`, `frap`) and feature components.
- `layout.tsx` mounts `SiteHeader`, `SiteFooter`, and `Frap` (the persistent floating CTA) around every page.

## Design system — this is the load-bearing part

`DESIGN.md` (root) is a detailed Starbucks-inspired spec. It is **implemented as CSS utilities in [globals.css](src/app/globals.css)**, not just documentation. Use those utilities rather than raw values:

- **Colors:** Tailwind `@theme` tokens — `brand-green`, `accent-green`, `house-green`, `gold`, `canvas`, `ink`, etc. Use `bg-accent-green`, `text-ink`, and surface helpers `.surface-house` / `.surface-uplift` / `.surface-paper`. Do not hardcode hex.
- **Typography:** use the `t-*` scale classes (`t-display`, `t-hero`, `t-h1`…`t-h5`, `t-lead`, `t-body`, `t-eyebrow`, `t-button`, `t-serif`) — they carry responsive sizing. Don't set font-size directly.
- **Interaction:** `.card-hover` (lift + arrow nudge), `.press` (active scale), `.marquee-track`/`.marquee-mask`, shadow helpers `.shadow-card`/`.shadow-nav`/`.shadow-frap`.

When adding UI, match an existing pattern and consult `DESIGN.md` for the intended role of a color/component before introducing anything new.
