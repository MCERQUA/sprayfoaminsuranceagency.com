// Centralized site data — used across nav, footer, schema, CTAs
// AZ Homeowners Insurance — Arizona homeowners insurance specialists

export const SITE = {
  name: "AZ Homeowners Insurance",
  legalName: "AZ Homeowners Insurance (by Contractors Choice Agency)",
  domain: "azhomeownersinsurance.com",
  url: "https://azhomeownersinsurance.com",
  tagline: "Arizona Homeowners Insurance — Fast Quotes, Local Expertise",
  description:
    "Arizona homeowners insurance specialists — dwelling coverage, personal property, liability, loss of use, flood, and umbrella for AZ homeowners. We compare top-rated carriers to find the best rate for your Arizona home. Licensed in Arizona, quotes in 15 minutes.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    city: "Chandler",
    state: "AZ",
    region: "Arizona",
    country: "US",
  },
  serviceArea: "Serving homeowners across Arizona — statewide",
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "Same-day claims contact",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "Licensed in Arizona",
} as const;

export const BRAND = {
  brandShort: "AZ Homeowners",
  brandSub: "Insurance Specialists",
  nicheShort: "Arizona homeowner",
  nicheShortCap: "Arizona Homeowner",
  nichePlural: "Arizona homeowners",
  nichePluralCap: "Arizona Homeowners",
  operator: "Arizona home",
  operatorCap: "Arizona Home",
  industry: "homeowners insurance",
  industryCap: "Homeowners Insurance",
  audience: "Arizona homeowners",
  audienceCap: "Arizona Homeowners",
  ownerTitle: "Arizona homeowner",
  regionPill: "Phoenix · Scottsdale · Tucson · Chandler",
  serviceSuffix: "Arizona Homeowners",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Coverage", href: "/coverage" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "dwelling-coverage",
    title: "Dwelling Coverage",
    short: "Rebuild cost protection for your Arizona home structure",
    description:
      "Arizona's extreme heat, monsoon storms, and wildfire exposure mean your dwelling coverage needs to reflect true replacement cost — not market value. We match you with carriers that build rebuild-cost estimates for Arizona's construction environment, ensuring you're not underinsured after a total loss.",
    icon: "Home",
    keywords: ["arizona dwelling insurance", "arizona home structure coverage", "az homeowners dwelling policy", "arizona home rebuild coverage"],
  },
  {
    slug: "personal-property",
    title: "Personal Property Coverage",
    short: "Belongings protection against theft, fire, and storm damage",
    description:
      "Your furniture, electronics, clothing, appliances, and valuables are covered against theft, fire, monsoon damage, and vandalism. We help you inventory your belongings and right-size coverage so you're not over- or under-insured on contents.",
    icon: "Package",
    keywords: ["arizona personal property insurance", "az home contents coverage", "arizona homeowners personal property", "home belongings insurance arizona"],
  },
  {
    slug: "liability",
    title: "Personal Liability",
    short: "Legal protection if someone is injured on your property",
    description:
      "If a guest is injured at your Arizona home, your dog bites a neighbor, or your child accidentally damages a neighbor's property, your personal liability coverage pays for legal defense and any judgment. Arizona pools, trampolines, and dogs significantly affect your liability exposure.",
    icon: "ShieldCheck",
    keywords: ["arizona home liability insurance", "homeowners liability coverage arizona", "az personal liability insurance", "arizona home liability protection"],
  },
  {
    slug: "loss-of-use",
    title: "Loss of Use Coverage",
    short: "Hotel and living costs while your home is repaired",
    description:
      "If a covered loss makes your Arizona home uninhabitable — a fire, major monsoon damage, or a burst pipe — loss of use coverage pays for hotel stays, restaurant meals, and temporary housing while repairs are underway. Critical in Phoenix metro where hotel rates run $150–$400/night.",
    icon: "Building",
    keywords: ["loss of use coverage arizona", "additional living expenses arizona homeowners", "az homeowners loss of use", "arizona home temporary housing coverage"],
  },
  {
    slug: "flood-insurance",
    title: "Flood Insurance",
    short: "Monsoon and flash-flood protection standard HO-3 excludes",
    description:
      "Arizona's monsoon season brings flash flooding that standard homeowners policies exclude entirely. We access NFIP and private flood markets with broader triggers and higher limits — important for Phoenix, Tucson, and low-lying metro homeowners.",
    icon: "Droplets",
    keywords: ["arizona flood insurance", "az monsoon flood coverage", "phoenix flood insurance homeowner", "arizona private flood insurance"],
  },
  {
    slug: "umbrella",
    title: "Personal Umbrella",
    short: "Extra liability above your home and auto policies",
    description:
      "A $1M personal umbrella runs $15–$30/month in Arizona and provides excess liability above your homeowners and auto policies. Essential for Arizona homeowners with pools, dogs, teenage drivers, or significant assets.",
    icon: "Umbrella",
    keywords: ["arizona personal umbrella insurance", "az homeowners umbrella policy", "arizona umbrella liability coverage", "phoenix homeowners umbrella"],
  },
  {
    slug: "scheduled-personal-property",
    title: "Scheduled Personal Property",
    short: "Jewelry, art, guns, and high-value items properly covered",
    description:
      "Standard homeowners policies cap jewelry at $1,500–$2,500 and firearms at $2,500. Scheduling individual items on a floater removes sub-limits and provides broader coverage including mysterious disappearance — important for Arizona homeowners with collections or jewelry.",
    icon: "Gem",
    keywords: ["arizona scheduled personal property", "jewelry insurance arizona", "az firearms insurance homeowners", "arizona high value items coverage"],
  },
  {
    slug: "dwelling-fire",
    title: "Rental & Vacant Home Coverage",
    short: "Coverage for rental properties and vacant Arizona homes",
    description:
      "If you own a rental property, vacation home, or a home that sits vacant, a standard HO-3 won't cover it. Dwelling fire policies cover the structure and liability for non-owner-occupied or vacant Arizona properties — including Phoenix and Scottsdale investment homes.",
    icon: "Flame",
    keywords: ["arizona rental property insurance", "az dwelling fire policy", "vacant home insurance arizona", "arizona investment property insurance"],
  },
  {
    slug: "condo-insurance",
    title: "Condo Insurance (HO-6)",
    short: "Walls-in coverage for Arizona condo and townhome owners",
    description:
      "An Arizona condo policy (HO-6) covers everything your HOA master policy doesn't — interior walls, floors, cabinets, fixtures, your personal property, personal liability, and loss assessment. We help Tempe, Scottsdale, and Phoenix condo owners close the gap between the association's 'bare walls' master policy and what you actually own.",
    icon: "Building",
    keywords: ["arizona condo insurance", "ho-6 insurance arizona", "condo insurance phoenix", "arizona townhome insurance", "az condo ho6 policy"],
  },
  {
    slug: "renters-insurance",
    title: "Renters Insurance (HO-4)",
    short: "Affordable belongings + liability coverage for AZ renters",
    description:
      "Arizona renters insurance (HO-4) protects your personal property against theft, fire, and monsoon damage, covers your personal liability, and pays additional living expenses if a covered loss forces you out. Most Arizona renters policies run $12–$20/month — and many Phoenix and Tucson landlords now require it.",
    icon: "Package",
    keywords: ["arizona renters insurance", "renters insurance phoenix", "ho-4 insurance arizona", "cheap renters insurance arizona", "tucson renters insurance"],
  },
  {
    slug: "mobile-home-insurance",
    title: "Mobile & Manufactured Home Insurance",
    short: "Specialty coverage for Arizona manufactured and mobile homes",
    description:
      "Manufactured and mobile homes need a specialty policy (often an HO-7 or mobile-home form) — not a standard HO-3. We write coverage for single- and double-wide homes across Arizona's manufactured-home communities, covering the structure, attached additions, personal property, and liability against wind, fire, and monsoon perils.",
    icon: "Home",
    keywords: ["arizona mobile home insurance", "manufactured home insurance arizona", "mobile home insurance phoenix", "az manufactured home policy", "double wide insurance arizona"],
  },
  {
    slug: "high-value-home-insurance",
    title: "High-Value Home Insurance",
    short: "Extended replacement-cost coverage for luxury AZ estates",
    description:
      "High-value Arizona homes in Scottsdale, Paradise Valley, and Silverleaf need specialty carriers — not standard markets that underinsure custom construction. We access high-net-worth programs offering guaranteed or extended replacement cost, higher liability limits, cash settlement options, and coverage for pools, casitas, art, and wine collections.",
    icon: "Gem",
    keywords: ["arizona high value home insurance", "luxury home insurance scottsdale", "paradise valley home insurance", "high net worth home insurance arizona", "az estate insurance"],
  },
] as const;

