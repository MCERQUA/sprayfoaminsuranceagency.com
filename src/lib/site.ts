// Centralized site data — used across nav, footer, schema, CTAs
// Spray Foam Insurance Agency — dedicated insurance for spray foam contractors

export const SITE = {
  name: "Spray Foam Insurance Agency",
  legalName: "Spray Foam Insurance Agency (by Contractors Choice Agency)",
  domain: "sprayfoaminsuranceagency.com",
  url: "https://sprayfoaminsuranceagency.com",
  tagline: "Insurance for Spray Foam Contractors & Insulation Businesses",
  description:
    "Specialized commercial insurance for spray foam insulation contractors — general liability with spray foam endorsements, off-ratio coverage, contractor pollution liability for VOC and chemical exposure, workers' comp, commercial auto for spray rigs, tools and equipment, umbrella, and contractor bonds. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

// Niche nouns used in headings, metadata, and component copy
export const BRAND = {
  brandShort: "Spray Foam",
  brandSub: "Contractor Insurance",
  nicheShort: "spray foam contractor",
  nicheShortCap: "Spray Foam Contractor",
  nichePlural: "spray foam contractors",
  nichePluralCap: "Spray Foam Contractors",
  operator: "spray foam operation",
  operatorCap: "Spray Foam Operation",
  industry: "spray foam insulation",
  industryCap: "Spray Foam Insulation",
  audience: "spray foam applicators",
  audienceCap: "Spray Foam Applicators",
  ownerTitle: "spray foam contractor",
  regionPill: "Texas · Florida · National",
  serviceSuffix: "Spray Foam Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability for Spray Foam",
    short: "GL built for the spray foam exposure — not a generic contractor form",
    description:
      "Standard contractor GL policies exclude or severely limit spray foam operations. We place GL with spray foam endorsements that cover completed operations, property damage from foam expansion, and the chemical-application exposure that generic policies carve out.",
    icon: "ShieldCheck",
    keywords: ["spray foam general liability", "spray foam contractor GL insurance", "spray foam insulation liability coverage", "spray foam applicator insurance"],
  },
  {
    slug: "off-ratio-coverage",
    title: "Off-Ratio Coverage",
    short: "When A & B mix wrong — the claim no standard policy touches",
    description:
      "Off-ratio spray foam — when A-component and B-component are mixed incorrectly — causes property damage, structural issues, and chemical exposure claims that most GL policies explicitly exclude. We place coverage that addresses off-ratio events as a standalone insurable risk.",
    icon: "Gauge",
    keywords: ["off-ratio spray foam coverage", "spray foam off-ratio insurance", "foam ratio error insurance", "spray polyurethane foam defect coverage"],
  },
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    short: "VOC, isocyanate, and chemical exposure claims covered",
    description:
      "Spray foam application releases volatile organic compounds, isocyanates, and blowing agents that expose contractors to third-party bodily injury and property claims. Contractor Pollution Liability (CPL) covers these chemical-exposure events that standard GL excludes under the pollution exclusion.",
    icon: "Droplets",
    keywords: ["contractor pollution liability spray foam", "spray foam CPL insurance", "VOC exposure insurance contractor", "isocyanate liability insurance spray foam"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For spray foam crews handling chemicals and working at height",
    description:
      "Spray foam work involves chemical inhalation risk, confined-space exposure, fall hazards, and heat from exothermic reactions. We class-code spray foam labor correctly and access markets that don't surcharge or exclude the trade.",
    icon: "HardHat",
    keywords: ["spray foam workers compensation", "spray foam contractor workers comp", "insulation contractor workers comp", "spray foam employee insurance"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto & Spray Rigs",
    short: "Coverage for foam rigs, proportioners, and service trucks",
    description:
      "Spray foam contractors operate specialized vehicles — proportioning machines on trucks, heated hose rigs, and chemical-transport vehicles. We insure the vehicle, the equipment on it, and the liability when your rig is on the road or on a jobsite.",
    icon: "Truck",
    keywords: ["spray foam commercial auto insurance", "foam rig insurance", "proportioner truck coverage", "spray foam vehicle insurance"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment Coverage",
    short: "Protect proportioners, spray guns, hoses, and rigs",
    description:
      "A spray foam contractor's equipment — proportioning machines, spray guns, heated hoses, transfer pumps, and generators — represents tens of thousands in capital. Tools and equipment coverage pays for theft, damage, and breakdown of the gear your jobs depend on.",
    icon: "Wrench",
    keywords: ["spray foam tools equipment insurance", "proportioner insurance", "spray foam equipment coverage", "foam rig equipment insurance"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella",
    short: "Extra limits above GL, auto, and workers' comp",
    description:
      "A single spray foam claim — a fire from foam off-gassing, major property damage, or a pollution release — can exceed standard policy limits. Commercial umbrella provides excess coverage above your GL, auto, and workers' comp for catastrophic events.",
    icon: "Umbrella",
    keywords: ["spray foam umbrella insurance", "contractor umbrella policy", "spray foam excess liability", "insulation contractor umbrella"],
  },
  {
    slug: "bonds",
    title: "Contractor License & Surety Bonds",
    short: "License bonds, performance bonds, and bid bonds",
    description:
      "Many states require spray foam contractors to carry a license bond. General contractors and property managers often require performance and payment bonds. We issue contractor bonds fast — often same-day — and coordinate them with your liability program.",
    icon: "FileCheck",
    keywords: ["spray foam contractor bond", "insulation contractor surety bond", "spray foam license bond", "contractor performance bond spray foam"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas-southwest", name: "Texas & Southwest", region: "TX · AZ · NM · NV", blurb: "The spray foam market in Texas and the Southwest is one of the largest in the country. High heat, energy codes, and new construction volume drive enormous demand for spray foam insulation contractors — and the liability and pollution exposures that come with high-volume chemical application." },
  { slug: "southeast", name: "Southeast", region: "FL · GA · NC · SC · AL", blurb: "Florida and the Southeast are high-growth spray foam markets driven by humidity, mold, and energy efficiency requirements. Coastal construction and renovation work creates elevated completed-operations and pollution exposure. We understand the Southeast's building codes and risk environment." },
  { slug: "midwest", name: "Midwest", region: "IL · IN · OH · MI · MN", blurb: "The Midwest's extreme temperature swings make spray foam insulation essential for residential and commercial buildings. Cold-climate spray foam contractors face unique off-ratio risk from low-temperature application and confined-space chemical exposure in tight building envelopes." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · CT · MA", blurb: "The Northeast's aging housing stock and tight energy codes create strong demand for spray foam retrofits. New York and Pennsylvania contractors face demanding residential clients and high completed-operations exposure — we place GL and CPL programs built for that environment." },
  { slug: "california", name: "California", region: "CA · Pacific Coast", blurb: "California's Title 24 energy code and green-building requirements fuel significant spray foam insulation demand. California contractors face strict VOC regulations, air-quality enforcement, and elevated third-party bodily-injury exposure from chemical applications — requiring robust CPL and GL programs." },
  { slug: "mountain-states", name: "Mountain States", region: "CO · UT · ID · WY", blurb: "Colorado and Mountain State contractors insulate high-altitude homes and commercial buildings where energy performance is critical. Cold-weather application, high-elevation worksites, and a booming construction market make well-structured spray foam insurance essential in this region." },
  { slug: "mid-atlantic", name: "Mid-Atlantic", region: "VA · MD · DC · DE", blurb: "Mid-Atlantic spray foam contractors serve a dense mix of residential retrofits, commercial builds, and federal projects in the DC metro. High-value properties and demanding GC requirements mean GL limits, CPL, and performance bonds are standard parts of a complete program here." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "WA · OR · ID", blurb: "Pacific Northwest energy codes and the region's focus on sustainable building drive demand for spray foam insulation. Washington and Oregon contractors face stringent environmental regulations around chemical applications — making contractor pollution liability and proper GL coverage essential." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Spray foam specialist agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Spray foam contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring specialty contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "A homeowner claimed our foam expanded into their HVAC system and caused $40,000 in damage. Our old GL carrier said it was excluded. Spray Foam Insurance Agency placed a GL form that actually covered the claim — we had no idea generic policies had that gap until it almost cost us everything.", name: "Marcus T.", role: "Owner", location: "Texas" },
  { quote: "We had an off-ratio event on a commercial retrofit that triggered VOC complaints from the building's tenants. The claim crossed GL and pollution lines. Having both coordinated by the same agency was critical — one phone call, no finger-pointing between carriers, and a fair settlement.", name: "Sandra R.", role: "Operations Manager", location: "Florida" },
  { quote: "Three carriers declined us because of our CPL exposure and one prior pollution claim. These guys understood spray foam chemistry, documented our protocols, and placed an A-rated program with off-ratio coverage included. They know this trade inside and out.", name: "Derek M.", role: "Spray Foam Applicator", location: "Colorado" },
] as const;
