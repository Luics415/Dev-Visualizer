# Expediente de Arquitectura: Rediseño de Bienvenida con 4 Pilares y Workbench de Animaciones

- **Fecha:** 2026-11-03
- **Rama:** `feat/landing-redesign-visual-onboarding`
- **Issue Relacionado:** #247
- **Coautoría:** @Luics415 y @Azlynn17

---

## 1. Contexto y Objetivos

A raíz de la evaluación de usabilidad y feedback técnico sobre la página principal (`/` y `src/app/page.tsx`), se procedió a reestructurar por completo la experiencia de bienvenida para erradicar lenguaje genérico de marketing y dotar a la plataforma de una interfaz de ingeniería transparente, observable y visual.

### Cuatro Preguntas Esenciales Respondidas:

1. **¿Qué se aprende?**
   - Mapeo curricular exhaustivo de las **7 Áreas Maestras de Arquitectura de Sistemas**.
   - Integración de `LiveAnimationShowcase.tsx`: banco interactivo de simulación técnica en vivo con 5 mecanismos deterministas fundamentales (V8 Event Loop, Memory Map y Punteros en C/Rust, BST Search O(log N), Circuit Breaker en Sistemas Distribuidos y Aislamiento OCI en Contenedores Docker).
   - Controles de ejecución determinista: Reproducción/Pausa, Paso a Paso y Reinicio con telemetría en tiempo real.

2. **¿Qué puedo hacer?**
   - Desglose de 5 herramientas operativas de ingeniería:
     - **01 · Inspección Determinista**: Análisis frame a frame de estados, variables y punteros.
     - **02 · Diagnóstico de 73 Casos "En Acción"**: Escenarios de producción con inyección controlada de errores y recuperación resiliente.
     - **03 · Locución Técnica por Voz**: Síntesis nativa en navegador con Web Speech API en español neutro sin dependencias de red.
     - **04 · Quizzes Formativos**: Evaluaciones conceptuales con justificación técnica rigurosa y acreditación local.
     - **05 · Preservación de 179 Manuales Técnicos**: Biblioteca de referencia con sumas criptográficas SHA-256 e integridad verificada.

3. **¿Puedo confiar?**
   - **Fuentes Canónicas Primarias**: 100% de los 7,410 conceptos respaldados por dos o más especificaciones formales (W3C, ECMA-262, RFCs de IETF, ISO/IEC).
   - **Integridad Criptográfica Inmutable**: Hashes SHA-256 precalculados byte a byte para cada recurso técnico de la librería.
   - **Seguridad SAST Automatizada**: 0 vulnerabilidades en GitHub CodeQL (26 alertas históricas remediadas), escaneo Gitleaks y `npm audit` al día.
   - **Accesibilidad Universal WCAG 2.1 AA y Soberanía Local**: Navegación 100% por teclado, respeto a `prefers-reduced-motion` y cero telemetría externa (Next.js SSG estático).

4. **¿Qué hago ahora?**
   - Hoja de ruta progresiva en 4 pasos: (1) Elige tecnología -> (2) Observa la animación -> (3) Explora el caso en acción -> (4) Acredita con el quiz.
   - Lanzador rápido a las colecciones más consultadas con botones nativos terminal/cyber.

---

## 2. Remediación del Glitch de Caché de Favicon

Se detectó que navegadores modernos retenían en caché de disco el favicon `.ico` legado. Para resolverlo de manera definitiva:
- Se actualizó `src/app/layout.tsx` para anteponer el favicon vectorial SVG: `{ url: assetUrl("/favicon.svg?v=20261103"), type: "image/svg+xml" }`.
- Se incorporaron parámetros de versión (`?v=20261103`) en todas las variantes (`favicon.ico`, `favicon-32x32.png`, `favicon-48x48.png`, `apple-touch-icon.png`), forzando la invalidación inmediata de cachés locales en navegadores de clientes.

---

## 3. Evidencia Verificable de Calidad (Truthful State)

| Control | Comando | Resultado | Estado |
|---|---|---|---|
| Tipado Estático | `npm run typecheck` | 0 errores (tsc sin emisión) | PASS |
| Linter y Reglas | `npm run lint` | 0 errores, 0 warnings (ESLint 9) | PASS |
| Catálogo de Librería | `npm run check:library` | 179 recursos + 93 complementarios verificados | PASS |
| Compilación SSG | `npm run build` | 394/394 páginas estáticas generadas | PASS |
| Enlaces Estáticos | `npm run check:links` | 394 páginas auditadas, 0 rotos | PASS |
| Accesibilidad WCAG | `npm run check:a11y` | 394 páginas, 393 imágenes alt, 9,789 botones | PASS |
