import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Regis Investing | Mentoria em Day Trade",
  description: "Desenvolva método, disciplina e gestão de risco com os programas de mentoria da Regis Investing.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
