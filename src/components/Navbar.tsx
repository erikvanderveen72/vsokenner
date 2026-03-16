"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield } from "lucide-react";

const navItems = [
  { label: "Wat is een VSO?", href: "/wat-is-een-vso" },
  { label: "Transitievergoeding", href: "/transitievergoeding" },
  { label: "Bedenktijd", href: "/bedenktijd" },
  { label: "WW-rechten", href: "/ww-rechten" },
  { label: "Onderhandelen", href: "/onderhandelen" },
  { label: "Juridisch advies", href: "/juridisch-advies" },
  { label: "Begrippenlijst", href: "/begrippenlijst" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md border-b border-stone-200" : "bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="#059669"/><circle cx="18" cy="18" r="14" fill="#047857"/><text x="18" y="24" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#fff">VSO</text></svg>
            <span className={`text-[22px] font-extrabold tracking-tight transition-colors ${isScrolled ? "text-stone-900" : "text-white"}`}>vsokenner<span className="text-emerald-500">.nl</span></span>
          </Link>
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (<Link key={item.href} href={item.href} className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isScrolled ? "text-stone-600 hover:text-emerald-600 hover:bg-emerald-50" : "text-stone-300 hover:text-white hover:bg-white/10"}`}>{item.label}</Link>))}
          </div>
          <div className="flex items-center gap-3">
            <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${isScrolled ? "bg-emerald-50 text-emerald-700" : "bg-emerald-500/20 text-emerald-300"}`}><Shield size={12} /><span>Onafhankelijk & gratis</span></div>
            <button onClick={() => setIsMobileOpen(!isMobileOpen)} className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-stone-600" : "text-white"}`} aria-label="Menu">{isMobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
          </div>
        </div>
      </div>
      {isMobileOpen && (<div className="lg:hidden bg-white border-t border-stone-200 shadow-xl rounded-b-2xl"><div className="px-4 py-4 space-y-1">{navItems.map((item) => (<Link key={item.href} href={item.href} onClick={() => setIsMobileOpen(false)} className="block px-4 py-3 rounded-lg text-stone-700 hover:bg-emerald-50 hover:text-emerald-600 font-medium transition-colors">{item.label}</Link>))}</div></div>)}
    </nav>
  );
}
