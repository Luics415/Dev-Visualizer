"use client";

import { motion } from "motion/react";

const LOOP = 10;
const T = { duration: LOOP, repeat: Infinity } as const;

export function NativeRenderingScene() {
  return (
    <div className="scene rn-native-rendering" aria-label="JSX se convierte en un árbol de React, Fabric calcula cambios y las plataformas muestran vistas nativas">
      <div className="scene-code">&lt;View&gt;&lt;Text&gt;Hola&lt;/Text&gt;&lt;/View&gt;</div>
      <div className="rn-render-pipeline">
        {[
          ["JSX", "descripción"],
          ["React tree", "cálculo"],
          ["Fabric", "commit"],
          ["UIView / View", "nativo"],
        ].map(([label, note], index) => (
          <motion.div
            key={label}
            animate={{ opacity: [.25, .25, 1, 1, .25], scale: [.96, .96, 1.03, 1, .96] }}
            transition={{ ...T, times: [0, .12 + index * .15, .2 + index * .15, .33 + index * .15, .42 + index * .15] }}
          ><b>{label}</b><small>{note}</small></motion.div>
        ))}
        <motion.i animate={{ x: [0, 0, 204, 204], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.08, .16, .78, .9] }} />
      </div>
      <p className="scene-caption">No se crea DOM: el commit termina actualizando controles reales de iOS o Android.</p>
    </div>
  );
}

export function CoreComponentsScene() {
  return (
    <div className="scene rn-core-components" aria-label="View, Text e Image se traducen a componentes nativos equivalentes">
      <div className="scene-code">&lt;View&gt;&lt;Text /&gt;&lt;Image /&gt;&lt;/View&gt;</div>
      <div className="rn-component-translation">
        <div className="rn-component-translation__react">
          <b>React Native</b><span>View</span><span>Text</span><span>Image</span>
        </div>
        <div className="rn-component-translation__os">
          <b>Plataforma</b>
          <motion.span animate={{ opacity: [.2, 1, 1, .2] }} transition={{ ...T, times: [.12, .23, .78, .9] }}>UIView / ViewGroup</motion.span>
          <motion.span animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ ...T, times: [0, .25, .36, .78, .9] }}>UILabel / TextView</motion.span>
          <motion.span animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ ...T, times: [0, .38, .49, .78, .9] }}>UIImageView / ImageView</motion.span>
        </div>
        <motion.i animate={{ x: [0, 0, 74, 74], y: [0, 0, 58, 58], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.13, .2, .68, .84] }} />
      </div>
      <p className="scene-caption">Las primitivas comparten una API, pero su representación final pertenece a cada sistema.</p>
    </div>
  );
}

export function StyleSheetScene() {
  return (
    <div className="scene rn-stylesheet" aria-label="StyleSheet organiza un objeto de estilos y lo aplica a una vista nativa">
      <div className="scene-code">{"StyleSheet.create({ card: { padding: 16 } })"}</div>
      <div className="rn-style-lab">
        <div className="rn-style-lab__source"><small>card</small><span>padding: 16</span><span>borderRadius: 12</span><span>backgroundColor</span></div>
        <div className="rn-style-lab__compiler">StyleSheet<small>registro</small></div>
        <motion.div className="rn-style-lab__preview" animate={{ padding: [5, 5, 16, 16, 5], borderRadius: [4, 4, 12, 12, 4] }} transition={{ ...T, times: [0, .28, .43, .84, 1] }}><b>Card</b><span>Vista nativa</span></motion.div>
        <motion.i animate={{ x: [0, 0, 110, 110], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.18, .26, .68, .83] }}>style</motion.i>
      </div>
      <p className="scene-caption">El estilo sigue siendo JavaScript, pero describe propiedades que la capa nativa interpreta.</p>
    </div>
  );
}

