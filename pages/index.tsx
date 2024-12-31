import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "react-slideshow-image/dist/styles.css";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDownThick } from "styled-icons/typicons";
import { DotFill } from "styled-icons/octicons";
import Job from "../components/Job";
import Project from "../components/Project";

const Home: NextPage = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [1, 1, 0, 0]);
  const opacityKirby = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const text = "RESEARCHER";
  const [displayedLetters, setDisplayedLetters] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const phrases = [
    "let's talk",
    "contact me",
    "get in contact",
    "work with me",
  ];
  const [randomPhrase, setRandomPhrase] = useState("");

  useEffect(() => {
    setIsMounted(true);
    setRandomPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
  }, []);

  useEffect(() => {
    if (isMounted) {
      text.split("").forEach((char, idx) => {
        setTimeout(() => {
          setDisplayedLetters((prev) => [...prev, char]);
        }, 130 * idx);
      });
    }
  }, [isMounted]);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOffsetY = scrollY * 0.95; // Adjust the multiplier to increase or decrease the effect
      controls.start({ y: newOffsetY });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div className="space-y-24 pb-24 px-5 md:px-8">
      <div className="relative flex py-[5rem] h-screen ">
        <motion.div
          className="absolute right-[20%] bottom-[55%]"
          animate={{ y: 0 }}
          initial={{ y: -1000 }}
          transition={{ duration: 5, type: "spring" }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={controls}
            transition={{ duration: 1, type: "spring" }}
            className="2xl:w-[350px] 2xl:h-[350px] md:h-[300px] md:w-[300px] w-[40vw] h-[40vw] relative"
            style={{ opacity: opacityKirby }}
          >
            <Image src="/images/kirbychute.gif" fill alt="kirby" />
          </motion.div>
        </motion.div>
        <motion.header
          className="flex flex-col  my-auto w-full"
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ type: "tween" }}
        >
          <p className="2xl:text-[15rem] md:text-[12rem] text-[25vw] font-bold font-tusker leading-none py-10 align-top flex flex-col mb-auto rounded-3xl z-30">
            <span className="2xl:text-2xl md:text-xl text-[3vw] font-major-mono-display font-black 2xl:mb-3 mb-[2vw] z-10">
              hi, I&apos;m josh francisco-
            </span>{" "}
            <span className="">
              {displayedLetters.map((char, idx) => (
                <span
                  key={idx}
                  className="inline-block transform transition-all duration-500 opacity-0" // Initial state: moved down by 2rem (8 * 0.25rem) and fully transparent
                  style={{
                    transitionDelay: `${idx * 0.05}s`,
                    opacity: 1,
                    transform: "translateY(0)",
                  }}
                >
                  {char}
                </span>
              ))}
              <motion.span
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="2xl:text-4xl text-[3vw] font-dm-serif-display font-black ml-2"
              >
                &
              </motion.span>
            </span>
            <motion.span
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              DEVELOPER.
            </motion.span>
            <motion.span
              className="2xl:text-2xl md:text-xl text-[3vw] font-major-mono-display font-black ml-auto"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              but most call me haruxe.
            </motion.span>{" "}
            <motion.button
              className="2xl:text-2xl md:text-xl text-[3vw] font-major-mono-display font-black text-black ml-auto px-4 py-2 bg-white mt-5"
              initial={{
                backdropFilter: "blur(20px)",
                backgroundColor: "#0000003d",
                opacity: 0,
                y: 10,
              }}
              animate={{
                backdropFilter: "blur(0px)",
                backgroundColor: "#FFFFFF",
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              <Link href="/#contact">{randomPhrase}</Link>
            </motion.button>
          </p>

          {/* <p className="text-zinc-400 font-black text-xl font-major-mono-display">
            I build things on Ethereum, with an emphasis on security and
            reliability.
          </p> */}
        </motion.header>

        <motion.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex place-items-center flex-col absolute bottom-5 left-0 right-0 space-y-3 animate-bounce place-content-center"
          style={{ opacity }}
        >
          <ArrowDownThick className="2xl:w-10 2xl:h-10 w-[8vw] h-[8vw]" />
        </motion.div>
      </div>
      <section className="space-y-12 w-full pt-12">
        <div className="flex space-x-5 items-end">
          <div className="relative w-[100px] h-[80px]">
            <Image
              src="/images/kirbycook.gif"
              quality={100}
              fill
              alt="banner"
            />
          </div>
          <h1 className="text-left font-bold font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase">
            EXPERIENCE
          </h1>
        </div>

        <div className="space-y-8 sm:space-y-16 divide-y divide-gray-500">
          <div className="pt-8 sm:pt-16">
            <Job
              title="blockchain Developer & Security Researcher"
              company="BAO Finance"
              date="Nov 2022 - Present"
              link="https://baofinance.io"
              description="Continuously ensure the security of multiple Ethereum smart contracts on our platform. Regularly handle and address Immunefi reports, lead incident response efforts, and innovate on the design of front-end components to improve user experience and overall platform usability."
              skills={[
                "React",
                "Tailwindcss",
                "Solidity",
                "Foundry",
                "TheGraph",
                "Chainlink",
                "Tally.xyz",
              ]}
              type="Part-Time"
              banner="/images/BaoBanner.png"
            />
          </div>

          <div className="pt-8 sm:pt-16">
            <Job
              title="blockchain Developer"
              company="WEB3SG"
              date="May 2023 - PRESENT"
              link="https://web3sg.net/"
              description="Handle deployments for multiple projects, while also developing front-end components and smart contracts for various DeFi protocols."
              skills={["NextJS", "Tailwindcss", "Solidity", "rainbowkit"]}
              type="Contract"
              banner="/images/BlueberryBanner.png"
              end
            />
          </div>

          <div className="pt-8 sm:pt-16">
            <Job
              title="blockchain Developer"
              company="Blueberry Foundation"
              date="April 2023 - January 2024"
              link="https://blueberry.garden"
              description="Engage in the development of front-end, integration, and smart contracts with a strong focus on complex tokenomics and re-usability, while also conducting self-audits for protocol contracts and facilitating communication with external auditors to ensure robust security measures."
              skills={[
                "NextJS",
                "Tailwindcss",
                "Solidity",
                "Foundry",
                "GraphQL",
                "wagmi",
              ]}
              type="Contract"
              banner="/images/BlueberryBanner.png"
              end
            />
          </div>

          <div className="pt-8 sm:pt-16">
            <Job
              title="game development"
              company="Indie Game Developer"
              date="May 2020 - Jan 2022"
              link="https://harux.itch.io/"
              description="Actively competed in multiple game jams, honing my skills in rapid development and problem-solving under tight deadlines, while also designing, coding, and deploying games using Unity3D with C#."
              skills={["Unity", "C#", "Blender", "Photon"]}
              banner="/images/HaruxBanner.png"
            />
          </div>
        </div>
      </section>
      <section className="space-y-12 w-full pt-12">
        <div className="flex space-x-5 items-end">
          <div className="relative w-[100px] h-[80px]">
            <Image src="/images/meta.gif" quality={100} fill alt="banner" />
          </div>
          <h1 className="text-left font-bold font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase">
            MY ARTICLES
          </h1>
        </div>

        <div className="space-y-16 divide-y divide-gray-500">
          <div className="pt-16">
            <Project
              title="details how the current and previous uniswap versions work"
              company="Uniswap zero to mastery"
              date="November 2022"
              link="https://mirror.xyz/haruxe.eth/q-2jXIvcXI4cPDgmQLac1L_iQ6zXgbmCtIhgCHnabc8"
              banner="/images/mirror1.png"
            />
          </div>

          <div className="pt-16">
            <Project
              title="explaination of how merkle trees and proofs work and why they are useful"
              company="merkle trees and proofs"
              date="October 2022"
              link="https://mirror.xyz/haruxe.eth/Gg7UG4hctOHyteVeRX7w1Ac9m1gAoCs8uuiWx3WwVz4"
              banner="/images/mirror2.png"
            />
          </div>

          <div className="pt-16">
            <Project
              title="written during the heat of sec regulations on crypto"
              company="regulation terrorism"
              date="October 2022"
              link="https://mirror.xyz/haruxe.eth/UUkAX6QLPzippSJstT6f5QOWYSe1SLbaEvZxygPIh50"
              banner="/images/mirror3.png"
            />
          </div>

          <div className="pt-16">
            <Project
              title="tips and tricks to optimize solidity contracts"
              company="solidity gas optimizations"
              date="Sept 2022"
              link="https://mirror.xyz/haruxe.eth/DW5verFv8KsYOBC0SxqWORYry17kPdeS94JqOVkgxAA"
              banner="/images/mirror4.png"
            />
          </div>
        </div>
      </section>
      <section className="space-y-12 w-full pt-12">
        <div className="flex space-x-5 items-end">
          <div className="relative w-[100px] h-[80px]">
            <Image
              src="/images/kirbyjump.gif"
              quality={100}
              fill
              alt="banner"
            />
          </div>
          <h1 className="text-left font-bold font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase">
            PROJECTS
          </h1>
        </div>

        <div className="space-y-16 divide-y divide-gray-500">
          <div className="pt-16">
            <Project
              title="NFT/Staking project built for Web3SG"
              company="MindPalace"
              date="January 2024"
              link="https://mindpalace.dev"
              skills={[
                "NodeJS",
                "Solidity",
                "GraphQL",
                "Wagmi/Viem",
                "Ponder",
                "Figma",
              ]}
              banner="/images/mindpalace.png"
            />
          </div>

          <div className="pt-16">
            <Project
              title="bug bounty and auditing security collective"
              company="koroksec"
              date="July 2023"
              link="https://koroksec.xyz"
              skills={["Immunefi", "foundry", "brownie", "exploits"]}
              banner="/images/koroksec.png"
            />
          </div>

          <div className="pt-16">
            <Project
              title="Unity game I built in a week for a game-jam competition."
              company="hardbreach"
              date="January 2022"
              link="https://harux.itch.io/hardbreach"
              skills={["unity", "c#", "blender", "photoshop", "figma"]}
              banner="/images/hardbreach.png"
            />
          </div>

          <div className="pt-16">
            <Project
              title="Webapp built for the KaijuKingz community to monitor value."
              company="kaiju extractions"
              date="June 2022"
              link="https://kaijukingzlog.vercel.app/"
              skills={["react", "Tailwindcss", "GraphQL", "ethers"]}
              banner="/images/KaijuLogs.png"
            />
          </div>

          <div className="pt-16">
            <Project
              title="Guest on the Immunefi podcast to discuss merkle trees and proofs"
              company="Immunefi podcast"
              date="November 2022"
              link="https://www.youtube.com/watch?v=20znoiLt2ds"
              banner="/images/immunefi.png"
            />
          </div>
        </div>
      </section>
      <section className="space-y-8 w-full pt-12" id="contact">
        <div className="flex space-x-5 items-end">
          <div className="relative w-[80px] h-[100px]">
            <Image src="/images/kirbyrun.gif" quality={100} fill alt="banner" />
          </div>
          <h1 className="text-left font-bold font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase">
            CONTACT
          </h1>
        </div>

        <div className="py-12">
          <p className="font-bold text-xl leading-relaxed lowercase font-major-mono-display">
            I&apos;m always open to new opportunities and connections. Feel free
            to reach out to me at{" "}
            <Link
              href="mailto:haruxe@proton.me"
              className="font-bold text-purple-300 hover:text-purple-400 duration-150"
              target="_blank"
            >
              haruxe@proton.me
            </Link>{" "}
            or DM me on{" "}
            <Link
              href="https://twitter.com/haruxeETH"
              className="font-bold text-purple-300 hover:text-purple-400 duration-150"
              target="_blank"
            >
              Twitter
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="space-y-8 w-full pt-12">
        <div className="flex space-x-5 items-end">
          <div className="relative w-[100px] h-[80px]">
            <Image
              src="/images/kirbyfire.gif"
              quality={100}
              fill
              alt="banner"
            />
          </div>
          <h1 className="text-left font-bold font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase">
            CERTIFICATIONS
          </h1>
        </div>

        <div className="space-y-16 divide-y divide-gray-500">
          <div className="pt-16">
            <Project
              title="certified associate programmer"
              company="unity"
              date="December 2021"
              link="https://www.credly.com/badges/392a6e11-235e-4efd-8d45-594036528fee"
              banner="/images/unity.png"
            />
          </div>

          <div className="pt-16">
            <Project
              title="ISTQB Advanced Tester"
              company="ASTQB"
              date="April 2022"
              link="https://atsqa.org/certified-testers/profile/4c580dcca1fc45b0ad87bcb9df7f3a6b"
              banner="/images/astqb.png"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
