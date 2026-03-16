// Verzekeringskenner.nl — Berekeningsfuncties
// Indicatieve premieberekeningen voor vergelijkingsdoeleinden — 2026

import { zorgverzekeringPremies2026, eigenRisicoBedragen } from "./fallback-data";

/**
 * Berekent een indicatieve zorgverzekeringspremie per maand
 */
export function berekenZorgpremie(
  basisverzekering: boolean,
  aanvullend: "geen" | "basis" | "uitgebreid" | "compleet",
  eigenRisico: number
): { premie: number; eigenRisicoBesparing: number } {
  let premie = basisverzekering ? zorgverzekeringPremies2026.basis : 0;

  if (aanvullend === "basis") premie += zorgverzekeringPremies2026.aanvullendBasis;
  else if (aanvullend === "uitgebreid") premie += zorgverzekeringPremies2026.aanvullendUitgebreid;
  else if (aanvullend === "compleet") premie += zorgverzekeringPremies2026.aanvullendCompleet;

  // Hoger eigen risico = lagere premie
  const eigenRisicoBesparing = eigenRisicoBedragen[eigenRisico] || 0;
  premie -= eigenRisicoBesparing;

  return {
    premie: Math.round(premie * 100) / 100,
    eigenRisicoBesparing: Math.round(eigenRisicoBesparing * 100) / 100,
  };
}

/**
 * Berekent een indicatieve autoverzekeringspremie per maand
 */
export function berekenAutopremie(
  waarde: number,
  type: "wa" | "wa-plus" | "allrisk",
  leeftijdBestuurder: number,
  schadevrij: number
): number {
  // Basispremie per type
  const basispremies = { wa: 35, "wa-plus": 55, allrisk: 85 };
  let premie = basispremies[type];

  // Waarde-opslag voor casco
  if (type === "wa-plus") premie += waarde * 0.002;
  if (type === "allrisk") premie += waarde * 0.004;

  // Leeftijdcorrectie (jonge bestuurders betalen meer)
  if (leeftijdBestuurder < 24) premie *= 1.6;
  else if (leeftijdBestuurder < 30) premie *= 1.2;

  // Schadevrije jaren korting (max 80% bij 15+ jaar)
  const korting = Math.min(schadevrij * 0.053, 0.80);
  premie *= (1 - korting);

  return Math.round(premie * 100) / 100;
}

/**
 * Berekent een indicatieve inboedelverzekeringspremie per maand
 */
export function berekenInboedelpremie(
  waarde: number,
  woontype: "appartement" | "tussenwoning" | "hoekwoning" | "vrijstaand"
): number {
  const factoren = { appartement: 0.0008, tussenwoning: 0.0010, hoekwoning: 0.0012, vrijstaand: 0.0015 };
  const factor = factoren[woontype];
  const premie = (waarde * factor) / 12;
  return Math.round(premie * 100) / 100;
}

/**
 * Berekent een indicatieve opstalverzekeringspremie per maand
 */
export function berekenOpstalPremie(
  herbouwwaarde: number,
  bouwjaar: number
): number {
  let factor = 0.0006;
  const huidigJaar = 2026;

  // Oudere woningen hebben hogere premie
  if (bouwjaar < 1960) factor = 0.0012;
  else if (bouwjaar < 1980) factor = 0.0010;
  else if (bouwjaar < 2000) factor = 0.0008;
  else if (huidigJaar - bouwjaar <= 10) factor = 0.0005;

  const premie = (herbouwwaarde * factor) / 12;
  return Math.round(premie * 100) / 100;
}

/**
 * Format een getal als Nederlands valuta
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
