import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Home: NextPage = () => {
  interface JobProps {
    title: string;
    company?: string;
    date: string;
    description: string;
    link: string;
    skills?: string[];
    type?: string;
    banner?: string;
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
  }) => {
    return (
      <Link
        className="p-5 duration-150 flex flex-col place-items-center space-y-5 w-1/2"
        href={link}
        target="_blank"
      >
        <div className="flex flex-col place-items-start mr-auto leading-none">
          <h1 className="font-bold font-tusker text-[7rem] uppercase">
            {company}
          </h1>
          <h1 className="font-bold text-xl uppercase">
            {title}
            {type && " · " + type}
          </h1>
        </div>
        <div>
          <p className="text-zinc-300 text-lg">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {skills &&
              skills.map((skill) => (
                <div
                  key={skill}
                  className="px-5 py-3 text-lg font-bold rounded-full outline outline-1 uppercase"
                >
                  {skill}
                </div>
              ))}
          </div>
        </div>
      </Link>
    );
  };

  const text = "RESEARCHER";
  const [displayedLetters, setDisplayedLetters] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      text.split("").forEach((char, idx) => {
        setTimeout(() => {
          setDisplayedLetters((prev) => [...prev, char]);
        }, 100 * idx);
      });
    }
  }, [isMounted]);

  return (
    <motion.div
      className="space-y-12 md:px-6 px-4"
      // initial={{ opacity: 0, scale: 1.05 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 1 }}
    >
      <Head>
        <title>Haruxe</title>
        <meta name="description" content="Home of Haruxe's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex py-[5rem] h-screen ">
        <motion.div
          className="absolute right-[10%] top-[15%]"
          animate={{ y: 0 }}
          initial={{ y: -2000 }}
          transition={{ duration: 5, type: "spring" }}
        >
          <Image
            src="/images/kirbychute.gif"
            width={400}
            height={400}
            alt="kirby"
          />
        </motion.div>
        <motion.div
          className=" flex flex-col max-w-[50%]"
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ type: "tween" }}
        >
          <p className="text-[15rem] font-bold font-tusker leading-[15.5rem] align-top p-10 flex flex-col">
            <span className="text-2xl font-major-mono-display font-black mb-3">
              security
            </span>{" "}
            <br />
            <span>
              {displayedLetters.map((char, idx) => (
                <span
                  key={idx}
                  className="inline-block transform transition-all duration-500 opacity-0" // Initial state: moved down by 2rem (8 * 0.25rem) and fully transparent
                  style={{
                    transitionDelay: `${idx * 0.5}s`,
                    opacity: 1,
                    transform: "translateY(0)",
                  }}
                >
                  {char}
                </span>
              ))}
              <span className="text-4xl font-dm-serif-display font-black ml-2">
                &
              </span>
            </span>
            <br />
            <motion.span
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              DEVELOPER.
            </motion.span>
            <motion.span
              className="text-3xl font-major-mono-display font-black ml-auto"
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              that&apos;s me.
            </motion.span>{" "}
          </p>

          {/* <p className="text-zinc-400 font-black text-xl font-major-mono-display">
            I build things on Ethereum, with an emphasis on security and
            reliability.
          </p> */}
        </motion.div>
        <div className="mt-auto place-items-center absolute right-0 bottom-10 place-content-between flex">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <p className="leading-relaxed text-lg mt-auto font-mono space-y-12 p-10 mr-auto max-w-[50%]">
              Back in 2019, I started my journey in programming. I began
              tinkering with game development, making{" "}
              <Link
                href="https://harux.itch.io/"
                className="font-bold text-[#a5bdca] duration-150"
                target="_blank"
              >
                independent games
              </Link>{" "}
              with Unity and C#. Eventually I was enthralled by the world of
              blockchain technology and the potential it has to change the
              world.
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
              - designing, developing, and securing smart contracts and
              front-end infrastructure. In my free time I&apos;ve also written{" "}
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
              When I&apos;m not building, I&apos;m usually playing video games,
              at the gym, or hanging out with my dog.
            </p>
          </motion.div>
        </div>
      </div>
      <div className="space-y-5 w-full md:ml-auto">
        <div className="space-y-8 flex flex-col">
          <Job
            title="Developer and Security Researcher"
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
          <Job
            title="Developer"
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
          />
          <Job
            title="Independent Game Developer"
            company="game development"
            date="May 2020 - Jan 2022"
            link="https://harux.itch.io/"
            description="Actively competed in multiple game jams, honing my skills in rapid development and problem-solving under tight deadlines, while also designing, coding, and deploying games using Unity3D with C#."
            skills={["Unity", "C#", "Blender", "Photon"]}
            banner="/images/HaruxBanner.png"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
