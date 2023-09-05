import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="place-content-center place-items-center mx-auto relative">
          <motion.div style={{ opacity }}>
            <motion.div
              className="fixed bg-cover bg-center bg-no-repeat z-0 w-screen h-screen quality-[100]"
              style={{
                backgroundImage: "url(/images/Space1.png",
              }}
            />
            {/* <div className="absolute place-content-center place-items-center flex w-full h-screen">
              <motion.div
                initial={{ height: "100%", width: "100%" }}
                animate={{ height: "0vh", width: "0vw" }}
                transition={{ duration: 2, type: "tween" }}
                className="bg-[#1a1919] m-auto flex place-content-center place-items-center"
              />
            </div> */}
          </motion.div>
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
