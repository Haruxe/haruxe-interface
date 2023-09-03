import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <motion.div
        style={{
          backgroundImage: `url("/images/Space1.png")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ backgroundSize: "cover" }}
        animate={{ backgroundSize: "cover" }}
        transition={{ duration: 0.5 }}
      >
        <div className="place-content-center place-items-center mx-auto relative">
          <Navbar />
          <div className="max-w-[1500px] place-items-center mx-auto">
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default MyApp;
