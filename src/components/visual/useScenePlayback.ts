"use client";

import { useEffect, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import type { RefObject } from "react";

export type ScenePlayback = "running" | "resting" | "reduced";

/**
 * Control compartido para escenas autónomas: solo reproduce cuando la escena
 * está visible, la pestaña está activa y el usuario no pide menos movimiento.
 */
export function useScenePlayback(ref: RefObject<HTMLElement | null>) {
  const inView = useInView(ref, { amount: 0.08, margin: "0px" });
  const reducedMotion = useReducedMotion();
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const syncVisibility = () => setPageVisible(document.visibilityState === "visible");
    syncVisibility();
    document.addEventListener("visibilitychange", syncVisibility);
    return () => document.removeEventListener("visibilitychange", syncVisibility);
  }, []);

  const shouldAnimate = inView && pageVisible && !reducedMotion;
  const playback: ScenePlayback = reducedMotion ? "reduced" : shouldAnimate ? "running" : "resting";

  return { playback, shouldAnimate } as const;
}
