import React from 'react';
import { 
  Package,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { STORE_CONFIG } from '../data/catalog';

export default function ProductCard({ product }) {
  // Price calculations
  const unitPrice = product.bultoUnits > 0 && product.priceBulto > 0
    ? product.priceBulto / product.bultoUnits
    : (product.unitPrice || product.precio || 0);

  const isFreeOrPromo = !product.priceBulto || product.priceBulto === 0;

  const whatsappMessage = encodeURIComponent(
    `Hola G.P.S Distribuciones! Quisiera consultar por la oferta: ${product.name} (${product.description || ''})`
  );

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/80 hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden">

      {/* ── IMAGE AREA ─────────────────────────────────────────────── */}
      <div className="relative bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-center overflow-hidden h-52">

        {/* Badge */}
        {product.badgeText && (
          <div className="absolute top-3 left-3 z-10">
            <span className={`inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-tight shadow-xs ${
              product.badgeType === 'hot'
                ? 'bg-rose-500 text-white'
                : 'bg-amber-400 text-amber-950'
            }`}>
              <Sparkles className="w-3 h-3" />
              {product.badgeText}
            </span>
          </div>
        )}

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80";
          }}
        />

        {/* Category Tag pill */}
        <div className="absolute bottom-2 left-3">
          <span className="text-[11px] font-medium text-slate-600 bg-white/95 px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs">
            {product.tag || product.categoria || product.categoryLabel}
          </span>
        </div>
      </div>

      {/* ── DETAILS AREA (flex-1 so price stays at bottom) ─────────── */}
      <div className="p-4 flex flex-col flex-1 space-y-3">

        {/* Title */}
        <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 min-h-[2.75rem]">
          {product.name}
        </h3>

        {/* Description for priced products / spacer for promos */}
        {!isFreeOrPromo ? (
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        ) : (
          <div className="flex-1" />
        )}

        {/* MOQ BOX */}
        <div className="bg-blue-50/70 border-2 border-blue-200/80 rounded-xl p-2.5">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-1.5">
              <Package className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-extrabold text-blue-950 uppercase tracking-tight leading-tight block">
                  Mínimo de compra
                </span>
                <span className="text-[11px] font-bold text-blue-800 leading-tight block">
                  {product.bultoUnitLabel}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded shrink-0 whitespace-nowrap">
              {product.bultoUnits > 1 ? 'Bulto Cerrado' : 'Promo'}
            </span>
          </div>

          <div className="mt-1.5 pt-1.5 border-t border-blue-100 flex items-center justify-between gap-2 text-[11px] text-blue-900">
            <span className="text-blue-700 shrink-0">
              {isFreeOrPromo ? 'Condición:' : 'Rendimiento:'}
            </span>
            <span className="font-bold text-blue-950 text-right">
              {isFreeOrPromo
                ? product.description
                : `$${unitPrice.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} c/u`
              }
            </span>
          </div>
        </div>

        {/* PRICE BOX */}
        <div className="pt-1">
          {isFreeOrPromo ? (
            <div className="bg-rose-50/80 border border-rose-200 rounded-xl p-2.5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">
                  Promoción Especial
                </span>
                <span className="text-lg font-extrabold text-rose-950">
                  Consultar Precio
                </span>
              </div>
              <span className="bg-rose-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-2xs">
                PROMO
              </span>
            </div>
          ) : (
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Precio Mayorista:
              </span>
              <div className="flex items-baseline gap-1.5 mt-0.5">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  ${product.priceBulto.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  / bulto
                </span>
              </div>
            </div>
          )}
        </div>

      </div>

      {/* ── WHATSAPP BUTTON ─────────────────────────────────────────── */}
      <div className="p-4 pt-0">
        <a
          href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-xl text-xs transition-colors duration-200 shadow-2xs"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Consultar por WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
