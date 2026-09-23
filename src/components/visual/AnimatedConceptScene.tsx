"use client";

import { Fragment, useRef } from "react";
import { motion } from "motion/react";
import type { SceneVariant } from "@/data/conceptTypes";
import { useScenePlayback } from "@/components/visual/useScenePlayback";

type AnimatedConceptSceneProps = {
  ariaLabel: string;
  code: string;
  nodes: readonly string[];
  outcome: string;
  caption: string;
  variant: SceneVariant;
};

const LOOP = 11;

function NodeText({ value }: { value: string }) {
  const [title, detail] = value.split("|");
  return (
    <>
      <b>{title}</b>
      {detail ? <small>{detail}</small> : null}
    </>
  );
}

export function AnimatedConceptScene({ ariaLabel, code, nodes, outcome, variant }: AnimatedConceptSceneProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const { playback, shouldAnimate } = useScenePlayback(sceneRef);
  const repeat = { duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0 } as const;
  const safeNodes = nodes.length > 0 ? nodes : ["input", "process", "output"];

  return (
    <div ref={sceneRef} className={`scene atlas-scene atlas-scene--${variant}`} data-playback={playback} aria-label={ariaLabel}>
      {shouldAnimate ? (
      <Fragment key={playback}>
        <div className="scene-code">{code}</div>

      {variant === "pipeline" ? (
        <div className="atlas-pipeline">
          {safeNodes.map((node, index) => (
            <motion.div
              key={`${node}-${index}`}
              animate={{ opacity: [.35, .35, 1, 1, .45], y: [4, 4, 0, 0, -2] }}
              transition={{ ...repeat, times: [0, .08 + index * .12, .14 + index * .12, .68 + index * .04, .88] }}
            ><NodeText value={node} /></motion.div>
          ))}
          <motion.i
            animate={{ left: ["4%", "4%", "92%", "92%"], opacity: [0, 1, 1, 0] }}
            transition={{ ...repeat, times: [.05, .12, .76, .84] }}
          />
        </div>
      ) : null}

      {variant === "layers" ? (
        <div className="atlas-layers">
          {safeNodes.map((node, index) => (
            <motion.div
              key={`${node}-${index}`}
              style={{ zIndex: safeNodes.length - index }}
              animate={{ x: [0, 0, index * 8, index * 8, 0], y: [0, 0, index * 11, index * 11, 0], opacity: [.42, .42, 1, 1, .42] }}
              transition={{ ...repeat, times: [0, .12 + index * .07, .25 + index * .07, .75, 1] }}
            ><NodeText value={node} /></motion.div>
          ))}
        </div>
      ) : null}

      {variant === "compare" ? (
        <div className="atlas-compare">
          <motion.div animate={{ opacity: [.45, 1, 1, .45] }} transition={{ ...repeat, times: [0, .12, .48, .62] }}><NodeText value={safeNodes[0]} /></motion.div>
          <span>VS</span>
          <motion.div animate={{ opacity: [.45, .45, 1, 1, .45] }} transition={{ ...repeat, times: [0, .46, .57, .9, 1] }}><NodeText value={safeNodes[1] ?? safeNodes[0]} /></motion.div>
          {safeNodes.slice(2, 4).map((node, index) => <small key={node} className={`atlas-compare__note atlas-compare__note--${index}`}><NodeText value={node} /></small>)}
        </div>
      ) : null}

      {variant === "timeline" ? (
        <div className="atlas-timeline">
          <i />
          {safeNodes.map((node, index) => (
            <motion.div
              key={`${node}-${index}`}
              animate={{ opacity: [.3, .3, 1, 1, .3], scale: [.96, .96, 1.05, 1, .96] }}
              transition={{ ...repeat, times: [0, .08 + index * .14, .14 + index * .14, .58 + index * .07, .82 + index * .04] }}
            ><em>{index + 1}</em><NodeText value={node} /></motion.div>
          ))}
        </div>
      ) : null}

      {variant === "tree" ? (
        <div className="atlas-tree">
          <motion.div className="atlas-tree__root" animate={{ opacity: [.4, 1, 1, .4] }} transition={{ ...repeat, times: [0, .12, .68, .9] }}><NodeText value={safeNodes[0]} /></motion.div>
          <svg viewBox="0 0 280 130" aria-hidden="true"><path d="M140 28 V58 M140 58 L45 90 M140 58 L140 90 M140 58 L235 90" /></svg>
          <div className="atlas-tree__leaves">
            {safeNodes.slice(1, 4).map((node, index) => (
              <motion.div key={node} animate={{ opacity: [.25, .25, 1, 1, .25], y: [4, 4, 0, 0, -2] }} transition={{ ...repeat, times: [0, .2 + index * .13, .28 + index * .13, .72, .92] }}><NodeText value={node} /></motion.div>
            ))}
          </div>
        </div>
      ) : null}

      {variant === "gate" ? (
        <div className="atlas-gate">
          <div className="atlas-gate__inputs">{safeNodes.slice(0, 3).map((node) => <span key={node}>{node.split("|")[0]}</span>)}</div>
          <motion.div className="atlas-gate__door" animate={{ rotateY: [0, 0, 72, 72, 0] }} transition={{ ...repeat, times: [0, .28, .4, .68, .82] }}><b>{safeNodes[3]?.split("|")[0] ?? "check"}</b><small>regla</small></motion.div>
          <motion.i animate={{ left: ["5%", "5%", "48%", "86%", "86%"], opacity: [0, 1, 1, 1, 0] }} transition={{ ...repeat, times: [.08, .14, .43, .7, .82] }} />
          <div className="atlas-gate__result">{outcome}</div>
        </div>
      ) : null}

      {variant === "stack" ? (
        <div className="atlas-stack">
          {safeNodes.slice(0, 5).map((node, index) => (
            <motion.div key={node} animate={{ y: [-(index + 1) * 34, -(index + 1) * 34, 0, 0, -(index + 1) * 34], opacity: [0, 1, 1, 1, 0] }} transition={{ ...repeat, times: [0, .08 + index * .1, .28 + index * .1, .72, .9] }}><NodeText value={node} /></motion.div>
          ))}
        </div>
      ) : null}

      {variant === "orbit" ? (
        <div className="atlas-orbit">
          <div className="atlas-orbit__core">{outcome}</div>
          {safeNodes.slice(0, 4).map((node, index) => (
            <motion.div key={node} className={`atlas-orbit__node atlas-orbit__node--${index}`} animate={{ opacity: [.35, 1, 1, .35], scale: [.94, 1.04, 1, .94] }} transition={{ ...repeat, delay: index * .7 }}><NodeText value={node} /></motion.div>
          ))}
          <motion.i animate={{ rotate: [0, 360] }} transition={{ duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }} />
        </div>
      ) : null}

      {variant === "matrix" ? (
        <div className="atlas-matrix">
          {Array.from({ length: 12 }, (_, index) => (
            <motion.span key={index} animate={{ opacity: [.22, .22, 1, 1, .22], scale: [.92, .92, 1.08, 1, .92] }} transition={{ ...repeat, times: [0, .08 + (index % 4) * .09 + Math.floor(index / 4) * .05, .16 + (index % 4) * .09 + Math.floor(index / 4) * .05, .72, .9] }}>{safeNodes[index % safeNodes.length].split("|")[0]}</motion.span>
          ))}
        </div>
      ) : null}

      {variant === "browser" ? (
        <div className="atlas-browser">
          <header><i /><i /><i /><span>{safeNodes[0]?.split("|")[0]}</span></header>
          <div className="atlas-browser__surface">
            {safeNodes.slice(1, 5).map((node, index) => <motion.div key={node} animate={{ opacity: [.2, .2, 1, 1, .2], scaleX: [.88, .88, 1, 1, .88] }} transition={{ ...repeat, times: [0, .1 + index * .13, .18 + index * .13, .72, .92] }}><NodeText value={node} /></motion.div>)}
          </div>
        </div>
      ) : null}

      {variant === "flow" ? (
        <div className="atlas-flow">
          {safeNodes.slice(0, 5).map((node, index) => (
            <motion.div key={node} animate={{ opacity: [.28, .28, 1, 1, .28], x: [index % 2 ? 8 : -8, index % 2 ? 8 : -8, 0, 0, index % 2 ? -5 : 5] }} transition={{ ...repeat, times: [0, .08 + index * .12, .15 + index * .12, .72, .92] }}><em>{index + 1}</em><NodeText value={node} /></motion.div>
          ))}
        </div>
      ) : null}

      {variant === "cards" ? (
        <div className="atlas-cards">
          {safeNodes.slice(0, 4).map((node, index) => (
            <motion.div key={node} animate={{ rotateY: [90, 90, 0, 0, -90], opacity: [0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [0, .08 + index * .12, .18 + index * .12, .68 + index * .05, .84 + index * .04] }}><NodeText value={node} /></motion.div>
          ))}
        </div>
      ) : null}

      {variant === "terminal" ? (
        <div className="atlas-terminal">
          <header><i /><i /><i /><span>terminal</span></header>
          {safeNodes.slice(0, 5).map((node, index) => (
            <motion.p key={node} animate={{ opacity: [0, 0, 1, 1, .35] }} transition={{ ...repeat, times: [0, .08 + index * .13, .16 + index * .13, .78, .94] }}><em>$</em> {node.split("|")[0]} <small>{node.split("|")[1]}</small></motion.p>
          ))}
        </div>
      ) : null}

      {variant === "document" ? (
        <div className="atlas-document">
          <div className="atlas-document__sheet">
            {safeNodes.slice(0, 5).map((node, index) => (
              <motion.div key={node} animate={{ width: ["18%", "18%", `${Math.max(38, 92 - index * 9)}%`, `${Math.max(38, 92 - index * 9)}%`, "18%"], opacity: [.25, .25, 1, 1, .25] }} transition={{ ...repeat, times: [0, .08 + index * .11, .18 + index * .11, .72, .92] }}><NodeText value={node} /></motion.div>
            ))}
          </div>
          <motion.i animate={{ top: [12, 12, 142, 142], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.08, .14, .75, .84] }} />
        </div>
      ) : null}

      {variant === "anatomy" ? (
        <div className="atlas-anatomy">
          <motion.div className="atlas-anatomy__core" animate={{ scale: [.94, 1.04, 1, .94], opacity: [.55, 1, 1, .55] }} transition={{ ...repeat, times: [0, .18, .72, 1] }}>{outcome}</motion.div>
          <svg viewBox="0 0 300 150" aria-hidden="true"><path d="M150 74 L56 26 M150 74 L244 26 M150 74 L56 124 M150 74 L244 124" /></svg>
          {safeNodes.slice(0, 4).map((node, index) => (
            <motion.div key={node} className={`atlas-anatomy__part atlas-anatomy__part--${index}`} animate={{ opacity: [.2, .2, 1, 1, .2], scale: [.94, .94, 1.02, 1, .94] }} transition={{ ...repeat, times: [0, .1 + index * .13, .2 + index * .13, .72, .92] }}><NodeText value={node} /></motion.div>
          ))}
        </div>
      ) : null}

      {variant === "request" ? (
        <div className="atlas-request">
          <div className="atlas-request__endpoint"><NodeText value={safeNodes[0]} /></div>
          <div className="atlas-request__wire"><i /></div>
          <div className="atlas-request__endpoint"><NodeText value={safeNodes[2] ?? safeNodes[1]} /></div>
          <motion.span className="atlas-request__packet atlas-request__packet--out" animate={{ left: ["20%", "20%", "70%", "70%"], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.05, .12, .48, .56] }}>{safeNodes[1]?.split("|")[0] ?? "request"}</motion.span>
          <motion.span className="atlas-request__packet atlas-request__packet--back" animate={{ right: ["20%", "20%", "70%", "70%"], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.52, .6, .88, .96] }}>{safeNodes[3]?.split("|")[0] ?? "response"}</motion.span>
        </div>
      ) : null}

      {variant === "queue" ? (
        <div className="atlas-queue">
          <div className="atlas-queue__producer"><NodeText value={safeNodes[0]} /></div>
          <div className="atlas-queue__slots">{[0, 1, 2].map((slot) => <span key={slot}>{safeNodes[(slot + 1) % safeNodes.length]?.split("|")[0]}</span>)}</div>
          <div className="atlas-queue__worker"><NodeText value={safeNodes[3] ?? safeNodes[1]} /></div>
          <motion.i animate={{ left: ["8%", "8%", "48%", "82%", "82%"], opacity: [0, 1, 1, 1, 0] }} transition={{ ...repeat, times: [.04, .1, .48, .78, .9] }} />
        </div>
      ) : null}

      {variant === "cache" ? (
        <div className="atlas-cache">
          <div className="atlas-cache__client"><NodeText value={safeNodes[0]} /></div>
          <motion.div className="atlas-cache__store" animate={{ borderColor: ["rgba(255,255,255,.16)", "rgba(89,214,255,.72)", "rgba(89,214,255,.72)", "rgba(255,255,255,.16)"] }} transition={{ ...repeat, times: [0, .28, .72, 1] }}><NodeText value={safeNodes[1] ?? "cache"} /><em>MISS → HIT</em></motion.div>
          <div className="atlas-cache__origin"><NodeText value={safeNodes[2] ?? safeNodes[3]} /></div>
          <motion.span animate={{ x: [-62, -62, 0, 62, 62], opacity: [0, 1, 1, 1, 0] }} transition={{ ...repeat, times: [.06, .12, .42, .72, .84] }}>{safeNodes[3]?.split("|")[0] ?? "dato"}</motion.span>
        </div>
      ) : null}

      {variant === "state-machine" ? (
        <div className="atlas-state-machine">
          <svg viewBox="0 0 300 120" aria-hidden="true"><path d="M42 60 H98 M124 60 H180 M206 60 H262" /></svg>
          {safeNodes.slice(0, 4).map((node, index) => (
            <motion.div key={node} animate={{ opacity: [.3, .3, 1, 1, .3], scale: [.92, .92, 1.08, 1, .92] }} transition={{ ...repeat, times: [0, .08 + index * .17, .16 + index * .17, .62 + index * .07, .86] }}><em>{index + 1}</em><NodeText value={node} /></motion.div>
          ))}
        </div>
      ) : null}

      {variant === "network" ? (
        <div className="atlas-network">
          <svg viewBox="0 0 300 150" aria-hidden="true"><path d="M50 75 L150 28 L250 75 L150 124 Z M50 75 H250 M150 28 V124" /></svg>
          {safeNodes.slice(0, 4).map((node, index) => <div key={node} className={`atlas-network__node atlas-network__node--${index}`}><NodeText value={node} /></div>)}
          <motion.i animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }} />
        </div>
      ) : null}

      {variant === "filesystem" ? (
        <div className="atlas-filesystem">
          {safeNodes.slice(0, 4).map((node, index) => (
            <motion.div key={node} style={{ marginLeft: index * 26 }} animate={{ opacity: [.28, .28, 1, 1, .28], x: [-5, -5, 0, 0, 5] }} transition={{ ...repeat, times: [0, .08 + index * .14, .18 + index * .14, .72, .92] }}><i>{index === 3 ? "▣" : "▾"}</i><NodeText value={node} /></motion.div>
          ))}
        </div>
      ) : null}

      {variant === "compiler" ? (
        <div className="atlas-compiler">
          <div className="atlas-compiler__source"><NodeText value={safeNodes[0]} /></div>
          <motion.div className="atlas-compiler__scanner" animate={{ boxShadow: ["0 0 0 rgba(89,214,255,0)", "0 0 24px rgba(89,214,255,.24)", "0 0 0 rgba(89,214,255,0)"] }} transition={{ ...repeat, times: [0, .44, .84] }}><NodeText value={safeNodes[1] ?? "checker"} /><i /></motion.div>
          <div className="atlas-compiler__output"><NodeText value={safeNodes[2] ?? safeNodes[3]} /></div>
          <motion.span animate={{ opacity: [0, 0, 1, 1, 0], y: [5, 5, 0, 0, -4] }} transition={{ ...repeat, times: [0, .55, .64, .86, .96] }}>{safeNodes[3]?.split("|")[0] ?? "emit"}</motion.span>
        </div>
      ) : null}

      {variant === "container" ? (
        <div className="atlas-container">
          <div className="atlas-container__host"><b>{safeNodes[0]?.split("|")[0]}</b><small>host</small></div>
          <div className="atlas-container__kernel"><b>{safeNodes[1]?.split("|")[0]}</b><small>kernel compartido</small></div>
          <div className="atlas-container__units">{safeNodes.slice(2, 5).map((node, index) => <motion.div key={node} animate={{ y: [10, 10, 0, 0, 10], opacity: [.2, .2, 1, 1, .2] }} transition={{ ...repeat, times: [0, .12 + index * .15, .24 + index * .15, .72, .92] }}><NodeText value={node} /></motion.div>)}</div>
        </div>
      ) : null}

      {variant === "database" ? (
        <div className="atlas-database">
          <div className="atlas-database__query"><NodeText value={safeNodes[0]} /></div>
          <div className="atlas-database__index"><NodeText value={safeNodes[1] ?? "index"} /></div>
          <div className="atlas-database__table">{Array.from({ length: 9 }, (_, index) => <motion.span key={index} animate={{ opacity: index === 5 ? [.25, .25, 1, 1, .25] : [.25, .5, .5, .25] }} transition={{ ...repeat, times: [0, .42, .62, .82, 1] }}>{index + 1}</motion.span>)}</div>
          <motion.i animate={{ left: ["10%", "46%", "74%", "74%"], top: ["30%", "30%", "64%", "64%"], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.08, .25, .7, .84] }} />
        </div>
      ) : null}

      {variant === "scheduler" ? (
        <div className="atlas-scheduler">
          <div className="atlas-scheduler__queue">{safeNodes.slice(0, 3).map((node) => <span key={node}>{node.split("|")[0]}</span>)}</div>
          <div className="atlas-scheduler__cpu"><b>CPU</b><small>{safeNodes[3]?.split("|")[0] ?? "ejecución"}</small></div>
          <motion.i animate={{ left: ["12%", "12%", "70%", "70%"], opacity: [0, 1, 1, 0], scale: [.8, 1, 1, .8] }} transition={{ ...repeat, times: [.05, .14, .7, .84] }} />
          <div className="atlas-scheduler__ticks">{[1, 2, 3, 4, 5].map((tick) => <span key={tick} />)}</div>
        </div>
      ) : null}

      {variant === "signal" ? (
        <div className="atlas-signal">
          <motion.div className="atlas-signal__source" animate={{ scale: [1, 1.18, 1, 1] }} transition={{ ...repeat, times: [0, .18, .32, 1] }}><NodeText value={safeNodes[0]} /></motion.div>
          {[0, 1, 2].map((ring) => <motion.i key={ring} animate={{ scale: [.2, .2, 1.9, 1.9], opacity: [0, .55, 0, 0] }} transition={{ ...repeat, delay: ring * .45, times: [0, .12, .55, 1] }} />)}
          <div className="atlas-signal__listeners">{safeNodes.slice(1, 4).map((node, index) => <motion.div key={node} animate={{ opacity: [.28, .28, 1, 1, .28] }} transition={{ ...repeat, times: [0, .28 + index * .12, .38 + index * .12, .78, .94] }}><NodeText value={node} /></motion.div>)}</div>
        </div>
      ) : null}

      {variant === "lifecycle" ? (
        <div className="atlas-lifecycle">
          <svg viewBox="0 0 280 150" aria-hidden="true"><path d="M140 20 C220 20 250 110 188 132 C110 160 38 112 58 52 C70 18 108 12 140 20" /></svg>
          {safeNodes.slice(0, 4).map((node, index) => <div key={node} className={`atlas-lifecycle__stage atlas-lifecycle__stage--${index}`}><NodeText value={node} /></div>)}
          <motion.i animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }} />
        </div>
      ) : null}

      {variant === "trace" ? (
        <div className="atlas-trace">
          <header><b>trace</b><span>correlation-id</span></header>
          {safeNodes.slice(0, 5).map((node, index) => (
            <motion.div key={node} animate={{ opacity: [.22, .22, 1, 1, .22], scaleX: [.25, .25, 1, 1, .25] }} transition={{ ...repeat, times: [0, .08 + index * .11, .18 + index * .11, .75, .94] }}><span style={{ width: `${48 + index * 10}%` }} /><NodeText value={node} /><em>{8 + index * 13} ms</em></motion.div>
          ))}
        </div>
      ) : null}

      {variant === "memory-map" ? (
        <div className="atlas-memory-map">
          <div className="atlas-memory-map__addresses">{safeNodes.slice(0, 4).map((node, index) => <span key={node}>0x{(4096 + index * 8).toString(16)}</span>)}</div>
          <div className="atlas-memory-map__cells">{safeNodes.slice(0, 4).map((node, index) => <motion.div key={node} animate={{ opacity: [.3, .3, 1, 1, .3], scale: [.96, .96, 1.04, 1, .96] }} transition={{ ...repeat, times: [0, .1 + index * .14, .2 + index * .14, .72, .92] }}><NodeText value={node} /></motion.div>)}</div>
          <motion.i animate={{ left: ["5%", "5%", "82%", "82%"], opacity: [0, 1, 1, 0] }} transition={{ ...repeat, times: [.06, .12, .76, .86] }}>ptr</motion.i>
        </div>
      ) : null}

      {variant === "runtime-dispatch" ? (
        <div className="atlas-runtime-dispatch">
          <div className="atlas-runtime-dispatch__caller"><NodeText value={safeNodes[0]} /></div>
          <motion.span animate={{ x: [-52, -52, 0, 52, 52], opacity: [0, 1, 1, 1, 0] }} transition={{ ...repeat, times: [.06, .12, .42, .72, .84] }}>{safeNodes[1]?.split("|")[0]}</motion.span>
          <motion.div className="atlas-runtime-dispatch__table" animate={{ boxShadow: ["0 0 0 transparent", "0 0 24px color-mix(in srgb,var(--collection-accent) 24%,transparent)", "0 0 0 transparent"] }} transition={{ ...repeat, times: [0, .48, .86] }}><NodeText value={safeNodes[2] ?? "runtime"} /></motion.div>
          <div className="atlas-runtime-dispatch__method"><NodeText value={safeNodes[3] ?? "method"} /></div>
        </div>
      ) : null}

      {variant === "parallel-grid" ? (
        <div className="atlas-parallel-grid">
          {Array.from({ length: 16 }, (_, index) => <motion.span key={index} animate={{ backgroundColor: ["rgba(255,255,255,.035)", "rgba(89,214,255,.26)", "rgba(73,225,168,.18)", "rgba(255,255,255,.035)"] }} transition={{ ...repeat, delay: (index % 4) * .12 + Math.floor(index / 4) * .08 }}>{safeNodes[index % safeNodes.length].split("|")[0]}</motion.span>)}
          <motion.b animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [0, .62, .72, .9, 1] }}>{outcome}</motion.b>
        </div>
      ) : null}

      {variant === "workflow" ? (
        <div className="atlas-workflow">
          {safeNodes.slice(0, 4).map((node, index) => <motion.div key={node} className={`atlas-workflow__node atlas-workflow__node--${index}`} animate={{ opacity: [.28, .28, 1, 1, .28] }} transition={{ ...repeat, times: [0, .08 + index * .16, .17 + index * .16, .75, .94] }}><em>{index + 1}</em><NodeText value={node} /></motion.div>)}
          <svg viewBox="0 0 300 140" aria-hidden="true"><path d="M52 70 H120 M180 70 H248 M150 46 V22 M150 94 V118" /></svg>
          <motion.i animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: shouldAnimate ? LOOP : 0, repeat: shouldAnimate ? Infinity : 0, ease: "linear" }} />
        </div>
      ) : null}

      {variant === "interface-flow" ? (
        <div className="atlas-interface-flow">
          <aside>{safeNodes.slice(0, 2).map((node) => <span key={node}><NodeText value={node} /></span>)}</aside>
          <motion.div animate={{ opacity: [.45, 1, 1, .45], scale: [.97, 1.02, 1, .97] }} transition={repeat}><header><i /><i /><i /></header><NodeText value={safeNodes[2] ?? safeNodes[0]} /><button type="button" tabIndex={-1}>{safeNodes[3]?.split("|")[0] ?? "acción"}</button></motion.div>
        </div>
      ) : null}

      {variant === "literate-weave" ? (
        <div className="atlas-literate-weave">
          <div className="atlas-literate-weave__source"><NodeText value={safeNodes[0]} /><NodeText value={safeNodes[1] ?? safeNodes[0]} /></div>
          <motion.i animate={{ rotate: [0, 0, 180, 180, 360] }} transition={{ ...repeat, times: [0, .2, .45, .7, 1] }}>⌘</motion.i>
          <div className="atlas-literate-weave__outputs"><motion.span animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [0, .4, .5, .9, 1] }}><NodeText value={safeNodes[2] ?? "programa"} /></motion.span><motion.span animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...repeat, times: [0, .52, .62, .92, 1] }}><NodeText value={safeNodes[3] ?? "documento"} /></motion.span></div>
        </div>
      ) : null}

      {variant === "signal-matrix" ? (
        <div className="atlas-signal-matrix">
          {Array.from({ length: 12 }, (_, index) => (
            <motion.div
              key={index}
              animate={{ opacity: [.55, .55, 1, .72, .55], borderColor: ["rgba(255,255,255,.1)", "rgba(255,255,255,.1)", "var(--collection-accent)", "rgba(156,131,255,.55)", "rgba(255,255,255,.1)"] }}
              transition={{ ...repeat, delay: (index % 4) * .16 + Math.floor(index / 4) * .11 }}
            >
              <i />
              <NodeText value={safeNodes[index % safeNodes.length]} />
            </motion.div>
          ))}
        </div>
      ) : null}

      {variant === "relation-loom" ? (
        <div className="atlas-relation-loom">
          <div className="atlas-relation-loom__table atlas-relation-loom__table--left"><b>{safeNodes[0]?.split("|")[0]}</b>{[1, 2, 3].map((row) => <span key={row}>A{row}</span>)}</div>
          <motion.div className="atlas-relation-loom__predicate" animate={{ scale: [.94, 1.06, 1, .94], opacity: [.72, 1, 1, .72] }} transition={repeat}><NodeText value={safeNodes[1] ?? "JOIN|predicado"} /></motion.div>
          <div className="atlas-relation-loom__table atlas-relation-loom__table--right"><b>{safeNodes[2]?.split("|")[0]}</b>{[1, 2, 4].map((row) => <span key={row}>B{row}</span>)}</div>
          <div className="atlas-relation-loom__result">
            {["A1+B1", "A2+B2", "A3+NULL"].map((row, index) => <motion.span key={row} animate={{ opacity: [.35, .35, 1, 1, .58], x: [-5, -5, 0, 0, 4] }} transition={{ ...repeat, times: [0, .2 + index * .12, .3 + index * .12, .78, .94] }}>{row}</motion.span>)}
          </div>
        </div>
      ) : null}

      {variant === "concept-constellation" ? (
        <div className="atlas-concept-constellation">
          <motion.div className="atlas-concept-constellation__core" animate={{ boxShadow: ["0 0 10px rgba(59,211,255,.18)", "0 0 30px rgba(59,211,255,.5)", "0 0 10px rgba(59,211,255,.18)"] }} transition={repeat}>{safeNodes[0]?.split("|")[0]}</motion.div>
          {Array.from({ length: 8 }, (_, index) => (
            <motion.span key={index} className={`atlas-concept-constellation__node atlas-concept-constellation__node--${index}`} animate={{ opacity: [.5, 1, .65, .5], scale: [.9, 1.12, 1, .9] }} transition={{ ...repeat, delay: index * .22 }}>{safeNodes[(index % Math.max(safeNodes.length - 1, 1)) + 1]?.split("|")[0] ?? outcome}</motion.span>
          ))}
        </div>
      ) : null}

      {variant === "assurance-rack" ? (
        <div className="atlas-assurance-rack">
          {safeNodes.slice(0, 4).map((node, index) => (
            <div className="atlas-assurance-rack__lane" key={node}>
              <NodeText value={node} />
              <div>{[0, 1, 2, 3].map((dot) => <motion.i key={dot} animate={{ opacity: [.25, .25, 1, .5, .25], scale: [.8, .8, 1.25, 1, .8] }} transition={{ ...repeat, delay: index * .35 + dot * .18 }} />)}</div>
              <motion.em animate={{ opacity: [.45, .45, 1, 1, .6] }} transition={{ ...repeat, delay: index * .35 }}>PASS</motion.em>
            </div>
          ))}
        </div>
      ) : null}

      {variant === "event-fabric" ? (
        <div className="atlas-event-fabric">
          <div className="atlas-event-fabric__producer"><NodeText value={safeNodes[0]} /></div>
          <div className="atlas-event-fabric__broker"><b>{safeNodes[1]?.split("|")[0]}</b>{[0, 1, 2].map((partition) => <span key={partition}>P{partition}<i /></span>)}</div>
          <div className="atlas-event-fabric__consumers">{safeNodes.slice(2, 4).map((node) => <div key={node}><NodeText value={node} /></div>)}</div>
          {[0, 1, 2].map((token) => <motion.i key={token} className={`atlas-event-fabric__token atlas-event-fabric__token--${token}`} animate={{ left: ["12%", "12%", "49%", "83%", "83%"], opacity: [0, 1, 1, 1, 0] }} transition={{ ...repeat, delay: token * .7, times: [.04, .1, .48, .82, .92] }} />)}
        </div>
      ) : null}

      {variant === "artifact-passport" ? (
        <div className="atlas-artifact-passport">
          <div className="atlas-artifact-passport__commit"><b>COMMIT</b><small>{safeNodes[0]?.split("|")[0]}</small></div>
          <div className="atlas-artifact-passport__checks">{["LINT", "TEST", "SAST"].map((check, index) => <motion.span key={check} animate={{ opacity: [.42, .42, 1, 1, .6], borderColor: ["rgba(255,255,255,.12)", "rgba(255,255,255,.12)", "var(--green)", "var(--green)", "rgba(255,255,255,.12)"] }} transition={{ ...repeat, delay: index * .28 }}>{check}</motion.span>)}</div>
          <motion.div className="atlas-artifact-passport__card" animate={{ rotateY: [0, 0, 8, 0, 0], boxShadow: ["0 0 0 transparent", "0 0 28px rgba(59,211,255,.28)", "0 0 0 transparent"] }} transition={repeat}><b>sha256</b><small>SBOM · FIRMA</small><em>VERIFICADO</em></motion.div>
          <motion.div className="atlas-artifact-passport__promote" animate={{ opacity: [.48, .48, 1, 1, .65] }} transition={{ ...repeat, times: [0, .65, .74, .92, 1] }}>PROMOVER →</motion.div>
        </div>
      ) : null}

        <motion.div className="atlas-outcome" animate={{ opacity: [0, 0, 1, 1, 0], y: [5, 5, 0, 0, -3] }} transition={{ ...repeat, times: [0, .68, .76, .91, 1] }}>{outcome}</motion.div>
      </Fragment>
      ) : (
        <div className="atlas-rest-state" data-static-variant={variant} aria-hidden="true">
          <div className="scene-code">{code}</div>
          <div className="atlas-rest-state__nodes">
            {safeNodes.slice(0, 4).map((node, index) => (
              <div key={`${node}-${index}`}><em>{String(index + 1).padStart(2, "0")}</em><NodeText value={node} /></div>
            ))}
          </div>
          <div className="atlas-rest-state__outcome">{outcome}</div>
        </div>
      )}
    </div>
  );
}
