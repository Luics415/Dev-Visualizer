# Observabilidad, Telemetría y Contención de Errores

Este documento establece las prácticas de instrumentación de errores en tiempo de ejecución, límites de fallo (*Error Boundaries*) y telemetría de rendimiento en `Dev-Visualizer`.

---

## 1. Estrategia de Error Boundaries Jerárquicos

Para evitar que una excepción inesperada en una escena algorítmica específica desmonte toda la aplicación:

1. **Límite Global de Aplicación:** Ubicado en el layout raíz para capturar fallos catastróficos no controlados y ofrecer un botón de recarga limpia con borrado selectivo de caché de sesión.
2. **Límites a Nivel de Escena / Módulo:** Cada visualizador interactivo está envuelto en un `ErrorBoundary` dedicado que:
   - Aísla el fallo únicamente a la región del lienzo o simulación.
   - Presenta una interfaz de recuperación accesible con opción de *"Reiniciar Algoritmo"*.
   - Muestra el código de error y contexto de depuración si se encuentra en entorno de desarrollo.

---

## 2. Telemetría de Rendimiento y Core Web Vitals

La aplicación utiliza la API nativa de rendimiento del navegador (`PerformanceObserver`) para monitorizar:

- **Duración de Tareas Largas (*Long Tasks*):** Tareas en el hilo principal que excedan los $50\text{ ms}$.
- **Métricas de Pintado:** Marcas de tiempo de `first-contentful-paint` y `largest-contentful-paint`.
- **Rendimiento de Simulación:** Medición de tiempo de ejecución del pre-cálculo de pasos algorítmicos mediante `performance.mark` y `performance.measure`.

---

## 3. Principio de Privacidad de Telemetría

- **Cero Datos Personales (PII):** No se capturan direcciones IP, identificadores de usuario ni datos de entrada sensibles.
- **Modo Offline Resiliente:** Si el cliente pierde conectividad a internet, los eventos de diagnóstico se descartan silenciosamente o se conservan en un buffer circular en memoria sin saturar `localStorage`.
