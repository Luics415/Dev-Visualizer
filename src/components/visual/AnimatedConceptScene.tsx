"use client";

import { motion } from "motion/react";

type SceneVariant =
  | "pipeline"
  | "layers"
  | "compare"
  | "timeline"
  | "tree"
  | "gate"
  | "stack"
  | "orbit"
  | "matrix"
  | "browser"
  | "flow"
  | "cards"
  | "terminal"
  | "document";

type AnimatedConceptSceneProps = {
  ariaLabel: string;
  code: string;
  nodes: readonly string[];
  outcome: string;
  caption: string;
  variant: SceneVariant;
};

const LOOP = 11;
const repeat = { duration: LOOP, repeat: Infinity } as const;

function NodeText({ value }: { value: string }) {
  const [title, detail] = value.split("|");
  return (
    <>
      <b>{title}</b>
      {detail ? <small>{detail}</small> : null}
    </>
  );
}

export function AnimatedConceptScene({ ariaLabel, code, nodes, outcome, caption, variant }: AnimatedConceptSceneProps) {
  const safeNodes = nodes.length > 0 ? nodes : ["input", "process", "output"];

  return (
    <div className={`scene atlas-scene atlas-scene--${variant}`} aria-label={ariaLabel}>
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
          <motion.i animate={{ rotate: [0, 360] }} transition={{ duration: LOOP, repeat: Infinity, ease: "linear" }} />
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

      <motion.div className="atlas-outcome" animate={{ opacity: [0, 0, 1, 1, 0], y: [5, 5, 0, 0, -3] }} transition={{ ...repeat, times: [0, .68, .76, .91, 1] }}>{outcome}</motion.div>
      <p className="scene-caption">{caption}</p>
    </div>
  );
}
