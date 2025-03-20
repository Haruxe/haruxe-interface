import { type AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SmoothScroll from "../components/layout/SmoothScroll";
import CustomCursor from "../components/ui/CustomCursor";
import "../styles/globals.css";
import { useEffect, useState } from "react";

const METADATA = {
  title: "Haruxe",
  description: "Learn more about Haruxe's work and projects.",
  twitter: "@haruxeETH",
  image: "https://haruxe.xyz/images/preview.png",
};

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Only enable smooth scrolling after component mounts
  useEffect(() => {
    setIsMounted(true);

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
      const isDark = savedTheme === "true";
      setTheme(isDark ? "dark" : "light");
      document.documentElement.classList.toggle("light-mode", !isDark);
    } else {
      // Use system preference as default
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("light-mode", !prefersDark);
    }
  }, []);

  // Check if we're on the server side
  const isServer = typeof window === "undefined";

  return (
    <>
      <Head>
        <title>{METADATA.title}</title>
        <meta name="description" content={METADATA.description} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content={`${METADATA.title}'s Portfolio`} />
        <meta property="og:description" content={METADATA.description} />
        <meta property="og:image" content={METADATA.image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content={METADATA.twitter} />
        <meta
          name="twitter:title"
          content={`${METADATA.title} - Web3 Developer and Security Researcher`}
        />
        <meta name="twitter:description" content={METADATA.description} />
        <meta name="twitter:image" content={METADATA.image} />
      </Head>

      {isMounted && !isServer && <CustomCursor />}

      {isMounted && !isServer ? (
        <SmoothScroll>
          <div className={`relative mx-auto ${theme}`}>
            <div className="relative z-10">
              <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 bg-background text-foreground">
                <Component {...pageProps} />
              </main>
              <Footer />
            </div>
          </div>
        </SmoothScroll>
      ) : (
        <div className={`min-h-screen ${theme}`}>
          <div className="relative mx-auto">
            <div className="relative z-10">
              <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 bg-background text-foreground">
                <Component {...pageProps} />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