export function FlexboxScene() {
  return (
    <div className="scene rn-flexbox" aria-label="Flexbox distribuye tres elementos primero en columna y después en fila">
      <div className="scene-code">flexDirection: &quot;row&quot; · justifyContent: &quot;space-between&quot;</div>
      <motion.div
        className="rn-flex-stage"
        animate={{ flexDirection: ["column", "column", "row", "row", "column"], justifyContent: ["center", "center", "space-between", "space-between", "center"] }}
        transition={{ ...T, times: [0, .32, .48, .84, 1] }}
      >
        {["A", "B", "C"].map((item, index) => <motion.span key={item} animate={{ scale: [1, 1, 1.08, 1, 1] }} transition={{ ...T, times: [0, .4 + index * .04, .46 + index * .04, .7, 1] }}>{item}</motion.span>)}
      </motion.div>
      <motion.div className="rn-flex-axis" animate={{ rotate: [90, 90, 0, 0, 90] }} transition={{ ...T, times: [0, .32, .48, .84, 1] }}><i /></motion.div>
      <p className="scene-caption">El eje principal decide la dirección; alineación y distribución resuelven el espacio restante.</p>
    </div>
  );
}

export function TextInputScene() {
  return (
    <div className="scene rn-text-input" aria-label="El teclado nativo produce texto, onChangeText actualiza el estado y el valor vuelve al campo controlado">
      <div className="scene-code">{"<TextInput value={name} onChangeText={setName} />"}</div>
      <div className="rn-input-loop">
        <div className="rn-input-loop__keyboard">teclado<small>J · i · n · x</small></div>
        <div className="rn-input-loop__handler">onChangeText</div>
        <div className="rn-input-loop__state">state<small>name</small><motion.b animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .43, .54, .86, 1] }}>&quot;Jinx&quot;</motion.b></div>
        <div className="rn-input-loop__field"><span>Nombre</span><motion.b animate={{ width: [0, 0, 42, 42, 0] }} transition={{ ...T, times: [0, .58, .72, .9, 1] }}>Jinx</motion.b></div>
        <motion.i animate={{ offsetDistance: ["0%", "0%", "100%", "100%"], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.08, .16, .78, .9] }} />
      </div>
      <p className="scene-caption">El campo nativo emite texto; React conserva la fuente de verdad y devuelve el nuevo value.</p>
    </div>
  );
}

export function PressableScene() {
  return (
    <div className="scene rn-pressable" aria-label="Pressable cambia a pressed durante el contacto y ejecuta onPress al completar la pulsación">
      <div className="scene-code">{"<Pressable style={({ pressed }) => ...} onPress={save} />"}</div>
      <div className="rn-press-machine">
        <motion.button
          type="button"
          tabIndex={-1}
          animate={{ scale: [1, 1, .94, .94, 1, 1], opacity: [1, 1, .72, .72, 1, 1] }}
          transition={{ ...T, times: [0, .2, .31, .52, .62, 1] }}
        >Guardar</motion.button>
        <div className="rn-press-machine__states">
          {[["idle", .08], ["pressIn", .27], ["pressed", .4], ["pressOut", .56], ["onPress", .68]].map(([label, time]) => (
            <motion.span key={label} animate={{ opacity: [.2, .2, 1, 1, .2] }} transition={{ ...T, times: [0, Number(time) - .025, Number(time), Number(time) + .07, Number(time) + .11] }}>{label}</motion.span>
          ))}
        </div>
        <motion.b animate={{ opacity: [0, 0, 1, 1, 0], y: [5, 5, 0, 0, -4] }} transition={{ ...T, times: [0, .65, .72, .88, 1] }}>✓ guardado</motion.b>
      </div>
      <p className="scene-caption">Pressable expone el ciclo completo, no solo un clic abstracto.</p>
    </div>
  );
}

export function ImagesScene() {
  return (
    <div className="scene rn-images" aria-label="Una URI remota se resuelve, descarga, decodifica y termina dentro de un Image nativo">
      <div className="scene-code">{'<Image source={{ uri }} resizeMode="cover" />'}</div>
      <div className="rn-image-loader">
        <div className="rn-image-loader__uri">https://…/jinx.png</div>
        <div className="rn-image-loader__network">red<small>bytes</small></div>
        <div className="rn-image-loader__decode">decode<small>bitmap</small></div>
        <div className="rn-image-loader__frame"><motion.div animate={{ opacity: [0, 0, 1, 1, 0], scale: [.9, .9, 1.05, 1, .9] }} transition={{ ...T, times: [0, .52, .66, .9, 1] }}>IMG</motion.div></div>
        <motion.i animate={{ x: [0, 0, 194, 194], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.12, .2, .72, .86] }} />
      </div>
      <p className="scene-caption">El componente coordina fuente, carga, decodificación y ajuste dentro del rectángulo final.</p>
    </div>
  );
}

