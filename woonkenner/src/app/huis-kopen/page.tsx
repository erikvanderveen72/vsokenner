import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_HUIS_KOPEN } from "@/lib/fallback-data";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Huis kopen in 2026 - Compleet stappenplan & tips",
  description: "Alles over het kopen van een huis in 2026. Stap voor stap door het koopproces, van oriëntatie tot sleuteloverdracht. Gratis tips en onafhankelijk advies.",
  alternates: { canonical: "https://woonkenner.nl/huis-kopen" },
};

export const revalidate = 3600;

export default function HuisKopenPage() {
  return (
    <>
      <PageHero
        title="Huis kopen"
        badge="Stappenplan 2026"
        highlightedSubtitle="Van droom naar eigen woning"
        subtitle="Een complete gids voor het kopen van een huis. Van de eerste oriëntatie tot de sleuteloverdracht bij de notaris."
        showBreadcrumbs
        breadcrumbs={[{ label: "Huis kopen", href: "/huis-kopen" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Huis kopen: zo werkt het</h2>
          <p>Het kopen van een huis is een van de grootste financiële beslissingen in je leven. Een goede voorbereiding is essentieel. Begin met het bepalen van je budget (bereken je maximale hypotheek), oriënteer je op de woningmarkt en weet wat je rechten en plichten zijn.</p>
          <p>Gemiddeld duurt het koopproces 6 tot 12 weken, van bod tot sleuteloverdracht. In dit artikel nemen we je stap voor stap mee door het hele proces.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Het stappenplan</h2>
          <div className="space-y-6">
            {[
              { stap: "1", titel: "Budget bepalen", beschrijving: "Bereken je maximale hypotheek en bepaal hoeveel eigen geld je hebt voor de kosten koper (4-6% van de koopprijs)." },
              { stap: "2", titel: "Hypotheek oriëntatie", beschrijving: "Vraag een hypotheek-vooraf-advies aan. Hiermee weten verkopers dat je serieus bent en snel kunt handelen." },
              { stap: "3", titel: "Woningen bezichtigen", beschrijving: "Ga gericht bezichtigen op basis van je budget. Let op locatie, staat van onderhoud, energielabel en VvE-bijdrage." },
              { stap: "4", titel: "Bod uitbrengen", beschrijving: "Doe een onderbouwd bod. Een aankoopmakelaar kan hierbij helpen. Overweeg een bouwkundige keuring als ontbindende voorwaarde." },
              { stap: "5", titel: "Koopovereenkomst tekenen", beschrijving: "Na akkoord teken je het koopcontract. Je hebt dan 3 dagen bedenktijd. Neem een financieringsvoorbehoud op." },
              { stap: "6", titel: "Hypotheek afsluiten", beschrijving: "Regel je hypotheek definitief. Laat de woning taxeren en vergelijk meerdere hypotheekaanbieders." },
              { stap: "7", titel: "Bouwkundige keuring", beschrijving: "Laat een onafhankelijke keuring uitvoeren om verborgen gebreken op te sporen. Kosten: €300-€500." },
              { stap: "8", titel: "Overdracht bij notaris", beschrijving: "Op de afgesproken datum ga je naar de notaris voor de eigendomsoverdracht en krijg je de sleutel." },
            ].map((stap, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-16 text-right">
                  <span className="inline-flex w-10 h-10 items-center justify-center bg-blue-600 text-white font-bold text-sm rounded-full">{stap.stap}</span>
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

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Waar moet je op letten?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2"><CheckCircle size={20} /> Wel doen</h3>
              <ul className="space-y-3 text-green-900 text-sm">
                <li>Bepaal eerst je budget voordat je gaat bezichtigen</li>
                <li>Vraag een hypotheek-vooraf aan</li>
                <li>Neem een financieringsvoorbehoud op in het koopcontract</li>
                <li>Laat een bouwkundige keuring uitvoeren</li>
                <li>Vergelijk meerdere hypotheekaanbieders</li>
                <li>Houd rekening met bijkomende kosten (4-6%)</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-200">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2"><XCircle size={20} /> Niet doen</h3>
              <ul className="space-y-3 text-red-900 text-sm">
                <li>Niet meer bieden dan je kunt financieren</li>
                <li>Niet tekenen zonder de bedenktijd te kennen (3 dagen)</li>
                <li>Niet de bouwkundige keuring overslaan</li>
                <li>Niet vergeten om de VvE-stukken te checken (bij appartementen)</li>
                <li>Niet de kosten koper onderschatten</li>
                <li>Niet impulsief handelen onder druk van de markt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Vervolgstappen</h2>
          <div className="space-y-4">
            {[
              { label: "Bereken je maximale hypotheek", href: "/hypotheek" },
              { label: "Bereken de kosten koper", href: "/kosten-koper" },
              { label: "Alles over de notaris", href: "/notaris" },
              { label: "Verduurzaming van je woning", href: "/verduurzaming" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center justify-between p-4 bg-white rounded-xl border border-stone-200 hover:border-blue-400 hover:shadow-md transition-all group">
                <span className="font-medium text-stone-900">{link.label}</span>
                <ArrowRight size={20} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over huis kopen</h2>
          <FAQSchema items={FAQ_HUIS_KOPEN} />
        </div>
      </section>
    </>
  );
}
