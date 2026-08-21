# Sistema visual

## Identidad exterior

La interfaz editorial conserva la paleta base:

- `#835f86`
- `#75455d`
- `#a76486`
- `#4d7290`
- `#4b4754`

Fondos, navegación, títulos y bordes pueden mezclar esos tonos con blanco o negro mediante `color-mix()` para asegurar contraste.

## Semántica interior

- cian: proceso principal;
- verde: resultado válido;
- amarillo: dato activo;
- rojo: error o rechazo;
- violeta: abstracción o sistema de tipos.

El significado nunca depende únicamente del color.

## Familias y escenas propias

El atlas admite familias reutilizables cuando comparten un mecanismo:

- `memory-map`: regiones, direcciones, ownership y lifetime;
- `runtime-dispatch`: llamada, cola, resolución y ejecución;
- `parallel-grid`: datos distribuidos y pasos paralelos;
- `workflow`: nodos, ramas, reintentos y recuperación;
- `interface-flow`: tarea, foco, feedback y validación;
- `literate-weave`: texto, código, CTANGLE y CWEAVE;
- `signal-matrix`: señales y microprocesos autónomos;
- `relation-loom`: tuplas, predicados, coincidencias y carriles;
- `concept-constellation`: submecanismos relacionados;
- `assurance-rack`: payloads, verificaciones, evidencia y gates;
- `event-fabric`: productores, particiones, consumidores y replay;
- `artifact-passport`: commit, controles, SBOM, firma y promoción.

Se crea una composición a medida cuando una familia genérica no explica correctamente memoria, runtime, interfaz, protocolo, paralelismo o workflow. Las 24 rutas expandidas **En acción** tienen una composición propia; no comparten el mismo diagrama lineal.

## Movimiento

1. Cada elemento móvil representa un dato, llamada, control o resultado.
2. Las etiquetas permanentes permiten entrar a mitad del loop.
3. El cierre devuelve recursos, emite evidencia o genera la siguiente entrada; no es un simple reinicio de opacidades.
4. La reproducción tiene tres estados explícitos: `running`, `resting` y `reduced`.
5. Intersection Observer y la visibilidad de la pestaña detienen escenas fuera del viewport o en segundo plano.
6. `prefers-reduced-motion` muestra una composición estática completa.
7. Los elementos semánticos conservan una opacidad base legible; solo los tokens transitorios pueden desaparecer.
8. Ningún loop termina en una escena gris u opaca.
9. El movimiento no bloquea teclado, tacto, lectura ni scroll.

## Casos integrados

Las etapas distinguen lo visible de lo interno, mantienen fallos y recuperación, y comparten una dirección narrativa. El layout puede desplazarse localmente en móvil, pero nunca debe ensanchar el documento completo.

- CI/CD usa un pasaporte de artefacto: commit, controles, SBOM, firma, promoción y retorno telemétrico.
- NGINX usa una forja HTTPS: transporte, cadena de confianza, fallo de hostname, recuperación, ECDHE/HKDF y tráfico cifrado.
- Python usa un observatorio del runtime con AST, bytecode, concurrencia, cuarentena y reanudación.
- MediaPipe usa un reloj de paquetes y un heartbeat detector–tracker con backpressure, landmarks, reacquisición y privacidad local.
- XML usa un árbol documental con namespaces, catálogos, XSLT y firma.
- XSD usa gates de tipos, facets, identidad, assertions y PSVI.
- JSON usa un objeto de valores con detección de duplicados, JSON Schema, Patch, revisión y JCS.
- C, C++, C#, Objective-C, C*, CWEB, Embedded C, Visual Basic, UX/UI, Bootstrap, AngularJS, APIs, Node.js, Laravel, n8n, .NET, Git y GitHub conservan metáforas distintas y específicas de su caso.

Los guiños a League of Legends son microcopy original y ambiental. Se excluyen nombres de campeones, emblemas, mapas, habilidades, audio y recursos de Riot Games.

## Firma y banners

El banner de Colecciones conserva el ancla principal y su composición. Acerca utiliza una pieza hermana exclusiva con el ancla desplazada, una estela caligráfica y la firma Luics415 como texto HTML accesible.

La presentación social usa un atlas horizontal 1.91:1: ancla de rutas luminosas, seis módulos conectados, retícula, tipografía técnica y el rol “Software Developer · Dev Visualizer”. No usa grafiti, pintura, marcas de terceros ni composiciones copiadas. También funciona como imagen Open Graph del sitio.
