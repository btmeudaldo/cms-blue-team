import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { ThemeProvider } from "@/shared/components/theme-provider";

export const metadata: Metadata = {
  title: "Blue Team CMS - Plataforma de Formación",
  description:
    "Plataforma de cursos con progreso temporal verificado por el servidor.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased bg-slate-50 text-slate-900 dark:bg-[#0b1120] dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
