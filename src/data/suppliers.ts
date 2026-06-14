export type SupplierVariant = "green" | "green-soft" | "house" | "gold" | "gold-outline";

export type Supplier = {
  name: string;
  slug: string;
  category: "Major" | "Challenger" | "SME" | "Specialist";
  variant: SupplierVariant;
  blurb: string;
  established: string;
  hq: string;
  customers: string;
  fuels: ("Electricity" | "Gas")[];
  verdict: string;
  best: string;
  contractTerms: string[];
  features: string[];
  caveats: string[];
  logo?: string;
};

const WIKI = "https://en.wikipedia.org/wiki/Special:FilePath";

export const SUPPLIER_LOGOS: Record<string, string> = {
  "british-gas":     `${WIKI}/British_Gas_logo.svg`,
  "edf-energy":      `${WIKI}/EDF_Energy_logo.svg`,
  "eon-next":        `${WIKI}/Logo_E.ON.svg`,
  "octopus-energy":  `${WIKI}/Octopus_Energy_logo_(2019).svg`,
  "scottish-power":  `${WIKI}/ScottishPower_Logo_2023.svg`,
  "sse":             `${WIKI}/SSE_plc_logo.svg`,
  "drax":            `${WIKI}/DRAX_POWERBLUE_RGB.png`,
  "total-energies":  `${WIKI}/TotalEnergies_logo.svg`,
  "npower-business": `${WIKI}/RWE_npower_logo.png`,
  "opus-energy":     "https://www.google.com/s2/favicons?domain=opusenergy.com&sz=128",
  "pozitive-energy": "https://www.google.com/s2/favicons?domain=pozitiveenergy.co.uk&sz=128",
  "yu-energy":       "https://www.google.com/s2/favicons?domain=yuenergy.co.uk&sz=128",
};

