# Dev Visualizer

Atlas visual animado para aprender desarrollo de software desde los fundamentos hasta producción.

**71 colecciones · 142 rutas canónicas · 4,447 conceptos · 71 casos integrados · 71 bibliotecas**

<p align="center">
  <a href="https://luics415.github.io/Dev-Visualizer/"><strong>Abrir Dev Visualizer</strong></a>
  ·
  <a href="https://luics415.github.io/Dev-Visualizer/colecciones/">Explorar las 71 colecciones</a>
  ·
  <a href="https://luics415.github.io/Dev-Visualizer/libreria/">Librería profesional</a>
  ·
  <a href="https://luics415.github.io/Dev-Visualizer/acerca/">Acerca del proyecto</a>
</p>

<p align="center">
  <img src="public/social/luics415-dev-visualizer-github-1280x640.jpg" alt="Tarjeta social de Dev Visualizer con la firma de Luics415 y un atlas luminoso de conceptos de desarrollo" width="100%" />
  <br /><sub>Tarjeta Open Graph oficial del proyecto.</sub>
</p>

Dev Visualizer transforma mecanismos técnicos en escenas autónomas: cada concepto hace visibles la entrada, la transformación interna, el resultado y la conclusión. Cada colección tiene además un caso **En acción** con fronteras, fallo, recuperación y evidencia verificable.

## Vista del producto

<table>
  <tr>
    <td width="66%">
      <img src="docs/screenshots/colecciones-desktop.png" alt="Biblioteca de Dev Visualizer en escritorio con el banner del ancla y el catálogo de colecciones" />
      <br /><sub>Biblioteca completa en escritorio.</sub>
    </td>
    <td width="34%">
      <img src="docs/screenshots/colecciones-mobile.png" alt="Biblioteca de Dev Visualizer en una pantalla móvil" />
      <br /><sub>Catálogo responsive a 390 × 844.</sub>
    </td>
  </tr>
  <tr>
    <td width="66%">
      <img src="docs/screenshots/python-action-desktop.png" alt="Python En acción con una escena animada del runtime, fallo y recuperación" />
      <br /><sub>Python En acción: runtime, cuarentena y reanudación.</sub>
    </td>
    <td width="34%">
      <img src="docs/screenshots/mediapipe-action-mobile.png" alt="MediaPipe En acción en móvil con el pipeline de percepción" />
      <br /><sub>MediaPipe En acción con desplazamiento local.</sub>
    </td>
  </tr>
</table>

Las capturas documentan una compilación real del proyecto y forman parte del contenido original licenciado bajo [CC BY-NC-SA 4.0](LICENSE-CONTENT.md).

## Qué distingue al atlas

- **Causalidad antes que decoración.** El movimiento representa datos, memoria, mensajes, control, ownership o evidencia.
- **Dos niveles por tecnología.** La colección explica conceptos; **En acción** conecta un caso técnico completo sin repetir la bibliografía de estudio.
- **Fuente primaria por concepto.** Los 4,447 conceptos resuelven al menos dos referencias oficiales o especificaciones visibles.
- **Tres destinos por tecnología.** Colección visual, caso **En acción** y Librería profesional permanecen separados y conectados.
- **Escenas que no terminan apagadas.** Los loops conservan un estado base legible, regresan semánticamente al inicio y se pausan fuera del viewport.
- **Accesibilidad como contrato.** Teclado, foco visible, estados no dependientes solo del color, vista estática para movimiento reducido y overflow local en escenas extensas.
- **Fronteras tecnológicas explícitas.** Git no es GitHub; CI/CD no es Deployment; Python no es MediaPipe; XML, XSD y JSON tienen responsabilidades y rutas separadas.

## Catálogo

| Área | Colecciones |
|---|---|
| Fundamentos | Fundamentos de programación, Algoritmos y estructuras de datos, Matemáticas, Metodologías y Scratch |
| Lenguajes | JavaScript, TypeScript, Python, Prolog, familia C, Visual Basic, Ruby, Rust, PHP, Haskell, Go, Kotlin, Java, R, Ensamblador, Erlang, Lisp, Perl, Raku y Scala |
| Diseño e interfaces | UX/UI, HTML y CSS, Bootstrap, AngularJS, Angular, React, React Native y Qwik |
| Plataformas y servidor | APIs, Backend, Node.js, Laravel, Django, n8n, .NET, MediaPipe, Firebase y Android |
| Datos | XML, XSD, JSON, Gestión de estado, Bases de datos, SQL, SQL Server, NoSQL, Blockchain e Inteligencia Artificial |
| Control de versiones y calidad | Git, GitHub, Subversion y Debugging |
| Infraestructura y entrega | Linux, Sistemas operativos, AWS, CI/CD, Deployment, NGINX, Docker y LaTeX |

