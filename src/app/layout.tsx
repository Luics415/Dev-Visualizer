import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "@/data/catalogValidation";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Dev Visualizer", template: "%s · Dev Visualizer" },
  description: "Atlas visual educativo con 34 colecciones, 68 rutas canónicas y 2,747 conceptos de desarrollo de software.",
  applicationName: "Dev Visualizer",
  authors: [
    { name: "Luics415" },
    { name: "Sharol (Azlynn)" },
  ],
  creator: "Luics415",
  publisher: "Dev Visualizer",
  manifest: `${basePath}/site.webmanifest`,
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/favicon-32x32.png`, type: "image/png", sizes: "32x32" },
      { url: `${basePath}/favicon-48x48.png`, type: "image/png", sizes: "48x48" },
    ],
    shortcut: `${basePath}/favicon.ico`,
    apple: [{ url: `${basePath}/apple-touch-icon.png`, type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Dev Visualizer",
    title: "Dev Visualizer",
    description: "34 colecciones y 68 rutas para aprender desarrollo de software mediante visualizaciones autónomas y casos técnicos completos.",
  },
  twitter: {
    card: "summary",
    title: "Dev Visualizer",
    description: "Atlas visual educativo: 34 colecciones, 68 rutas y 2,747 conceptos.",
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
