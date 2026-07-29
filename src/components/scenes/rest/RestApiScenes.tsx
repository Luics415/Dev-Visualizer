"use client";

import { motion } from "motion/react";

const LOOP = 10;
const T = { duration: LOOP, repeat: Infinity } as const;

export function ResourcesScene() {
  return (
    <div className="scene rest-resources" aria-label="El cliente solicita el recurso producto 42 y el servidor devuelve su representación JSON">
      <div className="scene-code">GET /products/42</div>
      <div className="rest-resource-map">
        <div className="rest-resource-map__client">cliente<small>necesita un producto</small></div>
        <div className="rest-resource-map__uri">/products/<b>42</b><small>identidad estable</small></div>
        <div className="rest-resource-map__server">recurso<small>Product #42</small></div>
        <motion.i animate={{ x: [0, 0, 178, 178], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.08, .16, .72, .86] }}>GET</motion.i>
        <motion.div animate={{ opacity: [0, 0, 1, 1, 0], y: [5, 5, 0, 0, -4] }} transition={{ ...T, times: [0, .58, .68, .88, 1] }}>{`{ id: 42, name: "Arcade Tee" }`}</motion.div>
      </div>
      <p className="scene-caption">La URL identifica el recurso; JSON es una representación transferida de ese recurso.</p>
    </div>
  );
}

export function EndpointsScene() {
  return (
    <div className="scene rest-endpoints" aria-label="Una raíz de API se ramifica en endpoints de usuarios, productos y pedidos">
      <div className="scene-code">https://api.example.com/v1</div>
      <div className="rest-endpoint-tree">
        <div className="rest-endpoint-tree__root">/api/v1</div>
        {["/users", "/products", "/orders"].map((path, index) => (
          <motion.div key={path} className={`rest-endpoint-tree__leaf rest-endpoint-tree__leaf--${index + 1}`} animate={{ opacity: [.2, .2, 1, 1, .2], scale: [.96, .96, 1.04, 1, .96] }} transition={{ ...T, times: [0, .18 + index * .14, .24 + index * .14, .72, .88] }}>{path}<small>{["identidades", "catálogo", "transacciones"][index]}</small></motion.div>
        ))}
        <span className="rest-endpoint-tree__rail rest-endpoint-tree__rail--1" /><span className="rest-endpoint-tree__rail rest-endpoint-tree__rail--2" /><span className="rest-endpoint-tree__rail rest-endpoint-tree__rail--3" />
      </div>
      <p className="scene-caption">Un endpoint une una ruta con una operación disponible sobre esa ruta.</p>
    </div>
  );
}

export function HttpMethodsScene() {
  const methods = [
    ["GET", "leer", "200"],
    ["POST", "crear", "201"],
    ["PATCH", "cambiar", "200"],
    ["DELETE", "eliminar", "204"],
  ];

  return (
    <div className="scene rest-methods" aria-label="Los métodos HTTP expresan leer, crear, cambiar y eliminar sobre el mismo recurso">
      <div className="scene-code">METHOD /products/42</div>
      <div className="rest-method-lanes">
        {methods.map(([method, action, status], index) => (
          <div key={method}>
            <motion.b animate={{ opacity: [.28, .28, 1, 1, .28] }} transition={{ ...T, times: [0, .12 + index * .16, .2 + index * .16, .3 + index * .16, .42 + index * .16] }}>{method}</motion.b>
            <span>{action}</span><i /><motion.em animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .2 + index * .16, .27 + index * .16, .37 + index * .16, .48 + index * .16] }}>{status}</motion.em>
          </div>
        ))}
      </div>
      <p className="scene-caption">La ruta dice sobre qué; el método HTTP dice qué intención tiene el cliente.</p>
    </div>
  );
}

