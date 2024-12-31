import { type Metadata } from "next";
import { type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Haruxe",
  description: "Learn more about Haruxe's work and projects.",
  metadataBase: new URL("https://haruxe.xyz"),
  openGraph: {
    title: "Haruxe's Portfolio",
    description: "Learn more about Haruxe's work and projects.",
    url: "https://haruxe.xyz",
    siteName: "Haruxe's Portfolio",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haruxe - Web3 Developer and Security Researcher",
    description: "Learn more about Haruxe's work and projects.",
    creator: "@haruxeETH",
    images: ["/images/preview.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative mx-auto">
          <BackgroundImage />
          <div className="relative z-10">
            <Navbar />
            <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

function BackgroundImage() {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  return (
    <motion.div
      style={{ opacity: backgroundOpacity }}
      className="fixed inset-0 z-0"
    >
      <motion.div
        className="w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/Space1.png)",
          willChange: "opacity",
        }}
      />
    </motion.div>
  );
}
