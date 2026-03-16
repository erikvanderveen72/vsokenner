import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_NOTARIS, notarisKosten } from "@/lib/fallback-data";
import { FileText, Euro, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Notaris bij huis kopen 2026 - Kosten, taken & tips",
  description: "Wat doet de notaris bij het kopen van een huis? Overzicht van notariskosten, taken en tips voor het kiezen van een notaris in 2026.",
  alternates: { canonical: "https://woonkenner.nl/notaris" },
};

export const revalidate = 3600;

export default function NotarisPage() {
  return (
    <>
      <PageHero
        title="Notaris bij huis kopen"
        badge="Kosten 2026"
        highlightedSubtitle="Wat doet de notaris en wat kost het?"
        subtitle="De notaris is onmisbaar bij het kopen van een huis. Overzicht van taken, kosten en tips voor het kiezen van de juiste notaris."
        showBreadcrumbs
        breadcrumbs={[{ label: "Notaris", href: "/notaris" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">De rol van de notaris</h2>
          <p>Bij het kopen van een huis is een notaris wettelijk verplicht. De notaris zorgt voor de juridische overdracht van het eigendom en de registratie bij het Kadaster. Daarnaast stelt de notaris de hypotheekakte op als je een hypotheek afsluit.</p>
          <p>De notaris is een onafhankelijke partij die de belangen van zowel koper als verkoper behartigt. Je mag als koper zelf de notaris kiezen — het loont om tarieven te vergelijken.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Notariskosten overzicht</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Dienst</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Kosten (van)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Kosten (tot)</th>
                </tr>
              </thead>
              <tbody>
                {notarisKosten.map((item) => (
                  <tr key={item.dienst} className="border-b border-stone-200 hover:bg-stone-50 transition">
                    <td className="px-6 py-4 font-medium text-stone-900">{item.dienst}</td>
                    <td className="px-6 py-4 text-stone-600">&euro;{item.vanBedrag.toLocaleString("nl-NL")}</td>
                    <td className="px-6 py-4 text-stone-600">&euro;{item.totBedrag.toLocaleString("nl-NL")}</td>
                  </tr>
                ))}
                <tr className="bg-blue-50 font-semibold">
                  <td className="px-6 py-4 text-stone-900">Totaal indicatief</td>
                  <td className="px-6 py-4 text-blue-700">&euro;{notarisKosten.reduce((sum, k) => sum + k.vanBedrag, 0).toLocaleString("nl-NL")}</td>
                  <td className="px-6 py-4 text-blue-700">&euro;{notarisKosten.reduce((sum, k) => sum + k.totBedrag, 0).toLocaleString("nl-NL")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-500 mt-4">Prijzen zijn indicatief en exclusief btw. Werkelijke kosten variëren per notaris.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Wat doet de notaris?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: FileText, title: "Leveringsakte opstellen", desc: "De notaris stelt de akte op waarmee het eigendom officieel wordt overgedragen van verkoper naar koper." },
              { icon: FileText, title: "Hypotheekakte opstellen", desc: "Als je een hypotheek afsluit, stelt de notaris de hypotheekakte op en schrijft deze in bij het Kadaster." },
              { icon: CheckCircle, title: "Eigendomscontrole", desc: "De notaris controleert of de verkoper daadwerkelijk eigenaar is en of er geen beslagen of hypotheken op de woning rusten." },
              { icon: Euro, title: "Financiële afwikkeling", desc: "De notaris beheert alle geldstromen via de derdengeldenrekening: koopsom, overdrachtsbelasting en overige kosten." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-stone-200">
                <item.icon size={24} className="text-blue-600 mb-3" />
                <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over de notaris</h2>
          <FAQSchema items={FAQ_NOTARIS} />
        </div>
      </section>
    </>
  );
}
