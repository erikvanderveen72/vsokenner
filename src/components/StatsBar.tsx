"use client";
import { useEffect, useRef, useState } from "react";
import { Clock, Calculator, Briefcase, Scale, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Clock, Calculator, Briefcase, Scale };

interface Stat { label: string; value: string; icon: string; }

export default function StatsBar({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative z-10 -mt-8 mx-4 sm:mx-6 lg:mx-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-stone-200 p-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={i} className={`flex items-center gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="bg-emerald-50 p-3 rounded-xl shrink-0">{Icon && <Icon size={24} className="text-emerald-600" />}</div>
                <div><p className="text-xl sm:text-2xl font-bold text-stone-900">{stat.value}</p><p className="text-xs sm:text-sm text-stone-500">{stat.label}</p></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
