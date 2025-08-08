import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BauhausBg from "@/components/BauhausBg";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://faikerkan.info";

export const metadata: Metadata = {
  title: "Faik Erkan — İş Analisti, Takım Lideri",
  description:
    "Faik Erkan'ın kişisel web sitesi. İş analizi, teknoloji ve motosiklet tutkusu bir arada.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Faik Erkan — İş Analisti, Takım Lideri",
    description:
      "Faik Erkan'ın kişisel web sitesi. İş analizi, teknoloji ve motosiklet tutkusu bir arada.",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Faik Erkan — İş Analisti, Takım Lideri",
    description:
      "Faik Erkan'ın kişisel web sitesi. İş analizi, teknoloji ve motosiklet tutkusu bir arada.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.variable} antialiased bg-black text-zinc-100 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]`}>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <BauhausBg />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-md focus:bg-white focus:text-black focus:px-3 focus:py-1">İçeriğe atla</a>
        <Navbar />
        <main id="main" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
