import React from 'react';
import { 
  Package,
  Truck,
  Percent,
  Flame,
  Gift,
  ChevronRight
} from 'lucide-react';

const CONFETTI = [
  { id: 0,  left: 4,   top: 10, color: '#E8192C', size: 9,  shape: 'rect',   delay: 0,   dur: 6.5, rot: 15 },
  { id: 1,  left: 8,   top: 68, color: '#1B3FAB', size: 7,  shape: 'circle', delay: 0.8, dur: 7.1, rot: 0 },
  { id: 2,  left: 15,  top: 22, color: '#F5C518', size: 8,  shape: 'rect',   delay: 1.4, dur: 5.8, rot: 45 },
  { id: 3,  left: 22,  top: 78, color: '#E8192C', size: 6,  shape: 'circle', delay: 0.3, dur: 6.9, rot: 0 },
  { id: 4,  left: 30,  top: 14, color: '#1B3FAB', size: 9,  shape: 'rect',   delay: 2.1, dur: 6.2, rot: -25 },
  { id: 5,  left: 48,  top: 8,  color: '#E8192C', size: 7,  shape: 'rect',   delay: 0.5, dur: 7.0, rot: 30 },
  { id: 6,  left: 64,  top: 18, color: '#1B3FAB', size: 6,  shape: 'rect',   delay: 0.9, dur: 6.4, rot: -15 },
  { id: 7,  left: 74,  top: 80, color: '#E8192C', size: 8,  shape: 'circle', delay: 2.4, dur: 6.0, rot: 0 },
  { id: 8,  left: 82,  top: 12, color: '#F5C518', size: 7,  shape: 'rect',   delay: 0.2, dur: 6.7, rot: 60 },
  { id: 9,  left: 92,  top: 70, color: '#1B3FAB', size: 8,  shape: 'circle', delay: 1.3, dur: 7.3, rot: 0 },
  { id: 10, left: 96,  top: 25, color: '#E8192C', size: 6,  shape: 'rect',   delay: 3.0, dur: 6.5, rot: -40 },
  { id: 11, left: 38,  top: 86, color: '#F5C518', size: 6,  shape: 'circle', delay: 1.0, dur: 5.9, rot: 0 },
  { id: 12, left: 12,  top: 48, color: '#E8192C', size: 5,  shape: 'rect',   delay: 0.6, dur: 6.8, rot: 20 },
  { id: 13, left: 6,   top: 38, color: '#F5C518', size: 7,  shape: 'rect',   delay: 1.7, dur: 6.3, rot: -30 },
  { id: 14, left: 18,  top: 55, color: '#1B3FAB', size: 5,  shape: 'circle', delay: 2.5, dur: 7.0, rot: 0 },
  { id: 15, left: 26,  top: 32, color: '#F5C518', size: 8,  shape: 'rect',   delay: 0.4, dur: 5.6, rot: 70 },
  { id: 16, left: 35,  top: 60, color: '#E8192C', size: 6,  shape: 'rect',   delay: 1.9, dur: 6.1, rot: -50 },
  { id: 17, left: 44,  top: 40, color: '#1B3FAB', size: 7,  shape: 'circle', delay: 0.7, dur: 7.2, rot: 0 },
  { id: 18, left: 53,  top: 75, color: '#F5C518', size: 5,  shape: 'rect',   delay: 3.2, dur: 6.0, rot: 35 },
  { id: 19, left: 60,  top: 50, color: '#E8192C', size: 9,  shape: 'rect',   delay: 1.1, dur: 6.6, rot: -20 },
  { id: 20, left: 68,  top: 88, color: '#1B3FAB', size: 6,  shape: 'circle', delay: 2.8, dur: 5.7, rot: 0 },
  { id: 21, left: 77,  top: 35, color: '#F5C518', size: 8,  shape: 'rect',   delay: 0.1, dur: 7.4, rot: 55 },
  { id: 22, left: 85,  top: 58, color: '#E8192C', size: 5,  shape: 'circle', delay: 1.6, dur: 6.2, rot: 0 },
  { id: 23, left: 90,  top: 44, color: '#F5C518', size: 7,  shape: 'rect',   delay: 2.2, dur: 5.5, rot: -65 },
  { id: 24, left: 42,  top: 20, color: '#1B3FAB', size: 6,  shape: 'rect',   delay: 0.9, dur: 6.9, rot: 40 },
  { id: 25, left: 56,  top: 92, color: '#E8192C', size: 7,  shape: 'circle', delay: 1.5, dur: 6.4, rot: 0 },
];

