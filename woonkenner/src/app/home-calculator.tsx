"use client";
import { useState, useMemo } from "react";
import { berekenMaxHypotheek, berekenMaandlasten, formatBedrag } from "@/lib/calculations";

export default function HomeCalculator() {
  const [inkomen, setInkomen] = useState(60000);
  const [rente, setRente] = useState(3.95);

  const resultaat = useMemo(() => {
    const maxHypotheek = berekenMaxHypotheek(inkomen);
    const maandlasten = berekenMaandlasten(maxHypotheek, rente / 100);
    return { maxHypotheek, maandlasten };
  }, [inkomen, rente]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
      <div className="bg-blue-600 px-6 sm:px-8 py-6">
        <h3 className="text-2xl font-bold text-white">Hypotheek calculator</h3>
        <p className="text-blue-100 text-sm mt-1">Snel een indicatie van je maximale hypotheek</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-stone-200">
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">
              Bruto jaarinkomen: <span className="text-blue-600 font-bold">&euro;{inkomen.toLocaleString("nl-NL")}</span>
            </label>
            <input type="range" min="20000" max="150000" step="1000" value={inkomen} onChange={(e) => setInkomen(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>&euro;20.000</span><span>&euro;150.000</span></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">
              Hypotheekrente: <span className="text-blue-600 font-bold">{rente.toFixed(2)}%</span>
            </label>
            <input type="range" min="2.5" max="6" step="0.05" value={rente} onChange={(e) => setRente(parseFloat(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>2,50%</span><span>6,00%</span></div>
          </div>
        </div>
        <div className="p-6 sm:p-8 bg-stone-50">
          <p className="text-sm text-stone-500 mb-2">Indicatie maximale hypotheek</p>
          <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">&euro;{formatBedrag(resultaat.maxHypotheek)}</p>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-stone-200">
              <span className="text-sm text-stone-600">Maandlasten (annuïteit)</span>
              <span className="text-sm font-medium text-stone-900">&euro;{formatBedrag(resultaat.maandlasten, 2)} /mnd</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-200">
              <span className="text-sm text-stone-600">Rente ({rente.toFixed(2)}%, 30 jaar vast)</span>
              <span className="text-sm font-medium text-stone-900">&euro;{formatBedrag(Math.round(resultaat.maandlasten * 360 - resultaat.maxHypotheek))}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm font-semibold text-stone-900">Inkomensfactor</span>
              <span className="text-lg font-bold text-blue-600">4,25x</span>
            </div>
          </div>
          <p className="text-xs text-stone-400 mt-4">Indicatieve berekening. Je werkelijke maximale hypotheek hangt af van meer factoren.</p>
        </div>
      </div>
    </div>
  );
}
