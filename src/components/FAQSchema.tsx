"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem { question: string; answer: string; }

export default function FAQSchema({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="border border-stone-200 rounded-lg overflow-hidden hover:border-emerald-400 transition-colors">
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex justify-between items-center p-4 sm:p-5 text-left font-medium text-stone-900 hover:bg-stone-50 transition-colors">
              <span className="pr-4">{item.question}</span>
              <ChevronDown className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`} />
            </button>
            {openIndex === i && <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-stone-600 leading-relaxed">{item.answer}</div>}
          </div>
        ))}
      </div>
    </>
  );
}
