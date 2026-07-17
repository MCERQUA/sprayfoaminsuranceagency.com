import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Contractors Choice Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "arizona homeowners insurance",
    "az homeowners insurance",
    "homeowners insurance arizona",
    "arizona home insurance quotes",
    "phoenix homeowners insurance",
    "scottsdale homeowners insurance",
    "tucson homeowners insurance",
    "arizona flood insurance",
    "arizona wildfire home insurance",
    "arizona dwelling coverage",
    "arizona home insurance agency",
    "chandler homeowners insurance",
  ],
  authors: [{ name: "Contractors Choice Agency" }],
  creator: "Contractors Choice Agency",
  publisher: "Contractors Choice Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Arizona homeowners insurance specialists — dwelling coverage, personal property, liability, loss of use, flood, and umbrella for AZ homeowners. We compare 12+ A-rated carriers for your Phoenix, Scottsdale, Tucson, or northern Arizona home. 15-minute quotes.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — Arizona homeowners insurance` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Contractors Choice Agency`,
    description:
      "Arizona homeowners insurance specialists. Dwelling, flood, liability, umbrella — 12+ A-rated carriers compared for every Arizona home. 15-minute quotes.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: "+18449675247",
    email: SITE.email,
    image: `${SITE.url}/images/og-image.jpg`,
    logo: `${SITE.url}/images/og-image.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: 33.2622, longitude: -111.7826 },
    employee: { "@type": "Person", name: "Josh Cotner", jobTitle: "Founder & Insurance Agent" },
    areaServed: { "@type": "State", name: "Arizona" },
    serviceType: [
      "Homeowners Insurance Arizona",
      "Arizona Dwelling Coverage",
      "Arizona Personal Property Insurance",
      "Arizona Home Liability Insurance",
      "Arizona Flood Insurance",
      "Arizona Personal Umbrella Insurance",
      "Arizona Scheduled Personal Property",
      "Arizona Rental Property Insurance",
    ],
  };

  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
