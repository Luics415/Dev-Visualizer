import type { Metadata } from "next";
import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { HttpsTunnelScene } from "@/components/scenes/HttpsTunnelScene";
import { collectionNumber } from "@/data/collectionManifest";
import { nginxDeepDive } from "@/data/practicalDeepDives";

export const metadata: Metadata = {
  title: "HTTPS y NGINX en acción",
  description: "TCP, TLS 1.3, certificado, recuperación del hostname, claves efímeras, tráfico HTTP cifrado y enrutamiento NGINX en una escena autónoma.",
  alternates: { canonical: "/nginx-en-accion" },
};

export default function NginxActionPage() {
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

      <section className="practical-stage practical-stage--nginx" aria-label="Caso práctico integrado de NGINX">
        <HttpsTunnelScene />
      </section>

      <PracticalDeepDive modules={nginxDeepDive} />
      <footer className="project-note">El caso diferencia la conexión TCP, el handshake TLS, la identidad del servidor, las claves de tráfico y el HTTP que NGINX procesa después de terminar el cifrado. Un certificado inválido detiene el canal antes de exponer datos de aplicación.</footer>
    </main>
  );
}
