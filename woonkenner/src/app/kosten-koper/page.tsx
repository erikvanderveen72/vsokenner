import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_KOSTEN_KOPER, kostenKoperPosten } from "@/lib/fallback-data";
import KostenKoperCalculator from "./calculator";

export const metadata: Metadata = {
  title: "Kosten koper 2026 - Bereken alle bijkomende kosten",
  description: "Bereken de kosten koper bij het kopen van een huis in 2026. Overdrachtsbelasting, notariskosten, taxatie en meer. Gratis calculator en compleet overzicht.",
  alternates: { canonical: "https://woonkenner.nl/kosten-koper" },
};

export const revalidate = 3600;

export default function KostenKoperPage() {
  return (
    <>
      <PageHero
        title="Kosten koper"
        badge="Calculator 2026"
        highlightedSubtitle="Bereken alle bijkomende kosten"
        subtitle="Naast de koopprijs betaal je als koper extra kosten. Bereken hier hoeveel je nodig hebt aan eigen geld."
        showBreadcrumbs
        breadcrumbs={[{ label: "Kosten koper", href: "/kosten-koper" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Wat zijn kosten koper?</h2>
          <p>Bij de aankoop van een bestaande woning betaal je niet alleen de koopprijs. Er komen altijd extra kosten bij, samen &apos;kosten koper&apos; (k.k.) genoemd. Deze kosten kun je niet meefinancieren in je hypotheek en moet je uit eigen middelen betalen.</p>
          <p>Reken als vuistregel op 4-6% van de koopprijs aan bijkomende kosten. Bij een woning van &euro;350.000 is dat &euro;14.000 tot &euro;21.000. Als starter (18-35 jaar) bespaar je de overdrachtsbelasting, waardoor de kosten lager uitvallen.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Overzicht kosten koper</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Kostenpost</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Toelichting</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Indicatie</th>
                </tr>
              </thead>
              <tbody>
                {kostenKoperPosten.map((post) => (
                  <tr key={post.naam} className="border-b border-stone-200 hover:bg-stone-50 transition">
                    <td className="px-6 py-4 font-medium text-stone-900">{post.naam}</td>
                    <td className="px-6 py-4 text-stone-600 text-sm">{post.beschrijving}</td>
                    <td className="px-6 py-4 text-stone-900 font-medium text-sm">{post.indicatie}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <KostenKoperCalculator />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over kosten koper</h2>
          <FAQSchema items={FAQ_KOSTEN_KOPER} />
        </div>
      </section>
    </>
  );
}
