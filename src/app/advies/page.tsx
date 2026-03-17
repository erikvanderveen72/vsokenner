import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AdviesTool from "./advies-tool";

export const metadata: Metadata = {
  title: "Gratis VSO-adviestool 2026 - Persoonlijk advies in 2 minuten",
  description: "Beantwoord 6 vragen en ontvang persoonlijk advies over je vaststellingsovereenkomst. Inclusief berekening, aandachtspunten, checklist en PDF-export.",
  alternates: { canonical: "https://vsokenner.nl/advies" },
};

export const revalidate = 3600;

export default function AdviesPage() {
  return (
    <>
      <PageHero
        title="VSO-adviestool"
        badge="Gratis advies"
        highlightedSubtitle="Persoonlijk advies in 2 minuten"
        subtitle="Beantwoord 6 korte vragen over je situatie en ontvang een persoonlijk adviesrapport met berekeningen, aandachtspunten en een afvinkbare checklist. Inclusief PDF-export."
        showBreadcrumbs
        breadcrumbs={[{ label: "Adviestool", href: "/advies" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <AdviesTool />
      </section>
    </>
  );
}
