"use client";
import { useState, useCallback, useRef } from "react";
import { ChevronRight, ChevronLeft, CheckCircle, AlertTriangle, Shield, Download, ArrowRight, Clock, Euro, Briefcase, Scale, FileText } from "lucide-react";
import { stappen, genereerAdvies, type VSOAntwoorden, type AdviesResultaat, type Aandachtspunt, type ChecklistItem } from "@/lib/advies-logic";

const defaultAntwoorden: VSOAntwoorden = {
  heeftVSOOntvangen: "ja",
  dienstjaren: 5,
  brutoSalaris: 4000,
  redenOntslag: "verschilVanInzicht",
  concurrentiebeding: "weetNiet",
  alGetekend: "nee",
  dagenSindsOntvangst: 0,
  werkgeverBiedtVergoeding: "onduidelijk",
};

function fmt(n: number) {
  return n.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ─── Stappen flow ───

function StappenFlow({ onComplete }: { onComplete: (a: VSOAntwoorden) => void }) {
  const [huidigeStap, setHuidigeStap] = useState(0);
  const [antwoorden, setAntwoorden] = useState<VSOAntwoorden>(defaultAntwoorden);
  const stap = stappen[huidigeStap];
  const isLaatsteStap = huidigeStap === stappen.length - 1;

  const updateAntwoord = useCallback((veld: keyof VSOAntwoorden, waarde: string | number) => {
    setAntwoorden((prev) => ({ ...prev, [veld]: waarde }));
  }, []);

  const volgende = () => {
    if (isLaatsteStap) {
      onComplete(antwoorden);
    } else {
      setHuidigeStap((s) => s + 1);
    }
  };

  const vorige = () => setHuidigeStap((s) => Math.max(0, s - 1));

  return (
    <div className="max-w-2xl mx-auto">
      {/* Voortgangsbalk */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-stone-500">Vraag {huidigeStap + 1} van {stappen.length}</span>
          <span className="text-sm font-medium text-emerald-600">{Math.round(((huidigeStap + 1) / stappen.length) * 100)}%</span>
        </div>
        <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full transition-all duration-500 ease-out" style={{ width: `${((huidigeStap + 1) / stappen.length) * 100}%` }} />
        </div>
        {/* Stap indicators */}
        <div className="flex justify-between mt-3">
          {stappen.map((_, i) => (
            <button
              key={i}
              onClick={() => i < huidigeStap && setHuidigeStap(i)}
              className={`w-8 h-8 rounded-full text-xs font-bold flex items-center justify-center transition-all ${
                i < huidigeStap ? "bg-emerald-500 text-white cursor-pointer hover:bg-emerald-600" :
                i === huidigeStap ? "bg-emerald-100 text-emerald-700 ring-2 ring-emerald-500" :
                "bg-stone-100 text-stone-400"
              }`}
            >
              {i < huidigeStap ? <CheckCircle size={14} /> : i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Vraag */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-lg p-6 sm:p-8 min-h-[320px] flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">{stap.titel}</h3>
        <p className="text-sm text-stone-500 mb-6">{stap.beschrijving}</p>

        <div className="flex-1">
          {stap.type === "keuze" && stap.opties && (
            <div className="space-y-3">
              {stap.opties.map((optie) => {
                const isSelected = antwoorden[stap.veldNaam] === optie.value;
                return (
                  <button
                    key={optie.value}
                    onClick={() => updateAntwoord(stap.veldNaam, optie.value)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      isSelected
                        ? "border-emerald-500 bg-emerald-50 shadow-sm"
                        : "border-stone-200 hover:border-stone-300 hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        isSelected ? "border-emerald-500 bg-emerald-500" : "border-stone-300"
                      }`}>
                        {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <div>
                        <p className={`font-medium ${isSelected ? "text-emerald-900" : "text-stone-700"}`}>{optie.label}</p>
                        {optie.toelichting && <p className="text-xs text-stone-400 mt-0.5">{optie.toelichting}</p>}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {stap.type === "slider" && stap.sliderConfig && (
            <div className="space-y-6 pt-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-emerald-600">
                  {stap.sliderConfig.prefix}{(antwoorden[stap.veldNaam] as number).toLocaleString("nl-NL")}{stap.sliderConfig.eenheid && ` ${stap.sliderConfig.eenheid}`}
                </p>
              </div>
              <input
                type="range"
                min={stap.sliderConfig.min}
                max={stap.sliderConfig.max}
                step={stap.sliderConfig.step}
                value={antwoorden[stap.veldNaam] as number}
                onChange={(e) => updateAntwoord(stap.veldNaam, parseInt(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-stone-400">
                <span>{stap.sliderConfig.prefix}{stap.sliderConfig.min.toLocaleString("nl-NL")}{stap.sliderConfig.eenheid && ` ${stap.sliderConfig.eenheid}`}</span>
                <span>{stap.sliderConfig.prefix}{stap.sliderConfig.max.toLocaleString("nl-NL")}{stap.sliderConfig.eenheid && ` ${stap.sliderConfig.eenheid}`}</span>
              </div>
            </div>
          )}
        </div>

        {/* Navigatie */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
          <button
            onClick={vorige}
            disabled={huidigeStap === 0}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              huidigeStap === 0 ? "text-stone-300 cursor-not-allowed" : "text-stone-600 hover:bg-stone-100"
            }`}
          >
            <ChevronLeft size={16} /> Vorige
          </button>
          <button
            onClick={volgende}
            className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
          >
            {isLaatsteStap ? "Bekijk advies" : "Volgende"} <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Resultaat weergave ───

function PrioriteitBadge({ prioriteit }: { prioriteit: string }) {
  const cls = prioriteit === "hoog" ? "bg-red-100 text-red-700" : prioriteit === "midden" ? "bg-amber-100 text-amber-700" : "bg-stone-100 text-stone-600";
  return <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${cls}`}>{prioriteit}</span>;
}

function ResultaatWeergave({ resultaat, antwoorden, onOpnieuw }: { resultaat: AdviesResultaat; antwoorden: VSOAntwoorden; onOpnieuw: () => void }) {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const rapportRef = useRef<HTMLDivElement>(null);

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index); else next.add(index);
      return next;
    });
  };

  const exportPDF = async () => {
    if (!rapportRef.current) return;
    // Dynamisch jsPDF laden
    const { default: jsPDF } = await import("jspdf");
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const margin = 20;
    let y = margin;
    const pageW = 210 - margin * 2;

    // Helper: tekst met automatische regels
    const schrijf = (tekst: string, size: number, bold: boolean, color: [number, number, number] = [30, 30, 30]) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setTextColor(...color);
      const lines = doc.splitTextToSize(tekst, pageW);
      for (const line of lines) {
        if (y > 270) { doc.addPage(); y = margin; }
        doc.text(line, margin, y);
        y += size * 0.45;
      }
      y += 2;
    };

    const lijn = () => {
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, y, 210 - margin, y);
      y += 6;
    };

    // Header
    schrijf("VSO-kenner.nl — Persoonlijk adviesrapport", 18, true, [5, 150, 105]);
    schrijf(`Gegenereerd op ${new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}`, 9, false, [120, 120, 120]);
    y += 4;
    lijn();

    // Samenvatting
    schrijf("Samenvatting", 14, true);
    schrijf(resultaat.samenvatting, 10, false);
    y += 4;

    // Financieel overzicht
    schrijf("Financieel overzicht", 14, true);
    schrijf(`Bruto transitievergoeding: €${fmt(resultaat.brutoTransitievergoeding)}`, 10, false);
    schrijf(`Loonheffing (${(resultaat.effectiefTarief * 100).toFixed(1)}%): - €${fmt(resultaat.belasting)}`, 10, false);
    schrijf(`Netto transitievergoeding: €${fmt(resultaat.nettoTransitievergoeding)}`, 10, true, [5, 150, 105]);
    y += 2;
    schrijf(`WW-uitkering eerste 2 maanden: €${fmt(resultaat.wwEerste2Maanden)} bruto/mnd`, 10, false);
    schrijf(`WW-uitkering daarna: €${fmt(resultaat.wwDaarna)} bruto/mnd`, 10, false);
    schrijf(`WW-duur: ${resultaat.wwDuur} maanden`, 10, false);
    schrijf(`Fictieve opzegtermijn: ${resultaat.fictieveOpzegtermijn} maand${resultaat.fictieveOpzegtermijn > 1 ? "en" : ""}`, 10, false);
    y += 4;
    lijn();

    // Aandachtspunten
    schrijf("Aandachtspunten", 14, true);
    for (const punt of resultaat.aandachtspunten) {
      const pLabel = punt.prioriteit === "hoog" ? "(!)" : punt.prioriteit === "midden" ? "(i)" : "";
      schrijf(`${pLabel} ${punt.titel}`, 10, true);
      schrijf(punt.beschrijving, 9, false, [80, 80, 80]);
      y += 2;
    }
    lijn();

    // Checklist
    schrijf("Checklist", 14, true);
    for (const item of resultaat.checklist) {
      const checked = checkedItems.has(resultaat.checklist.indexOf(item)) ? "☑" : "☐";
      schrijf(`${checked} ${item.tekst}`, 10, false);
    }
    y += 6;

    // Disclaimer
    schrijf("Disclaimer: Dit rapport is indicatief en geen juridisch advies. Raadpleeg altijd een arbeidsrechtadvocaat.", 8, false, [150, 150, 150]);
    schrijf("Bron: vsokenner.nl — Onafhankelijke informatie over vaststellingsovereenkomsten", 8, false, [150, 150, 150]);

    doc.save("vso-adviesrapport.pdf");
  };

  const risicoKleur = resultaat.risicoscore <= 3 ? "text-emerald-600" : resultaat.risicoscore <= 6 ? "text-amber-600" : "text-red-600";
  const risicoLabel = resultaat.risicoscore <= 3 ? "Laag risico" : resultaat.risicoscore <= 6 ? "Gemiddeld risico" : "Hoog risico";
  const risicoBg = resultaat.risicoscore <= 3 ? "bg-emerald-500" : resultaat.risicoscore <= 6 ? "bg-amber-500" : "bg-red-500";

  return (
    <div ref={rapportRef} className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-lg p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">Jouw persoonlijk VSO-advies</h2>
            <p className="text-stone-500 text-sm">Op basis van je antwoorden. Gegenereerd op {new Date().toLocaleDateString("nl-NL")}.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={exportPDF} className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg">
              <Download size={16} /> Download PDF
            </button>
            <button onClick={onOpnieuw} className="flex items-center gap-2 border border-stone-300 text-stone-700 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-stone-50 transition-colors">
              Opnieuw
            </button>
          </div>
        </div>

        {/* Samenvatting + risico */}
        <div className="bg-stone-50 rounded-xl p-5 mb-6">
          <p className="text-stone-700 leading-relaxed">{resultaat.samenvatting}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-stone-500">Risicoscore:</span>
          <div className="flex-1 h-3 bg-stone-200 rounded-full overflow-hidden">
            <div className={`h-full ${risicoBg} rounded-full transition-all`} style={{ width: `${resultaat.risicoscore * 10}%` }} />
          </div>
          <span className={`text-sm font-bold ${risicoKleur}`}>{resultaat.risicoscore}/10 — {risicoLabel}</span>
        </div>
      </div>

      {/* Financieel */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
        <div className="bg-emerald-600 px-6 sm:px-8 py-5">
          <h3 className="text-xl font-bold text-white flex items-center gap-2"><Euro size={20} /> Financieel overzicht</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-0 sm:divide-x divide-stone-200">
          <div className="p-6 sm:p-8">
            <p className="text-sm text-stone-500 mb-1">Bruto transitievergoeding</p>
            <p className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-4">€{fmt(resultaat.brutoTransitievergoeding)}</p>
            <div className="space-y-2">
              <div className="flex justify-between py-2 border-b border-stone-100">
                <span className="text-sm text-stone-500">Loonheffing ({(resultaat.effectiefTarief * 100).toFixed(1)}%)</span>
                <span className="text-sm text-red-600">- €{fmt(resultaat.belasting)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-sm font-bold text-stone-900">Netto vergoeding</span>
                <span className="text-lg font-bold text-emerald-600">€{fmt(resultaat.nettoTransitievergoeding)}</span>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8 bg-stone-50 space-y-4">
            <div className="flex items-center gap-3">
              <Briefcase size={18} className="text-stone-400 shrink-0" />
              <div>
                <p className="text-sm text-stone-500">WW eerste 2 maanden</p>
                <p className="font-bold text-stone-900">€{fmt(resultaat.wwEerste2Maanden)} <span className="text-xs text-stone-400 font-normal">bruto/mnd</span></p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Briefcase size={18} className="text-stone-400 shrink-0" />
              <div>
                <p className="text-sm text-stone-500">WW daarna (70%)</p>
                <p className="font-bold text-stone-900">€{fmt(resultaat.wwDaarna)} <span className="text-xs text-stone-400 font-normal">bruto/mnd</span></p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={18} className="text-stone-400 shrink-0" />
              <div>
                <p className="text-sm text-stone-500">Duur WW</p>
                <p className="font-bold text-stone-900">{resultaat.wwDuur} maanden</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Scale size={18} className="text-amber-500 shrink-0" />
              <div>
                <p className="text-sm text-stone-500">Fictieve opzegtermijn</p>
                <p className="font-bold text-amber-700">{resultaat.fictieveOpzegtermijn} maand{resultaat.fictieveOpzegtermijn > 1 ? "en" : ""}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Aandachtspunten */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
        <div className="bg-amber-500 px-6 sm:px-8 py-5">
          <h3 className="text-xl font-bold text-white flex items-center gap-2"><AlertTriangle size={20} /> Aandachtspunten</h3>
        </div>
        <div className="p-6 sm:p-8 space-y-4">
          {resultaat.aandachtspunten.sort((a, b) => {
            const ord = { hoog: 0, midden: 1, laag: 2 };
            return ord[a.prioriteit] - ord[b.prioriteit];
          }).map((punt, i) => (
            <div key={i} className={`p-4 rounded-xl border ${
              punt.prioriteit === "hoog" ? "border-red-200 bg-red-50" :
              punt.prioriteit === "midden" ? "border-amber-200 bg-amber-50" :
              "border-stone-200 bg-stone-50"
            }`}>
              <div className="flex items-start justify-between gap-3 mb-1">
                <h4 className="font-semibold text-stone-900">{punt.titel}</h4>
                <PrioriteitBadge prioriteit={punt.prioriteit} />
              </div>
              <p className="text-sm text-stone-600 leading-relaxed">{punt.beschrijving}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
        <div className="bg-sky-600 px-6 sm:px-8 py-5">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <CheckCircle size={20} /> Checklist
            <span className="ml-auto text-sm font-normal text-sky-100">{checkedItems.size}/{resultaat.checklist.length} afgevinkt</span>
          </h3>
        </div>
        <div className="p-6 sm:p-8 space-y-2">
          {resultaat.checklist.map((item, i) => (
            <button
              key={i}
              onClick={() => toggleCheck(i)}
              className={`w-full flex items-start gap-3 p-3 rounded-lg text-left transition-all ${
                checkedItems.has(i) ? "bg-emerald-50 line-through text-stone-400" : "hover:bg-stone-50"
              }`}
            >
              <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                checkedItems.has(i) ? "bg-emerald-500 border-emerald-500" : "border-stone-300"
              }`}>
                {checkedItems.has(i) && <CheckCircle size={12} className="text-white" />}
              </div>
              <span className="text-sm">{item.tekst}</span>
              {!checkedItems.has(i) && <PrioriteitBadge prioriteit={item.prioriteit} />}
            </button>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-stone-100 rounded-2xl p-6 text-center">
        <p className="text-xs text-stone-400">Dit advies is indicatief en geen juridisch advies. Raadpleeg altijd een arbeidsrechtadvocaat voor je persoonlijke situatie. Bron: vsokenner.nl — onafhankelijke informatie over vaststellingsovereenkomsten.</p>
      </div>
    </div>
  );
}

// ─── Main component ───

export default function AdviesTool() {
  const [fase, setFase] = useState<"vragen" | "resultaat">("vragen");
  const [antwoorden, setAntwoorden] = useState<VSOAntwoorden>(defaultAntwoorden);
  const [resultaat, setResultaat] = useState<AdviesResultaat | null>(null);

  const handleComplete = (a: VSOAntwoorden) => {
    setAntwoorden(a);
    const res = genereerAdvies(a);
    setResultaat(res);
    setFase("resultaat");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpnieuw = () => {
    setFase("vragen");
    setResultaat(null);
    setAntwoorden(defaultAntwoorden);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {fase === "vragen" && <StappenFlow onComplete={handleComplete} />}
      {fase === "resultaat" && resultaat && (
        <ResultaatWeergave resultaat={resultaat} antwoorden={antwoorden} onOpnieuw={handleOpnieuw} />
      )}
    </>
  );
}
