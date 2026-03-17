import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    template: "%s | VSO-kenner.nl",
    default: "Vaststellingsovereenkomst 2026 - Gratis calculators & advies | VSO-kenner.nl",
  },
  description:
    "Alles over vaststellingsovereenkomsten in 2026. Bereken je transitievergoeding, check je WW-rechten en leer onderhandelen. 100% onafhankelijk & gratis.",
  keywords: [
    "vaststellingsovereenkomst",
    "VSO",
    "transitievergoeding",
    "ontslagvergoeding",
    "bedenktijd VSO",
    "WW na VSO",
    "vaststellingsovereenkomst 2026",
    "ontslag",
    "ontslagrecht",
  ],
  metadataBase: new URL("https://vsokenner.nl"),
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
    url: "https://vsokenner.nl",
    siteName: "VSO-kenner.nl",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "VSO-kenner.nl - Alles over vaststellingsovereenkomsten" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
  alternates: {
    canonical: "https://vsokenner.nl",
    languages: { "nl-NL": "https://vsokenner.nl" },
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
      url: "https://vsokenner.nl",
      name: "VSO-kenner.nl",
      description: "Alles over vaststellingsovereenkomsten. Gratis calculators, uitleg en onafhankelijk advies.",
      inLanguage: "nl-NL",
      publisher: { "@id": "https://vsokenner.nl/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://vsokenner.nl/#organization",
      name: "VSO-kenner.nl",
      url: "https://vsokenner.nl",
      logo: {
        "@type": "ImageObject",
        url: "https://vsokenner.nl/og-image.png",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87X60MJKM0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-87X60MJKM0');
          `}
        </Script>
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
