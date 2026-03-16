"use client";
import { useState, useMemo } from "react";
import { berekenKostenKoper, formatBedrag } from "@/lib/calculations";

export default function KostenKoperCalculator() {
  const [koopprijs, setKoopprijs] = useState(350000);
  const [isStarter, setIsStarter] = useState(false);
  const [metNHG, setMetNHG] = useState(false);

  const resultaat = useMemo(() => {
    return berekenKostenKoper(koopprijs, isStarter, metNHG);
  }, [koopprijs, isStarter, metNHG]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
      <div className="bg-blue-600 px-6 sm:px-8 py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Kosten koper calculator 2026</h2>
        <p className="text-blue-100 text-sm mt-1">Bereken alle bijkomende kosten bij het kopen van een huis</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-stone-200">
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">Koopprijs: <span className="text-blue-600 font-bold">&euro;{koopprijs.toLocaleString("nl-NL")}</span></label>
            <input type="range" min="100000" max="800000" step="5000" value={koopprijs} onChange={(e) => setKoopprijs(parseInt(e.target.value))} className="w-full" />
            <div className="flex justify-between text-xs text-stone-400 mt-1"><span>&euro;100.000</span><span>&euro;800.000</span></div>
          </div>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={isStarter} onChange={(e) => setIsStarter(e.target.checked)} className="w-5 h-5 rounded border-stone-300 text-blue-600 focus:ring-blue-500" />
              <div>
                <span className="text-sm font-medium text-stone-900">Ik ben een starter (18-35 jaar)</span>
                <p className="text-xs text-stone-500">0% overdrachtsbelasting tot &euro;510.000</p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={metNHG} onChange={(e) => setMetNHG(e.target.checked)} className="w-5 h-5 rounded border-stone-300 text-blue-600 focus:ring-blue-500" />
              <div>
                <span className="text-sm font-medium text-stone-900">Met NHG</span>
                <p className="text-xs text-stone-500">Nationale Hypotheek Garantie (0,6% van hypotheek)</p>
              </div>
            </label>
          </div>
        </div>
        <div className="p-6 sm:p-8 bg-stone-50">
          <p className="text-sm text-stone-500 mb-1">Totale kosten koper</p>
          <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">&euro;{formatBedrag(resultaat.totaal)}</p>
          <div className="space-y-3">
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Overdrachtsbelasting {isStarter && koopprijs <= 510000 ? "(starter: 0%)" : "(2%)"}</span>
              <span className="text-sm font-medium text-stone-900">&euro;{formatBedrag(resultaat.overdrachtsbelasting)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Notaris leveringsakte</span>
              <span className="text-sm font-medium text-stone-900">&euro;{formatBedrag(resultaat.notarisLevering)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Notaris hypotheekakte</span>
              <span className="text-sm font-medium text-stone-900">&euro;{formatBedrag(resultaat.notarisHypotheek)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Taxatiekosten</span>
              <span className="text-sm font-medium text-stone-900">&euro;{formatBedrag(resultaat.taxatie)}</span>
            </div>
            <div className="flex justify-between py-3 border-b border-stone-200">
              <span className="text-sm text-stone-600">Hypotheekadvies</span>
              <span className="text-sm font-medium text-stone-900">&euro;{formatBedrag(resultaat.hypotheekAdvies)}</span>
            </div>
            {resultaat.nhgKosten > 0 && (
              <div className="flex justify-between py-3 border-b border-stone-200">
                <span className="text-sm text-stone-600">NHG-kosten (0,6%)</span>
                <span className="text-sm font-medium text-stone-900">&euro;{formatBedrag(resultaat.nhgKosten)}</span>
              </div>
            )}
            <div className="flex justify-between py-3 bg-blue-50 rounded-lg px-4 -mx-4">
              <span className="text-sm font-bold text-stone-900">Totaal kosten koper</span>
              <span className="text-xl font-bold text-blue-600">&euro;{formatBedrag(resultaat.totaal)}</span>
            </div>
          </div>
          <p className="text-xs text-stone-400 mt-6">Indicatieve berekening op basis van gemiddelde tarieven. Werkelijke kosten kunnen afwijken.</p>
        </div>
      </div>
    </div>
  );
}
