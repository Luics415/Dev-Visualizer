# Roadmap del Dev Visualizer

## Regla principal

- [x] La cobertura decide la cantidad de escenas; no existe un límite artificial de 14.
- [x] Separar fundamentos, internals, trabajo diario, diagnóstico y producción.
- [x] Elegir una metáfora visual específica para cada mecanismo.
- [x] Mantener casos integrados con **Profundización del caso**.
- [x] Usar guiños a Arcane/League como contexto, nunca como sustituto de la explicación.

## Navegación y experiencia

- [x] Biblioteca central en `/colecciones`.
- [x] Selector agrupado y buscable.
- [x] Navegación anterior/siguiente entre 26 rutas.
- [x] Índices de capítulos con anclas y conteos.
- [x] Diseño responsive.
- [x] Pausar escenas fuera del viewport.
- [ ] Búsqueda global por concepto, palabra clave y nivel.
- [ ] Filtros por fundamentos, internals, producción y familia visual.
- [ ] Progreso local de estudio.
- [ ] Página de enfoque individual por concepto.
- [ ] Controles de velocidad y pausa en vista individual.

## Colecciones terminadas

### 01 — JavaScript ES6+
- [x] 55 conceptos en 12 capítulos.
- [x] Caso integrado de 14 etapas.

### 02 — TypeScript
- [x] 64 conceptos en 7 capítulos.
- [x] Caso integrado de 14 etapas.

### 03 — React
- [x] 62 conceptos en 7 capítulos.
- [x] Caso integrado de 14 etapas.

### 04 — React Native
- [x] 80 conceptos en 7 capítulos.
- [x] Caso integrado de 14 etapas.

### 05 — Gestión de estado
- [x] 75 conceptos en 7 capítulos.
- [x] Caso integrado de 14 etapas.
- [ ] Añadir CRDTs y colaboración multi-dispositivo avanzada.

### 06 — APIs REST
- [x] 34 conceptos.
- [x] Trazabilidad integrada con idempotencia.
- [ ] Añadir OAuth/OIDC detallado y compatibilidad por consumidor.

### 07 — Backend
- [x] 96 conceptos en 9 capítulos.
- [x] Caso integrado con transacción, outbox, cola y observabilidad.
- [ ] Añadir GraphQL, gRPC y WebSockets como colecciones comparativas.

### 08 — Bases de datos
- [x] 113 conceptos en 10 capítulos.
- [x] Caso integrado con concurrencia, WAL y réplica.
- [ ] Añadir laboratorios dedicados por motor.

### 09 — Git y GitHub
- [x] 32 conceptos.
- [x] Caso integrado de 8 etapas.

### 10 — HTML y CSS
- [x] 42 conceptos.
- [x] Caso integrado desde source hasta pixels.

### 11 — Linux
- [x] 182 conceptos en 10 capítulos.
- [x] Kernel, shell, permisos, procesos, systemd, redes, storage, troubleshooting, hardening y contenedores.
- [x] Caso integrado de 14 etapas con diagnóstico por evidencia y recuperación segura.
- [ ] Añadir laboratorios dedicados de Bash, systemd y networking.

### 12 — AWS
- [x] 198 conceptos en 12 capítulos.
- [x] Identidad, gobierno, VPC, compute, storage, data, eventos, edge, observabilidad, IaC, DR y costo.
- [x] Caso integrado de 14 etapas con arquitectura multi-AZ y credenciales temporales.
- [ ] Añadir simuladores de decisiones por workload y laboratorios de IAM policy evaluation.

### 13 — Deployment
- [x] 177 conceptos en 10 capítulos.
- [x] CI/CD, artefactos, OCI, rollouts, Kubernetes, datos, observabilidad, rollback y supply chain.
- [x] Caso integrado de 14 etapas con canary, análisis automático y rollback compatible.
- [ ] Añadir laboratorio de GitOps y comparación visual de estrategias por riesgo/costo.

## Próximas colecciones del roadmap Jr

- [ ] Nginx.
- [ ] Docker.
- [ ] Firebase.
- [ ] Debugging.
- [ ] Architecture.
- [ ] Portfolio final y publicación.

## Sistema visual

- [x] Paleta exterior Jinx Arcane.
- [x] Colores semánticos internos independientes.
- [x] 14 familias visuales reutilizables.
- [x] Escenas autónomas en loop.
- [x] Cajas paralelas para visible vs interno.
- [x] Profundización de ocho módulos en casos extensos.
- [x] Pausa por viewport para colecciones grandes.
- [ ] Exportación vertical con Remotion.

## Criterio de terminado por concepto

- La metáfora se entiende sin narración externa.
- El movimiento muestra causalidad y estado, no decoración.
- El código coincide con el proceso representado.
- La escena distingue cliente, runtime, red, servidor, sistema operativo, cloud o motor de datos cuando aplica.
- La explicación aclara qué problema resuelve, cómo funciona y dónde puede fallar.
- El loop reinicia sin un corte confuso.
- Funciona en móvil y escritorio.
