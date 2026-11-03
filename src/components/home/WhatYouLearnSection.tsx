import Link from "next/link";
import { ArchitectureSimulationConsole } from "./ArchitectureSimulationConsole";

interface CurriculumPillar {
  id: string;
  number: string;
  domain: string;
  title: string;
  summary: string;
  whatYouMaster: string[];
  keyConcepts: string[];
  canonicalRoute: string;
  routeLabel: string;
  stats: string;
}

const CURRICULUM_PILLARS: readonly CurriculumPillar[] = [
  {
    id: "runtimes-memory",
    number: "01",
    domain: "ARQUITECTURA DE RUNTIMES & MEMORIA",
    title: "Modelos de Ejecución, Ciclos de Eventos y Gestión de Memoria",
    summary:
      "Aprende exactamente qué ocurre a nivel de CPU, memoria y sistema operativo cuando compilas o ejecutas código. Descubre la mecánica interna invisible que separa a un desarrollador junior de un ingeniero senior.",
    whatYouMaster: [
      "Diferencia física entre Stack y Heap: asignación de punteros, fragmentación y desbordamientos.",
      "Event Loop de V8 y Node.js: sincronización entre Call Stack, Microtasks (Promises) y Macrotasks (Timers, I/O).",
      "Modelos de Garbage Collection: algoritmos generacionales Mark-Sweep-Compact y recolección concurrente.",
      "Concurrencia profunda: Hilos nativos OS vs Goroutines en Go vs Modelo de Actores en Erlang/Elixir.",
    ],
    keyConcepts: ["Call Stack", "Heap Allocation", "Event Loop V8", "Microtasks DAG", "Mark-Sweep GC", "Goroutines"],
    canonicalRoute: "/javascript",
    routeLabel: "Explorar Runtimes & JavaScript",
    stats: "12 Colecciones · 1,240 Conceptos",
  },
  {
    id: "algorithms-data-structures",
    number: "02",
    domain: "ALGORITMOS & ESTRUCTURAS OBSERVABLES",
    title: "Algoritmos Fundamentales, Estructuras y Complejidad Asintótica",
    summary:
      "Aprende a razonar matemáticamente sobre el coste temporal y espacial de cada operación. No memorices código: visualiza transformaciones en memoria, rebalanceos de árboles y caminos óptimos en grafos.",
    whatYouMaster: [
      "Particionamiento y ordenamiento Hoare vs Lomuto en Quicksort y estabilidad en Mergesort.",
      "Estructuras jerárquicas: rebalanceo en Árboles AVL, B-Trees para índices y heaps binarios.",
      "Recorridos en Grafos: camino más corto con Dijkstra, ordenación topológica y detección de ciclos.",
      "Análisis asintótico observable: demostración visual de complejidades O(1), O(log N), O(N) y O(N log N).",
    ],
    keyConcepts: ["Quicksort Hoare", "B-Tree Indices", "Dijkstra SPF", "AVL Rebalance", "Big-O Runtime", "Graph Traversal"],
    canonicalRoute: "/algorithms",
    routeLabel: "Explorar Algoritmos & Grafos",
    stats: "8 Colecciones · 890 Conceptos",
  },
  {
    id: "distributed-systems-backend",
    number: "03",
    domain: "SISTEMAS DISTRIBUIDOS & REDES",
    title: "Ingeniería de Backend, Protocolos y Patrones de Resiliencia",
    summary:
      "Aprende el ciclo de vida completo de una petición a través de internet y cómo construir sistemas que toleran fallos catastróficos de red sin interrumpir el servicio ni corromper datos.",
    whatYouMaster: [
      "Pila de protocolos de red: TCP Three-Way Handshake, cifrado TLS 1.3, frames HTTP/2 y streams QUIC en HTTP/3.",
      "Sistemas Distribuidos: Teorema CAP, consistencia eventual vs fuerte (PACELC) y particionamiento de datos.",
      "Patrones de Resiliencia: Circuit Breakers (estados Closed, Open, Half-Open), Rate Limiting (Token Bucket) y Retry con Jitter.",
      "Comunicación moderna entre microservicios: REST semántico, gRPC con Protocol Buffers y WebSockets bidireccionales.",
    ],
    keyConcepts: ["TLS 1.3 Handshake", "QUIC Streams", "Circuit Breaker", "Token Bucket", "Teorema CAP", "gRPC Protobuf"],
    canonicalRoute: "/backend",
    routeLabel: "Explorar Backend & Arquitectura",
    stats: "15 Colecciones · 1,560 Conceptos",
  },
  {
    id: "frontend-dom-engine",
    number: "04",
    domain: "FRONTEND DE ALTO RENDIMIENTO",
    title: "Runtimes de Navegador, Reactividad Profunda y Rendering Path",
    summary:
      "Aprende cómo el motor del navegador convierte bytes en píxeles interactivos a 60 FPS y cómo los frameworks modernos gestionan el estado reactivo sin penalizar el hilo principal.",
    whatYouMaster: [
      "Critical Rendering Path: parseo HTML a DOM, CSSOM, Render Tree, Layout (reflow) y Compositing por GPU.",
      "Paradigmas de reactividad: Signals reactivas con grafos acíclicos dirigidos vs reconciliación Virtual DOM.",
      "Estrategias de renderizado moderno: SSR, SSG, Server Components (RSC), Resumability e Hydration parcial.",
      "Auditoría y optimización de Core Web Vitals: LCP (Largest Contentful Paint), INP y CLS en producción.",
    ],
    keyConcepts: ["Critical Rendering Path", "Signals DAG", "Virtual DOM Diff", "GPU Compositing", "Server Components", "Core Web Vitals"],
    canonicalRoute: "/react",
    routeLabel: "Explorar Frontend & Navegador",
    stats: "14 Colecciones · 1,320 Conceptos",
  },
  {
    id: "databases-storage-engines",
    number: "05",
    domain: "BASES DE DATOS & MOTORES DE ALMACENAMIENTO",
    title: "Motores Relacionales, Índices en Disco y Transacciones ACID",
    summary:
      "Aprende cómo los motores de bases de datos garantizan durabilidad, cómo estructuran las páginas en disco y cómo interpretar planes de ejecución para eliminar cuellos de botella en milisegundos.",
    whatYouMaster: [
      "Estructuras de almacenamiento en disco: Índices B+Tree vs Log-Structured Merge-Trees (LSM-Trees y WAL).",
      "Garantías transaccionales ACID: niveles de aislamiento (Read Committed, Repeatable Read, Serializable) y MVCC.",
      "Optimización de consultas SQL: lectura de árboles de ejecución con EXPLAIN ANALYZE y costos de escaneo secuencial.",
      "Estrategias de persistencia NoSQL: almacenes de documentos, grafos relacionales y cachés en memoria (Redis).",
    ],
    keyConcepts: ["B+Tree Storage", "LSM-Tree & WAL", "MVCC Isolation", "EXPLAIN ANALYZE", "ACID Transactions", "Redis Cache"],
    canonicalRoute: "/bases-datos",
    routeLabel: "Explorar Bases de Datos & SQL",
    stats: "10 Colecciones · 980 Conceptos",
  },
  {
    id: "devops-linux-containers",
    number: "06",
    domain: "INFRAESTRUCTURA & LINUX INTERNALS",
    title: "Contenedores, Aislamiento de Kernel y Pipelines de Despliegue",
    summary:
      "Aprende la tecnología subyacente que hace posible la computación en la nube: no solo 'comandos de Docker', sino las llamadas al sistema del kernel Linux que crean la ilusión de virtualización.",
    whatYouMaster: [
      "Aislamiento a nivel de Kernel Linux: Namespaces (PID, NET, MNT, IPC), cgroups v2 (CPU/RAM) y OverlayFS.",
      "Ciclo de vida de contenedores: imágenes inmutables, capas copy-on-write y orquestación con Kubernetes.",
      "Estrategias de despliegue Zero-Downtime: Blue/Green deployment, Canary releases y rollback instantáneo.",
      "Seguridad de cadena de suministro: escaneo SAST de dependencias, firmas criptográficas y hardening de Linux.",
    ],
    keyConcepts: ["Linux Namespaces", "cgroups v2", "OverlayFS", "Zero-Downtime Canary", "CI/CD Pipelines", "Docker Engine"],
    canonicalRoute: "/docker",
    routeLabel: "Explorar Docker & Infraestructura",
    stats: "14 Colecciones · 1,420 Conceptos",
  },
];

