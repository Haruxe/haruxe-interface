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
import { Star } from "styled-icons/bootstrap";
import { StarAndCrescent } from "styled-icons/fa-solid";

const Home: NextPage = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.5, 1], [1, 1, 0, 0]);

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
        className="p-5 duration-150 flex flex-col place-items-center space-y-5 mr-auto"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 1.4, type: "spring" }}
      >
        <div className="flex flex-col place-items-start mr-auto leading-none">
          <Link
            className="font-bold font-tusker 2xl:text-[7rem] text-[11vw] uppercase hover:text-purple-200 hover:translate-x-2 translate-x-0 duration-150"
            href={link}
            target="_blank"
          >
            {company}
          </Link>
          <h1 className="font-bold 2xl:text-lg text-[2vw] uppercase">
            {title}
            {type && " · " + type}
          </h1>
        </div>
        <div>
          <p className="text-zinc-300 2xl:text-lg text-[2.5vw] md:text-[2vw]">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-3 font-dm-serif-display">
            {skills &&
              skills.map((skill, index) => {
                return (
                  <div
                    key={skill}
                    className={
                      randomBooleans[index]
                        ? "2xl:px-5 2xl:py-3 px-[3vw] py-[2vw] 2xl:text-lg text-[2vw] font-bold rounded-full outline outline-1 uppercase"
                        : "2xl:px-5 2xl:py-3 px-[3vw] py-[2vw] 2xl:text-lg text-[2vw] font-bold rounded-full outline outline-1 uppercase bg-[#fdffe4] text-black"
                    }
                  >
                    {skill}
                  </div>
                );
              })}
          </div>
        </div>
      </motion.div>
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
        }, 130 * idx);
      });
    }
  }, [isMounted]);

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOffsetY = scrollY * 0.24; // Adjust the multiplier to increase or decrease the effect
      controls.start({ y: newOffsetY });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div className="space-y-12 pb-[8rem] px-5">
      <Head>
        <title>Haruxe</title>
        <meta name="description" content="Home of Haruxe's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex py-[5rem] h-screen ">
        <motion.div
          className="absolute right-[10%] top-[25%]"
          animate={{ y: 0 }}
          initial={{ y: -1000 }}
          transition={{ duration: 5, type: "spring" }}
        >
          <motion.div
            initial={{ y: 0 }}
            animate={controls}
            className="2xl:w-[450px] 2xl:h-[450px] w-[40vw] h-[40vw] relative"
          >
            <Image src="/images/kirbychute.gif" fill alt="kirby" />
          </motion.div>
        </motion.div>
        <motion.div
          className="flex flex-col  my-auto"
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          transition={{ type: "tween" }}
        >
          <p className="2xl:text-[15rem] text-[18vw] font-bold font-tusker leading-none py-10 align-top flex flex-col mb-auto rounded-3xl">
            <span className="2xl:text-2xl text-[2vw] font-major-mono-display font-black 2xl:mb-3 mb-[2vw] z-10">
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
              <span className="2xl:text-4xl text-[3vw] font-dm-serif-display font-black ml-2">
                &
              </span>
            </span>
            <motion.span
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              DEVELOPER.
            </motion.span>
            <motion.span
              className="2xl:text-2xl text-[2vw] font-major-mono-display font-black ml-auto"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 200 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              *BUT most call me haruxe.
            </motion.span>{" "}
          </p>

          {/* <p className="text-zinc-400 font-black text-xl font-major-mono-display">
            I build things on Ethereum, with an emphasis on security and
            reliability.
          </p> */}
        </motion.div>
        {/* <div className="mt-auto place-items-center absolute right-0 bottom-10 place-content-between flex">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            <p className="text-lg mt-auto font-mono space-y-12 p-10 mr-auto w-1/2">
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
        </div> */}
        {scrollYProgress.get() <= 0 && (
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex place-items-center flex-col absolute bottom-5 left-0 right-0 space-y-3 animate-bounce place-content-center"
            style={{ opacity }}
          >
            <h1 className="text-center font-dm-serif-display tracking-wider opacity-80 text-xl font-black">
              LEARN MORE
            </h1>
            <ArrowDownThick className=" w-10 h-10" />
          </motion.div>
        )}
      </div>
      <div className="space-y-5 w-full md:ml-auto">
        <div className="space-y-12 flex flex-col place-content-center">
          <div className="flex place-items-center ">
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
          </div>

          <div className="flex place-items-center">
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
              end
            />
          </div>
          <div className="flex place-items-center ">
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
      </div>
    </motion.div>
  );
};

export default Home;
