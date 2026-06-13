import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rwa-labs.io'),
  title: "Tokenize Real-World Assets on Blockchain | RWA Labs",
  description: "Convert real estate, gold, saffron, pistachio and physical assets into digital tokens on blockchain. Free consultation, secure smart contracts, secondary market.",
  keywords: "tokenize,real world assets,RWA,blockchain,smart contract,real estate token,gold token,saffron token,digital sukuk,pistachio token,rice token,ERC-20,ERC-3643,DeFi,Solidity,asset tokenization,RWA wallet,free tokenization consultation,blockchain tokenization,tokenization platform",
  openGraph: {
    title: "Tokenize Real-World Assets on Blockchain | RWA Labs",
    description: "Convert real estate, gold, saffron, pistachio and physical assets into digital tokens on blockchain. Free consultation, secure smart contracts.",
    type: "website",
    locale: "en_US",
    siteName: "RWA Labs",
    url: "https://rwa-labs.io",
    images: [
      {
        url: "/images/rwa-tokenization-og.jpg",
        width: 1200,
        height: 630,
        alt: "RWA Labs - Tokenize Real-World Assets",
        type: "image/jpeg",
      },
      {
        url: "/images/rwa-tokenization-og-square.jpg",
        width: 1200,
        height: 1200,
        alt: "RWA Labs Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rwa_labs",
    creator: "@rwa_labs",
    title: "Tokenize Real-World Assets on Blockchain | RWA Labs",
    description: "Convert real estate, gold, saffron, pistachio and physical assets into digital tokens on blockchain.",
    images: {
      url: "/images/rwa-tokenization-twitter.jpg",
      alt: "RWA Labs - Tokenize Real-World Assets",
    },
  },
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
  alternates: {
    canonical: "https://rwa-labs.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RWA Labs",
    "description": "Tokenize Real-World Assets on Blockchain - Convert real estate, gold, saffron, pistachio and physical assets into digital tokens",
    "url": "https://rwa-labs.io",
    "logo": "https://rwa-labs.io/images/rwa-labs-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-RWA-LABS",
      "contactType": "customer service",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://t.me/rwa_labs",
      "https://twitter.com/rwa_labs"
    ],
    "service": {
      "@type": "Service",
      "name": "Physical Asset Tokenization",
      "description": "Converting physical assets into tradeable digital tokens",
      "provider": {
        "@type": "Organization",
        "name": "RWA Labs"
      }
    }
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="RWA Labs" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/icons/icon-192x192.png" sizes="192x192" type="image/png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        {/* Calendly Widget */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geist.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
