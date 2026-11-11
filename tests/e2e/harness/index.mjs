/**
 * Dev Visualizer — Central E2E Test Harness
 * tests/e2e/harness/index.mjs
 * 
 * Barrel export for deterministic test environment, mocks, and contract loaders.
 */

export {
  createMockLocalStorage,
  createMockIntersectionObserver,
  createMockTelemetry,
  createMockDOM,
  installMockEnv,
  resetMockEnv,
  uninstallMockEnv,
} from "./mockEnv.mjs";

export {
  isModuleAvailable,
  getTelemetryModule,
  getAuthModule,
  getQuestsEngineModule,
  getSymbolicAchievementsList,
  getSkeletonModule,
} from "./contractLoaders.mjs";
