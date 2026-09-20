import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "@/data/catalogValidation";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const siteRoot = siteUrl.replace(/\/$/, "");
const assetUrl = (pathname: string) => `${siteRoot}${pathname}`;
const socialCardUrl = assetUrl("/social/luics415-dev-visualizer-og-2026.png");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Dev Visualizer", template: "%s · Dev Visualizer" },
  description: "Atlas visual educativo con 41 colecciones, 82 rutas canónicas y 3,697 conceptos de desarrollo de software.",
  applicationName: "Dev Visualizer",
  authors: [
    { name: "Luics415" },
    { name: "Sharol (Azlynn)" },
  ],
  creator: "Luics415",
  publisher: "Dev Visualizer",
  manifest: assetUrl("/site.webmanifest"),
  icons: {
    icon: [
      { url: assetUrl("/favicon.ico"), sizes: "any" },
      { url: assetUrl("/favicon-32x32.png"), type: "image/png", sizes: "32x32" },
      { url: assetUrl("/favicon-48x48.png"), type: "image/png", sizes: "48x48" },
    ],
    shortcut: assetUrl("/favicon.ico"),
    apple: [{ url: assetUrl("/apple-touch-icon.png"), type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteRoot,
    siteName: "Dev Visualizer",
    title: "Dev Visualizer",
    description: "41 colecciones y 82 rutas para aprender desarrollo de software mediante visualizaciones autónomas y casos técnicos completos.",
    images: [{
      url: socialCardUrl,
      width: 1731,
      height: 909,
      alt: "Luics415 · Software Developer · Dev Visualizer, un atlas visual para aprender desarrollo de software",
      type: "image/png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Visualizer",
    description: "Atlas visual educativo: 41 colecciones, 82 rutas y 3,697 conceptos.",
    images: [socialCardUrl],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070a10",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body>
        <MotionProvider>
          {children}
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  );
}
