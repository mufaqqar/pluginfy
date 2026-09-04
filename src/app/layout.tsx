import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { siteConfig } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07091A",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI development company",
    "AI-first technology firm",
    "machine learning development",
    "LLM development",
    "web development agency",
    "mobile app development",
    "DevOps services",
    "blockchain development",
    "AI consulting",
    "Pluggable AI",
    "Pluginfy",
  ],
  authors: [{ name: "Pluginfy" }],
  creator: "Pluginfy",
  publisher: "Pluginfy",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pluginfy — AI-First Technology Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og.png"],
    creator: "@pluginfy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/Logo.svg`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "307 Madina Heights",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    telephone: "+92-300-4801494",
    email: "hello@pluginfy.com",
    sameAs: [
      "https://www.facebook.com/pluginfy",
      "https://twitter.com/pluginfy",
      "https://www.youtube.com/channel/UCoW1Ip3gM6YjBtluhSCJpBA",
      "https://www.linkedin.com/company/pluginfy-technologies",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div style={{ background: "#07091A", minHeight: "100%" }}>
          <Navbar />
          <main>
            <CustomCursor />
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
