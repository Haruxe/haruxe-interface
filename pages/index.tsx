import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDownThick } from "styled-icons/typicons";
import { DotFill } from "styled-icons/octicons";
import { Dot, Star } from "styled-icons/bootstrap";
import { StarAndCrescent } from "styled-icons/fa-solid";

const Home: NextPage = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [1, 1, 0, 0]);
  const opacityKirby = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  interface JobProps {
    title: string;
    company?: string;
    date: string;
    description: string;
    link: string;
    skills?: string[];
    type?: string;
    banner?: string;
    end?: boolean;
  }

  const Job: React.FC<JobProps> = ({
    title,
    company,
    date,
    description,
    link = "/",
    skills,
    type,
    banner = "/",
    end = false,
  }) => {
    const [randomBooleans, setRandomBooleans] = useState<boolean[]>([]);

    useEffect(() => {
      if (skills) {
        const randomValues = skills.map(() => Math.random() < 0.5);
        setRandomBooleans(randomValues);
      }
    }, [skills]);

    return (
      <motion.div
        className="duration-150 flex flex-wrap place-content-start z-10 w-full"
        // whileInView={{ opacity: 1, x: 0 }}
        // initial={{ opacity: 0, x: -50 }}
        // transition={{ duration: 1.4, type: "spring" }}
      >
        <div className="mb-auto">
          <h1 className="font-bold text-sm text-[1.4vw] 2xl:w-[30rem] md:w-[30vw] lowercase font-major-mono-display ">
            {date && date}
          </h1>
        </div>
        <div className="mb-auto">
          <div className="flex flex-col place-items-start mr-auto leading-none mb-auto">
            <Link
              className="font-bold space-x-5 flex font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase decoration-1 hover:underline duration-150"
              href={link}
              target="_blank"
            >
              {/* <div className="2xl:h-[6rem] 2xl:w-[10.5rem] md:h-[4rem] md:w-[7rem] h-[11vw] relative">
              <Image src={banner} fill alt="banner" className="rounded-sm" />
            </div> */}
              <h1>{company}</h1>
            </Link>
            <h1 className="font-bold 2xl:text-md md:text-base text-[3vw] uppercase">
              {title}
              {type && " · " + type}
            </h1>
          </div>
          <div>
            {/* <p className="text-zinc-300 font-mono 2xl:text-lg md:text-base text-[2.5vw] md:text-[2vw]">
              {description}
            </p> */}
            <div className="flex flex-wrap gap-2 mt-3 font-mono">
              {skills &&
                skills.map((skill, index) => {
                  return (
                    <div
                      key={skill}
                      className={
                        randomBooleans[index]
                          ? "md:py-2 md:px-4 px-[3vw] py-[2vw] md:text-base text-[2.4vw] font-bold outline outline-1 uppercase"
                          : "md:py-2 md:px-4 px-[3vw] py-[2vw] md:text-base text-[2.4vw] font-bold outline outline-1 uppercase bg-[#fdffe4] text-black"
                      }
                    >
                      {skill}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  interface ProjectProps {
    title: string;
    company?: string;
    date: string;
    link: string;
    skills?: string[];
    banner?: string;
    end?: boolean;
  }

  const Project: React.FC<ProjectProps> = ({
    title,
    company,
    date,
    link = "/",
    skills,
    banner = "/",
    end = false,
  }) => {
    const [randomBooleans, setRandomBooleans] = useState<boolean[]>([]);

    useEffect(() => {
      if (skills) {
        const randomValues = skills.map(() => Math.random() < 0.5);
        setRandomBooleans(randomValues);
      }
    }, [skills]);

    return (
      <motion.div
        className="duration-150 flex flex-wrap gap-5 place-content-start z-10 w-full"
        // whileInView={{ opacity: 1, x: 0 }}
        // initial={{ opacity: 0, x: -50 }}
        // transition={{ duration: 1.4, type: "spring" }}
      >
        <div className="h-[6rem] w-[10.5rem] flex-none relative place-items-center my-auto mr-5">
          <Image src={banner} fill alt="banner" className="rounded-sm" />
        </div>
        <div className="flex-col md:flex-row flex place-content-between">
          <div className="mb-auto ">
            <div className="flex flex-col text-left place-items-start place-content-center mr-auto leading-none mb-auto">
              <p className=" font-major-mono-display lowercase">
                {date && date}
              </p>
              <Link
                className="font-bold space-x-5 flex font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase decoration-1 hover:underline duration-150"
                href={link}
                target="_blank"
              >
                <h1>{company}</h1>
              </Link>
              <h1 className="font-bold 2xl:text-md md:text-base text-[3vw] uppercase">
                {title}
              </h1>
            </div>
            <div>
              {/* <p className="text-zinc-300 font-mono 2xl:text-lg md:text-base text-[2.5vw] md:text-[2vw]">
              {description}
            </p> */}
              <div className="flex flex-wrap gap-2 mt-3 font-mono">
                {skills &&
                  skills.map((skill, index) => {
                    return (
                      <div
                        key={skill}
                        className={
                          randomBooleans[index]
                            ? "md:py-2 md:px-4 px-[3vw] py-[2vw] md:text-base text-[2.4vw] font-bold outline outline-1 uppercase"
                            : "md:py-2 md:px-4 px-[3vw] py-[2vw] md:text-base text-[2.4vw] font-bold outline outline-1 uppercase bg-[#fdffe4] text-black"
                        }
                      >
                        {skill}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

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
    <motion.div className="space-y-12 pb-[8rem] px-5">
      <Head>
        <title>Haruxe</title>
      </Head>
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
        <motion.div
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
              transition={{ duration: 0.6, delay: 0.6 }}
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
        </motion.div>

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
      {/* <div className="place-items-center place-content-between flex">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <p className="text-2xl font-dm-serif-display space-y-1">
            Back in 2019, I started my journey in programming. I began tinkering
            with game development, making{" "}
            <Link
              href="https://harux.itch.io/"
              className="font-bold text-[#a5bdca] duration-150"
              target="_blank"
            >
              independent games
            </Link>{" "}
            with Unity and C#. Eventually I was enthralled by the world of
            blockchain technology and the potential it has to change the world.
            <br /> <br />
            Since then, I&apos;ve had the opportunity to work with DeFi
            protocols like{" "}
            <Link
              href="https://baofinance.io"
              className="font-bold text-[#a5bdca]  duration-150 "
              target="_blank"
            >
              BAO Finance
            </Link>{" "}
            and{" "}
            <Link
              href="https://bloom.garden"
              className="font-bold text-[#a5bdca] duration-150 "
              target="_blank"
            >
              Blueberry Foundation
            </Link>
            - designing, developing, and securing smart contracts and front-end
            infrastructure. In my free time I&apos;ve also written{" "}
            <Link
              href="https://mirror.xyz/haruxe.eth"
              className="font-bold text-[#a5bdca] duration-150 "
              target="_blank"
            >
              articles
            </Link>
            , been a guest on a{" "}
            <Link
              href="https://www.youtube.com/watch?v=20znoiLt2ds"
              className="font-bold text-[#a5bdca] duration-150 "
              target="_blank"
            >
              podcast
            </Link>
            , and built tools for NFT communities like{" "}
            <Link
              href="https://kaijukingzlog.vercel.app/"
              className="font-bold text-[#a5bdca] duration-150 "
              target="_blank"
            >
              Kaiju Kingz
            </Link>
            .
            <br /> <br />
            When I&apos;m not building, I&apos;m usually playing video games, at
            the gym, or hanging out with my dog.
          </p>
        </motion.div>
      </div> */}
      <div className="space-y-2 w-full z-30 ">
        <div className="flex space-x-5 place-content-start place-items-end">
          <div className="relative w-[100px] h-[80px]">
            <Image
              src="/images/kirbycook.gif"
              quality={100}
              fill
              alt="banner"
            />
          </div>
          <h1 className="z-30 text-left mr-auto font-bold font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase decoration-1 duration-150">
            EXPERIENCE
          </h1>
        </div>
        <div className="space-y-4 md:space-y-[4rem] z-30 flex flex-col place-content-center">
          <div className="flex w-full h-[1px] bg-gray-500 my-3" />
          <div className="flex place-items-center ">
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
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <div className="flex place-items-center">
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
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <div className="flex place-items-center">
            <Job
              title="blockchain Developer"
              company="Blueberry Foundation"
              date="April 2023 - Sept 2023"
              link="https://bloom.garden"
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
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <Job
            title="game development"
            company="Indie Game Developer"
            date="May 2020 - Jan 2022"
            link="https://harux.itch.io/"
            description="Actively competed in multiple game jams, honing my skills in rapid development and problem-solving under tight deadlines, while also designing, coding, and deploying games using Unity3D with C#."
            skills={["Unity", "C#", "Blender", "Photon"]}
            banner="/images/HaruxBanner.png"
          />
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
        </div>
      </div>
      <div className="w-full place-items-center place-content-center flex ">
        <DotFill className="w-10 h-10 mx-auto flex my-12" />
      </div>
      <div className="space-y-2 w-full z-30 text-right">
        <div className="flex space-x-5 place-content-start place-items-end">
          <div className="relative w-[100px] h-[80px]">
            <Image src="/images/meta.gif" quality={100} fill alt="banner" />
          </div>
          <h1 className="z-30 text-left mr-auto font-bold font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase decoration-1 duration-150">
            MY ARTICLES
          </h1>
        </div>
        <div className="space-y-4 md:space-y-[4rem] z-30 flex flex-col place-content-center">
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <Project
            title="details how the current and previous uniswap versions work"
            company="Uniswap zero to mastery"
            date="November 2022"
            link="https://mirror.xyz/haruxe.eth/q-2jXIvcXI4cPDgmQLac1L_iQ6zXgbmCtIhgCHnabc8"
            banner="/images/mirror1.png"
          />
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <div className="flex place-items-center ">
            <Project
              title="explaination of how merkle trees and proofs work and why they are useful"
              company="merkle trees and proofs"
              date="October 2022"
              link="https://mirror.xyz/haruxe.eth/Gg7UG4hctOHyteVeRX7w1Ac9m1gAoCs8uuiWx3WwVz4"
              banner="/images/mirror2.png"
            />
          </div>
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <div className="flex place-items-center">
            <Project
              title="written during the heat of sec regulations on crypto"
              company="regulation terrorism"
              date="October 2022"
              link="https://mirror.xyz/haruxe.eth/UUkAX6QLPzippSJstT6f5QOWYSe1SLbaEvZxygPIh50"
              banner="/images/mirror3.png"
              end
            />
          </div>
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <div className="flex place-items-center">
            <Project
              title="tips and tricks to optimize solidity contracts"
              company="solidity gas optimizations"
              date="Sept 2022"
              link="https://mirror.xyz/haruxe.eth/DW5verFv8KsYOBC0SxqWORYry17kPdeS94JqOVkgxAA"
              banner="/images/mirror4.png"
              end
            />
          </div>

          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
        </div>
      </div>
      <div className="w-full place-items-center place-content-center flex ">
        <DotFill className="w-10 h-10 mx-auto flex my-12" />
      </div>
      <div className="space-y-2 w-full z-30 text-right">
        <div className="flex space-x-5 place-content-start place-items-end">
          <div className="relative w-[100px] h-[80px]">
            <Image
              src="/images/kirbyjump.gif"
              quality={100}
              fill
              alt="banner"
            />
          </div>
          <h1 className="z-30 text-left mr-auto font-bold font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase decoration-1 duration-150">
            PROJECTS
          </h1>
        </div>
        <div className="space-y-4 md:space-y-[4rem] z-30 flex flex-col place-content-center">
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <Project
            title="bug bounty and auditing security collective"
            company="koroksec"
            date="July 2023"
            link="https://koroksec.xyz"
            skills={["Immunefi", "foundry", "brownie", "exploits"]}
            banner="/images/koroksec.png"
          />
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <div className="flex place-items-center ">
            <Project
              title="Unity game I built in a week for a game-jam competition."
              company="hardbreach"
              date="January 2022"
              link="https://harux.itch.io/hardbreach"
              skills={["unity", "c#", "blender", "photoshop", "figma"]}
              banner="/images/hardbreach.png"
            />
          </div>
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <div className="flex place-items-center">
            <Project
              title="Webapp built for the KaijuKingz community to monitor value."
              company="kaiju extractions"
              date="June 2022"
              link="https://kaijukingzlog.vercel.app/"
              skills={["react", "Tailwindcss", "GraphQL", "ethers"]}
              banner="/images/KaijuLogs.png"
              end
            />
          </div>
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <div className="flex place-items-center">
            <Project
              title="Guest on the Immunefi podcast to discuss merkle trees and proofs"
              company="Immunefi podcast"
              date="November 2022"
              link="https://www.youtube.com/watch?v=20znoiLt2ds"
              banner="/images/immunefi.png"
              end
            />
          </div>

          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
        </div>
      </div>
      <div className="w-full place-items-center place-content-center flex ">
        <DotFill className="w-10 h-10 mx-auto flex my-12" />
      </div>
      <div className="space-y-2 w-full z-30 text-right">
        <div className="flex space-x-5 place-content-start place-items-end">
          <div className="relative w-[80px] h-[100px]">
            <Image src="/images/kirbyrun.gif" quality={100} fill alt="banner" />
          </div>
          <h1 className="z-30 text-left mr-auto font-bold font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase decoration-1 duration-150">
            CONTACT
          </h1>
        </div>
        <div className="space-y-4 md:space-y-[4rem] z-30 flex flex-col place-content-center">
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <div className="flex place-items-center z-30">
            <h1
              className="font-bold text-xl leading-relaxed lowercase font-major-mono-display "
              id="contact"
            >
              I&apos;m always open to new opportunities and connections. Feel
              free to reach out to me at{" "}
              <Link
                href="mailto:haruxe@proton.me"
                className="font-bold text-purple-300 duration-150"
                target="_blank"
              >
                haruxe@proton.me
              </Link>{" "}
              or DM me on{" "}
              <Link
                href="https://twitter.com/haruxeETH"
                className="font-bold text-purple-300 duration-150"
                target="_blank"
              >
                Twitter
              </Link>
              .
            </h1>
          </div>
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
        </div>
      </div>
      <div className="w-full place-items-center place-content-center flex ">
        <DotFill className="w-10 h-10 mx-auto flex my-12" />
      </div>
      <div className="space-y-2 w-full z-30 text-right">
        <div className="flex space-x-5 place-content-start place-items-end">
          <div className="relative w-[100px] h-[80px]">
            <Image
              src="/images/kirbyfire.gif"
              quality={100}
              fill
              alt="banner"
            />
          </div>
          <h1 className="z-30 text-left mr-auto font-bold font-dm-serif-display 2xl:text-[3rem] md:text-[2rem] text-[8vw] uppercase decoration-1 duration-150">
            CERTIFICATIONS
          </h1>
        </div>
        <div className="space-y-4 md:space-y-[4rem] z-30 flex flex-col place-content-center">
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <Project
            title="certified associate programmer"
            company="unity"
            date="December 2021"
            link="https://www.credly.com/badges/392a6e11-235e-4efd-8d45-594036528fee"
            banner="/images/unity.png"
          />
          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
          <div className="flex place-items-center ">
            <Project
              title="ISTQB Advanced Tester"
              company="ASTQB"
              date="April 2022"
              link="https://atsqa.org/certified-testers/profile/4c580dcca1fc45b0ad87bcb9df7f3a6b"
              banner="/images/astqb.png"
            />
          </div>

          <div className="flex w-full h-[1px] bg-gray-500 my-1 md:my-3" />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
