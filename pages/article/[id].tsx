import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../../components/ui/Button";
import Section from "../../components/ui/Section";
import Link from "next/link";
import { ArrowLeft } from "styled-icons/bootstrap";
import SectionTitle from "../../components/ui/SectionTitle";

// Define a type for article data
interface ArticleData {
  title: string;
  platform: string;
  date: string;
  link: string;
  description: string;
  banner: string;
  content: string[];
}

// This would come from your data source in a real app
const articlesData: Record<string, ArticleData> = {
  "uniswap-zero-to-mastery": {
    title: "Uniswap Zero to Mastery",
    platform: "Mirror",
    date: "November 2022",
    link: "https://mirror.xyz/haruxe.eth/q-2jXIvcXI4cPDgmQLac1L_iQ6zXgbmCtIhgCHnabc8",
    description:
      "A comprehensive guide that details how the current and previous Uniswap versions work. This article breaks down the complex mechanics of Uniswap's automated market maker system, explaining the mathematics behind it and how it has evolved across different versions.",
    banner: "/images/mirror1.png",
    content: [
      "Uniswap is one of the most important protocols in DeFi, pioneering the Automated Market Maker (AMM) model that has become a standard across the industry.",
      "This article explores the evolution of Uniswap from its initial version to the current implementation, explaining the key improvements and innovations along the way.",
      "Understanding how Uniswap works is essential for anyone looking to build on or interact with DeFi protocols.",
    ],
  },
  "merkle-trees-and-proofs": {
    title: "Merkle Trees and Proofs",
    platform: "Mirror",
    date: "October 2022",
    link: "https://mirror.xyz/haruxe.eth/Gg7UG4hctOHyteVeRX7w1Ac9m1gAoCs8uuiWx3WwVz4",
    description:
      "An explanation of how merkle trees and proofs work and why they are useful in blockchain applications. This article covers the fundamental concepts behind merkle trees, how they enable efficient verification of data integrity, and their practical applications in various blockchain protocols.",
    banner: "/images/mirror2.png",
    content: [
      "Merkle trees are a fundamental data structure in blockchain technology, enabling efficient and secure verification of data.",
      "This article explains how merkle trees work, how proofs are generated and verified, and why they're so important for scaling blockchain applications.",
      "Practical examples demonstrate how merkle proofs are used in real-world applications like airdrops, token claims, and layer-2 solutions.",
    ],
  },
  "regulation-terrorism": {
    title: "Regulation Terrorism",
    platform: "Mirror",
    date: "October 2022",
    link: "https://mirror.xyz/haruxe.eth/UUkAX6QLPzippSJstT6f5QOWYSe1SLbaEvZxygPIh50",
    description:
      "An opinion piece written during the heat of SEC regulations on crypto, discussing the impact of regulatory uncertainty on innovation and development in the blockchain space.",
    banner: "/images/mirror3.png",
    content: [
      "This article examines the challenges posed by unclear regulatory frameworks in the cryptocurrency space.",
      "It discusses how regulatory uncertainty can stifle innovation and create barriers for legitimate projects.",
      "The piece advocates for balanced regulation that protects users while allowing the technology to flourish.",
    ],
  },
  "solidity-gas-optimizations": {
    title: "Solidity Gas Optimizations",
    platform: "Mirror",
    date: "September 2022",
    link: "https://mirror.xyz/haruxe.eth/DW5verFv8KsYOBC0SxqWORYry17kPdeS94JqOVkgxAA",
    description:
      "A technical guide providing tips and tricks to optimize Solidity contracts for gas efficiency. This article covers various techniques for reducing gas costs in smart contract development, from simple coding practices to advanced optimization strategies.",
    banner: "/images/mirror4.png",
    content: [
      "Gas optimization is crucial for making Ethereum smart contracts more efficient and cost-effective.",
      "This article provides practical techniques for reducing gas consumption in Solidity code.",
      "Topics covered include storage optimization, loop optimization, and efficient data structures.",
    ],
  },
};

const ArticleDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const article = id && typeof id === "string" ? articlesData[id] : null;

  // If article not found, redirect to 404 or home
  useEffect(() => {
    if (id && !article && typeof id === "string") {
      router.push("/404");
    }
  }, [id, article, router]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 border-t-4 border-primary rounded-full animate-spin mb-4"></div>
          <p className="text-foreground/70">Loading article details...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{article.title} | Haruxe</title>
        <meta name="description" content={article.description} />
      </Head>

      <div className="min-h-screen">
        {/* Compact Header with Social Media Profile Style */}
        <div className="relative bg-[#050505] pt-16 pb-8">
          <div className="absolute inset-0 opacity-30">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft
                size={20}
                className="mr-2 group-hover:-translate-x-1 transition-transform duration-300"
              />
              <span className="uppercase tracking-wider text-sm">
                Back to Articles
              </span>
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Profile Image */}
              <motion.div
                className="w-full md:w-1/3 aspect-square relative rounded-lg overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={article.banner}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm">
                    {article.date}
                  </span>
                </div>
              </motion.div>

              {/* Profile Info */}
              <motion.div
                className="w-full md:w-2/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  {article.title}
                </h1>
                <p className="text-xl text-white/80 mb-6">
                  Published on {article.platform}
                </p>

                <Button href={article.link} external>
                  Read Full Article
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content Section with Infinite Scroll Title */}
        <Section spacing="large">
          <SectionTitle title="Article Details" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6">Article Summary</h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                  {article.description}
                </p>

                <div className="mt-12 space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Key Points</h3>
                  {article.content.map((paragraph: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <span className="text-primary text-xl mr-4">•</span>
                      <p className="text-foreground/80 text-lg">{paragraph}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                className="sticky top-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-[#0A0A0A] p-8 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-6 inline-block relative">
                    Article Details
                    <span className="absolute -bottom-2 left-0 w-1/3 h-0.5 bg-primary/70"></span>
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="text-foreground/60 text-sm uppercase tracking-wider mb-1">
                        DATE
                      </p>
                      <p className="text-foreground font-medium">
                        {article.date}
                      </p>
                    </div>

                    <div>
                      <p className="text-foreground/60 text-sm uppercase tracking-wider mb-1">
                        PLATFORM
                      </p>
                      <p className="text-foreground font-medium">
                        {article.platform}
                      </p>
                    </div>
                  </div>

                  <Button href={article.link} external className="w-full">
                    Read Full Article
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Related Articles Section */}
        <Section spacing="large" className="bg-[#050505]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              More Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(articlesData)
                .filter(([key]) => key !== id)
                .slice(0, 3)
                .map(([key, relatedArticle]) => (
                  <motion.div
                    key={key}
                    className="bg-[#0A0A0A] rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedArticle.banner}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-xs">
                          {relatedArticle.date}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-foreground/70 mb-4 line-clamp-2">
                        {relatedArticle.platform}
                      </p>
                      <Link
                        href={`/article/${key}`}
                        className="inline-flex items-center text-primary group-hover:text-primary/80"
                      >
                        <span className="mr-2">View Details</span>
                        <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </Section>
      </div>
    </>
  );
};

export default ArticleDetail;
