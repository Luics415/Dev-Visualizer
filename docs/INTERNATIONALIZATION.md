# Directrices de Internacionalización (i18n) y Catálogos Tipados

Este documento especifica la arquitectura de internacionalización, gestión de diccionarios tipados y formateo sensible a la configuración regional (*locale*) en `Dev-Visualizer`.

---

## 1. Arquitectura de Catálogo Centralizado

Para facilitar la traducción pedagógica y evitar cadenas de texto dispersas en componentes:

1. **Diccionarios Estructurados:** Las cadenas de la interfaz se organizan en catálogos JSON/TypeScript tipados por dominio:
   - `common`: Botones de acción, navegación, temas y estados globales.
   - `algorithms`: Nombres canónicos, descripciones breves, categorías y notas de complejidad.
   - `quiz`: Preguntas de evaluación, opciones múltiples y explicaciones técnicas de respuesta.
2. **Seguridad de Tipos en Tiempo de Compilación:** La interfaz de traducción utiliza tipos utilitarios de TypeScript para garantizar que todas las claves requeridas existan en cada idioma soportado (e.g. `Record<Locale, TranslationSchema>`).

---

## 2. Formateo Numérico y Temporal Localizado

Las métricas cuantitativas generadas durante las simulaciones (pasos transcurridos, tiempo en milisegundos, tasas de comparación) deben formatearse mediante las APIs estándares de ECMAScript:

```typescript
// Ejemplo de formateo numérico localizado
const formatNumber = (val: number, locale = 'es-MX') =>
  new Intl.NumberFormat(locale).format(val);

// Ejemplo de duración en milisegundos
const formatDuration = (ms: number, locale = 'es-MX') =>
  new Intl.NumberFormat(locale, { style: 'unit', unit: 'millisecond' }).format(ms);
```

---

## 3. Síntesis de Voz Multilingüe

El motor de narración de audio (`audioNarrator`) adapta dinámicamente la selección de voces según el idioma de la página:
- Filtra las voces disponibles (`speechSynthesis.getVoices()`) haciendo coincidir el prefijo BCP 47 (e.g. `es-` para español, `en-` para inglés).
- Si no se encuentra una voz regional exacta (e.g. `es-MX`), retrocede ordenadamente a una voz genérica de la misma familia idiomática antes de desactivar la síntesis.
