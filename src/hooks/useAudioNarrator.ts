"use client";

import { useSyncExternalStore } from "react";
import { audioNarrator, type AudioTrack, type AudioSpeed } from "@/lib/audioNarrator";

const getServerSnapshot = () => ({
  activeTrack: null,
  status: "idle" as const,
  speed: 1 as AudioSpeed,
  isSupported: false,
});

export function useAudioNarrator() {
  const snapshot = useSyncExternalStore(
    (notify) => audioNarrator.subscribe(notify),
    () => audioNarrator.getSnapshot(),
    getServerSnapshot
  );

  return {
    ...snapshot,
    speak: (track: AudioTrack) => audioNarrator.speak(track),
    pause: () => audioNarrator.pause(),
    resume: () => audioNarrator.resume(),
    stop: () => audioNarrator.stop(),
    toggle: (track: AudioTrack) => audioNarrator.toggle(track),
    setSpeed: (speed: AudioSpeed) => audioNarrator.setSpeed(speed),
    cycleSpeed: () => audioNarrator.cycleSpeed(),
  };
}
