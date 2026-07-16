import { Geist, Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";
import CookieBanner from "../components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.effettoweb.com"),
  title: {
    default: "EffettoWeb | Web Agency Padova - Siti Web, E-commerce e Marketing",
    template: "%s | EffettoWeb",
  },
    description:
      "Web agency a Padova, lavoriamo da remoto in tutta Italia. Siti web professionali, e-commerce, marketing digitale e SEO. Next.js e WordPress su misura.",
    keywords: [
      "web agency",
      "siti web",
      "ecommerce",
      "marketing digitale",
      "SEO",
      "Padova",
      "Next.js",
      "WordPress",
      "sviluppo web",
      "agenzia web",
    ],
  authors: [{ name: "EffettoWeb" }],
  creator: "EffettoWeb",
  publisher: "EffettoWeb",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "EffettoWeb",
    title: "EffettoWeb | Web Agency Padova - Siti Web, E-commerce e Marketing",
    description:
      "Web agency a Padova specializzata in siti web professionali, e-commerce e marketing digitale. Realizziamo soluzioni su misura per il tuo business.",
    images: [
      {
        url: "/imgs/header/effettoweb_logo.png",
        width: 1200,
        height: 630,
        alt: "EffettoWeb - Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EffettoWeb | Web Agency Padova",
    description:
      "Siti web, e-commerce e marketing digitale su misura per la tua azienda.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/imgs/favicon_ew.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${instrumentSerif.variable} ${instrumentSans.variable}`}
      >
        <JsonLd />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
