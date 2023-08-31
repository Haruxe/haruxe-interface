import Image from "next/image";
import React from "react";
import { ShoppingBagIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Github, Linkedin, Twitter, X } from "styled-icons/bootstrap";

function Navbar() {
  return (
    <div className="mx-auto py-3 flex place-items-center">
      <div>
        <Link href="/" className="duration-150 hover:text-red-400">
          <h1 className="text-4xl font-black text-center">HARUXE</h1>
        </Link>
      </div>
      <div className="ml-auto flex space-x-3 place-items-center place-content-center">
        <Link
          href="https://linkedin.com/in/joshfrancisco"
          className="duration-150 hover:text-red-400"
        >
          <Linkedin className="w-4 h-4" />
        </Link>
        <Link
          href="https://github.com/Haruxe"
          className="duration-150 hover:text-red-400"
        >
          <Github className="w-4 h-4" />
        </Link>
        <Link
          href="https://github.com/Haruxe"
          className="duration-150 hover:text-red-400"
        >
          <Twitter className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