export const LOCATIONS = [
  { slug: "phoenix", name: "Phoenix Metro", region: "Phoenix · Glendale · Tempe · Mesa", blurb: "Phoenix homeowners face some of Arizona's highest wildfire interface exposure combined with urban monsoon flooding. The Valley's extreme heat accelerates roof and HVAC wear, and carriers have tightened underwriting here. We access markets that still write competitively for Phoenix metro homes." },
  { slug: "scottsdale", name: "Scottsdale & Paradise Valley", region: "Scottsdale · Paradise Valley · Fountain Hills", blurb: "High-value Scottsdale and Paradise Valley homes require specialty markets for true replacement-cost coverage. Desert hillside locations carry elevated wildfire exposure. We place coverage with carriers experienced in Scottsdale's high-value home market and the McDowell Mountain interface zone." },
  { slug: "tucson", name: "Tucson & Southern Arizona", region: "Tucson · Marana · Oro Valley · Sierra Vista", blurb: "Tucson homeowners face monsoon flooding, wildfire risk in Catalina foothills neighborhoods, and an older housing stock that can affect underwriting. We find competitive rates for Tucson homes across a range of ages, conditions, and locations." },
  { slug: "chandler-gilbert", name: "Chandler, Gilbert & East Valley", region: "Chandler · Gilbert · Queen Creek · San Tan Valley", blurb: "East Valley homeowners in newer subdivisions often overpay for homeowners insurance on homes with favorable risk profiles. We re-market your home annually against multiple carriers to ensure you're not paying renewal-creep premiums on what is often a low-risk, newer-construction property." },
  { slug: "flagstaff", name: "Flagstaff & Northern Arizona", region: "Flagstaff · Sedona · Prescott · Williams", blurb: "Northern Arizona homeowners face wildfire interface risk unlike anywhere else in the state. Flagstaff's WUI classification and Sedona's proximity to fire-prone terrain make insurer placement critical. We access specialty carriers writing northern Arizona homes other agents can't place." },
  { slug: "prescott", name: "Prescott & Yavapai County", region: "Prescott · Prescott Valley · Chino Valley · Dewey", blurb: "Prescott and Yavapai County homeowners face one of Arizona's most challenging insurance markets — aging wood-frame homes, wildfire interface risk, and carriers exiting the county. We work with admitted and surplus lines markets to get your Prescott area home insured." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in Arizona", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Arizona home insurance specialists", icon: "Home" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "Same-day claims contact", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 20, suffix: "+", label: "Years insuring Arizona homes", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 12, suffix: "+", label: "Carriers compared for every quote", prefix: "" },
] as const;

// NOTE: No testimonials — this site intentionally uses no customer testimonials or reviews.
