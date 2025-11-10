import "./globals.scss";
import "../index.scss";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Providers from "./Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Connectify",
  description: "A community discussion platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lexend.variable}>
      <body className={lexend.className}>
        <Providers>
          {children}
          <Script
            src="https://accounts.google.com/gsi/client"
            strategy="afterInteractive"
          />
          <ToastContainer position="bottom-right" />
        </Providers>
      </body>
    </html>
  );
}
