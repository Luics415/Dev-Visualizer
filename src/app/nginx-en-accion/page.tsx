import type { Metadata } from "next";
import Link from "next/link";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { ActionQuizInvite } from "@/components/concepts/ActionQuizInvite";
import { HttpsTunnelScene } from "@/components/scenes/HttpsTunnelScene";
import { collectionNumber } from "@/data/collectionManifest";
import { collectionNotices } from "@/data/collectionNotices";
import { nginxDeepDive } from "@/data/practicalDeepDives";
import { ConceptAudioTrigger } from "@/components/audio/ConceptAudioTrigger";
import { FloatingAudioBubble } from "@/components/audio/FloatingAudioBubble";
import {
  buildPracticalModuleAudioTrack,
  getActionPresentationTrack,
} from "@/lib/audioTrackHelper";

export const metadata: Metadata = {
  title: "HTTPS y NGINX en acción",
  description: "TCP, TLS 1.3, certificado, recuperación del hostname, claves efímeras, tráfico HTTP cifrado y enrutamiento NGINX en una escena autónoma.",
  alternates: { canonical: "/nginx-en-accion" },
};

export default function NginxActionPage() {
  const presentationTrack = getActionPresentationTrack("nginx");
  const practicalTracks = [
    presentationTrack,
    ...nginxDeepDive.map((module, i) =>
      buildPracticalModuleAudioTrack("nginx", module, 7 + i)
    ),
  ];

  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--nginx-practical">
        <div>
          <span className="eyebrow eyebrow--nginx">Colección {collectionNumber("nginx")} · Caso integrado ampliado</span>
          <h1>HTTPS y NGINX en acción</h1>
          <p>Una petición construye primero un canal TLS 1.3 verificable: negocia parámetros, valida la identidad del servidor, deriva claves efímeras y solo entonces transporta HTTP cifrado. NGINX termina ese túnel, conserva la evidencia de la conexión y enruta la solicitud hacia el upstream.</p>
        </div>
        <div className="hero__counter hero__counter--nginx"><strong>14</strong><span>etapas de una petición completa</span></div>
      </header>

      <aside className="collection-notice">
        <strong>Contexto tecnológico</strong>
        <p>{collectionNotices["nginx"]}</p>
      </aside>

      <div className="collection-action-link">
        <span>Fundamentos y mecanismos de la colección</span>
        <Link href="/nginx">Ver conceptos y catálogo de NGINX <b>←</b></Link>
      </div>

      <section className="practical-stage practical-stage--nginx practical-stage--card" aria-label="Caso práctico integrado de NGINX">
        <header className="practical-card__header">
          <div className="practical-card__title-group">
            <span className="practical-card__badge">00</span>
            <div>
              <h2>Terminación TLS 1.3 y enrutamiento en NGINX</h2>
              <p>Tráfico seguro de producción: negociación TCP, intercambio de claves Diffie-Hellman efímeras, validación de certificados X.509 y proxy pass a upstreams.</p>
            </div>
          </div>
          <div className="practical-card__actions">
            <ConceptAudioTrigger track={presentationTrack} />
            <span className="practical-card__family">{presentationTrack.family}</span>
          </div>
        </header>

        <HttpsTunnelScene />
      </section>

      <PracticalDeepDive modules={nginxDeepDive} collectionId="nginx" />

      <ActionQuizInvite actionHref="/nginx-en-accion" collectionTitle="NGINX" />

      <footer className="project-note">El caso diferencia la conexión TCP, el handshake TLS, la identidad del servidor, las claves de tráfico y el HTTP que NGINX procesa después de terminar el cifrado. Un certificado inválido detiene el canal antes de exponer datos de aplicación.</footer>

      <FloatingAudioBubble collectionName="NGINX en acción" tracks={practicalTracks} />
    </main>
  );
}
