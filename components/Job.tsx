import React, { useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
  const randomBooleans = useMemo(() => {
    return skills ? skills.map(() => Math.random() < 0.5) : [];
  }, [skills]);

  return (
    <motion.div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
      <div className="md:w-1/4 lg:w-1/5">
        <h1 className="font-bold text-sm font-major-mono-display">{date}</h1>
      </div>
      <div className="flex-1 max-w-3xl">
        <div className="flex flex-col place-items-start leading-none mb-4">
          <Link className="group" href={link} target="_blank">
            <h1 className="font-bold font-dm-serif-display text-2xl md:text-3xl lg:text-4xl uppercase group-hover:underline duration-150">
              {company}
            </h1>
            <h2 className="font-bold text-base md:text-lg uppercase mt-2">
              {title}
              {type && " · " + type}
            </h2>
          </Link>
        </div>
        <div className="flex flex-wrap gap-2 mt-3 font-mono">
          {skills?.map((skill, index) => (
            <div
              key={skill}
              className={`py-1 px-3 text-sm md:text-base font-bold outline outline-1 uppercase ${
                randomBooleans[index] ? "" : "bg-[#fdffe4] text-black"
              }`}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Job;
