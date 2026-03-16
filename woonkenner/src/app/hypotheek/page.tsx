import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_HYPOTHEEK, renteIndicaties2026 } from "@/lib/fallback-data";
import HypotheekCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Hypotheek berekenen 2026 - Maximale hypotheek calculator",
  description: "Bereken je maximale hypotheek in 2026 met onze gratis calculator. Inclusief maandlasten, renteoverzicht en hypotheekrenteaftrek. Onafhankelijk advies.",
  alternates: { canonical: "https://woonkenner.nl/hypotheek" },
};

export const revalidate = 3600;

export default function HypotheekPage() {
  return (
    <>
      <PageHero
        title="Hypotheek berekenen"
        badge="Calculator 2026"
        highlightedSubtitle="Bereken je maximale hypotheek"
        subtitle="Bereken hoeveel hypotheek je kunt krijgen op basis van je inkomen. Inclusief maandlasten en renteoverzicht."
        showBreadcrumbs
        breadcrumbs={[{ label: "Hypotheek", href: "/hypotheek" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Hoe werkt de hypotheek?</h2>
          <p>De maximale hypotheek wordt berekend op basis van je bruto jaarinkomen, eventueel aangevuld met het inkomen van je partner. De inkomensfactor in 2026 is circa 4,25 (afhankelijk van de rente). Dit betekent dat je bij een inkomen van &euro;60.000 maximaal circa &euro;255.000 kunt lenen.</p>
          <p>Sinds 2024 mag je maximaal 100% van de woningwaarde lenen. De kosten koper (overdrachtsbelasting, notaris, taxatie) moet je dus uit eigen middelen betalen. Een uitzondering is verduurzaming: hiervoor mag je tot 106% lenen.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Hypotheekrente indicaties 2026</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Rentevaste periode</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Indicatie rente</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Maandlasten bij &euro;300.000</th>
                </tr>
              </thead>
              <tbody>
                {renteIndicaties2026.map((r) => {
                  const maandRente = r.rente / 12;
                  const termijnen = 360;
                  const maandlasten = 300000 * (maandRente * Math.pow(1 + maandRente, termijnen)) / (Math.pow(1 + maandRente, termijnen) - 1);
                  return (
                    <tr key={r.looptijd} className="border-b border-stone-200 hover:bg-stone-50 transition">
                      <td className="px-6 py-4 font-medium text-stone-900">{r.looptijd}</td>
                      <td className="px-6 py-4 text-stone-600">{(r.rente * 100).toFixed(2)}%</td>
                      <td className="px-6 py-4 text-stone-600">&euro;{Math.round(maandlasten).toLocaleString("nl-NL")} /mnd</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 mt-4">Indicatieve rentes — medio 2026. Werkelijke rente verschilt per aanbieder.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <HypotheekCalculator />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips voor een goede hypotheek</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Vergelijk aanbieders", desc: "De rente verschilt per aanbieder. Al 0,1% verschil kan duizenden euro's schelen over de looptijd. Vergelijk altijd meerdere aanbieders." },
              { num: "2", title: "Overweeg NHG", desc: "Met NHG krijg je rentekorting (0,2-0,4%) en bescherming bij betalingsproblemen. De kostengrens in 2026 is €435.000." },
              { num: "3", title: "Denk aan de toekomst", desc: "Houd rekening met toekomstige veranderingen: kinderen, carrièrestappen of mogelijke rentestijgingen." },
            ].map((tip) => (
              <div key={tip.num} className="bg-white rounded-2xl p-6 border border-stone-200">
                <div className="bg-blue-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4"><span className="text-blue-700 font-bold">{tip.num}</span></div>
                <h3 className="font-semibold text-stone-900 mb-2">{tip.title}</h3>
                <p className="text-stone-600 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over hypotheken</h2>
          <FAQSchema items={FAQ_HYPOTHEEK} />
        </div>
      </section>
    </>
  );
}
