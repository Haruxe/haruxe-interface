import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../components/ui/Button";
import Link from "next/link";
import { ArrowLeft, Globe } from "styled-icons/bootstrap";
import SectionTitle from "../../components/ui/SectionTitle";

// Define a type for project data
interface ProjectData {
  title: string;
  company: string;
  date: string;
  link: string;
  description: string;
  skills: string[];
  galleryCount: number;
}

// This would come from your data source in a real app
const projectsData: Record<string, ProjectData> = {
  mindpalace: {
    title: "NFT/Staking project built for Web3SG",
    company: "MindPalace",
    date: "January 2024",
    link: "https://mindpalace.dev",
    description:
      "An immersive NFT platform where digital art meets staking rewards. I designed this experience to blend visual appeal with functional tokenomics, creating a space where collectors can both showcase their digital assets and earn passive income through our innovative staking mechanism.",
    skills: ["NodeJS", "Solidity", "GraphQL", "Wagmi/Viem", "Ponder", "Figma"],
    galleryCount: 3, // Maximum number of images to check for
  },
  koroksec: {
    title: "Bug bounty and auditing security collective",
    company: "Koroksec",
    date: "July 2023",
    link: "https://koroksec.xyz",
    description:
      "A tight-knit collective of security researchers I helped form to hunt vulnerabilities in blockchain protocols. We've identified critical issues that could have compromised millions in user funds, working quietly behind the scenes to make Web3 safer for everyone.",
    skills: ["Immunefi", "Foundry", "Brownie", "Exploit Development"],
    galleryCount: 3, // Maximum number of images to check for
  },
  // Add more projects as needed
  hardbreach: {
    title: "Unity game I built in a week for a game-jam competition",
    company: "HardBreach",
    date: "January 2022",
    link: "https://harux.itch.io/hardbreach",
    description: "A fast-paced game developed during a game jam competition.",
    skills: ["Unity", "C#", "Blender", "Photoshop", "Figma"],
    galleryCount: 3,
  },
  "kaiju-extractions": {
    title: "Webapp built for the KaijuKingz community to monitor value",
    company: "Kaiju Extractions",
    date: "June 2022",
    link: "https://kaijukingzlog.vercel.app/",
    description: "A dashboard for the KaijuKingz NFT community.",
    skills: ["React", "Tailwindcss", "GraphQL", "ethers"],
    galleryCount: 3,
  },
  "immunefi-podcast": {
    title: "Guest on the Immunefi podcast to discuss merkle trees and proofs",
    company: "Immunefi Podcast",
    date: "November 2022",
    link: "https://www.youtube.com/watch?v=20znoiLt2ds",
    description:
      "A technical discussion about merkle trees and their applications.",
    skills: ["Security", "Cryptography", "Blockchain"],
    galleryCount: 3,
  },
};

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const project = id && typeof id === "string" ? projectsData[id] : null;

  // If project not found, redirect to 404 or home
  useEffect(() => {
    if (id && !project && typeof id === "string") {
      router.push("/404");
    }
  }, [id, project, router]);

  // Check for existing images and update state
  useEffect(() => {
    if (!id || !project) return;

    const checkImages = async () => {
      setIsLoading(true);
      const validImages: string[] = [];

      // Try to load each potential image and see which ones exist
      for (let i = 1; i <= (project.galleryCount || 0); i++) {
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
  }, [id, project]);

  if (!project || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 border-t-4 border-primary rounded-full animate-spin mb-4"></div>
          <p className="text-foreground/70">Loading project details...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.company} | Haruxe</title>
        <meta name="description" content={project.description} />
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
          <SectionTitle title={project.company} />
        </div>

        {/* Main Content - Clean and Minimal */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-5xl mx-auto">
            {/* Project Header - Left Aligned */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-3 text-left">
                {project.company}
              </h1>
              <p className="text-xl text-foreground/70 mb-5 text-left">
                {project.title}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 text-left">
                {project.skills?.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Button
                href={project.link}
                external
                className="flex items-center gap-2"
              >
                <Globe size={18} />
                <span>Visit Website</span>
              </Button>
            </motion.div>

            {/* Project Description - Left Aligned */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl leading-relaxed text-left">
                {project.description}
              </p>
            </motion.div>

            {/* Project Gallery - Only shown if images exist */}
            {galleryImages.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-left">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative w-full rounded-md overflow-hidden"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      <div
                        className="relative w-full"
                        style={{ paddingBottom: "75%" }}
                      >
                        <Image
                          src={image}
                          alt={`${project.company} image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Project Details Footer */}
            <motion.div
              className="mt-12 pt-6 border-t border-white/10 flex flex-wrap justify-between items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="mb-4 md:mb-0">
                <p className="text-foreground/60 text-xs uppercase tracking-wider mb-1">
                  LAUNCHED
                </p>
                <p className="text-foreground font-medium">{project.date}</p>
              </div>

              <div className="mb-4 md:mb-0">
                <p className="text-foreground/60 text-xs uppercase tracking-wider mb-1">
                  MY ROLE
                </p>
                <p className="text-foreground font-medium">Lead Developer</p>
              </div>

              <div>
                <p className="text-foreground/60 text-xs uppercase tracking-wider mb-1">
                  TECH STACK
                </p>
                <p className="text-foreground font-medium">
                  {project.skills?.join(", ")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
