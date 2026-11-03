// =============================================================================
// G.P.S DISTRIBUCIONES - CATÁLOGO OFICIAL 2026
// "Cerca de tu negocio" - Distribuidora Mayorista Tucumana
// =============================================================================

export const STORE_CONFIG = {
  name: "G.P.S Distribuciones",
  slogan: "Cerca de tu negocio",
  subtitle: "Distribuidora Mayorista de Pañales, Limpieza, Perfumería y Comestibles",
  phone: "+54 9 381 347-0635",
  phoneRaw: "5493813470635",
  email: "gpsgerentecomercial@gmail.com",
  instagram: "@gps_distribucionestuc",
  instagramUrl: "https://www.instagram.com/gps_distribucionestuc/",
  location: "Tucumán, Argentina",
  schedule: "Lunes a Viernes de 8:00 a 17:00 hs | Sábados de 8:30 a 13:00 hs",
  commercialNote: "Precios y venta exclusivos por bulto cerrado (U.B) para comercios y distribuidores.",
  minOrderAmount: 50000,
  catalogPdfUrl: "/Cat%C3%A1logo%20GPS.pdf",
  catalogPdfFilename: "Catálogo GPS.pdf"
};

// Categorías activas
const RAW_CATEGORIES = [
  { id: "ofertas", name: "Ofertas de la Semana", icon: "Flame", color: "text-rose-500" },
  { id: "nuevo-ingreso", name: "Nuevos Ingresos", sectionTitle: "Nuevos Ingresos", icon: "Sparkles", color: "text-amber-500" },
];

