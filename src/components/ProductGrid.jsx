import React, { useState, useEffect, useMemo } from 'react';
import { 
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
  SearchX, 
  ArrowUpDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import ProductCard from './ProductCard';

const categoryIcons = {
  limpieza: Sparkles,
  papeleria: Scroll,
  bebes: Baby,
  femenina: Heart,
  perfumeria: HeartHandshake,
  almacen: Utensils,
  bazar: ShoppingBag,
  todas: Flame,
  ofertas: Flame,
};

// Responsive items per page: exactly 10 rows on all screen widths
function useItemsPerPageFor10Rows() {
  const getItemsCount = () => {
    if (typeof window === 'undefined') return 40;
    const width = window.innerWidth;
    if (width < 640) {
      // Mobile: 1 column * 10 rows = 10 products
      return 10;
    } else if (width < 1024) {
      // Tablet: 2 columns * 10 rows = 20 products
      return 20;
    } else if (width < 1280) {
      // Desktop: 3 columns * 10 rows = 30 products
      return 30;
    } else {
      // Large Desktop: 4 columns * 10 rows = 40 products
      return 40;
    }
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsCount);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return itemsPerPage;
}

export default function ProductGrid({ 
  products, 
  selectedCategory, 
  categoryData, 
  searchQuery, 
  onClearSearch 
}) {
  const [sortBy, setSortBy] = useState('featured');
  const [onlyWeeklyOffers, setOnlyWeeklyOffers] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = useItemsPerPageFor10Rows();

  // Reset to first page when category, search, filter, sort or window size changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery, onlyWeeklyOffers, sortBy, itemsPerPage]);

  // Filter & sort products
  const filteredList = useMemo(() => {
    let list = [...products];

    if (onlyWeeklyOffers) {
      list = list.filter(p => p.isWeeklyOffer);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.priceBulto - b.priceBulto);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.priceBulto - a.priceBulto);
    } else if (sortBy === 'moq-asc') {
      list.sort((a, b) => a.bultoUnits - b.bultoUnits);
    }

    return list;
  }, [products, onlyWeeklyOffers, sortBy]);

  // Pagination calculations
  const totalItems = filteredList.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = filteredList.slice(startIndex, endIndex);

  const CategoryIcon = categoryIcons[selectedCategory] || Sparkles;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    const element = document.getElementById('catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="catalogo" className="w-full max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 overflow-hidden">
      
      {/* Section Header & Filters Bar */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs mb-6 w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
          
          {/* Title & Count */}
          <div className="flex items-center gap-2.5 min-w-0">
            <div className={`p-2 rounded-xl shrink-0 ${
              selectedCategory === 'todas' || selectedCategory === 'ofertas'
                ? 'bg-rose-50 text-rose-600 border border-rose-200' 
                : 'bg-blue-50 text-blue-600 border border-blue-200'
            }`}>
              <CategoryIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight truncate">
                  {searchQuery 
                    ? `Resultados para "${searchQuery}"`
                    : categoryData?.name || 'Catálogo de Ofertas'
                  }
                </h2>
                <span className="bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-full border border-slate-200 shrink-0">
                  {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 truncate">
                Mostrando {totalItems > 0 ? startIndex + 1 : 0} - {endIndex} de {totalItems} (10 filas por página)
              </p>
            </div>
          </div>

          {/* Quick Toolbar / Sort Controls */}
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {/* Filter: Only Weekly Offers */}
            <button
              onClick={() => setOnlyWeeklyOffers(!onlyWeeklyOffers)}
              className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer border whitespace-nowrap ${
                onlyWeeklyOffers
                  ? 'bg-rose-50 text-rose-700 border-rose-300 shadow-2xs'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <Flame className={`w-3.5 h-3.5 shrink-0 ${onlyWeeklyOffers ? 'text-rose-600' : 'text-slate-400'}`} />
              <span>Ofertas Semanales</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex-1 sm:flex-none inline-flex items-center justify-between sm:justify-start gap-1 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5 text-xs text-slate-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <select
                id="sortSelect"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-bold text-slate-800 focus:outline-none cursor-pointer text-xs pr-1 min-w-0"
              >
                <option value="featured">Destacados</option>
                <option value="price-asc">Menor Precio</option>
                <option value="price-desc">Mayor Precio</option>
                <option value="moq-asc">Menor Bulto</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of Product Cards */}
      {currentItems.length > 0 ? (
        <>
          {/* Top Pagination Controls */}
          {totalPages > 1 && (
            <div className="mb-4 sm:mb-5 pb-3 border-b border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
              {/* Counter info */}
              <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
                Página <strong className="text-slate-900">{validCurrentPage}</strong> de <strong className="text-slate-900">{totalPages}</strong> ({startIndex + 1} a {endIndex} de {totalItems})
              </div>

              {/* Page Buttons */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                {/* Previous button */}
                <button
                  onClick={() => handlePageChange(Math.max(1, validCurrentPage - 1))}
                  disabled={validCurrentPage === 1}
                  className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                    validCurrentPage === 1
                      ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 active:scale-95 shadow-2xs'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span className="hidden xs:inline">Anterior</span>
                </button>

                {/* Number buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isCurrent = pageNum === validCurrentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-8 h-8 sm:w-8.5 sm:h-8.5 flex items-center justify-center rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next button */}
                <button
                  onClick={() => handlePageChange(Math.min(totalPages, validCurrentPage + 1))}
                  disabled={validCurrentPage === totalPages}
                  className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                    validCurrentPage === totalPages
                      ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 active:scale-95 shadow-2xs'
                  }`}
                >
                  <span className="hidden xs:inline">Siguiente</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 w-full">
            {currentItems.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* ============================================================= */}
          {/* BOTTOM PAGINATION CONTROLS */}
          {/* ============================================================= */}
          {totalPages > 1 && (
            <div className="mt-8 sm:mt-10 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 w-full">
              
              {/* Counter info */}
              <div className="text-xs text-slate-500 font-medium text-center sm:text-left">
                Página <strong className="text-slate-900">{validCurrentPage}</strong> de <strong className="text-slate-900">{totalPages}</strong> ({startIndex + 1} a {endIndex} de {totalItems})
              </div>

              {/* Page Buttons */}
              <div className="flex items-center gap-1.5 flex-wrap justify-center">
                {/* Previous button */}
                <button
                  onClick={() => handlePageChange(Math.max(1, validCurrentPage - 1))}
                  disabled={validCurrentPage === 1}
                  className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold border transition-colors ${
                    validCurrentPage === 1
                      ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 active:scale-95 shadow-2xs'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span className="hidden xs:inline">Anterior</span>
                </button>

                {/* Number buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isCurrent = pageNum === validCurrentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next button */}
                <button
                  onClick={() => handlePageChange(Math.min(totalPages, validCurrentPage + 1))}
                  disabled={validCurrentPage === totalPages}
                  className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold border transition-colors ${
                    validCurrentPage === totalPages
                      ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 active:scale-95 shadow-2xs'
                  }`}
                >
                  <span className="hidden xs:inline">Siguiente</span>
                  <ChevronRight className="w-4 h-4 shrink-0" />
                </button>
              </div>

            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-slate-200 shadow-xs max-w-md mx-auto my-8">
          <div className="w-14 h-14 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-3">
            <SearchX className="w-7 h-7" />
          </div>
          <h3 className="text-base font-bold text-slate-900 mb-1">
            No se encontraron productos
          </h3>
          <p className="text-xs text-slate-500 mb-4">
            {searchQuery 
              ? `No hay coincidencias para "${searchQuery}". Probá con otro término o limpiá la búsqueda.`
              : 'No hay productos disponibles en esta categoría por el momento.'
            }
          </p>
          {searchQuery && (
            <button
              onClick={onClearSearch}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
            >
              Limpiar búsqueda
            </button>
          )}
        </div>
      )}
    </section>
  );
}
