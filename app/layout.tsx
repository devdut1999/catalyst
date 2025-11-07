import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Catalyst AI - Custom AI Solutions for Your Business",
  description: "We build custom AI solutions to solve your biggest business challenges. Automate workflows, unlock insights, and create intelligent applications.",
  keywords: "AI consultancy, artificial intelligence, machine learning, business automation, AI solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Calendly Widget Script */}
        <script 
          type="text/javascript" 
          src="https://assets.calendly.com/assets/external/widget.js" 
          async
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

