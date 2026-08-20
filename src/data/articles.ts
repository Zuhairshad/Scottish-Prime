export type ArticleVariant = "green" | "house" | "gold" | "green-soft" | "gold-outline";

export type Article = {
  slug: string;
  category: string;
  categoryVariant: ArticleVariant;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  author: { name: string; role: string };
  body: { heading?: string; paragraphs: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "uk-business-energy-outlook-2026",
    category: "Market outlook",
    categoryVariant: "green",
    title:
      "UK business energy outlook 2026, what SMEs should expect from wholesale prices this winter.",
    excerpt:
      "Wholesale gas is down 18% year-on-year but wholesale electricity remains volatile. Here's how we're reading the next 12 months and what it means for your renewal window.",
    readTime: "8 min read",
    date: "12 June 2026",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Callum MacLeod",
      role: "Head of Procurement, Scott Prime Energy",
    },
    body: [
      {
        paragraphs: [
          "Six months into 2026 the UK wholesale energy market looks dramatically different from where it sat 18 months ago. Wholesale gas, the single biggest input cost for UK businesses on both their gas bill and their electricity bill, is trading 18% below this point last year, but electricity remains volatile thanks to constrained generation margins and a faster-than-expected uptick in industrial demand.",
          "For UK SMEs sitting on a fixed contract that ends between now and Q1 2027, the next six months represent the best renewal window in three years. Here's how we're advising customers to play it.",
        ],
      },
      {
        heading: "Wholesale gas: the headline number",
        paragraphs: [
          "NBP day-ahead gas closed last week at 78p/therm, well off the 220p/therm peak of October 2024 and 18% below this point in 2025. LNG inventories across NW Europe sit at 91% of capacity, with weather forecasts pointing to a milder-than-average winter.",
          "What this means for businesses: gas-fixed contracts taken out in the next 60 days will likely set a multi-year low. Customers with renewal dates in Q4 2026 should be running quotes now and locking ahead of their formal expiry.",
        ],
      },
      {
        heading: "Wholesale electricity: more complicated",
        paragraphs: [
          "Wholesale electricity is harder to read. The headline day-ahead price of £74/MWh looks attractive, but the forward curve through Winter 2026/27 sits 22% higher reflecting tight generation margins and continued retirement of legacy CCGT capacity.",
          "Practical takeaway: 12-month fixes are unusually cheap right now. 24-month and 36-month fixes carry a notable premium that some customers may want to take to lock in budget certainty.",
        ],
      },
      {
        heading: "What we're telling customers",
        paragraphs: [
          "Three rules of thumb our procurement desk is operating under:",
          "1. If your contract ends in the next 6 months, get quotes today. 12-month fixes are within striking distance of 5-year lows.",
          "2. If you can stomach the 22% premium, 24-month fixes hedge against the Winter 2026/27 risk.",
          "3. If you have appetite for flexibility, a basket purchasing strategy via a TPI can outperform a flat fix, but only at scale (typically £250k+ annual spend).",
        ],
      },
      {
        heading: "How to position your renewal",
        paragraphs: [
          "We're running personalised market briefings for every customer with a contract ending in the next 12 months. The briefing is free, runs the live wholesale data against your actual consumption profile, and gives you a concrete recommendation rather than generic market commentary.",
        ],
      },
    ],
  },
  {
    slug: "smart-meter-rollout-business",
    category: "Meters",
    categoryVariant: "gold",
    title: "Smart meter rollout: what UK businesses need to know in 2026.",
    excerpt:
      "Half-hourly settlement, free smart installs and what it means for your billing.",
    readTime: "6 min read",
    date: "4 June 2026",
    image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Priya Mehta",
      role: "Metering Operations Lead",
    },
    body: [
      {
        paragraphs: [
          "Six years into the UK smart meter rollout for business sites, roughly 64% of non-domestic meter points are now SMETS2-enabled. That number will climb sharply through 2026 as Ofgem's market-wide half-hourly settlement (MHHS) regime begins to take effect.",
          "Here's what UK businesses need to know, what the rollout means for billing, what the install actually involves, and the questions worth asking your supplier before signing your next contract.",
        ],
      },
      {
        heading: "What MHHS actually changes",
        paragraphs: [
          "Today, most business electricity bills are calculated on an estimated profile, your supplier assumes when you used electricity based on a generic load shape for businesses your size. MHHS replaces that with actual half-hourly readings from your smart meter.",
          "For the average UK SME this means more accurate billing, no more catch-up bills, and access to time-of-use tariffs that can shave 5-15% off your electricity costs if you can shift consumption away from peak hours.",
        ],
      },
      {
        heading: "Free installs, but only with a switch",
        paragraphs: [
          "Most major UK suppliers will install a smart meter free of charge as part of switching your supply contract. The install takes 60-90 minutes per meter point with a 20-30 minute supply interruption.",
          "If you're not switching, some suppliers will still install a smart meter, but lead times can stretch to 6 months. Switching is usually the fastest path.",
        ],
      },
      {
        heading: "Questions to ask before signing",
        paragraphs: [
          "1. Is the install free as part of the contract?",
          "2. Is the meter SMETS2 (not SMETS1)? SMETS1 may lose smart functionality if you switch.",
          "3. Will the supplier guarantee monthly billing on actual reads rather than estimates?",
          "4. Does the tariff include time-of-use options to take advantage of HH settlement?",
        ],
      },
    ],
  },
  {
    slug: "rego-renewable-tariffs-guide",
    category: "Renewables",
    categoryVariant: "green",
    title: "REGO-backed renewable tariffs, are they really green?",
    excerpt:
      "Unpacking how UK renewable tariffs are certified and what businesses should look for.",
    readTime: "9 min read",
    date: "28 May 2026",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Marcus Brown",
      role: "Sustainability Lead",
    },
    body: [
      {
        paragraphs: [
          "Every major UK energy supplier now markets a 100% renewable business electricity tariff. Most of them are backed by REGOs, Renewable Energy Guarantees of Origin. The question we hear most from sustainability leads: are these tariffs actually green, or is this corporate greenwashing?",
          "The honest answer: it depends on what you mean by green. Here's the unvarnished version.",
        ],
      },
      {
        heading: "How REGOs work",
        paragraphs: [
          "A REGO is a certificate issued by Ofgem for every megawatt-hour of electricity generated from renewable sources in the UK. Generators get one REGO per MWh, and they can sell those REGOs separately from the electricity itself.",
          "When a supplier sells you a 100% renewable tariff, what they're actually doing is buying enough REGOs to match your annual consumption. Your electricity is still drawn from the same physical grid, wholesale mix is wholesale mix, but the supplier has retired enough REGOs to claim 100% renewable matching.",
        ],
      },
      {
        heading: "The case for REGO-matching",
        paragraphs: [
          "For Scope 2 emissions reporting, REGOs are accepted by Ofgem, the GHG Protocol, CDP and SECR. A business consuming 100% REGO-backed electricity can legitimately report zero Scope 2 emissions from purchased electricity.",
          "For most UK SMEs, this is more than enough to satisfy customer, investor and procurement framework requirements.",
        ],
      },
      {
        heading: "The case against",
        paragraphs: [
          "REGOs can be detached from the underlying generation and traded separately. Critics argue this means buying a REGO-matched tariff doesn't drive additional renewable generation, the wind turbine was already going to spin regardless of who bought the certificate.",
          "If your business specifically needs to demonstrate additionality (that your purchase caused new renewable generation), a source-tracked PPA is the stronger option.",
        ],
      },
      {
        heading: "What we recommend",
        paragraphs: [
          "For most UK SMEs: a 100% REGO-backed tariff is the right answer. It's certified, recognised by major reporting frameworks, and now within a penny of standard rates.",
          "For larger businesses with public ESG commitments: pair a REGO tariff with an explicit additionality strategy, either a corporate PPA, on-site generation, or both.",
        ],
      },
    ],
  },
  {
    slug: "fixed-vs-flexible-contracts",
    category: "Procurement",
    categoryVariant: "house",
    title: "Fixed vs flexible energy contracts, which suits your business?",
    excerpt:
      "Two procurement strategies, head-to-head, with worked examples for 3-site SMEs.",
    readTime: "7 min read",
    date: "20 May 2026",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Sarah Whitfield",
      role: "Procurement Director",
    },
    body: [
      {
        paragraphs: [
          "Roughly 90% of UK business energy contracts are fixed-price. The supplier sets a unit rate, a standing charge and a contract length up front, you sign, and that's the price for the duration.",
          "The remaining 10% are flexible, and they look more like commodity trading than utility procurement. Here's when each one wins.",
        ],
      },
      {
        heading: "Fixed contracts: what you get",
        paragraphs: [
          "A locked-in unit rate for the duration of the contract, typically 12, 24, 36 or 48 months. Budget certainty, no upside if wholesale prices fall, no downside if they spike.",
          "Best for: businesses with predictable consumption, limited finance team capacity, and a preference for budget certainty.",
        ],
      },
      {
        heading: "Flexible contracts: how they work",
        paragraphs: [
          "Rather than locking in a single rate up front, a flexible contract lets you 'click' portions of your forward consumption at different points in time. You might fix 25% of next winter's volume in January, another 25% in March, and so on.",
          "Best for: businesses with £250k+ annual energy spend, an experienced procurement function (or a TPI partner running the strategy), and appetite for slightly more administrative complexity in exchange for better long-run pricing.",
        ],
      },
      {
        heading: "Worked example, 3-site café chain",
        paragraphs: [
          "Annual consumption: 84,000 kWh electricity across three sites. Annual spend: ~£21,000.",
          "Fixed-rate recommendation: A 24-month fix at today's rates locks in budget certainty for the busiest period of the year. Total cost predictability: £42,000 over the term.",
          "Flexible recommendation: Not applicable. Annual spend is well below the threshold where flex strategies justify the administrative overhead.",
        ],
      },
      {
        heading: "When to talk to a procurement specialist",
        paragraphs: [
          "If your annual energy spend is north of £100k and you've never explored flex, it's worth a 30-minute call to understand what's possible. Even if the answer is 'stay fixed', you'll know why.",
        ],
      },
    ],
  },
  {
    slug: "half-hourly-meters-explained",
    category: "Meters",
    categoryVariant: "gold",
    title: "Half-hourly metering, explained without the jargon.",
    excerpt:
      "HH meters are now standard for sites consuming 100+ MWh. Here's why.",
    readTime: "5 min read",
    date: "14 May 2026",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    author: { name: "Priya Mehta", role: "Metering Operations Lead" },
    body: [
      {
        paragraphs: [
          "Half-hourly (HH) meters record electricity consumption in 30-minute increments. For UK businesses with peak demand above 100 kVA, they're mandatory, but increasingly they're the right choice for any commercial site over 100 MWh of annual consumption too.",
          "Here's what HH metering actually means and why it changes how you buy energy.",
        ],
      },
      {
        heading: "How HH metering differs from profile billing",
        paragraphs: [
          "A standard credit meter records a single cumulative kWh figure. The supplier reads it quarterly (or more often), works out the difference, and bills you based on an estimated profile of when you used the energy.",
          "HH meters record actual consumption every 30 minutes, 17,520 data points per year per meter. Your supplier bills you on real data, not a profile.",
        ],
      },
      {
        heading: "Why it matters for procurement",
        paragraphs: [
          "HH data unlocks time-of-use pricing, paying less for off-peak energy and more for peak. For businesses that can shift load (manufacturing, EV charging, cold storage) the savings can be 10-20%.",
          "It also enables more accurate demand forecasting, which tightens supplier risk premiums on flexible contracts.",
        ],
      },
      {
        heading: "Should you install one?",
        paragraphs: [
          "If your annual electricity consumption is above 100 MWh and your peak demand is below 100 kVA, you're not legally required to install HH metering, but it's almost always worth the conversation with your supplier.",
          "Most major suppliers will fit HH metering free of charge as part of a multi-year contract.",
        ],
      },
    ],
  },
  {
    slug: "energy-bill-discount-scheme-update",
    category: "Policy",
    categoryVariant: "green-soft",
    title:
      "Energy Bill Discount Scheme, what replaced it and what's next.",
    excerpt:
      "A clear summary of post-EBDS government support for UK businesses.",
    readTime: "4 min read",
    date: "6 May 2026",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1600&q=80",
    author: { name: "Daniel Reeves", role: "Policy Analyst" },
    body: [
      {
        paragraphs: [
          "The Energy Bill Discount Scheme (EBDS) ended in March 2024. Since then, UK government support for non-domestic energy bills has been targeted rather than universal, and that's set to remain the case through 2026.",
        ],
      },
      {
        heading: "What's currently in place",
        paragraphs: [
          "1. Energy and Trade Intensive Industries (ETII) support, discounts for specific high-intensity sectors.",
          "2. The Climate Change Agreement scheme, reduced CCL rates for businesses meeting energy efficiency targets.",
          "3. Energy Savings Opportunity Scheme (ESOS) Phase 3, mandatory audits for large enterprises.",
        ],
      },
      {
        heading: "What's not coming back",
        paragraphs: [
          "A universal price cap for businesses is not on the table. Policy direction is clear: targeted support for high-intensity sectors plus efficiency incentives across the rest of the market.",
          "Practical takeaway: assume no government support for your bill. Lock in competitive rates and look at efficiency capex instead.",
        ],
      },
    ],
  },
  {
    slug: "multi-site-procurement-playbook",
    category: "Procurement",
    categoryVariant: "house",
    title: "The multi-site procurement playbook for 10+ site portfolios.",
    excerpt:
      "How operations teams negotiate framework contracts and consolidate billing.",
    readTime: "11 min read",
    date: "29 April 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    author: { name: "Sarah Whitfield", role: "Procurement Director" },
    body: [
      {
        paragraphs: [
          "Single-site procurement is mostly about price. Multi-site procurement is about operations, consolidated billing, single account management, and frameworks that can absorb new sites without renegotiation.",
          "Here's the playbook our procurement desk runs for portfolios of 10+ sites.",
        ],
      },
      {
        heading: "Step 1: consolidate the data",
        paragraphs: [
          "Pull every MPAN, MPRN, supplier and contract end date into one schedule. Most clients underestimate the complexity of their portfolio until they see it on a spreadsheet, sites missed during acquisitions, deemed rates that never got switched, exit fees that weren't flagged.",
        ],
      },
      {
        heading: "Step 2: framework, not piecemeal",
        paragraphs: [
          "Negotiate one master framework contract with each supplier and add sites to it as their existing contracts expire. Same unit rate, same standing charge, same T&Cs across the portfolio.",
          "This avoids the death-by-renewal scenario where you're managing 47 different contract end dates across 12 different suppliers.",
        ],
      },
      {
        heading: "Step 3: consolidated billing",
        paragraphs: [
          "Push for one consolidated invoice per supplier per month, with per-site cost allocation. Most major UK suppliers will agree for portfolios over 10 sites.",
          "This single change typically saves 5-10 hours of finance team admin per month.",
        ],
      },
      {
        heading: "Step 4: dedicated account management",
        paragraphs: [
          "Insist on a named account manager and an SLA on response times. Portfolios over 20 sites should expect monthly portfolio reviews and quarterly market briefings.",
        ],
      },
    ],
  },
  {
    slug: "ppa-vs-rego-explained",
    category: "Renewables",
    categoryVariant: "green",
    title: "PPAs vs REGOs: the two paths to 100% renewable energy.",
    excerpt:
      "Power Purchase Agreements deliver additionality. REGOs don't. Here's when each is right.",
    readTime: "8 min read",
    date: "22 April 2026",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
    author: { name: "Marcus Brown", role: "Sustainability Lead" },
    body: [
      {
        paragraphs: [
          "If you've ever sat through an ESG audit and been asked 'but is this actually driving new renewable generation?', you've already met the difference between a REGO and a PPA.",
        ],
      },
      {
        heading: "REGOs: simple, certified, abundant",
        paragraphs: [
          "Renewable Energy Guarantees of Origin are tradeable certificates issued by Ofgem. They're abundant, cheap, and accepted by every major reporting framework. They're also detachable from the underlying generation, which is why critics argue they don't drive additionality.",
        ],
      },
      {
        heading: "PPAs: contractual, additional, complex",
        paragraphs: [
          "A Power Purchase Agreement is a multi-year contract directly with a renewable generator. Your business commits to buying a portion of that generator's output at a fixed price, typically over 5-15 years.",
          "Because PPAs underwrite new renewable projects, they demonstrably drive additionality, your purchase caused new renewable capacity to be built.",
        ],
      },
      {
        heading: "When to choose which",
        paragraphs: [
          "REGO if: you're an SME or mid-market business with sub-£500k annual energy spend and need a defensible green tariff.",
          "PPA if: you have public ESG commitments, are subject to scrutiny on additionality (CDP A-list, SBTi), and have annual electricity consumption above 5 GWh.",
          "Both if: you want the cost predictability of a PPA for part of your load and REGO matching for the rest.",
        ],
      },
    ],
  },
  {
    slug: "ofgem-supplier-licence-changes",
    category: "Policy",
    categoryVariant: "green-soft",
    title:
      "Ofgem supplier licence changes, what brokers must disclose now.",
    excerpt:
      "TPI transparency rules, broker fee disclosure and what to ask before signing.",
    readTime: "6 min read",
    date: "15 April 2026",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80",
    author: { name: "Daniel Reeves", role: "Policy Analyst" },
    body: [
      {
        paragraphs: [
          "Ofgem's updated supplier licence conditions came into force in October 2025 and have meaningfully changed how Third-Party Intermediaries (TPIs), energy brokers, operate in the UK business market.",
        ],
      },
      {
        heading: "What's changed",
        paragraphs: [
          "Suppliers are now required to confirm the broker fee or uplift on every business energy contract written through a TPI. The TPI itself must disclose any commission, uplift, or fee taken on the contract.",
          "In practice, this means you should now see a line on your quote showing exactly what the broker is being paid, whether as a flat fee, a unit-rate uplift, or both.",
        ],
      },
      {
        heading: "Questions to ask any broker",
        paragraphs: [
          "1. What is your fee or uplift on this contract?",
          "2. Is the fee a flat amount, a unit-rate uplift, or both?",
          "3. Will the uplift change if I extend the contract?",
          "4. Are you signed up to the Ofgem-approved code of practice (e.g. Utilities Intermediaries Association)?",
        ],
      },
      {
        heading: "What we publish",
        paragraphs: [
          "Scott Prime Energy publishes our fee on every quote, clearly and on the first screen. We're paid by the supplier, not the customer, and you'll see exactly what that amount is before you sign.",
        ],
      },
    ],
  },
  {
    slug: "winter-2026-readiness-checklist",
    category: "Market outlook",
    categoryVariant: "green",
    title: "Winter 2026 readiness checklist for UK SMEs.",
    excerpt: "Ten things to confirm before your peak-demand months hit.",
    readTime: "5 min read",
    date: "8 April 2026",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80",
    author: { name: "Alex Carter", role: "Head of Procurement" },
    body: [
      {
        paragraphs: [
          "Winter is when UK SMEs feel their energy bill most. October to March accounts for ~60% of annual consumption for most UK businesses. Here are the ten things worth confirming before peak demand hits.",
        ],
      },
      {
        heading: "The checklist",
        paragraphs: [
          "1. Confirm your contract end date, and start running quotes 90 days before.",
          "2. Verify your standing charge, these have risen 18% over the last 18 months.",
          "3. Check your unit rate against current market, anything fixed before mid-2024 is likely above market.",
          "4. Audit your supply points, are any sites on deemed rates?",
          "5. Confirm your smart meter is reporting half-hourly, call your supplier if unsure.",
          "6. Review your peak demand setting, overpaying for capacity you don't use?",
          "7. Run an ESOS-style audit on your top three consumption-heavy assets.",
          "8. Check your heating control settings, schedule, set-points, weekend mode.",
          "9. Confirm your renewable / REGO matching is still in place if it was contracted.",
          "10. Set a calendar reminder 90 days before contract end. Always.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
