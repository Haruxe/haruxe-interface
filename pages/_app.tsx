import { type AppProps } from "next/app";
import Head from "next/head";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";

const METADATA = {
  title: "Haruxe",
  description: "Learn more about Haruxe's work and projects.",
  twitter: "@haruxeETH",
  image: "https://haruxe.xyz/images/preview.png",
};

function MyApp({ Component, pageProps }: AppProps) {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

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

      <motion.div
        className="min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="relative mx-auto">
          {/* Background */}
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

          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
              <Component {...pageProps} />
            </main>
            <Footer />
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default MyApp;
