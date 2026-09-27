# Changelog visual V11 — Marco legal, accesibilidad y seguridad integral (v1.1.0)

## Resumen del hito

Consolidación del marco jurídico, cumplimiento de privacidad internacional, auditoría de accesibilidad WCAG 2.1 AA y fortificación de seguridad de entrega para **Dev-Visualizer**.

## Rutas jurídicas y cumplimiento

Se añadieron 3 rutas canónicas al App Router (alcanzando 228 páginas estáticas verificadas):

1. **`/privacidad`**:
   - Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP - México), RGPD (Reglamento UE 2016/679) y CCPA (California).
   - Procedimiento formal para el ejercicio de derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) con plazo de respuesta garantizado de 20 días hábiles.
   - Principio estricto de minimización de datos: arquitectura estática sin telemetría intrusiva, rastreadores comerciales ni perfiles conductuales.

2. **`/terminos`**:
   - Modelo de doble licenciamiento: código fuente bajo Licencia MIT y material pedagógico visual bajo Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional (CC BY-NC-SA 4.0).
   - Cláusula de uso legítimo con fines educativos (*Fair Use* / Art. 148 de la Ley Federal del Derecho de Autor) respecto a marcas de terceros citadas nominativamente.
   - Cláusula de exención de garantías y limitación de responsabilidad ("TAL CUAL" / *AS IS*).
   - Jurisdicción legal y competencia territorial en los tribunales federales de la Ciudad de México.

3. **`/cookies`**:
   - Certificación de cero cookies de seguimiento de terceros, cero píxeles de remarketing y cero analíticas invasivas.
   - Análisis y justificación jurídica explícita: bajo el Artículo 5(3) de la Directiva ePrivacy (2002/58/CE) y lineamientos del INAI/LFPDPPP, las tecnologías de almacenamiento local estrictamente necesarias para el despliegue técnico están exentas de la obligación de un banner de consentimiento intrusivo.

## Accesibilidad y experiencia de usuario (WCAG 2.1 AA)

- **Auditoría automática de accesibilidad**:
  - Nuevo comando `npm run check:a11y` integrado en la suite de verificación continua `npm run check`.
  - Verificación exhaustiva de 228 páginas HTML pre-renderizadas: 100% de elementos `<img>` con etiquetas `alt` explicativas y controles interactivos (`<button>`, `<a>`) con nombres accesibles explícitos.
- **Navegación accesible en pie de página**:
  - Enlaces semánticos estructurados con `role="contentinfo"`, separadores decorativos marcados con `aria-hidden="true"` y contrastes de color validados contra fondo oscuro.
- **Controles de filtrado de biblioteca**:
  - Mejora de atributos `aria-label`, nombres descriptivos y regiones en vivo (`aria-atomic="true"`) en la interfaz de la Librería Profesional.

## Seguridad y metadatos de privacidad

- **Cabeceras de compilación**:
  - Desactivación de `poweredByHeader` en `next.config.ts` para eliminar la divulgación del motor Next.js en encabezados HTTP.
- **Políticas de referencia y rastreadores**:
  - Integración en `layout.tsx` de `referrer: 'strict-origin-when-cross-origin'` y directivas estables `robots` (`index, follow`) para protección de privacidad en navegación saliente.
- **Auditoría de propiedad intelectual y veracidad**:
  - Actualización de `THIRD_PARTY_NOTICES.md` certificando licencias de tipografías abiertas (SIL OFL) y eliminación de cualquier reseña ficticia o afirmación comercial infundada.
- **Política de seguridad actualizada (`SECURITY.md`)**:
  - Modelo de amenazas para arquitecturas puramente estáticas SSG alojadas en GitHub Pages / CDNs globales.
  - Procedimiento formal de Divulgación Coordinada de Vulnerabilidades (CVD) y requisitos de autenticación multifactor (2FA).