export function VirtualizedListScene() {
  const items = ["01", "02", "03", "04", "05", "06"];
  return (
    <div className="scene rn-virtual-list" aria-label="FlatList desplaza una ventana de cuatro filas y recicla elementos fuera de pantalla">
      <div className="scene-code">{"<FlatList data={items} renderItem={renderItem} />"}</div>
      <div className="rn-list-window">
        <div className="rn-list-window__track">
          {items.map((item, index) => <motion.div key={item} animate={{ y: [0, 0, -74, -74, 0], opacity: index < 4 ? [1, 1, index < 2 ? .12 : 1, 1, 1] : [.12, .12, 1, 1, .12] }} transition={{ ...T, times: [0, .32, .52, .84, 1] }}><i>key {item}</i><b>Item {item}</b></motion.div>)}
        </div>
        <span>viewport</span>
      </div>
      <div className="rn-list-memory"><small>montados</small><motion.b animate={{ opacity: [1, 1, 0, 0, 1] }} transition={{ ...T, times: [0, .35, .5, .85, 1] }}>01 · 02 · 03 · 04</motion.b><motion.b animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .35, .5, .85, 1] }}>03 · 04 · 05 · 06</motion.b></div>
      <p className="scene-caption">FlatList mantiene una ventana útil; no necesita montar toda la colección al mismo tiempo.</p>
    </div>
  );
}

export function NavigationScene() {
  return (
    <div className="scene rn-navigation" aria-label="La navegación agrega Details sobre Home y luego retira la pantalla superior al regresar">
      <div className="scene-code">navigation.navigate(&quot;Details&quot;) · navigation.goBack()</div>
      <div className="rn-nav-stack">
        <motion.div className="rn-nav-stack__screen rn-nav-stack__home" animate={{ x: [0, 0, -22, -22, 0], scale: [1, 1, .94, .94, 1] }} transition={{ ...T, times: [0, .25, .4, .78, 1] }}>Home<small>route 1</small></motion.div>
        <motion.div className="rn-nav-stack__screen rn-nav-stack__details" animate={{ x: [190, 190, 0, 0, 190], opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .25, .42, .78, 1] }}>Details<small>route 2</small></motion.div>
        <motion.span animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .38, .48, .72, .82] }}>Home → Details</motion.span>
      </div>
      <p className="scene-caption">La pila conserva historial y estado mientras la pantalla superior ocupa el frente.</p>
    </div>
  );
}

export function SafeAreaKeyboardScene() {
  return (
    <div className="scene rn-safe-keyboard" aria-label="El contenido respeta la zona segura y se eleva cuando aparece el teclado">
      <div className="scene-code">SafeAreaView + KeyboardAvoidingView</div>
      <div className="rn-phone-frame">
        <div className="rn-phone-frame__notch" />
        <motion.div className="rn-phone-frame__content" animate={{ y: [0, 0, -48, -48, 0] }} transition={{ ...T, times: [0, .34, .5, .82, 1] }}><b>Formulario</b><span>email</span><span>mensaje</span><i>Enviar</i></motion.div>
        <motion.div className="rn-phone-frame__keyboard" animate={{ y: [86, 86, 0, 0, 86] }} transition={{ ...T, times: [0, .34, .5, .82, 1] }}><span>Q W E R T Y</span><span>A S D F G H</span></motion.div>
        <div className="rn-phone-frame__safe">safe area</div>
      </div>
      <p className="scene-caption">El layout responde a zonas reservadas por hardware, barras del sistema y teclado.</p>
    </div>
  );
}