export default function HeroDeals({ totalOffersCount, onExploreClick }) {
  return (
    <section className="aniv-hero-wrapper" aria-label="Aniversario GPS Distribuciones">

      {/* Fondos festivos: resplandor y rayos tipo sunburst */}
      <div className="aniv-bg-glow" aria-hidden="true" />
      <div className="aniv-rays" aria-hidden="true" />

      {/* Confetti suave */}
      <div className="aniv-confetti-layer" aria-hidden="true">
        {CONFETTI.map((p) => (
          <div
            key={p.id}
            className={`aniv-confetti-dot aniv-confetti-${p.shape}`}
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              backgroundColor: p.color,
              width: `${p.size}px`,
              height: p.shape === 'rect' ? `${p.size * 1.6}px` : `${p.size}px`,
              transform: `rotate(${p.rot}deg)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="aniv-grid">

          {/* ══════════════════════════════════════════
              COLUMNA IZQUIERDA — Título y contenido principal
             ══════════════════════════════════════════ */}
          <div className="aniv-left">

            {/* Eyebrow badge pill "★ ANIVERSARIO GPS" */}
            <div className="aniv-badge-pill">
              <span className="aniv-badge-star">★</span>
              <span>ANIVERSARIO GPS DISTRIBUCIONES</span>
            </div>

            {/* Título de impacto exactamente como el flyer:
                Línea 1: "16 años" + 3 destellos amarillos
                Línea 2: "impulsando tu negocio" (tu negocio en rojo, sin ningún recuadro) */}
            <div className="aniv-title-group">
              <div className="aniv-title-row1">
                <span className="aniv-title-num">16</span>
                <span className="aniv-title-anos">años</span>
                {/* 3 destellos festivos amarillos \ | / */}
                <span className="aniv-sparks" aria-hidden="true">
                  <span className="aniv-spark-bar aniv-spark-1" />
                  <span className="aniv-spark-bar aniv-spark-2" />
                  <span className="aniv-spark-bar aniv-spark-3" />
                </span>
              </div>
              <div className="aniv-title-row2">
                <span className="aniv-title-impulsando">impulsando</span>
                {' '}
                <span className="aniv-title-negocio">tu negocio</span>
              </div>
            </div>

            {/* Subtítulo descriptivo */}
            <p className="aniv-description">
              Celebramos octubre con <strong>promociones, beneficios</strong> y sorpresas especiales.
            </p>

            {/* Pills de características */}
            <div className="aniv-features">
              <div className="aniv-feature-pill">
                <Package className="w-4 h-4 shrink-0 text-white/80" />
                <span>Venta mayorista</span>
              </div>
              <div className="aniv-feature-pill">
                <Truck className="w-4 h-4 shrink-0 text-white/80" />
                <span>Entrega en 48 hs</span>
              </div>
              <div className="aniv-feature-pill">
                <Percent className="w-4 h-4 shrink-0 text-white/80" />
                <span>Ofertas especiales</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="aniv-actions">
              <button
                onClick={() => {
                  const el = document.getElementById('ofertas-diarias');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="aniv-btn-primary"
              >
                <Flame className="w-4 h-4 fill-current shrink-0" />
                <span>Ofertas Comprá Ahora (28 SEP al 04 OCT)</span>
              </button>

              {onExploreClick && (
                <button onClick={onExploreClick} className="aniv-btn-secondary">
                  <span>Explorar Ofertas</span>
                </button>
              )}
            </div>

          </div>

          {/* ══════════════════════════════════════════
              COLUMNA DERECHA — Escenario festivo Octubre de Festejo
             ══════════════════════════════════════════ */}
          <div className="aniv-right">
            <div className="aniv-stage-container">

              {/* Globos izquierda — 3 globos */}
              <div className="aniv-balloon aniv-balloon-blue" aria-hidden="true">
                <div className="aniv-balloon-highlight" />
                <div className="aniv-balloon-knot" />
              </div>

              <div className="aniv-balloon aniv-balloon-red" aria-hidden="true">
                <div className="aniv-balloon-highlight" />
                <div className="aniv-balloon-knot" />
              </div>

              <div className="aniv-balloon aniv-balloon-gold aniv-balloon-left-3" aria-hidden="true">
                <div className="aniv-balloon-highlight" />
                <div className="aniv-balloon-knot" />
              </div>

              {/* Globos derecha — 3 globos (espejo) */}
              <div className="aniv-balloon aniv-balloon-red aniv-balloon-right-1" aria-hidden="true">
                <div className="aniv-balloon-highlight" />
                <div className="aniv-balloon-knot" />
              </div>

              <div className="aniv-balloon aniv-balloon-blue aniv-balloon-right-2" aria-hidden="true">
                <div className="aniv-balloon-highlight" />
                <div className="aniv-balloon-knot" />
              </div>

              <div className="aniv-balloon aniv-balloon-gold aniv-balloon-right-3" aria-hidden="true">
                <div className="aniv-balloon-highlight" />
                <div className="aniv-balloon-knot" />
              </div>

              {/* Tarjeta blanca "Octubre de festejo" */}
              <div className="aniv-oct-card">
                <div className="aniv-oct-card-ribbon">
                  <Gift className="w-4 h-4 text-white" />
                </div>
                <div className="aniv-oct-card-body">
                  <span className="aniv-oct-mes">Octubre</span>
                  <span className="aniv-oct-de">de festejo</span>
                  <p className="aniv-oct-sub">Un mes lleno de oportunidades para vos.</p>
                </div>
              </div>

              {/* Podio / Base 3D con banda ANIVERSARIO GPS */}
              <div className="aniv-podium">
                <div className="aniv-podium-top" />
                <div className="aniv-podium-band">
                  <span className="aniv-podium-spark">⸺ \</span>
                  <span className="aniv-podium-text">ANIVERSARIO</span>
                  <span className="aniv-podium-spark">/ ⸺</span>
                </div>
                <div className="aniv-podium-base" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
