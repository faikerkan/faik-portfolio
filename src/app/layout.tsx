import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BauhausBg from "@/components/BauhausBg";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faik Erkan — İş Analisti, Takım Lideri",
  description:
    "Faik Erkan'ın kişisel web sitesi. İş analizi, teknoloji ve motosiklet tutkusu bir arada.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Faik Erkan — İş Analisti, Takım Lideri",
    description:
      "Faik Erkan'ın kişisel web sitesi. İş analizi, teknoloji ve motosiklet tutkusu bir arada.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faik Erkan — İş Analisti, Takım Lideri",
    description:
      "Faik Erkan'ın kişisel web sitesi. İş analizi, teknoloji ve motosiklet tutkusu bir arada.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className={`${inter.variable} antialiased bg-black text-zinc-100`}>
        <BauhausBg />
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
