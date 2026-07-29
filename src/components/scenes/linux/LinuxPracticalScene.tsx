"use client";

import { motion } from "motion/react";

const LOOP = 27;
const repeat = { duration: LOOP, repeat: Infinity } as const;
const checks = [
  ["dns", "DNS", "api.hexgate.dev → 203.0.113.42"],
  ["socket", "Socket", "443 abierto · 3000 cerrado"],
  ["unit", "systemd", "hexgate-api.service failed"],
  ["process", "Proceso", "exit 1 · restart loop"],
  ["journal", "Journal", "EACCES /srv/hexgate/cache"],
  ["identity", "Identidad", "User=hexgate · Group=hexgate"],
  ["permission", "Permisos", "cache root:root 0750"],
] as const;

export function LinuxPracticalScene() {
  return (
    <div className="system-action system-action--linux" aria-label="Diagnóstico de un servicio Linux que falla después de un deployment por permisos incorrectos en un directorio de caché">
      <header className="system-action__toolbar">
        <div><span><i /> incident live</span><b>hexgate-api · del síntoma público al inode</b></div>
        <div>{["síntoma","DNS","socket","unit","PID","logs","identidad","permisos","fix","reload","restart","health","traffic","postmortem"].map((label,index)=><motion.em key={label} animate={{opacity:[.25,.25,1,1,.35]}} transition={{...repeat,times:[0,.02+index*.058,.055+index*.058,.72+index*.013,.96]}}>{String(index+1).padStart(2,"0")} {label}</motion.em>)}</div>
      </header>

      <div className="system-action__grid system-action__grid--linux">
        <section className="linux-action__surface">
          <header><b>Experiencia externa</b><span>monitor + cliente</span></header>
          <div className="linux-action__browser">
            <div><i /><i /><i /><code>https://api.hexgate.dev/health</code></div>
            <motion.strong animate={{opacity:[1,1,0,0,1]}} transition={{...repeat,times:[0,.08,.76,.86,1]}}>503</motion.strong>
            <motion.b animate={{opacity:[1,1,0,0,1]}} transition={{...repeat,times:[0,.08,.76,.86,1]}}>Service unavailable</motion.b>
            <motion.span animate={{opacity:[0,0,1,1,0]}} transition={{...repeat,times:[0,.78,.84,.96,1]}}>200 OK · Jinx puede volver a consultar el inventario</motion.span>
          </div>
          <div className="linux-action__signals">
            <p><small>probe</small><b>/health</b><em>failing</em></p>
            <p><small>latency</small><b>—</b><em>no target</em></p>
            <p><small>alert</small><b>5 min</b><em>page sent</em></p>
          </div>
        </section>

        <section className="linux-action__terminal">
          <header><b>Hipótesis reducidas con evidencia</b><small>ssh ops@hexgate-01</small></header>
          <div className="linux-action__command-list">
            {checks.map(([key,title,detail],index)=><motion.div key={key} animate={{opacity:[.2,.2,1,1,.34],x:[-7,-7,0,0,2]}} transition={{...repeat,times:[0,.08+index*.075,.12+index*.075,.74,.95]}}><i>{index+1}</i><div><b>{title}</b><code>{detail}</code></div><em>{index<6?"✓":"!"}</em></motion.div>)}
          </div>
          <motion.span className="linux-action__cursor" animate={{top:[62,62,348,348],opacity:[0,1,1,0]}} transition={{...repeat,times:[.05,.09,.62,.69]}}>$</motion.span>
        </section>

        <aside className="linux-action__inspector">
          <section>
            <header><b>systemd unit</b><span>hexgate-api.service</span></header>
            <p><code>User=hexgate</code><b>UID 991</b></p>
            <p><code>WorkingDirectory=/srv/hexgate</code><b>exists</b></p>
            <p><code>Restart=on-failure</code><b>5 attempts</b></p>
            <p><code>ReadWritePaths=/srv/hexgate/cache</code><b>allowed</b></p>
          </section>
          <section>
            <header><b>filesystem</b><span>path walk</span></header>
            <div className="linux-action__path"><span>/</span><i>→</i><span>srv</span><i>→</i><span>hexgate</span><i>→</i><motion.b animate={{borderColor:["#33425a","#33425a","#f5c742","#f5c742","#33425a"],color:["#8798ae","#8798ae","#f5c742","#f5c742","#8798ae"]}} transition={{...repeat,times:[0,.5,.58,.82,1]}}>cache</motion.b></div>
            <div className="linux-action__mode"><small>owner</small><b>root</b><small>group</small><b>root</b><small>mode</small><b>0750</b></div>
            <motion.code animate={{opacity:[0,0,1,1,0]}} transition={{...repeat,times:[0,.55,.62,.85,1]}}>openat() = -1 EACCES</motion.code>
          </section>
        </aside>

        <motion.section className="linux-action__recovery" animate={{opacity:[0,0,1,1,0]}} transition={{...repeat,times:[0,.66,.72,.97,1]}}>
          <div><b>1 · corregir ownership</b><code>chown -R hexgate:hexgate /srv/hexgate/cache</code></div><i>→</i>
          <div><b>2 · validar como el servicio</b><code>sudo -u hexgate test -w …</code></div><i>→</i>
          <div><b>3 · restart controlado</b><code>systemctl restart hexgate-api</code></div><i>→</i>
          <div><b>4 · confirmar</b><code>ss · journalctl · curl /health</code></div>
        </motion.section>
      </div>

      <p className="system-action__takeaway">El 503 era solo el síntoma. DNS y firewall estaban sanos; systemd reveló un restart loop, journal mostró EACCES y el path walk confirmó ownership incorrecto. La reparación cambia una causa demostrada y luego verifica proceso, socket y experiencia externa.</p>
    </div>
  );
}
