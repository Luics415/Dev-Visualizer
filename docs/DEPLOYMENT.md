# Publicación

## GitHub Pages

El repositorio incluye `.github/workflows/deploy-pages.yml`. Cada cambio se integra mediante pull request y, una vez fusionado en `main`, el workflow:

1. instala las dependencias reproducibles;
2. valida los 42 temas y 179 recursos de la instantánea bibliográfica;
3. ejecuta la compilación de Next.js;
4. genera las 225 páginas estáticas en `out/`;
5. comprueba los enlaces internos;
6. configura automáticamente el `basePath` del repositorio;
7. publica el artefacto en GitHub Pages.

En GitHub abre **Settings → Pages → Build and deployment → Source** y selecciona **GitHub Actions**. Después del workflow, el sitio queda disponible bajo `https://usuario.github.io/repositorio/`.

La entrega no se considera publicada hasta que el check de Pages termina correctamente y las rutas nuevas responden desde el dominio público.

## Verificación posterior

1. Confirmar que el workflow de Pages está verde.
2. Abrir `/colecciones/` y comprobar las cifras del manifiesto.
3. Abrir las rutas nuevas y los puentes heredados.
4. Confirmar recursos con `basePath`, consola sin errores y navegación cliente.
5. Repetir una muestra en escritorio y 390 × 844.

## Auditoría de la Librería profesional

El workflow `library-link-audit.yml` se ejecuta mensualmente y también de forma manual. Revisa redirecciones y disponibilidad de los recursos externos, conserva un informe JSON como artefacto y no bloquea una publicación cuando una fuente ajena deja de responder. Los adjuntos internos y las rutas del sitio sí forman parte de las validaciones obligatorias.

## Otros hosts estáticos

La salida de `out/` puede publicarse en cualquier host de archivos estáticos que respete rutas con barra final. Si se usa un dominio propio, define `NEXT_PUBLIC_SITE_URL` durante el build para generar metadatos absolutos correctos.
