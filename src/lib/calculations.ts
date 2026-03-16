// VSO-kenner.nl — Berekeningsfuncties
// Bron: UWV.nl, Rijksoverheid.nl — per 1 januari 2026

import { belastingSchijven2026, WW_MAX_DAGLOON_2026, WW_PERCENTAGE_EERSTE_2_MAANDEN, WW_PERCENTAGE_DAARNA, WW_MAX_DUUR_MAANDEN } from "./fallback-data";

/**
 * Berekent de bruto transitievergoeding
 * Formule: (bruto maandsalaris / 12) × dienstjaren in maanden × (1/3)
 * Ofwel: bruto maandsalaris × dienstjaren × 1/3
 */
export function berekenTransitievergoeding(brutoMaandsalaris: number, dienstjaren: number): number {
  // Inclusief vakantietoeslag (8%)
  const maandsalarisInclVakantie = brutoMaandsalaris * 1.08;
  return Math.round((maandsalarisInclVakantie / 3) * dienstjaren * 100) / 100;
}

/**
 * Berekent de netto transitievergoeding na belasting
 */
export function berekenNettoVergoeding(brutoVergoeding: number): {
  netto: number;
  belasting: number;
  effectiefTarief: number;
} {
  let belasting = 0;
  let resterend = brutoVergoeding;

  for (const schijf of belastingSchijven2026) {
    if (resterend <= 0) break;
    const bovengrensBereik = schijf.tot !== null ? schijf.tot - schijf.van : Infinity;
    const belastbaarInSchijf = Math.min(resterend, bovengrensBereik);
    belasting += belastbaarInSchijf * schijf.tarief;
    resterend -= belastbaarInSchijf;
  }

  const netto = brutoVergoeding - belasting;
  const effectiefTarief = brutoVergoeding > 0 ? belasting / brutoVergoeding : 0;

  return {
    netto: Math.round(netto * 100) / 100,
    belasting: Math.round(belasting * 100) / 100,
    effectiefTarief: Math.round(effectiefTarief * 10000) / 10000,
  };
}

/**
 * Berekent de fictieve opzegtermijn in maanden
 */
export function berekenFictieveOpzegtermijn(dienstjaren: number): number {
  if (dienstjaren < 5) return 1;
  if (dienstjaren < 10) return 2;
  if (dienstjaren < 15) return 3;
  return 4;
}

/**
 * Berekent de WW-uitkering (bruto per maand)
 */
export function berekenWWUitkering(brutoMaandsalaris: number): {
  eerste2Maanden: number;
  daarna: number;
  maxDuurMaanden: number;
} {
  // Dagloon = bruto maandsalaris × 12 / 261 werkdagen
  const dagloon = Math.min((brutoMaandsalaris * 12) / 261, WW_MAX_DAGLOON_2026);

  // Maanduitkering = dagloon × 21.75 (gemiddeld werkdagen per maand)
  const maandBasis = dagloon * 21.75;

  return {
    eerste2Maanden: Math.round(maandBasis * WW_PERCENTAGE_EERSTE_2_MAANDEN * 100) / 100,
    daarna: Math.round(maandBasis * WW_PERCENTAGE_DAARNA * 100) / 100,
    maxDuurMaanden: WW_MAX_DUUR_MAANDEN,
  };
}

/**
 * Berekent de duur van de WW-uitkering in maanden
 */
export function berekenWWDuur(arbeidsverledenJaren: number): number {
  return Math.min(arbeidsverledenJaren, WW_MAX_DUUR_MAANDEN);
}

/**
 * Format een getal als Nederlands valuta
 * KRITIEK: Gebruik ALTIJD toLocaleString, NOOIT toFixed
 */
export function formatBedrag(bedrag: number, decimalen: number = 2): string {
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
