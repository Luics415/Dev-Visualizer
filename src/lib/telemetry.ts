/**
 * Dev Visualizer — Módulo Central de Telemetría Educativa (Feature F6)
 * src/lib/telemetry.ts
 *
 * Arquitectura desacoplada, tipada y resiliente construida sobre @next/third-parties/google.
 * Garantiza Privacidad Absoluta (Cero PII conforme a LFPDPPP/GDPR/CCPA),
 * tolerancia a fallos en SSR/SSG, modo sin conexión (offline) y bloqueadores de anuncios (AdBlockers).
 */

import { sendGAEvent } from "@next/third-parties/google";

export interface BaseTelemetryEvent {
  event_category: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
}

// Patrones estrictos de detección de datos personales identificables (Cero PII)
const PII_KEY_REGEX = /(?:email|password|passwd|token|secret|api[_-]?key|auth[_-]?token|bearer)/i;
const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const IPV4_REGEX = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
const IPV6_REGEX = /(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::(?:[0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4}|(?:[0-9a-fA-F]{1,4}:)+:(?:[0-9a-fA-F]{1,4}:)*[0-9a-fA-F]{1,4}|fe80::[0-9a-fA-F:]+/;
const SENSITIVE_VALUE_REGEX = /\b(?:password|passwd|secret|token|apiKey|auth_token)\b/i;

/**
 * Sanitiza recursivamente un objeto de parámetros para garantizar Cero PII.
 * Es una función pura: nunca muta el objeto original suministrado (inmutabilidad estricta).
 */
export function sanitizeTelemetryParams(params: Record<string, unknown>): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(params)) {
    // 1. Descartar claves que representen credenciales, tokens o datos personales
    if (PII_KEY_REGEX.test(key) || EMAIL_REGEX.test(key) || IPV4_REGEX.test(key) || IPV6_REGEX.test(key)) {
      continue;
    }

    // 2. Descartar cadenas que contengan patrones de correo, IPs o credenciales
    if (typeof value === "string") {
      if (EMAIL_REGEX.test(value) || IPV4_REGEX.test(value) || IPV6_REGEX.test(value) || SENSITIVE_VALUE_REGEX.test(value)) {
        continue;
      }
      // Limitar longitud de texto libre para evitar desbordes accidentales
      sanitized[key] = value.length > 200 ? value.slice(0, 200) : value;
    } else if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      const nested = sanitizeTelemetryParams(value as Record<string, unknown>);
      if (Object.keys(nested).length > 0) {
        sanitized[key] = nested;
      }
    } else if (Array.isArray(value)) {
      sanitized[key] = value
        .map((item) => (typeof item === "string" ? (EMAIL_REGEX.test(item) || IPV4_REGEX.test(item) || IPV6_REGEX.test(item) || SENSITIVE_VALUE_REGEX.test(item) ? null : item) : typeof item === "object" && item !== null ? sanitizeTelemetryParams(item as Record<string, unknown>) : item))
        .filter((item) => item !== null);
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}

/**
 * Despacho seguro multinivel de eventos de telemetría:
 * 1. window.gtag (harness de pruebas E2E o gtag.js nativo inicializado)
 * 2. window.dataLayer.push (cola nativa de Google Tag Manager)
 * 3. sendGAEvent (@next/third-parties/google)
 * 4. try / catch silencioso ante AdBlockers, entornos offline y SSR.
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const sanitized = sanitizeTelemetryParams(params);

    const win = window as unknown as {
      gtag?: (...args: unknown[]) => void;
      dataLayer?: unknown[];
    };

    // Nivel 1: window.gtag directo
    if (typeof win.gtag === "function") {
      win.gtag("event", eventName, sanitized);
      return;
    }

    // Nivel 2: window.dataLayer
    if (win.dataLayer && Array.isArray(win.dataLayer)) {
      win.dataLayer.push(["event", eventName, sanitized]);
      return;
    }

    // Nivel 3: sendGAEvent de @next/third-parties
    try {
      const origWarn = console.warn;
      console.warn = () => {};
      try {
        sendGAEvent("event", eventName, sanitized);
      } finally {
        console.warn = origWarn;
      }
    } catch {
      // Ignorar fallos de despacho silenciosamente
    }
  } catch {
    // Tolerancia absoluta ante bloqueadores y desconexión
  }
}

/**
 * F7: Métrica de Colecciones Estudiadas
 * Registra el inicio de estudio de una colección didáctica o caso práctico.
 */
export function trackCollectionStudy(
  collectionId: string,
  title: string,
  type: "atlas" | "action" = "atlas"
): void {
  trackEvent("collection_study", {
    event_category: "study_progress",
    collection_id: collectionId,
    collection_title: title,
    study_type: type,
  });
}

/**
 * F8: Métrica de Clics en Botones Principales
 * Registra interacciones con CTAs de navegación, exportaciones y simuladores.
 */
export function trackButtonClick(
  buttonId: string,
  buttonName: string,
  location: string
): void {
  trackEvent("button_click", {
    event_category: "user_interaction",
    button_id: buttonId,
    button_name: buttonName,
    location,
  });
}

/**
 * F9: Métrica de Permanencia por Apartado
 * Registra el tiempo activo en segundos enteros (descartando rebotes menores a 2s).
 */
export function trackSectionDwell(sectionId: string, durationSeconds: number): void {
  if (durationSeconds < 2) {
    return; // Filtro de rebote: < 2 segundos se descarta
  }
  trackEvent("section_dwell", {
    event_category: "engagement",
    section_id: sectionId,
    duration_seconds: Math.round(durationSeconds),
  });
}

/**
 * F10: Métrica de Uso de la Librería Profesional
 * Registra búsquedas, filtros, clics en recursos externos y descargas locales.
 */
export function trackLibraryAction(
  action: "search" | "filter" | "resource_click" | "download",
  details: Record<string, unknown> = {}
): void {
  if (action === "search") {
    const q = typeof details.query === "string" ? details.query.trim() : "";
    if (!q) {
      return; // Supresión estricta de búsquedas vacías o solo espacios
    }
  }

  trackEvent("library_action", {
    event_category: "library",
    library_action_type: action,
    ...details,
  });
}

/**
 * F6 / F13: Despacho tipado de eventos de compuerta de autenticación previa a quizzes.
 */
export function trackQuizAuthEvent(
  action: "prompt" | "success" | "cancel",
  provider?: "google" | "email"
): void {
  const params: Record<string, unknown> = {
    event_category: "auth",
    auth_action: action,
  };
  if (provider) {
    params.auth_provider = provider;
  }
  trackEvent("quiz_auth_gate", params);
}

export interface SectionDwellTracker {
  observer: IntersectionObserver | null;
  flush: () => void;
  cleanup: () => void;
}

/**
 * Helper determinista de seguimiento de permanencia con IntersectionObserver.
 * Utilizado por pruebas unitarias (T1-F9-04/05) y como motor base para hooks.
 */
export function createSectionDwellTracker(
  sectionId: string,
  threshold: number = 0.5
): SectionDwellTracker {
  let startTime: number | null = null;
  let accumulatedMs = 0;
  let isTracking = false;

  const handleVisibilityChange = () => {
    if (typeof document === "undefined") return;
    if (document.visibilityState === "hidden") {
      if (isTracking && startTime !== null) {
        accumulatedMs += Date.now() - startTime;
        startTime = null;
      }
    } else if (document.visibilityState === "visible") {
      if (isTracking && startTime === null) {
        startTime = Date.now();
      }
    }
  };

  if (typeof document !== "undefined" && typeof document.addEventListener === "function") {
    document.addEventListener("visibilitychange", handleVisibilityChange);
  }

  const observer = typeof globalThis.IntersectionObserver !== "undefined"
    ? new globalThis.IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && entry.intersectionRatio >= threshold) {
          if (!isTracking) {
            startTime = Date.now();
            isTracking = true;
          }
        } else {
          if (isTracking && startTime !== null) {
            accumulatedMs += Date.now() - startTime;
            isTracking = false;
            startTime = null;
            const durationSeconds = accumulatedMs / 1000;
            if (durationSeconds >= 2) {
              trackSectionDwell(sectionId, durationSeconds);
              accumulatedMs = 0;
            }
          }
        }
      }, { threshold })
    : null;

  return {
    observer,
    flush() {
      if (isTracking && startTime !== null) {
        accumulatedMs += Date.now() - startTime;
        isTracking = false;
        startTime = null;
      }
      const durationSeconds = accumulatedMs / 1000;
      if (durationSeconds >= 2) {
        trackSectionDwell(sectionId, durationSeconds);
      }
      accumulatedMs = 0;
    },
    cleanup() {
      this.flush();
      if (typeof document !== "undefined" && typeof document.removeEventListener === "function") {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      }
      if (observer && typeof observer.disconnect === "function") {
        observer.disconnect();
      }
    },
  };
}
