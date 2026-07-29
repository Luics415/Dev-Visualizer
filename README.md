# Dev Visualizer — Study Atlas V10

Enciclopedia visual de programación, infraestructura y operación construida con animaciones autónomas. Cada concepto usa la metáfora que mejor explica su mecanismo: memoria, árboles, timelines, pipelines, grafos, capas, comparativas, terminales, redes, servicios cloud o rollouts.

## Filosofía de cobertura

El proyecto no usa una cuota fija de escenas. Cada tecnología crece hasta cubrir:

- fundamentos y vocabulario;
- modelo mental e internals;
- trabajo diario y patrones;
- diagnóstico, errores y recuperación;
- rendimiento, seguridad y producción;
- un caso integrado “en acción”;
- una **Profundización del caso** que separa lo visible de lo que ocurre internamente.

La versión V10 reúne **1,210 conceptos** en trece colecciones y veintiséis rutas de estudio.

## Biblioteca y navegación

La ruta `/colecciones` es el catálogo principal. Desde cualquier página, la barra superior permite:

- volver a la biblioteca mediante `DV`;
- ver la colección actual;
- avanzar o retroceder entre las 26 rutas;
- abrir un selector agrupado y buscable;
- encontrar colecciones por nombre o categoría;
- acceder desde móvil sin depender de una fila horizontal interminable.

Las escenas extensas se pausan fuera del viewport para conservar recursos al navegar colecciones de más de cien conceptos.

## Cobertura actual

| # | Colección | Ruta | Conceptos | Capítulos | Caso integrado |
|---:|---|---|---:|---:|---:|
| 01 | JavaScript ES6+ | `/` | 55 | 12 | 14 etapas |
| 02 | TypeScript | `/typescript` | 64 | 7 | 14 etapas |
| 03 | React | `/react` | 62 | 7 | 14 etapas |
| 04 | React Native | `/react-native` | 80 | 7 | 14 etapas |
| 05 | Gestión de estado | `/gestion-estado` | 75 | 7 | 14 etapas |
| 06 | APIs REST | `/apis-rest` | 34 | 6 | traza integrada |
| 07 | Backend | `/backend` | 96 | 9 | 14 etapas |
| 08 | Bases de datos | `/bases-datos` | 113 | 10 | 14 etapas |
| 09 | Git y GitHub | `/git-github` | 32 | 5 | 8 etapas |
| 10 | HTML y CSS | `/html-css` | 42 | 7 | 8 etapas |
| 11 | Linux | `/linux` | 182 | 10 | 14 etapas |
| 12 | AWS | `/aws` | 198 | 12 | 14 etapas |
| 13 | Deployment | `/deployment` | 177 | 10 | 14 etapas |

Las rutas prácticas agregan `-en-accion` al slug de cada colección.

## Novedades V10

### Linux — 182 conceptos

Cubre kernel y user space, system calls, FHS, Bash, pipes, redirecciones, permisos, identidad, procesos, señales, systemd, cgroups, redes, SSH, storage, filesystems, observabilidad, troubleshooting, hardening, paquetes, scripting, virtualización y contenedores.

El caso integrado diagnostica `hexgate-api`: empieza en un 503, sigue DNS y sockets, inspecciona systemd y journal, demuestra un `EACCES` por ownership incorrecto y verifica la recuperación sin aplicar permisos globales inseguros.

### AWS — 198 conceptos

Cubre regiones y cuentas, IAM, Organizations, KMS, VPC, compute, load balancing, contenedores, Lambda, storage, bases de datos, mensajería, edge, seguridad, CloudWatch, Systems Manager, infraestructura como código, CI/CD, gobierno, recuperación y costo.

El caso integrado construye el portal de seguridad de Piltover con Route 53, CloudFront, WAF, ALB, ECS Fargate, Aurora, ElastiCache, SQS y Lambda en una arquitectura multi-AZ con identidad temporal y observabilidad.

### Deployment — 177 conceptos

Cubre build/release/run, artefactos inmutables, imágenes OCI, configuración, OIDC, pipelines, quality gates, rolling, blue-green, canary, Kubernetes, tráfico, migraciones expand-contract, compatibilidad, observabilidad, rollback, supply chain y operación después del release.

El caso integrado sigue la versión 2.4.0 de Ekko: build firmado, OIDC, schema compatible y canary 5→25%; una regresión de p95 detiene la promoción y restaura tráfico a stable sin perder datos.

## Identidad visual

La interfaz exterior usa la paleta Jinx Arcane:

- `#835f86` — violeta;
- `#75455d` — vino;
- `#a76486` — rosa;
- `#4d7290` — azul;
- `#4b4754` — pizarra.

Los colores internos conservan significado técnico:

- cian — proceso o transporte;
- amarillo — dato activo o espera;
- verde — éxito o resultado válido;
- rojo — rechazo o error;
- violeta — abstracción, estructura o tipo.

Los guiños a League of Legends y Arcane se usan como datos de ejemplo sin sustituir el contenido técnico.

## Tecnologías

- Next.js App Router
- React
- TypeScript
- Motion for React
- CSS global con sistema visual propio

V10 no agrega dependencias.

## Ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:3000/colecciones`.

## Validar

```bash
npm run lint
npm run build
```

Las animaciones respetan movimiento reducido y pausan sus loops cuando quedan fuera del viewport.
