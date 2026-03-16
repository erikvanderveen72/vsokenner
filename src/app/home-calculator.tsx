"use client";
import { useState, useMemo } from "react";
import { berekenTransitievergoeding, berekenNettoVergoeding, formatBedrag } from "@/lib/calculations";

export default function HomeCalculator() {
  const [salaris, setSalaris] = useState(4000);
  const [dienstjaren, setDienstjaren] = useState(5);

  const resultaat = useMemo(() => {
    const bruto = berekenTransitievergoeding(salaris, dienstjaren);
    const netto = berekenNettoVergoeding(bruto);
    return { bruto, ...netto };
  }, [salaris, dienstjaren]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
      <div className="bg-emerald-600 px-6 sm:px-8 py-6">
        <h3 className="text-2xl font-bold text-white">Transitievergoeding calculator</h3>
        <p className="text-emerald-100 text-sm mt-1">Snel een indicatie van je vergoeding</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-stone-200">
        {/* Inputs */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">
              Bruto maandsalaris: <span className="text-emerald-600 font-bold">€{salaris.toLocaleString("nl-NL")}</span>
            </label>
            <input type="range" min="1500" max="15000" step="100" value={salaris} onChange={(e) => setSalaris(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>€1.500</span><span>€15.000</span></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">
              Dienstjaren: <span className="text-emerald-600 font-bold">{dienstjaren} jaar</span>
            </label>
            <input type="range" min="1" max="40" step="1" value={dienstjaren} onChange={(e) => setDienstjaren(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>1 jaar</span><span>40 jaar</span></div>
          </div>
        </div>
        {/* Results */}
        <div className="p-6 sm:p-8 bg-stone-50">
          <p className="text-sm text-stone-500 mb-2">Bruto transitievergoeding</p>
          <p className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-4">€{formatBedrag(resultaat.bruto)}</p>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-stone-200">
              <span className="text-sm text-stone-600">Belasting ({(resultaat.effectiefTarief * 100).toFixed(1)}%)</span>
              <span className="text-sm font-medium text-stone-900">- €{formatBedrag(resultaat.belasting)}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-sm font-semibold text-stone-900">Netto vergoeding</span>
              <span className="text-lg font-bold text-emerald-600">€{formatBedrag(resultaat.netto)}</span>
            </div>
          </div>
          <p className="text-xs text-stone-400 mt-4">Inclusief 8% vakantietoeslag. Indicatieve berekening.</p>
        </div>
      </div>
    </div>
  );
}
