import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  MessageCircle, 
  Play, 
  Pause,
  Tag
} from 'lucide-react';
import { DAILY_OFFERS } from '../data/dailyOffers';
import { STORE_CONFIG } from '../data/catalog';

export default function DailyOffersCarousel() {
  const getInitialIndex = () => {
    const now = new Date();
    const isSept = now.getMonth() === 8;
    const day = now.getDate();
    if (isSept && day >= 7 && day <= 12) {
      const idx = DAILY_OFFERS.findIndex(o => o.dayNum === day);
      if (idx !== -1) return idx;
    }
    return 0;
  };

  const [currentIndex, setCurrentIndex] = useState(getInitialIndex);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 6000;
  const activeOffer = DAILY_OFFERS[currentIndex];
  const progressIntervalRef = useRef(null);

  // Identify today's day number
  const todayDate = new Date();
  const currentDayNum = (todayDate.getMonth() === 8) ? todayDate.getDate() : 7;

  // Next & Prev handlers
  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % DAILY_OFFERS.length);
    setProgress(0);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + DAILY_OFFERS.length) % DAILY_OFFERS.length);
    setProgress(0);
  }, []);

  const goToSlide = (idx) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Autoplay timer with progress
  useEffect(() => {
    if (!isPlaying || lightboxOpen) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const stepMs = 50;
    const increment = (stepMs / SLIDE_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, lightboxOpen, goToNext]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, goToNext, goToPrev]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext();
    if (distance < -50) goToPrev();
  };

  // WhatsApp link generator
  const getWhatsAppLink = (offer) => {
    const message = `Hola G.P.S Distribuciones! Me interesa la promo de ${offer.dayLabel} (${offer.title}): ${offer.headline}. ¿Tienen stock?`;
    return `https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section 
      id="ofertas-diarias"
      className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3"
    >
      <div 
        className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-300 hover:border-slate-300"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Subtle top progress bar */}
        {isPlaying && (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-slate-100 overflow-hidden z-10">
            <div 
              className="h-full bg-blue-500 transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* ── TOP STRIP: Title & Navigation ───────────────────────────── */}
        <div className="flex items-center justify-between gap-2 px-3.5 sm:px-5 py-2 border-b border-slate-100 bg-slate-50/60">
          
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-md bg-rose-50 text-rose-600 border border-rose-200/60">
              <Tag className="w-3.5 h-3.5" />
            </span>
            <div className="flex items-center gap-2">
              <h2 className="text-xs sm:text-sm font-bold text-slate-800">
                Ofertas del Día
              </h2>
              <span className="text-[11px] text-slate-500 hidden sm:inline">•</span>
              <span className="text-[11px] font-medium text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200/70">
                07 al 12 de Septiembre
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded transition cursor-pointer"
              title={isPlaying ? "Pausar" : "Reproducir"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>

            <span className="text-[11px] font-mono text-slate-400 px-1">
              {currentIndex + 1}/{DAILY_OFFERS.length}
            </span>

            <div className="flex items-center gap-1">
              <button
                onClick={goToPrev}
                className="p-1 sm:p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 transition active:scale-95 cursor-pointer"
                title="Anterior"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={goToNext}
                className="p-1 sm:p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 transition active:scale-95 cursor-pointer"
                title="Siguiente"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* ── DAY PILLS SELECTOR ──────────────────────────────────────── */}
        <div className="px-3 sm:px-5 py-1.5 border-b border-slate-100 bg-slate-50/30">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {DAILY_OFFERS.map((offer, idx) => {
              const isActive = idx === currentIndex;
              const isToday = offer.dayNum === currentDayNum;

              return (
                <button
                  key={offer.id}
                  onClick={() => goToSlide(idx)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-semibold shrink-0 transition-all cursor-pointer border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-2xs'
                      : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border-slate-200/80'
                  }`}
                >
                  <span>{offer.shortDay}</span>
                  <span className={`text-[10px] font-medium px-1 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {offer.brandTab}
                  </span>
                  {isToday && (
                    <span className={`text-[9px] font-extrabold px-1 rounded ${
                      isActive ? 'bg-rose-500 text-white' : 'bg-rose-100 text-rose-700'
                    }`}>
                      HOY
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── ACTIVE OFFER (SIMPLIFIED & MINIMAL) ──────────────────────── */}
        <div className="p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            
            {/* MINI THUMBNAIL */}
            <div 
              className="relative shrink-0 w-20 h-28 sm:w-24 sm:h-32 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-2xs cursor-pointer group"
              onClick={() => setLightboxOpen(true)}
              title="Click para ver flyer completo"
            >
              <img
                src={activeOffer.image}
                alt={activeOffer.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-slate-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>

            {/* DIRECT, PUNCHY INFO */}
            <div className="flex-1 min-w-0 text-left space-y-1">
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">
                  {offerDayLabel(activeOffer)}
                </span>
                <span className="text-[11px] font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md">
                  {activeOffer.badgeText}
                </span>
              </div>

              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {activeOffer.title}
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-blue-700 leading-snug">
                {activeOffer.headline}
              </p>

              <p className="text-xs text-slate-500 truncate">
                {activeOffer.detail}
              </p>

            </div>

            {/* ACTION BUTTONS */}
            <div className="shrink-0 flex items-center sm:flex-col gap-2 w-full sm:w-auto pt-1 sm:pt-0 sm:pl-3 sm:border-l sm:border-slate-100">
              <a
                href={getWhatsAppLink(activeOffer)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition shadow-2xs active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Pedir Oferta</span>
              </a>

              <button
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 transition cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ver Flyer</span>
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* ── LIGHTBOX MODAL ─────────────────────────────────────────── */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-xs animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition cursor-pointer"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-2 sm:left-6 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 sm:right-6 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div 
            className="relative max-w-sm sm:max-w-md w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200">
              <img
                src={activeOffer.image}
                alt={activeOffer.title}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto bg-slate-950"
              />
            </div>

            <div className="w-full mt-2.5 flex items-center justify-between gap-3 bg-white border border-slate-200 rounded-xl p-3 shadow-lg">
              <div className="text-left truncate">
                <p className="text-xs font-bold text-slate-900 truncate">
                  {activeOffer.dayLabel} • {activeOffer.badgeText}
                </p>
                <p className="text-[11px] text-slate-600 truncate">
                  {activeOffer.title} - {activeOffer.headline}
                </p>
              </div>

              <a
                href={getWhatsAppLink(activeOffer)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-white" />
                <span>Pedir</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

function offerDayLabel(offer) {
  return offer.dayLabel || offer.shortDay;
}
