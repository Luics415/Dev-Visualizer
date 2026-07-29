# Changelog visual V10

## Cobertura

- Biblioteca ampliada de 653 a **1,210 conceptos**.
- 13 colecciones y 26 rutas.
- Linux: 182 conceptos, 10 capítulos y caso de 14 etapas.
- AWS: 198 conceptos, 12 capítulos y caso de 14 etapas.
- Deployment: 177 conceptos, 10 capítulos y caso de 14 etapas.

## Casos integrados

Cada caso conserva **Profundización del caso** con ocho módulos de cajas dobles.

- Linux: `hexgate-api` falla después de un deploy; DNS, socket, systemd, journal, identidad, permisos, fix y verificación.
- AWS: portal de seguridad de Piltover; Route 53, CloudFront, WAF, ALB, ECS, Aurora, ElastiCache, SQS, Lambda, IAM y CloudWatch.
- Deployment: release de Ekko; tests, image digest, SBOM, firma, OIDC, expand-contract, canary, análisis, abort y rollback.

## Navegación

- Nuevo grupo **Infraestructura y entrega**.
- Seis rutas nuevas integradas al selector, buscador, secuencia y biblioteca.
- Numeración añadida: Linux 11, AWS 12 y Deployment 13.

## Rendimiento

- `AnimatedConceptScene` usa `useInView` para detener repeticiones fuera del viewport.
- Mantiene soporte para `prefers-reduced-motion` mediante Motion.
- La mejora permite colecciones de 177–198 conceptos sin ejecutar todos los loops al mismo tiempo.

## Arquitectura

- Nuevos datasets tipados:
  - `linuxConcepts.ts`
  - `awsConcepts.ts`
  - `deploymentConcepts.ts`
- Nuevos laboratorios visuales:
  - `LinuxPracticalScene.tsx`
  - `AwsPracticalScene.tsx`
  - `DeploymentPracticalScene.tsx`
- Nuevos estilos responsive y seis rutas App Router.
- Sin dependencias nuevas.
