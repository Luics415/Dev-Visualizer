# Arquitectura del Sistema de Narración de Audio

Este documento describe la máquina de estados y las garantías de ciclo de vida del subsistema de narración técnica interactiva (`src/hooks/useAudioNarrator.ts` y `src/lib/audioNarrator.ts`):

## Máquina de Estados

```text
[Inactivo / Idle] ──(play)──> [Cargando Buffer] ──(ready)──> [Reproduciendo]
        ▲                                                           │
        │                                                           ▼
        └──────────────────────(cleanup / unmount)─────────── [En Pausa]
```

## Garantías Operativas

1. **Canal Único (Singleton):** El contexto mantiene una única instancia de reproducción activa para evitar superposición de voces al alternar conceptos.
2. **Desvanecimiento Cruzado:** Se aplica un fade-out no bloqueante de 150 ms antes de desmontar o pausar la pista activa.
3. **Liberación de Memoria:** Al cambiar de ruta o desmontar componentes, los listeners de eventos se remueven y el contexto de audio se suspende para prevenir fugas de memoria.
