"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import { useAudioNarrator } from "@/hooks/useAudioNarrator";
import { useIsClient } from "@/hooks/useIsClient";
import { splitTextIntoNarrationChunks, type AudioTrack } from "@/lib/audioNarrator";

type FloatingAudioBubbleProps = {
  collectionName?: string;
  collectionTitle?: string;
  tracks: readonly AudioTrack[];
};

export function FloatingAudioBubble({ collectionName, collectionTitle, tracks }: FloatingAudioBubbleProps) {
  const resolvedName = collectionName ?? collectionTitle ?? "Colección";
  const isClient = useIsClient();
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    activeTrack,
    status,
    speed,
    currentChunkIndex,
    chunks,
    progress,
    speak,
    pause,
    resume,
    stop,
    seekChunk,
    cycleSpeed,
    availableVoices,
    selectedVoiceURI,
    setVoice,
    isSupported,
  } = useAudioNarrator();

  const scrollerRef = useRef<HTMLDivElement>(null);
  const sentenceRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isUserInteractingRef = useRef(false);
  const userInteractionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  // Encontrar el índice de la pista activa o usar la primera como referencia inicial
  const currentIndex = activeTrack ? tracks.findIndex((t) => t.id === activeTrack.id) : 0;
  const currentTrack = (currentIndex >= 0 ? tracks[currentIndex] : null) ?? tracks[0];

  const isSpeaking = status === "speaking";
  const isPaused = status === "paused";
  const isActive = isSpeaking || isPaused;
  const isCurrentTrackActive = Boolean(activeTrack && currentTrack && activeTrack.id === currentTrack.id);

  // Dividir el texto en fragmentos para visualización sincronizada
  const displayChunks = useMemo(() => {
    if (!currentTrack) return [];
    if (isCurrentTrackActive && chunks && chunks.length > 0) {
      return chunks;
    }
    return splitTextIntoNarrationChunks(currentTrack.text);
  }, [isCurrentTrackActive, chunks, currentTrack]);

  const updateScrollButtons = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const hasOverflow = el.scrollHeight > el.clientHeight + 2;
    setCanScrollUp(el.scrollTop > 4);
    setCanScrollDown(hasOverflow && el.scrollTop + el.clientHeight < el.scrollHeight - 4);
  };

  const handleUserInteraction = () => {
    isUserInteractingRef.current = true;
    if (userInteractionTimeoutRef.current) {
      clearTimeout(userInteractionTimeoutRef.current);
    }
    userInteractionTimeoutRef.current = setTimeout(() => {
      isUserInteractingRef.current = false;
    }, 3500);
    updateScrollButtons();
  };

  const scrollByDirection = (dir: "up" | "down") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    handleUserInteraction();
    const delta = dir === "down" ? 44 : -44;
    scroller.scrollBy({ top: delta, behavior: "smooth" });
    setTimeout(updateScrollButtons, 150);
  };

  // Sincronización automática de desplazamiento al ritmo de la locución
  useEffect(() => {
    if (!isCurrentTrackActive || (!isSpeaking && !isPaused)) return;
    if (isUserInteractingRef.current) return;

    const activeEl = sentenceRefs.current[currentChunkIndex];
    const scroller = scrollerRef.current;
    if (!activeEl || !scroller) return;

    const scrollerRect = scroller.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();
    const relativeTop = elRect.top - scrollerRect.top + scroller.scrollTop;
    const targetTop = Math.max(0, relativeTop - (scroller.clientHeight / 2) + (elRect.height / 2));

    scroller.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 150);
  }, [isCurrentTrackActive, isSpeaking, isPaused, currentChunkIndex]);

  // Reset de posición al cambiar de track o detenerse
  useEffect(() => {
    if (status === "idle" || !isCurrentTrackActive) {
      scrollerRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(updateScrollButtons, 150);
    }
  }, [status, currentTrack?.id, isCurrentTrackActive]);

  // Verificar capacidad de scroll inicial al cambiar track o expandir panel
  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(updateScrollButtons, 100);
      return () => clearTimeout(timer);
    }
  }, [isExpanded, currentTrack?.id, displayChunks]);

  useEffect(() => {
    return () => {
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
    };
  }, []);

  const isAudioUnsupported = isClient && !isSupported && !(typeof window !== "undefined" && "speechSynthesis" in window);

  if (isAudioUnsupported || !tracks || tracks.length === 0 || !currentTrack) {
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

  const handleSentenceClick = (index: number) => {
    handleUserInteraction();
    if (isCurrentTrackActive) {
      seekChunk(index);
    } else {
      speak(currentTrack, index);
    }
  };

  const progressPct = isCurrentTrackActive && (isSpeaking || isPaused)
    ? Math.round(progress * 100)
    : 0;

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
        /* VISTA EXTENDIDA: Panel interactivo completo con controles didácticos y lectura sincronizada */
        <div className="floating-audio-bubble__panel">
          <header className="floating-audio-bubble__header">
            <div className="floating-audio-bubble__brand">
              <span className="floating-audio-bubble__dot" aria-hidden="true" />
              <strong>Lectura didáctica</strong>
              <small>{resolvedName}</small>
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

            {/* Contenedor de lectura sincronizada con scroll bidireccional (PC y Android) */}
            <div className="floating-audio-bubble__text-container">
              <div
                ref={scrollerRef}
                className="floating-audio-bubble__text-scroller"
                onWheel={handleUserInteraction}
                onTouchStart={handleUserInteraction}
                onScroll={updateScrollButtons}
                role="region"
                aria-label="Lectura didáctica con desplazamiento sincronizado"
                tabIndex={0}
              >
                {displayChunks.map((chunk, idx) => {
                  const isSentenceActive =
                    isCurrentTrackActive && (isSpeaking || isPaused) && currentChunkIndex === idx;
                  return (
                    <span
                      key={`${currentTrack.id}-chunk-${idx}`}
                      ref={(el) => {
                        sentenceRefs.current[idx] = el;
                      }}
                      className={`floating-audio-bubble__sentence ${isSentenceActive ? "floating-audio-bubble__sentence--active" : ""}`}
                      onClick={() => handleSentenceClick(idx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSentenceClick(idx);
                        }
                      }}
                      title={`Ir a esta frase: "${chunk}"`}
                      aria-current={isSentenceActive ? "true" : undefined}
                    >
                      {chunk}{" "}
                    </span>
                  );
                })}
              </div>

              {/* Controles de desplazamiento manual y feedback visual */}
              <div className="floating-audio-bubble__scroll-hints">
                <button
                  type="button"
                  className="floating-audio-bubble__scroll-btn"
                  onClick={() => scrollByDirection("up")}
                  aria-label="Desplazar texto hacia arriba"
                  title="Desplazar hacia arriba"
                  disabled={!canScrollUp}
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="floating-audio-bubble__scroll-btn"
                  onClick={() => scrollByDirection("down")}
                  aria-label="Desplazar texto hacia abajo"
                  title="Desplazar hacia abajo"
                  disabled={!canScrollDown}
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              </div>

              {/* Barra de progreso de lectura ultra-fina */}
              <div className="floating-audio-bubble__progress-track" aria-hidden="true">
                <div
                  className="floating-audio-bubble__progress-fill"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
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

            <div className="floating-audio-bubble__actions">
              {availableVoices.length > 0 ? (
                <div className="floating-audio-bubble__voice-wrapper">
                  <select
                    className="floating-audio-bubble__voice-select"
                    value={selectedVoiceURI ?? ""}
                    onChange={(e) => setVoice(e.target.value)}
                    aria-label="Seleccionar acento regional y voz de narración"
                    title="Cambiar voz / acento"
                  >
                    {availableVoices.map((v) => (
                      <option key={v.voiceURI} value={v.voiceURI}>
                        {v.region} · {v.name}
                      </option>
                    ))}
                  </select>
                </div>
              ) : null}

              <button
                type="button"
                className="floating-audio-bubble__speed-btn"
                onClick={cycleSpeed}
                aria-label={`Velocidad de locución actual: ${speed}x. Cambiar velocidad.`}
                title={`Velocidad: ${speed}x (Clic para cambiar)`}
              >
                <span>{speed}x</span>
              </button>
            </div>
          </footer>
        </div>
      )}
    </aside>
  );
}
