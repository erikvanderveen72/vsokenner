import Link from "next/link";
import { Lock, Shield, RefreshCw } from "lucide-react";

const columns = [
  { title: "Onderwerpen", links: [
    { label: "Wat is een VSO?", href: "/wat-is-een-vso" },
    { label: "Transitievergoeding", href: "/transitievergoeding" },
    { label: "Bedenktijd", href: "/bedenktijd" },
    { label: "WW-rechten", href: "/ww-rechten" },
  ]},
  { title: "Advies & tips", links: [
    { label: "Onderhandelen", href: "/onderhandelen" },
    { label: "Juridisch advies", href: "/juridisch-advies" },
    { label: "Begrippenlijst", href: "/begrippenlijst" },
  ]},
  { title: "Calculators", links: [
    { label: "Transitievergoeding berekenen", href: "/transitievergoeding" },
    { label: "WW-uitkering berekenen", href: "/ww-rechten" },
    { label: "Netto ontslagvergoeding", href: "/transitievergoeding" },
  ]},
];

const trustBadges = [
  { icon: Shield, label: "100% onafhankelijk" },
  { icon: Lock, label: "SSL beveiligd" },
  { icon: RefreshCw, label: "Dagelijks bijgewerkt" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#059669"/><circle cx="18" cy="18" r="14" fill="#047857"/><text x="18" y="24" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#fff">VSO</text></svg>
            <span className="text-[22px] font-extrabold tracking-tight text-white">vsokenner<span className="text-emerald-400">.nl</span></span>
          </Link>
          <p className="mt-3 text-sm text-stone-500 max-w-md">Onafhankelijke informatie over vaststellingsovereenkomsten. Gratis calculators en advies voor werknemers in Nederland.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold mb-4">{col.title}</h3>
              <ul className="space-y-2">{col.links.map((link) => (<li key={link.href + link.label}><Link href={link.href} className="text-sm text-stone-400 hover:text-white transition-colors">{link.label}</Link></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mb-10">
          {trustBadges.map((badge) => (<div key={badge.label} className="flex items-center gap-2 bg-stone-800 rounded-full px-3 py-1.5"><badge.icon size={14} className="text-emerald-400" /><span className="text-xs text-stone-400">{badge.label}</span></div>))}
        </div>
        <div className="border-t border-stone-800 pt-6 text-center">
          <p className="text-xs text-stone-500">&copy; {new Date().getFullYear()} VSO-kenner.nl — Alle informatie is indicatief. Raadpleeg een jurist voor persoonlijk advies.</p>
        </div>
      </div>
    </footer>
  );
}
