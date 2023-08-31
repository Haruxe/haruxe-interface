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
        <title>HARUXE</title>
        <meta name="description" content="Home of Haruxe's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="space-x-5 flex place-content-between">
        <div className="mt-12 space-y-3 w-[40%]">
          <h1 className="text-5xl font-bold">Josh Francisco</h1>
          <p className="text-lg text-zinc-200">
            Web3 Developer and Security Researcher
          </p>
          <p className="text-zinc-400">
            I build things on Ethereum, with an emphasis on security and
            reliability.
          </p>
        </div>
        <div className="mt-12 space-y-3 w-[45%]">
          <p className="text-zinc-400 leading-relaxed">
            Back in 2019, I started my journey in programming. I started with
            game development, making{" "}
            <Link
              href="https://harux.itch.io/"
              className="font-bold text-white duration-150 hover:text-red-500"
            >
              independent games
            </Link>{" "}
            with Unity and C#. Eventually I was enthralled by the world of
            blockchain technology and the potential it has to change the world.
            <br /> <br />
            Since then, I&apos;ve built tooling for NFT projects like{" "}
            <Link
              href="https://kaijukingz.io"
              className="font-bold text-white duration-150 hover:text-red-500"
            >
              Kaiju Kingz
            </Link>
            , and had the opportunity to work with some amazing minds developing
            and designing software for{" "}
            <Link
              href="https://baofinance.io"
              className="font-bold text-white duration-150 hover:text-red-500"
            >
              BAO Finance
            </Link>{" "}
            and{" "}
            <Link
              href="https://bloom.garden"
              className="font-bold text-white duration-150 hover:text-red-500"
            >
              Blueberry Foundation
            </Link>
            .<br /> <br />
            When I&apos;m not building, I&apos;m usually playing video games, at
            the gym, or hanging out with my dog.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
