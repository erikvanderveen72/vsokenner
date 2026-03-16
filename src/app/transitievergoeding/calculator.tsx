"use client";
import { useState, useMemo } from "react";
import { berekenTransitievergoeding, berekenNettoVergoeding, formatBedrag, formatPercentage } from "@/lib/calculations";

export default function TransitievergoedingCalculator() {
  const [salaris, setSalaris] = useState(4000);
  const [dienstjaren, setDienstjaren] = useState(8);

  const resultaat = useMemo(() => {
    const bruto = berekenTransitievergoeding(salaris, dienstjaren);
    const { netto, belasting, effectiefTarief } = berekenNettoVergoeding(bruto);
    return { bruto, netto, belasting, effectiefTarief };
  }, [salaris, dienstjaren]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
      <div className="bg-emerald-600 px-6 sm:px-8 py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Transitievergoeding calculator 2026</h2>
        <p className="text-emerald-100 text-sm mt-1">Bereken je bruto en netto ontslagvergoeding</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-stone-200">
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">Bruto maandsalaris: <span className="text-emerald-600 font-bold">€{salaris.toLocaleString("nl-NL")}</span></label>
            <input type="range" min="1500" max="15000" step="100" value={salaris} onChange={(e) => setSalaris(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>€1.500</span><span>€15.000</span></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">Aantal dienstjaren: <span className="text-emerald-600 font-bold">{dienstjaren} jaar</span></label>
            <input type="range" min="1" max="40" step="1" value={dienstjaren} onChange={(e) => setDienstjaren(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>1 jaar</span><span>40 jaar</span></div>
          </div>
          <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
            <p className="text-sm text-emerald-800"><strong>Formule:</strong> (€{salaris.toLocaleString("nl-NL")} × 1,08 vakantietoeslag) ÷ 3 × {dienstjaren} jaar</p>
          </div>
        </div>
        <div className="p-6 sm:p-8 bg-stone-50">
          <p className="text-sm text-stone-500 mb-1">Bruto transitievergoeding</p>
          <p className="text-4xl sm:text-5xl font-bold text-emerald-600 mb-6">€{formatBedrag(resultaat.bruto)}</p>
          <div className="space-y-3">
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Bruto vergoeding</span>
              <span className="text-sm font-medium text-stone-900">€{formatBedrag(resultaat.bruto)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Loonheffing ({formatPercentage(resultaat.effectiefTarief)})</span>
              <span className="text-sm font-medium text-red-600">- €{formatBedrag(resultaat.belasting)}</span>
            </div>
            <div className="flex justify-between py-3 bg-emerald-50 rounded-lg px-4 -mx-4">
              <span className="text-sm font-bold text-stone-900">Netto vergoeding</span>
              <span className="text-xl font-bold text-emerald-600">€{formatBedrag(resultaat.netto)}</span>
            </div>
          </div>
          <p className="text-xs text-stone-400 mt-6">Indicatieve berekening op basis van belastingschijven 2026. Het werkelijke bedrag kan afwijken. Raadpleeg een fiscalist voor exact advies.</p>
        </div>
      </div>
    </div>
  );
}
