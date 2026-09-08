import React from 'react';
import { 
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { STORE_CONFIG } from '../data/catalog';
import ComboCard from './ComboCard';

export default function ProductCard({ product }) {
  if (product.isCombo) {
    return <ComboCard product={product} />;
  }

  // Price calculations
  const unitPrice = product.unitPrice || product.precio || (
    product.bultoUnits > 0 && product.priceBulto > 0
      ? product.priceBulto / product.bultoUnits
      : 0
  );

  const isFreeOrPromo = !unitPrice || unitPrice === 0;

  const discountText = product.discount || (
    (product.condicion || product.descripcion || product.description || '')
      .match(/(\d+%\s*(?:DE\s*)?DESC|\d+%\s*OFF|\d+%)/i)?.[0]
  );

  const whatsappMessage = encodeURIComponent(
    product.noPrice
      ? `Hola G.P.S Distribuciones! Quisiera consultar por el nuevo ingreso: ${product.name}`
      : `Hola G.P.S Distribuciones! Quisiera consultar por la oferta: ${product.name} (${product.description || ''})`
  );

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/80 hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden">

      {/* ── IMAGE AREA ─────────────────────────────────────────────── */}
      <div className={`relative bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-center overflow-hidden ${product.noPrice ? 'h-48' : 'h-52'}`}>

        {/* Badge */}
        {product.badgeText && (
          <div className="absolute top-3 left-3 z-10">
            <span className={`inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-tight shadow-xs ${
              product.badgeType === 'new' || (product.badgeText && product.badgeText.toUpperCase().includes('NUEVO'))
                ? 'bg-amber-400 text-amber-950 font-black shadow-md shadow-amber-400/25 border border-amber-300'
                : product.badgeType === 'unilever' || product.badgeType === 'purple' || (product.badgeText && (product.badgeText.toUpperCase().includes('UNILEVER') || product.badgeText.toUpperCase().includes('ESPECIAL')))
                ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/30 ring-1 ring-purple-300/40'
                : product.badgeType === 'hot'
                ? 'bg-rose-500 text-white'
                : 'bg-amber-400 text-amber-950 shadow-xs'
            }`}>
              <Sparkles className="w-3 h-3" />
              {product.badgeText}
            </span>
          </div>
        )}

        {/* Product Image(s) */}
        {product.images && product.images.length > 1 ? (
          <div className={`grid gap-1.5 w-full px-2 h-44 ${product.images.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
            {product.images.map((src, i) => (
              <div key={i} className="relative w-full h-full">
                <img
                  src={src}
                  alt={`${product.name} variante ${i + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80";
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="max-h-44 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&auto=format&fit=crop&q=80";
            }}
          />
        )}

        {/* Category Tag pill */}
        <div className="absolute bottom-2 left-3">
          <span className="text-[11px] font-medium text-slate-600 bg-white/95 px-2 py-0.5 rounded-full border border-slate-200 shadow-2xs">
            {product.tag || product.categoria || product.categoryLabel}
          </span>
        </div>

        {/* Gift product thumbnail */}
        {product.giftImage && (
          <div className="absolute bottom-2 right-2 flex flex-col items-center gap-0.5 max-w-[72px]">
            <span className="text-[9px] font-extrabold text-rose-600 uppercase tracking-tight leading-none">🎁 Regalo</span>
            <div className="w-16 h-16 rounded-xl border-2 border-rose-400 bg-white shadow-md overflow-hidden flex items-center justify-center">
              <img
                src={product.giftImage}
                alt={product.giftName || "Producto de regalo"}
                loading="lazy"
                className="w-full h-full object-contain p-0.5"
              />
            </div>
          </div>
        )}
      </div>

      {/* ── DETAILS AREA (flex-1 so price stays at bottom) ─────────── */}
      <div className="p-4 flex flex-col flex-1 space-y-3">

        {/* Brand label */}
        {product.brandLabel && (
          <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
            <span>⭐</span>
            <span>{product.brandLabel}</span>
          </div>
        )}

        {/* Title */}
        <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition-colors">
          {product.name}
          {product.giftName && (
            <span className="block text-xs font-semibold text-rose-600 mt-0.5">
              + {product.giftName} de regalo
            </span>
          )}
        </h3>

        {/* CONDICION - Recuadro light blue estilizado (solo si tiene condición) */}
        {(product.condicion || product.descripcion || product.description) && (
          <div className="bg-blue-50/80 border border-blue-200/90 rounded-xl p-2.5 flex items-center justify-between gap-2 text-xs sm:text-[13px]">
            <span className="font-bold text-blue-700 shrink-0">
              Condición:
            </span>
            <span className="font-black text-blue-950 tracking-tight text-right uppercase">
              {product.condicion || product.descripcion || product.description}
            </span>
          </div>
        )}

        {/* PRICE BOX - SIEMPRE FIJADO ARRIBA DEL BOTON CON mt-auto (solo si tiene precio) */}
        {!product.noPrice && (
          <div className="mt-auto pt-2">
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
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  {product.priceLabel ? `${product.priceLabel}:` : 'Precio por Unidad:'}
                </span>
                <div className="flex items-baseline flex-wrap gap-1.5 mt-0.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    ${unitPrice.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    c/u
                  </span>
                  {discountText && (
                    <span className="ml-1 inline-flex items-center text-xs font-black text-rose-600 bg-rose-50 border border-rose-200/90 px-2 py-0.5 rounded-lg shadow-2xs">
                      {discountText}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

      </div>

      {/* ── WHATSAPP BUTTON ─────────────────────────────────────────── */}
      <div className={`p-4 pt-0 ${product.noPrice ? 'mt-auto' : ''}`}>
        <a
          href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${whatsappMessage}`}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-colors duration-200 shadow-2xs"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>Consultar por WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
