import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Dev Visualizer", template: "%s · Dev Visualizer" },
  description: "Atlas visual educativo con más de 2,200 conceptos de desarrollo de software, casos integrados y profundizaciones técnicas.",
  applicationName: "Dev Visualizer",
  authors: [
    { name: "Luics415" },
    { name: "Sharol (Azlynn)" },
  ],
  creator: "Luics415",
  publisher: "Dev Visualizer",
  manifest: `${basePath}/site.webmanifest`,
  icons: { icon: `${basePath}/favicon.svg` },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Dev Visualizer",
    title: "Dev Visualizer",
    description: "Aprende desarrollo de software mediante visualizaciones autónomas y casos técnicos completos.",
  },
  twitter: {
    card: "summary",
    title: "Dev Visualizer",
    description: "Atlas visual educativo de desarrollo de software.",
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