export const suppliers: Supplier[] = [
  {
    name: "British Gas",
    slug: "british-gas",
    category: "Major",
    variant: "green",
    blurb:
      "The UK's largest energy supplier. Strong fixed-tariff range and dedicated SME desk.",
    established: "1812",
    hq: "Windsor, Berkshire",
    customers: "7.5M+",
    fuels: ["Electricity", "Gas"],
    verdict:
      "The default choice for UK SMEs that value brand reliability and a dedicated account manager. Pricing rarely the absolute cheapest, but consistently within striking distance.",
    best: "Multi-site SMEs that want a single household-name supplier across electricity and gas.",
    contractTerms: ["12 months", "24 months", "36 months"],
    features: [
      "Dedicated SME account team",
      "Online billing & meter reads",
      "REGO-backed renewable options",
      "Half-hourly meter support",
    ],
    caveats: [
      "Not usually the cheapest unit rate",
      "Standing charges above market average",
    ],
  },
  {
    name: "EDF Energy",
    slug: "edf-energy",
    category: "Major",
    variant: "green-soft",
    blurb:
      "Low-carbon generation backed by nuclear and renewables. Competitive on multi-year fixes.",
    established: "2002",
    hq: "London",
    customers: "5M+",
    fuels: ["Electricity", "Gas"],
    verdict:
      "Strong on multi-year fixed tariffs thanks to their nuclear-backed generation. Especially attractive for businesses with predictable load profiles.",
    best: "Businesses locking in 36+ month fixes for budget certainty.",
    contractTerms: ["12 months", "24 months", "36 months", "48 months"],
    features: [
      "Low-carbon generation mix",
      "100% nuclear + renewable electricity",
      "Excellent multi-year pricing",
      "Strong I&C procurement desk",
    ],
    caveats: [
      "Gas pricing less competitive than electricity",
      "Onboarding can be slower for new customers",
    ],
  },
  {
    name: "E.ON Next",
    slug: "eon-next",
    category: "Major",
    variant: "green",
    blurb:
      "100% renewable electricity tariffs by default. Solid SME and corporate options.",
    established: "2020",
    hq: "Coventry",
    customers: "5M+",
    fuels: ["Electricity", "Gas"],
    verdict:
      "Every business electricity tariff is 100% REGO-backed by default, no premium for going green. Strong digital-first experience and consistently solid pricing.",
    best: "SMEs that want renewable electricity without paying a green premium.",
    contractTerms: ["12 months", "24 months", "36 months"],
    features: [
      "100% renewable electricity standard",
      "Modern self-service portal",
      "Free smart meter installs",
      "Dedicated SME team",
    ],
    caveats: [
      "Phone support can be hard to reach",
      "Limited PPA flexibility on larger contracts",
    ],
  },
  {
    name: "Octopus Energy",
    slug: "octopus-energy",
    category: "Challenger",
    variant: "gold-outline",
    blurb:
      "Tech-led supplier with smart-meter focused tariffs and excellent service ratings.",
    established: "2016",
    hq: "London",
    customers: "5M+",
    fuels: ["Electricity", "Gas"],
    verdict:
      "The standout challenger. Best-in-class digital experience, leading time-of-use tariffs and consistently top-rated customer service. Strongest fit for tech-forward SMEs.",
    best: "Tech-savvy SMEs with smart meters who can shift consumption to off-peak windows.",
    contractTerms: ["12 months", "24 months", "36 months"],
    features: [
      "Time-of-use tariffs (Agile)",
      "Half-hourly settlement",
      "100% renewable electricity",
      "Industry-leading customer service",
    ],
    caveats: [
      "Less established for very large I&C contracts",
      "Some bespoke tariffs require smart meter",
    ],
  },
  {
    name: "Scottish Power",
    slug: "scottish-power",
    category: "Major",
    variant: "green-soft",
    blurb:
      "Strong renewables portfolio. Good fit for high-consumption industrial sites.",
    established: "1990",
    hq: "Glasgow",
    customers: "5M+",
    fuels: ["Electricity", "Gas"],
    verdict:
      "Owned by Iberdrola, significant onshore and offshore wind investment. Strong on industrial and high-consumption commercial contracts.",
    best: "Industrial sites and high-consumption B2B customers.",
    contractTerms: ["12 months", "24 months", "36 months"],
    features: [
      "Heavily renewable generation mix",
      "Industrial &amp; commercial focus",
      "Half-hourly meter expertise",
      "UK-based account management",
    ],
    caveats: [
      "Less competitive for small SMEs",
      "Renewal pricing can be uncompetitive",
    ],
  },
  {
    name: "SSE",
    slug: "sse",
    category: "Major",
    variant: "green",
    blurb: "Now part of OVO. Reliable multi-site and half-hourly meter support.",
    established: "1998",
    hq: "Perth, Scotland",
    customers: "4M+",
    fuels: ["Electricity", "Gas"],
    verdict:
      "Retail business now sits under OVO. Strong heritage in industrial and multi-site commercial energy with reliable HH meter handling.",
    best: "Multi-site portfolios with mixed meter types.",
    contractTerms: ["12 months", "24 months", "36 months"],
    features: [
      "Multi-site portfolio support",
      "Half-hourly metering expertise",
      "Energy services bundle",
      "Long-standing I&C team",
    ],
    caveats: [
      "Brand transition to OVO ongoing",
      "Less competitive on SME spot pricing",
    ],
  },
  {
    name: "Drax",
    slug: "drax",
    category: "Specialist",
    variant: "house",
    blurb:
      "Renewable specialist focused on larger commercial and industrial customers.",
    established: "1973",
    hq: "Selby, North Yorkshire",
    customers: "30,000+ business",
    fuels: ["Electricity", "Gas"],
    verdict:
      "B2B-focused supplier with deep PPA capability. Best-in-class for businesses seeking source-tracked renewable supply with demonstrable additionality.",
    best: "Mid-market and corporate customers focused on renewable procurement.",
    contractTerms: ["12 months", "24 months", "36+ months bespoke"],
    features: [
      "PPA structuring capability",
      "Source-tracked renewable supply",
      "Energy management services",
      "I&C dedicated specialists",
    ],
    caveats: [
      "Not suitable for micro-SMEs",
      "Onboarding takes longer than majors",
    ],
  },
  {
    name: "Opus Energy",
    slug: "opus-energy",
    category: "SME",
    variant: "gold",
    blurb: "100% renewable electricity for SMEs. Flexible contract lengths.",
    established: "2002",
    hq: "Northampton",
    customers: "350,000+",
    fuels: ["Electricity", "Gas"],
    verdict:
      "Pure-play SME specialist owned by Drax Group. Every electricity contract is 100% REGO-backed and the SME team is responsive and experienced.",
    best: "Pure-play UK SMEs wanting green electricity without enterprise complexity.",
    contractTerms: ["1 year", "2 year", "3 year", "5 year"],
    features: [
      "100% renewable electricity",
      "SME-only product set",
      "Quick quote turnaround",
      "Online account dashboard",
    ],
    caveats: ["No I&C / multi-site complexity", "Limited PPA capability"],
  },
  {
    name: "Total Energies",
    slug: "total-energies",
    category: "Specialist",
    variant: "house",
    blurb:
      "International energy major. Strong on flexible procurement contracts.",
    established: "1924 (UK B2B from 2018)",
    hq: "Redhill, Surrey",
    customers: "30,000+ business",
    fuels: ["Electricity", "Gas"],
    verdict:
      "Global energy major. Strongest in flexible procurement, bespoke I&C contracts, and integrated solutions across electricity, gas and EV charging.",
    best: "Mid-market and corporate customers wanting flexible / basket purchasing.",
    contractTerms: ["12 months", "24 months", "36 months bespoke"],
    features: [
      "Flexible purchasing strategies",
      "Multi-fuel + EV bundle",
      "Global supply chain",
      "Carbon advisory services",
    ],
    caveats: [
      "Onboarding longer than UK-only suppliers",
      "Not for micro-businesses",
    ],
  },
  {
    name: "Pozitive Energy",
    slug: "pozitive-energy",
    category: "SME",
    variant: "gold",
    blurb:
      "Specialist SME supplier with competitive 1-3 year fixed tariffs.",
    established: "2019",
    hq: "Stevenage",
    customers: "60,000+",
    fuels: ["Electricity", "Gas"],
    verdict:
      "Fast-growing SME challenger with consistently aggressive pricing on 12-36 month fixes. Worth comparing against the majors on every renewal.",
    best: "SMEs hunting the cheapest annual unit rate.",
    contractTerms: ["12 months", "24 months", "36 months"],
    features: [
      "Aggressive SME pricing",
      "Fast quote turnaround",
      "Online switching",
      "Renewable options",
    ],
    caveats: [
      "Less established brand",
      "Limited capability for large multi-site",
    ],
  },
  {
    name: "Yu Energy",
    slug: "yu-energy",
    category: "SME",
    variant: "gold",
    blurb:
      "Fast-growing SME-focused supplier with rapid quote turnaround.",
    established: "2013",
    hq: "Nottingham",
    customers: "30,000+",
    fuels: ["Electricity", "Gas"],
    verdict:
      "AIM-listed SME challenger. Strong digital onboarding and competitive on shorter contract lengths. Sweet spot is 1-2 year SME fixes.",
    best: "Smaller SMEs wanting fast online switching.",
    contractTerms: ["12 months", "24 months", "36 months"],
    features: [
      "Rapid online quoting",
      "SME-only focus",
      "Digital-first onboarding",
      "Renewable options",
    ],
    caveats: ["No I&C capability", "Smaller customer base"],
  },
  {
    name: "Npower",
    slug: "npower-business",
    category: "Major",
    variant: "green-soft",
    blurb:
      "Now part of E.ON. Established broker-friendly SME and I&C portfolio.",
    established: "1989",
    hq: "Worcester",
    customers: "1M+ business",
    fuels: ["Electricity", "Gas"],
    verdict:
      "Now operating under E.ON Energy Solutions. Strong industrial and commercial track record with deep broker channel relationships.",
    best: "Mid-market and I&C customers with complex needs.",
    contractTerms: ["12 months", "24 months", "36+ months bespoke"],
    features: [
      "I&C bespoke pricing",
      "Multi-site portfolio team",
      "Half-hourly metering",
      "Energy services bundle",
    ],
    caveats: [
      "Brand consolidation with E.ON ongoing",
      "Less competitive for micro-SME",
    ],
  },
];

export function getSupplier(slug: string): Supplier | undefined {
  return suppliers.find((s) => s.slug === slug);
}
