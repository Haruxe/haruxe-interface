import Image from "next/image";
import React from "react";
import { ShoppingBagIcon, HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Navbar() {
  return (
    <div className="mx-auto py-3 flex mt-8 place-content-end space-x-3 place-items-center">
      <h1 className="font-bold text-xs">Created by Josh Francisco.</h1>
    </div>
  );
}

export default Navbar;
