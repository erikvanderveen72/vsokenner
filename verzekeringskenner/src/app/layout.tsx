import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | Verzekeringskenner.nl",
    default: "Verzekeringen vergelijken 2026 - Gratis calculators & advies | Verzekeringskenner.nl",
  },
  description:
    "Alles over verzekeringen in Nederland in 2026. Vergelijk premies, bereken je dekking en vind de beste verzekering. 100% onafhankelijk & gratis.",
  keywords: [
    "verzekering",
    "zorgverzekering",
    "autoverzekering",
    "inboedelverzekering",
    "opstalverzekering",
    "aansprakelijkheidsverzekering",
    "reisverzekering",
    "verzekeringen vergelijken",
    "premie berekenen",
  ],
  metadataBase: new URL("https://verzekeringskenner.nl"),
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
    url: "https://verzekeringskenner.nl",
    siteName: "Verzekeringskenner.nl",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Verzekeringskenner.nl - Alles over verzekeringen" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  alternates: {
    canonical: "https://verzekeringskenner.nl",
    languages: { "nl-NL": "https://verzekeringskenner.nl" },
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
      url: "https://verzekeringskenner.nl",
      name: "Verzekeringskenner.nl",
      description: "Alles over verzekeringen in Nederland. Gratis calculators, vergelijkingen en onafhankelijk advies.",
      inLanguage: "nl-NL",
      publisher: { "@id": "https://verzekeringskenner.nl/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://verzekeringskenner.nl/#organization",
      name: "Verzekeringskenner.nl",
      url: "https://verzekeringskenner.nl",
      logo: {
        "@type": "ImageObject",
        url: "https://verzekeringskenner.nl/og-image.png",
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
      <body className={`${inter.variable} antialiased bg-surface`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
