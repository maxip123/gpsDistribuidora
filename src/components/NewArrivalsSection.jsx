import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Sparkles, 
  MessageCircle, 
  ChevronLeft, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import ProductCard from './ProductCard';
import { STORE_CONFIG } from '../data/catalog';

export default function NewArrivalsSection({ products = [] }) {
  if (!products || products.length === 0) return null;

  // Responsive visible cards count: 1 on mobile (<640px), 2 on tablet (640-1023px), 4 on desktop (>=1024px)
  const [visibleCards, setVisibleCards] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch swipe handling
  const touchStartXRef = useRef(null);
  const touchEndXRef = useRef(null);

  // Update visible cards based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCards(1);
      } else if (width < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, products.length - visibleCards);

  // Keep currentIndex valid if visibleCards changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  }, [maxIndex]);

  const goToIndex = (index) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  };

  // Autoplay (every 5 seconds, pauses on hover/touch)
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;

    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex, goToNext]);

  // Touch events for mobile swiping
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current !== null && touchEndXRef.current !== null) {
      const deltaX = touchStartXRef.current - touchEndXRef.current;
      const minSwipeDistance = 45;

      if (deltaX > minSwipeDistance) {
        goToNext();
      } else if (deltaX < -minSwipeDistance) {
        goToPrev();
      }
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
    // Resume autoplay after brief delay
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Card slide width in percentage
  const slideWidthPercent = 100 / visibleCards;

  return (
    <section 
      id="nuevos-ingresos" 
      className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Header Container */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-amber-200/90 shadow-xs mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Title & Info */}
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80 shrink-0">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Nuevos Ingresos
                </h2>
                <span className="bg-amber-100 text-amber-950 text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md border border-amber-300 uppercase tracking-tight">
                  Recién Llegados
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/80">
                  {products.length} productos
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Aceites San Iginio, Jabones Ala Camellito, Vim, Encendedores BX7 y Toallas Doddy • Consultá disponibilidad por WhatsApp
              </p>
            </div>
          </div>

          {/* Action & Navigation Controls */}
          <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=${encodeURIComponent('Hola G.P.S Distribuciones! Quisiera consultar por la lista de precios y disponibilidad de los Nuevos Ingresos.')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all shadow-2xs active:scale-95 shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>Consultar por WhatsApp</span>
            </a>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                onClick={goToPrev}
                aria-label="Producto anterior"
                className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 hover:text-slate-950 border border-slate-200/80 transition-all cursor-pointer"
                title="Anterior"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Progress counter text */}
              <div className="hidden sm:flex items-center justify-center min-w-[56px] px-2 py-1 text-xs font-bold text-slate-600 bg-slate-50 rounded-lg border border-slate-200">
                {currentIndex + 1} / {maxIndex + 1}
              </div>

              <button
                onClick={goToNext}
                aria-label="Siguiente producto"
                className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 hover:text-slate-950 border border-slate-200/80 transition-all cursor-pointer"
                title="Siguiente"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Carousel Track Container */}
      <div className="relative group/carousel">
        
        {/* Floating Prev Button (desktop/tablet) */}
        {maxIndex > 0 && (
          <button
            onClick={goToPrev}
            aria-label="Producto anterior"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-lg border border-slate-200/80 transition-all opacity-0 group-hover/carousel:opacity-100 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Carousel Window */}
        <div 
          className="overflow-hidden -mx-2 sm:-mx-3 py-2 px-1"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * slideWidthPercent}%)`
            }}
          >
            {products.map((product) => (
              <div 
                key={product.id || product.cod}
                style={{
                  flex: `0 0 ${slideWidthPercent}%`,
                  maxWidth: `${slideWidthPercent}%`
                }}
                className="px-2 sm:px-3 flex-shrink-0"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Floating Next Button (desktop/tablet) */}
        {maxIndex > 0 && (
          <button
            onClick={goToNext}
            aria-label="Siguiente producto"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-lg border border-slate-200/80 transition-all opacity-0 group-hover/carousel:opacity-100 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

      </div>

      {/* Carousel Footer: Pagination Dots & Mobile Swipe Hint */}
      {maxIndex > 0 && (
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-between gap-2.5 px-1">
          
          {/* Mobile Swipe Hint */}
          <div className="text-[11px] text-slate-600 sm:hidden flex items-center gap-1.5 font-medium">
            <span>Deslizá para ver más productos</span>
            <ArrowRight className="w-3 h-3 animate-pulse" />
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mx-auto sm:mx-0 flex-wrap">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => goToIndex(idx)}
                  aria-label={`Ir a la diapositiva ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isActive 
                      ? 'w-6 sm:w-8 h-2.5 bg-amber-400 shadow-xs' 
                      : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              );
            })}
          </div>

          {/* Counter info on desktop */}
          <div className="hidden sm:block text-xs font-semibold text-slate-500">
            Mostrando {visibleCards} de {products.length} productos
          </div>

        </div>
      )}

    </section>
  );
}
