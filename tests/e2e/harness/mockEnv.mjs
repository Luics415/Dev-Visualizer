/**
 * Dev Visualizer — Lightweight Deterministic E2E Mock Environment
 * tests/e2e/harness/mockEnv.mjs
 * 
 * Provides 100% deterministic, zero-dependency browser globals for Node 24:
 * - localStorage with quota error simulation and storage events
 * - IntersectionObserver with manual intersection triggers
 * - gtag / Telemetry event capturing and PII safety assertions
 * - DOM/Window primitives with prefers-reduced-motion and event dispatching
 */

export function createMockLocalStorage() {
  const store = new Map();
  let quotaExceeded = false;

  const storage = {
    getItem(key) {
      return store.has(String(key)) ? store.get(String(key)) : null;
    },
    setItem(key, value) {
      if (quotaExceeded) {
        const err = new Error("QuotaExceededError: Dom storage limit exceeded");
        err.name = "QuotaExceededError";
        throw err;
      }
      store.set(String(key), String(value));
    },
    removeItem(key) {
      store.delete(String(key));
    },
    clear() {
      store.clear();
    },
    key(index) {
      const keys = Array.from(store.keys());
      return keys[index] ?? null;
    },
    get length() {
      return store.size;
    },
    // Helper to simulate a storage event originating from another tab/window
    dispatchStorageEvent(key = null, oldValue = null, newValue = null) {
      if (typeof globalThis.window?.dispatchEvent === "function") {
        const ev = new Event("storage");
        ev.key = key;
        ev.oldValue = oldValue;
        ev.newValue = newValue;
        globalThis.window.dispatchEvent(ev);
      }
    },
    // Test control helpers
    _setQuotaExceeded(enabled) {
      quotaExceeded = Boolean(enabled);
    },
    _dump() {
      return Object.fromEntries(store.entries());
    },
    _reset() {
      store.clear();
      quotaExceeded = false;
    },
  };

  return storage;
}

export function createMockIntersectionObserver() {
  const activeObservers = new Set();

  class MockIntersectionObserver {
    constructor(callback, options = {}) {
      this.callback = callback;
      this.options = options;
      this.observedElements = new Set();
      activeObservers.add(this);
    }

    observe(element) {
      this.observedElements.add(element);
    }

    unobserve(element) {
      this.observedElements.delete(element);
    }

    disconnect() {
      this.observedElements.clear();
      activeObservers.delete(this);
    }

    takeRecords() {
      return [];
    }

    // Deterministic test trigger for this specific observer
    trigger(element, isIntersecting = true, ratio = 1.0, overrides = {}) {
      const entry = {
        target: element,
        isIntersecting,
        intersectionRatio: ratio,
        boundingClientRect: overrides.boundingClientRect ?? {
          top: 0, left: 0, bottom: 100, right: 100, width: 100, height: 100,
        },
        intersectionRect: overrides.intersectionRect ?? (isIntersecting ? {
          top: 0, left: 0, bottom: 100, right: 100, width: 100, height: 100,
        } : {
          top: 0, left: 0, bottom: 0, right: 0, width: 0, height: 0,
        }),
        rootBounds: overrides.rootBounds ?? null,
        time: overrides.time ?? Date.now(),
      };
      this.callback([entry], this);
    }

    static get activeObservers() {
      return Array.from(activeObservers);
    }

    static triggerAll(element, isIntersecting = true, ratio = 1.0) {
      for (const obs of activeObservers) {
        if (!element || obs.observedElements.has(element)) {
          obs.trigger(element ?? Array.from(obs.observedElements)[0], isIntersecting, ratio);
        }
      }
    }

    static reset() {
      activeObservers.clear();
    }
  }

  return MockIntersectionObserver;
}

export function createMockTelemetry() {
  const capturedEvents = [];
  const dataLayer = [];
  let isOffline = false;
  let throwOnDispatch = false;

  function gtag(...args) {
    if (throwOnDispatch) {
      throw new Error("Telemetry Network Error: failed to reach Google Analytics");
    }

    dataLayer.push(args);

    if (args[0] === "event") {
      const eventName = args[1];
      const params = args[2] ?? {};
      capturedEvents.push({
        type: "event",
        name: eventName,
        params: structuredClone(params),
        timestamp: Date.now(),
        droppedDueToOffline: isOffline,
      });
    } else {
      capturedEvents.push({
        type: args[0],
        args: args.slice(1),
        timestamp: Date.now(),
        droppedDueToOffline: isOffline,
      });
    }
  }

  const PII_PATTERNS = [
    /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/, // Email
    /\b(?:password|passwd|secret|token|apiKey|auth_token)\b/i, // Credential keys
    /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/, // Raw IPv4
  ];

  function assertNoPii(obj, path = "") {
    if (!obj || typeof obj !== "object") return;
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      if (typeof key === "string") {
        for (const pattern of PII_PATTERNS) {
          if (pattern.test(key)) {
            throw new Error(`[PII-Violation] Clave sensible detectada en telemetría: ${currentPath}`);
          }
        }
      }
      if (typeof value === "string") {
        for (const pattern of PII_PATTERNS) {
          if (pattern.test(value)) {
            throw new Error(`[PII-Violation] Valor sensible detectado en telemetría: ${currentPath} = "${value}"`);
          }
        }
      } else if (typeof value === "object") {
        assertNoPii(value, currentPath);
      }
    }
  }

  return {
    gtag,
    dataLayer,
    getCapturedEvents() {
      return [...capturedEvents];
    },
    getEventsByName(name) {
      return capturedEvents.filter((e) => e.type === "event" && e.name === name);
    },
    getLastEvent() {
      return capturedEvents[capturedEvents.length - 1] ?? null;
    },
    clearEvents() {
      capturedEvents.length = 0;
      dataLayer.length = 0;
    },
    setOffline(offline) {
      isOffline = Boolean(offline);
    },
    setThrowOnDispatch(shouldThrow) {
      throwOnDispatch = Boolean(shouldThrow);
    },
    assertNoPii,
  };
}

