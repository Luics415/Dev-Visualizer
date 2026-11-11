import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { collectionManifest } from "@/data/collectionManifest";
import { canonicalConceptCount } from "@/data/canonicalConceptCollections";
import { GoogleAnalytics } from "@next/third-parties/google";
import "@/data/catalogValidation";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://luics415.github.io/Dev-Visualizer";
const siteRoot = siteUrl.replace(/\/$/, "");
const assetUrl = (pathname: string) => `${siteRoot}${pathname}`;
const socialCardUrl = assetUrl("/social/luics415-dev-visualizer-github-1280x640.jpg");
const collectionCount = collectionManifest.length;
const routeCount = collectionCount * 2;
const atlasSummary = `${collectionCount} colecciones, ${routeCount} rutas canónicas y ${canonicalConceptCount.toLocaleString("es-MX")} conceptos`;

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const googleBusinessVerification = process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_VERIFICATION?.trim();

const googleVerifications = [googleSiteVerification, googleBusinessVerification].filter(
  (token): token is string => Boolean(token && token.length > 0)
);

const verificationConfig: Metadata["verification"] =
  googleVerifications.length > 0 || googleBusinessVerification
    ? {
        ...(googleVerifications.length > 0
          ? { google: googleVerifications.length === 1 ? googleVerifications[0] : googleVerifications }
          : {}),
        ...(googleBusinessVerification
          ? {
              other: {
                "google-business-verification": googleBusinessVerification,
              },
            }
          : {}),
      }
    : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Dev Visualizer", template: "%s · Dev Visualizer" },
  description: `Atlas visual educativo con ${atlasSummary} de desarrollo de software y una Librería profesional preservable.`,
  applicationName: "Dev Visualizer",
  authors: [
    { name: "Luics415", url: "https://github.com/Luics415" },
    { name: "Sharol (Azlynn)", url: "https://github.com/Azlynn17" },
    { name: "Luics4152", url: "https://github.com/Luics4152" },
  ],
  creator: "Luics415",
  publisher: "Dev Visualizer",
  manifest: assetUrl("/site.webmanifest"),
  alternates: {
    canonical: `${siteRoot}/`,
  },
  icons: {
    icon: [
      { url: assetUrl("/favicon.ico"), sizes: "any" },
      { url: assetUrl("/favicon-32x32.png"), type: "image/png", sizes: "32x32" },
      { url: assetUrl("/favicon-48x48.png"), type: "image/png", sizes: "48x48" },
      { url: assetUrl("/icon-192.png"), type: "image/png", sizes: "192x192" },
    ],
    shortcut: assetUrl("/favicon.ico"),
    apple: [{ url: assetUrl("/apple-touch-icon.png"), type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: `${siteRoot}/`,
    siteName: "Dev Visualizer",
    title: "Dev Visualizer",
    description: `${atlasSummary} para aprender mediante visualizaciones autónomas, casos técnicos y una Librería profesional.`,
    images: [{
      url: socialCardUrl,
      width: 1280,
      height: 640,
      alt: "Luics415 · Software Developer · Dev Visualizer, un atlas visual para aprender desarrollo de software",
      type: "image/jpeg",
    }],
  },
  referrer: "strict-origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: verificationConfig,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Visualizer",
    description: `Atlas visual educativo: ${atlasSummary}.`,
    images: [socialCardUrl],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID ?? "G-K3GRNYB3K6";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteRoot}/#website`,
        url: `${siteRoot}/`,
        name: "Dev Visualizer",
        alternateName: "DevVisualizer",
        description: `Atlas visual educativo con ${atlasSummary} de desarrollo de software y una Librería profesional preservable.`,
        inLanguage: "es-MX",
        publisher: {
          "@id": `${siteRoot}/#organization`,
        },
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${siteRoot}/#organization`,
        name: "Dev Visualizer",
        alternateName: ["DevVisualizer", "Dev Visualizer — Atlas Visual Educativo"],
        url: `${siteRoot}/`,
        logo: {
          "@type": "ImageObject",
          "@id": `${siteRoot}/#logo`,
          url: assetUrl("/icon-192.png"),
          caption: "Dev Visualizer Logo",
          inLanguage: "es-MX",
        },
        image: socialCardUrl,
        description: `Atlas visual educativo con ${atlasSummary} de desarrollo de software y una Librería profesional preservable.`,
        founder: {
          "@type": "Person",
          "@id": `${siteRoot}/#founder`,
          name: "Luics415",
          url: "https://github.com/Luics415",
        },
        sameAs: [
          "https://github.com/Luics415/Dev-Visualizer",
          "https://github.com/Luics415",
        ],
        knowsAbout: [
          "Desarrollo de Software",
          "Arquitectura de Software",
          "Estructuras de Datos y Algoritmos",
          "Bases de Datos y SQL",
          "Sistemas Distribuidos",
          "Frontend",
          "Backend",
          "DevOps e Infraestructura",
          "Accesibilidad Web WCAG",
        ],
        inLanguage: "es-MX",
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          category: "Educational",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "WebApplication",
        "@id": `${siteRoot}/#app`,
        name: "Dev Visualizer",
        url: `${siteRoot}/`,
        applicationCategory: "EducationalApplication",
        operatingSystem: "All",
        browserRequirements: "Requires JavaScript. Requires HTML5.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        provider: {
          "@id": `${siteRoot}/#organization`,
        },
        creator: {
          "@type": "Person",
          name: "Luics415",
          url: "https://github.com/Luics415",
        },
      },
    ],
  };

  return (
    <html lang="es-MX">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <MotionProvider>
          <a href="#main-content" className="skip-link">
            Saltar al contenido principal
          </a>
          <div id="main-content" tabIndex={-1}>
            {children}
          </div>
          <SiteFooter />
        </MotionProvider>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
