import Link from "next/link";
import { FileText, Calculator, Clock, Briefcase, Scale, BookOpen, ArrowRight, Shield, CheckCircle, Users, TrendingUp } from "lucide-react";
import StatsBar from "@/components/StatsBar";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_HOMEPAGE } from "@/lib/fallback-data";
import HomeCalculator from "./home-calculator";

export const revalidate = 3600;

const topicCards = [
  { title: "Wat is een VSO?", description: "Uitleg over de vaststellingsovereenkomst, wanneer je er een krijgt en wat erin staat.", href: "/wat-is-een-vso", icon: FileText, color: "from-emerald-50 to-emerald-100", textColor: "text-emerald-700" },
  { title: "Transitievergoeding", description: "Bereken je transitievergoeding met onze gratis calculator. Inclusief netto berekening.", href: "/transitievergoeding", icon: Calculator, color: "from-sky-50 to-sky-100", textColor: "text-sky-700" },
  { title: "Bedenktijd", description: "14 dagen bedenktijd: hoe werkt het herroepingsrecht en wanneer gaat de termijn in?", href: "/bedenktijd", icon: Clock, color: "from-amber-50 to-amber-100", textColor: "text-amber-700" },
  { title: "WW-rechten", description: "Heb je recht op WW na een VSO? Check de voorwaarden en bereken je uitkering.", href: "/ww-rechten", icon: Briefcase, color: "from-purple-50 to-purple-100", textColor: "text-purple-700" },
  { title: "Onderhandelen", description: "Tips en strategie voor het onderhandelen over je vaststellingsovereenkomst.", href: "/onderhandelen", icon: Scale, color: "from-rose-50 to-rose-100", textColor: "text-rose-700" },
  { title: "Juridisch advies", description: "Wanneer een advocaat inschakelen, wat kost het en wie betaalt?", href: "/juridisch-advies", icon: BookOpen, color: "from-indigo-50 to-indigo-100", textColor: "text-indigo-700" },
];

const trustSignals = [
  { icon: Shield, label: "100% onafhankelijk", description: "Geen provisie of commerciële belangen" },
  { icon: CheckCircle, label: "Actuele informatie", description: "Gebaseerd op wetgeving 2026" },
  { icon: Users, label: "Gratis voor iedereen", description: "Alle calculators en informatie kosteloos" },
  { icon: TrendingUp, label: "Betrouwbare berekeningen", description: "Gebaseerd op officiële UWV-tarieven" },
];

export default function HomePage() {
  return (
    <>
      <div className="relative overflow-hidden bg-stone-950 pt-16">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-20 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-stone-300 text-sm font-medium">Actueel 2026</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">Vaststellings-<br />overeenkomst</h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-400 bg-clip-text text-transparent mb-6">Bereken, begrijp &amp; onderhandel</p>
          <p className="text-lg sm:text-xl text-stone-400 max-w-2xl mb-10">Gratis calculators, onafhankelijk advies en alles wat je moet weten over je VSO. Van transitievergoeding tot WW-rechten.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/transitievergoeding" className="bg-white text-stone-900 px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all shadow-xl text-center">Bereken je vergoeding</Link>
            <Link href="/wat-is-een-vso" className="bg-white/5 backdrop-blur border border-white/15 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all text-center">Wat is een VSO?</Link>
          </div>
        </div>
      </div>

      <StatsBar stats={[
        { label: "Bedenktijd", value: "14 dagen", icon: "Clock" },
        { label: "Vergoeding per jaar", value: "1/3 maand", icon: "Calculator" },
        { label: "Max WW-duur", value: "24 maanden", icon: "Briefcase" },
        { label: "Advocaatkosten VSO", value: "€750-€1.500", icon: "Scale" },
      ]} />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-2">Snelle berekening</h2>
          <p className="text-stone-600 mb-8">Bereken direct een indicatie van je transitievergoeding</p>
          <HomeCalculator />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-2 text-center">Alles over je vaststellingsovereenkomst</h2>
          <p className="text-stone-600 mb-10 text-center max-w-2xl mx-auto">Van berekening tot onderhandeling — kies het onderwerp dat bij jouw situatie past</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicCards.map((card) => (
              <Link key={card.href} href={card.href} className="group bg-white border border-stone-200 rounded-2xl p-6 hover:shadow-lg hover:border-emerald-400 transition-all">
                <div className={`inline-flex p-3 bg-gradient-to-br ${card.color} rounded-xl mb-4`}><card.icon size={24} className={card.textColor} /></div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{card.title}</h3>
                <p className="text-stone-600 text-sm mb-4">{card.description}</p>
                <span className="text-emerald-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Lees meer <ArrowRight size={16} /></span>
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
                <div className="inline-flex p-4 bg-emerald-50 rounded-2xl mb-4"><signal.icon size={28} className="text-emerald-600" /></div>
                <h3 className="font-bold text-stone-900 mb-1">{signal.label}</h3>
                <p className="text-sm text-stone-500">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over vaststellingsovereenkomsten</h2>
          <FAQSchema items={FAQ_HOMEPAGE} />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Een VSO ontvangen?</h2>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">Teken niet direct. Gebruik onze gratis tools om je rechten te kennen en je positie te versterken.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/transitievergoeding" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg">Bereken je vergoeding</Link>
            <Link href="/juridisch-advies" className="border border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-semibold hover:bg-stone-50 transition-colors">Juridisch advies</Link>
          </div>
        </div>
      </section>
    </>
  );
}
