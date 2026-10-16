"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Hook canónico para detectar montaje en el cliente de forma segura en React 19 y Next.js 16,
 * evitando discrepancias de hidratación y sin violar la regla set-state-in-effect.
 */
export function useIsClient(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}
