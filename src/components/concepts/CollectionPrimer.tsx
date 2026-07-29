import type { CollectionPrimer as CollectionPrimerData } from "@/data/collectionPrimers";

type CollectionPrimerProps = {
  primer: CollectionPrimerData;
};

export function CollectionPrimer({ primer }: CollectionPrimerProps) {
  return (
    <aside className={`collection-primer collection-primer--${primer.visual}`} aria-labelledby="collection-primer-title">
      <div className="collection-primer__intro">
        <span>Antes de comenzar</span>
        <h2 id="collection-primer-title">¿Qué es {primer.name}?</h2>
        <p>{primer.definition}</p>
      </div>

      <div className="collection-primer__model" aria-hidden="true">
        <div className="collection-primer__core"><b>{primer.name}</b><small>idea central</small></div>
        <i />
        <span>entrada</span>
        <span>mecanismo</span>
        <span>resultado</span>
      </div>

      <div className="collection-primer__answers">
        <section>
          <span>¿Para qué sirve?</span>
          <p>{primer.purpose}</p>
        </section>
        <section>
          <span>Modelo mental</span>
          <p>{primer.mentalModel}</p>
        </section>
        <section>
          <span>Dónde aparece</span>
          <div>{primer.useCases.map((useCase) => <b key={useCase}>{useCase}</b>)}</div>
        </section>
        <section>
          <span>No lo confundas con…</span>
          <p>{primer.boundary}</p>
        </section>
      </div>
    </aside>
  );
}
