"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { RefObject } from "react";

export type ScenePlayback = "running" | "resting" | "reduced";

const visibilitySubscribers = new Set<() => void>();
const reducedMotionSubscribers = new Set<() => void>();
const viewportSubscribers = new Map<Element, Set<(visible: boolean) => void>>();
let visibilityListening = false;
let reducedMotionQuery: MediaQueryList | null = null;
let viewportObserver: IntersectionObserver | null = null;

function notifyVisibilitySubscribers() {
  visibilitySubscribers.forEach((notify) => notify());
}

function subscribeVisibility(notify: () => void) {
  if (typeof document === "undefined") return () => undefined;
  visibilitySubscribers.add(notify);
  if (!visibilityListening) {
    document.addEventListener("visibilitychange", notifyVisibilitySubscribers);
    visibilityListening = true;
  }
  return () => {
    visibilitySubscribers.delete(notify);
    if (visibilitySubscribers.size === 0 && visibilityListening) {
      document.removeEventListener("visibilitychange", notifyVisibilitySubscribers);
      visibilityListening = false;
    }
  };
}

function pageVisibleSnapshot() {
  return typeof document === "undefined" || document.visibilityState === "visible";
}

function motionPreference() {
  if (typeof window === "undefined") return null;
  reducedMotionQuery ??= window.matchMedia("(prefers-reduced-motion: reduce)");
  return reducedMotionQuery;
}

function notifyReducedMotionSubscribers() {
  reducedMotionSubscribers.forEach((notify) => notify());
}

function subscribeReducedMotion(notify: () => void) {
  const query = motionPreference();
  if (!query) return () => undefined;
  reducedMotionSubscribers.add(notify);
  if (reducedMotionSubscribers.size === 1) query.addEventListener("change", notifyReducedMotionSubscribers);
  return () => {
    reducedMotionSubscribers.delete(notify);
    if (reducedMotionSubscribers.size === 0) query.removeEventListener("change", notifyReducedMotionSubscribers);
  };
}

function reducedMotionSnapshot() {
  return motionPreference()?.matches ?? false;
}

function sharedViewportObserver() {
  if (typeof IntersectionObserver === "undefined") return null;
  viewportObserver ??= new IntersectionObserver((entries) => {
    for (const entry of entries) {
      const visible = entry.isIntersecting && entry.intersectionRatio >= .08;
      viewportSubscribers.get(entry.target)?.forEach((notify) => notify(visible));
    }
  }, { threshold: [0, .08] });
  return viewportObserver;
}

function useSharedInView(ref: RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const observer = sharedViewportObserver();
    if (!element || !observer) return undefined;
    const subscribers = viewportSubscribers.get(element) ?? new Set<(visible: boolean) => void>();
    subscribers.add(setInView);
    viewportSubscribers.set(element, subscribers);
    observer.observe(element);
    return () => {
      const current = viewportSubscribers.get(element);
      current?.delete(setInView);
      if (current?.size === 0) {
        viewportSubscribers.delete(element);
        observer.unobserve(element);
      }
      if (viewportSubscribers.size === 0) {
        observer.disconnect();
        viewportObserver = null;
      }
    };
  }, [ref]);

  return inView;
}

/**
 * Control compartido para escenas autónomas: solo reproduce cuando la escena
 * está visible, la pestaña está activa y el usuario no pide menos movimiento.
 */
export function useScenePlayback(ref: RefObject<HTMLElement | null>) {
  const inView = useSharedInView(ref);
  const pageVisible = useSyncExternalStore(subscribeVisibility, pageVisibleSnapshot, () => true);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, reducedMotionSnapshot, () => false);

  const shouldAnimate = inView && pageVisible && !reducedMotion;
  const playback: ScenePlayback = reducedMotion ? "reduced" : shouldAnimate ? "running" : "resting";

  return { playback, shouldAnimate } as const;
}
