import Link from "next/link";
import { Lock, Shield, RefreshCw } from "lucide-react";

const columns = [
  { title: "Onderwerpen", links: [
    { label: "Huis kopen", href: "/huis-kopen" },
    { label: "Hypotheek berekenen", href: "/hypotheek" },
    { label: "Kosten koper", href: "/kosten-koper" },
    { label: "Verduurzaming", href: "/verduurzaming" },
  ]},
  { title: "Advies & tips", links: [
    { label: "Huurrechten", href: "/huurrechten" },
    { label: "Notaris", href: "/notaris" },
    { label: "Begrippenlijst", href: "/begrippenlijst" },
  ]},
  { title: "Calculators", links: [
    { label: "Hypotheek berekenen", href: "/hypotheek" },
    { label: "Kosten koper berekenen", href: "/kosten-koper" },
    { label: "Verduurzaming berekenen", href: "/verduurzaming" },
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
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#2563eb"/><circle cx="18" cy="18" r="14" fill="#1d4ed8"/><path d="M18 8L8 18H12V26H24V18H28L18 8Z" fill="white" opacity="0.9"/></svg>
            <span className="text-[22px] font-extrabold tracking-tight text-white">woonkenner<span className="text-blue-400">.nl</span></span>
          </Link>
          <p className="mt-3 text-sm text-stone-500 max-w-md">Onafhankelijke informatie over wonen in Nederland. Gratis calculators en advies voor kopers, huurders en huiseigenaren.</p>
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
          {trustBadges.map((badge) => (<div key={badge.label} className="flex items-center gap-2 bg-stone-800 rounded-full px-3 py-1.5"><badge.icon size={14} className="text-blue-400" /><span className="text-xs text-stone-400">{badge.label}</span></div>))}
        </div>
        <div className="border-t border-stone-800 pt-6 text-center">
          <p className="text-xs text-stone-500">&copy; {new Date().getFullYear()} Woonkenner.nl — Alle informatie is indicatief. Raadpleeg een adviseur voor persoonlijk advies.</p>
        </div>
      </div>
    </footer>
  );
}
