import Breadcrumbs from "./Breadcrumbs";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlightedSubtitle?: string;
  badge?: string;
  showBreadcrumbs?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, highlightedSubtitle, badge, showBreadcrumbs = false, breadcrumbs }: PageHeroProps) {
  return (
    <div className="relative overflow-hidden bg-stone-900 pt-16">
      <div className="absolute top-0 -left-40 w-80 h-80 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-20 -right-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-sky-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {showBreadcrumbs && breadcrumbs && <div className="mb-8"><Breadcrumbs items={breadcrumbs} /></div>}
        {badge && (<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"><div className="w-2 h-2 bg-emerald-400 rounded-full" /><span className="text-stone-300 text-sm font-medium">{badge}</span></div>)}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">{title}</h1>
        {highlightedSubtitle && <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent mb-4">{highlightedSubtitle}</p>}
        {subtitle && <p className="text-lg sm:text-xl text-stone-400 max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
