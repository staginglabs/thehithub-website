import type { Metadata } from "next";
import "./globals.css";
import { bodyStyle, poppins } from '@/fonts/fonts';
import { Navbar } from "@/components";
import Footer from "@/components/Footer/Footer";
// import { Script } from "vm";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Sports Turf in Shajapur & Near Indore | The Hit Hub Turf Arena",
  description: "The Hit Hub offers premium sports turf in Shajapur and near Indore. Book football, cricket & box cricket turf with top facilities. Reserve now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://thehithub.in/" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-LXQ43RBKR1`}
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
      <body className={`${poppins.className} ${bodyStyle}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}