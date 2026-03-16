import Link from "next/link";
import { Heart, Car, Home, Plane, Scale, Shield, ArrowRight, CheckCircle, Users, TrendingUp, BookOpen } from "lucide-react";
import StatsBar from "@/components/StatsBar";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_HOMEPAGE } from "@/lib/fallback-data";
import HomeCalculator from "./home-calculator";

export const revalidate = 3600;

const topicCards = [
  { title: "Zorgverzekering", description: "Vergelijk zorgverzekeringen, bereken je premie en ontdek of je recht hebt op zorgtoeslag.", href: "/zorgverzekering", icon: Heart, color: "from-blue-50 to-blue-100", textColor: "text-blue-700" },
  { title: "Autoverzekering", description: "WA, WA+ of allrisk? Vergelijk premies en bespaar met schadevrije jaren.", href: "/autoverzekering", icon: Car, color: "from-sky-50 to-sky-100", textColor: "text-sky-700" },
  { title: "Woonverzekeringen", description: "Inboedel- en opstalverzekering: wat heb je nodig en wat kost het?", href: "/woonverzekeringen", icon: Home, color: "from-amber-50 to-amber-100", textColor: "text-amber-700" },
  { title: "Reisverzekering", description: "Doorlopend of per reis? Vergelijk dekkingen voor binnen- en buitenland.", href: "/reisverzekering", icon: Plane, color: "from-purple-50 to-purple-100", textColor: "text-purple-700" },
  { title: "Aansprakelijkheid", description: "Bescherm jezelf tegen onverwachte schade. Vanaf enkele euro's per maand.", href: "/aansprakelijkheidsverzekering", icon: Scale, color: "from-rose-50 to-rose-100", textColor: "text-rose-700" },
  { title: "Rechtsbijstand", description: "Juridische hulp bij conflicten over werk, wonen, verkeer en consumentenzaken.", href: "/rechtsbijstandverzekering", icon: BookOpen, color: "from-indigo-50 to-indigo-100", textColor: "text-indigo-700" },
];

const trustSignals = [
  { icon: Shield, label: "100% onafhankelijk", description: "Geen provisie of commerciële belangen" },
  { icon: CheckCircle, label: "Actuele informatie", description: "Gebaseerd op premies en regels 2026" },
  { icon: Users, label: "Gratis voor iedereen", description: "Alle calculators en informatie kosteloos" },
  { icon: TrendingUp, label: "Betrouwbare vergelijkingen", description: "Gebaseerd op officiële tarieven" },
];

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden bg-stone-950 pt-16">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-20 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-stone-300 text-sm font-medium">Actueel 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">Verzekeringen<br />vergelijken</h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-sky-300 to-amber-400 bg-clip-text text-transparent mb-6">Vergelijk, bereken &amp; bespaar</p>
          <p className="text-lg sm:text-xl text-stone-400 max-w-2xl mb-10">Gratis calculators, onafhankelijk advies en alles wat je moet weten over verzekeringen in Nederland. Van zorgpremie tot autoverzekering.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/zorgverzekering" className="bg-white text-stone-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all shadow-xl text-center">Bereken je premie</Link>
            <Link href="/autoverzekering" className="bg-white/5 backdrop-blur border border-white/15 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all text-center">Autoverzekering vergelijken</Link>
          </div>
        </div>
      </div>

      <StatsBar stats={[
        { label: "Verplicht eigen risico", value: "€385", icon: "Heart" },
        { label: "Gem. zorgpremie/mnd", value: "€145", icon: "Heart" },
        { label: "Max korting autovrz.", value: "80%", icon: "Car" },
        { label: "Gem. inboedelwaarde", value: "€75.000", icon: "Home" },
      ]} />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">Snelle berekening</h2>
          <p className="text-stone-600 mb-8">Bereken direct een indicatie van je zorgverzekeringspremie</p>
          <HomeCalculator />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-2 text-center">Alles over verzekeringen in Nederland</h2>
          <p className="text-stone-600 mb-10 text-center max-w-2xl mx-auto">Van zorgverzekering tot reisverzekering — kies het onderwerp dat bij jouw situatie past</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicCards.map((card) => (
              <Link key={card.href} href={card.href} className="group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-400 transition-all">
                <div className={`inline-flex p-3 bg-gradient-to-br ${card.color} rounded-xl mb-4`}><card.icon size={24} className={card.textColor} /></div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{card.title}</h3>
                <p className="text-stone-600 text-sm mb-4">{card.description}</p>
                <span className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Lees meer <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <div className="inline-flex p-4 bg-blue-50 rounded-2xl mb-4"><signal.icon size={28} className="text-blue-600" /></div>
                <h3 className="font-bold text-stone-900 mb-1">{signal.label}</h3>
                <p className="text-sm text-stone-500">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over verzekeringen</h2>
          <FAQSchema items={FAQ_HOMEPAGE} />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Verzekeringen vergelijken?</h2>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">Betaal niet te veel. Gebruik onze gratis tools om de beste verzekering voor jouw situatie te vinden.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/zorgverzekering" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors shadow-lg">Bereken je premie</Link>
            <Link href="/autoverzekering" className="border border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-semibold hover:bg-stone-50 transition-colors">Auto vergelijken</Link>
          </div>
        </div>
      </section>
    </>
  );
}
