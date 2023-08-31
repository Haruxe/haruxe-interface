import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { motion } from "framer-motion";
import { useState } from "react";
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
    const [selected, setSelected] = useState(false);

    return selected ? (
      <Link
        className="p-5 w-[300px] flex outline-1 hover:outline-zinc-900 outline outline-transparent rounded-lg duration-150 hover:bg-zinc-950 shadow-2xl"
        href={link}
        target="_blank"
      >
        <div>
          <div className="mb-3">
            <h1 className="text-sm w-full">{date}</h1>
            <h1 className="font-bold">
              {title}
              {type && " · " + type}
            </h1>
            <h1 className="text-zinc-500 font-bold">{company}</h1>
          </div>
          <p className="text-zinc-300 text-sm">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {skills &&
              skills.map((skill) => (
                <div
                  key=""
                  className="px-3 py-1 text-sm font-bold rounded-md bg-[#E4020B]"
                >
                  {skill}
                </div>
              ))}
          </div>
        </div>
      </Link>
    ) : (
      <>
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button>
                <button className="w-[220px] h-[120px] relative">
                  <Image src={banner} fill alt="bao" className="rounded-md" />
                </button>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 -top-1/2 z-10 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <Link
                    className="p-5 w-[300px] flex outline-1 hover:outline-[#252525] outline outline-transparent rounded-lg duration-150 bg-[#1f1f1f] shadow-2xl"
                    href={link}
                    target="_blank"
                  >
                    <div>
                      <div className="mb-3">
                        <h1 className="text-sm w-full">{date}</h1>
                        <h1 className="font-bold">
                          {title}
                          {type && " · " + type}
                        </h1>
                        <h1 className="text-zinc-500 font-bold">{company}</h1>
                      </div>
                      <p className="text-zinc-300 text-sm">{description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {skills &&
                          skills.map((skill) => (
                            <div
                              key=""
                              className="px-3 py-1 text-sm font-bold rounded-md bg-[#E4020B]"
                            >
                              {skill}
                            </div>
                          ))}
                      </div>
                    </div>
                  </Link>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </>
    );
  };

  return (
    <motion.div
      className="space-y-12"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Head>
        <title>Haruxe</title>
        <meta name="description" content="Home of Haruxe's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:space-x-5 flex md:flex-row flex-col place-content-between">
        <div className="mt-12 space-y-3 md:w-[40%] p-5 md:p-0">
          <div>
            <h1 className="text-5xl leading-none font-black">Josh Francisco</h1>
            <h1 className="text-2xl leading-none mt-2 text-zinc-300 font-black">
              AKA Haruxe
            </h1>
          </div>
          <p className="text-lg text-zinc-200 font-bold">
            Developer and Security Researcher
          </p>
          <p className="text-zinc-400 font-bold">
            I build things on Ethereum, with an emphasis on security and
            reliability.
          </p>
        </div>
        <div className="mt-12 space-y-12 md:w-[50%]">
          <p className="text-zinc-400 leading-relaxed p-5">
            Back in 2019, I started my journey in programming. I started with
            game development, making{" "}
            <Link
              href="https://harux.itch.io/"
              className="font-bold text-white duration-150 hover:text-[#E4020B]"
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
              className="font-bold text-white duration-150 hover:text-[#E4020B]"
              target="_blank"
            >
              BAO Finance
            </Link>{" "}
            and{" "}
            <Link
              href="https://bloom.garden"
              className="font-bold text-white duration-150 hover:text-[#E4020B]"
              target="_blank"
            >
              Blueberry Foundation
            </Link>
            - designing, developing, and securing smart contracts and front-end
            infrastructure. In my free time I&apos;ve also written{" "}
            <Link
              href="https://mirror.xyz/haruxe.eth"
              className="font-bold text-white duration-150 hover:text-[#E4020B]"
              target="_blank"
            >
              articles
            </Link>
            , been a guest on a{" "}
            <Link
              href="https://www.youtube.com/watch?v=20znoiLt2ds"
              className="font-bold text-white duration-150 hover:text-[#E4020B]"
              target="_blank"
            >
              podcast
            </Link>
            , and built tools for NFT communities like{" "}
            <Link
              href="https://kaijukingzlog.vercel.app/"
              className="font-bold text-white duration-150 hover:text-[#E4020B]"
              target="_blank"
            >
              Kaiju Kingz
            </Link>
            .
            <br /> <br />
            When I&apos;m not building, I&apos;m usually playing video games, at
            the gym, or hanging out with my dog.
          </p>
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold cursor-default">Work Experience</h1>
        <div className="space-x-2 flex flex-wrap">
          <Job
            title="Developer and Security Researcher"
            company="BAO Finance"
            date="Nov 2022 - Present"
            link="https://baofinance.io"
            description="Continuously ensure the security of multiple Ethereum smart contracts on our platform. Regularly handle and address Immunefi reports, lead incident response efforts, and innovate on the design of front-end components to improve user experience and overall platform usability."
            skills={[
              "React",
              "Tailwind",
              "Solidity",
              "Foundry",
              "TheGraph",
              "Chainlink",
              "Tally",
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
              "Tailwind",
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
            company="Haruxe"
            date="May 2020 - Jan 2022"
            link="https://harux.itch.io/"
            description="Actively competed in multiple game jams, honing my skills in rapid development and problem-solving under tight deadlines, while also designing, coding, and deploying games using Unity3D with C#."
            skills={["Unity", "C#", "Blender", "Photon"]}
            banner="/images/HaruxBanner.png"
          />
        </div>
      </div>
      <div className="space-y-5">
        <h1 className="text-2xl font-bold cursor-default">Projects</h1>
        <div className="space-x-2 flex flex-wrap">
          <Job
            title="Developer and Security Researcher"
            company="BAO Finance"
            date="Nov 2022 - Present"
            link="https://baofinance.io"
            description="Continuously ensure the security of multiple Ethereum smart contracts on our platform. Regularly handle and address Immunefi reports, lead incident response efforts, and innovate on the design of front-end components to improve user experience and overall platform usability."
            skills={[
              "React",
              "Tailwind",
              "Solidity",
              "Foundry",
              "TheGraph",
              "Chainlink",
              "Tally",
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
              "Tailwind",
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
            company="Haruxe"
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
