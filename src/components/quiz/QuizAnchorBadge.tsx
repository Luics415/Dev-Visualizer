"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export interface QuizAnchorBadgeProps {
  collectionTitle: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  className?: string;
}

export function QuizAnchorBadge({
  collectionTitle,
  score,
  totalQuestions,
  percentage,
  className = "",
}: QuizAnchorBadgeProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, scale: 1 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [burstKey, setBurstKey] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rx = ((y - centerY) / centerY) * -10;
    const ry = ((x - centerX) / centerX) * 10;

    setTilt({ rx, ry, scale: 1.03 });
    setGlare({ x, y, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0, scale: 1 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleTriggerBurst = () => {
    setBurstKey((prev) => prev + 1);
  };

  const rankLabel =
    percentage >= 100
      ? "DIAMANTE (100%)"
      : percentage >= 85
      ? `PLATINO (${percentage}%)`
      : `ORO (${percentage}%)`;

  return (
    <div
      ref={cardRef}
      className={`quiz-anchor-badge-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label={`Insignia de maestría en ${collectionTitle}`}
    >
      <div
        className="quiz-anchor-badge"
        style={{
          transform: `rotateX(${tilt.rx.toFixed(2)}deg) rotateY(${tilt.ry.toFixed(2)}deg) scale3d(${tilt.scale}, ${tilt.scale}, ${tilt.scale})`,
        }}
        onClick={handleTriggerBurst}
      >
        {/* Reflejo especular que sigue la posición del puntero */}
        <div
          className="quiz-anchor-badge__glare"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}px ${glare.y}px, rgba(255, 255, 255, 0.22) 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />

        {/* Shimmer holográfico continuo */}
        <div className="quiz-anchor-badge__sheen" aria-hidden="true" />

        {/* Encabezado de la Insignia */}
        <div className="quiz-anchor-badge__top">
          <span className="quiz-anchor-badge__chip">
            <span className="quiz-anchor-badge__chip-star">★</span>
            INSIGNIA OFICIAL DE MAESTRÍA
          </span>
          <span className="quiz-anchor-badge__status">
            <span className="quiz-anchor-badge__pulse-dot" />
            En LocalStorage
          </span>
        </div>

        {/* Escultura Central del Ancla Reliquia 3D */}
        <div className="quiz-anchor-badge__stage">
          {/* Anillos orbitales de resonancia cósmica */}
          <div className="quiz-anchor-badge__orbit" aria-hidden="true">
            <div className="quiz-anchor-badge__orbit-bead quiz-anchor-badge__orbit-bead--cyan" />
            <div className="quiz-anchor-badge__orbit-bead quiz-anchor-badge__orbit-bead--purple" />
          </div>

          {/* Partículas cuánticas ascendentes */}
          <div className="quiz-anchor-badge__ember quiz-anchor-badge__ember--1" aria-hidden="true" />
          <div className="quiz-anchor-badge__ember quiz-anchor-badge__ember--2" aria-hidden="true" />
          <div className="quiz-anchor-badge__ember quiz-anchor-badge__ember--3" aria-hidden="true" />

          {/* Ancla Oficial (512x512) sin punto verde superpuesto */}
          <div className="quiz-anchor-badge__sculpture">
            <Image
              src={`${basePath}/brand/dev-visualizer-icon.png`}
              alt="Ancla Oficial de Dev Visualizer"
              width={200}
              height={200}
              className="quiz-anchor-badge__image"
              priority
            />
          </div>

          {/* Cinta de titanio curvada orgánica que abraza la forma de las uñas del ancla */}
          <div className="quiz-anchor-badge__ribbon">
            <div className="quiz-anchor-badge__ribbon-inner">
              <span className="quiz-anchor-badge__spark">⚡</span>
              <strong className="quiz-anchor-badge__title">{collectionTitle}</strong>
              <span className="quiz-anchor-badge__spark">⚡</span>
            </div>

            <div className="quiz-anchor-badge__meta">
              <span className="quiz-anchor-badge__stat">
                Aciertos: <b>{score} / {totalQuestions}</b>
              </span>
              <span className="quiz-anchor-badge__meta-divider">·</span>
              <span className="quiz-anchor-badge__rank">
                Rango: <b>{rankLabel}</b>
              </span>
            </div>
          </div>
        </div>

        {/* Efecto de onda al pulsar */}
        {burstKey > 0 ? (
          <div key={burstKey} className="quiz-anchor-badge__burst" aria-hidden="true" />
        ) : null}

        {/* Pie de autenticidad */}
        <footer className="quiz-anchor-badge__footer">
          <span className="quiz-anchor-badge__lock">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Insignia inalterable · Resguardada en tu navegador
          </span>
          <span className="quiz-anchor-badge__hint">¡Toca o pasa el cursor!</span>
        </footer>
      </div>
    </div>
  );
}
