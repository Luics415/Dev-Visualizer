# Protocolo de Pruebas de Accesibilidad con Lectores de Pantalla (NVDA / VoiceOver)

Este documento detalla el procedimiento de auditoría manual y asistida con lectores de pantalla para verificar el cumplimiento WCAG 2.1 AA en `Dev-Visualizer`.

---

## 1. Matriz de Entornos de Prueba

| Lector de Pantalla | Navegador Objetivo | Sistema Operativo | Modo de Navegación |
|---|---|---|---|
| **NVDA (Reciente)** | Mozilla Firefox | Windows 11 / 10 | Modo Exploración (*Browse Mode*) y Modo Foco (*Focus Mode*). |
| **JAWS** | Google Chrome | Windows 11 | Cursor Virtual y lectura de tablas dinámicas. |
| **VoiceOver** | Apple Safari | macOS / iOS | Rotor de encabezados, puntos de referencia (*landmarks*) y controles. |
| **TalkBack** | Google Chrome | Android 14+ | Gestos de barrido secuencial y foco táctil directo. |

---

## 2. Checklist Operativo por Visualizador

1. **Anuncio de Cambio de Estado:** Las actualizaciones de simulación no deben interrumpir la locución del lector a menos que sean críticas (`aria-live="polite"`).
2. **Navegación por Puntos de Referencia:** Existencia obligatoria de `<header>`, `<main>`, `<nav>` y `<footer aria-label="...">`.
3. **Controles Descriptivos:** Todo botón de icono (`Play`, `Pause`, `Skip`) debe incluir `aria-label` explícito y no depender de tooltip visual.
