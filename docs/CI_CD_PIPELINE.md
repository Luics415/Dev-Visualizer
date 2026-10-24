# Pipeline de CI/CD, Estrategias de Caché y Artefactos

Este documento describe la arquitectura de los flujos de trabajo de GitHub Actions, gestión de caché y ciclo de vida de compilación estática en `Dev-Visualizer`.

---

## 1. Topología del Flujo de Trabajo `quality`

El flujo `.github/workflows/quality.yml` orquesta la validación exhaustiva de cada Pull Request y push a `main`:

```text
       ┌────────────────────────┐
       │   Checkout & Node 20   │
       └───────────┬────────────┘
                   │
       ┌───────────▼────────────┐
       │  npm ci (Caché ~/.npm) │
       └───────────┬────────────┘
                   │
       ┌───────────▼────────────┐
       │     Lint & Typecheck   │
       └───────────┬────────────┘
                   │
       ┌───────────▼────────────┐
       │ Next.js SSG (234 págs) │
       └───────────┬────────────┘
                   │
       ┌───────────▼────────────┐
       │ Check Links & axe a11y │
       └────────────────────────┘
```

---

## 2. Estrategias de Caché y Reducción de Tiempos

Para mantener los tiempos de ejecución por debajo de 75 segundos:

1. **Caché Nativa de Dependencias:** Uso de `actions/setup-node@v4` con `cache: 'npm'`, indexada por el hash de `package-lock.json`.
2. **Caché de Compilación Next.js:** Almacenamiento opcional del directorio `.next/cache` entre ejecuciones continuas para acelerar la generación estática incremental.
3. **Ejecución Paralela de Linters:** Validación simultánea de sintaxis TypeScript (`tsc --noEmit`) y reglas de accesibilidad ESLint.

---

## 3. Políticas de Calidad Estricta (*Quality Gates*)

- **Prohibición de `ignoreBuildErrors`:** Las opciones `typescript.ignoreBuildErrors` y `eslint.ignoreDuringBuilds` en `next.config.ts` deben permanecer obligatoriamente en `false`.
- **Validación de Enlaces Internos:** El script `npm run check:links` analiza todas las rutas HTML generadas en `out/` asegurando que no existan hipervínculos rotos (código 404).
- **Cero Advertencias de Accesibilidad Críticas:** `axe-core` audita las páginas generadas descartando violaciones WCAG 2.1 AA en contraste, labels y roles ARIA.
