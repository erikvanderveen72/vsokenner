import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_HUURRECHTEN, HUUR_LIBERALISATIEGRENS_2026, HUURVERHOGING_MAX_2026, HUURVERHOGING_VRIJ_MAX_2026 } from "@/lib/fallback-data";
import { Shield, AlertTriangle, CheckCircle, Euro } from "lucide-react";

export const metadata: Metadata = {
  title: "Huurrechten 2026 - Rechten als huurder, huurverhoging & bescherming",
  description: "Ken je rechten als huurder in 2026. Maximale huurverhoging, huurbescherming, onderhoud en de Huurcommissie. Onafhankelijk advies voor huurders.",
  alternates: { canonical: "https://woonkenner.nl/huurrechten" },
};

export const revalidate = 3600;

export default function HuurrechtenPage() {
  return (
    <>
      <PageHero
        title="Huurrechten"
        badge="Rechten 2026"
        highlightedSubtitle="Ken je rechten als huurder"
        subtitle="Alles over huurbescherming, huurverhoging, onderhoud en de Huurcommissie. Onafhankelijk advies voor huurders in Nederland."
        showBreadcrumbs
        breadcrumbs={[{ label: "Huurrechten", href: "/huurrechten" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-3xl font-bold text-stone-900 mb-6">Je rechten als huurder</h2>
          <p>Als huurder in Nederland ben je goed beschermd door de wet. Je verhuurder kan je niet zomaar op straat zetten, en de huurprijs mag niet onbeperkt stijgen. Het is belangrijk om je rechten te kennen, zodat je weet waar je staat.</p>
          <p>De regels verschillen voor sociale huur (kale huur onder &euro;{HUUR_LIBERALISATIEGRENS_2026.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}) en de vrije sector (daarboven). Bij sociale huur heb je meer bescherming.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Huurverhoging 2026</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 text-center">
              <Euro size={32} className="text-blue-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-stone-900 mb-2">{(HUURVERHOGING_MAX_2026 * 100).toFixed(1)}%</p>
              <p className="text-sm text-stone-600">Maximale huurverhoging sociale huur</p>
              <p className="text-xs text-stone-400 mt-2">Inflatie + 1 procentpunt</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 text-center">
              <Euro size={32} className="text-blue-600 mx-auto mb-4" />
              <p className="text-3xl font-bold text-stone-900 mb-2">{(HUURVERHOGING_VRIJ_MAX_2026 * 100).toFixed(1)}%</p>
              <p className="text-sm text-stone-600">Maximale huurverhoging vrije sector</p>
              <p className="text-xs text-stone-400 mt-2">Wettelijk maximum per jaar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Belangrijke regels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <Shield size={24} className="text-blue-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Huurbescherming</h3>
              <p className="text-sm text-stone-600">Je verhuurder kan het huurcontract niet zomaar opzeggen. Alleen bij wettelijke gronden (eigen gebruik, renovatie, wanbetaling) en met toestemming van de rechter.</p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <AlertTriangle size={24} className="text-amber-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Onderhoud</h3>
              <p className="text-sm text-stone-600">Groot onderhoud is voor de verhuurder. Bij gebreken kun je naar de Huurcommissie voor huurverlaging totdat het probleem is verholpen.</p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <CheckCircle size={24} className="text-green-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Huurcommissie</h3>
              <p className="text-sm text-stone-600">De Huurcommissie is een onafhankelijke organisatie die geschillen tussen huurders en verhuurders beslechter. Je kunt er terecht voor huurprijs, onderhoud en servicekosten.</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <Euro size={24} className="text-purple-600 mb-3" />
              <h3 className="font-bold text-stone-900 mb-2">Liberalisatiegrens</h3>
              <p className="text-sm text-stone-600">De liberalisatiegrens in 2026 is &euro;{HUUR_LIBERALISATIEGRENS_2026.toLocaleString("nl-NL", { minimumFractionDigits: 2 })} per maand. Daaronder valt de woning onder sociale huur met extra bescherming.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over huurrechten</h2>
          <FAQSchema items={FAQ_HUURRECHTEN} />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Overweeg je een huis te kopen?</h2>
          <p className="text-stone-600 mb-8">Bereken of kopen voordeliger is dan huren met onze gratis hypotheekcalculator.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hypotheek" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">Bereken je hypotheek</Link>
            <Link href="/huis-kopen" className="border border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-semibold hover:bg-stone-50 transition-colors">Huis kopen: stappenplan</Link>
          </div>
        </div>
      </section>
    </>
  );
}
