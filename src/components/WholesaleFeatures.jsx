import React from 'react';
import { 
  Package, 
  Truck, 
  Phone, 
  Percent,
  FileDown
} from 'lucide-react';
import { STORE_CONFIG } from '../data/catalog';

export default function WholesaleFeatures() {
  return (
    <section className="w-full max-w-full overflow-hidden bg-slate-100/70 border-t border-slate-200 py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Banner informativo de ofertas */}
        <div className="w-full rounded-2xl bg-gradient-to-r from-red-600 via-red-600 to-red-500 py-4 px-6 text-center shadow-md border border-red-500/30">
          <p className="text-white text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
            Ofertas válidas durante la semana de promoción.
            <br />
            Sujetas a disponibilidad de stock al momento de la compra.
          </p>
        </div>

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

        {/* Banner de descarga de catálogo completo y WhatsApp */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl p-5 sm:p-7 flex flex-col lg:flex-row items-center justify-between gap-5 border border-slate-800 shadow-lg">
          <div className="space-y-1.5 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[11px] font-bold uppercase tracking-wider">
              <span>Catálogo PDF Oficial 2026</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-white">
              ¿Querés tener el catálogo completo en tu negocio o celular?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Descargá el catálogo oficial de G.P.S Distribuciones con todas las líneas de productos, marcas y unidades por bulto cerrado para consultar sin conexión en cualquier momento.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto shrink-0">
            <a
              href={STORE_CONFIG.catalogPdfUrl}
              download={STORE_CONFIG.catalogPdfFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md hover:shadow-blue-500/25 border border-blue-400/30 active:scale-95 cursor-pointer"
            >
              <FileDown className="w-4 h-4 text-blue-200 group-hover:translate-y-0.5 transition-transform" />
              <span>Descargar Catálogo PDF</span>
            </a>

            <a
              href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=Hola%20G.P.S%20Distribuciones!%20Quisiera%20consultar%20por%20un%20producto%20específico.`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-slate-950 shrink-0" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
