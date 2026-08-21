import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://regisinvesting.com.br"),
  title: "Regis Investing | Formação e Mentoria para Traders",
  description:
    "Desenvolva técnica, disciplina, gestão de risco e mentalidade para operar no mercado financeiro com mais consistência.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Regis Investing",
    title: "Regis Investing | Formação e Mentoria para Traders",
    description:
      "Desenvolva técnica, disciplina, gestão de risco e mentalidade para operar no mercado financeiro com mais consistência.",
    images: [
      {
        url: "/Banner_Atualizado.png",
        width: 1200,
        height: 630,
        alt: "Regis Investing — Formação e Mentoria para Traders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Regis Investing | Formação e Mentoria para Traders",
    description:
      "Desenvolva técnica, disciplina, gestão de risco e mentalidade para operar no mercado financeiro com mais consistência.",
    images: ["/Banner_Atualizado.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/favicon-192.png", sizes: "192x192", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JRG57ZKPZ5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JRG57ZKPZ5');
          `}
        </Script>
      </body>
    </html>
  );
}
