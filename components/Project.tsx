import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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
  const [randomBooleans, setRandomBooleans] = useState<boolean[]>([]);

  useMemo(() => {
    if (skills) {
      const randomValues = skills.map(() => Math.random() < 0.5);
      setRandomBooleans(randomValues);
    }
  }, [skills]);

  return (
    <motion.section className="duration-150 flex flex-wrap gap-5 place-content-start z-10 w-full">
      <div className="h-[6rem] w-[10.5rem] flex-none relative place-items-center my-auto mr-5">
        <Image src={banner} fill alt="banner" className="rounded-sm" />
      </div>
      <div className="flex-col md:flex-row flex place-content-between">
        <div className="mb-auto ">
          <div className="flex flex-col text-left place-items-start place-content-center mr-auto leading-none mb-auto">
            <p className=" font-major-mono-display lowercase">{date && date}</p>
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
    </motion.section>
  );
};

export default Project;
