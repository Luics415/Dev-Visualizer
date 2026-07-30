# Dev Visualizer

**Dev Visualizer** es un proyecto original e independiente con fines educativos. Convierte conceptos de desarrollo de software en visualizaciones autónomas, colecciones por capítulos, casos técnicos “en acción” y módulos de profundización.

El atlas incluye más de **2,200 conceptos** distribuidos en **17 colecciones**: JavaScript, TypeScript, React, React Native, gestión de estado, APIs REST, backend, bases de datos, Git y GitHub, HTML y CSS, Linux, AWS, deployment, NGINX, Docker, Firebase y debugging.

## Demo pública

El proyecto está preparado para publicarse sin servidor mediante **GitHub Pages**. Las personas que visiten la URL solo necesitan un navegador; no deben instalar Node.js ni dependencias. También puede desplegarse directamente en Vercel.

## Características

- Animaciones autónomas en bucle y soporte para movimiento reducido.
- Paleta propia por colección y tonos rotativos para reducir fatiga visual.
- Introducción “¿Qué es?” antes de cada ruta de estudio.
- Casos integrados que comparan la experiencia visible con el proceso interno.
- Apartados de **Profundización del caso**.
- Navegación, buscador de colecciones y diseño responsive.
- Exportación estática para alojamiento gratuito.

## Desarrollo local

Requisitos: Node.js 24 LTS y npm.

```bash
npm install
npm run dev
```

Abre `http://localhost:3000/colecciones`.

Validación completa:

```bash
npm run check
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube el contenido de este proyecto a la rama `main`.
3. En **Settings → Pages**, selecciona **GitHub Actions** como fuente.
4. Abre la ejecución **Deploy to GitHub Pages**.
5. Al finalizar, GitHub mostrará la URL pública.

El workflow calcula automáticamente la ruta base para repositorios tipo `usuario.github.io/proyecto`. Consulta [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Autoría y participación

- **Luics415** — autoría principal, dirección educativa y mantenimiento.
- **Sharol (Azlynn)** — desarrollo y creación del diseño visual de la página.
- **OpenAI ChatGPT — GPT-5.6 Thinking** — asistencia de IA en arquitectura, implementación, organización educativa, documentación y revisión.

Más información en [AUTHORS.md](AUTHORS.md) y en la ruta `/acerca`.

## Licencias

- **Código fuente:** [MIT](LICENSE).
- **Contenido educativo y diseño original:** [CC BY-NC-SA 4.0](LICENSE-CONTENT.md).
- **Marcas y referencias de terceros:** consulta [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

Dev Visualizer no está afiliado, patrocinado ni aprobado por Riot Games, OpenAI ni por los titulares de las tecnologías estudiadas.

## Documentación

- [Arquitectura](docs/ARCHITECTURE.md)
- [Guía editorial y visual](docs/CONTENT_GUIDE.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Sistema visual](docs/VISUAL_SYSTEM.md)
- [Roadmap histórico](docs/ROADMAP.md)
- [Contribuciones](CONTRIBUTING.md)
