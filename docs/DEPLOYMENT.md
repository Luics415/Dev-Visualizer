# Publicación

## GitHub Pages

El repositorio incluye `.github/workflows/deploy-pages.yml`. Cada push a `main`:

1. instala dependencias,
2. ejecuta `next build`,
3. genera el sitio estático en `out/`,
4. configura automáticamente el `basePath` del repositorio,
5. publica el artefacto en GitHub Pages.

En GitHub abre **Settings → Pages → Build and deployment → Source** y selecciona **GitHub Actions**. Después del workflow, el sitio queda disponible en `https://usuario.github.io/repositorio/`.

## Vercel

Importa el repositorio desde el panel de Vercel. No requiere configuración especial. Al ser una exportación estática, Vercel publicará el resultado del build y generará una URL accesible desde cualquier red.

## Dominio propio

Configura el dominio desde GitHub Pages o Vercel. Define `NEXT_PUBLIC_SITE_URL` con la URL pública durante el build para mejorar los metadatos.
