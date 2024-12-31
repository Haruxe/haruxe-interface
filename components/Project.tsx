import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  company?: string;
  date: string;
  link: string;
  skills?: string[];
  banner?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  company,
  date,
  link = "/",
  skills,
  banner = "/",
}) => {
  return (
    <motion.div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
      <div className="md:w-1/4 lg:w-1/5">
        <h1 className="font-bold text-sm font-major-mono-display">{date}</h1>
      </div>
      <div className="flex-1 max-w-3xl">
        <div className="flex flex-col place-items-start leading-none mb-4">
          <Link
            className="flex items-center gap-6 group w-full"
            href={link}
            target="_blank"
          >
            <div className="relative h-20 md:h-28 aspect-[4/3] shrink-0">
              <Image
                src={banner}
                fill
                alt={company || "project banner"}
                className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold font-dm-serif-display text-2xl md:text-3xl lg:text-4xl uppercase group-hover:underline duration-150">
                {company}
              </h1>
              <h2 className="font-bold text-base md:text-lg text-zinc-300 font-mono">
                {title}
              </h2>
            </div>
          </Link>
        </div>
        {skills && (
          <div className="flex flex-wrap gap-2 mt-3 font-mono">
            {skills.map((skill) => (
              <div
                key={skill}
                className="py-1 px-3 text-sm md:text-base font-bold outline outline-1 uppercase"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Project;
