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
