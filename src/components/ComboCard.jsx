import React from 'react';
import { 
  Package, 
  Gift, 
  ShoppingCart, 
  Info, 
  MessageCircle, 
  Sparkles 
} from 'lucide-react';
import { STORE_CONFIG } from '../data/catalog';

export default function ComboCard({ product }) {
  const whatsappMessage = encodeURIComponent(
    `Hola G.P.S Distribuciones! Quisiera consultar por el ${product.name} (Cód: ${product.cod})${product.giftName ? `: comprando todo el combo para acceder al regalo de ${product.giftName}.` : product.discount ? `: comprando los 20 para acceder al ${product.discount} de descuento.` : '.'}`
  );

  return (
    <div className="group relative bg-white rounded-2xl border-2 border-purple-300/80 hover:border-purple-600 hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row overflow-hidden col-span-full shadow-md mb-2">
      
      {/* ── LEFT PANEL: PROMOTIONAL HERO BANNER ────────────────────── */}
      <div className="w-full lg:w-5/12 bg-gradient-to-br from-[#071c35] via-[#004b87] to-[#007cc7] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden text-white border-b lg:border-b-0 lg:border-r border-blue-900/30">
        
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header inside Banner */}
        <div className="relative z-10">
          <div className="flex items-center justify-between gap-2 flex-wrap pb-1">
            {/* Pill Badge */}
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider bg-purple-600 text-white shadow-md shadow-purple-900/50 ring-1 ring-purple-300/40">
              <Sparkles className="w-3 h-3 text-purple-200" />
              {product.badgeText || "PROMO COMBO"}
            </span>

            {/* Micro Tag */}
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-200 bg-white/10 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/15">
              Promo Combo
            </span>
          </div>
        </div>

        {/* Visual Lineup: Products in Grid + Featured Gift Below */}
        <div className="relative z-10 flex-1 flex flex-col justify-center space-y-3 my-2">
          
          {/* Products in Grid */}
          <div className={`grid gap-2 ${product.comboIncludes?.length > 4 ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2'}`}>
            {product.comboIncludes?.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/95 backdrop-blur-xs rounded-xl p-2 shadow-sm border border-white/80 flex flex-col items-center justify-between text-center transition-transform duration-200 hover:scale-[1.03]"
              >
                <div className="w-full h-16 sm:h-20 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain drop-shadow-xs"
                  />
                </div>
                <div className="mt-1 w-full space-y-0.5">
                  <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight block truncate">
                    {item.short || item.name}
                  </span>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[9.5px] font-extrabold text-blue-700 bg-blue-50 border border-blue-200/50 px-1.5 py-0.5 rounded">
                      {item.qty || item.vol}
                    </span>
                  </div>
                  {item.priceBase && (
                    <div className="text-[9.5px] font-bold text-slate-700 bg-slate-100/90 rounded px-1 py-0.5 mt-0.5 leading-tight border border-slate-200/60">
                      <span className="text-slate-500 font-medium block text-[8px] uppercase tracking-wider">Precio Base</span>
                      <span className="text-slate-950 font-black">${item.priceBase}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Plus / Gift Divider or Discount Divider */}
          {product.giftName ? (
            <>
              {/* Plus / Gift Divider Label */}
              <div className="flex items-center justify-center gap-2 py-0.5">
                <div className="h-px bg-white/25 flex-1" />
                <span className="text-amber-300 font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1 drop-shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  REGALO
                </span>
                <div className="h-px bg-white/25 flex-1" />
              </div>

              {/* Gift Card Below (Full Width, Featured with Sello) */}
              <div className="relative bg-gradient-to-r from-white via-rose-50/70 to-white rounded-xl p-3 shadow-lg border-2 border-rose-400 ring-2 ring-rose-400/30 flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]">
                
                {/* Sello Flotante ¡DE REGALO! */}
                <div className="absolute -top-3.5 right-3 z-20">
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 text-white text-[9.5px] font-black uppercase tracking-tight shadow-md ring-2 ring-white animate-pulse">
                    <Gift className="w-3 h-3" />
                    ¡DE REGALO!
                  </span>
                </div>

                <div className="w-16 h-20 sm:w-18 sm:h-22 shrink-0 bg-white rounded-lg p-1.5 border border-rose-200 shadow-2xs flex items-center justify-center">
                  <img
                    src={product.comboGift?.image || product.giftImage}
                    alt={product.comboGift?.name || product.giftName}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain drop-shadow-sm"
                  />
                </div>

                <div className="min-w-0 flex-1 space-y-1">
                  <span className="text-xs sm:text-sm font-black text-slate-900 leading-tight block">
                    {product.comboGift?.name || product.giftName}
                  </span>
                  {product.giftQtyLabel && (
                    <span className="text-[10px] font-extrabold text-rose-800 block">
                      {product.giftQtyLabel}
                    </span>
                  )}
                </div>

              </div>
            </>
          ) : product.discount ? (
            <>
              {/* Discount Divider Label */}
              <div className="flex items-center justify-center gap-2 py-0.5">
                <div className="h-px bg-white/25 flex-1" />
                <span className="text-amber-300 font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1 drop-shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  DESCUENTO EXCLUSIVO
                </span>
                <div className="h-px bg-white/25 flex-1" />
              </div>

              {/* Discount Banner Below (matching flyer red circle 10% Descuento) */}
              <div className="relative bg-gradient-to-r from-white via-rose-50/80 to-white rounded-xl p-3 shadow-lg border-2 border-rose-400 ring-2 ring-rose-400/30 flex items-center justify-center gap-3.5 transition-transform duration-200 hover:scale-[1.02]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full bg-gradient-to-br from-red-600 via-rose-600 to-red-700 text-white flex flex-col items-center justify-center text-center shadow-md border-2 border-white ring-2 ring-red-400/40 p-1">
                  <span className="text-base sm:text-lg font-black leading-none text-center">
                    {product.discount ? product.discount.replace(/\s*off/i, '').trim() : '10%'}
                  </span>
                  <span className="text-[8px] sm:text-[8.5px] font-extrabold uppercase tracking-tight leading-none mt-1 text-center">
                    Descuento
                  </span>
                </div>

                <div className="min-w-0 space-y-0.5">
                  <span className="text-xs sm:text-sm font-black text-slate-900 leading-tight block">
                    {product.discountTitle || `${product.discount} en el total del combo`}
                  </span>
                  <span className="text-[10.5px] font-extrabold text-rose-700 block">
                    Comprando los 20 (5 de cada uno)
                  </span>
                </div>
              </div>
            </>
          ) : null}

        </div>


      </div>

      {/* ── RIGHT PANEL: COMMERCIAL DETAILS & SPECS ────────────────── */}
      <div className="w-full lg:w-7/12 p-4 sm:p-5 lg:p-6 flex flex-col justify-between bg-white space-y-3.5">
        
        {/* Top bar with Category and Code */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] font-bold text-purple-700 bg-purple-50 border border-purple-200 px-2.5 py-0.5 rounded-full">
              {product.categoryLabel || "Ofertas de la Semana"}
            </span>
            <span className="text-[11px] font-mono font-bold text-slate-400">
              Cód: {product.cod}
            </span>
          </div>

          <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl md:text-2xl tracking-tight leading-snug mt-1.5 group-hover:text-purple-700 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Structured Spec Box (matching flyer cleanly) */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 sm:p-3.5 space-y-2.5">
          
          {/* COMPRANDO */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-blue-900 font-bold text-xs uppercase tracking-wider">
              <Package className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>COMPRANDO:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11.5px]">
              {product.comboIncludes?.map((item, i) => (
                <div key={i} className="flex items-center justify-between gap-2 bg-white p-2 rounded-lg border border-slate-200/90 shadow-2xs">
                  <div className="min-w-0 flex items-center gap-1.5">
                    <span className="inline-flex items-center justify-center font-black text-[10px] text-blue-700 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded shrink-0">
                      {item.qty}
                    </span>
                    <span className="font-bold text-slate-800 truncate text-[11.5px]">
                      {item.name}
                    </span>
                  </div>
                  {item.priceBase && (
                    <div className="text-right shrink-0">
                      <span className="text-[8.5px] font-semibold text-slate-400 uppercase block leading-none">Base</span>
                      <span className="text-xs font-black text-slate-900">
                        ${item.priceBase}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* BENEFICIO: REGALO O DESCUENTO */}
          {product.giftName ? (
            <div className="pt-2 border-t border-slate-200/80 flex items-start gap-2 bg-rose-50/70 p-2.5 rounded-xl border border-rose-200/60">
              <Gift className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[11px] font-extrabold text-rose-700 uppercase tracking-tight block">
                  REGALO:
                </span>
                <span className="text-xs sm:text-sm font-black text-rose-950 block">
                  {product.comboGift?.name || product.giftName}
                </span>
              </div>
            </div>
          ) : product.discount ? (
            <div className="pt-2 border-t border-slate-200/80 flex items-start gap-2 bg-rose-50/70 p-2.5 rounded-xl border border-rose-200/60">
              <Sparkles className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              <div className="min-w-0">
                <span className="text-[11px] font-extrabold text-rose-700 uppercase tracking-tight block">
                  BENEFICIO COMBO:
                </span>
                <span className="text-xs sm:text-sm font-black text-rose-950 block">
                  {product.discountTitle || `${product.discount} en el total del combo comprando los 20 productos`}
                </span>
              </div>
            </div>
          ) : null}

        </div>

        {/* Price & Action Area - side by side on sm+ */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 pt-1 mt-auto">
          
          {/* Price Banner */}
          <div className="flex-1 bg-purple-50 border border-purple-200/80 rounded-xl p-2.5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 block">
                {product.brandLabel || "Promoción Especial Unilever"}
              </span>
              <span className="text-sm sm:text-base font-black text-purple-950">
                Consultar Precio Combo
              </span>
            </div>
            <span className="bg-purple-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-sm">
              {product.discount || "COMBO"}
            </span>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-emerald-700 text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors duration-200 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Consultar por WhatsApp</span>
          </a>

        </div>

      </div>

    </div>
  );
}
