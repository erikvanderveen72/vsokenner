import { Metadata } from "next";
import Link from "next/link";
import { Home, Search, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  description: "De pagina die je zoekt bestaat niet of is verplaatst.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex p-6 bg-emerald-50 rounded-3xl mb-8">
          <Search size={48} className="text-emerald-600" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-stone-900 mb-4">Pagina niet gevonden</h1>
        <p className="text-lg text-stone-600 mb-10 max-w-md mx-auto">De pagina die je zoekt bestaat niet of is verplaatst. Bekijk een van onze populaire pagina&apos;s hieronder.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
          {[
            { label: "Wat is een VSO?", href: "/wat-is-een-vso" },
            { label: "Transitievergoeding", href: "/transitievergoeding" },
            { label: "WW-rechten", href: "/ww-rechten" },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="flex items-center justify-center gap-2 bg-white border border-stone-200 rounded-xl px-4 py-3 text-stone-700 font-medium hover:border-emerald-400 hover:shadow-md transition-all">
              {link.label} <ArrowRight size={16} className="text-emerald-600" />
            </Link>
          ))}
        </div>

        <Link href="/" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors">
          <Home size={18} /> Terug naar home
        </Link>
      </div>
    </div>
  );
}
