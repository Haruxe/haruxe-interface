import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Globe } from "styled-icons/bootstrap";
import SectionTitle from "../../components/ui/SectionTitle";

// Define a type for job data
interface JobData {
  title: string;
  company: string;
  date: string;
  link: string;
  description: string;
  skills: string[];
  type: string;
  banner: string;
  responsibilities: string[];
  galleryCount: number;
}

// This would come from your data source in a real app
const jobsData: Record<string, JobData> = {
  "bao-finance": {
    title: "Blockchain Developer & Security Researcher",
    company: "BAO Finance",
    date: "Nov 2022 - Present",
    link: "https://baofinance.io",
    description:
      "At BAO Finance, I've taken on the critical role of ensuring the security of our Ethereum smart contracts. My work involves regular security audits, handling vulnerability reports, and leading incident response when needed. I also contribute to the front-end, creating intuitive interfaces that make complex DeFi mechanisms accessible to users.",
    skills: [
      "React",
      "Tailwindcss",
      "Solidity",
      "Foundry",
      "TheGraph",
      "Chainlink",
      "Tally.xyz",
    ],
    type: "Part-Time",
    banner: "/images/BaoBanner.png",
    responsibilities: [
      "Conduct security audits of smart contracts to identify and fix vulnerabilities",
      "Handle bug reports from Immunefi and coordinate with security researchers",
      "Lead incident response during security events",
      "Develop front-end components to improve user experience",
      "Implement new features and maintain existing codebase",
    ],
    galleryCount: 3, // Maximum number of images to check for
  },
  web3sg: {
    title: "Blockchain Developer",
    company: "WEB3SG",
    date: "May 2023 - Present",
    link: "https://web3sg.net/",
    description:
      "Working with WEB3SG has given me the opportunity to deploy and develop for multiple projects simultaneously. I've built front-end interfaces and smart contracts for various DeFi protocols, focusing on creating seamless user experiences while maintaining the security and efficiency of the underlying code.",
    skills: ["NextJS", "Tailwindcss", "Solidity", "rainbowkit"],
    type: "Contract",
    banner: "/images/BlueberryBanner.png",
    responsibilities: [
      "Deploy and manage smart contracts for various projects",
      "Develop front-end interfaces using NextJS and Tailwind CSS",
      "Implement and integrate with DeFi protocols",
      "Collaborate with design and product teams to create intuitive user experiences",
      "Optimize contract code for gas efficiency and security",
    ],
    galleryCount: 3, // Number of images in the gallery
  },
  "blueberry-foundation": {
    title: "Blockchain Developer",
    company: "Blueberry Foundation",
    date: "April 2023 - January 2024",
    link: "https://blueberry.garden",
    description:
      "My work with Blueberry Foundation focused on developing complex tokenomics systems with an emphasis on reusability and security. I built front-end interfaces, created smart contracts, and conducted self-audits to ensure the protocol's integrity. I also served as the liaison with external auditors, translating technical findings into actionable improvements.",
    skills: [
      "NextJS",
      "Tailwindcss",
      "Solidity",
      "Foundry",
      "GraphQL",
      "wagmi",
    ],
    type: "Contract",
    banner: "/images/BlueberryBanner.png",
    responsibilities: [
      "Develop and implement complex tokenomics systems",
      "Create reusable smart contract components",
      "Conduct self-audits of protocol contracts",
      "Coordinate with external auditors to ensure security",
      "Build front-end interfaces and integrations",
    ],
    galleryCount: 3, // Number of images in the gallery
  },
  "indie-game-developer": {
    title: "Game Development",
    company: "Indie Game Developer",
    date: "May 2020 - Jan 2022",
    link: "https://harux.itch.io/",
    description:
      "As an indie game developer, I thrived in the fast-paced environment of game jams, where I learned to rapidly prototype and deliver complete games under tight deadlines. Using Unity3D and C#, I designed and developed several games from concept to completion, handling everything from gameplay mechanics to 3D modeling and UI design.",
    skills: ["Unity", "C#", "Blender", "Photon"],
    type: "Freelance",
    banner: "/images/HaruxBanner.png",
    responsibilities: [
      "Participated in game jams with tight deadlines",
      "Designed and developed games using Unity3D and C#",
      "Created 3D models and assets using Blender",
      "Implemented multiplayer functionality with Photon",
      "Published games on itch.io platform",
    ],
    galleryCount: 3, // Number of images in the gallery
  },
};

const JobDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const job = id && typeof id === "string" ? jobsData[id] : null;

  // If job not found, redirect to 404 or home
  useEffect(() => {
    if (id && !job && typeof id === "string") {
      router.push("/404");
    }
  }, [id, job, router]);

  // Check for existing images and update state
  useEffect(() => {
    if (!id || !job) return;

    const checkImages = async () => {
      setIsLoading(true);
      const validImages: string[] = [];

      // Try to load each potential image and see which ones exist
      for (let i = 1; i <= (job.galleryCount || 0); i++) {
        const imagePath = `/images/${id}/${i}.png`;

        try {
          // This is a client-side check - we'll try to fetch the image head
          const res = await fetch(imagePath, { method: "HEAD" });
          if (res.ok) {
            validImages.push(imagePath);
          }
        } catch (error) {
          console.log(`Image ${imagePath} not found`);
        }
      }

      setGalleryImages(validImages);
      setIsLoading(false);
    };

    checkImages();
  }, [id, job]);

  if (!job || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 border-t-4 border-primary rounded-full animate-spin mb-4"></div>
          <p className="text-foreground/70">Loading job details...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>
          {job.company} | {job.title} | Haruxe
        </title>
        <meta name="description" content={job.description} />
      </Head>

      <div className="min-h-screen">
        {/* Back button - fixed position */}
        <motion.div
          className="fixed top-8 left-8 z-50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors group bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <ArrowLeft
              size={18}
              className="mr-2 group-hover:-translate-x-1 transition-transform duration-300"
            />
            <span className="uppercase tracking-wider text-sm">Back</span>
          </Link>
        </motion.div>

        {/* Infinite Scrolling Title */}
        <div className="pt-32">
          <SectionTitle title={job.company} />
        </div>

        {/* Main Content - Clean and Minimal */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-5xl mx-auto">
            {/* Job Header - Left Aligned */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-3 text-left">
                {job.company}
              </h1>
              <p className="text-xl text-foreground/70 mb-5 text-left">
                {job.title}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 text-left">
                {job.skills?.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Button
                href={job.link}
                external
                className="flex items-center gap-2"
              >
                <Globe size={18} />
                <span>Visit Website</span>
              </Button>
            </motion.div>

            {/* Job Description - Left Aligned */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl leading-relaxed text-left">
                {job.description}
              </p>
            </motion.div>

            {/* Responsibilities Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-left">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map(
                  (responsibility: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary text-xl mr-3">•</span>
                      <p className="text-foreground/80 text-lg">
                        {responsibility}
                      </p>
                    </li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Gallery Section - Only shown if images exist */}
            {galleryImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-4 text-left">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative w-full rounded-md overflow-hidden"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div
                        className="relative w-full"
                        style={{ paddingBottom: "75%" }}
                      >
                        <Image
                          src={image}
                          alt={`${job.company} image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Job Details Footer */}
            <motion.div
              className="mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="mb-4 md:mb-0">
                <p className="text-foreground/60 text-xs uppercase tracking-wider mb-1">
                  DURATION
                </p>
                <p className="text-foreground font-medium">{job.date}</p>
              </div>

              <div className="mb-4 md:mb-0">
                <p className="text-foreground/60 text-xs uppercase tracking-wider mb-1">
                  POSITION
                </p>
                <p className="text-foreground font-medium">{job.title}</p>
              </div>

              <div>
                <p className="text-foreground/60 text-xs uppercase tracking-wider mb-1">
                  TYPE
                </p>
                <p className="text-foreground font-medium">
                  {job.type || "Full-Time"}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetail;
