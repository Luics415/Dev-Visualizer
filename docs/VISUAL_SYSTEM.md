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
- signal-matrix: matriz de señales y microprocesos autónomos;
- relation-loom: tuplas, predicados, coincidencias y carriles exteriores;
- concept-constellation: atlas de submecanismos relacionados;
- assurance-rack: payloads, verificaciones, evidencia y gates;
- event-fabric: productores, particiones, consumidores, reintentos y replay;
- artifact-passport: commit, controles, SBOM, firma, promoción y telemetría.

Se usa una escena hecha a medida cuando una familia genérica no explica correctamente el mecanismo.

## Movimiento

1. Cada elemento móvil representa un dato, llamada, control o resultado.
2. Las etiquetas permanentes permiten entrar a mitad del loop.
3. El reinicio vuelve al estado inicial sin aparentar un error.
4. La reproducción tiene tres estados explícitos: running, resting y reduced.
5. Intersection Observer y la visibilidad de la pestaña detienen escenas fuera del viewport o en segundo plano.
6. prefers-reduced-motion muestra un estado estático completo, sin ejecutar una pasada y congelar el último fotograma.
7. Los elementos semánticos conservan una opacidad base legible; únicamente los tokens transitorios pueden desaparecer.
8. Cada loop vuelve al inicio sin terminar en una escena gris u opaca.
9. El movimiento no bloquea teclado, tacto, lectura ni scroll.

## Casos integrados

Las etapas distinguen lo visible de lo interno, mantienen fallos y recuperación, y comparten una dirección narrativa. El layout puede desplazarse localmente en móvil, pero nunca debe ensanchar el documento completo.

CI/CD usa una escena propia de pasaporte del artefacto: commit, lint, pruebas, SAST, SBOM, firma, artefacto inmutable, aprobación o promoción automática y retorno telemétrico.

HTTPS usa una forja de túnel seguro: transporte, negociación, cadena de confianza, fallo de hostname, recuperación, ECDHE/HKDF, Finished y tráfico HTTP cifrado. Python/MediaPipe usa un reloj de paquetes y un heartbeat detector–tracker para explicar captura, backpressure, landmarks, geometría, reacquisición, feedback y privacidad local.

XML/XSD/JSON usa un laboratorio de representaciones: bytes y media type, árbol XML, nombres expandidos, malla XSD, fallo de identidad, revalidación, mapping explícito, JSON Schema, control de revisión con JSON Patch y digest canonicalizado.

## Firma y banners

El banner de Colecciones conserva el ancla principal y su composición. Acerca utiliza una pieza hermana exclusiva con el ancla desplazada, una estela caligráfica y la firma Luics415 como texto HTML accesible, no incrustado en la imagen.

La presentación social lleva esa familia visual a un atlas horizontal 1.91:1: ancla de rutas luminosas, seis módulos conectados, retícula, tipografía técnica y el rol “Software Developer · Dev Visualizer”. No usa grafiti, pintura, marcas de terceros ni composiciones copiadas. También funciona como imagen Open Graph del sitio.
