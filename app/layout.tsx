import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Mathis Parfumerie — Lancez votre Marque de Parfums depuis Dubaï & l'Inde",
  description:
    "Accompagnement premium par Mathis pour lancer votre propre marque de parfums. Sourcing direct usine à Dubaï et en Inde, gamme sur-mesure, livraison internationale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sora.variable} ${inter.variable}`}>
      <body className="font-sans bg-noir text-cream antialiased">
        {children}
      </body>
    </html>
  );
}