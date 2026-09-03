import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  Phone, 
  Flame, 
  Baby, 
  Sparkles, 
  Utensils, 
  HeartHandshake, 
  Shield, 
  ShoppingBag, 
  Scroll,
  Heart,
  BookOpen, 
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { STORE_CONFIG, CATEGORIES } from '../data/catalog';
import logoImg from '../assets/logo.jpg';

const categoryIcons = {
  Flame: Flame,
  Baby: Baby,
  Sparkles: Sparkles,
  Utensils: Utensils,
  HeartHandshake: HeartHandshake,
  Shield: Shield,
  ShoppingBag: ShoppingBag,
  Scroll: Scroll,
  Heart: Heart,
  BookOpen: BookOpen,
};

export default function Navbar({ 
  selectedCategory, 
  onSelectCategory, 
  searchQuery, 
  onSearchChange
}) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  
  const scrollContainerRef = useRef(null);

  // Check scroll position to show/hide arrows and fade masks
  const checkScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true });
    }
    window.addEventListener('resize', checkScroll);
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [selectedCategory]);

  const handleScroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = direction === 'left' ? -220 : 220;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    setTimeout(checkScroll, 300);
  };

  const handleCategoryClick = (catId, e) => {
    onSelectCategory(catId);
    if (e?.currentTarget) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full max-w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      
      {/* Main Brand & Search Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo & Brand Identity */}
          <div 
            className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none shrink-0" 
            onClick={() => onSelectCategory("todas")}
          >
            <div className="relative">
              <img 
                src={logoImg} 
                alt="G.P.S Distribuciones Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-amber-400 shadow-xs"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1">
                <span className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight text-slate-900 leading-none truncate">
                  G.P.S <span className="text-blue-600 font-bold">Distribuciones</span>
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-wide mt-0.5 hidden xs:block">
                {STORE_CONFIG.slogan} • Catálogo Virtual Mayorista
              </p>
            </div>
          </div>

          {/* Live Search Bar (Desktop) */}
          <div className="flex-1 max-w-xl mx-2 hidden md:block">
            <div className={`relative flex items-center transition-all duration-200 rounded-xl border ${
              isSearchFocused ? 'border-blue-600 ring-3 ring-blue-500/15 shadow-sm bg-white' : 'border-slate-200 bg-slate-50/90 hover:border-slate-300'
            }`}>
              <Search className={`w-4 h-4 ml-3.5 transition-colors ${isSearchFocused ? 'text-blue-600' : 'text-slate-400'}`} />
              <input
                type="text"
                placeholder="Buscar por marca (Cif, Ala, Huggies, Hellmann's, Dove...) o código..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full bg-transparent px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => onSearchChange('')}
                  className="p-1.5 mr-2 text-slate-400 hover:text-slate-600 rounded-md hover:bg-slate-200 transition-colors"
                  title="Limpiar búsqueda"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Quick WhatsApp Contact Button */}
          <div className="flex items-center shrink-0">
            <a
              href={`https://wa.me/${STORE_CONFIG.phoneRaw}?text=Hola%20G.P.S%20Distribuciones!%20Quisiera%20consultar%20por%20el%20catálogo%20mayorista.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-xl transition-all shadow-2xs hover:shadow-xs active:scale-95 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp Ventas</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-2.5 md:hidden">
          <div className="relative flex items-center rounded-xl border border-slate-200 bg-slate-50">
            <Search className="w-4 h-4 ml-3 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Buscar productos, marcas o códigos..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-transparent px-2.5 py-1.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none min-w-0"
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                className="p-1 mr-2 text-slate-400 hover:text-slate-600 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* CATEGORY CAROUSEL / NAV RIBBON WITH SCROLL ARROWS */}
      {/* ============================================================= */}
      <nav className="relative w-full border-t border-slate-100 bg-slate-50/95 py-1.5">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 relative flex items-center">
          
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-1 z-20 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 text-slate-700 shadow-md border border-slate-200 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
              title="Ver categorías anteriores"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          )}

          {/* Left Gradient Mask when scrollable */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50/95 to-transparent pointer-events-none z-10" />
          )}

          {/* Scrollable Track */}
          <div 
            ref={scrollContainerRef}
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar scroll-smooth py-1 px-3 w-full"
          >
            {CATEGORIES.map((cat) => {
              const Icon = categoryIcons[cat.icon] || Sparkles;
              const isSelected = selectedCategory === cat.id;
              const isOffersTab = cat.id === "todas" || cat.id === "ofertas";

              return (
                <button
                  key={cat.id}
                  onClick={(e) => handleCategoryClick(cat.id, e)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-150 shrink-0 cursor-pointer whitespace-nowrap select-none ${
                    isSelected
                      ? isOffersTab
                        ? 'bg-rose-600 text-white shadow-xs scale-[1.02]'
                        : 'bg-blue-600 text-white shadow-xs scale-[1.02]'
                      : isOffersTab
                      ? 'bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 hover:border-rose-300'
                      : 'bg-white text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${
                    isSelected 
                      ? 'text-white' 
                      : isOffersTab 
                      ? 'text-rose-600' 
                      : cat.color
                  }`} />
                  <span>{cat.name}</span>
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full shrink-0 ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : isOffersTab
                      ? 'bg-rose-200/70 text-rose-900'
                      : 'bg-slate-100 text-slate-600'
                  }`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Gradient Mask when scrollable */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50/95 to-transparent pointer-events-none z-10" />
          )}

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-1 z-20 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 text-slate-700 shadow-md border border-slate-200 hover:bg-slate-100 active:scale-95 transition-all cursor-pointer"
              title="Ver más categorías"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          )}

        </div>
      </nav>
    </header>
  );
}