export const PRODUCTS = [
  // ── COMBO PROMOCIONAL: CUBIERTOS (AJO + PESTO) ───────────────────
  {
    id: 200,
    isCombo: true,
    cod: "COMBO-CUBIERT-PESTO",
    nombre: "Super Combo Hellmann's Ajo + Pesto",
    name: "Super Combo Hellmann's Ajo + Pesto",
    precio: 0,
    unitPrice: 0,
    priceBulto: 0,
    categoria: "Almacén",
    category: "ofertas",
    categoryLabel: "Ofertas de la Semana",
    badgeText: "SUPER COMBO",
    badgeType: "purple",
    brandLabel: "Especial Hellmann's Unilever",
    giftName: "1 Juego Cuchillo y Tenedor",
    giftQtyLabel: "x 1 juego",
    giftImage: "/ilovepdf_images-cubiertos/img28.jpg",
    comboGift: {
      name: "1 Juego Cuchillo y Tenedor",
      image: "/ilovepdf_images-cubiertos/img28.jpg"
    },
    comboIncludes: [
      { name: "Aderezo Hellmann's Ajo 250gr", short: "Ajo 250gr", qty: "1 u.", image: "/ilovepdf_images-cubiertos/img22.jpg" },
      { name: "Aderezo Hellmann's Pesto 250gr", short: "Pesto 250gr", qty: "1 u.", image: "/ilovepdf_images-cubiertos/img38.jpg" }
    ],
    isWeeklyOffer: true,
    searchKeywords: "super combo hellmanns ajo pesto 250gr cuchillo tenedor cubiertos regalo promo unilever almacen"
  },

  // ── COMBO PROMOCIONAL: AUTOSERVICIO HELLMANN'S ────────────────────
  {
    id: 140,
    isCombo: true,
    cod: "COMBO-HELL-AUTO",
    nombre: "Combo Autoservicio Hellmann's",
    name: "Combo Autoservicio Hellmann's",
    precio: 0,
    unitPrice: 0,
    priceBulto: 0,
    categoria: "Almacén",
    category: "ofertas",
    categoryLabel: "Ofertas de la Semana",
    badgeText: "COMBO AUTOSERVICIO",
    badgeType: "purple",
    brandLabel: "Especial Hellmann's Unilever",
    giftName: "80u Mayonesa Hellmanns 118gr",
    giftQtyLabel: "x 80 unidades",
    giftImage: "/ilove29/img98.jpg",
    comboGift: {
      name: "80u Mayonesa Hellmanns 118gr",
      image: "/ilove29/img98.jpg"
    },
    comboIncludes: [
      { name: "Mayonesa Hellmanns 475gr", short: "Mayo 475gr", qty: "15 u.", image: "/ilove29/img104.jpg" },
      { name: "Mayonesa Hellmanns 237gr", short: "Mayo 237gr", qty: "48 u.", image: "/ilove29/img104.jpg" },
      { name: "Mayonesa Hellmanns Light 237gr", short: "Light 237gr", qty: "12 u.", image: "/ilove29/img110.jpg" },
      { name: "Ketchup Hellmanns 250gr", short: "Ketchup 250gr", qty: "12 u.", image: "/ilove29/img100.jpg" },
      { name: "Mostaza Savora 250gr", short: "Mostaza 250gr", qty: "12 u.", image: "/ilovepdf_images-savora/img36.jpg" },
      { name: "Aderezos Hellmanns 250gr (Pueden ser surtidos)", short: "Aderezos 250gr", qty: "24 u.", images: ["/ilove29/img106.jpg", "/ilove29/img108.jpg", "/ilovepdf_images-cubiertos/img22.jpg"] }
    ],
    isWeeklyOffer: true,
    searchKeywords: "combo autoservicio hellmanns mayonesa ketchup mostaza savora aderezos surtidos 475gr 237gr 250gr 118gr regalo unilever"
  },

  // ── COMBO PROMOCIONAL: ALMACENES HELLMANN'S ───────────────────────
  {
    id: 141,
    isCombo: true,
    cod: "COMBO-HELL-ALMA",
    nombre: "Combo Almacenes Hellmann's",
    name: "Combo Almacenes Hellmann's",
    precio: 0,
    unitPrice: 0,
    priceBulto: 0,
    categoria: "Almacén",
    category: "ofertas",
    categoryLabel: "Ofertas de la Semana",
    badgeText: "COMBO ALMACENES",
    badgeType: "purple",
    brandLabel: "Especial Hellmann's Unilever",
    giftName: "5u Aderezos Hellmanns 250gr (Pueden ser Surtidos)",
    giftQtyLabel: "x 5 unidades",
    giftImage: "/ilove29/img106.jpg",
    comboGift: {
      name: "5u Aderezos Hellmanns 250gr (Pueden ser Surtidos)",
      images: ["/ilove29/img106.jpg", "/ilove29/img108.jpg", "/ilovepdf_images-cubiertos/img22.jpg"]
    },
    comboIncludes: [
      { name: "Mayonesa Hellmanns 118gr", short: "Mayo 118gr", qty: "20 u.", image: "/ilove29/img98.jpg" },
      { name: "Mayonesa Hellmanns Reg 237gr", short: "Mayo Reg 237gr", qty: "12 u.", image: "/ilove29/img104.jpg" },
      { name: "Ketchup Hellmanns 250gr", short: "Ketchup 250gr", qty: "6 u.", image: "/ilove29/img100.jpg" }
    ],
    isWeeklyOffer: true,
    searchKeywords: "combo almacenes hellmanns mayonesa ketchup 118gr 237gr 250gr aderezos surtidos regalo unilever"
  },

  // ── COMBO PROMOCIONAL: AUTOSERVICIO DOVE ─────────────────────────
  {
    id: 143,
    isCombo: true,
    cod: "COMBO-DOVE-AUTO",
    nombre: "Combo Autoservicio Dove",
    name: "Combo Autoservicio Dove",
    precio: 0,
    unitPrice: 0,
    priceBulto: 0,
    categoria: "Perfumería",
    category: "ofertas",
    categoryLabel: "Ofertas de la Semana",
    badgeText: "COMBO AUTOSERVICIO",
    badgeType: "purple",
    brandLabel: "Especial Dove Unilever",
    giftName: "18 Jabón Suave Coco & Karité 220ml",
    giftQtyLabel: "x 18 unidades",
    giftImage: "/ofertas-02-07-nov/suave-coco-karite-220ml.jpg",
    comboGift: {
      name: "18 Jabón Suave Coco & Karité 220ml",
      image: "/ofertas-02-07-nov/suave-coco-karite-220ml.jpg"
    },
    comboIncludes: [
      { name: "Jabón Dove 90gr", short: "Dove 90gr", qty: "30 u.", image: "/ofertas-02-07-nov/jabon-dove-90gr.jpg" }
    ],
    isWeeklyOffer: true,
    searchKeywords: "combo autoservicio dove jabon 90gr suave coco karite 220ml regalo unilever perfumeria"
  },

  // ── COMBO PROMOCIONAL: ESPONJAS DEA X 36U ────────────────────────
  {
    id: 181,
    isCombo: true,
    cod: "COMBO-DEA-ESP-36",
    nombre: "Combo Esponjas DEA",
    name: "Combo Esponjas DEA",
    precio: 0,
    unitPrice: 0,
    priceBulto: 0,
    categoria: "Limpieza",
    category: "ofertas",
    categoryLabel: "Ofertas de la Semana",
    badgeText: "COMBO DEA",
    badgeType: "savings",
    brandLabel: "Especial DEA Limpieza",
    discount: "10% OFF",
    discountTitle: "10% Descuento en el total del combo",
    discountSubtitle: "Comprando el combo completo",
    comboIncludes: [
      { name: "Esponja Salvauñas x 12u", short: "Salvauñas x 12u", qty: "12 u.", priceBase: "434,39", image: "/ofertas-02-07-nov/dea-salvaunas.jpg" },
      { name: "Esponja de Fibra Verde x 12u", short: "Fibra Verde x 12u", qty: "12 u.", priceBase: "353,01", image: "/ofertas-02-07-nov/dea-fibra-verde.jpg" },
      { name: "Esponjosa x 12u", short: "Esponjosa x 12u", qty: "12 u.", priceBase: "839,91", image: "/ofertas-02-07-nov/dea-esponjosa.jpg" }
    ],
    condicion: "COMPRANDO EL COMBO - 10% OFF",
    isWeeklyOffer: true,
    searchKeywords: "combo esponjas dea salvaunas fibra verde esponjosa 10% descuento limpieza oferta semanal"
  },

  // ── COMBO PROMOCIONAL: ESPONJAS METÁLICAS DEA ────────────────────
  {
    id: 184,
    isCombo: true,
    cod: "COMBO-DEA-MET-48",
    nombre: "Esponjas Doradas + Esponjas Lana Acero DEA",
    name: "Esponjas Doradas + Esponjas Lana Acero DEA",
    precio: 0,
    unitPrice: 0,
    priceBulto: 0,
    categoria: "Limpieza",
    category: "ofertas",
    categoryLabel: "Ofertas de la Semana",
    badgeText: "DEA 10% OFF",
    badgeType: "savings",
    brandLabel: "Especial DEA Limpieza",
    discount: "10% OFF",
    discountTitle: "10% Descuento",
    discountSubtitle: "Comprando ambos productos",
    comboIncludes: [
      { name: "Esponjas Doradas x 24u", short: "Doradas x 24u", qty: "24 u.", priceBase: "746,73", image: "/ofertas-02-07-nov/dea-doradas.jpg" },
      { name: "Esponjas Lana Acero 45g x 24u", short: "Lana Acero 45g x 24u", qty: "24 u.", priceBase: "647,00", image: "/ofertas-02-07-nov/dea-lana-acero.jpg" }
    ],
    condicion: "COMPRANDO AMBOS - 10% OFF",
    isWeeklyOffer: true,
    searchKeywords: "esponjas metalicas dea doradas lana acero 45g 10% descuento limpieza oferta semanal"
  },

  // ── OFERTA SEMANAL: GUANTES DEA ──────────────────────────────────
  {
    id: 186,
    cod: "DEA-GUAN-SURT-12",
    nombre: "Guantes Surtidos x 12u",
    name: "Guantes Surtidos x 12u",
    precio: 2108.95,
    unitPrice: 2108.95,
    priceBulto: 25307.40,
    categoria: "Limpieza",
    category: "ofertas",
    categoryLabel: "Ofertas de la Semana",
    tag: "Guantes",
    condicion: "COMPRA 12U - 10% OFF",
    descripcion: "COMPRA 12U - 10% OFF",
    description: "COMPRA 12U - 10% OFF",
    discount: "10% OFF",
    bultoUnits: 12,
    bultoUnitLabel: "12 Unidades",
    badgeText: "DEA",
    badgeType: "savings",
    image: "/ofertas-02-07-nov/dea-guantes.jpg",
    isWeeklyOffer: true,
    searchKeywords: "guantes surtidos 12u dea afelpados 10% descuento limpieza oferta semanal"
  },

  // ── OFERTA SEMANAL: PLAYBOY ──────────────────────────────────────
  {
    id: 187,
    cod: "PLAYBOY-PRES",
    nombre: "Playboy Preservativo",
    name: "Playboy Preservativo",
    precio: 0,
    unitPrice: 0,
    priceBulto: 0,
    categoria: "Perfumería",
    category: "ofertas",
    categoryLabel: "Ofertas de la Semana",
    tag: "Preservativos",
    condicion: "COMPRA 11U MÁS 1 DE REGALO",
    descripcion: "COMPRA 11U MÁS 1 DE REGALO",
    description: "COMPRA 11U MÁS 1 DE REGALO",
    giftName: "1 Playboy Preservativo",
    giftImage: "/ofertas-02-07-nov/playboy-regalo.jpg",
    badgeText: "PLAYBOY",
    badgeType: "savings",
    image: "/ofertas-02-07-nov/playboy-preservativo.jpg",
    isWeeklyOffer: true,
    searchKeywords: "playboy preservativo preservativos condones compra 11u 1 de regalo perfumeria oferta semanal"
  },

  // ── NUEVOS INGRESOS: CIF DESTRUCTOR ─────────────────────────────
  {
    id: 30,
    cod: "CIF-DEST-SARRO-450",
    nombre: "Cif Destructor de Sarro 450ml",
    name: "Cif Destructor de Sarro 450ml",
    precio: 0,
    unitPrice: 0,
    priceBulto: 0,
    categoria: "Limpieza",
    category: "nuevo-ingreso",
    categoryLabel: "Nuevo Ingreso",
    tag: "Destructor de Sarro",
    badgeText: "NUEVO INGRESO",
    badgeType: "new",
    image: "/nuevos-ingresos-nov/cif-destructor-sarro-450ml.jpg",
    noPrice: true,
    searchKeywords: "cif destructor de sarro 450ml espuma activa recarga economica limpieza unilever nuevo ingreso"
  },
  {
    id: 31,
    cod: "CIF-DEST-GRASA-450",
    nombre: "Cif Destructor de Grasa 450ml",
    name: "Cif Destructor de Grasa 450ml",
    precio: 0,
    unitPrice: 0,
    priceBulto: 0,
    categoria: "Limpieza",
    category: "nuevo-ingreso",
    categoryLabel: "Nuevo Ingreso",
    tag: "Destructor de Grasa",
    badgeText: "NUEVO INGRESO",
    badgeType: "new",
    image: "/nuevos-ingresos-nov/cif-destructor-grasa-450ml.jpg",
    noPrice: true,
    searchKeywords: "cif destructor de grasa 450ml espuma activa recarga economica limpieza unilever nuevo ingreso"
  }
];

export const NEW_ARRIVALS = PRODUCTS.filter(p => p.category === 'nuevo-ingreso');

export const CATEGORIES = RAW_CATEGORIES.map(cat => ({
  ...cat,
  count: cat.id === 'nuevo-ingreso'
    ? PRODUCTS.filter(p => p.category === 'nuevo-ingreso').length
    : PRODUCTS.filter(p => p.category !== 'nuevo-ingreso').length
}));
