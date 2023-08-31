import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Home: NextPage = () => {
  return (
    <div className="space-y-12">
      <Head>
        <title>Haruxe | Home</title>
        <meta name="description" content="Home of Haruxe's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-12 space-y-3 w-1/2">
        <h1 className="text-5xl font-bold">Josh Francisco</h1>
        <p className="text-lg font-bold opacity-80">
          Web3 Developer and Security Researcher
        </p>
        <p className="text-zinc-400">
          I build things on Ethereum. I&apos;m currently working on{" "}
          <Link
            href="https://baofinance.io"
            className="text-white font-bold duration-150 hover:text-red-400"
          >
            Bao Finance
          </Link>
          {""} and{" "}
          <Link
            href="https://baofinance.io"
            className="text-white font-bold duration-150 hover:text-red-400"
          >
            Blueberry Foundation
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
