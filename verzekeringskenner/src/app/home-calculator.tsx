"use client";
import { useState, useMemo } from "react";
import { berekenZorgpremie, formatBedrag } from "@/lib/calculations";
import { EIGEN_RISICO_VERPLICHT_2026 } from "@/lib/fallback-data";

export default function HomeCalculator() {
  const [aanvullend, setAanvullend] = useState<"geen" | "basis" | "uitgebreid" | "compleet">("basis");
  const [vrijwilligEigenRisico, setVrijwilligEigenRisico] = useState(0);

  const resultaat = useMemo(() => {
    return berekenZorgpremie(true, aanvullend, vrijwilligEigenRisico);
  }, [aanvullend, vrijwilligEigenRisico]);

  const jaarlijksePremie = resultaat.premie * 12;
  const totaalEigenRisico = EIGEN_RISICO_VERPLICHT_2026 + vrijwilligEigenRisico;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-200">
      <div className="bg-blue-600 px-6 sm:px-8 py-6">
        <h3 className="text-2xl font-bold text-white">Zorgverzekering calculator</h3>
        <p className="text-blue-100 text-sm mt-1">Bereken snel je indicatieve maandpremie</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-stone-200">
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">Aanvullende verzekering</label>
            <div className="grid grid-cols-2 gap-2">
              {(["geen", "basis", "uitgebreid", "compleet"] as const).map((optie) => (
                <button
                  key={optie}
                  onClick={() => setAanvullend(optie)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                    aanvullend === optie
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-stone-600 border-stone-200 hover:border-blue-300"
                  }`}
                >
                  {optie.charAt(0).toUpperCase() + optie.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-900 mb-3">
              Vrijwillig eigen risico: <span className="text-blue-600 font-bold">€{vrijwilligEigenRisico}</span>
            </label>
            <input
              type="range"
              min="0"
              max="500"
              step="100"
              value={vrijwilligEigenRisico}
              onChange={(e) => setVrijwilligEigenRisico(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-stone-400 mt-1">
              <span>€0</span>
              <span>€500</span>
            </div>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-stone-50">
          <p className="text-sm text-stone-500 mb-2">Indicatieve maandpremie</p>
          <p className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">€{formatBedrag(resultaat.premie)}</p>
          <div className="space-y-3">
            <div className="flex justify-between py-2 border-b border-stone-200">
              <span className="text-sm text-stone-600">Jaarpremie</span>
              <span className="text-sm font-medium text-stone-900">€{formatBedrag(jaarlijksePremie)}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-200">
              <span className="text-sm text-stone-600">Verplicht eigen risico</span>
              <span className="text-sm font-medium text-stone-900">€{EIGEN_RISICO_VERPLICHT_2026}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-stone-200">
              <span className="text-sm text-stone-600">Totaal eigen risico</span>
              <span className="text-sm font-medium text-stone-900">€{totaalEigenRisico}</span>
            </div>
            {resultaat.eigenRisicoBesparing > 0 && (
              <div className="flex justify-between py-2">
                <span className="text-sm font-semibold text-stone-900">Premiekorting eigen risico</span>
                <span className="text-lg font-bold text-green-600">- €{formatBedrag(resultaat.eigenRisicoBesparing)}/mnd</span>
              </div>
            )}
          </div>
          <p className="text-xs text-stone-400 mt-4">Indicatieve berekening op basis van gemiddelde premies 2026.</p>
        </div>
      </div>
    </div>
  );
}
