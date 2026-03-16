import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_BEDENKTIJD } from "@/lib/fallback-data";
import { Clock, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Bedenktijd VSO 2026 - 14 dagen herroepingsrecht uitgelegd",
  description: "Alles over de 14 dagen bedenktijd bij een vaststellingsovereenkomst. Hoe werkt het herroepingsrecht? Wanneer gaat de termijn in? Actueel 2026.",
  alternates: { canonical: "https://vsokenner.nl/bedenktijd" },
};

export const revalidate = 3600;

export default function BedenktijdPage() {
  return (
    <>
      <PageHero
        title="Bedenktijd bij een VSO"
        badge="Herroepingsrecht 2026"
        highlightedSubtitle="14 dagen om je beslissing te heroverwegen"
        subtitle="Na ondertekening van een vaststellingsovereenkomst heb je wettelijk 14 dagen bedenktijd. In deze periode kun je de VSO zonder opgaaf van redenen ontbinden."
        showBreadcrumbs
        breadcrumbs={[{ label: "Bedenktijd", href: "/bedenktijd" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Hoe werkt de bedenktijd?</h2>
          <p>Op grond van artikel 7:670b BW heb je als werknemer het recht om een vaststellingsovereenkomst binnen 14 dagen na ondertekening te herroepen. Dit heet het herroepingsrecht of bedenktijd.</p>
          <p>De bedenktijd begint de dag na ondertekening en telt in kalenderdagen — weekenden en feestdagen tellen dus mee. Je hoeft geen reden op te geven voor de herroeping.</p>
          <p>Als je werkgever de bedenktijd niet vermeldt in de VSO, wordt de termijn automatisch verlengd naar 21 dagen. Dit is een veelgemaakte fout van werkgevers die in je voordeel werkt.</p>
        </div>
      </section>

      {/* Tijdlijn */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Tijdlijn bedenktijd</h2>
          <div className="space-y-6">
            {[
              { dag: "Dag 0", titel: "Ondertekening VSO", beschrijving: "Je tekent de vaststellingsovereenkomst. De bedenktijd begint de volgende dag." },
              { dag: "Dag 1-13", titel: "Bedenktijd loopt", beschrijving: "Je kunt de VSO schriftelijk (brief of e-mail) herroepen. De datum van verzending is bepalend." },
              { dag: "Dag 14", titel: "Laatste dag bedenktijd", beschrijving: "Tot en met vandaag kun je de VSO herroepen. Na vandaag is de VSO definitief." },
              { dag: "Dag 15+", titel: "VSO is definitief", beschrijving: "De vaststellingsovereenkomst is onherroepelijk. Het dienstverband eindigt op de afgesproken einddatum." },
            ].map((stap, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-24 text-right">
                  <span className="inline-block bg-emerald-100 text-emerald-800 font-bold text-sm px-3 py-1 rounded-full">{stap.dag}</span>
                </div>
                <div className="flex-1 bg-white rounded-xl p-5 border border-stone-200">
                  <h3 className="font-semibold text-stone-900 mb-1">{stap.titel}</h3>
                  <p className="text-sm text-stone-600">{stap.beschrijving}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Belangrijke regels */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Belangrijke regels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <AlertTriangle size={24} className="text-amber-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Niet vermeld = 21 dagen</h3>
              <p className="text-sm text-stone-600">Als je werkgever de bedenktijd niet vermeldt in de VSO, wordt deze automatisch 21 dagen in plaats van 14.</p>
            </div>
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-200">
              <Clock size={24} className="text-sky-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Kalenderdagen</h3>
              <p className="text-sm text-stone-600">De 14 dagen tellen in kalenderdagen. Weekenden en feestdagen tellen mee. De termijn begint de dag na ondertekening.</p>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <CheckCircle size={24} className="text-emerald-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Geen reden nodig</h3>
              <p className="text-sm text-stone-600">Je hoeft geen reden op te geven voor de herroeping. Een eenvoudige schriftelijke mededeling is voldoende.</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <AlertTriangle size={24} className="text-purple-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Eénmaal per 6 maanden</h3>
              <p className="text-sm text-stone-600">Je kunt het herroepingsrecht maar één keer per 6 maanden gebruiken bij dezelfde werkgever.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over bedenktijd</h2>
          <FAQSchema items={FAQ_BEDENKTIJD} />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Twijfel je over je VSO?</h2>
          <p className="text-stone-600 mb-8">Gebruik de bedenktijd om juridisch advies in te winnen en je vergoeding te berekenen.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/transitievergoeding" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg">Bereken je vergoeding</Link>
            <Link href="/juridisch-advies" className="border border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-semibold hover:bg-stone-50 transition-colors">Juridisch advies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
