"use client";

import { motion } from "motion/react";

const LOOP = 30;

function stageTransition(start: number, end: number) {
  return {
    duration: LOOP,
    repeat: Infinity,
    times: [0, start, Math.min(start + 0.02, 0.98), end, Math.min(end + 0.02, 1), 1],
  };
}

export function ReactNativePracticalScene() {
  return (
    <div
      className="rn-story"
      aria-label="Historia visual de React Native: pulsación, estado, permiso del sistema, cámara nativa, petición HTTP y navegación final"
    >
      <div className="practical-story__legend">
        <span><i /> JavaScript</span><span><i /> sistema nativo</span><span><i /> cambio visible</span>
      </div>

      <div className="rn-story__grid">
        <motion.section
          className="rn-story-stage rn-story-stage--press"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.02, .17)}
        >
          <header><span>01</span><div><b>Pulsación nativa</b><small>El gesto cruza del sistema a React</small></div></header>
          <div className="rn-action-pair rn-action-pair--press">
            <div className="rn-action-box rn-action-box--native">
              <small>iOS / Android</small>
              <motion.button
                type="button"
                tabIndex={-1}
                animate={{ scale: [1, 1, .92, .92, 1], opacity: [1, 1, .72, .72, 1] }}
                transition={{ duration: LOOP, repeat: Infinity, times: [0, .055, .09, .125, .17] }}
              >Crear reporte</motion.button>
              <span>touch → pressIn → onPress</span>
            </div>
            <div className="rn-action-box rn-action-box--js"><small>JavaScript</small><b>handleCreate()</b><span>recibe un evento semántico</span></div>
            <motion.i
              className="rn-action-token"
              animate={{ x: [0, 0, 116, 116], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.075, .095, .145, .175] }}
            >onPress</motion.i>
          </div>
          <code>{"<Pressable onPress={handleCreate}>"}</code>
        </motion.section>

        <motion.section
          className="rn-story-stage rn-story-stage--state"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.17, .33)}
        >
          <header><span>02</span><div><b>Estado y render</b><small>React calcula la pantalla del formulario</small></div></header>
          <div className="rn-action-pair rn-action-pair--state">
            <div className="rn-action-box rn-action-box--js">
              <small>snapshot actual</small><b>step = &quot;home&quot;</b>
              <motion.span
                animate={{ opacity: [0, 0, 1, 1, 0], y: [6, 6, 0, 0, -4] }}
                transition={{ duration: LOOP, repeat: Infinity, times: [0, .205, .235, .31, .34] }}
              >setStep(&quot;form&quot;)</motion.span>
            </div>
            <div className="rn-action-box rn-action-box--native"><small>siguiente commit</small><b>ReportForm</b><span>TextInput + botón de cámara</span></div>
            <motion.i
              className="rn-action-token"
              animate={{ x: [0, 0, 116, 116], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.205, .23, .3, .335] }}
            >render</motion.i>
          </div>
          <code>setStep(&quot;form&quot;) → render → commit de vistas nativas</code>
        </motion.section>

        <motion.section
          className="rn-story-stage rn-story-stage--permission"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.33, .5)}
        >
          <header><span>03</span><div><b>Permiso del sistema</b><small>JavaScript no concede acceso por sí mismo</small></div></header>
          <div className="rn-action-pair rn-action-pair--permission">
            <div className="rn-action-box rn-action-box--js"><small>módulo</small><b>requestCamera()</b><span>Promise pendiente</span></div>
            <div className="rn-action-box rn-action-box--native">
              <small>diálogo del SO</small><b>¿Permitir cámara?</b>
              <div><span>No permitir</span><motion.em animate={{ opacity: [.35, .35, 1, 1, .35] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .39, .42, .48, .51] }}>Permitir</motion.em></div>
            </div>
            <motion.i
              className="rn-action-token"
              animate={{ x: [0, 0, 116, 116], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.345, .37, .455, .505] }}
            >request</motion.i>
          </div>
          <code>const permission = await requestCameraPermission()</code>
        </motion.section>

        <motion.section
          className="rn-story-stage rn-story-stage--camera"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.5, .67)}
        >
          <header><span>04</span><div><b>Cámara y resultado</b><small>El módulo nativo devuelve datos a JavaScript</small></div></header>
          <div className="rn-action-pair rn-action-pair--camera">
            <div className="rn-action-box rn-action-box--native">
              <small>cámara nativa</small><div className="rn-camera-frame"><motion.i animate={{ scale: [.8, .8, 1.35, .8], opacity: [.35, 1, 0, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [.53, .565, .59, .64] }} /></div><span>captura + compresión</span>
            </div>
            <div className="rn-action-box rn-action-box--js"><small>resultado</small><b>photo.uri</b><motion.span animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .59, .62, .655, .685] }}>file:///report-42.jpg</motion.span></div>
            <motion.i
              className="rn-action-token rn-action-token--reverse"
              animate={{ x: [116, 116, 0, 0], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.56, .59, .645, .68] }}
            >URI</motion.i>
          </div>
          <code>const photo = await launchCamera()</code>
        </motion.section>

        <motion.section
          className="rn-story-stage rn-story-stage--upload"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.67, .84)}
        >
          <header><span>05</span><div><b>Carga HTTP</b><small>La UI continúa mientras viaja el formulario</small></div></header>
          <div className="rn-action-pair rn-action-pair--upload">
            <div className="rn-action-box rn-action-box--js"><small>React Native</small><b>FormData</b><span>description + photo</span><motion.em animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .705, .735, .82, .85] }}>isSubmitting = true</motion.em></div>
            <div className="rn-action-box rn-action-box--server"><small>REST API</small><b>POST /reports</b><span>201 Created + JSON</span></div>
            <motion.i
              className="rn-action-token"
              animate={{ x: [0, 0, 116, 116], opacity: [0, 1, 1, 0] }}
              transition={{ duration: LOOP, repeat: Infinity, times: [.69, .72, .805, .845] }}
            >multipart</motion.i>
          </div>
          <code>{'await fetch("/reports", { method: "POST", body: formData })'}</code>
        </motion.section>

        <motion.section
          className="rn-story-stage rn-story-stage--finish"
          animate={{ opacity: [.42, .42, 1, 1, .42, .42] }}
          transition={stageTransition(.84, .985)}
        >
          <header><span>06</span><div><b>Commit y navegación</b><small>La respuesta alimenta estado, memoria y pantalla</small></div></header>
          <div className="rn-finish-flow">
            <div className="rn-finish-flow__json"><small>JSON</small><b>{`{ id: 42, status: "received" }`}</b></div>
            <div className="rn-finish-flow__steps">
              <motion.span animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .865, .89, .93, .99] }}>setReport()</motion.span>
              <motion.span animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .885, .91, .95, .99] }}>persist id</motion.span>
              <motion.span animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .905, .93, .97, .995] }}>navigate()</motion.span>
            </div>
            <motion.div className="rn-finish-flow__phone" animate={{ opacity: [0, 0, 1, 1, 0], y: [8, 8, 0, 0, -4] }} transition={{ duration: LOOP, repeat: Infinity, times: [0, .91, .945, .985, 1] }}><i>✓</i><b>Reporte #42</b><span>Recibido</span></motion.div>
          </div>
          <code>response.json() → state → storage → DetailsScreen</code>
        </motion.section>
      </div>

      <motion.p
        className="rn-story__summary"
        animate={{ opacity: [0, 0, 1, 1, 0] }}
        transition={{ duration: LOOP, repeat: Infinity, times: [0, .93, .96, .99, 1] }}
      >
        La experiencia parece una sola acción, pero atraviesa tres mundos: React calcula el estado, el sistema operativo controla capacidades sensibles y la API conserva el resultado remoto.
      </motion.p>
    </div>
  );
}
