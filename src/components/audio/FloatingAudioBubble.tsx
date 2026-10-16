"use client";

import { useState } from "react";
import { useAudioNarrator } from "@/hooks/useAudioNarrator";
import { useIsClient } from "@/hooks/useIsClient";
import type { AudioTrack } from "@/lib/audioNarrator";

type FloatingAudioBubbleProps = {
  collectionName: string;
  tracks: readonly AudioTrack[];
};

export function FloatingAudioBubble({ collectionName, tracks }: FloatingAudioBubbleProps) {
  const isClient = useIsClient();
  const [isExpanded, setIsExpanded] = useState(false);
  const { activeTrack, status, speed, speak, pause, resume, stop, cycleSpeed, isSupported } = useAudioNarrator();

  if (!isClient || !isSupported || !tracks || tracks.length === 0) {
    return null;
  }

  const isSpeaking = status === "speaking";
  const isPaused = status === "paused";
  const isActive = isSpeaking || isPaused;

  // Encontrar el índice de la pista activa o usar la primera como referencia inicial
  const currentIndex = activeTrack ? tracks.findIndex((t) => t.id === activeTrack.id) : 0;
  const currentTrack = (currentIndex >= 0 ? tracks[currentIndex] : null) ?? tracks[0];

  if (!currentTrack) {
    return null;
  }

  const handlePlayPause = () => {
    if (isSpeaking) {
      pause();
    } else if (isPaused) {
      resume();
    } else {
      speak(currentTrack);
    }
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % tracks.length;
    const nextTrack = tracks[nextIdx];
    if (nextTrack) speak(nextTrack);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + tracks.length) % tracks.length;
    const prevTrack = tracks[prevIdx];
    if (prevTrack) speak(prevTrack);
  };

  return (
    <aside
      className={`floating-audio-bubble ${isExpanded ? "floating-audio-bubble--expanded" : "floating-audio-bubble--collapsed"} ${isActive ? "floating-audio-bubble--active" : ""}`}
      aria-label="Reproductor de audio y guía de locución"
    >
      {/* VISTA CONTRAÍDA: Globo compacto para no tapar contenido ni estorbar en móviles */}
      {!isExpanded ? (
        <div className="floating-audio-bubble__mini">
          <button
            type="button"
            className="floating-audio-bubble__pill"
            onClick={() => setIsExpanded(true)}
            aria-label={
              isActive
                ? `Audio activo: ${activeTrack?.title ?? "concepto"}. Abrir controles.`
                : "Abrir guía de lectura por voz"
            }
            title="Abrir guía de lectura por voz"
          >
            {isSpeaking ? (
              <span className="audio-equalizer" aria-hidden="true">
                <span className="audio-equalizer__bar" />
                <span className="audio-equalizer__bar" />
                <span className="audio-equalizer__bar" />
              </span>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            )}
            <span className="floating-audio-bubble__pill-label">
              {isSpeaking ? activeTrack?.title ?? "Reproduciendo..." : isPaused ? "En pausa" : "Lectura por voz"}
            </span>
          </button>

          <button
            type="button"
            className="floating-audio-bubble__mini-toggle"
            onClick={handlePlayPause}
            aria-label={isSpeaking ? "Pausar audio" : "Reproducir audio"}
            title={isSpeaking ? "Pausar" : "Reproducir"}
          >
            {isSpeaking ? (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>
      ) : (
        /* VISTA EXTENDIDA: Panel interactivo completo con controles didácticos */
        <div className="floating-audio-bubble__panel">
          <header className="floating-audio-bubble__header">
            <div className="floating-audio-bubble__brand">
              <span className="floating-audio-bubble__dot" aria-hidden="true" />
              <strong>Lectura didáctica</strong>
              <small>{collectionName}</small>
            </div>
            <button
              type="button"
              className="floating-audio-bubble__close"
              onClick={() => setIsExpanded(false)}
              aria-label="Contraer reproductor de audio a globo flotante"
              title="Contraer reproductor"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </header>

          <div className="floating-audio-bubble__body">
            <div className="floating-audio-bubble__meta">
              <span className="floating-audio-bubble__badge">
                {currentTrack.family ?? "Concepto visual"}
              </span>
              {currentTrack.section ? (
                <span className="floating-audio-bubble__section">{currentTrack.section}</span>
              ) : null}
            </div>

            <h4 className="floating-audio-bubble__title">{currentTrack.title}</h4>
            <p className="floating-audio-bubble__text">{currentTrack.text}</p>
          </div>

          <footer className="floating-audio-bubble__controls">
            <div className="floating-audio-bubble__playback-group">
              <button
                type="button"
                className="floating-audio-bubble__btn"
                onClick={handlePrev}
                aria-label="Ir al concepto anterior"
                title="Concepto anterior"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <polygon points="19 20 9 12 19 4 19 20" />
                  <line x1="5" y1="19" x2="5" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <button
                type="button"
                className="floating-audio-bubble__btn floating-audio-bubble__btn--primary"
                onClick={handlePlayPause}
                aria-label={isSpeaking ? "Pausar lectura" : "Reproducir lectura"}
                title={isSpeaking ? "Pausar" : "Reproducir"}
              >
                {isSpeaking ? (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button
                type="button"
                className="floating-audio-bubble__btn"
                onClick={stop}
                disabled={!isActive}
                aria-label="Detener lectura"
                title="Detener"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <rect x="5" y="5" width="14" height="14" rx="2" />
                </svg>
              </button>

              <button
                type="button"
                className="floating-audio-bubble__btn"
                onClick={handleNext}
                aria-label="Ir al siguiente concepto"
                title="Siguiente concepto"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                  <polygon points="5 4 15 12 5 20 5 4" />
                  <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <button
              type="button"
              className="floating-audio-bubble__speed-btn"
              onClick={cycleSpeed}
              aria-label={`Velocidad de locución actual: ${speed}x. Cambiar velocidad.`}
              title={`Velocidad: ${speed}x (Clic para cambiar)`}
            >
              <span>{speed}x</span>
            </button>
          </footer>
        </div>
      )}
    </aside>
  );
}
