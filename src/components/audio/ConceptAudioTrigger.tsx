"use client";

import { useAudioNarrator } from "@/hooks/useAudioNarrator";
import { useIsClient } from "@/hooks/useIsClient";
import type { AudioTrack } from "@/lib/audioNarrator";

type ConceptAudioTriggerProps = {
  track: AudioTrack;
  compact?: boolean;
  className?: string;
};

export function ConceptAudioTrigger({ track, compact = false, className = "" }: ConceptAudioTriggerProps) {
  const isClient = useIsClient();
  const { activeTrack, status, toggle } = useAudioNarrator();

  const isCurrent = isClient && activeTrack?.id === track.id;
  const isPlaying = isCurrent && status === "speaking";
  const isPaused = isCurrent && status === "paused";

  const label = isPlaying
    ? `Pausar lectura didáctica de ${track.title}`
    : isPaused
    ? `Reanudar lectura didáctica de ${track.title}`
    : `Escuchar explicación didáctica de ${track.title}`;

  return (
    <button
      type="button"
      className={`concept-audio-trigger ${isPlaying ? "concept-audio-trigger--playing" : ""} ${isPaused ? "concept-audio-trigger--paused" : ""} ${compact ? "concept-audio-trigger--compact" : ""} ${className}`}
      onClick={() => toggle(track)}
      aria-label={label}
      aria-pressed={isPlaying}
      title={label}
    >
      {isPlaying ? (
        <span className="audio-equalizer" aria-hidden="true">
          <span className="audio-equalizer__bar" />
          <span className="audio-equalizer__bar" />
          <span className="audio-equalizer__bar" />
        </span>
      ) : isPaused ? (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
      {!compact ? <span className="concept-audio-trigger__text">{isPlaying ? "Pausar voz" : "Escuchar"}</span> : null}
    </button>
  );
}
