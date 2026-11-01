"""Extrae las imágenes de producto de un PDF, sin repetidas y sobre fondo blanco.

Uso: python -I scripts/extract_pdf_images.py <archivo.pdf> <carpeta_salida>
Requiere: pip install pymupdf
"""
import hashlib
import pathlib
import sys

import pymupdf

MIN_SIZE = 120


def to_white_jpg(doc, xref, smask):
    pix = pymupdf.Pixmap(doc, xref)
    if pix.colorspace and pix.colorspace.n > 3:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    if smask:
        pix = pymupdf.Pixmap(pix, pymupdf.Pixmap(doc, smask))
    if pix.alpha:
        return blend_on_white(pix).tobytes("jpg", jpg_quality=90)
    return pix.tobytes("jpg", jpg_quality=90)


def blend_on_white(pix):
    samples = pix.samples
    rgb = bytearray(pix.width * pix.height * 3)
    for i in range(pix.width * pix.height):
        src = i * 4
        alpha = samples[src + 3]
        for channel in range(3):
            # Las muestras con alfa de PyMuPDF vienen premultiplicadas
            rgb[i * 3 + channel] = min(255, samples[src + channel] + 255 - alpha)
    return pymupdf.Pixmap(pymupdf.csRGB, pix.width, pix.height, bytes(rgb), False)


def main():
    pdf_path, out_dir = sys.argv[1], pathlib.Path(sys.argv[2])
    out_dir.mkdir(parents=True, exist_ok=True)
    doc = pymupdf.open(pdf_path)
    seen = set()
    small = repeated = 0

    for page_num, page in enumerate(doc, 1):
        for image in page.get_images(full=True):
            xref, smask, width, height = image[:4]
            if width < MIN_SIZE or height < MIN_SIZE:
                small += 1
                continue
            digest = hashlib.md5(doc.xref_stream_raw(xref)).hexdigest()
            if digest in seen:
                repeated += 1
                continue
            seen.add(digest)
            (out_dir / f"p{page_num:02d}_{xref}.jpg").write_bytes(to_white_jpg(doc, xref, smask))

    print(f"paginas={len(doc)} guardadas={len(seen)} chicas={small} repetidas={repeated}")


if __name__ == "__main__":
    main()
