import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AsciiSplash from "./components/AsciiSplash";
import SplashCursor from './components/SplashCursor'
import {Footer} from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ruthiemy Oribello - Full Stack Developer",
  description: "Let's build something cool together.",
  authors: [{ name: "Ruthiemy Oribello" }],
  creator: "Ruthiemy Oribello",
  publisher: "Ruthiemy Oribello",
  keywords: ["Ruthiemy Oribello", "Full Stack Developer", "Developer", "Programmer", "Coder", "Web Developer", "Software Developer", "Web Designer"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <link rel="icon" type="image/svg" href="/icon.svg" />
      <body className="min-h-full flex flex-col">
        <AsciiSplash />
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.13}
          SPLAT_FORCE={4000}
          COLOR_UPDATE_SPEED={8}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#ca66ff"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
