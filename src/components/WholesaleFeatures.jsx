import React from 'react';
import { 
  Package, 
  Truck, 
  Phone, 
  Percent
} from 'lucide-react';
import { STORE_CONFIG } from '../data/catalog';

export default function WholesaleFeatures() {
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
            
            {/* Card 1: Bulto Cerrado */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                Bulto Cerrado
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Venta exclusiva por bulto cerrado para abastecer tu negocio y maximizar el margen de reventa.
              </p>
            </div>

            {/* Card 2: Precios Actualizados */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                <Percent className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                Precios Actualizados
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Listas mayoristas al día pensadas para brindarte siempre la mejor competitividad en tus compras.
              </p>
            </div>

            {/* Card 3: Envíos en 48 Horas */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                Envíos en 48 Horas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Despachamos tu pedido para que te llegue en 48 horas hábiles directo a tu local o expreso de preferencia.
              </p>
            </div>

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
            href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=Hola%20G.P.S%20Distribuciones!%20Quisiera%20consultar%20por%20un%20producto%20específico.`}
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
