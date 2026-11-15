"""Recorta el margen blanco de las imágenes de producto y las centra en un lienzo cuadrado,
para que todas se vean del mismo tamaño en las cards.

Las imágenes que salen del PDF de Canva a veces traen el producto chiquito en medio de un lienzo blanco
grande; como las cards usan object-contain, esas se ven más chicas que las demás.

Uso:
  python -I scripts/trim_images.py --check <img_o_carpeta> ...   (solo informa cuánto margen tienen)
  python -I scripts/trim_images.py <img_o_carpeta> ...           (recorta en el lugar)
Requiere: pip install pymupdf
"""
import pathlib
import sys

import pymupdf

WHITE = 238      # un canal por encima de esto se considera fondo blanco
PAD = 0.04       # margen que se deja alrededor del producto (proporción del lado mayor)
MIN_GAIN = 0.10  # tolerancia: recorta si algún margen supera PAD + 5% del lado mayor del producto


def load_rgb(path):
    pix = pymupdf.Pixmap(str(path))
    if pix.alpha:
        pix = pymupdf.Pixmap(pix, 0)
    if pix.n != 3:
        pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
    return pix


def content_box(pix):
    w, h, stride = pix.width, pix.height, pix.stride
    data = pix.samples
    rows = [y for y in range(h) if min(data[y * stride:y * stride + w * 3]) < WHITE]
    if not rows:
        return None
    top, bottom = rows[0], rows[-1]
    band = b"".join(data[y * stride:y * stride + w * 3] for y in range(top, bottom + 1))
    cols = [x for x in range(w) if min(min(band[x * 3 + c::w * 3]) for c in range(3)) < WHITE]
    return cols[0], top, cols[-1], bottom


def trim(path, check_only):
    pix = load_rgb(path)
    box = content_box(pix)
    if not box:
        return f"{path.name}: vacía"
    x0, y0, x1, y1 = box
    fill_w, fill_h = (x1 - x0 + 1) / pix.width, (y1 - y0 + 1) / pix.height
    info = f"{path.name}: {pix.width}x{pix.height} producto ocupa {fill_w:.0%} x {fill_h:.0%}"
    bw, bh = x1 - x0 + 1, y1 - y0 + 1
    pad = int(max(bw, bh) * PAD)
    side = max(bw, bh) + 2 * pad
    tolerance = max(3, side * MIN_GAIN / 2)
    if abs(pix.width - pix.height) <= 3 and abs(pix.width - side) <= tolerance:
        return info + " (ok)"
    if check_only:
        return info + " -> RECORTAR"

    # Lienzo cuadrado: las cards con varias fotos (images[]) se desbordan con imágenes altas y angostas.
    off_x, off_y = (side - bw) // 2, (side - bh) // 2
    out = bytearray(b"\xff" * (side * side * 3))
    data, stride = pix.samples, pix.stride
    for y in range(y0, y1 + 1):
        row = data[y * stride + x0 * 3:y * stride + (x1 + 1) * 3]
        start = ((y - y0 + off_y) * side + off_x) * 3
        out[start:start + len(row)] = row
    new = pymupdf.Pixmap(pymupdf.csRGB, side, side, bytes(out), False)
    path.write_bytes(new.tobytes("jpg", jpg_quality=92))
    return info + f" -> recortada a {side}x{side}"


def main():
    args = sys.argv[1:]
    check_only = "--check" in args
    targets = [pathlib.Path(a) for a in args if a != "--check"]
    files = []
    for t in targets:
        files += sorted(t.glob("*.jpg")) if t.is_dir() else [t]
    for f in files:
        print(trim(f, check_only))


if __name__ == "__main__":
    main()
