import Image from "next/image";
import React from "react";
import { ShoppingBagIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Github, Linkedin, Twitter, X } from "styled-icons/bootstrap";

function Navbar() {
  return (
    <div className="mx-auto py-5 flex place-items-center">
      <div className="">
        <Link href="/" className="duration-150 hover:text-[#E4020B]">
          <Image src="/fontbolt.png" width={100} height={100} alt="haruxe" />
        </Link>
      </div>
      <div className="ml-auto flex space-x-3 place-items-center place-content-center">
        <Link
          href="https://linkedin.com/in/joshfrancisco"
          className="duration-150 hover:text-[#E4020B]"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link
          href="https://github.com/Haruxe"
          className="duration-150 hover:text-[#E4020B]"
        >
          <Github className="w-5 h-5" />
        </Link>
        <Link
          href="https://github.com/Haruxe"
          className="duration-150 hover:text-[#E4020B]"
        >
          <Twitter className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
