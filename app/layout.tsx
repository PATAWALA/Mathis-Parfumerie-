import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mathis Parfumerie — Lancez votre Marque de Parfums depuis Dubaï & l'Inde",
  description:
    "Accompagnement premium par Mathis pour lancer votre propre marque de parfums. Sourcing direct usine à Dubaï et en Inde, gamme sur-mesure, livraison internationale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-noir text-cream antialiased">
        {children}
      </body>
    </html>
  );
}