export function WhatYouLearnSection() {
  return (
    <section className="home-learn-section" id="que-se-aprende" aria-label="Qué se aprende en Dev Visualizer">
      {/* ── Encabezado Principal y Respuesta Directa ── */}
      <div className="home-section-title-wrap">
        <span className="home-section-eyebrow">01 · CURRÍCULUM TÉCNICO Y FUNDAMENTOS</span>
        <h2>¿Qué se aprende en Dev Visualizer?</h2>
        <p className="home-section-lead">
          En Dev Visualizer no memorizas sintaxis superficial. Aprendes <strong>ingeniería de software profunda</strong>, la <strong>física de los runtimes</strong> y la <strong>arquitectura de sistemas distribuidos</strong> a través de modelos visuales deterministas basados en código ejecutable y estándares oficiales.
        </p>
      </div>

      {/* ── Consola Interactiva de Simulación de Arquitectura y Algoritmos ── */}
      <div className="home-showcase-wrapper">
        <div className="home-showcase-header">
          <span className="home-showcase-badge">LABORATORIO OBSERVABLE EN VIVO</span>
          <h3>Consola Interactiva de Algoritmos, Runtimes y Telemetría</h3>
          <p>
            Experimenta en tiempo real con las simulaciones fundamentales del atlas: particionamiento de algoritmos de ordenamiento, curvas de telemetría de sistemas distribuidos, el Event Loop de V8 y máquinas de estados resilientes.
          </p>
        </div>
        <ArchitectureSimulationConsole />
      </div>

      {/* ── Las 6 Grandes Áreas de Aprendizaje (Diseño Canónico de Tarjetas) ── */}
      <div className="home-pillars-wrap">
        <div className="home-pillars-header">
          <span className="home-pillars-tag">CURRÍCULUM CANÓNICO COMPLETO</span>
          <h3>Los 6 Dominios Maestros de la Formación Técnica</h3>
          <p>
            Cada uno de los 7,410 conceptos técnicos de la plataforma se agrupa en estos dominios de ingeniería, conectados con casos de producción y especificaciones normativas:
          </p>
        </div>

        <div className="home-cards-grid">
          {CURRICULUM_PILLARS.map((pillar) => (
            <article className="home-pillar-card" key={pillar.id}>
              <div className="home-pillar-card__top">
                <span className="home-pillar-card__number">{pillar.number}</span>
                <span className="home-pillar-card__domain">{pillar.domain}</span>
                <span className="home-pillar-card__stats">{pillar.stats}</span>
              </div>

              <h4 className="home-pillar-card__title">{pillar.title}</h4>
              <p className="home-pillar-card__summary">{pillar.summary}</p>

              <div className="home-pillar-card__takeaways">
                <strong>Lo que dominas en este dominio:</strong>
                <ul>
                  {pillar.whatYouMaster.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="home-pillar-card__concepts">
                <span>Conceptos Clave:</span>
                <div className="home-pillar-card__tags">
                  {pillar.keyConcepts.map((concept, idx) => (
                    <span key={idx} className="home-pillar-tag">
                      {concept}
                    </span>
                  ))}
                </div>
              </div>

              <div className="home-pillar-card__footer">
                <Link href={pillar.canonicalRoute} className="home-pillar-link">
                  <span>{pillar.routeLabel}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
