import Image from "next/image";
import React, { useEffect } from "react";
import { ShoppingBagIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Github, Linkedin, Twitter, X } from "styled-icons/bootstrap";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

function Navbar() {
  const { scrollYProgress, scrollY } = useScroll();

  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  return (
    <motion.nav
      className="fixed flex flex-col w-screen z-40 mx-auto place-content-center"
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      transition={{ duration: 0.6, type: "tween" }}
    >
      <motion.div
        initial={{ backdropFilter: "blur(0px)" }}
        animate={{ backdropFilter: "blur(20px)", backgroundColor: "#0000003d" }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <div className="2xl:w-[1500px] w-screen place-content-center mx-auto">
          <div className="py-5 md:px-6 px-4 flex place-content-between 2xl:w-[1500px] w-screen ">
            <div className="flex space-x-5 place-items-center">
              <Link
                href="/"
                className="duration-150 cursor-pointer text-2xl font-black"
              >
                HARUXE
              </Link>
            </div>
            <div className="ml-auto flex space-x-3 place-items-center place-content-center mr-4">
              <Link
                href="https://linkedin.com/in/joshfrancisco"
                className="duration-150 "
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/Haruxe" className="duration-150 ">
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/haruxeETH"
                className="duration-150 "
              >
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className={"bg-white h-[1px] rounded-xl left-0 "}
        style={{ scaleX: scrollYProgress }}
      />
    </motion.nav>
  );
}

export default Navbar;
