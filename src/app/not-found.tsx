import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page page-shell">
      <div className="not-found-card">
        <div className="not-found-card__titlebar">
          <div className="not-found-card__dots" aria-hidden="true">
            <span className="dot dot--red" />
            <span className="dot dot--yellow" />
            <span className="dot dot--green" />
          </div>
          <span className="not-found-card__filename">EXCEPTION_ROUTE_NOT_FOUND.ts</span>
          <span className="not-found-card__badge">HTTP 404</span>
        </div>

        <div className="not-found-card__body">
          <div className="not-found-face-stage" aria-hidden="true">
            <div className="not-found-face-radar" />
            <svg
              className="not-found-face"
              viewBox="0 0 320 380"
              role="img"
              aria-label="Animacion 404: los digitos 4 0 4 cobran vida y se transforman en un rostro interactivo que mira a los lados y parpadea"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="25"
              >
                <g className="face__eyes">
                  <g transform="translate(15, 0)">
                    <polyline className="face__eye-lid" points="37,0 0,120 75,120 55,120 55,0" />
                    <polyline className="face__pupil" points="55,120 55,155" strokeDasharray="35 35" />
                  </g>
                  <g transform="translate(230, 0)">
                    <polyline className="face__eye-lid" points="37,0 0,120 75,120 55,120 55,0" />
                    <polyline className="face__pupil" points="55,120 55,155" strokeDasharray="35 35" />
                  </g>
                </g>
                <rect className="face__nose" rx="4" ry="4" x="132.5" y="112.5" width="55" height="155" />
                <g className="face__mouth" transform="translate(0, 310)">
                  <path className="face__mouth-left" d="M 160,0 C 130,0 100,25 75,45" strokeDasharray="102 102" />
                  <path className="face__mouth-right" d="M 160,0 C 190,0 220,25 245,45" strokeDasharray="102 102" />
                </g>
              </g>
            </svg>
          </div>

          <div className="not-found-info">
            <span className="not-found-info__tag">
              ESTADO DE EJECUCION · 404 NOT FOUND
            </span>

            <h1 className="not-found-info__title">
              Coordenada no encontrada en el Atlas
            </h1>

            <p className="not-found-info__desc">
              La ruta solicitada no coincide con ninguna de las 73 colecciones tecnologicas ni con las 146 rutas canonicas activas. Es posible que el recurso haya sido reubicado o pertenezca a un modulo en desarrollo.
            </p>

            <div className="not-found-terminal">
              <div className="not-found-terminal__line">
                <span className="not-found-terminal__prompt">$</span>
                <span className="not-found-terminal__cmd">dev-visualizer --resolve-route</span>
              </div>
              <div className="not-found-terminal__output">
                <span>[ERROR_404] URI no indexada en el grafo canonico de arquitectura.</span>
                <span>[SUGERENCIA] Redirigir la navegacion hacia el catalogo principal o la libreria formal.</span>
              </div>
            </div>

            <div className="not-found-actions">
              <Link href="/" className="btn-cyber-primary">
                <span>Volver al Inicio</span>
                <span aria-hidden="true">→</span>
              </Link>

              <Link href="/colecciones" className="btn-cyber-secondary">
                <span className="btn-cyber-icon" aria-hidden="true">&gt;_</span>
                <span>Explorar 73 Colecciones</span>
              </Link>

              <Link href="/libreria" className="btn-cyber-outline">
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                <span>Libreria Profesional</span>
              </Link>

              <Link href="/docker-en-accion" className="btn-cyber-trophies">
                <span>Casos «En Accion»</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
