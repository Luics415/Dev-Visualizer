# Matriz de Validación de Calidad y Pruebas (Habilidad 04-Verificar)

Esta matriz establece el protocolo de pruebas reproducible que debe ejecutarse y documentarse en `verificacion.yml` antes de autorizar cualquier integración a la rama principal:

| Dimensión | Alcance | Criterio de Éxito | Evidencia Obligatoria |
| :--- | :--- | :--- | :--- |
| **Linting** | Código TypeScript/React | Cero errores y advertencias en ESLint | `npm run lint` exit code 0 |
| **Tipado** | Verificación estática | Cobertura estricta sin declaraciones implícitas | `npm run typecheck` exit code 0 |
| **Compilación** | Generación estática Next.js | Exportación exitosa de todas las rutas canónicas | `npm run build` exit code 0 |
| **Enlaces** | Integridad de hipervínculos | Cero enlaces internos rotos o fragmentos huérfanos | `npm run check:links` exit code 0 |
| **Accesibilidad** | Estándar WCAG 2.1 AA | Contraste, navegación por teclado y etiquetas ARIA | `npm run check:a11y` exit code 0 |
| **Rendimiento** | Comportamiento en navegador | Tasa de refresco constante sin bloqueos de UI | 60+ FPS y sin caídas de frames |
