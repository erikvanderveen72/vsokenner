import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_ONDERHANDELEN } from "@/lib/fallback-data";
import { CheckCircle, XCircle, ArrowRight, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Onderhandelen over een VSO 2026 - Tips & strategie",
  description: "Onderhandel effectief over je vaststellingsovereenkomst. Tips, strategie en veelgemaakte fouten. Krijg een betere vergoeding. Onafhankelijk advies 2026.",
  alternates: { canonical: "https://vsokenner.nl/onderhandelen" },
};

export const revalidate = 3600;

export default function OnderhandelenPage() {
  return (
    <>
      <PageHero
        title="Onderhandelen over je VSO"
        badge="Strategie 2026"
        highlightedSubtitle="Krijg een betere deal"
        subtitle="Een vaststellingsovereenkomst is altijd onderhandelbaar. Met de juiste strategie kun je een aanzienlijk betere vergoeding en voorwaarden bedingen."
        showBreadcrumbs
        breadcrumbs={[{ label: "Onderhandelen", href: "/onderhandelen" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Waarom onderhandelen?</h2>
          <p>Het eerste aanbod van je werkgever is zelden het beste aanbod. In de meeste gevallen is er ruimte om te onderhandelen over de vergoeding, einddatum, vrijstelling van werk en andere voorwaarden.</p>
          <p>De sterkte van je onderhandelingspositie hangt af van meerdere factoren: de reden voor ontslag, de sterkte van het dossier van je werkgever, je anciënniteit en de urgentie van je werkgever om tot een akkoord te komen.</p>
        </div>
      </section>

      {/* Onderhandelingspunten */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Belangrijkste onderhandelingspunten</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Punt</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Standaard aanbod</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Na onderhandeling</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { punt: "Transitievergoeding", standaard: "1× wettelijk (1/3 mnd/jaar)", beter: "1,5× tot 2× wettelijk" },
                  { punt: "Juridische kosten", standaard: "Niet opgenomen", beter: "€750 - €1.500 excl. btw" },
                  { punt: "Vrijstelling van werk", standaard: "Doorwerken tot einddatum", beter: "Direct vrijgesteld met behoud van salaris" },
                  { punt: "Concurrentiebeding", standaard: "Blijft van kracht", beter: "Volledig vervallen of beperkt" },
                  { punt: "Einddatum", standaard: "Korte termijn", beter: "Rekening houdend met fictieve opzegtermijn" },
                  { punt: "Outplacement", standaard: "Niet aangeboden", beter: "Budget van €2.500 - €5.000" },
                  { punt: "Getuigschrift", standaard: "Neutraal", beter: "Positief, inhoud vooraf afgesproken" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-stone-200 hover:bg-stone-50 transition">
                    <td className="px-6 py-4 font-medium text-stone-900">{row.punt}</td>
                    <td className="px-6 py-4 text-stone-600 text-sm">{row.standaard}</td>
                    <td className="px-6 py-4 text-emerald-700 text-sm font-medium">{row.beter}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Tips voor effectief onderhandelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Neem de tijd", desc: "Reageer niet meteen. Vraag minstens een week bedenktijd om het aanbod te bestuderen en advies in te winnen." },
              { title: "Ken je waarde", desc: "Bereken de wettelijke transitievergoeding als ondergrens. Onderzoek wat gebruikelijk is in jouw branche en situatie." },
              { title: "Bouw je dossier", desc: "Verzamel bewijzen van je goede functioneren: beoordelingen, complimenten, projectresultaten." },
              { title: "Schakel een expert in", desc: "Een arbeidsrechtadvocaat weet precies wat haalbaar is en kan namens jou onderhandelen." },
              { title: "Blijf professioneel", desc: "Emoties zijn begrijpelijk, maar zakelijk blijven levert het beste resultaat op." },
              { title: "Denk aan het totaalplaatje", desc: "De vergoeding is belangrijk, maar denk ook aan vrijstelling van werk, outplacement en concurrentiebeding." },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-2xl p-6 border border-stone-200">
                <Lightbulb size={20} className="text-amber-500 mb-3" />
                <h3 className="font-semibold text-stone-900 mb-2">{tip.title}</h3>
                <p className="text-stone-600 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Veelgemaakte fouten */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgemaakte fouten</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <XCircle size={20} className="text-red-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Direct tekenen</h3>
              <p className="text-sm text-stone-600">Onder druk het eerste aanbod accepteren. Je hebt altijd het recht om er over na te denken en advies in te winnen.</p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <XCircle size={20} className="text-red-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Dreigen zonder onderbouwing</h3>
              <p className="text-sm text-stone-600">Dreigen met juridische stappen zonder een sterke zaak kan je positie verzwakken.</p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <XCircle size={20} className="text-red-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Zelf ontslag nemen</h3>
              <p className="text-sm text-stone-600">Als je zelf ontslag neemt, verlies je je recht op WW. Laat het initiatief altijd bij de werkgever.</p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <XCircle size={20} className="text-red-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Concurrentiebeding negeren</h3>
              <p className="text-sm text-stone-600">Vergeten om het concurrentiebeding te laten vervallen kan je belemmeren bij het vinden van nieuw werk.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over onderhandelen</h2>
          <FAQSchema items={FAQ_ONDERHANDELEN} />
        </div>
      </section>
    </>
  );
}
