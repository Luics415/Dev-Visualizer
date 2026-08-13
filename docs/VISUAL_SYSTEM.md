# Sistema visual

## Identidad exterior

La interfaz editorial conserva la paleta:

- #835f86
- #75455d
- #a76486
- #4d7290
- #4b4754

Fondos, navegación, títulos y bordes pueden mezclar esos tonos con blanco o negro mediante color-mix() para asegurar contraste.

## Semántica interior

- cian: proceso principal;
- verde: resultado válido;
- amarillo: dato activo;
- rojo: error o rechazo;
- violeta: abstracción o sistema de tipos.

El significado nunca depende únicamente del color.

## Familias

Además de las familias existentes, el atlas admite:

- memory-map: regiones, direcciones, ownership y lifetime;
- runtime-dispatch: llamada, cola, resolución y ejecución;
- parallel-grid: datos distribuidos y pasos paralelos;
- workflow: nodos, ramas, reintentos y recuperación;
- interface-flow: tarea, foco, feedback y validación;
- literate-weave: texto, código, CTANGLE y CWEAVE.

Se usa una escena hecha a medida cuando una familia genérica no explica correctamente el mecanismo.

## Movimiento

1. Cada elemento móvil representa un dato, llamada, control o resultado.
2. Las etiquetas permanentes permiten entrar a mitad del loop.
3. El reinicio vuelve al estado inicial sin aparentar un error.
4. Intersection Observer pausa escenas fuera del viewport.
5. prefers-reduced-motion conserva toda la explicación sin movimiento obligatorio.
6. El movimiento no bloquea teclado, tacto, lectura ni scroll.

## Casos integrados

Las etapas distinguen lo visible de lo interno, mantienen fallos y recuperación, y comparten una dirección narrativa. El layout puede desplazarse localmente en móvil, pero nunca debe ensanchar el documento completo.
