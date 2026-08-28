import React, { useState } from 'react';
import { 
  Package, 
  Truck, 
  HelpCircle, 
  ChevronDown, 
  Phone, 
  Percent
} from 'lucide-react';
import { STORE_CONFIG } from '../data/catalog';

const FAQS = [
  {
    q: "¿Cómo consultar o realizar pedidos a partir del catálogo?",
    a: "Podés tocar el botón 'Consultar Producto' en cualquier artículo o escribirnos directo al WhatsApp de ventas. Te confirmaremos stock en el acto y te enviaremos la cotización formal."
  },
  {
    q: "¿Los precios son por bulto cerrado?",
    a: "Sí, todos los precios mostrados corresponden a bulto cerrado original de fábrica. Cada tarjeta indica la cantidad mínima de unidades por bulto y el costo unitario de referencia."
  },
  {
    q: "¿Emiten Factura A y B?",
    a: "Sí, emitimos Factura A oficial para responsables inscriptos y Factura B. Podés solicitarla al momento de coordinar el pedido."
  },
  {
    q: "¿Cómo se coordinan los despachos y envíos?",
    a: "Coordinamos entregas directas en AMBA y despachos al interior del país a través del transporte o expreso que elijas."
  }
];

export default function WholesaleFeatures() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="w-full max-w-full overflow-hidden bg-slate-100/70 border-t border-slate-200 py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* 3 Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Atención Mayorista Directa
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Catálogo digital pensado para facilitar la consulta y reposición de stock de tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                Bulto Cerrado Original
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mercadería directa de fábrica en embalaje original, con fechas de vencimiento largas y garantía.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                Precios Actualizados
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Listas actualizadas semanalmente para que obtengas el mejor margen de ganancia comercial.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                Despachos y Repartos
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Entregas en AMBA y envíos a todo el país vía expreso. Coordinación rápida por WhatsApp.
              </p>
            </div>

          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-4 sm:p-6 md:p-8 border border-slate-200 shadow-xs">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Preguntas Frecuentes
            </h3>
          </div>

          <div className="divide-y divide-slate-100">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="py-3">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left gap-3 group cursor-pointer"
                  >
                    <span className="font-bold text-slate-800 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* WhatsApp direct consult banner */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 border border-slate-800 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-white">
              ¿Buscás algún producto o marca que no está en el catálogo?
            </h3>
            <p className="text-xs text-slate-300">
              Escribinos por WhatsApp y consultá por el listado completo de artículos y stock.
            </p>
          </div>

          <a
            href={`https://wa.me/${STORE_CONFIG.phone.replace(/[^0-9]/g, '')}?text=Hola%20G.P.S%20Distribuciones!%20Quisiera%20consultar%20por%20un%20producto%20específico.`}
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 shrink-0"
          >
            <Phone className="w-4 h-4 fill-slate-950 shrink-0" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
