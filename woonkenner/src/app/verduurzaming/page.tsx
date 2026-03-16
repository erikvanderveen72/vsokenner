import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_VERDUURZAMING, subsidieRegelingen2026, energielabels } from "@/lib/fallback-data";
import { Leaf, Euro, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Woning verduurzamen 2026 - Subsidies, kosten & besparing",
  description: "Alles over het verduurzamen van je woning in 2026. ISDE-subsidies, energielabels, warmtepompen en isolatie. Bereken je besparing. Onafhankelijk advies.",
  alternates: { canonical: "https://woonkenner.nl/verduurzaming" },
};

export const revalidate = 3600;

export default function VerduurzamingPage() {
  return (
    <>
      <PageHero
        title="Woning verduurzamen"
        badge="Subsidies 2026"
        highlightedSubtitle="Bespaar op energie & verhoog je woningwaarde"
        subtitle="Ontdek welke subsidies er zijn, wat verduurzaming kost en hoeveel je bespaart. Complete gids voor het verduurzamen van je woning in 2026."
        showBreadcrumbs
        breadcrumbs={[{ label: "Verduurzaming", href: "/verduurzaming" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Waarom verduurzamen?</h2>
          <p>Verduurzaming van je woning levert je drie voordelen op: lagere energiekosten (gemiddeld &euro;500-&euro;2.000 per jaar), een hogere woningwaarde (4-15% meer) en een comfortabeler huis. Met de huidige subsidies en leningen is het bovendien financieel aantrekkelijker dan ooit.</p>
          <p>De overheid stimuleert verduurzaming via de ISDE-regeling (Investeringssubsidie Duurzame Energie) en het Nationaal Warmtefonds. Daarnaast hebben veel gemeenten aanvullende subsidies.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Subsidies voor verduurzaming 2026</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Regeling</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Omschrijving</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Bedrag</th>
                </tr>
              </thead>
              <tbody>
                {subsidieRegelingen2026.map((regeling) => (
                  <tr key={regeling.naam} className="border-b border-stone-200 hover:bg-stone-50 transition">
                    <td className="px-6 py-4 font-medium text-stone-900">{regeling.naam}</td>
                    <td className="px-6 py-4 text-stone-600 text-sm">{regeling.beschrijving}</td>
                    <td className="px-6 py-4 text-green-700 font-medium text-sm">{regeling.bedrag}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 mt-4">Bron: RVO.nl — Subsidiebedragen per 1 januari 2026. Bedragen zijn indicatief.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Meest effectieve maatregelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Isolatie", desc: "Dak-, spouwmuur- en vloerisolatie zijn de meest kosteneffectieve maatregelen. Besparing: €500-€1.800 per jaar. Investering: €3.000-€15.000.", kleur: "bg-green-50 border-green-200" },
              { icon: Leaf, title: "Warmtepomp", desc: "Een (hybride) warmtepomp vervangt je cv-ketel geheel of gedeeltelijk. Besparing: €500-€1.200 per jaar. Investering: €3.500-€15.000.", kleur: "bg-blue-50 border-blue-200" },
              { icon: Euro, title: "Zonnepanelen", desc: "Zonnepanelen wekken je eigen stroom op. Besparing: €400-€800 per jaar. Investering: €4.000-€8.000. Terugverdientijd: 6-10 jaar.", kleur: "bg-amber-50 border-amber-200" },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl p-6 border ${item.kleur}`}>
                <item.icon size={28} className="text-stone-700 mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Energielabels</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {energielabels.slice(0, 6).map((label) => (
              <div key={label.label} className="bg-white rounded-xl p-4 border border-stone-200 text-center">
                <div className={`${label.kleur} text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2 font-bold text-lg`}>{label.label}</div>
                <p className="text-xs text-stone-600">{label.omschrijving}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over verduurzaming</h2>
          <FAQSchema items={FAQ_VERDUURZAMING} />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Woning verduurzamen?</h2>
          <p className="text-stone-600 mb-8">Ontdek hoeveel je kunt besparen en welke subsidies er voor jou beschikbaar zijn.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hypotheek" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">Hypotheek berekenen</Link>
            <Link href="/kosten-koper" className="border border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-semibold hover:bg-stone-50 transition-colors">Kosten koper berekenen</Link>
          </div>
        </div>
      </section>
    </>
  );
}
