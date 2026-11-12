import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
  type User as FirebaseUser,
} from "firebase/auth";
import {
  createGoogleAuthProvider,
  getFirebaseAuth,
  isFirebaseConfigured,
} from "./firebase";
import {
  startCloudProgressSync,
  stopCloudProgressSync,
} from "./cloudProgress";

export interface AuthUser {
  id: string;
  email: string;
  displayName: string;
  photoURL?: string;
  provider: "google" | "email";
  authenticatedAt: string;
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signInWithGoogle: () => Promise<AuthUser>;
  signInWithEmail: (email: string) => Promise<AuthUser>;
  signOut: () => void;
}

export interface QuizGateEvaluation {
  isGateRequired: boolean;
  canAccessQuiz: boolean;
  availableProviders: ("google" | "email")[];
}

export const AUTH_STORAGE_KEY = "dev_visualizer_auth_user";

let memoryFallbackUser: AuthUser | null = null;
let isQuotaExceededActive = false;
let isFirebaseListenerAttached = false;

const authSubscribers = new Set<() => void>();

function mapFirebaseUser(fbUser: FirebaseUser): AuthUser {
  const email = fbUser.email || `${fbUser.uid}@users.devvisualizer.local`;
  const prefix = email.split("@")[0] || "Usuario";
  const providerId = fbUser.providerData[0]?.providerId;
  const provider: "google" | "email" =
    providerId === "password" ? "email" : "google";

  return {
    id: fbUser.uid,
    email,
    displayName: fbUser.displayName || prefix,
    ...(fbUser.photoURL ? { photoURL: fbUser.photoURL } : {}),
    provider,
    authenticatedAt: fbUser.metadata.lastSignInTime
      ? new Date(fbUser.metadata.lastSignInTime).toISOString()
      : new Date().toISOString(),
  };
}

function formatFirebaseAuthError(error: unknown): string {
  const code =
    error && typeof error === "object" && "code" in error
      ? String((error as { code?: unknown }).code)
      : "";

  switch (code) {
    case "auth/popup-closed-by-user":
      return "Cerraste la ventana de selección de cuenta antes de completar el inicio de sesión.";
    case "auth/cancelled-popup-request":
      return "Se canceló la solicitud anterior. Intenta iniciar sesión nuevamente.";
    case "auth/popup-blocked":
      return "Tu navegador bloqueó la ventana emergente de Google. Permite las ventanas emergentes e inténtalo de nuevo.";
    case "auth/unauthorized-domain":
      return "Este dominio no está autorizado para iniciar sesión con Google en Firebase.";
    case "auth/network-request-failed":
      return "Error de conexión al contactar con Google. Verifica tu red e inténtalo nuevamente.";
    default:
      return error instanceof Error && error.message
        ? error.message
        : "No se pudo completar el inicio de sesión con Google.";
  }
}

function persistUser(user: AuthUser | null): void {
  if (user === null) {
    memoryFallbackUser = null;
    isQuotaExceededActive = false;
    if (typeof window !== "undefined" && typeof globalThis.localStorage !== "undefined") {
      try {
        globalThis.localStorage.removeItem(AUTH_STORAGE_KEY);
      } catch {
      }
    }
    return;
  }

  if (typeof window === "undefined" || typeof globalThis.localStorage === "undefined") {
    memoryFallbackUser = user;
    return;
  }

  try {
    globalThis.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    memoryFallbackUser = user;
    isQuotaExceededActive = false;
  } catch (err: unknown) {
    memoryFallbackUser = user;
    isQuotaExceededActive = true;
    if (typeof console !== "undefined" && console.warn) {
      console.warn(
        "[Auth] QuotaExceededError o restricción de almacenamiento detectada. Sesión mantenida en memoria:",
        err
      );
    }
  }
}

export function getStoredUser(): AuthUser | null {
  if (typeof window === "undefined" || typeof globalThis.localStorage === "undefined") {
    return memoryFallbackUser;
  }

  try {
    const raw = globalThis.localStorage.getItem(AUTH_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (
        parsed &&
        typeof parsed === "object" &&
        typeof parsed.id === "string" &&
        parsed.id.length > 0 &&
        typeof parsed.email === "string" &&
        parsed.email.includes("@") &&
        (parsed.provider === "google" || parsed.provider === "email")
      ) {
        memoryFallbackUser = parsed as AuthUser;
        return parsed as AuthUser;
      }
    }

    if (isQuotaExceededActive && memoryFallbackUser) {
      try {
        const probeKey = "__dv_quota_probe__";
        globalThis.localStorage.setItem(probeKey, "1");
        globalThis.localStorage.removeItem(probeKey);
        isQuotaExceededActive = false;
        memoryFallbackUser = null;
        return null;
      } catch {
        return memoryFallbackUser;
      }
    }

    memoryFallbackUser = null;
    return null;
  } catch {
    return memoryFallbackUser;
  }
}