export function PlatformScene() {
  return (
    <div className="scene rn-platform" aria-label="Platform.select dirige una configuración a iOS y otra a Android">
      <div className="scene-code">{"Platform.select({ ios: styles.ios, android: styles.android })"}</div>
      <div className="rn-platform-router">
        <div className="rn-platform-router__source">Platform.OS</div>
        <div className="rn-platform-router__switch">select()</div>
        <motion.div className="rn-platform-router__target rn-platform-router__target--ios" animate={{ opacity: [.25, 1, 1, .25, .25] }} transition={{ ...T, times: [.08, .18, .42, .52, 1] }}>iOS<small>shadowOpacity</small></motion.div>
        <motion.div className="rn-platform-router__target rn-platform-router__target--android" animate={{ opacity: [.25, .25, 1, 1, .25] }} transition={{ ...T, times: [0, .52, .62, .86, .96] }}>Android<small>elevation</small></motion.div>
        <motion.i animate={{ y: [0, 0, -42, -42, 42, 42], x: [0, 0, 86, 86, 86, 86], opacity: [0, 1, 1, 0, 1, 0] }} transition={{ ...T, times: [.08, .16, .42, .52, .66, .9] }} />
      </div>
      <p className="scene-caption">Se comparte la intención y se especializa solo la parte que cada plataforma necesita.</p>
    </div>
  );
}

export function PermissionsScene() {
  return (
    <div className="scene rn-permissions" aria-label="La aplicación solicita permiso de cámara y continúa por la ruta concedida o rechazada">
      <div className="scene-code">const status = await request(CAMERA)</div>
      <div className="rn-permission-flow">
        <div className="rn-permission-flow__app">App<small>usar cámara</small></div>
        <motion.div className="rn-permission-flow__dialog" animate={{ opacity: [0, 0, 1, 1, 0], scale: [.92, .92, 1, 1, .92] }} transition={{ ...T, times: [0, .2, .33, .72, .82] }}><b>Sistema</b><span>¿Permitir cámara?</span><i>Rechazar</i><em>Permitir</em></motion.div>
        <motion.div className="rn-permission-flow__granted" animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .66, .76, .9, 1] }}>granted → abrir cámara</motion.div>
        <motion.i animate={{ y: [0, 0, 70, 70], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.08, .18, .54, .68] }} />
      </div>
      <p className="scene-caption">La API del sistema decide; la app debe modelar todas las respuestas posibles.</p>
    </div>
  );
}

export function NetworkingScene() {
  return (
    <div className="scene rn-networking" aria-label="Una petición sale de la aplicación, llega a una API, regresa como JSON y actualiza el estado">
      <div className="scene-code">const data = await fetch(url).then(r =&gt; r.json())</div>
      <div className="rn-network-map">
        <div className="rn-network-map__phone">App<small>loading</small></div>
        <div className="rn-network-map__api">API<small>/missions</small></div>
        <div className="rn-network-map__state">state<small>missions[]</small></div>
        <span className="rn-network-map__rail rn-network-map__rail--request">GET</span>
        <span className="rn-network-map__rail rn-network-map__rail--response">JSON</span>
        <motion.i animate={{ offsetDistance: ["0%", "0%", "100%", "100%"], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.08, .16, .76, .88] }} />
        <motion.b animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .64, .74, .9, 1] }}>3 cards renderizadas</motion.b>
      </div>
      <p className="scene-caption">La red ocurre de forma asíncrona; la interfaz puede renderizar carga, éxito o error.</p>
    </div>
  );
}

export function PersistenceScene() {
  return (
    <div className="scene rn-persistence" aria-label="La aplicación serializa un tema, lo guarda, cierra la sesión y lo recupera al iniciar de nuevo">
      <div className="scene-code">await storage.setItem(&quot;theme&quot;, JSON.stringify(theme))</div>
      <div className="rn-storage-cycle">
        <div className="rn-storage-cycle__memory">state<small>{`{ theme: "dark" }`}</small></div>
        <div className="rn-storage-cycle__disk">storage<small>theme → &quot;dark&quot;</small></div>
        <div className="rn-storage-cycle__restart">reinicio<small>memoria vacía</small></div>
        <motion.span animate={{ x: [0, 0, 108, 108], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.08, .16, .42, .52] }}>setItem</motion.span>
        <motion.b animate={{ x: [0, 0, -108, -108], opacity: [0, 1, 1, 0] }} transition={{ ...T, times: [.56, .64, .86, .96] }}>getItem</motion.b>
        <motion.i animate={{ opacity: [0, 0, 1, 1, 0] }} transition={{ ...T, times: [0, .72, .82, .94, 1] }}>tema restaurado</motion.i>
      </div>
      <p className="scene-caption">El estado del componente desaparece al cerrar; la persistencia permite hidratarlo después.</p>
    </div>
  );
}
