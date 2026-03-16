import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_TRANSITIEVERGOEDING, belastingSchijven2026 } from "@/lib/fallback-data";
import TransitievergoedingCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Transitievergoeding 2026 - Bereken je ontslagvergoeding",
  description: "Bereken je transitievergoeding in 2026 met onze gratis calculator. Inclusief netto berekening na belasting. 1/3 maandsalaris per dienstjaar.",
  alternates: { canonical: "https://vsokenner.nl/transitievergoeding" },
};

export const revalidate = 3600;

export default function TransitievergoedingPage() {
  return (
    <>
      <PageHero
        title="Transitievergoeding"
        badge="Calculator 2026"
        highlightedSubtitle="Bereken je ontslagvergoeding"
        subtitle="De wettelijke transitievergoeding is 1/3 bruto maandsalaris per dienstjaar. Bereken hieronder je vergoeding inclusief netto bedrag."
        showBreadcrumbs
        breadcrumbs={[{ label: "Transitievergoeding", href: "/transitievergoeding" }]}
      />

      {/* Uitleg */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Hoe werkt de transitievergoeding?</h2>
          <p>De transitievergoeding is de wettelijke ontslagvergoeding waar je recht op hebt als je werkgever het dienstverband beëindigt. Per 2026 bedraagt de vergoeding 1/3 bruto maandsalaris per dienstjaar (inclusief 8% vakantietoeslag).</p>
          <p>Bij een vaststellingsovereenkomst is de werkgever niet wettelijk verplicht een transitievergoeding te betalen, maar in de praktijk wordt dit vrijwel altijd opgenomen. Het wettelijke bedrag geldt als ondergrens bij de onderhandeling.</p>
        </div>
      </section>

      {/* Belastingschijven tabel */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Belastingschijven 2026</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Schijf</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Van</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Tot</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Tarief</th>
                </tr>
              </thead>
              <tbody>
                {belastingSchijven2026.map((s) => (
                  <tr key={s.schijf} className="border-b border-stone-200 hover:bg-stone-50 transition">
                    <td className="px-6 py-4 font-medium text-stone-900">Schijf {s.schijf}</td>
                    <td className="px-6 py-4 text-stone-600">€{s.van.toLocaleString("nl-NL")}</td>
                    <td className="px-6 py-4 text-stone-600">{s.tot ? `€${s.tot.toLocaleString("nl-NL")}` : "—"}</td>
                    <td className="px-6 py-4 font-medium text-stone-900">{(s.tarief * 100).toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 mt-4">Bron: Belastingdienst.nl — Tarieven per 1 januari 2026</p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <TransitievergoedingCalculator />
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips voor een hogere vergoeding</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Ken je minimum", desc: "De wettelijke transitievergoeding is het startpunt. Bij een sterk dossier van je werkgever is dit het minimum dat je kunt verwachten." },
              { num: "2", title: "Schakel een advocaat in", desc: "Een arbeidsrechtadvocaat kent de mogelijkheden en kan vaak 1,5 tot 2 keer het wettelijke bedrag onderhandelen." },
              { num: "3", title: "Neem de tijd", desc: "Je bent niet verplicht direct te tekenen. Gebruik de onderhandelingsperiode om een beter aanbod te krijgen." },
            ].map((tip) => (
              <div key={tip.num} className="bg-white rounded-2xl p-6 border border-stone-200">
                <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4"><span className="text-emerald-700 font-bold">{tip.num}</span></div>
                <h3 className="font-semibold text-stone-900 mb-2">{tip.title}</h3>
                <p className="text-stone-600 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over transitievergoeding</h2>
          <FAQSchema items={FAQ_TRANSITIEVERGOEDING} />
        </div>
      </section>
    </>
  );
}
