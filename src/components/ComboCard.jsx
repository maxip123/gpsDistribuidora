import React from 'react';
import { 
  Package, 
  Gift, 
  ShoppingCart, 
  Info, 
  MessageCircle, 
  Sparkles, 
  Check 
} from 'lucide-react';
import { STORE_CONFIG } from '../data/catalog';

export default function ComboCard({ product }) {
  const whatsappMessage = encodeURIComponent(
    `Hola G.P.S Distribuciones! Quisiera consultar por el ${product.name} (Cód: ${product.cod}): Comprando los 4 Skip llevás 1 Comfort Frescor Intenso 450ml de regalo.`
  );

  return (
    <div className="group relative bg-white rounded-2xl border-2 border-purple-300/80 hover:border-purple-600 hover:shadow-2xl transition-all duration-300 flex flex-col lg:flex-row overflow-hidden col-span-full shadow-md mb-2">
      
      {/* ── LEFT PANEL: PROMOTIONAL HERO BANNER ────────────────────── */}
      <div className="w-full lg:w-5/12 bg-gradient-to-br from-[#071c35] via-[#004b87] to-[#007cc7] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden text-white border-b lg:border-b-0 lg:border-r border-blue-900/30">
        
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-44 h-44 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Top Header inside Banner */}
        <div className="relative z-10 space-y-2">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            {/* Especial Unilever Pill Badge */}
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider bg-purple-600 text-white shadow-md shadow-purple-900/50 ring-1 ring-purple-300/40">
              <Sparkles className="w-3 h-3 text-purple-200" />
              {product.badgeText || "ESPECIAL UNILEVER"}
            </span>

            {/* Micro Tag */}
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-200 bg-white/10 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/15">
              Promo Combo
            </span>
          </div>

          {/* Main Headline Banner (Visual Hero) */}
          <div className="text-center pt-1 pb-1">
            <div className="inline-block bg-gradient-to-r from-rose-600 via-pink-600 to-rose-600 text-white font-black text-xs sm:text-[13px] px-3 py-1 rounded-xl uppercase tracking-tight shadow-md border border-rose-400/30">
              Comprá los 4 Skip
            </div>
            <div className="text-amber-300 font-extrabold text-sm sm:text-base tracking-tight uppercase mt-1 drop-shadow-sm flex items-center justify-center gap-1.5">
              <span>y llevate 1 Comfort de regalo</span>
              <Gift className="w-4 h-4 text-amber-300 shrink-0 inline" />
            </div>
            <div className="text-cyan-100 text-[10px] font-semibold tracking-wider uppercase opacity-90 mt-0.5">
              Ropa más limpia y fresca
            </div>
          </div>
        </div>

        {/* Visual Lineup: 4 Skips in 2x2 Grid + Featured Comfort Gift Below */}
        <div className="relative z-10 flex-1 flex flex-col justify-center space-y-3 my-2">
          
          {/* 4 Skips in 2x2 Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {product.comboIncludes?.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/95 backdrop-blur-xs rounded-xl p-2.5 shadow-sm border border-white/80 flex flex-col items-center justify-between text-center transition-transform duration-200 hover:scale-[1.03]"
              >
                <div className="w-full h-18 sm:h-22 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain drop-shadow-xs"
                  />
                </div>
                <div className="mt-1 w-full">
                  <span className="text-[10px] sm:text-[11px] font-black text-slate-800 leading-tight block">
                    {item.short || item.name}
                  </span>
                  <div className="flex items-center justify-center gap-1 mt-0.5">
                    <span className="text-[9px] font-bold text-blue-600">
                      {item.vol || "800 ml"}
                    </span>
                    <span className="text-[8px] font-semibold text-emerald-700 bg-emerald-50 px-1 py-0.2 rounded">
                      ✓
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Plus / Gift Divider Label */}
          <div className="flex items-center justify-center gap-2 py-0.5">
            <div className="h-px bg-white/25 flex-1" />
            <span className="text-amber-300 font-black text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1 drop-shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              + Llevate de Regalo
            </span>
            <div className="h-px bg-white/25 flex-1" />
          </div>

          {/* Comfort Gift Card Below (Full Width, Featured with Sello) */}
          <div className="relative bg-gradient-to-r from-white via-rose-50/70 to-white rounded-xl p-3 shadow-lg border-2 border-rose-400 ring-2 ring-rose-400/30 flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]">
            
            {/* Sello Flotante ¡DE REGALO! */}
            <div className="absolute -top-3.5 right-3 z-20">
              <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 text-white text-[9.5px] font-black uppercase tracking-tight shadow-md ring-2 ring-white animate-pulse">
                <Gift className="w-3 h-3" />
                ¡DE REGALO!
              </span>
            </div>

            <div className="w-16 h-22 sm:w-18 sm:h-24 shrink-0 bg-white rounded-lg p-1.5 border border-rose-200 shadow-2xs flex items-center justify-center">
              <img
                src={product.comboGift?.image || product.giftImage}
                alt={product.comboGift?.name || product.giftName}
                loading="lazy"
                className="max-h-full max-w-full object-contain drop-shadow-sm"
              />
            </div>

            <div className="min-w-0 flex-1 space-y-1">
              <span className="text-[9px] font-black uppercase tracking-wider text-rose-600 block">
                Suavizante Gratis
              </span>
              <span className="text-xs sm:text-sm font-black text-slate-900 leading-tight block">
                {product.comboGift?.name || product.giftName}
              </span>
              <div className="flex items-center gap-1.5 pt-0.5">
                <span className="text-[10px] font-black bg-rose-600 text-white px-2 py-0.5 rounded-md shadow-2xs uppercase tracking-tight">
                  100% Bonificado
                </span>
                <span className="text-[10px] font-extrabold text-rose-800">
                  x 450 ml
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Feature Badges */}
        <div className="relative z-10 flex items-center justify-between text-[9px] sm:text-[10px] text-cyan-100 font-semibold border-t border-white/15 pt-2">
          <div className="flex items-center gap-1">
            <Check className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Limpieza profunda</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Cuida tu ropa</span>
          </div>
          <div className="flex items-center gap-1">
            <Check className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Frescura intensa</span>
          </div>
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

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
          {product.description}
        </p>

        {/* Structured Spec Box (matching catalog mockup) */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 sm:p-3.5 space-y-2.5">
          
          {/* Incluye */}
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-blue-900 font-bold text-xs uppercase tracking-wider">
              <Package className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Incluye:</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 pl-5 text-[11px] text-slate-700 font-medium list-disc">
              {product.comboIncludes?.map((item, i) => (
                <li key={i} className="leading-tight">
                  1 {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Regalo */}
          <div className="pt-2 border-t border-slate-200/80 flex items-start gap-2">
            <Gift className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="text-[11px] font-extrabold text-rose-700 uppercase tracking-tight block">
                Regalo:
              </span>
              <span className="text-xs font-bold text-rose-950 block">
                1 {product.comboGift?.name || product.giftName}
              </span>
            </div>
          </div>

          {/* Mínimo de Compra */}
          <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <ShoppingCart className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <div>
                <span className="text-[10px] font-extrabold text-blue-950 uppercase tracking-tight block">
                  Mínimo de compra
                </span>
                <span className="text-xs font-bold text-blue-800 block">
                  {product.minOrderLabel || "1 combo completo"}
                </span>
              </div>
            </div>
            <span className="text-[10px] font-bold text-purple-700 bg-purple-100 border border-purple-200 px-2 py-0.5 rounded-lg shrink-0">
              Promo
            </span>
          </div>

          {/* Condición */}
          <div className="pt-2 border-t border-slate-200/80 flex items-start gap-1.5 text-[10.5px] text-slate-500 font-medium">
            <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
            <span>
              <strong className="text-slate-700">Condición:</strong> {product.condition}
            </span>
          </div>

        </div>

        {/* Price & Action Area - side by side on sm+ */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 pt-1 mt-auto">
          
          {/* Price Banner */}
          <div className="flex-1 bg-purple-50 border border-purple-200/80 rounded-xl p-2.5 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 block">
                Promoción Especial Unilever
              </span>
              <span className="text-sm sm:text-base font-black text-purple-950">
                Consultar Precio Combo
              </span>
            </div>
            <span className="bg-purple-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow-sm">
              COMBO
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
