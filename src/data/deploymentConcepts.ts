import type { StudyConcept } from "./conceptTypes";

export const deploymentConcepts = [
  {
    "title": "Qué es un deployment",
    "description": "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real.",
    "section": "Fundamentos de entrega de software",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Instala una versión ejecutable en un entorno y la hace capaz de recibir trabajo real."
    }
  },
  {
    "title": "Build, release y run",
    "description": "Separa compilación de artefactos, combinación con configuración y ejecución en runtime.",
    "section": "Fundamentos de entrega de software",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Separa compilación de artefactos, combinación con configuración y ejecución en runtime."
    }
  },
  {
    "title": "Deploy vs release",
    "description": "Distingue poner código en producción de exponer una funcionalidad a usuarios.",
    "section": "Fundamentos de entrega de software",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Distingue poner código en producción de exponer una funcionalidad a usuarios."
    }
  },
  {
    "title": "Continuous Integration",
    "description": "Integra cambios pequeños y genera evidencia automática mediante build, lint y tests.",
    "section": "Fundamentos de entrega de software",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Integra cambios pequeños y genera evidencia automática mediante build, lint y tests."
    }
  },
  {
    "title": "Continuous Delivery",
    "description": "Mantiene cada cambio aprobado en estado desplegable con promoción controlada.",
    "section": "Fundamentos de entrega de software",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "delivery vs deployment",
      "nodes": [
        "delivery|ready to release",
        "deployment|automatic prod",
        "approval|policy",
        "feedback|result"
      ],
      "outcome": "flujo definido",
      "caption": "Mantiene cada cambio aprobado en estado desplegable con promoción controlada."
    }
  },
  {
    "title": "Continuous Deployment",
    "description": "Publica automáticamente cambios que superan todas las políticas y verificaciones.",
    "section": "Fundamentos de entrega de software",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Publica automáticamente cambios que superan todas las políticas y verificaciones."
    }
  },
  {
    "title": "Pipeline",
    "description": "Orquesta pasos, dependencias, artefactos, secretos, approvals y resultados.",
    "section": "Fundamentos de entrega de software",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "checkout → test → build → deploy",
      "nodes": [
        "source|revision",
        "quality|gates",
        "artifact|signed",
        "environment|release"
      ],
      "outcome": "pipeline ejecutado",
      "caption": "Orquesta pasos, dependencias, artefactos, secretos, approvals y resultados."
    }
  },
  {
    "title": "Artefacto inmutable",
    "description": "Promueve exactamente los mismos bytes entre entornos y los identifica por versión o digest.",
    "section": "Fundamentos de entrega de software",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Artefacto inmutable",
      "nodes": [
        "Artefacto|entrada",
        "inmutable|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "artefacto inmutable",
      "caption": "Promueve exactamente los mismos bytes entre entornos y los identifica por versión o digest."
    }
  },
  {
    "title": "Reproducible builds",
    "description": "Produce resultados equivalentes desde fuentes y dependencias fijadas en un entorno controlado.",
    "section": "Fundamentos de entrega de software",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Produce resultados equivalentes desde fuentes y dependencias fijadas en un entorno controlado."
    }
  },
  {
    "title": "Release versioning",
    "description": "Relaciona versiones, commits, changelog, compatibilidad y rollback.",
    "section": "Fundamentos de entrega de software",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Relaciona versiones, commits, changelog, compatibilidad y rollback."
    }
  },
  {
    "title": "Entornos",
    "description": "Separa desarrollo, preview, staging y producción por propósito y riesgo.",
    "section": "Fundamentos de entrega de software",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "Entornos",
      "nodes": [
        "Entornos|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "entornos",
      "caption": "Separa desarrollo, preview, staging y producción por propósito y riesgo."
    }
  },
  {
    "title": "Promotion",
    "description": "Mueve un artefacto verificado hacia entornos más críticos sin reconstruirlo.",
    "section": "Fundamentos de entrega de software",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "Promotion",
      "nodes": [
        "Promotion|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "promotion",
      "caption": "Mueve un artefacto verificado hacia entornos más críticos sin reconstruirlo."
    }
  },
  {
    "title": "Change failure rate",
    "description": "Mide qué proporción de cambios requiere reparación, rollback o causa incidente.",
    "section": "Fundamentos de entrega de software",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "Change failure rate",
      "nodes": [
        "Change|entrada",
        "failure|mecanismo",
        "rate|estado",
        "result|resultado"
      ],
      "outcome": "change failure rate",
      "caption": "Mide qué proporción de cambios requiere reparación, rollback o causa incidente."
    }
  },
  {
    "title": "Deployment frequency",
    "description": "Mide frecuencia de releases útiles sin convertir cantidad en objetivo aislado.",
    "section": "Fundamentos de entrega de software",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Mide frecuencia de releases útiles sin convertir cantidad en objetivo aislado."
    }
  },
  {
    "title": "Lead time for changes",
    "description": "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes.",
    "section": "Fundamentos de entrega de software",
    "family": "evidencia y latencia",
    "layout": "compact",
    "scene": {
      "variant": "trace",
      "code": "Lead time for changes",
      "nodes": [
        "Lead|entrada",
        "time|mecanismo",
        "for|estado",
        "changes|resultado"
      ],
      "outcome": "lead time for changes",
      "caption": "Mide tiempo desde commit hasta producción para encontrar esperas y lotes grandes."
    }
  },
  {
    "title": "Mean time to restore",
    "description": "Mide velocidad para recuperar servicio tras un cambio fallido.",
    "section": "Fundamentos de entrega de software",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "Mean time to restore",
      "nodes": [
        "Mean|entrada",
        "time|mecanismo",
        "restore|estado",
        "result|resultado"
      ],
      "outcome": "mean time to restore",
      "caption": "Mide velocidad para recuperar servicio tras un cambio fallido."
    }
  },
  {
    "title": "Dependency lockfiles",
    "description": "Fijan versiones resueltas para que CI y producción no obtengan árboles distintos.",
    "section": "Build, artefactos y contenedores",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "Dependency lockfiles",
      "nodes": [
        "Dependency|entrada",
        "lockfiles|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "dependency lockfiles",
      "caption": "Fijan versiones resueltas para que CI y producción no obtengan árboles distintos."
    }
  },
  {
    "title": "Build cache",
    "description": "Reutiliza pasos válidos sin mezclar resultados de inputs diferentes o secretos.",
    "section": "Build, artefactos y contenedores",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "Build cache",
      "nodes": [
        "Build|entrada",
        "cache|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "build cache",
      "caption": "Reutiliza pasos válidos sin mezclar resultados de inputs diferentes o secretos."
    }
  },
  {
    "title": "Hermetic builds",
    "description": "Limitan red, reloj, host y dependencias implícitas para aumentar reproducibilidad.",
    "section": "Build, artefactos y contenedores",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "Hermetic builds",
      "nodes": [
        "Hermetic|entrada",
        "builds|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "hermetic builds",
      "caption": "Limitan red, reloj, host y dependencias implícitas para aumentar reproducibilidad."
    }
  },
  {
    "title": "Dockerfile",
    "description": "Describe filesystem, metadata, proceso y configuración de una imagen por instrucciones.",
    "section": "Build, artefactos y contenedores",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "builder → runtime image",
      "nodes": [
        "base|pinned",
        "build stage|toolchain",
        "runtime|minimal",
        "digest|immutable"
      ],
      "outcome": "imagen optimizada",
      "caption": "Describe filesystem, metadata, proceso y configuración de una imagen por instrucciones."
    }
  },
  {
    "title": "Build context y .dockerignore",
    "description": "Controlan qué archivos llegan al builder, afectando cache, seguridad y tamaño.",
    "section": "Build, artefactos y contenedores",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Build context y .dockerignore",
      "nodes": [
        "Build|entrada",
        "context|mecanismo",
        "dockerignore|estado",
        "result|resultado"
      ],
      "outcome": "build context y .dockerignore",
      "caption": "Controlan qué archivos llegan al builder, afectando cache, seguridad y tamaño."
    }
  },
  {
    "title": "Multi-stage builds",
    "description": "Separa toolchain de compilación del runtime final para reducir tamaño y superficie.",
    "section": "Build, artefactos y contenedores",
    "family": "capas internas",
    "layout": "compact",
    "scene": {
      "variant": "layers",
      "code": "builder → runtime image",
      "nodes": [
        "base|pinned",
        "build stage|toolchain",
        "runtime|minimal",
        "digest|immutable"
      ],
      "outcome": "imagen optimizada",
      "caption": "Separa toolchain de compilación del runtime final para reducir tamaño y superficie."
    }
  },
  {
    "title": "Base images",
    "description": "Deben fijarse, actualizarse, escanearse y elegirse por compatibilidad y contenido mínimo.",
    "section": "Build, artefactos y contenedores",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "Base images",
      "nodes": [
        "Base|entrada",
        "images|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "base images",
      "caption": "Deben fijarse, actualizarse, escanearse y elegirse por compatibilidad y contenido mínimo."
    }
  },
  {
    "title": "Image layers",
    "description": "Cachean cambios por instrucción y permanecen inmutables bajo una capa escribible.",
    "section": "Build, artefactos y contenedores",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "Image layers",
      "nodes": [
        "Image|entrada",
        "layers|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "image layers",
      "caption": "Cachean cambios por instrucción y permanecen inmutables bajo una capa escribible."
    }
  },
  {
    "title": "Tags y digests",
    "description": "Los tags son referencias mutables; el digest identifica contenido exacto.",
    "section": "Build, artefactos y contenedores",
    "family": "consulta e índice",
    "layout": "wide",
    "scene": {
      "variant": "database",
      "code": "repo:tag@sha256",
      "nodes": [
        "repository|name",
        "tag|mutable pointer",
        "digest|content ID",
        "signature|trust"
      ],
      "outcome": "artefacto identificado",
      "caption": "Los tags son referencias mutables; el digest identifica contenido exacto."
    }
  },
  {
    "title": "Container registry",
    "description": "Almacena, autoriza, replica, escanea y retiene imágenes y otros artefactos OCI.",
    "section": "Build, artefactos y contenedores",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "repo:tag@sha256",
      "nodes": [
        "repository|name",
        "tag|mutable pointer",
        "digest|content ID",
        "signature|trust"
      ],
      "outcome": "artefacto identificado",
      "caption": "Almacena, autoriza, replica, escanea y retiene imágenes y otros artefactos OCI."
    }
  },
  {
    "title": "Multi-platform images",
    "description": "Publican manifests que seleccionan variantes como linux/amd64 y linux/arm64.",
    "section": "Build, artefactos y contenedores",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "Multi-platform images",
      "nodes": [
        "Multi|entrada",
        "platform|mecanismo",
        "images|estado",
        "result|resultado"
      ],
      "outcome": "multi-platform images",
      "caption": "Publican manifests que seleccionan variantes como linux/amd64 y linux/arm64."
    }
  },
  {
    "title": "Runtime image mínima",
    "description": "Incluye solo binarios, librerías y certificados necesarios para ejecutar.",
    "section": "Build, artefactos y contenedores",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "Runtime image mínima",
      "nodes": [
        "Runtime|entrada",
        "image|mecanismo",
        "mínima|estado",
        "result|resultado"
      ],
      "outcome": "runtime image mínima",
      "caption": "Incluye solo binarios, librerías y certificados necesarios para ejecutar."
    }
  },
  {
    "title": "Distroless y scratch",
    "description": "Reducen herramientas dentro de la imagen y exigen otras estrategias de debugging.",
    "section": "Build, artefactos y contenedores",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "Distroless y scratch",
      "nodes": [
        "Distroless|entrada",
        "scratch|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "distroless y scratch",
      "caption": "Reducen herramientas dentro de la imagen y exigen otras estrategias de debugging."
    }
  },
  {
    "title": "SBOM",
    "description": "Enumera componentes y versiones para inventario, vulnerabilidades y respuesta a incidentes.",
    "section": "Build, artefactos y contenedores",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "source → build → attest → verify",
      "nodes": [
        "source|revision",
        "builder|trusted",
        "SBOM/provenance|evidence",
        "admission|verify"
      ],
      "outcome": "artefacto confiable",
      "caption": "Enumera componentes y versiones para inventario, vulnerabilidades y respuesta a incidentes."
    }
  },
  {
    "title": "Provenance",
    "description": "Documenta quién construyó, desde qué fuente y con qué proceso un artefacto.",
    "section": "Build, artefactos y contenedores",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "source → build → attest → verify",
      "nodes": [
        "source|revision",
        "builder|trusted",
        "SBOM/provenance|evidence",
        "admission|verify"
      ],
      "outcome": "artefacto confiable",
      "caption": "Documenta quién construyó, desde qué fuente y con qué proceso un artefacto."
    }
  },
  {
    "title": "Firma de artefactos",
    "description": "Permite verificar identidad e integridad antes de desplegar.",
    "section": "Build, artefactos y contenedores",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "Firma de artefactos",
      "nodes": [
        "Firma|entrada",
        "artefactos|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "firma de artefactos",
      "caption": "Permite verificar identidad e integridad antes de desplegar."
    }
  },
  {
    "title": "Artifact retention",
    "description": "Conserva versiones suficientes para auditoría y rollback sin almacenar indefinidamente todo.",
    "section": "Build, artefactos y contenedores",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "versioned artifact",
      "nodes": [
        "source|commit",
        "build|reproducible",
        "digest|identity",
        "registry|storage"
      ],
      "outcome": "unidad promovible",
      "caption": "Conserva versiones suficientes para auditoría y rollback sin almacenar indefinidamente todo."
    }
  },
  {
    "title": "Config externa",
    "description": "Mantiene URLs, flags y límites fuera del código para variar por entorno.",
    "section": "Configuración, secretos y entornos",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "Config externa",
      "nodes": [
        "Config|entrada",
        "externa|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "config externa",
      "caption": "Mantiene URLs, flags y límites fuera del código para variar por entorno."
    }
  },
  {
    "title": "Environment variables",
    "description": "Inyectan strings al proceso y requieren validación, defaults y cuidado con herencia y logs.",
    "section": "Configuración, secretos y entornos",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "same artifact, different config",
      "nodes": [
        "artifact|same bytes",
        "dev|fast feedback",
        "staging|prod-like",
        "production|real traffic"
      ],
      "outcome": "promoción consistente",
      "caption": "Inyectan strings al proceso y requieren validación, defaults y cuidado con herencia y logs."
    }
  },
  {
    "title": "Configuration files",
    "description": "Representan estructuras mayores, pero necesitan distribución, permisos y estrategia de reload.",
    "section": "Configuración, secretos y entornos",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "code + config + secret",
      "nodes": [
        "code|stable",
        "config|environment",
        "secret|protected",
        "runtime|composed"
      ],
      "outcome": "instancia configurada",
      "caption": "Representan estructuras mayores, pero necesitan distribución, permisos y estrategia de reload."
    }
  },
  {
    "title": "Secret stores",
    "description": "Entregan credenciales bajo identidad y política en vez de guardarlas en repositorios o imágenes.",
    "section": "Configuración, secretos y entornos",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "identity → secret store",
      "nodes": [
        "workload|identity",
        "policy|scope",
        "secret|version",
        "runtime|injected"
      ],
      "outcome": "secreto temporal",
      "caption": "Entregan credenciales bajo identidad y política en vez de guardarlas en repositorios o imágenes."
    }
  },
  {
    "title": "Secret rotation",
    "description": "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia.",
    "section": "Configuración, secretos y entornos",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "identity → secret store",
      "nodes": [
        "workload|identity",
        "policy|scope",
        "secret|version",
        "runtime|injected"
      ],
      "outcome": "secreto temporal",
      "caption": "Cambia valores sin interrumpir consumidores y contempla periodos de coexistencia."
    }
  },
  {
    "title": "Workload identity",
    "description": "Obtiene credenciales temporales basadas en identidad del runtime en lugar de secretos estáticos.",
    "section": "Configuración, secretos y entornos",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "Workload identity",
      "nodes": [
        "Workload|entrada",
        "identity|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "workload identity",
      "caption": "Obtiene credenciales temporales basadas en identidad del runtime en lugar de secretos estáticos."
    }
  },
  {
    "title": "GitHub Actions OIDC",
    "description": "Intercambia claims del workflow por tokens cortos del proveedor cloud.",
    "section": "Configuración, secretos y entornos",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "runner → OIDC → cloud role",
      "nodes": [
        "workflow|claims",
        "provider|trust",
        "STS|short token",
        "deploy|authorized"
      ],
      "outcome": "credencial efímera",
      "caption": "Intercambia claims del workflow por tokens cortos del proveedor cloud."
    }
  },
  {
    "title": "Parity de entornos",
    "description": "Reduce diferencias relevantes entre staging y producción sin exigir que todo sea idéntico.",
    "section": "Configuración, secretos y entornos",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "Parity de entornos",
      "nodes": [
        "Parity|entrada",
        "entornos|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "parity de entornos",
      "caption": "Reduce diferencias relevantes entre staging y producción sin exigir que todo sea idéntico."
    }
  },
  {
    "title": "Preview environments",
    "description": "Crea un entorno temporal por cambio para revisión integrada y lo elimina después.",
    "section": "Configuración, secretos y entornos",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "same artifact, different config",
      "nodes": [
        "artifact|same bytes",
        "dev|fast feedback",
        "staging|prod-like",
        "production|real traffic"
      ],
      "outcome": "promoción consistente",
      "caption": "Crea un entorno temporal por cambio para revisión integrada y lo elimina después."
    }
  },
  {
    "title": "Test data",
    "description": "Evita usar información sensible y permite escenarios reproducibles y aislados.",
    "section": "Configuración, secretos y entornos",
    "family": "consulta e índice",
    "layout": "compact",
    "scene": {
      "variant": "database",
      "code": "Test data",
      "nodes": [
        "Test|entrada",
        "data|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "test data",
      "caption": "Evita usar información sensible y permite escenarios reproducibles y aislados."
    }
  },
  {
    "title": "Feature flags",
    "description": "Desacoplan deploy de release y permiten cohortes, kill switches y rollout gradual.",
    "section": "Configuración, secretos y entornos",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "request + flag context",
      "nodes": [
        "code|deployed",
        "flag|decision",
        "cohort|target",
        "behavior|selected"
      ],
      "outcome": "release desacoplado",
      "caption": "Desacoplan deploy de release y permiten cohortes, kill switches y rollout gradual."
    }
  },
  {
    "title": "Configuración dinámica",
    "description": "Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad.",
    "section": "Configuración, secretos y entornos",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Cambia comportamiento sin restart, pero requiere versionado, validación y observabilidad."
    }
  },
  {
    "title": "Drift de configuración",
    "description": "Aparece cuando cambios manuales separan el entorno real del estado declarado.",
    "section": "Configuración, secretos y entornos",
    "family": "diagnóstico operativo",
    "layout": "standard",
    "scene": {
      "variant": "terminal",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Aparece cuando cambios manuales separan el entorno real del estado declarado."
    }
  },
  {
    "title": "Promotion de configuración",
    "description": "Versiona y revisa configuración crítica igual que el código.",
    "section": "Configuración, secretos y entornos",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Versiona y revisa configuración crítica igual que el código."
    }
  },
  {
    "title": "Trigger de pipeline",
    "description": "Inicia por push, pull request, tag, schedule, manual o evento externo.",
    "section": "CI/CD y políticas de calidad",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "checkout → test → build → deploy",
      "nodes": [
        "source|revision",
        "quality|gates",
        "artifact|signed",
        "environment|release"
      ],
      "outcome": "pipeline ejecutado",
      "caption": "Inicia por push, pull request, tag, schedule, manual o evento externo."
    }
  },
  {
    "title": "Checkout seguro",
    "description": "Obtiene la revisión exacta y limita profundidad, submodules, tokens y código no confiable.",
    "section": "CI/CD y políticas de calidad",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "Checkout seguro",
      "nodes": [
        "Checkout|entrada",
        "seguro|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "checkout seguro",
      "caption": "Obtiene la revisión exacta y limita profundidad, submodules, tokens y código no confiable."
    }
  },
  {
    "title": "Runners",
    "description": "Ejecutan jobs en hosts efímeros o administrados con aislamiento y permisos definidos.",
    "section": "CI/CD y políticas de calidad",
    "family": "planificación de trabajo",
    "layout": "compact",
    "scene": {
      "variant": "scheduler",
      "code": "Runners",
      "nodes": [
        "Runners|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "runners",
      "caption": "Ejecutan jobs en hosts efímeros o administrados con aislamiento y permisos definidos."
    }
  },
  {
    "title": "Matrices de build",
    "description": "Prueban combinaciones de versiones, plataformas o configuraciones en paralelo.",
    "section": "CI/CD y políticas de calidad",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "Matrices de build",
      "nodes": [
        "Matrices|entrada",
        "build|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "matrices de build",
      "caption": "Prueban combinaciones de versiones, plataformas o configuraciones en paralelo."
    }
  },
  {
    "title": "Lint y format",
    "description": "Detectan reglas estáticas y diferencias de estilo antes de construir.",
    "section": "CI/CD y políticas de calidad",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "Lint y format",
      "nodes": [
        "Lint|entrada",
        "format|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "lint y format",
      "caption": "Detectan reglas estáticas y diferencias de estilo antes de construir."
    }
  },
  {
    "title": "Unit tests",
    "description": "Validan lógica pequeña y rápida con dependencias controladas.",
    "section": "CI/CD y políticas de calidad",
    "family": "anatomía del concepto",
    "layout": "wide",
    "scene": {
      "variant": "anatomy",
      "code": "Unit tests",
      "nodes": [
        "Unit|entrada",
        "tests|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "unit tests",
      "caption": "Validan lógica pequeña y rápida con dependencias controladas."
    }
  },
  {
    "title": "Integration tests",
    "description": "Comprueban fronteras reales como base de datos, cola, filesystem o API.",
    "section": "CI/CD y políticas de calidad",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "Integration tests",
      "nodes": [
        "Integration|entrada",
        "tests|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "integration tests",
      "caption": "Comprueban fronteras reales como base de datos, cola, filesystem o API."
    }
  },
  {
    "title": "End-to-end tests",
    "description": "Recorren flujos críticos como un usuario y deben mantenerse pocos y confiables.",
    "section": "CI/CD y políticas de calidad",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "End-to-end tests",
      "nodes": [
        "End|entrada",
        "end|mecanismo",
        "tests|estado",
        "result|resultado"
      ],
      "outcome": "end-to-end tests",
      "caption": "Recorren flujos críticos como un usuario y deben mantenerse pocos y confiables."
    }
  },
  {
    "title": "Contract tests",
    "description": "Verifican compatibilidad entre productores y consumidores sin desplegar todo el sistema.",
    "section": "CI/CD y políticas de calidad",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "Contract tests",
      "nodes": [
        "Contract|entrada",
        "tests|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "contract tests",
      "caption": "Verifican compatibilidad entre productores y consumidores sin desplegar todo el sistema."
    }
  },
  {
    "title": "Security scans",
    "description": "Incluyen dependencias, imagen, secretos, IaC, código y licencias con políticas accionables.",
    "section": "CI/CD y políticas de calidad",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "image → scanner → policy",
      "nodes": [
        "packages|inventory",
        "CVE|match",
        "severity|threshold",
        "pipeline|allow/block"
      ],
      "outcome": "riesgo evaluado",
      "caption": "Incluyen dependencias, imagen, secretos, IaC, código y licencias con políticas accionables."
    }
  },
  {
    "title": "Quality gates",
    "description": "Bloquean promoción cuando evidencia obligatoria falla o falta.",
    "section": "CI/CD y políticas de calidad",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Quality gates",
      "nodes": [
        "Quality|entrada",
        "gates|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "quality gates",
      "caption": "Bloquean promoción cuando evidencia obligatoria falla o falta."
    }
  },
  {
    "title": "Manual approvals",
    "description": "Añaden juicio humano en límites de riesgo, no como sustituto de automatización.",
    "section": "CI/CD y políticas de calidad",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "Manual approvals",
      "nodes": [
        "Manual|entrada",
        "approvals|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "manual approvals",
      "caption": "Añaden juicio humano en límites de riesgo, no como sustituto de automatización."
    }
  },
  {
    "title": "Environments protegidos",
    "description": "Restringen quién despliega, qué branches y qué secretos se usan en cada destino.",
    "section": "CI/CD y políticas de calidad",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "same artifact, different config",
      "nodes": [
        "artifact|same bytes",
        "dev|fast feedback",
        "staging|prod-like",
        "production|real traffic"
      ],
      "outcome": "promoción consistente",
      "caption": "Restringen quién despliega, qué branches y qué secretos se usan en cada destino."
    }
  },
  {
    "title": "Artifacts entre jobs",
    "description": "Transportan resultados versionados sin recompilar o depender del workspace anterior.",
    "section": "CI/CD y políticas de calidad",
    "family": "flujo de ejecución",
    "layout": "wide",
    "scene": {
      "variant": "flow",
      "code": "versioned artifact",
      "nodes": [
        "source|commit",
        "build|reproducible",
        "digest|identity",
        "registry|storage"
      ],
      "outcome": "unidad promovible",
      "caption": "Transportan resultados versionados sin recompilar o depender del workspace anterior."
    }
  },
  {
    "title": "Pipeline concurrency",
    "description": "Cancela runs obsoletos o serializa despliegues al mismo entorno.",
    "section": "CI/CD y políticas de calidad",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "checkout → test → build → deploy",
      "nodes": [
        "source|revision",
        "quality|gates",
        "artifact|signed",
        "environment|release"
      ],
      "outcome": "pipeline ejecutado",
      "caption": "Cancela runs obsoletos o serializa despliegues al mismo entorno."
    }
  },
  {
    "title": "Timeouts y retries en CI",
    "description": "Evitan jobs eternos y reintentan solo fallos transitorios identificados.",
    "section": "CI/CD y políticas de calidad",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Evitan jobs eternos y reintentan solo fallos transitorios identificados."
    }
  },
  {
    "title": "Flaky tests",
    "description": "Generan señales falsas y deben medirse, aislarse y corregirse en lugar de reintentarse sin límite.",
    "section": "CI/CD y políticas de calidad",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "Flaky tests",
      "nodes": [
        "Flaky|entrada",
        "tests|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "flaky tests",
      "caption": "Generan señales falsas y deben medirse, aislarse y corregirse en lugar de reintentarse sin límite."
    }
  },
  {
    "title": "Changelog automático",
    "description": "Relaciona commits, PRs, issues y versiones para explicar el contenido del release.",
    "section": "CI/CD y políticas de calidad",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "Changelog automático",
      "nodes": [
        "Changelog|entrada",
        "automático|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "changelog automático",
      "caption": "Relaciona commits, PRs, issues y versiones para explicar el contenido del release."
    }
  },
  {
    "title": "ChatOps y notificaciones",
    "description": "Publican estado y permiten acciones auditables desde canales de operación.",
    "section": "CI/CD y políticas de calidad",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Publican estado y permiten acciones auditables desde canales de operación."
    }
  },
  {
    "title": "Pipeline as code",
    "description": "Versiona el flujo de entrega junto al software y permite review y evolución.",
    "section": "CI/CD y políticas de calidad",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "checkout → test → build → deploy",
      "nodes": [
        "source|revision",
        "quality|gates",
        "artifact|signed",
        "environment|release"
      ],
      "outcome": "pipeline ejecutado",
      "caption": "Versiona el flujo de entrega junto al software y permite review y evolución."
    }
  },
  {
    "title": "Recreate deployment",
    "description": "Detiene la versión anterior antes de iniciar la nueva; es simple pero introduce downtime.",
    "section": "Estrategias de deployment y release",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Detiene la versión anterior antes de iniciar la nueva; es simple pero introduce downtime."
    }
  },
  {
    "title": "Rolling update",
    "description": "Reemplaza instancias progresivamente manteniendo capacidad dentro de max surge y unavailable.",
    "section": "Estrategias de deployment y release",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "old replicas ↓ · new replicas ↑",
      "nodes": [
        "old|serving",
        "new|readiness",
        "surge|capacity",
        "complete|stable"
      ],
      "outcome": "reemplazo gradual",
      "caption": "Reemplaza instancias progresivamente manteniendo capacidad dentro de max surge y unavailable."
    }
  },
  {
    "title": "Blue-green deployment",
    "description": "Mantiene dos entornos completos y cambia tráfico al candidato verificado.",
    "section": "Estrategias de deployment y release",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Mantiene dos entornos completos y cambia tráfico al candidato verificado."
    }
  },
  {
    "title": "Canary deployment",
    "description": "Expone una fracción de tráfico y aumenta solo si métricas y pruebas permanecen saludables.",
    "section": "Estrategias de deployment y release",
    "family": "máquina de estados",
    "layout": "compact",
    "scene": {
      "variant": "state-machine",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Expone una fracción de tráfico y aumenta solo si métricas y pruebas permanecen saludables."
    }
  },
  {
    "title": "A/B testing",
    "description": "Asigna cohortes estables a variantes para medir una hipótesis de producto.",
    "section": "Estrategias de deployment y release",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "variant A vs variant B",
      "nodes": [
        "assignment|cohort",
        "A|control",
        "B|treatment",
        "metric|decision"
      ],
      "outcome": "experimento medido",
      "caption": "Asigna cohortes estables a variantes para medir una hipótesis de producto."
    }
  },
  {
    "title": "Shadow traffic",
    "description": "Duplica solicitudes hacia la nueva versión sin usar su respuesta para validar comportamiento.",
    "section": "Estrategias de deployment y release",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "Shadow traffic",
      "nodes": [
        "Shadow|entrada",
        "traffic|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "shadow traffic",
      "caption": "Duplica solicitudes hacia la nueva versión sin usar su respuesta para validar comportamiento."
    }
  },
  {
    "title": "Ring deployment",
    "description": "Promueve por grupos de usuarios o entornos con riesgo creciente.",
    "section": "Estrategias de deployment y release",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Promueve por grupos de usuarios o entornos con riesgo creciente."
    }
  },
  {
    "title": "Feature rollout",
    "description": "Activa código ya desplegado mediante reglas y porcentajes independientes del artefacto.",
    "section": "Estrategias de deployment y release",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Feature rollout",
      "nodes": [
        "Feature|entrada",
        "rollout|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "feature rollout",
      "caption": "Activa código ya desplegado mediante reglas y porcentajes independientes del artefacto."
    }
  },
  {
    "title": "Dark launch",
    "description": "Despliega capacidad sin exponerla públicamente para calentar, validar o recibir tráfico interno.",
    "section": "Estrategias de deployment y release",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "Dark launch",
      "nodes": [
        "Dark|entrada",
        "launch|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "dark launch",
      "caption": "Despliega capacidad sin exponerla públicamente para calentar, validar o recibir tráfico interno."
    }
  },
  {
    "title": "Traffic splitting",
    "description": "Distribuye requests por peso, header, cookie, región u otra política.",
    "section": "Estrategias de deployment y release",
    "family": "ida y vuelta",
    "layout": "wide",
    "scene": {
      "variant": "request",
      "code": "Traffic splitting",
      "nodes": [
        "Traffic|entrada",
        "splitting|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "traffic splitting",
      "caption": "Distribuye requests por peso, header, cookie, región u otra política."
    }
  },
  {
    "title": "Session affinity",
    "description": "Mantiene clientes en un backend cuando el estado local lo exige, con costos para balanceo y resiliencia.",
    "section": "Estrategias de deployment y release",
    "family": "cola y consumidor",
    "layout": "compact",
    "scene": {
      "variant": "queue",
      "code": "Session affinity",
      "nodes": [
        "Session|entrada",
        "affinity|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "session affinity",
      "caption": "Mantiene clientes en un backend cuando el estado local lo exige, con costos para balanceo y resiliencia."
    }
  },
  {
    "title": "Rollback",
    "description": "Restaura una versión conocida y debe considerar datos, configuración y tareas en progreso.",
    "section": "Estrategias de deployment y release",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "detect → stop → route back",
      "nodes": [
        "signal|failure",
        "controller|abort",
        "traffic|stable version",
        "analysis|learn"
      ],
      "outcome": "servicio recuperado",
      "caption": "Restaura una versión conocida y debe considerar datos, configuración y tareas en progreso."
    }
  },
  {
    "title": "Roll forward",
    "description": "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó.",
    "section": "Estrategias de deployment y release",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "Roll forward",
      "nodes": [
        "Roll|entrada",
        "forward|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "roll forward",
      "caption": "Corrige con una versión nueva cuando revertir es peligroso o la migración ya avanzó."
    }
  },
  {
    "title": "Kill switch",
    "description": "Desactiva una función o integración rápidamente sin reconstruir.",
    "section": "Estrategias de deployment y release",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "Kill switch",
      "nodes": [
        "Kill|entrada",
        "switch|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "kill switch",
      "caption": "Desactiva una función o integración rápidamente sin reconstruir."
    }
  },
  {
    "title": "Automated promotion",
    "description": "Avanza una versión al cumplirse salud, tiempo, tests y métricas definidos.",
    "section": "Estrategias de deployment y release",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "Automated promotion",
      "nodes": [
        "Automated|entrada",
        "promotion|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "automated promotion",
      "caption": "Avanza una versión al cumplirse salud, tiempo, tests y métricas definidos."
    }
  },
  {
    "title": "Automated rollback",
    "description": "Aborta y retira tráfico cuando análisis o health checks cruzan límites.",
    "section": "Estrategias de deployment y release",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "detect → stop → route back",
      "nodes": [
        "signal|failure",
        "controller|abort",
        "traffic|stable version",
        "analysis|learn"
      ],
      "outcome": "servicio recuperado",
      "caption": "Aborta y retira tráfico cuando análisis o health checks cruzan límites."
    }
  },
  {
    "title": "Blast radius",
    "description": "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio.",
    "section": "Estrategias de deployment y release",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "Blast radius",
      "nodes": [
        "Blast|entrada",
        "radius|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "blast radius",
      "caption": "Limita cuántos usuarios, regiones o recursos pueden verse afectados por un cambio."
    }
  },
  {
    "title": "Deployment freeze",
    "description": "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros.",
    "section": "Estrategias de deployment y release",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Suspende cambios en periodos de alto riesgo con excepciones y ownership claros."
    }
  },
  {
    "title": "Kubernetes control plane",
    "description": "Acepta estado deseado y usa controllers para reconciliarlo continuamente.",
    "section": "Kubernetes y reconciliación",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "control plane → nodes → pods",
      "nodes": [
        "API|desired state",
        "controllers|reconcile",
        "nodes|capacity",
        "pods|workloads"
      ],
      "outcome": "estado reconciliado",
      "caption": "Acepta estado deseado y usa controllers para reconciliarlo continuamente."
    }
  },
  {
    "title": "Namespaces de Kubernetes",
    "description": "Agrupan nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte.",
    "section": "Kubernetes y reconciliación",
    "family": "aislamiento sobre host",
    "layout": "standard",
    "scene": {
      "variant": "container",
      "code": "control plane → nodes → pods",
      "nodes": [
        "API|desired state",
        "controllers|reconcile",
        "nodes|capacity",
        "pods|workloads"
      ],
      "outcome": "estado reconciliado",
      "caption": "Agrupan nombres y políticas, pero no sustituyen por sí solos aislamiento fuerte."
    }
  },
  {
    "title": "Pod",
    "description": "Es la unidad de scheduling y comparte red y volumes entre uno o más containers.",
    "section": "Kubernetes y reconciliación",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "Pod",
      "nodes": [
        "Pod|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "pod",
      "caption": "Es la unidad de scheduling y comparte red y volumes entre uno o más containers."
    }
  },
  {
    "title": "Deployment y ReplicaSet",
    "description": "Versionan pod templates y mantienen replicas durante rolling updates.",
    "section": "Kubernetes y reconciliación",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Versionan pod templates y mantienen replicas durante rolling updates."
    }
  },
  {
    "title": "StatefulSet",
    "description": "Conserva identidad, orden y storage estable para workloads con estado.",
    "section": "Kubernetes y reconciliación",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "identity + storage + ordering",
      "nodes": [
        "pod name|stable",
        "volume|persistent",
        "order|controlled",
        "service|headless"
      ],
      "outcome": "estado coordinado",
      "caption": "Conserva identidad, orden y storage estable para workloads con estado."
    }
  },
  {
    "title": "DaemonSet",
    "description": "Ejecuta una copia por node elegible para agentes de infraestructura.",
    "section": "Kubernetes y reconciliación",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "DaemonSet",
      "nodes": [
        "DaemonSet|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "daemonset",
      "caption": "Ejecuta una copia por node elegible para agentes de infraestructura."
    }
  },
  {
    "title": "Job",
    "description": "Ejecuta trabajo finito hasta completar con políticas de reintento.",
    "section": "Kubernetes y reconciliación",
    "family": "planificación de trabajo",
    "layout": "wide",
    "scene": {
      "variant": "scheduler",
      "code": "schedule → Job → Pods → complete",
      "nodes": [
        "schedule|time",
        "Job|controller",
        "Pod|attempt",
        "status|success/fail"
      ],
      "outcome": "trabajo finito",
      "caption": "Ejecuta trabajo finito hasta completar con políticas de reintento."
    }
  },
  {
    "title": "CronJob",
    "description": "Crea Jobs por calendario considerando concurrencia, deadlines e historial.",
    "section": "Kubernetes y reconciliación",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "schedule → Job → Pods → complete",
      "nodes": [
        "schedule|time",
        "Job|controller",
        "Pod|attempt",
        "status|success/fail"
      ],
      "outcome": "trabajo finito",
      "caption": "Crea Jobs por calendario considerando concurrencia, deadlines e historial."
    }
  },
  {
    "title": "Service",
    "description": "Ofrece identidad y descubrimiento estables sobre pods efímeros.",
    "section": "Kubernetes y reconciliación",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "Service → endpoints → Pods",
      "nodes": [
        "virtual IP|stable",
        "selector|membership",
        "endpoints|targets",
        "pods|ephemeral"
      ],
      "outcome": "descubrimiento estable",
      "caption": "Ofrece identidad y descubrimiento estables sobre pods efímeros."
    }
  },
  {
    "title": "Ingress",
    "description": "Expone HTTP mediante reglas de host/path implementadas por un controller.",
    "section": "Kubernetes y reconciliación",
    "family": "evidencia y latencia",
    "layout": "standard",
    "scene": {
      "variant": "trace",
      "code": "host/path → backend service",
      "nodes": [
        "listener|edge",
        "rule|match",
        "service|route",
        "TLS|terminate"
      ],
      "outcome": "tráfico enrutado",
      "caption": "Expone HTTP mediante reglas de host/path implementadas por un controller."
    }
  },
  {
    "title": "Gateway API",
    "description": "Modela listeners, routes y ownership con recursos más expresivos que Ingress.",
    "section": "Kubernetes y reconciliación",
    "family": "validación y decisión",
    "layout": "wide",
    "scene": {
      "variant": "gate",
      "code": "host/path → backend service",
      "nodes": [
        "listener|edge",
        "rule|match",
        "service|route",
        "TLS|terminate"
      ],
      "outcome": "tráfico enrutado",
      "caption": "Modela listeners, routes y ownership con recursos más expresivos que Ingress."
    }
  },
  {
    "title": "ConfigMap",
    "description": "Entrega configuración no sensible por env o volume y requiere estrategia de actualización.",
    "section": "Kubernetes y reconciliación",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "ConfigMap → pod",
      "nodes": [
        "key|config",
        "volume/env|delivery",
        "pod|consumes",
        "rollout|refresh"
      ],
      "outcome": "config externa",
      "caption": "Entrega configuración no sensible por env o volume y requiere estrategia de actualización."
    }
  },
  {
    "title": "Secret de Kubernetes",
    "description": "Codifica datos sensibles, pero necesita cifrado, RBAC y preferencia por secret stores externos.",
    "section": "Kubernetes y reconciliación",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "identity → secret store",
      "nodes": [
        "workload|identity",
        "policy|scope",
        "secret|version",
        "runtime|injected"
      ],
      "outcome": "secreto temporal",
      "caption": "Codifica datos sensibles, pero necesita cifrado, RBAC y preferencia por secret stores externos."
    }
  },
  {
    "title": "Requests y limits",
    "description": "Ayudan al scheduler y controlan consumo, throttling y OOM.",
    "section": "Kubernetes y reconciliación",
    "family": "ida y vuelta",
    "layout": "compact",
    "scene": {
      "variant": "request",
      "code": "Requests y limits",
      "nodes": [
        "Requests|entrada",
        "limits|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "requests y limits",
      "caption": "Ayudan al scheduler y controlan consumo, throttling y OOM."
    }
  },
  {
    "title": "QoS classes",
    "description": "Resultan de requests/limits y afectan prioridad durante presión de recursos.",
    "section": "Kubernetes y reconciliación",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "QoS classes",
      "nodes": [
        "QoS|entrada",
        "classes|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "qos classes",
      "caption": "Resultan de requests/limits y afectan prioridad durante presión de recursos."
    }
  },
  {
    "title": "Liveness probe",
    "description": "Reinicia un container bloqueado; una mala probe puede causar restart loops.",
    "section": "Kubernetes y reconciliación",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "startup vs readiness vs liveness",
      "nodes": [
        "startup|initialization",
        "readiness|traffic gate",
        "liveness|restart",
        "controller|action"
      ],
      "outcome": "salud interpretada",
      "caption": "Reinicia un container bloqueado; una mala probe puede causar restart loops."
    }
  },
  {
    "title": "Readiness probe",
    "description": "Retira temporalmente un pod del tráfico sin reiniciarlo.",
    "section": "Kubernetes y reconciliación",
    "family": "tabla de estados",
    "layout": "standard",
    "scene": {
      "variant": "matrix",
      "code": "startup vs readiness vs liveness",
      "nodes": [
        "startup|initialization",
        "readiness|traffic gate",
        "liveness|restart",
        "controller|action"
      ],
      "outcome": "salud interpretada",
      "caption": "Retira temporalmente un pod del tráfico sin reiniciarlo."
    }
  },
  {
    "title": "Startup probe",
    "description": "Protege inicializaciones lentas antes de que liveness comience a evaluar.",
    "section": "Kubernetes y reconciliación",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "startup vs readiness vs liveness",
      "nodes": [
        "startup|initialization",
        "readiness|traffic gate",
        "liveness|restart",
        "controller|action"
      ],
      "outcome": "salud interpretada",
      "caption": "Protege inicializaciones lentas antes de que liveness comience a evaluar."
    }
  },
  {
    "title": "Horizontal Pod Autoscaler",
    "description": "Ajusta replicas a partir de métricas y un target con ventanas de estabilización.",
    "section": "Kubernetes y reconciliación",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "metric → desired replicas → scale",
      "nodes": [
        "metric|observed",
        "target|policy",
        "replicas|desired",
        "pods|adjusted"
      ],
      "outcome": "capacidad automática",
      "caption": "Ajusta replicas a partir de métricas y un target con ventanas de estabilización."
    }
  },
  {
    "title": "Vertical Pod Autoscaler",
    "description": "Recomienda o cambia requests de recursos según consumo histórico.",
    "section": "Kubernetes y reconciliación",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "Vertical Pod Autoscaler",
      "nodes": [
        "Vertical|entrada",
        "Pod|mecanismo",
        "Autoscaler|estado",
        "result|resultado"
      ],
      "outcome": "vertical pod autoscaler",
      "caption": "Recomienda o cambia requests de recursos según consumo histórico."
    }
  },
  {
    "title": "Cluster Autoscaler",
    "description": "Añade o retira nodes cuando pods no pueden programarse o capacidad queda ociosa.",
    "section": "Kubernetes y reconciliación",
    "family": "comparativa técnica",
    "layout": "compact",
    "scene": {
      "variant": "compare",
      "code": "control plane → nodes → pods",
      "nodes": [
        "API|desired state",
        "controllers|reconcile",
        "nodes|capacity",
        "pods|workloads"
      ],
      "outcome": "estado reconciliado",
      "caption": "Añade o retira nodes cuando pods no pueden programarse o capacidad queda ociosa."
    }
  },
  {
    "title": "PodDisruptionBudget",
    "description": "Limita disrupciones voluntarias simultáneas sin garantizar disponibilidad ante fallos.",
    "section": "Kubernetes y reconciliación",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "PodDisruptionBudget",
      "nodes": [
        "PodDisruptionBudget|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "poddisruptionbudget",
      "caption": "Limita disrupciones voluntarias simultáneas sin garantizar disponibilidad ante fallos."
    }
  },
  {
    "title": "Affinity y anti-affinity",
    "description": "Influyen en colocación por labels, topología y relación con otros pods.",
    "section": "Kubernetes y reconciliación",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "Affinity y anti-affinity",
      "nodes": [
        "Affinity|entrada",
        "anti|mecanismo",
        "affinity|estado",
        "result|resultado"
      ],
      "outcome": "affinity y anti-affinity",
      "caption": "Influyen en colocación por labels, topología y relación con otros pods."
    }
  },
  {
    "title": "Topology spread constraints",
    "description": "Distribuyen replicas entre zonas o nodes para evitar concentración.",
    "section": "Kubernetes y reconciliación",
    "family": "jerarquía y dependencias",
    "layout": "wide",
    "scene": {
      "variant": "tree",
      "code": "Topology spread constraints",
      "nodes": [
        "Topology|entrada",
        "spread|mecanismo",
        "constraints|estado",
        "result|resultado"
      ],
      "outcome": "topology spread constraints",
      "caption": "Distribuyen replicas entre zonas o nodes para evitar concentración."
    }
  },
  {
    "title": "RollingUpdate settings",
    "description": "Controlan maxSurge, maxUnavailable, progressDeadline y revision history.",
    "section": "Kubernetes y reconciliación",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "old replicas ↓ · new replicas ↑",
      "nodes": [
        "old|serving",
        "new|readiness",
        "surge|capacity",
        "complete|stable"
      ],
      "outcome": "reemplazo gradual",
      "caption": "Controlan maxSurge, maxUnavailable, progressDeadline y revision history."
    }
  },
  {
    "title": "Helm",
    "description": "Empaqueta templates y values, pero requiere controlar render, ownership y upgrades.",
    "section": "Kubernetes y reconciliación",
    "family": "propagación de eventos",
    "layout": "standard",
    "scene": {
      "variant": "signal",
      "code": "Helm",
      "nodes": [
        "Helm|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "helm",
      "caption": "Empaqueta templates y values, pero requiere controlar render, ownership y upgrades."
    }
  },
  {
    "title": "Kustomize",
    "description": "Compone bases y overlays mediante transformaciones declarativas.",
    "section": "Kubernetes y reconciliación",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "Kustomize",
      "nodes": [
        "Kustomize|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "kustomize",
      "caption": "Compone bases y overlays mediante transformaciones declarativas."
    }
  },
  {
    "title": "Custom Resource y Operator",
    "description": "Extienden la API y automatizan reconciliación específica de un dominio.",
    "section": "Kubernetes y reconciliación",
    "family": "árbol de recursos",
    "layout": "wide",
    "scene": {
      "variant": "filesystem",
      "code": "Custom Resource y Operator",
      "nodes": [
        "Custom|entrada",
        "Resource|mecanismo",
        "Operator|estado",
        "result|resultado"
      ],
      "outcome": "custom resource y operator",
      "caption": "Extienden la API y automatizan reconciliación específica de un dominio."
    }
  },
  {
    "title": "DNS durante deployments",
    "description": "Los TTL y caches hacen que los cambios de record no sean instantáneos ni atómicos.",
    "section": "Tráfico, DNS y edge",
    "family": "topología y tráfico",
    "layout": "standard",
    "scene": {
      "variant": "network",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Los TTL y caches hacen que los cambios de record no sean instantáneos ni atómicos."
    }
  },
  {
    "title": "Load balancer health checks",
    "description": "Registran targets solo cuando responden al criterio esperado y respetan thresholds.",
    "section": "Tráfico, DNS y edge",
    "family": "ida y vuelta",
    "layout": "standard",
    "scene": {
      "variant": "request",
      "code": "Load balancer health checks",
      "nodes": [
        "Load|entrada",
        "balancer|mecanismo",
        "health|estado",
        "checks|resultado"
      ],
      "outcome": "load balancer health checks",
      "caption": "Registran targets solo cuando responden al criterio esperado y respetan thresholds."
    }
  },
  {
    "title": "Connection draining",
    "description": "Permite terminar conexiones existentes antes de retirar una instancia.",
    "section": "Tráfico, DNS y edge",
    "family": "superficie de aplicación",
    "layout": "wide",
    "scene": {
      "variant": "browser",
      "code": "readiness false → drain → SIGTERM",
      "nodes": [
        "traffic|stops",
        "requests|finish",
        "resources|close",
        "process|exit"
      ],
      "outcome": "instancia retirada",
      "caption": "Permite terminar conexiones existentes antes de retirar una instancia."
    }
  },
  {
    "title": "TLS termination",
    "description": "Descifra en el edge o load balancer y define cómo se protege el tramo interno.",
    "section": "Tráfico, DNS y edge",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "TLS termination",
      "nodes": [
        "TLS|entrada",
        "termination|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "tls termination",
      "caption": "Descifra en el edge o load balancer y define cómo se protege el tramo interno."
    }
  },
  {
    "title": "Certificate rotation",
    "description": "Renueva y propaga certificados antes de expirar sin romper clientes.",
    "section": "Tráfico, DNS y edge",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Certificate rotation",
      "nodes": [
        "Certificate|entrada",
        "rotation|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "certificate rotation",
      "caption": "Renueva y propaga certificados antes de expirar sin romper clientes."
    }
  },
  {
    "title": "CDN cache invalidation",
    "description": "Elimina o versiona contenido distribuido considerando costo y propagación.",
    "section": "Tráfico, DNS y edge",
    "family": "comparativa técnica",
    "layout": "standard",
    "scene": {
      "variant": "compare",
      "code": "CDN cache invalidation",
      "nodes": [
        "CDN|entrada",
        "cache|mecanismo",
        "invalidation|estado",
        "result|resultado"
      ],
      "outcome": "cdn cache invalidation",
      "caption": "Elimina o versiona contenido distribuido considerando costo y propagación."
    }
  },
  {
    "title": "Cache busting",
    "description": "Usa nombres direccionados por contenido para publicar assets nuevos sin invalidaciones globales.",
    "section": "Tráfico, DNS y edge",
    "family": "memoria intermedia",
    "layout": "wide",
    "scene": {
      "variant": "cache",
      "code": "Cache busting",
      "nodes": [
        "Cache|entrada",
        "busting|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "cache busting",
      "caption": "Usa nombres direccionados por contenido para publicar assets nuevos sin invalidaciones globales."
    }
  },
  {
    "title": "API gateway routing",
    "description": "Selecciona backend y versión por ruta, stage, header o policy.",
    "section": "Tráfico, DNS y edge",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "API gateway routing",
      "nodes": [
        "API|entrada",
        "gateway|mecanismo",
        "routing|estado",
        "result|resultado"
      ],
      "outcome": "api gateway routing",
      "caption": "Selecciona backend y versión por ruta, stage, header o policy."
    }
  },
  {
    "title": "Service discovery",
    "description": "Resuelve instancias dinámicas mediante DNS, registry o service mesh.",
    "section": "Tráfico, DNS y edge",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "Service → endpoints → Pods",
      "nodes": [
        "virtual IP|stable",
        "selector|membership",
        "endpoints|targets",
        "pods|ephemeral"
      ],
      "outcome": "descubrimiento estable",
      "caption": "Resuelve instancias dinámicas mediante DNS, registry o service mesh."
    }
  },
  {
    "title": "Service mesh",
    "description": "Añade proxy sidecar o ambient para mTLS, routing, retries y telemetría.",
    "section": "Tráfico, DNS y edge",
    "family": "anatomía del concepto",
    "layout": "standard",
    "scene": {
      "variant": "anatomy",
      "code": "Service → endpoints → Pods",
      "nodes": [
        "virtual IP|stable",
        "selector|membership",
        "endpoints|targets",
        "pods|ephemeral"
      ],
      "outcome": "descubrimiento estable",
      "caption": "Añade proxy sidecar o ambient para mTLS, routing, retries y telemetría."
    }
  },
  {
    "title": "Retries en la red",
    "description": "Deben incluir timeouts, backoff, jitter e idempotencia para no amplificar fallos.",
    "section": "Tráfico, DNS y edge",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "Retries en la red",
      "nodes": [
        "Retries|entrada",
        "red|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "retries en la red",
      "caption": "Deben incluir timeouts, backoff, jitter e idempotencia para no amplificar fallos."
    }
  },
  {
    "title": "Timeout budgets",
    "description": "Distribuyen el deadline total entre proxies y dependencias evitando trabajo inútil.",
    "section": "Tráfico, DNS y edge",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "Timeout budgets",
      "nodes": [
        "Timeout|entrada",
        "budgets|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "timeout budgets",
      "caption": "Distribuyen el deadline total entre proxies y dependencias evitando trabajo inútil."
    }
  },
  {
    "title": "Rate limits",
    "description": "Protegen capacidad y deben definir identidad, ventana, cuotas y respuesta al exceder.",
    "section": "Tráfico, DNS y edge",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "Rate limits",
      "nodes": [
        "Rate|entrada",
        "limits|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "rate limits",
      "caption": "Protegen capacidad y deben definir identidad, ventana, cuotas y respuesta al exceder."
    }
  },
  {
    "title": "WebSockets y conexiones largas",
    "description": "Exigen draining, afinidad o re-conexión consciente durante reemplazos.",
    "section": "Tráfico, DNS y edge",
    "family": "planificación de trabajo",
    "layout": "compact",
    "scene": {
      "variant": "scheduler",
      "code": "WebSockets y conexiones largas",
      "nodes": [
        "WebSockets|entrada",
        "conexiones|mecanismo",
        "largas|estado",
        "result|resultado"
      ],
      "outcome": "websockets y conexiones largas",
      "caption": "Exigen draining, afinidad o re-conexión consciente durante reemplazos."
    }
  },
  {
    "title": "Migraciones de esquema",
    "description": "Cambian estructura de datos con versionado, observabilidad y estrategia de recuperación.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Cambian estructura de datos con versionado, observabilidad y estrategia de recuperación."
    }
  },
  {
    "title": "Expand-contract",
    "description": "Añade primero lo compatible, migra datos y consumidores, y elimina al final.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "cola y consumidor",
    "layout": "wide",
    "scene": {
      "variant": "queue",
      "code": "Expand-contract",
      "nodes": [
        "Expand|entrada",
        "contract|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "expand-contract",
      "caption": "Añade primero lo compatible, migra datos y consumidores, y elimina al final."
    }
  },
  {
    "title": "Backward compatibility",
    "description": "Permite que código viejo funcione con la nueva dependencia durante el rollout.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "configuración declarativa",
    "layout": "standard",
    "scene": {
      "variant": "document",
      "code": "old app/new schema",
      "nodes": [
        "old client|still works",
        "new client|new field",
        "API|version tolerant",
        "window|coexistence"
      ],
      "outcome": "versiones compatibles",
      "caption": "Permite que código viejo funcione con la nueva dependencia durante el rollout."
    }
  },
  {
    "title": "Forward compatibility",
    "description": "Permite que componentes antiguos toleren datos o mensajes producidos por versiones nuevas.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "old app/new schema",
      "nodes": [
        "old client|still works",
        "new client|new field",
        "API|version tolerant",
        "window|coexistence"
      ],
      "outcome": "versiones compatibles",
      "caption": "Permite que componentes antiguos toleren datos o mensajes producidos por versiones nuevas."
    }
  },
  {
    "title": "Dual read",
    "description": "Lee formato nuevo y antiguo durante una transición y mide qué camino se usa.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "Dual read",
      "nodes": [
        "Dual|entrada",
        "read|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "dual read",
      "caption": "Lee formato nuevo y antiguo durante una transición y mide qué camino se usa."
    }
  },
  {
    "title": "Dual write",
    "description": "Escribe dos representaciones temporalmente y requiere manejar fallos parciales y orden.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "Dual write",
      "nodes": [
        "Dual|entrada",
        "write|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "dual write",
      "caption": "Escribe dos representaciones temporalmente y requiere manejar fallos parciales y orden."
    }
  },
  {
    "title": "Backfill",
    "description": "Migra datos históricos por lotes con rate limits, checkpoints y métricas.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "comparativa técnica",
    "layout": "compact",
    "scene": {
      "variant": "compare",
      "code": "Backfill",
      "nodes": [
        "Backfill|entrada",
        "process|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "backfill",
      "caption": "Migra datos históricos por lotes con rate limits, checkpoints y métricas."
    }
  },
  {
    "title": "Online schema changes",
    "description": "Evitan locks prolongados y consumo inesperado mediante técnicas específicas del motor.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "expand → deploy → backfill → contract",
      "nodes": [
        "schema|add compatible",
        "app|dual behavior",
        "data|backfill",
        "cleanup|remove old"
      ],
      "outcome": "migración segura",
      "caption": "Evitan locks prolongados y consumo inesperado mediante técnicas específicas del motor."
    }
  },
  {
    "title": "Data validation post-deploy",
    "description": "Compara conteos, invariantes, checksums y muestras antes de retirar compatibilidad.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "tabla de estados",
    "layout": "wide",
    "scene": {
      "variant": "matrix",
      "code": "Data validation post-deploy",
      "nodes": [
        "Data|entrada",
        "validation|mecanismo",
        "post|estado",
        "deploy|resultado"
      ],
      "outcome": "data validation post-deploy",
      "caption": "Compara conteos, invariantes, checksums y muestras antes de retirar compatibilidad."
    }
  },
  {
    "title": "Queue message versioning",
    "description": "Permite consumidores heterogéneos mediante schema, defaults y evolución compatible.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "Queue message versioning",
      "nodes": [
        "Queue|entrada",
        "message|mecanismo",
        "versioning|estado",
        "result|resultado"
      ],
      "outcome": "queue message versioning",
      "caption": "Permite consumidores heterogéneos mediante schema, defaults y evolución compatible."
    }
  },
  {
    "title": "API versioning",
    "description": "Administra contratos incompatibles y una política real de migración y deprecación.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "análisis y emisión",
    "layout": "standard",
    "scene": {
      "variant": "compiler",
      "code": "API versioning",
      "nodes": [
        "API|entrada",
        "versioning|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "api versioning",
      "caption": "Administra contratos incompatibles y una política real de migración y deprecación."
    }
  },
  {
    "title": "Consumer-driven contracts",
    "description": "Capturan expectativas de consumidores y evitan romperlos antes de desplegar.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "Consumer-driven contracts",
      "nodes": [
        "Consumer|entrada",
        "driven|mecanismo",
        "contracts|estado",
        "result|resultado"
      ],
      "outcome": "consumer-driven contracts",
      "caption": "Capturan expectativas de consumidores y evitan romperlos antes de desplegar."
    }
  },
  {
    "title": "Idempotent migrations",
    "description": "Pueden reanudarse o repetirse con estado explícito después de un fallo.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "expand → deploy → backfill → contract",
      "nodes": [
        "schema|add compatible",
        "app|dual behavior",
        "data|backfill",
        "cleanup|remove old"
      ],
      "outcome": "migración segura",
      "caption": "Pueden reanudarse o repetirse con estado explícito después de un fallo."
    }
  },
  {
    "title": "Rollback con cambios de datos",
    "description": "Reconoce que revertir código no deshace automáticamente writes ni schema.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "detect → stop → route back",
      "nodes": [
        "signal|failure",
        "controller|abort",
        "traffic|stable version",
        "analysis|learn"
      ],
      "outcome": "servicio recuperado",
      "caption": "Reconoce que revertir código no deshace automáticamente writes ni schema."
    }
  },
  {
    "title": "Data snapshot antes del cambio",
    "description": "Crea un punto de recuperación coherente cuando el riesgo lo justifica.",
    "section": "Datos, migraciones y compatibilidad",
    "family": "superficie de aplicación",
    "layout": "standard",
    "scene": {
      "variant": "browser",
      "code": "Data snapshot antes del cambio",
      "nodes": [
        "Data|entrada",
        "snapshot|mecanismo",
        "antes|estado",
        "del|resultado"
      ],
      "outcome": "data snapshot antes del cambio",
      "caption": "Crea un punto de recuperación coherente cuando el riesgo lo justifica."
    }
  },
  {
    "title": "Health checks",
    "description": "Responden preguntas concretas sobre proceso, readiness y dependencias sin mezclar responsabilidades.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "contratos coordinados",
    "layout": "standard",
    "scene": {
      "variant": "cards",
      "code": "Health checks",
      "nodes": [
        "Health|entrada",
        "checks|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "health checks",
      "caption": "Responden preguntas concretas sobre proceso, readiness y dependencias sin mezclar responsabilidades."
    }
  },
  {
    "title": "Smoke tests",
    "description": "Validan rutas críticas inmediatamente después del deployment.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "deploy → probe critical path",
      "nodes": [
        "candidate|endpoint",
        "test|realistic",
        "assertion|expected",
        "gate|promote/abort"
      ],
      "outcome": "función básica verificada",
      "caption": "Validan rutas críticas inmediatamente después del deployment."
    }
  },
  {
    "title": "Synthetic monitoring",
    "description": "Ejecuta journeys programados desde fuera para detectar fallos visibles al usuario.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "diagnóstico operativo",
    "layout": "wide",
    "scene": {
      "variant": "terminal",
      "code": "deploy → probe critical path",
      "nodes": [
        "candidate|endpoint",
        "test|realistic",
        "assertion|expected",
        "gate|promote/abort"
      ],
      "outcome": "función básica verificada",
      "caption": "Ejecuta journeys programados desde fuera para detectar fallos visibles al usuario."
    }
  },
  {
    "title": "Logs de deployment",
    "description": "Registran versión, actor, pipeline, cambios, targets y resultado.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "secuencia operativa",
    "layout": "standard",
    "scene": {
      "variant": "timeline",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Registran versión, actor, pipeline, cambios, targets y resultado."
    }
  },
  {
    "title": "Deployment markers",
    "description": "Anotan dashboards y trazas para correlacionar cambios con comportamiento.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "ciclo de vida",
    "layout": "standard",
    "scene": {
      "variant": "lifecycle",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Anotan dashboards y trazas para correlacionar cambios con comportamiento."
    }
  },
  {
    "title": "SLIs y SLOs",
    "description": "Convierten latencia, errores y disponibilidad en objetivos y señales de release.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "signals → SLO → decision",
      "nodes": [
        "metrics|measure",
        "SLI|indicator",
        "SLO|target",
        "budget|release gate"
      ],
      "outcome": "release gobernado",
      "caption": "Convierten latencia, errores y disponibilidad en objetivos y señales de release."
    }
  },
  {
    "title": "Error budgets",
    "description": "Limitan velocidad de cambio cuando la confiabilidad consumida supera lo acordado.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "evidencia y latencia",
    "layout": "wide",
    "scene": {
      "variant": "trace",
      "code": "signals → SLO → decision",
      "nodes": [
        "metrics|measure",
        "SLI|indicator",
        "SLO|target",
        "budget|release gate"
      ],
      "outcome": "release gobernado",
      "caption": "Limitan velocidad de cambio cuando la confiabilidad consumida supera lo acordado."
    }
  },
  {
    "title": "Canary analysis",
    "description": "Compara candidate y baseline usando métricas significativas y volumen suficiente.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "ecosistema coordinado",
    "layout": "standard",
    "scene": {
      "variant": "orbit",
      "code": "1% → 10% → 50% → 100%",
      "nodes": [
        "candidate|small cohort",
        "metrics|analysis",
        "promotion|increase",
        "abort|rollback"
      ],
      "outcome": "exposición gradual",
      "caption": "Compara candidate y baseline usando métricas significativas y volumen suficiente."
    }
  },
  {
    "title": "Alertas durante rollout",
    "description": "Deben ser sensibles al cambio sin reaccionar a ruido esperado de baja escala.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "máquina de estados",
    "layout": "standard",
    "scene": {
      "variant": "state-machine",
      "code": "Alertas durante rollout",
      "nodes": [
        "Alertas|entrada",
        "durante|mecanismo",
        "rollout|estado",
        "result|resultado"
      ],
      "outcome": "alertas durante rollout",
      "caption": "Deben ser sensibles al cambio sin reaccionar a ruido esperado de baja escala."
    }
  },
  {
    "title": "Rollback criteria",
    "description": "Define umbrales, ventanas, responsables y acciones antes de empezar.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "configuración declarativa",
    "layout": "wide",
    "scene": {
      "variant": "document",
      "code": "detect → stop → route back",
      "nodes": [
        "signal|failure",
        "controller|abort",
        "traffic|stable version",
        "analysis|learn"
      ],
      "outcome": "servicio recuperado",
      "caption": "Define umbrales, ventanas, responsables y acciones antes de empezar."
    }
  },
  {
    "title": "Graceful shutdown",
    "description": "Retira readiness, drena tráfico, maneja SIGTERM y cierra recursos antes del timeout.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "acumulación de recursos",
    "layout": "wide",
    "scene": {
      "variant": "stack",
      "code": "readiness false → drain → SIGTERM",
      "nodes": [
        "traffic|stops",
        "requests|finish",
        "resources|close",
        "process|exit"
      ],
      "outcome": "instancia retirada",
      "caption": "Retira readiness, drena tráfico, maneja SIGTERM y cierra recursos antes del timeout."
    }
  },
  {
    "title": "Crash loop detection",
    "description": "Distingue fallos de startup, configuración, dependencia, health check y recursos.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "cola y consumidor",
    "layout": "standard",
    "scene": {
      "variant": "queue",
      "code": "Crash loop detection",
      "nodes": [
        "Crash|entrada",
        "loop|mecanismo",
        "detection|estado",
        "result|resultado"
      ],
      "outcome": "crash loop detection",
      "caption": "Distingue fallos de startup, configuración, dependencia, health check y recursos."
    }
  },
  {
    "title": "Capacity headroom",
    "description": "Reserva margen para surge, fallo de zona, rollback y picos durante el deployment.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "anatomía del concepto",
    "layout": "compact",
    "scene": {
      "variant": "anatomy",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Reserva margen para surge, fallo de zona, rollback y picos durante el deployment."
    }
  },
  {
    "title": "Disaster recovery deployment",
    "description": "Incluye reconstruir infraestructura, restaurar datos y validar tráfico en otra ubicación.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "flujo de transformación",
    "layout": "wide",
    "scene": {
      "variant": "pipeline",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Incluye reconstruir infraestructura, restaurar datos y validar tráfico en otra ubicación."
    }
  },
  {
    "title": "Game day",
    "description": "Practica rollback, failover y recuperación antes de una emergencia real.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "topología y tráfico",
    "layout": "wide",
    "scene": {
      "variant": "network",
      "code": "Game day",
      "nodes": [
        "Game|entrada",
        "day|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "game day",
      "caption": "Practica rollback, failover y recuperación antes de una emergencia real."
    }
  },
  {
    "title": "Post-deployment verification",
    "description": "Confirma métricas, logs, jobs, integridad y experiencia de usuario tras la promoción.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "flujo de ejecución",
    "layout": "standard",
    "scene": {
      "variant": "flow",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Confirma métricas, logs, jobs, integridad y experiencia de usuario tras la promoción."
    }
  },
  {
    "title": "Postmortem de cambio fallido",
    "description": "Analiza sistema y controles sin culpar, convirtiendo hallazgos en mejoras verificables.",
    "section": "Observabilidad, confiabilidad y rollback",
    "family": "jerarquía y dependencias",
    "layout": "standard",
    "scene": {
      "variant": "tree",
      "code": "Postmortem de cambio fallido",
      "nodes": [
        "Postmortem|entrada",
        "cambio|mecanismo",
        "fallido|estado",
        "result|resultado"
      ],
      "outcome": "postmortem de cambio fallido",
      "caption": "Analiza sistema y controles sin culpar, convirtiendo hallazgos en mejoras verificables."
    }
  },
  {
    "title": "Threat model del pipeline",
    "description": "Identifica código no confiable, runners, tokens, artefactos, registries y targets como fronteras.",
    "section": "Seguridad, supply chain y operación",
    "family": "capas internas",
    "layout": "wide",
    "scene": {
      "variant": "layers",
      "code": "checkout → test → build → deploy",
      "nodes": [
        "source|revision",
        "quality|gates",
        "artifact|signed",
        "environment|release"
      ],
      "outcome": "pipeline ejecutado",
      "caption": "Identifica código no confiable, runners, tokens, artefactos, registries y targets como fronteras."
    }
  },
  {
    "title": "Least privilege de CI/CD",
    "description": "Limita permisos por repositorio, branch, environment, acción y duración.",
    "section": "Seguridad, supply chain y operación",
    "family": "análisis y emisión",
    "layout": "wide",
    "scene": {
      "variant": "compiler",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Limita permisos por repositorio, branch, environment, acción y duración."
    }
  },
  {
    "title": "Secret masking y redaction",
    "description": "Evita que credenciales aparezcan en logs, errores, artifacts o outputs.",
    "section": "Seguridad, supply chain y operación",
    "family": "topología y tráfico",
    "layout": "compact",
    "scene": {
      "variant": "network",
      "code": "identity → secret store",
      "nodes": [
        "workload|identity",
        "policy|scope",
        "secret|version",
        "runtime|injected"
      ],
      "outcome": "secreto temporal",
      "caption": "Evita que credenciales aparezcan en logs, errores, artifacts o outputs."
    }
  },
  {
    "title": "Pinning de actions y dependencias",
    "description": "Evita que referencias mutables cambien el código ejecutado en el pipeline.",
    "section": "Seguridad, supply chain y operación",
    "family": "árbol de recursos",
    "layout": "standard",
    "scene": {
      "variant": "filesystem",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Evita que referencias mutables cambien el código ejecutado en el pipeline."
    }
  },
  {
    "title": "Vulnerability scanning",
    "description": "Relaciona findings con reachability, contexto, SLA y excepción documentada.",
    "section": "Seguridad, supply chain y operación",
    "family": "secuencia operativa",
    "layout": "wide",
    "scene": {
      "variant": "timeline",
      "code": "image → scanner → policy",
      "nodes": [
        "packages|inventory",
        "CVE|match",
        "severity|threshold",
        "pipeline|allow/block"
      ],
      "outcome": "riesgo evaluado",
      "caption": "Relaciona findings con reachability, contexto, SLA y excepción documentada."
    }
  },
  {
    "title": "Image admission policy",
    "description": "Bloquea imágenes sin firma, provenance, scan o registry aprobado.",
    "section": "Seguridad, supply chain y operación",
    "family": "comparativa técnica",
    "layout": "wide",
    "scene": {
      "variant": "compare",
      "code": "Image admission policy",
      "nodes": [
        "Image|entrada",
        "admission|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "image admission policy",
      "caption": "Bloquea imágenes sin firma, provenance, scan o registry aprobado."
    }
  },
  {
    "title": "Infrastructure as Code",
    "description": "Versiona redes, compute, políticas y servicios para plan, review y reproducibilidad.",
    "section": "Seguridad, supply chain y operación",
    "family": "flujo de transformación",
    "layout": "standard",
    "scene": {
      "variant": "pipeline",
      "code": "Infrastructure as Code",
      "nodes": [
        "Infrastructure|entrada",
        "Code|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "infrastructure as code",
      "caption": "Versiona redes, compute, políticas y servicios para plan, review y reproducibilidad."
    }
  },
  {
    "title": "Plan y apply",
    "description": "Separa previsualización de cambios de su ejecución y protege state y locking.",
    "section": "Seguridad, supply chain y operación",
    "family": "acumulación de recursos",
    "layout": "standard",
    "scene": {
      "variant": "stack",
      "code": "Plan y apply",
      "nodes": [
        "Plan|entrada",
        "apply|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "plan y apply",
      "caption": "Separa previsualización de cambios de su ejecución y protege state y locking."
    }
  },
  {
    "title": "Drift detection",
    "description": "Encuentra cambios manuales y decide reconciliar, importar o aceptar de forma explícita.",
    "section": "Seguridad, supply chain y operación",
    "family": "aislamiento sobre host",
    "layout": "wide",
    "scene": {
      "variant": "container",
      "code": "desired vs actual",
      "nodes": [
        "IaC|desired",
        "runtime|actual",
        "diff|drift",
        "reconcile|restore"
      ],
      "outcome": "estado alineado",
      "caption": "Encuentra cambios manuales y decide reconciliar, importar o aceptar de forma explícita."
    }
  },
  {
    "title": "GitOps",
    "description": "Usa Git como estado deseado y un controller pull-based para reconciliar ambientes.",
    "section": "Seguridad, supply chain y operación",
    "family": "contratos coordinados",
    "layout": "wide",
    "scene": {
      "variant": "cards",
      "code": "Git desired state → controller → cluster",
      "nodes": [
        "commit|intent",
        "pull controller|watches",
        "diff|plan",
        "reconcile|apply"
      ],
      "outcome": "despliegue auditable",
      "caption": "Usa Git como estado deseado y un controller pull-based para reconciliar ambientes."
    }
  },
  {
    "title": "Separation of duties",
    "description": "Distribuye autoría, revisión, aprobación y operación según riesgo.",
    "section": "Seguridad, supply chain y operación",
    "family": "planificación de trabajo",
    "layout": "standard",
    "scene": {
      "variant": "scheduler",
      "code": "Separation of duties",
      "nodes": [
        "Separation|entrada",
        "duties|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "separation of duties",
      "caption": "Distribuye autoría, revisión, aprobación y operación según riesgo."
    }
  },
  {
    "title": "Audit trail",
    "description": "Conserva quién, qué, cuándo, desde dónde y con qué resultado se desplegó.",
    "section": "Seguridad, supply chain y operación",
    "family": "memoria intermedia",
    "layout": "standard",
    "scene": {
      "variant": "cache",
      "code": "Audit trail",
      "nodes": [
        "Audit|entrada",
        "trail|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "audit trail",
      "caption": "Conserva quién, qué, cuándo, desde dónde y con qué resultado se desplegó."
    }
  },
  {
    "title": "Release runbook",
    "description": "Documenta preparación, pasos, observación, rollback y comunicación para cambios complejos.",
    "section": "Seguridad, supply chain y operación",
    "family": "ciclo de vida",
    "layout": "wide",
    "scene": {
      "variant": "lifecycle",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Documenta preparación, pasos, observación, rollback y comunicación para cambios complejos."
    }
  },
  {
    "title": "Maintenance window",
    "description": "Coordina riesgo, soporte, usuarios y dependencias cuando el cambio no puede ser transparente.",
    "section": "Seguridad, supply chain y operación",
    "family": "propagación de eventos",
    "layout": "wide",
    "scene": {
      "variant": "signal",
      "code": "Maintenance window",
      "nodes": [
        "Maintenance|entrada",
        "window|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "maintenance window",
      "caption": "Coordina riesgo, soporte, usuarios y dependencias cuando el cambio no puede ser transparente."
    }
  },
  {
    "title": "On-call handoff",
    "description": "Entrega contexto de versión, riesgos, dashboards y rollback al equipo que operará.",
    "section": "Seguridad, supply chain y operación",
    "family": "validación y decisión",
    "layout": "standard",
    "scene": {
      "variant": "gate",
      "code": "On-call handoff",
      "nodes": [
        "call|entrada",
        "handoff|mecanismo",
        "policy|estado",
        "result|resultado"
      ],
      "outcome": "on-call handoff",
      "caption": "Entrega contexto de versión, riesgos, dashboards y rollback al equipo que operará."
    }
  },
  {
    "title": "Deprecación de versiones",
    "description": "Anuncia, mide uso, ayuda a migrar y retira capacidad en una fecha verificable.",
    "section": "Seguridad, supply chain y operación",
    "family": "consulta e índice",
    "layout": "standard",
    "scene": {
      "variant": "database",
      "code": "commit → build → test",
      "nodes": [
        "commit|source",
        "runner|isolated",
        "tests|evidence",
        "artifact|output"
      ],
      "outcome": "cambio verificado",
      "caption": "Anuncia, mide uso, ayuda a migrar y retira capacidad en una fecha verificable."
    }
  },
  {
    "title": "Cleanup post-release",
    "description": "Elimina preview environments, images antiguas, flags obsoletos y recursos temporales.",
    "section": "Seguridad, supply chain y operación",
    "family": "ecosistema coordinado",
    "layout": "wide",
    "scene": {
      "variant": "orbit",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Elimina preview environments, images antiguas, flags obsoletos y recursos temporales."
    }
  },
  {
    "title": "Coste del deployment",
    "description": "Incluye capacidad doble, runners, storage, transferencia, environments y observabilidad.",
    "section": "Seguridad, supply chain y operación",
    "family": "máquina de estados",
    "layout": "wide",
    "scene": {
      "variant": "state-machine",
      "code": "artifact → environment → traffic",
      "nodes": [
        "artifact|immutable",
        "environment|target",
        "release|version",
        "traffic|users"
      ],
      "outcome": "versión publicada",
      "caption": "Incluye capacidad doble, runners, storage, transferencia, environments y observabilidad."
    }
  }
] as const satisfies readonly StudyConcept[];
