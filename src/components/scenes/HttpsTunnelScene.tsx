"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";
import { useScenePlayback } from "@/components/visual/useScenePlayback";

const LOOP_SECONDS = 16;

const tcpPackets = [
  { label: "SYN", direction: "out", start: 0.04 },
  { label: "SYN · ACK", direction: "back", start: 0.09 },
  { label: "ACK", direction: "out", start: 0.14 },
] as const;

const helloMessages = [
  { label: "ClientHello", detail: "TLS 1.3 · suites · key share", direction: "out", start: 0.2 },
  { label: "ServerHello", detail: "suite · key share", direction: "back", start: 0.25 },
] as const;

export function HttpsTunnelScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sceneRef);
  const transition = (times?: number[]) =>
    shouldAnimate
      ? { duration: LOOP_SECONDS, repeat: Infinity, ease: "linear" as const, ...(times ? { times } : {}) }
      : { duration: 0 };

  return (
    <figure
      className="https-tunnel"
      ref={sceneRef}
      data-playback={playback}
      role="img"
      aria-label="Un cliente abre HTTPS con TCP y TLS 1.3. Un certificado con SAN incorrecto interrumpe el primer intento; después de corregir el host, cliente y servidor derivan claves, confirman el handshake y transportan HTTP cifrado."
    >
      <figcaption className="https-tunnel__legend">
        <span><i /> Transporte</span>
        <span><i /> Identidad y claves</span>
        <span><i /> Canal cifrado</span>
      </figcaption>

      <Fragment key={playback}>
        <div className="https-tunnel__canvas">
          <header className="https-tunnel__endpoint https-tunnel__endpoint--client">
            <span>CLIENTE</span>
            <strong>app.example</strong>
            <small>solicita una conexión segura</small>
          </header>

          <header className="https-tunnel__endpoint https-tunnel__endpoint--server">
            <span>NGINX</span>
            <strong>:443</strong>
            <small>terminación TLS</small>
          </header>

          <section className="https-tunnel__phase https-tunnel__phase--tcp" aria-label="Apertura de la conexión TCP">
            <header><em>01</em><div><strong>TCP</strong><small>canal de transporte</small></div></header>
            <div className="https-tunnel__rail" aria-hidden="true">
              {tcpPackets.map((packet) => {
                const end = packet.start + 0.055;
                const outbound = packet.direction === "out";
                return (
                  <motion.i
                    className={`https-tunnel__packet https-tunnel__packet--${packet.direction}`}
                    key={packet.label}
                    animate={shouldAnimate
                      ? { left: outbound ? ["7%", "7%", "88%", "88%"] : ["88%", "88%", "7%", "7%"], opacity: [.35, 1, 1, .35] }
                      : { left: outbound ? "68%" : "32%", opacity: .82 }}
                    transition={transition([0, packet.start, end, 1])}
                  >
                    {packet.label}
                  </motion.i>
                );
              })}
            </div>
            <motion.b
              className="https-tunnel__phase-status"
              animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .78], scale: [.98, .98, 1.03, 1, .98] } : { opacity: 1, scale: 1 }}
              transition={transition([0, .14, .18, .32, 1])}
            >
              CONEXIÓN ABIERTA
            </motion.b>
          </section>

          <section className="https-tunnel__phase https-tunnel__phase--hello" aria-label="Negociación inicial de TLS 1.3">
            <header><em>02</em><div><strong>HELLO</strong><small>versión, algoritmos y claves efímeras</small></div></header>
            <div className="https-tunnel__hello-lanes">
              {helloMessages.map((message) => {
                const outbound = message.direction === "out";
                return (
                  <motion.div
                    className={`https-tunnel__exchange https-tunnel__exchange--${message.direction}`}
                    key={message.label}
                    animate={shouldAnimate
                      ? { x: outbound ? ["-6%", "-6%", "6%", "6%", "0%"] : ["6%", "6%", "-6%", "-6%", "0%"], opacity: [.7, .7, 1, 1, .78] }
                      : { x: "0%", opacity: 1 }}
                    transition={transition([0, message.start, message.start + .055, .42, 1])}
                  >
                    <strong>{message.label}</strong>
                    <small>{message.detail}</small>
                    <i aria-hidden="true">{outbound ? "→" : "←"}</i>
                  </motion.div>
                );
              })}
            </div>
          </section>

          <section className="https-tunnel__phase https-tunnel__phase--identity" aria-label="Validación de la cadena de certificados y del nombre del host">
            <header><em>03</em><div><strong>IDENTIDAD</strong><small>cadena de confianza y hostname</small></div></header>
            <div className="https-tunnel__trust-chain">
              <motion.span animate={shouldAnimate ? { opacity: [.74, .74, 1, 1, .8] } : { opacity: 1 }} transition={transition([0, .27, .3, .48, 1])}>RAÍZ</motion.span>
              <i aria-hidden="true">›</i>
              <motion.span animate={shouldAnimate ? { opacity: [.74, .74, 1, 1, .8] } : { opacity: 1 }} transition={transition([0, .29, .32, .48, 1])}>INTERMEDIA</motion.span>
              <i aria-hidden="true">›</i>
              <motion.span animate={shouldAnimate ? { opacity: [.74, .74, 1, 1, .8] } : { opacity: 1 }} transition={transition([0, .31, .34, .48, 1])}>CERTIFICADO</motion.span>
            </div>
            <div className="https-tunnel__hostname-check">
              <code>host: app.example</code>
              <motion.code
                className="https-tunnel__san https-tunnel__san--invalid"
                animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .18, .18, .72], x: [0, 0, 4, -4, 0, 0, 0] } : { opacity: .9, x: 0 }}
                transition={transition([0, .32, .35, .4, .43, .49, 1])}
              >
                SAN: api.internal
              </motion.code>
              <motion.strong
                className="https-tunnel__failure"
                animate={shouldAnimate ? { opacity: [.75, .75, 1, 1, .2, .2, .75], scale: [.98, .98, 1.04, 1, .98, .98, .98] } : { opacity: 1, scale: 1 }}
                transition={transition([0, .35, .37, .42, .44, .5, 1])}
              >
                SAN ≠ HOST · ABORTAR
              </motion.strong>
              <motion.code
                className="https-tunnel__san https-tunnel__san--valid"
                animate={shouldAnimate ? { opacity: [.18, .18, .18, 1, 1, .82], y: [3, 3, 3, 0, 0, 0] } : { opacity: 1, y: 0 }}
                transition={transition([0, .42, .48, .52, .86, 1])}
              >
                SAN: app.example ✓
              </motion.code>
            </div>
            <motion.b
              className="https-tunnel__recovery"
              animate={shouldAnimate ? { opacity: [.7, .7, .7, 1, 1, .78] } : { opacity: 1 }}
              transition={transition([0, .44, .49, .54, .9, 1])}
            >
              HOST CORREGIDO · CONFIANZA RESTAURADA
            </motion.b>
          </section>

          <section className="https-tunnel__phase https-tunnel__phase--keys" aria-label="ECDHE y HKDF derivan claves de tráfico equivalentes">
            <header><em>04</em><div><strong>CLAVES</strong><small>ECDHE + HKDF</small></div></header>
            <div className="https-tunnel__key-agreement">
              <motion.span
                className="https-tunnel__key https-tunnel__key--client"
                animate={shouldAnimate ? { x: [0, 0, 18, 18, 0], opacity: [.72, .72, 1, 1, .78] } : { x: 0, opacity: 1 }}
                transition={transition([0, .51, .59, .72, 1])}
              >clave efímera A</motion.span>
              <motion.i
                className="https-tunnel__hkdf"
                animate={shouldAnimate ? { rotate: [0, 0, 180, 360, 360], scale: [.9, .9, 1.12, 1, .94], opacity: [.72, .72, 1, 1, .8] } : { rotate: 0, scale: 1, opacity: 1 }}
                transition={transition([0, .55, .63, .72, 1])}
                aria-label="HKDF deriva las claves"
              >
                HKDF
              </motion.i>
              <motion.span
                className="https-tunnel__key https-tunnel__key--server"
                animate={shouldAnimate ? { x: [0, 0, -18, -18, 0], opacity: [.72, .72, 1, 1, .78] } : { x: 0, opacity: 1 }}
                transition={transition([0, .51, .59, .72, 1])}
              >clave efímera B</motion.span>
            </div>
            <motion.div
              className="https-tunnel__traffic-keys"
              animate={shouldAnimate ? { opacity: [.7, .7, 1, 1, .8], scaleX: [.86, .86, 1, 1, .9] } : { opacity: 1, scaleX: 1 }}
              transition={transition([0, .62, .69, .92, 1])}
            >
              <span>client_application_key</span>
              <span>server_application_key</span>
            </motion.div>
          </section>

          <section className="https-tunnel__phase https-tunnel__phase--finished" aria-label="Ambas partes confirman que comparten el mismo transcript del handshake">
            <header><em>05</em><div><strong>FINISHED</strong><small>handshake autenticado</small></div></header>
            <motion.div
              className="https-tunnel__finished-pair"
              animate={shouldAnimate ? { opacity: [.7, .7, 1, 1, .8], scale: [.96, .96, 1.04, 1, .98] } : { opacity: 1, scale: 1 }}
              transition={transition([0, .68, .74, .83, 1])}
            >
              <b>CLIENT FINISHED ✓</b>
              <b>SERVER FINISHED ✓</b>
            </motion.div>
          </section>

          <section className="https-tunnel__phase https-tunnel__phase--data" aria-label="HTTP viaja dentro del túnel cifrado">
            <header><em>06</em><div><strong>HTTPS</strong><small>HTTP protegido por claves simétricas</small></div></header>
            <motion.div
              className="https-tunnel__secure-channel"
              animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .82], scaleX: [.82, .82, 1, 1, .88] } : { opacity: 1, scaleX: 1 }}
              transition={transition([0, .73, .79, .96, 1])}
            >
              <span aria-hidden="true">🔒</span>
              <strong>TÚNEL CIFRADO</strong>
              <span aria-hidden="true">🔒</span>
            </motion.div>
            <motion.code
              className="https-tunnel__http-frame https-tunnel__http-frame--request"
              animate={shouldAnimate ? { left: ["8%", "8%", "86%", "86%"], opacity: [.35, .35, 1, .4] } : { left: "62%", opacity: .88 }}
              transition={transition([0, .79, .88, 1])}
            >
              ▣ GET /estado
            </motion.code>
            <motion.code
              className="https-tunnel__http-frame https-tunnel__http-frame--response"
              animate={shouldAnimate ? { right: ["8%", "8%", "86%", "86%"], opacity: [.35, .35, 1, .4] } : { right: "62%", opacity: .88 }}
              transition={transition([0, .88, .96, 1])}
            >
              ▣ 200 OK
            </motion.code>
          </section>
        </div>

        <footer className="https-tunnel__evidence">
          <span><b>IDENTIDAD</b> certificado + SAN verificados</span>
          <span><b>SECRETO</b> las claves no cruzan la red</span>
          <span><b>VELOCIDAD</b> datos cifrados simétricamente</span>
        </footer>
      </Fragment>
    </figure>
  );
}
