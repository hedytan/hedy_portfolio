import type { Metadata } from "next";
import { Instrument_Sans, IBM_Plex_Mono, Fraunces, Caveat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});
const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
});
const child = localFont({
  src: "./fonts/CHILD.ttf",
  variable: "--font-child",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HedyTan",
  description:
    "UX/UI designer & student based in Sydney. Master of Interaction Design at UTS.",
  openGraph: {
    title: "HedyTan",
    description: "UX/UI designer & student based in Sydney.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable} ${hand.variable} ${child.variable}`}>
      <body className="font-mono bg-bg text-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
