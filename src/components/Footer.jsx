import React from 'react';
import logoImg from '../assets/logo.jpg';
import { STORE_CONFIG } from '../data/catalog';
import { Phone } from 'lucide-react';

function InstagramIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full max-w-full overflow-hidden bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          
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
              <p className="text-slate-400 text-[11px] sm:text-xs">
                {STORE_CONFIG.slogan} • Catálogo Virtual Mayorista
              </p>
            </div>
          </div>

          {/* Social & Contact Links */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=Hola%20G.P.S%20Distribuciones!%20Quisiera%20consultar%20por%20el%20catálogo%20mayorista.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-emerald-400 border border-emerald-800/60 text-xs font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{STORE_CONFIG.phone}</span>
            </a>

            <a
              href={STORE_CONFIG.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-950/50 hover:bg-pink-900/70 text-pink-400 border border-pink-800/50 text-xs font-semibold transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>{STORE_CONFIG.instagram}</span>
            </a>
          </div>

          {/* Copyright and note */}
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-4 text-slate-400 text-center md:text-right text-[11px] sm:text-xs">
            <p>© {new Date().getFullYear()} G.P.S Distribuciones.</p>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-amber-400/90 font-medium">Bulto Cerrado</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
