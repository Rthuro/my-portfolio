import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import AsciiSplash from "./components/AsciiSplash";
import SplashCursor from './components/SplashCursor'
import {Footer} from './components/Footer';
import { Reveal } from "./components/Reveal";

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <link rel="icon" type="image/svg" href="/icon.svg" />
      <body className="min-h-full flex flex-col">
        <Reveal>
          {children}
        </Reveal>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
