# React Native (RN)

> **Nueva Arquitectura, dispositivo, offline, performance y releases.**

---

## Ficha Tecnica

| Parametro | Detalle |
| :--- | :--- |
| **Identificador Interno** | `react-native` |
| **Grupo Arquitectonico** | [Diseño e interfaces](Grupo-Interfaces) |
| **Ciclo de Vida** | `actual` |
| **Tema Visual** | `react-native` |
| **Total de Conceptos** | **80 conceptos** |
| **Capitulos / Secciones** | **7 secciones** |

### Acceso en la Aplicacion
- [Explorar en el Atlas Interactivo](https://luics415.github.io/Dev-Visualizer/react-native)
- [Modo Practico e Interactivo](https://luics415.github.io/Dev-Visualizer/react-native-en-accion)



---

## Catalogo Sistematico de Conceptos (80)

### Seccion: Arquitectura y runtime (11 conceptos)

- **Renderizado nativo**  
  *Familia:* `pipeline nativo`  
  Convierte elementos de React en vistas reales de iOS y Android, no en nodos del DOM.

- **Componentes base**  
  *Familia:* `traducción de primitivas`  
  View, Text, Image, ScrollView y otras primitivas se enlazan con controles de cada plataforma.

- **Nueva Arquitectura**  
  *Familia:* `anatomía del concepto`  
  Coordina Fabric, TurboModules, JSI y Codegen como base moderna del runtime de React Native.

- **Fabric**  
  *Familia:* `superficie de aplicación`  
  Implementa el renderer nativo moderno, calcula árboles y commits y coordina montaje con las plataformas.

- **TurboModules**  
  *Familia:* `ida y vuelta`  
  Carga módulos nativos de forma perezosa y con interfaces tipadas generadas.

- **JSI**  
  *Familia:* `flujo de ejecución`  
  Permite que JavaScript se comunique con objetos C++ y capacidades nativas sin serializar cada mensaje por un puente JSON.

- **Codegen**  
  *Familia:* `validación y decisión`  
  Genera interfaces nativas desde especificaciones tipadas para módulos y componentes.

- **Hermes**  
  *Familia:* `topología y tráfico`  
  Ejecuta JavaScript con un motor optimizado para aplicaciones React Native y herramientas de depuración integradas.

- **Metro**  
  *Familia:* `máquina de estados`  
  Resuelve módulos, transforma código y construye bundles para desarrollo y producción.

- **Hilos y colas de trabajo**  
  *Familia:* `cola y consumidor`  
  Distingue JavaScript, UI, render y trabajo nativo para evitar bloquear gestos o frames.

- **React Compiler en móvil**  
  *Familia:* `análisis y emisión`  
  Optimiza componentes y Hooks en build mediante memoización automática también en React Native.


### Seccion: Layout y presentación (13 conceptos)

- **StyleSheet**  
  *Familia:* `hoja de estilo`  
  Organiza estilos con objetos de JavaScript y referencias reutilizables.

- **Flexbox**  
  *Familia:* `distribución flexible`  
  Distribuye componentes en filas o columnas y adapta el diseño al espacio disponible.

- **Yoga y cálculo de layout**  
  *Familia:* `consulta e índice`  
  Resuelve tamaños y posiciones desde reglas Flexbox antes de montar la geometría nativa.

- **Unidades y densidad**  
  *Familia:* `tabla de estados`  
  Interpreta números como píxeles lógicos independientes de densidad y adapta recursos físicos.

- **useWindowDimensions y orientación**  
  *Familia:* `acumulación de recursos`  
  Recalcula ancho, alto y escala cuando cambia el espacio disponible.

- **Diseño responsivo**  
  *Familia:* `superficie de aplicación`  
  Combina flex, límites, breakpoints propios y composición para teléfonos, tablets y ventanas redimensionables.

- **Safe Area y teclado**  
  *Familia:* `zonas seguras`  
  Ajusta contenido alrededor de sensores, barras del sistema y teclado virtual.

- **KeyboardAvoidingView y gestión de foco**  
  *Familia:* `memoria intermedia`  
  Desplaza contenido y coordina scroll para que el campo activo permanezca visible.

- **Appearance y color scheme**  
  *Familia:* `anatomía del concepto`  
  Reacciona al tema claro, oscuro o configuración del sistema.

- **Código por plataforma**  
  *Familia:* `bifurcación de plataforma`  
  Selecciona archivos, valores o implementaciones específicos cuando iOS y Android difieren.

- **Text y tipografía**  
  *Familia:* `flujo de ejecución`  
  Controla jerarquía, escalado de fuente, truncado, selección y herencia dentro de componentes Text.

- **Fuentes personalizadas**  
  *Familia:* `configuración declarativa`  
  Empaqueta y carga familias tipográficas respetando nombres y configuración de cada plataforma.

- **Sombras, elevación y clipping**  
  *Familia:* `máquina de estados`  
  Distingue modelos de sombra y cómo overflow, borderRadius y elevación interactúan.


### Seccion: Interacción, gestos y medios (11 conceptos)

- **TextInput**  
  *Familia:* `circuito controlado`  
  Conecta teclado nativo, eventos y estado para campos controlados.

- **Pressable**  
  *Familia:* `máquina de pulsación`  
  Expone estados de pulsación y eventos onPressIn, onPressOut, onLongPress y onPress.

- **Responder System**  
  *Familia:* `contratos coordinados`  
  Negocia qué vista recibe un gesto cuando varias capas quieren responder.

- **Gestos complejos**  
  *Familia:* `flujo de transformación`  
  Combina pan, pinch, swipe y simultaneidad mediante librerías integradas con el hilo de UI.

- **Animated**  
  *Familia:* `árbol de recursos`  
  Modela valores animados y los conecta con propiedades compatibles para interpolar en el tiempo.

- **LayoutAnimation**  
  *Familia:* `consulta e índice`  
  Anima cambios globales de layout en el siguiente commit con una configuración declarativa.

- **Animaciones en el hilo de UI**  
  *Familia:* `tabla de estados`  
  Mantienen gestos y transformaciones fluidos mediante worklets o soluciones que evitan round trips por JavaScript.

- **Imágenes**  
  *Familia:* `pipeline de imagen`  
  Resuelve recursos locales o remotos, dimensiones, caché y decodificación.

- **ImageBackground, resizeMode y aspectRatio**  
  *Familia:* `jerarquía y dependencias`  
  Controla cómo una imagen llena su caja sin deformar el diseño.

- **Audio, video y cámara**  
  *Familia:* `ciclo de vida`  
  Integra capacidades multimedia mediante módulos del ecosistema y permisos nativos.

- **Haptics y feedback nativo**  
  *Familia:* `planificación de trabajo`  
  Añade vibración o respuesta táctil alineada con acciones significativas.


### Seccion: Listas y navegación (10 conceptos)

- **ScrollView y FlatList**  
  *Familia:* `ventana virtual`  
  Distingue render completo de una ventana virtual para colecciones grandes.

- **SectionList**  
  *Familia:* `ida y vuelta`  
  Virtualiza datos agrupados y conserva encabezados de sección.

- **Virtualización y windowing**  
  *Familia:* `propagación de eventos`  
  Monta una ventana alrededor del viewport y recicla trabajo conforme se desplaza.

- **Keys, getItemLayout y renderItem**  
  *Familia:* `comparativa técnica`  
  Estabiliza identidad, evita mediciones repetidas y reduce trabajo por fila.

- **Refresh y carga incremental**  
  *Familia:* `contratos coordinados`  
  Combina pull-to-refresh, estados de carga y onEndReached sin duplicar solicitudes.

- **Navegación**  
  *Familia:* `pila de pantallas`  
  Mantiene historial de pantallas y transiciones entre rutas.

- **Stacks, tabs y drawers**  
  *Familia:* `capas internas`  
  Componen patrones de navegación con estados y ciclos de vida distintos.

- **Parámetros y tipos de rutas**  
  *Familia:* `árbol de recursos`  
  Transportan identificadores serializables y pueden comprobarse con TypeScript.

- **Deep links y universal links**  
  *Familia:* `ecosistema coordinado`  
  Transforman URLs externas en rutas internas y verifican dominios asociados.

- **Estado de navegación y restauración**  
  *Familia:* `secuencia operativa`  
  Persiste la ruta actual cuando aporta valor y evita restaurar flujos inválidos.


### Seccion: Sistema operativo y dispositivo (10 conceptos)

- **Permisos**  
  *Familia:* `diálogo del sistema`  
  Solicita capacidades protegidas y adapta la experiencia a concedido, denegado o bloqueado.

- **Linking y apertura de aplicaciones**  
  *Familia:* `diagnóstico operativo`  
  Abre URLs, teléfono, correo, ajustes u otras apps mediante esquemas soportados.

- **AppState**  
  *Familia:* `máquina de estados`  
  Observa si la app está activa, en background o transicionando para pausar y reanudar trabajo.

- **Notificaciones push**  
  *Familia:* `secuencia operativa`  
  Conecta token del dispositivo, proveedor remoto, payload del sistema y navegación al abrir.

- **Tareas en background**  
  *Familia:* `comparativa técnica`  
  Ejecutan trabajo limitado bajo políticas del sistema, no como procesos permanentes libres.

- **Geolocalización**  
  *Familia:* `flujo de transformación`  
  Obtiene posición con precisión y coste energético variables, sujeto a permisos y ciclo de vida.

- **Share y clipboard**  
  *Familia:* `aislamiento sobre host`  
  Intercambian texto o archivos con otras apps usando hojas y servicios del sistema.

- **Accesibilidad**  
  *Familia:* `superficie de aplicación`  
  Expone roles, nombres, estados, acciones y orden comprensible a VoiceOver y TalkBack.

- **Anuncios y foco accesible**  
  *Familia:* `ida y vuelta`  
  Comunica cambios importantes y mueve foco solo cuando la tarea lo requiere.

- **Internacionalización y RTL**  
  *Familia:* `topología y tráfico`  
  Adapta texto, formatos, dirección, imágenes y layout a idioma y cultura.


### Seccion: Datos, offline y seguridad (9 conceptos)

- **Peticiones de red**  
  *Familia:* `cliente servidor`  
  Envía solicitudes HTTP y actualiza estado sin bloquear la interfaz.

- **Timeouts y cancelación**  
  *Familia:* `ciclo de vida`  
  Cancela fetch y trabajo dependiente cuando cambia una pantalla o vence el presupuesto.

- **Persistencia local**  
  *Familia:* `memoria persistente`  
  Guarda datos fuera de la memoria del componente y los recupera en otra sesión.

- **Almacenamiento seguro**  
  *Familia:* `configuración declarativa`  
  Protege tokens o secretos pequeños usando servicios cifrados del sistema operativo.

- **Offline-first**  
  *Familia:* `propagación de eventos`  
  Mantiene una copia local, registra cambios y sincroniza cuando regresa la conectividad.

- **Caché de datos**  
  *Familia:* `memoria intermedia`  
  Evita solicitudes repetidas y decide frescura, invalidación y revalidación.

- **Estado global**  
  *Familia:* `secuencia operativa`  
  Comparte sesión o dominio entre pantallas mediante contexto o stores, sin globalizar estado efímero.

- **Seguridad de red**  
  *Familia:* `topología y tráfico`  
  Usa HTTPS, validación del servidor, almacenamiento seguro y políticas de autenticación defensivas.

- **Biometría**  
  *Familia:* `análisis y emisión`  
  Solicita autenticación local para desbloquear una acción o secreto, sin sustituir la identidad del backend.


### Seccion: Calidad, performance y entrega (16 conceptos)

- **React Native DevTools**  
  *Familia:* `acumulación de recursos`  
  Inspecciona componentes, props, estado, red y rendimiento con herramientas integradas al runtime Hermes.

- **Fast Refresh**  
  *Familia:* `capas internas`  
  Actualiza módulos durante desarrollo intentando preservar estado compatible.

- **Performance de frames**  
  *Familia:* `árbol de recursos`  
  Mide si los hilos JS y UI cumplen el presupuesto de cada frame durante interacción.

- **Arranque y tiempo a interacción**  
  *Familia:* `planificación de trabajo`  
  Reduce trabajo, módulos, fuentes y datos requeridos antes de mostrar una pantalla útil.

- **Memoria e imágenes**  
  *Familia:* `memoria intermedia`  
  Controla tamaño de bitmaps, cachés, listas y referencias que pueden provocar presión o terminación.

- **Logging, crashes y observabilidad**  
  *Familia:* `evidencia y latencia`  
  Conecta errores, breadcrumbs, versiones y métricas para reconstruir fallos reales.

- **Pruebas unitarias y de componentes**  
  *Familia:* `diagnóstico operativo`  
  Verifican lógica y comportamiento de UI con mocks mínimos de APIs nativas.

- **Pruebas end-to-end**  
  *Familia:* `configuración declarativa`  
  Ejecutan la aplicación compilada y automatizan recorridos críticos sobre simuladores o dispositivos.

- **Módulos nativos propios**  
  *Familia:* `análisis y emisión`  
  Implementan capacidades no disponibles en JavaScript mediante specs, Codegen y código de plataforma.

- **Componentes nativos propios**  
  *Familia:* `aislamiento sobre host`  
  Exponen vistas de plataforma como componentes React con props, eventos y comandos tipados.

- **Expo y Community CLI**  
  *Familia:* `ecosistema coordinado`  
  Representan flujos de proyecto distintos para acceder a servicios, builds y personalización nativa.

- **Configuración por entornos**  
  *Familia:* `contratos coordinados`  
  Separa endpoints, flags y capacidades por build sin introducir secretos en JavaScript.

- **Builds, signing y releases**  
  *Familia:* `flujo de transformación`  
  Compila artefactos, aplica certificados o keystores y distribuye por canales de prueba y tiendas.

- **Actualizaciones OTA**  
  *Familia:* `jerarquía y dependencias`  
  Entrega cambios de JavaScript y assets compatibles sin reemplazar binarios nativos, según políticas de plataforma.

- **CI/CD móvil**  
  *Familia:* `tabla de estados`  
  Automatiza lint, pruebas, builds, firma protegida, distribución y publicación.

- **Actualizaciones de React Native**  
  *Familia:* `propagación de eventos`  
  Planifican saltos de versión, cambios nativos, dependencias y pruebas sobre ambas plataformas.



## Referencias Bibliograficas y Documentacion Oficial
- **[Get Started with React Native](https://reactnative.dev/docs/environment-setup)** (`tutorial` | Nivel: `beginner`): 
- **[Learn the Basics](https://reactnative.dev/docs/tutorial)** (`tutorial` | Nivel: `intermediate`): 
- **[React Native Architecture Overview](https://reactnative.dev/architecture/overview)** (`reference` | Nivel: `advanced`): 


---
[<- Volver al Inicio](Home) | [Ver Grupo: Diseño e interfaces](Grupo-Interfaces) | [Indice Maestro ->](Indice-Maestro-7410-Conceptos)
