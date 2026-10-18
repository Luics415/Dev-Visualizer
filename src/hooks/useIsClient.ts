"use client";

import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  // Notifica tras el montaje para actualizar de getServerSnapshot (false) a getSnapshot (true)
  const timer = setTimeout(onStoreChange, 0);
  return () => clearTimeout(timer);
}

/**
 * Hook canónico para detectar montaje en el cliente de forma confiable en React 19 y Next.js 16,
 * evitando discrepancias de hidratación y cumpliendo con las reglas de linting de React 19.
 */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
