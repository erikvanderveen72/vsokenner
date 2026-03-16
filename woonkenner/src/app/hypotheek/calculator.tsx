"use client";
import { useState, useMemo } from "react";
import { berekenMaxHypotheek, berekenMaandlasten, formatBedrag, formatPercentage } from "@/lib/calculations";

export default function HypotheekCalculator() {
  const [inkomen, setInkomen] = useState(60000);
  const [partnerInkomen, setPartnerInkomen] = useState(0);
  const [rente, setRente] = useState(3.95);

  const resultaat = useMemo(() => {
    const maxHypotheek = berekenMaxHypotheek(inkomen, partnerInkomen);
    const maandlasten = berekenMaandlasten(maxHypotheek, rente / 100);
    const totaalBetaald = maandlasten * 360;
    const totaalRente = totaalBetaald - maxHypotheek;
    return { maxHypotheek, maandlasten, totaalRente };
  }, [inkomen, partnerInkomen, rente]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
      <div className="bg-blue-600 px-6 sm:px-8 py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Hypotheek calculator 2026</h2>
        <p className="text-blue-100 text-sm mt-1">Bereken je maximale hypotheek en maandlasten</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-stone-200">
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">Bruto jaarinkomen: <span className="text-blue-600 font-bold">&euro;{inkomen.toLocaleString("nl-NL")}</span></label>
            <input type="range" min="20000" max="150000" step="1000" value={inkomen} onChange={(e) => setInkomen(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>&euro;20.000</span><span>&euro;150.000</span></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">Partner jaarinkomen: <span className="text-blue-600 font-bold">&euro;{partnerInkomen.toLocaleString("nl-NL")}</span></label>
            <input type="range" min="0" max="150000" step="1000" value={partnerInkomen} onChange={(e) => setPartnerInkomen(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>&euro;0</span><span>&euro;150.000</span></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">Hypotheekrente: <span className="text-blue-600 font-bold">{rente.toFixed(2)}%</span></label>
            <input type="range" min="2.5" max="6" step="0.05" value={rente} onChange={(e) => setRente(parseFloat(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>2,50%</span><span>6,00%</span></div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <p className="text-sm text-blue-800"><strong>Formule:</strong> (&euro;{inkomen.toLocaleString("nl-NL")}{partnerInkomen > 0 ? ` + €${partnerInkomen.toLocaleString("nl-NL")}` : ""}) &times; 4,25 inkomensfactor</p>
          </div>
        </div>
        <div className="p-6 sm:p-8 bg-stone-50">
          <p className="text-sm text-stone-500 mb-1">Maximale hypotheek</p>
          <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">&euro;{formatBedrag(resultaat.maxHypotheek)}</p>
          <div className="space-y-3">
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Maandlasten (annuïteit)</span>
              <span className="text-sm font-medium text-stone-900">&euro;{formatBedrag(resultaat.maandlasten, 2)} /mnd</span>
            </div>
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Totaal rente (30 jaar)</span>
              <span className="text-sm font-medium text-stone-900">&euro;{formatBedrag(Math.round(resultaat.totaalRente))}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Rente ({formatPercentage(rente / 100)})</span>
              <span className="text-sm font-medium text-stone-900">10 jaar vast</span>
            </div>
            <div className="flex justify-between py-3 bg-blue-50 rounded-lg px-4 -mx-4">
              <span className="text-sm font-bold text-stone-900">Inkomensfactor</span>
              <span className="text-xl font-bold text-blue-600">4,25x</span>
            </div>
          </div>
          <p className="text-xs text-stone-400 mt-6">Indicatieve berekening. Je werkelijke maximale hypotheek hangt af van meer factoren zoals schulden, vaste lasten en de gekozen hypotheekverstrekker.</p>
        </div>
      </div>
    </div>
  );
}
