import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura Pine Villa & Suite | Luxury Alpine Mountain Apartment in Zlatibor, Serbia",
  description:
    "Experience a tranquil 72m² boutique mountain residence in Zlatibor, Serbia. Featuring a wood-burning fireplace, Finnish rain-spa bath, panoramic heated pine terrace, 1000Mbps fiber Wi-Fi, and private EV-ready parking.",
  keywords: [
    "Zlatibor apartment rental",
    "Zlatibor luxury chalet",
    "Apartman Zlatibor",
    "Zlatibor vacation rental Serbia",
    "Gold Gondola accommodation",
    "Tornik ski chalet",
    "Čigota mountain stay",
  ],
  authors: [{ name: "Milena & Stefan (Superhosts)" }],
  openGraph: {
    title: "Aura Pine Villa & Suite — Luxury Mountain Residence in Zlatibor",
    description:
      "A serene 72m² private alpine sanctuary with fireplace, mountain view terrace, and bespoke Serbian hospitality. Book direct with 0% OTA fees.",
    url: "https://aurapine-zlatibor.rs",
    siteName: "Aura Pine Suite Zlatibor",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-sand-50 text-pine-900 dark:bg-forest-900 dark:text-sand-50 antialiased selection:bg-amber-accent/20">
        {children}
      </body>
    </html>
  );
}
