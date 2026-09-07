import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import { STORE_CONFIG } from '../data/catalog';

export default function NewArrivalsSection({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <section id="nuevos-ingresos" className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
      {/* Header Container */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/90 shadow-xs mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80 shrink-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Toallas Húmedas Daddy
                </h2>
                <span className="bg-amber-100 text-amber-950 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md border border-amber-300 uppercase tracking-tight">
                  Nuevos Ingresos
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Línea hipoalergénica para bebés • Consultá precios y disponibilidad por WhatsApp
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent('Hola G.P.S Distribuciones! Quisiera consultar por la lista de precios de las Toallas Húmedas Daddy.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-2 rounded-xl transition-all shadow-2xs active:scale-95 shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-slate-950" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* 4 Cards Grid - Compact and responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id || product.cod} product={product} />
        ))}
      </div>
    </section>
  );
}