export function getAuthState(): { user: AuthUser | null; isAuthenticated: boolean; isLoading: boolean } {
  const user = getStoredUser();
  return {
    user,
    isAuthenticated: Boolean(user),
    isLoading: false,
  };
}

export function evaluateQuizGate(user: AuthUser | null): QuizGateEvaluation {
  const isAuth = Boolean(
    user &&
    typeof user === "object" &&
    typeof user.id === "string" &&
    user.id.length > 0 &&
    typeof user.email === "string" &&
    user.email.includes("@") &&
    (user.provider === "google" || user.provider === "email")
  );

  return {
    isGateRequired: !isAuth,
    canAccessQuiz: isAuth,
    availableProviders: ["google", "email"],
  };
}

function notifyAuthSubscribers(): void {
  authSubscribers.forEach((callback) => {
    try {
      callback();
    } catch (err) {
      if (typeof console !== "undefined" && console.error) {
        console.error("[Auth] Error en suscriptor de autenticación:", err);
      }
    }
  });

  if (typeof window !== "undefined" && typeof window.dispatchEvent === "function") {
    try {
      window.dispatchEvent(new Event("dev_visualizer_auth_change"));
    } catch {
    }
  }
}

export function ensureFirebaseAuthSync(): void {
  if (isFirebaseListenerAttached || !isFirebaseConfigured()) {
    return;
  }

  const auth = getFirebaseAuth();
  if (!auth) {
    return;
  }

  isFirebaseListenerAttached = true;
  onAuthStateChanged(auth, (fbUser) => {
    if (fbUser) {
      const mapped = mapFirebaseUser(fbUser);
      persistUser(mapped);
      startCloudProgressSync(mapped);
      notifyAuthSubscribers();
    } else {
      const hadStoredUser = Boolean(getStoredUser());
      stopCloudProgressSync(hadStoredUser);
      persistUser(null);
      notifyAuthSubscribers();
    }
  });
}

export async function signInWithGoogle(): Promise<AuthUser> {
  const auth = getFirebaseAuth();
  if (auth) {
    try {
      ensureFirebaseAuthSync();
      const provider = createGoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = mapFirebaseUser(result.user);
      persistUser(user);
      startCloudProgressSync(user);
      notifyAuthSubscribers();
      return user;
    } catch (err: unknown) {
      throw new Error(formatFirebaseAuthError(err));
    }
  }

  const randomSuffix = Math.random().toString(36).slice(2, 8);
  const user: AuthUser = {
    id: `usr_google_${Date.now()}_${randomSuffix}`,
    email: "estudiante.google@devvisualizer.io",
    displayName: "Estudiante Google",
    provider: "google",
    authenticatedAt: new Date().toISOString(),
  };

  persistUser(user);
  notifyAuthSubscribers();
  return user;
}

export async function signInWithEmail(email: string): Promise<AuthUser> {
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  if (!cleanEmail || !cleanEmail.includes("@")) {
    throw new Error("Se requiere una dirección de correo electrónico válida");
  }

  const prefix = cleanEmail.split("@")[0] || "estudiante";
  const displayName = prefix.charAt(0).toUpperCase() + prefix.slice(1);
  const randomSuffix = Math.random().toString(36).slice(2, 8);

  const user: AuthUser = {
    id: `usr_email_${Date.now()}_${randomSuffix}`,
    email: cleanEmail,
    displayName,
    provider: "email",
    authenticatedAt: new Date().toISOString(),
  };

  persistUser(user);
  notifyAuthSubscribers();
  return user;
}

export function signOut(): void {
  const auth = getFirebaseAuth();
  if (auth) {
    stopCloudProgressSync(true);
    void firebaseSignOut(auth).catch(() => {});
  }
  persistUser(null);
  notifyAuthSubscribers();
}

export function subscribeToAuth(callback: () => void): () => void {
  ensureFirebaseAuthSync();
  authSubscribers.add(callback);

  const handleStorageEvent = (event: StorageEvent | Event) => {
    if ("key" in event && event.key !== null && event.key !== AUTH_STORAGE_KEY) {
      return;
    }
    callback();
  };

  if (typeof window !== "undefined" && typeof window.addEventListener === "function") {
    window.addEventListener("storage", handleStorageEvent);
    window.addEventListener("dev_visualizer_auth_change", callback);
  }

  return () => {
    authSubscribers.delete(callback);
    if (typeof window !== "undefined" && typeof window.removeEventListener === "function") {
      window.removeEventListener("storage", handleStorageEvent);
      window.removeEventListener("dev_visualizer_auth_change", callback);
    }
  };
}
