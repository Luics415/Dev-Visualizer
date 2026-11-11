/**
 * Dev Visualizer — Hook y Envoltorio de Permanencia por Apartado (Feature F9)
 * src/hooks/useSectionDwellTime.ts
 *
 * Mide el tiempo de permanencia activa (dwell time) mediante IntersectionObserver
 * y Page Visibility API, filtrando rebotes menores a 2 segundos y tolerando
 * navegación SPA y cambios de pestaña.
 */

"use client";

import React, { useEffect, useRef } from "react";
import { trackSectionDwell } from "@/lib/telemetry";

export interface UseSectionDwellTimeOptions {
  sectionId: string;
  minDwellSeconds?: number; // default: 2
  threshold?: number;       // default: 0.5
}

/**
 * Hook para monitorear el tiempo de lectura o interacción activa sobre un elemento.
 */
export function useSectionDwellTime<T extends HTMLElement = HTMLDivElement>(
  options: UseSectionDwellTimeOptions
): React.RefObject<T | null> {
  const { sectionId, minDwellSeconds = 2, threshold = 0.5 } = options;
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || typeof window === "undefined") {
      return;
    }

    let startTime: number | null = null;
    let accumulatedMs = 0;
    let isIntersecting = false;

    const flushDwell = () => {
      if (isIntersecting && startTime !== null) {
        accumulatedMs += Date.now() - startTime;
        startTime = null;
      }
      const totalSeconds = accumulatedMs / 1000;
      if (totalSeconds >= minDwellSeconds) {
        trackSectionDwell(sectionId, totalSeconds);
      }
      accumulatedMs = 0;
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        if (isIntersecting && startTime !== null) {
          accumulatedMs += Date.now() - startTime;
          startTime = null;
        }
      } else if (document.visibilityState === "visible") {
        if (isIntersecting && startTime === null) {
          startTime = Date.now();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          if (!isIntersecting) {
            isIntersecting = true;
            if (document.visibilityState === "visible") {
              startTime = Date.now();
            }
          }
        } else {
          if (isIntersecting) {
            if (startTime !== null) {
              accumulatedMs += Date.now() - startTime;
              startTime = null;
            }
            isIntersecting = false;
            flushDwell();
          }
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.disconnect();
      flushDwell();
    };
  }, [sectionId, minDwellSeconds, threshold]);

  return ref;
}

export interface TrackedSectionProps extends React.HTMLAttributes<HTMLElement> {
  sectionId: string;
  as?: "section" | "div" | "article" | "aside";
  minDwellSeconds?: number;
  threshold?: number;
  children: React.ReactNode;
}

/**
 * Componente envoltorio para secciones y capítulos dinámicos (.map)
 * que garantiza el cumplimiento de las Rules of Hooks de React.
 */
export function TrackedSection({
  sectionId,
  as: Component = "section",
  minDwellSeconds = 2,
  threshold = 0.5,
  children,
  ...rest
}: TrackedSectionProps) {
  const ref = useSectionDwellTime<HTMLElement>({
    sectionId,
    minDwellSeconds,
    threshold,
  });

  return React.createElement(Component, { ref, ...rest }, children);
}
