"use client";
import { useState, useMemo } from "react";
import { berekenWWUitkering, berekenWWDuur, berekenFictieveOpzegtermijn, formatBedrag } from "@/lib/calculations";

export default function WWCalculator() {
  const [salaris, setSalaris] = useState(4000);
  const [dienstjaren, setDienstjaren] = useState(8);
  const [arbeidsverleden, setArbeidsverleden] = useState(10);

  const resultaat = useMemo(() => {
    const ww = berekenWWUitkering(salaris);
    const duur = berekenWWDuur(arbeidsverleden);
    const opzegtermijn = berekenFictieveOpzegtermijn(dienstjaren);
    return { ...ww, duur, opzegtermijn };
  }, [salaris, dienstjaren, arbeidsverleden]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
      <div className="bg-emerald-600 px-6 sm:px-8 py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">WW-uitkering calculator 2026</h2>
        <p className="text-emerald-100 text-sm mt-1">Bereken je WW-uitkering en fictieve opzegtermijn</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-stone-200">
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">Bruto maandsalaris: <span className="text-emerald-600 font-bold">€{salaris.toLocaleString("nl-NL")}</span></label>
            <input type="range" min="1500" max="10000" step="100" value={salaris} onChange={(e) => setSalaris(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>€1.500</span><span>€10.000</span></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">Dienstjaren bij huidige werkgever: <span className="text-emerald-600 font-bold">{dienstjaren} jaar</span></label>
            <input type="range" min="1" max="30" step="1" value={dienstjaren} onChange={(e) => setDienstjaren(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>1 jaar</span><span>30 jaar</span></div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">Totaal arbeidsverleden: <span className="text-emerald-600 font-bold">{arbeidsverleden} jaar</span></label>
            <input type="range" min="1" max="40" step="1" value={arbeidsverleden} onChange={(e) => setArbeidsverleden(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>1 jaar</span><span>40 jaar</span></div>
          </div>
        </div>
        <div className="p-6 sm:p-8 bg-stone-50 space-y-6">
          <div>
            <p className="text-sm text-stone-500 mb-1">WW-uitkering (eerste 2 maanden)</p>
            <p className="text-3xl sm:text-4xl font-bold text-emerald-600">€{formatBedrag(resultaat.eerste2Maanden)}</p>
            <p className="text-xs text-stone-400">bruto per maand (75% dagloon)</p>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Na 2 maanden (70%)</span>
              <span className="text-sm font-medium text-stone-900">€{formatBedrag(resultaat.daarna)} /mnd</span>
            </div>
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Duur WW-uitkering</span>
              <span className="text-sm font-medium text-stone-900">{resultaat.duur} maanden</span>
            </div>
            <div className="flex justify-between py-3 bg-amber-50 rounded-lg px-4 -mx-4">
              <span className="text-sm font-bold text-stone-900">Fictieve opzegtermijn</span>
              <span className="text-sm font-bold text-amber-700">{resultaat.opzegtermijn} maand{resultaat.opzegtermijn > 1 ? "en" : ""}</span>
            </div>
          </div>
          <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
            <p className="text-sm text-sky-900"><strong>Let op:</strong> Je WW start pas na afloop van de fictieve opzegtermijn van {resultaat.opzegtermijn} maand{resultaat.opzegtermijn > 1 ? "en" : ""}. Zorg dat de einddatum in je VSO hier rekening mee houdt.</p>
          </div>
          <p className="text-xs text-stone-400">Indicatieve berekening. Max dagloon 2026: €274,44. Bron: UWV.nl.</p>
        </div>
      </div>
    </div>
  );
}
