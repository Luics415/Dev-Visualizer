import { ConceptCard } from "@/components/concepts/ConceptCard";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { AnimatedConceptScene } from "@/components/visual/AnimatedConceptScene";
import {
  RepositoryScene,
  ThreeAreasScene,
  CommitsScene,
  BranchesScene,
  HeadScene,
  MergeScene,
  RebaseScene,
  RemotesScene,
  SyncScene,
  CloneForkScene,
  PullRequestScene,
  ConflictScene,
  GitignoreScene,
  ActionsScene,
} from "@/components/scenes/git/GitGithubScenes";
import { gitGithubConcepts } from "@/data/gitGithubConcepts";
import { CollectionPrimer } from "@/components/concepts/CollectionPrimer";
import { collectionPrimers } from "@/data/collectionPrimers";

const foundationalScenes = [
  <RepositoryScene key="repository" />,
  <ThreeAreasScene key="areas" />,
  <CommitsScene key="commits" />,
  <BranchesScene key="branches" />,
  <HeadScene key="head" />,
  <MergeScene key="merge" />,
  <RebaseScene key="rebase" />,
  <RemotesScene key="remotes" />,
  <SyncScene key="sync" />,
  <CloneForkScene key="clone-fork" />,
  <PullRequestScene key="pr" />,
  <ConflictScene key="conflict" />,
  <GitignoreScene key="ignore" />,
  <ActionsScene key="actions" />,
];

export default function GitGithubPage() {
  return (
    <main className="page-shell">
      <CollectionNav />

      <header className="hero hero--git">
        <div>
          <span className="eyebrow eyebrow--git">Colección 09 · Historia, recuperación y colaboración</span>
          <h1>Git y GitHub visualizados</h1>
          <p>
            Desde el modelo interno de snapshots hasta pull requests, CI, releases y recuperación. La colección distingue claramente lo que hace Git en tu repositorio distribuido y lo que GitHub añade para coordinar equipos alrededor de esa historia.
          </p>
        </div>
        <div className="hero__counter hero__counter--git"><strong>{gitGithubConcepts.length}</strong><span>mecanismos locales, remotos y colaborativos</span></div>
      </header>

      <CollectionPrimer primer={collectionPrimers["git"]} />

      <section className="concept-grid concept-grid--atlas" aria-label="Conceptos de Git y GitHub">
        {gitGithubConcepts.map((concept, index) => (
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
        Git protege la historia y permite experimentar localmente; GitHub agrega revisión, políticas, planificación y automatización sin reemplazar el modelo distribuido de Git.
      </footer>
    </main>
  );
}
