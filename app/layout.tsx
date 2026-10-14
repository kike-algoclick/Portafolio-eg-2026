import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Archivo_Black,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Solo diseño 2
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400", // esta fuente solo tiene un peso
  variable: "--font-archivo",
  display: "swap",
});

// Solo diseño 3
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Enrique.dev",
  description: "Enrique's official digital portafolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} ${archivoBlack.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
