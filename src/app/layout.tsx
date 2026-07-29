import type { Metadata } from "next";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Visualizer",
  description: "Atlas visual de programación con 369 conceptos, capítulos y casos prácticos autónomos.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
