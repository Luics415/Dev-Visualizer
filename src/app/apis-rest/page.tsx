import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionNav } from "@/components/navigation/CollectionNav";
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

const visualFamilies = [
  "representación", "mapa de rutas", "carriles semánticos", "descomposición URL", "sobre de metadatos",
  "serialización", "espectro de respuesta", "ciclo de recurso", "solicitudes autónomas", "credencial",
  "ventana de colección", "validación de copia", "comparativa", "control de tráfico",
] as const;

const activeScenes = [
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
          <span className="eyebrow eyebrow--rest">Colección 05 · Comunicación cliente–servidor</span>
          <h1>APIs REST visualizadas</h1>
          <p>
            Una API REST organiza recursos sobre HTTP. Estas escenas separan dirección, intención, metadatos, representación y resultado para mostrar exactamente qué viaja entre cliente y servidor y por qué cada parte existe.
          </p>
        </div>
        <div className="hero__counter hero__counter--rest">
          <strong>14</strong>
          <span>conceptos de HTTP y REST</span>
        </div>
      </header>

      <section className="concept-grid" aria-label="Conceptos de APIs REST">
        {restApiConcepts.map(([title, description], index) => (
          <ConceptCard
            key={title}
            index={index + 1}
            title={title}
            description={description}
            family={visualFamilies[index]}
          >
            {activeScenes[index]}
          </ConceptCard>
        ))}
      </section>

      <footer className="project-note">
        REST no es solamente enviar JSON: es diseñar recursos y usar las reglas de HTTP para que clientes, servidores y cachés entiendan la misma conversación.
      </footer>
    </main>
  );
}
