import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_WW_RECHTEN, opzegtermijnen } from "@/lib/fallback-data";
import WWCalculator from "./calculator";

export const metadata: Metadata = {
  title: "WW na vaststellingsovereenkomst 2026 - Rechten & calculator",
  description: "Heb je recht op WW na een VSO? Check de voorwaarden, bereken je uitkering en leer over de fictieve opzegtermijn. Actueel 2026. Gratis calculator.",
  alternates: { canonical: "https://vsokenner.nl/ww-rechten" },
};

export const revalidate = 3600;

export default function WWRechtenPage() {
  return (
    <>
      <PageHero
        title="WW-rechten na een VSO"
        badge="WW 2026"
        highlightedSubtitle="Bereken je WW-uitkering"
        subtitle="Na een correct opgestelde vaststellingsovereenkomst heb je recht op WW. Leer over de voorwaarden, fictieve opzegtermijn en bereken je uitkering."
        showBreadcrumbs
        breadcrumbs={[{ label: "WW-rechten", href: "/ww-rechten" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">WW na een vaststellingsovereenkomst</h2>
          <p>Je hebt recht op WW na een VSO als aan drie voorwaarden is voldaan: het initiatief tot beëindiging ligt bij de werkgever, er is geen sprake van een dringende reden (zoals diefstal of fraude), en de fictieve opzegtermijn is in acht genomen.</p>
          <p>Het UWV beoordeelt of je VSO aan deze voorwaarden voldoet. Een goed opgestelde VSO voorkomt problemen. Laat daarom altijd een arbeidsrechtadvocaat je VSO controleren op WW-veiligheid.</p>
        </div>
      </section>

      {/* Fictieve opzegtermijn tabel */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Fictieve opzegtermijn</h2>
          <p className="text-stone-600 mb-6">De fictieve opzegtermijn bepaalt wanneer je WW ingaat. Het UWV gaat ervan uit dat je werkgever de wettelijke opzegtermijn had moeten aanhouden.</p>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Dienstverband</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Opzegtermijn werkgever</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">WW start na</th>
                </tr>
              </thead>
              <tbody>
                {opzegtermijnen.map((r, i) => (
                  <tr key={i} className="border-b border-stone-200 hover:bg-stone-50 transition">
                    <td className="px-6 py-4 font-medium text-stone-900">{r.dienstjaren}</td>
                    <td className="px-6 py-4 text-stone-600">{r.maanden} maand{r.maanden > 1 ? "en" : ""}</td>
                    <td className="px-6 py-4 text-stone-600">{r.maanden} maand{r.maanden > 1 ? "en" : ""} na einddatum VSO</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 mt-4">Bron: Art. 7:672 BW — De opzegtermijn wordt verminderd met 1 maand als de procedure via UWV zou lopen.</p>
        </div>
      </section>

      {/* Voorwaarden */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Voorwaarden voor WW na een VSO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "1", title: "Initiatief werkgever", desc: "In de VSO moet staan dat het initiatief tot beëindiging bij de werkgever ligt. Dit is essentieel voor je WW-recht." },
              { num: "2", title: "Geen dringende reden", desc: "Er mag geen sprake zijn van ontslag op staande voet (zoals diefstal, geweld of ernstig plichtsverzuim)." },
              { num: "3", title: "Wekeneis vervuld", desc: "Je moet minimaal 26 van de laatste 36 weken hebben gewerkt vóór het moment van werkloosheid." },
            ].map((item) => (
              <div key={item.num} className="bg-white rounded-2xl p-6 border border-stone-200">
                <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center mb-4"><span className="text-emerald-700 font-bold">{item.num}</span></div>
                <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <WWCalculator />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over WW na een VSO</h2>
          <FAQSchema items={FAQ_WW_RECHTEN} />
        </div>
      </section>
    </>
  );
}
