/**
 * Dev Visualizer — Módulo Central de Autenticación Client-Side (Feature F12)
 * src/lib/auth.ts
 *
 * Arquitectura cliente pura para navegación pública irrestricta y autenticación
 * exclusiva previa a cuestionarios técnicos (Hito 3 / F11 - F13).
 *
 * Características principales:
 * - Modelo AuthUser inmutable y tipado (Google y Correo Electrónico).
 * - Persistencia segura en localStorage con tolerancia completa a QuotaExceededError.
 * - Soporte para SSR y SSG sin discrepancias de hidratación (SSR-safe).
 * - Sincronización multi-pestaña mediante eventos nativos 'storage' y pub-sub en memoria.
 * - Desacoplado de dependencias externas; compatible con despliegue en GitHub Pages.
 */

export interface AuthUser {
  id: string;
  email: string;
  displayName: string;
  provider: "google" | "email";
  authenticatedAt: string; // ISO 8601 UTC
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

// Estado de respaldo en memoria ante entornos con cuota bloqueada o almacenamiento inaccesible
let memoryFallbackUser: AuthUser | null = null;
let isQuotaExceededActive = false;

// Registro de observadores para reactividad interna en la misma pestaña
const authSubscribers = new Set<() => void>();

/**
 * Guarda o elimina de manera resiliente el usuario en localStorage.
 * Si ocurre QuotaExceededError o SecurityError, mantiene la sesión en memoria
 * para garantizar una experiencia continua y sin interrupciones didácticas.
 */
function persistUser(user: AuthUser | null): void {
  if (user === null) {
    memoryFallbackUser = null;
    isQuotaExceededActive = false;
    if (typeof window !== "undefined" && typeof globalThis.localStorage !== "undefined") {
      try {
        globalThis.localStorage.removeItem(AUTH_STORAGE_KEY);
      } catch {
        // Ignorar fallos al remover en entornos restringidos
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
    // Tolerancia ante QuotaExceededError (ej. modo incógnito, cuota saturada o mock de prueba)
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

/**
 * Obtiene el usuario autenticado activo desde localStorage o del respaldo en memoria.
 * Es completamente seguro en entornos de servidor (SSR / SSG) y devuelve `null` si no hay sesión.
 */
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

    // Si localStorage no contiene el elemento:
    if (isQuotaExceededActive && memoryFallbackUser) {
      // Comprobar si la cuota ya fue liberada o si el almacenamiento fue reseteado/limpiado
      try {
        const probeKey = "__dv_quota_probe__";
        globalThis.localStorage.setItem(probeKey, "1");
        globalThis.localStorage.removeItem(probeKey);
        // Si fue posible escribir, la cuota ya no está bloqueada.
        // Como AUTH_STORAGE_KEY no estaba, se asume que la sesión fue purgada externamente.
        isQuotaExceededActive = false;
        memoryFallbackUser = null;
        return null;
      } catch {
        // La cuota continúa bloqueada; preservar la sesión en memoria
        return memoryFallbackUser;
      }
    }

    memoryFallbackUser = null;
    return null;
  } catch {
    // Si la lectura lanza (ej. fallo de JSON o sandbox estricto), recurrir al estado en memoria
    return memoryFallbackUser;
  }
}

/**
 * Retorna una instantánea sincrónica del estado de autenticación actual.
 */
export function getAuthState(): { user: AuthUser | null; isAuthenticated: boolean; isLoading: boolean } {
  const user = getStoredUser();
  return {
    user,
    isAuthenticated: Boolean(user),
    isLoading: false,
  };
}

/**
 * Evalúa las condiciones de la compuerta previa al cuestionario (F13).
 * Si el usuario es anónimo, exige el paso por QuizAuthGate y bloquea el acceso a las preguntas.
 * Si el usuario está autenticado, desactiva la compuerta y autoriza el acceso inmediato.
 */
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

/**
 * Notifica a todos los suscriptores y despacha un evento local en la ventana.
 */
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
      // Ignorar fallos de despacho en entornos sintéticos
    }
  }
}

/**
 * Inicia sesión mediante proveedor Google (simulado para cliente educativo).
 * Genera un AuthUser válido y persistente en el dispositivo.
 */
export async function signInWithGoogle(): Promise<AuthUser> {
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

/**
 * Inicia sesión mediante Correo Electrónico.
 * Valida la estructura básica del email y genera una identidad persistente.
 */
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

/**
 * Cierra la sesión activa del usuario, purgando las credenciales locales
 * y notificando inmediatamente a todos los componentes y pestañas.
 */
export function signOut(): void {
  persistUser(null);
  notifyAuthSubscribers();
}

/**
 * Permite que hooks de React (`useSyncExternalStore`) y componentes clientes
 * se suscriban a cambios de autenticación locales y entre pestañas (`storage`).
 */
export function subscribeToAuth(callback: () => void): () => void {
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
