import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { begrippenlijst } from "@/lib/fallback-data";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Begrippenlijst wonen 2026 - A tot Z",
  description: "Alle begrippen over wonen uitgelegd. Van annuïteitenhypotheek tot zelfbewoningsplicht. Complete A-Z begrippenlijst voor kopers, huurders en huiseigenaren.",
  alternates: { canonical: "https://woonkenner.nl/begrippenlijst" },
};

export const revalidate = 3600;

export default function BegrippenlijstPage() {
  const grouped = begrippenlijst.reduce<Record<string, typeof begrippenlijst>>((acc, begrip) => {
    const letter = begrip.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(begrip);
    return acc;
  }, {});

  const letters = Object.keys(grouped).sort();

  return (
    <>
      <PageHero
        title="Begrippenlijst"
        badge="A-Z 2026"
        highlightedSubtitle="Alle woontermen uitgelegd"
        subtitle="Een complete begrippenlijst met alle termen die je tegenkomt bij het kopen, huren of verduurzamen van een woning."
        showBreadcrumbs
        breadcrumbs={[{ label: "Begrippenlijst", href: "/begrippenlijst" }]}
      />

      <div className="sticky top-16 z-40 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap gap-1.5">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold text-stone-600 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {letters.map((letter) => (
            <div key={letter} id={`letter-${letter}`} className="scroll-mt-32 mb-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white text-xl font-bold rounded-xl">
                  {letter}
                </span>
                <div className="flex-1 h-px bg-stone-200" />
              </div>
              <div className="space-y-4">
                {grouped[letter].map((begrip) => (
                  <div key={begrip.term} className="bg-white rounded-xl p-5 border border-stone-200 hover:border-blue-300 transition-colors">
                    <h3 className="font-bold text-stone-900 mb-2">{begrip.term}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{begrip.uitleg}</p>
                    {begrip.gerelateerd && (
                      <Link href={begrip.gerelateerd} className="inline-flex items-center gap-1.5 mt-3 text-sm text-blue-600 font-medium hover:text-blue-700 transition-colors">
                        Meer informatie <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Een huis kopen of huren?</h2>
          <p className="text-stone-600 mb-8">Gebruik onze gratis calculators om je budget te berekenen en alle kosten in kaart te brengen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hypotheek" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">Bereken je hypotheek</Link>
            <Link href="/huis-kopen" className="border border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-semibold hover:bg-stone-50 transition-colors">Huis kopen: stappenplan</Link>
          </div>
        </div>
      </section>
    </>
  );
}
