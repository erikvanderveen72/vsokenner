import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_JURIDISCH_ADVIES } from "@/lib/fallback-data";
import { Scale, Phone, Euro, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Juridisch advies bij een VSO 2026 - Advocaat & kosten",
  description: "Wanneer heb je een advocaat nodig bij een VSO? Wat kost het en vergoedt je werkgever de kosten? Onafhankelijk advies over juridische hulp in 2026.",
  alternates: { canonical: "https://vsokenner.nl/juridisch-advies" },
};

export const revalidate = 3600;

export default function JuridischAdviesPage() {
  return (
    <>
      <PageHero
        title="Juridisch advies bij een VSO"
        badge="Advies 2026"
        highlightedSubtitle="Wanneer een advocaat inschakelen?"
        subtitle="Een arbeidsrechtadvocaat kan je VSO beoordelen, betere voorwaarden onderhandelen en je WW-rechten veiligstellen. In de meeste gevallen vergoedt je werkgever de kosten."
        showBreadcrumbs
        breadcrumbs={[{ label: "Juridisch advies", href: "/juridisch-advies" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Waarom juridisch advies?</h2>
          <p>Een vaststellingsovereenkomst is een juridisch document met grote financiële consequenties. Een gespecialiseerde arbeidsrechtadvocaat kent de valkuilen en kan je belangen beschermen.</p>
          <p>De investering in juridisch advies betaalt zich vrijwel altijd terug. Een advocaat kan vaak een hogere vergoeding, betere voorwaarden en het vervallen van het concurrentiebeding realiseren.</p>
        </div>
      </section>

      {/* Kosten overzicht */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Wat kost juridisch advies?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 text-center">
              <Euro size={32} className="text-emerald-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-stone-900 mb-2">€750 - €1.500</p>
              <p className="text-sm text-stone-600">VSO laten beoordelen</p>
              <p className="text-xs text-stone-400 mt-2">Controle op WW-veiligheid, juridische risico&apos;s en verbeterpunten</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 text-center">
              <Scale size={32} className="text-emerald-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-stone-900 mb-2">€1.500 - €3.000</p>
              <p className="text-sm text-stone-600">Onderhandeling door advocaat</p>
              <p className="text-xs text-stone-400 mt-2">De advocaat onderhandelt namens jou met je werkgever</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 text-center">
              <Phone size={32} className="text-emerald-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-stone-900 mb-2">Gratis</p>
              <p className="text-sm text-stone-600">Eerste advies Juridisch Loket</p>
              <p className="text-xs text-stone-400 mt-2">Gratis eerste adviesgesprek bij het Juridisch Loket</p>
            </div>
          </div>
        </div>
      </section>

      {/* Werkgever vergoedt */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Vergoedt je werkgever de kosten?</h2>
          <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border border-emerald-200 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-emerald-600 shrink-0 mt-1" />
              <p className="text-stone-700">In de meeste gevallen is je werkgever bereid om €750 tot €1.500 (exclusief btw) bij te dragen aan juridische kosten.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-emerald-600 shrink-0 mt-1" />
              <p className="text-stone-700">Dit bedrag wordt als onkostenvergoeding opgenomen in de VSO. Het is belastingvrij (geen loonheffing).</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-emerald-600 shrink-0 mt-1" />
              <p className="text-stone-700">Het is een standaard verzoek bij VSO-onderhandelingen. Werkgevers zijn hieraan gewend en gaan er vaak direct mee akkoord.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-emerald-600 shrink-0 mt-1" />
              <p className="text-stone-700">Als je werkgever het niet spontaan aanbiedt, kun je het als onderhandelingspunt inbrengen. Het is een kleine concessie voor de werkgever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Wanneer advocaat */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Wanneer een advocaat inschakelen?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Altijd aan te raden", desc: "Bij elk VSO-aanbod is juridisch advies waardevol. Zelfs als het aanbod redelijk lijkt, kan een advocaat vaak verbeteringen realiseren." },
              { title: "Hoge vergoeding in het spel", desc: "Bij een lang dienstverband of hoog salaris gaat het om grote bedragen. Dan is het extra belangrijk om advies in te winnen." },
              { title: "Concurrentiebeding", desc: "Als je een concurrentiebeding hebt dat je belemmert bij het vinden van nieuw werk, is een advocaat essentieel." },
              { title: "Druk van werkgever", desc: "Als je werkgever aandringt op snel tekenen of dreigt met ontslag, heb je juridische steun nodig." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-stone-200">
                <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over juridisch advies</h2>
          <FAQSchema items={FAQ_JURIDISCH_ADVIES} />
        </div>
      </section>
    </>
  );
}
