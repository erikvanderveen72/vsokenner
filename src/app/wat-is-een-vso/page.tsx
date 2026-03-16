import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_WAT_IS_VSO } from "@/lib/fallback-data";
import { ArrowRight, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Wat is een vaststellingsovereenkomst (VSO)? 2026 - Uitleg & rechten",
  description: "Wat is een vaststellingsovereenkomst? Leer alles over een VSO: wanneer je er een krijgt, wat erin staat en wat je rechten zijn. Actueel 2026.",
  alternates: { canonical: "https://vsokenner.nl/wat-is-een-vso" },
};

export const revalidate = 3600;

export default function WatIsEenVSOPage() {
  return (
    <>
      <PageHero
        title="Wat is een vaststellingsovereenkomst?"
        badge="Uitleg 2026"
        highlightedSubtitle="Alles wat je moet weten over een VSO"
        subtitle="Een complete uitleg over de vaststellingsovereenkomst: wanneer je er een krijgt, wat erin staat en welke rechten je hebt."
        showBreadcrumbs
        breadcrumbs={[{ label: "Wat is een VSO?", href: "/wat-is-een-vso" }]}
      />

      {/* Introductie */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">De vaststellingsovereenkomst uitgelegd</h2>
          <div className="prose prose-stone max-w-none space-y-4 text-stone-700 leading-relaxed">
            <p>Een vaststellingsovereenkomst (VSO) is een schriftelijke overeenkomst waarmee werkgever en werknemer het dienstverband in onderling overleg beëindigen. Anders dan bij ontslag via het UWV of de kantonrechter, kiezen beide partijen er samen voor om de arbeidsovereenkomst te beëindigen.</p>
            <p>De VSO wordt ook wel beëindigingsovereenkomst genoemd. Het is de meest gebruikte manier om een dienstverband te beëindigen in Nederland. In 2026 worden naar schatting meer dan 100.000 vaststellingsovereenkomsten gesloten.</p>
            <p>Het grote voordeel van een VSO is dat beide partijen de voorwaarden van het vertrek kunnen onderhandelen. Je kunt afspraken maken over de vergoeding, einddatum, vrijstelling van werk en meer.</p>
          </div>
        </div>
      </section>

      {/* Wat staat erin */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Wat staat er in een vaststellingsovereenkomst?</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">Onderdeel</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Toelichting</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Let op</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { onderdeel: "Einddatum", toelichting: "Wanneer je dienstverband officieel eindigt", letop: "Rekening houden met fictieve opzegtermijn voor WW" },
                  { onderdeel: "Transitievergoeding", toelichting: "De financiële vergoeding bij vertrek", letop: "Minimaal 1/3 maandsalaris per dienstjaar (2026)" },
                  { onderdeel: "Eindafrekening", toelichting: "Openstaand salaris, vakantiegeld, vakantiedagen", letop: "Controleer of alles correct is berekend" },
                  { onderdeel: "Vrijstelling van werk", toelichting: "Of je tot de einddatum moet werken", letop: "Vraag om vrijstelling met behoud van salaris" },
                  { onderdeel: "Concurrentiebeding", toelichting: "Beperkingen voor werk bij concurrent", letop: "Probeer dit te laten vervallen in de VSO" },
                  { onderdeel: "Getuigschrift", toelichting: "Referentie van je werkgever", letop: "Spreek de inhoud af in de VSO" },
                  { onderdeel: "Finale kwijting", toelichting: "Geen verdere vorderingen over en weer", letop: "Standaardclausule — controleer de reikwijdte" },
                  { onderdeel: "Bedenktijd", toelichting: "14 dagen herroepingsrecht na ondertekening", letop: "Moet vermeld staan, anders 21 dagen" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-stone-200 hover:bg-stone-50 transition">
                    <td className="px-6 py-4 font-medium text-stone-900">{row.onderdeel}</td>
                    <td className="px-6 py-4 text-stone-600 text-sm">{row.toelichting}</td>
                    <td className="px-6 py-4 text-stone-600 text-sm">{row.letop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wanneer krijg je een VSO */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Wanneer krijg je een VSO aangeboden?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Reorganisatie", description: "Je werkgever herstructureert en jouw functie vervalt. Dit is de meest voorkomende reden voor een VSO." },
              { title: "Verstoorde arbeidsrelatie", description: "De samenwerking is onherstelbaar beschadigd. De werkgever biedt een VSO aan als oplossing." },
              { title: "Disfunctioneren", description: "Je werkgever vindt dat je niet goed genoeg functioneert, maar wil een langdurig verbetertraject vermijden." },
              { title: "Bedrijfseconomische redenen", description: "Het bedrijf moet bezuinigen en wil snel afscheid nemen zonder de UWV-procedure." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-stone-200">
                <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Do's en don'ts */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Wat moet je doen (en niet doen)?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <h3 className="font-bold text-emerald-800 mb-4 flex items-center gap-2"><CheckCircle size={20} /> Wel doen</h3>
              <ul className="space-y-3 text-emerald-900 text-sm">
                <li>Neem de tijd — je bent niet verplicht direct te tekenen</li>
                <li>Schakel een arbeidsrechtadvocaat in</li>
                <li>Controleer je WW-rechten voordat je tekent</li>
                <li>Onderhandel over de vergoeding en voorwaarden</li>
                <li>Laat het concurrentiebeding vervallen</li>
                <li>Vraag om vrijstelling van werk met behoud van salaris</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2"><XCircle size={20} /> Niet doen</h3>
              <ul className="space-y-3 text-red-900 text-sm">
                <li>Niet meteen tekenen onder druk</li>
                <li>Niet akkoord gaan met een te lage vergoeding</li>
                <li>Niet zelf ontslag nemen (dan geen WW)</li>
                <li>Niet tekenen als je ziek bent (risico voor Ziektewet)</li>
                <li>Niet de bedenktijd vergeten te checken</li>
                <li>Niet akkoord gaan zonder juridisch advies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gerelateerd */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Vervolgstappen</h2>
          <div className="space-y-4">
            {[
              { label: "Bereken je transitievergoeding", href: "/transitievergoeding" },
              { label: "Check je bedenktijd", href: "/bedenktijd" },
              { label: "Bekijk je WW-rechten", href: "/ww-rechten" },
              { label: "Tips voor onderhandelen", href: "/onderhandelen" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200 hover:border-emerald-400 hover:shadow-md transition-all group">
                <span className="font-medium text-stone-900">{link.label}</span>
                <ArrowRight size={20} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over vaststellingsovereenkomsten</h2>
          <FAQSchema items={FAQ_WAT_IS_VSO} />
        </div>
      </section>
    </>
  );
}