export function ParamsQueryScene() {
  return (
    <div className="scene rest-url-parts" aria-label="La URL se divide en recurso, parámetro de ruta y parámetros de consulta">
      <div className="scene-code">GET /users/42/orders?status=paid&amp;page=2</div>
      <div className="rest-url-parser">
        <div className="rest-url-parser__url"><span>/users</span><b>/42</b><span>/orders</span><em>?status=paid&amp;page=2</em></div>
        <div className="rest-url-parser__labels">
          <motion.span animate={{ opacity: [.2, 1, 1, .2] }} transition={{ ...T, times: [.12, .22, .72, .86] }}>colección</motion.span>
          <motion.span animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ ...T, times: [0, .24, .34, .72, .86] }}>id = 42</motion.span>
          <motion.span animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ ...T, times: [0, .38, .48, .76, .9] }}>filtro + página</motion.span>
        </div>
        <motion.i animate={{ x: [0, 0, 205, 205], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.08, .15, .72, .86] }} />
      </div>
      <p className="scene-caption">La ruta identifica; la query ajusta cómo se obtiene o presenta la colección.</p>
    </div>
  );
}

export function HeadersScene() {
  return (
    <div className="scene rest-headers" aria-label="Una solicitud contiene línea inicial, headers de metadatos y un cuerpo separado">
      <div className="scene-code">Authorization · Accept · Content-Type · Trace-Id</div>
      <div className="rest-envelope">
        <div className="rest-envelope__request"><b>POST /orders</b><small>solicitud HTTP</small></div>
        <motion.div className="rest-envelope__headers" animate={{ x: [-18, -18, 0, 0, -18], opacity: [.2, .2, 1, 1, .2] }} transition={{ ...T, times: [0, .17, .3, .78, 1] }}><span>Authorization: Bearer …</span><span>Content-Type: application/json</span><span>Accept: application/json</span></motion.div>
        <motion.div className="rest-envelope__body" animate={{ x: [18, 18, 0, 0, 18], opacity: [.2, .2, 1, 1, .2] }} transition={{ ...T, times: [0, .33, .46, .82, 1] }}>{`{ productId: 42 }`}</motion.div>
      </div>
      <p className="scene-caption">Los headers describen la transferencia; el body transporta la representación principal.</p>
    </div>
  );
}

export function JsonBodyScene() {
  return (
    <div className="scene rest-json" aria-label="Un objeto de JavaScript se serializa a JSON, viaja como texto y el servidor lo reconstruye">
      <div className="scene-code">JSON.stringify(payload) → request.json()</div>
      <div className="rest-json-pipeline">
        <div className="rest-json-pipeline__object"><small>objeto JS</small><b>name</b><span>Jinx</span><b>level</b><span>7</span></div>
        <div className="rest-json-pipeline__serializer">serialize<small>JSON.stringify</small></div>
        <div className="rest-json-pipeline__wire">{`{"name":"Jinx","level":7}`}</div>
        <div className="rest-json-pipeline__parser">parse<small>request.json()</small></div>
        <motion.i animate={{ x: [0, 0, 205, 205], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.08, .16, .78, .9] }} />
      </div>
      <p className="scene-caption">JSON no viaja como objeto vivo: se serializa a bytes y luego se interpreta otra vez.</p>
    </div>
  );
}

export function StatusCodesScene() {
  const groups = [["2xx", "éxito", "200 · 201 · 204"], ["4xx", "problema del cliente", "400 · 401 · 404"], ["5xx", "fallo del servidor", "500 · 503"]];
  return (
    <div className="scene rest-status" aria-label="Los códigos 2xx, 4xx y 5xx clasifican éxito, problema del cliente y fallo del servidor">
      <div className="scene-code">HTTP/1.1 200 OK</div>
      <div className="rest-status-spectrum">
        {groups.map(([code, label, examples], index) => <motion.div key={code} animate={{ opacity: [.25, .25, 1, 1, .25], y: [5, 5, 0, 0, -3] }} transition={{ ...T, times: [0, .15 + index * .2, .23 + index * .2, .55 + index * .16, .72 + index * .14] }}><b>{code}</b><span>{label}</span><small>{examples}</small></motion.div>)}
      </div>
      <motion.p className="rest-status-result" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .68, .76, .9, 1] }}>El cliente decide la siguiente acción con status + body.</motion.p>
      <p className="scene-caption">El status resume el resultado; el cuerpo agrega datos o detalles del error.</p>
    </div>
  );
}

