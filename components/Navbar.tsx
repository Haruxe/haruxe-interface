import Image from "next/image";
import React from "react";
import { ShoppingBagIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Github, Linkedin, Twitter, X } from "styled-icons/bootstrap";

function Navbar() {
  return (
    <div className="mx-auto py-3 flex place-items-center">
      <div>
        <Link href="/" className="duration-150 hover:text-red-500">
          <h1 className="text-3xl font-black text-center">HARUXE</h1>
        </Link>
      </div>
      <div className="ml-auto flex space-x-3 place-items-center place-content-center">
        <Link
          href="https://linkedin.com/in/joshfrancisco"
          className="duration-150 hover:text-red-500"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link
          href="https://github.com/Haruxe"
          className="duration-150 hover:text-red-500"
        >
          <Github className="w-5 h-5" />
        </Link>
        <Link
          href="https://github.com/Haruxe"
          className="duration-150 hover:text-red-500"
        >
          <Twitter className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
