"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";
import { useScenePlayback } from "@/components/visual/useScenePlayback";

const LOOP_SECONDS = 18;

const xmlNodes = [
  ["certificate", "urn:…:calibration:v1"],
  ["device", "DV-421"],
  ["measurement", "M-17"],
  ["measurement", "M-17 → M-18"],
] as const;

const xsdGates = [
  ["sequence", "orden"],
  ["decimal", "tipo"],
  ["xs:key", "identidad"],
] as const;

const jsonFields = [
  ["deviceId", '"DV-421"'],
  ["revision", "8"],
  ["measurements", "[ … ]"],
  ["status", '"approved"'],
] as const;

export function StructuredContractRelayScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sceneRef);
  const transition = (times?: number[], delay = 0) =>
    shouldAnimate
      ? { duration: LOOP_SECONDS, repeat: Infinity, ease: "linear" as const, delay, ...(times ? { times } : {}) }
      : { duration: 0 };

  return (
    <figure
      className="contract-relay"
      ref={sceneRef}
      data-playback={playback}
      role="img"
      aria-label="Un certificado XML se analiza sin resolver recursos externos, se valida con XSD, falla por una clave duplicada, se corrige, se transforma con reglas explícitas a JSON, se valida con JSON Schema, rechaza un patch sobre una revisión antigua y finalmente publica un digest verificable."
    >
      <figcaption className="contract-relay__legend">
        <span><i /> Documento XML</span>
        <span><i /> Restricción y fallo</span>
        <span><i /> JSON verificable</span>
      </figcaption>

      <Fragment key={playback}>
        <div className="contract-relay__canvas">
          <section className="contract-relay__intake">
            <header><em>01</em><div><strong>INGESTA SEGURA</strong><small>bytes → caracteres → árbol</small></div></header>
            <motion.div
              className="contract-relay__xml-ribbon"
              animate={shouldAnimate
                ? { opacity: [.72, 1, 1, .76, .72], backgroundPositionX: ["0%", "0%", "100%", "100%", "0%"] }
                : { opacity: 1, backgroundPositionX: "50%" }}
              transition={transition([0, .08, .28, .9, 1])}
            >
              <code>&lt;cal:certificate xmlns:cal=&quot;urn:…:v1&quot;&gt;</code>
              <span>application/xml · UTF-8 · 2 MiB</span>
            </motion.div>
            <div className="contract-relay__guards">
              <span>DOCTYPE <b>DENY</b></span>
              <span>NETWORK <b>OFF</b></span>
              <span>DEPTH <b>≤ 32</b></span>
            </div>
          </section>

          <section className="contract-relay__xml">
            <header><em>02</em><div><strong>ÁRBOL XML</strong><small>orden y nombres expandidos</small></div></header>
            <div className="contract-relay__tree">
              {xmlNodes.map(([name, detail], index) => (
                <motion.div
                  key={name + detail}
                  style={{ marginLeft: index === 0 ? 0 : index === 1 ? 18 : 36 }}
                  animate={shouldAnimate
                    ? { opacity: [.65, .65, 1, 1, .76], x: [-4, -4, 0, 0, 0] }
                    : { opacity: 1, x: 0 }}
                  transition={transition([0, .1 + index * .035, .15 + index * .035, .9, 1])}
                >
                  <i>{index === xmlNodes.length - 1 ? "└" : "├"}</i>
                  <b>{name}</b>
                  <small>{detail}</small>
                </motion.div>
              ))}
            </div>
            <motion.code
              className="contract-relay__expanded-name"
              animate={shouldAnimate ? { opacity: [.55, .55, 1, 1, .7] } : { opacity: 1 }}
              transition={transition([0, .18, .24, .9, 1])}
            >
              {"{urn:…:v1}certificate"}
            </motion.code>
          </section>

          <section className="contract-relay__xsd">
            <header><em>03</em><div><strong>MALLA XSD 1.1</strong><small>estructura, tipo e identidad</small></div></header>
            <div className="contract-relay__gates">
              {xsdGates.map(([name, detail], index) => (
                <motion.div
                  key={name}
                  className={index === 2 ? "contract-relay__gate contract-relay__gate--identity" : "contract-relay__gate"}
                  animate={shouldAnimate
                    ? {
                        opacity: [.68, .68, 1, 1, .78],
                        borderColor: index === 2
                          ? ["rgba(255,255,255,.12)", "rgba(255,255,255,.12)", "#ff6f86", "#ff6f86", "#49e1a8", "#49e1a8", "rgba(255,255,255,.16)"]
                          : ["rgba(255,255,255,.12)", "rgba(255,255,255,.12)", "#35c7ff", "#49e1a8", "#49e1a8", "rgba(255,255,255,.16)"],
                      }
                    : { opacity: 1, borderColor: "#49e1a8" }}
                  transition={transition(index === 2 ? [0, .24, .3, .42, .49, .82, 1] : [0, .2, .27, .48, .82, 1])}
                >
                  <b>{name}</b><small>{detail}</small>
                </motion.div>
              ))}
            </div>
            <div className="contract-relay__identity">
              <motion.code
                animate={shouldAnimate ? { opacity: [.7, .7, 1, 1, .18, .18, .7] } : { opacity: 0 }}
                transition={transition([0, .28, .32, .41, .46, .54, 1])}
              >
                M-17 · M-17
              </motion.code>
              <motion.strong
                className="contract-relay__failure"
                animate={shouldAnimate ? { opacity: [.18, .18, 1, 1, .18, .18] } : { opacity: 0 }}
                transition={transition([0, .31, .34, .43, .48, 1])}
              >
                KEY DUPLICADA · QUARANTINE
              </motion.strong>
              <motion.code
                className="contract-relay__recovery"
                animate={shouldAnimate ? { opacity: [.18, .18, .18, 1, 1, .82] } : { opacity: 1 }}
                transition={transition([0, .42, .48, .52, .9, 1])}
              >
                M-17 · M-18 ✓
              </motion.code>
            </div>
          </section>

          <section className="contract-relay__mapping">
            <header><em>04</em><div><strong>MAPPING EXPLÍCITO</strong><small>sin equivalencias inventadas</small></div></header>
            <div className="contract-relay__map-grid">
              {[
                ["@device", "deviceId"],
                ["cal:value", "valueDecimal"],
                ["document order", "measurements[]"],
                ["namespace URI", "schemaVersion"],
              ].map(([from, to], index) => (
                <motion.div
                  key={from}
                  animate={shouldAnimate ? { opacity: [.55, .55, 1, 1, .72], x: [-3, -3, 0, 0, 0] } : { opacity: 1, x: 0 }}
                  transition={transition([0, .48 + index * .035, .54 + index * .035, .91, 1])}
                >
                  <code>{from}</code><i>→</i><code>{to}</code>
                </motion.div>
              ))}
            </div>
            <small className="contract-relay__mapping-note">atributos · orden · namespaces · decimal: reglas visibles</small>
          </section>

          <section className="contract-relay__json">
            <header><em>05</em><div><strong>JSON + SCHEMA</strong><small>Draft 2020-12</small></div></header>
            <div className="contract-relay__json-fields">
              {jsonFields.map(([name, value], index) => (
                <motion.div
                  key={name}
                  animate={shouldAnimate ? { opacity: [.58, .58, 1, 1, .76], scaleX: [.96, .96, 1, 1, .98] } : { opacity: 1, scaleX: 1 }}
                  transition={transition([0, .56 + index * .035, .62 + index * .035, .92, 1])}
                >
                  <b>&quot;{name}&quot;</b><span>:</span><code>{value}</code>
                </motion.div>
              ))}
            </div>
            <div className="contract-relay__schema-badges">
              <span>required ✓</span><span>$ref local ✓</span><span>unevaluated ✓</span>
            </div>
          </section>

          <section className="contract-relay__patch">
            <header><em>06</em><div><strong>PATCH + SELLO</strong><small>concurrencia y bytes deterministas</small></div></header>
            <div className="contract-relay__patch-lane">
              <motion.code
                className="contract-relay__patch-old"
                animate={shouldAnimate ? { opacity: [.56, .56, 1, 1, .2, .2, .56] } : { opacity: .45 }}
                transition={transition([0, .65, .69, .76, .79, .86, 1])}
              >
                test /revision 7 ✕
              </motion.code>
              <motion.code
                className="contract-relay__patch-current"
                animate={shouldAnimate ? { opacity: [.28, .28, .28, 1, 1, .8] } : { opacity: 1 }}
                transition={transition([0, .76, .81, .85, .96, 1])}
              >
                test /revision 8 ✓ · replace status
              </motion.code>
            </div>
            <motion.div
              className="contract-relay__seal"
              animate={shouldAnimate
                ? { opacity: [.55, .55, 1, 1, .74], boxShadow: ["0 0 0 transparent", "0 0 0 transparent", "0 0 28px rgba(73,225,168,.3)", "0 0 10px rgba(73,225,168,.14)", "0 0 0 transparent"] }
                : { opacity: 1, boxShadow: "0 0 18px rgba(73,225,168,.2)" }}
              transition={transition([0, .82, .88, .96, 1])}
            >
              <span>JCS</span><i>→</i><b>sha256:8f31…</b><i>→</i><strong>PUBLICADO ✓</strong>
            </motion.div>
          </section>
        </div>

        <footer className="contract-relay__evidence">
          <span><b>XML</b> documento rico preservado</span>
          <span><b>XSD</b> estructura e identidad demostradas</span>
          <span><b>JSON</b> contrato operativo validado</span>
          <motion.span animate={shouldAnimate ? { opacity: [.72, .72, 1, 1, .82] } : { opacity: 1 }} transition={transition([0, .86, .91, .98, 1])}>
            <b>TRACE</b> revisión 9 · digest verificable
          </motion.span>
        </footer>
      </Fragment>
    </figure>
  );
}
