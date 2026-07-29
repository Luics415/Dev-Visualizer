import { CollectionNav } from "@/components/navigation/CollectionNav";
import { RestApiPracticalScene } from "@/components/scenes/rest/RestApiPracticalScene";

export default function RestApisPracticalPage() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--rest-practical">
        <div>
          <span className="eyebrow eyebrow--rest">Colección 05 · Trazabilidad integrada</span>
          <h1>APIs REST en acción</h1>
          <p>
            Una compra recorre toda la API como una sola traza: el cliente construye el sobre HTTP, la plataforma autentica y valida, el servicio persiste el pedido, responde con 201 y resuelve un reintento sin duplicar el recurso.
          </p>
        </div>
        <div className="hero__counter hero__counter--rest">
          <strong>1</strong>
          <span>request · 5 decisiones · 1 retry seguro</span>
        </div>
      </header>

      <section className="practical-stage practical-stage--rest-trace" aria-label="Ejemplo integrado de una API REST">
        <RestApiPracticalScene />
      </section>

      <footer className="project-note">
        La traza une lo que normalmente se estudia por separado: transporte HTTP, autenticación, validación, lógica de negocio, base de datos, códigos de estado e idempotencia.
      </footer>
    </main>
  );
}
