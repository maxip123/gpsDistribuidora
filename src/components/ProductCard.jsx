import React from 'react';
import { 
  Package
} from 'lucide-react';

export default function ProductCard({ product }) {
  // Price calculations
  const unitPrice = product.priceBulto / product.bultoUnits;

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/80 hover:shadow-xl transition-all duration-200 flex flex-col justify-between overflow-hidden">
      
      {/* Card Top / Image Area */}
      <div>
        <div className="relative bg-slate-50 p-4 border-b border-slate-100 flex items-center justify-center overflow-hidden h-52">

          {/* COD / SKU Tag */}
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-white/95 backdrop-blur-xs text-slate-500 font-mono text-[11px] font-bold px-2 py-0.8 rounded-md border border-slate-200 shadow-2xs">
              COD: {product.cod}
            </span>
          </div>

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
            <span className="text-[11px] font-medium text-slate-600 bg-white/95 px-2 py-0.5 rounded-full border border-slate-200">
              {product.tag || product.categoryLabel}
            </span>
          </div>
        </div>

        {/* Product Details Area */}
        <div className="p-4 space-y-3">
          
          {/* Title */}
          <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 min-h-[2.75rem]">
            {product.name}
          </h3>

          {/* Description snippet */}
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* ============================================================= */}
          {/* PROMINENT MOQ BOX (MÍNIMO DE COMPRA POR BULTO CERRADO) */}
          {/* ============================================================= */}
          <div className="bg-blue-50/70 border-2 border-blue-200/80 rounded-xl p-2.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <Package className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="text-xs font-extrabold text-blue-950 uppercase tracking-tight">
                  Mínimo: {product.bultoUnits} {product.bultoUnitLabel}
                </span>
              </div>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                Bulto Cerrado
              </span>
            </div>
            
            {/* Unit breakdown calculation */}
            <div className="mt-1 pt-1 border-t border-blue-100 flex items-center justify-between text-[11px] text-blue-900">
              <span className="text-blue-700">Rendimiento unitario:</span>
              <span className="font-bold text-blue-950">
                ${unitPrice.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} c/u
              </span>
            </div>
          </div>

          {/* Wholesale Price Box */}
          <div className="pt-1 pb-1">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Precio Mayorista:
              </span>
            </div>

            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                ${product.priceBulto.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
              <span className="text-xs font-bold text-slate-500">
                / bulto
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
