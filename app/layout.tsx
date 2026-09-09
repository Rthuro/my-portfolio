import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Footer} from './components/Footer';
import { Reveal } from "./components/Reveal";
import { Analytics } from '@vercel/analytics/next';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ruthiemyoribello.tech";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ruthiemy Oribello — Full Stack Developer & Web Designer",
    template: "%s | Ruthiemy Oribello",
  },
  description:
    "Full-stack developer and web designer building beautiful, functional web applications. Specializing in React, Next.js, and modern web technologies. Open to freelance work, collaborations, and opportunities.",
  authors: [{ name: "Ruthiemy Oribello", url: siteUrl }],
  creator: "Ruthiemy Oribello",
  publisher: "Ruthiemy Oribello",
  keywords: [
    "Ruthiemy Oribello",
    "Full Stack Developer",
    "Web Designer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Software Engineer",
    "Freelance Web Developer",
    "Portfolio",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ruthiemy Oribello",
    title: "Ruthiemy Oribello — Full Stack Developer & Web Designer",
    description:
      "Full-stack developer and web designer building beautiful, functional web applications. Open to freelance work and collaborations.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ruthiemy Oribello — Full Stack Developer & Web Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruthiemy Oribello — Full Stack Developer & Web Designer",
    description:
      "Full-stack developer and web designer building beautiful, functional web applications. Open to freelance work and collaborations.",
    creator: "@ruthiemy",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

// JSON-LD structured data — helps Google understand your site
// and increases chances of showing sitelinks in search results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ruthiemy Oribello",
      description:
        "Full-stack developer and web designer building beautiful, functional web applications.",
      publisher: { "@id": `${siteUrl}/#person` },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Ruthiemy Oribello",
      url: siteUrl,
      jobTitle: "Full Stack Developer",
      description:
        "Full-stack developer and web designer specializing in React, Next.js, and modern web technologies.",
      sameAs: [
        "https://github.com/Rthuro",
        "https://www.linkedin.com/in/ruthiemy-oribello",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Ruthiemy Oribello — Full Stack Developer & Web Designer",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
      description:
        "Portfolio of Ruthiemy Oribello — a full-stack developer and web designer.",
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" type="image/svg" href="/icon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col pt-2 pb-64">
        <Reveal>
          {children}
        </Reveal>
        {/* <Footer /> */}
        <Analytics />
      </body>
    </html>
  );
}
