import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/home/Hero";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import JobCard from "../components/jobs/JobCard";
import ProjectCard from "../components/projects/ProjectCard";
import ArticleCard from "../components/articles/ArticleCard";
import Button from "../components/ui/Button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Haruxe | Web3 Developer & Researcher</title>
        <meta
          name="description"
          content="Portfolio of Josh Francisco (Haruxe) - Web3 Developer and Security Researcher"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <main>
          <Hero />

          {/* Experience Section */}
          <Section id="experience" speed={0.2} spacing="normal">
            <SectionTitle title="Experience" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <JobCard
                title="Blockchain Developer & Security Researcher"
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
                id="bao-finance"
              />

              <JobCard
                title="Blockchain Developer"
                company="WEB3SG"
                date="May 2023 - Present"
                link="https://web3sg.net/"
                description="Handle deployments for multiple projects, while also developing front-end components and smart contracts for various DeFi protocols."
                skills={["NextJS", "Tailwindcss", "Solidity", "rainbowkit"]}
                type="Contract"
                banner="/images/BlueberryBanner.png"
                id="web3sg"
              />

              <JobCard
                title="Blockchain Developer"
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
                id="blueberry-foundation"
              />

              <JobCard
                title="Game Development"
                company="Indie Game Developer"
                date="May 2020 - Jan 2022"
                link="https://harux.itch.io/"
                description="Actively competed in multiple game jams, honing my skills in rapid development and problem-solving under tight deadlines, while also designing, coding, and deploying games using Unity3D with C#."
                skills={["Unity", "C#", "Blender", "Photon"]}
                banner="/images/HaruxBanner.png"
                id="indie-game-developer"
              />
            </div>
          </Section>

          {/* Projects Section */}
          <Section
            id="projects"
            className="bg-black/30"
            speed={0.1}
            spacing="small"
          >
            <SectionTitle title="Projects" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <ProjectCard
                title="NFT/Staking project built for Web3SG"
                company="MindPalace"
                date="January 2024"
                link="https://mindpalace.dev"
                banner="/images/mindpalace.png"
                id="mindpalace"
              />

              <ProjectCard
                title="Bug bounty and auditing security collective"
                company="Koroksec"
                date="July 2023"
                link="https://koroksec.xyz"
                skills={["Immunefi", "foundry", "brownie", "exploits"]}
                banner="/images/koroksec.png"
                id="koroksec"
              />

              <ProjectCard
                title="Unity game I built in a week for a game-jam competition"
                company="HardBreach"
                date="January 2022"
                link="https://harux.itch.io/hardbreach"
                skills={["Unity", "C#", "Blender", "Photoshop", "Figma"]}
                banner="/images/hardbreach.png"
                id="hardbreach"
              />

              <ProjectCard
                title="Webapp built for the KaijuKingz community to monitor value"
                company="Kaiju Extractions"
                date="June 2022"
                link="https://kaijukingzlog.vercel.app/"
                skills={["React", "Tailwindcss", "GraphQL", "ethers"]}
                banner="/images/KaijuLogs.png"
                id="kaiju-extractions"
              />

              <ProjectCard
                title="Guest on the Immunefi podcast to discuss merkle trees and proofs"
                company="Immunefi Podcast"
                date="November 2022"
                link="https://www.youtube.com/watch?v=20znoiLt2ds"
                banner="/images/immunefi.png"
                id="immunefi-podcast"
              />
            </div>
          </Section>

          {/* Articles Section */}
          <Section id="articles" speed={0.25} spacing="normal">
            <SectionTitle title="Articles" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <ArticleCard
                title="Uniswap Zero to Mastery"
                platform="Mirror"
                date="November 2022"
                link="https://mirror.xyz/haruxe.eth/q-2jXIvcXI4cPDgmQLac1L_iQ6zXgbmCtIhgCHnabc8"
                banner="/images/mirror1.png"
                id="uniswap-zero-to-mastery"
              />

              <ArticleCard
                title="Merkle Trees and Proofs"
                platform="Mirror"
                date="October 2022"
                link="https://mirror.xyz/haruxe.eth/Gg7UG4hctOHyteVeRX7w1Ac9m1gAoCs8uuiWx3WwVz4"
                banner="/images/mirror2.png"
                id="merkle-trees-and-proofs"
              />

              <ArticleCard
                title="Regulation Terrorism"
                platform="Mirror"
                date="October 2022"
                link="https://mirror.xyz/haruxe.eth/UUkAX6QLPzippSJstT6f5QOWYSe1SLbaEvZxygPIh50"
                banner="/images/mirror3.png"
                id="regulation-terrorism"
              />

              <ArticleCard
                title="Solidity Gas Optimizations"
                platform="Mirror"
                date="September 2022"
                link="https://mirror.xyz/haruxe.eth/DW5verFv8KsYOBC0SxqWORYry17kPdeS94JqOVkgxAA"
                banner="/images/mirror4.png"
                id="solidity-gas-optimizations"
              />
            </div>
          </Section>

          {/* Contact Section */}
          <Section
            id="contact"
            speed={0.3}
            spacing="normal"
            className="bg-background/30"
          >
            <div className="max-w-2xl mx-auto text-center px-4 sm:px-0">
              <SectionTitle title="Contact" />

              <p className="text-foreground/70 text-base sm:text-lg leading-relaxed mb-10 sm:mb-12 md:mb-16">
                I&apos;m always open to new opportunities and connections. Feel free to reach out!
              </p>
            </div>
          </Section>
        </main>
      </div>
    </>
  );
};

export default Home;
