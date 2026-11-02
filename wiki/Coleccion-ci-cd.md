# 📘 [CI] CI/CD

> **Integración, evidencia, artefactos, supply chain y promoción.**

---

## 📌 Ficha Técnica

| Parámetro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `ci-cd` |
| **Grupo Arquitectónico** | [Infraestructura y entrega](Grupo-Delivery) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `ci-cd` |
| **Total de Conceptos** | **42 conceptos** |
| **Capítulos / Secciones** | **7 secciones** |

### 🚀 Acceso en la Aplicación
- 🌐 **[Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/ci-cd)**
- ⚡ **[Modo Práctico e interactivo](https://luics415.github.io/Dev-Visualizer/ci-cd-en-accion)**


## 🔬 Caso Práctico en Acción: CI/CD en acción

> **Caso integrado · Artefacto promocionable:** Un cambio pequeño atraviesa feedback rápido, pruebas profundas y controles de supply chain hasta producir un digest firmado listo para Deployment.  
> El pipeline entrega un artefacto único con evidencia; ninguna fase posterior necesita reconstruir ni recuperar secretos permanentes.

### Fases de Ejecución:
1. **Detectar el cambio** (El alcance evita trabajo inútil): `pull_request · paths: src/**` → ejecución relevante. *El trigger incluye solo eventos y rutas que pueden cambiar el producto.*
2. **Feedback temprano** (Checks baratos primero): `lint → typecheck → unit` → cambio básico verificado. *La velocidad importa porque un hallazgo tardío multiplica el costo de contexto.*
3. **Probar fronteras** (Servicios efímeros y contratos): `integration + contract + e2e` → comportamiento demostrado. *Las pruebas profundas se ejecutan sobre dependencias controladas, no sobre residuos de otro job.*
4. **Construir una vez** (El lockfile fija entradas): `npm ci && npm run build` → artefacto inmutable. *La promoción mueve identidad y evidencia, nunca recompila desde una rama cambiante.*
5. **Examinar supply chain** (Componentes y código se inspeccionan): `SBOM + CodeQL + dependency review` → riesgo evaluado. *Una política fallida detiene la promoción y conserva evidencia para corregir.*
6. **Autenticar sin secreto largo** (OIDC concede acceso temporal): `id-token: write → cloud role` → identidad de job. *La nube confía en condiciones concretas de la ejecución, no en una clave compartida.*
7. **Firmar y atestiguar** (El artefacto conserva procedencia): `sign digest + provenance` → artefacto verificable. *Firma y provenance permiten rechazar binarios que no nacieron del flujo autorizado.*
8. **Entregar a Deployment** (La frontera queda explícita): `promote sha256:24b9…` → versión promocionable. *Deployment decide configuración, rollout, tráfico y rollback a partir de este artefacto.*


---

## 📚 Desglose Exhaustivo de Conceptos (42)

### 📑 Sección: Principios de flujo (6 conceptos)

- **Integración continua**  
  *Familia:* `capas internas`  
  Integra cambios pequeños con feedback automático y una rama principal siempre reparable.

- **Continuous delivery**  
  *Familia:* `evidencia y latencia`  
  Mantiene cada cambio aprobado listo para promocionarse mediante una decisión controlada.

- **Continuous deployment**  
  *Familia:* `ciclo de vida`  
  Automatiza también la promoción a producción cuando todas las políticas lo permiten.

- **Pipeline como DAG**  
  *Familia:* `workflow y decisiones`  
  Expresa dependencias entre jobs sin convertir cada paso en una secuencia innecesaria.

- **Trigger y alcance**  
  *Familia:* `capas internas`  
  Decide qué eventos y rutas justifican ejecutar trabajo costoso.

- **Feedback rápido y profundo**  
  *Familia:* `espectro de verificación`  
  Ordena checks baratos primero y conserva pruebas amplias antes de promover.


### 📑 Sección: Runners y entornos (6 conceptos)

- **Runner hospedado o propio**  
  *Familia:* `topología y tráfico`  
  Elige aislamiento, control, red, mantenimiento y costo según el workload.

- **Entorno limpio**  
  *Familia:* `evidencia y latencia`  
  Evita que residuos de una ejecución oculten dependencias o cambien resultados.

- **Matrices de prueba**  
  *Familia:* `espectro de verificación`  
  Verifica versiones y plataformas relevantes sin multiplicar combinaciones sin valor.

- **Servicios efímeros**  
  *Familia:* `validación y decisión`  
  Levanta bases y dependencias desechables para pruebas de integración reproducibles.

- **Concurrencia y cancelación**  
  *Familia:* `planificación de trabajo`  
  Evita gastar capacidad en ejecuciones reemplazadas por commits más nuevos.

- **Timeouts y límites**  
  *Familia:* `secuencia operativa`  
  Detiene jobs colgados y hace visible su presupuesto operativo.


### 📑 Sección: Pruebas y calidad (6 conceptos)

- **Lint y análisis estático**  
  *Familia:* `análisis y emisión`  
  Detecta defectos baratos antes de compilar o desplegar.

- **Pruebas unitarias**  
  *Familia:* `espectro de verificación`  
  Aísla reglas rápidas con fallos localizables.

- **Pruebas de integración**  
  *Familia:* `validación y decisión`  
  Comprueba contratos reales entre procesos, datos y dependencias.

- **Pruebas end-to-end**  
  *Familia:* `evidencia y latencia`  
  Valida historias críticas sin convertir toda combinación en un caso frágil.

- **Cobertura y mutation testing**  
  *Familia:* `espectro de verificación`  
  Mide qué código fue ejecutado y si las aserciones detectan cambios dañinos.

- **Flaky tests**  
  *Familia:* `validación y decisión`  
  Clasifica inestabilidad como defecto del sistema de evidencia, no como ruido aceptable.


### 📑 Sección: Builds y artefactos (6 conceptos)

- **Build reproducible**  
  *Familia:* `análisis y emisión`  
  Produce el mismo resultado desde fuente y dependencias fijadas.

- **Lockfiles y dependencias**  
  *Familia:* `jerarquía y dependencias`  
  Controla resolución transitiva y registra exactamente qué entró al build.

- **Caché de dependencias**  
  *Familia:* `memoria intermedia`  
  Reutiliza entradas por claves correctas sin confundir caché con artefacto final.

- **Artefactos inmutables**  
  *Familia:* `pasaporte del artefacto`  
  Promueve el mismo binario o imagen entre entornos en lugar de reconstruir.

- **Versiones, tags y digests**  
  *Familia:* `flujo de transformación`  
  Relaciona una identidad legible con un hash que no cambia.

- **Retención y provenance**  
  *Familia:* `validación y decisión`  
  Conserva binario, evidencia y origen durante el periodo necesario para auditar o revertir.


### 📑 Sección: Seguridad de supply chain (6 conceptos)

- **Permisos mínimos del workflow**  
  *Familia:* `workflow y decisiones`  
  Reduce lo que un job comprometido puede leer o modificar.

- **OIDC y credenciales efímeras**  
  *Familia:* `topología y tráfico`  
  Intercambia identidad del job por acceso temporal sin secretos cloud permanentes.

- **SBOM**  
  *Familia:* `anatomía del concepto`  
  Enumera componentes del artefacto para evaluar vulnerabilidades y licencias.

- **Firma y attestations**  
  *Familia:* `espectro de verificación`  
  Permite verificar quién produjo un artefacto y bajo qué proceso.

- **Dependency review**  
  *Familia:* `jerarquía y dependencias`  
  Detecta riesgo introducido por cambios en dependencias antes del merge.

- **SLSA y niveles de confianza**  
  *Familia:* `validación y decisión`  
  Estructura controles de provenance y resistencia a manipulación según el riesgo.


### 📑 Sección: Promoción y políticas (6 conceptos)

- **Checks requeridos**  
  *Familia:* `capas internas`  
  Convierte nombres estables de resultados en condiciones de integración.

- **Approvals y separación de funciones**  
  *Familia:* `workflow y decisiones`  
  Pide una decisión humana donde el riesgo supera la automatización disponible.

- **Environments**  
  *Familia:* `evidencia y latencia`  
  Agrupa secretos, protecciones e historial por destino de promoción.

- **Feature flags**  
  *Familia:* `espectro de verificación`  
  Separa desplegar código de exponer comportamiento sin usarlas como permiso de seguridad.

- **Policy as code**  
  *Familia:* `validación y decisión`  
  Evalúa reglas versionadas sobre artefactos, infraestructura o evidencia.

- **Handoff a Deployment**  
  *Familia:* `ciclo de vida`  
  Entrega digest, configuración compatible y evidencia sin decidir por sí solo cómo recibe tráfico.


### 📑 Sección: Operación del pipeline (6 conceptos)

- **Logs estructurados y anotaciones**  
  *Familia:* `evidencia y latencia`  
  Hace accionable un fallo sin obligar a leer miles de líneas sin contexto.

- **Métricas de flujo**  
  *Familia:* `diagnóstico operativo`  
  Mide lead time, frecuencia, fallos y recuperación sin premiar volumen vacío.

- **Costo de runners**  
  *Familia:* `planificación de trabajo`  
  Relaciona minutos, paralelismo y caché con la velocidad de feedback obtenida.

- **Reintentos de jobs**  
  *Familia:* `ciclo de vida`  
  Repite solo fallos transitorios sin ocultar pruebas deterministas rotas.

- **Reutilización de workflows**  
  *Familia:* `workflow y decisiones`  
  Centraliza controles conservando entradas, outputs, versiones y permisos explícitos.

- **Diagnóstico de pipeline**  
  *Familia:* `evidencia y latencia`  
  Distingue error de código, infraestructura, dependencia, credencial y política antes de corregir.



## 📖 Recursos de Estudio y Referencias Oficiales
- **[Quickstart for GitHub Actions](https://docs.github.com/en/actions/get-started/quickstart)** (`tutorial` | Nivel: `beginner`): 
- **[OpenSSF Scorecard](https://scorecard.dev/)** (`reference` | Nivel: `intermediate`): 
- **[GitHub artifact attestations](https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations)** (`reference` | Nivel: `advanced`): 


---
[← Volver al Inicio](Home) | [Ver Grupo: Infraestructura y entrega](Grupo-Delivery) | [Índice Maestro →](Indice-Maestro-7410-Conceptos)
