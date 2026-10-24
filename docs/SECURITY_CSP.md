# Política de Seguridad del Contenido (CSP) y Hashes Criptográficos

Este documento establece las cabeceras HTTP de seguridad, directivas CSP estrictas y mitigación de XSS en `Dev-Visualizer`.

---

## 1. Directivas CSP Canónicas

Para prevenir la inyección de código arbitrario (*Cross-Site Scripting* - XSS):

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'wasm-unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';
```

### Justificación de Directivas
- `default-src 'self'`: Restringe la carga de recursos únicamente al origen del dominio.
- `'wasm-unsafe-eval'`: Habilita módulos WebAssembly para simulaciones computacionales intensivas.
- `frame-ancestors 'none'`: Mitiga ataques de Clickjacking impidiendo que la aplicación sea embebida en iframes externos.
- `style-src 'self' 'unsafe-inline'`: Permite variables CSS dinámicas necesarias para temas claro/oscuro.
