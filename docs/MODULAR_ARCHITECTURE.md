# Arquitectura Modular de Componentes e Hidratación Diferida

Este documento define la estructura de descomposición de componentes, límites de hidratación selectiva y modularidad desacoplada en `Dev-Visualizer`.

---

## 1. Principio de Hidratación Selectiva (Island Architecture)

En Next.js App Router, para evitar hidratar el árbol completo de React cuando el usuario solo interactúa con un visualizador específico:

1. **Servidor por Defecto:** Las páginas, encabezados, metadatos y explicaciones teóricas se generan como *Server Components* estáticos de cero JavaScript en cliente.
2. **Islas Interactivas (`"use client"`):** Únicamente los lienzos de Canvas, controles de reproducción y sintetizadores de audio se delimitan con la directiva `"use client"`.
3. **Carga Perezosa con `next/dynamic`:** Los visualizadores de alta complejidad o dependencias pesadas se cargan de forma diferida:
   ```typescript
   const InteractiveScene = dynamic(() => import('@/components/scenes/InteractiveScene'), {
     ssr: false,
     loading: () => <SceneSkeleton aria-label="Cargando visualizador..." />
   });
   ```

---

## 2. Aislamiento y Reutilización de Componentes

- **Sin Estado Global Acoplado:** Cada escena visual recibe sus datos mediante props inmutables y emite eventos a través de callbacks puros.
- **Encapsulación de Estilos:** Se utilizan utilidades de Tailwind CSS y variables semánticas, evitando colisiones de selectores CSS globales.
