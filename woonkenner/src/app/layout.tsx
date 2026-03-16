import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Woonkenner.nl",
    default: "Woonkenner.nl - Alles over wonen, hypotheek & huis kopen in 2026",
  },
  description:
    "Alles over wonen in Nederland. Bereken je maximale hypotheek, kosten koper en verduurzaming. Onafhankelijk advies over huis kopen, huren en meer. 100% gratis.",
  keywords: [
    "wonen",
    "hypotheek berekenen",
    "huis kopen",
    "kosten koper",
    "verduurzaming",
    "huurrechten",
    "notariskosten",
    "woningmarkt 2026",
    "maximale hypotheek",
  ],
  metadataBase: new URL("https://woonkenner.nl"),
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large" as const,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://woonkenner.nl",
    siteName: "Woonkenner.nl",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Woonkenner.nl - Alles over wonen in Nederland" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  alternates: {
    canonical: "https://woonkenner.nl",
    languages: { "nl-NL": "https://woonkenner.nl" },
  },
  other: {
    "geo.region": "NL",
    "geo.country": "NL",
    "geo.placename": "Nederland",
    "geo.position": "52.3676;4.9041",
    ICBM: "52.3676, 4.9041",
    "content-language": "nl",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      url: "https://woonkenner.nl",
      name: "Woonkenner.nl",
      description: "Alles over wonen in Nederland. Gratis calculators, uitleg en onafhankelijk advies.",
      inLanguage: "nl-NL",
      publisher: { "@id": "https://woonkenner.nl/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://woonkenner.nl/#organization",
      name: "Woonkenner.nl",
      url: "https://woonkenner.nl",
      logo: {
        "@type": "ImageObject",
        url: "https://woonkenner.nl/og-image.png",
        width: 1200,
        height: 630,
      },
      areaServed: { "@type": "Country", name: "NL" },
      knowsLanguage: "nl-NL",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <head>
        <meta name="geo.country" content="NL" />
        <meta name="geo.placename" content="Nederland" />
        <meta name="geo.position" content="52.3676;4.9041" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-surface">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
