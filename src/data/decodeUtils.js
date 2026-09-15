/**
 * Decodes catalog product names that were garbled during PDF extraction.
 * 
 * The PDF extractor encoded each character with ó (U+00F3) as a separator:
 * "Cif" → "óCóiófó"
 * "Limón" → "óLóiómóóónó" (double ó = real ó accent)
 * 
 * @param {string} text - The encoded text string
 * @returns {string} - The decoded, human-readable text
 */
export function decodeCatalogText(text) {
  if (!text) return text;
  const o = '\u00F3'; // ó character
  if (!text.includes(o)) return text; // Already clean text

  const parts = text.split(o);

  let result = '';
  let i = 0;
  while (i < parts.length) {
    const part = parts[i];
    if (part === '') {
      // Two consecutive empty parts after a real char = real ó in original text
      if (i > 0 && parts[i - 1] !== '' && i + 1 < parts.length && parts[i + 1] === '') {
        result += 'ó';
        i += 2; // skip the second empty string too
        continue;
      }
      // else just skip this empty delimiter
    } else {
      result += part;
    }
    i++;
  }

  return result;
}

/**
 * Applies decodeCatalogText to all relevant text fields of a product object.
 * Returns a new product object with decoded fields (non-destructive).
 * 
 * @param {Object} product
 * @returns {Object} product with decoded text fields
 */
export function decodeProduct(product) {
  if (!product || !product.isCatalog) return product;
  const decode = decodeCatalogText;
  return {
    ...product,
    name: decode(product.name),
    nombre: decode(product.nombre),
    brand: decode(product.brand),
    marca: decode(product.marca),
    description: decode(product.description),
    descripcion: decode(product.descripcion),
    condicion: decode(product.condicion),
    ub: decode(product.ub),
    searchKeywords: decode(product.searchKeywords),
  };
}
