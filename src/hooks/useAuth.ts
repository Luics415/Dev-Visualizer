/**
 * Dev Visualizer — Hook Reactivo de Autenticación (Feature F12)
 * src/hooks/useAuth.ts
 *
 * Hook de React 19 / Next.js 16 basado en `useSyncExternalStore`.
 * Garantiza:
 * - Cero discrepancias de hidratación ("hydration mismatch") en SSR/SSG.
 * - Cero desincronización ("tearing") en renderizado concurrente.
 * - Sincronización automática entre múltiples componentes y pestañas.
 * - Referencias de funciones estables con `useCallback`.
 * - Cache de snapshot referencialmente estable para evitar loops infinitos.
 */

"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  type AuthUser,
  type AuthState,
  getStoredUser,
  signInWithGoogle as coreSignInWithGoogle,
  signInWithEmail as coreSignInWithEmail,
  signOut as coreSignOut,
  subscribeToAuth,
} from "@/lib/auth";

interface AuthClientSnapshot {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// Snapshot congelado para renderizado en servidor (SSR)
const SERVER_SNAPSHOT: AuthClientSnapshot = Object.freeze({
  user: null,
  isAuthenticated: false,
  isLoading: false,
});

// Cache referencial para getSnapshot en el cliente
let cachedSnapshot: AuthClientSnapshot | null = null;

function isUserEqual(a: AuthUser | null, b: AuthUser | null): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  return (
    a.id === b.id &&
    a.email === b.email &&
    a.provider === b.provider &&
    a.displayName === b.displayName &&
    a.photoURL === b.photoURL &&
    a.authenticatedAt === b.authenticatedAt
  );
}

function getClientSnapshot(): AuthClientSnapshot {
  const currentUser = getStoredUser();

  if (cachedSnapshot && isUserEqual(cachedSnapshot.user, currentUser)) {
    return cachedSnapshot;
  }

  cachedSnapshot = Object.freeze({
    user: currentUser,
    isAuthenticated: Boolean(currentUser),
    isLoading: false,
  });

  return cachedSnapshot;
}

function getServerSnapshot(): AuthClientSnapshot {
  return SERVER_SNAPSHOT;
}

/**
 * Hook reactivo principal para consumir el estado de autenticación en componentes cliente.
 */
export function useAuth(): AuthState {
  const snapshot = useSyncExternalStore(
    subscribeToAuth,
    getClientSnapshot,
    getServerSnapshot
  );

  const signInWithGoogle = useCallback(async (): Promise<AuthUser> => {
    return coreSignInWithGoogle();
  }, []);

  const signInWithEmail = useCallback(async (email: string): Promise<AuthUser> => {
    return coreSignInWithEmail(email);
  }, []);

  const signOut = useCallback((): void => {
    coreSignOut();
  }, []);

  return {
    user: snapshot.user,
    isAuthenticated: snapshot.isAuthenticated,
    isLoading: snapshot.isLoading,
    signInWithGoogle,
    signInWithEmail,
    signOut,
  };
}

export default useAuth;
