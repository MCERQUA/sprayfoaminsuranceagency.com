import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { FadeIn } from "@/components/animations/FadeIn";
import { SITE } from "@/lib/site";
import { HOME_FAQS, GENERAL_FAQS } from "@/lib/content";
import { HelpCircle, ArrowRight, Phone } from "lucide-react";

const url = `${SITE.url}/faq`;

export const metadata: Metadata = {
  title: "Arizona Homeowners Insurance FAQ — 28 Questions Answered",
  description:
    "Answers to the most common Arizona homeowners insurance questions — coverage, cost, monsoon flood, wildfire, pool and dog liability, dwelling rebuild cost, condo, renters, and how to switch carriers. Licensed in Arizona, quotes in 15 minutes.",
  keywords: [
    "arizona homeowners insurance faq",
    "arizona home insurance questions",
    "does homeowners insurance cover monsoon arizona",
    "how much is home insurance in arizona",
    "arizona wildfire home insurance",
    "arizona flood insurance homeowners",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Arizona Homeowners Insurance FAQ | AZ Homeowners Insurance",
    description:
      "28 plain-English answers on Arizona homeowners insurance — coverage, cost, monsoon flood, wildfire, liability, and switching carriers.",
    url,
  },
};

const ALL_FAQS = [...HOME_FAQS, ...GENERAL_FAQS];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "FAQ", item: url },
    ],
  };

  return (
    <>
      {[faqSchema, breadcrumb].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navbar />
      <main>
        <section className="relative bg-warm-radial pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container-tight text-center">
            <FadeIn>
              <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs font-heading font-semibold text-mocha mb-5">
                <Link href="/" className="hover:text-clay">Home</Link>
                <span>/</span>
                <span className="text-clay">FAQ</span>
              </nav>
              <span className="pill-clay"><HelpCircle className="h-3.5 w-3.5" /> Frequently asked questions</span>
              <h1 className="mt-5 font-heading font-extrabold text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Arizona homeowners insurance,{" "}
                <span className="bg-gradient-to-r from-clay via-clay-light to-gold-dark bg-clip-text text-transparent">answered</span>
              </h1>
              <p className="mt-5 lead max-w-2xl mx-auto">
                Twenty-eight of the questions Arizona homeowners ask us most — coverage, cost, monsoon flooding, wildfire,
                pool and dog liability, dwelling rebuild cost, and how to stop overpaying at renewal. Still stuck? We&apos;re a phone call away.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/quote" className="btn-primary">Get a free quote<ArrowRight className="h-5 w-5" /></Link>
                <a href={SITE.phoneHref} className="btn-secondary"><Phone className="h-5 w-5" />Call {SITE.phone}</a>
              </div>
            </FadeIn>
          </div>
        </section>

        <FAQ
          items={HOME_FAQS as unknown as { q: string; a: string }[]}
          eyebrow="Coverage & Arizona risk"
          title={<>Homeowners coverage &amp; <span className="text-clay">Arizona-specific risk</span></>}
          background="sand"
        />

        <FAQ
          items={GENERAL_FAQS as unknown as { q: string; a: string }[]}
          eyebrow="Cost, quotes & switching"
          title={<>Cost, quotes &amp; <span className="text-clay">switching carriers</span></>}
          background="cream"
        />

        <CTABand
          title="Still have a question about your Arizona home?"
          description="Call a licensed Arizona agent who knows monsoon flood risk, wildfire underwriting, and pool liability — not a call center. We'll answer straight and quote in about 15 minutes."
        />
      </main>
      <Footer />
    </>
  );
}
