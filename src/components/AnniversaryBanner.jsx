import React, { useEffect, useRef } from 'react';
import { PartyPopper, Star, Sparkles, Heart } from 'lucide-react';

// Confetti particle data - deterministic so no hydration mismatch
const CONFETTI_PARTICLES = [
  { id: 0, left: 5,   delay: 0,    dur: 4.2, color: '#F0C040', size: 7,  shape: 'circle' },
  { id: 1, left: 12,  delay: 0.6,  dur: 3.8, color: '#FF6B9D', size: 5,  shape: 'rect' },
  { id: 2, left: 19,  delay: 1.1,  dur: 4.6, color: '#4ECDC4', size: 6,  shape: 'circle' },
  { id: 3, left: 26,  delay: 0.3,  dur: 3.5, color: '#F0C040', size: 4,  shape: 'rect' },
  { id: 4, left: 33,  delay: 1.8,  dur: 4.9, color: '#FF8C42', size: 7,  shape: 'circle' },
  { id: 5, left: 40,  delay: 0.8,  dur: 3.2, color: '#FFD6E0', size: 5,  shape: 'rect' },
  { id: 6, left: 47,  delay: 2.1,  dur: 4.4, color: '#A78BFA', size: 6,  shape: 'circle' },
  { id: 7, left: 54,  delay: 0.4,  dur: 5.0, color: '#F0C040', size: 4,  shape: 'rect' },
  { id: 8, left: 61,  delay: 1.4,  dur: 3.9, color: '#FF6B9D', size: 7,  shape: 'circle' },
  { id: 9, left: 68,  delay: 2.5,  dur: 4.1, color: '#4ECDC4', size: 5,  shape: 'rect' },
  { id: 10, left: 75, delay: 0.9,  dur: 3.7, color: '#FF8C42', size: 6,  shape: 'circle' },
  { id: 11, left: 82, delay: 1.6,  dur: 4.8, color: '#A78BFA', size: 4,  shape: 'rect' },
  { id: 12, left: 89, delay: 0.2,  dur: 3.4, color: '#F0C040', size: 7,  shape: 'circle' },
  { id: 13, left: 95, delay: 1.9,  dur: 4.3, color: '#FF6B9D', size: 5,  shape: 'rect' },
  { id: 14, left: 9,  delay: 2.8,  dur: 5.1, color: '#4ECDC4', size: 6,  shape: 'circle' },
  { id: 15, left: 36, delay: 3.2,  dur: 4.0, color: '#FFD6E0', size: 4,  shape: 'rect' },
  { id: 16, left: 57, delay: 2.0,  dur: 3.6, color: '#F0C040', size: 7,  shape: 'circle' },
  { id: 17, left: 78, delay: 3.5,  dur: 4.7, color: '#A78BFA', size: 5,  shape: 'rect' },
  { id: 18, left: 22, delay: 1.3,  dur: 4.5, color: '#FF8C42', size: 6,  shape: 'circle' },
  { id: 19, left: 92, delay: 0.7,  dur: 3.3, color: '#FF6B9D', size: 4,  shape: 'rect' },
];

export default function AnniversaryBanner() {
  return (
    <div className="anniversary-banner">
      {/* Confetti layer */}
      <div className="confetti-container" aria-hidden="true">
        {CONFETTI_PARTICLES.map((p) => (
          <div
            key={p.id}
            className={`confetti-particle confetti-${p.shape}`}
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              backgroundColor: p.color,
              width: `${p.size}px`,
              height: p.shape === 'rect' ? `${p.size * 1.6}px` : `${p.size}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="anniversary-content">
        {/* Left accent */}
        <div className="anniversary-accent-left" aria-hidden="true">
          <PartyPopper className="anniversary-icon-pop" />
          <div className="anniversary-stars">
            <Star className="anniversary-star s1" fill="currentColor" />
            <Star className="anniversary-star s2" fill="currentColor" />
            <Star className="anniversary-star s3" fill="currentColor" />
          </div>
        </div>

        {/* Central message */}
        <div className="anniversary-message">
          <div className="anniversary-eyebrow">
            <Sparkles className="eyebrow-icon" />
            <span>¡Celebramos un mes más juntos!</span>
            <Sparkles className="eyebrow-icon" />
          </div>
          <p className="anniversary-headline">
            🎉 <strong>G.P.S Distribuciones</strong> — Gracias por elegirnos, mes a mes 🎊
          </p>
          <p className="anniversary-sub">
            Cada pedido, cada cliente y cada entrega son el motor que nos hace crecer. ¡A seguir construyendo juntos!
          </p>
        </div>

        {/* Right accent */}
        <div className="anniversary-accent-right" aria-hidden="true">
          <div className="anniversary-stars">
            <Star className="anniversary-star s1" fill="currentColor" />
            <Star className="anniversary-star s2" fill="currentColor" />
            <Star className="anniversary-star s3" fill="currentColor" />
          </div>
          <Heart className="anniversary-icon-heart" fill="currentColor" />
        </div>
      </div>

      {/* Shimmer sweep */}
      <div className="anniversary-shimmer" aria-hidden="true" />
    </div>
  );
}
