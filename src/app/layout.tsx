import type { Metadata } from "next";
import { MotionProvider } from "@/components/providers/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dev Visualizer",
  description: "Biblioteca visual animada de conceptos de programación.",
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
