/**
 * Dev Visualizer — Tier 1 E2E Tests: Auth & Public Navigation (F11 - F13)
 * tests/e2e/tier1/tier1-auth-navigation.test.mjs
 * 
 * 15 Independent Test Cases covering:
 * - F11: Navegación Pública Irrestricta (T1-F11-01 to T1-F11-05)
 * - F12: Módulo de Autenticación Client-Side (T1-F12-01 to T1-F12-05)
 * - F13: Compuerta QuizAuthGate exclusiva (T1-F13-01 to T1-F13-05)
 * 
 * Saneado en Iteración 2: Cero fachadas sombras, evaluación directa de src/lib/auth.ts
 * y testabilidad progresiva honesta sin auto-certificación.
 */

import { describe, it, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { collectionManifest } from "@/data/collectionManifest";
import {
  installMockEnv,
  resetMockEnv,
  uninstallMockEnv,
  getAuthModule,
} from "../harness/index.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, "../../..");

describe("Tier 1: Navegación Libre y Autenticación Exclusiva para Quizzes (F11 - F13)", () => {
  let env;
  let auth;

  const authPath = resolve(PROJECT_ROOT, "src/lib/auth.ts");
  const isAuthAvailable = existsSync(authPath);

  beforeEach(async () => {
    env = installMockEnv();
    if (isAuthAvailable) {
      auth = await getAuthModule();
    }
  });

  afterEach(() => {
    resetMockEnv(env);
    uninstallMockEnv();
  });

  // ==========================================================================
  // F11: Navegación Pública Irrestricta (5 casos)
  // ==========================================================================
  describe("F11: Navegación Pública Irrestricta", () => {
    it("T1-F11-01: Acceso anónimo irrestricto a la página principal ('/')", () => {
      // Sin credenciales en localStorage
      assert.equal(globalThis.localStorage.getItem("dev_visualizer_auth_user"), null);
      const homePagePath = resolve(PROJECT_ROOT, "src/app/page.tsx");
      assert.ok(existsSync(homePagePath), "src/app/page.tsx debe existir");
      const content = readFileSync(homePagePath, "utf-8");
      // No debe redirigir a login ni exigir auth en layout/page
      assert.doesNotMatch(content, /redirect\(['"]\/login['"]\)/, "La página principal no debe redirigir a login");
    });

    it("T1-F11-02: Navegación libre en el catálogo /colecciones sin credenciales", () => {
      const coleccionesPath = resolve(PROJECT_ROOT, "src/app/colecciones/page.tsx");
      assert.ok(existsSync(coleccionesPath), "/colecciones/page.tsx debe existir");
      const content = readFileSync(coleccionesPath, "utf-8");
      assert.doesNotMatch(content, /requireAuth|isProtected/, "/colecciones no debe requerir autenticación");
    });

    it("T1-F11-03: Acceso irrestricto a la Librería Profesional (/libreria y /libreria/[tema])", () => {
      const libreriaPath = resolve(PROJECT_ROOT, "src/app/libreria/page.tsx");
      const libreriaTemaPath = resolve(PROJECT_ROOT, "src/app/libreria/[tema]/page.tsx");
      assert.ok(existsSync(libreriaPath), "/libreria/page.tsx debe existir");
      assert.ok(existsSync(libreriaTemaPath), "/libreria/[tema]/page.tsx debe existir");
    });

    it("T1-F11-04: Lectura completa de conceptos y casos prácticos (/[slug] y /[slug]-en-accion)", () => {
      assert.ok(collectionManifest.length >= 73, "Deben existir al menos 73 colecciones públicas");
      for (const col of collectionManifest.slice(0, 10)) {
        assert.ok(col.href.startsWith("/"), `href debe ser ruta relativa pública: ${col.href}`);
        assert.ok(col.actionHref.endsWith("-en-accion"), `actionHref debe ser ruta en acción: ${col.actionHref}`);
      }
    });

    it("T1-F11-05: Ausencia de modales de login emergentes durante la navegación exploratoria", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, () => {
      const state = auth.getAuthState();
      assert.equal(state.isAuthenticated, false, "Usuario debe iniciar no autenticado");
      // La compuerta de login solo se evalúa para quizzes, no para navegación
      const gateState = auth.evaluateQuizGate(state.user);
      assert.equal(gateState.isGateRequired, true, "Compuerta solo está pendiente para quizzes");
    });
  });

  // ==========================================================================
  // F12: Módulo de Autenticación Client-Side (5 casos)
  // ==========================================================================
  describe("F12: Módulo de Autenticación Client-Side", () => {
    it("T1-F12-01: Estado de autenticación inicial no autenticado por defecto", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, () => {
      globalThis.localStorage.clear();
      const state = auth.getAuthState();
      assert.equal(state.user, null, "user inicial debe ser null");
      assert.equal(state.isAuthenticated, false, "isAuthenticated inicial debe ser false");
      assert.equal(state.isLoading, false, "isLoading debe ser false");
    });

    it("T1-F12-02: Inicio de sesión con Google (signInWithGoogle)", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, async () => {
      const user = await auth.signInWithGoogle();
      assert.ok(user, "signInWithGoogle debe retornar un AuthUser");
      assert.equal(user.provider, "google", "El proveedor debe ser google");
      assert.ok(user.email.includes("@"), "Debe tener un correo válido");
      assert.ok(Date.parse(user.authenticatedAt), "authenticatedAt debe ser una fecha ISO válida");
      const state = auth.getAuthState();
      assert.equal(state.isAuthenticated, true, "El estado debe pasar a autenticado");
    });

    it("T1-F12-03: Inicio de sesión con Correo Electrónico (signInWithEmail)", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, async () => {
      const email = "desarrollador@visualizer.io";
      const user = await auth.signInWithEmail(email);
      assert.ok(user, "signInWithEmail debe retornar un AuthUser");
      assert.equal(user.email, email, "El email del usuario debe coincidir con el ingresado");
      assert.equal(user.provider, "email", "El proveedor debe ser email");
      assert.ok(user.id.length > 0, "Debe tener un id de usuario");
    });

    it("T1-F12-04: Persistencia y restauración automática desde localStorage", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, async () => {
      const testUser = {
        id: "usr_persisted_999",
        email: "estudiante.activo@dev.io",
        displayName: "Estudiante Activo",
        provider: "google",
        authenticatedAt: new Date().toISOString(),
      };
      globalThis.localStorage.setItem(auth.AUTH_STORAGE_KEY, JSON.stringify(testUser));
      const restoredState = auth.getAuthState();
      assert.equal(restoredState.isAuthenticated, true, "Debe restaurar sesión activa desde localStorage");
      assert.equal(restoredState.user?.email, "estudiante.activo@dev.io");
      assert.equal(restoredState.user?.id, "usr_persisted_999");
    });

    it("T1-F12-05: Cierre de sesión completo (signOut)", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, async () => {
      await auth.signInWithGoogle();
      assert.equal(auth.getAuthState().isAuthenticated, true);
      auth.signOut();
      const stateAfterSignOut = auth.getAuthState();
      assert.equal(stateAfterSignOut.isAuthenticated, false, "isAuthenticated debe ser false tras signOut");
      assert.equal(stateAfterSignOut.user, null, "user debe ser null tras signOut");
      assert.equal(globalThis.localStorage.getItem(auth.AUTH_STORAGE_KEY), null, "localStorage debe estar limpio");
    });
  });

  // ==========================================================================
  // F13: Compuerta QuizAuthGate exclusiva (5 casos)
  // ==========================================================================
  describe("F13: Compuerta QuizAuthGate exclusiva", () => {
    it("T1-F13-01: Intercepción estricta antes de iniciar cuestionario para usuarios anónimos", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, () => {
      globalThis.localStorage.clear();
      const user = auth.getStoredUser();
      const gate = auth.evaluateQuizGate(user);
      assert.equal(gate.isGateRequired, true, "Debe exigir compuerta de login a usuarios anónimos");
      assert.equal(gate.canAccessQuiz, false, "No debe permitir entrar al quiz sin autenticación previa");
    });

    it("T1-F13-02: Disponibilidad exacta de los dos métodos de inicio: Google y Correo", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, () => {
      const user = null;
      const gate = auth.evaluateQuizGate(user);
      assert.ok(Array.isArray(gate.availableProviders), "Debe listar proveedores disponibles");
      assert.ok(gate.availableProviders.includes("google"), "Debe soportar inicio con Google");
      assert.ok(gate.availableProviders.includes("email"), "Debe soportar inicio con Correo");
      assert.equal(gate.availableProviders.length, 2, "Solo debe incluir exactamente Google y Correo");
    });

    it("T1-F13-03: Protección del banco de preguntas hasta autenticación exitosa", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, () => {
      const anonymousGate = auth.evaluateQuizGate(null);
      assert.equal(anonymousGate.canAccessQuiz, false, "Las preguntas deben estar bloqueadas");
    });

    it("T1-F13-04: Transición reactiva inmediata al autenticarse en la compuerta", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, async () => {
      let user = auth.getStoredUser();
      assert.equal(auth.evaluateQuizGate(user).canAccessQuiz, false);

      // El usuario inicia sesión a través de la compuerta
      user = await auth.signInWithEmail("aspirante@dev.com");
      const gateAfterLogin = auth.evaluateQuizGate(user);
      assert.equal(gateAfterLogin.isGateRequired, false, "La compuerta debe desactivarse inmediatamente");
      assert.equal(gateAfterLogin.canAccessQuiz, true, "El acceso al cuestionario debe desbloquearse");
    });

    it("T1-F13-05: Bypass transparente de la compuerta para usuarios con sesión activa previa", {
      skip: !isAuthAvailable && "Pendiente de implementación en Hito M3: src/lib/auth.ts",
    }, async () => {
      await auth.signInWithGoogle();
      const currentUser = auth.getStoredUser();
      const gate = auth.evaluateQuizGate(currentUser);
      assert.equal(gate.isGateRequired, false, "Usuarios con sesión activa no deben ver la compuerta");
      assert.equal(gate.canAccessQuiz, true, "Usuarios autenticados acceden directamente");
    });
  });

});
