import { CollectionNav } from "@/components/navigation/CollectionNav";
import { PracticalDeepDive } from "@/components/concepts/PracticalDeepDive";
import { NginxPracticalScene } from "@/components/scenes/nginx/NginxPracticalScene";
import { nginxDeepDive } from "@/data/practicalDeepDives";

export default function NginxActionPage() {
  return (
    <main className="page-shell">
      <CollectionNav />
      <header className="hero hero--nginx-practical">
        <div>
          <span className="eyebrow eyebrow--nginx">Colección 14 · Caso integrado ampliado</span>
          <h1>NGINX en acción</h1>
          <p>Jinx abre el inventario de piezas de Fishbones desde una conexión HTTP/3. NGINX termina TLS, selecciona el virtual host y la location, consulta el cache, aplica límites, balancea dos upstreams y recupera una respuesta cuando una instancia falla; al mismo tiempo conserva IP real, request ID, métricas y un reload graceful verificable.</p>
        </div>
        <div className="hero__counter hero__counter--nginx"><strong>14</strong><span>etapas de una petición completa</span></div>
      </header>

      <section className="practical-stage practical-stage--nginx" aria-label="Caso práctico integrado de NGINX">
        <NginxPracticalScene />
      </section>

      <PracticalDeepDive modules={nginxDeepDive} />
      <footer className="project-note">El caso diferencia lo que ve el cliente, lo que decide NGINX y lo que ocurre en los upstreams. También muestra que un reload correcto cambia configuración para conexiones nuevas sin derribar las que todavía están activas.</footer>
    </main>
  );
}
