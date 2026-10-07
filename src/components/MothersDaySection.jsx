import React from 'react';
import { 
  Heart, 
  MessageCircle 
} from 'lucide-react';
import { MOTHERS_DAY_COMBOS } from '../data/mothersDayOffers';
import { STORE_CONFIG } from '../data/catalog';

export default function MothersDaySection() {

  const buildWhatsappLink = (combo) => {
    const itemsList = combo.items.map(it => `• ${it.qty} ${it.name}`).join('\n');
    const message = `Hola ${STORE_CONFIG.name}! 👋\n` +
      `Quisiera consultar por el *${combo.badgeLabel}: ${combo.title}* de la promo *Especial Día de la Madre* (${combo.discount}):\n\n` +
      `${itemsList}\n\n` +
      `💰 *Precio Final:* $${combo.priceFinal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}\n` +
      `📦 ¿Tienen stock disponible para entrega? Muchas gracias!`;
    return `https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent(message)}`;
  };

  // Asegura que los números y unidades (ej: "150 ml", "50 ml", "100 gr") nunca se separen de renglón
  const renderProductName = (name) => {
    const parts = name.split(/(\d+\s*(?:ml|gr|g|cc))/gi);
    return parts.map((part, index) => {
      if (/^\d+\s*(?:ml|gr|g|cc)$/i.test(part)) {
        return (
          <span key={index} className="whitespace-nowrap font-bold">
            {part.replace(/\s+/g, '\u00A0')}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section 
      id="especial-dia-de-la-madre" 
      className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8"
      aria-label="Especial Día de la Madre"
    >
      {/* ── COMPACT CONTAINER ───────────────────────────────────────── */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-rose-200/90 shadow-xs">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 mb-5 border-b border-rose-100">
          
          {/* Title & Badge */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-xs shrink-0">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Especial Día de la Madre
                </h2>
                <span className="bg-gradient-to-r from-red-600 to-rose-600 text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md shadow-2xs uppercase tracking-tight">
                  11% OFF en 4 Combos
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Promociones exclusivas · Precios finales hasta agotar stock
              </p>
            </div>
          </div>

          {/* Quick Header CTA */}
          <a
            href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent('Hola G.P.S Distribuciones! Quisiera consultar por las promos del Especial Día de la Madre.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-colors shadow-2xs active:scale-95 shrink-0 self-start md:self-auto"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Consultar Todas las Promos</span>
          </a>

        </div>

        {/* ── 4 COMPACT COMBOS IN A CLEAN RESPONSIVE ROW ──────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MOTHERS_DAY_COMBOS.map((combo) => (
            <article 
              key={combo.id}
              className="group bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/90 hover:border-rose-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between overflow-hidden p-3.5 sm:p-4 text-slate-900"
            >
              <div className="flex-1 flex flex-col">
                {/* Header Tag with Combo & Discount */}
                <div className="flex items-center justify-between gap-1.5 pb-2.5 border-b border-slate-200/70">
                  <div className="flex items-center gap-1.5 min-w-0 flex-1">
                    <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded shadow-2xs uppercase tracking-wider shrink-0 whitespace-nowrap">
                      {combo.badgeLabel}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase truncate">
                      {combo.brand}
                    </span>
                  </div>
                  <span className="bg-rose-100 text-rose-800 text-[10.5px] font-black px-2 py-0.5 rounded-full border border-rose-300 shrink-0 whitespace-nowrap">
                    {combo.discount}
                  </span>
                </div>

                {/* Combo Title */}
                <h3 className="font-black text-slate-900 text-sm sm:text-base uppercase tracking-tight mt-2.5 leading-snug line-clamp-1 group-hover:text-rose-700 transition-colors">
                  {combo.title}
                </h3>

                {/* Compact Product Lineup */}
                <div className="mt-2.5 bg-white rounded-xl p-2.5 border border-slate-200/70 shadow-2xs flex items-end justify-center gap-2">
                  <div className="flex items-end justify-center gap-1 sm:gap-2 h-24 sm:h-28 w-full py-1">
                    {combo.items.map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center justify-end max-w-[32%] h-full">
                        <span className="bg-red-600 text-white text-[8.5px] font-black px-1.5 py-0.2 rounded-full mb-1">
                          {item.qty}
                        </span>
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="max-h-16 sm:max-h-20 max-w-full object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Included Items List (Full text without ellipsis, uniform flex alignment) */}
                <div className="mt-3 space-y-1.5 flex-1 flex flex-col justify-start">
                  <div className="flex items-center justify-between text-[10px] font-extrabold uppercase text-slate-500 mb-0.5">
                    <span>Incluye ({combo.totalUnits}u):</span>
                  </div>
                  {combo.items.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-1.5 text-[10.5px] sm:text-[11px] leading-snug text-slate-700 bg-white/85 px-2 py-1.5 rounded-lg border border-slate-200/60 min-h-[34px]"
                    >
                      <span className="font-black text-red-600 text-[10px] shrink-0 mt-0.5">
                        {item.qty}
                      </span>
                      <span className="font-semibold text-slate-800 break-words">
                        {renderProductName(item.name)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA Section */}
              <div className="mt-4 pt-3 border-t border-slate-200/70 space-y-2.5">
                
                {/* Price Display */}
                <div className="flex items-end justify-between gap-1">
                  <div>
                    <span className="text-[9.5px] font-bold text-slate-400 uppercase block leading-none">
                      Antes
                    </span>
                    <span className="text-xs font-bold text-slate-400 line-through decoration-red-500 decoration-1">
                      ${combo.priceBefore.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[9px] font-black text-rose-600 uppercase block leading-none">
                      PRECIO FINAL
                    </span>
                    <span className="text-lg sm:text-xl font-black text-slate-950 tracking-tight leading-tight">
                      ${combo.priceFinal.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                {/* WhatsApp Order Button */}
                <a
                  href={buildWhatsappLink(combo)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-2 px-3 rounded-xl text-xs transition-colors shadow-2xs active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Pedir {combo.badgeLabel}</span>
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>

    </section>
  );
}
