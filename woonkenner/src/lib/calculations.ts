// Woonkenner.nl — Berekeningsfuncties
// Bron: Nibud, Rijksoverheid.nl — per 1 januari 2026

import {
  HYPOTHEEK_INKOMENSFACTOR_2026,
  OVERDRACHTSBELASTING_WONING,
  OVERDRACHTSBELASTING_STARTER,
  OVERDRACHTSBELASTING_STARTER_GRENS,
  NHG_PREMIE,
  NHG_KOSTENGRENS_2026,
} from "./fallback-data";

/**
 * Berekent de indicatieve maximale hypotheek op basis van inkomen
 */
export function berekenMaxHypotheek(brutoJaarinkomen: number, partnerInkomen: number = 0): number {
  const totaalInkomen = brutoJaarinkomen + partnerInkomen;
  return Math.round(totaalInkomen * HYPOTHEEK_INKOMENSFACTOR_2026);
}

/**
 * Berekent de maandelijkse hypotheeklasten (annuïteit)
 */
export function berekenMaandlasten(hypotheekBedrag: number, rentePercentage: number, looptijdJaren: number = 30): number {
  const maandRente = rentePercentage / 12;
  const aantalTermijnen = looptijdJaren * 12;

  if (maandRente === 0) return hypotheekBedrag / aantalTermijnen;

  const annuiteit = hypotheekBedrag * (maandRente * Math.pow(1 + maandRente, aantalTermijnen)) / (Math.pow(1 + maandRente, aantalTermijnen) - 1);
  return Math.round(annuiteit * 100) / 100;
}

/**
 * Berekent de overdrachtsbelasting
 */
export function berekenOverdrachtsbelasting(koopprijs: number, isStarter: boolean = false): number {
  if (isStarter && koopprijs <= OVERDRACHTSBELASTING_STARTER_GRENS) {
    return koopprijs * OVERDRACHTSBELASTING_STARTER;
  }
  return Math.round(koopprijs * OVERDRACHTSBELASTING_WONING);
}

/**
 * Berekent de totale kosten koper (indicatief)
 */
export function berekenKostenKoper(koopprijs: number, isStarter: boolean = false, metNHG: boolean = false): {
  overdrachtsbelasting: number;
  notarisLevering: number;
  notarisHypotheek: number;
  taxatie: number;
  hypotheekAdvies: number;
  nhgKosten: number;
  totaal: number;
} {
  const overdrachtsbelasting = berekenOverdrachtsbelasting(koopprijs, isStarter);
  const notarisLevering = 950; // gemiddelde
  const notarisHypotheek = 950; // gemiddelde
  const taxatie = 600; // gemiddelde
  const hypotheekAdvies = 2500; // gemiddelde
  const nhgKosten = metNHG && koopprijs <= NHG_KOSTENGRENS_2026 ? Math.round(koopprijs * NHG_PREMIE) : 0;

  const totaal = overdrachtsbelasting + notarisLevering + notarisHypotheek + taxatie + hypotheekAdvies + nhgKosten;

  return {
    overdrachtsbelasting,
    notarisLevering,
    notarisHypotheek,
    taxatie,
    hypotheekAdvies,
    nhgKosten,
    totaal: Math.round(totaal),
  };
}

/**
 * Berekent indicatieve energiebesparing per jaar
 */
export function berekenEnergiebesparing(huidigLabel: string, nieuwLabel: string): number {
  const labelWaarden: Record<string, number> = {
    "G": 3500, "F": 3000, "E": 2500, "D": 2000, "C": 1500, "B": 1100, "A": 800, "A+": 500, "A++": 300, "A+++": 150, "A++++": 0,
  };
  const huidig = labelWaarden[huidigLabel] ?? 2000;
  const nieuw = labelWaarden[nieuwLabel] ?? 800;
  return Math.max(0, huidig - nieuw);
}

/**
 * Format een getal als Nederlands valuta
 */
export function formatBedrag(bedrag: number, decimalen: number = 0): string {
  return bedrag.toLocaleString("nl-NL", {
    minimumFractionDigits: decimalen,
    maximumFractionDigits: decimalen,
  });
}

/**
 * Format als percentage
 */
export function formatPercentage(waarde: number): string {
  return (waarde * 100).toLocaleString("nl-NL", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }) + "%";
}
