# Dev Visualizer

Atlas visual animado para estudiar desarrollo de software desde los fundamentos hasta producción.

**34 colecciones · 68 rutas canónicas · 2,747 conceptos · 34 casos integrados**

<p align="center">
  <a href="https://luics415.github.io/Dev-Visualizer/"><strong>Abrir Dev Visualizer</strong></a>
  ·
  <a href="https://luics415.github.io/Dev-Visualizer/colecciones/">Explorar las 34 colecciones</a>
</p>

Dev Visualizer convierte mecanismos técnicos en escenas autónomas: muestra la entrada, el cambio interno, el resultado observable y una conclusión. Cada colección se acompaña de un caso único **En acción** con fronteras, fallos, recuperación y una profundización técnica.

## Recorrer el atlas

La puerta de entrada es [/colecciones](https://luics415.github.io/Dev-Visualizer/colecciones/). El catálogo se organiza en seis áreas:

- **Lenguajes:** JavaScript, TypeScript, C, C++, C#, Objective-C, C*, CWEB, Embedded C y Visual Basic .NET.
- **Diseño e interfaces:** UX/UI, HTML y CSS, Bootstrap, AngularJS, React y React Native.
- **Plataformas y servidor:** APIs, Backend, Node.js, Laravel, n8n, .NET y Firebase.
- **Datos:** Gestión de estado y Bases de datos.
- **Control de versiones y calidad:** Git, GitHub y Debugging.
- **Infraestructura y entrega:** Linux, AWS, CI/CD, Deployment, NGINX y Docker.

Cada identidad estable tiene dos rutas:

    /<colección>
    /<colección>-en-accion

Hay puentes accesibles para las URLs anteriores /git-github* y /apis-rest*. Git y GitHub ya son colecciones distintas; APIs cubre REST, GraphQL, gRPC, WebSockets, webhooks y eventos; CI/CD termina en un artefacto aprobado y Deployment comienza desde ese artefacto.

## Experiencia

- Animaciones autónomas que pueden comprenderse aunque el loop se observe a la mitad.
- Pausa automática fuera del viewport y respeto por prefers-reduced-motion.
- Navegación, búsqueda y filtros derivados de un manifiesto ligero.
- Diseño responsive, navegación por teclado, foco visible y contenido legible sin depender solo del color.
- Avisos visibles para Objective-C, C*, CWEB y AngularJS cuando el contexto es legado o histórico.
- Fuentes primarias enlazadas en las colecciones expandidas.

La narrativa visual toma inspiración general del formato educativo de [AlgoInsight](https://www.instagram.com/algoinsight/) sin copiar publicaciones, textos, marcas ni recursos. Los guiños a Arcane y League of Legends continúan como referencias textuales independientes; consulta [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Arquitectura

El sitio usa Next.js App Router, React, TypeScript y Motion. Se exporta como HTML, CSS y JavaScript estáticos.

    src/data/collectionManifest.ts      orden, grupo, rutas, tema y vigencia
    src/data/expandedCollections.ts     registro servidor de colecciones expandidas
    src/app/[slug]/page.tsx             38 rutas nuevas generadas estáticamente
    src/components/                     navegación, atlas, escenas y casos
    src/app/sitemap.ts                  sitemap derivado del manifiesto

Las 30 rutas históricas que ya tenían página conservan sus componentes especializados. Las 38 rutas de las 19 colecciones nuevas se generan desde parámetros cerrados. La biblioteca del cliente recibe únicamente el manifiesto y las cifras ya calculadas; no importa los archivos grandes de contenido.

Consulta:

- [Arquitectura](docs/ARCHITECTURE.md)
- [Guía editorial](docs/CONTENT_GUIDE.md)
- [Sistema visual](docs/VISUAL_SYSTEM.md)
- [Roadmap](docs/ROADMAP.md)
- [Publicación](docs/DEPLOYMENT.md)

## Desarrollo local

Requiere Node.js 24 y npm.

    npm install
    npm run dev

Comprobación completa:

    npm run check

El comando ejecuta ESLint, TypeScript estricto y la exportación estática. El build final genera 77 páginas, incluidas 68 rutas canónicas, cuatro puentes heredados, biblioteca, créditos, sitemap y páginas de soporte.

## Añadir una colección

1. Registrar identidad, grupo, rutas, tema, vigencia y resumen en collectionManifest.ts.
2. Crear primer, capítulos, conceptos, fuentes y caso integrado en un módulo de datos.
3. Añadir la definición al registro servidor expandedCollections.ts.
4. Usar una familia visual existente o implementar una escena que represente el mecanismo con precisión.
5. Ejecutar npm run check y validar escritorio, 390×844, teclado, movimiento reducido, overflow y consola.

Las validaciones integradas rechazan IDs o rutas duplicados, colecciones sin capítulos, conceptos sin escena y casos sin profundización.

## Publicación

.github/workflows/deploy-pages.yml compila y publica out/ en GitHub Pages después de cada push a main. El workflow calcula automáticamente basePath y NEXT_PUBLIC_SITE_URL para el repositorio.

## Autoría y licencias

- Dirección, autoría y mantenimiento: **Luics415**.
- Desarrollo y diseño visual: **Sharol (Azlynn)**.
- Asistencia de IA acreditada: **OpenAI ChatGPT**.
- Código: [MIT](LICENSE).
- Contenido educativo y diseño original: [CC BY-NC-SA 4.0](CONTENT_LICENSE.md).

Dev Visualizer es un proyecto educativo independiente. Las marcas y tecnologías citadas pertenecen a sus titulares y el atlas no sustituye su documentación oficial.
