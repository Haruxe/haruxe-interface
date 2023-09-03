import Image from "next/image";
import React from "react";
import { ShoppingBagIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Github, Linkedin, Twitter, X } from "styled-icons/bootstrap";

function Navbar() {
  return (
    <div className="fixed flex flex-col w-screen backdrop-blur-lg z-20 mx-auto place-content-center">
      <div className="w-[1500px] place-content-center mx-auto">
        <div className="py-5 md:px-6 px-4 flex place-content-between max-w-[1500px] ">
          <div className="flex space-x-5 place-items-center ">
            <Link
              href="/"
              className="duration-150 cursor-pointer font-dm-serif-display text-2xl font-black"
            >
              HARUXE
            </Link>
          </div>
          <div className="ml-auto flex space-x-3 place-items-center place-content-center">
            <Link
              href="https://linkedin.com/in/joshfrancisco"
              className="duration-150 "
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="https://github.com/Haruxe" className="duration-150 ">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="https://github.com/Haruxe" className="duration-150 ">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="max-w-[1500px] w-full bg-[#fdffe43d] h-[1px]" />
      </div>
    </div>
  );
}

export default Navbar;
