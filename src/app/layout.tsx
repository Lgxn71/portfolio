import type { ReactNode } from "react";
import type { Metadata } from "next";

import Header from "@/components/ui/layout/Header/Header";
import Footer from "@/components/ui/layout/Footer/Footer";

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Toaster } from "sonner";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ali",
  description: "Ali's site portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistMono.variable} ${GeistSans.variable}`}>
        <Toaster position="top-center" closeButton /> 
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