export function CrudScene() {
  return (
    <div className="scene rest-crud" aria-label="Un recurso recorre crear, leer, actualizar y eliminar">
      <div className="scene-code">POST · GET · PATCH · DELETE /notes</div>
      <div className="rest-crud-cycle">
        <div className="rest-crud-cycle__resource"><motion.b animate={{ opacity: [0, 0, 1, 1, .45, .45, 0] }} transition={{ ...T, times: [0, .18, .28, .62, .72, .88, 1] }}>Note #7</motion.b><motion.span animate={{ opacity: [0, 0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .48, .58, .7, .88, 1] }}>title: &quot;Updated&quot;</motion.span></div>
        {["CREATE", "READ", "UPDATE", "DELETE"].map((item, index) => <motion.div key={item} className={`rest-crud-cycle__step rest-crud-cycle__step--${index + 1}`} animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ ...T, times: [0, .08 + index * .2, .15 + index * .2, .25 + index * .2, .36 + index * .2] }}>{item}<small>{["POST", "GET", "PATCH", "DELETE"][index]}</small></motion.div>)}
        <motion.i animate={{ rotate: [0, 0, 360, 360] }} transition={{ ...T, times: [0, .08, .86, 1] }} />
      </div>
      <p className="scene-caption">CRUD describe el ciclo del dato; HTTP aporta operaciones y respuestas concretas.</p>
    </div>
  );
}

export function StatelessScene() {
  return (
    <div className="scene rest-stateless" aria-label="Dos solicitudes independientes incluyen token, recurso y preferencia sin depender de memoria de sesión en el servidor">
      <div className="scene-code">Cada request lleva su propio contexto</div>
      <div className="rest-stateless-flow">
        {[1, 2].map((request, index) => <motion.div key={request} className={`rest-stateless-flow__request rest-stateless-flow__request--${request}`} animate={{ x: [0, 0, 142, 142], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.08 + index * .38, .14 + index * .38, .42 + index * .38, .5 + index * .38] }}><b>request {request}</b><span>token</span><span>{request === 1 ? "/profile" : "/orders"}</span></motion.div>)}
        <div className="rest-stateless-flow__server">API<small>sin conversación oculta</small></div>
        <div className="rest-stateless-flow__memory"><span>session?</span><b>no requerida</b></div>
      </div>
      <p className="scene-caption">Stateless no significa “sin base de datos”; significa que cada request es comprensible por sí solo.</p>
    </div>
  );
}

export function AuthenticationScene() {
  return (
    <div className="scene rest-auth" aria-label="El cliente obtiene un token y lo envía como Bearer para acceder a un recurso protegido">
      <div className="scene-code">Authorization: Bearer eyJ…</div>
      <div className="rest-auth-flow">
        <div className="rest-auth-flow__login">POST /login<small>email + password</small></div>
        <motion.div className="rest-auth-flow__token" animate={{ opacity: [0, 0, 1, 1, .4, .4, 0], x: [-8, -8, 0, 0, 0, 95, 95] }} transition={{ ...T, times: [0, .18, .28, .48, .55, .75, .88] }}>access token</motion.div>
        <div className="rest-auth-flow__guard">auth middleware<small>firma · expiración · permisos</small></div>
        <div className="rest-auth-flow__resource">/me<small>recurso protegido</small></div>
        <motion.b animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .68, .78, .9, 1] }}>✓ 200</motion.b>
      </div>
      <p className="scene-caption">El token demuestra una autorización; el servidor debe verificarlo en cada solicitud protegida.</p>
    </div>
  );
}

export function PaginationScene() {
  const rows = ["#01", "#02", "#03", "#04", "#05", "#06", "#07", "#08", "#09"];
  return (
    <div className="scene rest-pagination" aria-label="Una colección se filtra y una ventana de tres resultados muestra la segunda página">
      <div className="scene-code">GET /products?category=arcade&amp;page=2&amp;limit=3</div>
      <div className="rest-page-window">
        <div className="rest-page-window__dataset">{rows.map((row, index) => <motion.span key={row} animate={{ opacity: index >= 3 && index <= 5 ? [.25, .25, 1, 1, .25] : [.18, .18, .35, .35, .18] }} transition={{ ...T, times: [0, .25, .38, .82, 1] }}>{row}</motion.span>)}</div>
        <motion.div className="rest-page-window__viewport" animate={{ y: [0, 0, 52, 52, 0] }} transition={{ ...T, times: [0, .22, .38, .82, 1] }}><b>page 2</b><small>limit 3</small></motion.div>
        <div className="rest-page-window__response"><small>items</small><b>#04 · #05 · #06</b><span>total: 9</span></div>
      </div>
      <p className="scene-caption">La API devuelve una ventana y metadatos para que el cliente pueda recorrer la colección.</p>
    </div>
  );
}