Cada colección dispone de tres destinos independientes:

```text
/<colección>
/<colección>-en-accion
/libreria/<colección>
```

Las antiguas URLs `/git-github*`, `/apis-rest*` y `/xml-xsd-json*` se conservan como seis puentes accesibles. No cuentan como colecciones ni cambian la identidad de las nuevas rutas.

### Rutas de estudio ampliadas

| Colección | Capítulos | Conceptos | Alcance |
|---|---:|---:|---|
| Python | 48 | 240 | Desde algoritmo, terminal y sintaxis hasta internals, concurrencia, web, datos, IA, seguridad y operación |
| MediaPipe | 24 | 120 | Tasks, modelos, running modes, grafos, visión, audio, texto, edge, rendimiento y uso responsable |
| XML | 22 | 110 | Documentos, namespaces, parsing seguro, XPath, XSLT, catálogos, firma y evolución |
| XSD | 20 | 100 | Tipos, facets, identidad, composición, assertions, PSVI, compatibilidad y conformidad |
| JSON | 22 | 110 | Sintaxis, JSON Schema, Pointer, Patch, precisión, seguridad, canonicalización y operación |
| Prolog | 24 | 120 | Desde términos y unificación hasta CLP(FD), tabling, depuración, concurrencia e integración |
| Microsoft SQL Server | 24 | 120 | T-SQL, almacenamiento, planes, transacciones, seguridad, continuidad y operación |
| AWS | 18 | 228 | Nube, identidad, red, compute, datos y seis recorridos nuevos derivados de apuntes de arquitectura y operación |

Python incluye documentación oficial para personas principiantes y avanza de forma progresiva. MediaPipe usa Python en su caso práctico, pero mantiene currículo, fuentes, ruta y escena propios. Del mismo modo, XML define documentos, XSD define schemas XML y JSON define una sintaxis de valores; una colección no sustituye a las otras.

## Librería profesional

La Librería profesional ofrece un índice accesible y una ruta estática por colección. Cada tema separa documentación oficial y especificaciones de libros, cursos y referencias comunitarias. La invitación aparece después de la ruta de estudio y antes del capítulo 1; las animaciones y páginas **En acción** no contienen fichas bibliográficas.

