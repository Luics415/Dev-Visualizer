# Lenguaje visual del Dev Visualizer

## Identidad exterior: Jinx Arcane

La interfaz editorial usa como fuente cromática:

- `#835f86`
- `#75455d`
- `#a76486`
- `#4d7290`
- `#4b4754`

Se aplica a fondo, navegación, títulos, textos editoriales, contadores, bordes y superficies exteriores. Para lograr contraste se permiten mezclas de esos tonos con blanco o negro mediante `color-mix()`.

## Separación semántica

Los colores internos de las animaciones no se sustituyen por la paleta exterior:

- cian para proceso principal;
- verde para resultado válido;
- amarillo para dato activo;
- rojo para rechazo o error;
- violeta para abstracción o sistema de tipos.

Esta separación permite cambiar la identidad de marca sin cambiar el significado de la explicación.

## Casos “en acción”

Los casos integrados usan seis cajas coordinadas. Cada caja tiene una composición propia, pero todas comparten un mismo reloj para que el recorrido sea legible:

1. evento o entrada;
2. cambio solicitado;
3. procesamiento interno;
4. comparación o decisión;
5. operación asíncrona o efecto;
6. resultado visible.

## Variedad controlada

Las escenas pueden usar líneas, paquetes, carriles, círculos, cajas anidadas, árboles, puertas, planos, grafos, timelines, snapshots, pilas, ventanas virtuales o representaciones de dispositivo. La geometría se elige por significado.

## Reglas de movimiento

1. Un elemento móvil representa un dato, llamada, control o resultado concreto.
2. El color cambia solo cuando cambia el significado o estado.
3. Las etiquetas permanentes permiten comprender un loop iniciado a la mitad.
4. La conclusión aparece después del proceso.
5. El reinicio devuelve la escena al estado inicial sin aparentar un error.
6. El shell puede cambiar de identidad visual sin modificar la semántica interna.
