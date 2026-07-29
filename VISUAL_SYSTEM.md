# Lenguaje visual del Dev Visualizer

## Identidad constante

- Fondo oscuro técnico, cuadrícula tenue y paneles sin sombras decorativas excesivas.
- Código en tipografía monoespaciada.
- Cian para proceso principal, verde para resultado válido, amarillo para dato activo, rojo para rechazo/error y violeta para abstracciones de tipos.
- Texto secundario mínimo y revelado en el momento en que aporta contexto.

## Variedad controlada

Las escenas pueden usar:

- líneas y paquetes para transferencia;
- carriles para procesos paralelos;
- círculos para acumulación o ciclos;
- cajas anidadas para alcance y memoria léxica;
- árboles para decisiones;
- puertas para validación;
- planos superpuestos para contratos estructurales;
- grafos para módulos y servicios;
- timelines para asincronía.

La geometría se elige por significado, no por conveniencia de implementación.

## Reglas de movimiento

1. Un elemento móvil siempre representa algo concreto: dato, llamada, control o resultado.
2. El color cambia solo cuando cambia el significado o el estado.
3. La pausa ayuda a leer un estado; no debe ocultar el proceso.
4. El espectador que entra a mitad del loop debe poder orientarse mediante etiquetas permanentes.
5. La conclusión aparece después del proceso, no antes.
6. El reinicio debe devolver la escena al estado inicial sin aparentar un error.
