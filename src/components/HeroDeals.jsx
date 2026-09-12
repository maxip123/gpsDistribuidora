import React from 'react';
import { 
  Flame, 
  PackageCheck, 
  Sparkles,
  ShieldCheck,
  Calendar
} from 'lucide-react';

export default function HeroDeals({ 
  totalOffersCount,
  onExploreClick 
}) {
  return (
    <div className="relative w-full max-w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white py-6 sm:py-8 md:py-10 px-3 sm:px-6 lg:px-8 border-b border-slate-700/50">
      {/* Background glow contained within boundaries */}
      <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none translate-y-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl space-y-3 sm:space-y-4 text-left">
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0" />
            <span>Catálogo Virtual Mayorista</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ofertas y Promociones
          </h1>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl">
            Promociones para tu negocio con los mejores precios mayoristas y costo unitario.
          </p>

          {/* Validity badge */}
          <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700/70 rounded-xl px-3 py-1.5 sm:py-2">
            <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span className="text-slate-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Válida del</span>
            <span className="text-slate-100 text-xs sm:text-sm font-bold tracking-tight">14 al 20 de Septiembre</span>
          </div>

          {/* Clean highlights */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1">
            <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-slate-700/60 text-xs">
              <PackageCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
              <span className="font-semibold text-white">Venta Mayorista</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-slate-700/60 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400 shrink-0" />
              <span className="font-semibold text-white">Facturas</span>
            </div>

            <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-xs px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl border border-slate-700/60 text-xs">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400 shrink-0" />
              <span className="font-semibold text-white">{totalOffersCount} Ofertas</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('ofertas-diarias');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer shadow-2xs"
            >
              <Flame className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Ofertas Comprá Ahora (14 al 20 SEP)</span>
            </button>

            {onExploreClick && (
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold transition cursor-pointer"
              >
                <span>Explorar Catálogo</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
