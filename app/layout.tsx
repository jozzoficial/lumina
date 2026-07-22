import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumina - O teu guia digital e seguro na maternidade",
  description: "Acompanha o crescimento do teu bebé semana a semana, gere as tuas consultas e recebe apoio personalizado. Tudo pensado para o teu telemóvel Android.",
  keywords: ["Maternidade", "Gravidez", "Guia digital", "Gestação", "Bebé", "Saúde materna", "Lumina", "Angola"],
  authors: [{ name: "Lumina" }],
  creator: "Lumina",
  publisher: "Lumina",
  metadataBase: new URL("https://lumina-landingpage.vercel.app"), // Placeholder URL, update to production URL later
  openGraph: {
    title: "Lumina - O teu guia digital e seguro na maternidade",
    description: "Acompanha o crescimento do teu bebé semana a semana, gere as tuas consultas e recebe apoio personalizado.",
    url: "/",
    siteName: "Lumina",
    images: [
      {
        url: "/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Lumina - Guia da Maternidade",
      },
    ],
    locale: "pt_AO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina - O teu guia digital e seguro na maternidade",
    description: "Acompanha o crescimento do teu bebé semana a semana, gere as tuas consultas e recebe apoio personalizado.",
    images: ["/img/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-AO"
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <meta name="google" content="notranslate" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