El catálogo inicial acredita a [midudev/libros-programacion-gratis](https://github.com/midudev/libros-programacion-gratis) y [librosgratis.dev](https://librosgratis.dev/) como fuente de descubrimiento de **179 recursos en 42 temas**. Dev Visualizer añade bibliotecas para las 29 colecciones restantes, usa textos y diseño propios y conserva la autoría de cada recurso.

Los adjuntos siguen una política híbrida: solo se aloja localmente un archivo con licencia o autorización de redistribución verificable. Los demás aparecen como enlaces externos con procedencia y estado de preservación. Un workflow mensual produce un informe no bloqueante de disponibilidad.

## Narrativa En acción

Las 56 colecciones incorporadas mediante el registro escalable usan escenas configuradas por mecanismo. Las 30 rutas nuevas suman diez gramáticas visuales —rutas, grafos, campos, escenarios, pipelines, forjas, canales, runtimes, registros y manuscritos— sin terminar en gris ni romper la identidad del atlas. Entre las escenas previas se conservan la mesa forense de C, la estación de ownership de C++, el switchboard de Objective-C, la cuadrícula térmica de C*, el libro-telar de CWEB, el osciloscopio de Embedded C, el árbol de prueba de Prolog y el patio ferroviario de SQL Server.

Los guiños a League of Legends y Arcane se limitan a microcopy original y referencias ambientales. No se usan personajes, audio, logotipos, mapas ni recursos de Riot Games, y no se sugiere afiliación.

## Arquitectura

El sitio utiliza Next.js App Router, React, TypeScript y Motion. `output: "export"` produce HTML, CSS y JavaScript estáticos para GitHub Pages.

```text
src/data/collectionManifest.ts
  └─ identidad, orden, grupo, rutas, biblioteca, tema y vigencia

src/data/libraryTopics.ts
  └─ identidad ligera y relación obligatoria de las 71 bibliotecas

src/data/professionalLibrary.ts + libraryResources.snapshot.json
  └─ 179 recursos importados, fuentes oficiales, procedencia y licencias

src/data/expandedCollections.ts
  └─ registro de primers, capítulos, conceptos y casos ampliados

src/data/officialReferences.ts
  └─ autoridades, versiones y resolución de referencias por concepto

src/data/catalogValidation.ts
  └─ invariantes de 71 colecciones y 4,447 conceptos

src/app/[slug]/page.tsx
  └─ 112 rutas expandidas generadas con parámetros cerrados

src/app/libreria/[tema]/page.tsx
  └─ 71 bibliotecas generadas con parámetros cerrados

src/components/visual/useScenePlayback.ts
  └─ viewport, visibilidad de pestaña y movimiento reducido
```

Las 30 rutas especializadas originales se conservan. Los índices del cliente reciben únicamente manifiestos ligeros y estadísticas calculadas; no importan los módulos educativos grandes.

Más contexto:

- [Arquitectura](docs/ARCHITECTURE.md)
- [Guía editorial](docs/CONTENT_GUIDE.md)
- [Política de Librería profesional](docs/LIBRARY_POLICY.md)
- [Sistema visual](docs/VISUAL_SYSTEM.md)
- [Roadmap](docs/ROADMAP.md)
- [Publicación](docs/DEPLOYMENT.md)

## Desarrollo local

Requisitos: Node.js 24 y npm.

```bash
npm ci
npm run dev
```

Validación completa:

```bash
npm run check
```

`npm run check` ejecuta ESLint, TypeScript estricto, validación del catálogo bibliográfico, exportación estática y comprobación de enlaces internos. La compilación produce **225 páginas HTML**: 142 canónicas, 72 de Librería profesional, seis puentes heredados y cinco páginas de soporte.

### Evidencia de calidad

| Control | Resultado esperado |
|---|---|
| Catálogo | 71/71 colecciones y 71/71 bibliotecas; IDs, rutas y slugs únicos |
| Currículo | 4,447/4,447 conceptos con capítulo y escena efectiva |
| Fuentes | 4,447/4,447 conceptos con al menos dos referencias primarias |
| Recursos | 179/179 fichas atribuidas en 42 temas de origen |
| Casos | 71/71 pares colección / En acción con profundización |
| Exportación | 225 páginas estáticas y cero enlaces internos rotos |
| Responsive | Sin overflow global; escenas anchas usan scroll local |
| Movimiento | Loop infinito visible, pausa fuera del viewport y estado completo con `prefers-reduced-motion` |

## Añadir o modificar una colección

1. Registrar identidad, grupo, rutas, slug de librería, tema, vigencia y resumen en `collectionManifest.ts`.
2. Crear primer, capítulos, conceptos y caso integrado en un módulo de datos.
3. Incorporar la definición al registro de servidor `expandedCollections.ts`.
4. Resolver fuentes oficiales, especificaciones, versión y fecha de verificación en `officialReferences.ts`.
5. Implementar una escena que represente el mecanismo y cierre su loop con un resultado legible.
6. Crear o actualizar su biblioteca con procedencia y licencia verificables.
7. Ejecutar `npm run check` y validar escritorio, 390 × 844, teclado, tacto, movimiento reducido, overflow y consola.

Las validaciones de build rechazan IDs o rutas duplicados, capítulos vacíos, conceptos sin escena, cobertura documental incompleta y casos sin etapas.

## Publicación y mantenimiento

`.github/workflows/deploy-pages.yml` construye y publica `out/` después de cada actualización de `main`. El workflow calcula `basePath` y `NEXT_PUBLIC_SITE_URL` para que rutas, recursos y metadatos funcionen bajo `/Dev-Visualizer/`.

Las versiones activas se revisan contra fuentes primarias al cerrar cada expansión. Las tecnologías legadas o históricas muestran un aviso visible con contexto y alternativas. Dev Visualizer es material educativo: no reemplaza documentación oficial, evaluación profesional ni guías de seguridad específicas de un entorno productivo.

## Autoría, créditos y licencias

| Alcance | Licencia / condición |
|---|---|
| Código fuente | [MIT](LICENSE) |
| Textos educativos, diagramas, escenas, identidad visual y capturas | [CC BY-NC-SA 4.0](LICENSE-CONTENT.md) |
| Dependencias npm | Licencia declarada por cada paquete |
| Documentación enlazada y especificaciones | Propiedad y términos de sus respectivas autoridades |
| Libros y recursos de la Librería profesional | Propiedad de sus autores; adjunto local únicamente con permiso verificable |
| Marcas, nombres y tecnologías citadas | Propiedad de sus titulares; uso nominativo y educativo |

- Dirección, autoría y mantenimiento: **Luics415**.
- Desarrollo y diseño visual: **Sharol (Azlynn)**.
- Asistencia de IA acreditada: **OpenAI ChatGPT**.
- Inspiración narrativa general: [AlgoInsight](https://www.instagram.com/algoinsight/), sin copiar publicaciones, textos, marcas ni recursos.

Consulta [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) para atribuciones, independencia legal y avisos de terceros.
