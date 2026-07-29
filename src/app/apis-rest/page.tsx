import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";
import {
  ResourcesScene,
  EndpointsScene,
  HttpMethodsScene,
  ParamsQueryScene,
  HeadersScene,
  JsonBodyScene,
  StatusCodesScene,
  CrudScene,
  StatelessScene,
  AuthenticationScene,
  PaginationScene,
  HttpCacheScene,
  IdempotencyScene,
  ErrorsLimitsScene,
} from "@/components/scenes/rest/RestApiScenes";
import { restApiConcepts } from "@/data/restApiConcepts";

const foundationalScenes = [
  <ResourcesScene key="resources" />,
  <EndpointsScene key="endpoints" />,
  <HttpMethodsScene key="methods" />,
  <ParamsQueryScene key="params-query" />,
  <HeadersScene key="headers" />,
  <JsonBodyScene key="json-body" />,
  <StatusCodesScene key="status-codes" />,
  <CrudScene key="crud" />,
  <StatelessScene key="stateless" />,
  <AuthenticationScene key="authentication" />,
  <PaginationScene key="pagination" />,
  <HttpCacheScene key="cache" />,
  <IdempotencyScene key="idempotency" />,
  <ErrorsLimitsScene key="errors-limits" />,
];

export default function RestApisPage() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--rest">
        <div>
          <span className="eyebrow eyebrow--rest">Colección 05 · Del recurso al contrato operativo</span>
          <h1>APIs REST visualizadas</h1>
          <p>
            Una referencia amplia de HTTP y diseño de APIs: recursos, mensajes, autenticación, caché, concurrencia, resiliencia, documentación, seguridad y operación en producción. Los primeros mecanismos usan escenas hechas a medida; los avanzados cambian de metáfora según el problema.
          </p>
        </div>
        <div className="hero__counter hero__counter--rest">
          <strong>{restApiConcepts.length}</strong>
          <span>conceptos fundamentales y de producción</span>
        </div>
      </header>

      <section className="concept-grid concept-grid--atlas" aria-label="Conceptos de APIs REST">
        {restApiConcepts.map((concept, index) => (
          <ConceptCard
            key={concept.title}
            index={index + 1}
            title={concept.title}
            description={concept.description}
            family={concept.family}
            layout={concept.layout}
          >
            {index < foundationalScenes.length ? foundationalScenes[index] : "scene" in concept ? (
              <AnimatedConceptScene
                ariaLabel={`Animación explicativa de ${concept.title}`}
                code={concept.scene.code}
                nodes={concept.scene.nodes}
                outcome={concept.scene.outcome}
                caption={concept.scene.caption}
                variant={concept.scene.variant}
              />
            ) : null}
          </ConceptCard>
        ))}
      </section>

      <footer className="project-note">
        La colección separa lo que ocurre dentro del mensaje HTTP, lo que pertenece al diseño del contrato y lo que mantiene la API segura, observable y resistente en producción.
      </footer>
    </main>
  );
}
