# Máquina de Estados Finita y Mecanismo de Repetición Determinista

Este documento define la arquitectura de la máquina de estados finita (FSM) que controla las simulaciones interactivas, la navegación temporal y la reproducción determinista en `Dev-Visualizer`.

---

## 1. Diagrama de Transición de Estados

La simulación se modela como una máquina de estados finita con transiciones estrictas y sin efectos secundarios no controlados:

```text
       ┌───────────────┐
       │     IDLE      │◄─────────────────────────┐
       └───────┬───────┘                          │
               │ LOAD_INPUT                       │
               ▼                                  │
       ┌───────────────┐                          │
  ┌───►│    PAUSED     │                          │
  │    └───────┬───────┘                          │
  │            │ PLAY                             │
  │ STEP       ▼                                  │ RESET
  │    ┌───────────────┐                          │
  ├────┤    PLAYING    │                          │
  │    └───────┬───────┘                          │
  │ PAUSE      │ FINISHED                         │
  │            ▼                                  │
  │    ┌───────────────┐                          │
  └───►│   COMPLETED   ├──────────────────────────┘
       └───────────────┘
```

---

## 2. Eventos y Transiciones Permitidas

| Estado Actual | Evento Disparador | Siguiente Estado | Acción Asociada |
|---|---|---|---|
| `IDLE` | `LOAD_INPUT` | `PAUSED` | Inicializa el buffer inmutable con el estado cero. |
| `PAUSED` | `PLAY` | `PLAYING` | Inicia el temporizador de fotogramas según `speedMs`. |
| `PAUSED` | `STEP_FORWARD` | `PAUSED` | Incrementa `currentStepIndex` en $+1$ si index $< total - 1$. |
| `PAUSED` | `STEP_BACKWARD` | `PAUSED` | Decrementa `currentStepIndex` en $-1$ si index $> 0$. |
| `PLAYING` | `PAUSE` | `PAUSED` | Cancela el temporizador activo conservando el índice exacto. |
| `PLAYING` | `FINISHED` | `COMPLETED` | Dispara síntesis de cierre y notificación accesible `aria-live`. |
| `Cualquiera` | `RESET` | `PAUSED` | Rebobina el índice al paso inicial sin recargar la página. |

---

## 3. Garantía de Determinismo y Viaje en el Tiempo (*Time-Travel*)

- **Historial Completo:** Cada transición almacena una instantánea completa o un parche inverso diferencial.
- **Sin Re-cálculos Parciales:** Navegar hacia atrás en una simulación de ordenamiento no re-ejecuta el algoritmo; simplemente indexa `history[currentStepIndex - 1]`.
- **Persistencia en URL:** Los parámetros de estado principales (algoritmo seleccionado, tamaño de datos, velocidad) se reflejan como parámetros de búsqueda (`searchParams`) opcionales para permitir compartir enlaces reproducibles.
