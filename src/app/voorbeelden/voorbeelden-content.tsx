"use client";
import { useState } from "react";
import { Download, FileText, ChevronDown, ChevronUp, AlertTriangle, Building2, Users, UserX, ArrowRight, Info } from "lucide-react";
import { vsoVoorbeelden, type VSOVoorbeeld, type VSOArtikel } from "@/lib/voorbeeld-vso-data";

const iconMap: Record<string, typeof FileText> = {
  reorganisatie: Building2,
  "verschil-van-inzicht": Users,
  disfunctioneren: UserX,
};

function ArtikelCard({ artikel, isOpen, toggle }: { artikel: VSOArtikel; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border border-stone-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-stone-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
            {artikel.nummer}
          </span>
          <h4 className="font-semibold text-stone-900">{artikel.titel}</h4>
        </div>
        {isOpen ? <ChevronUp size={18} className="text-stone-400 shrink-0" /> : <ChevronDown size={18} className="text-stone-400 shrink-0" />}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-stone-100">
          <div className="mt-4 bg-stone-50 rounded-lg p-4 text-sm text-stone-700 leading-relaxed italic">
            &ldquo;{artikel.inhoud}&rdquo;
          </div>
          {artikel.toelichting && (
            <div className="mt-3 flex gap-2 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">{artikel.toelichting}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function VoorbeeldCard({ voorbeeld }: { voorbeeld: VSOVoorbeeld }) {
  const [openArtikelen, setOpenArtikelen] = useState<Set<number>>(new Set([1]));
  const [alleOpen, setAlleOpen] = useState(false);
  const Icon = iconMap[voorbeeld.id] || FileText;

  const toggleArtikel = (nr: number) => {
    setOpenArtikelen((prev) => {
      const next = new Set(prev);
      if (next.has(nr)) next.delete(nr);
      else next.add(nr);
      return next;
    });
  };

  const toggleAlle = () => {
    if (alleOpen) {
      setOpenArtikelen(new Set());
    } else {
      setOpenArtikelen(new Set(voorbeeld.artikelen.map((a) => a.nummer)));
    }
    setAlleOpen(!alleOpen);
  };

  const downloadPDF = async () => {
    const { default: jsPDF } = await import("jspdf");
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const margin = 20;
    let y = margin;
    const pageW = 210 - margin * 2;

    const schrijf = (tekst: string, size: number, bold: boolean, color: [number, number, number] = [30, 30, 30]) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setTextColor(...color);
      const lines = doc.splitTextToSize(tekst, pageW);
      for (const line of lines) {
        if (y > 270) {
          doc.addPage();
          y = margin;
        }
        doc.text(line, margin, y);
        y += size * 0.45;
      }
      y += 2;
    };

    const lijn = () => {
      if (y > 270) {
        doc.addPage();
        y = margin;
      }
      doc.setDrawColor(200, 200, 200);
      doc.line(margin, y, 210 - margin, y);
      y += 6;
    };

    // Header
    schrijf("VASTSTELLINGSOVEREENKOMST", 18, true, [5, 150, 105]);
    schrijf(`Voorbeeld: ${voorbeeld.situatie}`, 11, false, [100, 100, 100]);
    y += 2;
    schrijf(`Bron: vsokenner.nl — ${new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}`, 9, false, [150, 150, 150]);
    y += 4;
    lijn();

    // Inleiding
    schrijf("De ondergetekenden:", 11, true);
    y += 2;
    schrijf("1.  [Naam werkgever], gevestigd te [plaatsnaam], hierna te noemen 'Werkgever';", 10, false);
    schrijf("en", 10, false);
    schrijf("2.  [Naam werknemer], wonende te [plaatsnaam], hierna te noemen 'Werknemer';", 10, false);
    y += 2;
    schrijf("hierna gezamenlijk te noemen 'Partijen';", 10, false);
    y += 2;
    schrijf("Overwegende dat:", 11, true);
    schrijf(`- Werknemer sinds [datum indiensttreding] in dienst is van Werkgever in de functie van [functie];`, 10, false);
    schrijf(`- ${voorbeeld.beschrijving.split(".")[0]};`, 10, false);
    schrijf("- Partijen in overleg tot overeenstemming zijn gekomen over de beeindiging van het dienstverband;", 10, false);
    y += 2;
    schrijf("Komen overeen als volgt:", 11, true);
    y += 4;
    lijn();

    // Artikelen
    for (const artikel of voorbeeld.artikelen) {
      schrijf(`Artikel ${artikel.nummer} — ${artikel.titel}`, 11, true);
      schrijf(artikel.inhoud, 10, false);
      y += 4;
    }

    lijn();

    // Ondertekening
    schrijf("Aldus overeengekomen en in tweevoud ondertekend te [plaatsnaam] op [datum].", 10, false);
    y += 8;
    schrijf("Werkgever:", 10, true);
    schrijf("Naam: ____________________________", 10, false);
    schrijf("Handtekening: ____________________________", 10, false);
    y += 6;
    schrijf("Werknemer:", 10, true);
    schrijf("Naam: ____________________________", 10, false);
    schrijf("Handtekening: ____________________________", 10, false);
    y += 8;

    // Disclaimer
    lijn();
    schrijf("DISCLAIMER", 9, true, [150, 150, 150]);
    schrijf("Dit is een voorbeelddocument van vsokenner.nl en geen juridisch advies. Elke situatie is anders. Laat een vaststellingsovereenkomst altijd beoordelen door een arbeidsrechtadvocaat voordat je tekent.", 8, false, [150, 150, 150]);

    doc.save(`voorbeeld-vso-${voorbeeld.id}.pdf`);
  };

  return (
    <div id={voorbeeld.id} className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-br ${voorbeeld.kleur} px-6 sm:px-8 py-6 sm:py-8`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-white/80 p-3 rounded-xl shrink-0">
              <Icon size={28} className={voorbeeld.iconColor} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">{voorbeeld.titel}</h3>
              <p className="text-stone-600 mt-1">{voorbeeld.situatie}</p>
            </div>
          </div>
          <button
            onClick={downloadPDF}
            className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors shadow-lg shrink-0"
          >
            <Download size={16} /> Download PDF
          </button>
        </div>
        <p className="text-sm text-stone-600 mt-4 leading-relaxed">{voorbeeld.beschrijving}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {voorbeeld.kenmerken.map((k) => (
            <span key={k} className="bg-white/70 text-stone-700 text-xs font-medium px-3 py-1.5 rounded-full">
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* Artikelen */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-bold text-stone-900">Artikelen ({voorbeeld.artikelen.length})</h4>
          <button onClick={toggleAlle} className="text-sm text-emerald-600 font-medium hover:text-emerald-700 transition-colors">
            {alleOpen ? "Alles inklappen" : "Alles uitklappen"}
          </button>
        </div>
        <div className="space-y-3">
          {voorbeeld.artikelen.map((artikel) => (
            <ArtikelCard
              key={artikel.nummer}
              artikel={artikel}
              isOpen={openArtikelen.has(artikel.nummer)}
              toggle={() => toggleArtikel(artikel.nummer)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function VoorbeeldenContent() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Intro + disclaimer */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 mb-8 flex gap-3">
        <AlertTriangle size={20} className="text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-amber-900 mb-1">Let op: dit zijn voorbeelden, geen juridisch advies</p>
          <p className="text-sm text-amber-800 leading-relaxed">
            Onderstaande voorbeelden geven je inzicht in hoe een vaststellingsovereenkomst eruitziet. Gebruik ze als referentie bij het beoordelen van je eigen VSO. Elke situatie is anders — laat je VSO altijd beoordelen door een arbeidsrechtadvocaat.
          </p>
        </div>
      </div>

      {/* Quick nav */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {vsoVoorbeelden.map((v) => {
          const Icon = iconMap[v.id] || FileText;
          return (
            <a
              key={v.id}
              href={`#${v.id}`}
              className={`bg-gradient-to-br ${v.kleur} border border-stone-200 rounded-xl p-4 hover:shadow-md transition-all group`}
            >
              <Icon size={22} className={`${v.iconColor} mb-2`} />
              <p className="font-semibold text-stone-900 text-sm">{v.titel}</p>
              <p className="text-xs text-stone-500 mt-1">{v.artikelen.length} artikelen</p>
              <span className="text-emerald-600 text-xs font-medium flex items-center gap-1 mt-2 group-hover:gap-2 transition-all">
                Bekijk <ArrowRight size={12} />
              </span>
            </a>
          );
        })}
      </div>

      {/* Voorbeelden */}
      <div className="space-y-10">
        {vsoVoorbeelden.map((v) => (
          <VoorbeeldCard key={v.id} voorbeeld={v} />
        ))}
      </div>
    </div>
  );
}
