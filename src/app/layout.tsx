import type { Metadata } from "next";
import "./globals.css";
import { bodyStyle, poppins } from '@/fonts/fonts';
import { Navbar } from "@/components";
import Footer from "@/components/Footer/Footer";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "The Hit Hub",
  description: "Sports Turf in Shajapur & Near Indore",
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
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LXQ43RBKR1', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className={`  ${poppins.className} ${bodyStyle}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}