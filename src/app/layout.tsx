import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import "./styles/style-prefix.css";
import "./styles/style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sasa eShop",
  description: "Simple Next.js Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header></Header>
          {children}
          <Footer></Footer>
          <Script src="/script.js" strategy="afterInteractive" />
        </body>
      </html>
    </ClerkProvider>
  );
}