export function HttpCacheScene() {
  return (
    <div className="scene rest-cache" aria-label="La primera solicitud recibe 200 y ETag; la segunda valida la copia y obtiene 304 sin cuerpo">
      <div className="scene-code">ETag · If-None-Match · 304 Not Modified</div>
      <div className="rest-cache-dialogue">
        <div className="rest-cache-dialogue__client">cliente<small>cache: v7</small></div>
        <div className="rest-cache-dialogue__server">API<small>versión actual: v7</small></div>
        <motion.div className="rest-cache-dialogue__first" animate={{ opacity: [0, 1, 1, 0, 0] }} transition={{ ...T, times: [0, .12, .38, .48, 1] }}><span>GET /products/42</span><b>200 + body + ETag: v7</b></motion.div>
        <motion.div className="rest-cache-dialogue__second" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .48, .58, .86, 1] }}><span>If-None-Match: v7</span><b>304 · sin body</b></motion.div>
        <motion.i animate={{ x: [0, 0, 155, 155, 0, 0], opacity: [0, 1, 1, 0, 1, 0] }} transition={{ ...T, times: [.08, .14, .37, .47, .62, .88] }} />
      </div>
      <p className="scene-caption">La validación permite reutilizar una copia local sin descargar otra vez la representación.</p>
    </div>
  );
}

export function IdempotencyScene() {
  return (
    <div className="scene rest-idempotency" aria-label="Repetir PUT conserva el mismo estado final mientras repetir POST puede crear dos recursos">
      <div className="scene-code">PUT es idempotente · POST normalmente no</div>
      <div className="rest-idempotency-compare">
        <div className="rest-idempotency-compare__lane rest-idempotency-compare__lane--put"><header><b>PUT /users/42</b><small>mismo estado final</small></header><div><motion.span animate={{ opacity: [.2, 1, 1, .2] }} transition={{ ...T, times: [.1, .2, .68, .84] }}>retry 1</motion.span><motion.span animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ ...T, times: [0, .28, .38, .72, .86] }}>retry 2</motion.span></div><strong>1 usuario actualizado</strong></div>
        <div className="rest-idempotency-compare__lane rest-idempotency-compare__lane--post"><header><b>POST /orders</b><small>cada envío crea</small></header><div><motion.span animate={{ opacity: [.2, 1, 1, .2] }} transition={{ ...T, times: [.1, .2, .68, .84] }}>send 1</motion.span><motion.span animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ ...T, times: [0, .28, .38, .72, .86] }}>send 2</motion.span></div><strong>2 pedidos</strong></div>
      </div>
      <p className="scene-caption">La idempotencia hace seguros ciertos reintentos cuando la respuesta se pierde en la red.</p>
    </div>
  );
}

export function ErrorsLimitsScene() {
  return (
    <div className="scene rest-errors" aria-label="La API devuelve un error estructurado 422 y después limita solicitudes excesivas con 429 y Retry-After">
      <div className="scene-code">422 Unprocessable Content · 429 Too Many Requests</div>
      <div className="rest-error-gate">
        <div className="rest-error-gate__requests">{[1, 2, 3, 4, 5].map((item, index) => <motion.i key={item} animate={{ x: [0, 0, 145, 145], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.05 + index * .08, .1 + index * .08, .48 + index * .08, .56 + index * .08] }} />)}</div>
        <div className="rest-error-gate__server">API<small>validación + rate limit</small></div>
        <motion.div className="rest-error-gate__validation" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .25, .34, .62, .72] }}><b>422</b><span>code: INVALID_EMAIL</span><small>field: email</small></motion.div>
        <motion.div className="rest-error-gate__limit" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .58, .68, .9, 1] }}><b>429</b><span>Retry-After: 30</span><small>intenta después</small></motion.div>
      </div>
      <p className="scene-caption">Un error útil combina status, código estable, detalle accionable y metadatos de reintento.</p>
    </div>
  );
}
