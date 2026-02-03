import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://openclawdmp.com'),
  title: {
    default: "Clawdbot - Deploy Claude AI Bot to Your Cloud Server | clawbot moltbot",
    template: "%s | Clawdbot"
  },
  description: "Professional clawdbot deployment service. We help you deploy Claude AI chatbot (clawbot, moltbot) to your cloud server. Get started in 48 hours. Clawdbot installation, configuration and setup made easy.",
  keywords: ["clawdbot", "clawbot", "moltbot", "clawdbot ai", "claude bot", "ai chatbot deployment", "cloud server bot"],
  authors: [{ name: "Clawdbot Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Clawdbot",
    title: "Clawdbot - Deploy Claude AI Bot to Your Cloud Server",
    description: "Professional clawdbot deployment service. Deploy Claude AI chatbot to your cloud server in 48 hours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clawdbot - Deploy Claude AI Bot to Your Cloud Server",
    description: "Professional clawdbot deployment service. Deploy Claude AI chatbot to your cloud server in 48 hours.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4YRPN1XHV1"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4YRPN1XHV1');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
