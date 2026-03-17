import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FAQSchema from "@/components/FAQSchema";
import { FAQ_VOORBEELDEN } from "@/lib/voorbeeld-vso-data";
import VoorbeeldenContent from "./voorbeelden-content";

export const metadata: Metadata = {
  title: "Voorbeeld vaststellingsovereenkomst 2026 - 3 gratis VSO-voorbeelden met PDF",
  description:
    "Bekijk 3 voorbeelden van vaststellingsovereenkomsten: bij reorganisatie, verschil van inzicht en disfunctioneren. Inclusief toelichting per artikel en gratis PDF-download.",
  alternates: { canonical: "https://vsokenner.nl/voorbeelden" },
};

export const revalidate = 3600;

export default function VoorbeeldenPage() {
  return (
    <>
      <PageHero
        title="Voorbeeld VSO's"
        badge="Gratis voorbeelden"
        highlightedSubtitle="3 vaststellingsovereenkomsten met toelichting"
        subtitle="Bekijk realistische voorbeelden van vaststellingsovereenkomsten voor de meest voorkomende situaties. Per artikel lees je waar je op moet letten. Download elk voorbeeld als PDF."
        showBreadcrumbs
        breadcrumbs={[{ label: "Voorbeelden", href: "/voorbeelden" }]}
      />

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <VoorbeeldenContent />
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-stone-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-900 mb-8">Veelgestelde vragen over VSO-voorbeelden</h2>
          <FAQSchema items={FAQ_VOORBEELDEN} />
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Wil je weten wat jouw VSO waard is?</h2>
          <p className="text-stone-600 mb-8 max-w-xl mx-auto">Gebruik onze gratis adviestool voor persoonlijk advies op basis van jouw situatie, inclusief berekening en checklist.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/advies" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-emerald-700 transition-colors shadow-lg">Gratis adviestool</a>
            <a href="/transitievergoeding" className="border border-stone-300 text-stone-700 px-8 py-4 rounded-2xl font-semibold hover:bg-stone-50 transition-colors">Bereken je vergoeding</a>
          </div>
        </div>
      </section>
    </>
  );
}
