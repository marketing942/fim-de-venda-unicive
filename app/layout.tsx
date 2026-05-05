import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Próximos Passos | Unicive Polo Caruaru",
  description:
    "Jornada do aluno após a matrícula na Unicive Polo Caruaru. Siga seus próximos passos com segurança e organização.",
  openGraph: {
    title: "Próximos Passos | Unicive Polo Caruaru",
    description:
      "Jornada do aluno após a matrícula na Unicive Polo Caruaru.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
