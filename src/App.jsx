import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import HeroDeals from './components/HeroDeals';
import DailyOffersCarousel from './components/DailyOffersCarousel';
import ProductGrid from './components/ProductGrid';
import WholesaleFeatures from './components/WholesaleFeatures';
import NewArrivalsSection from './components/NewArrivalsSection';
import Footer from './components/Footer';
import { CATEGORIES, PRODUCTS, NEW_ARRIVALS } from './data/catalog';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('ofertas');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products based on Search Query (El catálogo principal siempre mapea las ofertas)
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Los nuevos ingresos tienen su sección dedicada abajo del catálogo
      if (product.category === 'nuevo-ingreso') return false;

      // Search filter (name, description, COD, tag, category)
      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;

      return (
        (product.name && product.name.toLowerCase().includes(query)) ||
        (product.nombre && product.nombre.toLowerCase().includes(query)) ||
        (product.cod && product.cod.toLowerCase().includes(query)) ||
        (product.description && product.description.toLowerCase().includes(query)) ||
        (product.descripcion && product.descripcion.toLowerCase().includes(query)) ||
        (product.categoryLabel && product.categoryLabel.toLowerCase().includes(query)) ||
        (product.categoria && product.categoria.toLowerCase().includes(query)) ||
        (product.tag && product.tag.toLowerCase().includes(query)) ||
        (product.searchKeywords && product.searchKeywords.toLowerCase().includes(query))
      );
    });
  }, [searchQuery]);

  // Total catalog offers count
  const totalOffersCount = useMemo(() => {
    return PRODUCTS.filter(p => p.category === 'ofertas').length;
  }, []);

  // Current category metadata
  const currentCategoryData = useMemo(() => {
    return CATEGORIES.find(c => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  // Scroll to catalog section
  // Scroll to catalog section (exact title position)
  const handleScrollToCatalog = () => {
    const el = document.getElementById('ofertas-semana-header') || document.getElementById('catalogo');
    if (el) {
      const navHeight = 90;
      const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip flex flex-col bg-slate-100/60 selection:bg-amber-400 selection:text-slate-950 font-sans">
      
      {/* Top Navbar & Category Navigation */}
      <Navbar
        selectedCategory={selectedCategory}
        onSelectCategory={(catId) => {
          setSelectedCategory(catId);
          if (searchQuery) setSearchQuery('');
        }}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-full overflow-x-clip">
        
        {/* Weekly Offers Hero Spotlight (Shown when no search is active) */}
        {!searchQuery && (selectedCategory === 'todas' || selectedCategory === 'ofertas') && (
          <>
            <HeroDeals
              onExploreClick={handleScrollToCatalog}
              totalOffersCount={totalOffersCount}
            />
            {/* Daily Offers Carousel (07 al 13 de Septiembre) */}
            <DailyOffersCarousel />
          </>
        )}

        {/* Product Catalog Grid with 5-row Pagination */}
        <ProductGrid
          products={filteredProducts}
          selectedCategory={selectedCategory}
          categoryData={currentCategoryData}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        {/* Nuevos Ingresos Section (Toallas Húmedas Daddy) - Abajo del catálogo */}
        <NewArrivalsSection products={NEW_ARRIVALS} />

        {/* Wholesale Features */}
        <WholesaleFeatures />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