export function createMockDOM(options = {}) {
  const windowTarget = new EventTarget();
  let prefersReducedMotion = options.prefersReducedMotion ?? false;

  const mockWindow = {
    addEventListener: windowTarget.addEventListener.bind(windowTarget),
    removeEventListener: windowTarget.removeEventListener.bind(windowTarget),
    dispatchEvent: windowTarget.dispatchEvent.bind(windowTarget),
    location: {
      href: "https://luics415.github.io/Dev-Visualizer/",
      pathname: "/",
      search: "",
      hash: "",
      origin: "https://luics415.github.io",
      assign(url) { this.href = url; },
      replace(url) { this.href = url; },
    },
    navigator: {
      userAgent: "Mozilla/5.0 (Node24 DevVisualizer E2E)",
      onLine: true,
      language: "es-ES",
    },
    history: {
      state: null,
      pushState: () => {},
      replaceState: () => {},
      back: () => {},
      forward: () => {},
    },
    matchMedia(query) {
      const isMotionQuery = query.includes("prefers-reduced-motion");
      return {
        matches: isMotionQuery ? prefersReducedMotion : false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => true,
      };
    },
    _setPrefersReducedMotion(value) {
      prefersReducedMotion = Boolean(value);
    },
  };

  function createMockElement(tagName, attributes = {}) {
    const el = {
      tagName: tagName.toUpperCase(),
      attributes: { ...attributes },
      style: typeof attributes.style === "object" ? { ...attributes.style } : {},
      children: [],
      textContent: attributes.textContent ?? "",
      getAttribute(name) {
        return this.attributes[name] ?? null;
      },
      setAttribute(name, value) {
        this.attributes[name] = String(value);
      },
      hasAttribute(name) {
        return name in this.attributes;
      },
      removeAttribute(name) {
        delete this.attributes[name];
      },
      appendChild(child) {
        this.children.push(child);
        return child;
      },
      querySelector(selector) {
        return this.children.find((c) => matchesSelector(c, selector)) ?? null;
      },
      querySelectorAll(selector) {
        return this.children.filter((c) => matchesSelector(c, selector));
      },
    };
    return el;
  }

  function matchesSelector(element, selector) {
    if (selector.startsWith("[")) {
      const match = selector.match(/\[([a-zA-Z0-9_-]+)(?:=["']?([^"']*)["']?)?\]/);
      if (!match) return false;
      const [, attr, val] = match;
      if (val === undefined) return element.hasAttribute(attr);
      return element.getAttribute(attr) === val;
    }
    return element.tagName.toLowerCase() === selector.toLowerCase();
  }

  const mockDocument = {
    title: "Dev Visualizer",
    head: createMockElement("head"),
    body: createMockElement("body"),
    createElement: createMockElement,
    querySelector(selector) {
      if (selector === "head") return this.head;
      if (selector === "body") return this.body;
      return this.body.querySelector(selector) ?? this.head.querySelector(selector);
    },
    querySelectorAll(selector) {
      return [...this.head.querySelectorAll(selector), ...this.body.querySelectorAll(selector)];
    },
  };

  return { mockWindow, mockDocument };
}

let originalGlobals = null;

export function installMockEnv(options = {}) {
  if (originalGlobals) return originalGlobals.installedEnv;

  originalGlobals = {
    window: globalThis.window,
    document: globalThis.document,
    localStorage: globalThis.localStorage,
    IntersectionObserver: globalThis.IntersectionObserver,
    gtag: globalThis.gtag,
    dataLayer: globalThis.dataLayer,
  };

  const storage = createMockLocalStorage();
  const Observer = createMockIntersectionObserver();
  const telemetry = createMockTelemetry();
  const { mockWindow, mockDocument } = createMockDOM(options);

  mockWindow.localStorage = storage;
  mockWindow.IntersectionObserver = Observer;
  mockWindow.gtag = telemetry.gtag;
  mockWindow.dataLayer = telemetry.dataLayer;

  globalThis.window = mockWindow;
  globalThis.document = mockDocument;
  globalThis.localStorage = storage;
  globalThis.IntersectionObserver = Observer;
  globalThis.gtag = telemetry.gtag;
  globalThis.dataLayer = telemetry.dataLayer;

  const env = {
    storage,
    Observer,
    telemetry,
    window: mockWindow,
    document: mockDocument,
  };

  originalGlobals.installedEnv = env;
  return env;
}

export function resetMockEnv(env) {
  if (!env) return;
  env.storage._reset();
  env.Observer.reset();
  env.telemetry.clearEvents();
  env.window.location.href = "https://luics415.github.io/Dev-Visualizer/";
  env.window.location.pathname = "/";
  env.window.navigator.onLine = true;
  env.window._setPrefersReducedMotion(false);
}

export function uninstallMockEnv() {
  if (!originalGlobals) return;
  globalThis.window = originalGlobals.window;
  globalThis.document = originalGlobals.document;
  globalThis.localStorage = originalGlobals.localStorage;
  globalThis.IntersectionObserver = originalGlobals.IntersectionObserver;
  globalThis.gtag = originalGlobals.gtag;
  globalThis.dataLayer = originalGlobals.dataLayer;
  originalGlobals = null;
}
