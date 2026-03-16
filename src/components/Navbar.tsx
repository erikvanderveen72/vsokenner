"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Shield, ChevronDown } from "lucide-react";

const mainItems = [
  { label: "Wat is een VSO?", href: "/wat-is-een-vso" },
  { label: "Transitievergoeding", href: "/transitievergoeding" },
  { label: "WW-rechten", href: "/ww-rechten" },
];

const moreItems = [
  { label: "Bedenktijd", href: "/bedenktijd" },
  { label: "Onderhandelen", href: "/onderhandelen" },
  { label: "Juridisch advies", href: "/juridisch-advies" },
  { label: "Begrippenlijst", href: "/begrippenlijst" },
];

const allItems = [...mainItems, ...moreItems];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkClass = (scrolled: boolean) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      scrolled
        ? "text-stone-600 hover:text-emerald-600 hover:bg-emerald-50"
        : "text-stone-300 hover:text-white hover:bg-white/10"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-stone-200"
          : "bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill="#059669" />
              <circle cx="18" cy="18" r="14" fill="#047857" />
              <text x="18" y="24" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700" fill="#fff">VSO</text>
            </svg>
            <span className={`text-[22px] font-extrabold tracking-tight transition-colors ${isScrolled ? "text-stone-900" : "text-white"}`}>
              vsokenner<span className="text-emerald-500">.nl</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {mainItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(isScrolled)}>
                {item.label}
              </Link>
            ))}

            {/* Meer dropdown */}
            <div ref={moreRef} className="relative">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`flex items-center gap-1 ${linkClass(isScrolled)}`}
              >
                Meer
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${isMoreOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMoreOpen && (
                <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-stone-200 py-2 animate-in fade-in slide-in-from-top-2 duration-150">
                  {moreItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMoreOpen(false)}
                      className="block px-4 py-2.5 text-sm text-stone-600 hover:bg-emerald-50 hover:text-emerald-600 font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <div
              className={`hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
                isScrolled ? "bg-emerald-50 text-emerald-700" : "bg-emerald-500/20 text-emerald-300"
              }`}
            >
              <Shield size={12} />
              <span>Onafhankelijk & gratis</span>
            </div>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-stone-600" : "text-white"}`}
              aria-label="Menu"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 shadow-xl rounded-b-2xl">
          <div className="px-4 py-4 space-y-1">
            {allItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-stone-700 hover:bg-emerald-50 hover:text-emerald-600 font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
