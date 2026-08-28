import React from 'react';
import logoImg from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="w-full max-w-full overflow-hidden bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Brand Presentation */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img 
              src={logoImg} 
              alt="G.P.S Distribuciones Logo" 
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-amber-400 shrink-0"
            />
            <div className="text-left min-w-0">
              <h4 className="text-white font-extrabold text-sm sm:text-base tracking-tight leading-tight truncate">
                G.P.S <span className="text-blue-500">Distribuciones</span>
              </h4>
              <p className="text-slate-400 text-[11px] sm:text-xs">Catálogo Virtual Mayorista</p>
            </div>
          </div>

          {/* Copyright and note */}
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-slate-400 text-center sm:text-right text-[11px] sm:text-xs">
            <p>© {new Date().getFullYear()} G.P.S Distribuciones. Todos los derechos reservados.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-amber-400/90 font-medium">Venta por Bulto Cerrado</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
