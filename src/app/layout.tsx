import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Noto_Naskh_Arabic } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoNaskh = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.islamreligion.fr"),
  title: {
    default: "Islam religion : comprendre la religion musulmane",
    template: "%s | IslamReligion.fr",
  },
  description:
    "Comprendre l'Islam, ses piliers, ses croyances et ses enseignements. Ressources sur la religion musulmane, l'apprentissage du Coran, de l'arabe et la spiritualité.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "IslamReligion.fr",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IslamReligion.fr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/images/favicon-islam.ico",
  },
  alternates: {
    canonical: "https://www.islamreligion.fr",
  },
  verification: {
    google: "tZCd7nFapnTDivf9Ty6v8OpgKY3Wwfpu0nL4wyBgnXE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${notoNaskh.variable} antialiased`}
      >
        <Header />
        <div className="pt-16 lg:pt-20">{children}</div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
