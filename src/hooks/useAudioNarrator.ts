"use client";

import { useSyncExternalStore } from "react";
import {
  audioNarrator,
  DEFAULT_SERVER_SNAPSHOT,
  type AudioTrack,
  type AudioSpeed,
} from "@/lib/audioNarrator";

const getServerSnapshot = () => DEFAULT_SERVER_SNAPSHOT;

export function useAudioNarrator() {
  const snapshot = useSyncExternalStore(
    (notify) => audioNarrator.subscribe(notify),
    () => audioNarrator.getSnapshot(),
    getServerSnapshot
  );

  return {
    ...snapshot,
    speak: (track: AudioTrack, startChunkIndex?: number) => audioNarrator.speak(track, startChunkIndex),
    pause: () => audioNarrator.pause(),
    resume: () => audioNarrator.resume(),
    stop: () => audioNarrator.stop(),
    toggle: (track: AudioTrack) => audioNarrator.toggle(track),
    seekChunk: (index: number) => audioNarrator.seekChunk(index),
    setSpeed: (speed: AudioSpeed) => audioNarrator.setSpeed(speed),
    cycleSpeed: () => audioNarrator.cycleSpeed(),
    setVoice: (voiceURI: string) => audioNarrator.setVoice(voiceURI),
  };
}
